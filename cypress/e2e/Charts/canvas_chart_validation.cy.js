describe('Canvas Chart Validation - Demo', () => {
    beforeEach(() => {
      cy.visit('https://www.chartjs.org/docs/latest/samples/bar/vertical.html');
    });
  
    it('should display the canvas chart', () => {
      cy.get('canvas').should('be.visible');
    });
});
  