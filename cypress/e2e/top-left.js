describe('Test all alert positions', () => {
  it('top left', () => {
    cy.visit('/')
      .getByTestId('top left')
      .click()
      .getByText('default message')
      .should('exist')
      .wait(5040)
      .queryByText('default message')
      .should('not.exist');
  });
  it('top center', () => {
    cy.visit('/')
      .getByTestId('top center')
      .click()
      .getByText('default message')
      .should('exist')
      .wait(5040)
      .queryByText('default message')
      .should('not.exist');
  });
  it('top right', () => {
    cy.visit('/')
      .getByTestId('top right')
      .click()
      .getByText('There was an error processing your request.')
      .should('exist')
      .wait(8040)
      .queryByText('There was an error processing your request.')
      .should('not.exist');
  });
  it('bottom left', () => {
    cy.visit('/')
      .getByTestId('bottom left')
      .click()
      .getByText('default message')
      .should('exist')
      .wait(5040)
      .queryByText('default message')
      .should('not.exist');
  });
  it('bottom center', () => {
    cy.visit('/')
      .getByTestId('bottom left')
      .click()
      .getByText('default message')
      .should('exist')
      .wait(5040)
      .queryByText('default message')
      .should('not.exist');
  });
  it('bottom left', () => {
    cy.visit('/')
      .getByTestId('bottom left')
      .click()
      .getByText('default message')
      .should('exist')
      .wait(5040)
      .queryByText('default message')
      .should('not.exist');
  });
});
