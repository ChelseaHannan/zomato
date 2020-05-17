
let myPage = {}

module.exports = {
    beforeEach: browser => {
        myPage = browser.page.zomatoPageObjects()
        myPage.navigate()
    },
    afterEach: browser => {
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

    'Test: Popular restaurants near me': browser => {
        let nearMeArray = require('../testAssets/nearMeArray')
        let originalWindow = ''

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
            myPage
                .verify.containsText('@titleResult', item.keyWord)

            // close current window and switch back to original window
            browser.closeWindow()
            browser.switchWindow(originalWindow)
                
        })
    },

    'Test: View all green button on category pages': browser => {
        let nearMeArray = require('../testAssets/nearMeArray')
        let originalWindow = ''

        nearMeArray.forEach(item => {
            browser.windowHandle(result => {
                originalWindow = result.value
            })

            myPage
                .click(item.link)

            browser.windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })

            myPage
                .click('@largeGreenBtn')

            //assertion
            //*NOTE* This will return some errors due to bugs in the website
            myPage
                .verify.containsText('@titleResult', item.keyWord1)

            browser.closeWindow()
            browser.switchWindow(originalWindow)      
        })
    },

    'Test: "Download from the app store" buttons at bottom of home page': browser => {
        let originalWindow = ''

        browser
            .windowHandle(result => {
            originalWindow = result.value
            })

        myPage
            .click('@appleAppBtn')

        browser
            .windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })
            .verify.urlContains('apps.apple.com')
            .verify.containsText('h1', 'Zomato') 
            .closeWindow()
            .switchWindow(originalWindow)

        myPage
            .click('@googlePlayBtn')

        browser
            .windowHandles(function(result) {
            let handle = result.value[1]
            browser.switchWindow(handle)
            })
            .verify.urlContains('play.google.com')
            .verify.containsText('h1', 'Zomato')     
    },

    'Test: Social media links': browser => {
        let originalWindow = ''

        browser.windowHandle(result => {
            originalWindow = result.value
        })

        myPage
            .click('@facebookBtn')

        browser
            .windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })
            .verify.urlContains('facebook.com/zomato')
            .closeWindow()
            .switchWindow(originalWindow)

        myPage
            .click('@twitterBtn')

        browser
            .windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })
            .verify.urlContains('twitter.com/zomato')
            .closeWindow()
            .switchWindow(originalWindow)

        myPage
            .click('@instaBtn')

        browser
            .windowHandles(function(result) {
                let handle = result.value[1]
                browser.switchWindow(handle)
            })
            .verify.urlContains('instagram.com/zomato')
            .closeWindow()
            .switchWindow(originalWindow)
    },


}

