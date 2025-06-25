export class RegisterPage {
  visit() {
    cy.visit("/cadastrarusuarios");
  }

  fillName(name: string) {
    cy.get('input[placeholder="Digite seu nome"]').type(name);
  }

  fillEmail(email: string) {
    cy.get('input[placeholder="Digite seu email"]').type(email);
  }

  fillPassword(password: string) {
    cy.get('input[placeholder="Digite sua senha"]').type(password);
  }

  clickRegister() {
    cy.get('[data-testid="cadastrar"]').click();
  }
}
