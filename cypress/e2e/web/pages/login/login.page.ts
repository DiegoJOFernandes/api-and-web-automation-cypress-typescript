export class LoginPage {
  visit() {
    cy.visit("/login");
  }

  fillEmail(email: string) {
    cy.get('input[data-testid="email"]').type(email);
  }

  fillPassword(password: string) {
    cy.get('input[data-testid="senha"]').type(password);
  }

  clickLogin() {
    cy.contains("Entrar").click();
  }
}
