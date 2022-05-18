

it("deve fazer o upload da minha imagem", function(){
    cy.visit("/upload")

    const imageFile = 'cypress/fixtures/test_upload.jpeg'

    cy.get("input[name=file]").selectFile(imageFile, {force: true})
    cy.get("input[value=Upload]").click()

    cy.contains("p", "test_upload.jpeg")
        .parent("div")
        .should("be.visible")
})
