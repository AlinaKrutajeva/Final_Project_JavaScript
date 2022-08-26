import BasePage from "./Base.page";

class ShoppingCart extends BasePage {
  static get url() {
    return "/cart.html";
  }
static get checkout() {
    return cy.get("#checkout");
    }
static get firstName() {
    return cy.get("#first-name");
    }
static get lastName() {
    return cy.get("#last-name");
    }
static get postalCode() {
    return cy.get("#postal-code");
    }
static get continueButton() {
    return cy.get("#continue");
    }
static get validateCartShirt() {
    return cy.get(".inventory_item_name");
    }
static get finishButton() {
    return cy.get("#finish");
    }
static get headerMessage() {
    return cy.get(".complete-header");
    }
}

export default ShoppingCart;