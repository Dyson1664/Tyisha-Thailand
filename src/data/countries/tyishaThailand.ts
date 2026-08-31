import bangkokFloatingMarket from "@/assets/tyisha-thailand/bangkok-floating-market.webp";
import bangkokGrandPalace from "@/assets/tyisha-thailand/bangkok-grand-palace.webp";
import bangkokWelcomeNight from "@/assets/tyisha-thailand/bangkok-welcome-night.webp";
import phuketCoast from "@/assets/tyisha-thailand/phuket-coast.webp";
import day6Image from "@/assets/tyisha-thailand/day6.webp";
import phiPhiImage from "@/assets/tyisha-thailand/phi-phi.avif";
import day8Image from "@/assets/tyisha-thailand/day-8.webp";
import bigBuddhaImage from "@/assets/tyisha-thailand/big buddha.webp";
import day10Image from "@/assets/tyisha-thailand/day-10.webp";
import min2Image from "@/assets/tyisha-thailand/min2.webp";
import desktop6Image from "@/assets/tyisha-thailand/desktop-6.webp";
import bangkokVideo from "@/assets/tyisha-thailand/bangkok_video.mp4";
import phuketVideo from "@/assets/tyisha-thailand/phuket-vid.mp4";
import thailandHero from "@/assets/tyisha-thailand/thailand-hero.webp";
import chillaxPool from "@/assets/tyisha-thailand/hotels/505656779.webp";
import chillaxGym from "@/assets/tyisha-thailand/hotels/766048977.webp";
import chillaxAtrium from "@/assets/tyisha-thailand/hotels/766048971.webp";
import chillaxRoom from "@/assets/tyisha-thailand/hotels/766048876.webp";
import chillaxTerrace from "@/assets/tyisha-thailand/hotels/766049027.webp";
import andakiraPool from "@/assets/tyisha-thailand/hotels/hotel-1.webp";
import andakiraRoom from "@/assets/tyisha-thailand/hotels/hotel-2.webp";
import phuketHotelRoom from "@/assets/tyisha-thailand/hotels/phuket-1.webp";
import phuketHotelPool from "@/assets/tyisha-thailand/hotels/phuket-2.webp";
import phiPhiHotelPool from "@/assets/tyisha-thailand/hotels/phi phi-1.webp";
import phiPhiHotelRoom from "@/assets/tyisha-thailand/hotels/phi phi-2.webp";
import {
  Home,
  Plane,
  Sparkles,
  Users,
  UtensilsCrossed,
} from "lucide-react";

export const tyishaThailandData = {
  id: "tyisha-thailand",
  slug: "tyisha-thailand",
  title: "Min Best Of Thailand",
  subtitle: "9 Days | Bangkok → Phuket",
  location: "Thailand",
  duration: "9 Days",
  startDate: "April 25th - May 3rd, 2027",
  price: "$2,399",
  priceOriginal: "$2,499",
  priceNote: "$100 early-bird discount for the first 6 bookings.",
  ctaLabel: "$400 Deposit",
  bookingDisabled: true,
  heroImage: "/min-1.webp",
  desktopHeroPosterImage: thailandHero,
  desktopTopMiddleImage: day6Image,
  desktopTopMiddleObjectPosition: "center center",
  desktopTopRightImage: day8Image,
  desktopTopRightObjectPosition: "center center",
  desktopBottomLeftImage: phiPhiImage,
  desktopBottomMiddleImage: min2Image,
  desktopBottomMiddleObjectPosition: "center 60%",
  desktopBottomRightImage: desktop6Image,
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
    "Are you looking to meet other women, make new friends, step outside your comfort zone, and experience something new? Then I’m so excited to have you join me, Min, on a bonding girls’ trip as we adventure through Bangkok, Phuket, and the Phi Phi Islands together for 9 unforgettable days, in collaboration with @imaginebeyondtravel ✈️",
    "The itinerary has been curated to offer the perfect balance of adventure and activity alongside plenty of downtime, giving us the chance to really get to know one another, have fun, and immerse ourselves in the culture of Thailand.",
    "Stay in handpicked 4- and 3-star hotel accommodations and enjoy guided group travel with plenty of time to relax, connect, and make the experience your own.",
  ],
  aboutImages: [bangkokWelcomeNight, phuketCoast],
  highlights: [
    {
      title: "Bangkok Energy",
      description:
        "Temples, markets, street food, shopping, nightlife, and the unmistakable buzz of Thailand’s capital.",
      image: bangkokWelcomeNight,
      video: bangkokVideo,
    },
    {
      title: "Phuket & Phi Phi",
      description:
        "Tropical beaches, island views, Thai cooking, relaxation, and coastal adventures.",
      image: phuketCoast,
      video: phuketVideo,
    },
  ],
  accommodations: [
    {
      title: "Chillax Resort or similar",
      description:
        "A stylish 4-star Bangkok retreat with comfortable rooms and a rooftop pool.",
      images: [chillaxPool, chillaxRoom, chillaxAtrium, chillaxTerrace, chillaxGym],
    },
    {
      title: "Andakira Hotel – SHA Extra Plus or similar",
      description:
        "A comfortable Phuket stay with modern rooms, a welcoming pool, and easy access to Patong.",
      images: [andakiraRoom, andakiraPool],
    },
    {
      title: "Coco Bella Resort or similar",
      description:
        "A laid-back island stay with comfortable rooms and Phi Phi's beaches close by.",
      images: [phiPhiHotelPool, phiPhiHotelRoom],
    },
    {
      title: "AIMs Hotel Phuket or similar",
      description:
        "A comfortable Phuket stay with modern rooms, an inviting pool, and easy access to Patong.",
      images: [phuketHotelRoom, phuketHotelPool],
    },
  ],
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "8 NIGHTS<br />ACCOMMODATION",
      description: "Handpicked 4- and 3-star hotel accommodations throughout the 9-day Thailand escape.",
    },
    {
      icon: Sparkles,
      title: "INCLUDED<br />ACTIVITIES",
      description:
        "Grand Palace, floating market, Thai cooking, Elephant Jungle Sanctuary, private Phi Phi island-hopping, and more.",
      link: {
        text: "View all included activities",
        url: "#whats-included",
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
      title: "24/7<br />TOUR GUIDE",
      description:
        "A dedicated tour guide is available around the clock to support the group throughout the trip.",
    },
    {
      icon: UtensilsCrossed,
      title: "MEALS",
      description:
        "Daily breakfasts, welcome dinner, Thai cooking-class dinner, Phi Phi Island boat-tour lunch, and farewell dinner.",
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival, Welcome Orientation & Girls’ Night Out",
      location: "Bangkok",
      heroImage: bangkokWelcomeNight,
      description:
        "Welcome to Thailand! Upon arrival at Bangkok airport, your personal driver will be there waiting for you with a sign displaying your name. After your transfer, check in, freshen up, and get ready to ease into the excitement of the city. In the evening, enjoy a welcome orientation and included welcome dinner as you meet the group, get familiar with the area, and go over the adventure ahead. Afterward, get ready for a girls’ night out and experience Bangkok’s buzzing streets, music, lights, and vibrant city energy together.",
      meals: "Welcome Dinner",
      highlights: "Welcome dinner and girls’ night out in Bangkok",
      accommodation: { name: "Chillax Resort or similar" },
    },
    {
      day: 2,
      title: "Grand Palace Sightseeing",
      location: "Bangkok",
      heroImage: bangkokGrandPalace,
      description:
        "Start the day with breakfast, then head out for one of Bangkok’s most iconic cultural experiences. Visit the spectacular Grand Palace, known for its ornate architecture, royal history, golden details, and stunning temple grounds. This is one of Thailand’s most famous landmarks and a beautiful introduction to Bangkok’s rich culture and history. After the Grand Palace visit, the rest of the day is free to relax, explore, shop, try local street food, or enjoy Bangkok at your own pace.",
      meals: "Breakfast",
      highlights: "Grand Palace visit",
      accommodation: { name: "Chillax Resort or similar" },
    },
    {
      day: 3,
      title: "Floating Market & Free Evening",
      location: "Bangkok",
      heroImage: bangkokFloatingMarket,
      description:
        "After breakfast, enjoy a colorful morning at a local floating market. Take in the lively atmosphere as vendors sell fresh fruit, local snacks, souvenirs, and Thai specialties from their boats. After the market visit, the rest of the day is yours to enjoy. Relax at the hotel, explore Bangkok at your own pace, go shopping, visit a rooftop bar, try local street food, or enjoy another fun night out in the city.",
      meals: "Breakfast",
      highlights: "Floating market experience",
      accommodation: { name: "Chillax Resort or similar" },
    },
    {
      day: 4,
      title: "Bangkok → Phuket | Island Arrival & Thai Cooking Class",
      location: "Bangkok to Phuket",
      heroImage: phuketCoast,
      description:
        "After breakfast, it’s time to trade Bangkok’s city lights for Phuket’s tropical beaches. Check out and head to the airport for your included domestic flight to Phuket. Upon arrival, transfer to the hotel, check in, and enjoy some free time to settle into island life. Explore Patong, hit the beach, browse the shops, grab a drink, or relax by the pool. In the evening, come together for a fun Thai cooking class. Learn how to prepare authentic dishes, discover local ingredients and flavors, and then sit down to enjoy the meal you helped create.",
      meals: "Breakfast, Dinner",
      highlights: "Included flight to Phuket and Thai cooking class",
      accommodation: { name: "Andakira Hotel – SHA Extra Plus or similar" },
    },
    {
      day: 5,
      title: "Phuket | Slow Morning & Elephant Jungle Sanctuary",
      location: "Phuket",
      heroImage: day6Image,
      description:
        "No early rush today. Enjoy breakfast, sleep in a little, grab a coffee, or relax by the pool before heading out for one of the most memorable experiences of the trip. Visit an Elephant Jungle Sanctuary, where you’ll spend time learning about the elephants, their care, personalities, and stories in a beautiful jungle setting and feeding them. The evening is free to explore Phuket, walk along the beach, go shopping, head out for drinks, or simply relax.",
      meals: "Breakfast",
      highlights: "Elephant Jungle Sanctuary visit and elephant feeding",
      accommodation: { name: "Andakira Hotel – SHA Extra Plus or similar" },
    },
    {
      day: 6,
      title: "Phuket → Phi Phi | Private Speedboat & Island-Hopping Adventure",
      location: "Phuket to Phi Phi Islands",
      heroImage: phiPhiImage,
      description:
        "Today is one of the biggest highlights of the trip. After breakfast, check out of your Phuket hotel and board your own private speedboat for an unforgettable journey through the Phi Phi Islands. Rather than simply transferring by ferry, today becomes a full private island-hopping adventure. Cruise through turquoise waters surrounded by dramatic limestone cliffs, white-sand beaches and hidden bays. Spend the day swimming, snorkeling and exploring some of the Phi Phi Islands’ most spectacular locations, with stops that may include Maya Bay, Viking Cave, snorkeling areas and scenic beaches depending on weather, tides and local regulations. Lunch is included during the boat experience. At the end of the adventure, the speedboat will drop the group directly at Phi Phi Island, where you’ll check into your hotel for the night. In the evening, head down to the beach to watch one of Phi Phi’s famous Thai fire shows and enjoy the island atmosphere.",
      meals: "Breakfast, Lunch",
      highlights:
        "Private speedboat, Phi Phi island-hopping, swimming, snorkeling, Maya Bay, Viking Cave, and Thai fire show",
      accommodation: { name: "Coco Bella Resort or similar, Phi Phi Island" },
    },
    {
      day: 7,
      title: "Phi Phi Viewpoint → Phuket",
      location: "Phi Phi Islands to Phuket",
      heroImage: day8Image,
      description:
        "Wake up in paradise and enjoy breakfast before heading to the famous Phi Phi Viewpoint. Make your way up to one of the island’s best photo spots and take in incredible panoramic views across Phi Phi’s turquoise bays, beaches and dramatic limestone scenery. Afterward, return to the hotel, collect your bags and say goodbye to Phi Phi. Board the ferry back to Phuket, arriving during the afternoon. From the ferry terminal, you’ll be transferred to your hotel, where the remainder of the day is yours to relax and enjoy Phuket at your own pace.",
      meals: "Breakfast",
      highlights: "Phi Phi Viewpoint and ferry back to Phuket",
      accommodation: { name: "AIMs Hotel Phuket or similar" },
    },
    {
      day: 8,
      title: "Phuket | Full Free Day & Farewell Night",
      location: "Phuket",
      heroImage: bigBuddhaImage,
      description:
        "Today is completely yours. Sleep in, enjoy a relaxed breakfast and spend your final full day in Thailand exactly how you want. Head to the beach, shop for souvenirs, explore Phuket, spend the afternoon by the pool or treat yourself to a Thai massage or spa experience. There are no scheduled daytime activities, giving you plenty of time to relax and enjoy Phuket at your own pace. In the evening, come together one final time for an included farewell dinner and celebrate an incredible Thailand adventure.",
      meals: "Breakfast, Farewell Dinner",
      highlights: "Full free day and included farewell dinner",
      accommodation: { name: "AIMs Hotel Phuket or similar" },
    },
    {
      day: 9,
      title: "Phuket | Check-Out & Departure",
      location: "Phuket",
      heroImage: day10Image,
      description:
        "Enjoy your final breakfast in Thailand before checking out of the hotel. Depending on your flight time, enjoy a final walk, some last-minute shopping or a little more time soaking up Phuket before making your own way to Phuket International Airport. Say goodbye to Thailand with incredible memories of Bangkok, Phuket and the Phi Phi Islands.",
      meals: "Breakfast",
      highlights: "Hotel check-out and departure",
    },
  ],
  summary: {
    duration: "9 Days",
    activities: "Culture, Food, Beaches & Nightlife",
    areas: "Bangkok, Phuket & Phi Phi Islands",
    type: "Guided Group Travel",
  },
  included: [
    {
      title: "Meals & Accommodation",
      items: [
        { text: "8 nights in handpicked 4- and 3-star hotel accommodations" },
        { text: "Daily breakfasts" },
        { text: "Dinner during the Thai cooking class" },
        { text: "Lunch during the Phi Phi Island boat tour" },
        { text: "Welcome dinner on Day 1 and farewell dinner on Day 8" },
      ],
    },
    {
      title: "Transport & Tour Guide",
      items: [
        { text: "Airport pickup on arrival in Bangkok" },
        { text: "Domestic flight from Bangkok to Phuket" },
        { text: "Transport for all included scheduled activities" },
        { text: "24/7 Tour Guide" },
      ],
    },
    {
      title: "Included Experiences",
      items: [
        { text: "Girls’ night out in Bangkok" },
        { text: "Grand Palace visit" },
        { text: "Floating market experience" },
        { text: "Thai cooking class" },
        { text: "Elephant Jungle Sanctuary experience" },
        { text: "Private Phi Phi Island speedboat tour" },
        { text: "Phi Phi Viewpoint" },
        { text: "Farewell dinner and final night out" },
      ],
    },
  ],
  paymentPlanDescription:
    "Secure your place with a $400 non-refundable deposit, then split the remaining balance across three payments. The first 6 bookings receive a $100 early-bird discount.",
  paymentPlans: [
    {
      title: "Early Bird – First 6 Bookings",
      price: "$2,399",
      featured: true,
      payments: [
        { label: "Deposit at booking", amount: "$400" },
        { label: "First balance payment due November 5, 2026", amount: "$650" },
        { label: "Second balance payment due January 15, 2027", amount: "$650" },
        { label: "Final balance payment due February 15, 2027", amount: "$699" },
      ],
      note: "Includes the $100 early-bird discount. Optional single room: add the $550 supplement to the first balance payment, making that payment $1,200 and the total trip price $2,949.",
    },
    {
      title: "Min's Thailand Trip",
      price: "$2,499",
      payments: [
        { label: "Deposit at booking", amount: "$400" },
        { label: "First balance payment due November 5, 2026", amount: "$700" },
        { label: "Second balance payment due January 15, 2027", amount: "$700" },
        { label: "Final balance payment due February 15, 2027", amount: "$699" },
      ],
      note: "Optional single room: add the $550 supplement to the first balance payment, making that payment $1,250 and the total trip price $3,049.",
    },
  ],
  faqs: [
    {
      question: "When does the tour start?",
      answer: "The tour runs from April 25th through May 3rd, 2027.",
    },
    {
      question: "How long is the trip and what is the route?",
      answer:
        "This is a 9-day guided group trip through Bangkok, Phuket, and the Phi Phi Islands, finishing back in Phuket.",
    },
    {
      question: "What accommodation is included?",
      answer: "The trip includes 8 nights in handpicked 4- and 3-star hotel accommodations.",
    },
    {
      question: "Which meals are included?",
      answer:
        "Daily breakfasts are included, along with the Day 1 welcome dinner, dinner during the Thai cooking class, lunch during the Phi Phi Island boat tour, and the Day 8 farewell dinner.",
    },
    {
      question: "What transport and support are included?",
      answer:
        "The trip includes airport pickup on arrival in Bangkok, the domestic flight from Bangkok to Phuket, transport for all included scheduled activities, and support from a 24/7 tour guide.",
    },
    {
      question: "What activities are included?",
      answer:
        "Included experiences cover a girls’ night out in Bangkok, the Grand Palace, a floating market, a Thai cooking class, the Elephant Jungle Sanctuary, a private Phi Phi Island speedboat tour, the Phi Phi Viewpoint, and the farewell dinner and final night out.",
    },
    {
      question: "Is there free time during the trip?",
      answer:
        "Yes. The itinerary balances guided group experiences with free time to relax, shop, explore, enjoy the beaches, and experience Bangkok and Phuket at your own pace.",
    },
  ],
};
