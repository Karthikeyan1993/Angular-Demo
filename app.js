(function () {
    'use strict';

    angular.module('mainApp', []);
})();

(function () {
    'use strict';
    function mainController() {
        var vm = this;
        vm.title = "Hello World";
        vm.todos = [];
        vm.todos = [
            {
                id: "50441",
                name: "Monthly Report Checking",
                status: "Active",
                priority: "High",
                isCompleted: false
            },
            {
                id: "50442",
                name: "Daily Report Checking",
                status: "Active",
                priority: "Medium",
                isCompleted: false
            },
            {
                id: "50443",
                name: "Weekly Report Checking",
                status: "Completed",
                priority: "Low",
                isCompleted: true
            },
            {
                id: "50444",
                name: "Report Four Eye Checking",
                status: "Completed",
                priority: "High",
                isCompleted: true
            }
        ];

        vm.todoClicked = function (flag, index) {
            console.log(flag);
            console.log(index);
            console.log(vm.todos[index]);
        }

    }
    angular.module('mainApp')
        .controller('mainCtrl', mainController);
})();