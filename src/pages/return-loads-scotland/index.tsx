import {
  RegionPage,
  type RegionPageData,
} from "@/components/content/RegionPage";

const scotlandPage = {
  regionName: "Scotland",
  path: "/return-loads-scotland/",
  metaTitle: "Return Loads Scotland | Freight Capacity Enquiries",
  metaDescription:
    "Plan Scottish return-load and road-freight enquiries with practical guidance on distance, timing, corridors and vehicle detail. Checked case by case.",
  eyebrow: "Scotland freight planning",
  title: "Return-load enquiries across Scotland",
  lead: "Share a real Scottish truck placement or freight requirement with Logic Freight. The traffic team checks current demand, capacity, route and timing individually; no southbound load or vehicle is guaranteed.",
  introHeading: "Distance and direction shape Scottish return movements",
  intro: [
    "Scotland's Central Belt, north-east coast, Highlands and Borders create very different operating plans. A vehicle empty near Glasgow can be well placed for the M74, while a truck in Aberdeen, Inverness or a rural postcode may need substantially more time before it reaches the same southbound corridor. The exact location and remaining driving window are essential.",
    "Long-distance movements also need credible collection and delivery bookings, rest planning and contingency. M8 freight within the Central Belt, M74 and A1 links towards England, and A9 or A90 movements to the north should not be treated as interchangeable. Logic Freight discusses only genuine enquiries and confirms suitability and availability case by case.",
  ],
  considerations: [
    {
      title: "Driving time and next commitment",
      text: "A long return leg must fit the driver's available hours, rest plan and next fixed booking. Supply those constraints before a collection window is discussed.",
    },
    {
      title: "Weather and resilience",
      text: "Season, exposed sections and changing conditions can affect credible schedules, especially on longer northern routes. Build sensible contingency into time-critical movements.",
    },
    {
      title: "Exact empty position",
      text: "Central Belt, Borders, north-east and Highland placements have different access to trunk roads. A town, depot postcode and realistic ready time are more useful than 'Scotland' alone.",
    },
  ],
  corridors: [
    {
      title: "Central Belt and the M8",
      text: "Glasgow, Edinburgh, Grangemouth and surrounding industrial areas are linked by the M8 and feeder routes. Urban position, site booking and whether the truck needs east, west, north or south determine the useful next move.",
    },
    {
      title: "M74 and cross-border movements",
      text: "The M74 is a principal connection from central Scotland towards North West England and the wider motorway network. A proposed return still needs to fit payload, collection time, delivery window and remaining hours.",
    },
    {
      title: "A1 and east-coast links",
      text: "Edinburgh and the Borders can connect towards North East England via the A1. Start and finish points matter because a cross-country reposition to another corridor may remove the value of a return movement.",
    },
    {
      title: "A9, A90 and northern Scotland",
      text: "Perth, Dundee, Aberdeen and Inverness involve longer north–south distances and varied site access. Provide enough notice for equipment, schedule and onward-direction checks rather than assuming regular availability.",
    },
  ],
  checklist: [
    "Give the vehicle's exact Scottish empty postcode, date and ready time.",
    "State remaining driving availability, planned rest and the next fixed booking.",
    "Describe body type, payload, dimensions, loading access and any specialist equipment.",
    "For freight, provide complete collection and delivery booking requirements.",
    "Flag rural access, seasonal timing, ferry dependency or other schedule constraints early.",
  ],
  faqs: [
    {
      question: "Are southbound return loads from Scotland always available?",
      answer:
        "No. Demand varies by date, location, direction, vehicle and commercial fit. Logic Freight checks a genuine placement against current enquiries without promising a match.",
    },
    {
      question:
        "How much location detail should a Scottish truck placement include?",
      answer:
        "Provide the expected empty postcode, ready time and preferred direction. A broad label such as Central Scotland or the Highlands is not precise enough to judge repositioning mileage and timing.",
    },
    {
      question: "Can shippers submit freight between Scotland and England?",
      answer:
        "Yes, as an enquiry. Include both postcodes, loading detail and time windows so the traffic team can assess suitable capacity. Nothing is booked until scope, availability, price and terms are agreed.",
    },
  ],
  relatedLinks: [
    {
      title: "Central Scotland freight planning",
      text: "Plan genuine placements around Glasgow, Edinburgh, the M8 and M74.",
      href: "/locations/central-scotland-freight-planning/",
    },
    {
      title: "Full-load haulage",
      text: "Prepare vehicle, payload, loading and timing detail for a dedicated movement.",
      href: "/services/full-load-haulage/",
    },
    {
      title: "Articulated lorry loads",
      text: "Understand the details needed before an articulated vehicle can be matched.",
      href: "/vehicles/articulated-lorry-loads/",
    },
  ],
} as const satisfies RegionPageData;

export default function ReturnLoadsScotlandPage() {
  return <RegionPage data={scotlandPage} />;
}
