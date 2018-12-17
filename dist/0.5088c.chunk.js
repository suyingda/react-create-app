(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/page/Head.js":
/*!**************************!*\
  !*** ./src/page/Head.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _routerModule = __webpack_require__(/*! ../router/routerModule.js */ "./src/router/routerModule.js");

var _routerModule2 = _interopRequireDefault(_routerModule);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
// import Head1 from '../page/Header/head1'
// import MyComponent from '../router/Loadable'


// import PUB from '../module/ReduxHead'

var Head = function (_Component) {
    _inherits(Head, _Component);

    function Head(arg) {
        _classCallCheck(this, Head);

        var _this = _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, arg));

        _this.state = {
            // showComponent: this.props.match.path
        };
        return _this;
    }

    _createClass(Head, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log(this.props, "head");
            return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, _react2.default.createElement(_reactRouterDom.Link, { to: "/" }, "\u8FD4\u56DE\u9996\u9875"), " "), _react2.default.createElement("div", { onClick: function onClick() {
                    var data = {
                        id: 1,
                        name: '宿营'
                    };
                    _this2.props.routerGo(_this2, '/head1', data);
                } }, "go to head1  base"), _react2.default.createElement("div", { onClick: function onClick() {
                    var data = {
                        id: 1,
                        name: '宿营'
                    };
                    _this2.props.routerGo(_this2, '/head1', ['121']);
                } }, "go to head1 noBase"), _react2.default.createElement("div", { onClick: function onClick() {
                    var data = {
                        id: 1,
                        name: '宿营'
                    };
                    _this2.props.routerGo(_this2, '/head1', "单条数据");
                } }, "go to head1 noBase"), _react2.default.createElement(_routerModule2.default, { routes: this.props }), _react2.default.createElement("h1", { onClick: function onClick() {
                    _this2.props.aa();
                } }, "11"), _react2.default.createElement("h1", { onClick: function onClick() {
                    _this2.props.bb();
                } }, "22"), _react2.default.createElement("h1", { onClick: function onClick() {
                    _this2.props.cc();
                } }, "33"));
        }
    }]);

    return Head;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    // const { first1, first2, first3 } = PUB.reselect;
    var _props$ModuleReduxThu = props.ModuleReduxThunk['ReduxHead'],
        first1 = _props$ModuleReduxThu.first1,
        first2 = _props$ModuleReduxThu.first2,
        first3 = _props$ModuleReduxThu.first3;
    // const { dd } = props.ModuleReduxThunk['ReduxHead1'];

    return {
        // ...state,
        first1: first1(state),
        first2: first2(state),
        first3: first3(state)

    };
};
// const { aa, bb, cc } = PUB.actions;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps(['ReduxHead']))(Head);

/***/ }),

/***/ "./src/router/routerModule.js":
/*!************************************!*\
  !*** ./src/router/routerModule.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _router = __webpack_require__(/*! ./router */ "./src/router/router.js");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RouterModule = function (_Component) {
    _inherits(RouterModule, _Component);

    function RouterModule() {
        _classCallCheck(this, RouterModule);

        return _possibleConstructorReturn(this, (RouterModule.__proto__ || Object.getPrototypeOf(RouterModule)).apply(this, arguments));
    }

    _createClass(RouterModule, [{
        key: "render",
        value: function render() {
            var _props$routes = this.props.routes,
                routes = _props$routes.routes,
                match = _props$routes.match;

            return _react2.default.createElement("div", null, routes.map(function (route, i) {
                return _react2.default.createElement(_router.RouteWithSubRoutes, _extends({ key: i, matchpath: match.path != undefined ? match.path : undefined }, route));
            }));
        }
    }]);

    return RouterModule;
}(_react.Component);

exports.default = RouterModule;

/***/ })

}]);
//# sourceMappingURL=0.5088c.chunk.js.map