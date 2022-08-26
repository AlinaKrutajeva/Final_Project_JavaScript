import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";
import ShoppingCart from "../pageObjects/Shopping.cart.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  it("Scenario 1 - Login with locked_out_user", () => {
    LoginPage.userName.type("locked_out_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("contain.text", "Epic sadface: Sorry, this user has been locked out.");
  });
  it("Scenario 2 = Login with wrong password", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("password");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should("contain.text", "Epic sadface: Username and password do not match any user in this service");
  });
  it("Scenario 3 - Validate itm amount", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    LoginPage.itemAmount.should("have.length", 6);
  });
  it("Scenario 4 - Price high to low", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.setFilter.select("Price (high to low)");
    HomePage.validateFirstItem.should("contain.text", "Sauce Labs Fleece Jacket");
    HomePage.validatePrice.should("contain.text","$49.99");
  });
  it("Scenario 5 - Price low to high", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.setFilter.select("Price (low to high)");
    HomePage.validateFirstItem.should("contain.text", "Sauce Labs Onesie");
    HomePage.validatePrice.should("contain.text", "$7.99");
  });
  it("Scenario 6 - Name (Z to A)", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.setFilter.select("Name (Z to A)");
    HomePage.validateFirstItem.should("contain.text", "Test.allTheThings() T-Shirt (Red)");
  });
  it("Scenario 7 - Shopping cart", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.openShirt.click();
    HomePage.addToCartShirt.click();
    HomePage.shoppingCart.should("contain.text", "1");
    HomePage.backToProducts.click();
    HomePage.openItem.click();
    HomePage.addToCartItem.click();
    HomePage.shoppingCart.should("contain.text", "2");
  });
  it("Scenario 8 - Reset App State", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.openShirt.click();
    HomePage.addToCartShirt.click();
    HomePage.backToProducts.click();
    HomePage.shoppingCart.should("contain.text", "1");
    HomePage.stackBurgerIcon.click();
    HomePage.resetAppState.click();
    HomePage.shoppingCart.should("contain.text", "");
  });
  it("Scenario 9 - Shopping Cart Remove Button", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.openShirt.click();
    HomePage.addToCartShirt.click();
    HomePage.shoppingCart.should("contain.text", "1");
    HomePage.removeButton.click();
    HomePage.shoppingCart.should("contain.text", "");
  });
  it.only("Scenario 10 - Buy a T-Shirt", () => {
    LoginPage.userName.type("standard_user");
    LoginPage.userPassword.type("secret_sauce");
    LoginPage.loginButton.click();
    HomePage.testAllShirt.click();
    HomePage.addToCartTestShirt.click();
    HomePage.shoppingCart.click();
    ShoppingCart.checkout.click();
    ShoppingCart.firstName.type("Alina");
    ShoppingCart.lastName.type("K");
    ShoppingCart.postalCode.type("1084");
    ShoppingCart.continueButton.click();
    ShoppingCart.validateCartShirt.should("have.text", "Test.allTheThings() T-Shirt (Red)");
    ShoppingCart.finishButton.click();
    ShoppingCart.headerMessage.should("have.text", "THANK YOU FOR YOUR ORDER");
  });
});
