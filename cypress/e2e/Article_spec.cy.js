describe('Article', () => {
  beforeEach('A user should be on the News Article Page', () => {
    cy.selectTopic()
    cy.get('.title').eq(0).click()
  })

  it('Should store a unique article related to the users search', () => {
    cy.get('iframe').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/One-Small-Thing-FE/Article/New%20PAC%20forms%20to%20target%20anti-LGBTQ%20candidates')
  })
})