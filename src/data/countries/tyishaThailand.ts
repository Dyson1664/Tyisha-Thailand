import bangkokWelcomeNight from "@/assets/tyisha-thailand/bangkok-welcome-night.webp";
import phuketCoast from "@/assets/tyisha-thailand/phuket-coast.webp";
import thailandHero from "@/assets/tyisha-thailand/thailand-hero.webp";
import {
  CalendarDays,
  Home,
  Plane,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export const tyishaThailandData = {
  id: "tyisha-thailand",
  slug: "tyisha-thailand",
  title: "Bangkok & Phuket Escape",
  subtitle: "10 Days / 9 Nights | Bangkok → Phuket",
  location: "Thailand",
  duration: "10 Days / 9 Nights",
  startDate: "April 15th or 22nd",
  price: "$2,259",
  priceOriginal: "$2,459",
  priceNote: "Early bird: first 6 people save $200 USD.",
  ctaLabel: "$650 Deposit",
  heroImage: thailandHero,
  desktopHeroPosterImage: thailandHero,
  desktopTopMiddleImage: phuketCoast,
  desktopTopMiddleObjectPosition: "center center",
  desktopTopRightImage: bangkokWelcomeNight,
  desktopTopRightObjectPosition: "center center",
  desktopBottomLeftImage: phuketCoast,
  desktopBottomMiddleImage: bangkokWelcomeNight,
  desktopBottomMiddleObjectPosition: "center center",
  desktopBottomRightImage: thailandHero,
  desktopBottomRightObjectPosition: "center center",
  overviewGallery: [bangkokWelcomeNight, phuketCoast, thailandHero, bangkokWelcomeNight],
  route: ["Bangkok", "Phuket", "Phi Phi Islands", "Phuket"],
  tags: [
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🪭", label: "Culture" },
    { emoji: "🧳", label: "Solo" },
    { emoji: "🏖️", label: "Beach" },
  ],
  aboutDescription: [
    "Get ready for 10 unforgettable days exploring Thailand’s buzzing capital city and beautiful island coast. From Bangkok’s temples, floating markets, nightlife, and street food to Phuket’s beaches, elephants, Thai cooking, island hopping, spa time, and tropical views, this trip is the perfect mix of culture, adventure, relaxation, and fun.",
    "You’ll travel with a group, have support along the way, and still enjoy plenty of free time to explore, shop, eat, relax, and make the trip your own.",
    "Stay in 3-star+ hotels and enjoy guided group travel balanced with free time and optional adventures.",
  ],
  aboutImages: [bangkokWelcomeNight, phuketCoast],
  highlights: [
    {
      title: "Bangkok Energy",
      description:
        "Temples, markets, street food, shopping, nightlife, and the unmistakable buzz of Thailand’s capital.",
      image: bangkokWelcomeNight,
    },
    {
      title: "Phuket & Phi Phi",
      description:
        "Tropical beaches, island views, Thai cooking, spa time, and optional coastal adventures.",
      image: phuketCoast,
    },
  ],
  accommodations: [
    {
      title: "Bangkok stay",
      description:
        "Begin the trip at Chillax Resort or a similar 3-star+ Bangkok hotel.",
      images: [bangkokWelcomeNight, thailandHero],
    },
  ],
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "9 NIGHTS<br />ACCOMMODATION",
      description: "3-star+ hotels throughout the 10-day Thailand escape.",
    },
    {
      icon: CalendarDays,
      title: "10 DAYS OF<br />THAILAND",
      description:
        "Bangkok, Phuket, and the Phi Phi Islands with culture, beaches, food, nightlife, and free time.",
      link: {
        text: "Explore the itinerary",
        url: "#itinerary",
      },
    },
    {
      icon: Plane,
      title: "DAY 1 AIRPORT<br />PICKUP",
      description:
        "A personal driver will meet you at Bangkok airport and transfer you to the hotel.",
    },
    {
      icon: Users,
      title: "GUIDED GROUP<br />TRAVEL",
      description:
        "Group support along the way, balanced with free time and optional adventures.",
    },
    {
      icon: UtensilsCrossed,
      title: "THAI FOOD<br />& MARKETS",
      description:
        "Plenty of opportunities to explore street food, markets, and Thailand’s celebrated cuisine.",
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival, Welcome Orientation & Nightlife",
      location: "Bangkok",
      heroImage: bangkokWelcomeNight,
      description:
        "Welcome to Thailand! Upon arrival at Bangkok airport, your personal driver will be waiting to greet you with a sign for easy pickup. The airport has Wi-Fi available, so you’ll be able to message your driver if needed and connect smoothly before heading to your hotel. After your transfer, check in, freshen up, and get ready to ease into the excitement of the city. In the evening, enjoy a welcome orientation to meet the group, get familiar with the area, and go over the adventure ahead. Afterward, step out and experience Bangkok’s famous nightlife, buzzing streets, music, food, lights, and vibrant city energy.",
      highlights:
        "Airport arrival transfer, welcome orientation, group assistance; optional shopping streets, street food, drinks after orientation, and Bangkok nightlife",
      accommodation: { name: "Chillax Resort or similar" },
    },
  ],
  summary: {
    duration: "10 Days / 9 Nights",
    activities: "Culture, Food, Beaches & Nightlife",
    areas: "Bangkok, Phuket & Phi Phi Islands",
    type: "Guided Group Travel",
  },
  included: [
    {
      title: "Trip Style & Accommodation",
      items: [
        { text: "9 nights in 3-star+ hotels" },
        { text: "Guided group travel with support along the way" },
        { text: "Free time plus optional adventures" },
      ],
    },
    {
      title: "Day 1 Included",
      items: [
        { text: "Bangkok airport arrival transfer with personal driver" },
        { text: "Welcome orientation" },
        { text: "Group assistance" },
      ],
    },
    {
      title: "Optional Day 1 Experiences",
      items: [
        { text: "Explore nearby shopping streets" },
        { text: "Try Bangkok street food" },
        { text: "Drinks after orientation" },
        { text: "Bangkok nightlife" },
      ],
    },
  ],
  faqs: [
    {
      question: "When does the tour start?",
      answer:
        "The available tour start dates are April 15th or April 22nd. The year and final departure selection will be confirmed with the complete booking details.",
    },
    {
      question: "What kind of accommodation is included?",
      answer:
        "The trip uses 3-star+ hotels. Day 1 is planned at Chillax Resort in Bangkok or a similar property.",
    },
    {
      question: "Is there free time during the trip?",
      answer:
        "Yes. The travel style combines guided group experiences and support with free time and optional adventures.",
    },
  ],
};
