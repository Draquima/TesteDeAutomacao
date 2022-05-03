



class signupPage {
    botoesInvisiveis = '//div[@id="panel_body_one"]//button[@type="button" and @id="_id_" and @style="display: none;"]';
    botoesVisiveis = '//div[@id="panel_body_one"]//button[@type="button" and @id="_id_"]';
    ids = ['btn_one', 'btn_two', 'btn_link'];


    // Aqui entra na página da baseUrl. Caso queira mudar a url base, vá para cypress.json na pasta node_modules
    go() {
        cy.visit('/')
    }

    // Aqui busca o caminho via xpath e clica nos botões
    clickButtons() {
        cy.xpath(this.botoesVisiveis.replace('_id_', this.ids[0])).click() 
        cy.xpath(this.botoesVisiveis.replace('_id_', this.ids[1])).click()
        cy.xpath(this.botoesVisiveis.replace('_id_', this.ids[2])).click()
    }

    // Aqui verifica se os botões não estão visíveis na página
    verifyExistence() {
        cy.xpath(this.botoesInvisiveis.replace('_id_', this.ids[0])).should('not.be.visible');
        cy.xpath(this.botoesInvisiveis.replace('_id_', this.ids[1])).should('not.be.visible');
        cy.xpath(this.botoesInvisiveis.replace('_id_', this.ids[2])).should('not.be.visible');

    }

    // Aqui verifica se os botões não estão visíveis na página dentro do Iframe
    verifyExistenceIframe() {
        cy.get('#iframe_panel_body iframe').its('0.contentWindow.document.body').find('#btn_one').should('not.be.visible')
        cy.get('#iframe_panel_body iframe').its('0.contentWindow.document.body').find('#btn_two').should('not.be.visible')
        cy.get('#iframe_panel_body iframe').its('0.contentWindow.document.body').find('#btn_link').should('not.be.visible')

    }

    clickButtonsIframe() {
        cy.get('#iframe_panel_body iframe').its('0.contentWindow.document.body').find('#btn_one').click()
        cy.get('#iframe_panel_body iframe').its('0.contentWindow.document.body').find('#btn_two').click()
        cy.get('#iframe_panel_body iframe').its('0.contentWindow.document.body').find('#btn_link').click()

    }











    // Ignorar
    fillForm(delivery) {

        cy.xpath('//input[@name="fullName"]').type(delivery.name)
        cy.xpath('//input[@name="cpf"]').type(delivery.cpf)
        cy.xpath('//input[@name="email"]').type(delivery.email)
        cy.xpath('//input[@name="whatsapp"]').type(delivery.whatsapp)

        cy.xpath('//input[@name="postalcode"]').type(delivery.adress.postalcode)
        cy.xpath('//input[@type="button" and @value="Buscar CEP"]').click()

        cy.xpath('//input[@name="address-number"]').type(delivery.adress.phone_number)
        cy.xpath('//input[@name="address-details"]').type(delivery.adress.complement)

        cy.xpath('//input[@name="address"]').should('have.value', delivery.adress.street)
        cy.xpath('//input[@name="district"]').should('have.value', delivery.adress.district)
        cy.xpath('//input[@name="city-uf"]').should('have.value', delivery.adress.city_state)

        cy.contains(delivery.delivery_method).click()
        cy.xpath('//input[contains(@accept, "image")]').attachFile('/Imagens/' + delivery.cnh)
    }

    //Ignorar
    submit() {
        cy.xpath('//button[@type="submit"]').click()
    }

    //Ignorar
    modalContentShouldBe(expectedMessage) {
        //cy.contains(expectedMessage)
        cy.xpath('//div[@id= "swal2-html-container" and @class="swal2-html-container"]')
            .should("have.text", expectedMessage)

    }
    //Ignorar
    alertMessageShouldBe(expectedMessage) {
        //cy.contains(expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

}

export default new signupPage;