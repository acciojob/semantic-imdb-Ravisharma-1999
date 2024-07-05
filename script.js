//your code here
describe('Movie Detail Page', () => {
    const baseUrl = 'http://localhost:3000'; // Adjust this to match your local setup

    it('should have a non-empty summary section', () => {
        cy.visit(baseUrl + "/main.html");
        cy.get('#summary').should('exist');
        cy.get('#summary').within(() => {
            cy.get('p').should('exist').and('not.be.empty');
        });
    });
});
