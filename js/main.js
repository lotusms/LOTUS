
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
              "category": 'remodeling',
              "name": 'Kitchen Reno',
              "src": "kitchen-reno.png",
              "description": 'In this project, we replaced all appliances to stainless steal appliances. We were able to reuse the cabinets and re-stain them with a more sleek look. Counter tops and back splash were changed to tie up the design cohesively. '
          },
          {
              "category": 'lawn',
              "name": 'Yard Escape',
              "src": "gallery/exterior10.png",
              "description": 'This amazing 1 acre front yard preceding a large estate was enhanced and maintained to compliment the natural environment. Trees were branched, flower beds installed, and lawn treated, clened, and mowed to perfection.'
          },
          {
              "category": 'repairs',
              "name": 'Exterior Conditioning',
              "src": "gallery/exterior19.png",
              "description": 'Inclement weather and normal wear & tear causes damage on the exterior after a few years. This property was re-painted, and conditioned, as well as repaired for minor leaks and roof damage. These repairs prevented mayor replacements.'
          },
          {
              "category": 'remodeling',
              "name": 'Beach Cabana',
              "src": "4.jpg",
              "description": 'This amazing beach unit was designed and updated to bring the outside beach atmosphere to the room. Walls were demolished and replaced with glass panels to allow more natural light and a full view to the beach shore. '
          },
          {
              "category": 'lawn',
              "name": 'Fall Cleanup',
              "src": "fall-cleanup.png",
              "description": 'Fall cleanup was done to this massive yard for a local business to ensure all debri was collected, dead leaves and grass were trimmed from tress to prevent further accumulation and allow for snow fall. '
          },
          {
              "category": 'additions',
              "name": 'Deck Installation',
              "src": "gallery/exterior1.png",
              "description": 'For this property we were asked to build an outdoors retrieve with a thermally modified Thorwood deck or low maintenance Composite deck that allowed enough space for large family gathering, sitting, and flows into the yard. '
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
            slideSpeed: 500,
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

