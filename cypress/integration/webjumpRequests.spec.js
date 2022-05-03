import signup from "../pages/signUpPage"



describe('Testes do webjump', function() {

    // Primeiro cenário
    it.skip('Clicando nos botões one, two e four e verificando a ausência dos mesmos', function(){

        // Essa função entra na página
        signup.go()

        // Essa função clica nos botões
        signup.clickButtons()

        // Essa função verifica se os botões estão visíveis
        signup.verifyExistence()

        //Caso queira ver em detalhes os comandos de cada função, vá para signUpPage.js dentro da pasta 'pages'

    })

    // Segundo cenário
    it.skip('Clicando nos botões one, two e four e verificando a ausência dos mesmos no Iframe', function(){

        // Essa função entra na página
        signup.go()
        // Essa função clica nos botões dentro do Iframe
        signup.clickButtonsIframe()
        // Essa função verifica se os botões estão visíveis dentro do Iframe
        signup.verifyExistenceIframe()

    })
    // Cenário final
    it('Cenário final', function(){

        // Essa função entra na página
        signup.go()

        // Essa função entra no campo do yourFirstName e escreve 'Draquima' 
        cy.xpath('//div[@id="form_group"]//input[@id="first_name"]').type('Draquima')

        // Essa função clica no botão 'One' dentro do painel 'Buttons'
        cy.xpath('//div[@id="panel_test_one"]//button[@id="btn_one"]').click()

        // Essa função checka a opção da checkbox, OptionThree, dentro do painel 'Butons'
        cy.xpath('//div[@id="panel_test_one"]//input[@type="checkbox" and @id="opt_three"]').check()

        // Essa função seleciona a segunda opção, 'ExampleTwo', do menu dropdown do mesmo painel 'Buttons'
        cy.xpath('//div[@id="panel_test_one"]//select').select('ExampleTwo')

        // Essa função valida se o elemento encontrado contém o atributo src e seu valor link da imagem
        cy.xpath('//img[@alt="selenium"]').should('have.attr', 'src', 'https://i.imgur.com/1vsaEJB.jpg')
    })
})