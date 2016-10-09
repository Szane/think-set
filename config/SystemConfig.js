/**
 * Created by Szane on 2016/6/28.
 */
var mongoOptions = {
    connect: 'mongodb://127.0.0.1:27017/hearthstone'
};

var loggerConfig = {
    level: 'debug',
    config: {
        appenders: [
            {
                type: 'console'
            },
            {
                type: "file",
                filename: "../hearthstone.log",
                maxLogSize: 204800,
                backups: 1
            }
        ]
    }
};
module.exports = {
    loggerConfig: loggerConfig,
    mongoOptions: mongoOptions
};