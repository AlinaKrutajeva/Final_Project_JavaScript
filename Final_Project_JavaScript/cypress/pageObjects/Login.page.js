import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get userName() {
    return cy.get("#user-name");
  }
  static get userPassword() {
    return cy.get("#password");
  }
  static get loginButton() {
    return cy.get("#login-button");
  }
  static get errorMessage() {
    return cy.get('[class="error-message-container error"]');
  } 
}

export default LoginPage;
