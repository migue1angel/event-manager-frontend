import { InformationUserInterface } from '../auth/user.interface';

export interface EventInterface {
  id: string;
  updatedAt: Date;
  deletedAt: null;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  state: string;
  isPublic: boolean;
  organizer: OrganizerInterface;
  hasSponsors: boolean;
  category: Category;
  address: Address;
  sponsors?: Sponsor[];
  ticketTypes: TicketType[];
  images: Image[];
}

export interface Address {
  id: string;
  updatedAt: Date;
  deletedAt: null;
  latitude: number;
  longitude: number;
  reference: string;
  address: string;
}

export interface Category {
  id: string;
  name: string;
  type: string;
  description: null;
  code: number;
}

export interface Image {
  id: string;
  url: string;
  publicId: string;
  resourceType: string;
  format: string;
  createdAt: Date;
  entityId: string;
}

export interface Sponsor {
  id: string;
  createdAt: Date;
  deletedAt: null;
  email: string;
  name: string;
}

export interface TicketType {
  id: string;
  createdAt: Date;
  deletedAt: null;
  name: string;
  disponibility: number;
  price: string;
  isAvailable: boolean;
  event: EventInterface;
}

export interface OrganizerInterface {
  id: string;
  createdAt: Date;
  deletedAt: null;
  email: string;
  informationUser: InformationUserInterface;
}
