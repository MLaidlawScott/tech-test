import { Route } from 'react-router-dom';
// below is needed due to a bug with nx
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CelestialHome } from '@pe-test/celestial-web/home';

export const App = () => {
  return <Route path="/" component={CelestialHome} />;
};

export default App;
