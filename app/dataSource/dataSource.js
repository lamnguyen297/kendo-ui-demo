(function () {
   'use strict';


   angular.module('app')
      .controller('dataSource',[dataSource]);

   function dataSource() {
      var vm = this;
      vm.activate = activate;



      activate();

      function activate() {

        
        vm.gridData = new kendo.data.ObservableArray([
            {ProductID: 1,ProductName: "Chai",UnitPrice: 18,UnitsInStock: 39,Discontinued: false},
            {ProductID: 2,ProductName: "Chang",UnitPrice: 19,UnitsInStock: 17,Discontinued: true}
         ]);

        vm.gridColumns = [
                            "ProductName",
                            { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "120px" },
                            { field: "UnitsInStock", title:"Units In Stock", width: "120px" },
                            { field: "Discontinued", width: "120px" },
                            { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" }
                        ];

         vm.update = function(){
            vm.gridData[0].set("details", "1TB");
         }


      }
   }
})();