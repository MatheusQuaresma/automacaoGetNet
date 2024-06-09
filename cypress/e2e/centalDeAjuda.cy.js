/// <reference types="cypress" />
const retries = { retries: 1 }
beforeEach(() => {
    cy.openHome()
    cy.waitLoadHeader()
    cy.hideModal()
    cy.visitDuvidasPage()
});
describe('Validação da cental de ajuda', retries, () => {
    it('CT001- Valida Busca de ajuda referente a Boleto negocia concluí a negociação', () => {
        cy.searchPalavraChaveDuvidaPage("Boleto")
        cy.selectOptionSearch("Eu concluí a negociação, de que forma receberei meu boleto?")
        cy.validModalNegociacaoConcluida()
    });
    it('CT002- Valida Busca de ajuda referente a boleto e/ou débito', () => {
        cy.searchPalavraChaveDuvidaPage("Boleto")
        cy.selectOptionSearch("Posso vender com boleto e/ou débito?")
        cy.validModalPossoVenderDebitoOuBoleto()
    });
    it('CT003- Valida Busca de ajuda referente a como faço para abrir uma Get Contao', () => {
        cy.searchPalavraChaveDuvidaPage("Boleto")
        cy.selectOptionSearch("Como faço para abrir uma Get Conta? Preciso ter uma máquina de cartão?")
        cy.validModalCriarContaGet()
    });

});