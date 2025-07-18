class BotPage {
  createBot(botName) {
    // Open Create Bot modal
    cy.contains("button", "Create a bot…", { timeout: 15000 })
      .should("be.visible")
      .click({ force: true });

    // Verify modal contents are visible
    // cy.contains("h1", "Create Task Bot", { timeout: 15000 }).should(
    //   "be.visible"
    // );
    cy.get(".modal-form__content", { timeout: 15000 }).should("be.visible");

    // Fill in bot name
    cy.get('input[name="name"]', { timeout: 15000 }).clear().type(botName);

    // Choose Platform (Windows)
    cy.get('[data-value="WINDOWS"]:visible', { timeout: 15000 })
      .first()
      .click({ force: true });

    // Click Create & Edit
    cy.get('button[name="submit"]', { timeout: 15000 })
      .contains("Create & edit")
      .click();
  }

  assertBotCreated(botName) {
    // Assert bot name exists on screen (after creation/redirection)
    cy.contains(botName, { timeout: 15000 }).should("exist");
  }
}

export default BotPage;
