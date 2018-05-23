/**
 * QuoteController
 * 
 * @description :: Server-side logic for managing quotes
 * @help :: See http://sails.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
     getQuote: function (req, res){
         return res.json({quote: quoter.getRandomOne()});
     },
     getProtectedQuote: function(req, res){
         return res.json({quote: quoter.getRandomOne()});
     }
 }