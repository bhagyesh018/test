const element = require('../pom/webelement.json')

class open {

    login() {
        cy.visit('https://www.goodreads.com/') // url
        cy.xpath(element.login).click() // click on sign in button
        cy.xpath(element.ChooseemailXpath).click() // click on email
        cy.get(element.EmailCSS).click().type('bhagyeshpatil10008@gmail.com', { delay: 100 }) // provided username
        cy.get(element.PasswordCss).type('Selectme123@') // provded password
        cy.get(element.SignUpbtnCss).click() //click on sign in button
    }

    logout() {
        cy.xpath(element.IconXpath).eq(0).click() // click on profile icon
        cy.xpath(element.SignOutXpath).eq(0).click() // click on sign out
    }
}
module.exports = new open()