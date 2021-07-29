// import { useGetBodiesQuery } from '@pe-test/celestial-store';
import { CelestialBodyCard } from '@pe-test/web-component-library';
import { useGetBodiesQuery } from '@pe-test/hooks';
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
} from '@material-ui/core';

export const CelestialHome = () => {
  // For the purpose of the tech test we have replaced the below hook with our own implementation to reduce bundle size.
  // const { data, error, isLoading } = useGetBodiesQuery();
  const { data, error, isLoading } = useGetBodiesQuery();

  return (
    <Container>
      <Grid container direction="row" justifyContent="center" spacing={2}>
        {error && <Typography>Something Went Wrong...</Typography>}
        {isLoading && <CircularProgress />}
        {data &&
          data.map((body) => (
            <Grid item key={body.id}>
              <CelestialBodyCard celestialBody={body} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CelestialHome;
