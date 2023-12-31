export interface Hair {
  color: string;
  type: string;
}

export interface Address {
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  state: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface CompanyAddress {
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  state: string;
}

export interface Company {
  address: CompanyAddress;
  department: string;
  name: string;
  title: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  domain: string;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
}

export interface SummaryEntry {
  [key: string]: {
    ageFrequencies: any;
    male: number;
    female: number;
    ageRange: string;
    ageMode: number;
    hair: { [key: string]: number };
    addressUser: { [key: string]: string };
  };
}

export interface Summary {
  department: SummaryEntry[];
}
