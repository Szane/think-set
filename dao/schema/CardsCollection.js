/**
 * Created by Szane on 2016/10/9.
 */

var mongoose = require('../../db/MongoCon.js').getDb();
var Schema = mongoose.Schema;
var Card = new Schema({
    serialNum: String,//编号
    name: String,//名称
    type: Number,//类型
    cost: Number,//费用
    occupation: Number,//职业
    race: Number,//种族
    level: Number,//稀有度
    version: Number,//来源版本
    attack: Number,//攻击力
    health: Number,//生命值
    ability: [Number],//技能
    detail: String,//技能详情
    description: String,//描述
    imgUrl: String,//图片地址
    golden: Number,//金色
    amount: Number,//数量
    status: Number,//状态
    updated_on: Date,//修改时间
    created_on: {type: Date, default: Date.now()}//创建时间
});

var CardsSet = new Schema({
    serialNum: String,//编号
    name: String,
    occupation: Number,//职业
    mode: Number,//比赛模式
    actualNum: Number,//实际张数
    status: Number,//状态
    updated_on: Date,//修改时间
    created_on: {type: Date, default: Date.now()}//创建时间
});

module.exports = {
    Card: Card,
    CardsSet: CardsSet
};