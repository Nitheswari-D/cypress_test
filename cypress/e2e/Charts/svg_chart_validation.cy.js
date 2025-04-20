Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('The play() request was interrupted')) {
      return false; // prevent Cypress from failing the test
    }
});
describe('SVG Bar Chart Validation - D3 Demo', () => {
    beforeEach(() => {
      cy.visit('https://d3-graph-gallery.com/graph/barplot_basic.html')
    })
  
    it('should display SVG and bars', () => {
      cy.get('svg').should('exist')
      cy.get('svg rect')
        .should('have.length.greaterThan', 0)
    })

})
  