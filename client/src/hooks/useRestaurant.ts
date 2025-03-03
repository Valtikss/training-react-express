import { useEffect, useState } from "react";

import { AxiosError } from "axios";
import { restaurantAPI } from "@/services/api";

const useRestaurant = (id: number) => {
  const [restaurant, setRestaurant] = useState<RestaurantDTO>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const fetchedRestaurant = await restaurantAPI.getById(id);
        setRestaurant(fetchedRestaurant);
        setLoading(false);
      } catch (err) {
        // Check if not found
        if ((err as AxiosError).response?.status === 404) {
          setError("Restaurant non trouvé");
        } else {
          setError("Impossible de charger le restaurant");
        }
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, []);

  return { restaurant, loading, error };
};

export default useRestaurant;
