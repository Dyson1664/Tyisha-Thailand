import thailandHeroImage from "@/assets/tyisha-thailand/thailand-hero.webp";

import { tyishaThailandData } from "@/data/countries/tyishaThailand";
import { DestinationData, ItineraryData } from "@/data/types";

export type { Trip, DestinationData, ItineraryData } from "@/data/types";

export const destinationsData: Record<string, DestinationData> = {
  thailand: {
    country: "Thailand",
    heroImage: thailandHeroImage,
    heroSubtitle: "9 Days | Bangkok → Phuket",
    trips: [
      {
        id: "tyisha-thailand",
        slug: "tyisha-thailand",
        title: "Min Best Of Thailand",
        duration: "9 Days",
        description: "Bangkok, Phuket & Phi Phi Islands",
        image: thailandHeroImage,
        price: "$2,399",
        route: "/thailand-itinerary"
      }
    ],
    itinerary: tyishaThailandData
  }
};
