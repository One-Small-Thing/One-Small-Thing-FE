describe('About Section', () => {
  beforeEach('A user should see an about section', () => {
    cy.visit("http://localhost:3000/One-Small-Thing-FE/About")
  })
  it.skip('Should a title to the user', () => {
    cy.get('.about-main > h1').contains('About our application')

  })

  it.skip('Should display a paragraph of the application', () => {
    cy.get('.about-main > :nth-child(3)').should('be.visible')
  })

  it.skip('Should display a list of FE developers to the user', () => {
    cy.get('.about-main > :nth-child(6)').should('be.visible')
  })

  it.skip('Should display a list of BE developers to the user', () => {
    cy.get('.about-main > :nth-child(4)').should('be.visible')
  })

  it.skip('Should link a user to a github when a name is clicked', () => {
    cy.get('[href="https://github.com/ColinReinhart"]').should("have.attr", "href", "https://github.com/ColinReinhart")
  })
})