
// import { request } from './../fetch'
// import { CollectF ,Fun} from './index'

import arr from './data.js';
import { getReselect } from './reselect'



const ReduxHead1 = {
    name: 'ReduxHead1',
    state: {
        first1: 0,
        first2: 1
    },
    reselect: {
        ddd: (reselect) => reselect.ddd,
    },
    actions: {
        ddd: (v) => (dispatch, getState) => {
            dispatch({
                type: 'ddd',
                data: [1, 2, 3, 4, 5]
            })
        },
    },
    Api: {
        asApi: () => {
            return request('/project/projectApi/searchById', ["afc24d3e-6667-45f2-9b42-07c86280d58a"]);
        }
    },
    reducers: {

        ddd: (data = [], action) => {
            switch (action.type) {
                case "ddd":
                    return action.data
                default:
                    return data;
            }
        },

    }
}




export default ReduxHead1;

