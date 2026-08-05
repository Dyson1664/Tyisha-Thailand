import thailandHeroImage from "@/assets/tyisha-thailand/thailand-hero.webp";

import { tyishaThailandData } from "@/data/countries/tyishaThailand";
import { DestinationData, ItineraryData } from "@/data/types";

export type { Trip, DestinationData, ItineraryData } from "@/data/types";

export const destinationsData: Record<string, DestinationData> = {
  thailand: {
    country: "Thailand",
    heroImage: thailandHeroImage,
    heroSubtitle: "10 Days / 9 Nights | Bangkok → Phuket",
    trips: [
      {
        id: "tyisha-thailand",
        slug: "tyisha-thailand",
        title: "Bangkok & Phuket Escape",
        duration: "10 Days / 9 Nights",
        description: "Bangkok, Phuket & Phi Phi Islands",
        image: thailandHeroImage,
        price: "$2,259",
        route: "/thailand-itinerary"
      }
    ],
    itinerary: tyishaThailandData
  }
};
