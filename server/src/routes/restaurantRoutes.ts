import { Request, Response, Router } from "express";
import { getRestaurantById, getRestaurants } from "../services";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.json(getRestaurants());
});

router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const restaurant = getRestaurantById(id);
  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).send("Restaurant not found");
  }
});

export default router;
