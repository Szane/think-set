/**
 * Created by Szane on 2016/10/9.
 */

var serverLogger = require('../util/ServerLogger.js');
var logger = serverLogger.createLogger('CardsDAO.js');
var Card = require('./schema/CardsCollection.js').Card;
var db = require('../db/MongoCon.js').getDb();
var CardModel = db.model('card', Card);
var listOfValue = require('../util/ListOfValue.js');

function addCard(params, callback) {
    var cardEntity = new CardModel({
        serialNum: params.serialNum,//编号
        name: params.name,//名称
        type: params.type,//类型
        cost: params.cost,//费用
        occupation: params.occupation,//职业
        race: params.race,//种族
        level: params.level,//稀有度
        version: params.version,//来源版本
        attack: params.attack,//攻击力
        health: params.health,//生命值
        ability: params.ability,//技能
        detail: params.detail,//技能详情
        description: params.description,//描述
        imgUrl: params.imgUrl,//图片地址
        golden: params.golden,//金色
        amount: params.amount,//数量
        status: listOfValue.LACK,//状态
        updated_on: Date.now()//修改时间
    });
    cardEntity.save(function (error, result) {
        logger.debug(' addCard ');
        callback(error, result);
    });
}
function getCard(params, callback) {

}
function updateCard(params, callback) {

}
function deleteCard(params, callback) {

}
function updateCardStatus(params, callback) {

}
module.exports = {
    addCard: addCard,
    getCard: getCard,
    updateCard: updateCard,
    deleteCard: deleteCard,
    updateCardStatus: updateCardStatus
};