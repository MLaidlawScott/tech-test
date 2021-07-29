import { useState, useEffect } from 'react';
import { ICelestialBody } from '@pe-test/shared-models';

export const useGetBodiesQuery = () => {
  const [data, setData] = useState<ICelestialBody[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/celestial/bodies');
        const data = await response.json();
        if (data.error) {
          throw new Error();
        }
        setData(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return { data, isLoading, error };
};
