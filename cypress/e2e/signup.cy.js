import SignupPage from './pages/SignupPage';

const signup = new SignupPage();

describe('Signup Test', () => {
  it('should sign up a new user', () => {
    const email = `Shubh123@testmail123.com`;
    const password = 'Test@1234';

    cy.writeFile('cypress/fixtures/user.json', { email, password });

    signup.visit();
    signup.fillFirstName('Shubh');
    signup.fillLastName('User');
    signup.fillEmail(email);
    signup.fillPassword(password);
    signup.submit();

    cy.wait(3000);
    cy.contains('Thank you for registering').should('be.visible');
  });
});