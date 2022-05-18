

it("selecionar a data de nascimento", function(){
    cy.visit("/datepicker")

    const date = {
        month: 'set',
        year: '1998',
        day: '16'
    }

    cy.get(".datetimepicker-dummy-input").click()
    
    cy.get(".datepicker-nav-month").click()
    cy.contains(".datepicker-month", date.month).click()
    
    cy.get(".datepicker-nav-year").click()
    cy.contains(".datepicker-year span", date.year).click()

    // regex ' ^ ' começa com
    // regex ' $ ' termina com
    // regex ' * ' contém
    cy.contains("button[class='date-item']", new RegExp('^' + date.day + '$', 'g')).click()

})