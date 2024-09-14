export interface USer {
  userName?: string;
  dp?: string;
  firstName: string;
  lastName?: string;
  bio?:string;
  email: string;
  contact?: string;
  password: string;
  id: string;
  createdAt: string;
  eventsInvolvedIn?: Event[];
  eventsAttended?: Event[];
  eventsToBeAttended?: Event[];
  wishToAttended?: Event[];
}

export interface ClientUser {
  id?: string;
  userName?: string;
  email?: string | null;
  dp?: string;
  firstName?: string;
  lastName?: string;
  contact?: string;
  createdAt?: string;
}

export interface SignUpFormData extends USer {
  confirmPassword: string;
}

export type category =
  | "Business"
  | "Music"
  | "Parties"
  | "Food & Drinks"
  | "Festivals";

export interface Event {
  _id?:string
  name: string;
  date: string;
  venue: string;
  time: string;
  duration?: string;
  organizer: USer;
  attendees?: USer[];
  seats: string;
  description: string;
  category: string;
  banner: string;
  noOfInterests?:number;
}
