import loginpage from "../../support/page-objects/Home-Page";
describe("Application login scenario", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it("Scenario: successful login", () => {
    cy.get(".col-sm-8").contains("Signup / Login").click();

    cy.get("input[type='email']").eq(0).type("Cypress_test_user@gmail.com");
    cy.get("input[type='password']").type("Cypress_test_password");
    cy.get("[data-qa='login-button']").click();
  });
  it("scenario:read data from fixture and page objects", () => {
    const login = new loginpage();
    cy.fixture("login").then((testData) => {
      login.elements.loginPortal().click();
      login.elements.loginEmail().type(testData.validLogin.email);
      login.elements.password().type(testData.validLogin.password);
      login.elements.submit().click();
    });
  });
});
