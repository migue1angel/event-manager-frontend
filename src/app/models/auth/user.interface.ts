

export interface UserInterface {
    id:              string;
    email:           string;
    roles:           RoleInterface[];
    informationUser: InformationUserInterface;
}

export interface InformationUserInterface {
    id:       string;
    name:     string;
    lastname: string;
    phone:    null;
}

export interface RoleInterface {
    id:   string;
    code: number;
    name: string;
}
