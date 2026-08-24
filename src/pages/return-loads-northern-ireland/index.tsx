import {
  RegionPage,
  type RegionPageData,
} from "@/components/content/RegionPage";

const northernIrelandPage = {
  regionName: "Northern Ireland",
  path: "/return-loads-northern-ireland/",
  metaTitle: "Return Loads Northern Ireland | Freight Enquiries",
  metaDescription:
    "Plan Northern Ireland return-load and road-freight enquiries with ferry, timing and documentation considerations. Capacity is checked case by case.",
  eyebrow: "Northern Ireland freight planning",
  title: "Return-load enquiries involving Northern Ireland",
  lead: "Logic Freight can review Northern Ireland freight and available-truck enquiries within its UK-wide scope. Ferry space, route, documentation, vehicle suitability and current capacity must all be checked before any movement is agreed.",
  introHeading: "The road plan and the sea crossing must work together",
  intro: [
    "A movement between Northern Ireland and Great Britain normally includes a ferry leg, so the vehicle plan cannot be assessed from road mileage alone. Sailing choice, terminal check-in, accompanied or unaccompanied operation, trailer handover and the collection or delivery window need to align before capacity is useful.",
    "Documentation can vary with the direction of travel, status and type of goods, chosen route and current government requirements. The shipper, haulier, carrier and any customs intermediary should confirm what is needed before dispatch. Submitting an enquiry lets Logic Freight review the transport requirement; it does not confirm ferry space, regulatory compliance, a truck or a return load.",
  ],
  considerations: [
    {
      title: "Ferry plan and cut-off",
      text: "Name the preferred port pair, sailing or delivery objective and whether the driver travels with the vehicle. Check-in and trailer acceptance times must fit the road schedule on both sides.",
    },
    {
      title: "Movement documentation",
      text: "Confirm the goods, origin, destination and applicable movement process with current official guidance and the carrier. Required references must be ready before the vehicle is sent to the port.",
    },
    {
      title: "Onward direction and handover",
      text: "A Belfast-area delivery, a movement towards the west, a cross-border journey or an unaccompanied trailer collection are different jobs. State who controls each handover and the next required direction.",
    },
  ],
  corridors: [
    {
      title: "Belfast and central distribution",
      text: "Belfast links port, industrial and distribution activity with the M1 and M2. Terminal, depot and final delivery positions must be distinguished because a broad Belfast label does not show the actual handover plan.",
    },
    {
      title: "M1, A1 and southern links",
      text: "The M1 and A1 connect Belfast towards Lisburn, the west and the border corridor. Any onward movement into Ireland introduces a different jurisdiction and must be described and checked explicitly.",
    },
    {
      title: "M2 and northern routes",
      text: "The M2 supports movements north and north-west from Belfast, but final approaches and delivery timings vary. Exact postcodes are needed to judge repositioning back towards a ferry or another collection.",
    },
  ],
  checklist: [
    "Provide both road-leg postcodes and the intended ferry route or delivery objective.",
    "State the sailing window and whether the vehicle or trailer is accompanied or unaccompanied.",
    "Confirm the goods description, weight, packaging, origin and destination status.",
    "Check current movement references and documentation with GOV.UK guidance, the customer, carrier and any intermediary.",
    "Identify who books the ferry, supplies references and controls each trailer or load handover.",
    "Give the vehicle body, payload, ready time, driver plan and preferred onward direction.",
  ],
  faqs: [
    {
      question: "Are live Northern Ireland return loads listed here?",
      answer:
        "No. The page explains how to prepare a genuine enquiry. Logic Freight checks current freight and suitable capacity privately, with no guarantee that a matching load or truck will be available.",
    },
    {
      question: "Will a Northern Ireland movement need extra documentation?",
      answer:
        "It may. Requirements depend on the goods, direction, route and current rules. Use the linked GOV.UK guidance and confirm the process with the shipper, carrier and relevant intermediary before travel; this page is not legal or customs advice.",
    },
    {
      question: "Can I enquire about an unaccompanied trailer movement?",
      answer:
        "Yes, but acceptance is case by case. Include trailer type, terminal, sailing, release references, collection window, handover responsibilities and the required road legs so suitable capacity can be assessed.",
    },
  ],
  relatedLinks: [
    {
      title: "UK–Europe road freight",
      text: "Prepare cross-border movements with route, goods and documentation detail.",
      href: "/services/uk-europe-road-freight/",
    },
    {
      title: "European hauliers",
      text: "Read the current operating context for non-UK hauliers seeking UK work.",
      href: "/european-hauliers/",
    },
  ],
  sources: [
    {
      label: "GOV.UK: Windsor Framework freight movement checklist",
      url: "https://www.gov.uk/government/publications/communications-resources-to-help-you-move-goods-from-great-britain-to-northern-ireland/checklist-getting-ready-to-make-freight-movements-from-great-britain-to-northern-ireland-under-the-windsor-framework",
      text: "Current government preparation checklist for freight moving from Great Britain to Northern Ireland. Check it again before each relevant movement because requirements can change.",
    },
    {
      label: "GOV.UK: Goods Vehicle Movement Service",
      url: "https://www.gov.uk/guidance/goods-vehicle-movement-service/how-the-system-processes-the-movement-of-goods",
      text: "Official explanation of how GVMS processes movements where it applies, including the role of a valid goods movement reference before boarding.",
    },
  ],
} as const satisfies RegionPageData;

export default function ReturnLoadsNorthernIrelandPage() {
  return <RegionPage data={northernIrelandPage} />;
}
