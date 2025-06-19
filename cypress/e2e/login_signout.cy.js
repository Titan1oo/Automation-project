import LoginPage from './pages/LoginPage';

describe('Login and Sign Out Test', () => {
  const login = new LoginPage();

  before(function () {
    cy.fixture('user').then((data) => {
      this.email = data.email;
      this.password = data.password;
    });
  });

  it('logs in and then signs out', function () {
    // Login
    login.visit();
    login.fillEmail(this.email);
    login.fillPassword(this.password);
    login.submit();

    cy.contains('Welcome').should('be.visible');

    // Wait for customer welcome section to render
    cy.get('.customer-welcome').should('be.visible');
    

    // Open dropdown menu and sign out
    cy.get('.customer-welcome')
      .find('button')
      .first() // Ensure only one button is targeted
      .should('be.visible')
      .click({ force: true });

    cy.get('a')
      .contains('Sign Out')
      .should('be.visible')
      .click({ force: true });

    // Confirm logout success
    cy.url().should('include', '/customer/account/logoutSuccess');
  });
});