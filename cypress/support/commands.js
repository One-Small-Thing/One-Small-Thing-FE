Cypress.Commands.add("selectTopic", () => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').contains('LGBTQ+')
    cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').click()
});