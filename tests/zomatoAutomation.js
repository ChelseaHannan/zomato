let collectionSearch = require ('./collectionSearch')
let myPage = {} 
var myPage = {}

module.exports = {
    beforeEach: browser => {
        myPage = browser.page.zomatoPage()
        myPage.navigate()
    },

    after: browser => {
        myPage.end()
    },
    'Test 1: Search multiple restaurants/foods in Salt Lake City': browser => {
        var searchList = require('../testAssets/searchItemsArray')

        for (var i = 0; i < searchList.length; i++) {
            myPage.search5Items(searchList[i])
        }
    },
    'Test 2:  Request link to application with email': browser => {
        myPage.requestLinkToApplicationThroughEmail('sam.thompson11333123@devmounta.in')
    },
    'Test 3: Request a link to the application through mobile phone': browser => {
        myPage.requestLinkToApplicationThroughPhone(8444338686)
    },
    'Collection search': browser => {
        collectionSearch.forEach(test => {
            myPage
                .pause(5000)
                .collection(test)
        })
    }
    
}