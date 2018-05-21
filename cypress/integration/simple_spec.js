describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('localhost:8080')

    cy.get('input.searchInput')
      .type('kill bill') 
  })
})