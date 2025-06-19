import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';

describe('Change Password Test', () => {
  const login = new LoginPage();
  const account = new AccountPage();

  before(function () {
    cy.fixture('user').then((data) => {
      this.email = data.email;
      this.password = data.password;
      this.newPassword = 'NewPass123!';
    });
  });

  it('logs in and changes password', function () {
    // Step 1: Login
    login.visit();
    login.fillEmail(this.email);
    login.fillPassword(this.password);
    login.submit();



    // Step 2: Navigate to change password
    account.goToChangePassword();

    // Step 3: Change password
    account.fillPasswordChange(this.password, this.newPassword);

    // Step 4: Confirm success message
    cy.contains('You saved the account information.').should('be.visible');

    // Optional: Update fixture with new password (for next login)
    cy.writeFile('cypress/fixtures/user.json', {
      email: this.email,
      password: this.newPassword
    });
  });
});