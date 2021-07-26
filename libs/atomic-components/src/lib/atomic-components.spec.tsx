import { render } from '@testing-library/react';

import AtomicComponents from './atomic-components';

describe('AtomicComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AtomicComponents />);
    expect(baseElement).toBeTruthy();
  });
});
