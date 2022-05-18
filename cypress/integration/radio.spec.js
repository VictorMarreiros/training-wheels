

it("deve marcar thor ragnarok", function () {
    cy.visit("/radios")

    const radios = [
        "thor3",
        "avengers2",
        "avengers3"
    ]

    radios.forEach(function (r) {
        cy.get(`input[value=${r}]`)
            .click()
            .should("be.checked")
    })
})