import { useGetBodiesQuery } from '@pe-test/celestial-store';
import { CelestialBodyCard } from '@pe-test/atomic-components';
import {
  Container,
  Typography,
  CircularProgress,
  Grid,
} from '@material-ui/core';

export const CelestialHome = () => {
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
