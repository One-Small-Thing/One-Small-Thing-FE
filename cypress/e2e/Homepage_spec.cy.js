describe('Homepage', () => {

  beforeEach('A user should see the homepage', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Should display a title and icon to the user', () => {
    cy.get('.navbar').within(() => {
      cy.get('h1.navbar__main--display').should('be.visible')
      cy.get('.navbar__img').should('be.visible')
    })
  })

  it('Should display a hamburger menu button', () => {
    cy.get('.navbar').within(() => {
      cy.get('.navbar__main--menu--button').should('be.visible')
    })
  })

  it('Should allow the user to open on click', () => {
    cy.get('.navbar').within(() => {
      cy.get('.navbar__main--menu--button').click()
    })
  })

  it('Should display two buttons to the user', () => {
    cy.get('.navbar').within(() => {
      cy.get('.navbar__main--menu--button').click()
    })
  })

  it('Should display a list of crisis lines in to the user at the bottom', () => {

  })

  it('Should have the ability to redirect the user on click', () => {

  })

  it('Should close automically when a user clicks an option in the hamburger menu or when the x-button is clicked', () => {

  })

  it('Should display a little paragraph to the user about the page', () => {

  })

  it('Should allow the user to see 9 tiles of topics', () => {

  })

  it('Should allow the user to click on an option and be redirected to a page corresponding to the option clicked', () => {

  })
})