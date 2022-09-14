describe('Article', () => {
  beforeEach('A user should be on the News Article Page', () => {
    cy.visit("http://localhost:3000/One-Small-Thing-FE/Article")
    cy.get('[href="/NewsStories/Environment"] > .topics__box').click()
    cy.get(':nth-child(1) > .story__section > .Link__Article > .story__section__title-box > .title').click()
  })

  it('Should store a unique article related to the users search', () => {
    cy.get('iframe').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/One-Small-Thing-FE/Article/Peru%20to%20sue%20Repsol%20for%20$4.5bn%20over%20oil%20spill')
  })
})