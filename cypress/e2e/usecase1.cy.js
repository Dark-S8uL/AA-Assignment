import BotPage from "../pages/BotPage";
import LoginPage from "../pages/LoginPage";
import MessageBoxPage from "../pages/messageBoxPage";

describe("Use Case 1: Bot Creation using Fixture Data", () => {
  const loginPage = new LoginPage();
  const botPage = new BotPage();
  const messageBoxPage = new MessageBoxPage();

  beforeEach(() => {
    cy.fixture("testData").then((data) => {
      loginPage.visit();
      loginPage.login(data.username, data.password);
    });
  });

  it("should create a message box bot and assert creation", () => {
    cy.fixture("testData").then((data) => {
      // botPage.navigate();
      botPage.createBot(data.botName);
      botPage.assertBotCreated(data.botName);

      messageBoxPage.searchAndInsertMessageBox();
      messageBoxPage.typeMessage("Hello from Cypress!");
      messageBoxPage.saveMessageBox();
      messageBoxPage.assertMessageBoxSaved("Hello from Cypress!");
      messageBoxPage.closeEditor();
    });
  });
});
