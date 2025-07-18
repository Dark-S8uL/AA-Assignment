class LearningInstancePage {
  navigate() {
    // Click on AI button and Document Automation link to navigate
    cy.get('button[name="ai"]', { timeout: 15000 })
      .should("be.visible")
      .click();
    cy.get('a[name="module-cognitive-iqbot-learning-instances"]', {
      timeout: 15000,
    })
      .should("be.visible")
      .click();

    // Wait for the correct URL to load
    cy.url().should(
      "include",
      "/modules/cognitive/iqbot/pages/learning-instances"
    );

    // Close upgrade banner if present
    cy.get("body").then(($body) => {
      if ($body.find(".main-layout-upgrade-banner").length) {
        cy.get(".main-layout-upgrade-banner__close").click();
      }
    });

    // Wait until create button is enabled
    cy.waitUntil(() =>
      cy
        .get("iframe.modulepage-frame", { timeout: 20000 })
        .its("0.contentDocument.body")
        .should("not.be.empty")
        .then(cy.wrap)
        .find("#create-learning-instance-button button")
        .then(($btn) => !$btn.hasClass("command-button__button--is_disabled"))
    );

    return this;
  }

  createInstance(instanceData) {
    // Access iframe and click "Create" button
    cy.get("iframe.modulepage-frame", { timeout: 20000 })
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .find("#create-learning-instance-button button")
      .click({ force: true });

    // Fill name and description
    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('input[name="name"]')
      .clear()
      .type(instanceData.name);

    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('textarea[name="description"]')
      .clear()
      .type(instanceData.description);

    // Select "User-defined" domain type
    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find(
        'div[data-name="domainId"] button[data-path="RioSelectInputQuery.toggle-button"]'
      )
      .first()
      .click({ force: true });

    cy.wait(2000); // Allow dropdown to render

    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find(".rio-select-input-dropdown-option-label-line__text-label-line")
      .contains("User-defined")
      .click({ force: true });

    // Verify selection
    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('div[data-name="domainId"] .clipped-text__string--for_presentation')
      .should("contain.text", "User-defined");

    // Click "Next"
    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .contains("button", "Next")
      .click();

    // Add custom fields
    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .contains("button", "Add a field")
      .click();

    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('input[placeholder="Field name"]')
      .type(instanceData.fields.fieldName);

    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('input[placeholder="Field label"]')
      .type(instanceData.fields.fieldLabel);

    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('input[name="confidenceThreshold"]')
      .click();

    cy.wait(500); // allow for form validation

    cy.get("iframe.modulepage-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .find('button[aria-label="Create"].command-button__button--is_solid')
      .should("have.attr", "data-input-status", "INTERACTIVE")
      .click();

    return this;
  }

  verifyInstance(instanceData) {
    // Go back to dashboard/home
    cy.get('a[name="dashboard"]').should("be.visible").click();

    cy.wait(3000); // Wait for iframe to load content

    cy.get("body").then(($body) => {
      if ($body.find("iframe").length) {
        cy.get("iframe")
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then(cy.wrap)
          .contains(instanceData.name, { timeout: 15000 })
          .should("exist")
          .and("be.visible");
      } else {
        cy.contains(instanceData.name, { timeout: 15000 })
          .should("exist")
          .and("be.visible");
      }
    });

    return this;
  }
}

export default LearningInstancePage;
