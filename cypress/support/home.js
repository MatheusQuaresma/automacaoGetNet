
Cypress.Commands.add("openHome", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    cy.visit('/')

});

Cypress.Commands.add('hideModal', () => {
    cy.get('body').then($body => {
        if ($body.find('.modal-fuga.active').length > 0) {
            cy.get('.modal-fuga.active').invoke('remove');
        }
    });
});

Cypress.Commands.add('visitDuvidasPage', () => {
    cy.visit('duvidas/')
    cy.waitLoadHeader()
    cy.get('.c-faq-highlight__background-cover').should('be.visible')
});


