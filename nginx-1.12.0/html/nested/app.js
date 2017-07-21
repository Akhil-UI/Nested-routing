(function () {
    angular.module("ekart", ["header",  "services", "products", "contactUs", "ui.router"]);
    
    function myConfig($stateProvider, $urlRouterProvider) {
     
        
        $urlRouterProvider.otherwise("home");
    

        // HOME STATES AND NESTED VIEWS ========================================
     
        var home = {
            url: "/home",
            name: "home",
            templateUrl: 'app/header/header.tpl.html' 
        };
        
        // nested list with custom controller
        var products = {
            name: "home.products",
            templateUrl: 'app/Products/Products.tpl.html' 
        };
        
        // nested list with just some random string data
         var services = {
            name: "home.services",
            templateUrl: 'app/Services/Services.tpl.html'
        };
        
         var contactUs = {
            name: "home.contactUs",
            templateUrl: 'app/ContactUs/ContactUs.tpl.html'
        };
        
         var servicesbox1 = {
            name: "home.servicesbox1",
            templateUrl: 'app/Services/ser.box1.tpl.html'
        };
        
         var servicesbox2 = {
            name: "home.servicesbox2",
            templateUrl: 'app/Services/ser.box2.tpl.html'
        };
        
        $stateProvider.state("home", home);
        $stateProvider.state("home.products", products);
        $stateProvider.state("home.services", services);
        $stateProvider.state("home.servicesbox1", servicesbox1);
        $stateProvider.state("home.servicesbox2", servicesbox2);
        $stateProvider.state("home.contactUs", contactUs);
        
        /*// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });*/
        console.log("Config: Ekart");
    }

    function ekartRun() {
        console.log("Run: Ekart");
         
    }


    angular.module("ekart").config(["$stateProvider", "$urlRouterProvider", myConfig]);
    angular.module("ekart").run(["$state", ekartRun]);

})();
