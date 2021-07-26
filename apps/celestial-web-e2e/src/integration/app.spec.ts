import { getCards } from '../support/app.po';

describe('celestial', () => {
  beforeEach(() => cy.visit('/'));

  it('should show celestial body cards', () => {
    getCards().should('have.length', 8);
  });
});
