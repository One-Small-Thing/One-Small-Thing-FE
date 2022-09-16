describe("Article", () => {
  beforeEach("A user should be on the News Article Page", () => {
    cy.selectTopic();
    cy.get(".title").eq(0).click();
  });

  it("Should display a title to the user", () => {
    cy.get(".navbar").within(() => {
      cy.get("h1.navbar__main--display").should("be.visible");
    });
  });

  it("Should display a hamburger menu button", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").should("be.visible");
    });
  });

  it("Should be to display the footer", () => {
    cy.get(".footer").should("contain", "Helpline");
  });

  it("Should store a unique article related to the users search", () => {
    cy.get("iframe").should("be.visible");
    cy.url().should(
      "eq",
      "http://localhost:3000/One-Small-Thing-FE/Article/New%20PAC%20forms%20to%20target%20anti-LGBTQ%20candidates"
    );
  });
});
