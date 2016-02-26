/**
 * 脉冲软件
 * http://maichong.it
 * Created by LiYuDeng on 2016/2/23.
 * li@maichong.it
 */
'use strict';

const alaska = require('alaska');

/**
 * hintText 提示信息 String 默认值 "",
 * disabled 是否可用 boolean 默认值 false,
 * errorText 错误信息 String 默认值 "",
 * fullWidth 是否全屏 Boolean 默认值 false,
 * value 显示内容 String 默认值 "",
 * recognition 识别类型 String 默认值 mobile     可用值 mobile 手机号   tel 电话号  all 所有
 * onChange 内容改变事件 function
 * */
exports.template = __dirname + '/lib/view.js';

exports.plain = Boolean;

/**
 * 初始化方法
 * @param field   alaksa.Model中的字段配置
 * @param options Mongoose模型字段初始化参数
 */
exports.init = function (field, options) {
  //TODO 所有mongoose String 类型初始化参数
};
