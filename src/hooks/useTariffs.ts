import { useState, useEffect } from "react";

export interface Tariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

export const useTariffs = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/tariffs");
        if (!response.ok) {
          throw new Error("Failed to fetch tariffs");
        }
        const data = await response.json();
        setTariffs(data.sort((a: Tariff, b: Tariff) => b.price - a.price));
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch tariffs"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchTariffs();
  }, []);
  return { tariffs, loading, error };
};
