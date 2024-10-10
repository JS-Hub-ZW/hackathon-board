export interface Contributor{
    avatar_url: string;
    login: string;
    html_url: string;
}

export interface Hackathon{
    id:string;
    images:{
        landscape: string;
        potrait: string;
    }
    status: number;
    createdAt: string;
    name: string;
    description: string;
    requirements: string;
    rules: string;
    selection_criteria: string;
    prizes: Prize[];
    type: string;
    setting : string;
    participants: string;
    sponsors: Sponsor[];
    hosts: Host[];
    contacts : Contact[];
    total_prizes: number;
}

export interface Prize{
    id: number;
    amount: number;
    name: string;
    description: string;
}

export interface Host{
  name: string;
  website: string;
}

export interface Sponsor {
  imageURL: string;
}

export interface Contact{
    name: string;
    email: string;
    phone: string;
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export interface CustomText {
    text: string;
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
  }
  
export interface CustomElement {
    type: string;
    url?: string; // Only for link elements
    children: Array<CustomText | CustomElement>;
  }
  
export type CustomNode = CustomText | CustomElement;
