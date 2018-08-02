'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _DropButton = require('../DropButton/DropButton');

var _DropButton2 = _interopRequireDefault(_DropButton);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('../Heading/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Calendar = require('../Calendar/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropContent = function DropContent(_ref) {
  var onClose = _ref.onClose;
  return _react2.default.createElement(
    _Box2.default,
    { pad: 'small' },
    _react2.default.createElement(
      _Box2.default,
      { direction: 'row', justify: 'between', align: 'center' },
      _react2.default.createElement(
        _Heading2.default,
        { level: 3, margin: 'small' },
        'Heading'
      ),
      _react2.default.createElement(_Button2.default, { icon: _react2.default.createElement(_grommetIcons.Close, null), onClick: onClose })
    ),
    _react2.default.createElement(
      _Text2.default,
      null,
      'Content'
    )
  );
};

var SimpleDropButton = function (_Component) {
  _inherits(SimpleDropButton, _Component);

  function SimpleDropButton() {
    var _temp, _this, _ret;

    _classCallCheck(this, SimpleDropButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onClose = function () {
      _this.setState({ open: false });
      setTimeout(function () {
        return _this.setState({ open: undefined });
      }, 1);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SimpleDropButton.prototype.render = function render() {
    var _this2 = this;

    var open = this.state.open;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_DropButton2.default, {
        label: 'Open',
        open: open,
        onClose: function onClose() {
          return _this2.setState({ open: undefined });
        },
        dropContent: _react2.default.createElement(DropContent, { onClose: this.onClose })
      })
    );
  };

  return SimpleDropButton;
}(_react.Component);

var CalendarDropButton = function (_Component2) {
  _inherits(CalendarDropButton, _Component2);

  function CalendarDropButton() {
    var _temp2, _this3, _ret2;

    _classCallCheck(this, CalendarDropButton);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.state = { date: undefined }, _this3.onClose = function () {
      _this3.setState({ open: false });
      setTimeout(function () {
        return _this3.setState({ open: undefined });
      }, 1);
    }, _this3.onSelect = function (date) {
      return _this3.setState({ date: date, open: false });
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  CalendarDropButton.prototype.render = function render() {
    var _this4 = this;

    var _state = this.state,
        date = _state.date,
        open = _state.open;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _DropButton2.default,
        {
          open: open,
          onClose: function onClose() {
            return _this4.setState({ open: false });
          },
          onOpen: function onOpen() {
            return _this4.setState({ open: true });
          },
          dropContent: _react2.default.createElement(_Calendar2.default, { date: date, onSelect: this.onSelect })
        },
        _react2.default.createElement(
          _Box2.default,
          { direction: 'row', gap: 'medium', align: 'center', pad: 'small' },
          _react2.default.createElement(
            _Text2.default,
            null,
            date ? new Date(date).toLocaleDateString() : 'Select date'
          ),
          _react2.default.createElement(_grommetIcons.FormDown, { color: 'brand' })
        )
      )
    );
  };

  return CalendarDropButton;
}(_react.Component);

(0, _react3.storiesOf)('DropButton', module).add('Simple', function () {
  return _react2.default.createElement(SimpleDropButton, null);
}).add('Calendar', function () {
  return _react2.default.createElement(CalendarDropButton, null);
});