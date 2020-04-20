beforeEach(() => {
  cy.visit('http://localhost:3001/')
})

describe('Test all alert positions in example app', () => {
  it('top left', () => {
    cy.findByTestId('top left').click()
    cy.findByText('default message')
      .should('exist')
      .wait(5040)
      .findByText('default message')
      .should('not.exist')
  })
  it('top center', () => {
    cy.findByTestId('top center').click()
    cy.findByText('default message')
      .should('exist')
      .wait(5040)
      .findByText('default message')
      .should('not.exist')
  })
  it('top right', () => {
    cy.findByTestId('top right').click()
    cy.findByText('There was an error processing your request.')
      .should('exist')
      .wait(8040)
    cy.findByText('There was an error processing your request.').should(
      'not.exist',
    )
  })
  it('bottom left', () => {
    cy.findByTestId('bottom left').click()
    cy.findByText('default message').should('exist').wait(5040)
    cy.findByText('default message').should('not.exist')
  })
  it('bottom center', () => {
    cy.findByTestId('bottom left').click()
    cy.findByText('default message').should('exist').wait(5040)
    cy.findByText('default message').should('not.exist')
  })
  it('bottom left', () => {
    cy.findByTestId('bottom left').click()
    cy.findByText('default message').should('exist').wait(5040)
    cy.findByText('default message').should('not.exist')
  })
})
