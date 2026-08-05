// Static navigation data extracted from components for better performance

export interface NavigationTrip {
  title: string;
  duration: string;
  location: string;
  link: string;
}

export interface NavigationDestination {
  city: string;
  country: string;
  description: string;
  link: string;
}

// Extract trips data to module level - prevents recreation on every render
export const NAVIGATION_TRIPS: readonly NavigationTrip[] = [
  { title: "Bangkok & Phuket Escape", duration: "10 Days / 9 Nights", location: "Thailand", link: "/thailand-itinerary" },
] as const;

// Extract destinations data to module level
export const NAVIGATION_DESTINATIONS: readonly NavigationDestination[] = [
  { city: "Thailand", country: "Asia", description: "Bangkok, Phuket & Phi Phi Islands", link: "/thailand-itinerary" },
] as const;
