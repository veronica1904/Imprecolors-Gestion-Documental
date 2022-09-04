describe('user and register', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  }),
 
  it ('user can login', () =>{
   cy.contains('ImpriColors').click
   cy.get('#users').type('12334')
   cy.get('#password').type('123456789')
   cy.get('#btn-login').click()
   cy.get('#btn-dashboard').click()
   cy.contains('Usuarios').click()
   cy.contains('Crear Usuario').click()
 

  })
 


  })


   