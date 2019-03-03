// import React from 'react';
// import axios from 'axios';

// import urls from '../../contones/urls'; //真实接口
// import { resolve } from 'url';


// export default class BaseServise {
//     static ajax() {
//         let MokcApi = 'url'
//         if (option.isMock) {
//             option.baseURL = MokcApi;
//         } else {
//             option.baseURL = urls.baseURL
//         }
//         return new Promise((resolve, reject) => {
//             axios({
//                 url: options.url,
//                 method: option.type || 'post',
//                 data: JSON.stringify(option.data || ''),
//                 timeout: 8000,
//                 baseURL: option.baseURL,
//             }).then((response) => {
//                 if (response.status == 200) { //请求成功
//                     let result = response.data
//                     if (result.error) {
//                         alert(result.error.message)
//                     }
//                     resolve(result);
//                 } else {
//                     reject(response.data);
//                 }
//             }).catch((error) => {
//                 console.error(`request URL ${error}`)
//             })
//         })
//     }
// }


// import BaseServise from './xxx';
// BaseServise.ajax({
//     url: '',
//     data: value,
//     isMock: true,
// }).then((response) => {
//     if (response.code == 0) {
//         console.log('成功')
//     } else {
//         console.log('失败')
//     }
// })