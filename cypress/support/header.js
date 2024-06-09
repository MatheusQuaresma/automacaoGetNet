
Cypress.Commands.add("waitLoadHeader", () => {
    cy.get('.gnt-header-wrapper').should('be.visible')
    cy.get('.gnt-brand-desktop').should('be.visible')
    cy.get('.gnt-nav-label-depth1').contains("Produtos").should('be.visible')
    cy.get('.gnt-nav-label-depth1').contains("Mais Soluções").should('be.visible')
    cy.get('.gnt-nav-label-depth1').contains("Ajuda").should('be.visible')
    cy.get('.gnt-nav-label-depth1').contains("Saiba mais").should('be.visible')
    cy.get('.gnt-nav-button').should('be.visible').contains("Quero ser cliente")
    cy.get('#modal-fuga').invoke('attr', 'style', 'display: none;');
    
});


Cypress.Commands.add("selectOptionLabelHeader", (option) => {
    cy.get('.gnt-nav-label-depth1')
        .contains(option)
        .should('be.visible')
        .trigger('mouseover');
});

