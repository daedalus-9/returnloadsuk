const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

function loadTypeScriptModule(relativePath) {
  const source = fs.readFileSync(
    path.join(process.cwd(), relativePath),
    "utf8"
  );
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: relativePath,
  }).outputText;
  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = { exports: {} };
  const evaluate = new Function("module", "exports", "require", compiled);
  evaluate(module, module.exports, require);
  return module.exports;
}

const content = loadTypeScriptModule("src/content/freight-pages.ts");
const site = loadTypeScriptModule("src/lib/site.ts");
const groups = Object.keys(content.hubConfigs);
const errors = [];

function duplicates(values) {
  return values.filter((value, index) => values.indexOf(value) !== index);
}

for (const group of groups) {
  const groupPages = content.getPagesByGroup(group);
  if (groupPages.length === 0) {
    errors.push(`Content hub '${group}' has no pages.`);
  }
}

for (const page of content.freightPages) {
  const id = `${page.group}/${page.slug}`;
  if (page.indexable && !content.passesPublicationGate(page)) {
    errors.push(`${id} is marked indexable but fails the publication gate.`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.reviewedOn)) {
    errors.push(`${id} has an invalid reviewedOn date.`);
  }
}

const ids = content.freightPages.map((page) => `${page.group}/${page.slug}`);
for (const duplicate of new Set(duplicates(ids))) {
  errors.push(`Duplicate content route: ${duplicate}`);
}

const titles = content.freightPages.map((page) => page.metaTitle.toLowerCase());
for (const duplicate of new Set(duplicates(titles))) {
  errors.push(`Duplicate meta title: ${duplicate}`);
}

const contentRoutes = content.freightPages.map(
  (page) => `/${page.group}/${page.slug}/`
);
const hubRoutes = groups.map((group) => `/${group}/`);
const knownRoutes = new Set([
  ...site.CORE_ROUTES,
  ...hubRoutes,
  ...contentRoutes,
]);

for (const page of content.freightPages) {
  for (const href of page.related) {
    if (!href.startsWith("/") || !href.endsWith("/")) {
      errors.push(
        `${page.group}/${page.slug} has a non-canonical related path: ${href}`
      );
    } else if (!knownRoutes.has(href)) {
      errors.push(
        `${page.group}/${page.slug} links to an unknown route: ${href}`
      );
    }
  }
}

if (errors.length > 0) {
  console.error(`Content validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  const published = content.getIndexablePages();
  const summary = groups
    .map((group) => `${group}: ${content.getIndexablePages(group).length}`)
    .join(", ");
  console.log(
    `Content validation passed for ${published.length} published pages.`
  );
  console.log(summary);
}
