describe('cumcord', () => {
  it('injects', () => {
    cy.visit('https://discord.com/app');
    cy.get(`[name="email"]`).type(Cypress.env("username"))
    cy.get(`[name="password"]`).type(Cypress.env("password"))
    cy.get(`[type="submit"]`).click();

    // it can take max 1 minute to log in before crash
    cy.get(`[class*="panels-]"`, { timeout: 60_000 });
  })
})