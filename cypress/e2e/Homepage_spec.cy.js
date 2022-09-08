describe("Homepage", () => {
  beforeEach("A user should see the homepage", () => {
    cy.visit("http://localhost:3000/One-Small-Thing-FE/");
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

  it("Should allow the user to open on click", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").click();
    });
  });

  it("Should display two buttons to the user", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").click();
      cy.get(":nth-child(1) > .navbar__main--menu--link").should("be.visible");
      cy.get(":nth-child(2) > .navbar__main--menu--link").should("be.visible");
    });
  });

  it("Should display a list of crisis lines in to the user at the bottom", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").click();
    });
  });

  it("Should have the ability to redirect the user on click", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").click();
      cy.get(".navbar__main--menu--link").eq(0).click();
      cy.url().should("eq", "http://localhost:3000/One-Small-Thing-FE/About");
    });
  });

  it("Should close when a user clicks an option in the hamburger menu or when the x-button is clicked", () => {
    cy.get(".navbar").within(() => {
      cy.get(".navbar__main--menu--button").click();
      cy.get(".navbar__main--menu--button").click();
    });
  });

  it("Should display a little paragraph to the user about the page", () => {
    cy.get(".hot-topics__desc > p").should("be.visible");
  });

  it("Should allow the user to see 9 tiles of topics", () => {
    cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').should("be.visible");
    cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').contains("LGBTQ+");
  });

  it("Should allow the user to click on an option and be redirected to a page corresponding to the option clicked", () => {
    cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').should("be.visible");
    cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').contains("LGBTQ+");
    cy.get('[href="/NewsStories/LGBTQ+"] > .topics__box').click();
    cy.url().should("eq", "http://localhost:3000/One-Small-Thing-FE/NewsStories/LGBTQ+");
  });
});
