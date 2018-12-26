import fs from 'fs';
import httpProxy from "http-proxy";
import path from 'path';
const proxy = httpProxy.createProxyServer({});
// var proxy = require('http-proxy-middleware');
const proxyTargetFile = path.join(__dirname, '/proxy-target.js');
// const targetConfig = eval(fs.readFileSync(proxyTargetFile, 'utf-8'));
// console.log(targetConfig)
proxy.on("error", () => {
    console.log("Could not connect to proxy, please try again...");
});
function readProxyConfig() {
    let targetConfig = undefined;
    try {
        targetConfig = eval(fs.readFileSync(proxyTargetFile, 'utf-8'));
    } catch (e) {
        console.log('获取targetConfig文件内容失败');
    }
    if (targetConfig) {
        let target = targetConfig.target;
        console.log('当前使用的代理是:' + target);
        return target;
    } else {
        console.log('读取代理的时候出现错误');
        return "";
    }
}
let proxyConfig = {
    target: readProxyConfig()
};
fs.watch(proxyTargetFile, {
    persistent: true, // 设为false时，不会阻塞进程。
    recursive: false,
    // secure: false
}, function (event, filename) {
    if (event === 'change') {
        proxyConfig.target = readProxyConfig();
    }
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED = " 0 ";
export default {
    '/admin/*': (req, res) => {
        proxy.web(req, res, {
            target: proxyConfig.target,
        })
    },
    '/project/*': (req, res) => {
        proxy.web(req, res, {
            target: proxyConfig.target,
        })
    },
}
