

const niceiFrame = function () {
    return cy
        .get("#weareqaninja")
        .its("0.contentDocument.body").should('not.be.empty')
        .then(cy.wrap)
}

const badiFrame = function () {
    return cy
        .get("iframe[src*=instagram]")
        .its("0.contentDocument.body").should('not.be.empty')
        .then(cy.wrap)
}


it("deve validar o total de seguidores", function () {
    cy.visit("/nice_iframe")

    niceiFrame()
        .contains(".FollowerCountText", "6,620 followers")
        .should("be.visible")
})

it("deve validar o total de seguidores", function () {
    cy.visit("/bad_iframe")

    badiFrame()
        .contains(".FollowerCountText", "6,620 followers")
        .should("be.visible")
})