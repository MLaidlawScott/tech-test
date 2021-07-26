import { Route } from 'react-router-dom';
import { CelestialHome } from '@pe-test/celestial/home';

export const App = () => {
  return <Route path="/" component={CelestialHome} />;
};

export default App;
