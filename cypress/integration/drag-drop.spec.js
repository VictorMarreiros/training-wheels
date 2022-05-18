

describe("Drag and Drop", function(){
    before(function(){
        cy.visit("/drag_and_drop")
    })

    it("deve arrastar o cypress para a caixa do node", function () {
        const dataTransfer = new DataTransfer()
    
        cy.get("img[alt=Cypress]")
            .trigger("dragstart", { dataTransfer })
    
        cy.get(".nodejs figure[draggable=true]")
            .trigger("drop", { dataTransfer })
    })
    
    it("deve arrastar o robot para a caixa do python", function () {
        const dataTransfer = new DataTransfer()
    
        cy.get("img[alt*=Robot]")
            .trigger("dragstart", { dataTransfer })
            
        cy.get(".python figure[draggable=true]")
            .trigger("drop", { dataTransfer })
    })    
})


