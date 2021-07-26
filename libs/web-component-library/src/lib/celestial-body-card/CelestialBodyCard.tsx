import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Theme,
  Typography,
} from '@material-ui/core';
import { ICelestialBody } from '@pe-test/shared-models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
    },
  })
);

export interface ICelestialBodyCardProps {
  celestialBody: ICelestialBody;
}

export const CelestialBodyCard: React.FC<ICelestialBodyCardProps> = ({
  celestialBody,
}) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      elevation={6}
      data-testid="celestial-body-card"
    >
      <CardContent>
        <Typography align="center" gutterBottom variant="h6">
          {celestialBody.name}
        </Typography>
        <CardMedia className={classes.media} image={celestialBody.imageUrl} />
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Age</TableCell>
                <TableCell align="right">{`${celestialBody.age} Years`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Solar Mass</TableCell>
                <TableCell align="right">{`${celestialBody.solarMass} kg`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default CelestialBodyCard;
