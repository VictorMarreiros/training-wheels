

it("deve marcar os top 5 filmes da marvel", function () {
    cy.visit("/checkboxes")

    const movies = [
        "ironman",
        "avengers2",
        "avengers3",
        "avengers4",
        "cap3"
    ]

    movies.forEach(function (m) {
        cy.get(`input[name=${m}]`)
            .click()
            .should("be.checked")
    })
}) 
