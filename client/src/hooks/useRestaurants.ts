import { useEffect, useState } from "react";

import { restaurantAPI } from "@/services/api";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<RestaurantDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const fetchedRestaurants = await restaurantAPI.getAll();
        setRestaurants(fetchedRestaurants);
        setLoading(false);
      } catch (err) {
        setError("Impossible de charger les restaurants");
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};

export default useRestaurants;
