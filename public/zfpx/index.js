function Vjs(options = {}) {
    this.$options = options;  //将所有属性挂载在$options;
    //this._data
    var data = this._data = this.$options.data;
    observe(data);
    for (let keys in data) {
        Object.defineProperty(this, keys, {
            enumerable: true,
            get: function () {
                return this._data[keys];
            },
            set: function (newVal) {
                this._data[keys] = newVal
            }
        })
    }
    new Comp(options.el, this)
}

//vm.$options

//观察对象给对象增加objectDefineProperty
function Observe(data) {  //这里写我们的主要逻辑
    for (let key in data) {
        let val = data[key];
        observe(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            // configurable: true,
            get: function () {
                return val;
            },
            set: function (newVal) {
                if (val === newVal) {
                    return;
                }
                val = newVal;
                observe(newVal)
            }
        })
    }
}

function observe(data) {
    if (typeof data !== 'object') return;
    return new Observe(data);
}

// var d = "a的值：{{a.aa}}{{a.aa}}";
// var patt = /\{\{[^\}\}]+\}\}/g;
// console.log(d.match(patt))
function Comp(el, vm) {
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();
    while (vm.$el.firstChild) {
        fragment.appendChild(vm.$el.firstChild)
    }
    replace(fragment);

    function replace(fragment) {
        Array.from(fragment.childNodes).forEach(function (node) {
            console.log(node)
            let text = node.textContent;
            let reg = /\{\{(.*)\}\}/;
            if (node.nodeType === 3 && reg.test(text)) {
                console.log(RegExp.$1);
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(function (k) {
                    val = val[k]
                });
                node.textContent = text.replace(reg, val);
            }
            if (node.childNodes) {
                replace(node);
            }
        })
    }
    vm.$el.appendChild(fragment);
    // let stirngs = '123a{a}a';
    // let testsxx = /\{(.*)\}/
    // if(testsxx.test(stirngs)){
    //     // console.log(RegExp.$2,'是')
    // }
}