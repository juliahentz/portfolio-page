'use strict'

exports.init = (server)=>{

    // Post resource
    require('./contact/router').init(server);

};