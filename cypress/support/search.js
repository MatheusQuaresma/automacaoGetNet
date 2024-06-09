import msg from "../fixtures/msg.json"

Cypress.Commands.add("searchPalavraChaveDuvidaPage", (palavraChave) => {
    cy.get('.c-faq-highlight__title')
        .should('be.visible')
        .contains("Está com dúvidas?")
    cy.get('.c-faq-highlight__subtitle')
        .should('be.visible')
        .contains("nós podemos te ajudar!")
    cy.get('#faq-search-input')
        .should('be.visible')
        .type(palavraChave)
});

Cypress.Commands.add("selectOptionSearch", (option) => {
    cy.get('.c-search-dropdown-link__item')
        .should("be.visible")
        .contains(option)
        .click()
});

Cypress.Commands.add("validModalNegociacaoConcluida", () => {
    cy.get('body > div.o-modal.is-modal-open').should("be.visible")
    cy.get('.is-modal-open > .o-modal__content > .o-modal__title')
        .should("be.visible")
        .contains(msg.modalNegociacaoConcluida.titelModalNegociacaoConcluida)
    cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content')
        .should('contain', msg.modalNegociacaoConcluida.linha_1)
        .and('contain', msg.modalNegociacaoConcluida.linha_2)
        .and('contain', msg.modalNegociacaoConcluida.linha_3)
        .and('contain', msg.modalNegociacaoConcluida.linha_4)
        .and('contain', msg.modalNegociacaoConcluida.linha_5)
        .and('contain', msg.modalNegociacaoConcluida.linha_6)
        .and('contain', msg.modalNegociacaoConcluida.linha_7)
        .and('contain', msg.modalNegociacaoConcluida.linha_8)
        .and('contain', msg.modalNegociacaoConcluida.linha_9)
        .and('contain', msg.modalNegociacaoConcluida.linha_10);
});

Cypress.Commands.add("validModalPossoVenderDebitoOuBoleto", () => {
    cy.get('.is-modal-open > .o-modal__content').should("be.visible")
    cy.get('.is-modal-open > .o-modal__content > .o-modal__title')
        .should("be.visible")
        .contains(msg.modalPossoVenderDebitoOuBoleto.titelModalPossoVenderDebitoOuBoleto)
    cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content')
    .should("be.visible")
    .contains(msg.modalPossoVenderDebitoOuBoleto.linha_1)    

});


Cypress.Commands.add("validModalCriarContaGet", () => {
    cy.get('.is-modal-open > .o-modal__content').should("be.visible")
    cy.get('.is-modal-open > .o-modal__content > .o-modal__title')
        .should("be.visible")
        .contains(msg.modalPossoAberturaDeConta.titelModalPossoVenderDebitoOuBoleto)
    cy.get('.is-modal-open > .o-modal__content > .o-modal__text > .o-modal__text-content')
    .should("be.visible")
    .contains(msg.modalPossoAberturaDeConta.linha_1)    

});




