export interface OrderInterface {
    id:           string;
    createdAt:    Date;
    userId:       string;
    totalAmount:  string;
    status:       string;
    paid:         boolean;
    orderDetails: OrderDetail[];
    ticketType:   TicketType;
}

export interface OrderDetail {
    id:             string;
    ticketTypeId:   string;
    ticketTypeName: string;
    quantity:       number;
    price:          string;
}

export interface TicketType {
    id:            string;
    createdAt:     Date;
    deletedAt:     null;
    name:          string;
    disponibility: number;
    price:         string;
    isAvailable:   boolean;
    event:         Event;
}

export interface Event {
    id:          string;
    updatedAt:   Date;
    deletedAt:   null;
    name:        string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    state:       string;
    isPublic:    boolean;
    organizer:   string;
    hasSponsors: boolean;
}
