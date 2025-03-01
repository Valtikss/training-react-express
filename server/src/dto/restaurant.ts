import { z } from "zod";

export const restaurantSchema = z.object({
  id: z.number(),
  name: z.string(),
  address: z.string(),
  cuisine: z.string(),
  rating: z.number(),
  phone: z.string(),
  website: z.string(),
  image: z.string(),
});
export type RestaurantDTO = z.infer<typeof restaurantSchema>;

export const createRestaurantSchema = z.object({
  name: z.string(),
  address: z.string(),
  cuisine: z.string(),
  rating: z.number(),
  phone: z.string(),
  website: z.string(),
  image: z.string(),
});
export type CreateRestaurantDTO = z.infer<typeof createRestaurantSchema>;

export const updateRestaurantSchema = createRestaurantSchema.extend({});
export type UpdateRestaurantDTO = z.infer<typeof updateRestaurantSchema>;
