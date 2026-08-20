import bangkokFloatingMarket from "@/assets/tyisha-thailand/bangkok-floating-market.webp";
import bangkokGrandPalace from "@/assets/tyisha-thailand/bangkok-grand-palace.webp";
import bangkokWelcomeNight from "@/assets/tyisha-thailand/bangkok-welcome-night.webp";
import phuketCoast from "@/assets/tyisha-thailand/phuket-coast.webp";
import atvImage from "@/assets/tyisha-thailand/atv.jpg";
import day6Image from "@/assets/tyisha-thailand/day6.webp";
import phiPhiImage from "@/assets/tyisha-thailand/phi-phi.avif";
import day8Image from "@/assets/tyisha-thailand/day-8.jpg";
import massageThailandImage from "@/assets/tyisha-thailand/massage-thailand.jpg";
import day10Image from "@/assets/tyisha-thailand/day-10.jpg";
import tyisha1Image from "@/assets/tyisha-thailand/tyisha1.jpg";
import tyisha2Image from "@/assets/tyisha-thailand/tyisha-2.jpg";
import desktop6Image from "@/assets/tyisha-thailand/desktop-6.jpg";
import bangkokVideo from "@/assets/tyisha-thailand/bangkok_video.mp4";
import phuketVideo from "@/assets/tyisha-thailand/phuket-vid.mp4";
import thailandHero from "@/assets/tyisha-thailand/thailand-hero.webp";
import chillaxPool from "@/assets/tyisha-thailand/hotels/505656779.jpg";
import chillaxGym from "@/assets/tyisha-thailand/hotels/766048977.jpg";
import chillaxAtrium from "@/assets/tyisha-thailand/hotels/766048971.jpg";
import chillaxRoom from "@/assets/tyisha-thailand/hotels/766048876.jpg";
import chillaxTerrace from "@/assets/tyisha-thailand/hotels/766049027.jpg";
import natureAerialPool from "@/assets/tyisha-thailand/hotels/nature-1.jpg";
import natureRoom from "@/assets/tyisha-thailand/hotels/nature-2.jpg";
import naturePool from "@/assets/tyisha-thailand/hotels/nature-3.jpg";
import natureGym from "@/assets/tyisha-thailand/hotels/nature-4.jpg";
import phiPhiHotelPool from "@/assets/tyisha-thailand/hotels/phi phi-1.jpg";
import phiPhiHotelRoom from "@/assets/tyisha-thailand/hotels/phi phi-2.jpg";
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
  title: "Tyeisha Best Of Thailand",
  subtitle: "10 Days | Bangkok → Phuket",
  location: "Thailand",
  duration: "10 Days",
  startDate: "TBD",
  price: "TBD",
  priceOriginal: "TBD",
  priceNote: "Final trip price will be confirmed.",
  ctaLabel: "$400 Deposit",
  heroImage: tyisha1Image,
  desktopHeroPosterImage: thailandHero,
  desktopTopMiddleImage: day6Image,
  desktopTopMiddleObjectPosition: "center center",
  desktopTopRightImage: tyisha1Image,
  desktopTopRightObjectPosition: "center center",
  desktopBottomLeftImage: phiPhiImage,
  desktopBottomMiddleImage: tyisha2Image,
  desktopBottomMiddleObjectPosition: "center center",
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
    "Join Tyeisha for 10 unforgettable days exploring Thailand’s buzzing capital city and beautiful island coast. From Bangkok’s temples, floating markets, nightlife, and street food to Phuket’s beaches, elephants, Thai cooking, island hopping, spa time, and tropical views, this trip is the perfect mix of culture, adventure, relaxation, and fun.",
    "You’ll travel with a group, have support along the way, and still enjoy plenty of free time to explore, shop, eat, relax, and make the trip your own.",
    "Stay in 4-star hotels and enjoy guided group travel balanced with free time and optional adventures.",
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
        "Tropical beaches, island views, Thai cooking, spa time, and optional coastal adventures.",
      image: phuketCoast,
      video: phuketVideo,
    },
  ],
  accommodations: [
    {
      title: "Chillax Resort",
      description:
        "A stylish 4-star Bangkok retreat with comfortable rooms and a rooftop pool.",
      images: [chillaxPool, chillaxRoom, chillaxAtrium, chillaxTerrace, chillaxGym],
    },
    {
      title: "The Nature Phuket",
      description:
        "A peaceful 5-star Phuket resort with modern rooms and inviting tropical pools.",
      images: [naturePool, natureRoom, natureAerialPool, natureGym],
    },
    {
      title: "Coco Bella Resort",
      description:
        "A laid-back island stay with comfortable rooms and Phi Phi's beaches close by.",
      images: [phiPhiHotelPool, phiPhiHotelRoom],
    },
  ],
  whatsIncludedHighlights: [
    {
      icon: Home,
      title: "9 NIGHTS<br />ACCOMMODATION",
      description: "4-star hotels throughout the 10-day Thailand escape.",
    },
    {
      icon: Sparkles,
      title: "INCLUDED<br />ACTIVITIES",
      description:
        "Grand Palace, floating market, ATV, zipline, Thai cooking, Elephant Jungle Sanctuary, Phi Phi Island boat tour, spa day, and more.",
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
        "Daily breakfasts, Thai cooking-class dinner, Phi Phi Island boat-tour lunch, and farewell dinner.",
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
      highlights: "Bangkok nightlife experience",
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
      title: "Bangkok to Phuket | Travel Day & Island Arrival",
      location: "Phuket",
      heroImage: phuketCoast,
      description:
        "After breakfast, check out and fly to Phuket. Upon arrival, check in at your hotel and ease into island mode. Spend the rest of the day relaxing, exploring the beach, browsing local shops, or discovering the Patong area at your own pace. This is a slower travel day, giving you time to settle in, unwind, and enjoy your first taste of Phuket.",
      meals: "Breakfast",
      accommodation: { name: "The Nature" },
    },
    {
      day: 5,
      title: "ATV Adventure, Zipline, Big Buddha & Thai Cooking Class",
      location: "Phuket",
      heroImage: atvImage,
      description:
        "Get ready for an action-packed morning in Phuket. Begin the day with an exciting ATV adventure, riding through scenic jungle trails and rugged terrain. Continue with a thrilling zipline experience before visiting the iconic Big Buddha viewpoint, where you can enjoy panoramic views across the island. Around midday, return to the hotel and enjoy free time for lunch, relaxation, or a refreshing swim. Later in the afternoon, come together for a fun and interactive Thai cooking class. Learn about traditional ingredients, local flavors, and authentic cooking techniques as you prepare a selection of delicious Thai dishes to enjoy together.",
      meals: "Breakfast, Dinner",
      highlights: "ATV adventure, zipline, Big Buddha visit, and Thai cooking class",
      accommodation: { name: "The Nature" },
    },
    {
      day: 6,
      title: "Slow Morning & Elephant Jungle Sanctuary",
      location: "Phuket",
      heroImage: day6Image,
      description:
        "Enjoy a relaxed morning with breakfast, extra sleep, and time to chill. No rush today. In the afternoon, visit an Elephant Jungle Sanctuary experience in Phuket. Spend meaningful time learning about elephants, their care, and their stories in a jungle setting. This is a beautiful and memorable way to connect with Thailand’s wildlife. After returning to the hotel, enjoy a free evening in Phuket. Relax, go for dinner, explore the area, or enjoy a fun night out.",
      meals: "Breakfast",
      highlights: "Elephant Jungle Sanctuary experience",
      accommodation: { name: "The Nature" },
    },
    {
      day: 7,
      title: "Phi Phi Island Boat Tour Adventure",
      location: "Phi Phi Islands",
      heroImage: phiPhiImage,
      description:
        "After breakfast, get ready for a full day on the water. Today’s boat tour brings the tropical dream to life with stops and sightseeing around some of Thailand’s most famous island scenery. Explore the beauty of the Phi Phi Islands, dramatic limestone cliffs, turquoise waters, crystal-clear beaches, and unforgettable island views. In the evening, head out for dinner and a possible fire dancing show on the beach.",
      meals: "Breakfast, Lunch",
      highlights:
        "Phi Phi Island boat tour, snorkeling stops, Maya Bay, and Viking Cave sightseeing",
      accommodation: { name: "Coco Bella or similar" },
    },
    {
      day: 8,
      title: "Phi Phi Islands to Phuket | Chill Morning, Viewpoints & Ferry Back",
      location: "Phi Phi Islands to Phuket",
      heroImage: day8Image,
      description:
        "Wake up on Phi Phi Island and enjoy a relaxed morning with beautiful tropical views. After breakfast, enjoy free time to visit a viewpoint or explore the island at your own pace. Around midday, take the ferry back to Phuket, check back into the hotel, and enjoy a chilled afternoon by the pool, at the beach, or exploring nearby shops.",
      meals: "Breakfast",
      highlights: "Phi Phi viewpoint hike",
      accommodation: { name: "The Nature" },
    },
    {
      day: 9,
      title: "Spa Day, Massages & Farewell Night",
      location: "Phuket",
      heroImage: massageThailandImage,
      description:
        "After breakfast, enjoy a slower, relaxing day in Phuket. Today is all about rest, recovery, and treating yourself. Enjoy a spa day with massages, nail treatments, wellness time, beach relaxation, shopping, cafés, or poolside downtime. This is the perfect day to recharge after the island tour and enjoy a softer side of Phuket. In the evening, enjoy a farewell dinner and final night out with the group to celebrate the trip.",
      meals: "Breakfast, Farewell Dinner",
      highlights:
        "Spa, massage, and beauty treatment day, farewell dinner, and final night out",
      accommodation: { name: "The Nature" },
    },
    {
      day: 10,
      title: "Free Morning & Departures",
      location: "Phuket",
      heroImage: day10Image,
      description:
        "Enjoy your final breakfast in Thailand, then check out of the hotel. Depending on your flight time, you may have time for last-minute shopping, beach walks, coffee, photos, or one final massage before departing. Say goodbye to Phuket and leave with unforgettable memories from Bangkok’s temples and markets to Phuket’s beaches, islands, jungle adventures, elephants, Thai cooking, nightlife, and new travel friends.",
      meals: "Breakfast",
      accommodation: { name: "Check out" },
    },
  ],
  summary: {
    duration: "10 Days",
    activities: "Culture, Food, Beaches & Nightlife",
    areas: "Bangkok, Phuket & Phi Phi Islands",
    type: "Guided Group Travel",
  },
  included: [
    {
      title: "Meals & Accommodation",
      items: [
        { text: "9 nights in 4-star hotels" },
        { text: "Daily breakfasts" },
        { text: "Dinner during the Thai cooking class" },
        { text: "Lunch during the Phi Phi Island boat tour" },
        { text: "Farewell dinner on Day 9" },
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
        { text: "Bangkok nightlife experience" },
        { text: "Grand Palace visit" },
        { text: "Floating market experience" },
        { text: "Thai cooking class" },
        { text: "ATV adventure" },
        { text: "Zipline experience" },
        { text: "Big Buddha visit" },
        { text: "Elephant Jungle Sanctuary experience" },
        { text: "Phi Phi Island boat tour" },
        { text: "Spa, massage, and beauty treatment day" },
        { text: "Farewell dinner and final night out" },
      ],
    },
  ],
  faqs: [
    {
      question: "When does the tour start?",
      answer: "The tour start date is TBD and will be confirmed with the complete booking details.",
    },
    {
      question: "How long is the trip and what is the route?",
      answer:
        "This is a 10-day guided group trip through Bangkok, Phuket, and the Phi Phi Islands, finishing back in Phuket.",
    },
    {
      question: "What accommodation is included?",
      answer: "The trip includes 9 nights in 4-star hotels.",
    },
    {
      question: "Which meals are included?",
      answer:
        "Daily breakfasts are included, along with dinner during the Thai cooking class, lunch during the Phi Phi Island boat tour, and the Day 9 farewell dinner.",
    },
    {
      question: "What transport and support are included?",
      answer:
        "The trip includes airport pickup on arrival in Bangkok, the domestic flight from Bangkok to Phuket, transport for all included scheduled activities, and support from a 24/7 tour guide.",
    },
    {
      question: "What activities are included?",
      answer:
        "Included experiences cover Bangkok nightlife, the Grand Palace, a floating market, ATV and zipline adventures, Big Buddha, a Thai cooking class, the Elephant Jungle Sanctuary, a Phi Phi Island boat tour, a spa and beauty treatment day, and the farewell dinner and final night out.",
    },
    {
      question: "Is there free time during the trip?",
      answer:
        "Yes. The itinerary balances guided group experiences with free time to relax, shop, explore, enjoy the beaches, and experience Bangkok and Phuket at your own pace.",
    },
  ],
};
