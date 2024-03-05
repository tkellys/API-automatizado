/// <reference types="cypress"/>

describe('Buscar dispositivos', ()=> {
    it('Buscar dispositivos específicos', ()=>{
        //fazendo requisição API
        cy.request({
            method: 'GET',
            //endpoint da api
            url:'https://api.restful-api.dev/objects/6'
        })
        .then((response)=> {
            expect(response.status).to.equal(200)
            expect(response.status).to.exist
            expect(response.body.name).to.equal("Apple AirPods")
        })

    })

    it('Buscar todos os dispositivos', ()=>{
        cy.request({
            method: 'GET',
            //endpoint da api
            url:'https://api.restful-api.dev/objects'
        })
        .then((response)=> {
            //verificando a lista se tem as propriedades id,name, data que é o que traz na API
            response.body.forEach((element) => {
                expect(element).to.have.property('id')
                expect(element).to.have.property('data')
                expect(element).to.have.property('name')

            });

        
        })
        
    })

})