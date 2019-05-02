export class Car {
  id: string;
  name: string;
  type: string;
  address: string;
  location: Location;
  imageUrl: string;
}

export class Location {
  latitude: number;
  longitude: number;
}

export const DefaultMapLocation: Location = {
  latitude: -37.806872,
  longitude: 144.970313
};

export const CARS: Car[] = [
  {
    id: 'c1',
    name: 'Hyundai i20',
    type: 'Hatchback',
    address: '39 Franklin St, Melbourne VIC 3000',
    location: {latitude: -37.807563, longitude: 144.962911},
    imageUrl: 'assets/carimages/hyundaii20.png',
  },
  {
    id: 'c2',
    name: 'Hyundai i20',
    type: 'Hatchback',
    address: '4 Union Pl, Carlton VIC 3053',
    location: {latitude: -37.796781, longitude: 144.965483},
    imageUrl: 'assets/carimages/hyundaii20.png'
  },
  {
    id: 'c3',
    name: 'Hyundai i20',
    type: 'Hatchback',
    address: 'Victoria Cl, Carlton VIC 3053',
    location: {latitude: -37.800444, longitude: 144.968816},
    imageUrl: 'assets/carimages/hyundaii20.png'
  },
  {
    id: 'c4',
    name: 'Hyundai i20',
    type: 'Hatchback',
    address: '31-61 Bouverie St, Carlton VIC 3053',
    location: {latitude: -37.805519, longitude: 144.961574},
    imageUrl: 'assets/carimages/hyundaii20.png'
  },
  {
    id: 'c5',
    name: 'Hyundai Santa Fe',
    type: 'SUV',
    address: '111-153 Queen St, Melbourne VIC 3000',
    location: {latitude: -37.815474, longitude: 144.960907},
    imageUrl: 'assets/carimages/hyundaisantafe.png'
  },
  {
    id: 'c6',
    name: 'Toyota Hiace',
    type: 'Van',
    address: '77 Burnley st, Richmond VIC 3121',
    location: {latitude: -37.814492, longitude: 145.009845},
    imageUrl: 'assets/carimages/toyotahiace.png'
  }
];
