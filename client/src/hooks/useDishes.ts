import { useEffect, useState } from "react";

import { dishApi } from "@/services/api";

const useDishes = (restaurantId: number) => {
  const [dishes, setDishes] = useState<DishDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDishes = async () => {
    try {
      const fetchedDishes = await dishApi.getAll(restaurantId);
      setDishes(fetchedDishes);
      setLoading(false);
    } catch (err) {
      setError("Impossible de charger les plats du restaurant " + restaurantId);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const refreshDishes = () => {
    setLoading(true);
    fetchDishes();
  };

  return { dishes, loading, error, refreshDishes };
};

export default useDishes;
