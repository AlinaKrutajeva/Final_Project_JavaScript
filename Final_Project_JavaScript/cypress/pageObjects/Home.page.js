import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }
  static get itemAmount() {
    return cy.get("img.inventory_item_img");
  }
  static get setFilter() {
    return cy.get('[class="product_sort_container"]');
  }
  static get validateFirstItem() {
    return cy.get(".inventory_list > :nth-child(1)");
  }
  static get validatePrice() {
    return cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price');
  }
  static get openShirt() {
    return cy.get("#item_1_img_link");
  }
  static get addToCartShirt() {
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
  }
  static get shoppingCart() {
    return cy.get(".shopping_cart_link");
  }
  static get backToProducts() {
    return cy.get("#back-to-products");
  }
  static get openItem() {
    return cy.get("#item_0_img_link");
  }
  static get addToCartItem() {
    return cy.get("#add-to-cart-sauce-labs-bike-light");
  }
  static get stackBurgerIcon() {
    return cy.get("#react-burger-menu-btn");
  }
  static get resetAppState() {
    return cy.get("#reset_sidebar_link");
  }
  static get removeButton() {
    return cy.get("#remove-sauce-labs-bolt-t-shirt");
  }
  static get testAllShirt() {
    return cy.get("#item_3_img_link");
  }
  static get addToCartTestShirt() {
    return cy.get('[class="btn btn_primary btn_small btn_inventory"]');
  }
}

export default HomePage;
