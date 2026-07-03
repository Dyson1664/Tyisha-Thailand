import philippinesHeroImage from "@/assets/PH East/desktop_turtle.jpg";

import { philippinesData } from "@/data/countries/philippines";
import { DestinationData, ItineraryData } from "@/data/types";

export type { Trip, DestinationData, ItineraryData } from "@/data/types";

export const destinationsData: Record<string, DestinationData> = {
  philippines: {
    country: "Philippines",
    heroImage: philippinesHeroImage,
    heroSubtitle: "8 Days | Cebu → Moalboal → Boracay",
    trips: [
      {
        id: "philippines-island-explorer",
        slug: "philippines",
        title: "Philippines Island Explorer",
        duration: "8 Days",
        description: "8 Days | Cebu → Moalboal → Boracay",
        image: philippinesHeroImage,
        price: "$2,259",
        route: "/philippines-itinerary"
      }
    ],
    itinerary: philippinesData
  }
};
