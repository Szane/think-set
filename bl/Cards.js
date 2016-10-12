/**
 * Created by Szane on 2016/10/9.
 */
var cardsDAO = require('../dao/CardsDAO.js');
var serverLogger = require('../util/ServerLogger.js');
var logger = serverLogger.createLogger('Cards.js');
var systemMessage = require('../util/SystemMessage.js');
var restifyError = require('restify-errors');

function addCard(req, res, next) {
    cardsDAO.addCard(req.params, function (error, result) {
        if (error) {
            logger.error(' addCard ' + systemMessage.ERROR_INTERNAL);
            return next();
        } else {
            logger.debug(result);
            return next();
        }
    });
}
module.exports = {
    addCard: addCard
};