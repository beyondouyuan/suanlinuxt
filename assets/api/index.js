/*
 * @Author: beyondouyuan
 * @Date:   2018-08-12 13:33:55
 * @Last Modified by:   beyondouyuan
 * @Last Modified time: 2018-08-12 14:17:46
 */

import request from '~/plugins/axios'

import parseAPI from './urls'

/******************************** 用户信息 ******************************/

/**
 * 登陆
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const requestLogin = data => {
    return request({
            url: parseAPI('login'),
            loading: false,
            data
        })
        .then(res => res.data)
}



/**
 * 注册
 * @param  {[object]} data [description]
 * @return {[type]}      [description]
 */
export const requestReg = data => {
    return request({
            url: parseAPI('reg'),
            data
        })
        .then(res => res.data)
}

/**
 * 登出
 * @param  {[object]} data [description]
 * @return {[type]}      [description]
 */
export const requestLogout = () => {
    return request({
            url: parseAPI('logout'),
            loading: false
        })
        .then(res => res.data)
}

/******************************** 修改信息聚合 ******************************/

export const requestModifyCellphone = data => {
    return request({
            url: parseAPI('modifyCellphone'),
            loading: false,
            data
        })
        .then(res => res.data)
}

export const requestVerifyRealName = data => {
    return request({
            url: parseAPI('verifyRealName'),
            loading: false,
            data
        })
        .then(res => res.data)
}

export const requestModifyTradePwd = data => {
    return request({
            url: parseAPI('modifyTradePwd'),
            loading: false,
            data
        })
        .then(res => res.data)
}

export const requestModifyLoginPwd = data => {
    return request({
            url: parseAPI('modifyLoginPwd'),
            loading: false,
            data
        })
        .then(res => res.data)
}

export const requestVerifyEmail = data => {
    return request({
            url: parseAPI('applyEmail'),
            loading: false,
            data
        })
        .then(res => res.data)
}

export const requestModifyEmail = data => {
    return request({
            url: parseAPI('modifyEmail'),
            loading: false,
            data
        })
        .then(res => res.data)
}


/******************************** 首页聚合 ******************************/

/**
 * banner 列表
 * @return {[type]} [description]
 */
export const requestBanner = () => {
    return request({
            url: parseAPI('banner'),
        })
        .then(res => res.data)
}

/**
 * [平台优势]
 * @return {[type]} [description]
 */
export const requestPlatform = () => {
    return request({
        url: parseAPI('platform'),
    }).then(res => res.data)
}
/**
 * [矿场一览]
 * @return {[type]} [description]
 */
export const requestMine = () => {
    return request({
        url: parseAPI('mine'),
    }).then(res => res.data)
}
/**
 * [合作伙伴]
 * @return {[type]} [description]
 */
export const requestPartner = () => {
    return request({
        url: parseAPI('partner'),
    }).then(res => res.data)
}

/**
 * 货币信息展示
 * @return {[type]} [description]
 */
export const requestDC = () => {
    return request({
        url: parseAPI('dc'),
        loading: false
    }).then(res => res.data)
}
/**
 * 货币价格
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const requestDCExchange = (data) => {
    return request({
        url: parseAPI('exchange'),
        data
    }).then(res => res.data)
}

/**
 * 单位算力收益
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const requestDCIncome = (data) => {
    return request({
        url: parseAPI('dcincome'),
        data,
        loading: false
    }).then(res => res.data)
}

/**
 * 合约单位收益
 */

 export const requestContractIncome = (data) => {
     return request({
         url: parseAPI('contractIncome'),
         data,
         loading: false
     }).then(res => res.data)
 }
/******************************** 公告资讯 ******************************/

/**
 * [公告列表]
 * @return {[type]} [description]
 */
export const requestAnnounce = () => {
    return request({
        url: parseAPI('announce'),
        loading: false
    }).then(res => res.data)
    // return data.data
}

/**
 * 资讯列表
 * @return {[type]} [description]
 */
export const requestNews = () => {
    return request({
            url: parseAPI('news'),
            loading: false
        })
        .then(res => res.data)
}

/**
 * [公告详情]
 * @return {[type]} [description]
 */
export const requestAnnounceDetail = (data) => {
    return request({
        url: parseAPI('adetail'),
        loading: false,
        data
    })
}

/**
 * [资讯详情]
 * @return {[type]} [description]
 */
export const requestNewsDetail = (data) => {
    return request({
        url: parseAPI('newsdetail'),
        loading: false,
        data
    })
}

/**
*  合约详情
*
*/
export const requestContractDesc = (data) => {
    return request({
            url: parseAPI('contractDesc'),
            data,
            loading: false
        })
        .then(res => res.data)
}

/******************************** 帮助中心聚合 ******************************/

/**
 * 常见问题
 * @return {[type]} [description]
 */
export const requestQa = () => {
    return request({
            url: parseAPI('qa'),
            loading: false
        })
        .then(res => res.data)
}

/**
 * 联系客服
 * @return {[type]} [description]
 */
export const requestContact = () => {
    return request({
            url: parseAPI('contact'),
            loading: false
        })
        .then(res => res.data)
}

/**
 * 关于我们
 * @return {[type]} [description]
 */
export const requestAbout = () => {
    return request({
            url: parseAPI('about'),
            loading: false
        })
        .then(res => res.data)
}

/******************************** 个人中心聚合 ******************************/

/**
 * 个人信息
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const requestUserInfo = (data) => {
    return request({
            url: parseAPI('userInfo'),
            data
        })
        .then(res => res.data)
}
/**
 * 安全设置
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const requestSecurity = (data) => {
    return request({
            url: parseAPI('security'),
            data
        })
        .then(res => res.data)
}
/**
 * 站内信息
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const requestPM = (data) => {
    return request({
            url: parseAPI('msg'),
            data,
            loading: false
        })
        .then(res => res.data)
}

export const requestPMRead = (data) => {
    return request({
            url: parseAPI('msgRead'),
            data,
            loading: false
        })
        .then(res => res.data)
}

export const requestPMReadAll = (data) => {
    return request({
            url: parseAPI('msgReadAll'),
            data,
            loading: false
        })
        .then(res => res.data)
}

/******************************** 验证码 ******************************/

/**
 * 图片验证码
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const requestApplyCptch = () => {
    return request({
            url: parseAPI('applycptch'),
            loading: false
        })
        .then(res => res.data)
}

export const requestApplyCellphone = (data) => {
    return request({
            url: parseAPI('applyCellphone'),
            loading: false,
            data
        })
        .then(res => res.data)
}




/******************************** 账户收益聚合 ******************************/


/**
 * 资产总览
 * @return {[type]} [description]
 */
export const requestAssets = () => {
    return request({
            url: parseAPI('assets'),
        })
        .then(res => res.data)
}

/**
 * 流水账单
 * @return {[type]} [description]
 */
export const requestAssetsRecord = (data = {page: 1}) => {
    return request({
            url: parseAPI('record'),
            data
        })
        .then(res => res.data)
}
/**
 * 收益查看
 * @return {[type]} [description]
 */
export const requestContractMining = (data = {contract_id : 1}) => {
    return request({
            url: parseAPI('mining'),
            data
        })
        .then(res => res.data)
}
/**
 * 收益记录
 * @return {[type]} [description]
 */
export const requestContractMiningRecord = (data = {type: 1, page: 1, contract_id: 1}) => {
    return request({
            url: parseAPI('mrecord'),
            data
        })
        .then(res => res.data)
}



/******************************** 奖励聚合 ******************************/

/**
 * 推荐奖励
 * @return {[type]} [description]
 */
export const requestAward = () => {
    return request({
            url: parseAPI('award'),
        })
        .then(res => res.data)
}


/**
 * 奖励记录
 * @return {[type]} [description]
 */
export const requestAwardIncome = (data = {page: 1}) => {
    return request({
            url: parseAPI('aincome'),
            data
        })
        .then(res => res.data)
}

/**
 * 奖励规则
 * @return {[type]} [description]
 */
export const requestAwardRule = () => {
    return request({
            url: parseAPI('arule'),
        })
        .then(res => res.data)
}

/**
 * 推荐列表
 * @return {[type]} [description]
 */
export const requestAwardList = (data = {page: 1}) => {
    return request({
            url: parseAPI('alist'),
            data
        })
        .then(res => res.data)
}

/**
 * 推荐链接
 * @return {[type]} [description]
 */
export const requestAwardCode = () => {
    return request({
            url: parseAPI('acode'),
        })
        .then(res => res.data)
}

/******************************** 合约详情 ******************************/

/**
 * 获取所有合约
 * @return {[type]} [description]
 */

export const requestContractDetail = () => {
    return request({
            url: parseAPI('cdetail'),
            method: 'GET',
            loading: false
        })
        .then(res => res.data)
}

// 下单购买合约
export const requestContractCreateOrder = (data) => {
    return request({
            url: parseAPI('createOrder'),
            loading: false,
            data
        })
        .then(res => res.data)
}
// 取消订单
export const requestContractCancelOrder = (data) => {
    return request({
            url: parseAPI('cancelOrder'),
            data
        })
        .then(res => res.data)
}

// 客服二维码
export const requestContractService = (data) => {
    return request({
            url: parseAPI('contractService'),
            data
        })
        .then(res => res.data)
}

// 比特币充值
export const requestBTCRecharge = () => {
    return request({
            url: parseAPI('recharge')
        })
        .then(res => res.data)
}

//比特币提币
export const requestBTCWithdraw = (data) => {
    return request({
        url: parseAPI('withdraw'),
        data
    })
    .then(res => res.data)
}
//比特币提币
export const requestOrders = (data={page:1}) => {
    return request({
        url: parseAPI('orders'),
        data
    })
    .then(res => res.data)
}

export const requestDiffculty = (data={symbol:'BTC'}) => {
    return request({
        url: parseAPI('diffculty'),
        data,
        loading: false
    })
    .then(res => res.data)
}

//获取网站标题、关键字、描述等参数
export const requestWebSetting = () => {
    return request({
            url: parseAPI('websetting'),
            loading: false
        })
        .then(res => res.data)
}

//提交委托订单
export const requestExchangePut = (data) => {
    return request({
        url: parseAPI('exchangePut'),
        data,
        loading: false
    })
    .then(res => res.data)
}

export const requestExchangeList = (data) => {
    return request({
        url: parseAPI('exchangeList'),
        data
    })
    .then(res => res.data)
}

export const requestKLine = (data) => {
    return request({
        url: parseAPI('kline'),
        data
    })
    .then(res => res.data)
}

export const requestExchangeCancel = (data) => {
    return request({
        url: parseAPI('exchangeCancel'),
        data
    })
    .then(res => res.data)
}

export const requestExchangeDelete = (data) => {
    return request({
        url: parseAPI('exchangeDelete'),
        data
    })
    .then(res => res.data)
}

export const requestNewestdata = (data) => {
    return request({
        url: parseAPI('newestdata'),
        data
    })
    .then(res => res.data)
}

export const requestExchangeAsset = (data) => {
    return request({
        url: parseAPI('exchangeAsset'),
        data
    })
    .then(res => res.data)
}

export const requestExchangeOrderbook = (data) => {
    return request({
        url: parseAPI('exchangeOrderbook'),
        data
    })
    .then(res => res.data)
}

/* 键盘侠 你行你上啊
    ┌───┐   ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┬───┐ ┌───┬───┬───┐
    │Esc│   │ F1│ F2│ F3│ F4│ │ F5│ F6│ F7│ F8│ │ F9│F10│F11│F12│ │P/S│S L│P/B│  ┌┐    ┌┐    ┌┐
    └───┘   └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┴───┘ └───┴───┴───┘  └┘    └┘    └┘
    ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐ ┌───┬───┬───┐ ┌───┬───┬───┬───┐
    │~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│& 7│* 8│( 9│) 0│_ -│+ =│ BacSp │ │Ins│Hom│PUp│ │N L│ / │ * │ - │
    ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤ ├───┼───┼───┤ ├───┼───┼───┼───┤
    │ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{ [│} ]│ | \ │ │Del│End│PDn│ │ 7 │ 8 │ 9 │   │
    ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤ └───┴───┴───┘ ├───┼───┼───┤ + │
    │ Caps │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  │               │ 4 │ 5 │ 6 │   │
    ├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────────┤     ┌───┐     ├───┼───┼───┼───┤
    │ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│  Shift   │     │ ↑ │     │ 1 │ 2 │ 3 │   │
    ├─────┬──┴─┬─┴──┬┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤ ┌───┼───┼───┐ ├───┴───┼───┤ E││
    │ Ctrl│    │Alt │         Space         │ Alt│    │    │Ctrl│ │ ← │ ↓ │ → │ │   0   │ . │←─┘│
    └─────┴────┴────┴───────────────────────┴────┴────┴────┴────┘ └───┴───┴───┘ └───────┴───┴───┘
*/

