describe("Database Seeding with Custom Command", () => {
    it("Seeds test data using a custom Cypress command", () => {
        cy.seedDatabase(); // Calls the custom command
    });
});
