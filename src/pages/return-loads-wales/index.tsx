import {
  RegionPage,
  type RegionPageData,
} from "@/components/content/RegionPage";

const walesPage = {
  regionName: "Wales",
  path: "/return-loads-wales/",
  metaTitle: "Return Loads Wales | Freight Capacity Enquiries",
  metaDescription:
    "Plan Welsh return-load and road-freight enquiries with practical M4, A55, access and vehicle guidance. Current options are confirmed case by case.",
  eyebrow: "Wales freight planning",
  title: "Return-load enquiries across Wales",
  lead: "Place available capacity or submit freight in Wales with accurate location, vehicle and timing detail. Logic Freight checks each enquiry individually and does not present route examples as live loads.",
  introHeading: "Welsh freight planning depends on more than distance",
  intro: [
    "South Wales has a strong east–west road spine along the M4, but a vehicle described as available near Cardiff may actually be at an urban site, in a valley or well west of the motorway. In North Wales, the A55 connects coastal and cross-border movements towards North West England, while Mid and West Wales can involve longer approaches on single-carriageway routes.",
    "These differences affect collection timing, vehicle choice and sensible onward direction. Freight from a manufacturing or port-related site may require side loading or a specific body; a farm, construction or valley location may have tighter access. Logic Freight uses exact information to assess genuine enquiries, with capacity and terms confirmed case by case.",
  ],
  considerations: [
    {
      title: "Valley, rural and final-mile access",
      text: "A nearby trunk road does not describe the final approach. Provide gate instructions, road restrictions, loading space and whether the site can safely receive an artic or needs a smaller rigid.",
    },
    {
      title: "North, south and cross-border direction",
      text: "The M4 and A55 support different English connections, while north–south movements within Wales may require a less direct plan. State the preferred onward corridor explicitly.",
    },
    {
      title: "Equipment and handling",
      text: "Manufactured goods, building products, food, agricultural freight and general pallets can need different bodies and loading methods. Declare the real goods and site arrangement before matching.",
    },
  ],
  corridors: [
    {
      title: "South East Wales and the M4",
      text: "Newport and Cardiff connect towards Bristol, the South West and the wider English motorway network. Urban timing, Severn crossing direction and the actual M4 or valley position influence the practical return plan.",
    },
    {
      title: "Swansea, Port Talbot and the west",
      text: "The western M4 and onward A-road network serve industrial, distribution and regional movements. Ready time and precise position matter because repositioning from farther west can add significant mileage.",
    },
    {
      title: "North Wales and the A55",
      text: "Deeside, Wrexham, the north coast and Holyhead connect towards Chester, the North West and ferry movements. Ferry-linked work needs sailing, check-in and documentation detail as well as road timings.",
    },
    {
      title: "Mid and rural Wales",
      text: "Movements around Aberystwyth, Powys and rural production areas may involve longer approaches and more constrained access. Confirm route suitability and vehicle dimensions before offering a collection time.",
    },
  ],
  checklist: [
    "Provide exact postcodes and gate instructions rather than a broad Welsh region.",
    "State whether the preferred direction is M4 east or west, A55, Midlands or local.",
    "Confirm body type, payload, vehicle dimensions and loading or unloading method.",
    "Flag valley, farm, construction-site, port or ferry access requirements early.",
    "Include all booking references, opening hours and realistic collection and delivery windows.",
  ],
  faqs: [
    {
      question: "Does Logic Freight publish live return loads in Wales?",
      answer:
        "No. This is an enquiry and planning page. Genuine freight and truck placements are handled by the traffic team, and availability is checked at the time rather than displayed as sample jobs.",
    },
    {
      question: "Can any truck in Wales take an eastbound return load?",
      answer:
        "Not automatically. Its exact position, body, payload, remaining hours, collection access and next booking must all fit. A truck west of Swansea or within a valley has a different plan from one already beside the M4 near Newport.",
    },
    {
      question:
        "Can I enquire about freight between Wales and another UK country?",
      answer:
        "Yes. Submit the genuine route, goods, weight, loading method and dates. Logic Freight will review the requirement, but capacity, price and terms remain subject to case-by-case confirmation.",
    },
  ],
  relatedLinks: [
    {
      title: "South Wales freight planning",
      text: "Prepare M4, valley, industrial and cross-border movement detail.",
      href: "/locations/south-wales-freight-planning/",
    },
    {
      title: "Flatbed haulage",
      text: "Check load dimensions, restraint, loading access and site suitability.",
      href: "/vehicles/flatbed-haulage/",
    },
    {
      title: "Construction freight",
      text: "Plan building-material movements around handling and site constraints.",
      href: "/industries/construction-building-materials/",
    },
  ],
} as const satisfies RegionPageData;

export default function ReturnLoadsWalesPage() {
  return <RegionPage data={walesPage} />;
}
