(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/page/Header/Header2/header3/head4.js":
/*!**************************************************!*\
  !*** ./src/page/Header/Header2/header3/head4.js ***!
  \**************************************************/
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

// import Loadable from 'react-loadable';
// import withLoadable from './../../../../router/Loadable';
/* const LoadableMyComponent = function (comp) {
    return Loadable({
      loader: comp,
      loading: (props) => {
        if (props.error) {
          return <div>
            加载错误。请刷新
                </div>;
        } else if (props.timedOut) {
          return <div   >
            加载超时。请刷新
                </div>;
        } else if (props.pastDelay) {
          return <div loading={true} />;
        } else {
          return null;
        }
      },
      timeout: 10000
    })
  } */
/*let LoadableMyComponent = Loadable({
   loader: () => import('./Head44'),
   loading: (props) => {
       if (props.error) {
           return <div>
               加载错误。请刷新
               </div>;
       } else if (props.timedOut) {
           return <div   >
               加载超时。请刷新
               </div>;
       } else if (props.pastDelay) {
           return <div loading={true} />;
       } else {
           return null;
       }
   },
}); */

var MyComponent = function (_Component) {
    _inherits(MyComponent, _Component);

    function MyComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MyComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showComponent: false }, _this.onClick = function () {
            _this.setState({ showComponent: true });
        }, _this.onMouseOver = function () {
            // console.log(this.props.withLoadable)
            // console.log(this.props.withLoadable2)
            // this.props.withLoadable.preload()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MyComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // withLoadable(() => import('./Head44'))
        }
    }, {
        key: 'render',
        value: function render() {
            // console.log(this.props, 'head4')

            return _react2.default.createElement('div', null, _react2.default.createElement('button', { onClick: this.onClick, onMouseOver: this.onMouseOver }, 'Show loadable component'));
        }
    }]);

    return MyComponent;
}(_react.Component);

exports.default = MyComponent;

/***/ })

}]);
//# sourceMappingURL=5.801c1.chunk.js.map