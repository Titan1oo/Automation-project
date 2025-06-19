class LoginPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
  }
  fillEmail(email) {
    cy.get('#email').type(email);
  }
  fillPassword(password) {
    cy.get('#pass').type(password);
  }
  submit() {
    cy.get('button.action.login.primary').click();
  }
}
export default LoginPage;