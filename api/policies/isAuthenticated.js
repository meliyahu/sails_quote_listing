/**
 * isAuthenticated
 */
var jwt = require('express-jwt');

var authCheck = jwt({
    secret: new Buffer('1L6XtjuKjuYUz5eGc_0U3pq6VN3vFZbiYW8qz_LydFxfaDgl1lXCbl2BWEMyS2YM', 'base64'),
    audience: '-agcotrdIND7NbusFRKFei4qAIAavs0I'
});

module.exports = authCheck;