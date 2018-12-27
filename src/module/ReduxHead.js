
import { request, syd } from './plug-in/fetch'
import arr from './data.js';
import { getReselect } from './reselect'

const getVisibleTodos = (first1) => {
    let aaa = [];
    first1 && first1.forEach((v) => {
        aaa.push(v + '苏英大');
    });
    console.log('change!!!  ....')
    return aaa;
}

const ReduxHead = {
    name: 'ReduxHead',
    state: {
        first1: 0,
        first2: 1
    },
    reselect: {
        shuju: (reselect) => reselect.shuju,
        first1: getReselect(getVisibleTodos, 'first1').reselect,
        /*  first1: (reselect) => {
             let aaa = []
             reselect.first1.forEach((v) => {
                 aaa.push(v + '未使用')
             });
             return aaa
         }, */
        first2: (reselect) => reselect.first2,
        first3: (reselect) => reselect.first3,
    },
    actions: {
        asApi: (v) => (dispatch, getState) => {
            syd({
                Api: ReduxHead.Api.asApi2,
                params: [],
                before: 'before',
                success: 'success',
                error: 'error',
                dispatch
            })

            return syd({
                Api: ReduxHead.Api.asApi,
                params: v,
                before: 'before',
                success: 'success',
                error: 'error',
                dispatch
            })
        },
        // asApi:  (v) => (dispatch, getState) => {
        //     return request('http://172.253.32.131:9106/project/projectApi/statusList', ["afc24d3e-6667-45f2-9b42-07c86280d58a"]);
        //     // return request('/project/projectApi/searchById', ["afc24d3e-6667-45f2-9b42-07c86280d58a"]);
        // },
        aa: (v) => (dispatch, getState) => {

            dispatch({
                type: 'aa',
                data: arr
            })
        },
        bb: (v) => (dispatch, getState) => {
            dispatch({
                type: 'bb',
                data: [1, 2, 3, 4, 5]
            })
        },
        cc: (v) => (dispatch, getState) => {
            dispatch({
                type: 'cc',
                data: [1, 2, 3, 4, 5]
            })
        }
    },
    Api: {
        asApi: (params) => {
            return request({
                methods: 'post',
                url: '/project/projectApi/statusList',
                params: params
            })
        },
        asApi2: (params) => {
            return request({
                methods: 'post',
                url: '/admin/dict/queryDictItems',
                params: ["BUSINESS_TYPE2"]
            })
        }
    },
    reducers: {
        shuju: (data = [], action) => {
            switch (action.type) {
                case "success":
                    return action.date;
                default:
                    return data;
            }

        },
        first1: (data = [], action) => {
            switch (action.type) {
                case "aa":
                    return action.data;
                default:
                    return data;
            }
        },
        first2: (data = [], action) => {
            switch (action.type) {
                case "bb":
                    return action.data
                default:
                    return data;
            }
        },
        first3: (data = [], action) => {
            switch (action.type) {
                case "cc":
                    return action.data
                default:
                    return data;
            }
        },

    }
}




export default ReduxHead;

