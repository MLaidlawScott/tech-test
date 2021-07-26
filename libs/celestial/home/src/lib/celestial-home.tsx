import { useGetBodiesQuery } from '@pe-test/celestial-store';

export const CelestialHome = () => {
  const { data, error, isLoading } = useGetBodiesQuery();

  return (
    <div>
      <h1>Welcome to celestial-home!</h1>
    </div>
  );
};

export default CelestialHome;
