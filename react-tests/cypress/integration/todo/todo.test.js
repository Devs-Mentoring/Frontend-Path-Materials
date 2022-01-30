/// <reference types="cypress" />
import {dummyData} from "../../fixtures/todo"

describe('example to-do app', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000') //visit website on start
        cy.viewport(1000,700) //set viewport size
    })

    it('user can add new todo',() => {
      //cy.get working as query selector
      cy.url().should("include", "localhost"); //testing routes
      cy.get("input#new-todo").type(`${dummyData.todo}`); //typing
      //cy.get("input#new-todo").type(`${dummyData.todo}{enter}`); //typing with special characters
      cy.get("input[type=submit]").click(); //click
      cy.get("li").should("have.length", 1);
      cy.contains(`${dummyData.todo}`, { timeout: 300 }).should("exist"); //assertion //second optional parameter wait
    })
})