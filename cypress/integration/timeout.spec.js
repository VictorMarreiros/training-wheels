

it("exemplo timeout", function(){
    cy.visit("/timeout")

    cy.contains("button","Habilita").click()

    cy.get("#firstname")
        .should("be.visible")
        .type("Victor", {timeout: 7000})
})