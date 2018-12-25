
  import { request } from './../plug-in/fetch'
// import { CollectF ,Fun} from './index'

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
        asApi:  (v) => (dispatch, getState) => {
            return request('/project/projectApi/statusList', ["afc24d3e-6667-45f2-9b42-07c86280d58a"]);
            // return request('/project/projectApi/searchById', ["afc24d3e-6667-45f2-9b42-07c86280d58a"]);
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
        asApi: () => {
            return request('/project/projectApi/searchById', ["afc24d3e-6667-45f2-9b42-07c86280d58a"]);
        }
    },
    reducers: {
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

