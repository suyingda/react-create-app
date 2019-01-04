
import { request, syd } from './../plug-in/fetch'

const Huzhi = {
    name: 'Huzhi',
    state: {
        first1: 0,
        first2: 1
    },
    reselect: {
        shuju: (reselect) => reselect.shuju,
    },
    actions: {
        hudaye: (v) => (dispatch, getState) => {
            return syd({
                Api: Huzhi.Api.asApia,
                params: v,
                before: 'before',
                success: 'huzhi',
                error: 'error',
                dispatch
            })
        },
    },
    Apia: {
        // asApia: (params) => {
        //     var date = new Date();
        //     var timer = date.getTime().toString();
        //     return request({
        //         methods: 'GET',
        //         // url: '/custinfo/organization/null/1' + "?t=" + (new Date()).getTime().toString(),
        //         // url: '/custinfo/get_shareholder?custid=null&_=' + (new Date()).getTime().toString(),
        //         url: '/custinfo/get_shareholder?custid=null&_=1530582647104',
        //         params: params
        //     })
        // },

    },
    reducers: {
        shuju: (data = [], action) => {
            switch (action.type) {
                case "huzhi":
                    return action.date;
                default:
                    return data;
            }

        },


    }
}




export default Huzhi;

