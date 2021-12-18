(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$v =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var FunctionPrototype$1 = Function.prototype;
  var bind$3 = FunctionPrototype$1.bind;
  var call$8 = FunctionPrototype$1.call;
  var callBind = bind$3 && bind$3.bind(call$8);

  var functionUncurryThis = bind$3 ? function (fn) {
    return fn && callBind(call$8, fn);
  } : function (fn) {
    return fn && function () {
      return call$8.apply(fn, arguments);
    };
  };

  var fails$b = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var uncurryThis$d = functionUncurryThis;

  var toString$5 = uncurryThis$d({}.toString);
  var stringSlice$1 = uncurryThis$d(''.slice);

  var classofRaw$1 = function (it) {
    return stringSlice$1(toString$5(it), 8, -1);
  };

  var global$u = global$v;
  var uncurryThis$c = functionUncurryThis;
  var fails$a = fails$b;
  var classof$6 = classofRaw$1;

  var Object$5 = global$u.Object;
  var split = uncurryThis$c(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$a(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object$5('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$6(it) == 'String' ? split(it, '') : Object$5(it);
  } : Object$5;

  var global$t = global$v;

  var TypeError$b = global$t.TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$3 = function (it) {
    if (it == undefined) throw TypeError$b("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = indexedObject;
  var requireObjectCoercible$2 = requireObjectCoercible$3;

  var toIndexedObject$6 = function (it) {
    return IndexedObject(requireObjectCoercible$2(it));
  };

  var shared$3 = {exports: {}};

  var global$s = global$v;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$4 = Object.defineProperty;

  var setGlobal$3 = function (key, value) {
    try {
      defineProperty$4(global$s, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$s[key] = value;
    } return value;
  };

  var global$r = global$v;
  var setGlobal$2 = setGlobal$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$r[SHARED] || setGlobal$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$3.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.20.0',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });

  var global$q = global$v;
  var requireObjectCoercible$1 = requireObjectCoercible$3;

  var Object$4 = global$q.Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$2 = function (argument) {
    return Object$4(requireObjectCoercible$1(argument));
  };

  var uncurryThis$b = functionUncurryThis;
  var toObject$1 = toObject$2;

  var hasOwnProperty = uncurryThis$b({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$1(it), key);
  };

  var uncurryThis$a = functionUncurryThis;

  var id$1 = 0;
  var postfix = Math.random();
  var toString$4 = uncurryThis$a(1.0.toString);

  var uid$3 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$4(++id$1 + postfix, 36);
  };

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$g = function (argument) {
    return typeof argument == 'function';
  };

  var global$p = global$v;
  var isCallable$f = isCallable$g;

  var aFunction = function (argument) {
    return isCallable$f(argument) ? argument : undefined;
  };

  var getBuiltIn$5 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$p[namespace]) : global$p[namespace] && global$p[namespace][method];
  };

  var getBuiltIn$4 = getBuiltIn$5;

  var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

  var global$o = global$v;
  var userAgent = engineUserAgent;

  var process = global$o.process;
  var Deno = global$o.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION = engineV8Version;
  var fails$9 = fails$b;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$9(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = nativeSymbol;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$n = global$v;
  var shared$2 = shared$3.exports;
  var hasOwn$9 = hasOwnProperty_1;
  var uid$2 = uid$3;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var WellKnownSymbolsStore = shared$2('wks');
  var Symbol$1 = global$n.Symbol;
  var symbolFor = Symbol$1 && Symbol$1['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

  var wellKnownSymbol$c = function (name) {
    if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      var description = 'Symbol.' + name;
      if (NATIVE_SYMBOL && hasOwn$9(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    } return WellKnownSymbolsStore[name];
  };

  var isCallable$e = isCallable$g;

  var isObject$9 = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$e(it);
  };

  var global$m = global$v;
  var isObject$8 = isObject$9;

  var String$4 = global$m.String;
  var TypeError$a = global$m.TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$8 = function (argument) {
    if (isObject$8(argument)) return argument;
    throw TypeError$a(String$4(argument) + ' is not an object');
  };

  var fails$8 = fails$b;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$8(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var objectDefineProperty = {};

  var global$l = global$v;
  var isObject$7 = isObject$9;

  var document$1 = global$l.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$7(document$1) && isObject$7(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$8 = descriptors;
  var fails$7 = fails$b;
  var createElement = documentCreateElement$2;

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$8 && !fails$7(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var call$7 = Function.prototype.call;

  var functionCall = call$7.bind ? call$7.bind(call$7) : function () {
    return call$7.apply(call$7, arguments);
  };

  var uncurryThis$9 = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$9({}.isPrototypeOf);

  var global$k = global$v;
  var getBuiltIn$3 = getBuiltIn$5;
  var isCallable$d = isCallable$g;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Object$3 = global$k.Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$3('Symbol');
    return isCallable$d($Symbol) && isPrototypeOf$2($Symbol.prototype, Object$3(it));
  };

  var global$j = global$v;

  var String$3 = global$j.String;

  var tryToString$3 = function (argument) {
    try {
      return String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var global$i = global$v;
  var isCallable$c = isCallable$g;
  var tryToString$2 = tryToString$3;

  var TypeError$9 = global$i.TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$3 = function (argument) {
    if (isCallable$c(argument)) return argument;
    throw TypeError$9(tryToString$2(argument) + ' is not a function');
  };

  var aCallable$2 = aCallable$3;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$3 = function (V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$2(func);
  };

  var global$h = global$v;
  var call$6 = functionCall;
  var isCallable$b = isCallable$g;
  var isObject$6 = isObject$9;

  var TypeError$8 = global$h.TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$b(fn = input.toString) && !isObject$6(val = call$6(fn, input))) return val;
    if (isCallable$b(fn = input.valueOf) && !isObject$6(val = call$6(fn, input))) return val;
    if (pref !== 'string' && isCallable$b(fn = input.toString) && !isObject$6(val = call$6(fn, input))) return val;
    throw TypeError$8("Can't convert object to primitive value");
  };

  var global$g = global$v;
  var call$5 = functionCall;
  var isObject$5 = isObject$9;
  var isSymbol$1 = isSymbol$2;
  var getMethod$2 = getMethod$3;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$b = wellKnownSymbol$c;

  var TypeError$7 = global$g.TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$b('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$5(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$5(exoticToPrim, input, pref);
      if (!isObject$5(result) || isSymbol$1(result)) return result;
      throw TypeError$7("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$3 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var global$f = global$v;
  var DESCRIPTORS$7 = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var anObject$7 = anObject$8;
  var toPropertyKey$2 = toPropertyKey$3;

  var TypeError$6 = global$f.TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$7 ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$7(O);
    P = toPropertyKey$2(P);
    anObject$7(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError$6('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$3 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- safe
    return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

  var max$1 = Math.max;
  var min$1 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$2 = function (index, length) {
    var integer = toIntegerOrInfinity$2(index);
    return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
  };

  var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength = toLength$1;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$3 = function (obj) {
    return toLength(obj.length);
  };

  var toIndexedObject$5 = toIndexedObject$6;
  var toAbsoluteIndex$1 = toAbsoluteIndex$2;
  var lengthOfArrayLike$2 = lengthOfArrayLike$3;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$5($this);
      var length = lengthOfArrayLike$2(O);
      var index = toAbsoluteIndex$1(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$1(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false)
  };

  var hiddenKeys$5 = {};

  var uncurryThis$8 = functionUncurryThis;
  var hasOwn$8 = hasOwnProperty_1;
  var toIndexedObject$4 = toIndexedObject$6;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$5;

  var push = uncurryThis$8([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$4(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$8(hiddenKeys$4, key) && hasOwn$8(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$8(O, key = names[i++])) {
      ~indexOf(result, key) || push(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$6 = descriptors;
  var definePropertyModule$5 = objectDefineProperty;
  var anObject$6 = anObject$8;
  var toIndexedObject$3 = toIndexedObject$6;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var objectDefineProperties = DESCRIPTORS$6 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$6(O);
    var props = toIndexedObject$3(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$5.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$2 = getBuiltIn$5;

  var html$1 = getBuiltIn$2('document', 'documentElement');

  var shared$1 = shared$3.exports;
  var uid$1 = uid$3;

  var keys = shared$1('keys');

  var sharedKey$3 = function (key) {
    return keys[key] || (keys[key] = uid$1(key));
  };

  /* global ActiveXObject -- old IE, WSH */

  var anObject$5 = anObject$8;
  var defineProperties = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$3 = hiddenKeys$5;
  var html = html$1;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$2 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys$1.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
    return NullProtoObject();
  };

  hiddenKeys$3[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$5(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
  };

  var wellKnownSymbol$a = wellKnownSymbol$c;
  var create$2 = objectCreate;
  var definePropertyModule$4 = objectDefineProperty;

  var UNSCOPABLES = wellKnownSymbol$a('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    definePropertyModule$4.f(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$2(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$1 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var uncurryThis$7 = functionUncurryThis;
  var isCallable$a = isCallable$g;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$7(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$a(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var global$e = global$v;
  var isCallable$9 = isCallable$g;
  var inspectSource$1 = inspectSource$2;

  var WeakMap$1 = global$e.WeakMap;

  var nativeWeakMap = isCallable$9(WeakMap$1) && /native code/.test(inspectSource$1(WeakMap$1));

  var createPropertyDescriptor$4 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$5 = descriptors;
  var definePropertyModule$3 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$4;

  var createNonEnumerableProperty$5 = DESCRIPTORS$5 ? function (object, key, value) {
    return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$d = global$v;
  var uncurryThis$6 = functionUncurryThis;
  var isObject$4 = isObject$9;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
  var hasOwn$7 = hasOwnProperty_1;
  var shared = sharedStore;
  var sharedKey$1 = sharedKey$3;
  var hiddenKeys$2 = hiddenKeys$5;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$5 = global$d.TypeError;
  var WeakMap = global$d.WeakMap;
  var set$1, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$5('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = uncurryThis$6(store.get);
    var wmhas = uncurryThis$6(store.has);
    var wmset = uncurryThis$6(store.set);
    set$1 = function (it, metadata) {
      if (wmhas(store, it)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget(store, it) || {};
    };
    has = function (it) {
      return wmhas(store, it);
    };
  } else {
    var STATE = sharedKey$1('state');
    hiddenKeys$2[STATE] = true;
    set$1 = function (it, metadata) {
      if (hasOwn$7(it, STATE)) throw new TypeError$5(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$4(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$7(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$7(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var DESCRIPTORS$4 = descriptors;
  var call$4 = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$4;
  var toIndexedObject$2 = toIndexedObject$6;
  var toPropertyKey$1 = toPropertyKey$3;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$2(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$4(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var redefine$6 = {exports: {}};

  var DESCRIPTORS$3 = descriptors;
  var hasOwn$5 = hasOwnProperty_1;

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$5(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var global$c = global$v;
  var isCallable$8 = isCallable$g;
  var hasOwn$4 = hasOwnProperty_1;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
  var setGlobal$1 = setGlobal$3;
  var inspectSource = inspectSource$2;
  var InternalStateModule$3 = internalState;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;

  var getInternalState$2 = InternalStateModule$3.get;
  var enforceInternalState = InternalStateModule$3.enforce;
  var TEMPLATE = String(String).split('String');

  (redefine$6.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;
    if (isCallable$8(value)) {
      if (String(name).slice(0, 7) === 'Symbol(') {
        name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
      }
      if (!hasOwn$4(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
        createNonEnumerableProperty$3(value, 'name', name);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
      }
    }
    if (O === global$c) {
      if (simple) O[key] = value;
      else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty$3(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return isCallable$8(this) && getInternalState$2(this).source || inspectSource(this);
  });

  var objectGetOwnPropertyNames = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$3;

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$1 = getBuiltIn$5;
  var uncurryThis$5 = functionUncurryThis;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$4 = anObject$8;

  var concat = uncurryThis$5([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$1.f(anObject$4(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$3 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$3(target, key) && !(exceptions && hasOwn$3(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$6 = fails$b;
  var isCallable$7 = isCallable$g;

  var replacement = /#|\.prototype\./;

  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$7(detection) ? fails$6(detection)
      : !!detection;
  };

  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';

  var isForced_1 = isForced$2;

  var global$b = global$v;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
  var redefine$5 = redefine$6.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$1 = isForced_1;

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
    options.name        - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$b;
    } else if (STATIC) {
      target = global$b[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$b[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$2(sourceProperty, 'sham', true);
      }
      // extend global
      redefine$5(target, key, sourceProperty, options);
    }
  };

  var fails$5 = fails$b;

  var correctPrototypeGetter = !fails$5(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var global$a = global$v;
  var hasOwn$2 = hasOwnProperty_1;
  var isCallable$6 = isCallable$g;
  var toObject = toObject$2;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var Object$2 = global$a.Object;
  var ObjectPrototype = Object$2.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$2.getPrototypeOf : function (O) {
    var object = toObject(O);
    if (hasOwn$2(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$6(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof Object$2 ? ObjectPrototype : null;
  };

  var fails$4 = fails$b;
  var isCallable$5 = isCallable$g;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var redefine$4 = redefine$6.exports;
  var wellKnownSymbol$9 = wellKnownSymbol$c;

  var ITERATOR$5 = wellKnownSymbol$9('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$4(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$5(IteratorPrototype$2[ITERATOR$5])) {
    redefine$4(IteratorPrototype$2, ITERATOR$5, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$3 = objectDefineProperty.f;
  var hasOwn$1 = hasOwnProperty_1;
  var wellKnownSymbol$8 = wellKnownSymbol$c;

  var TO_STRING_TAG$3 = wellKnownSymbol$8('toStringTag');

  var setToStringTag$3 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$1(target, TO_STRING_TAG$3)) {
      defineProperty$3(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$1 = objectCreate;
  var createPropertyDescriptor$1 = createPropertyDescriptor$4;
  var setToStringTag$2 = setToStringTag$3;
  var Iterators$4 = iterators;

  var returnThis$1 = function () { return this; };

  var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$1(IteratorPrototype$1, { next: createPropertyDescriptor$1(+!ENUMERABLE_NEXT, next) });
    setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var global$9 = global$v;
  var isCallable$4 = isCallable$g;

  var String$2 = global$9.String;
  var TypeError$4 = global$9.TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$4(argument)) return argument;
    throw TypeError$4("Can't set " + String$2(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThis$4 = functionUncurryThis;
  var anObject$3 = anObject$8;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$4(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$3(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$2 = _export;
  var call$3 = functionCall;
  var FunctionName = functionName;
  var isCallable$3 = isCallable$g;
  var createIteratorConstructor = createIteratorConstructor$1;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$1 = objectSetPrototypeOf;
  var setToStringTag$1 = setToStringTag$3;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
  var redefine$3 = redefine$6.exports;
  var wellKnownSymbol$7 = wellKnownSymbol$c;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol$7('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$1) {
            setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$3(CurrentIteratorPrototype[ITERATOR$4])) {
            redefine$3(CurrentIteratorPrototype, ITERATOR$4, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$1(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$3(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$3(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$2({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
      redefine$3(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
    }
    Iterators$3[NAME] = defaultIterator;

    return methods;
  };

  var toIndexedObject$1 = toIndexedObject$6;
  var addToUnscopables = addToUnscopables$1;
  var Iterators$2 = iterators;
  var InternalStateModule$2 = internalState;
  var defineProperty$2 = objectDefineProperty.f;
  var defineIterator$2 = defineIterator$3;
  var DESCRIPTORS$2 = descriptors;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState$1 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$2(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$1(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = Iterators$2.Arguments = Iterators$2.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$2 && values.name !== 'values') try {
    defineProperty$2(values, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  var wellKnownSymbol$6 = wellKnownSymbol$c;

  var TO_STRING_TAG$2 = wellKnownSymbol$6('toStringTag');
  var test = {};

  test[TO_STRING_TAG$2] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var global$8 = global$v;
  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$2 = isCallable$g;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$5 = wellKnownSymbol$c;

  var TO_STRING_TAG$1 = wellKnownSymbol$5('toStringTag');
  var Object$1 = global$8.Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$5 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$4 = classof$5;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$4(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine$2 = redefine$6.exports;
  var toString$3 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    redefine$2(Object.prototype, 'toString', toString$3, { unsafe: true });
  }

  var internalMetadata = {exports: {}};

  var objectGetOwnPropertyNamesExternal = {};

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$4;

  var createProperty$1 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var global$7 = global$v;
  var toAbsoluteIndex = toAbsoluteIndex$2;
  var lengthOfArrayLike$1 = lengthOfArrayLike$3;
  var createProperty = createProperty$1;

  var Array$1 = global$7.Array;
  var max = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$1(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = Array$1(max(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$3 = classofRaw$1;
  var toIndexedObject = toIndexedObject$6;
  var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var arraySlice = arraySliceSimple;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames(it);
    } catch (error) {
      return arraySlice(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$3(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames(toIndexedObject(it));
  };

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$3 = fails$b;

  var arrayBufferNonExtensible = fails$3(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
    }
  });

  var fails$2 = fails$b;
  var isObject$3 = isObject$9;
  var classof$2 = classofRaw$1;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES = fails$2(function () { $isExtensible(1); });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
    if (!isObject$3(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var fails$1 = fails$b;

  var freezing = !fails$1(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$1 = _export;
  var uncurryThis$3 = functionUncurryThis;
  var hiddenKeys = hiddenKeys$5;
  var isObject$2 = isObject$9;
  var hasOwn = hasOwnProperty_1;
  var defineProperty$1 = objectDefineProperty.f;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible = objectIsExtensible;
  var uid = uid$3;
  var FREEZING = freezing;

  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  var setMetadata = function (it) {
    defineProperty$1(it, METADATA, { value: {
      objectID: 'O' + id++, // object ID
      weakData: {}          // weak collections IDs
    } });
  };

  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$2(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
    // return object ID
    } return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwn(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
    // return the store of weak collections IDs
    } return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () { /* empty */ };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule.f;
    var splice = uncurryThis$3([].splice);
    var test = {};
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        } return result;
      };

      $$1({ target: 'Object', stat: true, forced: true }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };

  hiddenKeys[METADATA] = true;

  var uncurryThis$2 = functionUncurryThis;
  var aCallable$1 = aCallable$3;

  var bind$2 = uncurryThis$2(uncurryThis$2.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$1(fn);
    return that === undefined ? fn : bind$2 ? bind$2(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var wellKnownSymbol$4 = wellKnownSymbol$c;
  var Iterators$1 = iterators;

  var ITERATOR$3 = wellKnownSymbol$4('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$3] === it);
  };

  var classof$1 = classof$5;
  var getMethod$1 = getMethod$3;
  var Iterators = iterators;
  var wellKnownSymbol$3 = wellKnownSymbol$c;

  var ITERATOR$2 = wellKnownSymbol$3('iterator');

  var getIteratorMethod$2 = function (it) {
    if (it != undefined) return getMethod$1(it, ITERATOR$2)
      || getMethod$1(it, '@@iterator')
      || Iterators[classof$1(it)];
  };

  var global$6 = global$v;
  var call$2 = functionCall;
  var aCallable = aCallable$3;
  var anObject$2 = anObject$8;
  var tryToString$1 = tryToString$3;
  var getIteratorMethod$1 = getIteratorMethod$2;

  var TypeError$3 = global$6.TypeError;

  var getIterator$1 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject$2(call$2(iteratorMethod, argument));
    throw TypeError$3(tryToString$1(argument) + ' is not iterable');
  };

  var call$1 = functionCall;
  var anObject$1 = anObject$8;
  var getMethod = getMethod$3;

  var iteratorClose$1 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$1(iterator);
    try {
      innerResult = getMethod(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$1(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$1(innerResult);
    return value;
  };

  var global$5 = global$v;
  var bind$1 = functionBindContext;
  var call = functionCall;
  var anObject = anObject$8;
  var tryToString = tryToString$3;
  var isArrayIteratorMethod = isArrayIteratorMethod$1;
  var lengthOfArrayLike = lengthOfArrayLike$3;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var getIterator = getIterator$1;
  var getIteratorMethod = getIteratorMethod$2;
  var iteratorClose = iteratorClose$1;

  var TypeError$2 = global$5.TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$2 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$1(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw TypeError$2(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }

    next = iterator.next;
    while (!(step = call(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var global$4 = global$v;
  var isPrototypeOf = objectIsPrototypeOf;

  var TypeError$1 = global$4.TypeError;

  var anInstance$2 = function (it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw TypeError$1('Incorrect invocation');
  };

  var wellKnownSymbol$2 = wellKnownSymbol$c;

  var ITERATOR$1 = wellKnownSymbol$2('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$1] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$1] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var isCallable$1 = isCallable$g;
  var isObject$1 = isObject$9;
  var setPrototypeOf = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable$1(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject$1(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var $ = _export;
  var global$3 = global$v;
  var uncurryThis$1 = functionUncurryThis;
  var isForced = isForced_1;
  var redefine$1 = redefine$6.exports;
  var InternalMetadataModule = internalMetadata.exports;
  var iterate$1 = iterate$2;
  var anInstance$1 = anInstance$2;
  var isCallable = isCallable$g;
  var isObject = isObject$9;
  var fails = fails$b;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
  var setToStringTag = setToStringTag$3;
  var inheritIfRequired = inheritIfRequired$1;

  var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$3[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function (KEY) {
      var uncurriedNativeMethod = uncurryThis$1(NativePrototype[KEY]);
      redefine$1(NativePrototype, KEY,
        KEY == 'add' ? function add(value) {
          uncurriedNativeMethod(this, value === 0 ? 0 : value);
          return this;
        } : KEY == 'delete' ? function (key) {
          return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
          return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
          return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
          return this;
        }
      );
    };

    var REPLACE = isForced(
      CONSTRUCTOR_NAME,
      !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
        new NativeConstructor().entries().next();
      }))
    );

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$1(dummy, NativePrototype);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $({ global: true, forced: Constructor != NativeConstructor }, exported);

    setToStringTag(Constructor, CONSTRUCTOR_NAME);

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

    return Constructor;
  };

  var redefine = redefine$6.exports;

  var redefineAll$1 = function (target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);
    return target;
  };

  var getBuiltIn = getBuiltIn$5;
  var definePropertyModule = objectDefineProperty;
  var wellKnownSymbol$1 = wellKnownSymbol$c;
  var DESCRIPTORS$1 = descriptors;

  var SPECIES = wellKnownSymbol$1('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;

    if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES]) {
      defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var defineProperty = objectDefineProperty.f;
  var create = objectCreate;
  var redefineAll = redefineAll$1;
  var bind = functionBindContext;
  var anInstance = anInstance$2;
  var iterate = iterate$2;
  var defineIterator$1 = defineIterator$3;
  var setSpecies = setSpecies$1;
  var DESCRIPTORS = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule$1 = internalState;

  var setInternalState$1 = InternalStateModule$1.set;
  var internalStateGetterFor = InternalStateModule$1.getterFor;

  var collectionStrong$1 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState$1(that, {
          type: CONSTRUCTOR_NAME,
          index: create(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS) that.size = 0;
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var Prototype = Constructor.prototype;

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
        // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS) state.size++;
          else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        } return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if (DESCRIPTORS) state.size = 0;
          else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS) state.size--;
            else that.size--;
          } return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });

      redefineAll(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS) defineProperty(Prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator$1(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$1(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return { value: undefined, done: true };
        }
        // return step by kind
        if (kind == 'keys') return { value: entry.key, done: false };
        if (kind == 'values') return { value: entry.value, done: false };
        return { value: [entry.key, entry.value], done: false };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies(CONSTRUCTOR_NAME);
    }
  };

  var collection = collection$1;
  var collectionStrong = collectionStrong$1;

  // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects
  collection('Set', function (init) {
    return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var global$2 = global$v;
  var classof = classof$5;

  var String$1 = global$2.String;

  var toString$2 = function (argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String$1(argument);
  };

  var uncurryThis = functionUncurryThis;
  var toIntegerOrInfinity = toIntegerOrInfinity$3;
  var toString$1 = toString$2;
  var requireObjectCoercible = requireObjectCoercible$3;

  var charAt$1 = uncurryThis(''.charAt);
  var charCodeAt = uncurryThis(''.charCodeAt);
  var stringSlice = uncurryThis(''.slice);

  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$1(requireObjectCoercible($this));
      var position = toIntegerOrInfinity(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$1(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt = stringMultibyte.charAt;
  var toString = toString$2;
  var InternalStateModule = internalState;
  var defineIterator = defineIterator$3;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: toString(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var global$1 = global$v;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty = createNonEnumerableProperty$5;
  var wellKnownSymbol = wellKnownSymbol$c;

  var ITERATOR = wellKnownSymbol('iterator');
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }
      if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(global$1[COLLECTION_NAME] && global$1[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

  // for (let i = 0; i < 5; i ++) {
  //   setTimeout(function(){
  //     document.body.appendChild(document.createTextNode(i))
  //   }, 500 * i)
  // }
  var set = new Set([1, 2, 3]);

  var _iterator = _createForOfIteratorHelper(set),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      document.body.appendChild(document.createTextNode(i));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

}));
