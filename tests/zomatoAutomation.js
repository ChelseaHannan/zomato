
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
        myPage.requestLinkToApplicationThroughEmailTwice('sam.thompson11333123@devmounta.in')
    },
    'Test 3: Request a link to the application through mobile phone': browser => {
        myPage.requestLinkToApplicationThroughPhoneTwice(8444338686)
    },

    'Popular restaurants near me': browser => {
        let nearMeArray = require('../testAssets/nearMeArray')
        let originalWindow = ""

        nearMeArray.forEach(item => {
            //pulls current window and stores in variable
            browser.windowHandle(result => {
                originalWindow = result.value
            })

            //clicks link from 'Popular restaurants near me' 
            myPage
                .click(item.link)

            //switches to new window
            browser.windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })

            //assertion
            //*NOTE* This will return some errors due to bugs in the website
            myPage
                .verify.containsText('@titleResult', item.keyWord)

            // close current window and switch back to original window
            browser.closeWindow()
            browser.switchWindow(originalWindow)
                
        })
    },

    'View all (insert popular restaurant category) restaurants in Salt Lake City green button': browser => {

        let nearMeArray = require('../testAssets/nearMeArray')
        let originalWindow = ""

        nearMeArray.forEach(item => {
            //pulls current window and stores in variable
            browser.windowHandle(result => {
                originalWindow = result.value
            })

            //clicks link from 'Popular restaurants near me' 
            myPage
                .click(item.link)

            //switches to new window
            browser.windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })

            //clicks 'View all' green button of popular restaurant category
            myPage
                .click('@largeGreenButton')

            //assertion
            //*NOTE* This will return some errors due to bugs in the website
            myPage
                .verify.containsText('@titleResult', item.keyWord1)

            //close current window and switch back to original window
            browser.closeWindow()
            browser.switchWindow(originalWindow)
                
        })
    },
}
