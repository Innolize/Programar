/// <reference types="cypress" />

const URL = "http://192.168.0.8:8080/introduccion-a-js-master/tareas/clase-6/tarea1-clase6.html"

context("CalculadorEdades", () => {
    before(() => {
        cy.visit(URL);
    });
    describe("Ingresar integrantes de familia", () => {
        it("Genera error decimal", () => {
            cy.get("#familia").type("1.5")
            cy.get("#boton-ingresar").click();
            cy.get("#errores").find("li").should("have.length", 1)
            cy.get("#errores").find("li").should("have.text", "Los números ingresados no pueden contener decimales")
        })
        it("Ingresa 2 familiares en input familia", () => {
            cy.get("#boton-reset").click();
            cy.get("#familia").type("2")
            cy.get("#boton-ingresar").click();
            cy.get(".familiares").should("have.length", 2)
        })

        //     it("Genera error numero mayor a 1")
        // familiaInput.type("2")
    })
    describe("Genera resultado", () => {
        it("Obtiene resultados", () => {
            cy.get("#miembrosFamilia input").eq(0).type("22")
            cy.get("#miembrosFamilia input").eq(1).type("28")
            cy.get("#boton-calcular").click();
            cy.get("#resultado").should("have.text", "El mayor tiene 22 años, el menor tiene 28 años y el promedio es de 25 años")
        })

    });
    describe("Reinicia y vuelve al inicio", () => {
        it("reinicia app", () => {
            cy.get("#boton-reset").click();
            cy.get("#resultado").should("have.text", "")
            cy.get("#miembrosFamilia input").should("not.exist")
            cy.get("#familia").should("have.text", "")
            cy.get("#errores").find("li").should("not.exist")
        })
    })





})