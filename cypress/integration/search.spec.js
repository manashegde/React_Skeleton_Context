/// <reference types="Cypress" />

import { visitSite, doLogin } from "../helpers/helpers";

function goToEntrySearch() {
  cy.get('[data-test="crossing-procedure-btn"]').click();
  cy.get('[data-test="traveler-arrival-link"]')
    .find("a")
    .click();
}
beforeEach(() => {
  visitSite();
  doLogin();
});
context("Search", () => {
  describe("entry search", () => {
    it("should go to the entry search form", () => {
      goToEntrySearch();
      cy.contains("Entry Search");
    });

    it("should search for the traveler and go to the flight information page", () => {
      goToEntrySearch();
      cy.get('[data-test="search-traveler-btn"]').click();
      cy.contains("Flight Information");
    });
  });

  it("should go to the Exit search form", () => {
    cy.get('[data-test="crossing-procedure-btn"]').click();
    cy.get('[data-test="traveler-departure-link"]')
      .find("a")
      .click();
    cy.contains("Exit Search");
  });
});
