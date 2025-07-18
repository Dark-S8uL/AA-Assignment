import LearningInstancePage from "../pages/LearningInstancePage";
import LoginPage from "../pages/LoginPage";

describe("Use Case 2: Create Learning Instance with Fixture Data", () => {
  const loginPage = new LoginPage();
  const instancePage = new LearningInstancePage();

  beforeEach(() => {
    cy.fixture("testData").then((data) => {
      loginPage.visit();
      loginPage.login(data.username, data.password);
    });
  });

  it("should create a learning instance and verify", () => {
    cy.fixture("testData").then((data) => {
      instancePage.navigate();
      instancePage.createInstance(data.learningInstance);
      instancePage.verifyInstance(data.learningInstance);
    });
  });
});
