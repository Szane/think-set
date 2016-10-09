/**
 * Created by Szane on 2016/10/9.
 */

var serverLogger = require('../util/ServerLogger.js');
var sysConfig = require('../config/SystemConfig.js');
var logger = serverLogger.createLogger('MongoCon.js');

var mongoose = require('mongoose');

mongoose.connect(sysConfig.mongoOptions.connect);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));

function getDb() {
    return db;
}
module.exports = {
    getDb: getDb()
};