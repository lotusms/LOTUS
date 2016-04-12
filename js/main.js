var app = angular.module('angula', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMaterial', 'uiGmapgoogle-maps']);
  
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

      
  $routeProvider
    // Home
    .when("/", { templateUrl: "views/home.html", controller: "PageCtrl" })

    // About
    .when("/about", { templateUrl: "views/about.html", controller: "PageCtrl" })
    .when("/faq", { templateUrl: "views/faq.html", controller: "PageCtrl" })
  
    .when("/web-design", { templateUrl: "views/web-design.html", controller: "PageCtrl" })
    .when("/economy-web-design", { templateUrl: "views/economy-web-design.html", controller: "PageCtrl" })
    .when("/business-web-design", { templateUrl: "views/business-web-design.html", controller: "PageCtrl" })
    .when("/marketing-web-design", { templateUrl: "views/marketing-web-design.html", controller: "PageCtrl" })
    .when("/e-commerce-web-design", { templateUrl: "views/e-commerce-web-design.html", controller: "PageCtrl" })
  
    .when("/marketing", { templateUrl: "views/marketing.html", controller: "PageCtrl" })
    .when("/branding-design", { templateUrl: "views/branding-design.html", controller: "PageCtrl" })
    .when("/graphic-design", { templateUrl: "views/graphic-design.html", controller: "PageCtrl" })
    .when("/on-page-seo", { templateUrl: "views/on-page-seo.html", controller: "PageCtrl" })
    .when("/social-networks", { templateUrl: "views/social-networks.html", controller: "PageCtrl" })
  
    .when("/web-services", { templateUrl: "views/web-services.html", controller: "PageCtrl" })
    .when("/web-maintenance", { templateUrl: "views/web-maintenance.html", controller: "PageCtrl" })
    .when("/speed-service", { templateUrl: "views/speed-service.html", controller: "PageCtrl" })
    .when("/site-optimization", { templateUrl: "views/site-optimization.html", controller: "PageCtrl" })
    .when("/payment-plans", { templateUrl: "views/payment-plans.html", controller: "PageCtrl" })
    .when("/quote-request", { templateUrl: "views/quote-request.html", controller: "PageCtrl" })
    .when("/contact", { templateUrl: "views/contact.html", controller: "PageCtrl" })
  
    .when("/privacy-policy", { templateUrl: "views/privacy-policy.html", controller: "PageCtrl" })
    .when("/return-policy", { templateUrl: "views/return-policy.html", controller: "PageCtrl" })
    .when("/terms-of-use", { templateUrl: "views/terms-of-use.html", controller: "PageCtrl" })
    .when("/sitemap", { templateUrl: "views/sitemap.html", controller: "PageCtrl" })
  
    .when("/404", { templateUrl: "views/404.html", controller: "PageCtrl" })

    //.otherwise("/404", { templateUrl: "views/404.html", controller: "PageCtrl" });
    .otherwise({ redirectTo: '/' });
    
    if(window.history && window.history.pushState){
    	$locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
    }
}]);


app.controller('PageCtrl', function ($scope, $location, $http, $interval) {
    
    $('.filter li').on('click', function () {
        $('li').removeClass('active');
        $(this).addClass('active');
    });
         
    $(":checkbox").on("click", function () { 
       var $checkbox = $(this);
       $checkbox.attr('checked', !$checkbox.attr('checked'));
    });

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
    
    //REV-SLIDERS
    
    jQuery(document).ready(function() {		
        jQuery("#brandingSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });	
        jQuery("#businessSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });
        jQuery("#ecommerceSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });	
        jQuery("#economySlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });
        jQuery("#graphicSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });
        jQuery("#marketingwebSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });
        jQuery("#marketingSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });	
        jQuery("#seoSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });
        jQuery("#paymentSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });		
        jQuery("#optimizationSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });		
        jQuery("#socialSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });		
        jQuery("#speedSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });		
        jQuery("#webDesignSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });
        jQuery("#maintenanceSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });					
        jQuery("#webServicesSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });					
        jQuery("#aboutSlider").revolution({
            sliderType:"hero",
            sliderLayout:"fullwidth",
            autoHeight:"off",
            navigation : { 			
              onHoverStop:"off",
              touch:{ touchenabled:"off" },
              arrows: { enable:false },
              bullets: { enable:false },
              thumbnails: { enable:false },
              tabs: { enable:false }
            },
            parallax:{
               type:"on",
               levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
               origo:"slidercenter",
               speed:400,
               bgparallax:"on",
               disable_onmobile:"off"
            },
            fullScreenOffsetContainer:"#header",
            responsiveLevels:[4096,1024,778,480],
            gridwidth:[1200,991,768,480],
            gridheight:[600,600,980,700]		
        });	
    });	
    
    
});


/***Only for Preview ***/
app.controller('ExampleController', ['$scope', function($scope) {
    $scope.templates = { name: 'footer', url: 'partials/footer.html' }
    
  $scope.template = $scope.templates;
  
}]);


/*Controller Portfolio and filter Images*/
app.controller("dataImagesWork", function($scope, $uibModal) {

	$scope.viewProduct = function(product) {
		$uibModal.open({
			scope: $scope,
			templateUrl: 'modalimages',
			resolve: {product: product},
			controller: function(product, $scope) {
				$scope.product = product;
			}
		});
	};
    $scope.images_work = [
          {
              "name": 'PA Liquor Control Board',
              "src": "../img/lightbox-images/Liquor-Control-Board.png",
              "link": "http://www.finewineandgoodspirits.com/webapp/wcs/stores/servlet/StoreCatalogDisplay?storeId=10051&catalogId=10051&langId=-1"
          },
          {
              "name": 'PA Provider Self Service',
              "src": "../img/lightbox-images/Provider-Services-of-PA.png",
              "link": 'https://www.pelican.state.pa.us/provider/default.aspx?TYPE=33554433&REALMOID=06-ccc2a1cb-0683-440f-bfa6-cad042af12ba&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-ZW9pIAMntaN%2bR%2fAG5q4UUzXVDz%2bKoMG2pXXJCs1re8tkRKCZKtgqJypoW9Af5ilo&TARGET=-SM-https%3a%2f%2fwww%2epelican%2estate%2epa%2eus%2fprovider%2fui%2fhome%2easpx#'
          },
          {
              "name": 'Job Gateway',
              "src": "../img/lightbox-images/JobGateway.png",
              "link": 'https://www.jobgateway.pa.gov/jponline/Admin/Common/Portal.aspx?w@cIRFbHc_kyIfEUDPqYpUspb3u_@dnsvVOXen8isTEcdYg4grazpGUr2rtw4QN@odjSSGi8RwBm4_nraX__ITaRZJT8HYWbn3TgGPFcA0A-6xUQEkG_y@pHEMFmjDEEwSppJHEDfIGrVG6yQ4mCf4aazFA4QpEE'
          },
          {
              "name": 'Keystone Canine Rescue',
              "src": "../img/lightbox-images/KeystoneCanineRescue.png",
              "link": 'http://www.keystonecaninerescue.org/'
          },
          {
              "name": 'Thrifty Elegance',
              "src": "../img/lightbox-images/ThriftyElegance.png",
              "link": 'http://www.thriftyelegancepa.com/'
          },
          {
              "name": 'Team Balance Harrisburg',
              "src": "../img/lightbox-images/Team-Balance-Harrisburg.png",
              "link": 'http://www.teambalanceharrisburg.com/'
          },
          {
              "name": 'Witmers Feed & Grain',
              "src": "../img/lightbox-images/Witmers.png",
              "link": 'http://www.witmersfeed.com/'
          },
          {
              "name": 'R & J Dairy Consulting',
              "src": "../img/lightbox-images/randjdairy.png",
              "link": 'http://www.randjdairy.com/'
          },
          {
              "name": 'Modern Vintage 1005',
              "src": "../img/lightbox-images/MV1005.png",
              "link": 'http://www.modernvintage1005.com/'
          },
          {
              "name": 'Politica Y Gobiernos',
              "src": "../img/lightbox-images/politica.png",
              "link": 'http://www.politicaygobiernos.com/'
          },
          {
              "name": 'PA Wounded Warriors',
              "src": "../img/lightbox-images/PAWW.png",
              "link": '#'
          },
          {
              "name": 'Nick & Sons Contracting',
              "src": "../img/lightbox-images/NickSons.png",
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
        });

    }

    return {
        restrict: "A",
        link: linker
    }

});

//Carousel general management
app.directive('designcarousel', function () {

    var linker = function (scope, element, attr) {
        link: (scope, element, attr)
        $(element).owlCarousel({
            navigation: true,
            slideSpeed: 1000,
            paginationSpeed: 400,
            items : 6,
            itemsDesktop : [1419,4],
            itemsDesktopSmall : [992,2],
            itemsTablet : [767,1],
            singleItem : false,
            itemsScaleUp : false,
            autoPlay: true,
            responsive: true,
            responsiveRefreshRate : 1,
            dragBeforeAnimFinish : true,
            mouseDrag: true,
            touchDrag : true
        });

    }

    return {
        restrict: "A",
        link: linker
    }

});


//Carousel general management
app.directive('brandingcarousel', function () {

    var linker = function (scope, element, attr) {
        link: (scope, element, attr)
        $(element).owlCarousel({
            navigation: true,
            slideSpeed: 1000,
            paginationSpeed: 400,
            items : 6,
            itemsDesktop : [1419,4],
            itemsDesktopSmall : [992,2],
            itemsTablet : [767,1],
            singleItem : false,
            itemsScaleUp : false,
            autoPlay: true,
            responsive: true,
            responsiveRefreshRate : 1,
            dragBeforeAnimFinish : true,
            mouseDrag: true,
            touchDrag : true
        });

    }

    return {
        restrict: "A",
        link: linker
    }

});


app.factory("Markers", function(){
  var Markers = [
    {
      "id": "0",
      "coords": {
        "latitude": "40.273191",
        "longitude": "-76.886701"
      },
      "window": {
        "title": "Harrisburg, PA"
      }
    },
    {
      "id": "1",
      "coords": {
        "latitude": "39.962598",
        "longitude": "-76.727745"
      },
      "window" : {
        "title": "York, PA"
      }
    },
    {
      "id": "2",
      "coords": {
        "latitude": "40.037875",
        "longitude": "-76.305514"
      },
      "window" : {
        "title": "Lancaster, PA"
      }
    }
  ];
  return Markers;
});

app.controller("gMap",function($scope,Markers){
    $scope.map = { 
    center: { latitude: 40.152872, longitude: -76.602745 }, 
    scrollwheel: false,
    zoom: 10 
    };
    $scope.markers = Markers;

    var styleArray = [ //any style array defined in the google documentation you linked
          {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#444444"
                  }
              ]
          },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#044f69"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    $scope.options = {
        styles: styleArray
    };


});

// create angular controller
app.controller('form', function($scope) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {

		// check to make sure the form is completely valid
		if (isValid) { 
            angular.element(successModal).modal("show");
			
            //alert('our form is amazing');
		}

	};

});