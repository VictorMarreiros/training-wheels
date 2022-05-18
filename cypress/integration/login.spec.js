

it("deve logar com sucesso", function () {
    cy.visit("/login")

    cy.contains("Formulário de Login")
        .should("exist")

    cy.contains("Informe as credenciais mencionadas na video-aula :)")
        .should("exist")


    cy.get("#nickId").type("papitorocks")
    cy.get("#passId").type("pwd123")

    cy.get("button[type=submit]").click()

    // Validando Textos
    const expectedText = "Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah"

    cy.get("h3[class^=title]")
        .should("have.text", "Olá Papito, bem-vindo ao Orkut")

    cy.get("p[class=subheader]")
        .should("have.text", expectedText)

    cy.get("a[class^=button]")
        .should("exist")
})