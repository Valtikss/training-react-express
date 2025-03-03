type RestaurantDTO = {
  id: number;
  name: string;
  address: string;
  cuisine: string;
  rating: number;
  phone: string;
  website: string;
  image: string;
};

type CreateOrUpdateRestaurantDTO = Omit<RestaurantDTO, "id">;

type DishDTO = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type CreateDishDTO = Omit<DishDTO, "id">;
