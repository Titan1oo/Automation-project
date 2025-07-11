class SignupPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  }
  fillFirstName(name) {
    cy.get('#firstname').type(name);
  }
  fillLastName(name) {
    cy.get('#lastname').type(name);
  }
  fillEmail(email) {
    cy.get('#email_address').type(email);
  }
  fillPassword(password) {
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  }
  submit() {
    cy.get('button[title="Create an Account"]').click();
  }
}
export default SignupPage;