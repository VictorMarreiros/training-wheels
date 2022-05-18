

it("selecionar tony por id", function () {
    cy.visit("/select")

    cy.get("#avengerList")
        .select("Tony Stark")
        .should("have.value", "3")
})

it("selecionar bucky sem ser pelo id", function () {
    cy.visit("/select")

    cy.contains("option", "Selecione um personagem")
        .parent()
        .select("Bucky")
        .should("have.value", "2")
})