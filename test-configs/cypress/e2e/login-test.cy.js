// Referenciar que trabajamos con Cypress para que Visual Studio Code autocomplete correctamente
/// <reference types="Cypress" /> 
import "cypress-real-events";

it('Test de acceso por Login', function(){
  // conectarme con la url siguiente:
    cy.visit('https://institutoweb.com.ar/test/login.html')
  // escribir el usuario
    cy.get('#tuusuario').type('MiUsuario')
  // escribir la clave
    cy.get('#tuclave').type('ClaveSecretaDaniel')
  // escribir el email
    cy.get('#tumail').type('mimail@gmail.com')
    cy.wait(1000)  // cuatro segundos de espera
    cy.screenshot('imagen')
  // Click en el boton Ingresar
    cy.get(':nth-child(8)').click({force:true})
    cy.wait(1000)  // dos segundos de espera
  // Click en el link Cerrar Sesión
    cy.get('#volver').realClick()

})