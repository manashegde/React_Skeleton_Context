/// <reference types="Cypress" />

import { visitSite } from "../helpers/helpers";

beforeEach(() => {
  visitSite();
});
context("Login", () => {
  it("should have a username field, password field, and login button", () => {
    cy.get('[data-test="login-username-field"]');
    cy.get('[data-test="login-password-field"]');
    cy.get('[data-test="login-btn"]');
  });
  it("should login the user", () => {
    const loginBtn = cy.get('[data-test="login-btn"]');
    loginBtn.click();
    cy.url()
      .should("include", "authenticated/home")
      .should(() => {
        expect(sessionStorage.getItem("auth")).to.not.be.null;
      });
  });
});
