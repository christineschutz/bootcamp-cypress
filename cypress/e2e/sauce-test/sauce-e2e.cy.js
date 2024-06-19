/// <reference types="cypress" />
import login from "../../fixtures/login.json";
import usuario from "../../fixtures/usuarios.json";

describe('Teste de ponta a ponta no SauceLab', () => {

    beforeEach(() => {
        cy.login(login.usuario, login.senha)
    });

    it('Deve fazer um pedido de ponta a ponta', () => {
        cy.escolherProduto('Sauce Labs Fleece Jacket')
        cy.escolherProduto('Sauce Labs Onesie')
        cy.escolherProduto('Test.allTheThings() T-Shirt (Red)')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.cadastro(usuario[0].nome, usuario[0].sobrenome, usuario[0].cep)
        //cy.cadastro('Christine', 'Schütz', '89036-505')
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    });

});




/*
Cada arquivo tem uma responsabilidade (igual Gherkin/BDD)  
Funcionalidade: Tela de Login
Como usuário do Trello
Quero me autenticar
Para criar tarefas

Cenário: xxxxxxx
Dado que eu entre no site x (pré-requisitos)
Quando eu preencher os campos de autenticação (ações do usuário)
Então deve me direcionar para a tela de dashboard (resultado esperado)

    before(() => {
        //Faz qualquer coisa antes de todos os testes (hooks)
    });
    beforeEach(() => {
        //Faz qualquer coisa antes de CADA teste
    });
    after(() => {
        //Faz qualquer coisa depois de todos os testes
    });
    afterEach(() => {
        //Faz qualquer coisa depois de CADA teste
    });
 */