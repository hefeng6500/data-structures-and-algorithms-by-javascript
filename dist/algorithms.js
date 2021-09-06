/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code/1.LinkList.js":
/*!********************************!*\
  !*** ./src/code/1.LinkList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "LinkList": () => (/* binding */ LinkList)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * 1、push(element)：向链表尾部添加一个新元素
 * 2、insert(element, position)：向链表的特定位置插入一个新元素
 * 3、getElementAt(index)：返回链表中特定位置的元素。如果链表中不存在这样的元素， 则返回 undefined
 * 4、remove(element)：从链表中移除一个元素
 * 5、indexOf(element)：返回元素在链表中的索引。如果链表中没有该元素则返回-1。
 * 6、removeAt(position)：从链表的特定位置移除一个元素。
 * 7、isEmpty()：如果链表中不包含任何元素， 返回 true，如果链表长度大于 0则返回 false。
 * 8、size()：返回链表包含的元素个数，与数组的 length 属性类似。
 * 9、toString()：返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
 *
 */

var Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = null;
};
var LinkList = /*#__PURE__*/function () {
  function LinkList() {
    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;

    _classCallCheck(this, LinkList);

    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  } // 向链表尾部添加一个新元素


  _createClass(LinkList, [{
    key: "push",
    value: function push(element) {
      var node = new Node(element);
      var current;

      if (this.head === null) {
        this.head = node;
      } else {
        current = this.head;

        while (current.next !== null) {
          current = current.next;
        }

        current.next = node;
      }

      this.count++;
    } // 向链表的特定位置插入一个新元素

  }, {
    key: "insert",
    value: function insert(element, index) {
      if (index < 0 || index > this.count) {
        return false;
      }

      var node = new Node(element);

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        var previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }

      this.count++;
    } // 返回链表中特定位置的元素。如果链表中不存在这样的元素， 则返回 undefined

  }, {
    key: "getElementAt",
    value: function getElementAt(index) {
      if (index >= 0 && index <= this.count) {
        var node = this.head;

        for (var i = 0; i < index && node !== null; i++) {
          node = node.next;
        }

        return node;
      }

      return;
    } // 从链表中移除一个元素

  }, {
    key: "remove",
    value: function remove(element) {
      var index = this.indexOf(element);
      return this.removeAt(index);
    } // 返回元素在链表中的索引。如果链表中没有该元素则返回-1。

  }, {
    key: "indexOf",
    value: function indexOf(element) {
      var current = this.head;

      for (var i = 0; i < this.count; i++) {
        if (this.equalsFn(element, current.element)) {
          return i;
        }

        current = current.next;
      }

      return -1;
    } // 从链表的特定位置移除一个元素

  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index < 0 || index >= this.count) {
        return;
      }

      var current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        var previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    } // 如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    } // 返回链表包含的元素个数，与数组的 length 属性类似

  }, {
    key: "size",
    value: function size() {
      return this.count;
    } // 清空链表

  }, {
    key: "clear",
    value: function clear() {
      this.head = undefined;
      this.count = 0;
    } // 返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。

  }, {
    key: "toString",
    value: function toString() {
      if (this.head === null) {
        return "";
      }

      var objString = "".concat(this.head.element);
      var current = this.head.next;

      for (var i = 0; i < this.count && current != null; i++) {
        objString = "".concat(objString, ", ").concat(current.element);
        current = current.next;
      }

      return objString;
    }
  }]);

  return LinkList;
}();

/***/ }),

/***/ "./src/code/10.DoublyCircularLinkList.js":
/*!***********************************************!*\
  !*** ./src/code/10.DoublyCircularLinkList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoublyCircularLinkedList": () => (/* binding */ DoublyCircularLinkedList)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.DoublyLinkedList.js */ "./src/code/2.DoublyLinkedList.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DoublyCircularLinkedList = /*#__PURE__*/function (_DoublyLinkedList) {
  _inherits(DoublyCircularLinkedList, _DoublyLinkedList);

  var _super = _createSuper(DoublyCircularLinkedList);

  function DoublyCircularLinkedList() {
    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;

    _classCallCheck(this, DoublyCircularLinkedList);

    return _super.call(this, equalsFn);
  }

  _createClass(DoublyCircularLinkedList, [{
    key: "insert",
    value: function insert(element, index) {
      if (index < 0 || index > this.count) {
        return;
      }

      var node = new _2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__.DoublyNode(element);
      var current = this.head;

      if (index === 0) {
        if (this.count === 0) {
          this.head = node;
          this.tail = node;
          this.tail.next = this.head;
          this.head.prev = this.tail;
        } else {
          var previous = current.prev;
          node.next = this.head;
          this.head.prev = node;
          previous.next = node;
          node.prev = previous;
          this.head = node;
        }
      } else if (index === this.count) {
        // 从链表尾部插入元素
        current = this.tail;
        var head = this.head;
        node.next = head;
        head.prev = node;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        var _current = this.getElementAt(index);

        var _previous = _current.prev;
        node.next = _current;
        _current.prev = node;
        node.prev = _previous;
        _previous.next = node;
      }

      this.count++;
      current = node;
      return current;
    }
  }, {
    key: "push",
    value: function push(element) {
      var node = new _2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__.DoublyNode(element);

      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
        this.tail.next = this.head;
        this.head.prev = this.tail;
      } else {
        var current = this.tail;
        var head = this.head;
        node.next = head;
        head.prev = node;
        current.next = node;
        node.prev = current;
        this.tail = node;
      }

      this.count++;
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index < 0 || index >= this.count || this.isEmpty()) {
        return;
      }

      var current = this.head;

      if (index === 0) {
        if (this.count === 1) {
          this.tail = null;
          this.head = null;
        } else {
          this.head = this.head.next;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        var previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous;
        this.tail = current.prev;
      } else {
        current = this.getElementAt(index);
        var _previous2 = current.prev;
        _previous2.next = current.next;
        current.next.prev = _previous2;
      }

      this.count--;
      return current;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.head === null) {
        return "";
      }

      var objString = "".concat(this.head.element);
      var current = this.head.next; // 这里使用 != 而不使用 !==， 因为 current 有时可能为 undefined

      while (current != null && current !== this.tail) {
        objString = "".concat(objString, ",").concat(current.element);
        current = current.next;
      }

      objString = "".concat(objString, ",").concat(this.tail.element);
      return objString;
    } // 反向打印链表

  }, {
    key: "inverseToString",
    value: function inverseToString() {
      if (this.tail === null) {
        return "";
      }

      var objString = "".concat(this.tail.element);
      var previous = this.tail.prev; // 这里使用 != 而不使用 !==， 因为 current 有时可能为 undefined

      while (previous != null && previous !== this.head) {
        objString = "".concat(objString, ",").concat(previous.element);
        previous = previous.prev;
      }

      objString = "".concat(objString, ",").concat(this.head.element);
      return objString;
    }
  }]);

  return DoublyCircularLinkedList;
}(_2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__.DoublyLinkedList);

/***/ }),

/***/ "./src/code/13.Set.js":
/*!****************************!*\
  !*** ./src/code/13.Set.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Set": () => (/* binding */ Set)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// add(element)：向集合添加一个新元素。
// delete(element)：从集合移除一个元素。
// has(element)：如果元素在集合中，返回 true，否则返回 false。
// clear()：移除集合中的所有元素。
// size()：返回集合所包含元素的数量。它与数组的 length 属性类似。
// values()：返回一个包含集合中所有值（元素）的数组
var Set = /*#__PURE__*/function () {
  function Set() {
    _classCallCheck(this, Set);

    this.items = {};
  }

  _createClass(Set, [{
    key: "add",
    value: function add(element) {
      if (!this.has(element)) {
        this.items[element] = element;
        return true;
      }

      return false;
    }
  }, {
    key: "delete",
    value: function _delete(element) {
      if (this.has(element)) {
        delete this.items[element];
        return true;
      }

      return false;
    }
  }, {
    key: "has",
    value: function has(element) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = {};
    }
  }, {
    key: "size",
    value: function size() {
      return Object.keys(this.items).length;
    }
  }, {
    key: "values",
    value: function values() {
      return Object.values(this.items);
    }
  }]);

  return Set;
}();

/***/ }),

/***/ "./src/code/14.Dictionary.js":
/*!***********************************!*\
  !*** ./src/code/14.Dictionary.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValuePair": () => (/* binding */ ValuePair),
/* harmony export */   "Dictionary": () => (/* binding */ Dictionary)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1. set(key,value)：向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖。
// 2. remove(key)：通过使用键值作为参数来从字典中移除键值对应的数据值。
// 3. hasKey(key)：如果某个键值存在于该字典中，返回true，否则返回false。
// 4. get(key)：通过以键值作为参数查找特定的数值并返回。
// 5. clear()：删除该字典中的所有值。
// 6. size()：返回字典所包含值的数量。与数组的length 属性类似。
// 7. isEmpty()：在size 等于零的时候返回true，否则返回false。
// 8. keys()：将字典所包含的所有键名以数组形式返回。
// 9. values()：将字典所包含的所有数值以数组形式返回。
// 10. keyValues()：将字典中所有[键，值]对返回。
// 11. forEach(callbackFn)：迭代字典中所有的键值对。callbackFn 有两个参数：key 和 value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）。

var ValuePair = /*#__PURE__*/function () {
  function ValuePair(key, value) {
    _classCallCheck(this, ValuePair);

    this.key = key;
    this.value = value;
  }

  _createClass(ValuePair, [{
    key: "toString",
    value: function toString() {
      return "[#".concat(this.key, ", ").concat(this.value, "]");
    }
  }]);

  return ValuePair;
}();
var Dictionary = /*#__PURE__*/function () {
  function Dictionary() {
    var toStrFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultToString;

    _classCallCheck(this, Dictionary);

    this.toStrFn = toStrFn;
    this.table = {};
  } // 向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖


  _createClass(Dictionary, [{
    key: "set",
    value: function set(key, value) {
      if (key != null && value != null) {
        var tableKey = this.toStrFn(key);
        this.table[tableKey] = new ValuePair(key, value);
        return true;
      }

      return false;
    } // remove(key)：通过使用键值作为参数来从字典中移除键值对应的数据值。

  }, {
    key: "remove",
    value: function remove(key) {
      if (this.hasKey(key)) {
        delete this.table[this.toStrFn(key)];
        return true;
      }

      return false;
    } // 如果某个键值存在于该字典中，返回true，否则返回false。

  }, {
    key: "hasKey",
    value: function hasKey(key) {
      var tableKey = this.toStrFn(key);
      return this.table[tableKey] != null;
    } // 通过以键值作为参数查找特定的数值并返回。

  }, {
    key: "get",
    value: function get(key) {
      if (this.hasKey(key)) {
        return this.table[this.toStrFn(key)].value;
      }

      return;
    } // 删除该字典中的所有值。

  }, {
    key: "clear",
    value: function clear() {
      this.table = {};
    } // 返回字典所包含值的数量。与数组的length 属性类似。

  }, {
    key: "size",
    value: function size() {
      return Object.keys(this.table).length;
    } // 在size 等于零的时候返回true，否则返回false。

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    } // 将字典所包含的所有键名以数组形式返回

  }, {
    key: "keys",
    value: function keys() {
      return this.keyValues.map(function (valuePair) {
        return valuePair.key;
      });
    } // 将字典所包含的所有数值以数组形式返回

  }, {
    key: "values",
    value: function values() {
      return this.keyValues.map(function (valuePair) {
        return valuePair.value;
      });
    } // 将字典中所有[键，值]对返回

  }, {
    key: "keyValues",
    value: function keyValues() {
      return Object.values(this.table);
    } // 迭代字典中所有的键值对。callbackFn 有两个参数：key 和 value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）

  }, {
    key: "forEach",
    value: function forEach(callbackFn) {
      var valuePairs = this.keyValues();

      for (var i = 0; i < valuePairs.length; i++) {
        var result = callbackFn(valuePairs[i].key, valuePairs[i].value);

        if (result === false) {
          break;
        }
      }
    }
  }]);

  return Dictionary;
}();

/***/ }),

/***/ "./src/code/15.HashTable.js":
/*!**********************************!*\
  !*** ./src/code/15.HashTable.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashTable": () => (/* binding */ HashTable)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _14_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./14.Dictionary.js */ "./src/code/14.Dictionary.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// put(key,value)：向散列表增加一个新的项（也能更新散列表）。
// remove(key)：根据键值从散列表中移除值。
// get(key)：返回根据键值检索到的特定的值。


var HashTable = /*#__PURE__*/function () {
  function HashTable() {
    var toStrFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultToString;

    _classCallCheck(this, HashTable);

    this.toStrFn = toStrFn;
    this.table = {};
  } // 散列函数


  _createClass(HashTable, [{
    key: "loseloseHashCode",
    value: function loseloseHashCode(key) {
      if (typeof key === "number") {
        return key;
      }

      var tableKey = this.toStrFn(key);
      var hash = 0;

      for (var i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i);
      }

      return hash % 99;
    }
  }, {
    key: "hashCode",
    value: function hashCode(key) {
      return this.loseloseHashCode(key);
    } // 向散列表增加一个新的项（也能更新散列表）。

  }, {
    key: "put",
    value: function put(key, value) {
      if (key != null && value != null) {
        var hashKey = this.hashCode(key);
        this.table[hashKey] = new _14_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__.ValuePair(key, value);
      }
    } // 根据键值从散列表中移除值。

  }, {
    key: "remove",
    value: function remove(key) {
      var hashKey = this.hashCode(key);
      var valuePair = this.table[hashKey];

      if (valuePair != null) {
        delete this.table[hashKey];
        return true;
      }

      return false;
    } // 返回根据键值检索到的特定的值。

  }, {
    key: "get",
    value: function get(key) {
      var hashKey = this.hashCode(key);
      var valuePair = this.table[hashKey];
      return valuePair ? valuePair.value : undefined;
    }
  }]);

  return HashTable;
}();

/***/ }),

/***/ "./src/code/17.HashTableLinearProbing.js":
/*!***********************************************!*\
  !*** ./src/code/17.HashTableLinearProbing.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashTableLinearProbing": () => (/* binding */ HashTableLinearProbing)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _14_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./14.Dictionary.js */ "./src/code/14.Dictionary.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // 散列表线性探查

var HashTableLinearProbing = /*#__PURE__*/function () {
  function HashTableLinearProbing() {
    var toStrFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultToString;

    _classCallCheck(this, HashTableLinearProbing);

    this.toStrFn = toStrFn;
    this.table = {};
  } // 散列函数


  _createClass(HashTableLinearProbing, [{
    key: "loseloseHashCode",
    value: function loseloseHashCode(key) {
      if (typeof key === "number") {
        return key;
      }

      var tableKey = this.toStrFn(key);
      var hash = 0;

      for (var i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i);
      }

      return hash % 37;
    }
  }, {
    key: "hashCode",
    value: function hashCode(key) {
      return this.loseloseHashCode(key);
    }
  }, {
    key: "put",
    value: function put(key, value) {
      if (key != null && value != null) {
        var position = this.hashCode(key);

        if (this.table[position] == null) {
          this.table[position] = new _14_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__.ValuePair(key, value);
        } else {
          var index = position + 1;

          while (this.table[index] != null) {
            index++;
          }

          this.table[index] = new _14_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__.ValuePair(key, value);
        }

        return true;
      }

      return false;
    }
  }, {
    key: "get",
    value: function get(key) {
      var position = this.hashCode(key);

      if (this.table[position] != null) {
        if (this.table[position].key === key) {
          return this.table[position].value;
        }

        var index = position + 1;

        while (this.table[index] != null && this.table[index].key !== key) {
          index++;
        }

        if (this.table[index] != null && this.table[index].key === key) {
          return this.table[index].value;
        }
      }
    }
  }, {
    key: "remove",
    value: function remove(key) {}
  }]);

  return HashTableLinearProbing;
}();

/***/ }),

/***/ "./src/code/19.BinarySearchTree.js":
/*!*****************************************!*\
  !*** ./src/code/19.BinarySearchTree.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "BinarySearchTree": () => (/* binding */ BinarySearchTree)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Node = function Node(key) {
  _classCallCheck(this, Node);

  this.key = key;
  this.left = null;
  this.right = null;
};
var BinarySearchTree = /*#__PURE__*/function () {
  function BinarySearchTree() {
    var compareFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultCompare;

    _classCallCheck(this, BinarySearchTree);

    this.compareFn = compareFn;
    this.root = null;
  } // insert(key)：向树中插入一个新的键。


  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(key) {
      if (this.root === null) {
        this.root = new Node(key);
      } else {
        this.insertNode(this.root, key);
      }
    }
  }, {
    key: "insertNode",
    value: function insertNode(node, key) {
      if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.LESS_THAN) {
        if (node.left === null) {
          node.left = new Node(key);
        } else {
          this.insertNode(node.left, key);
        }
      } else {
        if (node.right === null) {
          node.right = new Node(key);
        } else {
          this.insertNode(node.right, key);
        }
      }
    } // inOrderTraverse()：通过中序遍历方式遍历所有节点。

  }, {
    key: "inOrderTraverse",
    value: function inOrderTraverse(callback) {
      this.inOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "inOrderTraverseNode",
    value: function inOrderTraverseNode(node, callback) {
      if (node != null) {
        this.inOrderTraverseNode(node.left, callback);
        callback(node);
        this.inOrderTraverseNode(node.right, callback);
      }
    } // preOrderTraverse()：通过先序遍历方式遍历所有节点。

  }, {
    key: "preOrderTraverse",
    value: function preOrderTraverse(callback) {
      this.preOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "preOrderTraverseNode",
    value: function preOrderTraverseNode(node, callback) {
      if (node != null) {
        callback(node);
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
      }
    } // postOrderTraverse()：通过后序遍历方式遍历所有节点。

  }, {
    key: "postOrderTraverse",
    value: function postOrderTraverse(callback) {
      this.postOrderTraverseNode(this.root, callback);
    }
  }, {
    key: "postOrderTraverseNode",
    value: function postOrderTraverseNode(node, callback) {
      if (node != null) {
        this.postOrderTraverseNode(node.left, callback);
        this.postOrderTraverseNode(node.right, callback);
        callback(node);
      }
    } // min()：返回树中最小的值/键。

  }, {
    key: "min",
    value: function min() {
      return this.minNode(this.root);
    }
  }, {
    key: "minNode",
    value: function minNode(node) {
      var current = node;

      while (current.left != null) {
        current = current.left;
      }

      return current;
    } // max()：返回树中最大的值/键。

  }, {
    key: "max",
    value: function max() {
      return this.maxNode(this.root);
    }
  }, {
    key: "maxNode",
    value: function maxNode(node) {
      var current = node;

      while (current.right != null) {
        current = current.right;
      }

      return current;
    } // search(key)：在树中查找一个键。如果节点存在，则返回 true；如果不存在，则返回 false。

  }, {
    key: "search",
    value: function search(key) {
      return this.searchNode(this.root, key);
    }
  }, {
    key: "searchNode",
    value: function searchNode(node, key) {
      if (node == null) {
        return false;
      }

      if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.LESS_THAN) {
        return this.searchNode(node.left, key);
      } else if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.BIGGER_THAN) {
        return this.searchNode(node.right, key);
      } else {
        return true;
      }
    } // remove(key)：从树中移除某个键

  }, {
    key: "remove",
    value: function remove(key) {
      this.removeNode(this.root, key);
    }
  }, {
    key: "removeNode",
    value: function removeNode(node, key) {
      if (node == null) {
        return null;
      }

      if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.LESS_THAN) {
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.BIGGER_THAN) {
        node.right = this.removeNode(node.right, key);
        return node;
      } else {
        // case 1: 无子树时，直接将 node 置为 null，并且 return null，使得调用栈获取移除 key 后的树结构数据
        if (node.left == null && node.right == null) {
          node = null;
          return node;
        } // case 2: 移除中间层的树。


        if (node.left == null) {
          // 当前键没有左子树，只有右子树，
          // node = node.right 就是让中间层节点等于右子树节点。return node 中间层树的父级指向了中间层的右子树
          node = node.right;
          return node;
        } else if (node.right == null) {
          // 当前键没有右子树，只有左子树，
          // node = node.left 就是让中间层节点等于左子树节点。return node 中间层树的父级指向了中间层的左子树
          node = node.left;
          return node;
        } // case 3: 移除靠近树顶部的键（离 root 很近的键）
        // 需要找到当前键右子树的最小键，目的就是为了填补当前键被移除后的空缺


        var aux = this.minNode(node.right);
        node.key = aux.key; // 填补空缺后，从右侧子树中移除最小的节点

        node.right = this.removeNode(node.right, aux.key);
        return node;
      }
    }
  }]);

  return BinarySearchTree;
}();

/***/ }),

/***/ "./src/code/2.DoublyLinkedList.js":
/*!****************************************!*\
  !*** ./src/code/2.DoublyLinkedList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoublyNode": () => (/* binding */ DoublyNode),
/* harmony export */   "DoublyLinkedList": () => (/* binding */ DoublyLinkedList)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1.LinkList.js */ "./src/code/1.LinkList.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DoublyNode = /*#__PURE__*/function (_Node) {
  _inherits(DoublyNode, _Node);

  var _super = _createSuper(DoublyNode);

  function DoublyNode(element, next, prev) {
    var _this;

    _classCallCheck(this, DoublyNode);

    _this = _super.call(this, element, next);
    _this.prev = prev;
    return _this;
  }

  return DoublyNode;
}(_1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__.Node);
var DoublyLinkedList = /*#__PURE__*/function (_LinkList) {
  _inherits(DoublyLinkedList, _LinkList);

  var _super2 = _createSuper(DoublyLinkedList);

  function DoublyLinkedList() {
    var _this2;

    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;

    _classCallCheck(this, DoublyLinkedList);

    _this2 = _super2.call(this, equalsFn);
    _this2.tail = null;
    return _this2;
  }

  _createClass(DoublyLinkedList, [{
    key: "insert",
    value: function insert(element, index) {
      if (index < 0 || index > this.count) {
        return false;
      }

      var node = new DoublyNode(element);
      var current = this.head;

      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        var previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        current.prev = node;
        previous.next = node;
        node.prev = previous;
      }

      this.count++;
      return true;
    }
  }, {
    key: "push",
    value: function push(element) {
      var node = new DoublyNode(element);

      if (this.count === 0) {
        this.head = node;
        this.tail = node;
      } else {
        var current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      }

      this.count++;
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index < 0 || index >= this.count) {
        return;
      }

      var current = this.head;

      if (index === 0) {
        this.head = this.head.next;

        if (this.count === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        current.prev = null;
        this.tail.next = null;
      } else {
        current = this.getElementAt(index);
        var previous = current.prev;
        previous.next = current.next;
        current.next.prev = previous; // 移除被删元素的 prev next 指针

        current.prev = null;
        current.next = null;
      }

      this.count--;
      return current.element;
    }
  }, {
    key: "indexOf",
    value: function indexOf(element) {
      var current = this.head;
      var index = 0;

      while (current.next !== null) {
        if (this.equalsFn(element, current.element)) {
          return index;
        }

        index++;
      }

      return -1;
    }
  }, {
    key: "getHead",
    value: function getHead() {
      return this.head;
    }
  }, {
    key: "getTail",
    value: function getTail() {
      return this.tail;
    }
  }, {
    key: "clear",
    value: function clear() {
      _get(_getPrototypeOf(DoublyLinkedList.prototype), "clear", this).call(this);

      this.tail = null;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.head === null) {
        return "";
      }

      var objString = "".concat(this.head.element);
      var current = this.head.next; // 这里使用 != 而不使用 !==， 因为 current 有时可能为 undefined

      while (current != null) {
        objString = "".concat(objString, ",").concat(current.element);
        current = current.next;
      }

      return objString;
    } // 反向打印链表

  }, {
    key: "inverseToString",
    value: function inverseToString() {
      if (this.tail === null) {
        return "";
      }

      var objString = "".concat(this.tail.element);
      var previous = this.tail.prev; // 这里使用 != 而不使用 !==， 因为 current 有时可能为 undefined

      while (previous != null) {
        objString = "".concat(objString, ",").concat(previous.element);
        previous = previous.prev;
      }

      return objString;
    }
  }]);

  return DoublyLinkedList;
}(_1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__.LinkList);

/***/ }),

/***/ "./src/code/20.AVLTree.js":
/*!********************************!*\
  !*** ./src/code/20.AVLTree.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AVLTree": () => (/* binding */ AVLTree)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _19_BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./19.BinarySearchTree.js */ "./src/code/19.BinarySearchTree.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var AVLTree = /*#__PURE__*/function (_BinarySearchTree) {
  _inherits(AVLTree, _BinarySearchTree);

  var _super = _createSuper(AVLTree);

  function AVLTree() {
    var compareFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultCompare;

    _classCallCheck(this, AVLTree);

    return _super.call(this, compareFn);
  } // 获取节点高度


  _createClass(AVLTree, [{
    key: "getNodeHeight",
    value: function getNodeHeight(node) {
      if (node == null) {
        // 这里空节点（叶子节点）返回 -1，可以根据下面的 return 推导出来
        return -1;
      } // 节点的高度是从节点到其任意子节点的边的最大值
      // 父节点的高度都比子节点的高度 +1， 不容置疑，所以要 +1


      return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    } // 获取平衡因子

  }, {
    key: "getBalanceFactor",
    value: function getBalanceFactor(node) {
      // 这里算的平衡因子 = 左侧子节点高度 - 右侧子节点高度
      var heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

      switch (heightDifference) {
        case -2:
          return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.UNBALANCED_RIGHT;

        case -1:
          return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;

        case 1:
          return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;

        case 2:
          return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.UNBALANCED_LEFT;

        default:
          return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.BALANCED;
      }
    } // 左-左：向右的单旋转。左侧失衡

  }, {
    key: "rotationLL",
    value: function rotationLL(node) {
      var tmp = node.left;
      node.left = tmp.right;
      tmp.right = node;
      return tmp;
    } // 右-右(RR)：向左的单旋转。右侧失衡

  }, {
    key: "rotationRR",
    value: function rotationRR(node) {
      var tmp = node.right;
      node.right = tmp.left;
      tmp.left = node;
      return tmp;
    } // 左-右(LR)：向右的双旋转
    // 左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重

  }, {
    key: "rotationLR",
    value: function rotationLR(node) {
      node.left = this.rotationRR(node.left); // 相当于对 node.left 进行一个左旋转

      return this.rotationLL(node); // 再对 node 进行一个右旋转
    } // 右-左(RL)：向左的双旋转
    // 右侧子节点的高度大于左侧子节点的高度，并且右侧子节点左侧较重

  }, {
    key: "rotationRL",
    value: function rotationRL(node) {
      node.right = this.rotationLL(node.right); // 相当于对 node.right 进行一个右旋转

      return this.rotationRR(node); // 再对 node 进行一个左旋转
    }
  }, {
    key: "insert",
    value: function insert(key) {
      // 每次 insertNode 都是对 this.root 的重新赋值
      this.root = this.insertNode(this.root, key);
    }
  }, {
    key: "insertNode",
    value: function insertNode(node, key) {
      // 像在 BST 树中一样插入节点
      if (node == null) {
        return new _19_BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__.Node(key);
      } else if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.LESS_THAN) {
        node.left = this.insertNode(node.left, key);
      } else if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.BIGGER_THAN) {
        node.right = this.insertNode(node.right, key);
      } else {
        return node; // 重复的键
      } // 如果需要，将树进行平衡操作


      var balanceFactor = this.getBalanceFactor(node); // 树的左侧失衡（较重）

      if (balanceFactor === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.UNBALANCED_LEFT) {
        // 与 node.left 对比，若是小于 node.left， 说明 key 在 node.left 的左侧，直接一个右旋转就可以平衡
        if (this.compareFn(key, node.left.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.LESS_THAN) {
          node = this.rotationLL(node);
        } else {
          // 否则，key 大于 node.left， 说明 key 在 node.left 的右侧，换句话说是，左侧子节点右侧较重
          // 需要对 node.left 进行一个左旋转， 再对 node 进行一个右旋转
          // 这两个旋转的合成就是 rotationLR
          return this.rotationLR(node);
        }
      } // 树的右侧较重


      if (balanceFactor === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.UNBALANCED_RIGHT) {
        // 与 node.right 对比，若是 key 大于 node.right， 说明 key 在 node.right 的右侧，直接一个左旋转就可以平衡
        if (this.compareFn(key, node.right.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.BIGGER_THAN) {
          node = this.rotationRR(node);
        } else {
          // 否则，key 小于 node.right，说明 key 在 node.right 的左侧，换句话说是，右侧子节点左侧较重
          // 需要对 node.right 先进行一个右旋转，再对 node 进行一个左旋转
          // 这两个旋转的合成就是 rotationRL
          return this.rotationRL(node);
        }
      } // 返回 node 的目的是，操作了节点后对该节点进行返回， 最终返回的是操作后的 root 节点
      // 其实每次 insertNode 都是对 this.root 的重新赋值


      return node;
    }
  }, {
    key: "removeNode",
    value: function removeNode(node, key) {
      node = _get(_getPrototypeOf(AVLTree.prototype), "removeNode", this).call(this, node, key);

      if (node == null) {
        return node; // null，不需要进行平衡
      } // 检测树是否平衡


      var balanceFactor = this.getBalanceFactor(node); // 左侧较重

      if (balanceFactor === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.UNBALANCED_LEFT) {
        var balanceFactorLeft = this.getBalanceFactor(node.left); // 左侧的左节点较重

        if (balanceFactorLeft === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
          return this.rotationLL(node);
        } // 左侧的右节点较重


        if (balanceFactorLeft === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
          return this.rotationLR(node.left);
        }
      } // 右侧较重


      if (balanceFactor === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.UNBALANCED_RIGHT) {
        var balanceFactorRight = this.getBalanceFactor(node.right); // 右侧的右节点较重

        if (balanceFactorRight === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
          return this.rotationRR(node);
        } // 右侧的左节点较重


        if (balanceFactorRight === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
          return this.rotationRL(node.right);
        }
      }

      return node;
    }
  }]);

  return AVLTree;
}(_19_BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__.BinarySearchTree);

/***/ }),

/***/ "./src/code/21.RedBlackTree.js":
/*!*************************************!*\
  !*** ./src/code/21.RedBlackTree.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedBlackNode": () => (/* binding */ RedBlackNode),
/* harmony export */   "RedBlackTree": () => (/* binding */ RedBlackTree)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _19_BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./19.BinarySearchTree.js */ "./src/code/19.BinarySearchTree.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RedBlackNode = /*#__PURE__*/function (_Node) {
  _inherits(RedBlackNode, _Node);

  var _super = _createSuper(RedBlackNode);

  function RedBlackNode(key) {
    var _this;

    _classCallCheck(this, RedBlackNode);

    _this = _super.call(this, key);
    _this.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.RED;
    _this.parent = null;
    return _this;
  }

  _createClass(RedBlackNode, [{
    key: "isRed",
    value: function isRed() {
      return this.color === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.RED;
    }
  }]);

  return RedBlackNode;
}(_19_BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__.Node);
var RedBlackTree = /*#__PURE__*/function (_BinarySearchTree) {
  _inherits(RedBlackTree, _BinarySearchTree);

  var _super2 = _createSuper(RedBlackTree);

  function RedBlackTree() {
    var compareFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultCompare;

    _classCallCheck(this, RedBlackTree);

    return _super2.call(this, compareFn);
  }

  _createClass(RedBlackTree, [{
    key: "insert",
    value: function insert(key) {
      if (this.root == null) {
        this.root = new RedBlackNode(key);
        this.root.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
      } else {
        // newNode 是当前插入的那个节点
        var newNode = this.insertNode(this.root, key);
        this.fixTreeProperties(newNode);
      }
    }
  }, {
    key: "insertNode",
    value: function insertNode(node, key) {
      if (this.compareFn(key, node.key) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.LESS_THAN) {
        if (node.left == null) {
          // 逻辑和二叉搜索树中的一样,不同之处在于保存了指向被插入节点父节点的引用
          node.left = new RedBlackNode(key);
          node.left.parent = node;
          return node.left;
        } else {
          return this.insertNode(node.left, key);
        }
      } else {
        if (node.right == null) {
          node.right = new RedBlackNode(key);
          node.right.parent = node;
          return node.right;
        } else {
          return this.insertNode(node.right, key);
        }
      }
    } // 在插入节点后验证红黑树属性

  }, {
    key: "fixTreeProperties",
    value: function fixTreeProperties(node) {
      while (node && node.parent && node.parent.isRed() && node.color !== _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK) {
        var parent = node.parent;
        var grandParent = parent.parent; // 情形 A: 父节点是左侧子节点

        if (grandParent && grandParent.left === parent) {
          var uncle = grandParent.right;

          if (uncle && uncle.isRed()) {
            grandParent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.RED;
            uncle.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
            parent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
            node = grandParent;
          } else {
            // 情形 2A： 节点是右侧子节点（左侧的右子树较重） -- 左旋转
            if (node === parent.right) {
              this.rotationRR(parent);
              node = parent;
              parent = node.parent;
            } // 情形 3A：节点是左侧子节点 -- 右旋转


            this.rotationLL(grandParent);
            parent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
            grandParent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.RED;
            node = parent;
          }
        } else {
          // 情形 B: 父节点是右侧子节点
          var _uncle = grandParent.left;

          if (_uncle && _uncle.isRed()) {
            grandParent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.RED;
            _uncle.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
            parent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
            node = grandParent;
          } else {
            // 情形 2B：节点是左侧子节点——左旋转
            if (node === parent.left) {
              this.rotationLL(parent);
              node = parent;
              parent = node.parent;
            } // 情形 3B：节点是右侧子节点——左旋转


            this.rotationRR(grandParent);
            parent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
            grandParent.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.RED;
            node = parent;
          }
        }

        this.root.color = _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;
      }
    }
  }, {
    key: "rotationLL",
    value: function rotationLL(node) {
      var tmp = node.left;
      node.left = tmp.right;

      if (tmp.right && tmp.right.key) {
        tmp.right.parent = node;
      }

      tmp.parent = node.parent;

      if (!node.parent) {
        this.root = tmp;
      } else {
        if (node === node.parent.left) {
          node.parent.left = tmp;
        } else {
          node.parent.right = tmp;
        }
      }

      tmp.right = node;
      node.parent = tmp;
    }
  }, {
    key: "rotationRR",
    value: function rotationRR(node) {
      var tmp = node.right;
      node.right = tmp.left;

      if (tmp.left && tmp.left.key) {
        tmp.left.parent = node;
      }

      tmp.parent = node.parent;

      if (!node.parent) {
        this.root = tmp;
      } else {
        if (node === node.parent.left) {
          node.parent.left = tmp;
        } else {
          node.parent.right = tmp;
        }
      }

      tmp.left = node;
      node.parent = tmp;
    }
  }]);

  return RedBlackTree;
}(_19_BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__.BinarySearchTree);

/***/ }),

/***/ "./src/code/22.MinHeap.js":
/*!********************************!*\
  !*** ./src/code/22.MinHeap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinHeap": () => (/* binding */ MinHeap),
/* harmony export */   "MaxHeap": () => (/* binding */ MaxHeap)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var MinHeap = /*#__PURE__*/function () {
  function MinHeap() {
    var compareFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultCompare;

    _classCallCheck(this, MinHeap);

    this.compareFn = compareFn;
    this.heap = [];
  } // 获取左侧节点下标


  _createClass(MinHeap, [{
    key: "getLeftIndex",
    value: function getLeftIndex(index) {
      return 2 * index + 1;
    } // 获取右侧节点下标

  }, {
    key: "getRightIndex",
    value: function getRightIndex(index) {
      return 2 * index + 2;
    } // 获取父级节点下标

  }, {
    key: "getParentIndex",
    value: function getParentIndex(index) {
      if (index === 0) {
        return undefined;
      }

      return Math.floor((index - 1) / 2);
    } // 插入一个新的值。如果插入成功，它返回 true，否则返回 false

  }, {
    key: "insert",
    value: function insert(value) {
      if (value != null) {
        var index = this.heap.length;
        this.heap.push(value);
        this.siftUp(index);
        return true;
      }

      return false;
    }
  }, {
    key: "siftUp",
    value: function siftUp(index) {
      var parent = this.getParentIndex(index);

      while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.BIGGER_THAN) {
        (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.swap)(this.heap, parent, index);
        index = parent;
        parent = this.getParentIndex(index);
      }
    }
  }, {
    key: "size",
    value: function size() {
      return this.heap.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    } // 移除最小值（最小堆）或最大值（最大堆），并返回这个值

  }, {
    key: "extract",
    value: function extract() {
      if (this.isEmpty()) {
        return undefined;
      }

      if (this.size() === 1) {
        return this.heap.shift();
      }

      var removedValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.siftDown(0);
      return removedValue;
    }
  }, {
    key: "siftDown",
    value: function siftDown(index) {
      var element = index;
      var left = this.getLeftIndex(index);
      var right = this.getRightIndex(index);
      var size = this.size();

      if (left < size && this.compareFn(this.heap[element], this.heap[left]) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.BIGGER_THAN) {
        element = left;
      }

      if (right < size && this.compareFn(this.heap[element], this.heap[right]) === _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.Compare.BIGGER_THAN) {
        element = right;
      }

      if (index !== element) {
        (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.swap)(this.heap, index, element);
        this.siftDown(element);
      }
    } // 返回最小值（最小堆）或最大值（最大堆）且不会移除这个值

  }, {
    key: "findMinimum",
    value: function findMinimum() {
      return this.isEmpty() ? undefined : this.heap[0];
    }
  }]);

  return MinHeap;
}(); // 最大堆

var MaxHeap = /*#__PURE__*/function (_MinHeap) {
  _inherits(MaxHeap, _MinHeap);

  var _super = _createSuper(MaxHeap);

  function MaxHeap() {
    var _this;

    var compareFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultCompare;

    _classCallCheck(this, MaxHeap);

    _this = _super.call(this, compareFn);
    _this.compareFn = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.reverseCompare)(compareFn);
    return _this;
  }

  return MaxHeap;
}(MinHeap);

/***/ }),

/***/ "./src/code/3.CircularLinkedList.js":
/*!******************************************!*\
  !*** ./src/code/3.CircularLinkedList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircularLinkedList": () => (/* binding */ CircularLinkedList)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1.LinkList.js */ "./src/code/1.LinkList.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CircularLinkedList = /*#__PURE__*/function (_LinkList) {
  _inherits(CircularLinkedList, _LinkList);

  var _super = _createSuper(CircularLinkedList);

  function CircularLinkedList() {
    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;

    _classCallCheck(this, CircularLinkedList);

    return _super.call(this, equalsFn);
  }

  _createClass(CircularLinkedList, [{
    key: "insert",
    value: function insert(element, index) {
      if (index < 0 || index > this.count) {
        return false;
      }

      var node = new _1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__.Node(element);
      var current = this.head;

      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = node;
        } else {
          node.next = current;
          current = this.getElementAt(this.count - 1);
          this.head = node;
          current.next = this.head;
        }
      } else {
        var previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }

      this.count++;
      return true;
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index < 0 || index >= this.count) {
        return;
      }

      var current = this.head;

      if (index === 0) {
        if (this.count === 1) {
          this.head = null;
        } else {
          var removed = this.head;
          current = this.getElementAt(this.count - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        var previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }
  }]);

  return CircularLinkedList;
}(_1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__.LinkList);

/***/ }),

/***/ "./src/code/4.SortedLinkedList.js":
/*!****************************************!*\
  !*** ./src/code/4.SortedLinkedList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortedLinkedList": () => (/* binding */ SortedLinkedList)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1.LinkList.js */ "./src/code/1.LinkList.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SortedLinkedList = /*#__PURE__*/function (_LinkList) {
  _inherits(SortedLinkedList, _LinkList);

  var _super = _createSuper(SortedLinkedList);

  function SortedLinkedList() {
    var _this;

    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;
    var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultCompare;

    _classCallCheck(this, SortedLinkedList);

    _this = _super.call(this, equalsFn);
    _this.compareFn = compareFn;
    return _this;
  }

  _createClass(SortedLinkedList, [{
    key: "push",
    value: function push(element) {
      if (this.count === 0) {
        return _get(_getPrototypeOf(SortedLinkedList.prototype), "push", this).call(this, element);
      } else {
        var index = this.getIndexNextSortedElement(element);
        return _get(_getPrototypeOf(SortedLinkedList.prototype), "insert", this).call(this, element, index);
      }
    }
  }, {
    key: "insert",
    value: function insert(element) {
      if (this.count === 0) {
        return _get(_getPrototypeOf(SortedLinkedList.prototype), "insert", this).call(this, element, 0);
      } else {
        var index = this.getIndexNextSortedElement(element);
        return _get(_getPrototypeOf(SortedLinkedList.prototype), "insert", this).call(this, element, index);
      }
    }
  }, {
    key: "getIndexNextSortedElement",
    value: function getIndexNextSortedElement(element) {
      var current = this.head;
      var i = 0;

      for (; i < this.count && current; i++) {
        var compare = this.compareFn(element, current.element);

        if (compare === Compare.LESS_THAN) {
          return i;
        }

        current = current.next;
      }

      return i;
    }
  }]);

  return SortedLinkedList;
}(_1_LinkList_js__WEBPACK_IMPORTED_MODULE_1__.LinkList);

/***/ }),

/***/ "./src/code/5.StackLinkedList.js":
/*!***************************************!*\
  !*** ./src/code/5.StackLinkedList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackLinkedList": () => (/* binding */ StackLinkedList)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.DoublyLinkedList.js */ "./src/code/2.DoublyLinkedList.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StackLinkedList = /*#__PURE__*/function () {
  function StackLinkedList() {
    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultEquals;

    _classCallCheck(this, StackLinkedList);

    this.items = new _2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__.DoublyLinkedList();
  }

  _createClass(StackLinkedList, [{
    key: "push",
    value: function push(element) {
      this.items.push(element);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.items.isEmpty()) {
        return;
      }

      return this.items.removeAt(this.items.size() - 1);
    }
  }]);

  return StackLinkedList;
}();

/***/ }),

/***/ "./src/code/6.array-stack.js":
/*!***********************************!*\
  !*** ./src/code/6.array-stack.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stack": () => (/* binding */ Stack)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.items = [];
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(element) {
      this.items.push(element);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return;
      }

      this.items.pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.items[this.count - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.items.length === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = [];
    }
  }]);

  return Stack;
}();

/***/ }),

/***/ "./src/code/7.object-stack.js":
/*!************************************!*\
  !*** ./src/code/7.object-stack.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectStack": () => (/* binding */ ObjectStack)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectStack = /*#__PURE__*/function () {
  function ObjectStack() {
    _classCallCheck(this, ObjectStack);

    this.items = {};
    this.count = 0;
  }

  _createClass(ObjectStack, [{
    key: "push",
    value: function push(element) {
      this.items[this.count] = element;
      this.count++;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return;
      }

      var result = this.items[this.count - 1];
      delete this.items[this.count - 1];
      this.count--;
      return result;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.items[this.count - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = {};
      this.count = 0; // while (this.count) {
      //   this.pop();
      // }
    }
  }]);

  return ObjectStack;
}();

/***/ }),

/***/ "./src/code/8.privite-symbol-property-Stack.js":
/*!*****************************************************!*\
  !*** ./src/code/8.privite-symbol-property-Stack.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbolStack": () => (/* binding */ SymbolStack)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _items = Symbol("stackItems");

var SymbolStack = /*#__PURE__*/function () {
  function SymbolStack() {
    _classCallCheck(this, SymbolStack);

    this[_items] = [];
  }

  _createClass(SymbolStack, [{
    key: "push",
    value: function push(element) {
      this[_items].push(element);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return;
      }

      this[_items].pop();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this[_items][this.count - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this[_items].length === 0;
    }
  }, {
    key: "clear",
    value: function clear() {
      this[_items] = [];
    }
  }]);

  return SymbolStack;
}();

/***/ }),

/***/ "./src/code/9.privite-weakmap-property-Stack.js":
/*!******************************************************!*\
  !*** ./src/code/9.privite-weakmap-property-Stack.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeakMapStack": () => (/* binding */ WeakMapStack)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var items = new WeakMap();
var WeakMapStack = /*#__PURE__*/function () {
  function WeakMapStack() {
    _classCallCheck(this, WeakMapStack);

    items.set(this, []);
  }

  _createClass(WeakMapStack, [{
    key: "push",
    value: function push(element) {
      var res = items.get(this);
      res.push(element);
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return;
      }

      var res = items.get(this);
      var data = res.pop();
      return data;
    }
  }, {
    key: "peek",
    value: function peek() {
      var res = items.get(this);
      return res[res.length - 1];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var res = items.get(this);
      return res.length === 0;
    }
  }, {
    key: "size",
    value: function size() {
      var res = items.get(this);
      return res.length;
    }
  }, {
    key: "clear",
    value: function clear() {
      items.set(this, []);
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return "";
      }

      var result = items.get(this);
      var objString = "".concat(result[0]);

      for (var i = 1; i < result.length; i++) {
        objString = "".concat(objString, ",").concat(result[i]);
      }

      return objString;
    }
  }]);

  return WeakMapStack;
}();

/***/ }),

/***/ "./src/sort/heap-sort.js":
/*!*******************************!*\
  !*** ./src/sort/heap-sort.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ heapSort)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./src/utils/index.js");
 // 堆化函数

function heapify(array, index, heapSize, compareFn) {
  var largest = index;
  var left = 2 * index + 1;
  var right = 2 * index + 2;

  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }

  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }

  if (largest !== index) {
    (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.swap)(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
} // 构建最大堆


function buildMaxHeap(array, compareFn) {
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length, compareFn);
  }

  return array;
}

function heapSort(array) {
  var compareFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__.defaultCompare;
  var heapSize = array.length;
  buildMaxHeap(array, compareFn); // 交换最大堆中元素，每次交换最大堆根元素和最后一个元素
  // 并减小堆长度
  // 不断交换直至堆大小为 1，最大堆完成所有交换，排序完成

  while (heapSize > 1) {
    (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.swap)(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }

  return array;
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultEquals": () => (/* binding */ defaultEquals),
/* harmony export */   "Compare": () => (/* binding */ Compare),
/* harmony export */   "defaultCompare": () => (/* binding */ defaultCompare),
/* harmony export */   "decimalToBinary": () => (/* binding */ decimalToBinary),
/* harmony export */   "baseConverter": () => (/* binding */ baseConverter),
/* harmony export */   "defaultToString": () => (/* binding */ defaultToString),
/* harmony export */   "BalanceFactor": () => (/* binding */ BalanceFactor),
/* harmony export */   "Colors": () => (/* binding */ Colors),
/* harmony export */   "swap": () => (/* binding */ swap),
/* harmony export */   "reverseCompare": () => (/* binding */ reverseCompare)
/* harmony export */ });
function defaultEquals(a, b) {
  return a === b;
}
var Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};
function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
} // 10 进制转 2 进制

function decimalToBinary(decNumber) {
  var remStack = new Stack();
  var number = decNumber;
  var rem;
  var binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
} // 10 进制转 2~36 进制

function baseConverter(decNumber, base) {
  var remStack = new Stack();
  var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // {6}

  var number = decNumber;
  var rem;
  var baseString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {7}
  }

  return baseString;
}
function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return "".concat(item);
  }

  return item.toString();
}
var BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};
var Colors = {
  RED: "red",
  BLACK: "black"
};
var swap = function swap(array, a, b) {
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};
var reverseCompare = function reverseCompare(compareFn) {
  return function (a, b) {
    return compareFn(b, a);
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkList": () => (/* reexport safe */ _code_1_LinkList_js__WEBPACK_IMPORTED_MODULE_0__.LinkList),
/* harmony export */   "Node": () => (/* reexport safe */ _code_1_LinkList_js__WEBPACK_IMPORTED_MODULE_0__.Node),
/* harmony export */   "DoublyLinkedList": () => (/* reexport safe */ _code_2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__.DoublyLinkedList),
/* harmony export */   "DoublyNode": () => (/* reexport safe */ _code_2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__.DoublyNode),
/* harmony export */   "CircularLinkedList": () => (/* reexport safe */ _code_3_CircularLinkedList_js__WEBPACK_IMPORTED_MODULE_2__.CircularLinkedList),
/* harmony export */   "SortedLinkedList": () => (/* reexport safe */ _code_4_SortedLinkedList_js__WEBPACK_IMPORTED_MODULE_3__.SortedLinkedList),
/* harmony export */   "StackLinkedList": () => (/* reexport safe */ _code_5_StackLinkedList_js__WEBPACK_IMPORTED_MODULE_4__.StackLinkedList),
/* harmony export */   "ObjectStack": () => (/* reexport safe */ _code_7_object_stack_js__WEBPACK_IMPORTED_MODULE_6__.ObjectStack),
/* harmony export */   "SymbolStack": () => (/* reexport safe */ _code_8_privite_symbol_property_Stack_js__WEBPACK_IMPORTED_MODULE_7__.SymbolStack),
/* harmony export */   "Stack": () => (/* reexport safe */ _code_6_array_stack_js__WEBPACK_IMPORTED_MODULE_5__.Stack),
/* harmony export */   "WeakMapStack": () => (/* reexport safe */ _code_9_privite_weakmap_property_Stack_js__WEBPACK_IMPORTED_MODULE_8__.WeakMapStack),
/* harmony export */   "DoublyCircularLinkedList": () => (/* reexport safe */ _code_10_DoublyCircularLinkList_js__WEBPACK_IMPORTED_MODULE_9__.DoublyCircularLinkedList),
/* harmony export */   "defaultCompare": () => (/* reexport safe */ _utils_index_js__WEBPACK_IMPORTED_MODULE_10__.defaultCompare),
/* harmony export */   "defaultEquals": () => (/* reexport safe */ _utils_index_js__WEBPACK_IMPORTED_MODULE_10__.defaultEquals),
/* harmony export */   "Compare": () => (/* reexport safe */ _utils_index_js__WEBPACK_IMPORTED_MODULE_10__.Compare)
/* harmony export */ });
/* harmony import */ var _code_1_LinkList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/1.LinkList.js */ "./src/code/1.LinkList.js");
/* harmony import */ var _code_2_DoublyLinkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/2.DoublyLinkedList.js */ "./src/code/2.DoublyLinkedList.js");
/* harmony import */ var _code_3_CircularLinkedList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code/3.CircularLinkedList.js */ "./src/code/3.CircularLinkedList.js");
/* harmony import */ var _code_4_SortedLinkedList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code/4.SortedLinkedList.js */ "./src/code/4.SortedLinkedList.js");
/* harmony import */ var _code_5_StackLinkedList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code/5.StackLinkedList.js */ "./src/code/5.StackLinkedList.js");
/* harmony import */ var _code_6_array_stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code/6.array-stack.js */ "./src/code/6.array-stack.js");
/* harmony import */ var _code_7_object_stack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code/7.object-stack.js */ "./src/code/7.object-stack.js");
/* harmony import */ var _code_8_privite_symbol_property_Stack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code/8.privite-symbol-property-Stack.js */ "./src/code/8.privite-symbol-property-Stack.js");
/* harmony import */ var _code_9_privite_weakmap_property_Stack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code/9.privite-weakmap-property-Stack.js */ "./src/code/9.privite-weakmap-property-Stack.js");
/* harmony import */ var _code_10_DoublyCircularLinkList_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./code/10.DoublyCircularLinkList.js */ "./src/code/10.DoublyCircularLinkList.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _code_13_Set_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code/13.Set.js */ "./src/code/13.Set.js");
/* harmony import */ var _code_15_HashTable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./code/15.HashTable.js */ "./src/code/15.HashTable.js");
/* harmony import */ var _code_17_HashTableLinearProbing_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./code/17.HashTableLinearProbing.js */ "./src/code/17.HashTableLinearProbing.js");
/* harmony import */ var _code_19_BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./code/19.BinarySearchTree.js */ "./src/code/19.BinarySearchTree.js");
/* harmony import */ var _code_20_AVLTree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./code/20.AVLTree.js */ "./src/code/20.AVLTree.js");
/* harmony import */ var _code_21_RedBlackTree_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./code/21.RedBlackTree.js */ "./src/code/21.RedBlackTree.js");
/* harmony import */ var _code_22_MinHeap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./code/22.MinHeap.js */ "./src/code/22.MinHeap.js");
/* harmony import */ var _sort_heap_sort_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sort/heap-sort.js */ "./src/sort/heap-sort.js");



















var array = [7, 6, 3, 5, 4, 1, 2];
console.log('Before sorting: ', array);
console.log('After sorting: ', (0,_sort_heap_sort_js__WEBPACK_IMPORTED_MODULE_18__["default"])(array));

})();

/******/ })()
;
//# sourceMappingURL=algorithms.js.map