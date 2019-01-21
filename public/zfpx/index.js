function Vjs(options = {}) {
    this.$options = options;  //将所有属性挂载在$options;
    //this._data
    var data = this._data = this.$options.data;
    observe(data);
    for (let keys in data) {
        // this[keys]=data[keys]  //   Direct assignment not Object.defineProperty
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

//观察对象给对象增加 objectDefineProperty
function Observe(data) {  //这里写我们的主要逻辑
    for (let key in data) {
        let val = data[key];
        let dep = new Dep();
        observe(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            // configurable: true,
            get: function () {
                Dep.target && dep.addSub(Dep.target)
                return val;
            },
            set: function (newVal) {
                if (val === newVal) {
                    return;
                };
                // dep.notify(newVal);
                val = newVal;
                observe(newVal);
                dep.notify();
            }
        })
    }
}

function observe(data) {
    if (typeof data !== 'object') return;
    return new Observe(data);
}


function Comp(el, vm) {
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();
    while (vm.$el.firstChild) {
        fragment.appendChild(vm.$el.firstChild)
    }
    replace(fragment);

    function replace(fragment) {
        Array.from(fragment.childNodes).forEach(function (node) {
            let text = node.textContent;
            let reg = /\{\{(.*)\}\}/;
            if (node.nodeType === 3 && reg.test(text)) {
                console.log(RegExp.$1);
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(function (k) {
                    val = val[k]
                });
                new Watcher(vm, RegExp.$1, function (newVal) {
                    node.textContent = text.replace(reg, newVal);
                });
                node.textContent = text.replace(reg, val);
            }
            if (node.childNodes) {
                replace(node);
            }
        })
    }

    vm.$el.appendChild(fragment);
}


function Dep() {
    this.subs = [];
}
Dep.prototype.addSub = function (sub) {
    this.subs.push(sub)
};
Dep.prototype.notify = function () {
    this.subs.forEach((sub) => sub.update());
};
function Watcher(vm, exp, fn) {
    this.vm = vm;
    this.exp = exp;
    this.fn = fn;
    Dep.target = this;
    let val = vm;
    let arr = exp && exp.split('.');
    arr && arr.forEach(function (k) {  //this.a.a
        val = val[k]
    })
    Dep.target = null;

}
Watcher.prototype.update = function () {
    let val = this.vm;
    let arr = this.exp && this.exp.split('.');
    arr && arr.forEach(function (k) {  //this.a.a
        val = val[k]
    })
    this.fn(val);
};
let watcher = new Watcher(function () {
    console.log('observe')
});
let dep = new Dep();
// dep.addSub(watcher);
// dep.addSub(watcher);
console.log(dep.subs);
// var d = "a的值：{{a.aa}}{{a.aa}}";
// var patt = /\{\{[^\}\}]+\}\}/g;
// console.log(d.match(patt))