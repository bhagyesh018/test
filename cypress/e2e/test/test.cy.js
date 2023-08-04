/// <reference types ="cypress"/>
require('cypress-xpath')

const log_out = require("../../spec/login_logout")
const element = require("../../pom/webelement.json")

describe("test",()=>{
    before("login",()=>{
        log_out.login()
    })
    it("Add book to cart and remove",()=>{
       cy.xpath(element.searchBarXpath).eq(0).type('The Invisible Life of Addie LaRue').type('{enter}') // enter book name in search bar and enter
       cy.xpath(element.WantstoWriteXpath).eq(0).click() // click on want to read
       cy.wait(500) // wait to load
       cy.xpath(element.GotoBookXpath).click({force:true}) // go to book section
       cy.xpath(element.removeBookXpath).click() // click o remove
       // used for handle the alert btn
       cy.on('window:alert',(ok)=>{
        expect(ok).to.contains("Are you sure you want to remove ")
       })
       // check book is removed or not
       cy.xpath(element.AssertionXpath,{timeout:1000}).should('have.text','\n            The Invisible Life of Addie LaRue was removed from your books.\n          ')
    })
    //click on logout btn
   after("logout",()=>{
        log_out.logout()
    })
})