/// <reference path="../angular.min.js" />

//create a module named myApp
var myApp = angular
                    .module("myModule", [])
                    .controller("myController", function ($scope) {

                        var employees = [
                            { Name: "Asp.net", DateOfBirth: new Date("July 20, 1980"), Gender: "Male", Salary: 100000 },
                            { Name: "Angular.js", DateOfBirth: new Date("September 18, 1990"), Gender: "Male", Salary: 10000.77 },
                            { Name: "WEB API", DateOfBirth: new Date("January 08, 1997"), Gender: "FeMale", Salary: 70000.98 },
                            { Name: "MVC", DateOfBirth: new Date("Jun 1, 2010"), Gender: "FeMale", Salary: 600000 },
                            { Name: "Sql server", DateOfBirth: new Date("December 11, 1999"), Gender: "Male", Salary: 800000.444 }
                        ];
                        this.emp = employees;


                        $scope.likefunction = function(t) {
                            t.Likes ++;
                        };
                        $scope.dislikesfunction = function(d) {
                            d.Dislikes++;

                        };

                        $scope.limitno = 3;

});
//create a controller and assign it into the module(myApp)
//myApp.controller("myController", function ($scope) {

//    var employee = {
//        FirstName: "Akash",
//        LastName: "Razu",
//        Gender: "Male"
//    };
//    $scope.emp = employee;
//});