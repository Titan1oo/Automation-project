class AccountPage {
  openMenu() {
    cy.get('.customer-welcome > .action').click({ force: true });
  }
  openMenu() {
    cy.get('.customer-welcome .action.switch').click({ force: true });
  }
    
  
  goToChangePassword() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    cy.get('#change-password').check({ force: true });
  }
  fillPasswordChange(currentPass, newPass) {
    cy.get('#current-password').type(currentPass);
    cy.get('#password').type(newPass);
    cy.get('#password-confirmation').type(newPass);
    cy.get('button[title="Save"]').click();
  }
}
export default AccountPage;