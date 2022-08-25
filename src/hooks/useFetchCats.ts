import axios from "axios";
import { CatBreed } from "contracts/cats";
import { useCallback, useState } from "react";

export function useFetchCats() {
  const [cats, setCats] = useState<CatBreed[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const fetchCats = useCallback(async (limit?: number): Promise<void> => {
    try {
      setLoading(true);
      const url = `https://api.thecatapi.com/v1/breeds`;
      const { data } = await axios.get<CatBreed[]>(url);
      setCats(limit ? data.slice(0, limit) : data);
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    fetchCats,
    cats,
    loading,
    error,
  };
}
