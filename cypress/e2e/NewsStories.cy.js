describe("NewsStories component flow", () => {
  beforeEach(() => {
    cy.selectTopic();
  });

  it("Should display a title to the user", () => {
    cy.get(".navbar").within(() => {
      cy.get("h1.navbar__main--display").should("be.visible");
    });
  });

  it("Should be able to go back to the homepage", () => {
    cy.get(".navbar__main--display").click();
    cy.url().should("eq", "http://localhost:3000/One-Small-Thing-FE");
  });

  it("Should display a hamburger menu button", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").should("be.visible");
    });
  });

  it("Should display all the news selected by topic", () => {
    cy.get(".story__section").should("exist");
    cy.get(".story")
      .children(".story__section")
      .each(() => {
        cy.get(".btn-ta").should("exist");
        cy.get(".story-container__topic").should("exist");
        cy.get(".title").should("exist");
        cy.get(".author-name").should("exist");
        cy.get(".date").should("exist");
      });
  });

  it("Should be able to see the footer", () => {
    cy.get(".footer").should("contain", "Helpline");
  });

  it("Should be able to click the Take Action button and see the CongressAction option", () => {
    cy.get(".btn-ta").eq(0).click();
    cy.get(".modal-window").should("exist");
    cy.contains(".congress-action", "Write to your local Congress member");
    cy.contains(
      "p",
      "Take action by writing a letter or making a call to your local congress person about this issue!"
    );
  });

  it("Should be able to click the Take Action button and see the Meditation option", () => {
    cy.contains(
      ".external-link-meditation",
      "Practice a 5 minute personal meditation to ease your stress."
    );
    cy.contains(
      "p",
      "You can take action just by resetting your mind and body. Take action by centering your thoughts and meditating."
    );
  });

  it("Should be able to click the CongressAction option inside the modal", () => {
    cy.get(".btn-ta").eq(0).click();
    cy.get(".congress-action").eq(0).click();
    cy.url().should("eq", "http://localhost:3000/One-Small-Thing-FE/CongressAction");
  });
});
