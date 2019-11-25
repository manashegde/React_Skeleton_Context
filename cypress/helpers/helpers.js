/// <reference types="Cypress" />

export function visitSite() {
  cy.visit("http://localhost:3000", {
    onBeforeLoad: win => {
      win.sessionStorage.clear();
    }
  });
}
export function doLogin() {
  const loginBtn = cy.get('[data-test="login-btn"]');
  loginBtn.click();
}
