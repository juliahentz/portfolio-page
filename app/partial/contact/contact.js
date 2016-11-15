angular.module('app').controller('ContactCtrl',function($scope,$window){

    $scope.sendMail = function(){
        $window.open("mailto:"+ $scope.message.email + "?subject=" + $scope.message.subject+"&body="+$scope.message.text,"_self");
        console.log($scope.message);
    };

    $scope.message = {
        email: '',
        subject: '',
        text: ''
    }
});
