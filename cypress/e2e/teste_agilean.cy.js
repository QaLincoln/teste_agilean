describe('agilean_Web', () => {

  beforeEach( () => { 
    cy.visit('/')   // cypress.config
    
    cy.url().should('eq','https://agilean.com.br/antigo-quizquality/')

  })

  
  it('Preenchendo e validando mini formulario', () => {   
    cy.get('#rd-text_field-UN5SCFkGJdQ57PCk6D2RIQ').type('Lincoln Damasceno')
    cy.get('#rd-email_field-WBIeKw6XDKoHYhP1ZX5FqA').type('lincoln114@gmail.com')
    cy.get('#rd-phone_field-7ZnXTexZJjFEn2-xy7Uh8w').type('85985763075')
    cy.get('#rd-text_field-ZjOkSlFY5vCEQodyHcSJLg').type('teste')

  //Validações:
    cy.get('#rd-text_field-UN5SCFkGJdQ57PCk6D2RIQ').should('be.visible', 'Lincoln Damasceno');
    cy.get('#rd-text_field-UN5SCFkGJdQ57PCk6D2RIQ').should('be.visible','Lincoln Damasceno')
    cy.get('#rd-email_field-WBIeKw6XDKoHYhP1ZX5FqA').should('be.visible','lincoln114@gmail.com')
    cy.get('#rd-phone_field-7ZnXTexZJjFEn2-xy7Uh8w').should('be.visible','85985763075')
    cy.get('#rd-text_field-ZjOkSlFY5vCEQodyHcSJLg').should('be.visible','teste')

    cy.get('#rd-button-lanvjyf1').click()

    cy.get('.cc-ALLOW').should('be.visible');   //validando imagem 

        
           
    })

  })
  