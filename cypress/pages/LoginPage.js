class LoginPage {
  visit() {
    cy.visit("/");
  }

  enterEmail(email = Cypress.env("username")) {
    cy.get('[name="username"]', { timeout: 10000 })
      .should("be.visible")
      .type(email);
  }

  enterPassword(password = Cypress.env("password")) {
    cy.get('[name="password"]', { timeout: 10000 })
      .should("be.visible")
      .type(password);
  }

  clickLogin() {
    cy.get('[name="submitLogin"]', { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  login(email = Cypress.env("username"), password = Cypress.env("password")) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;
