class MessageBoxPage {
  searchAndInsertMessageBox() {
    cy.get('input[placeholder="Search actions"]', { timeout: 15000 })
      .clear()
      .type("Message box");

    cy.wait(1000); // Wait for the list to populate

    cy.get(
      ".editor-palette__accordion--is_active > .editor-palette-section > .editor-palette-section__scroller > .editor-palette-section__list > .editor-palette-group-container > .editor-palette-group__children > .editor-palette-item > .editor-palette-item__child > .rio-focus > .clipped-text > .clipped-text__string--for_presentation",
      { timeout: 10000 }
    ).dblclick();

    cy.get("div.editor-details__header-title", { timeout: 10000 }).should(
      "be.visible"
    );
  }

  typeMessage(message) {
    cy.get('div[contenteditable="true"][name="content"]', { timeout: 10000 })
      .clear()
      .type(message);
  }

  saveMessageBox() {
    cy.get('button[name="save"]', { timeout: 15000 })
      .should("be.visible")
      .click();
    cy.wait(3000);
  }

  assertMessageBoxSaved(message) {
    cy.get(".taskbotnodelabel-details-string", { timeout: 15000 }).should(
      "contain.text",
      message
    );
  }

  closeEditor() {
    cy.get('button[name="close"]', { timeout: 15000 })
      .should("be.visible")
      .click();
    cy.contains("span", "Automation", { timeout: 15000 }).should("be.visible");
  }
}

export default MessageBoxPage;
