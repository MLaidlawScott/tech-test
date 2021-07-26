import { render } from '@testing-library/react';

import CelestialHome from './celestial-home';

describe('CelestialHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CelestialHome />);
    expect(baseElement).toBeTruthy();
  });
});
