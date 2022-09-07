describe("CongressAction Flow", () => {
  beforeEach(() => {
    cy.selectCongressTakeAction();
  });

  it("Should display a title to the user", () => {
    cy.get(".navbar").within(() => {
      cy.get("h1.navbar__main--display").should("be.visible");
    });
  });

  it("Should be able to go back to the homepage", () => {
    cy.get(".navbar__main--display").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Should display a hamburger menu button", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").should("be.visible");
    });
  });

  it("Should be able to see the footer", () => {
    cy.get(".footer").should("contain", "Helpline");
  });

  it('Should display the title "Congress Members"', () => {
    cy.get(".congress-container__title").should("exist");
  });

  it("Should display the congress members", () => {
    cy.get(".congress-container__members").should("exist");
    cy.get(".congress").should("exist");
    cy.get(".congress").eq(0).contains(".name", "Michael Bennet");
    cy.get(".congress").eq(0).contains(".party", "Democrat");
    cy.get(".congress").eq(0).contains(".details", "Phone: 202-224-5852");
    cy.get(".congress")
      .eq(0)
      .contains(".details", "Twitter username: SenBennetCo");
    cy.get(".congress").eq(0).contains("a", "Website");
    cy.get(".congress").eq(0).contains("a", "Contact the representative");
  });
});
