angular.module('app').controller('ContactCtrl',function($scope,$window,contactService,$location){

    $scope.sendMail = function(){

        contactService.sendMail($scope.message, function(data){
            $location.path( 'app.email-confirmation' );
        })
    };

    $scope.message = {
        email: '',
        subject: '',
        text: ''
    }
});
