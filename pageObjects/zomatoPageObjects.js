var zomatoCustomCommands = {
    collection: function (data) { 
        this
<<<<<<< HEAD
=======
            .pause(10000)
            .setValue('@itemSearchInput', item)
>>>>>>> 52ace8fc1a6e5b6794cc7b059439a90eb08ffce5
            .pause(5000)
            .click(data.collectionType)
            .pause(5000)
            .verify.containsText('@titleResult', data.headline)
            .click('@backSLC')
        return this
    },
}





module.exports = {
    url: 'https://www.zomato.com/salt-lake-city',
    commands: [zomatoCustomCommands],
    elements: 
    {  
    itemSearchInput: 'input[class = "sc-fjmCvl dRCuSW"]',
    searchButton: 'div[class = "sc-CtfFt dwJcvv"]',
    titleResult: 'h1',
    homePageButton: 'a[class = "logo__container left"]',
    getTheAppButton: 'a[class = "sc-krDsej sc-dTdPqK gUQWLM"]',
    getAppLink: 'input[class = "sc-1yzxt5f-9 bbrwhB"]',
    shareAppLinkButton: 'span[class = "sc-1kx5g6g-3 dkwpEa"]',
    phoneRadioButton: 'input[value = "mobile"]',
    phoneInput: 'input[placeholder = "type here..."]',
    locationDropdown:
        {selector: '//input[@placeholder="Salt Lake City"]',locateStrategy: 'xpath'},
    searchBar: 
        {selector: '//input[@placeholder="Search for restaurant, cuisine or a dish"]',locateStrategy: 'xpath'},
    searchMagnifying: 
        {selector: '//div[@class="sc-CtfFt dwJcvv"]"]',locateStrategy: 'xpath'},
    //Search Filters//
        orderFoodOnline:
            {selector: '//span[contains(text(),"Order Food Online")]',locateStrategy: 'xpath'},
        popularityHigh2Low:
            {selector: '//span[contains(text(),"Popularity")]"]',locateStrategy: 'xpath'},
        rating:
            {selector: '//span[contains(text(),"Rating")]',locateStrategy: 'xpath'},
        costHigh2Low:
            {selector: '//div[@id="mainframe"]/div[2]/div[3]/div[2]/div/div/div/div[4]/a[3]/div/span',locateStrategy: 'xpath'},
        costLow2High:
            {selector: '/html[1]/body[1]/section[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[4]/a[4]/div[1]/span[1]',locateStrategy: 'xpath'},
        recentlyAdded:
            {selector: '//span[contains(text(),"Recently Added")]',locateStrategy: 'xpath'},
 
    //Collections//
        collectionsAllinSLC: 
            {selector: '//a[@class="ks3f96-0 cFSkbc sc-gTKgxx fuJObP"]//span[@class="ks3f96-1 iFQLJx"][contains(text(),"All collections in Salt Lake City")]"]',locateStrategy: 'xpath'},
        collectionsTrending: 
        'div[class = "bke1zw-1 feJJpQ"]',
        collectionsCheap:
        'div[class = "bke1zw-1 bCCfXM"]',
        collectionTruckin: 
        'div[class = "bke1zw-1 iHEKOG"]',
        collectionBurgers: 
        'div[class = "bke1zw-1 fKdtKd"]',
        backSLC:
        {selector: '//span[text()="Salt Lake City"]', locateStrategy: 'xpath'},
    //Locality buttons//
        downtown: 
            {selector: '//h5[contains(text(),"Downtown (213 places)")]"]',locateStrategy: 'xpath'},
        ogden: 
            {selector: '//h5[contains(text(),"Ogden (375 places)")]',locateStrategy: 'xpath'},
        sugarhouse: 
            {selector: '//h5[contains(text(),"Sugar House (117 places)")]',locateStrategy: 'xpath'},
        taylorsville: 
            {selector: '//h5[contains(text(),"Taylorsville (99 places)")]',locateStrategy: 'xpath'},
        midvale: 
            {selector: '//h5[contains(text(),"Midvale (141 places)")]',locateStrategy: 'xpath'},
        murray: 
            {selector: '//h5[contains(text(),"Murray (149 places)")]',locateStrategy: 'xpath'},
        layton: 
            {selector: '//h5[contains(text(),"Layton (150 places)")]]',locateStrategy: 'xpath'},
        holladay: 
            {selector: '//h5[contains(text(),"Holladay (102 places)")]]',locateStrategy: 'xpath'},
        parkcity: 
            {selector: '//h5[contains(text(),"Park City (217 places)")]',locateStrategy: 'xpath'},
        clearfield: 
            {selector: '//h5[contains(text(),"Clearfield (84 places)")]',locateStrategy: 'xpath'},
        westvalley: 
            {selector: '//h5[contains(text(),"West Valley (169 places)")]',locateStrategy: 'xpath'},
        southsaltlake: 
            {selector: '//h5[contains(text(),"South Salt Lake (106 places)")]',locateStrategy: 'xpath'},
        provo: 
            {selector: '//h5[contains(text(),"Provo (234 places)")]',locateStrategy: 'xpath'},
        kearns: 
            {selector: '//h5[contains(text(),"Kearns (37 places)")]',locateStrategy: 'xpath'},
        rosepark: 
            {selector: '//h5[contains(text(),"Rose Park (62 places)")]',locateStrategy: 'xpath'},
        farmington: 
            {selector: '//h5[contains(text(),"Farmington (33 places)")]',locateStrategy: 'xpath'},
        orem: 
            {selector: '//h5[contains(text(),"Orem (209 places)")]',locateStrategy: 'xpath'},
        lehi: 
            {selector: '//h5[contains(text(),"Lehi (73 places)")]',locateStrategy: 'xpath'},
        sandy: 
            {selector: '//h5[contains(text(),"Sandy (168 places)")]',locateStrategy: 'xpath'},
        eastcentral: 
            {selector: '//h5[contains(text(),"East Central (148 places)")]',locateStrategy: 'xpath'},
        redwood: 
            {selector: '//h5[contains(text(),"Redwood (57 places)")]',locateStrategy: 'xpath'},
        libertywells: 
            {selector: '//h5[contains(text(),"Liberty Wells (64 places)"]',locateStrategy: 'xpath'},
        springville: 
            {selector: '//h5[contains(text(),"Springville (47 places)"]',locateStrategy: 'xpath'},
        westjordan: 
            {selector: '//h5[contains(text(),"West Jordan (137 places)")]',locateStrategy: 'xpath'},
        spanishfork: 
            {selector: '//h5[contains(text(),"Spanish Fork (46 places)")]',locateStrategy: 'xpath'},
        hebercity: 
            {selector: '//h5[contains(text(),"Heber City (46 places)")]',locateStrategy: 'xpath'},
        magna: 
            {selector: '//h5[contains(text(),"Magna (29 places)")]',locateStrategy: 'xpath'},
        centerville: 
            {selector: '//h5[contains(text(),"Centerville (31 places)")]',locateStrategy: 'xpath'},
        central: 
            {selector: '//h5[contains(text(),"Central (59 places)")]',locateStrategy: 'xpath'},
        bountiful: 
            {selector: '//h5[contains(text(),"Bountiful (93 places)")]',locateStrategy: 'xpath'},
    //Cuisines//
        americanfood: 
            {selector: '//a[contains(text(),"American food near me")]',locateStrategy: 'xpath'},
        asianfood: 
            {selector: '//a[contains(text(),"Asian food near me")]',locateStrategy: 'xpath'},
        bbq: 
            {selector: '//a[contains(text(),"BBQ food near me")]',locateStrategy: 'xpath'},
        barfood: 
            {selector: '//a[contains(text(),"Bar Food food near me")]',locateStrategy: 'xpath'},
        beverages: 
            {selector: '//a[contains(text(),"Beverages food near me")]',locateStrategy: 'xpath'},
        burger: 
            {selector: '//a[contains(text(),"Burger food near me")]',locateStrategy: 'xpath'},
        chinese: 
            {selector: '//a[contains(text(),"Chinese food near me")]',locateStrategy: 'xpath'},
        coffeetea: 
            {selector: '//a[contains(text(),"Coffee and Tea food near me")]',locateStrategy: 'xpath'},
        desserts: 
            {selector: '//a[contains(text(),"Desserts food near me")]',locateStrategy: 'xpath'},
        diner: 
            {selector: '//a[contains(text(),"Diner food near me")]',locateStrategy: 'xpath'},
        italian: 
            {selector: '//a[contains(text(),"Italian food near me")]',locateStrategy: 'xpath'},
        japanese: 
            {selector: '//a[contains(text(),"Japanese food near me")]',locateStrategy: 'xpath'},
        mexican: 
            {selector: '//a[contains(text(),"Mexican food near me")]',locateStrategy: 'xpath'},
        pizza: 
            {selector: '//a[contains(text(),"Pizza food near me")]',locateStrategy: 'xpath'},
        sandwich: 
            {selector: '//a[contains(text(),"Sandwich food near me")]',locateStrategy: 'xpath'},
        seafood: 
            {selector: '//a[contains(text(),"Seafood food near me")]',locateStrategy: 'xpath'},
        steak: 
            {selector: '//a[contains(text(),"Steak food near me")]',locateStrategy: 'xpath'},
        sushi: 
            {selector: '//a[contains(text(),"Sushi food near me")]',locateStrategy: 'xpath'},
        thai: 
            {selector: '//a[contains(text(),"Thai food near me")]',locateStrategy: 'xpath'},
        vegetarian: 
            {selector: '//a[contains(text(),"Vegetarian food near me")]',locateStrategy: 'xpath'},
    //Resturants//
        bakeries: 
            {selector: '//a[contains(text(),"Bakeries near me")]',locateStrategy: 'xpath'},
        bars: 
            {selector: '//div[2]//div[1]//a[2]',locateStrategy: 'xpath'},
        beverage: 
            {selector: '//a[contains(text(),"Beverage Shops near me")]',locateStrategy: 'xpath'},
        bistros: 
            {selector: '//a[contains(text(),"Bistros near me")]',locateStrategy: 'xpath'},
        breweries: 
            {selector: '//a[contains(text(),"Breweries near me")]',locateStrategy: 'xpath'},
        cafes: 
            {selector: '//a[contains(text(),"Cafés near me")]',locateStrategy: 'xpath'},
        casualdining: 
            {selector: '//a[contains(text(),"Casual Dining near me")]',locateStrategy: 'xpath'},
        cocktailbars: 
            {selector: '//a[contains(text(),"Cocktail Bars near me")]',locateStrategy: 'xpath'},
        coffeebars: 
            {selector: '//a[contains(text(),"Coffee Shop near me")]',locateStrategy: 'xpath'},
        delis: 
            {selector: '//a[contains(text(),"Delis near me")]',locateStrategy: 'xpath'},
        dessertshop: 
            {selector: '//a[contains(text(),"Dessert Shops near me")]',locateStrategy: 'xpath'},
        diner: 
            {selector: '//a[contains(text(),"Diners near me")]',locateStrategy: 'xpath'},
        fastcasual: 
            {selector: '//a[contains(text(),"Fast Casual near me")]',locateStrategy: 'xpath'},
        fastfood: 
            {selector: '//a[contains(text(),"Fast Food near me")]',locateStrategy: 'xpath'},
        foodcourts: 
            {selector: '//a[contains(text(),"Food Courts near me")]',locateStrategy: 'xpath'},
        foodtrucks: 
            {selector: '//a[contains(text(),"Food Trucks near me")]',locateStrategy: 'xpath'},
        juicebar: 
            {selector: '//a[contains(text(),"Juice Bar near me")]',locateStrategy: 'xpath'},
        microbreweries: 
            {selector: '//a[contains(text(),"Microbreweries near me")]',locateStrategy: 'xpath'},
        noodleshops: 
            {selector: '//a[contains(text(),"Noodle Shops near me")]',locateStrategy: 'xpath'},
        pizzerias: 
            {selector: '//a[contains(text(),"Pizzerias near me")]',locateStrategy: 'xpath'},
        pubs: 
            {selector: '//a[contains(text(),"Pubs near me")]',locateStrategy: 'xpath'},
        quickbites: 
            {selector: '//a[contains(text(),"Quick Bites near me")]',locateStrategy: 'xpath'},
        sandwichshops: 
            {selector: '//a[contains(text(),"Sandwich Shops near me")]',locateStrategy: 'xpath'},
        taquerias: 
            {selector: '//a[contains(text(),"Taquerias near me")]',locateStrategy: 'xpath'},
        vineyards: 
            {selector: '//a[contains(text(),"Vineyards near me")]',locateStrategy: 'xpath'},
        winebars: 
            {selector: '//a[contains(text(),"Wine Bars near me")]',locateStrategy: 'xpath'},

<<<<<<< HEAD
},
=======
        
    }
>>>>>>> 52ace8fc1a6e5b6794cc7b059439a90eb08ffce5
}
