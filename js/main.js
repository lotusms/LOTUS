
var app = angular.module('angula', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMaterial', 'rev.slider']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { templateUrl: "views/home.html", controller: "HomeCtrl" })

    // About
    .when("/about", { templateUrl: "views/about.html", controller: "PageCtrl" })
    .when("/faq", { templateUrl: "views/faq.html", controller: "PageCtrl" })
    .when("/quote-request", { templateUrl: "views/quote-request.html", controller: "PageCtrl" })
    .when("/services", { templateUrl: "views/services.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "views/contact.html", controller: "PageCtrl" })
    .when("/privacy-policy", { templateUrl: "views/privacy-policy.html", controller: "PageCtrl" })
    .when("/terms-of-use", { templateUrl: "views/terms-of-use.html", controller: "PageCtrl" })
    .when("/sitemap", { templateUrl: "views/sitemap.html", controller: "PageCtrl" })
    .when("/404", { templateUrl: "views/404.html", controller: "PageCtrl" })

    .otherwise("/404", { templateUrl: "views/404.html", controller: "PageCtrl" });
}]);


app.controller('PageCtrl', function ( $scope, $location, $http ) {
        

});

/***Only for Preview ***/
app.controller('ExampleController', ['$scope', function($scope) {
    $scope.templates = { name: 'footer', url: 'partials/footer.html' }
    
  $scope.template = $scope.templates;
  
}]);


// module controller
app.controller("SliderCtrl", ["$scope", function ($scope) {
    // slider settings object set to scope.
    $scope.slider = {
        sliderType: "standard",
        sliderLayout: "auto",
        responsiveLevels: [1920, 1024, 778, 480],
        gridwidth: [1930, 1240, 778, 480],
        gridheight: [768, 768, 960, 720],
        autoHeight: "off",
        minHeight: "",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        delay: 9000,
        disableProgressBar: "on",
        startDelay: "",
        stopAfterLoops: "",
        stopAtSlide: "",
        viewPort: {},
        lazyType: "none",
        dottedOverlay: "none",
        shadow: 0,
        spinner: "off",
        hideAllCaptionAtLilmit: 0,
        hideCaptionAtLimit: 0,
        hideSliderAtLimit: 0,
        debugMode: false,
        extensions: "",
        extensions_suffix: "",
        fallbacks: { simplifyAll: "off", disableFocusListener: false },
        parallax: { type: "scroll", origo: "enterpoint", speed: 400, levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] },
        carousel: {},
        navigation: {
            keyboardNavigation: "off", keyboard_direction: "horizontal", mouseScrollNavigation: "off", onHoverStop: "on",
            touch: {
                touchenabled: "on",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                swipe_direction: "horizontal"
            },
            tabs: {
                style: "zeus",
                enable: true,
                width: 150,
                height: 30,
                min_width: 100,
                wrapper_padding: 0,
                wrapper_color: "transparent",
                wrapper_opacity: "0",
                //tmp: "<span class=""> {{title}} </span>", visibleAmount: 3, hide_onmobile: true, hide_under: 480, hide_onleave: false, hide_delay: 200, direction: "horizontal", span: true, position: "inner", space: 1, h_align: "left", v_align: "top", h_offset: 30, v_offset: 30 }
            }
        }

        //jsFileLocation: "",
        //visibilityLevels: [1240, 1024, 778, 480],
        //hideThumbsOnMobile: "off"
        //};


    }
}]);


/*Controller Portfolio and filter Images*/

app.controller("dataImagesWork", function ($scope) {
    $scope.images_work = [
          {
              "name": 'PA Liquor Control Board',
              "src": "Liquor-Control-Board.png",
              "link": "http://www.finewineandgoodspirits.com/webapp/wcs/stores/servlet/StoreCatalogDisplay?storeId=10051&catalogId=10051&langId=-1"
          },
          {
              "name": 'PA Provider Self Service',
              "src": "Provider-Services-of-PA.png",
              "link": 'https://www.pelican.state.pa.us/provider/default.aspx?TYPE=33554433&REALMOID=06-ccc2a1cb-0683-440f-bfa6-cad042af12ba&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-ZW9pIAMntaN%2bR%2fAG5q4UUzXVDz%2bKoMG2pXXJCs1re8tkRKCZKtgqJypoW9Af5ilo&TARGET=-SM-https%3a%2f%2fwww%2epelican%2estate%2epa%2eus%2fprovider%2fui%2fhome%2easpx#'
          },
          {
              "name": 'Job Gateway',
              "src": "JobGateway.png",
              "link": 'https://www.jobgateway.pa.gov/jponline/Admin/Common/Portal.aspx?w@cIRFbHc_kyIfEUDPqYpUspb3u_@dnsvVOXen8isTEcdYg4grazpGUr2rtw4QN@odjSSGi8RwBm4_nraX__ITaRZJT8HYWbn3TgGPFcA0A-6xUQEkG_y@pHEMFmjDEEwSppJHEDfIGrVG6yQ4mCf4aazFA4QpEE'
          },
          {
              "name": 'Keystone Canine Rescue',
              "src": "KeystoneCanineRescue.png",
              "link": 'http://www.keystonecaninerescue.org/'
          },
          {
              "name": 'Thrifty Elegance',
              "src": "ThriftyElegance.png",
              "link": 'http://www.thriftyelegancepa.com/'
          },
          {
              "name": 'Team Balance Harrisburg',
              "src": "Team-Balance-Harrisburg.png",
              "link": 'http://www.teambalanceharrisburg.com/'
          },
          {
              "name": 'Witmers Feed & Grain',
              "src": "Witmers.png",
              "link": 'http://www.witmersfeed.com/'
          },
          {
              "name": 'R & J Dairy Consulting',
              "src": "randjdairy.png",
              "link": 'http://www.randjdairy.com/'
          },
          {
              "name": 'Modern Vintage 1005',
              "src": "MV1005.png",
              "link": 'http://www.modernvintage1005.com/'
          },
          {
              "name": 'Feed Commodities',
              "src": "FeedCommodities.png",
              "link": 'http://www.feedcommodities.com/'
          },
          {
              "name": 'VisionSpec Home',
              "src": "VisionSpecHome.png",
              "link": 'http://www.visionspechome.com/'
          },
          {
              "name": 'Nick & Sons Contracting',
              "src": "Nick_Sons.png",
              "link": 'http://www.nickandsonsllc.com/'
          }];

});



//tabs management
app.controller('TabsDemoCtrl', function ($scope, $window) {
    $scope.tabs = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
  ];
});

// monitor animation 
app.controller('HomeCtrl', function ($scope, $interval) {

     var duration = 1600, steps = 3, step = 1;

     $scope.customAttributeValue = step;

    var start = $interval(function () {
        if ($scope.customAttributeValue < steps) {
            $scope.customAttributeValue += step;
        }
        else {
            $scope.customAttributeValue = step;
         }
    }, duration);

});

app.controller('AccordionDemoCtrl', function ($scope) {
    $scope.oneAtATime = true;

    $scope.isopen = {
        first: true,
        second: true,
        three: true,
        four: true,
        five: true,
        six: true,
        seven: true
    }
    $scope.icon = {
        "false": 'fa fa-plus',
        "true": 'fa fa-minus'
    }

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});


//Carousel general management
app.directive('owlcarousel', function () {

    var linker = function (scope, element, attr) {
        link: (scope, element, attr)
        $(element).owlCarousel({
            navigation: false,
            slideSpeed: 1000,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        });

    }

    return {
        restrict: "A",
        link: linker
    }

});

