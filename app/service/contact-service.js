angular.module('app').factory('contactService',function($http) {

    var contactService = {
        model: {
            list: [],
            item: null
        },
        sendMail: function(data, cb){

            $http.post('/api/contact', data)
                .then(function(res) {

                    contactService.model.item = res.data;

                    if(cb){
                        cb(res.data);
                    }

                });
        }
    };

    return contactService;
});
