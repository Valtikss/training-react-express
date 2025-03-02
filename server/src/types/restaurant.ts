export type Dish = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type Restaurant = {
  id: number;
  name: string;
  address: string;
  cuisine: string;
  rating: number;
  phone: string;
  website: string;
  image: string;
  dishes: Dish[];
};
