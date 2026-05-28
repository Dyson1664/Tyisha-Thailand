import philippinesHeroImage from "@/assets/PH East/desktop_turtle.jpg";

import { philippinesData } from "@/data/countries/philippines";
import { DestinationData, ItineraryData } from "@/data/types";

export type { Trip, DestinationData, ItineraryData } from "@/data/types";

export const destinationsData: Record<string, DestinationData> = {
  vietnam: {
    country: "Philippines",
    heroImage: philippinesHeroImage,
    heroSubtitle: "8 Days | Cebu → Moalboal → Boracay",
    trips: [
      {
        id: "vietnam-emerald-escape",
        slug: "vietnam",
        title: "Philippines Island Explorer Itinerary",
        duration: "8 Days",
        description: "8 Days | Cebu → Moalboal → Boracay",
        image: philippinesHeroImage,
        price: "$1,795",
        route: "/philippines-itinerary"
      }
    ],
    itinerary: philippinesData
  }
};
