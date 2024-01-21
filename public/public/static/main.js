function Kc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ks = { exports: {} }, dl = {}, Es = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr = Symbol.for("react.element"), Xc = Symbol.for("react.portal"), Gc = Symbol.for("react.fragment"), Zc = Symbol.for("react.strict_mode"), Jc = Symbol.for("react.profiler"), qc = Symbol.for("react.provider"), bc = Symbol.for("react.context"), ef = Symbol.for("react.forward_ref"), tf = Symbol.for("react.suspense"), nf = Symbol.for("react.memo"), rf = Symbol.for("react.lazy"), ru = Symbol.iterator;
function lf(e) {
  return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Cs = Object.assign, _s = {};
function cn(e, t, n) {
  this.props = e, this.context = t, this.refs = _s, this.updater = n || xs;
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ps() {
}
Ps.prototype = cn.prototype;
function li(e, t, n) {
  this.props = e, this.context = t, this.refs = _s, this.updater = n || xs;
}
var oi = li.prototype = new Ps();
oi.constructor = li;
Cs(oi, cn.prototype);
oi.isPureReactComponent = !0;
var lu = Array.isArray, Ns = Object.prototype.hasOwnProperty, ii = { current: null }, Rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function zs(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Ns.call(t, r) && !Rs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: nr, type: e, key: o, ref: i, props: l, _owner: ii.current };
}
function of(e, t) {
  return { $$typeof: nr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nr;
}
function uf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ou = /\/+/g;
function jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? uf("" + e.key) : t.toString(36);
}
function Nr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nr:
          case Xc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + jl(i, 0) : r, lu(l) ? (n = "", e != null && (n = e.replace(ou, "$&/") + "/"), Nr(l, t, n, "", function(a) {
      return a;
    })) : l != null && (ui(l) && (l = of(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(ou, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", lu(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + jl(o, u);
      i += Nr(o, t, n, s, l);
    }
  else if (s = lf(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + jl(o, u++), i += Nr(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function cr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Nr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function sf(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ae = { current: null }, Rr = { transition: null }, af = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: Rr, ReactCurrentOwner: ii };
T.Children = { map: cr, forEach: function(e, t, n) {
  cr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return cr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return cr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ui(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = cn;
T.Fragment = Gc;
T.Profiler = Jc;
T.PureComponent = li;
T.StrictMode = Zc;
T.Suspense = tf;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = af;
T.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Cs({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = ii.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      Ns.call(t, s) && !Rs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++)
      u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: nr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: bc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: qc, _context: e }, e.Consumer = e;
};
T.createElement = zs;
T.createFactory = function(e) {
  var t = zs.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: ef, render: e };
};
T.isValidElement = ui;
T.lazy = function(e) {
  return { $$typeof: rf, _payload: { _status: -1, _result: e }, _init: sf };
};
T.memo = function(e, t) {
  return { $$typeof: nf, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function(e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
T.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function(e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function(e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function() {
  return ae.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return ae.current.useRef(e);
};
T.useState = function(e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return ae.current.useTransition();
};
T.version = "18.2.0";
Es.exports = T;
var _ = Es.exports;
const Ls = /* @__PURE__ */ Yc(_), cf = /* @__PURE__ */ Kc({
  __proto__: null,
  default: Ls
}, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff = _, df = Symbol.for("react.element"), pf = Symbol.for("react.fragment"), hf = Object.prototype.hasOwnProperty, mf = ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ts(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    hf.call(t, r) && !vf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: df, type: e, key: o, ref: i, props: l, _owner: mf.current };
}
dl.Fragment = pf;
dl.jsx = Ts;
dl.jsxs = Ts;
ks.exports = dl;
var j = ks.exports, uo = {}, Os = { exports: {} }, Se = {}, js = { exports: {} }, Is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(C, z) {
    var L = C.length;
    C.push(z);
    e:
      for (; 0 < L; ) {
        var Q = L - 1 >>> 1, J = C[Q];
        if (0 < l(J, z))
          C[Q] = z, C[L] = J, L = Q;
        else
          break e;
      }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0)
      return null;
    var z = C[0], L = C.pop();
    if (L !== z) {
      C[0] = L;
      e:
        for (var Q = 0, J = C.length, sr = J >>> 1; Q < sr; ) {
          var wt = 2 * (Q + 1) - 1, Ol = C[wt], St = wt + 1, ar = C[St];
          if (0 > l(Ol, L))
            St < J && 0 > l(ar, Ol) ? (C[Q] = ar, C[St] = L, Q = St) : (C[Q] = Ol, C[wt] = L, Q = wt);
          else if (St < J && 0 > l(ar, L))
            C[Q] = ar, C[St] = L, Q = St;
          else
            break e;
        }
    }
    return z;
  }
  function l(C, z) {
    var L = C.sortIndex - z.sortIndex;
    return L !== 0 ? L : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], a = [], h = 1, p = null, m = 3, y = !1, g = !1, w = !1, E = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null)
        r(a);
      else if (z.startTime <= C)
        r(a), z.sortIndex = z.expirationTime, t(s, z);
      else
        break;
      z = n(a);
    }
  }
  function v(C) {
    if (w = !1, d(C), !g)
      if (n(s) !== null)
        g = !0, Ll(k);
      else {
        var z = n(a);
        z !== null && Tl(v, z.startTime - C);
      }
  }
  function k(C, z) {
    g = !1, w && (w = !1, f(R), R = -1), y = !0;
    var L = m;
    try {
      for (d(z), p = n(s); p !== null && (!(p.expirationTime > z) || C && !Re()); ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          p.callback = null, m = p.priorityLevel;
          var J = Q(p.expirationTime <= z);
          z = e.unstable_now(), typeof J == "function" ? p.callback = J : p === n(s) && r(s), d(z);
        } else
          r(s);
        p = n(s);
      }
      if (p !== null)
        var sr = !0;
      else {
        var wt = n(a);
        wt !== null && Tl(v, wt.startTime - z), sr = !1;
      }
      return sr;
    } finally {
      p = null, m = L, y = !1;
    }
  }
  var P = !1, N = null, R = -1, H = 5, O = -1;
  function Re() {
    return !(e.unstable_now() - O < H);
  }
  function hn() {
    if (N !== null) {
      var C = e.unstable_now();
      O = C;
      var z = !0;
      try {
        z = N(!0, C);
      } finally {
        z ? mn() : (P = !1, N = null);
      }
    } else
      P = !1;
  }
  var mn;
  if (typeof c == "function")
    mn = function() {
      c(hn);
    };
  else if (typeof MessageChannel < "u") {
    var nu = new MessageChannel(), Qc = nu.port2;
    nu.port1.onmessage = hn, mn = function() {
      Qc.postMessage(null);
    };
  } else
    mn = function() {
      E(hn, 0);
    };
  function Ll(C) {
    N = C, P || (P = !0, mn());
  }
  function Tl(C, z) {
    R = E(function() {
      C(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, Ll(k));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var L = m;
    m = z;
    try {
      return C();
    } finally {
      m = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, z) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var L = m;
    m = C;
    try {
      return z();
    } finally {
      m = L;
    }
  }, e.unstable_scheduleCallback = function(C, z, L) {
    var Q = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Q + L : Q) : L = Q, C) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = L + J, C = { id: h++, callback: z, priorityLevel: C, startTime: L, expirationTime: J, sortIndex: -1 }, L > Q ? (C.sortIndex = L, t(a, C), n(s) === null && C === n(a) && (w ? (f(R), R = -1) : w = !0, Tl(v, L - Q))) : (C.sortIndex = J, t(s, C), g || y || (g = !0, Ll(k))), C;
  }, e.unstable_shouldYield = Re, e.unstable_wrapCallback = function(C) {
    var z = m;
    return function() {
      var L = m;
      m = z;
      try {
        return C.apply(this, arguments);
      } finally {
        m = L;
      }
    };
  };
})(Is);
js.exports = Is;
var yf = js.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ms = _, we = yf;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ds = /* @__PURE__ */ new Set(), Fn = {};
function jt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++)
    Ds.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), so = Object.prototype.hasOwnProperty, gf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, iu = {}, uu = {};
function wf(e) {
  return so.call(uu, e) ? !0 : so.call(iu, e) ? !1 : gf.test(e) ? uu[e] = !0 : (iu[e] = !0, !1);
}
function Sf(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kf(e, t, n, r) {
  if (t === null || typeof t > "u" || Sf(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var si = /[\-:]([a-z])/g;
function ai(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    si,
    ai
  );
  ne[t] = new ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(si, ai);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(si, ai);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ci(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (kf(t, n, l, r) && (n = null), r || l === null ? wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fr = Symbol.for("react.element"), Ut = Symbol.for("react.portal"), $t = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), ao = Symbol.for("react.profiler"), Fs = Symbol.for("react.provider"), Us = Symbol.for("react.context"), di = Symbol.for("react.forward_ref"), co = Symbol.for("react.suspense"), fo = Symbol.for("react.suspense_list"), pi = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), $s = Symbol.for("react.offscreen"), su = Symbol.iterator;
function vn(e) {
  return e === null || typeof e != "object" ? null : (e = su && e[su] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, Il;
function Cn(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = t && t[1] || "";
    }
  return `
` + Il + e;
}
var Ml = !1;
function Dl(e, t) {
  if (!e || Ml)
    return "";
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function Ef(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Dl(e.type, !1), e;
    case 11:
      return e = Dl(e.type.render, !1), e;
    case 1:
      return e = Dl(e.type, !0), e;
    default:
      return "";
  }
}
function po(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case $t:
      return "Fragment";
    case Ut:
      return "Portal";
    case ao:
      return "Profiler";
    case fi:
      return "StrictMode";
    case co:
      return "Suspense";
    case fo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Us:
        return (e.displayName || "Context") + ".Consumer";
      case Fs:
        return (e._context.displayName || "Context") + ".Provider";
      case di:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case pi:
        return t = e.displayName || null, t !== null ? t : po(e.type) || "Memo";
      case qe:
        t = e._payload, e = e._init;
        try {
          return po(e(t));
        } catch {
        }
    }
  return null;
}
function xf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return po(t);
    case 8:
      return t === fi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Cf(e) {
  var t = Bs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function dr(e) {
  e._valueTracker || (e._valueTracker = Cf(e));
}
function As(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Bs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Br(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ho(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ht(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Vs(e, t) {
  t = t.checked, t != null && ci(e, "checked", t, !1);
}
function mo(e, t) {
  Vs(e, t);
  var n = ht(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vo(e, t.type, n) : t.hasOwnProperty("defaultValue") && vo(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function cu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vo(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function Zt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yo(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (_n(n)) {
        if (1 < n.length)
          throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Ws(e, t) {
  var n = ht(t.value), r = ht(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function go(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Hs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var pr, Qs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (pr = pr || document.createElement("div"), pr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, _f = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function(e) {
  _f.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rn[t] = Rn[e];
  });
});
function Ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rn.hasOwnProperty(e) && Rn[e] ? ("" + t).trim() : t + "px";
}
function Ys(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ks(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var Pf = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wo(e, t) {
  if (t) {
    if (Pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(S(62));
  }
}
function So(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ko = null;
function hi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Eo = null, Jt = null, qt = null;
function pu(e) {
  if (e = or(e)) {
    if (typeof Eo != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = yl(t), Eo(e.stateNode, e.type, t));
  }
}
function Xs(e) {
  Jt ? qt ? qt.push(e) : qt = [e] : Jt = e;
}
function Gs() {
  if (Jt) {
    var e = Jt, t = qt;
    if (qt = Jt = null, pu(e), t)
      for (e = 0; e < t.length; e++)
        pu(t[e]);
  }
}
function Zs(e, t) {
  return e(t);
}
function Js() {
}
var Fl = !1;
function qs(e, t, n) {
  if (Fl)
    return e(t, n);
  Fl = !0;
  try {
    return Zs(e, t, n);
  } finally {
    Fl = !1, (Jt !== null || qt !== null) && (Js(), Gs());
  }
}
function $n(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = yl(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(S(231, t, typeof n));
  return n;
}
var xo = !1;
if (Ke)
  try {
    var yn = {};
    Object.defineProperty(yn, "passive", { get: function() {
      xo = !0;
    } }), window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
  } catch {
    xo = !1;
  }
function Nf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var zn = !1, Ar = null, Vr = !1, Co = null, Rf = { onError: function(e) {
  zn = !0, Ar = e;
} };
function zf(e, t, n, r, l, o, i, u, s) {
  zn = !1, Ar = null, Nf.apply(Rf, arguments);
}
function Lf(e, t, n, r, l, o, i, u, s) {
  if (zf.apply(this, arguments), zn) {
    if (zn) {
      var a = Ar;
      zn = !1, Ar = null;
    } else
      throw Error(S(198));
    Vr || (Vr = !0, Co = a);
  }
}
function It(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function bs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function hu(e) {
  if (It(e) !== e)
    throw Error(S(188));
}
function Tf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = It(e), t === null)
      throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return hu(l), e;
        if (o === r)
          return hu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(S(189));
      }
    }
    if (n.alternate !== r)
      throw Error(S(190));
  }
  if (n.tag !== 3)
    throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function ea(e) {
  return e = Tf(e), e !== null ? ta(e) : null;
}
function ta(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = ta(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var na = we.unstable_scheduleCallback, mu = we.unstable_cancelCallback, Of = we.unstable_shouldYield, jf = we.unstable_requestPaint, K = we.unstable_now, If = we.unstable_getCurrentPriorityLevel, mi = we.unstable_ImmediatePriority, ra = we.unstable_UserBlockingPriority, Wr = we.unstable_NormalPriority, Mf = we.unstable_LowPriority, la = we.unstable_IdlePriority, pl = null, $e = null;
function Df(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var je = Math.clz32 ? Math.clz32 : $f, Ff = Math.log, Uf = Math.LN2;
function $f(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ff(e) / Uf | 0) | 0;
}
var hr = 64, mr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Pn(u) : (o &= i, o !== 0 && (r = Pn(o)));
  } else
    i = n & ~l, i !== 0 ? r = Pn(i) : o !== 0 && (r = Pn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - je(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Bf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Af(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - je(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Bf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function _o(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function oa() {
  var e = hr;
  return hr <<= 1, !(hr & 4194240) && (hr = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function rr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - je(t), e[t] = n;
}
function Vf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function vi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var M = 0;
function ia(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ua, yi, sa, aa, ca, Po = !1, vr = [], ot = null, it = null, ut = null, Bn = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), et = [], Wf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = or(t), t !== null && yi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Hf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ot = gn(ot, e, t, n, r, l), !0;
    case "dragenter":
      return it = gn(it, e, t, n, r, l), !0;
    case "mouseover":
      return ut = gn(ut, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Bn.set(o, gn(Bn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, An.set(o, gn(An.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function fa(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = bs(n), t !== null) {
          e.blockedOn = t, ca(e.priority, function() {
            sa(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ko = r, n.target.dispatchEvent(r), ko = null;
    } else
      return t = or(n), t !== null && yi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function yu(e, t, n) {
  zr(e) && n.delete(t);
}
function Qf() {
  Po = !1, ot !== null && zr(ot) && (ot = null), it !== null && zr(it) && (it = null), ut !== null && zr(ut) && (ut = null), Bn.forEach(yu), An.forEach(yu);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Po || (Po = !0, we.unstable_scheduleCallback(we.unstable_NormalPriority, Qf)));
}
function Vn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < vr.length) {
    wn(vr[0], e);
    for (var n = 1; n < vr.length; n++) {
      var r = vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ot !== null && wn(ot, e), it !== null && wn(it, e), ut !== null && wn(ut, e), Bn.forEach(t), An.forEach(t), n = 0; n < et.length; n++)
    r = et[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && (n = et[0], n.blockedOn === null); )
    fa(n), n.blockedOn === null && et.shift();
}
var bt = Ze.ReactCurrentBatchConfig, Qr = !0;
function Kf(e, t, n, r) {
  var l = M, o = bt.transition;
  bt.transition = null;
  try {
    M = 1, gi(e, t, n, r);
  } finally {
    M = l, bt.transition = o;
  }
}
function Yf(e, t, n, r) {
  var l = M, o = bt.transition;
  bt.transition = null;
  try {
    M = 4, gi(e, t, n, r);
  } finally {
    M = l, bt.transition = o;
  }
}
function gi(e, t, n, r) {
  if (Qr) {
    var l = No(e, t, n, r);
    if (l === null)
      Xl(e, t, r, Kr, n), vu(e, r);
    else if (Hf(l, e, t, n, r))
      r.stopPropagation();
    else if (vu(e, r), t & 4 && -1 < Wf.indexOf(e)) {
      for (; l !== null; ) {
        var o = or(l);
        if (o !== null && ua(o), o = No(e, t, n, r), o === null && Xl(e, t, r, Kr, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Xl(e, t, r, null, n);
  }
}
var Kr = null;
function No(e, t, n, r) {
  if (Kr = null, e = hi(r), e = xt(e), e !== null)
    if (t = It(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = bs(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Kr = e, null;
}
function da(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (If()) {
        case mi:
          return 1;
        case ra:
          return 4;
        case Wr:
        case Mf:
          return 16;
        case la:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null, wi = null, Lr = null;
function pa() {
  if (Lr)
    return Lr;
  var e, t = wi, n = t.length, r, l = "value" in nt ? nt.value : nt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return Lr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Tr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function yr() {
  return !0;
}
function gu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? yr : gu, this.isPropagationStopped = gu, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yr);
  }, persist: function() {
  }, isPersistent: yr }), t;
}
var fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Si = ke(fn), lr = V({}, fn, { view: 0, detail: 0 }), Xf = ke(lr), $l, Bl, Sn, hl = V({}, lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ki, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sn && (Sn && e.type === "mousemove" ? ($l = e.screenX - Sn.screenX, Bl = e.screenY - Sn.screenY) : Bl = $l = 0, Sn = e), $l);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bl;
} }), wu = ke(hl), Gf = V({}, hl, { dataTransfer: 0 }), Zf = ke(Gf), Jf = V({}, lr, { relatedTarget: 0 }), Al = ke(Jf), qf = V({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bf = ke(qf), ed = V({}, fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), td = ke(ed), nd = V({}, fn, { data: 0 }), Su = ke(nd), rd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, ld = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function id(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = od[e]) ? !!t[e] : !1;
}
function ki() {
  return id;
}
var ud = V({}, lr, { key: function(e) {
  if (e.key) {
    var t = rd[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ld[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ki, charCode: function(e) {
  return e.type === "keypress" ? Tr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), sd = ke(ud), ad = V({}, hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ku = ke(ad), cd = V({}, lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ki }), fd = ke(cd), dd = V({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pd = ke(dd), hd = V({}, hl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), md = ke(hd), vd = [9, 13, 27, 32], Ei = Ke && "CompositionEvent" in window, Ln = null;
Ke && "documentMode" in document && (Ln = document.documentMode);
var yd = Ke && "TextEvent" in window && !Ln, ha = Ke && (!Ei || Ln && 8 < Ln && 11 >= Ln), Eu = " ", xu = !1;
function ma(e, t) {
  switch (e) {
    case "keyup":
      return vd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function va(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Bt = !1;
function gd(e, t) {
  switch (e) {
    case "compositionend":
      return va(t);
    case "keypress":
      return t.which !== 32 ? null : (xu = !0, Eu);
    case "textInput":
      return e = t.data, e === Eu && xu ? null : e;
    default:
      return null;
  }
}
function wd(e, t) {
  if (Bt)
    return e === "compositionend" || !Ei && ma(e, t) ? (e = pa(), Lr = wi = nt = null, Bt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ha && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sd[e.type] : t === "textarea";
}
function ya(e, t, n, r) {
  Xs(r), t = Yr(t, "onChange"), 0 < t.length && (n = new Si("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tn = null, Wn = null;
function kd(e) {
  Ra(e, 0);
}
function ml(e) {
  var t = Wt(e);
  if (As(t))
    return e;
}
function Ed(e, t) {
  if (e === "change")
    return t;
}
var ga = !1;
if (Ke) {
  var Vl;
  if (Ke) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var _u = document.createElement("div");
      _u.setAttribute("oninput", "return;"), Wl = typeof _u.oninput == "function";
    }
    Vl = Wl;
  } else
    Vl = !1;
  ga = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Pu() {
  Tn && (Tn.detachEvent("onpropertychange", wa), Wn = Tn = null);
}
function wa(e) {
  if (e.propertyName === "value" && ml(Wn)) {
    var t = [];
    ya(t, Wn, e, hi(e)), qs(kd, t);
  }
}
function xd(e, t, n) {
  e === "focusin" ? (Pu(), Tn = t, Wn = n, Tn.attachEvent("onpropertychange", wa)) : e === "focusout" && Pu();
}
function Cd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ml(Wn);
}
function _d(e, t) {
  if (e === "click")
    return ml(t);
}
function Pd(e, t) {
  if (e === "input" || e === "change")
    return ml(t);
}
function Nd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Me = typeof Object.is == "function" ? Object.is : Nd;
function Hn(e, t) {
  if (Me(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!so.call(t, l) || !Me(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Ru(e, t) {
  var n = Nu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Nu(n);
  }
}
function Sa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ka() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Br(e.document);
  }
  return t;
}
function xi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Rd(e) {
  var t = ka(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Sa(n.ownerDocument.documentElement, n)) {
    if (r !== null && xi(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ru(n, o);
        var i = Ru(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var zd = Ke && "documentMode" in document && 11 >= document.documentMode, At = null, Ro = null, On = null, zo = !1;
function zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zo || At == null || At !== Br(r) || (r = At, "selectionStart" in r && xi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), On && Hn(On, r) || (On = r, r = Yr(Ro, "onSelect"), 0 < r.length && (t = new Si("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = At)));
}
function gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: gr("Animation", "AnimationEnd"), animationiteration: gr("Animation", "AnimationIteration"), animationstart: gr("Animation", "AnimationStart"), transitionend: gr("Transition", "TransitionEnd") }, Hl = {}, Ea = {};
Ke && (Ea = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function vl(e) {
  if (Hl[e])
    return Hl[e];
  if (!Vt[e])
    return e;
  var t = Vt[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Ea)
      return Hl[e] = t[n];
  return e;
}
var xa = vl("animationend"), Ca = vl("animationiteration"), _a = vl("animationstart"), Pa = vl("transitionend"), Na = /* @__PURE__ */ new Map(), Lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function vt(e, t) {
  Na.set(e, t), jt(t, [e]);
}
for (var Ql = 0; Ql < Lu.length; Ql++) {
  var Kl = Lu[Ql], Ld = Kl.toLowerCase(), Td = Kl[0].toUpperCase() + Kl.slice(1);
  vt(Ld, "on" + Td);
}
vt(xa, "onAnimationEnd");
vt(Ca, "onAnimationIteration");
vt(_a, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(Pa, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Od = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function Tu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Lf(r, t, void 0, e), e.currentTarget = null;
}
function Ra(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Tu(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Tu(l, u, a), o = s;
        }
    }
  }
  if (Vr)
    throw e = Co, Vr = !1, Co = null, e;
}
function F(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (za(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), za(n, e, r, t);
}
var wr = "_reactListening" + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[wr]) {
    e[wr] = !0, Ds.forEach(function(n) {
      n !== "selectionchange" && (Od.has(n) || Yl(n, !1, e), Yl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wr] || (t[wr] = !0, Yl("selectionchange", !1, t));
  }
}
function za(e, t, n, r) {
  switch (da(t)) {
    case 1:
      var l = Kf;
      break;
    case 4:
      l = Yf;
      break;
    default:
      l = gi;
  }
  n = l.bind(null, t, n, e), l = void 0, !xo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = xt(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  qs(function() {
    var a = o, h = hi(n), p = [];
    e: {
      var m = Na.get(e);
      if (m !== void 0) {
        var y = Si, g = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = sd;
            break;
          case "focusin":
            g = "focus", y = Al;
            break;
          case "focusout":
            g = "blur", y = Al;
            break;
          case "beforeblur":
          case "afterblur":
            y = Al;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = wu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Zf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = fd;
            break;
          case xa:
          case Ca:
          case _a:
            y = bf;
            break;
          case Pa:
            y = pd;
            break;
          case "scroll":
            y = Xf;
            break;
          case "wheel":
            y = md;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = td;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ku;
        }
        var w = (t & 4) !== 0, E = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = $n(c, f), v != null && w.push(Kn(c, v, d)))), E)
            break;
          c = c.return;
        }
        0 < w.length && (m = new y(m, g, null, n, h), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== ko && (g = n.relatedTarget || n.fromElement) && (xt(g) || g[Ye]))
          break e;
        if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = a, g = g ? xt(g) : null, g !== null && (E = It(g), g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = a), y !== g)) {
          if (w = wu, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = ku, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), E = y == null ? m : Wt(y), d = g == null ? m : Wt(g), m = new w(v, c + "leave", y, n, h), m.target = E, m.relatedTarget = d, v = null, xt(h) === a && (w = new w(f, c + "enter", g, n, h), w.target = d, w.relatedTarget = E, v = w), E = v, y && g)
            t: {
              for (w = y, f = g, c = 0, d = w; d; d = Ft(d))
                c++;
              for (d = 0, v = f; v; v = Ft(v))
                d++;
              for (; 0 < c - d; )
                w = Ft(w), c--;
              for (; 0 < d - c; )
                f = Ft(f), d--;
              for (; c--; ) {
                if (w === f || f !== null && w === f.alternate)
                  break t;
                w = Ft(w), f = Ft(f);
              }
              w = null;
            }
          else
            w = null;
          y !== null && Ou(p, m, y, w, !1), g !== null && E !== null && Ou(p, E, g, w, !0);
        }
      }
      e: {
        if (m = a ? Wt(a) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file")
          var k = Ed;
        else if (Cu(m))
          if (ga)
            k = Pd;
          else {
            k = Cd;
            var P = xd;
          }
        else
          (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = _d);
        if (k && (k = k(e, a))) {
          ya(p, k, n, h);
          break e;
        }
        P && P(e, m, a), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && vo(m, "number", m.value);
      }
      switch (P = a ? Wt(a) : window, e) {
        case "focusin":
          (Cu(P) || P.contentEditable === "true") && (At = P, Ro = a, On = null);
          break;
        case "focusout":
          On = Ro = At = null;
          break;
        case "mousedown":
          zo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zo = !1, zu(p, n, h);
          break;
        case "selectionchange":
          if (zd)
            break;
        case "keydown":
        case "keyup":
          zu(p, n, h);
      }
      var N;
      if (Ei)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Bt ? ma(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (ha && n.locale !== "ko" && (Bt || R !== "onCompositionStart" ? R === "onCompositionEnd" && Bt && (N = pa()) : (nt = h, wi = "value" in nt ? nt.value : nt.textContent, Bt = !0)), P = Yr(a, R), 0 < P.length && (R = new Su(R, e, null, n, h), p.push({ event: R, listeners: P }), N ? R.data = N : (N = va(n), N !== null && (R.data = N)))), (N = yd ? gd(e, n) : wd(e, n)) && (a = Yr(a, "onBeforeInput"), 0 < a.length && (h = new Su("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: a }), h.data = N));
    }
    Ra(p, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = $n(e, n), o != null && r.unshift(Kn(e, o, l)), o = $n(e, t), o != null && r.push(Kn(e, o, l))), e = e.return;
  }
  return r;
}
function Ft(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = $n(n, o), s != null && i.unshift(Kn(n, s, u))) : l || (s = $n(n, o), s != null && i.push(Kn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var jd = /\r\n?/g, Id = /\u0000|\uFFFD/g;
function ju(e) {
  return (typeof e == "string" ? e : "" + e).replace(jd, `
`).replace(Id, "");
}
function Sr(e, t, n) {
  if (t = ju(t), ju(e) !== t && n)
    throw Error(S(425));
}
function Xr() {
}
var Lo = null, To = null;
function Oo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var jo = typeof setTimeout == "function" ? setTimeout : void 0, Md = typeof clearTimeout == "function" ? clearTimeout : void 0, Iu = typeof Promise == "function" ? Promise : void 0, Dd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Iu < "u" ? function(e) {
  return Iu.resolve(null).then(e).catch(Fd);
} : jo;
function Fd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Vn(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function Mu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + dn, Yn = "__reactProps$" + dn, Ye = "__reactContainer$" + dn, Io = "__reactEvents$" + dn, Ud = "__reactListeners$" + dn, $d = "__reactHandles$" + dn;
function xt(e) {
  var t = e[Ue];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ye] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Mu(e); e !== null; ) {
          if (n = e[Ue])
            return n;
          e = Mu(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function or(e) {
  return e = e[Ue] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function yl(e) {
  return e[Yn] || null;
}
var Mo = [], Ht = -1;
function yt(e) {
  return { current: e };
}
function U(e) {
  0 > Ht || (e.current = Mo[Ht], Mo[Ht] = null, Ht--);
}
function D(e, t) {
  Ht++, Mo[Ht] = e.current, e.current = t;
}
var mt = {}, ie = yt(mt), pe = yt(!1), Rt = mt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Gr() {
  U(pe), U(ie);
}
function Du(e, t, n) {
  if (ie.current !== mt)
    throw Error(S(168));
  D(ie, t), D(pe, n);
}
function La(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(S(108, xf(e) || "Unknown", l));
  return V({}, n, r);
}
function Zr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, Rt = ie.current, D(ie, e), D(pe, pe.current), !0;
}
function Fu(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = La(e, t, Rt), r.__reactInternalMemoizedMergedChildContext = e, U(pe), U(ie), D(ie, e)) : U(pe), D(pe, n);
}
var Ve = null, gl = !1, Zl = !1;
function Ta(e) {
  Ve === null ? Ve = [e] : Ve.push(e);
}
function Bd(e) {
  gl = !0, Ta(e);
}
function gt() {
  if (!Zl && Ve !== null) {
    Zl = !0;
    var e = 0, t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ve = null, gl = !1;
    } catch (l) {
      throw Ve !== null && (Ve = Ve.slice(e + 1)), na(mi, gt), l;
    } finally {
      M = t, Zl = !1;
    }
  }
  return null;
}
var Qt = [], Kt = 0, Jr = null, qr = 0, Ee = [], xe = 0, zt = null, We = 1, He = "";
function kt(e, t) {
  Qt[Kt++] = qr, Qt[Kt++] = Jr, Jr = e, qr = t;
}
function Oa(e, t, n) {
  Ee[xe++] = We, Ee[xe++] = He, Ee[xe++] = zt, zt = e;
  var r = We;
  e = He;
  var l = 32 - je(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - je(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, We = 1 << 32 - je(t) + l | n << l | r, He = o + e;
  } else
    We = 1 << o | n << l | r, He = e;
}
function Ci(e) {
  e.return !== null && (kt(e, 1), Oa(e, 1, 0));
}
function _i(e) {
  for (; e === Jr; )
    Jr = Qt[--Kt], Qt[Kt] = null, qr = Qt[--Kt], Qt[Kt] = null;
  for (; e === zt; )
    zt = Ee[--xe], Ee[xe] = null, He = Ee[--xe], Ee[xe] = null, We = Ee[--xe], Ee[xe] = null;
}
var ge = null, ye = null, $ = !1, Oe = null;
function ja(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Uu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: We, overflow: He } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ge = e, ye = null, !0) : !1;
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fo(e) {
  if ($) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Uu(e, t)) {
        if (Do(e))
          throw Error(S(418));
        t = st(n.nextSibling);
        var r = ge;
        t && Uu(e, t) ? ja(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, ge = e);
      }
    } else {
      if (Do(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, $ = !1, ge = e;
    }
  }
}
function $u(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function kr(e) {
  if (e !== ge)
    return !1;
  if (!$)
    return $u(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps)), t && (t = ye)) {
    if (Do(e))
      throw Ia(), Error(S(418));
    for (; t; )
      ja(e, t), t = st(t.nextSibling);
  }
  if ($u(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else
    ye = ge ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Ia() {
  for (var e = ye; e; )
    e = st(e.nextSibling);
}
function ln() {
  ye = ge = null, $ = !1;
}
function Pi(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var Ad = Ze.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var br = yt(null), el = null, Yt = null, Ni = null;
function Ri() {
  Ni = Yt = el = null;
}
function zi(e) {
  var t = br.current;
  U(br), e._currentValue = t;
}
function Uo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function en(e, t) {
  el = e, Ni = Yt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null);
}
function Pe(e) {
  var t = e._currentValue;
  if (Ni !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Yt === null) {
      if (el === null)
        throw Error(S(308));
      Yt = e, el.dependencies = { lanes: 0, firstContext: e };
    } else
      Yt = Yt.next = e;
  return t;
}
var Ct = null;
function Li(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function Ma(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Li(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r);
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function Ti(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Da(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Li(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n);
}
function Or(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
function Bu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function tl(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var p = l.baseState;
    i = 0, h = a = s = null, u = o;
    do {
      var m = u.lane, y = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, w = u;
          switch (m = t, y = n, w.tag) {
            case 1:
              if (g = w.payload, typeof g == "function") {
                p = g.call(y, p, m);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = w.payload, m = typeof g == "function" ? g.call(y, p, m) : g, m == null)
                break e;
              p = V({}, p, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else
        y = { eventTime: y, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = y, s = p) : h = h.next = y, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = p), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    Tt |= i, e.lanes = i, e.memoizedState = p;
  }
}
function Au(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var Fa = new Ms.Component().refs;
function $o(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var wl = { isMounted: function(e) {
  return (e = e._reactInternals) ? It(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = ft(e), o = Qe(r, l);
  o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Ie(t, e, l, r), Or(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = se(), l = ft(e), o = Qe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Ie(t, e, l, r), Or(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = se(), r = ft(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Ie(t, e, r, n), Or(t, e, r));
} };
function Vu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(l, o) : !0;
}
function Ua(e, t, n) {
  var r = !1, l = mt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Pe(o) : (l = he(t) ? Rt : ie.current, r = t.contextTypes, o = (r = r != null) ? rn(e, l) : mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Wu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wl.enqueueReplaceState(t, t.state, null);
}
function Bo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Fa, Ti(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Pe(o) : (o = he(t) ? Rt : ie.current, l.context = rn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && ($o(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && wl.enqueueReplaceState(l, l.state, null), tl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function kn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === Fa && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(S(284));
    if (!n._owner)
      throw Error(S(290, e));
  }
  return e;
}
function Er(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Hu(e) {
  var t = e._init;
  return t(e._payload);
}
function $a(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = dt(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6 ? (c = ro(d, f.mode, v), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function s(f, c, d, v) {
    var k = d.type;
    return k === $t ? h(f, c, d.props.children, v, d.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qe && Hu(k) === c.type) ? (v = l(c, d.props), v.ref = kn(f, c, d), v.return = f, v) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = kn(f, c, d), v.return = f, v);
  }
  function a(f, c, d, v) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = lo(d, f.mode, v), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, v, k) {
    return c === null || c.tag !== 7 ? (c = Nt(d, f.mode, v, k), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function p(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ro("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case fr:
          return d = Ur(c.type, c.key, c.props, null, f.mode, d), d.ref = kn(f, null, c), d.return = f, d;
        case Ut:
          return c = lo(c, f.mode, d), c.return = f, c;
        case qe:
          var v = c._init;
          return p(f, v(c._payload), d);
      }
      if (_n(c) || vn(c))
        return c = Nt(c, f.mode, d, null), c.return = f, c;
      Er(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var k = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return k !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fr:
          return d.key === k ? s(f, c, d, v) : null;
        case Ut:
          return d.key === k ? a(f, c, d, v) : null;
        case qe:
          return k = d._init, m(
            f,
            c,
            k(d._payload),
            v
          );
      }
      if (_n(d) || vn(d))
        return k !== null ? null : h(f, c, d, v, null);
      Er(f, d);
    }
    return null;
  }
  function y(f, c, d, v, k) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, u(c, f, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fr:
          return f = f.get(v.key === null ? d : v.key) || null, s(c, f, v, k);
        case Ut:
          return f = f.get(v.key === null ? d : v.key) || null, a(c, f, v, k);
        case qe:
          var P = v._init;
          return y(f, c, d, P(v._payload), k);
      }
      if (_n(v) || vn(v))
        return f = f.get(d) || null, h(c, f, v, k, null);
      Er(c, v);
    }
    return null;
  }
  function g(f, c, d, v) {
    for (var k = null, P = null, N = c, R = c = 0, H = null; N !== null && R < d.length; R++) {
      N.index > R ? (H = N, N = null) : H = N.sibling;
      var O = m(f, N, d[R], v);
      if (O === null) {
        N === null && (N = H);
        break;
      }
      e && N && O.alternate === null && t(f, N), c = o(O, c, R), P === null ? k = O : P.sibling = O, P = O, N = H;
    }
    if (R === d.length)
      return n(f, N), $ && kt(f, R), k;
    if (N === null) {
      for (; R < d.length; R++)
        N = p(f, d[R], v), N !== null && (c = o(N, c, R), P === null ? k = N : P.sibling = N, P = N);
      return $ && kt(f, R), k;
    }
    for (N = r(f, N); R < d.length; R++)
      H = y(N, f, R, d[R], v), H !== null && (e && H.alternate !== null && N.delete(H.key === null ? R : H.key), c = o(H, c, R), P === null ? k = H : P.sibling = H, P = H);
    return e && N.forEach(function(Re) {
      return t(f, Re);
    }), $ && kt(f, R), k;
  }
  function w(f, c, d, v) {
    var k = vn(d);
    if (typeof k != "function")
      throw Error(S(150));
    if (d = k.call(d), d == null)
      throw Error(S(151));
    for (var P = k = null, N = c, R = c = 0, H = null, O = d.next(); N !== null && !O.done; R++, O = d.next()) {
      N.index > R ? (H = N, N = null) : H = N.sibling;
      var Re = m(f, N, O.value, v);
      if (Re === null) {
        N === null && (N = H);
        break;
      }
      e && N && Re.alternate === null && t(f, N), c = o(Re, c, R), P === null ? k = Re : P.sibling = Re, P = Re, N = H;
    }
    if (O.done)
      return n(
        f,
        N
      ), $ && kt(f, R), k;
    if (N === null) {
      for (; !O.done; R++, O = d.next())
        O = p(f, O.value, v), O !== null && (c = o(O, c, R), P === null ? k = O : P.sibling = O, P = O);
      return $ && kt(f, R), k;
    }
    for (N = r(f, N); !O.done; R++, O = d.next())
      O = y(N, f, R, O.value, v), O !== null && (e && O.alternate !== null && N.delete(O.key === null ? R : O.key), c = o(O, c, R), P === null ? k = O : P.sibling = O, P = O);
    return e && N.forEach(function(hn) {
      return t(f, hn);
    }), $ && kt(f, R), k;
  }
  function E(f, c, d, v) {
    if (typeof d == "object" && d !== null && d.type === $t && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fr:
          e: {
            for (var k = d.key, P = c; P !== null; ) {
              if (P.key === k) {
                if (k = d.type, k === $t) {
                  if (P.tag === 7) {
                    n(f, P.sibling), c = l(P, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === qe && Hu(k) === P.type) {
                  n(f, P.sibling), c = l(P, d.props), c.ref = kn(f, P, d), c.return = f, f = c;
                  break e;
                }
                n(f, P);
                break;
              } else
                t(f, P);
              P = P.sibling;
            }
            d.type === $t ? (c = Nt(d.props.children, f.mode, v, d.key), c.return = f, f = c) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = kn(f, c, d), v.return = f, f = v);
          }
          return i(f);
        case Ut:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                  n(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = lo(d, f.mode, v), c.return = f, f = c;
          }
          return i(f);
        case qe:
          return P = d._init, E(f, c, P(d._payload), v);
      }
      if (_n(d))
        return g(f, c, d, v);
      if (vn(d))
        return w(f, c, d, v);
      Er(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = ro(d, f.mode, v), c.return = f, f = c), i(f)) : n(f, c);
  }
  return E;
}
var on = $a(!0), Ba = $a(!1), ir = {}, Be = yt(ir), Xn = yt(ir), Gn = yt(ir);
function _t(e) {
  if (e === ir)
    throw Error(S(174));
  return e;
}
function Oi(e, t) {
  switch (D(Gn, t), D(Xn, e), D(Be, ir), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : go(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = go(t, e);
  }
  U(Be), D(Be, t);
}
function un() {
  U(Be), U(Xn), U(Gn);
}
function Aa(e) {
  _t(Gn.current);
  var t = _t(Be.current), n = go(t, e.type);
  t !== n && (D(Xn, e), D(Be, n));
}
function ji(e) {
  Xn.current === e && (U(Be), U(Xn));
}
var B = yt(0);
function nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Jl = [];
function Ii() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var jr = Ze.ReactCurrentDispatcher, ql = Ze.ReactCurrentBatchConfig, Lt = 0, A = null, G = null, q = null, rl = !1, jn = !1, Zn = 0, Vd = 0;
function re() {
  throw Error(S(321));
}
function Mi(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n]))
      return !1;
  return !0;
}
function Di(e, t, n, r, l, o) {
  if (Lt = o, A = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, jr.current = e === null || e.memoizedState === null ? Kd : Yd, e = n(r, l), jn) {
    o = 0;
    do {
      if (jn = !1, Zn = 0, 25 <= o)
        throw Error(S(301));
      o += 1, q = G = null, t.updateQueue = null, jr.current = Xd, e = n(r, l);
    } while (jn);
  }
  if (jr.current = ll, t = G !== null && G.next !== null, Lt = 0, q = G = A = null, rl = !1, t)
    throw Error(S(300));
  return e;
}
function Fi() {
  var e = Zn !== 0;
  return Zn = 0, e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? A.memoizedState = q = e : q = q.next = e, q;
}
function Ne() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = G.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null)
    q = t, G = e;
  else {
    if (e === null)
      throw Error(S(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, q === null ? A.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Ne(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, a = o;
    do {
      var h = a.lane;
      if ((Lt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = p, i = r) : s = s.next = p, A.lanes |= h, Tt |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, Me(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, A.lanes |= o, Tt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = Ne(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Me(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Va() {
}
function Wa(e, t) {
  var n = A, r = Ne(), l = t(), o = !Me(r.memoizedState, l);
  if (o && (r.memoizedState = l, de = !0), r = r.queue, Ui(Ka.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, qn(9, Qa.bind(null, n, r, l, t), void 0, null), b === null)
      throw Error(S(349));
    Lt & 30 || Ha(n, t, l);
  }
  return l;
}
function Ha(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = A.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, A.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Qa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ya(t) && Xa(e);
}
function Ka(e, t, n) {
  return n(function() {
    Ya(t) && Xa(e);
  });
}
function Ya(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Xa(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Qu(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Qd.bind(null, A, e), [t.memoizedState, e];
}
function qn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = A.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, A.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ga() {
  return Ne().memoizedState;
}
function Ir(e, t, n, r) {
  var l = Fe();
  A.flags |= e, l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r);
}
function Sl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (o = i.destroy, r !== null && Mi(r, i.deps)) {
      l.memoizedState = qn(t, n, o, r);
      return;
    }
  }
  A.flags |= e, l.memoizedState = qn(1 | t, n, o, r);
}
function Ku(e, t) {
  return Ir(8390656, 8, e, t);
}
function Ui(e, t) {
  return Sl(2048, 8, e, t);
}
function Za(e, t) {
  return Sl(4, 2, e, t);
}
function Ja(e, t) {
  return Sl(4, 4, e, t);
}
function qa(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function ba(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Sl(4, 4, qa.bind(null, t, e), n);
}
function $i() {
}
function ec(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function tc(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function nc(e, t, n) {
  return Lt & 21 ? (Me(n, t) || (n = oa(), A.lanes |= n, Tt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n);
}
function Wd(e, t) {
  var n = M;
  M = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    M = n, ql.transition = r;
  }
}
function rc() {
  return Ne().memoizedState;
}
function Hd(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, lc(e))
    oc(t, n);
  else if (n = Ma(e, t, n, r), n !== null) {
    var l = se();
    Ie(n, e, r, l), ic(n, t, r);
  }
}
function Qd(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lc(e))
    oc(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, Me(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Li(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Ma(e, t, l, r), n !== null && (l = se(), Ie(n, e, r, l), ic(n, t, r));
  }
}
function lc(e) {
  var t = e.alternate;
  return e === A || t !== null && t === A;
}
function oc(e, t) {
  jn = rl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ic(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vi(e, n);
  }
}
var ll = { readContext: Pe, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, Kd = { readContext: Pe, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pe, useEffect: Ku, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ir(
    4194308,
    4,
    qa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ir(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ir(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hd.bind(null, A, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Qu, useDebugValue: $i, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = Qu(!1), t = e[0];
  return e = Wd.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = A, l = Fe();
  if ($) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), b === null)
      throw Error(S(349));
    Lt & 30 || Ha(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ku(Ka.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, qn(9, Qa.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = b.identifierPrefix;
  if ($) {
    var n = He, r = We;
    n = (r & ~(1 << 32 - je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Vd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Yd = {
  readContext: Pe,
  useCallback: ec,
  useContext: Pe,
  useEffect: Ui,
  useImperativeHandle: ba,
  useInsertionEffect: Za,
  useLayoutEffect: Ja,
  useMemo: tc,
  useReducer: bl,
  useRef: Ga,
  useState: function() {
    return bl(Jn);
  },
  useDebugValue: $i,
  useDeferredValue: function(e) {
    var t = Ne();
    return nc(t, G.memoizedState, e);
  },
  useTransition: function() {
    var e = bl(Jn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: Va,
  useSyncExternalStore: Wa,
  useId: rc,
  unstable_isNewReconciler: !1
}, Xd = { readContext: Pe, useCallback: ec, useContext: Pe, useEffect: Ui, useImperativeHandle: ba, useInsertionEffect: Za, useLayoutEffect: Ja, useMemo: tc, useReducer: eo, useRef: Ga, useState: function() {
  return eo(Jn);
}, useDebugValue: $i, useDeferredValue: function(e) {
  var t = Ne();
  return G === null ? t.memoizedState = e : nc(t, G.memoizedState, e);
}, useTransition: function() {
  var e = eo(Jn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: Va, useSyncExternalStore: Wa, useId: rc, unstable_isNewReconciler: !1 };
function sn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ef(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Gd = typeof WeakMap == "function" ? WeakMap : Map;
function uc(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    il || (il = !0, Jo = r), Ao(e, t);
  }, n;
}
function sc(e, t, n) {
  n = Qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ao(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ao(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Yu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = ap.bind(null, e, t, n), t.then(e, e));
}
function Xu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var Zd = Ze.ReactCurrentOwner, de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ba(t, null, n, r) : on(t, e.child, n, r);
}
function Zu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return en(t, l), r = Di(e, t, n, r, o, l), n = Fi(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : ($ && n && Ci(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Ju(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Yi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ac(e, t, o, r, l)) : (e = Ur(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Hn, n(i, r) && e.ref === t.ref)
      return Ge(e, t, l);
  }
  return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ac(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Hn(o, r) && e.ref === t.ref)
      if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (de = !0);
      else
        return t.lanes = e.lanes, Ge(e, t, l);
  }
  return Vo(e, t, n, r, l);
}
function cc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(Gt, ve), ve |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(Gt, ve), ve |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, D(Gt, ve), ve |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, D(Gt, ve), ve |= r;
  return ue(e, t, l, n), t.child;
}
function fc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Vo(e, t, n, r, l) {
  var o = he(n) ? Rt : ie.current;
  return o = rn(t, o), en(t, l), n = Di(e, t, n, r, o, l), r = Fi(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : ($ && r && Ci(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function qu(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    Zr(t);
  } else
    o = !1;
  if (en(t, l), t.stateNode === null)
    Mr(e, t), Ua(t, n, r), Bo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Pe(a) : (a = he(n) ? Rt : ie.current, a = rn(t, a));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Wu(t, i, r, a), be = !1;
    var m = t.memoizedState;
    i.state = m, tl(t, r, i, l), s = t.memoizedState, u !== r || m !== s || pe.current || be ? (typeof h == "function" && ($o(t, n, h, r), s = t.memoizedState), (u = be || Vu(t, n, u, r, m, s, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Da(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Le(t.type, u), i.props = a, p = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Pe(s) : (s = he(n) ? Rt : ie.current, s = rn(t, s));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || m !== s) && Wu(t, i, r, s), be = !1, m = t.memoizedState, i.state = m, tl(t, r, i, l);
    var g = t.memoizedState;
    u !== p || m !== g || pe.current || be ? (typeof y == "function" && ($o(t, n, y, r), g = t.memoizedState), (a = be || Vu(t, n, a, r, m, g, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Wo(e, t, n, r, o, l);
}
function Wo(e, t, n, r, l, o) {
  fc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Fu(t, n, !1), Ge(e, t, o);
  r = t.stateNode, Zd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = on(t, e.child, null, o), t.child = on(t, null, u, o)) : ue(e, t, u, o), t.memoizedState = r.state, l && Fu(t, n, !0), t.child;
}
function dc(e) {
  var t = e.stateNode;
  t.pendingContext ? Du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Du(e, t.context, !1), Oi(e, t.containerInfo);
}
function bu(e, t, n, r, l) {
  return ln(), Pi(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var Ho = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pc(e, t, n) {
  var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(B, l & 1), e === null)
    return Fo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = xl(i, r, 0, null), e = Nt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Qo(n), t.memoizedState = Ho, e) : Bi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Jd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = dt(u, o) : (o = Nt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Qo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ho, r;
  }
  return o = e.child, e = o.sibling, r = dt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Bi(e, t) {
  return t = xl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function xr(e, t, n, r) {
  return r !== null && Pi(r), on(t, e.child, null, n), e = Bi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Jd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = to(Error(S(422))), xr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = xl({ mode: "visible", children: r.children }, l, 0, null), o = Nt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && on(t, e.child, null, i), t.child.memoizedState = Qo(i), t.memoizedState = Ho, o);
  if (!(t.mode & 1))
    return xr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(S(419)), r = to(o, r, void 0), xr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, de || u) {
    if (r = b, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Xe(e, l), Ie(r, e, l, -1));
    }
    return Ki(), r = to(Error(S(421))), xr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ye = st(l.nextSibling), ge = t, $ = !0, Oe = null, e !== null && (Ee[xe++] = We, Ee[xe++] = He, Ee[xe++] = zt, We = e.id, He = e.overflow, zt = t), t = Bi(t, r.children), t.flags |= 4096, t);
}
function es(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Uo(e.return, t, n);
}
function no(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function hc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ue(e, t, r.children, n), r = B.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && es(e, n, t);
          else if (e.tag === 19)
            es(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (D(B, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), no(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        no(t, !0, n, null, o);
        break;
      case "together":
        no(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Mr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ge(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Tt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function qd(e, t, n) {
  switch (t.tag) {
    case 3:
      dc(t), ln();
      break;
    case 5:
      Aa(t);
      break;
    case 1:
      he(t.type) && Zr(t);
      break;
    case 4:
      Oi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      D(br, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (D(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? pc(e, t, n) : (D(B, B.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return hc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(B, B.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, cc(e, t, n);
  }
  return Ge(e, t, n);
}
var mc, Ko, vc, yc;
mc = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Ko = function() {
};
vc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, _t(Be.current);
    var o = null;
    switch (n) {
      case "input":
        l = ho(e, l), r = ho(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = yo(e, l), r = yo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Xr);
    }
    wo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Fn.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Fn.hasOwnProperty(a) ? (s != null && a === "onScroll" && F("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
yc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function bd(e, t, n) {
  var r = t.pendingProps;
  switch (_i(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Gr(), le(t), null;
    case 3:
      return r = t.stateNode, un(), U(pe), U(ie), Ii(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (ei(Oe), Oe = null))), Ko(e, t), le(t), null;
    case 5:
      ji(t);
      var l = _t(Gn.current);
      if (n = t.type, e !== null && t.stateNode != null)
        vc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return le(t), null;
        }
        if (e = _t(Be.current), kr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ue] = t, r[Yn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++)
                F(Nn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F(
                "error",
                r
              ), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              au(r, o), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, F("invalid", r);
              break;
            case "textarea":
              fu(r, o), F("invalid", r);
          }
          wo(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Sr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Sr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Fn.hasOwnProperty(i) && u != null && i === "onScroll" && F("scroll", r);
            }
          switch (n) {
            case "input":
              dr(r), cu(r, o, !0);
              break;
            case "textarea":
              dr(r), du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ue] = t, e[Yn] = r, mc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = So(n, r), n) {
              case "dialog":
                F("cancel", e), F("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++)
                  F(Nn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                F(
                  "error",
                  e
                ), F("load", e), l = r;
                break;
              case "details":
                F("toggle", e), l = r;
                break;
              case "input":
                au(e, r), l = ho(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                fu(e, r), l = yo(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            wo(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Ys(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Qs(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Un(e, s) : typeof s == "number" && Un(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fn.hasOwnProperty(o) ? s != null && o === "onScroll" && F("scroll", e) : s != null && ci(e, o, s, i));
              }
            switch (n) {
              case "input":
                dr(e), cu(e, r, !1);
                break;
              case "textarea":
                dr(e), du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Zt(e, !!r.multiple, o, !1) : r.defaultValue != null && Zt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Xr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null)
        yc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = _t(Gn.current), _t(Be.current), kr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (o = r.nodeValue !== n) && (e = ge, e !== null))
            switch (e.tag) {
              case 3:
                Sr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Sr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (U(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && ye !== null && t.mode & 1 && !(t.flags & 128))
          Ia(), ln(), t.flags |= 98560, o = !1;
        else if (o = kr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(S(317));
            o[Ue] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), o = !1;
        } else
          Oe !== null && (ei(Oe), Oe = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Ki())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return un(), Ko(e, t), e === null && Qn(t.stateNode.containerInfo), le(t), null;
    case 10:
      return zi(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Gr(), le(t), null;
    case 19:
      if (U(B), o = t.memoizedState, o === null)
        return le(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          En(o, !1);
        else {
          if (Z !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = nl(e), i !== null) {
                for (t.flags |= 128, En(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return D(B, B.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && K() > an && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = nl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), En(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
              return le(t), null;
          } else
            2 * K() - o.renderingStartTime > an && n !== 1073741824 && (t.flags |= 128, r = !0, En(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = B.current, D(B, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Qi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ep(e, t) {
  switch (_i(t), t.tag) {
    case 1:
      return he(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return un(), U(pe), U(ie), Ii(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ji(t), null;
    case 13:
      if (U(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        ln();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(B), null;
    case 4:
      return un(), null;
    case 10:
      return zi(t.type._context), null;
    case 22:
    case 23:
      return Qi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1, oe = !1, tp = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else
      n.current = null;
}
function Yo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var ts = !1;
function np(e, t) {
  if (Lo = Qr, e = ka(), xi(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, a = 0, h = 0, p = e, m = null;
          t:
            for (; ; ) {
              for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (u = i + l), p !== o || r !== 0 && p.nodeType !== 3 || (s = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (y = p.firstChild) !== null; )
                m = p, p = y;
              for (; ; ) {
                if (p === e)
                  break t;
                if (m === n && ++a === l && (u = i), m === o && ++h === r && (s = i), (y = p.nextSibling) !== null)
                  break;
                p = m, m = p.parentNode;
              }
              p = y;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (To = { focusedElem: e, selectionRange: n }, Qr = !1, x = t; x !== null; )
    if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, x = e;
    else
      for (; x !== null; ) {
        t = x;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps, E = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Le(t.type, w), E);
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (v) {
          W(t, t.return, v);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, x = e;
          break;
        }
        x = t.return;
      }
  return g = ts, ts = !1, g;
}
function In(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Yo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function gc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Yn], delete t[Io], delete t[Ud], delete t[$d])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function wc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ns(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || wc(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Xr));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; )
      Go(e, t, n), e = e.sibling;
}
function Zo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Zo(e, t, n), e = e.sibling; e !== null; )
      Zo(e, t, n), e = e.sibling;
}
var ee = null, Te = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; )
    Sc(e, t, n), n = n.sibling;
}
function Sc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(pl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      oe || Xt(n, t);
    case 6:
      var r = ee, l = Te;
      ee = null, Je(e, t, n), ee = r, Te = l, ee !== null && (Te ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Te ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Gl(e.parentNode, n) : e.nodeType === 1 && Gl(e, n), Vn(e)) : Gl(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Te, ee = n.stateNode.containerInfo, Te = !0, Je(e, t, n), ee = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Yo(n, t, i), l = l.next;
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (!oe && (Xt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, Je(e, t, n), oe = r) : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function rs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tp()), t.forEach(function(r) {
      var l = fp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ee = u.stateNode, Te = !1;
                break e;
              case 3:
                ee = u.stateNode.containerInfo, Te = !0;
                break e;
              case 4:
                ee = u.stateNode.containerInfo, Te = !0;
                break e;
            }
            u = u.return;
          }
        if (ee === null)
          throw Error(S(160));
        Sc(o, i, l), ee = null, Te = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      kc(t, e), t = t.sibling;
}
function kc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), De(e), r & 4) {
        try {
          In(3, e, e.return), kl(3, e);
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          In(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      ze(t, e), De(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (ze(t, e), De(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Vs(l, o), So(u, i);
            var a = So(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], p = s[i + 1];
              h === "style" ? Ys(l, p) : h === "dangerouslySetInnerHTML" ? Qs(l, p) : h === "children" ? Un(l, p) : ci(l, h, p, a);
            }
            switch (u) {
              case "input":
                mo(l, o);
                break;
              case "textarea":
                Ws(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? Zt(l, !!o.multiple, y, !1) : m !== !!o.multiple && (o.defaultValue != null ? Zt(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Zt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Yn] = o;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if (ze(t, e), De(e), r & 4) {
        if (e.stateNode === null)
          throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if (ze(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Vn(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      ze(t, e), De(e);
      break;
    case 13:
      ze(t, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Wi = K())), r & 4 && rs(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (a = oe) || h, ze(t, e), oe = a) : ze(t, e), De(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (x = e, h = e.child; h !== null; ) {
            for (p = x = h; x !== null; ) {
              switch (m = x, y = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  In(4, m, m.return);
                  break;
                case 1:
                  Xt(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Xt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    os(p);
                    continue;
                  }
              }
              y !== null ? (y.return = m, x = y) : os(p);
            }
            h = h.sibling;
          }
        e:
          for (h = null, p = e; ; ) {
            if (p.tag === 5) {
              if (h === null) {
                h = p;
                try {
                  l = p.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ks("display", i));
                } catch (w) {
                  W(e, e.return, w);
                }
              }
            } else if (p.tag === 6) {
              if (h === null)
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (w) {
                  W(e, e.return, w);
                }
            } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
            if (p === e)
              break e;
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e)
                break e;
              h === p && (h = null), p = p.return;
            }
            h === p && (h = null), p.sibling.return = p.return, p = p.sibling;
          }
      }
      break;
    case 19:
      ze(t, e), De(e), r & 4 && rs(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Un(l, ""), r.flags &= -33);
          var o = ns(e);
          Zo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ns(e);
          Go(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rp(e, t, n) {
  x = e, Ec(e);
}
function Ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || oe;
        u = Cr;
        var a = oe;
        if (Cr = i, (oe = s) && !a)
          for (x = l; x !== null; )
            i = x, s = i.child, i.tag === 22 && i.memoizedState !== null ? is(l) : s !== null ? (s.return = i, x = s) : is(l);
        for (; o !== null; )
          x = o, Ec(o), o = o.sibling;
        x = l, Cr = u, oe = a;
      }
      ls(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, x = o) : ls(e);
  }
}
function ls(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Au(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Au(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Vn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        oe || t.flags & 512 && Xo(t);
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function os(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function is(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Xo(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Xo(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, x = u;
      break;
    }
    x = t.return;
  }
}
var lp = Math.ceil, ol = Ze.ReactCurrentDispatcher, Ai = Ze.ReactCurrentOwner, _e = Ze.ReactCurrentBatchConfig, I = 0, b = null, Y = null, te = 0, ve = 0, Gt = yt(0), Z = 0, bn = null, Tt = 0, El = 0, Vi = 0, Mn = null, fe = null, Wi = 0, an = 1 / 0, Ae = null, il = !1, Jo = null, ct = null, _r = !1, rt = null, ul = 0, Dn = 0, qo = null, Dr = -1, Fr = 0;
function se() {
  return I & 6 ? K() : Dr !== -1 ? Dr : Dr = K();
}
function ft(e) {
  return e.mode & 1 ? I & 2 && te !== 0 ? te & -te : Ad.transition !== null ? (Fr === 0 && (Fr = oa()), Fr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : da(e.type)), e) : 1;
}
function Ie(e, t, n, r) {
  if (50 < Dn)
    throw Dn = 0, qo = null, Error(S(185));
  rr(e, n, r), (!(I & 2) || e !== b) && (e === b && (!(I & 2) && (El |= n), Z === 4 && tt(e, te)), me(e, r), n === 1 && I === 0 && !(t.mode & 1) && (an = K() + 500, gl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Af(e, t);
  var r = Hr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && mu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && mu(n), t === 1)
      e.tag === 0 ? Bd(us.bind(null, e)) : Ta(us.bind(null, e)), Dd(function() {
        !(I & 6) && gt();
      }), n = null;
    else {
      switch (ia(r)) {
        case 1:
          n = mi;
          break;
        case 4:
          n = ra;
          break;
        case 16:
          n = Wr;
          break;
        case 536870912:
          n = la;
          break;
        default:
          n = Wr;
      }
      n = Lc(n, xc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function xc(e, t) {
  if (Dr = -1, Fr = 0, I & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n)
    return null;
  var r = Hr(e, e === b ? te : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = sl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = _c();
    (b !== e || te !== t) && (Ae = null, an = K() + 500, Pt(e, t));
    do
      try {
        up();
        break;
      } catch (u) {
        Cc(e, u);
      }
    while (!0);
    Ri(), ol.current = o, I = l, Y !== null ? t = 0 : (b = null, te = 0, t = Z);
  }
  if (t !== 0) {
    if (t === 2 && (l = _o(e), l !== 0 && (r = l, t = bo(e, l))), t === 1)
      throw n = bn, Pt(e, 0), tt(e, r), me(e, K()), n;
    if (t === 6)
      tt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !op(l) && (t = sl(e, r), t === 2 && (o = _o(e), o !== 0 && (r = o, t = bo(e, o))), t === 1))
        throw n = bn, Pt(e, 0), tt(e, r), me(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Et(e, fe, Ae);
          break;
        case 3:
          if (tt(e, r), (r & 130023424) === r && (t = Wi + 500 - K(), 10 < t)) {
            if (Hr(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = jo(Et.bind(null, e, fe, Ae), t);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 4:
          if (tt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - je(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * lp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = jo(Et.bind(null, e, fe, Ae), r);
            break;
          }
          Et(e, fe, Ae);
          break;
        case 5:
          Et(e, fe, Ae);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? xc.bind(null, e) : null;
}
function bo(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256), e = sl(e, t), e !== 2 && (t = fe, fe = n, t !== null && ei(t)), e;
}
function ei(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function op(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function tt(e, t) {
  for (t &= ~Vi, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function us(e) {
  if (I & 6)
    throw Error(S(327));
  tn();
  var t = Hr(e, 0);
  if (!(t & 1))
    return me(e, K()), null;
  var n = sl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _o(e);
    r !== 0 && (t = r, n = bo(e, r));
  }
  if (n === 1)
    throw n = bn, Pt(e, 0), tt(e, t), me(e, K()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Et(e, fe, Ae), me(e, K()), null;
}
function Hi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (an = K() + 500, gl && gt());
  }
}
function Ot(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && tn();
  var t = I;
  I |= 1;
  var n = _e.transition, r = M;
  try {
    if (_e.transition = null, M = 1, e)
      return e();
  } finally {
    M = r, _e.transition = n, I = t, !(I & 6) && gt();
  }
}
function Qi() {
  ve = Gt.current, U(Gt);
}
function Pt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Md(n)), Y !== null)
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch (_i(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Gr();
          break;
        case 3:
          un(), U(pe), U(ie), Ii();
          break;
        case 5:
          ji(r);
          break;
        case 4:
          un();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          zi(r.type._context);
          break;
        case 22:
        case 23:
          Qi();
      }
      n = n.return;
    }
  if (b = e, Y = e = dt(e.current, null), te = ve = t, Z = 0, bn = null, Vi = El = Tt = 0, fe = Mn = null, Ct !== null) {
    for (t = 0; t < Ct.length; t++)
      if (n = Ct[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function Cc(e, t) {
  do {
    var n = Y;
    try {
      if (Ri(), jr.current = ll, rl) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        rl = !1;
      }
      if (Lt = 0, q = G = A = null, jn = !1, Zn = 0, Ai.current = null, n === null || n.return === null) {
        Z = 1, bn = t, Y = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = Xu(i);
          if (y !== null) {
            y.flags &= -257, Gu(y, i, u, o, t), y.mode & 1 && Yu(o, a, t), t = y, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Yu(o, a, t), Ki();
              break e;
            }
            s = Error(S(426));
          }
        } else if ($ && u.mode & 1) {
          var E = Xu(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Gu(E, i, u, o, t), Pi(sn(s, u));
            break e;
          }
        }
        o = s = sn(s, u), Z !== 4 && (Z = 2), Mn === null ? Mn = [o] : Mn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = uc(o, s, t);
              Bu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = sc(o, u, t);
                Bu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Nc(n);
    } catch (k) {
      t = k, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _c() {
  var e = ol.current;
  return ol.current = ll, e === null ? ll : e;
}
function Ki() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || !(Tt & 268435455) && !(El & 268435455) || tt(b, te);
}
function sl(e, t) {
  var n = I;
  I |= 2;
  var r = _c();
  (b !== e || te !== t) && (Ae = null, Pt(e, t));
  do
    try {
      ip();
      break;
    } catch (l) {
      Cc(e, l);
    }
  while (!0);
  if (Ri(), I = n, ol.current = r, Y !== null)
    throw Error(S(261));
  return b = null, te = 0, Z;
}
function ip() {
  for (; Y !== null; )
    Pc(Y);
}
function up() {
  for (; Y !== null && !Of(); )
    Pc(Y);
}
function Pc(e) {
  var t = zc(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, t === null ? Nc(e) : Y = t, Ai.current = null;
}
function Nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ep(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, Y = null;
        return;
      }
    } else if (n = bd(n, t, ve), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Et(e, t, n) {
  var r = M, l = _e.transition;
  try {
    _e.transition = null, M = 1, sp(e, t, n, r);
  } finally {
    _e.transition = l, M = r;
  }
  return null;
}
function sp(e, t, n, r) {
  do
    tn();
  while (rt !== null);
  if (I & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Vf(e, o), e === b && (Y = b = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _r || (_r = !0, Lc(Wr, function() {
    return tn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = _e.transition, _e.transition = null;
    var i = M;
    M = 1;
    var u = I;
    I |= 4, Ai.current = null, np(e, n), kc(n, e), Rd(To), Qr = !!Lo, To = Lo = null, e.current = n, rp(n), jf(), I = u, M = i, _e.transition = o;
  } else
    e.current = n;
  if (_r && (_r = !1, rt = e, ul = l), o = e.pendingLanes, o === 0 && (ct = null), Df(n.stateNode), me(e, K()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il)
    throw il = !1, e = Jo, Jo = null, e;
  return ul & 1 && e.tag !== 0 && tn(), o = e.pendingLanes, o & 1 ? e === qo ? Dn++ : (Dn = 0, qo = e) : Dn = 0, gt(), null;
}
function tn() {
  if (rt !== null) {
    var e = ia(ul), t = _e.transition, n = M;
    try {
      if (_e.transition = null, M = 16 > e ? 16 : e, rt === null)
        var r = !1;
      else {
        if (e = rt, rt = null, ul = 0, I & 6)
          throw Error(S(331));
        var l = I;
        for (I |= 4, x = e.current; x !== null; ) {
          var o = x, i = o.child;
          if (x.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (x = a; x !== null; ) {
                  var h = x;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null)
                    p.return = h, x = p;
                  else
                    for (; x !== null; ) {
                      h = x;
                      var m = h.sibling, y = h.return;
                      if (gc(h), h === a) {
                        x = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = y, x = m;
                        break;
                      }
                      x = y;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var E = w.sibling;
                    w.sibling = null, w = E;
                  } while (w !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, x = i;
          else
            e:
              for (; x !== null; ) {
                if (o = x, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, x = f;
                  break e;
                }
                x = o.return;
              }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          i = x;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, x = d;
          else
            e:
              for (i = c; x !== null; ) {
                if (u = x, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kl(9, u);
                    }
                  } catch (k) {
                    W(u, u.return, k);
                  }
                if (u === i) {
                  x = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  v.return = u.return, x = v;
                  break e;
                }
                x = u.return;
              }
        }
        if (I = l, gt(), $e && typeof $e.onPostCommitFiberRoot == "function")
          try {
            $e.onPostCommitFiberRoot(pl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      M = n, _e.transition = t;
    }
  }
  return !1;
}
function ss(e, t, n) {
  t = sn(n, t), t = uc(e, t, 1), e = at(e, t, 1), t = se(), e !== null && (rr(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3)
    ss(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ss(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
          e = sn(n, e), e = sc(t, e, 1), t = at(t, e, 1), e = se(), t !== null && (rr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ap(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = se(), e.pingedLanes |= e.suspendedLanes & n, b === e && (te & n) === n && (Z === 4 || Z === 3 && (te & 130023424) === te && 500 > K() - Wi ? Pt(e, 0) : Vi |= n), me(e, t);
}
function Rc(e, t) {
  t === 0 && (e.mode & 1 ? (t = mr, mr <<= 1, !(mr & 130023424) && (mr = 4194304)) : t = 1);
  var n = se();
  e = Xe(e, t), e !== null && (rr(e, t, n), me(e, n));
}
function cp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Rc(e, n);
}
function fp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Rc(e, n);
}
var zc;
zc = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current)
      de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return de = !1, qd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else
    de = !1, $ && t.flags & 1048576 && Oa(t, qr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Mr(e, t), e = t.pendingProps;
      var l = rn(t, ie.current);
      en(t, n), l = Di(null, t, r, e, l, n);
      var o = Fi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (o = !0, Zr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ti(t), l.updater = wl, t.stateNode = l, l._reactInternals = t, Bo(t, r, e, n), t = Wo(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && Ci(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Mr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = pp(r), e = Le(r, e), l) {
          case 0:
            t = Vo(null, t, r, e, n);
            break e;
          case 1:
            t = qu(null, t, r, e, n);
            break e;
          case 11:
            t = Zu(null, t, r, e, n);
            break e;
          case 14:
            t = Ju(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Vo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), qu(e, t, r, l, n);
    case 3:
      e: {
        if (dc(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Da(e, t), tl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = sn(Error(S(423)), t), t = bu(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = sn(Error(S(424)), t), t = bu(e, t, r, n, l);
            break e;
          } else
            for (ye = st(t.stateNode.containerInfo.firstChild), ge = t, $ = !0, Oe = null, n = Ba(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (ln(), r === l) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Aa(t), e === null && Fo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Oo(r, l) ? i = null : o !== null && Oo(r, o) && (t.flags |= 32), fc(e, t), ue(e, t, i, n), t.child;
    case 6:
      return e === null && Fo(t), null;
    case 13:
      return pc(e, t, n);
    case 4:
      return Oi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = on(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Zu(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, D(br, r._currentValue), r._currentValue = i, o !== null)
          if (Me(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = Qe(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Uo(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(S(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Uo(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, en(t, n), l = Pe(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Ju(e, t, r, l, n);
    case 15:
      return ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Mr(e, t), t.tag = 1, he(r) ? (e = !0, Zr(t)) : e = !1, en(t, n), Ua(t, r, l), Bo(t, r, l, n), Wo(null, t, r, !0, e, n);
    case 19:
      return hc(e, t, n);
    case 22:
      return cc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Lc(e, t) {
  return na(e, t);
}
function dp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ce(e, t, n, r) {
  return new dp(e, t, n, r);
}
function Yi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function pp(e) {
  if (typeof e == "function")
    return Yi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === di)
      return 11;
    if (e === pi)
      return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ur(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Yi(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case $t:
          return Nt(n.children, l, o, t);
        case fi:
          i = 8, l |= 8;
          break;
        case ao:
          return e = Ce(12, n, t, l | 2), e.elementType = ao, e.lanes = o, e;
        case co:
          return e = Ce(13, n, t, l), e.elementType = co, e.lanes = o, e;
        case fo:
          return e = Ce(19, n, t, l), e.elementType = fo, e.lanes = o, e;
        case $s:
          return xl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Fs:
                i = 10;
                break e;
              case Us:
                i = 9;
                break e;
              case di:
                i = 11;
                break e;
              case pi:
                i = 14;
                break e;
              case qe:
                i = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = Ce(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Nt(e, t, n, r) {
  return e = Ce(7, e, r, t), e.lanes = n, e;
}
function xl(e, t, n, r) {
  return e = Ce(22, e, r, t), e.elementType = $s, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ro(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e;
}
function lo(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function hp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xi(e, t, n, r, l, o, i, u, s) {
  return e = new hp(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ce(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ti(o), e;
}
function mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ut, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Tc(e) {
  if (!e)
    return mt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1)
      throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n))
      return La(e, n, t);
  }
  return t;
}
function Oc(e, t, n, r, l, o, i, u, s) {
  return e = Xi(n, r, !0, e, l, o, i, u, s), e.context = Tc(null), n = e.current, r = se(), l = ft(n), o = Qe(r, l), o.callback = t ?? null, at(n, o, l), e.current.lanes = l, rr(e, l, r), me(e, r), e;
}
function Cl(e, t, n, r) {
  var l = t.current, o = se(), i = ft(l);
  return n = Tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, i), e !== null && (Ie(e, l, i, o), Or(e, l, i)), i;
}
function al(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function as(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gi(e, t) {
  as(e, t), (e = e.alternate) && as(e, t);
}
function vp() {
  return null;
}
var jc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zi(e) {
  this._internalRoot = e;
}
_l.prototype.render = Zi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  Cl(e, t, null, null);
};
_l.prototype.unmount = Zi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function() {
      Cl(null, e, null, null);
    }), t[Ye] = null;
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = aa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++)
      ;
    et.splice(n, 0, e), n === 0 && fa(e);
  }
};
function Ji(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Pl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function cs() {
}
function yp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = al(i);
        o.call(a);
      };
    }
    var i = Oc(t, r, e, 0, null, !1, !1, "", cs);
    return e._reactRootContainer = i, e[Ye] = i.current, Qn(e.nodeType === 8 ? e.parentNode : e), Ot(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = al(s);
      u.call(a);
    };
  }
  var s = Xi(e, 0, !1, null, null, !1, !1, "", cs);
  return e._reactRootContainer = s, e[Ye] = s.current, Qn(e.nodeType === 8 ? e.parentNode : e), Ot(function() {
    Cl(t, s, n, r);
  }), s;
}
function Nl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = al(i);
        u.call(s);
      };
    }
    Cl(t, i, e, l);
  } else
    i = yp(n, t, e, l, r);
  return al(i);
}
ua = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (vi(t, n | 1), me(t, K()), !(I & 6) && (an = K() + 500, gt()));
      }
      break;
    case 13:
      Ot(function() {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }), Gi(e, 1);
  }
};
yi = function(e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    Gi(e, 134217728);
  }
};
sa = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    Gi(e, t);
  }
};
aa = function() {
  return M;
};
ca = function(e, t) {
  var n = M;
  try {
    return M = e, t();
  } finally {
    M = n;
  }
};
Eo = function(e, t, n) {
  switch (t) {
    case "input":
      if (mo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = yl(r);
            if (!l)
              throw Error(S(90));
            As(r), mo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ws(e, n);
      break;
    case "select":
      t = n.value, t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Zs = Hi;
Js = Ot;
var gp = { usingClientEntryPoint: !1, Events: [or, Wt, yl, Xs, Gs, Hi] }, xn = { findFiberByHostInstance: xt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, wp = { bundleType: xn.bundleType, version: xn.version, rendererPackageName: xn.rendererPackageName, rendererConfig: xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ea(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xn.findFiberByHostInstance || vp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pr.isDisabled && Pr.supportsFiber)
    try {
      pl = Pr.inject(wp), $e = Pr;
    } catch {
    }
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
Se.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ji(t))
    throw Error(S(200));
  return mp(e, t, null, n);
};
Se.createRoot = function(e, t) {
  if (!Ji(e))
    throw Error(S(299));
  var n = !1, r = "", l = jc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xi(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Qn(e.nodeType === 8 ? e.parentNode : e), new Zi(t);
};
Se.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = ea(t), e = e === null ? null : e.stateNode, e;
};
Se.flushSync = function(e) {
  return Ot(e);
};
Se.hydrate = function(e, t, n) {
  if (!Pl(t))
    throw Error(S(200));
  return Nl(null, e, t, !0, n);
};
Se.hydrateRoot = function(e, t, n) {
  if (!Ji(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = jc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Oc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ye] = t.current, Qn(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new _l(t);
};
Se.render = function(e, t, n) {
  if (!Pl(t))
    throw Error(S(200));
  return Nl(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function(e) {
  if (!Pl(e))
    throw Error(S(40));
  return e._reactRootContainer ? (Ot(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ye] = null;
    });
  }), !0) : !1;
};
Se.unstable_batchedUpdates = Hi;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Pl(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return Nl(e, t, n, !1, r);
};
Se.version = "18.2.0-next-9e3b772b8-20220608";
function Ic() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), Os.exports = Se;
var Sp = Os.exports, fs = Sp;
uo.createRoot = fs.createRoot, uo.hydrateRoot = fs.hydrateRoot;
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function er() {
  return er = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, er.apply(this, arguments);
}
var lt;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(lt || (lt = {}));
const ds = "popstate";
function kp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let {
      pathname: o,
      search: i,
      hash: u
    } = r.location;
    return ti(
      "",
      {
        pathname: o,
        search: i,
        hash: u
      },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : cl(l);
  }
  return xp(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function qi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Ep() {
  return Math.random().toString(36).substr(2, 8);
}
function ps(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function ti(e, t, n, r) {
  return n === void 0 && (n = null), er({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? pn(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Ep()
  });
}
function cl(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function pn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function xp(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: l = document.defaultView,
    v5Compat: o = !1
  } = r, i = l.history, u = lt.Pop, s = null, a = h();
  a == null && (a = 0, i.replaceState(er({}, i.state, {
    idx: a
  }), ""));
  function h() {
    return (i.state || {
      idx: null
    }).idx;
  }
  function p() {
    u = lt.Pop;
    let E = h(), f = E == null ? null : E - a;
    a = E, s && s({
      action: u,
      location: w.location,
      delta: f
    });
  }
  function m(E, f) {
    u = lt.Push;
    let c = ti(w.location, E, f);
    n && n(c, E), a = h() + 1;
    let d = ps(c, a), v = w.createHref(c);
    try {
      i.pushState(d, "", v);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError")
        throw k;
      l.location.assign(v);
    }
    o && s && s({
      action: u,
      location: w.location,
      delta: 1
    });
  }
  function y(E, f) {
    u = lt.Replace;
    let c = ti(w.location, E, f);
    n && n(c, E), a = h();
    let d = ps(c, a), v = w.createHref(c);
    i.replaceState(d, "", v), o && s && s({
      action: u,
      location: w.location,
      delta: 0
    });
  }
  function g(E) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href, c = typeof E == "string" ? E : cl(E);
    return X(f, "No window.location.(origin|href) available to create URL for href: " + c), new URL(c, f);
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(E) {
      if (s)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(ds, p), s = E, () => {
        l.removeEventListener(ds, p), s = null;
      };
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: g,
    encodeLocation(E) {
      let f = g(E);
      return {
        pathname: f.pathname,
        search: f.search,
        hash: f.hash
      };
    },
    push: m,
    replace: y,
    go(E) {
      return i.go(E);
    }
  };
  return w;
}
var hs;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(hs || (hs = {}));
function Cp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? pn(t) : t, l = bi(r.pathname || "/", n);
  if (l == null)
    return null;
  let o = Mc(e);
  _p(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u)
    i = Ip(
      o[u],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      Fp(l)
    );
  return i;
}
function Mc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    s.relativePath.startsWith("/") && (X(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
    let a = pt([r, s.relativePath]), h = n.concat(s);
    o.children && o.children.length > 0 && (X(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')
    ), Mc(o.children, t, h, a)), !(o.path == null && !o.index) && t.push({
      path: a,
      score: Op(a, o.index),
      routesMeta: h
    });
  };
  return e.forEach((o, i) => {
    var u;
    if (o.path === "" || !((u = o.path) != null && u.includes("?")))
      l(o, i);
    else
      for (let s of Dc(o.path))
        l(o, i, s);
  }), t;
}
function Dc(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return l ? [o, ""] : [o];
  let i = Dc(r.join("/")), u = [];
  return u.push(...i.map((s) => s === "" ? o : [o, s].join("/"))), l && u.push(...i), u.map((s) => e.startsWith("/") && s === "" ? "/" : s);
}
function _p(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : jp(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const Pp = /^:[\w-]+$/, Np = 3, Rp = 2, zp = 1, Lp = 10, Tp = -2, ms = (e) => e === "*";
function Op(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(ms) && (r += Tp), t && (r += Rp), n.filter((l) => !ms(l)).reduce((l, o) => l + (Pp.test(o) ? Np : o === "" ? zp : Lp), r);
}
function jp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ip(e, t) {
  let {
    routesMeta: n
  } = e, r = {}, l = "/", o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i], s = i === n.length - 1, a = l === "/" ? t : t.slice(l.length) || "/", h = Mp({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: s
    }, a);
    if (!h)
      return null;
    Object.assign(r, h.params);
    let p = u.route;
    o.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: pt([l, h.pathname]),
      pathnameBase: Vp(pt([l, h.pathnameBase])),
      route: p
    }), h.pathnameBase !== "/" && (l = pt([l, h.pathnameBase]));
  }
  return o;
}
function Mp(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Dp(e.path, e.caseSensitive, e.end), l = t.match(n);
  if (!l)
    return null;
  let o = l[0], i = o.replace(/(.)\/+$/, "$1"), u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let {
        paramName: m,
        isOptional: y
      } = h;
      if (m === "*") {
        let w = u[p] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const g = u[p];
      return y && !g ? a[m] = void 0 : a[m] = Up(g || "", m), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function Dp(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), qi(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, u, s) => (r.push({
    paramName: u,
    isOptional: s != null
  }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), r];
}
function Fp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return qi(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Up(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return qi(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function bi(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function $p(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = ""
  } = typeof e == "string" ? pn(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Bp(n, t) : t,
    search: Wp(r),
    hash: Hp(l)
  };
}
function Bp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((l) => {
    l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
  }), n.length > 1 ? n.join("/") : "/";
}
function oo(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Ap(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function Fc(e, t) {
  let n = Ap(e);
  return t ? n.map((r, l) => l === e.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function Uc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string" ? l = pn(e) : (l = er({}, e), X(!l.pathname || !l.pathname.includes("?"), oo("?", "pathname", "search", l)), X(!l.pathname || !l.pathname.includes("#"), oo("#", "pathname", "hash", l)), X(!l.search || !l.search.includes("#"), oo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "", i = o ? "/" : l.pathname, u;
  if (i == null)
    u = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; )
        m.shift(), p -= 1;
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let s = $p(l, u), a = i && i !== "/" && i.endsWith("/"), h = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const pt = (e) => e.join("/").replace(/\/\/+/g, "/"), Vp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Wp = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Hp = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Qp(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const $c = ["post", "put", "patch", "delete"];
new Set($c);
const Kp = ["get", ...$c];
new Set(Kp);
/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, tr.apply(this, arguments);
}
const eu = /* @__PURE__ */ _.createContext(null), Yp = /* @__PURE__ */ _.createContext(null), Mt = /* @__PURE__ */ _.createContext(null), Rl = /* @__PURE__ */ _.createContext(null), Dt = /* @__PURE__ */ _.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), Bc = /* @__PURE__ */ _.createContext(null);
function Xp(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  ur() || X(!1);
  let {
    basename: r,
    navigator: l
  } = _.useContext(Mt), {
    hash: o,
    pathname: i,
    search: u
  } = Vc(e, {
    relative: n
  }), s = i;
  return r !== "/" && (s = i === "/" ? r : pt([r, i])), l.createHref({
    pathname: s,
    search: u,
    hash: o
  });
}
function ur() {
  return _.useContext(Rl) != null;
}
function zl() {
  return ur() || X(!1), _.useContext(Rl).location;
}
function Ac(e) {
  _.useContext(Mt).static || _.useLayoutEffect(e);
}
function Gp() {
  let {
    isDataRoute: e
  } = _.useContext(Dt);
  return e ? sh() : Zp();
}
function Zp() {
  ur() || X(!1);
  let e = _.useContext(eu), {
    basename: t,
    future: n,
    navigator: r
  } = _.useContext(Mt), {
    matches: l
  } = _.useContext(Dt), {
    pathname: o
  } = zl(), i = JSON.stringify(Fc(l, n.v7_relativeSplatPath)), u = _.useRef(!1);
  return Ac(() => {
    u.current = !0;
  }), _.useCallback(function(a, h) {
    if (h === void 0 && (h = {}), !u.current)
      return;
    if (typeof a == "number") {
      r.go(a);
      return;
    }
    let p = Uc(a, JSON.parse(i), o, h.relative === "path");
    e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : pt([t, p.pathname])), (h.replace ? r.replace : r.push)(p, h.state, h);
  }, [t, r, i, o, e]);
}
function Vc(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = _.useContext(Mt), {
    matches: l
  } = _.useContext(Dt), {
    pathname: o
  } = zl(), i = JSON.stringify(Fc(l, r.v7_relativeSplatPath));
  return _.useMemo(() => Uc(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Jp(e, t) {
  return qp(e, t);
}
function qp(e, t, n, r) {
  ur() || X(!1);
  let {
    navigator: l
  } = _.useContext(Mt), {
    matches: o
  } = _.useContext(Dt), i = o[o.length - 1], u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = zl(), h;
  if (t) {
    var p;
    let E = typeof t == "string" ? pn(t) : t;
    s === "/" || (p = E.pathname) != null && p.startsWith(s) || X(!1), h = E;
  } else
    h = a;
  let m = h.pathname || "/", y = s === "/" ? m : m.slice(s.length) || "/", g = Cp(e, {
    pathname: y
  }), w = rh(g && g.map((E) => Object.assign({}, E, {
    params: Object.assign({}, u, E.params),
    pathname: pt([
      s,
      // Re-encode pathnames that were decoded inside matchRoutes
      l.encodeLocation ? l.encodeLocation(E.pathname).pathname : E.pathname
    ]),
    pathnameBase: E.pathnameBase === "/" ? s : pt([
      s,
      // Re-encode pathnames that were decoded inside matchRoutes
      l.encodeLocation ? l.encodeLocation(E.pathnameBase).pathname : E.pathnameBase
    ])
  })), o, n, r);
  return t && w ? /* @__PURE__ */ _.createElement(Rl.Provider, {
    value: {
      location: tr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, h),
      navigationType: lt.Pop
    }
  }, w) : w;
}
function bp() {
  let e = uh(), t = Qp(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, l = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ _.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ _.createElement("pre", {
    style: l
  }, n) : null, null);
}
const eh = /* @__PURE__ */ _.createElement(bp, null);
class th extends _.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ _.createElement(Dt.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ _.createElement(Bc.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function nh(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, l = _.useContext(eu);
  return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ _.createElement(Dt.Provider, {
    value: t
  }, r);
}
function rh(e, t, n, r) {
  var l;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if ((o = n) != null && o.errors)
      e = n.matches;
    else
      return null;
  }
  let i = e, u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = i.findIndex((p) => p.route.id && (u == null ? void 0 : u[p.route.id]));
    h >= 0 || X(!1), i = i.slice(0, Math.min(i.length, h + 1));
  }
  let s = !1, a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < i.length; h++) {
      let p = i[h];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h), p.route.id) {
        let {
          loaderData: m,
          errors: y
        } = n, g = p.route.loader && m[p.route.id] === void 0 && (!y || y[p.route.id] === void 0);
        if (p.route.lazy || g) {
          s = !0, a >= 0 ? i = i.slice(0, a + 1) : i = [i[0]];
          break;
        }
      }
    }
  return i.reduceRight((h, p, m) => {
    let y, g = !1, w = null, E = null;
    n && (y = u && p.route.id ? u[p.route.id] : void 0, w = p.route.errorElement || eh, s && (a < 0 && m === 0 ? (ah("route-fallback", !1), g = !0, E = null) : a === m && (g = !0, E = p.route.hydrateFallbackElement || null)));
    let f = t.concat(i.slice(0, m + 1)), c = () => {
      let d;
      return y ? d = w : g ? d = E : p.route.Component ? d = /* @__PURE__ */ _.createElement(p.route.Component, null) : p.route.element ? d = p.route.element : d = h, /* @__PURE__ */ _.createElement(nh, {
        match: p,
        routeContext: {
          outlet: h,
          matches: f,
          isDataRoute: n != null
        },
        children: d
      });
    };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0) ? /* @__PURE__ */ _.createElement(th, {
      location: n.location,
      revalidation: n.revalidation,
      component: w,
      error: y,
      children: c(),
      routeContext: {
        outlet: null,
        matches: f,
        isDataRoute: !0
      }
    }) : c();
  }, null);
}
var Wc = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Wc || {}), fl = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(fl || {});
function lh(e) {
  let t = _.useContext(eu);
  return t || X(!1), t;
}
function oh(e) {
  let t = _.useContext(Yp);
  return t || X(!1), t;
}
function ih(e) {
  let t = _.useContext(Dt);
  return t || X(!1), t;
}
function Hc(e) {
  let t = ih(), n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function uh() {
  var e;
  let t = _.useContext(Bc), n = oh(fl.UseRouteError), r = Hc(fl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sh() {
  let {
    router: e
  } = lh(Wc.UseNavigateStable), t = Hc(fl.UseNavigateStable), n = _.useRef(!1);
  return Ac(() => {
    n.current = !0;
  }), _.useCallback(function(l, o) {
    o === void 0 && (o = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, tr({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
const vs = {};
function ah(e, t, n) {
  !t && !vs[e] && (vs[e] = !0);
}
function $r(e) {
  X(!1);
}
function ch(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: o,
    static: i = !1,
    future: u
  } = e;
  ur() && X(!1);
  let s = t.replace(/^\/*/, "/"), a = _.useMemo(() => ({
    basename: s,
    navigator: o,
    static: i,
    future: tr({
      v7_relativeSplatPath: !1
    }, u)
  }), [s, u, o, i]);
  typeof r == "string" && (r = pn(r));
  let {
    pathname: h = "/",
    search: p = "",
    hash: m = "",
    state: y = null,
    key: g = "default"
  } = r, w = _.useMemo(() => {
    let E = bi(h, s);
    return E == null ? null : {
      location: {
        pathname: E,
        search: p,
        hash: m,
        state: y,
        key: g
      },
      navigationType: l
    };
  }, [s, h, p, m, y, g, l]);
  return w == null ? null : /* @__PURE__ */ _.createElement(Mt.Provider, {
    value: a
  }, /* @__PURE__ */ _.createElement(Rl.Provider, {
    children: n,
    value: w
  }));
}
function fh(e) {
  let {
    children: t,
    location: n
  } = e;
  return Jp(ni(t), n);
}
new Promise(() => {
});
function ni(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return _.Children.forEach(e, (r, l) => {
    if (!/* @__PURE__ */ _.isValidElement(r))
      return;
    let o = [...t, l];
    if (r.type === _.Fragment) {
      n.push.apply(n, ni(r.props.children, o));
      return;
    }
    r.type !== $r && X(!1), !r.props.index || !r.props.children || X(!1);
    let i = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (i.children = ni(r.props.children, o)), n.push(i);
  }), n;
}
/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ri.apply(this, arguments);
}
function dh(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), l, o;
  for (o = 0; o < r.length; o++)
    l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ph(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function hh(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !ph(e);
}
const mh = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], vh = "startTransition", ys = cf[vh];
function yh(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: l
  } = e, o = _.useRef();
  o.current == null && (o.current = kp({
    window: l,
    v5Compat: !0
  }));
  let i = o.current, [u, s] = _.useState({
    action: i.action,
    location: i.location
  }), {
    v7_startTransition: a
  } = r || {}, h = _.useCallback((p) => {
    a && ys ? ys(() => s(p)) : s(p);
  }, [s, a]);
  return _.useLayoutEffect(() => i.listen(h), [i, h]), /* @__PURE__ */ _.createElement(ch, {
    basename: t,
    children: n,
    location: u.location,
    navigationType: u.action,
    navigator: i,
    future: r
  });
}
const gh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, io = /* @__PURE__ */ _.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: l,
    reloadDocument: o,
    replace: i,
    state: u,
    target: s,
    to: a,
    preventScrollReset: h,
    unstable_viewTransition: p
  } = t, m = dh(t, mh), {
    basename: y
  } = _.useContext(Mt), g, w = !1;
  if (typeof a == "string" && wh.test(a) && (g = a, gh))
    try {
      let d = new URL(window.location.href), v = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a), k = bi(v.pathname, y);
      v.origin === d.origin && k != null ? a = k + v.search + v.hash : w = !0;
    } catch {
    }
  let E = Xp(a, {
    relative: l
  }), f = Sh(a, {
    replace: i,
    state: u,
    target: s,
    preventScrollReset: h,
    relative: l,
    unstable_viewTransition: p
  });
  function c(d) {
    r && r(d), d.defaultPrevented || f(d);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ _.createElement("a", ri({}, m, {
      href: g || E,
      onClick: w || o ? r : c,
      ref: n,
      target: s
    }))
  );
});
var gs;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(gs || (gs = {}));
var ws;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(ws || (ws = {}));
function Sh(e, t) {
  let {
    target: n,
    replace: r,
    state: l,
    preventScrollReset: o,
    relative: i,
    unstable_viewTransition: u
  } = t === void 0 ? {} : t, s = Gp(), a = zl(), h = Vc(e, {
    relative: i
  });
  return _.useCallback((p) => {
    if (hh(p, n)) {
      p.preventDefault();
      let m = r !== void 0 ? r : cl(a) === cl(h);
      s(e, {
        replace: m,
        state: l,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: u
      });
    }
  }, [a, s, h, r, l, n, e, o, i, u]);
}
function tu() {
  return /* @__PURE__ */ j.jsxs("div", { children: [
    /* @__PURE__ */ j.jsx(io, { to: "/", children: "Home" }),
    /* @__PURE__ */ j.jsx(io, { to: "/about", children: "  [ about ]" }),
    /* @__PURE__ */ j.jsx(io, { to: "/test1", children: "  [ test1 ]" }),
    /* @__PURE__ */ j.jsx("hr", {})
  ] });
}
function kh() {
  return /* @__PURE__ */ j.jsxs("div", { className: "container mx-auto my-2 px-8 bg-white", children: [
    /* @__PURE__ */ j.jsx(tu, {}),
    /* @__PURE__ */ j.jsx(
      "h1",
      {
        className: "text-4xl text-gray-700 font-bold my-2",
        children: "Home"
      }
    )
  ] });
}
function Eh() {
  return /* @__PURE__ */ j.jsxs("div", { className: "container mx-auto my-2 px-8 bg-white", children: [
    /* @__PURE__ */ j.jsx(tu, {}),
    /* @__PURE__ */ j.jsx(
      "h1",
      {
        className: "text-4xl text-gray-700 font-bold my-2",
        children: "About"
      }
    )
  ] });
}
let Ss = [];
function xh() {
  const [e, t] = _.useState(""), n = async function() {
    console.log("#testProc");
    const l = JSON.stringify({
      api_url: "/test/get_list",
      userId: 0
    }), u = await (await fetch("https://kuc-express-27react-pg-pri.vercel.app" + "/api/test/test1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: l
    })).json();
    Ss = u.data, t((/* @__PURE__ */ new Date()).toString()), console.log(u.data);
  };
  return /* @__PURE__ */ j.jsxs("div", { className: "container mx-auto my-2 px-8 bg-white", children: [
    /* @__PURE__ */ j.jsx(tu, {}),
    /* @__PURE__ */ j.jsx("h1", { className: "text-4xl text-gray-700 font-bold my-2", children: "test1.tsx" }),
    /* @__PURE__ */ j.jsx("hr", {}),
    /* @__PURE__ */ j.jsx("p", { children: "Test-page" }),
    /* @__PURE__ */ j.jsx("hr", { className: "my-2" }),
    /* @__PURE__ */ j.jsx("button", { className: "btn-purple", onClick: () => n(), children: "Test" }),
    /* @__PURE__ */ j.jsx("hr", { className: "my-1" }),
    Ss.map((r, l) => /* @__PURE__ */ j.jsxs("div", { children: [
      /* @__PURE__ */ j.jsx("h3", { className: "text-3xl font-bold", children: r.title }),
      /* @__PURE__ */ j.jsxs("span", { children: [
        "ID: ",
        r.id,
        ", ",
        r.createdAt
      ] }),
      /* @__PURE__ */ j.jsx("hr", {})
    ] }, l))
  ] });
}
function Ch() {
  return /* @__PURE__ */ j.jsx("div", { className: "App", children: /* @__PURE__ */ j.jsxs(fh, { children: [
    /* @__PURE__ */ j.jsx($r, { path: "/", element: /* @__PURE__ */ j.jsx(kh, {}) }),
    /* @__PURE__ */ j.jsx($r, { path: "/about", element: /* @__PURE__ */ j.jsx(Eh, {}) }),
    /* @__PURE__ */ j.jsx($r, { path: "/test1", element: /* @__PURE__ */ j.jsx(xh, {}) })
  ] }) });
}
uo.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ j.jsx(Ls.StrictMode, { children: /* @__PURE__ */ j.jsx(yh, { children: /* @__PURE__ */ j.jsx(Ch, {}) }) })
);
