/// <reference path="../angular.js" />
/// <reference path="Module.js" />


app.controller("crudController", function($scope, crudService) {
    $scope.IsNewRecord = 1; //The flag for the new record

    loadRecords();

    function loadRecords() {
        var promiseGet = crudService.getEmployees();

        promiseGet.then(function(p1) {
            $scope.data = p1.data;
        },
            function(errorp1) {
                $log.error('failure loading employee',errorp1);
            }
        );
    }

    $scope.save = function() {
        var Employee = {
            EmpNo: $scope.EmpNo,
            EmpName: $scope.EmpName,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation,
        };
        //if 1 then save 
        if ($scope.IsNewRecord === 1) {
            var promisepost = crudService.post(Employee);
            promisepost.then(function(p1) {
                    $scope.EmpNo = p1.data.EmpNo;
                    loadRecords();
                },
                function(errorp1) {
                    console.log("Err: "+ errorp1);
                });
        }
            //else edit
        else {
            var promiseput = crudService.put($scope.EmpNo, Employee);
            promiseput.then(function(p1) {
                    console.message("Successfully Edited");
                },
                function(errorp1) {
                    console.log("Error:" + errorp1);
                });
        }
    };

    $scope.delete = function() {
        var promisedelete = crudService.delete(EmpNo);
        promisedelete.then(function(p1) {
            $scope.message = "Delete Successfully";
            $scope.EmpNo = 0,
            $scope.EmpName = "";
            $scope.Salary = 0;
            $scope.DeptName = "";
            $scope.Designation = "";
            loadRecords();

        },
        function (err) {
            console.log("Err" + err);
        });
        
    };

    $scope.get = function(Employee) {
        var allEmploee = crudService.get(Employee.EmpNo);

        allEmploee.then(function(p1) {
            var res = p1.data;
            $scope.EmpNo = res.EmpNo;
            $scope.EmpName = res.EmpName;
            $scope.Salary = res.Salary;
            $scope.DeptName = res.DeptName;
            $scope.Designation = res.Designation;
 
            $scope.IsNewRecord = 0;
        },
        function (errorPl) {
            console.log('failure loading Employee', errorPl);
        });
        
    };
    $scope.clear = function () {
        $scope.IsNewRecord = 1;
        $scope.EmpNo = 0;
        $scope.EmpName = "";
        $scope.Salary = 0;
        $scope.DeptName = "";
        $scope.Designation = "";
    }

});