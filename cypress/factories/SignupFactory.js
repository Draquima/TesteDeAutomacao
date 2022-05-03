var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '111111111111',
                adress: {
                    postalcode: '04814180',
                    phone_number: '1190803289',
                    complement: 'Ap casa vermelha',
                    district: 'Jardim Maria Rita',
                    street: 'Rua José Francisco de Freitas',
                    city_state: 'São Paulo/SP'
    
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }

        return data
    }

}