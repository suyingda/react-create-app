// import fetch from 'isomorphic-fetch'
//
// const callApi = (url, args, type) => {
//   let params = {}
//   if (type === 'get' || type === 'GET' || !type) {
//     params = {
//       method: type || 'GET',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//   } else if (type === 'FORM') {
//     let string = ''
//     for (let index in args) {
//       if(args.prefix){
//         string += `${args.prefix}.${index}=${args[index]}&`
//       }else{
//         string += `${index}=${args[index]}&`
//       }
//     }
//     string += `opertype=${args.opertype}&`
//     string = string.slice(0, -1)
//     params = {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: string
//     }
//   } else if (type === 'OBJFORM') {
//     params = {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(args) || null
//     }
//   } else  {
//     params = {
//       method: type,
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(args) || null
//     }
//   }
//   return fetch(url, params).then(response => {
//     if (!response.ok) {
//       const result = response.text()
//       throw new Error(result)
//     } else if (response.headers.get('content-type').includes('image/png')) {
//       const result = response.blob()
//       return result
//     } else {
//       const result = response.json()
//       return result
//     }
//   }).then(
//     res => {
//       return {res}
//     }
//   ).catch(error => {
//     return error
//   })
// }
//
// export default callApi
