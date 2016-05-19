/// <reference path="../angular.js" />
/// <reference path="Module.js" />

app.service("crudService", function($http) {

    this.post = function(Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeesAPI",
            data: Employee
        });
        return request;
    };

    this.get = function(EmpNo) {
        return $http.get("/api/EmployeesAPI/" + EmpNo);
    };

    this.getEmployees = function() {
        return $http.get("/api/EmployeesAPI");
    };

    this.put = function(EmpNo, Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeesAPI/" + EmpNo,
            data : Employee
        });
        return request;
    };

    this.delete = function(EmpNo) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeesAPI/"+ EmpNo
        });
    };
});