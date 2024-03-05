/// <reference types="cypress"/>

describe('Cadastrar dispositivos', ()=> {
    it('Cadastrar dispositivo com sucesso', ()=>{
        //fazendo requisição API
        cy.request({
            method: 'POST',
            //endpoint da api
            url:'https://api.restful-api.dev/objects',
            body: {
                "name": "Dispositivo Kelly",
                "data":{
                    "year":2050,
                    "price":185.00,
                    "CPU model": "Intel Core i9",
                    "Hard disk size":"1 TB"
                }
            }
        })
        .then((response)=> {
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal("Dispositivo Kelly")
        })

    })
})