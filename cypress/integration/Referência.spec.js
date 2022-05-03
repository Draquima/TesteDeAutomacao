import signup from '../pages/signUpPage'
import signupFactory  from '../factories/SignupFactory'


describe('Cadastro', () => {


    // beforeEach(function () {
    //     cy.fixture('delivery').then((d) => {
    //         this.delivery = d
    //     })
    // })

    it.skip('Usuário deve se tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it.skip('Invalid email', function() {

        var deliver = signupFactory.deliver()

        deliver.email = 'penis.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    it('Require Fields', function(){

        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    

    })
})