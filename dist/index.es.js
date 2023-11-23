import * as C from "react";
import N, { useCallback as ue, forwardRef as R, Children as Nt, isValidElement as Un, createElement as x, cloneElement as ro, Fragment as jt, createContext as ct, useContext as He, useState as Y, useEffect as G, useRef as V, useMemo as yt, useLayoutEffect as Is, useReducer as Ls, useDebugValue as ux, useImperativeHandle as fx, Component as px, createRef as bo } from "react";
import * as mx from "react-dom";
import ul, { flushSync as Fs, createPortal as fl } from "react-dom";
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = { exports: {} }, xo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xd;
function vx() {
  if (Xd)
    return xo;
  Xd = 1;
  var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var d, u = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c)
      r.call(c, d) && !a.hasOwnProperty(d) && (u[d] = c[d]);
    if (i && i.defaultProps)
      for (d in c = i.defaultProps, c)
        u[d] === void 0 && (u[d] = c[d]);
    return { $$typeof: t, type: i, key: p, ref: m, props: u, _owner: o.current };
  }
  return xo.Fragment = n, xo.jsx = s, xo.jsxs = s, xo;
}
var yo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd;
function gx() {
  return Qd || (Qd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function g(E) {
      if (E === null || typeof E != "object")
        return null;
      var re = h && E[h] || E[v];
      return typeof re == "function" ? re : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(E) {
      {
        for (var re = arguments.length, fe = new Array(re > 1 ? re - 1 : 0), Ne = 1; Ne < re; Ne++)
          fe[Ne - 1] = arguments[Ne];
        $("error", E, fe);
      }
    }
    function $(E, re, fe) {
      {
        var Ne = b.ReactDebugCurrentFrame, Ie = Ne.getStackAddendum();
        Ie !== "" && (re += "%s", fe = fe.concat([Ie]));
        var Ye = fe.map(function(Ae) {
          return String(Ae);
        });
        Ye.unshift("Warning: " + re), Function.prototype.apply.call(console[E], console, Ye);
      }
    }
    var _ = !1, w = !1, P = !1, k = !1, L = !1, I;
    I = Symbol.for("react.module.reference");
    function ee(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === a || L || E === o || E === l || E === d || k || E === m || _ || w || P || typeof E == "object" && E !== null && (E.$$typeof === p || E.$$typeof === u || E.$$typeof === s || E.$$typeof === i || E.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === I || E.getModuleId !== void 0));
    }
    function te(E, re, fe) {
      var Ne = E.displayName;
      if (Ne)
        return Ne;
      var Ie = re.displayName || re.name || "";
      return Ie !== "" ? fe + "(" + Ie + ")" : fe;
    }
    function K(E) {
      return E.displayName || "Context";
    }
    function Z(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case i:
            var re = E;
            return K(re) + ".Consumer";
          case s:
            var fe = E;
            return K(fe._context) + ".Provider";
          case c:
            return te(E, E.render, "ForwardRef");
          case u:
            var Ne = E.displayName || null;
            return Ne !== null ? Ne : Z(E.type) || "Memo";
          case p: {
            var Ie = E, Ye = Ie._payload, Ae = Ie._init;
            try {
              return Z(Ae(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, A = 0, j, W, B, M, D, U, q;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function ce() {
      {
        if (A === 0) {
          j = console.log, W = console.info, B = console.warn, M = console.error, D = console.group, U = console.groupCollapsed, q = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        A++;
      }
    }
    function ye() {
      {
        if (A--, A === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, E, {
              value: j
            }),
            info: O({}, E, {
              value: W
            }),
            warn: O({}, E, {
              value: B
            }),
            error: O({}, E, {
              value: M
            }),
            group: O({}, E, {
              value: D
            }),
            groupCollapsed: O({}, E, {
              value: U
            }),
            groupEnd: O({}, E, {
              value: q
            })
          });
        }
        A < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = b.ReactCurrentDispatcher, ne;
    function le(E, re, fe) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var Ne = Ie.stack.trim().match(/\n( *(at )?)/);
            ne = Ne && Ne[1] || "";
          }
        return `
` + ne + E;
      }
    }
    var he = !1, J;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      J = new ve();
    }
    function Q(E, re) {
      if (!E || he)
        return "";
      {
        var fe = J.get(E);
        if (fe !== void 0)
          return fe;
      }
      var Ne;
      he = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = be.current, be.current = null, ce();
      try {
        if (re) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (hn) {
              Ne = hn;
            }
            Reflect.construct(E, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (hn) {
              Ne = hn;
            }
            E.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (hn) {
            Ne = hn;
          }
          E();
        }
      } catch (hn) {
        if (hn && Ne && typeof hn.stack == "string") {
          for (var Me = hn.stack.split(`
`), gt = Ne.stack.split(`
`), nt = Me.length - 1, ot = gt.length - 1; nt >= 1 && ot >= 0 && Me[nt] !== gt[ot]; )
            ot--;
          for (; nt >= 1 && ot >= 0; nt--, ot--)
            if (Me[nt] !== gt[ot]) {
              if (nt !== 1 || ot !== 1)
                do
                  if (nt--, ot--, ot < 0 || Me[nt] !== gt[ot]) {
                    var Mt = `
` + Me[nt].replace(" at new ", " at ");
                    return E.displayName && Mt.includes("<anonymous>") && (Mt = Mt.replace("<anonymous>", E.displayName)), typeof E == "function" && J.set(E, Mt), Mt;
                  }
                while (nt >= 1 && ot >= 0);
              break;
            }
        }
      } finally {
        he = !1, be.current = Ye, ye(), Error.prepareStackTrace = Ie;
      }
      var Dr = E ? E.displayName || E.name : "", qd = Dr ? le(Dr) : "";
      return typeof E == "function" && J.set(E, qd), qd;
    }
    function Re(E, re, fe) {
      return Q(E, !1);
    }
    function Ue(E) {
      var re = E.prototype;
      return !!(re && re.isReactComponent);
    }
    function dt(E, re, fe) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Q(E, Ue(E));
      if (typeof E == "string")
        return le(E);
      switch (E) {
        case l:
          return le("Suspense");
        case d:
          return le("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case c:
            return Re(E.render);
          case u:
            return dt(E.type, re, fe);
          case p: {
            var Ne = E, Ie = Ne._payload, Ye = Ne._init;
            try {
              return dt(Ye(Ie), re, fe);
            } catch {
            }
          }
        }
      return "";
    }
    var T = Object.prototype.hasOwnProperty, z = {}, X = b.ReactDebugCurrentFrame;
    function xe(E) {
      if (E) {
        var re = E._owner, fe = dt(E.type, E._source, re ? re.type : null);
        X.setExtraStackFrame(fe);
      } else
        X.setExtraStackFrame(null);
    }
    function de(E, re, fe, Ne, Ie) {
      {
        var Ye = Function.call.bind(T);
        for (var Ae in E)
          if (Ye(E, Ae)) {
            var Me = void 0;
            try {
              if (typeof E[Ae] != "function") {
                var gt = Error((Ne || "React class") + ": " + fe + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              Me = E[Ae](re, Ae, Ne, fe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Me = nt;
            }
            Me && !(Me instanceof Error) && (xe(Ie), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", fe, Ae, typeof Me), xe(null)), Me instanceof Error && !(Me.message in z) && (z[Me.message] = !0, xe(Ie), y("Failed %s type: %s", fe, Me.message), xe(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(E) {
      return se(E);
    }
    function qe(E) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, fe = re && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return fe;
      }
    }
    function Qe(E) {
      try {
        return pn(E), !1;
      } catch {
        return !0;
      }
    }
    function pn(E) {
      return "" + E;
    }
    function Ma(E) {
      if (Qe(E))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(E)), pn(E);
    }
    var mn = b.ReactCurrentOwner, ho = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Da, vo, go;
    go = {};
    function Ra(E) {
      if (T.call(E, "ref")) {
        var re = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Xb(E) {
      if (T.call(E, "key")) {
        var re = Object.getOwnPropertyDescriptor(E, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Qb(E, re) {
      if (typeof E.ref == "string" && mn.current && re && mn.current.stateNode !== re) {
        var fe = Z(mn.current.type);
        go[fe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Z(mn.current.type), E.ref), go[fe] = !0);
      }
    }
    function Jb(E, re) {
      {
        var fe = function() {
          Da || (Da = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        fe.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: fe,
          configurable: !0
        });
      }
    }
    function ex(E, re) {
      {
        var fe = function() {
          vo || (vo = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        fe.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: fe,
          configurable: !0
        });
      }
    }
    var tx = function(E, re, fe, Ne, Ie, Ye, Ae) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: re,
        ref: fe,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return Me._store = {}, Object.defineProperty(Me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(Me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
    };
    function nx(E, re, fe, Ne, Ie) {
      {
        var Ye, Ae = {}, Me = null, gt = null;
        fe !== void 0 && (Ma(fe), Me = "" + fe), Xb(re) && (Ma(re.key), Me = "" + re.key), Ra(re) && (gt = re.ref, Qb(re, Ie));
        for (Ye in re)
          T.call(re, Ye) && !ho.hasOwnProperty(Ye) && (Ae[Ye] = re[Ye]);
        if (E && E.defaultProps) {
          var nt = E.defaultProps;
          for (Ye in nt)
            Ae[Ye] === void 0 && (Ae[Ye] = nt[Ye]);
        }
        if (Me || gt) {
          var ot = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Me && Jb(Ae, ot), gt && ex(Ae, ot);
        }
        return tx(E, Me, gt, Ie, Ne, mn.current, Ae);
      }
    }
    var Ei = b.ReactCurrentOwner, Bd = b.ReactDebugCurrentFrame;
    function Mr(E) {
      if (E) {
        var re = E._owner, fe = dt(E.type, E._source, re ? re.type : null);
        Bd.setExtraStackFrame(fe);
      } else
        Bd.setExtraStackFrame(null);
    }
    var Ni;
    Ni = !1;
    function Pi(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function Yd() {
      {
        if (Ei.current) {
          var E = Z(Ei.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function rx(E) {
      {
        if (E !== void 0) {
          var re = E.fileName.replace(/^.*[\\\/]/, ""), fe = E.lineNumber;
          return `

Check your code at ` + re + ":" + fe + ".";
        }
        return "";
      }
    }
    var Hd = {};
    function ox(E) {
      {
        var re = Yd();
        if (!re) {
          var fe = typeof E == "string" ? E : E.displayName || E.name;
          fe && (re = `

Check the top-level render call using <` + fe + ">.");
        }
        return re;
      }
    }
    function Kd(E, re) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var fe = ox(re);
        if (Hd[fe])
          return;
        Hd[fe] = !0;
        var Ne = "";
        E && E._owner && E._owner !== Ei.current && (Ne = " It was passed a child from " + Z(E._owner.type) + "."), Mr(E), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', fe, Ne), Mr(null);
      }
    }
    function Gd(E, re) {
      {
        if (typeof E != "object")
          return;
        if ($e(E))
          for (var fe = 0; fe < E.length; fe++) {
            var Ne = E[fe];
            Pi(Ne) && Kd(Ne, re);
          }
        else if (Pi(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ie = g(E);
          if (typeof Ie == "function" && Ie !== E.entries)
            for (var Ye = Ie.call(E), Ae; !(Ae = Ye.next()).done; )
              Pi(Ae.value) && Kd(Ae.value, re);
        }
      }
    }
    function ax(E) {
      {
        var re = E.type;
        if (re == null || typeof re == "string")
          return;
        var fe;
        if (typeof re == "function")
          fe = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === u))
          fe = re.propTypes;
        else
          return;
        if (fe) {
          var Ne = Z(re);
          de(fe, E.props, "prop", Ne, E);
        } else if (re.PropTypes !== void 0 && !Ni) {
          Ni = !0;
          var Ie = Z(re);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sx(E) {
      {
        for (var re = Object.keys(E.props), fe = 0; fe < re.length; fe++) {
          var Ne = re[fe];
          if (Ne !== "children" && Ne !== "key") {
            Mr(E), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), Mr(null);
            break;
          }
        }
        E.ref !== null && (Mr(E), y("Invalid attribute `ref` supplied to `React.Fragment`."), Mr(null));
      }
    }
    function Zd(E, re, fe, Ne, Ie, Ye) {
      {
        var Ae = ee(E);
        if (!Ae) {
          var Me = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = rx(Ie);
          gt ? Me += gt : Me += Yd();
          var nt;
          E === null ? nt = "null" : $e(E) ? nt = "array" : E !== void 0 && E.$$typeof === t ? (nt = "<" + (Z(E.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof E, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Me);
        }
        var ot = nx(E, re, fe, Ie, Ye);
        if (ot == null)
          return ot;
        if (Ae) {
          var Mt = re.children;
          if (Mt !== void 0)
            if (Ne)
              if ($e(Mt)) {
                for (var Dr = 0; Dr < Mt.length; Dr++)
                  Gd(Mt[Dr], E);
                Object.freeze && Object.freeze(Mt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gd(Mt, E);
        }
        return E === r ? sx(ot) : ax(ot), ot;
      }
    }
    function ix(E, re, fe) {
      return Zd(E, re, fe, !0);
    }
    function cx(E, re, fe) {
      return Zd(E, re, fe, !1);
    }
    var lx = cx, dx = ix;
    yo.Fragment = r, yo.jsx = lx, yo.jsxs = dx;
  }()), yo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = vx() : e.exports = gx();
})(f);
function S() {
  return S = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, S.apply(this, arguments);
}
function bx(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ra(...e) {
  return (t) => e.forEach(
    (n) => bx(n, t)
  );
}
function we(...e) {
  return ue(ra(...e), e);
}
const nn = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e, o = Nt.toArray(n), a = o.find(xx);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Nt.count(s) > 1 ? Nt.only(null) : /* @__PURE__ */ Un(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x($c, S({}, r, {
      ref: t
    }), /* @__PURE__ */ Un(s) ? /* @__PURE__ */ ro(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x($c, S({}, r, {
    ref: t
  }), n);
});
nn.displayName = "Slot";
const $c = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Un(n) ? /* @__PURE__ */ ro(n, {
    ...yx(r, n.props),
    ref: t ? ra(t, n.ref) : n.ref
  }) : Nt.count(n) > 1 ? Nt.only(null) : null;
});
$c.displayName = "SlotClone";
const pl = ({ children: e }) => /* @__PURE__ */ x(jt, null, e);
function xx(e) {
  return /* @__PURE__ */ Un(e) && e.type === pl;
}
function yx(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      a(...i), o(...i);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function Zf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Zf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function qf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Zf(e)) && (r && (r += " "), r += t);
  return r;
}
const Jd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, eu = qf, oo = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return eu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], u = a == null ? void 0 : a[l];
    if (d === null)
      return null;
    const p = Jd(d) || Jd(u);
    return o[l][p];
  }), i = n && Object.entries(n).reduce((l, d) => {
    let [u, p] = d;
    return p === void 0 || (l[u] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: u, className: p, ...m } = d;
    return Object.entries(m).every((h) => {
      let [v, g] = h;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === g;
    }) ? [
      ...l,
      u,
      p
    ] : l;
  }, []);
  return eu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function dO(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const uO = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, Ti = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, fO = (e) => {
  const t = Ti(e), n = Ti(e, 0.1), r = Ti(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, ki = {
  DIGITAL: [
    { label: "0412", value: "0412", image: "/images/marks/digitel.png" }
  ],
  MOVISTAR: [
    { label: "0414", value: "0414", image: "/images/marks/movistar.png" },
    { label: "0424", value: "0424", image: "/images/marks/movistar.png" }
  ],
  MOVILNET: [
    { label: "0416", value: "0416", image: "/images/marks/movilnet.png" },
    { label: "0426", value: "0426", image: "/images/marks/movilnet.png" }
  ]
}, pO = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), mO = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), hO = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), vO = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, os = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, gO = () => [...ki.DIGITAL, ...ki.MOVILNET, ...ki.MOVISTAR], $o = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function $x() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Xf(t)) && (r && (r += " "), r += n);
  return r;
}
function Xf(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Xf(e[r])) && (n && (n += " "), n += t);
  return n;
}
var ml = "-";
function wx(e) {
  var t = Cx(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(ml);
    return c[0] === "" && c.length !== 1 && c.shift(), Qf(c, t) || _x(i);
  }
  function s(i, c) {
    var l = n[i] || [];
    return c && o[i] ? [].concat(l, o[i]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: s
  };
}
function Qf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Qf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(ml);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var tu = /^\[(.+)\]$/;
function _x(e) {
  if (tu.test(e)) {
    var t = tu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Cx(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Ex(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    wc(i, r, s, t);
  }), r;
}
function wc(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : nu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Sx(o)) {
        wc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(s) {
      var i = s[0], c = s[1];
      wc(c, nu(t, i), n, r);
    });
  });
}
function nu(e, t) {
  var n = e;
  return t.split(ml).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Sx(e) {
  return e.isThemeGetter;
}
function Ex(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], a = o.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(i) {
        var c = i[0], l = i[1];
        return [t + c, l];
      })) : s;
    });
    return [r, a];
  }) : e;
}
function Nx(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, s) {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set: function(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}
var Jf = "!";
function Px(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var i = [], c = 0, l = 0, d, u = 0; u < s.length; u++) {
      var p = s[u];
      if (c === 0) {
        if (p === r && (n || s.slice(u, u + o) === t)) {
          i.push(s.slice(l, u)), l = u + o;
          continue;
        }
        if (p === "/") {
          d = u;
          continue;
        }
      }
      p === "[" ? c++ : p === "]" && c--;
    }
    var m = i.length === 0 ? s : s.substring(l), h = m.startsWith(Jf), v = h ? m.substring(1) : m, g = d && d > l ? d - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    };
  };
}
function Tx(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function kx(e) {
  return {
    cache: Nx(e.cacheSize),
    splitModifiers: Px(e),
    ...wx(e)
  };
}
var Ox = /\s+/;
function Mx(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(Ox).map(function(s) {
    var i = n(s), c = i.modifiers, l = i.hasImportantModifier, d = i.baseClassName, u = i.maybePostfixModifierPosition, p = r(u ? d.substring(0, u) : d), m = Boolean(u);
    if (!p) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (p = r(d), !p)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      m = !1;
    }
    var h = Tx(c).join(":"), v = l ? h + Jf : h;
    return {
      isTailwindClass: !0,
      modifierId: v,
      classGroupId: p,
      originalClassName: s,
      hasPostfixModifier: m
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var i = s.modifierId, c = s.classGroupId, l = s.hasPostfixModifier, d = i + c;
    return a.has(d) ? !1 : (a.add(d), o(c, l).forEach(function(u) {
      return a.add(i + u);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Dx() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var d = t[0], u = t.slice(1), p = u.reduce(function(m, h) {
      return h(m);
    }, d());
    return r = kx(p), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var d = o(l);
    if (d)
      return d;
    var u = Mx(l, r);
    return a(l, u), u;
  }
  return function() {
    return s($x.apply(null, arguments));
  };
}
function Ke(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ep = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rx = /^\d+\/\d+$/, Ax = /* @__PURE__ */ new Set(["px", "full", "screen"]), jx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ix = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Lx = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Ft(e) {
  return ir(e) || Ax.has(e) || Rx.test(e) || _c(e);
}
function _c(e) {
  return $r(e, "length", Bx);
}
function Fx(e) {
  return $r(e, "size", tp);
}
function Vx(e) {
  return $r(e, "position", tp);
}
function Ux(e) {
  return $r(e, "url", Yx);
}
function Aa(e) {
  return $r(e, "number", ir);
}
function ir(e) {
  return !Number.isNaN(Number(e));
}
function Wx(e) {
  return e.endsWith("%") && ir(e.slice(0, -1));
}
function wo(e) {
  return ru(e) || $r(e, "number", ru);
}
function De(e) {
  return ep.test(e);
}
function _o() {
  return !0;
}
function Rn(e) {
  return jx.test(e);
}
function zx(e) {
  return $r(e, "", Hx);
}
function $r(e, t, n) {
  var r = ep.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Bx(e) {
  return Ix.test(e);
}
function tp() {
  return !1;
}
function Yx(e) {
  return e.startsWith("url(");
}
function ru(e) {
  return Number.isInteger(Number(e));
}
function Hx(e) {
  return Lx.test(e);
}
function Kx() {
  var e = Ke("colors"), t = Ke("spacing"), n = Ke("blur"), r = Ke("brightness"), o = Ke("borderColor"), a = Ke("borderRadius"), s = Ke("borderSpacing"), i = Ke("borderWidth"), c = Ke("contrast"), l = Ke("grayscale"), d = Ke("hueRotate"), u = Ke("invert"), p = Ke("gap"), m = Ke("gradientColorStops"), h = Ke("gradientColorStopPositions"), v = Ke("inset"), g = Ke("margin"), b = Ke("opacity"), y = Ke("padding"), $ = Ke("saturate"), _ = Ke("scale"), w = Ke("sepia"), P = Ke("skew"), k = Ke("space"), L = Ke("translate"), I = function() {
    return ["auto", "contain", "none"];
  }, ee = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, te = function() {
    return ["auto", De, t];
  }, K = function() {
    return [De, t];
  }, Z = function() {
    return ["", Ft];
  }, O = function() {
    return ["auto", ir, De];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, j = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, B = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, M = function() {
    return ["", "0", De];
  }, D = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, U = function() {
    return [ir, Aa];
  }, q = function() {
    return [ir, De];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [_o],
      spacing: [Ft],
      blur: ["none", "", Rn, De],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Rn, De],
      borderSpacing: K(),
      borderWidth: Z(),
      contrast: U(),
      grayscale: M(),
      hueRotate: q(),
      invert: M(),
      gap: K(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Wx, _c],
      inset: te(),
      margin: te(),
      opacity: U(),
      padding: K(),
      saturate: U(),
      scale: U(),
      sepia: M(),
      skew: q(),
      space: K(),
      translate: K()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", De]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Rn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": D()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": D()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(A(), [De])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", wo]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", De]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", wo]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_o]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wo]
        }, De]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [_o]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wo]
        }, De]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(B())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(B(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(B(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [k]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", De, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", De, Ft]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Rn]
        }, Rn, De]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [De, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", De, Ft]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [De, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Rn, _c]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Aa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_o]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", De]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ir, Aa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", De, Ft]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", De]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", De]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(j(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ft]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", De, Ft]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: K()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", De]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", De]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(A(), [Vx])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Fx]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ux]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(j(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(j())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [De, Ft]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ft]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ft]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Rn, zx]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_o]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": W()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Rn, De]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", De]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", De]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", De]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [wo, De]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", De]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", De]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": K()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": K()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": K()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": K()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": K()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": K()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": K()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": K()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": K()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": K()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": K()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": K()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": K()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": K()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": K()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": K()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": K()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": K()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", De]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ft, Aa]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Gx = /* @__PURE__ */ Dx(Kx);
function F(...e) {
  return Gx(qf(e));
}
const hl = ({ className: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: F(`spinner h-4 w-4 ${e}`) }), Mo = oo(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ve = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? nn : "button";
    return /* @__PURE__ */ f.exports.jsx(
      c,
      {
        className: F(Mo({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ f.exports.jsx(hl, {}) : a
      }
    );
  }
);
Ve.displayName = "Button";
var Zx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const qx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xx = (e, t) => {
  const n = R(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => x(
      "svg",
      {
        ref: l,
        ...Zx,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${qx(e)}`,
        ...c
      },
      [
        ...t.map(([d, u]) => x(d, u)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var at = Xx;
const Kt = at("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), Do = at("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), vl = at("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), ao = at("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), ou = at("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), Cc = at("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), Vs = at("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), ja = at("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]), Ia = at("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Us = at("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]), np = at("ImagePlus", [
  [
    "path",
    {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
      key: "31hg93"
    }
  ],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]), rp = at("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), op = at("PanelLeftClose", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]), Qx = at("PanelLeftOpen", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]), Jx = at("PanelLeft", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "21", key: "13tij5" }]
]), ap = at("PenSquare", [
  [
    "path",
    {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1qinfi"
    }
  ],
  [
    "path",
    { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }
  ]
]), gl = at("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), sp = at("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), e0 = at("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), Ws = at("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Oi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function Co(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var i = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[i];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
function So(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? n0(i, function(u) {
      return u.test(s);
    }) : t0(i, function(u) {
      return u.test(s);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var d = t.slice(s.length);
    return {
      value: l,
      rest: d
    };
  };
}
function t0(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function n0(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function r0(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var i = t.slice(o.length);
    return {
      value: s,
      rest: i
    };
  };
}
function Gr(e) {
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function lt(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ce(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Oe(e) {
  Ce(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Gr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function At(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function rn(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function o0(e, t) {
  Ce(2, arguments);
  var n = Oe(e).getTime(), r = lt(t);
  return new Date(n + r);
}
var a0 = {};
function Qn() {
  return a0;
}
function on(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), h = (m < u ? 7 : 0) + m - u;
  return p.setDate(p.getDate() - h), p.setHours(0, 0, 0, 0), p;
}
function fr(e) {
  return Ce(1, arguments), on(e, {
    weekStartsOn: 1
  });
}
function s0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = fr(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = fr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function i0(e) {
  Ce(1, arguments);
  var t = s0(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = fr(n);
  return r;
}
function Ro(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Zr(e) {
  Ce(1, arguments);
  var t = Oe(e);
  return t.setHours(0, 0, 0, 0), t;
}
var c0 = 864e5;
function yn(e, t) {
  Ce(2, arguments);
  var n = Zr(e), r = Zr(t), o = n.getTime() - Ro(n), a = r.getTime() - Ro(r);
  return Math.round((o - a) / c0);
}
function Sc(e, t) {
  Ce(2, arguments);
  var n = lt(t), r = n * 7;
  return At(e, r);
}
function l0(e, t) {
  Ce(2, arguments);
  var n = lt(t);
  return rn(e, n * 12);
}
function d0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Gr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Oe(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function u0(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Gr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Oe(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Et(e, t) {
  Ce(2, arguments);
  var n = Zr(e), r = Zr(t);
  return n.getTime() === r.getTime();
}
function bl(e) {
  return Ce(1, arguments), e instanceof Date || Gr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function f0(e) {
  if (Ce(1, arguments), !bl(e) && typeof e != "number")
    return !1;
  var t = Oe(e);
  return !isNaN(Number(t));
}
function Ao(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var p0 = 6048e5;
function m0(e, t, n) {
  Ce(2, arguments);
  var r = on(e, n), o = on(t, n), a = r.getTime() - Ro(r), s = o.getTime() - Ro(o);
  return Math.round((a - s) / p0);
}
function xl(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Pt(e) {
  Ce(1, arguments);
  var t = Oe(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function h0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function yl(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getDay(), h = (m < u ? -7 : 0) + 6 - (m - u);
  return p.setDate(p.getDate() + h), p.setHours(23, 59, 59, 999), p;
}
function ip(e) {
  return Ce(1, arguments), yl(e, {
    weekStartsOn: 1
  });
}
function v0(e, t) {
  Ce(2, arguments);
  var n = lt(t);
  return o0(e, -n);
}
var g0 = 864e5;
function b0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / g0) + 1;
}
function as(e) {
  Ce(1, arguments);
  var t = 1, n = Oe(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function cp(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = as(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = as(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function x0(e) {
  Ce(1, arguments);
  var t = cp(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = as(n);
  return r;
}
var y0 = 6048e5;
function $0(e) {
  Ce(1, arguments);
  var t = Oe(e), n = as(t).getTime() - x0(t).getTime();
  return Math.round(n / y0) + 1;
}
function ss(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = Oe(e), m = p.getUTCDay(), h = (m < u ? 7 : 0) + m - u;
  return p.setUTCDate(p.getUTCDate() - h), p.setUTCHours(0, 0, 0, 0), p;
}
function lp(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Oe(e), u = d.getUTCFullYear(), p = Qn(), m = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setUTCFullYear(u + 1, 0, m), h.setUTCHours(0, 0, 0, 0);
  var v = ss(h, t), g = new Date(0);
  g.setUTCFullYear(u, 0, m), g.setUTCHours(0, 0, 0, 0);
  var b = ss(g, t);
  return d.getTime() >= v.getTime() ? u + 1 : d.getTime() >= b.getTime() ? u : u - 1;
}
function w0(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = lp(e, t), m = new Date(0);
  m.setUTCFullYear(p, 0, u), m.setUTCHours(0, 0, 0, 0);
  var h = ss(m, t);
  return h;
}
var _0 = 6048e5;
function C0(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = ss(n, t).getTime() - w0(n, t).getTime();
  return Math.round(r / _0) + 1;
}
function We(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var S0 = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return We(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : We(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return We(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return We(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return We(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return We(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return We(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return We(a, n.length);
  }
};
const An = S0;
var Rr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, E0 = {
  // Era
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return An.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = lp(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return We(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : We(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = cp(t);
    return We(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return We(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return We(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return We(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return An.M(t, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return We(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, o) {
    var a = C0(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : We(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = $0(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : We(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : An.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = b0(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : We(o, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return We(s, 2);
      case "eo":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return We(s, n.length);
      case "co":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return We(a, n.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = Rr.noon : o === 0 ? a = Rr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = Rr.evening : o >= 12 ? a = Rr.afternoon : o >= 4 ? a = Rr.morning : a = Rr.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return An.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : An.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : We(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : We(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : An.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : An.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return An.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return su(s);
      case "XXXX":
      case "XX":
        return ar(s);
      case "XXXXX":
      case "XXX":
      default:
        return ar(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return su(s);
      case "xxxx":
      case "xx":
        return ar(s);
      case "xxxxx":
      case "xxx":
      default:
        return ar(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + au(s, ":");
      case "OOOO":
      default:
        return "GMT" + ar(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + au(s, ":");
      case "zzzz":
      default:
        return "GMT" + ar(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return We(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return We(s, n.length);
  }
};
function au(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + We(a, 2);
}
function su(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + We(Math.abs(e) / 60, 2);
  }
  return ar(e, t);
}
function ar(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = We(Math.floor(o / 60), 2), s = We(o % 60, 2);
  return r + a + n + s;
}
const N0 = E0;
var iu = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, dp = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, P0 = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return iu(t, n);
  var s;
  switch (o) {
    case "P":
      s = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      s = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      s = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      s = n.dateTime({
        width: "full"
      });
      break;
  }
  return s.replace("{{date}}", iu(o, n)).replace("{{time}}", dp(a, n));
}, T0 = {
  p: dp,
  P: P0
};
const k0 = T0;
var O0 = ["D", "DD"], M0 = ["YY", "YYYY"];
function D0(e) {
  return O0.indexOf(e) !== -1;
}
function R0(e) {
  return M0.indexOf(e) !== -1;
}
function cu(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var A0 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, j0 = function(t, n, r) {
  var o, a = A0[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const I0 = j0;
var L0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, F0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, V0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, U0 = {
  date: Oi({
    formats: L0,
    defaultWidth: "full"
  }),
  time: Oi({
    formats: F0,
    defaultWidth: "full"
  }),
  dateTime: Oi({
    formats: V0,
    defaultWidth: "full"
  })
};
const W0 = U0;
var z0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, B0 = function(t, n, r, o) {
  return z0[t];
};
const Y0 = B0;
var H0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, K0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, G0 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Z0 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, q0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, X0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Q0 = function(t, n) {
  var r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, J0 = {
  ordinalNumber: Q0,
  era: Co({
    values: H0,
    defaultWidth: "wide"
  }),
  quarter: Co({
    values: K0,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Co({
    values: G0,
    defaultWidth: "wide"
  }),
  day: Co({
    values: Z0,
    defaultWidth: "wide"
  }),
  dayPeriod: Co({
    values: q0,
    defaultWidth: "wide",
    formattingValues: X0,
    defaultFormattingWidth: "wide"
  })
};
const ey = J0;
var ty = /^(\d+)(th|st|nd|rd)?/i, ny = /\d+/i, ry = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, oy = {
  any: [/^b/i, /^(a|c)/i]
}, ay = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, sy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, iy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, cy = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ly = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, dy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, uy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, fy = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, py = {
  ordinalNumber: r0({
    matchPattern: ty,
    parsePattern: ny,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: So({
    matchPatterns: ry,
    defaultMatchWidth: "wide",
    parsePatterns: oy,
    defaultParseWidth: "any"
  }),
  quarter: So({
    matchPatterns: ay,
    defaultMatchWidth: "wide",
    parsePatterns: sy,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: So({
    matchPatterns: iy,
    defaultMatchWidth: "wide",
    parsePatterns: cy,
    defaultParseWidth: "any"
  }),
  day: So({
    matchPatterns: ly,
    defaultMatchWidth: "wide",
    parsePatterns: dy,
    defaultParseWidth: "any"
  }),
  dayPeriod: So({
    matchPatterns: uy,
    defaultMatchWidth: "any",
    parsePatterns: fy,
    defaultParseWidth: "any"
  })
};
const my = py;
var hy = {
  code: "en-US",
  formatDistance: I0,
  formatLong: W0,
  formatRelative: Y0,
  localize: ey,
  match: my,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const up = hy;
var vy = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gy = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, by = /^'([^]*?)'?$/, xy = /''/g, yy = /[a-zA-Z]/;
function wr(e, t, n) {
  var r, o, a, s, i, c, l, d, u, p, m, h, v, g, b, y, $, _;
  Ce(2, arguments);
  var w = String(t), P = Qn(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : P.locale) !== null && r !== void 0 ? r : up, L = lt((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && i !== void 0 ? i : P.firstWeekContainsDate) !== null && s !== void 0 ? s : (u = P.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(L >= 1 && L <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var I = lt((m = (h = (v = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (b = n.locale) === null || b === void 0 || (y = b.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && v !== void 0 ? v : P.weekStartsOn) !== null && h !== void 0 ? h : ($ = P.locale) === null || $ === void 0 || (_ = $.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(I >= 0 && I <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ee = Oe(e);
  if (!f0(ee))
    throw new RangeError("Invalid time value");
  var te = Ro(ee), K = v0(ee, te), Z = {
    firstWeekContainsDate: L,
    weekStartsOn: I,
    locale: k,
    _originalDate: ee
  }, O = w.match(gy).map(function(A) {
    var j = A[0];
    if (j === "p" || j === "P") {
      var W = k0[j];
      return W(A, k.formatLong);
    }
    return A;
  }).join("").match(vy).map(function(A) {
    if (A === "''")
      return "'";
    var j = A[0];
    if (j === "'")
      return $y(A);
    var W = N0[j];
    if (W)
      return !(n != null && n.useAdditionalWeekYearTokens) && R0(A) && cu(A, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && D0(A) && cu(A, t, String(e)), W(K, A, k.localize, Z);
    if (j.match(yy))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + j + "`");
    return A;
  }).join("");
  return O;
}
function $y(e) {
  var t = e.match(by);
  return t ? t[1].replace(xy, "'") : e;
}
function wy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var _y = 6048e5;
function Cy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = fr(t).getTime() - i0(t).getTime();
  return Math.round(n / _y) + 1;
}
function Sy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getTime();
  return n;
}
function Ey(e) {
  return Ce(1, arguments), Math.floor(Sy(e) / 1e3);
}
function Ny(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Oe(e), u = d.getFullYear(), p = Qn(), m = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var h = new Date(0);
  h.setFullYear(u + 1, 0, m), h.setHours(0, 0, 0, 0);
  var v = on(h, t), g = new Date(0);
  g.setFullYear(u, 0, m), g.setHours(0, 0, 0, 0);
  var b = on(g, t);
  return d.getTime() >= v.getTime() ? u + 1 : d.getTime() >= b.getTime() ? u : u - 1;
}
function Py(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var d = Qn(), u = lt((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : d.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = d.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), p = Ny(e, t), m = new Date(0);
  m.setFullYear(p, 0, u), m.setHours(0, 0, 0, 0);
  var h = on(m, t);
  return h;
}
var Ty = 6048e5;
function ky(e, t) {
  Ce(1, arguments);
  var n = Oe(e), r = on(n, t).getTime() - Py(n, t).getTime();
  return Math.round(r / Ty) + 1;
}
function Oy(e) {
  Ce(1, arguments);
  var t = Oe(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function My(e, t) {
  return Ce(1, arguments), m0(Oy(e), Pt(e), t) + 1;
}
function fp(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() > r.getTime();
}
function pp(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getTime() < r.getTime();
}
function $l(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function Dy(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = Oe(t);
  return n.getFullYear() === r.getFullYear();
}
function lu(e, t) {
  Ce(2, arguments);
  var n = lt(t);
  return At(e, -n);
}
function Mi(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = wy(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function du(e, t) {
  Ce(2, arguments);
  var n = Oe(e), r = lt(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var Se = function() {
  return Se = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function Ry(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function mp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function oa(e) {
  return e.mode === "multiple";
}
function aa(e) {
  return e.mode === "range";
}
function zs(e) {
  return e.mode === "single";
}
var Ay = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function jy(e, t) {
  return wr(e, "LLLL y", t);
}
function Iy(e, t) {
  return wr(e, "d", t);
}
function Ly(e, t) {
  return wr(e, "LLLL", t);
}
function Fy(e) {
  return "".concat(e);
}
function Vy(e, t) {
  return wr(e, "cccccc", t);
}
function Uy(e, t) {
  return wr(e, "yyyy", t);
}
var Wy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: jy,
  formatDay: Iy,
  formatMonthCaption: Ly,
  formatWeekNumber: Fy,
  formatWeekdayName: Vy,
  formatYearCaption: Uy
}), zy = function(e, t, n) {
  return wr(e, "do MMMM (EEEE)", n);
}, By = function() {
  return "Month: ";
}, Yy = function() {
  return "Go to next month";
}, Hy = function() {
  return "Go to previous month";
}, Ky = function(e, t) {
  return wr(e, "cccc", t);
}, Gy = function(e) {
  return "Week n. ".concat(e);
}, Zy = function() {
  return "Year: ";
}, qy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: zy,
  labelMonthDropdown: By,
  labelNext: Yy,
  labelPrevious: Hy,
  labelWeekNumber: Gy,
  labelWeekday: Ky,
  labelYearDropdown: Zy
});
function Xy() {
  var e = "buttons", t = Ay, n = up, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Wy,
    labels: qy,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function Qy(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Pt(r) : t && (a = new Date(t, 0, 1)), o ? s = xl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Zr(a) : void 0,
    toDate: s ? Zr(s) : void 0
  };
}
var hp = ct(void 0);
function Jy(e) {
  var t, n = e.initialProps, r = Xy(), o = Qy(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (zs(n) || oa(n) || aa(n)) && (c = n.onSelect);
  var l = Se(Se(Se({}, r), n), { captionLayout: i, classNames: Se(Se({}, r.classNames), n.classNames), components: Se({}, n.components), formatters: Se(Se({}, r.formatters), n.formatters), fromDate: a, labels: Se(Se({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Se(Se({}, r.modifiers), n.modifiers), modifiersClassNames: Se(Se({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Se(Se({}, r.styles), n.styles), toDate: s });
  return N.createElement(hp.Provider, { value: l }, e.children);
}
function Ge() {
  var e = He(hp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function vp(e) {
  var t = Ge(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return N.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function e1(e) {
  return N.createElement(
    "svg",
    Se({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    N.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function gp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = Ge(), d = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : e1;
  return N.createElement(
    "div",
    { className: i, style: c },
    N.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    N.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    N.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      N.createElement(d, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function t1(e) {
  var t, n = Ge(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return N.createElement(N.Fragment, null);
  if (!o)
    return N.createElement(N.Fragment, null);
  var u = [];
  if (Dy(r, o))
    for (var p = Pt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      u.push(Mi(p, m));
  else
    for (var p = Pt(new Date()), m = 0; m <= 11; m++)
      u.push(Mi(p, m));
  var h = function(g) {
    var b = Number(g.target.value), y = Mi(Pt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : gp;
  return N.createElement(v, { name: "months", "aria-label": d(), className: c.dropdown_month, style: a.dropdown_month, onChange: h, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, u.map(function(g) {
    return N.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function n1(e) {
  var t, n = e.displayMonth, r = Ge(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, d = r.formatters.formatYearCaption, u = r.labels.labelYearDropdown, p = [];
  if (!o)
    return N.createElement(N.Fragment, null);
  if (!a)
    return N.createElement(N.Fragment, null);
  for (var m = o.getFullYear(), h = a.getFullYear(), v = m; v <= h; v++)
    p.push(du(h0(new Date()), v));
  var g = function(y) {
    var $ = du(Pt(n), Number(y.target.value));
    e.onChange($);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : gp;
  return N.createElement(b, { name: "years", "aria-label": u(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: d(n, { locale: s }) }, p.map(function(y) {
    return N.createElement("option", { key: y.getFullYear(), value: y.getFullYear() }, d(y, { locale: s }));
  }));
}
function r1(e, t) {
  var n = Y(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function o1(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && Ao(a, o) < 0) {
    var l = -1 * (c - 1);
    o = rn(a, l);
  }
  return s && Ao(o, s) < 0 && (o = s), Pt(o);
}
function a1() {
  var e = Ge(), t = o1(e), n = r1(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Pt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function s1(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Pt(e), a = Pt(rn(o, r)), s = Ao(a, o), i = [], c = 0; c < s; c++) {
    var l = rn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function i1(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Pt(e);
    if (!n)
      return rn(i, s);
    var c = Ao(n, e);
    if (!(c < a))
      return rn(i, s);
  }
}
function c1(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Pt(e);
    if (!n)
      return rn(i, -s);
    var c = Ao(i, n);
    if (!(c <= 0))
      return rn(i, -s);
  }
}
var bp = ct(void 0);
function l1(e) {
  var t = Ge(), n = a1(), r = n[0], o = n[1], a = s1(r, t), s = i1(r, t), i = c1(r, t), c = function(u) {
    return a.some(function(p) {
      return $l(u, p);
    });
  }, l = function(u, p) {
    c(u) || (p && pp(u, p) ? o(rn(u, 1 + t.numberOfMonths * -1)) : o(u));
  }, d = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return N.createElement(bp.Provider, { value: d }, e.children);
}
function sa() {
  var e = He(bp);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function uu(e) {
  var t, n = Ge(), r = n.classNames, o = n.styles, a = n.components, s = sa().goToMonth, i = function(d) {
    s(d);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : vp, l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return N.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    N.createElement("div", { className: r.vhidden }, l),
    N.createElement(t1, { onChange: i, displayMonth: e.displayMonth }),
    N.createElement(n1, { onChange: i, displayMonth: e.displayMonth })
  );
}
function d1(e) {
  return N.createElement(
    "svg",
    Se({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function u1(e) {
  return N.createElement(
    "svg",
    Se({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var is = R(function(e, t) {
  var n = Ge(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Se(Se({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), N.createElement("button", Se({}, e, { ref: t, type: "button", className: s, style: i }));
});
function f1(e) {
  var t, n, r = Ge(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, d = c.labelNext, u = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return N.createElement(N.Fragment, null);
  var p = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), h = d(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = u == null ? void 0 : u.IconRight) !== null && t !== void 0 ? t : u1, b = (n = u == null ? void 0 : u.IconLeft) !== null && n !== void 0 ? n : d1;
  return N.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && N.createElement(is, { name: "previous-month", "aria-label": p, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? N.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(b, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && N.createElement(is, { name: "next-month", "aria-label": h, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? N.createElement(b, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function fu(e) {
  var t = Ge().numberOfMonths, n = sa(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(h) {
    return $l(e.displayMonth, h);
  }), c = i === 0, l = i === s.length - 1, d = t > 1 && (c || !l), u = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return N.createElement(f1, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: u, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function p1(e) {
  var t, n = Ge(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : vp, l;
  return o ? l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = N.createElement(uu, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = N.createElement(
    N.Fragment,
    null,
    N.createElement(uu, { displayMonth: e.displayMonth, id: e.id }),
    N.createElement(fu, { displayMonth: e.displayMonth, id: e.id })
  ) : l = N.createElement(
    N.Fragment,
    null,
    N.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    N.createElement(fu, { displayMonth: e.displayMonth, id: e.id })
  ), N.createElement("div", { className: r.caption, style: a.caption }, l);
}
function m1(e) {
  var t = Ge(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? N.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    N.createElement(
      "tr",
      null,
      N.createElement("td", { colSpan: 8 }, n)
    )
  ) : N.createElement(N.Fragment, null);
}
function h1(e, t, n) {
  for (var r = n ? fr(new Date()) : on(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = At(r, a);
    o.push(s);
  }
  return o;
}
function v1() {
  var e = Ge(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = h1(o, a, s);
  return N.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && N.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(d, u) {
      return N.createElement("th", { key: u, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }) }, i(d, { locale: o }));
    })
  );
}
function g1() {
  var e, t = Ge(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : v1;
  return N.createElement(
    "thead",
    { style: r.head, className: n.head },
    N.createElement(a, null)
  );
}
function b1(e) {
  var t = Ge(), n = t.locale, r = t.formatters.formatDay;
  return N.createElement(N.Fragment, null, r(e.date, { locale: n }));
}
var wl = ct(void 0);
function x1(e) {
  if (!oa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return N.createElement(wl.Provider, { value: t }, e.children);
  }
  return N.createElement(y1, { initialProps: e.initialProps, children: e.children });
}
function y1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, d, u) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, d, u);
    var h = Boolean(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!h) {
      var v = Boolean(!d.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? mp([], r, !0) : [];
        if (d.selected) {
          var b = g.findIndex(function(y) {
            return Et(l, y);
          });
          g.splice(b, 1);
        } else
          g.push(l);
        (m = t.onSelect) === null || m === void 0 || m.call(t, g, l, d, u);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var d = a && r.length > a - 1, u = r.some(function(p) {
      return Et(p, l);
    });
    return Boolean(d && !u);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return N.createElement(wl.Provider, { value: c }, n);
}
function _l() {
  var e = He(wl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function $1(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Et(r, e))
    return { from: r, to: e };
  if (!o && pp(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Et(o, e) && Et(r, e))) {
    if (Et(o, e))
      return { from: o, to: void 0 };
    if (!Et(r, e))
      return fp(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var Cl = ct(void 0);
function w1(e) {
  if (!aa(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return N.createElement(Cl.Provider, { value: t }, e.children);
  }
  return N.createElement(_1, { initialProps: e.initialProps, children: e.children });
}
function _1(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, h, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, h, v);
    var y = $1(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, m, h, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (d.range_start = [a], s ? (d.range_end = [s], Et(a, s) || (d.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : d.range_end = [a]), i && (a && !s && d.disabled.push({
    after: lu(a, i - 1),
    before: At(a, i - 1)
  }), a && s && d.disabled.push({
    after: a,
    before: At(a, i - 1)
  })), c && (a && !s && (d.disabled.push({
    before: At(a, -c + 1)
  }), d.disabled.push({
    after: At(a, c - 1)
  })), a && s)) {
    var u = yn(s, a) + 1, p = c - u;
    d.disabled.push({
      before: lu(a, p)
    }), d.disabled.push({
      after: At(s, p)
    });
  }
  return N.createElement(Cl.Provider, { value: { selected: r, onDayClick: l, modifiers: d } }, n);
}
function Sl() {
  var e = He(Cl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Qa(e) {
  return Array.isArray(e) ? mp([], e, !0) : e !== void 0 ? [e] : [];
}
function C1(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Qa(o);
  }), t;
}
var Gt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Gt || (Gt = {}));
var S1 = Gt.Selected, vn = Gt.Disabled, E1 = Gt.Hidden, N1 = Gt.Today, Di = Gt.RangeEnd, Ri = Gt.RangeMiddle, Ai = Gt.RangeStart, P1 = Gt.Outside;
function T1(e, t, n) {
  var r, o = (r = {}, r[S1] = Qa(e.selected), r[vn] = Qa(e.disabled), r[E1] = Qa(e.hidden), r[N1] = [e.today], r[Di] = [], r[Ri] = [], r[Ai] = [], r[P1] = [], r);
  return e.fromDate && o[vn].push({ before: e.fromDate }), e.toDate && o[vn].push({ after: e.toDate }), oa(e) ? o[vn] = o[vn].concat(t.modifiers[vn]) : aa(e) && (o[vn] = o[vn].concat(n.modifiers[vn]), o[Ai] = n.modifiers[Ai], o[Ri] = n.modifiers[Ri], o[Di] = n.modifiers[Di]), o;
}
var xp = ct(void 0);
function k1(e) {
  var t = Ge(), n = _l(), r = Sl(), o = T1(t, n, r), a = C1(t.modifiers), s = Se(Se({}, o), a);
  return N.createElement(xp.Provider, { value: s }, e.children);
}
function yp() {
  var e = He(xp);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function O1(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function M1(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function D1(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function R1(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function A1(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function j1(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Et(r, e))
    return !0;
  if (!o)
    return !1;
  var a = yn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = yn(e, r) >= 0 && yn(o, e) >= 0;
  return s;
}
function I1(e) {
  return bl(e);
}
function L1(e) {
  return Array.isArray(e) && e.every(bl);
}
function F1(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (I1(n))
      return Et(e, n);
    if (L1(n))
      return n.includes(e);
    if (M1(n))
      return j1(e, n);
    if (A1(n))
      return n.dayOfWeek.includes(e.getDay());
    if (O1(n)) {
      var r = yn(n.before, e), o = yn(n.after, e), a = r > 0, s = o < 0, i = fp(n.before, n.after);
      return i ? s && a : a || s;
    }
    return D1(n) ? yn(e, n.after) > 0 : R1(n) ? yn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function El(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return F1(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !$l(e, n) && (o.outside = !0), o;
}
function V1(e, t) {
  for (var n = Pt(e[0]), r = xl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = El(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = At(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = At(s, 1);
  }
  return a || o;
}
var U1 = 365;
function $p(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, d = o.toDate, u = o.locale, p = {
    day: At,
    week: Sc,
    month: rn,
    year: l0,
    startOfWeek: function(g) {
      return o.ISOWeek ? fr(g) : on(g, { locale: u, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? ip(g) : yl(g, { locale: u, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = d0([l, m]) : r === "after" && d && (m = u0([d, m]));
  var h = !0;
  if (a) {
    var v = El(m, a);
    h = !v.disabled && !v.hidden;
  }
  return h ? m : i.count > U1 ? i.lastFocused : $p(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Se(Se({}, i), { count: i.count + 1 })
  });
}
var wp = ct(void 0);
function W1(e) {
  var t = sa(), n = yp(), r = Y(), o = r[0], a = r[1], s = Y(), i = s[0], c = s[1], l = V1(t.displayMonths, n), d = o ?? (i && t.isDateDisplayed(i)) ? i : l, u = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, m = Ge(), h = function(g, b) {
    if (o) {
      var y = $p(o, {
        moveBy: g,
        direction: b,
        context: m,
        modifiers: n
      });
      Et(o, y) || (t.goToDate(y, o), p(y));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: u,
    focus: p,
    focusDayAfter: function() {
      return h("day", "after");
    },
    focusDayBefore: function() {
      return h("day", "before");
    },
    focusWeekAfter: function() {
      return h("week", "after");
    },
    focusWeekBefore: function() {
      return h("week", "before");
    },
    focusMonthBefore: function() {
      return h("month", "before");
    },
    focusMonthAfter: function() {
      return h("month", "after");
    },
    focusYearBefore: function() {
      return h("year", "before");
    },
    focusYearAfter: function() {
      return h("year", "after");
    },
    focusStartOfWeek: function() {
      return h("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return h("endOfWeek", "after");
    }
  };
  return N.createElement(wp.Provider, { value: v }, e.children);
}
function Nl() {
  var e = He(wp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function z1(e, t) {
  var n = yp(), r = El(e, n, t);
  return r;
}
var Pl = ct(void 0);
function B1(e) {
  if (!zs(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return N.createElement(Pl.Provider, { value: t }, e.children);
  }
  return N.createElement(Y1, { initialProps: e.initialProps, children: e.children });
}
function Y1(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, l, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, i);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return N.createElement(Pl.Provider, { value: o }, n);
}
function _p() {
  var e = He(Pl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function H1(e, t) {
  var n = Ge(), r = _p(), o = _l(), a = Sl(), s = Nl(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, d = s.focusWeekBefore, u = s.blur, p = s.focus, m = s.focusMonthBefore, h = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, $ = function(W) {
    var B, M, D, U;
    zs(n) ? (B = r.onDayClick) === null || B === void 0 || B.call(r, e, t, W) : oa(n) ? (M = o.onDayClick) === null || M === void 0 || M.call(o, e, t, W) : aa(n) ? (D = a.onDayClick) === null || D === void 0 || D.call(a, e, t, W) : (U = n.onDayClick) === null || U === void 0 || U.call(n, e, t, W);
  }, _ = function(W) {
    var B;
    p(e), (B = n.onDayFocus) === null || B === void 0 || B.call(n, e, t, W);
  }, w = function(W) {
    var B;
    u(), (B = n.onDayBlur) === null || B === void 0 || B.call(n, e, t, W);
  }, P = function(W) {
    var B;
    (B = n.onDayMouseEnter) === null || B === void 0 || B.call(n, e, t, W);
  }, k = function(W) {
    var B;
    (B = n.onDayMouseLeave) === null || B === void 0 || B.call(n, e, t, W);
  }, L = function(W) {
    var B;
    (B = n.onDayPointerEnter) === null || B === void 0 || B.call(n, e, t, W);
  }, I = function(W) {
    var B;
    (B = n.onDayPointerLeave) === null || B === void 0 || B.call(n, e, t, W);
  }, ee = function(W) {
    var B;
    (B = n.onDayTouchCancel) === null || B === void 0 || B.call(n, e, t, W);
  }, te = function(W) {
    var B;
    (B = n.onDayTouchEnd) === null || B === void 0 || B.call(n, e, t, W);
  }, K = function(W) {
    var B;
    (B = n.onDayTouchMove) === null || B === void 0 || B.call(n, e, t, W);
  }, Z = function(W) {
    var B;
    (B = n.onDayTouchStart) === null || B === void 0 || B.call(n, e, t, W);
  }, O = function(W) {
    var B;
    (B = n.onDayKeyUp) === null || B === void 0 || B.call(n, e, t, W);
  }, A = function(W) {
    var B;
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        W.preventDefault(), W.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        W.preventDefault(), W.stopPropagation(), l();
        break;
      case "ArrowUp":
        W.preventDefault(), W.stopPropagation(), d();
        break;
      case "PageUp":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? v() : m();
        break;
      case "PageDown":
        W.preventDefault(), W.stopPropagation(), W.shiftKey ? g() : h();
        break;
      case "Home":
        W.preventDefault(), W.stopPropagation(), b();
        break;
      case "End":
        W.preventDefault(), W.stopPropagation(), y();
        break;
    }
    (B = n.onDayKeyDown) === null || B === void 0 || B.call(n, e, t, W);
  }, j = {
    onClick: $,
    onFocus: _,
    onBlur: w,
    onKeyDown: A,
    onKeyUp: O,
    onMouseEnter: P,
    onMouseLeave: k,
    onPointerEnter: L,
    onPointerLeave: I,
    onTouchCancel: ee,
    onTouchEnd: te,
    onTouchMove: K,
    onTouchStart: Z
  };
  return j;
}
function K1() {
  var e = Ge(), t = _p(), n = _l(), r = Sl(), o = zs(e) ? t.selected : oa(e) ? n.selected : aa(e) ? r.selected : void 0;
  return o;
}
function G1(e) {
  return Object.values(Gt).includes(e);
}
function Z1(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (G1(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function q1(e, t) {
  var n = Se({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Se(Se({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function X1(e, t, n) {
  var r, o, a, s = Ge(), i = Nl(), c = z1(e, t), l = H1(e, c), d = K1(), u = Boolean(s.onDayClick || s.mode !== "default");
  G(function() {
    var P;
    c.outside || i.focusedDay && u && Et(i.focusedDay, e) && ((P = n.current) === null || P === void 0 || P.focus());
  }, [
    i.focusedDay,
    e,
    n,
    u,
    c.outside
  ]);
  var p = Z1(s, c).join(" "), m = q1(s, c), h = Boolean(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : b1, g = N.createElement(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: g,
    role: "gridcell"
  }, y = i.focusTarget && Et(i.focusTarget, e) && !c.outside, $ = i.focusedDay && Et(i.focusedDay, e), _ = Se(Se(Se({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = $ || y ? 0 : -1, r)), l), w = {
    isButton: u,
    isHidden: h,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function Q1(e) {
  var t = V(null), n = X1(e.date, e.displayMonth, t);
  return n.isHidden ? N.createElement("div", { role: "gridcell" }) : n.isButton ? N.createElement(is, Se({ name: "day", ref: t }, n.buttonProps)) : N.createElement("div", Se({}, n.divProps));
}
function J1(e) {
  var t = e.number, n = e.dates, r = Ge(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, d = l(Number(t), { locale: i });
  if (!o)
    return N.createElement("span", { className: s.weeknumber, style: a.weeknumber }, d);
  var u = c(Number(t), { locale: i }), p = function(m) {
    o(t, n, m);
  };
  return N.createElement(is, { name: "week-number", "aria-label": u, className: s.weeknumber, style: a.weeknumber, onClick: p }, d);
}
function e$(e) {
  var t, n, r = Ge(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : Q1, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : J1, d;
  return s && (d = N.createElement(
    "td",
    { className: a.cell, style: o.cell },
    N.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), N.createElement(
    "tr",
    { className: a.row, style: o.row },
    d,
    e.dates.map(function(u) {
      return N.createElement(
        "td",
        { className: a.cell, style: o.cell, key: Ey(u), role: "presentation" },
        N.createElement(c, { displayMonth: e.displayMonth, date: u })
      );
    })
  );
}
function pu(e, t, n) {
  for (var r = n != null && n.ISOWeek ? ip(t) : yl(t, n), o = n != null && n.ISOWeek ? fr(e) : on(e, n), a = yn(r, o), s = [], i = 0; i <= a; i++)
    s.push(At(o, i));
  var c = s.reduce(function(l, d) {
    var u = n != null && n.ISOWeek ? Cy(d) : ky(d, n), p = l.find(function(m) {
      return m.weekNumber === u;
    });
    return p ? (p.dates.push(d), l) : (l.push({
      weekNumber: u,
      dates: [d]
    }), l);
  }, []);
  return c;
}
function t$(e, t) {
  var n = pu(Pt(e), xl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = My(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Sc(a, 6 - r), i = pu(Sc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function n$(e) {
  var t, n, r, o = Ge(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, d = o.components, u = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, h = t$(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: u,
    firstWeekContainsDate: p
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : g1, g = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : e$, b = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : m1;
  return N.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && N.createElement(v, null),
    N.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, h.map(function(y) {
      return N.createElement(g, { displayMonth: e.displayMonth, key: y.weekNumber, dates: y.dates, weekNumber: y.weekNumber });
    })),
    N.createElement(b, { displayMonth: e.displayMonth })
  );
}
function r$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var o$ = r$() ? C.useLayoutEffect : C.useEffect, ji = !1, a$ = 0;
function mu() {
  return "react-day-picker-".concat(++a$);
}
function s$(e) {
  var t, n = e ?? (ji ? mu() : null), r = C.useState(n), o = r[0], a = r[1];
  return o$(function() {
    o === null && a(mu());
  }, []), C.useEffect(function() {
    ji === !1 && (ji = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function i$(e) {
  var t, n, r = Ge(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = sa().displayMonths, l = s$(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, u = [a.month], p = s.month, m = e.displayIndex === 0, h = e.displayIndex === c.length - 1, v = !m && !h;
  o === "rtl" && (t = [m, h], h = t[0], m = t[1]), m && (u.push(a.caption_start), p = Se(Se({}, p), s.caption_start)), h && (u.push(a.caption_end), p = Se(Se({}, p), s.caption_end)), v && (u.push(a.caption_between), p = Se(Se({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : p1;
  return N.createElement(
    "div",
    { key: e.displayIndex, className: u.join(" "), style: p },
    N.createElement(g, { id: l, displayMonth: e.displayMonth }),
    N.createElement(n$, { id: d, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function c$(e) {
  var t = e.initialProps, n = Ge(), r = Nl(), o = sa(), a = Y(!1), s = a[0], i = a[1];
  G(function() {
    n.initialFocus && r.focusTarget && (s || (r.focus(r.focusTarget), i(!0)));
  }, [
    n.initialFocus,
    s,
    r.focus,
    r.focusTarget,
    r
  ]);
  var c = [n.classNames.root, n.className];
  n.numberOfMonths > 1 && c.push(n.classNames.multiple_months), n.showWeekNumber && c.push(n.classNames.with_weeknumber);
  var l = Se(Se({}, n.styles.root), n.style), d = Object.keys(t).filter(function(u) {
    return u.startsWith("data-");
  }).reduce(function(u, p) {
    var m;
    return Se(Se({}, u), (m = {}, m[p] = t[p], m));
  }, {});
  return N.createElement(
    "div",
    Se({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, d),
    N.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(u, p) {
      return N.createElement(i$, { key: p, displayIndex: p, displayMonth: u });
    }))
  );
}
function l$(e) {
  var t = e.children, n = Ry(e, ["children"]);
  return N.createElement(
    Jy,
    { initialProps: n },
    N.createElement(
      l1,
      null,
      N.createElement(
        B1,
        { initialProps: n },
        N.createElement(
          x1,
          { initialProps: n },
          N.createElement(
            w1,
            { initialProps: n },
            N.createElement(
              k1,
              null,
              N.createElement(W1, null, t)
            )
          )
        )
      )
    )
  );
}
function d$(e) {
  return N.createElement(
    l$,
    Se({}, e),
    N.createElement(c$, { initialProps: e })
  );
}
function u$({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ f.exports.jsx(
    d$,
    {
      showOutsideDays: n,
      className: F("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: F(
          Mo({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: F(
          Mo({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(vl, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ f.exports.jsx(ao, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
u$.displayName = "Calendar";
function f$(e, t) {
  const n = /* @__PURE__ */ ct(t);
  function r(a) {
    const { children: s, ...i } = a, c = yt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ x(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = He(n);
    if (s)
      return s;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function Ze(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ct(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: p, children: m, ...h } = u, v = (p == null ? void 0 : p[e][c]) || i, g = yt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function d(u, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = He(m);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      d
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ ct(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return yt(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    p$(o, ...t)
  ];
}
function p$(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const u = c(a)[`__scope${l}`];
        return {
          ...i,
          ...u
        };
      }, {});
      return yt(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ze(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), yt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const pt = Boolean(globalThis == null ? void 0 : globalThis.document) ? Is : () => {
}, m$ = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ie = m$.reduce((e, t) => {
  const n = /* @__PURE__ */ R((r, o) => {
    const { asChild: a, ...s } = r, i = a ? nn : t;
    return G(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, S({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function cs(e, t) {
  e && Fs(
    () => e.dispatchEvent(t)
  );
}
const Cp = "Avatar", [h$, bO] = Ze(Cp), [v$, Sp] = h$(Cp), g$ = /* @__PURE__ */ R((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = Y("idle");
  return /* @__PURE__ */ x(v$, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ x(ie.span, S({}, r, {
    ref: t
  })));
}), b$ = "AvatarImage", x$ = /* @__PURE__ */ R((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = Sp(b$, n), i = w$(r), c = ze((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return pt(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ x(ie.img, S({}, a, {
    ref: t,
    src: r
  })) : null;
}), y$ = "AvatarFallback", $$ = /* @__PURE__ */ R((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Sp(y$, n), [s, i] = Y(r === void 0);
  return G(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ x(ie.span, S({}, o, {
    ref: t
  })) : null;
});
function w$(e) {
  const [t, n] = Y("idle");
  return G(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (s) => () => {
      r && n(s);
    };
    return n("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [
    e
  ]), t;
}
const Ep = g$, Np = x$, Pp = $$, _r = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ep,
  {
    ref: n,
    className: F(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
_r.displayName = Ep.displayName;
const Wn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Np,
  {
    ref: n,
    className: F("aspect-square h-full w-full", e),
    ...t
  }
));
Wn.displayName = Np.displayName;
const Cr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Pp,
  {
    ref: n,
    className: F(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Cr.displayName = Pp.displayName;
const _$ = oo(
  "inline-flex select-none justify-center items-center border rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: (
          // 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
          "bg-primary border-transparent text-primary-foreground"
        ),
        secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        red: "bg-red-200 border-2 border-red-600 text-red-600",
        success: "bg-green-100 border-2 border-green-500 text-green-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ht({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f.exports.jsx("div", { className: F(_$({ variant: t }), e), ...n });
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Jn(e) {
  const t = e + "CollectionProvider", [n, r] = Ze(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: h, children: v } = m, g = N.useRef(null), b = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ N.createElement(o, {
      scope: h,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ N.forwardRef((m, h) => {
    const { scope: v, children: g } = m, b = a(i, v), y = we(h, b.collectionRef);
    return /* @__PURE__ */ N.createElement(nn, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", d = "data-radix-collection-item", u = /* @__PURE__ */ N.forwardRef((m, h) => {
    const { scope: v, children: g, ...b } = m, y = N.useRef(null), $ = we(h, y), _ = a(l, v);
    return N.useEffect(() => (_.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void _.itemMap.delete(y))), /* @__PURE__ */ N.createElement(nn, {
      [d]: "",
      ref: $
    }, g);
  });
  function p(m) {
    const h = a(e + "CollectionConsumer", m);
    return N.useCallback(() => {
      const g = h.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${d}]`));
      return Array.from(h.itemMap.values()).sort(
        (_, w) => b.indexOf(_.ref.current) - b.indexOf(w.ref.current)
      );
    }, [
      h.collectionRef,
      h.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: c,
      ItemSlot: u
    },
    p,
    r
  ];
}
const C$ = /* @__PURE__ */ ct(void 0);
function dn(e) {
  const t = He(C$);
  return e || t || "ltr";
}
function S$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e);
  G(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Ec = "dismissableLayer.update", E$ = "dismissableLayer.pointerDownOutside", N$ = "dismissableLayer.focusOutside";
let hu;
const P$ = /* @__PURE__ */ ct({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Sr = /* @__PURE__ */ R((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, d = He(P$), [u, p] = Y(null), m = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = Y({}), v = we(
    t,
    (L) => p(L)
  ), g = Array.from(d.layers), [b] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), $ = u ? g.indexOf(u) : -1, _ = d.layersWithOutsidePointerEventsDisabled.size > 0, w = $ >= y, P = T$((L) => {
    const I = L.target, ee = [
      ...d.branches
    ].some(
      (te) => te.contains(I)
    );
    !w || ee || (a == null || a(L), i == null || i(L), L.defaultPrevented || c == null || c());
  }, m), k = k$((L) => {
    const I = L.target;
    [
      ...d.branches
    ].some(
      (te) => te.contains(I)
    ) || (s == null || s(L), i == null || i(L), L.defaultPrevented || c == null || c());
  }, m);
  return S$((L) => {
    $ === d.layers.size - 1 && (o == null || o(L), !L.defaultPrevented && c && (L.preventDefault(), c()));
  }, m), G(() => {
    if (u)
      return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (hu = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), vu(), () => {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = hu);
      };
  }, [
    u,
    m,
    r,
    d
  ]), G(() => () => {
    u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), vu());
  }, [
    u,
    d
  ]), G(() => {
    const L = () => h({});
    return document.addEventListener(Ec, L), () => document.removeEventListener(Ec, L);
  }, []), /* @__PURE__ */ x(ie.div, S({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: H(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: H(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: H(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function T$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = V(!1), o = V(() => {
  });
  return G(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Tp(E$, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      }
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function k$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = V(!1);
  return G(() => {
    const o = (a) => {
      a.target && !r.current && Tp(N$, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function vu() {
  const e = new CustomEvent(Ec);
  document.dispatchEvent(e);
}
function Tp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? cs(o, a) : o.dispatchEvent(a);
}
let Ii = 0;
function Bs() {
  G(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : gu()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : gu()), Ii++, () => {
      Ii === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Ii--;
    };
  }, []);
}
function gu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Li = "focusScope.autoFocusOnMount", Fi = "focusScope.autoFocusOnUnmount", bu = {
  bubbles: !1,
  cancelable: !0
}, Ys = /* @__PURE__ */ R((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Y(null), l = ze(o), d = ze(a), u = V(null), p = we(
    t,
    (v) => c(v)
  ), m = V({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  G(() => {
    if (r) {
      let v = function($) {
        if (m.paused || !i)
          return;
        const _ = $.target;
        i.contains(_) ? u.current = _ : In(u.current, {
          select: !0
        });
      }, g = function($) {
        if (m.paused || !i)
          return;
        const _ = $.relatedTarget;
        _ !== null && (i.contains(_) || In(u.current, {
          select: !0
        }));
      }, b = function($) {
        const _ = document.activeElement;
        for (const w of $)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || In(i));
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const y = new MutationObserver(b);
      return i && y.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), G(() => {
    if (i) {
      yu.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Li, bu);
        i.addEventListener(Li, l), i.dispatchEvent(b), b.defaultPrevented || (O$(j$(kp(i)), {
          select: !0
        }), document.activeElement === v && In(i));
      }
      return () => {
        i.removeEventListener(Li, l), setTimeout(() => {
          const b = new CustomEvent(Fi, bu);
          i.addEventListener(Fi, d), i.dispatchEvent(b), b.defaultPrevented || In(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Fi, d), yu.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    d,
    m
  ]);
  const h = ue((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = M$(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && In($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && In(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(ie.div, S({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function O$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (In(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function M$(e) {
  const t = kp(e), n = xu(t, e), r = xu(t.reverse(), e);
  return [
    n,
    r
  ];
}
function kp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function xu(e, t) {
  for (const n of e)
    if (!D$(n, {
      upTo: t
    }))
      return n;
}
function D$(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function R$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function In(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && R$(e) && t && e.select();
  }
}
const yu = A$();
function A$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = $u(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = $u(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function $u(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function j$(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const I$ = C["useId".toString()] || (() => {
});
let L$ = 0;
function rt(e) {
  const [t, n] = C.useState(I$());
  return pt(() => {
    e || n(
      (r) => r ?? String(L$++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const F$ = ["top", "right", "bottom", "left"], zn = Math.min, kt = Math.max, ls = Math.round, La = Math.floor, Bn = (e) => ({
  x: e,
  y: e
}), V$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, U$ = {
  start: "end",
  end: "start"
};
function Nc(e, t, n) {
  return kt(e, zn(t, n));
}
function _n(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cn(e) {
  return e.split("-")[0];
}
function so(e) {
  return e.split("-")[1];
}
function Tl(e) {
  return e === "x" ? "y" : "x";
}
function kl(e) {
  return e === "y" ? "height" : "width";
}
function io(e) {
  return ["top", "bottom"].includes(Cn(e)) ? "y" : "x";
}
function Ol(e) {
  return Tl(io(e));
}
function W$(e, t, n) {
  n === void 0 && (n = !1);
  const r = so(e), o = Ol(e), a = kl(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = ds(s)), [s, ds(s)];
}
function z$(e) {
  const t = ds(e);
  return [Pc(e), t, Pc(t)];
}
function Pc(e) {
  return e.replace(/start|end/g, (t) => U$[t]);
}
function B$(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Y$(e, t, n, r) {
  const o = so(e);
  let a = B$(Cn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Pc)))), a;
}
function ds(e) {
  return e.replace(/left|right|bottom|top/g, (t) => V$[t]);
}
function H$(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Op(e) {
  return typeof e != "number" ? H$(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function us(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function wu(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = io(t), s = Ol(t), i = kl(s), c = Cn(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (so(t)) {
    case "start":
      m[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += p * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const K$ = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: u
  } = wu(l, r, c), p = r, m = {}, h = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x: y,
      y: $,
      data: _,
      reset: w
    } = await b({
      x: d,
      y: u,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (d = y ?? d, u = $ ?? u, m = {
      ...m,
      [g]: {
        ...m[g],
        ..._
      }
    }, w && h <= 50) {
      h++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : w.rects), {
        x: d,
        y: u
      } = wu(l, p, c)), v = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: o,
    middlewareData: m
  };
};
async function jo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = _n(t, e), h = Op(m), g = i[p ? u === "floating" ? "reference" : "floating" : u], b = us(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: c
  })), y = u === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement($)) ? await (a.getScale == null ? void 0 : a.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = us(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: y,
    offsetParent: $,
    strategy: c
  }) : y);
  return {
    top: (b.top - w.top + h.top) / _.y,
    bottom: (w.bottom - b.bottom + h.bottom) / _.y,
    left: (b.left - w.left + h.left) / _.x,
    right: (w.right - b.right + h.right) / _.x
  };
}
const _u = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i
    } = t, {
      element: c,
      padding: l = 0
    } = _n(e, t) || {};
    if (c == null)
      return {};
    const d = Op(l), u = {
      x: n,
      y: r
    }, p = Ol(o), m = kl(p), h = await s.getDimensions(c), v = p === "y", g = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", $ = a.reference[m] + a.reference[p] - u[p] - a.floating[m], _ = u[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let P = w ? w[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(w))) && (P = i.floating[y] || a.floating[m]);
    const k = $ / 2 - _ / 2, L = P / 2 - h[m] / 2 - 1, I = zn(d[g], L), ee = zn(d[b], L), te = I, K = P - h[m] - ee, Z = P / 2 - h[m] / 2 + k, O = Nc(te, Z, K), j = so(o) != null && Z != O && a.reference[m] / 2 - (Z < te ? I : ee) - h[m] / 2 < 0 ? Z < te ? te - Z : K - Z : 0;
    return {
      [p]: u[p] - j,
      data: {
        [p]: O,
        centerOffset: Z - O + j
      }
    };
  }
}), G$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: a,
        initialPlacement: s,
        platform: i,
        elements: c
      } = t, {
        mainAxis: l = !0,
        crossAxis: d = !0,
        fallbackPlacements: u,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...v
      } = _n(e, t), g = Cn(r), b = Cn(s) === s, y = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), $ = u || (b || !h ? [ds(s)] : z$(s));
      !u && m !== "none" && $.push(...Y$(s, h, m, y));
      const _ = [s, ...$], w = await jo(t, v), P = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && P.push(w[g]), d) {
        const te = W$(r, a, y);
        P.push(w[te[0]], w[te[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: P
      }], !P.every((te) => te <= 0)) {
        var L, I;
        const te = (((L = o.flip) == null ? void 0 : L.index) || 0) + 1, K = _[te];
        if (K)
          return {
            data: {
              index: te,
              overflows: k
            },
            reset: {
              placement: K
            }
          };
        let Z = (I = k.filter((O) => O.overflows[0] <= 0).sort((O, A) => O.overflows[1] - A.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!Z)
          switch (p) {
            case "bestFit": {
              var ee;
              const O = (ee = k.map((A) => [A.placement, A.overflows.filter((j) => j > 0).reduce((j, W) => j + W, 0)]).sort((A, j) => A[1] - j[1])[0]) == null ? void 0 : ee[0];
              O && (Z = O);
              break;
            }
            case "initialPlacement":
              Z = s;
              break;
          }
        if (r !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
function Cu(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Su(e) {
  return F$.some((t) => e[t] >= 0);
}
const Z$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = _n(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await jo(t, {
            ...o,
            elementContext: "reference"
          }), s = Cu(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Su(s)
            }
          };
        }
        case "escaped": {
          const a = await jo(t, {
            ...o,
            altBoundary: !0
          }), s = Cu(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Su(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function q$(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Cn(n), i = so(n), c = io(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, d = a && c ? -1 : 1, u = _n(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return i && typeof h == "number" && (m = i === "end" ? h * -1 : h), c ? {
    x: m * d,
    y: p * l
  } : {
    x: p * l,
    y: m * d
  };
}
const X$ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await q$(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Q$ = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x: b,
              y
            } = g;
            return {
              x: b,
              y
            };
          }
        },
        ...c
      } = _n(e, t), l = {
        x: n,
        y: r
      }, d = await jo(t, c), u = io(Cn(o)), p = Tl(u);
      let m = l[p], h = l[u];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = m + d[g], $ = m - d[b];
        m = Nc(y, m, $);
      }
      if (s) {
        const g = u === "y" ? "top" : "left", b = u === "y" ? "bottom" : "right", y = h + d[g], $ = h - d[b];
        h = Nc(y, h, $);
      }
      const v = i.fn({
        ...t,
        [p]: m,
        [u]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, J$ = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = _n(e, t), d = {
        x: n,
        y: r
      }, u = io(o), p = Tl(u);
      let m = d[p], h = d[u];
      const v = _n(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const $ = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[$] + g.mainAxis, w = a.reference[p] + a.reference[$] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var b, y;
        const $ = p === "y" ? "width" : "height", _ = ["top", "left"].includes(Cn(o)), w = a.reference[u] - a.floating[$] + (_ && ((b = s.offset) == null ? void 0 : b[u]) || 0) + (_ ? 0 : g.crossAxis), P = a.reference[u] + a.reference[$] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[u]) || 0) - (_ ? g.crossAxis : 0);
        h < w ? h = w : h > P && (h = P);
      }
      return {
        [p]: m,
        [u]: h
      };
    }
  };
}, ew = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = _n(e, t), c = await jo(t, i), l = Cn(n), d = so(n), u = io(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let h, v;
      l === "top" || l === "bottom" ? (h = l, v = d === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = l, h = d === "end" ? "top" : "bottom");
      const g = m - c[h], b = p - c[v], y = !t.middlewareData.shift;
      let $ = g, _ = b;
      if (u) {
        const P = p - c.left - c.right;
        _ = d || y ? zn(b, P) : P;
      } else {
        const P = m - c.top - c.bottom;
        $ = d || y ? zn(g, P) : P;
      }
      if (y && !d) {
        const P = kt(c.left, 0), k = kt(c.right, 0), L = kt(c.top, 0), I = kt(c.bottom, 0);
        u ? _ = p - 2 * (P !== 0 || k !== 0 ? P + k : kt(c.left, c.right)) : $ = m - 2 * (L !== 0 || I !== 0 ? L + I : kt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: $
      });
      const w = await o.getDimensions(a.floating);
      return p !== w.width || m !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Yn(e) {
  return Mp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kn(e) {
  var t;
  return (t = (Mp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mp(e) {
  return e instanceof Node || e instanceof Ot(e).Node;
}
function Sn(e) {
  return e instanceof Element || e instanceof Ot(e).Element;
}
function an(e) {
  return e instanceof HTMLElement || e instanceof Ot(e).HTMLElement;
}
function Eu(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ot(e).ShadowRoot;
}
function ia(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function tw(e) {
  return ["table", "td", "th"].includes(Yn(e));
}
function Ml(e) {
  const t = Dl(), n = It(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function nw(e) {
  let t = qr(e);
  for (; an(t) && !Hs(t); ) {
    if (Ml(t))
      return t;
    t = qr(t);
  }
  return null;
}
function Dl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Hs(e) {
  return ["html", "body", "#document"].includes(Yn(e));
}
function It(e) {
  return Ot(e).getComputedStyle(e);
}
function Ks(e) {
  return Sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function qr(e) {
  if (Yn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Eu(e) && e.host || // Fallback.
    kn(e)
  );
  return Eu(t) ? t.host : t;
}
function Dp(e) {
  const t = qr(e);
  return Hs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : an(t) && ia(t) ? t : Dp(t);
}
function fs(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Dp(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ot(r);
  return o ? t.concat(a, a.visualViewport || [], ia(r) ? r : []) : t.concat(r, fs(r));
}
function Rp(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = an(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = ls(n) !== a || ls(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Rl(e) {
  return Sn(e) ? e : e.contextElement;
}
function Br(e) {
  const t = Rl(e);
  if (!an(t))
    return Bn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Rp(t);
  let s = (a ? ls(n.width) : n.width) / r, i = (a ? ls(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const rw = /* @__PURE__ */ Bn(0);
function Ap(e) {
  const t = Ot(e);
  return !Dl() || !t.visualViewport ? rw : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ow(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ot(e) ? !1 : t;
}
function pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Rl(e);
  let s = Bn(1);
  t && (r ? Sn(r) && (s = Br(r)) : s = Br(e));
  const i = ow(a, n, r) ? Ap(a) : Bn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (a) {
    const p = Ot(a), m = r && Sn(r) ? Ot(r) : r;
    let h = p.frameElement;
    for (; h && r && m !== p; ) {
      const v = Br(h), g = h.getBoundingClientRect(), b = It(h), y = g.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, $ = g.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      c *= v.x, l *= v.y, d *= v.x, u *= v.y, c += y, l += $, h = Ot(h).frameElement;
    }
  }
  return us({
    width: d,
    height: u,
    x: c,
    y: l
  });
}
function aw(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = an(n), a = kn(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Bn(1);
  const c = Bn(0);
  if ((o || !o && r !== "fixed") && ((Yn(n) !== "body" || ia(a)) && (s = Ks(n)), an(n))) {
    const l = pr(n);
    i = Br(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function sw(e) {
  return Array.from(e.getClientRects());
}
function jp(e) {
  return pr(kn(e)).left + Ks(e).scrollLeft;
}
function iw(e) {
  const t = kn(e), n = Ks(e), r = e.ownerDocument.body, o = kt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = kt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + jp(e);
  const i = -n.scrollTop;
  return It(r).direction === "rtl" && (s += kt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function cw(e, t) {
  const n = Ot(e), r = kn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Dl();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function lw(e, t) {
  const n = pr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = an(e) ? Br(e) : Bn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Nu(e, t, n) {
  let r;
  if (t === "viewport")
    r = cw(e, n);
  else if (t === "document")
    r = iw(kn(e));
  else if (Sn(t))
    r = lw(t, n);
  else {
    const o = Ap(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return us(r);
}
function Ip(e, t) {
  const n = qr(e);
  return n === t || !Sn(n) || Hs(n) ? !1 : It(n).position === "fixed" || Ip(n, t);
}
function dw(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fs(e).filter((i) => Sn(i) && Yn(i) !== "body"), o = null;
  const a = It(e).position === "fixed";
  let s = a ? qr(e) : e;
  for (; Sn(s) && !Hs(s); ) {
    const i = It(s), c = Ml(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ia(s) && !c && Ip(e, s)) ? r = r.filter((d) => d !== s) : o = i, s = qr(s);
  }
  return t.set(e, r), r;
}
function uw(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? dw(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, d) => {
    const u = Nu(t, d, o);
    return l.top = kt(u.top, l.top), l.right = zn(u.right, l.right), l.bottom = zn(u.bottom, l.bottom), l.left = kt(u.left, l.left), l;
  }, Nu(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function fw(e) {
  return Rp(e);
}
function pw(e, t, n) {
  const r = an(t), o = kn(t), a = n === "fixed", s = pr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Bn(0);
  if (r || !r && !a)
    if ((Yn(t) !== "body" || ia(o)) && (i = Ks(t)), r) {
      const l = pr(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = jp(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Pu(e, t) {
  return !an(e) || It(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Lp(e, t) {
  const n = Ot(e);
  if (!an(e))
    return n;
  let r = Pu(e, t);
  for (; r && tw(r) && It(r).position === "static"; )
    r = Pu(r, t);
  return r && (Yn(r) === "html" || Yn(r) === "body" && It(r).position === "static" && !Ml(r)) ? n : r || nw(e) || n;
}
const mw = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Lp, a = this.getDimensions;
  return {
    reference: pw(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function hw(e) {
  return It(e).direction === "rtl";
}
const vw = {
  convertOffsetParentRelativeRectToViewportRelativeRect: aw,
  getDocumentElement: kn,
  getClippingRect: uw,
  getOffsetParent: Lp,
  getElementRects: mw,
  getClientRects: sw,
  getDimensions: fw,
  getScale: Br,
  isElement: Sn,
  isRTL: hw
};
function gw(e, t) {
  let n = null, r;
  const o = kn(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: d,
      width: u,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !u || !p)
      return;
    const m = La(d), h = La(o.clientWidth - (l + u)), v = La(o.clientHeight - (d + p)), g = La(l), y = {
      rootMargin: -m + "px " + -h + "px " + -v + "px " + -g + "px",
      threshold: kt(0, zn(1, c)) || 1
    };
    let $ = !0;
    function _(w) {
      const P = w[0].intersectionRatio;
      if (P !== c) {
        if (!$)
          return s();
        P ? s(!1, P) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      $ = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, y);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function bw(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Rl(e), d = o || a ? [...l ? fs(l) : [], ...fs(t)] : [];
  d.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const u = l && i ? gw(l, n) : null;
  let p = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let h, v = c ? pr(e) : null;
  c && g();
  function g() {
    const b = pr(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, h = requestAnimationFrame(g);
  }
  return n(), () => {
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), u && u(), m && m.disconnect(), m = null, c && cancelAnimationFrame(h);
  };
}
const xw = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: vw,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return K$(e, t, {
    ...o,
    platform: a
  });
}, yw = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? _u({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? _u({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Ja = typeof document < "u" ? Is : G;
function ps(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!ps(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !ps(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tu(e, t) {
  const n = Fp(e);
  return Math.round(t * n) / n;
}
function ku(e) {
  const t = C.useRef(e);
  return Ja(() => {
    t.current = e;
  }), t;
}
function $w(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [d, u] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = C.useState(r);
  ps(p, r) || m(r);
  const [h, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((j) => {
    j != P.current && (P.current = j, v(j));
  }, [v]), $ = C.useCallback((j) => {
    j !== k.current && (k.current = j, b(j));
  }, [b]), _ = a || h, w = s || g, P = C.useRef(null), k = C.useRef(null), L = C.useRef(d), I = ku(c), ee = ku(o), te = C.useCallback(() => {
    if (!P.current || !k.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: p
    };
    ee.current && (j.platform = ee.current), xw(P.current, k.current, j).then((W) => {
      const B = {
        ...W,
        isPositioned: !0
      };
      K.current && !ps(L.current, B) && (L.current = B, mx.flushSync(() => {
        u(B);
      }));
    });
  }, [p, t, n, ee]);
  Ja(() => {
    l === !1 && L.current.isPositioned && (L.current.isPositioned = !1, u((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [l]);
  const K = C.useRef(!1);
  Ja(() => (K.current = !0, () => {
    K.current = !1;
  }), []), Ja(() => {
    if (_ && (P.current = _), w && (k.current = w), _ && w) {
      if (I.current)
        return I.current(_, w, te);
      te();
    }
  }, [_, w, te, I]);
  const Z = C.useMemo(() => ({
    reference: P,
    floating: k,
    setReference: y,
    setFloating: $
  }), [y, $]), O = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), A = C.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return j;
    const W = Tu(O.floating, d.x), B = Tu(O.floating, d.y);
    return i ? {
      ...j,
      transform: "translate(" + W + "px, " + B + "px)",
      ...Fp(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: B
    };
  }, [n, i, O.floating, d.x, d.y]);
  return C.useMemo(() => ({
    ...d,
    update: te,
    refs: Z,
    elements: O,
    floatingStyles: A
  }), [d, te, Z, O, A]);
}
function ca(e) {
  const [t, n] = Y(void 0);
  return pt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, i = l.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({
          width: s,
          height: i
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const Vp = "Popper", [Up, un] = Ze(Vp), [ww, Wp] = Up(Vp), _w = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = Y(null);
  return /* @__PURE__ */ x(ww, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, Cw = "PopperAnchor", Sw = /* @__PURE__ */ R((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Wp(Cw, n), s = V(null), i = we(t, s);
  return G(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ x(ie.div, S({}, o, {
    ref: i
  }));
}), zp = "PopperContent", [Ew, xO] = Up(zp), Nw = /* @__PURE__ */ R((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: d, side: u = "bottom", sideOffset: p = 0, align: m = "center", alignOffset: h = 0, arrowPadding: v = 0, collisionBoundary: g = [], collisionPadding: b = 0, sticky: y = "partial", hideWhenDetached: $ = !1, avoidCollisions: _ = !0, onPlaced: w, ...P } = e, k = Wp(zp, d), [L, I] = Y(null), ee = we(
    t,
    (Ue) => I(Ue)
  ), [te, K] = Y(null), Z = ca(te), O = (n = Z == null ? void 0 : Z.width) !== null && n !== void 0 ? n : 0, A = (r = Z == null ? void 0 : Z.height) !== null && r !== void 0 ? r : 0, j = u + (m !== "center" ? "-" + m : ""), W = typeof b == "number" ? b : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...b
  }, B = Array.isArray(g) ? g : [
    g
  ], M = B.length > 0, D = {
    padding: W,
    boundary: B.filter(Pw),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: M
  }, { refs: U, floatingStyles: q, placement: oe, isPositioned: ce, middlewareData: ye } = $w({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: j,
    whileElementsMounted: bw,
    elements: {
      reference: k.anchor
    },
    middleware: [
      X$({
        mainAxis: p + A,
        alignmentAxis: h
      }),
      _ && Q$({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? J$() : void 0,
        ...D
      }),
      _ && G$({
        ...D
      }),
      ew({
        ...D,
        apply: ({ elements: Ue, rects: dt, availableWidth: T, availableHeight: z }) => {
          const { width: X, height: xe } = dt.reference, de = Ue.floating.style;
          de.setProperty("--radix-popper-available-width", `${T}px`), de.setProperty("--radix-popper-available-height", `${z}px`), de.setProperty("--radix-popper-anchor-width", `${X}px`), de.setProperty("--radix-popper-anchor-height", `${xe}px`);
        }
      }),
      te && yw({
        element: te,
        padding: v
      }),
      Tw({
        arrowWidth: O,
        arrowHeight: A
      }),
      $ && Z$({
        strategy: "referenceHidden"
      })
    ]
  }), [be, ne] = Bp(oe), le = ze(w);
  pt(() => {
    ce && (le == null || le());
  }, [
    ce,
    le
  ]);
  const he = (o = ye.arrow) === null || o === void 0 ? void 0 : o.x, J = (a = ye.arrow) === null || a === void 0 ? void 0 : a.y, ve = ((s = ye.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [Q, Re] = Y();
  return pt(() => {
    L && Re(window.getComputedStyle(L).zIndex);
  }, [
    L
  ]), /* @__PURE__ */ x("div", {
    ref: U.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...q,
      transform: ce ? q.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Q,
      ["--radix-popper-transform-origin"]: [
        (i = ye.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ye.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ x(Ew, {
    scope: d,
    placedSide: be,
    onArrowChange: K,
    arrowX: he,
    arrowY: J,
    shouldHideArrow: ve
  }, /* @__PURE__ */ x(ie.div, S({
    "data-side": be,
    "data-align": ne
  }, P, {
    ref: ee,
    style: {
      ...P.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ce ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ye.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function Pw(e) {
  return e !== null;
}
const Tw = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = u ? 0 : e.arrowWidth, m = u ? 0 : e.arrowHeight, [h, v] = Bp(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let $ = "", _ = "";
    return h === "bottom" ? ($ = u ? g : `${b}px`, _ = `${-m}px`) : h === "top" ? ($ = u ? g : `${b}px`, _ = `${c.floating.height + m}px`) : h === "right" ? ($ = `${-m}px`, _ = u ? g : `${y}px`) : h === "left" && ($ = `${c.floating.width + m}px`, _ = u ? g : `${y}px`), {
      data: {
        x: $,
        y: _
      }
    };
  }
});
function Bp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const co = _w, la = Sw, da = Nw, Gs = /* @__PURE__ */ R((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(ie.div, S({}, o, {
    ref: t
  })), r) : null;
});
function kw(e, t) {
  return Ls((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Xe = (e) => {
  const { present: t, children: n } = e, r = Ow(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Nt.only(n), a = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ ro(o, {
    ref: a
  }) : null;
};
Xe.displayName = "Presence";
function Ow(e) {
  const [t, n] = Y(), r = V({}), o = V(e), a = V("none"), s = e ? "mounted" : "unmounted", [i, c] = kw(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return G(() => {
    const l = Fa(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), pt(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, m = Fa(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), pt(() => {
    if (t) {
      const l = (u) => {
        const m = Fa(r.current).includes(u.animationName);
        u.target === t && m && Fs(
          () => c("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = Fa(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: ue((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Fa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Mw({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = ze(n), c = ue((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function Mw({ defaultProp: e, onChange: t }) {
  const n = Y(e), [r] = n, o = V(r), a = ze(t);
  return G(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Vi = "rovingFocusGroup.onEntryFocus", Dw = {
  bubbles: !1,
  cancelable: !0
}, Al = "RovingFocusGroup", [Tc, Yp, Rw] = Jn(Al), [Aw, er] = Ze(Al, [
  Rw
]), [jw, Iw] = Aw(Al), Lw = /* @__PURE__ */ R((e, t) => /* @__PURE__ */ x(Tc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(Tc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(Fw, S({}, e, {
  ref: t
}))))), Fw = /* @__PURE__ */ R((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...d } = e, u = V(null), p = we(t, u), m = dn(a), [h = null, v] = tt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = Y(!1), y = ze(l), $ = Yp(n), _ = V(!1), [w, P] = Y(0);
  return G(() => {
    const k = u.current;
    if (k)
      return k.addEventListener(Vi, y), () => k.removeEventListener(Vi, y);
  }, [
    y
  ]), /* @__PURE__ */ x(jw, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: h,
    onItemFocus: ue(
      (k) => v(k),
      [
        v
      ]
    ),
    onItemShiftTab: ue(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: ue(
      () => P(
        (k) => k + 1
      ),
      []
    ),
    onFocusableItemRemove: ue(
      () => P(
        (k) => k - 1
      ),
      []
    )
  }, /* @__PURE__ */ x(ie.div, S({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, d, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: H(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: H(e.onFocus, (k) => {
      const L = !_.current;
      if (k.target === k.currentTarget && L && !g) {
        const I = new CustomEvent(Vi, Dw);
        if (k.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
          const ee = $().filter(
            (A) => A.focusable
          ), te = ee.find(
            (A) => A.active
          ), K = ee.find(
            (A) => A.id === h
          ), O = [
            te,
            K,
            ...ee
          ].filter(Boolean).map(
            (A) => A.ref.current
          );
          Hp(O);
        }
      }
      _.current = !1;
    }),
    onBlur: H(
      e.onBlur,
      () => b(!1)
    )
  })));
}), Vw = "RovingFocusGroupItem", Uw = /* @__PURE__ */ R((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = rt(), c = a || i, l = Iw(Vw, n), d = l.currentTabStopId === c, u = Yp(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = l;
  return G(() => {
    if (r)
      return p(), () => m();
  }, [
    r,
    p,
    m
  ]), /* @__PURE__ */ x(Tc.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ x(ie.span, S({
    tabIndex: d ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: H(e.onMouseDown, (h) => {
      r ? l.onItemFocus(c) : h.preventDefault();
    }),
    onFocus: H(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: H(e.onKeyDown, (h) => {
      if (h.key === "Tab" && h.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (h.target !== h.currentTarget)
        return;
      const v = Bw(h, l.orientation, l.dir);
      if (v !== void 0) {
        h.preventDefault();
        let b = u().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const y = b.indexOf(h.currentTarget);
          b = l.loop ? Yw(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => Hp(b)
        );
      }
    })
  })));
}), Ww = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function zw(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Bw(e, t, n) {
  const r = zw(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return Ww[r];
}
function Hp(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function Yw(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Zs = Lw, qs = Uw;
var Hw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ar = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Ua = {}, Ui = 0, Kp = function(e) {
  return e && (e.host || Kp(e.parentNode));
}, Kw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Kp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, Gw = function(e, t, n, r) {
  var o = Kw(t, Array.isArray(e) ? e : [e]);
  Ua[n] || (Ua[n] = /* @__PURE__ */ new WeakMap());
  var a = Ua[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || i.has(u) || (i.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var d = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(p) {
      if (i.has(p))
        d(p);
      else {
        var m = p.getAttribute(r), h = m !== null && m !== "false", v = (Ar.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
        Ar.set(p, v), a.set(p, g), s.push(p), v === 1 && h && Va.set(p, !0), g === 1 && p.setAttribute(n, "true"), h || p.setAttribute(r, "true");
      }
    });
  };
  return d(t), i.clear(), Ui++, function() {
    s.forEach(function(u) {
      var p = Ar.get(u) - 1, m = a.get(u) - 1;
      Ar.set(u, p), a.set(u, m), p || (Va.has(u) || u.removeAttribute(r), Va.delete(u)), m || u.removeAttribute(n);
    }), Ui--, Ui || (Ar = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), Ua = {});
  };
}, ua = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || Hw(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Gw(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, mt = function() {
  return mt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, mt.apply(this, arguments);
};
function jl(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Gp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Po = "right-scroll-bar-position", To = "width-before-scroll-bar", Zw = "with-scroll-bars-hidden", qw = "--removed-body-scroll-bar-size";
function Xw(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Qw(e, t) {
  var n = Y(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function Zp(e, t) {
  return Qw(t || null, function(n) {
    return e.forEach(function(r) {
      return Xw(r, n);
    });
  });
}
function Jw(e) {
  return e;
}
function e_(e, t) {
  t === void 0 && (t = Jw);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var d = s;
        s = [], d.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(d) {
          s.push(d), l();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function qp(e) {
  e === void 0 && (e = {});
  var t = e_(null);
  return t.options = mt({ async: !0, ssr: !1 }, e), t;
}
var Xp = function(e) {
  var t = e.sideCar, n = jl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, mt({}, n));
};
Xp.isSideCarExport = !0;
function Qp(e, t) {
  return e.useMedium(t), Xp;
}
var Jp = qp(), Wi = function() {
}, Xs = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Wi,
    onWheelCapture: Wi,
    onTouchMoveCapture: Wi
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = jl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Zp([n, t]), w = mt(mt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    d && C.createElement($, { sideCar: Jp, removeScrollBar: l, shards: u, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), mt(mt({}, w), { ref: _ })) : C.createElement(b, mt({}, w, { className: c, ref: _ }), i)
  );
});
Xs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Xs.classNames = {
  fullWidth: To,
  zeroRight: Po
};
var Ou, t_ = function() {
  if (Ou)
    return Ou;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function n_() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = t_();
  return t && e.setAttribute("nonce", t), e;
}
function r_(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function o_(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var a_ = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = n_()) && (r_(t, n), o_(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, s_ = function() {
  var e = a_();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Il = function() {
  var e = s_(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, i_ = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zi = function(e) {
  return parseInt(e || "", 10) || 0;
}, c_ = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zi(n), zi(r), zi(o)];
}, l_ = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return i_;
  var t = c_(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, d_ = Il(), u_ = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Zw, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Po, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(To, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Po, " .").concat(Po, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(To, " .").concat(To, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(qw, ": ").concat(i, `px;
  }
`);
}, em = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return l_(o);
  }, [o]);
  return C.createElement(d_, { styles: u_(a, !t, o, n ? "" : "!important") });
}, kc = !1;
if (typeof window < "u")
  try {
    var Wa = Object.defineProperty({}, "passive", {
      get: function() {
        return kc = !0, !0;
      }
    });
    window.addEventListener("test", Wa, Wa), window.removeEventListener("test", Wa, Wa);
  } catch {
    kc = !1;
  }
var jr = kc ? { passive: !1 } : !1, f_ = function(e) {
  return e.tagName === "TEXTAREA";
}, tm = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !f_(e) && n[t] === "visible")
  );
}, p_ = function(e) {
  return tm(e, "overflowY");
}, m_ = function(e) {
  return tm(e, "overflowX");
}, Mu = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = nm(e, n);
    if (r) {
      var o = rm(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, h_ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, v_ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, nm = function(e, t) {
  return e === "v" ? p_(t) : m_(t);
}, rm = function(e, t) {
  return e === "v" ? h_(t) : v_(t);
}, g_ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, b_ = function(e, t, n, r, o) {
  var a = g_(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, d = s > 0, u = 0, p = 0;
  do {
    var m = rm(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && nm(e, i) && (u += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && (o && u === 0 || !o && s > u) || !d && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, za = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Du = function(e) {
  return [e.deltaX, e.deltaY];
}, Ru = function(e) {
  return e && "current" in e ? e.current : e;
}, x_ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, y_ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, $_ = 0, Ir = [];
function w_(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState($_++)[0], a = C.useState(function() {
    return Il();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Gp([e.lockRef.current], (e.shards || []).map(Ru), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var b = za(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, P = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && P.type === "range")
      return !1;
    var L = Mu(k, P);
    if (!L)
      return !0;
    if (L ? w = k : (w = k === "v" ? "h" : "v", L = Mu(k, P)), !L)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var I = r.current || w;
    return b_(I, g, v, I === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Ir.length || Ir[Ir.length - 1] !== a)) {
      var b = "deltaY" in g ? Du(g) : za(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && x_(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map(Ru).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, y) {
    var $ = { name: v, delta: g, target: b, should: y };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), d = C.useCallback(function(v) {
    n.current = za(v), r.current = void 0;
  }, []), u = C.useCallback(function(v) {
    l(v.type, Du(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, za(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Ir.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, jr), document.addEventListener("touchmove", c, jr), document.addEventListener("touchstart", d, jr), function() {
      Ir = Ir.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, jr), document.removeEventListener("touchmove", c, jr), document.removeEventListener("touchstart", d, jr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: y_(o) }) : null,
    m ? C.createElement(em, { gapMode: "margin" }) : null
  );
}
const __ = Qp(Jp, w_);
var om = C.forwardRef(function(e, t) {
  return C.createElement(Xs, mt({}, e, { ref: t, sideCar: __ }));
});
om.classNames = Xs.classNames;
const Qs = om, Oc = [
  "Enter",
  " "
], C_ = [
  "ArrowDown",
  "PageUp",
  "Home"
], am = [
  "ArrowUp",
  "PageDown",
  "End"
], S_ = [
  ...C_,
  ...am
], E_ = {
  ltr: [
    ...Oc,
    "ArrowRight"
  ],
  rtl: [
    ...Oc,
    "ArrowLeft"
  ]
}, N_ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, Js = "Menu", [Io, P_, T_] = Jn(Js), [Er, fa] = Ze(Js, [
  T_,
  un,
  er
]), ei = un(), sm = er(), [im, tr] = Er(Js), [k_, pa] = Er(Js), O_ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = ei(t), [c, l] = Y(null), d = V(!1), u = ze(a), p = dn(o);
  return G(() => {
    const m = () => {
      d.current = !0, document.addEventListener("pointerdown", h, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", h, {
        capture: !0,
        once: !0
      });
    }, h = () => d.current = !1;
    return document.addEventListener("keydown", m, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", m, {
        capture: !0
      }), document.removeEventListener("pointerdown", h, {
        capture: !0
      }), document.removeEventListener("pointermove", h, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ x(co, i, /* @__PURE__ */ x(im, {
    scope: t,
    open: n,
    onOpenChange: u,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ x(k_, {
    scope: t,
    onClose: ue(
      () => u(!1),
      [
        u
      ]
    ),
    isUsingKeyboardRef: d,
    dir: p,
    modal: s
  }, r)));
}, cm = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = ei(n);
  return /* @__PURE__ */ x(la, S({}, o, r, {
    ref: t
  }));
}), lm = "MenuPortal", [M_, dm] = Er(lm, {
  forceMount: void 0
}), D_ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = tr(lm, t);
  return /* @__PURE__ */ x(M_, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Xe, {
    present: n || a.open
  }, /* @__PURE__ */ x(Gs, {
    asChild: !0,
    container: o
  }, r)));
}, Bt = "MenuContent", [R_, Ll] = Er(Bt), A_ = /* @__PURE__ */ R((e, t) => {
  const n = dm(Bt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = tr(Bt, e.__scopeMenu), s = pa(Bt, e.__scopeMenu);
  return /* @__PURE__ */ x(Io.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(Io.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ x(j_, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(I_, S({}, o, {
    ref: t
  })))));
}), j_ = /* @__PURE__ */ R((e, t) => {
  const n = tr(Bt, e.__scopeMenu), r = V(null), o = we(t, r);
  return G(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(Fl, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: H(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), I_ = /* @__PURE__ */ R((e, t) => {
  const n = tr(Bt, e.__scopeMenu);
  return /* @__PURE__ */ x(Fl, S({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Fl = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: d, onFocusOutside: u, onInteractOutside: p, onDismiss: m, disableOutsideScroll: h, ...v } = e, g = tr(Bt, n), b = pa(Bt, n), y = ei(n), $ = sm(n), _ = P_(n), [w, P] = Y(null), k = V(null), L = we(t, k, g.onContentChange), I = V(0), ee = V(""), te = V(0), K = V(null), Z = V("right"), O = V(0), A = h ? Qs : jt, j = h ? {
    as: nn,
    allowPinchZoom: !0
  } : void 0, W = (M) => {
    var D, U;
    const q = ee.current + M, oe = _().filter(
      (he) => !he.disabled
    ), ce = document.activeElement, ye = (D = oe.find(
      (he) => he.ref.current === ce
    )) === null || D === void 0 ? void 0 : D.textValue, be = oe.map(
      (he) => he.textValue
    ), ne = n2(be, q, ye), le = (U = oe.find(
      (he) => he.textValue === ne
    )) === null || U === void 0 ? void 0 : U.ref.current;
    (function he(J) {
      ee.current = J, window.clearTimeout(I.current), J !== "" && (I.current = window.setTimeout(
        () => he(""),
        1e3
      ));
    })(q), le && setTimeout(
      () => le.focus()
    );
  };
  G(() => () => window.clearTimeout(I.current), []), Bs();
  const B = ue((M) => {
    var D, U;
    return Z.current === ((D = K.current) === null || D === void 0 ? void 0 : D.side) && o2(M, (U = K.current) === null || U === void 0 ? void 0 : U.area);
  }, []);
  return /* @__PURE__ */ x(R_, {
    scope: n,
    searchRef: ee,
    onItemEnter: ue((M) => {
      B(M) && M.preventDefault();
    }, [
      B
    ]),
    onItemLeave: ue((M) => {
      var D;
      B(M) || ((D = k.current) === null || D === void 0 || D.focus(), P(null));
    }, [
      B
    ]),
    onTriggerLeave: ue((M) => {
      B(M) && M.preventDefault();
    }, [
      B
    ]),
    pointerGraceTimerRef: te,
    onPointerGraceIntentChange: ue((M) => {
      K.current = M;
    }, [])
  }, /* @__PURE__ */ x(A, j, /* @__PURE__ */ x(Ys, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: H(a, (M) => {
      var D;
      M.preventDefault(), (D = k.current) === null || D === void 0 || D.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: d,
    onFocusOutside: u,
    onInteractOutside: p,
    onDismiss: m
  }, /* @__PURE__ */ x(Zs, S({
    asChild: !0
  }, $, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: P,
    onEntryFocus: H(c, (M) => {
      b.isUsingKeyboardRef.current || M.preventDefault();
    })
  }), /* @__PURE__ */ x(da, S({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": gm(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: L,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: H(v.onKeyDown, (M) => {
      const U = M.target.closest("[data-radix-menu-content]") === M.currentTarget, q = M.ctrlKey || M.altKey || M.metaKey, oe = M.key.length === 1;
      U && (M.key === "Tab" && M.preventDefault(), !q && oe && W(M.key));
      const ce = k.current;
      if (M.target !== ce || !S_.includes(M.key))
        return;
      M.preventDefault();
      const be = _().filter(
        (ne) => !ne.disabled
      ).map(
        (ne) => ne.ref.current
      );
      am.includes(M.key) && be.reverse(), e2(be);
    }),
    onBlur: H(e.onBlur, (M) => {
      M.currentTarget.contains(M.target) || (window.clearTimeout(I.current), ee.current = "");
    }),
    onPointerMove: H(e.onPointerMove, Lo((M) => {
      const D = M.target, U = O.current !== M.clientX;
      if (M.currentTarget.contains(D) && U) {
        const q = M.clientX > O.current ? "right" : "left";
        Z.current = q, O.current = M.clientX;
      }
    }))
  })))))));
}), um = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({
    role: "group"
  }, r, {
    ref: t
  }));
}), L_ = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({}, r, {
    ref: t
  }));
}), Mc = "MenuItem", Au = "menu.itemSelect", Vl = /* @__PURE__ */ R((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = V(null), s = pa(Mc, e.__scopeMenu), i = Ll(Mc, e.__scopeMenu), c = we(t, a), l = V(!1), d = () => {
    const u = a.current;
    if (!n && u) {
      const p = new CustomEvent(Au, {
        bubbles: !0,
        cancelable: !0
      });
      u.addEventListener(
        Au,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), cs(u, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ x(fm, S({}, o, {
    ref: c,
    disabled: n,
    onClick: H(e.onClick, d),
    onPointerDown: (u) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, u), l.current = !0;
    },
    onPointerUp: H(e.onPointerUp, (u) => {
      var p;
      l.current || (p = u.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: H(e.onKeyDown, (u) => {
      const p = i.searchRef.current !== "";
      n || p && u.key === " " || Oc.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
    })
  }));
}), fm = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Ll(Mc, n), i = sm(n), c = V(null), l = we(t, c), [d, u] = Y(!1), [p, m] = Y("");
  return G(() => {
    const h = c.current;
    if (h) {
      var v;
      m(((v = h.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ x(Io.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ x(ie.div, S({
    role: "menuitem",
    "data-highlighted": d ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: H(e.onPointerMove, Lo((h) => {
      r ? s.onItemLeave(h) : (s.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus());
    })),
    onPointerLeave: H(e.onPointerLeave, Lo(
      (h) => s.onItemLeave(h)
    )),
    onFocus: H(
      e.onFocus,
      () => u(!0)
    ),
    onBlur: H(
      e.onBlur,
      () => u(!1)
    )
  }))));
}), F_ = /* @__PURE__ */ R((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ x(mm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ x(Vl, S({
    role: "menuitemcheckbox",
    "aria-checked": ms(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": Ul(n),
    onSelect: H(
      o.onSelect,
      () => r == null ? void 0 : r(ms(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), V_ = "MenuRadioGroup", [U_, W_] = Er(V_, {
  value: void 0,
  onValueChange: () => {
  }
}), z_ = /* @__PURE__ */ R((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = ze(r);
  return /* @__PURE__ */ x(U_, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ x(um, S({}, o, {
    ref: t
  })));
}), B_ = "MenuRadioItem", Y_ = /* @__PURE__ */ R((e, t) => {
  const { value: n, ...r } = e, o = W_(B_, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ x(mm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ x(Vl, S({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": Ul(a),
    onSelect: H(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), pm = "MenuItemIndicator", [mm, H_] = Er(pm, {
  checked: !1
}), K_ = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = H_(pm, n);
  return /* @__PURE__ */ x(Xe, {
    present: r || ms(a.checked) || a.checked === !0
  }, /* @__PURE__ */ x(ie.span, S({}, o, {
    ref: t,
    "data-state": Ul(a.checked)
  })));
}), G_ = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), hm = "MenuSub", [Z_, vm] = Er(hm), q_ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = tr(hm, t), s = ei(t), [i, c] = Y(null), [l, d] = Y(null), u = ze(o);
  return G(() => (a.open === !1 && u(!1), () => u(!1)), [
    a.open,
    u
  ]), /* @__PURE__ */ x(co, s, /* @__PURE__ */ x(im, {
    scope: t,
    open: r,
    onOpenChange: u,
    content: l,
    onContentChange: d
  }, /* @__PURE__ */ x(Z_, {
    scope: t,
    contentId: rt(),
    triggerId: rt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Ba = "MenuSubTrigger", X_ = /* @__PURE__ */ R((e, t) => {
  const n = tr(Ba, e.__scopeMenu), r = pa(Ba, e.__scopeMenu), o = vm(Ba, e.__scopeMenu), a = Ll(Ba, e.__scopeMenu), s = V(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, d = ue(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return G(
    () => d,
    [
      d
    ]
  ), G(() => {
    const u = i.current;
    return () => {
      window.clearTimeout(u), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ x(cm, S({
    asChild: !0
  }, l), /* @__PURE__ */ x(fm, S({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": gm(n.open)
  }, e, {
    ref: ra(t, o.onTriggerChange),
    onClick: (u) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: H(e.onPointerMove, Lo((u) => {
      a.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), d();
      }, 100));
    })),
    onPointerLeave: H(e.onPointerLeave, Lo((u) => {
      var p;
      d();
      const m = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (m) {
        var h;
        const v = (h = n.content) === null || h === void 0 ? void 0 : h.dataset.side, g = v === "right", b = g ? -5 : 5, y = m[g ? "left" : "right"], $ = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: u.clientX + b,
              y: u.clientY
            },
            {
              x: y,
              y: m.top
            },
            {
              x: $,
              y: m.top
            },
            {
              x: $,
              y: m.bottom
            },
            {
              x: y,
              y: m.bottom
            }
          ],
          side: v
        }), window.clearTimeout(i.current), i.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(u), u.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: H(e.onKeyDown, (u) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && u.key === " ") && E_[r.dir].includes(u.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })));
}), Q_ = "MenuSubContent", J_ = /* @__PURE__ */ R((e, t) => {
  const n = dm(Bt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = tr(Bt, e.__scopeMenu), s = pa(Bt, e.__scopeMenu), i = vm(Q_, e.__scopeMenu), c = V(null), l = we(t, c);
  return /* @__PURE__ */ x(Io.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(Io.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Fl, S({
    id: i.contentId,
    "aria-labelledby": i.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (d) => {
      var u;
      s.isUsingKeyboardRef.current && ((u = c.current) === null || u === void 0 || u.focus()), d.preventDefault();
    },
    onCloseAutoFocus: (d) => d.preventDefault(),
    onFocusOutside: H(e.onFocusOutside, (d) => {
      d.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: H(e.onEscapeKeyDown, (d) => {
      s.onClose(), d.preventDefault();
    }),
    onKeyDown: H(e.onKeyDown, (d) => {
      const u = d.currentTarget.contains(d.target), p = N_[s.dir].includes(d.key);
      if (u && p) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })))));
});
function gm(e) {
  return e ? "open" : "closed";
}
function ms(e) {
  return e === "indeterminate";
}
function Ul(e) {
  return ms(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function e2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function t2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function n2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = t2(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function r2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, d = t[s].y;
    c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o);
  }
  return o;
}
function o2(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return r2(n, t);
}
function Lo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Wl = O_, zl = cm, Bl = D_, Yl = A_, Hl = um, Kl = L_, Gl = Vl, Zl = F_, ql = z_, Xl = Y_, Ql = K_, Jl = G_, ed = q_, td = X_, nd = J_, bm = "ContextMenu", [a2, yO] = Ze(bm, [
  fa
]), wt = fa(), [s2, xm] = a2(bm), i2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = Y(!1), c = wt(t), l = ze(r), d = ue((u) => {
    i(u), l(u);
  }, [
    l
  ]);
  return /* @__PURE__ */ x(s2, {
    scope: t,
    open: s,
    onOpenChange: d,
    modal: a
  }, /* @__PURE__ */ x(Wl, S({}, c, {
    dir: o,
    open: s,
    onOpenChange: d,
    modal: a
  }), n));
}, c2 = "ContextMenuTrigger", l2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = xm(c2, n), s = wt(n), i = V({
    x: 0,
    y: 0
  }), c = V({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = V(0), d = ue(
    () => window.clearTimeout(l.current),
    []
  ), u = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return G(
    () => d,
    [
      d
    ]
  ), G(
    () => void (r && d()),
    [
      r,
      d
    ]
  ), /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x(zl, S({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ x(ie.span, S({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : H(e.onContextMenu, (p) => {
      d(), u(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : H(e.onPointerDown, Ya((p) => {
      d(), l.current = window.setTimeout(
        () => u(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : H(e.onPointerMove, Ya(d)),
    onPointerCancel: r ? e.onPointerCancel : H(e.onPointerCancel, Ya(d)),
    onPointerUp: r ? e.onPointerUp : H(e.onPointerUp, Ya(d))
  })));
}), d2 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = wt(t);
  return /* @__PURE__ */ x(Bl, S({}, r, n));
}, u2 = "ContextMenuContent", f2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = xm(u2, n), a = wt(n), s = V(!1);
  return /* @__PURE__ */ x(Yl, S({}, a, r, {
    ref: t,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (i) => {
      var c;
      (c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && s.current && i.preventDefault(), s.current = !1;
    },
    onInteractOutside: (i) => {
      var c;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && !o.modal && (s.current = !0);
    },
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), p2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Hl, S({}, o, r, {
    ref: t
  }));
}), m2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Kl, S({}, o, r, {
    ref: t
  }));
}), h2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Gl, S({}, o, r, {
    ref: t
  }));
}), v2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Zl, S({}, o, r, {
    ref: t
  }));
}), g2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(ql, S({}, o, r, {
    ref: t
  }));
}), b2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Xl, S({}, o, r, {
    ref: t
  }));
}), x2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ql, S({}, o, r, {
    ref: t
  }));
}), y2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Jl, S({}, o, r, {
    ref: t
  }));
}), $2 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = wt(t), [i, c] = tt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(ed, S({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, w2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(td, S({}, o, r, {
    ref: t
  }));
}), _2 = /* @__PURE__ */ R((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(nd, S({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function Ya(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const C2 = i2, S2 = l2, ym = d2, $m = f2, E2 = p2, wm = m2, _m = h2, Cm = v2, N2 = g2, Sm = b2, Em = x2, Nm = y2, P2 = $2, Pm = w2, Tm = _2, $O = C2, wO = S2, _O = E2, CO = ym, SO = P2, EO = N2, T2 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Pm,
  {
    ref: o,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(ao, { className: "ml-auto h-4 w-4" })
    ]
  }
));
T2.displayName = Pm.displayName;
const k2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tm,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
k2.displayName = Tm.displayName;
const O2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(ym, { children: /* @__PURE__ */ f.exports.jsx(
  $m,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
O2.displayName = $m.displayName;
const M2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  _m,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
M2.displayName = _m.displayName;
const D2 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Cm,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Em, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
D2.displayName = Cm.displayName;
const R2 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Sm,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Em, { children: /* @__PURE__ */ f.exports.jsx(Vs, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
R2.displayName = Sm.displayName;
const A2 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  wm,
  {
    ref: r,
    className: F(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
A2.displayName = wm.displayName;
const j2 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Nm,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
j2.displayName = Nm.displayName;
const I2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
I2.displayName = "ContextMenuShortcut";
var ma = (e) => e.type === "checkbox", zr = (e) => e instanceof Date, bt = (e) => e == null;
const km = (e) => typeof e == "object";
var st = (e) => !bt(e) && !Array.isArray(e) && km(e) && !zr(e), Om = (e) => st(e) && e.target ? ma(e.target) ? e.target.checked : e.target.value : e, L2 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Mm = (e, t) => e.has(L2(t)), F2 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return st(t) && t.hasOwnProperty("isPrototypeOf");
}, rd = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function en(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(rd && (e instanceof Blob || e instanceof FileList)) && (n || st(e)))
    if (t = n ? [] : {}, !n && !F2(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = en(e[r]));
  else
    return e;
  return t;
}
var ha = (e) => Array.isArray(e) ? e.filter(Boolean) : [], et = (e) => e === void 0, pe = (e, t, n) => {
  if (!t || !st(e))
    return n;
  const r = ha(t.split(/[,[\].]+?/)).reduce((o, a) => bt(o) ? o : o[a], e);
  return et(r) || r === e ? et(e[t]) ? n : e[t] : r;
};
const hs = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Wt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, gn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Dm = N.createContext(null), ti = () => N.useContext(Dm), V2 = (e) => {
  const { children: t, ...n } = e;
  return N.createElement(Dm.Provider, { value: n }, t);
};
var Rm = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Wt.all && (t._proxyFormState[s] = !r || Wt.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Dt = (e) => st(e) && !Object.keys(e).length, Am = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Dt(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Wt.all));
}, es = (e) => Array.isArray(e) ? e : [e], jm = (e, t, n) => n && t ? e === t : !e || !t || e === t || es(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function od(e) {
  const t = N.useRef(e);
  t.current = e, N.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function U2(e) {
  const t = ti(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = N.useState(n._formState), c = N.useRef(!0), l = N.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = N.useRef(o);
  return d.current = o, od({
    disabled: r,
    next: (u) => c.current && jm(d.current, u.name, a) && Am(u, l.current, n._updateFormState) && i({
      ...n._formState,
      ...u
    }),
    subject: n._subjects.state
  }), N.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Rm(s, n, l.current, !1);
}
var tn = (e) => typeof e == "string", Im = (e, t, n, r, o) => tn(e) ? (r && t.watch.add(e), pe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), pe(n, a))) : (r && (t.watchAll = !0), n);
function W2(e) {
  const t = ti(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = N.useRef(r);
  i.current = r, od({
    disabled: a,
    subject: n._subjects.values,
    next: (d) => {
      jm(i.current, d.name, s) && l(en(Im(i.current, n._names, d.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = N.useState(n._getWatch(r, o));
  return N.useEffect(() => n._removeUnmounted()), c;
}
var ad = (e) => /^\w*$/.test(e), Lm = (e) => ha(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Be(e, t, n) {
  let r = -1;
  const o = ad(t) ? [t] : Lm(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = st(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function z2(e) {
  const t = ti(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = Mm(r._names.array, n), s = W2({
    control: r,
    name: n,
    defaultValue: pe(r._formValues, n, pe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = U2({
    control: r,
    name: n
  }), c = N.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), N.useEffect(() => {
    const l = r._options.shouldUnregister || o, d = (u, p) => {
      const m = pe(r._fields, u);
      m && (m._f.mount = p);
    };
    if (d(n, !0), l) {
      const u = en(pe(r._options.defaultValues, n));
      Be(r._defaultValues, n, u), et(pe(r._formValues, n)) && Be(r._formValues, n, u);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : d(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: N.useCallback((l) => c.current.onChange({
        target: {
          value: Om(l),
          name: n
        },
        type: hs.CHANGE
      }), [n]),
      onBlur: N.useCallback(() => c.current.onBlur({
        target: {
          value: pe(r._formValues, n),
          name: n
        },
        type: hs.BLUR
      }), [n, r]),
      ref: (l) => {
        const d = pe(r._fields, n);
        d && l && (d._f.ref = {
          focus: () => l.focus(),
          select: () => l.select(),
          setCustomValidity: (u) => l.setCustomValidity(u),
          reportValidity: () => l.reportValidity()
        });
      }
    },
    formState: i,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!pe(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!pe(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!pe(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => pe(i.errors, n)
      }
    })
  };
}
const B2 = (e) => e.render(z2(e));
var Fm = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const Dc = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = pe(e, r);
    if (o) {
      const { _f: a, ...s } = o;
      if (a && t(a.name)) {
        if (a.ref.focus) {
          a.ref.focus();
          break;
        } else if (a.refs && a.refs[0].focus) {
          a.refs[0].focus();
          break;
        }
      } else
        st(s) && Dc(s, t);
    }
  }
};
var ju = (e) => ({
  isOnSubmit: !e || e === Wt.onSubmit,
  isOnBlur: e === Wt.onBlur,
  isOnChange: e === Wt.onChange,
  isOnAll: e === Wt.all,
  isOnTouch: e === Wt.onTouched
}), Iu = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), Y2 = (e, t, n) => {
  const r = ha(pe(e, n));
  return Be(r, "root", t[n]), Be(e, n, r), e;
}, Yr = (e) => typeof e == "boolean", sd = (e) => e.type === "file", Vn = (e) => typeof e == "function", vs = (e) => {
  if (!rd)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ts = (e) => tn(e), id = (e) => e.type === "radio", gs = (e) => e instanceof RegExp;
const Lu = {
  value: !1,
  isValid: !1
}, Fu = { value: !0, isValid: !0 };
var Vm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !et(e[0].attributes.value) ? et(e[0].value) || e[0].value === "" ? Fu : { value: e[0].value, isValid: !0 } : Fu
    ) : Lu;
  }
  return Lu;
};
const Vu = {
  isValid: !1,
  value: null
};
var Um = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Vu) : Vu;
function Uu(e, t, n = "validate") {
  if (ts(e) || Array.isArray(e) && e.every(ts) || Yr(e) && !e)
    return {
      type: n,
      message: ts(e) ? e : "",
      ref: t
    };
}
var Lr = (e) => st(e) && !gs(e) ? e : {
  value: e,
  message: ""
}, Wu = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: d, max: u, pattern: p, validate: m, name: h, valueAsNumber: v, mount: g, disabled: b } = e._f, y = pe(t, h);
  if (!g || b)
    return {};
  const $ = s ? s[0] : a, _ = (K) => {
    r && $.reportValidity && ($.setCustomValidity(Yr(K) ? "" : K || ""), $.reportValidity());
  }, w = {}, P = id(a), k = ma(a), L = P || k, I = (v || sd(a)) && et(a.value) && et(y) || vs(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, ee = Fm.bind(null, h, n, w), te = (K, Z, O, A = gn.maxLength, j = gn.minLength) => {
    const W = K ? Z : O;
    w[h] = {
      type: K ? A : j,
      message: W,
      ref: a,
      ...ee(K ? A : j, W)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!L && (I || bt(y)) || Yr(y) && !y || k && !Vm(s).isValid || P && !Um(s).isValid)) {
    const { value: K, message: Z } = ts(i) ? { value: !!i, message: i } : Lr(i);
    if (K && (w[h] = {
      type: gn.required,
      message: Z,
      ref: $,
      ...ee(gn.required, Z)
    }, !n))
      return _(Z), w;
  }
  if (!I && (!bt(d) || !bt(u))) {
    let K, Z;
    const O = Lr(u), A = Lr(d);
    if (!bt(y) && !isNaN(y)) {
      const j = a.valueAsNumber || y && +y;
      bt(O.value) || (K = j > O.value), bt(A.value) || (Z = j < A.value);
    } else {
      const j = a.valueAsDate || new Date(y), W = (D) => new Date(new Date().toDateString() + " " + D), B = a.type == "time", M = a.type == "week";
      tn(O.value) && y && (K = B ? W(y) > W(O.value) : M ? y > O.value : j > new Date(O.value)), tn(A.value) && y && (Z = B ? W(y) < W(A.value) : M ? y < A.value : j < new Date(A.value));
    }
    if ((K || Z) && (te(!!K, O.message, A.message, gn.max, gn.min), !n))
      return _(w[h].message), w;
  }
  if ((c || l) && !I && (tn(y) || o && Array.isArray(y))) {
    const K = Lr(c), Z = Lr(l), O = !bt(K.value) && y.length > +K.value, A = !bt(Z.value) && y.length < +Z.value;
    if ((O || A) && (te(O, K.message, Z.message), !n))
      return _(w[h].message), w;
  }
  if (p && !I && tn(y)) {
    const { value: K, message: Z } = Lr(p);
    if (gs(K) && !y.match(K) && (w[h] = {
      type: gn.pattern,
      message: Z,
      ref: a,
      ...ee(gn.pattern, Z)
    }, !n))
      return _(Z), w;
  }
  if (m) {
    if (Vn(m)) {
      const K = await m(y, t), Z = Uu(K, $);
      if (Z && (w[h] = {
        ...Z,
        ...ee(gn.validate, Z.message)
      }, !n))
        return _(Z.message), w;
    } else if (st(m)) {
      let K = {};
      for (const Z in m) {
        if (!Dt(K) && !n)
          break;
        const O = Uu(await m[Z](y, t), $, Z);
        O && (K = {
          ...O,
          ...ee(Z, O.message)
        }, _(O.message), n && (w[h] = K));
      }
      if (!Dt(K) && (w[h] = {
        ref: $,
        ...K
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function H2(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = et(e) ? r++ : e[t[r++]];
  return e;
}
function K2(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !et(e[t]))
      return !1;
  return !0;
}
function ut(e, t) {
  const n = Array.isArray(t) ? t : ad(t) ? [t] : Lm(t), r = n.length === 1 ? e : H2(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (st(r) && Dt(r) || Array.isArray(r) && K2(r)) && ut(e, n.slice(0, -1)), e;
}
function Bi() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const a of e)
        a.next && a.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((a) => a !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var bs = (e) => bt(e) || !km(e);
function cr(e, t) {
  if (bs(e) || bs(t))
    return e === t;
  if (zr(e) && zr(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const a = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const s = t[o];
      if (zr(a) && zr(s) || st(a) && st(s) || Array.isArray(a) && Array.isArray(s) ? !cr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Wm = (e) => e.type === "select-multiple", G2 = (e) => id(e) || ma(e), Yi = (e) => vs(e) && e.isConnected, zm = (e) => {
  for (const t in e)
    if (Vn(e[t]))
      return !0;
  return !1;
};
function xs(e, t = {}) {
  const n = Array.isArray(e);
  if (st(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || st(e[r]) && !zm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, xs(e[r], t[r])) : bt(e[r]) || (t[r] = !0);
  return t;
}
function Bm(e, t, n) {
  const r = Array.isArray(e);
  if (st(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || st(e[o]) && !zm(e[o]) ? et(t) || bs(n[o]) ? n[o] = Array.isArray(e[o]) ? xs(e[o], []) : { ...xs(e[o]) } : Bm(e[o], bt(t) ? {} : t[o], n[o]) : n[o] = !cr(e[o], t[o]);
  return n;
}
var Hi = (e, t) => Bm(e, t, xs(t)), Ym = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => et(e) ? e : t ? e === "" ? NaN : e && +e : n && tn(e) ? new Date(e) : r ? r(e) : e;
function Ki(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return sd(t) ? t.files : id(t) ? Um(e.refs).value : Wm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : ma(t) ? Vm(e.refs).value : Ym(et(t.value) ? e.ref.value : t.value, e);
}
var Z2 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = pe(t, a);
    s && Be(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Eo = (e) => et(e) ? e : gs(e) ? e.source : st(e) ? gs(e.value) ? e.value.source : e.value : e, q2 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function zu(e, t, n) {
  const r = pe(e, n);
  if (r || ad(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = pe(t, a), i = pe(e, a);
    if (s && !Array.isArray(s) && n !== a)
      return { name: n };
    if (i && i.type)
      return {
        name: a,
        error: i
      };
    o.pop();
  }
  return {
    name: n
  };
}
var X2 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, Q2 = (e, t) => !ha(pe(e, t)).length && ut(e, t);
const J2 = {
  mode: Wt.onSubmit,
  reValidateMode: Wt.onChange,
  shouldFocusError: !0
};
function eC(e = {}, t) {
  let n = {
    ...J2,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Vn(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = st(n.defaultValues) || st(n.values) ? en(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : en(a), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, d = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: Bi(),
    array: Bi(),
    state: Bi()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, h = ju(n.mode), v = ju(n.reValidateMode), g = n.criteriaMode === Wt.all, b = (T) => (z) => {
    clearTimeout(d), d = setTimeout(T, z);
  }, y = async (T) => {
    if (u.isValid || T) {
      const z = n.resolver ? Dt((await I()).errors) : await te(o, !0);
      z !== r.isValid && p.state.next({
        isValid: z
      });
    }
  }, $ = (T) => u.isValidating && p.state.next({
    isValidating: T
  }), _ = (T, z = [], X, xe, de = !0, se = !0) => {
    if (xe && X) {
      if (i.action = !0, se && Array.isArray(pe(o, T))) {
        const $e = X(pe(o, T), xe.argA, xe.argB);
        de && Be(o, T, $e);
      }
      if (se && Array.isArray(pe(r.errors, T))) {
        const $e = X(pe(r.errors, T), xe.argA, xe.argB);
        de && Be(r.errors, T, $e), Q2(r.errors, T);
      }
      if (u.touchedFields && se && Array.isArray(pe(r.touchedFields, T))) {
        const $e = X(pe(r.touchedFields, T), xe.argA, xe.argB);
        de && Be(r.touchedFields, T, $e);
      }
      u.dirtyFields && (r.dirtyFields = Hi(a, s)), p.state.next({
        name: T,
        isDirty: Z(T, z),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Be(s, T, z);
  }, w = (T, z) => {
    Be(r.errors, T, z), p.state.next({
      errors: r.errors
    });
  }, P = (T, z, X, xe) => {
    const de = pe(o, T);
    if (de) {
      const se = pe(s, T, et(X) ? pe(a, T) : X);
      et(se) || xe && xe.defaultChecked || z ? Be(s, T, z ? se : Ki(de._f)) : j(T, se), i.mount && y();
    }
  }, k = (T, z, X, xe, de) => {
    let se = !1, $e = !1;
    const qe = {
      name: T
    };
    if (!X || xe) {
      u.isDirty && ($e = r.isDirty, r.isDirty = qe.isDirty = Z(), se = $e !== qe.isDirty);
      const Qe = cr(pe(a, T), z);
      $e = pe(r.dirtyFields, T), Qe ? ut(r.dirtyFields, T) : Be(r.dirtyFields, T, !0), qe.dirtyFields = r.dirtyFields, se = se || u.dirtyFields && $e !== !Qe;
    }
    if (X) {
      const Qe = pe(r.touchedFields, T);
      Qe || (Be(r.touchedFields, T, X), qe.touchedFields = r.touchedFields, se = se || u.touchedFields && Qe !== X);
    }
    return se && de && p.state.next(qe), se ? qe : {};
  }, L = (T, z, X, xe) => {
    const de = pe(r.errors, T), se = u.isValid && Yr(z) && r.isValid !== z;
    if (e.delayError && X ? (l = b(() => w(T, X)), l(e.delayError)) : (clearTimeout(d), l = null, X ? Be(r.errors, T, X) : ut(r.errors, T)), (X ? !cr(de, X) : de) || !Dt(xe) || se) {
      const $e = {
        ...xe,
        ...se && Yr(z) ? { isValid: z } : {},
        errors: r.errors,
        name: T
      };
      r = {
        ...r,
        ...$e
      }, p.state.next($e);
    }
    $(!1);
  }, I = async (T) => n.resolver(s, n.context, Z2(T || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), ee = async (T) => {
    const { errors: z } = await I();
    if (T)
      for (const X of T) {
        const xe = pe(z, X);
        xe ? Be(r.errors, X, xe) : ut(r.errors, X);
      }
    else
      r.errors = z;
    return z;
  }, te = async (T, z, X = {
    valid: !0
  }) => {
    for (const xe in T) {
      const de = T[xe];
      if (de) {
        const { _f: se, ...$e } = de;
        if (se) {
          const qe = c.array.has(se.name), Qe = await Wu(de, s, g, n.shouldUseNativeValidation && !z, qe);
          if (Qe[se.name] && (X.valid = !1, z))
            break;
          !z && (pe(Qe, se.name) ? qe ? Y2(r.errors, Qe, se.name) : Be(r.errors, se.name, Qe[se.name]) : ut(r.errors, se.name));
        }
        $e && await te($e, z, X);
      }
    }
    return X.valid;
  }, K = () => {
    for (const T of c.unMount) {
      const z = pe(o, T);
      z && (z._f.refs ? z._f.refs.every((X) => !Yi(X)) : !Yi(z._f.ref)) && be(T);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, Z = (T, z) => (T && z && Be(s, T, z), !cr(U(), a)), O = (T, z, X) => Im(T, c, {
    ...i.mount ? s : et(z) ? a : tn(T) ? { [T]: z } : z
  }, X, z), A = (T) => ha(pe(i.mount ? s : a, T, e.shouldUnregister ? pe(a, T, []) : [])), j = (T, z, X = {}) => {
    const xe = pe(o, T);
    let de = z;
    if (xe) {
      const se = xe._f;
      se && (!se.disabled && Be(s, T, Ym(z, se)), de = vs(se.ref) && bt(z) ? "" : z, Wm(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = de.includes($e.value)) : se.refs ? ma(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(de) ? !!de.find((qe) => qe === $e.value) : de === $e.value)) : se.refs[0] && (se.refs[0].checked = !!de) : se.refs.forEach(($e) => $e.checked = $e.value === de) : sd(se.ref) ? se.ref.value = "" : (se.ref.value = de, se.ref.type || p.values.next({
        name: T,
        values: { ...s }
      })));
    }
    (X.shouldDirty || X.shouldTouch) && k(T, de, X.shouldTouch, X.shouldDirty, !0), X.shouldValidate && D(T);
  }, W = (T, z, X) => {
    for (const xe in z) {
      const de = z[xe], se = `${T}.${xe}`, $e = pe(o, se);
      (c.array.has(T) || !bs(de) || $e && !$e._f) && !zr(de) ? W(se, de, X) : j(se, de, X);
    }
  }, B = (T, z, X = {}) => {
    const xe = pe(o, T), de = c.array.has(T), se = en(z);
    Be(s, T, se), de ? (p.array.next({
      name: T,
      values: { ...s }
    }), (u.isDirty || u.dirtyFields) && X.shouldDirty && p.state.next({
      name: T,
      dirtyFields: Hi(a, s),
      isDirty: Z(T, se)
    })) : xe && !xe._f && !bt(se) ? W(T, se, X) : j(T, se, X), Iu(T, c) && p.state.next({ ...r }), p.values.next({
      name: T,
      values: { ...s }
    }), !i.mount && t();
  }, M = async (T) => {
    const z = T.target;
    let X = z.name, xe = !0;
    const de = pe(o, X), se = () => z.type ? Ki(de._f) : Om(T);
    if (de) {
      let $e, qe;
      const Qe = se(), pn = T.type === hs.BLUR || T.type === hs.FOCUS_OUT, Ma = !q2(de._f) && !n.resolver && !pe(r.errors, X) && !de._f.deps || X2(pn, pe(r.touchedFields, X), r.isSubmitted, v, h), mn = Iu(X, c, pn);
      Be(s, X, Qe), pn ? (de._f.onBlur && de._f.onBlur(T), l && l(0)) : de._f.onChange && de._f.onChange(T);
      const ho = k(X, Qe, pn, !1), Da = !Dt(ho) || mn;
      if (!pn && p.values.next({
        name: X,
        type: T.type,
        values: { ...s }
      }), Ma)
        return u.isValid && y(), Da && p.state.next({ name: X, ...mn ? {} : ho });
      if (!pn && mn && p.state.next({ ...r }), $(!0), n.resolver) {
        const { errors: vo } = await I([X]), go = zu(r.errors, o, X), Ra = zu(vo, o, go.name || X);
        $e = Ra.error, X = Ra.name, qe = Dt(vo);
      } else
        $e = (await Wu(de, s, g, n.shouldUseNativeValidation))[X], xe = isNaN(Qe) || Qe === pe(s, X, Qe), xe && ($e ? qe = !1 : u.isValid && (qe = await te(o, !0)));
      xe && (de._f.deps && D(de._f.deps), L(X, qe, $e, ho));
    }
  }, D = async (T, z = {}) => {
    let X, xe;
    const de = es(T);
    if ($(!0), n.resolver) {
      const se = await ee(et(T) ? T : de);
      X = Dt(se), xe = T ? !de.some(($e) => pe(se, $e)) : X;
    } else
      T ? (xe = (await Promise.all(de.map(async (se) => {
        const $e = pe(o, se);
        return await te($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!xe && !r.isValid) && y()) : xe = X = await te(o);
    return p.state.next({
      ...!tn(T) || u.isValid && X !== r.isValid ? {} : { name: T },
      ...n.resolver || !T ? { isValid: X } : {},
      errors: r.errors,
      isValidating: !1
    }), z.shouldFocus && !xe && Dc(o, (se) => se && pe(r.errors, se), T ? de : c.mount), xe;
  }, U = (T) => {
    const z = {
      ...a,
      ...i.mount ? s : {}
    };
    return et(T) ? z : tn(T) ? pe(z, T) : T.map((X) => pe(z, X));
  }, q = (T, z) => ({
    invalid: !!pe((z || r).errors, T),
    isDirty: !!pe((z || r).dirtyFields, T),
    isTouched: !!pe((z || r).touchedFields, T),
    error: pe((z || r).errors, T)
  }), oe = (T) => {
    T && es(T).forEach((z) => ut(r.errors, z)), p.state.next({
      errors: T ? r.errors : {}
    });
  }, ce = (T, z, X) => {
    const xe = (pe(o, T, { _f: {} })._f || {}).ref;
    Be(r.errors, T, {
      ...z,
      ref: xe
    }), p.state.next({
      name: T,
      errors: r.errors,
      isValid: !1
    }), X && X.shouldFocus && xe && xe.focus && xe.focus();
  }, ye = (T, z) => Vn(T) ? p.values.subscribe({
    next: (X) => T(O(void 0, z), X)
  }) : O(T, z, !0), be = (T, z = {}) => {
    for (const X of T ? es(T) : c.mount)
      c.mount.delete(X), c.array.delete(X), z.keepValue || (ut(o, X), ut(s, X)), !z.keepError && ut(r.errors, X), !z.keepDirty && ut(r.dirtyFields, X), !z.keepTouched && ut(r.touchedFields, X), !n.shouldUnregister && !z.keepDefaultValue && ut(a, X);
    p.values.next({
      values: { ...s }
    }), p.state.next({
      ...r,
      ...z.keepDirty ? { isDirty: Z() } : {}
    }), !z.keepIsValid && y();
  }, ne = (T, z = {}) => {
    let X = pe(o, T);
    const xe = Yr(z.disabled);
    return Be(o, T, {
      ...X || {},
      _f: {
        ...X && X._f ? X._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...z
      }
    }), c.mount.add(T), et(z.value) || Be(s, T, z.value), X ? xe && Be(s, T, z.disabled ? void 0 : pe(s, T, Ki(X._f))) : P(T, !0, z.value), {
      ...xe ? { disabled: z.disabled } : {},
      ...n.progressive ? {
        required: !!z.required,
        min: Eo(z.min),
        max: Eo(z.max),
        minLength: Eo(z.minLength),
        maxLength: Eo(z.maxLength),
        pattern: Eo(z.pattern)
      } : {},
      name: T,
      onChange: M,
      onBlur: M,
      ref: (de) => {
        if (de) {
          ne(T, z), X = pe(o, T);
          const se = et(de.value) && de.querySelectorAll && de.querySelectorAll("input,select,textarea")[0] || de, $e = G2(se), qe = X._f.refs || [];
          if ($e ? qe.find((Qe) => Qe === se) : se === X._f.ref)
            return;
          Be(o, T, {
            _f: {
              ...X._f,
              ...$e ? {
                refs: [
                  ...qe.filter(Yi),
                  se,
                  ...Array.isArray(pe(a, T)) ? [{}] : []
                ],
                ref: { type: se.type, name: T }
              } : { ref: se }
            }
          }), P(T, !1, void 0, se);
        } else
          X = pe(o, T, {}), X._f && (X._f.mount = !1), (n.shouldUnregister || z.shouldUnregister) && !(Mm(c.array, T) && i.action) && c.unMount.add(T);
      }
    };
  }, le = () => n.shouldFocusError && Dc(o, (T) => T && pe(r.errors, T), c.mount), he = (T, z) => async (X) => {
    X && (X.preventDefault && X.preventDefault(), X.persist && X.persist());
    let xe = en(s);
    if (p.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: de, values: se } = await I();
      r.errors = de, xe = se;
    } else
      await te(o);
    ut(r.errors, "root"), Dt(r.errors) ? (p.state.next({
      errors: {}
    }), await T(xe, X)) : (z && await z({ ...r.errors }, X), le(), setTimeout(le)), p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Dt(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, J = (T, z = {}) => {
    pe(o, T) && (et(z.defaultValue) ? B(T, pe(a, T)) : (B(T, z.defaultValue), Be(a, T, z.defaultValue)), z.keepTouched || ut(r.touchedFields, T), z.keepDirty || (ut(r.dirtyFields, T), r.isDirty = z.defaultValue ? Z(T, pe(a, T)) : Z()), z.keepError || (ut(r.errors, T), u.isValid && y()), p.state.next({ ...r }));
  }, ve = (T, z = {}) => {
    const X = T || a, xe = en(X), de = T && !Dt(T) ? xe : a;
    if (z.keepDefaultValues || (a = X), !z.keepValues) {
      if (z.keepDirtyValues || m)
        for (const se of c.mount)
          pe(r.dirtyFields, se) ? Be(de, se, pe(s, se)) : B(se, pe(de, se));
      else {
        if (rd && et(T))
          for (const se of c.mount) {
            const $e = pe(o, se);
            if ($e && $e._f) {
              const qe = Array.isArray($e._f.refs) ? $e._f.refs[0] : $e._f.ref;
              if (vs(qe)) {
                const Qe = qe.closest("form");
                if (Qe) {
                  Qe.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? z.keepDefaultValues ? en(a) : {} : en(de), p.array.next({
        values: { ...de }
      }), p.values.next({
        values: { ...de }
      });
    }
    c = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !i.mount && t(), i.mount = !u.isValid || !!z.keepIsValid, i.watch = !!e.shouldUnregister, p.state.next({
      submitCount: z.keepSubmitCount ? r.submitCount : 0,
      isDirty: z.keepDirty ? r.isDirty : !!(z.keepDefaultValues && !cr(T, a)),
      isSubmitted: z.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: z.keepDirtyValues ? r.dirtyFields : z.keepDefaultValues && T ? Hi(a, T) : {},
      touchedFields: z.keepTouched ? r.touchedFields : {},
      errors: z.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, Q = (T, z) => ve(Vn(T) ? T(s) : T, z);
  return {
    control: {
      register: ne,
      unregister: be,
      getFieldState: q,
      handleSubmit: he,
      setError: ce,
      _executeSchema: I,
      _getWatch: O,
      _getDirty: Z,
      _updateValid: y,
      _removeUnmounted: K,
      _updateFieldArray: _,
      _getFieldArray: A,
      _reset: ve,
      _resetDefaultValues: () => Vn(n.defaultValues) && n.defaultValues().then((T) => {
        Q(T, n.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (T) => {
        r = {
          ...r,
          ...T
        };
      },
      _subjects: p,
      _proxyFormState: u,
      get _fields() {
        return o;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return i;
      },
      set _state(T) {
        i = T;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return c;
      },
      set _names(T) {
        c = T;
      },
      get _formState() {
        return r;
      },
      set _formState(T) {
        r = T;
      },
      get _options() {
        return n;
      },
      set _options(T) {
        n = {
          ...n,
          ...T
        };
      }
    },
    trigger: D,
    register: ne,
    handleSubmit: he,
    watch: ye,
    setValue: B,
    getValues: U,
    reset: Q,
    resetField: J,
    clearErrors: oe,
    unregister: be,
    setError: ce,
    setFocus: (T, z = {}) => {
      const X = pe(o, T), xe = X && X._f;
      if (xe) {
        const de = xe.refs ? xe.refs[0] : xe.ref;
        de.focus && (de.focus(), z.shouldSelect && de.select());
      }
    },
    getFieldState: q
  };
}
function Hm(e = {}) {
  const t = N.useRef(), n = N.useRef(), [r, o] = N.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Vn(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: Vn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...eC(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, od({
    subject: a._subjects.state,
    next: (s) => {
      Am(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), N.useEffect(() => {
    e.values && !cr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), N.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = Rm(r, a), t.current;
}
const tC = /* @__PURE__ */ R((e, t) => /* @__PURE__ */ x(ie.label, S({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Km = tC, nC = oo(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), fn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Km,
  {
    ref: n,
    className: F(nC(), e),
    ...t
  }
));
fn.displayName = Km.displayName;
const Gm = V2, Zm = C.createContext(
  {}
), Nr = ({
  ...e
}) => /* @__PURE__ */ f.exports.jsx(Zm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.exports.jsx(B2, { ...e }) }), ni = () => {
  const e = C.useContext(Zm), t = C.useContext(qm), { getFieldState: n, formState: r } = ti(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, qm = C.createContext(
  {}
), nr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ f.exports.jsx(qm.Provider, { value: { id: r }, children: /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: F("space-y-2", e), ...t }) });
});
nr.displayName = "FormItem";
const Pr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = ni();
  return /* @__PURE__ */ f.exports.jsx(
    fn,
    {
      ref: n,
      className: F(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Pr.displayName = "FormLabel";
const va = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = ni();
  return /* @__PURE__ */ f.exports.jsx(
    nn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
va.displayName = "FormControl";
const lo = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ni();
  return /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: F("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
lo.displayName = "FormDescription";
const rC = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = ni(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ f.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: F("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
rC.displayName = "FormMessage";
const Xm = "Dialog", [Qm, Jm] = Ze(Xm), [oC, Qt] = Qm(Xm), aC = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = V(null), c = V(null), [l = !1, d] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(oC, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: rt(),
    titleId: rt(),
    descriptionId: rt(),
    open: l,
    onOpenChange: d,
    onOpenToggle: ue(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: s
  }, n);
}, sC = "DialogTrigger", iC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(sC, n), a = we(t, o.triggerRef);
  return /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": cd(o.open)
  }, r, {
    ref: a,
    onClick: H(e.onClick, o.onOpenToggle)
  }));
}), eh = "DialogPortal", [cC, th] = Qm(eh, {
  forceMount: void 0
}), lC = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Qt(eh, t);
  return /* @__PURE__ */ x(cC, {
    scope: t,
    forceMount: n
  }, Nt.map(
    r,
    (s) => /* @__PURE__ */ x(Xe, {
      present: n || a.open
    }, /* @__PURE__ */ x(Gs, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Rc = "DialogOverlay", dC = /* @__PURE__ */ R((e, t) => {
  const n = th(Rc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(Rc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(uC, S({}, o, {
    ref: t
  }))) : null;
}), uC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(Rc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(Qs, {
      as: nn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(ie.div, S({
      "data-state": cd(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Xr = "DialogContent", fC = /* @__PURE__ */ R((e, t) => {
  const n = th(Xr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(Xr, e.__scopeDialog);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(pC, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(mC, S({}, o, {
    ref: t
  })));
}), pC = /* @__PURE__ */ R((e, t) => {
  const n = Qt(Xr, e.__scopeDialog), r = V(null), o = we(t, n.contentRef, r);
  return G(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(nh, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: H(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: H(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), mC = /* @__PURE__ */ R((e, t) => {
  const n = Qt(Xr, e.__scopeDialog), r = V(!1), o = V(!1);
  return /* @__PURE__ */ x(nh, S({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), nh = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Qt(Xr, n), c = V(null), l = we(t, c);
  return Bs(), /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x(Ys, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(Sr, S({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": cd(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), rh = "DialogTitle", hC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(rh, n);
  return /* @__PURE__ */ x(ie.h2, S({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), vC = "DialogDescription", gC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(vC, n);
  return /* @__PURE__ */ x(ie.p, S({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), bC = "DialogClose", xC = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Qt(bC, n);
  return /* @__PURE__ */ x(ie.button, S({
    type: "button"
  }, r, {
    ref: t,
    onClick: H(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function cd(e) {
  return e ? "open" : "closed";
}
const yC = "DialogTitleWarning", [$C, NO] = f$(yC, {
  contentName: Xr,
  titleName: rh,
  docsSlug: "dialog"
}), ld = aC, dd = iC, ga = lC, ba = dC, xa = fC, ya = hC, $a = gC, wa = xC, wC = ld, PO = dd, oh = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ f.exports.jsx(ga, { className: F(e), ...n, children: /* @__PURE__ */ f.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
oh.displayName = ga.displayName;
const ah = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ba,
  {
    ref: n,
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
ah.displayName = ba.displayName;
const sh = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(oh, { children: [
  /* @__PURE__ */ f.exports.jsx(ah, {}),
  /* @__PURE__ */ f.exports.jsxs(
    xa,
    {
      ref: r,
      className: F(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ f.exports.jsxs(wa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ f.exports.jsx(Ws, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
sh.displayName = xa.displayName;
const _C = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
_C.displayName = "DialogHeader";
const CC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
CC.displayName = "DialogFooter";
const SC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
SC.displayName = ya.displayName;
const EC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $a,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
EC.displayName = $a.displayName;
const NC = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, validateInputIconClassNames: s, rest: i }) => {
  const [c, l] = C.useState(!1);
  return i.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full", a), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ f.exports.jsxs(fn, { className: "flex", htmlFor: e, children: [
      n,
      " "
    ] }) }),
    r && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: r }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          onClick: () => l((d) => !d),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          children: c ? /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ja, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(
        Fo,
        {
          ...i,
          className: F(s(), i.className),
          type: c ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => l((d) => !d),
          children: c ? /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ja, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: t.control,
      name: e,
      render: ({ field: d, formState: u }) => {
        var p;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", a), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
              n,
              " "
            ] }),
            ((p = u == null ? void 0 : u.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              u.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: r }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => l((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                children: c ? /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ja, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(
              Fo,
              {
                ...d,
                ...i,
                className: F(s(), i.className),
                type: c ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ f.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => l((m) => !m),
                children: c ? /* @__PURE__ */ f.exports.jsx(Ia, { size: 18 }) : /* @__PURE__ */ f.exports.jsx(ja, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, PC = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, rest: c }) => c.readOnly ? /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full", s), children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(fn, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ f.exports.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ f.exports.jsx(
      Fo,
      {
        ...c,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ f.exports.jsx(
  Nr,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: d }) => {
      var u;
      return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            r,
            " "
          ] }),
          ((u = d == null ? void 0 : d.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(
            Fo,
            {
              ...l,
              ...c,
              className: i()
            }
          ) }),
          a === "right" && n && /* @__PURE__ */ f.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
        ] })
      ] });
    }
  }
), Fo = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
    "input",
    {
      type: t,
      className: F(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Fo.displayName = "InputUI";
function ud({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, iconDirection: s = "left", ...i }) {
  const c = () => s === "left" && (a || i.type === "password") ? "pl-9" : s === "right" ? "pr-9" : "";
  return i.type === "password" ? /* @__PURE__ */ f.exports.jsx(
    NC,
    {
      id: t,
      validateInputIconClassNames: c,
      classNameContainer: r,
      iconDirection: s,
      description: o,
      label: n,
      form: (i == null ? void 0 : i.form) || null,
      rest: i
    }
  ) : /* @__PURE__ */ f.exports.jsx(
    PC,
    {
      id: t,
      validateInputIconClassNames: c,
      classNameContainer: r,
      iconDirection: s,
      description: o,
      label: n,
      form: (i == null ? void 0 : i.form) || null,
      rest: i,
      icon: a
    }
  );
}
const TC = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), kC = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Bu = (e) => {
  const t = [
    $o.VENEZUELAN,
    $o.JURIDICAL,
    $o.FOREIGN,
    $o.PASSPORT,
    $o.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, St = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Bu(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Bu(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function TO({
  form: e,
  pid: t = St
}) {
  var r, o, a, s, i, c, l, d, u, p, m, h, v, g;
  const n = (b) => {
    const { value: y } = b.target, $ = TC(y);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      Vk,
      {
        id: "pidType",
        form: e,
        label: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.label) || St.type.label,
        items: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.items) || St.type.items,
        tabIndex: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.tabIndex) || St.type.tabIndex,
        placeholder: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.placeholder) || St.type.placeholder,
        defaultValue: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.defaultValue) || St.type.defaultValue,
        notFoundLabel: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.notFoundLabel) || St.type.notFoundLabel,
        ctaPlaceholder: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.ctaPlaceholder) || St.type.ctaPlaceholder,
        buttonClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.buttonClassName) || St.type.buttonClassName,
        popoverClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.popoverClassName) || St.type.popoverClassName,
        disabled: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.disabled) || St.type.disabled
      }
    ),
    /* @__PURE__ */ f.exports.jsx(
      ud,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (m = t == null ? void 0 : t.number) == null ? void 0 : m.defaultValue,
        onKeyPress: kC,
        onKeyUp: n,
        tabIndex: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.tabIndex) || St.number.tabIndex,
        maxLength: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.maxLength) || St.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || St.number.placeholder
      }
    )
  ] });
}
const ih = "Popover", [ch, kO] = Ze(ih, [
  un
]), fd = un(), [OC, uo] = ch(ih), MC = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = fd(t), c = V(null), [l, d] = Y(!1), [u = !1, p] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(co, i, /* @__PURE__ */ x(OC, {
    scope: t,
    contentId: rt(),
    triggerRef: c,
    open: u,
    onOpenChange: p,
    onOpenToggle: ue(
      () => p(
        (m) => !m
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ue(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: ue(
      () => d(!1),
      []
    ),
    modal: s
  }, n));
}, DC = "PopoverTrigger", RC = /* @__PURE__ */ R((e, t) => {
  const { __scopePopover: n, ...r } = e, o = uo(DC, n), a = fd(n), s = we(t, o.triggerRef), i = /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": uh(o.open)
  }, r, {
    ref: s,
    onClick: H(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ x(la, S({
    asChild: !0
  }, a), i);
}), lh = "PopoverPortal", [AC, jC] = ch(lh, {
  forceMount: void 0
}), IC = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = uo(lh, t);
  return /* @__PURE__ */ x(AC, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Xe, {
    present: n || a.open
  }, /* @__PURE__ */ x(Gs, {
    asChild: !0,
    container: o
  }, r)));
}, Vo = "PopoverContent", LC = /* @__PURE__ */ R((e, t) => {
  const n = jC(Vo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = uo(Vo, e.__scopePopover);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(FC, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(VC, S({}, o, {
    ref: t
  })));
}), FC = /* @__PURE__ */ R((e, t) => {
  const n = uo(Vo, e.__scopePopover), r = V(null), o = we(t, r), a = V(!1);
  return G(() => {
    const s = r.current;
    if (s)
      return ua(s);
  }, []), /* @__PURE__ */ x(Qs, {
    as: nn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(dh, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: H(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: H(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), VC = /* @__PURE__ */ R((e, t) => {
  const n = uo(Vo, e.__scopePopover), r = V(!1), o = V(!1);
  return /* @__PURE__ */ x(dh, S({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), dh = /* @__PURE__ */ R((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: d, ...u } = e, p = uo(Vo, n), m = fd(n);
  return Bs(), /* @__PURE__ */ x(Ys, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: d,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ x(da, S({
    "data-state": uh(p.open),
    role: "dialog",
    id: p.contentId
  }, m, u, {
    ref: t,
    style: {
      ...u.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function uh(e) {
  return e ? "open" : "closed";
}
const UC = MC, WC = RC, zC = IC, fh = LC, En = UC, Nn = WC, sn = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(zC, { children: /* @__PURE__ */ f.exports.jsx(
  fh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: F(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
sn.displayName = fh.displayName;
const ph = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
    "textarea",
    {
      className: F(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
ph.displayName = "TextareaUI";
const OO = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ f.exports.jsx(
  Nr,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var d;
      return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", s), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((d = l == null ? void 0 : l.errors[e]) == null ? void 0 : d.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(
          ph,
          {
            placeholder: a,
            className: F("resize-none", r),
            ...c,
            ...i
          }
        ) })
      ] });
    }
  }
);
function Uo(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function fo(e) {
  const t = V({
    value: e,
    previous: e
  });
  return yt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const mh = /* @__PURE__ */ R((e, t) => /* @__PURE__ */ x(ie.span, S({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), hh = mh, BC = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], YC = [
  " ",
  "Enter"
], ri = "Select", [oi, pd, HC] = Jn(ri), [po, MO] = Ze(ri, [
  HC,
  un
]), md = un(), [KC, Tr] = po(ri), [GC, ZC] = po(ri), qC = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: d, autoComplete: u, disabled: p, required: m } = e, h = md(t), [v, g] = Y(null), [b, y] = Y(null), [$, _] = Y(!1), w = dn(l), [P = !1, k] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [L, I] = tt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), ee = V(null), te = v ? Boolean(v.closest("form")) : !0, [K, Z] = Y(/* @__PURE__ */ new Set()), O = Array.from(K).map(
    (A) => A.props.value
  ).join(";");
  return /* @__PURE__ */ x(co, h, /* @__PURE__ */ x(KC, {
    required: m,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: $,
    onValueNodeHasChildrenChange: _,
    contentId: rt(),
    value: L,
    onValueChange: I,
    open: P,
    onOpenChange: k,
    dir: w,
    triggerPointerDownPosRef: ee,
    disabled: p
  }, /* @__PURE__ */ x(oi.Provider, {
    scope: t
  }, /* @__PURE__ */ x(GC, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ue((A) => {
      Z(
        (j) => new Set(j).add(A)
      );
    }, []),
    onNativeOptionRemove: ue((A) => {
      Z((j) => {
        const W = new Set(j);
        return W.delete(A), W;
      });
    }, [])
  }, n)), te ? /* @__PURE__ */ x(bh, {
    key: O,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: d,
    autoComplete: u,
    value: L,
    onChange: (A) => I(A.target.value),
    disabled: p
  }, L === void 0 ? /* @__PURE__ */ x("option", {
    value: ""
  }) : null, Array.from(K)) : null));
}, XC = "SelectTrigger", QC = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = md(n), s = Tr(XC, n), i = s.disabled || r, c = we(t, s.onTriggerChange), l = pd(n), [d, u, p] = xh((h) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = yh(v, h, g);
    b !== void 0 && s.onValueChange(b.value);
  }), m = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ x(la, S({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "combobox",
    "aria-controls": s.contentId,
    "aria-expanded": s.open,
    "aria-required": s.required,
    "aria-autocomplete": "none",
    dir: s.dir,
    "data-state": s.open ? "open" : "closed",
    disabled: i,
    "data-disabled": i ? "" : void 0,
    "data-placeholder": s.value === void 0 ? "" : void 0
  }, o, {
    ref: c,
    onClick: H(o.onClick, (h) => {
      h.currentTarget.focus();
    }),
    onPointerDown: H(o.onPointerDown, (h) => {
      const v = h.target;
      v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      }, h.preventDefault());
    }),
    onKeyDown: H(o.onKeyDown, (h) => {
      const v = d.current !== "";
      !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && u(h.key), !(v && h.key === " ") && BC.includes(h.key) && (m(), h.preventDefault());
    })
  })));
}), JC = "SelectValue", eS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = Tr(JC, n), { onValueNodeHasChildrenChange: l } = c, d = a !== void 0, u = we(t, c.onValueNodeChange);
  return pt(() => {
    l(d);
  }, [
    l,
    d
  ]), /* @__PURE__ */ x(ie.span, S({}, i, {
    ref: u,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), tS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ x(ie.span, S({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), nS = (e) => /* @__PURE__ */ x(Gs, S({
  asChild: !0
}, e)), Qr = "SelectContent", rS = /* @__PURE__ */ R((e, t) => {
  const n = Tr(Qr, e.__scopeSelect), [r, o] = Y();
  if (pt(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ fl(/* @__PURE__ */ x(vh, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x(oi.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ x(oS, S({}, e, {
    ref: t
  }));
}), bn = 10, [vh, ai] = po(Qr), oS = /* @__PURE__ */ R((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: d,
    arrowPadding: u,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...b
  } = e, y = Tr(Qr, n), [$, _] = Y(null), [w, P] = Y(null), k = we(
    t,
    (ne) => _(ne)
  ), [L, I] = Y(null), [ee, te] = Y(null), K = pd(n), [Z, O] = Y(!1), A = V(!1);
  G(() => {
    if ($)
      return ua($);
  }, [
    $
  ]), Bs();
  const j = ue((ne) => {
    const [le, ...he] = K().map(
      (Q) => Q.ref.current
    ), [J] = he.slice(-1), ve = document.activeElement;
    for (const Q of ne)
      if (Q === ve || (Q == null || Q.scrollIntoView({
        block: "nearest"
      }), Q === le && w && (w.scrollTop = 0), Q === J && w && (w.scrollTop = w.scrollHeight), Q == null || Q.focus(), document.activeElement !== ve))
        return;
  }, [
    K,
    w
  ]), W = ue(
    () => j([
      L,
      $
    ]),
    [
      j,
      L,
      $
    ]
  );
  G(() => {
    Z && W();
  }, [
    Z,
    W
  ]);
  const { onOpenChange: B, triggerPointerDownPosRef: M } = y;
  G(() => {
    if ($) {
      let ne = {
        x: 0,
        y: 0
      };
      const le = (J) => {
        var ve, Q, Re, Ue;
        ne = {
          x: Math.abs(Math.round(J.pageX) - ((ve = (Q = M.current) === null || Q === void 0 ? void 0 : Q.x) !== null && ve !== void 0 ? ve : 0)),
          y: Math.abs(Math.round(J.pageY) - ((Re = (Ue = M.current) === null || Ue === void 0 ? void 0 : Ue.y) !== null && Re !== void 0 ? Re : 0))
        };
      }, he = (J) => {
        ne.x <= 10 && ne.y <= 10 ? J.preventDefault() : $.contains(J.target) || B(!1), document.removeEventListener("pointermove", le), M.current = null;
      };
      return M.current !== null && (document.addEventListener("pointermove", le), document.addEventListener("pointerup", he, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", le), document.removeEventListener("pointerup", he, {
          capture: !0
        });
      };
    }
  }, [
    $,
    B,
    M
  ]), G(() => {
    const ne = () => B(!1);
    return window.addEventListener("blur", ne), window.addEventListener("resize", ne), () => {
      window.removeEventListener("blur", ne), window.removeEventListener("resize", ne);
    };
  }, [
    B
  ]);
  const [D, U] = xh((ne) => {
    const le = K().filter(
      (ve) => !ve.disabled
    ), he = le.find(
      (ve) => ve.ref.current === document.activeElement
    ), J = yh(le, ne, he);
    J && setTimeout(
      () => J.ref.current.focus()
    );
  }), q = ue((ne, le, he) => {
    const J = !A.current && !he;
    (y.value !== void 0 && y.value === le || J) && (I(ne), J && (A.current = !0));
  }, [
    y.value
  ]), oe = ue(
    () => $ == null ? void 0 : $.focus(),
    [
      $
    ]
  ), ce = ue((ne, le, he) => {
    const J = !A.current && !he;
    (y.value !== void 0 && y.value === le || J) && te(ne);
  }, [
    y.value
  ]), ye = r === "popper" ? Yu : aS, be = ye === Yu ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: d,
    arrowPadding: u,
    collisionBoundary: p,
    collisionPadding: m,
    sticky: h,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ x(vh, {
    scope: n,
    content: $,
    viewport: w,
    onViewportChange: P,
    itemRefCallback: q,
    selectedItem: L,
    onItemLeave: oe,
    itemTextRefCallback: ce,
    focusSelectedItem: W,
    selectedItemText: ee,
    position: r,
    isPositioned: Z,
    searchRef: D
  }, /* @__PURE__ */ x(Qs, {
    as: nn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Ys, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (ne) => {
      ne.preventDefault();
    },
    onUnmountAutoFocus: H(o, (ne) => {
      var le;
      (le = y.trigger) === null || le === void 0 || le.focus({
        preventScroll: !0
      }), ne.preventDefault();
    })
  }, /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (ne) => ne.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ x(ye, S({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (ne) => ne.preventDefault()
  }, b, be, {
    onPlaced: () => O(!0),
    ref: k,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: H(b.onKeyDown, (ne) => {
      const le = ne.ctrlKey || ne.altKey || ne.metaKey;
      if (ne.key === "Tab" && ne.preventDefault(), !le && ne.key.length === 1 && U(ne.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(ne.key)) {
        let J = K().filter(
          (ve) => !ve.disabled
        ).map(
          (ve) => ve.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(ne.key) && (J = J.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(ne.key)) {
          const ve = ne.target, Q = J.indexOf(ve);
          J = J.slice(Q + 1);
        }
        setTimeout(
          () => j(J)
        ), ne.preventDefault();
      }
    })
  }))))));
}), aS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Tr(Qr, n), s = ai(Qr, n), [i, c] = Y(null), [l, d] = Y(null), u = we(
    t,
    (k) => d(k)
  ), p = pd(n), m = V(!1), h = V(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, $ = ue(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const k = a.trigger.getBoundingClientRect(), L = l.getBoundingClientRect(), I = a.valueNode.getBoundingClientRect(), ee = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ve = ee.left - L.left, Q = I.left - ve, Re = k.left - Q, Ue = k.width + Re, dt = Math.max(Ue, L.width), T = window.innerWidth - bn, z = Uo(Q, [
          bn,
          T - dt
        ]);
        i.style.minWidth = Ue + "px", i.style.left = z + "px";
      } else {
        const ve = L.right - ee.right, Q = window.innerWidth - I.right - ve, Re = window.innerWidth - k.right - Q, Ue = k.width + Re, dt = Math.max(Ue, L.width), T = window.innerWidth - bn, z = Uo(Q, [
          bn,
          T - dt
        ]);
        i.style.minWidth = Ue + "px", i.style.right = z + "px";
      }
      const te = p(), K = window.innerHeight - bn * 2, Z = v.scrollHeight, O = window.getComputedStyle(l), A = parseInt(O.borderTopWidth, 10), j = parseInt(O.paddingTop, 10), W = parseInt(O.borderBottomWidth, 10), B = parseInt(O.paddingBottom, 10), M = A + j + Z + B + W, D = Math.min(g.offsetHeight * 5, M), U = window.getComputedStyle(v), q = parseInt(U.paddingTop, 10), oe = parseInt(U.paddingBottom, 10), ce = k.top + k.height / 2 - bn, ye = K - ce, be = g.offsetHeight / 2, ne = g.offsetTop + be, le = A + j + ne, he = M - le;
      if (le <= ce) {
        const ve = g === te[te.length - 1].ref.current;
        i.style.bottom = "0px";
        const Q = l.clientHeight - v.offsetTop - v.offsetHeight, Re = Math.max(ye, be + (ve ? oe : 0) + Q + W), Ue = le + Re;
        i.style.height = Ue + "px";
      } else {
        const ve = g === te[0].ref.current;
        i.style.top = "0px";
        const Re = Math.max(ce, A + v.offsetTop + (ve ? q : 0) + be) + he;
        i.style.height = Re + "px", v.scrollTop = le - ce + v.offsetTop;
      }
      i.style.margin = `${bn}px 0`, i.style.minHeight = D + "px", i.style.maxHeight = K + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
      );
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    l,
    v,
    g,
    b,
    a.dir,
    r
  ]);
  pt(
    () => $(),
    [
      $
    ]
  );
  const [_, w] = Y();
  pt(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const P = ue((k) => {
    k && h.current === !0 && ($(), y == null || y(), h.current = !1);
  }, [
    $,
    y
  ]);
  return /* @__PURE__ */ x(sS, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: P
  }, /* @__PURE__ */ x("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ x(ie.div, S({}, o, {
    ref: u,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Yu = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = bn, ...a } = e, s = md(n);
  return /* @__PURE__ */ x(da, S({}, s, a, {
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [sS, iS] = po(Qr, {}), Hu = "SelectViewport", cS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = ai(Hu, n), a = iS(Hu, n), s = we(t, o.onViewportChange), i = V(0);
  return /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(oi.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, S({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: s,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: H(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: u } = a;
      if (u != null && u.current && d) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - bn * 2, h = parseFloat(d.style.minHeight), v = parseFloat(d.style.height), g = Math.max(h, v);
          if (g < m) {
            const b = g + p, y = Math.min(m, b), $ = b - y;
            d.style.height = y + "px", d.style.bottom === "0px" && (l.scrollTop = $ > 0 ? $ : 0, d.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), lS = "SelectGroup", [dS, uS] = po(lS), fS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = rt();
  return /* @__PURE__ */ x(dS, {
    scope: n,
    id: o
  }, /* @__PURE__ */ x(ie.div, S({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), pS = "SelectLabel", mS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = uS(pS, n);
  return /* @__PURE__ */ x(ie.div, S({
    id: o.id
  }, r, {
    ref: t
  }));
}), Ac = "SelectItem", [hS, gh] = po(Ac), vS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = Tr(Ac, n), c = ai(Ac, n), l = i.value === r, [d, u] = Y(a ?? ""), [p, m] = Y(!1), h = we(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = rt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ x(hS, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: ue((b) => {
      u((y) => {
        var $;
        return y || (($ = b == null ? void 0 : b.textContent) !== null && $ !== void 0 ? $ : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ x(oi.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: d
  }, /* @__PURE__ */ x(ie.div, S({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": l && p,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: h,
    onFocus: H(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: H(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: H(s.onPointerUp, g),
    onPointerMove: H(s.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: H(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: H(s.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (YC.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), Ha = "SelectItemText", gS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Tr(Ha, n), i = ai(Ha, n), c = gh(Ha, n), l = ZC(Ha, n), [d, u] = Y(null), p = we(
    t,
    (b) => u(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), m = d == null ? void 0 : d.textContent, h = yt(
    () => /* @__PURE__ */ x("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, m),
    [
      c.disabled,
      c.value,
      m
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return pt(() => (v(h), () => g(h)), [
    v,
    g,
    h
  ]), /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x(ie.span, S({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ fl(a.children, s.valueNode) : null);
}), bS = "SelectItemIndicator", xS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return gh(bS, n).isSelected ? /* @__PURE__ */ x(ie.span, S({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), yS = /* @__PURE__ */ R((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, S({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), bh = /* @__PURE__ */ R((e, t) => {
  const { value: n, ...r } = e, o = V(null), a = we(t, o), s = fo(n);
  return G(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && d) {
      const u = new Event("change", {
        bubbles: !0
      });
      d.call(i, n), i.dispatchEvent(u);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ x(mh, {
    asChild: !0
  }, /* @__PURE__ */ x("select", S({}, r, {
    ref: a,
    defaultValue: n
  })));
});
bh.displayName = "BubbleSelect";
function xh(e) {
  const t = ze(e), n = V(""), r = V(0), o = ue((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = ue(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return G(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function yh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = $S(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function $S(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const wS = qC, $h = QC, _S = eS, CS = tS, SS = nS, wh = rS, ES = cS, NS = fS, _h = mS, Ch = vS, PS = gS, TS = xS, Sh = yS, hd = wS, kS = NS, vd = _S, si = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  $h,
  {
    ref: r,
    className: F(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(CS, { asChild: !0, children: /* @__PURE__ */ f.exports.jsx(Do, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
si.displayName = $h.displayName;
const ii = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f.exports.jsx(SS, { children: /* @__PURE__ */ f.exports.jsx(
  wh,
  {
    ref: o,
    className: F(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ f.exports.jsx(
      ES,
      {
        className: F(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
ii.displayName = wh.displayName;
const OS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  _h,
  {
    ref: n,
    className: F("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
OS.displayName = _h.displayName;
const ci = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Ch,
  {
    ref: r,
    className: F(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(TS, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ f.exports.jsx(PS, { children: t })
    ]
  }
));
ci.displayName = Ch.displayName;
const MS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Sh,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
MS.displayName = Sh.displayName;
const Eh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Eh.displayName = "Card";
const DS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
DS.displayName = "CardHeader";
const RS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "h3",
  {
    ref: n,
    className: F(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
RS.displayName = "CardTitle";
const AS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "p",
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
AS.displayName = "CardDescription";
const jS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { ref: n, className: F("p-6 pt-0", e), ...t }));
jS.displayName = "CardContent";
const IS = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    ref: n,
    className: F(" flex items-center p-6 pt-0", e),
    ...t
  }
));
IS.displayName = "CardFooter";
const Nh = "Checkbox", [LS, DO] = Ze(Nh), [FS, VS] = LS(Nh), US = /* @__PURE__ */ R((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    ($) => p($)
  ), h = V(!1), v = u ? Boolean(u.closest("form")) : !0, [g = !1, b] = tt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = V(g);
  return G(() => {
    const $ = u == null ? void 0 : u.form;
    if ($) {
      const _ = () => b(y.current);
      return $.addEventListener("reset", _), () => $.removeEventListener("reset", _);
    }
  }, [
    u,
    b
  ]), /* @__PURE__ */ x(FS, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "checkbox",
    "aria-checked": lr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Ph(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, d, {
    ref: m,
    onKeyDown: H(e.onKeyDown, ($) => {
      $.key === "Enter" && $.preventDefault();
    }),
    onClick: H(e.onClick, ($) => {
      b(
        (_) => lr(_) ? !0 : !_
      ), v && (h.current = $.isPropagationStopped(), h.current || $.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(BS, {
    control: u,
    bubbles: !h.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), WS = "CheckboxIndicator", zS = /* @__PURE__ */ R((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = VS(WS, n);
  return /* @__PURE__ */ x(Xe, {
    present: r || lr(a.state) || a.state === !0
  }, /* @__PURE__ */ x(ie.span, S({
    "data-state": Ph(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), BS = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = V(null), s = fo(n), i = ca(t);
  return G(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = lr(n), u.call(c, lr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", S({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: lr(n) ? !1 : n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function lr(e) {
  return e === "indeterminate";
}
function Ph(e) {
  return lr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Th = US, YS = zS, kh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Th,
  {
    ref: n,
    className: F(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx(
      YS,
      {
        className: F("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" })
      }
    )
  }
));
kh.displayName = Th.displayName;
const Oh = "DropdownMenu", [HS, RO] = Ze(Oh, [
  fa
]), _t = fa(), [KS, Mh] = HS(Oh), GS = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = _t(t), l = V(null), [d = !1, u] = tt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ x(KS, {
    scope: t,
    triggerId: rt(),
    triggerRef: l,
    contentId: rt(),
    open: d,
    onOpenChange: u,
    onOpenToggle: ue(
      () => u(
        (p) => !p
      ),
      [
        u
      ]
    ),
    modal: i
  }, /* @__PURE__ */ x(Wl, S({}, c, {
    open: d,
    onOpenChange: u,
    dir: r,
    modal: i
  }), n));
}, ZS = "DropdownMenuTrigger", qS = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Mh(ZS, n), s = _t(n);
  return /* @__PURE__ */ x(zl, S({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, S({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ra(t, a.triggerRef),
    onPointerDown: H(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: H(e.onKeyDown, (i) => {
      r || ([
        "Enter",
        " "
      ].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(i.key) && i.preventDefault());
    })
  })));
}), XS = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = _t(t);
  return /* @__PURE__ */ x(Bl, S({}, r, n));
}, QS = "DropdownMenuContent", JS = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mh(QS, n), a = _t(n), s = V(!1);
  return /* @__PURE__ */ x(Yl, S({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: H(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || l;
      (!o.modal || d) && (s.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), eE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Hl, S({}, o, r, {
    ref: t
  }));
}), tE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Kl, S({}, o, r, {
    ref: t
  }));
}), nE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Gl, S({}, o, r, {
    ref: t
  }));
}), rE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Zl, S({}, o, r, {
    ref: t
  }));
}), oE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(ql, S({}, o, r, {
    ref: t
  }));
}), aE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Xl, S({}, o, r, {
    ref: t
  }));
}), sE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ql, S({}, o, r, {
    ref: t
  }));
}), iE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Jl, S({}, o, r, {
    ref: t
  }));
}), cE = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = _t(t), [i = !1, c] = tt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(ed, S({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, lE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(td, S({}, o, r, {
    ref: t
  }));
}), dE = /* @__PURE__ */ R((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(nd, S({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), uE = GS, fE = qS, Dh = XS, Rh = JS, pE = eE, Ah = tE, jh = nE, Ih = rE, mE = oE, Lh = aE, Fh = sE, Vh = iE, hE = cE, Uh = lE, Wh = dE, AO = uE, jO = fE, IO = pE, LO = Dh, FO = hE, VO = mE, vE = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Uh,
  {
    ref: o,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(ao, { className: "ml-auto h-4 w-4" })
    ]
  }
));
vE.displayName = Uh.displayName;
const gE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Wh,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
gE.displayName = Wh.displayName;
const bE = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(Dh, { children: /* @__PURE__ */ f.exports.jsx(
  Rh,
  {
    ref: r,
    sideOffset: t,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
bE.displayName = Rh.displayName;
const xE = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  jh,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
xE.displayName = jh.displayName;
const yE = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  Ih,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Fh, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
yE.displayName = Ih.displayName;
const $E = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Lh,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Fh, { children: /* @__PURE__ */ f.exports.jsx(Vs, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
$E.displayName = Lh.displayName;
const wE = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ah,
  {
    ref: r,
    className: F(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
wE.displayName = Ah.displayName;
const _E = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Vh,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
_E.displayName = Vh.displayName;
const CE = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
CE.displayName = "DropdownMenuShortcut";
const jc = "horizontal", SE = [
  "horizontal",
  "vertical"
], zh = /* @__PURE__ */ R((e, t) => {
  const { decorative: n, orientation: r = jc, ...o } = e, a = Bh(r) ? r : jc, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ x(ie.div, S({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
zh.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Bh(r) ? new Error(EE(o, n)) : null;
  }
};
function EE(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${jc}\`.`;
}
function Bh(e) {
  return SE.includes(e);
}
const Yh = zh, _a = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
    Yh,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: F(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
_a.displayName = Yh.displayName;
function Hr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function NE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Hh(...e) {
  return (t) => e.forEach(
    (n) => NE(n, t)
  );
}
function Ca(...e) {
  return ue(Hh(...e), e);
}
function PE(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ ct(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: p, children: m, ...h } = u, v = (p == null ? void 0 : p[e][c]) || i, g = yt(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ x(v.Provider, {
        value: g
      }, m);
    }
    function d(u, p) {
      const m = (p == null ? void 0 : p[e][c]) || i, h = He(m);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      d
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ ct(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return yt(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    TE(o, ...t)
  ];
}
function TE(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const u = c(a)[`__scope${l}`];
        return {
          ...i,
          ...u
        };
      }, {});
      return yt(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Ic = Boolean(globalThis == null ? void 0 : globalThis.document) ? Is : () => {
}, kE = C["useId".toString()] || (() => {
});
let OE = 0;
function Gi(e) {
  const [t, n] = C.useState(kE());
  return Ic(() => {
    e || n(
      (r) => r ?? String(OE++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function mr(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), yt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function ME({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = DE({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = mr(n), c = ue((l) => {
    if (a) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function DE({ defaultProp: e, onChange: t }) {
  const n = Y(e), [r] = n, o = V(r), a = mr(t);
  return G(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const gd = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e, o = Nt.toArray(n), a = o.find(AE);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Nt.count(s) > 1 ? Nt.only(null) : /* @__PURE__ */ Un(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(Lc, S({}, r, {
      ref: t
    }), /* @__PURE__ */ Un(s) ? /* @__PURE__ */ ro(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(Lc, S({}, r, {
    ref: t
  }), n);
});
gd.displayName = "Slot";
const Lc = /* @__PURE__ */ R((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Un(n) ? /* @__PURE__ */ ro(n, {
    ...jE(r, n.props),
    ref: Hh(t, n.ref)
  }) : Nt.count(n) > 1 ? Nt.only(null) : null;
});
Lc.displayName = "SlotClone";
const RE = ({ children: e }) => /* @__PURE__ */ x(jt, null, e);
function AE(e) {
  return /* @__PURE__ */ Un(e) && e.type === RE;
}
function jE(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...i) => {
      a == null || a(...i), o == null || o(...i);
    } : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const IE = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], li = IE.reduce((e, t) => {
  const n = /* @__PURE__ */ R((r, o) => {
    const { asChild: a, ...s } = r, i = a ? gd : t;
    return G(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, S({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function LE(e, t) {
  e && Fs(
    () => e.dispatchEvent(t)
  );
}
function FE(e) {
  const t = mr(e);
  G(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Fc = "dismissableLayer.update", VE = "dismissableLayer.pointerDownOutside", UE = "dismissableLayer.focusOutside";
let Ku;
const WE = /* @__PURE__ */ ct({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zE = /* @__PURE__ */ R((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = He(WE), [d, u] = Y(null), [, p] = Y({}), m = Ca(
    t,
    (P) => u(P)
  ), h = Array.from(l.layers), [v] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = h.indexOf(v), b = d ? h.indexOf(d) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, $ = b >= g, _ = BE((P) => {
    const k = P.target, L = [
      ...l.branches
    ].some(
      (I) => I.contains(k)
    );
    !$ || L || (o == null || o(P), s == null || s(P), P.defaultPrevented || i == null || i());
  }), w = YE((P) => {
    const k = P.target;
    [
      ...l.branches
    ].some(
      (I) => I.contains(k)
    ) || (a == null || a(P), s == null || s(P), P.defaultPrevented || i == null || i());
  });
  return FE((P) => {
    b === l.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && i && (P.preventDefault(), i()));
  }), G(() => {
    if (d)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ku = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Gu(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Ku);
      };
  }, [
    d,
    n,
    l
  ]), G(() => () => {
    d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Gu());
  }, [
    d,
    l
  ]), G(() => {
    const P = () => p({});
    return document.addEventListener(Fc, P), () => document.removeEventListener(Fc, P);
  }, []), /* @__PURE__ */ x(li.div, S({}, c, {
    ref: m,
    style: {
      pointerEvents: y ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Hr(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: Hr(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: Hr(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function BE(e) {
  const t = mr(e), n = V(!1), r = V(() => {
  });
  return G(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Kh(VE, t, i, {
            discrete: !0
          });
        };
        const i = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (document.removeEventListener("click", r.current), r.current = c, document.addEventListener("click", r.current, {
          once: !0
        })) : c();
      }
      n.current = !1;
    }, a = window.setTimeout(() => {
      document.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), document.removeEventListener("pointerdown", o), document.removeEventListener("click", r.current);
    };
  }, [
    t
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function YE(e) {
  const t = mr(e), n = V(!1);
  return G(() => {
    const r = (o) => {
      o.target && !n.current && Kh(UE, t, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", r), () => document.removeEventListener("focusin", r);
  }, [
    t
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Gu() {
  const e = new CustomEvent(Fc);
  document.dispatchEvent(e);
}
function Kh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? LE(o, a) : o.dispatchEvent(a);
}
const Zi = "focusScope.autoFocusOnMount", qi = "focusScope.autoFocusOnUnmount", Zu = {
  bubbles: !1,
  cancelable: !0
}, HE = /* @__PURE__ */ R((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = Y(null), l = mr(o), d = mr(a), u = V(null), p = Ca(
    t,
    (v) => c(v)
  ), m = V({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  G(() => {
    if (r) {
      let v = function(b) {
        if (m.paused || !i)
          return;
        const y = b.target;
        i.contains(y) ? u.current = y : sr(u.current, {
          select: !0
        });
      }, g = function(b) {
        m.paused || !i || i.contains(b.relatedTarget) || sr(u.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", v), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g);
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), G(() => {
    if (i) {
      Xu.add(m);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Zi, Zu);
        i.addEventListener(Zi, l), i.dispatchEvent(b), b.defaultPrevented || (KE(QE(Gh(i)), {
          select: !0
        }), document.activeElement === v && sr(i));
      }
      return () => {
        i.removeEventListener(Zi, l), setTimeout(() => {
          const b = new CustomEvent(qi, Zu);
          i.addEventListener(qi, d), i.dispatchEvent(b), b.defaultPrevented || sr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(qi, d), Xu.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    d,
    m
  ]);
  const h = ue((v) => {
    if (!n && !r || m.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [$, _] = GE(y);
      $ && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && sr($, {
        select: !0
      })) : v.shiftKey && b === $ && (v.preventDefault(), n && sr(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(li.div, S({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: h
  }));
});
function KE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (sr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function GE(e) {
  const t = Gh(e), n = qu(t, e), r = qu(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Gh(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function qu(e, t) {
  for (const n of e)
    if (!ZE(n, {
      upTo: t
    }))
      return n;
}
function ZE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function qE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function sr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && qE(e) && t && e.select();
  }
}
const Xu = XE();
function XE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qu(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Qu(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function QE(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const JE = /* @__PURE__ */ R((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(li.div, S({}, o, {
    ref: t
  })), r) : null;
});
function eN(e, t) {
  return Ls((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const di = (e) => {
  const { present: t, children: n } = e, r = tN(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Nt.only(n), a = Ca(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ ro(o, {
    ref: a
  }) : null;
};
di.displayName = "Presence";
function tN(e) {
  const [t, n] = Y(), r = V({}), o = V(e), a = V("none"), s = e ? "mounted" : "unmounted", [i, c] = eN(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return G(() => {
    const l = Ka(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), Ic(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const p = a.current, m = Ka(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(d && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), Ic(() => {
    if (t) {
      const l = (u) => {
        const m = Ka(r.current).includes(u.animationName);
        u.target === t && m && Fs(
          () => c("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (a.current = Ka(r.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: ue((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ka(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Xi = 0;
function nN() {
  G(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Ju()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Ju()), Xi++, () => {
      Xi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Xi--;
    };
  }, []);
}
function Ju() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Zh = qp(), Qi = function() {
}, ui = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Qi,
    onWheelCapture: Qi,
    onTouchMoveCapture: Qi
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, p = e.sideCar, m = e.noIsolation, h = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = jl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = p, _ = Zp([n, t]), w = mt(mt({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    d && C.createElement($, { sideCar: Zh, removeScrollBar: l, shards: u, noIsolation: m, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), mt(mt({}, w), { ref: _ })) : C.createElement(b, mt({}, w, { className: c, ref: _ }), i)
  );
});
ui.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ui.classNames = {
  fullWidth: To,
  zeroRight: Po
};
var Vc = !1;
if (typeof window < "u")
  try {
    var Ga = Object.defineProperty({}, "passive", {
      get: function() {
        return Vc = !0, !0;
      }
    });
    window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga);
  } catch {
    Vc = !1;
  }
var Fr = Vc ? { passive: !1 } : !1, rN = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, oN = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, ef = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = qh(e, n);
    if (r) {
      var o = Xh(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, aN = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, sN = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, qh = function(e, t) {
  return e === "v" ? rN(t) : oN(t);
}, Xh = function(e, t) {
  return e === "v" ? aN(t) : sN(t);
}, iN = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, cN = function(e, t, n, r, o) {
  var a = iN(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, d = s > 0, u = 0, p = 0;
  do {
    var m = Xh(e, i), h = m[0], v = m[1], g = m[2], b = v - g - a * h;
    (h || b) && qh(e, i) && (u += b, p += h), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (d && (o && u === 0 || !o && s > u) || !d && (o && p === 0 || !o && -s > p)) && (l = !0), l;
}, Za = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, tf = function(e) {
  return [e.deltaX, e.deltaY];
}, nf = function(e) {
  return e && "current" in e ? e.current : e;
}, lN = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dN = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, uN = 0, Vr = [];
function fN(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(uN++)[0], a = C.useState(function() {
    return Il();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Gp([e.lockRef.current], (e.shards || []).map(nf), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2)
      return !s.current.allowPinchZoom;
    var b = Za(v), y = n.current, $ = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, P = v.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && k === "h" && P.type === "range")
      return !1;
    var L = ef(k, P);
    if (!L)
      return !0;
    if (L ? w = k : (w = k === "v" ? "h" : "v", L = ef(k, P)), !L)
      return !1;
    if (!r.current && "changedTouches" in v && ($ || _) && (r.current = w), !w)
      return !0;
    var I = r.current || w;
    return cN(I, g, v, I === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Vr.length || Vr[Vr.length - 1] !== a)) {
      var b = "deltaY" in g ? tf(g) : Za(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && lN(w.delta, b);
      })[0];
      if (y && y.should) {
        g.preventDefault();
        return;
      }
      if (!y) {
        var $ = (s.current.shards || []).map(nf).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, y) {
    var $ = { name: v, delta: g, target: b, should: y };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), d = C.useCallback(function(v) {
    n.current = Za(v), r.current = void 0;
  }, []), u = C.useCallback(function(v) {
    l(v.type, tf(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, Za(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Vr.push(a), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Fr), document.addEventListener("touchmove", c, Fr), document.addEventListener("touchstart", d, Fr), function() {
      Vr = Vr.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, Fr), document.removeEventListener("touchmove", c, Fr), document.removeEventListener("touchstart", d, Fr);
    };
  }, []);
  var m = e.removeScrollBar, h = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    h ? C.createElement(a, { styles: dN(o) }) : null,
    m ? C.createElement(em, { gapMode: "margin" }) : null
  );
}
const pN = Qp(Zh, fN);
var Qh = C.forwardRef(function(e, t) {
  return C.createElement(ui, mt({}, e, { ref: t, sideCar: pN }));
});
Qh.classNames = ui.classNames;
const mN = Qh, Jh = "Dialog", [ev, UO] = PE(Jh), [hN, kr] = ev(Jh), vN = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = V(null), c = V(null), [l = !1, d] = ME({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(hN, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Gi(),
    titleId: Gi(),
    descriptionId: Gi(),
    open: l,
    onOpenChange: d,
    onOpenToggle: ue(
      () => d(
        (u) => !u
      ),
      [
        d
      ]
    ),
    modal: s
  }, n);
}, tv = "DialogPortal", [gN, nv] = ev(tv, {
  forceMount: void 0
}), bN = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = kr(tv, t);
  return /* @__PURE__ */ x(gN, {
    scope: t,
    forceMount: n
  }, Nt.map(
    r,
    (s) => /* @__PURE__ */ x(di, {
      present: n || a.open
    }, /* @__PURE__ */ x(JE, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Uc = "DialogOverlay", xN = /* @__PURE__ */ R((e, t) => {
  const n = nv(Uc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = kr(Uc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(di, {
    present: r || a.open
  }, /* @__PURE__ */ x(yN, S({}, o, {
    ref: t
  }))) : null;
}), yN = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = kr(Uc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(mN, {
      as: gd,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(li.div, S({
      "data-state": ov(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Wo = "DialogContent", $N = /* @__PURE__ */ R((e, t) => {
  const n = nv(Wo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = kr(Wo, e.__scopeDialog);
  return /* @__PURE__ */ x(di, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(wN, S({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(_N, S({}, o, {
    ref: t
  })));
}), wN = /* @__PURE__ */ R((e, t) => {
  const n = kr(Wo, e.__scopeDialog), r = V(null), o = Ca(t, n.contentRef, r);
  return G(() => {
    const a = r.current;
    if (a)
      return ua(a);
  }, []), /* @__PURE__ */ x(rv, S({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Hr(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Hr(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: Hr(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), _N = /* @__PURE__ */ R((e, t) => {
  const n = kr(Wo, e.__scopeDialog), r = V(!1);
  return /* @__PURE__ */ x(rv, S({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o), !o.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var a, s;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o), o.defaultPrevented || (r.current = !0);
      const i = o.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(i)) && o.preventDefault();
    }
  }));
}), rv = /* @__PURE__ */ R((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = kr(Wo, n), c = V(null), l = Ca(t, c);
  return nN(), /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x(HE, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(zE, S({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": ov(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function ov(e) {
  return e ? "open" : "closed";
}
const CN = vN, SN = bN, EN = xN, NN = $N;
var rf = 1, PN = 0.9, TN = 0.3, Ji = 0.1, kN = 0, ec = 0.999, ON = 0.9999, MN = 0.99, of = /[\\\/\-_+.# \t"@\[\(\{&]/, DN = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Wc(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? rf : MN;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, d, u; i >= 0; )
    l = Wc(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= rf : of.test(e.charAt(i - 1)) ? (l *= PN, u = e.slice(o, i - 1).match(DN), u && o > 0 && (l *= Math.pow(ec, u.length))) : of.test(e.slice(o, i - 1)) ? (l *= kN, o > 0 && (l *= Math.pow(ec, i - o))) : (l *= TN, o > 0 && (l *= Math.pow(ec, i - o))), e.charAt(i) !== t.charAt(a) && (l *= ON)), l < Ji && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (d = Wc(e, t, n, r, i + 1, a + 2), d * Ji > l && (l = d * Ji)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function RN(e, t) {
  return Wc(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var AN = RN, jN = '[cmdk-list-sizer=""]', No = '[cmdk-group=""]', tc = '[cmdk-group-items=""]', IN = '[cmdk-group-heading=""]', av = '[cmdk-item=""]', af = `${av}:not([aria-disabled="true"])`, zc = "cmdk-item-select", Ln = "data-value", LN = (e, t) => AN(e, t), sv = C.createContext(void 0), Sa = () => C.useContext(sv), iv = C.createContext(void 0), bd = () => C.useContext(iv), cv = C.createContext(void 0), lv = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = Ur(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = Ur(() => /* @__PURE__ */ new Set()), a = Ur(() => /* @__PURE__ */ new Map()), s = Ur(() => /* @__PURE__ */ new Map()), i = Ur(() => /* @__PURE__ */ new Set()), c = dv(e), { label: l, children: d, value: u, onValueChange: p, filter: m, shouldFilter: h, ...v } = e, g = C.useId(), b = C.useId(), y = C.useId(), $ = ZN();
  mo(() => {
    if (u !== void 0) {
      let M = u.trim().toLowerCase();
      r.current.value = M, $(6, ee), _.emit();
    }
  }, [u]);
  let _ = C.useMemo(() => ({ subscribe: (M) => (i.current.add(M), () => i.current.delete(M)), snapshot: () => r.current, setState: (M, D, U) => {
    var q, oe, ce;
    if (!Object.is(r.current[M], D)) {
      if (r.current[M] = D, M === "search")
        I(), k(), $(1, L);
      else if (M === "value")
        if (((q = c.current) == null ? void 0 : q.value) !== void 0) {
          (ce = (oe = c.current).onValueChange) == null || ce.call(oe, D);
          return;
        } else
          U || $(5, ee);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((M) => M());
  } }), []), w = C.useMemo(() => ({ value: (M, D) => {
    D !== s.current.get(M) && (s.current.set(M, D), r.current.filtered.items.set(M, P(D)), $(2, () => {
      k(), _.emit();
    }));
  }, item: (M, D) => (o.current.add(M), D && (a.current.has(D) ? a.current.get(D).add(M) : a.current.set(D, /* @__PURE__ */ new Set([M]))), $(3, () => {
    I(), k(), r.current.value || L(), _.emit();
  }), () => {
    s.current.delete(M), o.current.delete(M), r.current.filtered.items.delete(M), $(4, () => {
      I(), L(), _.emit();
    });
  }), group: (M) => (a.current.has(M) || a.current.set(M, /* @__PURE__ */ new Set()), () => {
    s.current.delete(M), a.current.delete(M);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: y, labelId: b }), []);
  function P(M) {
    var D;
    let U = ((D = c.current) == null ? void 0 : D.filter) ?? LN;
    return M ? U(M, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let M = r.current.filtered.items, D = [];
    r.current.filtered.groups.forEach((q) => {
      let oe = a.current.get(q), ce = 0;
      oe.forEach((ye) => {
        let be = M.get(ye);
        ce = Math.max(be, ce);
      }), D.push([q, ce]);
    });
    let U = n.current.querySelector(jN);
    K().sort((q, oe) => {
      let ce = q.getAttribute(Ln), ye = oe.getAttribute(Ln);
      return (M.get(ye) ?? 0) - (M.get(ce) ?? 0);
    }).forEach((q) => {
      let oe = q.closest(tc);
      oe ? oe.appendChild(q.parentElement === oe ? q : q.closest(`${tc} > *`)) : U.appendChild(q.parentElement === U ? q : q.closest(`${tc} > *`));
    }), D.sort((q, oe) => oe[1] - q[1]).forEach((q) => {
      let oe = n.current.querySelector(`${No}[${Ln}="${q[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function L() {
    let M = K().find((U) => !U.ariaDisabled), D = M == null ? void 0 : M.getAttribute(Ln);
    _.setState("value", D || void 0);
  }
  function I() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let M = 0;
    for (let D of o.current) {
      let U = s.current.get(D), q = P(U);
      r.current.filtered.items.set(D, q), q > 0 && M++;
    }
    for (let [D, U] of a.current)
      for (let q of U)
        if (r.current.filtered.items.get(q) > 0) {
          r.current.filtered.groups.add(D);
          break;
        }
    r.current.filtered.count = M;
  }
  function ee() {
    var M, D, U;
    let q = te();
    q && (((M = q.parentElement) == null ? void 0 : M.firstChild) === q && ((U = (D = q.closest(No)) == null ? void 0 : D.querySelector(IN)) == null || U.scrollIntoView({ block: "nearest" })), q.scrollIntoView({ block: "nearest" }));
  }
  function te() {
    return n.current.querySelector(`${av}[aria-selected="true"]`);
  }
  function K() {
    return Array.from(n.current.querySelectorAll(af));
  }
  function Z(M) {
    let D = K()[M];
    D && _.setState("value", D.getAttribute(Ln));
  }
  function O(M) {
    var D;
    let U = te(), q = K(), oe = q.findIndex((ye) => ye === U), ce = q[oe + M];
    (D = c.current) != null && D.loop && (ce = oe + M < 0 ? q[q.length - 1] : oe + M === q.length ? q[0] : q[oe + M]), ce && _.setState("value", ce.getAttribute(Ln));
  }
  function A(M) {
    let D = te(), U = D == null ? void 0 : D.closest(No), q;
    for (; U && !q; )
      U = M > 0 ? KN(U, No) : GN(U, No), q = U == null ? void 0 : U.querySelector(af);
    q ? _.setState("value", q.getAttribute(Ln)) : O(M);
  }
  let j = () => Z(K().length - 1), W = (M) => {
    M.preventDefault(), M.metaKey ? j() : M.altKey ? A(1) : O(1);
  }, B = (M) => {
    M.preventDefault(), M.metaKey ? Z(0) : M.altKey ? A(-1) : O(-1);
  };
  return C.createElement("div", { ref: Ea([n, t]), ...v, "cmdk-root": "", onKeyDown: (M) => {
    var D;
    if ((D = v.onKeyDown) == null || D.call(v, M), !M.defaultPrevented)
      switch (M.key) {
        case "n":
        case "j": {
          M.ctrlKey && W(M);
          break;
        }
        case "ArrowDown": {
          W(M);
          break;
        }
        case "p":
        case "k": {
          M.ctrlKey && B(M);
          break;
        }
        case "ArrowUp": {
          B(M);
          break;
        }
        case "Home": {
          M.preventDefault(), Z(0);
          break;
        }
        case "End": {
          M.preventDefault(), j();
          break;
        }
        case "Enter": {
          M.preventDefault();
          let U = te();
          if (U) {
            let q = new Event(zc);
            U.dispatchEvent(q);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: qN }, l), C.createElement(iv.Provider, { value: _ }, C.createElement(sv.Provider, { value: w }, d)));
}), FN = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(cv), a = Sa(), s = dv(e);
  mo(() => a.item(n, o), []);
  let i = uv(n, r, [e.value, e.children, r]), c = bd(), l = Jr((b) => b.value && b.value === i.current), d = Jr((b) => a.filter() === !1 ? !0 : b.search ? b.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let b = r.current;
    if (!(!b || e.disabled))
      return b.addEventListener(zc, u), () => b.removeEventListener(zc, u);
  }, [d, e.onSelect, e.disabled]);
  function u() {
    var b, y;
    (y = (b = s.current).onSelect) == null || y.call(b, i.current);
  }
  function p() {
    c.setState("value", i.current, !0);
  }
  if (!d)
    return null;
  let { disabled: m, value: h, onSelect: v, ...g } = e;
  return C.createElement("div", { ref: Ea([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : p, onClick: m ? void 0 : u }, e.children);
}), VN = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = Sa(), d = Jr((p) => l.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  mo(() => l.group(a), []), uv(a, s, [e.value, e.heading, i]);
  let u = C.createElement(cv.Provider, { value: a }, r);
  return C.createElement("div", { ref: Ea([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, u));
}), UN = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Jr((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: Ea([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), WN = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = bd(), s = Jr((c) => c.search), i = Sa();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), zN = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = Sa();
  return C.useEffect(() => {
    if (a.current && o.current) {
      let i = a.current, c = o.current, l, d = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let u = i.getBoundingClientRect().height;
          c.style.setProperty("--cmdk-list-height", u.toFixed(1) + "px");
        });
      });
      return d.observe(i), () => {
        cancelAnimationFrame(l), d.unobserve(i);
      };
    }
  }, []), C.createElement("div", { ref: Ea([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), BN = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(CN, { open: n, onOpenChange: r }, C.createElement(SN, { container: o }, C.createElement(EN, { "cmdk-overlay": "" }), C.createElement(NN, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(lv, { ref: t, ...a }))));
}), YN = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = Jr((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), HN = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Tt = Object.assign(lv, { List: zN, Item: FN, Input: WN, Group: VN, Separator: UN, Dialog: BN, Empty: YN, Loading: HN });
function KN(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function GN(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function dv(e) {
  let t = C.useRef(e);
  return mo(() => {
    t.current = e;
  }), t;
}
var mo = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function Ur(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ea(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Jr(e) {
  let t = bd(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function uv(e, t, n) {
  let r = C.useRef(), o = Sa();
  return mo(() => {
    var a;
    let s = (() => {
      var i;
      for (let c of n) {
        if (typeof c == "string")
          return c.trim().toLowerCase();
        if (typeof c == "object" && "current" in c && c.current)
          return (i = c.current.textContent) == null ? void 0 : i.trim().toLowerCase();
      }
    })();
    o.value(e, s), (a = t.current) == null || a.setAttribute(Ln, s), r.current = s;
  }), r;
}
var ZN = () => {
  let [e, t] = C.useState(), n = Ur(() => /* @__PURE__ */ new Map());
  return mo(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, qN = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Pn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt,
  {
    ref: n,
    className: F(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Pn.displayName = Tt.displayName;
const WO = ({ children: e, ...t }) => /* @__PURE__ */ f.exports.jsx(wC, { ...t, children: /* @__PURE__ */ f.exports.jsx(sh, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ f.exports.jsx(Pn, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Hn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ f.exports.jsx(gl, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ f.exports.jsx(
    Tt.Input,
    {
      ref: n,
      className: F(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
Hn.displayName = Tt.Input.displayName;
const Na = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.List,
  {
    ref: n,
    className: F("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Na.displayName = Tt.List.displayName;
const Kn = C.forwardRef((e, t) => /* @__PURE__ */ f.exports.jsx(
  Tt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Kn.displayName = Tt.Empty.displayName;
const Zt = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.Group,
  {
    ref: n,
    className: F(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Zt.displayName = Tt.Group.displayName;
const fi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tt.Separator,
  {
    ref: n,
    className: F("-mx-1 h-px bg-border", e),
    ...t
  }
));
fi.displayName = Tt.Separator.displayName;
const qt = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Tt.Item,
  {
    ref: r,
    onClick: t,
    className: F(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
qt.displayName = Tt.Item.displayName;
const XN = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
XN.displayName = "CommandShortcut";
const QN = /* @__PURE__ */ R((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ x("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ x(ie.div, S({}, o, {
    ref: t,
    style: {
      ...r,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
}), JN = QN, zO = JN;
function e5(e, t) {
  return Ls((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const fv = "ScrollArea", [pv, BO] = Ze(fv), [t5, Lt] = pv(fv), n5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = Y(null), [l, d] = Y(null), [u, p] = Y(null), [m, h] = Y(null), [v, g] = Y(null), [b, y] = Y(0), [$, _] = Y(0), [w, P] = Y(!1), [k, L] = Y(!1), I = we(
    t,
    (te) => c(te)
  ), ee = dn(o);
  return /* @__PURE__ */ x(t5, {
    scope: n,
    type: r,
    dir: ee,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: d,
    content: u,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: h,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: P,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: L,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ x(ie.div, S({
    dir: ee
  }, s, {
    ref: I,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: b + "px",
      ["--radix-scroll-area-corner-height"]: $ + "px",
      ...e.style
    }
  })));
}), r5 = "ScrollAreaViewport", o5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = Lt(r5, n), s = V(null), i = we(t, s, a.onViewportChange);
  return /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(ie.div, S({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: i,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ x("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), On = "ScrollAreaScrollbar", mv = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Lt(On, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return G(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ x(a5, S({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ x(s5, S({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ x(hv, S({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ x(xd, S({}, r, {
    ref: t
  })) : null;
}), a5 = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Lt(On, e.__scopeScrollArea), [a, s] = Y(!1);
  return G(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, d = () => {
        c = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", d);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ x(Xe, {
    present: n || a
  }, /* @__PURE__ */ x(hv, S({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), s5 = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Lt(On, e.__scopeScrollArea), a = e.orientation === "horizontal", s = mi(
    () => c("SCROLL_END"),
    100
  ), [i, c] = e5("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return G(() => {
    if (i === "idle") {
      const l = window.setTimeout(
        () => c("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    i,
    o.scrollHideDelay,
    c
  ]), G(() => {
    const l = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let u = l[d];
      const p = () => {
        const m = l[d];
        u !== m && (c("SCROLL"), s()), u = m;
      };
      return l.addEventListener("scroll", p), () => l.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ x(Xe, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ x(xd, S({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: H(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: H(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), hv = /* @__PURE__ */ R((e, t) => {
  const n = Lt(On, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = Y(!1), i = e.orientation === "horizontal", c = mi(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : d);
    }
  }, 10);
  return eo(n.viewport, c), eo(n.content, c), /* @__PURE__ */ x(Xe, {
    present: r || a
  }, /* @__PURE__ */ x(xd, S({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), xd = /* @__PURE__ */ R((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Lt(On, e.__scopeScrollArea), a = V(null), s = V(0), [i, c] = Y({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = xv(i.viewport, i.content), d = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function u(p, m) {
    return m5(p, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ x(i5, S({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = sf(p, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = u(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ x(c5, S({}, d, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = sf(p, i);
        a.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = u(p));
    }
  })) : null;
}), i5 = /* @__PURE__ */ R((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Lt(On, e.__scopeScrollArea), [s, i] = Y(), c = V(null), l = we(t, c, a.onScrollbarXChange);
  return G(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(gv, S({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: pi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
    onDragScroll: (d) => e.onDragScroll(d.x),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + d.deltaX;
        e.onWheelScroll(p), $v(p, u) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: ys(s.paddingLeft),
          paddingEnd: ys(s.paddingRight)
        }
      });
    }
  }));
}), c5 = /* @__PURE__ */ R((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Lt(On, e.__scopeScrollArea), [s, i] = Y(), c = V(null), l = we(t, c, a.onScrollbarYChange);
  return G(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(gv, S({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: pi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
    onDragScroll: (d) => e.onDragScroll(d.y),
    onWheelScroll: (d, u) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + d.deltaY;
        e.onWheelScroll(p), $v(p, u) && d.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: ys(s.paddingTop),
          paddingEnd: ys(s.paddingBottom)
        }
      });
    }
  }));
}), [l5, vv] = pv(On), gv = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: d, onResize: u, ...p } = e, m = Lt(On, n), [h, v] = Y(null), g = we(
    t,
    (I) => v(I)
  ), b = V(null), y = V(""), $ = m.viewport, _ = r.content - r.viewport, w = ze(d), P = ze(c), k = mi(u, 10);
  function L(I) {
    if (b.current) {
      const ee = I.clientX - b.current.left, te = I.clientY - b.current.top;
      l({
        x: ee,
        y: te
      });
    }
  }
  return G(() => {
    const I = (ee) => {
      const te = ee.target;
      (h == null ? void 0 : h.contains(te)) && w(ee, _);
    };
    return document.addEventListener("wheel", I, {
      passive: !1
    }), () => document.removeEventListener("wheel", I, {
      passive: !1
    });
  }, [
    $,
    h,
    _,
    w
  ]), G(P, [
    r,
    P
  ]), eo(h, k), eo(m.content, k), /* @__PURE__ */ x(l5, {
    scope: n,
    scrollbar: h,
    hasThumb: o,
    onThumbChange: ze(a),
    onThumbPointerUp: ze(s),
    onThumbPositionChange: P,
    onThumbPointerDown: ze(i)
  }, /* @__PURE__ */ x(ie.div, S({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: H(e.onPointerDown, (I) => {
      I.button === 0 && (I.target.setPointerCapture(I.pointerId), b.current = h.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", L(I));
    }),
    onPointerMove: H(e.onPointerMove, L),
    onPointerUp: H(e.onPointerUp, (I) => {
      const ee = I.target;
      ee.hasPointerCapture(I.pointerId) && ee.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = y.current, b.current = null;
    })
  })));
}), Bc = "ScrollAreaThumb", d5 = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = vv(Bc, e.__scopeScrollArea);
  return /* @__PURE__ */ x(Xe, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ x(u5, S({
    ref: t
  }, r)));
}), u5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = Lt(Bc, n), s = vv(Bc, n), { onThumbPositionChange: i } = s, c = we(
    t,
    (u) => s.onThumbChange(u)
  ), l = V(), d = mi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return G(() => {
    const u = a.viewport;
    if (u) {
      const p = () => {
        if (d(), !l.current) {
          const m = h5(u, i);
          l.current = m, i();
        }
      };
      return i(), u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    d,
    i
  ]), /* @__PURE__ */ x(ie.div, S({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: H(e.onPointerDownCapture, (u) => {
      const m = u.target.getBoundingClientRect(), h = u.clientX - m.left, v = u.clientY - m.top;
      s.onThumbPointerDown({
        x: h,
        y: v
      });
    }),
    onPointerUp: H(e.onPointerUp, s.onThumbPointerUp)
  }));
}), bv = "ScrollAreaCorner", f5 = /* @__PURE__ */ R((e, t) => {
  const n = Lt(bv, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ x(p5, S({}, e, {
    ref: t
  })) : null;
}), p5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Lt(bv, n), [a, s] = Y(0), [i, c] = Y(0), l = Boolean(a && i);
  return eo(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) === null || d === void 0 ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), eo(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) === null || d === void 0 ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ x(ie.div, S({}, r, {
    ref: t,
    style: {
      width: a,
      height: i,
      position: "absolute",
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function ys(e) {
  return e ? parseInt(e, 10) : 0;
}
function xv(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function pi(e) {
  const t = xv(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function m5(e, t, n, r = "ltr") {
  const o = pi(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, d = n.content - n.viewport, u = r === "ltr" ? [
    0,
    d
  ] : [
    d * -1,
    0
  ];
  return yv([
    c,
    l
  ], u)(e);
}
function sf(e, t, n = "ltr") {
  const r = pi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Uo(e, c);
  return yv([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function yv(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function $v(e, t) {
  return e > 0 && e < t;
}
const h5 = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function mi(e, t) {
  const n = ze(e), r = V(0);
  return G(
    () => () => window.clearTimeout(r.current),
    []
  ), ue(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function eo(e, t) {
  const n = ze(t);
  pt(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const wv = n5, v5 = o5, g5 = f5, b5 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  wv,
  {
    ref: r,
    className: F("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx(v5, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.exports.jsx(_v, {}),
      /* @__PURE__ */ f.exports.jsx(g5, {})
    ]
  }
));
b5.displayName = wv.displayName;
const _v = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  mv,
  {
    ref: r,
    orientation: t,
    className: F(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(d5, { className: "relative flex-1 rounded-full bg-border" })
  }
));
_v.displayName = mv.displayName;
const YO = ld, HO = dd, KO = wa, Cv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(ga, { className: F(e), ...t });
Cv.displayName = ga.displayName;
const Sv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ba,
  {
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Sv.displayName = ba.displayName;
const x5 = oo(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), y5 = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(Cv, { children: [
  /* @__PURE__ */ f.exports.jsx(Sv, {}),
  /* @__PURE__ */ f.exports.jsxs(
    xa,
    {
      ref: o,
      className: F(x5({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ f.exports.jsxs(wa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ f.exports.jsx(Ws, { className: "h-4 w-4" }),
          /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
y5.displayName = xa.displayName;
const $5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
$5.displayName = "SheetHeader";
const w5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
w5.displayName = "SheetFooter";
const _5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ya,
  {
    ref: n,
    className: F("text-lg font-semibold text-foreground", e),
    ...t
  }
));
_5.displayName = ya.displayName;
const C5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  $a,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
C5.displayName = $a.displayName;
const yd = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f.exports.jsx(
  "table",
  {
    ref: n,
    className: F("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
yd.displayName = "TableUI";
const Ev = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("thead", { ref: n, className: F("[&_tr]:border-b", e), ...t }));
Ev.displayName = "TableHeader";
const Nv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tbody",
  {
    ref: n,
    className: F("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Nv.displayName = "TableBody";
const S5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: F("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
S5.displayName = "TableFooter";
const hi = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "tr",
  {
    ref: n,
    className: F(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
hi.displayName = "TableRow";
const Pv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "th",
  {
    ref: n,
    className: F(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
Pv.displayName = "TableHead";
const $d = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "td",
  {
    ref: n,
    className: F("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
$d.displayName = "TableCell";
const E5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  "caption",
  {
    ref: n,
    className: F("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
E5.displayName = "TableCaption";
const N5 = "AlertDialog", [P5, GO] = Ze(N5, [
  Jm
]), Mn = Jm(), T5 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Mn(t);
  return /* @__PURE__ */ x(ld, S({}, r, n, {
    modal: !0
  }));
}, k5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(dd, S({}, o, r, {
    ref: t
  }));
}), O5 = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = Mn(t);
  return /* @__PURE__ */ x(ga, S({}, r, n));
}, M5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(ba, S({}, o, r, {
    ref: t
  }));
}), Tv = "AlertDialogContent", [D5, R5] = P5(Tv), A5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = Mn(n), s = V(null), i = we(t, s), c = V(null);
  return /* @__PURE__ */ x($C, {
    contentName: Tv,
    titleName: j5,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ x(D5, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ x(xa, S({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: H(o.onOpenAutoFocus, (l) => {
      var d;
      l.preventDefault(), (d = c.current) === null || d === void 0 || d.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ x(pl, null, r), !1)));
}), j5 = "AlertDialogTitle", I5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(ya, S({}, o, r, {
    ref: t
  }));
}), L5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x($a, S({}, o, r, {
    ref: t
  }));
}), F5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = Mn(n);
  return /* @__PURE__ */ x(wa, S({}, o, r, {
    ref: t
  }));
}), V5 = "AlertDialogCancel", U5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = R5(V5, n), a = Mn(n), s = we(t, o);
  return /* @__PURE__ */ x(wa, S({}, a, r, {
    ref: s
  }));
}), W5 = T5, z5 = k5, kv = O5, Ov = M5, Mv = A5, Dv = F5, Rv = U5, Av = I5, jv = L5, ZO = W5, qO = z5, Iv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(kv, { className: F(e), ...t });
Iv.displayName = kv.displayName;
const Lv = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ov,
  {
    className: F(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Lv.displayName = Ov.displayName;
const B5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(Iv, { children: [
  /* @__PURE__ */ f.exports.jsx(Lv, {}),
  /* @__PURE__ */ f.exports.jsx(
    Mv,
    {
      ref: n,
      className: F(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
B5.displayName = Mv.displayName;
const Y5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Y5.displayName = "AlertDialogHeader";
const H5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "div",
  {
    className: F(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
H5.displayName = "AlertDialogFooter";
const K5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Av,
  {
    ref: n,
    className: F("text-lg font-semibold", e),
    ...t
  }
));
K5.displayName = Av.displayName;
const G5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  jv,
  {
    ref: n,
    className: F("text-sm text-muted-foreground", e),
    ...t
  }
));
G5.displayName = jv.displayName;
const Z5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Dv,
  {
    ref: n,
    className: F(Mo(), e),
    ...t
  }
));
Z5.displayName = Dv.displayName;
const q5 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Rv,
  {
    ref: n,
    className: F(
      Mo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
q5.displayName = Rv.displayName;
function XO({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f.exports.jsx(
    "div",
    {
      className: F("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Fv = "Collapsible", [X5, Vv] = Ze(Fv), [Q5, wd] = X5(Fv), J5 = /* @__PURE__ */ R((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = tt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ x(Q5, {
    scope: n,
    disabled: a,
    contentId: rt(),
    open: c,
    onOpenToggle: ue(
      () => l(
        (d) => !d
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ x(ie.div, S({
    "data-state": _d(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), e6 = "CollapsibleTrigger", Uv = /* @__PURE__ */ R((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = wd(e6, n);
  return /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": _d(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: H(e.onClick, o.onOpenToggle)
  }));
}), Wv = "CollapsibleContent", zv = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = wd(Wv, e.__scopeCollapsible);
  return /* @__PURE__ */ x(
    Xe,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ x(t6, S({}, r, {
      ref: t,
      present: a
    }))
  );
}), t6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = wd(Wv, n), [i, c] = Y(r), l = V(null), d = we(t, l), u = V(0), p = u.current, m = V(0), h = m.current, v = s.open || i, g = V(v), b = V();
  return G(() => {
    const y = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(y);
  }, []), pt(() => {
    const y = l.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const $ = y.getBoundingClientRect();
      u.current = $.height, m.current = $.width, g.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ x(ie.div, S({
    "data-state": _d(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: d,
    style: {
      ["--radix-collapsible-content-height"]: p ? `${p}px` : void 0,
      ["--radix-collapsible-content-width"]: h ? `${h}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function _d(e) {
  return e ? "open" : "closed";
}
const Bv = J5, n6 = Uv, r6 = zv, rr = "Accordion", o6 = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Cd, a6, s6] = Jn(rr), [vi, QO] = Ze(rr, [
  s6,
  Vv
]), Sd = Vv(), Yv = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ N.createElement(Cd.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ N.createElement(d6, S({}, a, {
    ref: t
  })) : /* @__PURE__ */ N.createElement(l6, S({}, o, {
    ref: t
  })));
});
Yv.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Hv, i6] = vi(rr), [Kv, c6] = vi(rr, {
  collapsible: !1
}), l6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = tt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ N.createElement(Hv, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: N.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ N.createElement(Kv, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ N.createElement(Gv, S({}, s, {
    ref: t
  }))));
}), d6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = tt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = N.useCallback(
    (d) => i(
      (u = []) => [
        ...u,
        d
      ]
    ),
    [
      i
    ]
  ), l = N.useCallback(
    (d) => i(
      (u = []) => u.filter(
        (p) => p !== d
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ N.createElement(Hv, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ N.createElement(Kv, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ N.createElement(Gv, S({}, a, {
    ref: t
  }))));
}), [u6, gi] = vi(rr), Gv = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = N.useRef(null), c = we(i, t), l = a6(n), u = dn(o) === "ltr", p = H(e.onKeyDown, (m) => {
    var h;
    if (!o6.includes(m.key))
      return;
    const v = m.target, g = l().filter((I) => {
      var ee;
      return !((ee = I.ref.current) !== null && ee !== void 0 && ee.disabled);
    }), b = g.findIndex(
      (I) => I.ref.current === v
    ), y = g.length;
    if (b === -1)
      return;
    m.preventDefault();
    let $ = b;
    const _ = 0, w = y - 1, P = () => {
      $ = b + 1, $ > w && ($ = _);
    }, k = () => {
      $ = b - 1, $ < _ && ($ = w);
    };
    switch (m.key) {
      case "Home":
        $ = _;
        break;
      case "End":
        $ = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (u ? P() : k());
        break;
      case "ArrowDown":
        a === "vertical" && P();
        break;
      case "ArrowLeft":
        a === "horizontal" && (u ? k() : P());
        break;
      case "ArrowUp":
        a === "vertical" && k();
        break;
    }
    const L = $ % y;
    (h = g[L].ref.current) === null || h === void 0 || h.focus();
  });
  return /* @__PURE__ */ N.createElement(u6, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ N.createElement(Cd.Slot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(ie.div, S({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Yc = "AccordionItem", [f6, Ed] = vi(Yc), p6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = gi(Yc, n), s = i6(Yc, n), i = Sd(n), c = rt(), l = r && s.value.includes(r) || !1, d = a.disabled || e.disabled;
  return /* @__PURE__ */ N.createElement(f6, {
    scope: n,
    open: l,
    disabled: d,
    triggerId: c
  }, /* @__PURE__ */ N.createElement(Bv, S({
    "data-orientation": a.orientation,
    "data-state": Zv(l)
  }, i, o, {
    ref: t,
    disabled: d,
    open: l,
    onOpenChange: (u) => {
      u ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), m6 = "AccordionHeader", h6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = gi(rr, n), a = Ed(m6, n);
  return /* @__PURE__ */ N.createElement(ie.h3, S({
    "data-orientation": o.orientation,
    "data-state": Zv(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), cf = "AccordionTrigger", v6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = gi(rr, n), a = Ed(cf, n), s = c6(cf, n), i = Sd(n);
  return /* @__PURE__ */ N.createElement(Cd.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(n6, S({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), g6 = "AccordionContent", b6 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = gi(rr, n), a = Ed(g6, n), s = Sd(n);
  return /* @__PURE__ */ N.createElement(r6, S({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, s, r, {
    ref: t,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Zv(e) {
  return e ? "open" : "closed";
}
const x6 = Yv, y6 = p6, $6 = h6, qv = v6, Xv = b6, JO = x6, w6 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  y6,
  {
    ref: n,
    className: F("border-b", e),
    ...t
  }
));
w6.displayName = "AccordionItem";
const _6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx($6, { className: "flex", children: /* @__PURE__ */ f.exports.jsxs(
  qv,
  {
    ref: r,
    className: F(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Do, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
_6.displayName = qv.displayName;
const C6 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Xv,
  {
    ref: r,
    className: F(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
C6.displayName = Xv.displayName;
const e8 = Bv, t8 = Uv, n8 = zv;
let nc;
const Qv = "HoverCard", [Jv, r8] = Ze(Qv, [
  un
]), Nd = un(), [S6, Pd] = Jv(Qv), E6 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Nd(t), l = V(0), d = V(0), u = V(!1), p = V(!1), [m = !1, h] = tt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ue(() => {
    clearTimeout(d.current), l.current = window.setTimeout(
      () => h(!0),
      s
    );
  }, [
    s,
    h
  ]), g = ue(() => {
    clearTimeout(l.current), !u.current && !p.current && (d.current = window.setTimeout(
      () => h(!1),
      i
    ));
  }, [
    i,
    h
  ]), b = ue(
    () => h(!1),
    [
      h
    ]
  );
  return G(() => () => {
    clearTimeout(l.current), clearTimeout(d.current);
  }, []), /* @__PURE__ */ x(S6, {
    scope: t,
    open: m,
    onOpenChange: h,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: u,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ x(co, c, n));
}, N6 = "HoverCardTrigger", P6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Pd(N6, n), a = Nd(n);
  return /* @__PURE__ */ x(la, S({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.a, S({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: H(e.onPointerEnter, $s(o.onOpen)),
    onPointerLeave: H(e.onPointerLeave, $s(o.onClose)),
    onFocus: H(e.onFocus, o.onOpen),
    onBlur: H(e.onBlur, o.onClose),
    onTouchStart: H(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), T6 = "HoverCardPortal", [o8, k6] = Jv(T6, {
  forceMount: void 0
}), Hc = "HoverCardContent", O6 = /* @__PURE__ */ R((e, t) => {
  const n = k6(Hc, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Pd(Hc, e.__scopeHoverCard);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.open
  }, /* @__PURE__ */ x(M6, S({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: H(e.onPointerEnter, $s(a.onOpen)),
    onPointerLeave: H(e.onPointerLeave, $s(a.onClose)),
    ref: t
  })));
}), M6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Pd(Hc, n), l = Nd(n), d = V(null), u = we(t, d), [p, m] = Y(!1);
  return G(() => {
    if (p) {
      const h = document.body;
      return nc = h.style.userSelect || h.style.webkitUserSelect, h.style.userSelect = "none", h.style.webkitUserSelect = "none", () => {
        h.style.userSelect = nc, h.style.webkitUserSelect = nc;
      };
    }
  }, [
    p
  ]), G(() => {
    if (d.current) {
      const h = () => {
        m(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var v;
          ((v = document.getSelection()) === null || v === void 0 ? void 0 : v.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", h), () => {
        document.removeEventListener("pointerup", h), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    c.isPointerDownOnContentRef,
    c.hasSelectionRef
  ]), G(() => {
    d.current && D6(d.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: H(a, (h) => {
      h.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ x(da, S({}, l, i, {
    onPointerDown: H(i.onPointerDown, (h) => {
      h.currentTarget.contains(h.target) && m(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: u,
    style: {
      ...i.style,
      userSelect: p ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: p ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function $s(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function D6(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const R6 = E6, A6 = P6, eg = O6, a8 = R6, s8 = A6, j6 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  eg,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: F(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
j6.displayName = eg.displayName;
const i8 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), Td = "Menubar", [Kc, I6, L6] = Jn(Td), [tg, c8] = Ze(Td, [
  L6,
  er
]), Ct = fa(), ng = er(), [F6, kd] = tg(Td), V6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = dn(i), d = ng(n), [u = "", p] = tt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, h] = Y(null);
  return /* @__PURE__ */ x(F6, {
    scope: n,
    value: u,
    onMenuOpen: ue((v) => {
      p(v), h(v);
    }, [
      p
    ]),
    onMenuClose: ue(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: ue((v) => {
      p(
        (g) => Boolean(g) ? "" : v
      ), h(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ x(Kc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Kc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(Zs, S({
    asChild: !0
  }, d, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: h
  }), /* @__PURE__ */ x(ie.div, S({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), rg = "MenubarMenu", [U6, og] = tg(rg), W6 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = rt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = kd(rg, t), i = Ct(t), c = V(null), l = V(!1), d = s.value === a;
  return G(() => {
    d || (l.current = !1);
  }, [
    d
  ]), /* @__PURE__ */ x(U6, {
    scope: t,
    value: a,
    triggerId: rt(),
    triggerRef: c,
    contentId: rt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ x(Wl, S({}, i, {
    open: d,
    onOpenChange: (u) => {
      u || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, lf = "MenubarTrigger", z6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = ng(n), s = Ct(n), i = kd(lf, n), c = og(lf, n), l = V(null), d = we(t, l, c.triggerRef), [u, p] = Y(!1), m = i.value === c.value;
  return /* @__PURE__ */ x(Kc.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ x(zl, S({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": m,
    "aria-controls": m ? c.contentId : void 0,
    "data-highlighted": u ? "" : void 0,
    "data-state": m ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: d,
    onPointerDown: H(e.onPointerDown, (h) => {
      !r && h.button === 0 && h.ctrlKey === !1 && (i.onMenuOpen(c.value), m || h.preventDefault());
    }),
    onPointerEnter: H(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: H(e.onKeyDown, (h) => {
      r || ([
        "Enter",
        " "
      ].includes(h.key) && i.onMenuToggle(c.value), h.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(h.key) && (c.wasKeyboardTriggerOpenRef.current = !0, h.preventDefault()));
    }),
    onFocus: H(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: H(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), B6 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ct(t);
  return /* @__PURE__ */ x(Bl, S({}, r, n));
}, df = "MenubarContent", Y6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ct(n), s = kd(df, n), i = og(df, n), c = I6(n), l = V(!1);
  return /* @__PURE__ */ x(Yl, S({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: H(e.onCloseAutoFocus, (d) => {
      if (!Boolean(s.value) && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, d.preventDefault();
    }),
    onFocusOutside: H(e.onFocusOutside, (d) => {
      const u = d.target;
      c().some((m) => {
        var h;
        return (h = m.ref.current) === null || h === void 0 ? void 0 : h.contains(u);
      }) && d.preventDefault();
    }),
    onInteractOutside: H(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (d) => {
      i.wasKeyboardTriggerOpenRef.current || d.preventDefault();
    },
    onKeyDown: H(e.onKeyDown, (d) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(d.key)) {
        const u = d.target, p = u.hasAttribute("data-radix-menubar-subtrigger"), m = u.closest("[data-radix-menubar-content]") !== d.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === d.key;
        if (!v && p || m && v)
          return;
        let y = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && y.reverse();
        const $ = y.indexOf(i.value);
        y = s.loop ? rP(y, $ + 1) : y.slice($ + 1);
        const [_] = y;
        _ && s.onMenuOpen(_);
      }
    }, {
      checkForDefaultPrevented: !1
    }),
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), H6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Hl, S({}, o, r, {
    ref: t
  }));
}), K6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Kl, S({}, o, r, {
    ref: t
  }));
}), G6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Gl, S({}, o, r, {
    ref: t
  }));
}), Z6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Zl, S({}, o, r, {
    ref: t
  }));
}), q6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(ql, S({}, o, r, {
    ref: t
  }));
}), X6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Xl, S({}, o, r, {
    ref: t
  }));
}), Q6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Ql, S({}, o, r, {
    ref: t
  }));
}), J6 = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(Jl, S({}, o, r, {
    ref: t
  }));
}), eP = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ct(t), [i = !1, c] = tt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(ed, S({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, tP = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(td, S({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), nP = /* @__PURE__ */ R((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ct(n);
  return /* @__PURE__ */ x(nd, S({}, o, {
    "data-radix-menubar-content": ""
  }, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function rP(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const ag = V6, oP = W6, sg = z6, ig = B6, cg = Y6, aP = H6, lg = K6, dg = G6, ug = Z6, sP = q6, fg = X6, pg = Q6, mg = J6, iP = eP, hg = tP, vg = nP, l8 = oP, d8 = aP, u8 = ig, f8 = iP, p8 = sP, cP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ag,
  {
    ref: n,
    className: F(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
cP.displayName = ag.displayName;
const lP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  sg,
  {
    ref: n,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
lP.displayName = sg.displayName;
const dP = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  hg,
  {
    ref: o,
    className: F(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ f.exports.jsx(ao, { className: "ml-auto h-4 w-4" })
    ]
  }
));
dP.displayName = hg.displayName;
const uP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  vg,
  {
    ref: n,
    className: F(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
uP.displayName = vg.displayName;
const fP = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ f.exports.jsx(ig, { children: /* @__PURE__ */ f.exports.jsx(
    cg,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: F(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
fP.displayName = cg.displayName;
const pP = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  dg,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
pP.displayName = dg.displayName;
const mP = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ f.exports.jsxs(
  ug,
  {
    ref: o,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(pg, { children: /* @__PURE__ */ f.exports.jsx(Kt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
mP.displayName = ug.displayName;
const hP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  fg,
  {
    ref: r,
    className: F(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(pg, { children: /* @__PURE__ */ f.exports.jsx(Vs, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
hP.displayName = fg.displayName;
const vP = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  lg,
  {
    ref: r,
    className: F(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
vP.displayName = lg.displayName;
const gP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  mg,
  {
    ref: n,
    className: F("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
gP.displayName = mg.displayName;
const bP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f.exports.jsx(
  "span",
  {
    className: F(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
bP.displayname = "MenubarShortcut";
const Pa = "NavigationMenu", [Od, gg, xP] = Jn(Pa), [Gc, yP, $P] = Jn(Pa), [Md, m8] = Ze(Pa, [
  xP,
  $P
]), [wP, Jt] = Md(Pa), [_P, CP] = Md(Pa), SP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    (I) => p(I)
  ), h = dn(l), v = V(0), g = V(0), b = V(0), [y, $] = Y(!0), [_ = "", w] = tt({
    prop: r,
    onChange: (I) => {
      const ee = I !== "", te = i > 0;
      ee ? (window.clearTimeout(b.current), te && $(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => $(!0),
        i
      )), o == null || o(I);
    },
    defaultProp: a
  }), P = ue(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), k = ue((I) => {
    window.clearTimeout(g.current), w(I);
  }, [
    w
  ]), L = ue((I) => {
    _ === I ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(I);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return G(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ x(EP, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: h,
    orientation: c,
    rootNavigationMenu: u,
    onTriggerEnter: (I) => {
      window.clearTimeout(v.current), y ? L(I) : k(I);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), P();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: P,
    onItemSelect: (I) => {
      w(
        (ee) => ee === I ? "" : I
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ x(ie.nav, S({
    "aria-label": "Main",
    "data-orientation": c,
    dir: h
  }, d, {
    ref: m
  })));
}), EP = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: d, onTriggerLeave: u, onContentEnter: p, onContentLeave: m } = e, [h, v] = Y(null), [g, b] = Y(/* @__PURE__ */ new Map()), [y, $] = Y(null);
  return /* @__PURE__ */ x(wP, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: fo(i),
    baseId: rt(),
    dir: o,
    orientation: a,
    viewport: h,
    onViewportChange: v,
    indicatorTrack: y,
    onIndicatorTrackChange: $,
    onTriggerEnter: ze(d),
    onTriggerLeave: ze(u),
    onContentEnter: ze(p),
    onContentLeave: ze(m),
    onItemSelect: ze(c),
    onItemDismiss: ze(l),
    onViewportContentChange: ue((_, w) => {
      b((P) => (P.set(_, w), new Map(P)));
    }, []),
    onViewportContentRemove: ue((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ x(Od.Provider, {
    scope: t
  }, /* @__PURE__ */ x(_P, {
    scope: t,
    items: g
  }, s)));
}, NP = "NavigationMenuList", PP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Jt(NP, n), a = /* @__PURE__ */ x(ie.ul, S({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ x(ie.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ x(Od.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ x(wg, {
    asChild: !0
  }, a) : a));
}), TP = "NavigationMenuItem", [kP, bg] = Md(TP), OP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = rt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = V(null), c = V(null), l = V(null), d = V(() => {
  }), u = V(!1), p = ue((h = "start") => {
    if (i.current) {
      d.current();
      const v = Zc(i.current);
      v.length && Dd(h === "start" ? v : v.reverse());
    }
  }, []), m = ue(() => {
    if (i.current) {
      const h = Zc(i.current);
      h.length && (d.current = WP(h));
    }
  }, []);
  return /* @__PURE__ */ x(kP, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: u,
    onEntryKeyDown: p,
    onFocusProxyEnter: p,
    onRootContentClose: m,
    onContentFocusOutside: m
  }, /* @__PURE__ */ x(ie.li, S({}, o, {
    ref: t
  })));
}), uf = "NavigationMenuTrigger", MP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Jt(uf, e.__scopeNavigationMenu), s = bg(uf, e.__scopeNavigationMenu), i = V(null), c = we(i, s.triggerRef, t), l = Cg(a.baseId, s.value), d = Sg(a.baseId, s.value), u = V(!1), p = V(!1), m = s.value === a.value;
  return /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x(Od.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ x(_g, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.button, S({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Rd(m),
    "aria-expanded": m,
    "aria-controls": d
  }, o, {
    ref: c,
    onPointerEnter: H(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: H(e.onPointerMove, ws(() => {
      r || p.current || s.wasEscapeCloseRef.current || u.current || (a.onTriggerEnter(s.value), u.current = !0);
    })),
    onPointerLeave: H(e.onPointerLeave, ws(() => {
      r || (a.onTriggerLeave(), u.current = !1);
    })),
    onClick: H(e.onClick, () => {
      a.onItemSelect(s.value), p.current = m;
    }),
    onKeyDown: H(e.onKeyDown, (h) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && h.key === g && (s.onEntryKeyDown(), h.preventDefault());
    })
  })))), m && /* @__PURE__ */ x(jt, null, /* @__PURE__ */ x(hh, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (h) => {
      const v = s.contentRef.current, g = h.relatedTarget, b = g === i.current, y = v == null ? void 0 : v.contains(g);
      (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ x("span", {
    "aria-owns": d
  })));
}), ff = "navigationMenu.linkSelect", DP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ x(_g, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.a, S({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: H(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(ff, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        ff,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), cs(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(ns, {
          bubbles: !0,
          cancelable: !0
        });
        cs(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), xg = "NavigationMenuIndicator", RP = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(xg, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(Xe, {
    present: n || a
  }, /* @__PURE__ */ x(AP, S({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), AP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Jt(xg, n), a = gg(n), [s, i] = Y(null), [c, l] = Y(null), d = o.orientation === "horizontal", u = Boolean(o.value);
  G(() => {
    var m;
    const v = (m = a().find(
      (g) => g.value === o.value
    )) === null || m === void 0 ? void 0 : m.ref.current;
    v && i(v);
  }, [
    a,
    o.value
  ]);
  const p = () => {
    s && l({
      size: d ? s.offsetWidth : s.offsetHeight,
      offset: d ? s.offsetLeft : s.offsetTop
    });
  };
  return qc(s, p), qc(o.indicatorTrack, p), c ? /* @__PURE__ */ x(ie.div, S({
    "aria-hidden": !0,
    "data-state": u ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...d ? {
        left: 0,
        width: c.size + "px",
        transform: `translateX(${c.offset}px)`
      } : {
        top: 0,
        height: c.size + "px",
        transform: `translateY(${c.offset}px)`
      },
      ...r.style
    }
  })) : null;
}), zo = "NavigationMenuContent", jP = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt(zo, e.__scopeNavigationMenu), a = bg(zo, e.__scopeNavigationMenu), s = we(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ x(IP, S({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ x(Xe, {
    present: n || i
  }, /* @__PURE__ */ x(yg, S({
    "data-state": Rd(i)
  }, c, {
    ref: s,
    onPointerEnter: H(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: H(e.onPointerLeave, ws(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), IP = /* @__PURE__ */ R((e, t) => {
  const n = Jt(zo, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return pt(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), pt(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), ns = "navigationMenu.rootContentDismiss", yg = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, d = Jt(zo, n), u = V(null), p = we(u, t), m = Cg(d.baseId, r), h = Sg(d.baseId, r), v = gg(n), g = V(null), { onItemDismiss: b } = d;
  G(() => {
    const $ = u.current;
    if (d.isRootMenu && $) {
      const _ = () => {
        var w;
        b(), i(), $.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return $.addEventListener(ns, _), () => $.removeEventListener(ns, _);
    }
  }, [
    d.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const y = yt(() => {
    const _ = v().map(
      (ee) => ee.value
    );
    d.dir === "rtl" && _.reverse();
    const w = _.indexOf(d.value), P = _.indexOf(d.previousValue), k = r === d.value, L = P === _.indexOf(r);
    if (!k && !L)
      return g.current;
    const I = (() => {
      if (w !== P) {
        if (k && P !== -1)
          return w > P ? "from-end" : "from-start";
        if (L && w !== -1)
          return w > P ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = I, I;
  }, [
    d.previousValue,
    d.value,
    d.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ x(wg, {
    asChild: !0
  }, /* @__PURE__ */ x(Sr, S({
    id: h,
    "aria-labelledby": m,
    "data-motion": y,
    "data-orientation": d.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var $;
      const _ = new Event(ns, {
        bubbles: !0,
        cancelable: !0
      });
      ($ = u.current) === null || $ === void 0 || $.dispatchEvent(_);
    },
    onFocusOutside: H(e.onFocusOutside, ($) => {
      var _;
      c();
      const w = $.target;
      (_ = d.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && $.preventDefault();
    }),
    onPointerDownOutside: H(e.onPointerDownOutside, ($) => {
      var _;
      const w = $.target, P = v().some((L) => {
        var I;
        return (I = L.ref.current) === null || I === void 0 ? void 0 : I.contains(w);
      }), k = d.isRootMenu && ((_ = d.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (P || k || !d.isRootMenu) && $.preventDefault();
    }),
    onKeyDown: H(e.onKeyDown, ($) => {
      const _ = $.altKey || $.ctrlKey || $.metaKey;
      if ($.key === "Tab" && !_) {
        const k = Zc($.currentTarget), L = document.activeElement, I = k.findIndex(
          (K) => K === L
        ), te = $.shiftKey ? k.slice(0, I).reverse() : k.slice(I + 1, k.length);
        if (Dd(te))
          $.preventDefault();
        else {
          var P;
          (P = a.current) === null || P === void 0 || P.focus();
        }
      }
    }),
    onEscapeKeyDown: H(e.onEscapeKeyDown, ($) => {
      s.current = !0;
    })
  })));
}), $g = "NavigationMenuViewport", LP = /* @__PURE__ */ R((e, t) => {
  const { forceMount: n, ...r } = e, o = Jt($g, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ x(Xe, {
    present: n || a
  }, /* @__PURE__ */ x(FP, S({}, r, {
    ref: t
  })));
}), FP = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Jt($g, n), s = we(t, a.onViewportChange), i = CP(zo, e.__scopeNavigationMenu), [c, l] = Y(null), [d, u] = Y(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, h = Boolean(a.value), v = h ? a.value : a.previousValue;
  return qc(d, () => {
    d && l({
      width: d.offsetWidth,
      height: d.offsetHeight
    });
  }), /* @__PURE__ */ x(ie.div, S({
    "data-state": Rd(h),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !h && a.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: p,
      ["--radix-navigation-menu-viewport-height"]: m,
      ...o.style
    },
    onPointerEnter: H(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: H(e.onPointerLeave, ws(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: $, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ x(Xe, {
      key: b,
      present: $ || w
    }, /* @__PURE__ */ x(yg, S({}, _, {
      ref: ra(y, (P) => {
        w && P && u(P);
      })
    })));
  }));
}), VP = "FocusGroup", wg = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Jt(VP, n);
  return /* @__PURE__ */ x(Gc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Gc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, S({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), pf = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], UP = "FocusGroupItem", _g = /* @__PURE__ */ R((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = yP(n), a = Jt(UP, n);
  return /* @__PURE__ */ x(Gc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x(ie.button, S({}, r, {
    ref: t,
    onKeyDown: H(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...pf
      ].includes(s.key)) {
        let c = o().map(
          (u) => u.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), pf.includes(s.key)) {
          const u = c.indexOf(s.currentTarget);
          c = c.slice(u + 1);
        }
        setTimeout(
          () => Dd(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Zc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Dd(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function WP(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function qc(e, t) {
  const n = ze(t);
  pt(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
function Rd(e) {
  return e ? "open" : "closed";
}
function Cg(e, t) {
  return `${e}-trigger-${t}`;
}
function Sg(e, t) {
  return `${e}-content-${t}`;
}
function ws(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Eg = SP, Ng = PP, zP = OP, Pg = MP, BP = DP, Tg = RP, kg = jP, Og = LP, YP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Eg,
  {
    ref: r,
    className: F(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f.exports.jsx(Mg, {})
    ]
  }
));
YP.displayName = Eg.displayName;
const HP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Ng,
  {
    ref: n,
    className: F(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
HP.displayName = Ng.displayName;
const h8 = zP, KP = oo(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), GP = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsxs(
  Pg,
  {
    ref: r,
    className: F(KP(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ f.exports.jsx(
        Do,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
GP.displayName = Pg.displayName;
const ZP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  kg,
  {
    ref: n,
    className: F(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
ZP.displayName = kg.displayName;
const v8 = BP, Mg = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx("div", { className: F("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ f.exports.jsx(
  Og,
  {
    className: F(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Mg.displayName = Og.displayName;
const qP = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Tg,
  {
    ref: n,
    className: F(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ f.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
qP.displayName = Tg.displayName;
const Dg = "Progress", bi = 100, [XP, g8] = Ze(Dg), [QP, JP] = XP(Dg), Rg = /* @__PURE__ */ R((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = nT, ...s } = e, i = Xc(o) ? o : bi, c = jg(r, i) ? r : null, l = _s(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ x(QP, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ x(ie.div, S({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": _s(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Ag(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Rg.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Xc(r) ? new Error(rT(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Xc(e.max) ? e.max : bi;
    return r != null && !jg(r, a) ? new Error(oT(o, n)) : null;
  }
};
const eT = "ProgressIndicator", tT = /* @__PURE__ */ R((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = JP(eT, r);
  return /* @__PURE__ */ x(ie.div, S({
    "data-state": Ag(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function nT(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ag(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function _s(e) {
  return typeof e == "number";
}
function Xc(e) {
  return _s(e) && !isNaN(e) && e > 0;
}
function jg(e, t) {
  return _s(e) && !isNaN(e) && e <= t && e >= 0;
}
function rT(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${bi}\`.`;
}
function oT(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${bi} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Ig = Rg, aT = tT, sT = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Ig,
  {
    ref: r,
    className: F(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(
      aT,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
sT.displayName = Ig.displayName;
const Lg = "Radio", [iT, Fg] = Ze(Lg), [cT, lT] = iT(Lg), dT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [d, u] = Y(null), p = we(
    t,
    (v) => u(v)
  ), m = V(!1), h = d ? Boolean(d.closest("form")) : !0;
  return /* @__PURE__ */ x(cT, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Vg(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: H(e.onClick, (v) => {
      o || c == null || c(), h && (m.current = v.isPropagationStopped(), m.current || v.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(pT, {
    control: d,
    bubbles: !m.current,
    name: r,
    value: i,
    checked: o,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), uT = "RadioIndicator", fT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = lT(uT, n);
  return /* @__PURE__ */ x(Xe, {
    present: r || a.checked
  }, /* @__PURE__ */ x(ie.span, S({
    "data-state": Vg(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), pT = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = V(null), s = fo(n), i = ca(t);
  return G(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const p = new Event("click", {
        bubbles: r
      });
      u.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", S({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Vg(e) {
  return e ? "checked" : "unchecked";
}
const mT = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ug = "RadioGroup", [hT, b8] = Ze(Ug, [
  er,
  Fg
]), Wg = er(), zg = Fg(), [vT, gT] = hT(Ug), bT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: d = !0, onValueChange: u, ...p } = e, m = Wg(n), h = dn(l), [v, g] = tt({
    prop: a,
    defaultProp: o,
    onChange: u
  });
  return /* @__PURE__ */ x(vT, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ x(Zs, S({
    asChild: !0
  }, m, {
    orientation: c,
    dir: h,
    loop: d
  }), /* @__PURE__ */ x(ie.div, S({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: h
  }, p, {
    ref: t
  }))));
}), xT = "RadioGroupItem", yT = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = gT(xT, n), s = a.disabled || r, i = Wg(n), c = zg(n), l = V(null), d = we(t, l), u = a.value === o.value, p = V(!1);
  return G(() => {
    const m = (v) => {
      mT.includes(v.key) && (p.current = !0);
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", h), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", h);
    };
  }, []), /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, i, {
    focusable: !s,
    active: u
  }), /* @__PURE__ */ x(dT, S({
    disabled: s,
    required: a.required,
    checked: u
  }, c, o, {
    name: a.name,
    ref: d,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: H((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: H(o.onFocus, () => {
      var m;
      p.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), $T = /* @__PURE__ */ R((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = zg(n);
  return /* @__PURE__ */ x(fT, S({}, o, r, {
    ref: t
  }));
}), Bg = bT, Yg = yT, wT = $T, _T = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  Bg,
  {
    className: F("grid gap-2", e),
    ...t,
    ref: n
  }
));
_T.displayName = Bg.displayName;
const CT = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  Yg,
  {
    ref: r,
    className: F(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f.exports.jsx(wT, { className: "flex items-center justify-center", children: /* @__PURE__ */ f.exports.jsx(Vs, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
CT.displayName = Yg.displayName;
const Hg = [
  "PageUp",
  "PageDown"
], Kg = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Gg = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, Ta = "Slider", [Qc, ST, ET] = Jn(Ta), [Zg, x8] = Ze(Ta, [
  ET
]), [NT, xi] = Zg(Ta), PT = /* @__PURE__ */ R((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: d, onValueChange: u = () => {
  }, onValueCommit: p = () => {
  }, inverted: m = !1, ...h } = e, [v, g] = Y(null), b = we(
    t,
    (O) => g(O)
  ), y = V(/* @__PURE__ */ new Set()), $ = V(0), _ = s === "horizontal", w = v ? Boolean(v.closest("form")) : !0, P = _ ? TT : kT, [k = [], L] = tt({
    prop: d,
    defaultProp: l,
    onChange: (O) => {
      var A;
      (A = [
        ...y.current
      ][$.current]) === null || A === void 0 || A.focus(), u(O);
    }
  }), I = V(k);
  function ee(O) {
    const A = FT(k, O);
    Z(O, A);
  }
  function te(O) {
    Z(O, $.current);
  }
  function K() {
    const O = I.current[$.current];
    k[$.current] !== O && p(k);
  }
  function Z(O, A, { commit: j } = {
    commit: !1
  }) {
    const W = zT(a), B = BT(Math.round((O - r) / a) * a + r, W), M = Uo(B, [
      r,
      o
    ]);
    L((D = []) => {
      const U = IT(D, M, A);
      if (WT(U, c * a)) {
        $.current = U.indexOf(M);
        const q = String(U) !== String(D);
        return q && j && p(U), q ? U : D;
      } else
        return D;
    });
  }
  return /* @__PURE__ */ x(NT, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: $,
    thumbs: y.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ x(Qc.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(Qc.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(P, S({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, h, {
    ref: b,
    onPointerDown: H(h.onPointerDown, () => {
      i || (I.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : ee,
    onSlideMove: i ? void 0 : te,
    onSlideEnd: i ? void 0 : K,
    onHomeKeyDown: () => !i && Z(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && Z(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: O, direction: A }) => {
      if (!i) {
        const B = Hg.includes(O.key) || O.shiftKey && Kg.includes(O.key) ? 10 : 1, M = $.current, D = k[M], U = a * B * A;
        Z(D + U, M, {
          commit: !0
        });
      }
    }
  })))), w && k.map(
    (O, A) => /* @__PURE__ */ x(jT, {
      key: A,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: O
    })
  ));
}), [qg, Xg] = Zg(Ta, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), TT = /* @__PURE__ */ R((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    ($) => p($)
  ), h = V(), v = dn(o), g = v === "ltr", b = g && !a || !g && a;
  function y($) {
    const _ = h.current || u.getBoundingClientRect(), w = [
      0,
      _.width
    ], k = Ad(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return h.current = _, k($ - _.left);
  }
  return /* @__PURE__ */ x(qg, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ x(Qg, S({
    dir: v,
    "data-orientation": "horizontal"
  }, d, {
    ref: m,
    style: {
      ...d.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: ($) => {
      const _ = y($.clientX);
      s == null || s(_);
    },
    onSlideMove: ($) => {
      const _ = y($.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      h.current = void 0, c == null || c();
    },
    onStepKeyDown: ($) => {
      const w = Gg[b ? "from-left" : "from-right"].includes($.key);
      l == null || l({
        event: $,
        direction: w ? -1 : 1
      });
    }
  })));
}), kT = /* @__PURE__ */ R((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, d = V(null), u = we(t, d), p = V(), m = !o;
  function h(v) {
    const g = p.current || d.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], $ = Ad(b, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, $(v - g.top);
  }
  return /* @__PURE__ */ x(qg, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ x(Qg, S({
    "data-orientation": "vertical"
  }, l, {
    ref: u,
    style: {
      ...l.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
    },
    onSlideStart: (v) => {
      const g = h(v.clientY);
      a == null || a(g);
    },
    onSlideMove: (v) => {
      const g = h(v.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      p.current = void 0, i == null || i();
    },
    onStepKeyDown: (v) => {
      const b = Gg[m ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Qg = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, d = xi(Ta, n);
  return /* @__PURE__ */ x(ie.span, S({}, l, {
    ref: t,
    onKeyDown: H(e.onKeyDown, (u) => {
      u.key === "Home" ? (s(u), u.preventDefault()) : u.key === "End" ? (i(u), u.preventDefault()) : Hg.concat(Kg).includes(u.key) && (c(u), u.preventDefault());
    }),
    onPointerDown: H(e.onPointerDown, (u) => {
      const p = u.target;
      p.setPointerCapture(u.pointerId), u.preventDefault(), d.thumbs.has(p) ? p.focus() : r(u);
    }),
    onPointerMove: H(e.onPointerMove, (u) => {
      u.target.hasPointerCapture(u.pointerId) && o(u);
    }),
    onPointerUp: H(e.onPointerUp, (u) => {
      const p = u.target;
      p.hasPointerCapture(u.pointerId) && (p.releasePointerCapture(u.pointerId), a(u));
    })
  }));
}), OT = "SliderTrack", MT = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = xi(OT, n);
  return /* @__PURE__ */ x(ie.span, S({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), mf = "SliderRange", DT = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = xi(mf, n), a = Xg(mf, n), s = V(null), i = we(t, s), c = o.values.length, l = o.values.map(
    (p) => Jg(p, o.min, o.max)
  ), d = c > 1 ? Math.min(...l) : 0, u = 100 - Math.max(...l);
  return /* @__PURE__ */ x(ie.span, S({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: d + "%",
      [a.endEdge]: u + "%"
    }
  }));
}), hf = "SliderThumb", RT = /* @__PURE__ */ R((e, t) => {
  const n = ST(e.__scopeSlider), [r, o] = Y(null), a = we(
    t,
    (i) => o(i)
  ), s = yt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ x(AT, S({}, e, {
    ref: a,
    index: s
  }));
}), AT = /* @__PURE__ */ R((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = xi(hf, n), s = Xg(hf, n), [i, c] = Y(null), l = we(
    t,
    (g) => c(g)
  ), d = ca(i), u = a.values[r], p = u === void 0 ? 0 : Jg(u, a.min, a.max), m = LT(r, a.values.length), h = d == null ? void 0 : d[s.size], v = h ? VT(h, p, s.direction) : 0;
  return G(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ x("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ x(Qc.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(ie.span, S({
    role: "slider",
    "aria-label": e["aria-label"] || m,
    "aria-valuemin": a.min,
    "aria-valuenow": u,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: u === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: H(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), jT = (e) => {
  const { value: t, ...n } = e, r = V(null), o = fo(t);
  return G(() => {
    const a = r.current, s = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
    if (o !== t && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(a, t), a.dispatchEvent(l);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ x("input", S({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function IT(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Jg(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Uo(a, [
    0,
    100
  ]);
}
function LT(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function FT(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function VT(e, t, n) {
  const r = e / 2, a = Ad([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function UT(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function WT(e, t) {
  if (t > 0) {
    const n = UT(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Ad(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function zT(e) {
  return (String(e).split(".")[1] || "").length;
}
function BT(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const eb = PT, YT = MT, HT = DT, KT = RT, GT = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsxs(
  eb,
  {
    ref: n,
    className: F(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ f.exports.jsx(YT, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ f.exports.jsx(HT, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ f.exports.jsx(KT, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
GT.displayName = eb.displayName;
const tb = "Tabs", [ZT, y8] = Ze(tb, [
  er
]), nb = er(), [qT, jd] = ZT(tb), XT = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, d = dn(i), [u, p] = tt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ x(qT, {
    scope: n,
    baseId: rt(),
    value: u,
    onValueChange: p,
    orientation: s,
    dir: d,
    activationMode: c
  }, /* @__PURE__ */ x(ie.div, S({
    dir: d,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), QT = "TabsList", JT = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = jd(QT, n), s = nb(n);
  return /* @__PURE__ */ x(Zs, S({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ x(ie.div, S({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), e3 = "TabsTrigger", t3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = jd(e3, n), i = nb(n), c = rb(s.baseId, r), l = ob(s.baseId, r), d = r === s.value;
  return /* @__PURE__ */ x(qs, S({
    asChild: !0
  }, i, {
    focusable: !o,
    active: d
  }), /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "tab",
    "aria-selected": d,
    "aria-controls": l,
    "data-state": d ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: t,
    onMouseDown: H(e.onMouseDown, (u) => {
      !o && u.button === 0 && u.ctrlKey === !1 ? s.onValueChange(r) : u.preventDefault();
    }),
    onKeyDown: H(e.onKeyDown, (u) => {
      [
        " ",
        "Enter"
      ].includes(u.key) && s.onValueChange(r);
    }),
    onFocus: H(e.onFocus, () => {
      const u = s.activationMode !== "manual";
      !d && !o && u && s.onValueChange(r);
    })
  })));
}), n3 = "TabsContent", r3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = jd(n3, n), c = rb(i.baseId, r), l = ob(i.baseId, r), d = r === i.value, u = V(d);
  return G(() => {
    const p = requestAnimationFrame(
      () => u.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ x(
    Xe,
    {
      present: o || d
    },
    ({ present: p }) => /* @__PURE__ */ x(ie.div, S({
      "data-state": d ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !p,
      id: l,
      tabIndex: 0
    }, s, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: u.current ? "0s" : void 0
      }
    }), p && a)
  );
});
function rb(e, t) {
  return `${e}-trigger-${t}`;
}
function ob(e, t) {
  return `${e}-content-${t}`;
}
const o3 = XT, ab = JT, sb = t3, ib = r3, $8 = o3, a3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ab,
  {
    ref: n,
    className: F(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
a3.displayName = ab.displayName;
const s3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  sb,
  {
    ref: n,
    className: F(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
s3.displayName = sb.displayName;
const i3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  ib,
  {
    ref: n,
    className: F(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
i3.displayName = ib.displayName;
const c3 = /* @__PURE__ */ R((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = tt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ x(ie.button, S({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: H(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), cb = c3, l3 = oo(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), d3 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ f.exports.jsx(
  cb,
  {
    ref: o,
    className: F(l3({ variant: t, size: n, className: e })),
    ...r
  }
));
d3.displayName = cb.displayName;
const [yi, w8] = Ze("Tooltip", [
  un
]), Id = un(), u3 = "TooltipProvider", f3 = 700, Jc = "tooltip.open", [p3, Ld] = yi(u3), m3 = (e) => {
  const { __scopeTooltip: t, delayDuration: n = f3, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = Y(!0), c = V(!1), l = V(0);
  return G(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ x(p3, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: ue(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: ue(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ue((d) => {
      c.current = d;
    }, []),
    disableHoverableContent: o
  }, a);
}, Fd = "Tooltip", [h3, $i] = yi(Fd), v3 = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Ld(Fd, e.__scopeTooltip), l = Id(t), [d, u] = Y(null), p = rt(), m = V(0), h = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = V(!1), [b = !1, y] = tt({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Jc))) : c.onClose(), a == null || a(k);
    }
  }), $ = yt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = ue(() => {
    window.clearTimeout(m.current), g.current = !1, y(!0);
  }, [
    y
  ]), w = ue(() => {
    window.clearTimeout(m.current), y(!1);
  }, [
    y
  ]), P = ue(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return G(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ x(co, l, /* @__PURE__ */ x(h3, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: $,
    trigger: d,
    onTriggerChange: u,
    onTriggerEnter: ue(() => {
      c.isOpenDelayed ? P() : _();
    }, [
      c.isOpenDelayed,
      P,
      _
    ]),
    onTriggerLeave: ue(() => {
      h ? w() : window.clearTimeout(m.current);
    }, [
      w,
      h
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: h
  }, n));
}, vf = "TooltipTrigger", g3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = $i(vf, n), a = Ld(vf, n), s = Id(n), i = V(null), c = we(t, i, o.onTriggerChange), l = V(!1), d = V(!1), u = ue(
    () => l.current = !1,
    []
  );
  return G(() => () => document.removeEventListener("pointerup", u), [
    u
  ]), /* @__PURE__ */ x(la, S({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, S({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: H(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
    }),
    onPointerLeave: H(e.onPointerLeave, () => {
      o.onTriggerLeave(), d.current = !1;
    }),
    onPointerDown: H(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", u, {
        once: !0
      });
    }),
    onFocus: H(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: H(e.onBlur, o.onClose),
    onClick: H(e.onClick, o.onClose)
  })));
}), b3 = "TooltipPortal", [_8, x3] = yi(b3, {
  forceMount: void 0
}), Bo = "TooltipContent", y3 = /* @__PURE__ */ R((e, t) => {
  const n = x3(Bo, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = $i(Bo, e.__scopeTooltip);
  return /* @__PURE__ */ x(Xe, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ x(lb, S({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ x($3, S({
    side: o
  }, a, {
    ref: t
  })));
}), $3 = /* @__PURE__ */ R((e, t) => {
  const n = $i(Bo, e.__scopeTooltip), r = Ld(Bo, e.__scopeTooltip), o = V(null), a = we(t, o), [s, i] = Y(null), { trigger: c, onClose: l } = n, d = o.current, { onPointerInTransitChange: u } = r, p = ue(() => {
    i(null), u(!1);
  }, [
    u
  ]), m = ue((h, v) => {
    const g = h.currentTarget, b = {
      x: h.clientX,
      y: h.clientY
    }, y = _3(b, g.getBoundingClientRect()), $ = C3(b, y), _ = S3(v.getBoundingClientRect()), w = N3([
      ...$,
      ..._
    ]);
    i(w), u(!0);
  }, [
    u
  ]);
  return G(() => () => p(), [
    p
  ]), G(() => {
    if (c && d) {
      const h = (g) => m(g, d), v = (g) => m(g, c);
      return c.addEventListener("pointerleave", h), d.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", h), d.removeEventListener("pointerleave", v);
      };
    }
  }, [
    c,
    d,
    m,
    p
  ]), G(() => {
    if (s) {
      const h = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, y = (c == null ? void 0 : c.contains(g)) || (d == null ? void 0 : d.contains(g)), $ = !E3(b, s);
        y ? p() : $ && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    d,
    s,
    l,
    p
  ]), /* @__PURE__ */ x(lb, S({}, e, {
    ref: a
  }));
}), [w3, C8] = yi(Fd, {
  isInside: !1
}), lb = /* @__PURE__ */ R((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = $i(Bo, n), l = Id(n), { onClose: d } = c;
  return G(() => (document.addEventListener(Jc, d), () => document.removeEventListener(Jc, d)), [
    d
  ]), G(() => {
    if (c.trigger) {
      const u = (p) => {
        const m = p.target;
        m != null && m.contains(c.trigger) && d();
      };
      return window.addEventListener("scroll", u, {
        capture: !0
      }), () => window.removeEventListener("scroll", u, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    d
  ]), /* @__PURE__ */ x(Sr, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (u) => u.preventDefault(),
    onDismiss: d
  }, /* @__PURE__ */ x(da, S({
    "data-state": c.stateAttribute
  }, l, i, {
    ref: t,
    style: {
      ...i.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ x(pl, null, r), /* @__PURE__ */ x(w3, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ x(hh, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function _3(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function C3(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return r;
}
function S3(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function E3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, d = t[s].y;
    c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o);
  }
  return o;
}
function N3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), P3(t);
}
function P3(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        t.pop();
      else
        break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const T3 = m3, k3 = v3, O3 = g3, db = y3, hr = T3, vr = k3, gr = O3, Gn = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f.exports.jsx(
  db,
  {
    ref: r,
    sideOffset: t,
    className: F(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Gn.displayName = db.displayName;
const ub = "Switch", [M3, S8] = Ze(ub), [D3, R3] = M3(ub), A3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...d } = e, [u, p] = Y(null), m = we(
    t,
    (y) => p(y)
  ), h = V(!1), v = u ? Boolean(u.closest("form")) : !0, [g = !1, b] = tt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ x(D3, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, S({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": fb(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, d, {
    ref: m,
    onClick: H(e.onClick, (y) => {
      b(
        ($) => !$
      ), v && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(L3, {
    control: u,
    bubbles: !h.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), j3 = "SwitchThumb", I3 = /* @__PURE__ */ R((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = R3(j3, n);
  return /* @__PURE__ */ x(ie.span, S({
    "data-state": fb(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), L3 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = V(null), s = fo(n), i = ca(t);
  return G(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && u) {
      const p = new Event("click", {
        bubbles: r
      });
      u.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", S({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function fb(e) {
  return e ? "checked" : "unchecked";
}
const pb = A3, F3 = I3, V3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f.exports.jsx(
  pb,
  {
    className: F(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f.exports.jsx(
      F3,
      {
        className: F(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
V3.displayName = pb.displayName;
const gf = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, l) => {
    const d = typeof c == "function" ? c(t) : c;
    if (!Object.is(d, t)) {
      const u = t;
      t = l ?? typeof d != "object" ? d : Object.assign({}, t, d), n.forEach((p) => p(t, u));
    }
  }, o = () => t, i = { setState: r, getState: o, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, i), i;
}, U3 = (e) => e ? gf(e) : gf;
var mb = { exports: {} }, rc = {}, oc = { exports: {} }, ac = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bf;
function W3() {
  if (bf)
    return ac;
  bf = 1;
  var e = N;
  function t(u, p) {
    return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(u, p) {
    var m = p(), h = r({ inst: { value: m, getSnapshot: p } }), v = h[0].inst, g = h[1];
    return a(function() {
      v.value = m, v.getSnapshot = p, c(v) && g({ inst: v });
    }, [u, m, p]), o(function() {
      return c(v) && g({ inst: v }), u(function() {
        c(v) && g({ inst: v });
      });
    }, [u]), s(m), m;
  }
  function c(u) {
    var p = u.getSnapshot;
    u = u.value;
    try {
      var m = p();
      return !n(u, m);
    } catch {
      return !0;
    }
  }
  function l(u, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return ac.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, ac;
}
var sc = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function z3() {
  return xf || (xf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n($) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), P = 1; P < _; P++)
          w[P - 1] = arguments[P];
        r("error", $, w);
      }
    }
    function r($, _, w) {
      {
        var P = t.ReactDebugCurrentFrame, k = P.getStackAddendum();
        k !== "" && (_ += "%s", w = w.concat([k]));
        var L = w.map(function(I) {
          return String(I);
        });
        L.unshift("Warning: " + _), Function.prototype.apply.call(console[$], console, L);
      }
    }
    function o($, _) {
      return $ === _ && ($ !== 0 || 1 / $ === 1 / _) || $ !== $ && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, d = !1, u = !1;
    function p($, _, w) {
      d || e.startTransition !== void 0 && (d = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var P = _();
      if (!u) {
        var k = _();
        a(P, k) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var L = s({
        inst: {
          value: P,
          getSnapshot: _
        }
      }), I = L[0].inst, ee = L[1];
      return c(function() {
        I.value = P, I.getSnapshot = _, m(I) && ee({
          inst: I
        });
      }, [$, P, _]), i(function() {
        m(I) && ee({
          inst: I
        });
        var te = function() {
          m(I) && ee({
            inst: I
          });
        };
        return $(te);
      }, [$]), l(P), P;
    }
    function m($) {
      var _ = $.getSnapshot, w = $.value;
      try {
        var P = _();
        return !a(w, P);
      } catch {
        return !0;
      }
    }
    function h($, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? h : p, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    sc.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), sc;
}
var yf;
function hb() {
  return yf || (yf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = W3() : e.exports = z3();
  }(oc)), oc.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $f;
function B3() {
  if ($f)
    return rc;
  $f = 1;
  var e = N, t = hb();
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return rc.useSyncExternalStoreWithSelector = function(l, d, u, p, m) {
    var h = a(null);
    if (h.current === null) {
      var v = { hasValue: !1, value: null };
      h.current = v;
    } else
      v = h.current;
    h = i(function() {
      function b(P) {
        if (!y) {
          if (y = !0, $ = P, P = p(P), m !== void 0 && v.hasValue) {
            var k = v.value;
            if (m(k, P))
              return _ = k;
          }
          return _ = P;
        }
        if (k = _, r($, P))
          return k;
        var L = p(P);
        return m !== void 0 && m(k, L) ? k : ($ = P, _ = L);
      }
      var y = !1, $, _, w = u === void 0 ? null : u;
      return [function() {
        return b(d());
      }, w === null ? void 0 : function() {
        return b(w());
      }];
    }, [d, u, p, m]);
    var g = o(l, h[0], h[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, rc;
}
var ic = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf;
function Y3() {
  return wf || (wf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = hb();
    function n(d, u) {
      return d === u && (d !== 0 || 1 / d === 1 / u) || d !== d && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(d, u, p, m, h) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var b = i(function() {
        var w = !1, P, k, L = function(K) {
          if (!w) {
            w = !0, P = K;
            var Z = m(K);
            if (h !== void 0 && g.hasValue) {
              var O = g.value;
              if (h(O, Z))
                return k = O, O;
            }
            return k = Z, Z;
          }
          var A = P, j = k;
          if (r(A, K))
            return j;
          var W = m(K);
          return h !== void 0 && h(j, W) ? j : (P = K, k = W, W);
        }, I = p === void 0 ? null : p, ee = function() {
          return L(u());
        }, te = I === null ? void 0 : function() {
          return L(I());
        };
        return [ee, te];
      }, [u, p, m, h]), y = b[0], $ = b[1], _ = o(d, y, $);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    ic.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ic;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = B3() : e.exports = Y3();
})(mb);
const H3 = /* @__PURE__ */ hx(mb.exports), { useSyncExternalStoreWithSelector: K3 } = H3;
function G3(e, t = e.getState, n) {
  const r = K3(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return ux(r), r;
}
const _f = (e) => {
  const t = typeof e == "function" ? U3(e) : e, n = (r, o) => G3(t, r, o);
  return Object.assign(n, t), n;
}, Z3 = (e) => e ? _f(e) : _f, q3 = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ f.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ f.exports.jsxs(_r, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ f.exports.jsx(
      Wn,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ f.exports.jsx(Cr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(e0, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(ht, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
var xn = { exports: {} }, cc = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;
function X3() {
  if (Cf)
    return Le;
  Cf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function $(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case t:
          switch (w = w.type, w) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case u:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case d:
                case h:
                case m:
                case s:
                  return w;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function _(w) {
    return $(w) === l;
  }
  return Le.AsyncMode = c, Le.ConcurrentMode = l, Le.ContextConsumer = i, Le.ContextProvider = s, Le.Element = t, Le.ForwardRef = d, Le.Fragment = r, Le.Lazy = h, Le.Memo = m, Le.Portal = n, Le.Profiler = a, Le.StrictMode = o, Le.Suspense = u, Le.isAsyncMode = function(w) {
    return _(w) || $(w) === c;
  }, Le.isConcurrentMode = _, Le.isContextConsumer = function(w) {
    return $(w) === i;
  }, Le.isContextProvider = function(w) {
    return $(w) === s;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Le.isForwardRef = function(w) {
    return $(w) === d;
  }, Le.isFragment = function(w) {
    return $(w) === r;
  }, Le.isLazy = function(w) {
    return $(w) === h;
  }, Le.isMemo = function(w) {
    return $(w) === m;
  }, Le.isPortal = function(w) {
    return $(w) === n;
  }, Le.isProfiler = function(w) {
    return $(w) === a;
  }, Le.isStrictMode = function(w) {
    return $(w) === o;
  }, Le.isSuspense = function(w) {
    return $(w) === u;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === u || w === p || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === d || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === v);
  }, Le.typeOf = $, Le;
}
var Fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function Q3() {
  return Sf || (Sf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function $(Q) {
      return typeof Q == "string" || typeof Q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Q === r || Q === l || Q === a || Q === o || Q === u || Q === p || typeof Q == "object" && Q !== null && (Q.$$typeof === h || Q.$$typeof === m || Q.$$typeof === s || Q.$$typeof === i || Q.$$typeof === d || Q.$$typeof === g || Q.$$typeof === b || Q.$$typeof === y || Q.$$typeof === v);
    }
    function _(Q) {
      if (typeof Q == "object" && Q !== null) {
        var Re = Q.$$typeof;
        switch (Re) {
          case t:
            var Ue = Q.type;
            switch (Ue) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case u:
                return Ue;
              default:
                var dt = Ue && Ue.$$typeof;
                switch (dt) {
                  case i:
                  case d:
                  case h:
                  case m:
                  case s:
                    return dt;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var w = c, P = l, k = i, L = s, I = t, ee = d, te = r, K = h, Z = m, O = n, A = a, j = o, W = u, B = !1;
    function M(Q) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(Q) || _(Q) === c;
    }
    function D(Q) {
      return _(Q) === l;
    }
    function U(Q) {
      return _(Q) === i;
    }
    function q(Q) {
      return _(Q) === s;
    }
    function oe(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === t;
    }
    function ce(Q) {
      return _(Q) === d;
    }
    function ye(Q) {
      return _(Q) === r;
    }
    function be(Q) {
      return _(Q) === h;
    }
    function ne(Q) {
      return _(Q) === m;
    }
    function le(Q) {
      return _(Q) === n;
    }
    function he(Q) {
      return _(Q) === a;
    }
    function J(Q) {
      return _(Q) === o;
    }
    function ve(Q) {
      return _(Q) === u;
    }
    Fe.AsyncMode = w, Fe.ConcurrentMode = P, Fe.ContextConsumer = k, Fe.ContextProvider = L, Fe.Element = I, Fe.ForwardRef = ee, Fe.Fragment = te, Fe.Lazy = K, Fe.Memo = Z, Fe.Portal = O, Fe.Profiler = A, Fe.StrictMode = j, Fe.Suspense = W, Fe.isAsyncMode = M, Fe.isConcurrentMode = D, Fe.isContextConsumer = U, Fe.isContextProvider = q, Fe.isElement = oe, Fe.isForwardRef = ce, Fe.isFragment = ye, Fe.isLazy = be, Fe.isMemo = ne, Fe.isPortal = le, Fe.isProfiler = he, Fe.isStrictMode = J, Fe.isSuspense = ve, Fe.isValidElementType = $, Fe.typeOf = _;
  }()), Fe;
}
var Ef;
function vb() {
  return Ef || (Ef = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = X3() : e.exports = Q3();
  }(cc)), cc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var lc, Nf;
function J3() {
  if (Nf)
    return lc;
  Nf = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var c = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return lc = o() ? Object.assign : function(a, s) {
    for (var i, c = r(a), l, d = 1; d < arguments.length; d++) {
      i = Object(arguments[d]);
      for (var u in i)
        t.call(i, u) && (c[u] = i[u]);
      if (e) {
        l = e(i);
        for (var p = 0; p < l.length; p++)
          n.call(i, l[p]) && (c[l[p]] = i[l[p]]);
      }
    }
    return c;
  }, lc;
}
var dc, Pf;
function Vd() {
  if (Pf)
    return dc;
  Pf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dc = e, dc;
}
var uc, Tf;
function gb() {
  return Tf || (Tf = 1, uc = Function.call.bind(Object.prototype.hasOwnProperty)), uc;
}
var fc, kf;
function e4() {
  if (kf)
    return fc;
  kf = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Vd(), n = {}, r = gb();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, i, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (r(a, d)) {
          var u;
          try {
            if (typeof a[d] != "function") {
              var p = Error(
                (c || "React class") + ": " + i + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            u = a[d](s, d, c, i, null, t);
          } catch (h) {
            u = h;
          }
          if (u && !(u instanceof Error) && e(
            (c || "React class") + ": type specification of " + i + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var m = l ? l() : "";
            e(
              "Failed " + i + " type: " + u.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, fc = o, fc;
}
var pc, Of;
function t4() {
  if (Of)
    return pc;
  Of = 1;
  var e = vb(), t = J3(), n = Vd(), r = gb(), o = e4(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var c = "Warning: " + i;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return pc = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function u(D) {
      var U = D && (l && D[l] || D[d]);
      if (typeof U == "function")
        return U;
    }
    var p = "<<anonymous>>", m = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: y(),
      arrayOf: $,
      element: _(),
      elementType: w(),
      instanceOf: P,
      node: ee(),
      objectOf: L,
      oneOf: k,
      oneOfType: I,
      shape: K,
      exact: Z
    };
    function h(D, U) {
      return D === U ? D !== 0 || 1 / D === 1 / U : D !== D && U !== U;
    }
    function v(D, U) {
      this.message = D, this.data = U && typeof U == "object" ? U : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function g(D) {
      if (process.env.NODE_ENV !== "production")
        var U = {}, q = 0;
      function oe(ye, be, ne, le, he, J, ve) {
        if (le = le || p, J = J || ne, ve !== n) {
          if (c) {
            var Q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Q.name = "Invariant Violation", Q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = le + ":" + ne;
            !U[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + le + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), U[Re] = !0, q++);
          }
        }
        return be[ne] == null ? ye ? be[ne] === null ? new v("The " + he + " `" + J + "` is marked as required " + ("in `" + le + "`, but its value is `null`.")) : new v("The " + he + " `" + J + "` is marked as required in " + ("`" + le + "`, but its value is `undefined`.")) : null : D(be, ne, le, he, J);
      }
      var ce = oe.bind(null, !1);
      return ce.isRequired = oe.bind(null, !0), ce;
    }
    function b(D) {
      function U(q, oe, ce, ye, be, ne) {
        var le = q[oe], he = j(le);
        if (he !== D) {
          var J = W(le);
          return new v(
            "Invalid " + ye + " `" + be + "` of type " + ("`" + J + "` supplied to `" + ce + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return g(U);
    }
    function y() {
      return g(s);
    }
    function $(D) {
      function U(q, oe, ce, ye, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var ne = q[oe];
        if (!Array.isArray(ne)) {
          var le = j(ne);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var he = 0; he < ne.length; he++) {
          var J = D(ne, he, ce, ye, be + "[" + he + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return g(U);
    }
    function _() {
      function D(U, q, oe, ce, ye) {
        var be = U[q];
        if (!i(be)) {
          var ne = j(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + ne + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(D);
    }
    function w() {
      function D(U, q, oe, ce, ye) {
        var be = U[q];
        if (!e.isValidElementType(be)) {
          var ne = j(be);
          return new v("Invalid " + ce + " `" + ye + "` of type " + ("`" + ne + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(D);
    }
    function P(D) {
      function U(q, oe, ce, ye, be) {
        if (!(q[oe] instanceof D)) {
          var ne = D.name || p, le = M(q[oe]);
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return g(U);
    }
    function k(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function U(q, oe, ce, ye, be) {
        for (var ne = q[oe], le = 0; le < D.length; le++)
          if (h(ne, D[le]))
            return null;
        var he = JSON.stringify(D, function(ve, Q) {
          var Re = W(Q);
          return Re === "symbol" ? String(Q) : Q;
        });
        return new v("Invalid " + ye + " `" + be + "` of value `" + String(ne) + "` " + ("supplied to `" + ce + "`, expected one of " + he + "."));
      }
      return g(U);
    }
    function L(D) {
      function U(q, oe, ce, ye, be) {
        if (typeof D != "function")
          return new v("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var ne = q[oe], le = j(ne);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an object."));
        for (var he in ne)
          if (r(ne, he)) {
            var J = D(ne, he, ce, ye, be + "." + he, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return g(U);
    }
    function I(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var U = 0; U < D.length; U++) {
        var q = D[U];
        if (typeof q != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(q) + " at index " + U + "."
          ), s;
      }
      function oe(ce, ye, be, ne, le) {
        for (var he = [], J = 0; J < D.length; J++) {
          var ve = D[J], Q = ve(ce, ye, be, ne, le, n);
          if (Q == null)
            return null;
          Q.data && r(Q.data, "expectedType") && he.push(Q.data.expectedType);
        }
        var Re = he.length > 0 ? ", expected one of type [" + he.join(", ") + "]" : "";
        return new v("Invalid " + ne + " `" + le + "` supplied to " + ("`" + be + "`" + Re + "."));
      }
      return g(oe);
    }
    function ee() {
      function D(U, q, oe, ce, ye) {
        return O(U[q]) ? null : new v("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(D);
    }
    function te(D, U, q, oe, ce) {
      return new v(
        (D || "React class") + ": " + U + " type `" + q + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function K(D) {
      function U(q, oe, ce, ye, be) {
        var ne = q[oe], le = j(ne);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var he in D) {
          var J = D[he];
          if (typeof J != "function")
            return te(ce, ye, be, he, W(J));
          var ve = J(ne, he, ce, ye, be + "." + he, n);
          if (ve)
            return ve;
        }
        return null;
      }
      return g(U);
    }
    function Z(D) {
      function U(q, oe, ce, ye, be) {
        var ne = q[oe], le = j(ne);
        if (le !== "object")
          return new v("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var he = t({}, q[oe], D);
        for (var J in he) {
          var ve = D[J];
          if (r(D, J) && typeof ve != "function")
            return te(ce, ye, be, J, W(ve));
          if (!ve)
            return new v(
              "Invalid " + ye + " `" + be + "` key `" + J + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(q[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var Q = ve(ne, J, ce, ye, be + "." + J, n);
          if (Q)
            return Q;
        }
        return null;
      }
      return g(U);
    }
    function O(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(O);
          if (D === null || i(D))
            return !0;
          var U = u(D);
          if (U) {
            var q = U.call(D), oe;
            if (U !== D.entries) {
              for (; !(oe = q.next()).done; )
                if (!O(oe.value))
                  return !1;
            } else
              for (; !(oe = q.next()).done; ) {
                var ce = oe.value;
                if (ce && !O(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(D, U) {
      return D === "symbol" ? !0 : U ? U["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && U instanceof Symbol : !1;
    }
    function j(D) {
      var U = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : A(U, D) ? "symbol" : U;
    }
    function W(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var U = j(D);
      if (U === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return U;
    }
    function B(D) {
      var U = W(D);
      switch (U) {
        case "array":
        case "object":
          return "an " + U;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + U;
        default:
          return U;
      }
    }
    function M(D) {
      return !D.constructor || !D.constructor.name ? p : D.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, pc;
}
var mc, Mf;
function n4() {
  if (Mf)
    return mc;
  Mf = 1;
  var e = Vd();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, mc = function() {
    function r(s, i, c, l, d, u) {
      if (u !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, mc;
}
if (process.env.NODE_ENV !== "production") {
  var r4 = vb(), o4 = !0;
  xn.exports = t4()(r4.isElement, o4);
} else
  xn.exports = n4()();
var a4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, s4 = Object.defineProperty, i4 = Object.defineProperties, c4 = Object.getOwnPropertyDescriptors, Cs = Object.getOwnPropertySymbols, bb = Object.prototype.hasOwnProperty, xb = Object.prototype.propertyIsEnumerable, Df = (e, t, n) => t in e ? s4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rf = (e, t) => {
  for (var n in t || (t = {}))
    bb.call(t, n) && Df(e, n, t[n]);
  if (Cs)
    for (var n of Cs(t))
      xb.call(t, n) && Df(e, n, t[n]);
  return e;
}, l4 = (e, t) => i4(e, c4(t)), d4 = (e, t) => {
  var n = {};
  for (var r in e)
    bb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Cs)
    for (var r of Cs(e))
      t.indexOf(r) < 0 && xb.call(e, r) && (n[r] = e[r]);
  return n;
}, Dn = (e, t, n) => {
  const r = R(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: d } = s, u = d4(s, ["color", "size", "stroke", "children"]);
      return x(
        "svg",
        Rf(l4(Rf({
          ref: a
        }, a4), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), u),
        [...n.map(([p, m]) => x(p, m)), ...d || []]
      );
    }
  );
  return r.propTypes = {
    color: xn.exports.string,
    size: xn.exports.oneOfType([xn.exports.string, xn.exports.number]),
    stroke: xn.exports.oneOfType([xn.exports.string, xn.exports.number])
  }, r.displayName = `${t}`, r;
}, yb = Dn(
  "adjustments-horizontal",
  "IconAdjustmentsHorizontal",
  [
    ["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
    ["path", { d: "M4 6l8 0", key: "svg-1" }],
    ["path", { d: "M16 6l4 0", key: "svg-2" }],
    ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }],
    ["path", { d: "M4 12l2 0", key: "svg-4" }],
    ["path", { d: "M10 12l10 0", key: "svg-5" }],
    ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }],
    ["path", { d: "M4 18l11 0", key: "svg-7" }],
    ["path", { d: "M19 18l1 0", key: "svg-8" }]
  ]
), $b = Dn("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), u4 = Dn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), f4 = Dn("click", "IconClick", [
  ["path", { d: "M3 12l3 0", key: "svg-0" }],
  ["path", { d: "M12 3l0 3", key: "svg-1" }],
  ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }],
  ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }],
  ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }],
  ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]
]), p4 = Dn("moon", "IconMoon", [
  [
    "path",
    {
      d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
      key: "svg-0"
    }
  ]
]), m4 = Dn("photo-plus", "IconPhotoPlus", [
  ["path", { d: "M15 8h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5",
      key: "svg-1"
    }
  ],
  ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4", key: "svg-2" }],
  ["path", { d: "M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54", key: "svg-3" }],
  ["path", { d: "M16 19h6", key: "svg-4" }],
  ["path", { d: "M19 16v6", key: "svg-5" }]
]), wb = Dn("photo-star", "IconPhotoStar", [
  ["path", { d: "M15 8h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",
      key: "svg-1"
    }
  ],
  ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }],
  [
    "path",
    {
      d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
      key: "svg-3"
    }
  ]
]), _b = Dn("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), h4 = Dn("sun", "IconSun", [
  ["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",
      key: "svg-1"
    }
  ]
]);
const v4 = /* @__PURE__ */ ct(void 0), g4 = { setTheme: (e) => {
}, themes: [] }, b4 = () => {
  var e;
  return (e = He(v4)) !== null && e !== void 0 ? e : g4;
}, x4 = ({ isExpanded: e }) => {
  const [t, n] = Y(!1), { theme: r, setTheme: o } = b4();
  if (G(() => {
    n(!0);
  }, []), !t)
    return null;
  const a = () => {
    o(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
      children: r === "light" ? /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(p4, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(h4, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, y4 = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(x4, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ f.exports.jsx(op, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Qx, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ f.exports.jsx(rp, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), wi = Z3((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), E8 = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = wi();
  return /* @__PURE__ */ f.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: F(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ f.exports.jsx(q3, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ f.exports.jsx(
          y4,
          {
            theme: o,
            logout: r,
            isExpanded: s,
            toggleExpandSidebar: i
          }
        )
      ] })
    }
  );
}, N8 = ({ children: e }) => {
  const { isExpanded: t } = wi();
  return /* @__PURE__ */ f.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ f.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, Cb = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = Y(!1), c = V(null), { isExpanded: l } = wi();
  return G(() => {
    const d = () => {
      const u = c.current.querySelector(
        `#${e.replaceAll("/", "_")}`
      );
      if (u) {
        const p = u.offsetWidth < u.scrollWidth;
        i(p);
      }
    };
    return window.addEventListener("resize", d), d(), () => window.removeEventListener("resize", d);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-brand-primary/10 
        ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-brand-primary/10 
          ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark hover:dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Af = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = Y(!1), c = V(null);
  return G(() => {
    const l = () => {
      const d = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (d) {
        const u = d.offsetWidth < d.scrollWidth;
        i(u);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg bg-brand-primary/20 hover:dark:bg-main-hover 
        ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ f.exports.jsx(hr, { delayDuration: 180, children: /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-main-hover 
          ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:border-dark dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ f.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
          /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, $4 = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = Y(!1), [i, c] = Y(!1), { isExpanded: l } = wi(), d = V(null), u = () => c((m) => !m), p = e.replaceAll(" ", "_");
  return G(() => {
    const m = () => {
      const h = d.current.querySelector(`#${p}`);
      if (h) {
        const v = h.offsetWidth < h.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ f.exports.jsxs(hr, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: d,
        onClick: u,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ f.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ f.exports.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
              /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(ou, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Do, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Af,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ f.exports.jsxs(hr, { delayDuration: 180, children: [
    /* @__PURE__ */ f.exports.jsxs(
      "div",
      {
        ref: d,
        onClick: u,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-brand-primary/20 hover:dark:bg-brand-primary/10 select-none`,
        children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ f.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ f.exports.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ f.exports.jsxs(vr, { children: [
              /* @__PURE__ */ f.exports.jsx(gr, { className: "truncate", children: /* @__PURE__ */ f.exports.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ f.exports.jsx(Gn, { children: /* @__PURE__ */ f.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ f.exports.jsx(ou, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ f.exports.jsx(Do, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ f.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsx(
      Af,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
}, or = ct({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  isFormatedUpperQueries: !0,
  showFilters: !0,
  searchForm: null,
  multiSelectedItems: [],
  limitOfMultiSelect: 0,
  setMultiItemsSelected: () => {
  },
  onSubmitTable: null,
  setSearchForm: () => {
  },
  setSelectItem: () => {
  },
  getGlobalFilters: () => {
  },
  resetOptionsByFilter: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function w4() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = He(or);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        hd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(si, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(vd, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(ii, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(ci, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(vl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(ao, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const Sb = () => {
  const { columns: e } = He(or);
  return /* @__PURE__ */ f.exports.jsx(Ev, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ f.exports.jsx(hi, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ f.exports.jsx(Pv, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, P8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, ka = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), T8 = { limit: 10, page: 1 }, jf = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), k8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], _4 = ({ colSpan: e }) => /* @__PURE__ */ f.exports.jsx(hi, { children: /* @__PURE__ */ f.exports.jsx($d, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), C4 = ({
  data: e,
  columns: t,
  setSelectItem: n,
  setMultiItemsSelected: r,
  multiItemsSelected: o,
  limitOfMultiSelect: a,
  itemsSelectedCount: s,
  setItemsSelectedCount: i
}) => {
  const c = (l, d) => {
    const u = () => {
      const p = o ? o.some(
        (m) => m.id === d.id
      ) : !1;
      if (o.length === a && !p) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }
      if (p) {
        const m = o.filter(
          (h) => h.id !== d.id
        );
        r(m), i(s - 1);
      } else {
        const m = [
          ...o,
          { ...d, isSelected: !0 }
        ];
        r(m), i(s + 1);
      }
    };
    return l != null && l.render ? /* @__PURE__ */ f.exports.jsx("div", { children: l.render(d) }) : l.id === "select" ? /* @__PURE__ */ f.exports.jsx(
      Ve,
      {
        onClick: () => n(d),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ f.exports.jsx(f4, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ f.exports.jsx(
      kh,
      {
        className: "border-slate-500 data-[state=checked]:bg-brand-primary-lighter",
        onClick: () => {
          o && u();
        },
        checked: o ? o.some(
          (p) => p.id === d.id
        ) : !1,
        disabled: s === a && !s
      }
    ) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: d[l.id] });
  };
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((l) => /* @__PURE__ */ f.exports.jsx(hi, { children: t.map((d) => /* @__PURE__ */ f.exports.jsx($d, { children: c(d, l) }, jf())) }, jf())) });
}, Eb = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = He(or), [s, i] = Y(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(Nv, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    C4,
    {
      setMultiItemsSelected: r,
      setSelectItem: n,
      setItemsSelectedCount: i,
      itemsSelectedCount: s,
      data: e,
      multiItemsSelected: o,
      columns: t,
      limitOfMultiSelect: a
    }
  ) : /* @__PURE__ */ f.exports.jsx(_4, { colSpan: t.length }) });
}, S4 = () => /* @__PURE__ */ f.exports.jsxs(yd, { children: [
  /* @__PURE__ */ f.exports.jsx(Sb, {}),
  /* @__PURE__ */ f.exports.jsx(Eb, {})
] }), E4 = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), N4 = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(E4, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var If = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = pe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, Nb = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? If(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return If(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, P4 = function(e, t) {
  t.shouldUseNativeValidation && Nb(e, t);
  var n = {};
  for (var r in e) {
    var o = pe(t.fields, r);
    Be(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, T4 = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(d) {
      return d.errors.forEach(function(u) {
        return e.push(u);
      });
    }), t) {
      var c = n[s].types, l = c && c[r.code];
      n[s] = Fm(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, Pb = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && Nb({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: P4(T4(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, je;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const a = {};
    for (const s of o)
      a[s] = s;
    return a;
  }, e.getValidEnumValues = (o) => {
    const a = e.objectKeys(o).filter((i) => typeof o[o[i]] != "number"), s = {};
    for (const i of a)
      s[i] = o[i];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(a) {
    return o[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const a = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && a.push(s);
    return a;
  }, e.find = (o, a) => {
    for (const s of o)
      if (a(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, a = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, a) => typeof a == "bigint" ? a.toString() : a;
})(je || (je = {}));
var el;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(el || (el = {}));
const me = je.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Fn = (e) => {
  switch (typeof e) {
    case "undefined":
      return me.undefined;
    case "string":
      return me.string;
    case "number":
      return isNaN(e) ? me.nan : me.number;
    case "boolean":
      return me.boolean;
    case "function":
      return me.function;
    case "bigint":
      return me.bigint;
    case "symbol":
      return me.symbol;
    case "object":
      return Array.isArray(e) ? me.array : e === null ? me.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? me.promise : typeof Map < "u" && e instanceof Map ? me.map : typeof Set < "u" && e instanceof Set ? me.set : typeof Date < "u" && e instanceof Date ? me.date : me.object;
    default:
      return me.unknown;
  }
}, ae = je.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), k4 = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Yt extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, o = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let i = r, c = 0;
          for (; c < s.path.length; ) {
            const l = s.path[c];
            c === s.path.length - 1 ? (i[l] = i[l] || { _errors: [] }, i[l]._errors.push(n(s))) : i[l] = i[l] || { _errors: [] }, i = i[l], c++;
          }
        }
    };
    return o(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, je.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Yt.create = (e) => new Yt(e);
const Yo = (e, t) => {
  let n;
  switch (e.code) {
    case ae.invalid_type:
      e.received === me.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ae.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, je.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${je.joinValues(e.keys, ", ")}`;
      break;
    case ae.invalid_union:
      n = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${je.joinValues(e.options)}`;
      break;
    case ae.invalid_enum_value:
      n = `Invalid enum value. Expected ${je.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ae.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ae.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ae.invalid_date:
      n = "Invalid date";
      break;
    case ae.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : je.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ae.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ae.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ae.custom:
      n = "Invalid input";
      break;
    case ae.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ae.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ae.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, je.assertNever(e);
  }
  return { message: n };
};
let Tb = Yo;
function O4(e) {
  Tb = e;
}
function Ss() {
  return Tb;
}
const Es = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, a = [...n, ...o.path || []], s = {
    ...o,
    path: a
  };
  let i = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(s, { data: t, defaultError: i }).message;
  return {
    ...o,
    path: a,
    message: o.message || i
  };
}, M4 = [];
function ge(e, t) {
  const n = Es({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Ss(),
      Yo
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class vt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted")
        return Pe;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n)
      r.push({
        key: await o.key,
        value: await o.value
      });
    return vt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Pe;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Pe = Object.freeze({
  status: "aborted"
}), kb = (e) => ({ status: "dirty", value: e }), $t = (e) => ({ status: "valid", value: e }), tl = (e) => e.status === "aborted", nl = (e) => e.status === "dirty", Ns = (e) => e.status === "valid", Ps = (e) => typeof Promise < "u" && e instanceof Promise;
var _e;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_e || (_e = {}));
class cn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Lf = (e, t) => {
  if (Ns(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Yt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Te(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => s.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: r ?? i.defaultError } : { message: n ?? i.defaultError }, description: o };
}
class ke {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Fn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Fn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new vt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Fn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ps(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Fn(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Lf(o, a);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Fn(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Ps(o) ? o : Promise.resolve(o));
    return Lf(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ae.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new Xt({
      schema: this,
      typeName: Ee.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return $n.create(this, this._def);
  }
  nullable() {
    return yr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ht.create(this, this._def);
  }
  promise() {
    return no.create(this, this._def);
  }
  or(t) {
    return Zo.create([this, t], this._def);
  }
  and(t) {
    return qo.create(this, t, this._def);
  }
  transform(t) {
    return new Xt({
      ...Te(this._def),
      schema: this,
      typeName: Ee.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ta({
      ...Te(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Ee.ZodDefault
    });
  }
  brand() {
    return new Mb({
      typeName: Ee.ZodBranded,
      type: this,
      ...Te(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ms({
      ...Te(this._def),
      innerType: this,
      catchValue: n,
      typeName: Ee.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Oa.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const D4 = /^c[^\s-]{8,}$/i, R4 = /^[a-z][a-z0-9]*$/, A4 = /[0-9A-HJKMNP-TV-Z]{26}/, j4 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, I4 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, L4 = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, F4 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, V4 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, U4 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function W4(e, t) {
  return !!((t === "v4" || !t) && F4.test(e) || (t === "v6" || !t) && V4.test(e));
}
class zt extends ke {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ae.invalid_string,
      ..._e.errToObj(r)
    }), this.nonempty = (t) => this.min(1, _e.errToObj(t)), this.trim = () => new zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== me.string) {
      const a = this._getOrReturnCtx(t);
      return ge(
        a,
        {
          code: ae.invalid_type,
          expected: me.string,
          received: a.parsedType
        }
        //
      ), Pe;
    }
    const r = new vt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ge(o, {
          code: ae.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ge(o, {
          code: ae.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        I4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        L4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        j4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        D4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        R4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        A4.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ulid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ge(o, {
            validation: "url",
            code: ae.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "regex",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? U4(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? W4(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty()) : je.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new zt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ..._e.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ..._e.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ..._e.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ..._e.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ..._e.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ..._e.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ..._e.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ..._e.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      ..._e.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ..._e.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ..._e.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ..._e.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ..._e.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ..._e.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ..._e.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ..._e.errToObj(n)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
zt.create = (e) => {
  var t;
  return new zt({
    checks: [],
    typeName: Ee.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Te(e)
  });
};
function z4(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Zn extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== me.number) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.number,
        received: a.parsedType
      }), Pe;
    }
    let r;
    const o = new vt();
    for (const a of this._def.checks)
      a.kind === "int" ? je.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? z4(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_finite,
        message: a.message
      }), o.dirty()) : je.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, _e.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, _e.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, _e.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, _e.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Zn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: _e.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Zn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: _e.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _e.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: _e.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: _e.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: _e.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && je.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Zn.create = (e) => new Zn({
  checks: [],
  typeName: Ee.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Te(e)
});
class qn extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== me.bigint) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.bigint,
        received: a.parsedType
      }), Pe;
    }
    let r;
    const o = new vt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : je.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, _e.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, _e.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, _e.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, _e.toString(n));
  }
  setLimit(t, n, r, o) {
    return new qn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: _e.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new qn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _e.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
qn.create = (e) => {
  var t;
  return new qn({
    checks: [],
    typeName: Ee.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Te(e)
  });
};
class Ho extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== me.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.boolean,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Ho.create = (e) => new Ho({
  typeName: Ee.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Te(e)
});
class br extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== me.date) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.date,
        received: a.parsedType
      }), Pe;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_date
      }), Pe;
    }
    const r = new vt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ae.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ae.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : je.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new br({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: _e.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: _e.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
br.create = (e) => new br({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Ee.ZodDate,
  ...Te(e)
});
class Ts extends ke {
  _parse(t) {
    if (this._getType(t) !== me.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.symbol,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Ts.create = (e) => new Ts({
  typeName: Ee.ZodSymbol,
  ...Te(e)
});
class Ko extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.undefined,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Ko.create = (e) => new Ko({
  typeName: Ee.ZodUndefined,
  ...Te(e)
});
class Go extends ke {
  _parse(t) {
    if (this._getType(t) !== me.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.null,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
Go.create = (e) => new Go({
  typeName: Ee.ZodNull,
  ...Te(e)
});
class to extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return $t(t.data);
  }
}
to.create = (e) => new to({
  typeName: Ee.ZodAny,
  ...Te(e)
});
class dr extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return $t(t.data);
  }
}
dr.create = (e) => new dr({
  typeName: Ee.ZodUnknown,
  ...Te(e)
});
class Tn extends ke {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ae.invalid_type,
      expected: me.never,
      received: n.parsedType
    }), Pe;
  }
}
Tn.create = (e) => new Tn({
  typeName: Ee.ZodNever,
  ...Te(e)
});
class ks extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.void,
        received: r.parsedType
      }), Pe;
    }
    return $t(t.data);
  }
}
ks.create = (e) => new ks({
  typeName: Ee.ZodVoid,
  ...Te(e)
});
class Ht extends ke {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== me.array)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.array,
        received: n.parsedType
      }), Pe;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ge(n, {
        code: s ? ae.too_big : ae.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ge(n, {
      code: ae.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ge(n, {
      code: ae.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new cn(n, s, n.path, i)))).then((s) => vt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new cn(n, s, n.path, i)));
    return vt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Ht({
      ...this._def,
      minLength: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new Ht({
      ...this._def,
      maxLength: { value: t, message: _e.toString(n) }
    });
  }
  length(t, n) {
    return new Ht({
      ...this._def,
      exactLength: { value: t, message: _e.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ht.create = (e, t) => new Ht({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Ee.ZodArray,
  ...Te(t)
});
function Wr(e) {
  if (e instanceof Je) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = $n.create(Wr(r));
    }
    return new Je({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Ht ? new Ht({
      ...e._def,
      type: Wr(e.element)
    }) : e instanceof $n ? $n.create(Wr(e.unwrap())) : e instanceof yr ? yr.create(Wr(e.unwrap())) : e instanceof ln ? ln.create(e.items.map((t) => Wr(t))) : e;
}
class Je extends ke {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = je.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== me.object) {
      const l = this._getOrReturnCtx(t);
      return ge(l, {
        code: ae.invalid_type,
        expected: me.object,
        received: l.parsedType
      }), Pe;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Tn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const d = a[l], u = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: d._parse(new cn(o, u, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof Tn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const d of i)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: o.data[d] }
          });
      else if (l === "strict")
        i.length > 0 && (ge(o, {
          code: ae.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const d of i) {
        const u = o.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: l._parse(
            new cn(o, u, o.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const d of c) {
        const u = await d.key;
        l.push({
          key: u,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return l;
    }).then((l) => vt.mergeObjectSync(r, l)) : vt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return _e.errToObj, new Je({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = _e.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new Je({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Je({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Je({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Je({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Ee.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Je({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return je.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return je.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Wr(this);
  }
  partial(t) {
    const n = {};
    return je.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return je.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof $n; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new Je({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Ob(je.objectKeys(this.shape));
  }
}
Je.create = (e, t) => new Je({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Tn.create(),
  typeName: Ee.ZodObject,
  ...Te(t)
});
Je.strictCreate = (e, t) => new Je({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Tn.create(),
  typeName: Ee.ZodObject,
  ...Te(t)
});
Je.lazycreate = (e, t) => new Je({
  shape: e,
  unknownKeys: "strip",
  catchall: Tn.create(),
  typeName: Ee.ZodObject,
  ...Te(t)
});
class Zo extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new Yt(i.ctx.common.issues));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: s
      }), Pe;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(o);
    {
      let a;
      const s = [];
      for (const c of r) {
        const l = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !a && (a = { result: d, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((c) => new Yt(c));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: i
      }), Pe;
    }
  }
  get options() {
    return this._def.options;
  }
}
Zo.create = (e, t) => new Zo({
  options: e,
  typeName: Ee.ZodUnion,
  ...Te(t)
});
const rs = (e) => e instanceof Qo ? rs(e.schema) : e instanceof Xt ? rs(e.innerType()) : e instanceof Jo ? [e.value] : e instanceof Xn ? e.options : e instanceof ea ? Object.keys(e.enum) : e instanceof ta ? rs(e._def.innerType) : e instanceof Ko ? [void 0] : e instanceof Go ? [null] : null;
class _i extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.object)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.object,
        received: n.parsedType
      }), Pe;
    const r = this.discriminator, o = n.data[r], a = this.optionsMap.get(o);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ge(n, {
      code: ae.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), Pe);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const o = /* @__PURE__ */ new Map();
    for (const a of n) {
      const s = rs(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new _i({
      typeName: Ee.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Te(r)
    });
  }
}
function rl(e, t) {
  const n = Fn(e), r = Fn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === me.object && r === me.object) {
    const o = je.objectKeys(t), a = je.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = rl(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === me.array && r === me.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = rl(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === me.date && r === me.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class qo extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (tl(a) || tl(s))
        return Pe;
      const i = rl(a.value, s.value);
      return i.valid ? ((nl(a) || nl(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
        code: ae.invalid_intersection_types
      }), Pe);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, s]) => o(a, s)) : o(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
qo.create = (e, t, n) => new qo({
  left: e,
  right: t,
  typeName: Ee.ZodIntersection,
  ...Te(n)
});
class ln extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.array)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.array,
        received: r.parsedType
      }), Pe;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ae.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Pe;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ae.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new cn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => vt.mergeArray(n, s)) : vt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new ln({
      ...this._def,
      rest: t
    });
  }
}
ln.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ln({
    items: e,
    typeName: Ee.ZodTuple,
    rest: null,
    ...Te(t)
  });
};
class Xo extends ke {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.object)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.object,
        received: r.parsedType
      }), Pe;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new cn(r, i, r.path, i)),
        value: s._parse(new cn(r, r.data[i], r.path, i))
      });
    return r.common.async ? vt.mergeObjectAsync(n, o) : vt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ke ? new Xo({
      keyType: t,
      valueType: n,
      typeName: Ee.ZodRecord,
      ...Te(r)
    }) : new Xo({
      keyType: zt.create(),
      valueType: t,
      typeName: Ee.ZodRecord,
      ...Te(n)
    });
  }
}
class Os extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.map)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.map,
        received: r.parsedType
      }), Pe;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new cn(r, i, r.path, [l, "key"])),
      value: a._parse(new cn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, d = await c.value;
          if (l.status === "aborted" || d.status === "aborted")
            return Pe;
          (l.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(l.value, d.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, d = c.value;
        if (l.status === "aborted" || d.status === "aborted")
          return Pe;
        (l.status === "dirty" || d.status === "dirty") && n.dirty(), i.set(l.value, d.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Os.create = (e, t, n) => new Os({
  valueType: t,
  keyType: e,
  typeName: Ee.ZodMap,
  ...Te(n)
});
class xr extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.set)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.set,
        received: r.parsedType
      }), Pe;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ge(r, {
      code: ae.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ge(r, {
      code: ae.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(c) {
      const l = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return Pe;
        d.status === "dirty" && n.dirty(), l.add(d.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new cn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new xr({
      ...this._def,
      minSize: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new xr({
      ...this._def,
      maxSize: { value: t, message: _e.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
xr.create = (e, t) => new xr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Ee.ZodSet,
  ...Te(t)
});
class Kr extends ke {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.function)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.function,
        received: n.parsedType
      }), Pe;
    function r(i, c) {
      return Es({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Ss(),
          Yo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return Es({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Ss(),
          Yo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof no ? $t(async (...i) => {
      const c = new Yt([]), l = await this._def.args.parseAsync(i, a).catch((p) => {
        throw c.addIssue(r(i, p)), c;
      }), d = await s(...l);
      return await this._def.returns._def.type.parseAsync(d, a).catch((p) => {
        throw c.addIssue(o(d, p)), c;
      });
    }) : $t((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new Yt([r(i, c.error)]);
      const l = s(...c.data), d = this._def.returns.safeParse(l, a);
      if (!d.success)
        throw new Yt([o(l, d.error)]);
      return d.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Kr({
      ...this._def,
      args: ln.create(t).rest(dr.create())
    });
  }
  returns(t) {
    return new Kr({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Kr({
      args: t || ln.create([]).rest(dr.create()),
      returns: n || dr.create(),
      typeName: Ee.ZodFunction,
      ...Te(r)
    });
  }
}
class Qo extends ke {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Qo.create = (e, t) => new Qo({
  getter: e,
  typeName: Ee.ZodLazy,
  ...Te(t)
});
class Jo extends ke {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ae.invalid_literal,
        expected: this._def.value
      }), Pe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Jo.create = (e, t) => new Jo({
  value: e,
  typeName: Ee.ZodLiteral,
  ...Te(t)
});
function Ob(e, t) {
  return new Xn({
    values: e,
    typeName: Ee.ZodEnum,
    ...Te(t)
  });
}
class Xn extends ke {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: je.joinValues(r),
        received: n.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: r
      }), Pe;
    }
    return $t(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t) {
    return Xn.create(t);
  }
  exclude(t) {
    return Xn.create(this.options.filter((n) => !t.includes(n)));
  }
}
Xn.create = Ob;
class ea extends ke {
  _parse(t) {
    const n = je.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== me.string && r.parsedType !== me.number) {
      const o = je.objectValues(n);
      return ge(r, {
        expected: je.joinValues(o),
        received: r.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if (n.indexOf(t.data) === -1) {
      const o = je.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ae.invalid_enum_value,
        options: o
      }), Pe;
    }
    return $t(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
ea.create = (e, t) => new ea({
  values: e,
  typeName: Ee.ZodNativeEnum,
  ...Te(t)
});
class no extends ke {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.promise && n.common.async === !1)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.promise,
        received: n.parsedType
      }), Pe;
    const r = n.parsedType === me.promise ? n.data : Promise.resolve(n.data);
    return $t(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
no.create = (e, t) => new no({
  type: e,
  typeName: Ee.ZodPromise,
  ...Te(t)
});
class Xt extends ke {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ee.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null;
    if (o.type === "preprocess") {
      const s = o.transform(r.data);
      return r.common.async ? Promise.resolve(s).then((i) => this._def.schema._parseAsync({
        data: i,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: s,
        path: r.path,
        parent: r
      });
    }
    const a = {
      addIssue: (s) => {
        ge(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), o.type === "refinement") {
      const s = (i) => {
        const c = o.refinement(i, a);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? Pe : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? Pe : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Ns(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => Ns(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    je.assertNever(o);
  }
}
Xt.create = (e, t, n) => new Xt({
  schema: e,
  typeName: Ee.ZodEffects,
  effect: t,
  ...Te(n)
});
Xt.createWithPreprocess = (e, t, n) => new Xt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Ee.ZodEffects,
  ...Te(n)
});
class $n extends ke {
  _parse(t) {
    return this._getType(t) === me.undefined ? $t(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$n.create = (e, t) => new $n({
  innerType: e,
  typeName: Ee.ZodOptional,
  ...Te(t)
});
class yr extends ke {
  _parse(t) {
    return this._getType(t) === me.null ? $t(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yr.create = (e, t) => new yr({
  innerType: e,
  typeName: Ee.ZodNullable,
  ...Te(t)
});
class ta extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === me.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ta.create = (e, t) => new ta({
  innerType: e,
  typeName: Ee.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Te(t)
});
class Ms extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return Ps(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Yt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Yt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ms.create = (e, t) => new Ms({
  innerType: e,
  typeName: Ee.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Te(t)
});
class Ds extends ke {
  _parse(t) {
    if (this._getType(t) !== me.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.nan,
        received: r.parsedType
      }), Pe;
    }
    return { status: "valid", value: t.data };
  }
}
Ds.create = (e) => new Ds({
  typeName: Ee.ZodNaN,
  ...Te(e)
});
const B4 = Symbol("zod_brand");
class Mb extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Oa extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Pe : a.status === "dirty" ? (n.dirty(), kb(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? Pe : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Oa({
      in: t,
      out: n,
      typeName: Ee.ZodPipeline
    });
  }
}
const Db = (e, t = {}, n) => e ? to.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : to.create(), Y4 = {
  object: Je.lazycreate
};
var Ee;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(Ee || (Ee = {}));
const H4 = (e, t = {
  message: `Input not instance of ${e.name}`
}) => Db((n) => n instanceof e, t), Rb = zt.create, Ab = Zn.create, K4 = Ds.create, G4 = qn.create, jb = Ho.create, Z4 = br.create, q4 = Ts.create, X4 = Ko.create, Q4 = Go.create, J4 = to.create, e7 = dr.create, t7 = Tn.create, n7 = ks.create, r7 = Ht.create, o7 = Je.create, a7 = Je.strictCreate, s7 = Zo.create, i7 = _i.create, c7 = qo.create, l7 = ln.create, d7 = Xo.create, u7 = Os.create, f7 = xr.create, p7 = Kr.create, m7 = Qo.create, h7 = Jo.create, v7 = Xn.create, g7 = ea.create, b7 = no.create, Ff = Xt.create, x7 = $n.create, y7 = yr.create, $7 = Xt.createWithPreprocess, w7 = Oa.create, _7 = () => Rb().optional(), C7 = () => Ab().optional(), S7 = () => jb().optional(), E7 = {
  string: (e) => zt.create({ ...e, coerce: !0 }),
  number: (e) => Zn.create({ ...e, coerce: !0 }),
  boolean: (e) => Ho.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => qn.create({ ...e, coerce: !0 }),
  date: (e) => br.create({ ...e, coerce: !0 })
}, N7 = Pe;
var Rs = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Yo,
  setErrorMap: O4,
  getErrorMap: Ss,
  makeIssue: Es,
  EMPTY_PATH: M4,
  addIssueToContext: ge,
  ParseStatus: vt,
  INVALID: Pe,
  DIRTY: kb,
  OK: $t,
  isAborted: tl,
  isDirty: nl,
  isValid: Ns,
  isAsync: Ps,
  get util() {
    return je;
  },
  get objectUtil() {
    return el;
  },
  ZodParsedType: me,
  getParsedType: Fn,
  ZodType: ke,
  ZodString: zt,
  ZodNumber: Zn,
  ZodBigInt: qn,
  ZodBoolean: Ho,
  ZodDate: br,
  ZodSymbol: Ts,
  ZodUndefined: Ko,
  ZodNull: Go,
  ZodAny: to,
  ZodUnknown: dr,
  ZodNever: Tn,
  ZodVoid: ks,
  ZodArray: Ht,
  ZodObject: Je,
  ZodUnion: Zo,
  ZodDiscriminatedUnion: _i,
  ZodIntersection: qo,
  ZodTuple: ln,
  ZodRecord: Xo,
  ZodMap: Os,
  ZodSet: xr,
  ZodFunction: Kr,
  ZodLazy: Qo,
  ZodLiteral: Jo,
  ZodEnum: Xn,
  ZodNativeEnum: ea,
  ZodPromise: no,
  ZodEffects: Xt,
  ZodTransformer: Xt,
  ZodOptional: $n,
  ZodNullable: yr,
  ZodDefault: ta,
  ZodCatch: Ms,
  ZodNaN: Ds,
  BRAND: B4,
  ZodBranded: Mb,
  ZodPipeline: Oa,
  custom: Db,
  Schema: ke,
  ZodSchema: ke,
  late: Y4,
  get ZodFirstPartyTypeKind() {
    return Ee;
  },
  coerce: E7,
  any: J4,
  array: r7,
  bigint: G4,
  boolean: jb,
  date: Z4,
  discriminatedUnion: i7,
  effect: Ff,
  enum: v7,
  function: p7,
  instanceof: H4,
  intersection: c7,
  lazy: m7,
  literal: h7,
  map: u7,
  nan: K4,
  nativeEnum: g7,
  never: t7,
  null: Q4,
  nullable: y7,
  number: Ab,
  object: o7,
  oboolean: S7,
  onumber: C7,
  optional: x7,
  ostring: _7,
  pipeline: w7,
  preprocess: $7,
  promise: b7,
  record: d7,
  set: f7,
  strictObject: a7,
  string: Rb,
  symbol: q4,
  transformer: Ff,
  tuple: l7,
  undefined: X4,
  union: s7,
  unknown: e7,
  void: n7,
  NEVER: N7,
  ZodIssueCode: ae,
  quotelessJson: k4,
  ZodError: Yt
});
const P7 = () => {
  const { showFilters: e, setShowFilters: t } = He(or);
  return /* @__PURE__ */ f.exports.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(yb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, T7 = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = He(or), l = (d) => {
    c(d);
  };
  return /* @__PURE__ */ f.exports.jsxs(En, { children: [
    /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      n || /* @__PURE__ */ f.exports.jsx($b, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((d) => d.selected).map((d) => /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: d.label
          },
          d.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(sn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
      /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Na, { children: [
        /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(Zt, { children: o.map((d) => /* @__PURE__ */ f.exports.jsxs(
          qt,
          {
            onSelect: () => {
              d.selected ? s(e, d.id, !1) : s(e, d.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: F(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    d.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                }
              ),
              d.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: d.label })
            ]
          },
          d.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(fi, {}),
          /* @__PURE__ */ f.exports.jsx(Zt, { children: /* @__PURE__ */ f.exports.jsx(
            qt,
            {
              onSelect: () => l(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, k7 = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(En, { children: [
  /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(gl, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        ht,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(sn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(fn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      ud,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), O7 = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = He(or), d = e.watch(n.map((p) => p.id)), u = () => {
    var m;
    a();
    const p = [];
    (m = Object.entries(e == null ? void 0 : e.getValues())) == null || m.forEach((h) => {
      h[1] && p.push({
        field: l ? ka(h[0]) : h[0],
        text: h[1]
      });
    }), s({ queries: p, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ f.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ f.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((p, m) => /* @__PURE__ */ f.exports.jsx(
          k7,
          {
            queryText: d[m],
            label: p.label,
            id: p.id,
            form: e
          },
          p.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ f.exports.jsx(P7, {}),
      o && r && r.map((p) => /* @__PURE__ */ f.exports.jsx(
        T7,
        {
          onSubmit: t,
          form: e,
          id: p.id,
          icon: p.icon,
          label: p.label,
          options: p.options
        },
        p.id
      )),
      o && (r != null && r.filter(
        (p) => p.options.some((m) => m.selected)
      ).length) ? /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(Ws, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, M7 = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = He(or), l = Hm({
    defaultValues: n.reduce((u, p) => (u[p.id] = "", u), {}),
    resolver: Pb(
      Rs.object(
        n.reduce((u, p) => (u[p.id] = Rs.string().optional(), u), {})
      )
    )
  }), d = async (u) => {
    var h;
    console.log({ data: u });
    const p = r(), m = [];
    (h = Object.entries(u)) == null || h.forEach((v) => {
      v[1] && m.push({
        field: c ? ka(v[0]) : v[0],
        text: v[1]
      });
    }), console.log("queries formatted ", m), e({ queries: m, filters: p, limit: s, page: a });
  };
  return G(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Gm, { ...l, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(O7, { form: l, onSubmit: d }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ve,
      {
        type: "submit",
        onClick: l.handleSubmit(d),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ f.exports.jsx(hl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(_b, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, D7 = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), R7 = () => /* @__PURE__ */ f.exports.jsxs(yd, { children: [
  /* @__PURE__ */ f.exports.jsx(Sb, {}),
  /* @__PURE__ */ f.exports.jsx(Eb, {})
] }), A7 = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function O8(e) {
  const [t, n] = Y([]), [r, o] = Y([]), [a, s] = Y([]), [i, c] = Y(!1), [l, d] = Y(e == null ? void 0 : e.error), [u, p] = Y(e == null ? void 0 : e.loading), [m, h] = Y(), [v, g] = Y(
    (e == null ? void 0 : e.pagination) ?? A7
  ), [b, y] = Y(
    (e == null ? void 0 : e.columns) || []
  ), $ = ue(
    (O) => e.onSubmitTable({ ...O }),
    [e]
  ), _ = ue(
    (O) => {
      var B;
      g(O);
      const A = m.getValues(), j = [];
      (B = Object.entries(A)) == null || B.forEach((M) => {
        M[1] && j.push({
          field: e.isFormatedUpperQueries ? ka(M[0]) : M[0],
          text: M[1]
        });
      });
      const W = r.map((M) => ({
        id: M.id,
        label: M.label,
        options: M.options.filter((D) => D.selected).map((D) => D.value)
      })).filter((M) => M.options.length > 0);
      $({
        filters: W,
        queries: j,
        limit: O.limit,
        page: O.page
      });
    },
    [r, $, m]
  ), w = ue(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), P = ue(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), k = () => r.map((O) => ({
    id: O.id,
    label: O.label,
    options: O.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((O) => O.options.length > 0), L = (O) => {
    const A = r.find((j) => j.id === O);
    return A ? A.options.filter((W) => W.selected).map((W) => W.value) : [];
  }, I = (O, A, j) => {
    const W = r.map((B) => B.id === O ? {
      ...B,
      options: B.options.map((M) => M.id === A ? { ...M, selected: j } : M)
    } : B);
    o(W);
  }, ee = () => r, te = (O) => {
    const A = r.map((j) => j.id === O ? {
      ...j,
      options: j.options.map((W) => ({
        ...W,
        selected: !1
      }))
    } : j);
    o(A);
  }, K = (O) => _({ ...v, limit: O }), Z = () => {
    const O = r.map((A) => ({
      ...A,
      options: A.options.map((j) => ({ ...j, selected: !1 }))
    }));
    o(O);
  };
  return G(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), G(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), G(() => d((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), G(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), G(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), G(() => {
    const O = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(O);
  }, [b]), G(() => {
    const O = (j) => (j == null ? void 0 : j.filters) && (j == null ? void 0 : j.filters.length), A = b.filter(O).map((j) => {
      const W = j.filters.map((M) => ({
        ...M,
        selected: !1
      }));
      return {
        ...j,
        id: j.id,
        options: W
      };
    });
    o(A);
  }, [b]), G(() => {
    e != null && e.filters && (e == null || e.filters.forEach((O) => {
      O != null && O.filters && b.forEach((A) => {
        O.id === A.id && o((j) => j.some((B) => B.id === O.id) ? j : [
          ...j,
          {
            id: A.id,
            label: A.label,
            options: O.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), G(() => {
    g((O) => {
      var A, j;
      return {
        ...O,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (j = e == null ? void 0 : e.pagination) == null ? void 0 : j.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    or.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: P,
        searchForm: m,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: K,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: ee,
        selectOptionFilter: I,
        resetOptionsByFilter: te,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: L,
        getFiltersWithOptionsSelected: k,
        setSelectItem: e.setSelectItem,
        setShowFilters: (O) => c(O),
        setSearchForm: (O) => h(O)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(M7, { onSubmitTable: $, loading: u }),
        /* @__PURE__ */ f.exports.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          u && /* @__PURE__ */ f.exports.jsx(N4, {}),
          !u && l && /* @__PURE__ */ f.exports.jsx(D7, {}),
          !u && !l && !t && /* @__PURE__ */ f.exports.jsx(R7, {}),
          !u && !l && t && /* @__PURE__ */ f.exports.jsx(S4, {})
        ] }),
        !u && !l && t && /* @__PURE__ */ f.exports.jsx(w4, {})
      ] })
    }
  );
}
const M8 = ({
  id: e,
  label: t,
  defaultValue: n,
  placeholder: r,
  description: o,
  items: a,
  form: s,
  tabIndex: i,
  classNameContainer: c,
  classNameSelect: l,
  classNameGroup: d,
  disabled: u
}) => /* @__PURE__ */ f.exports.jsx(
  Nr,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: p, formState: m }) => {
      var h;
      return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full", c), children: [
        /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((h = m == null ? void 0 : m.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            m.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: o }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ f.exports.jsxs(hd, { onValueChange: p.onChange, defaultValue: p.value, disabled: u, children: [
          /* @__PURE__ */ f.exports.jsx(va, { children: /* @__PURE__ */ f.exports.jsx(si, { disabled: u, tabIndex: i, className: F("w-full", l), children: /* @__PURE__ */ f.exports.jsx(vd, { placeholder: r }) }) }),
          /* @__PURE__ */ f.exports.jsx(ii, { children: /* @__PURE__ */ f.exports.jsx(kS, { className: F("overflow-auto", d), children: a.map((v) => {
            var g, b;
            return /* @__PURE__ */ f.exports.jsx(ci, { value: (g = v.value) == null ? void 0 : g.toString(), children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-center items-center", children: [
              (v == null ? void 0 : v.icon) && /* @__PURE__ */ f.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: v.icon }),
              v.label
            ] }) }, (b = v.value) == null ? void 0 : b.toString());
          }) }) })
        ] })
      ] });
    }
  }
);
function Ci() {
  return (Ci = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function Ib(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function ol(e) {
  var t = V(e), n = V(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var na = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, ko = function(e) {
  return "touches" in e;
}, al = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Vf = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = ko(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: na((o.pageX - (r.left + al(e).pageXOffset)) / r.width), top: na((o.pageY - (r.top + al(e).pageYOffset)) / r.height) };
}, Uf = function(e) {
  !ko(e) && e.preventDefault();
}, Lb = N.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = Ib(e, ["onMove", "onKey"]), o = V(null), a = ol(t), s = ol(n), i = V(null), c = V(!1), l = yt(function() {
    var m = function(g) {
      Uf(g), (ko(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Vf(o.current, g, i.current)) : v(!1);
    }, h = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = al(o.current), $ = g ? y.addEventListener : y.removeEventListener;
      $(b ? "touchmove" : "mousemove", m), $(b ? "touchend" : "mouseup", h);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Uf(b), !function(_, w) {
        return w && !ko(_);
      }(b, c.current) && y)) {
        if (ko(b)) {
          c.current = !0;
          var $ = b.changedTouches || [];
          $.length && (i.current = $[0].identifier);
        }
        y.focus(), a(Vf(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), d = l[0], u = l[1], p = l[2];
  return G(function() {
    return p;
  }, [p]), N.createElement("div", Ci({}, r, { onTouchStart: d, onMouseDown: d, className: "react-colorful__interactive", ref: o, onKeyDown: u, tabIndex: 0, role: "slider" }));
}), Ud = function(e) {
  return e.filter(Boolean).join(" ");
}, Fb = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Ud(["react-colorful__pointer", e.className]);
  return N.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, N.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, ft = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, j7 = function(e) {
  return U7(sl(e));
}, sl = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? ft(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? ft(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, I7 = function(e) {
  return V7(F7(e));
}, L7 = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: ft(e.h), s: ft(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: ft(o / 2), a: ft(r, 2) };
}, il = function(e) {
  var t = L7(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, F7 = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: ft(255 * [r, i, s, s, c, r][l]), g: ft(255 * [c, r, r, i, s, s][l]), b: ft(255 * [s, s, c, r, r, i][l]), a: ft(o, 2) };
}, qa = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, V7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? qa(ft(255 * o)) : "";
  return "#" + qa(t) + qa(n) + qa(r) + a;
}, U7 = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: ft(60 * (i < 0 ? i + 6 : i)), s: ft(a ? s / a * 100 : 0), v: ft(a / 255 * 100), a: o };
}, W7 = N.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Ud(["react-colorful__hue", e.className]);
  return N.createElement("div", { className: r }, N.createElement(Lb, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: na(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": ft(t), "aria-valuemax": "360", "aria-valuemin": "0" }, N.createElement(Fb, { className: "react-colorful__hue-pointer", left: t / 360, color: il({ h: t, s: 100, v: 100, a: 1 }) })));
}), z7 = N.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: il({ h: t.h, s: 100, v: 100, a: 1 }) };
  return N.createElement("div", { className: "react-colorful__saturation", style: r }, N.createElement(Lb, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: na(t.s + 100 * o.left, 0, 100), v: na(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + ft(t.s) + "%, Brightness " + ft(t.v) + "%" }, N.createElement(Fb, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: il(t) })));
}), Vb = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, B7 = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || Vb(sl(e), sl(t));
};
function Y7(e, t, n) {
  var r = ol(n), o = Y(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = V({ color: t, hsva: a });
  G(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), G(function() {
    var l;
    Vb(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = ue(function(l) {
    s(function(d) {
      return Object.assign({}, d, l);
    });
  }, []);
  return [a, c];
}
var H7 = typeof window < "u" ? Is : G, K7 = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Wf = /* @__PURE__ */ new Map(), G7 = function(e) {
  H7(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Wf.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Wf.set(t, n);
      var r = K7();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, Z7 = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = Ib(e, ["className", "colorModel", "color", "onChange"]), i = V(null);
  G7(i);
  var c = Y7(n, o, a), l = c[0], d = c[1], u = Ud(["react-colorful", t]);
  return N.createElement("div", Ci({}, s, { ref: i, className: u }), N.createElement(z7, { hsva: l, onChange: d }), N.createElement(W7, { hue: l.h, onChange: d, className: "react-colorful__last-control" }));
}, q7 = { defaultColor: "000", toHsva: j7, fromHsva: function(e) {
  return I7({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: B7 }, X7 = function(e) {
  return N.createElement(Z7, Ci({}, e, { colorModel: q7 }));
};
const D8 = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ f.exports.jsx(X7, { color: e, onChange: t }),
  /* @__PURE__ */ f.exports.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ f.exports.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function Q7(e, t, n) {
  var r = Y([]), o = r[0], a = r[1], s = V([]), i = ue(function(u, p) {
    var m = e(u, p), h = m[0], v = m[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), h;
  }, [e]), c = Ls(i, n), l = c[0], d = c[1];
  return G(function() {
    var u = o.pop();
    if (u) {
      var p = t(u, d);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), G(function() {
    return function() {
      s.current.forEach(function(u) {
        u();
      });
    };
  }, []), [l, d];
}
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ut.apply(this, arguments);
}
function J7(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Si = {
  3: "Cancel",
  6: "Help",
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
  28: "Convert",
  29: "NonConvert",
  30: "Accept",
  31: "ModeChange",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  41: "Select",
  42: "Print",
  43: "Execute",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  48: ["0", ")"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "#"],
  52: ["4", "$"],
  53: ["5", "%"],
  54: ["6", "^"],
  55: ["7", "&"],
  56: ["8", "*"],
  57: ["9", "("],
  91: "OS",
  93: "ContextMenu",
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  181: "VolumeMute",
  182: "VolumeDown",
  183: "VolumeUp",
  186: [";", ":"],
  187: ["=", "+"],
  188: [",", "<"],
  189: ["-", "_"],
  190: [".", ">"],
  191: ["/", "?"],
  192: ["`", "~"],
  219: ["[", "{"],
  220: ["\\", "|"],
  221: ["]", "}"],
  222: ["'", '"'],
  224: "Meta",
  225: "AltGraph",
  246: "Attn",
  247: "CrSel",
  248: "ExSel",
  249: "EraseEof",
  250: "Play",
  251: "ZoomOut"
}, xt;
for (xt = 1; xt < 25; xt += 1)
  Si[111 + xt] = "F" + xt;
for (xt = 65; xt < 91; xt += 1) {
  var zf = /* @__PURE__ */ String.fromCharCode(xt);
  Si[xt] = [/* @__PURE__ */ zf.toLowerCase(), /* @__PURE__ */ zf.toUpperCase()];
}
for (xt = 96; xt < 106; xt += 1)
  Si[xt] = /* @__PURE__ */ String.fromCharCode(xt - 48);
function ek(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = Si[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var tk = {
  getKey: ek
};
function Xa() {
}
function Ub(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function nk(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var rk = ["refs"], hc = [], ok = ["autoFocus", "length", "validate", "format", "debug"], ak = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], sk = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], ik = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Xa,
  onRejectKey: Xa,
  onChange: Xa,
  onComplete: Xa,
  debug: !1
};
function ck(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: lk(e.validate),
    fallback: null
  };
}
function Wb(e) {
  return Math.max(0, e - 1);
}
function cl(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function lk(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Bf(e, t, n) {
  var r = n.split("").slice(0, e.codeLength).every(e.isKeyAllowed);
  if (!r)
    return [e, [{
      type: "set-input-val",
      idx: e.focusIdx,
      val: ""
    }, {
      type: "reject-key",
      idx: t,
      key: n
    }, {
      type: "handle-code-change"
    }]];
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = cl(o + e.focusIdx - 1, e.codeLength), s = Ub(0, o).flatMap(function(i) {
    return [{
      type: "set-input-val",
      idx: i + e.focusIdx,
      val: n[i]
    }, {
      type: "resolve-key",
      idx: i + e.focusIdx,
      key: n[i]
    }];
  });
  return e.focusIdx !== a && s.push({
    type: "focus-input",
    idx: a
  }), s.push({
    type: "handle-code-change"
  }), [Ut({}, e, {
    focusIdx: a
  }), s];
}
var dk = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [Ut({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), hc];
        case "Dead":
          return [t, [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: ""
          }, {
            type: "reject-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "handle-code-change"
          }]];
        case "ArrowLeft": {
          var r = Wb(t.focusIdx);
          return [Ut({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = cl(t.focusIdx, t.codeLength);
          return [Ut({}, t, {
            focusIdx: o
          }), [{
            type: "focus-input",
            idx: o
          }]];
        }
        case "Delete":
        case "Backspace":
          return [t, [{
            type: "handle-delete",
            idx: t.focusIdx
          }, {
            type: "handle-code-change"
          }]];
        default: {
          if (!t.isKeyAllowed(n.key))
            return [t, [{
              type: "reject-key",
              idx: t.focusIdx,
              key: n.key
            }]];
          var a = cl(t.focusIdx, t.codeLength);
          return [Ut({}, t, {
            focusIdx: a
          }), [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: n.key
          }, {
            type: "resolve-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "focus-input",
            idx: a
          }, {
            type: "handle-code-change"
          }]];
        }
      }
    case "handle-key-up": {
      if (!t.fallback)
        return [t, hc];
      var s = Ut({}, t, {
        fallback: null
      }), i = [], c = t.fallback, l = c.idx, d = c.val, u = n.val;
      if (d === "" && u === "")
        i.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (d === "" && u !== "")
        return Bf(s, l, u);
      return [s, i];
    }
    case "handle-paste":
      return Bf(t, n.idx, n.val);
    case "focus-input":
      return [Ut({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, hc];
  }
};
function uk(e) {
  var t = e.refs, n = J7(e, rk);
  return ue(function(r) {
    switch (r.type) {
      case "focus-input": {
        t.current[r.idx].focus();
        break;
      }
      case "set-input-val": {
        var o = n.format(r.val);
        t.current[r.idx].value = o;
        break;
      }
      case "resolve-key": {
        t.current[r.idx].setCustomValidity(""), n.onResolveKey(r.key, t.current[r.idx]);
        break;
      }
      case "reject-key": {
        t.current[r.idx].setCustomValidity("Invalid key"), n.onRejectKey(r.key, t.current[r.idx]);
        break;
      }
      case "handle-delete": {
        var a = t.current[r.idx].value;
        if (t.current[r.idx].setCustomValidity(""), t.current[r.idx].value = "", !a) {
          var s = Wb(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var i = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), c = t.current.map(function(d) {
          return d.value.trim();
        }), l = (i === "rtl" ? c.reverse() : c).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var fk = /* @__PURE__ */ R(function(e, t) {
  var n = Ut({}, ik, e), r = n.autoFocus, o = n.length, a = nk([].concat(ok, ak), n), s = V([]), i = uk(Ut({
    refs: s
  }, n)), c = Q7(dk, i, ck(n))[1];
  fx(t, function() {
    return s.current;
  }, [s]);
  function l(v) {
    return function() {
      c({
        type: "focus-input",
        idx: v
      });
    };
  }
  function d(v) {
    return function(g) {
      var b = tk.getKey(g.nativeEvent);
      !sk.includes(b) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: v,
        key: b,
        val: g.nativeEvent.target.value
      }));
    };
  }
  function u(v) {
    return function(g) {
      g.nativeEvent.target instanceof HTMLInputElement && c({
        type: "handle-key-up",
        idx: v,
        val: g.nativeEvent.target.value
      });
    };
  }
  function p(v) {
    return function(g) {
      g.preventDefault();
      var b = g.clipboardData.getData("Text");
      c({
        type: "handle-paste",
        idx: v,
        val: b
      });
    };
  }
  function m(v) {
    return function(g) {
      g && (s.current[v] = g);
    };
  }
  function h(v) {
    return Boolean(v === 0 && r);
  }
  return N.createElement(N.Fragment, null, Ub(0, o).map(function(v) {
    return N.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, a, {
      key: v,
      ref: m(v),
      autoFocus: h(v),
      onFocus: l(v),
      onKeyDown: d(v),
      onKeyUp: u(v),
      onPaste: p(v)
    }));
  }));
});
const R8 = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = N.useState(!1);
  return /* @__PURE__ */ f.exports.jsx("div", { className: F("pin-field-container", s), children: /* @__PURE__ */ f.exports.jsx(
    fk,
    {
      className: F("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var zb = {}, Wd = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getListFiles = e.getImage = e.getBase64 = e.getAcceptTypeString = e.openFileDialog = void 0, e.openFileDialog = function(t) {
    t.current && t.current.click();
  }, e.getAcceptTypeString = function(t, n) {
    return t != null && t.length ? t.map(function(r) {
      return "." + r;
    }).join(", ") : n ? "" : "image/*";
  }, e.getBase64 = function(t) {
    var n = new FileReader();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(String(n.result));
      }), n.readAsDataURL(t);
    });
  }, e.getImage = function(t) {
    var n = new Image();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(n);
      }), n.src = URL.createObjectURL(t);
    });
  }, e.getListFiles = function(t, n) {
    for (var r = [], o = 0; o < t.length; o += 1)
      r.push(e.getBase64(t[o]));
    return Promise.all(r).then(function(a) {
      var s = a.map(function(i, c) {
        var l;
        return l = {}, l[n] = i, l.file = t[c], l;
      });
      return s;
    });
  };
})(Wd);
var Bb = {}, wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.DEFAULT_DATA_URL_KEY = wn.INIT_MAX_NUMBER = wn.DEFAULT_NULL_INDEX = void 0;
wn.DEFAULT_NULL_INDEX = -1;
wn.INIT_MAX_NUMBER = 1e3;
wn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = it && it.__awaiter || function(a, s, i, c) {
    function l(d) {
      return d instanceof i ? d : new i(function(u) {
        u(d);
      });
    }
    return new (i || (i = Promise))(function(d, u) {
      function p(v) {
        try {
          h(c.next(v));
        } catch (g) {
          u(g);
        }
      }
      function m(v) {
        try {
          h(c.throw(v));
        } catch (g) {
          u(g);
        }
      }
      function h(v) {
        v.done ? d(v.value) : l(v.value).then(p, m);
      }
      h((c = c.apply(a, s || [])).next());
    });
  }, n = it && it.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (d[0] & 1)
        throw d[1];
      return d[1];
    }, trys: [], ops: [] }, c, l, d, u;
    return u = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
    function p(h) {
      return function(v) {
        return m([h, v]);
      };
    }
    function m(h) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (d = h[0] & 2 ? l.return : h[0] ? l.throw || ((d = l.return) && d.call(l), 0) : l.next) && !(d = d.call(l, h[1])).done)
            return d;
          switch (l = 0, d && (h = [h[0] & 2, d.value]), h[0]) {
            case 0:
            case 1:
              d = h;
              break;
            case 4:
              return i.label++, { value: h[1], done: !1 };
            case 5:
              i.label++, l = h[1], h = [0];
              continue;
            case 7:
              h = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (d = i.trys, !(d = d.length > 0 && d[d.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                i = 0;
                continue;
              }
              if (h[0] === 3 && (!d || h[1] > d[0] && h[1] < d[3])) {
                i.label = h[1];
                break;
              }
              if (h[0] === 6 && i.label < d[1]) {
                i.label = d[1], d = h;
                break;
              }
              if (d && i.label < d[2]) {
                i.label = d[2], i.ops.push(h);
                break;
              }
              d[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          h = s.call(a, i);
        } catch (v) {
          h = [6, v], l = 0;
        } finally {
          c = d = 0;
        }
      if (h[0] & 5)
        throw h[1];
      return { value: h[0] ? h[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = wn, o = Wd;
  e.isResolutionValid = function(a, s, i, c) {
    if (i === void 0 && (i = 0), c === void 0 && (c = 1), !i || !c || !a.width || !a.height)
      return !0;
    switch (s) {
      case "absolute": {
        if (a.width === i && a.height === c)
          return !0;
        break;
      }
      case "ratio": {
        var l = i / c;
        if (a.width / a.height === l)
          return !0;
        break;
      }
      case "less": {
        if (a.width <= i && a.height <= c)
          return !0;
        break;
      }
      case "more": {
        if (a.width >= i && a.height >= c)
          return !0;
        break;
      }
    }
    return !1;
  }, e.isImageValid = function(a) {
    return !!a.includes("image");
  }, e.isMaxFileSizeValid = function(a, s) {
    return s ? a <= s : !0;
  }, e.isAcceptTypeValid = function(a, s) {
    if (a && a.length > 0) {
      var i = s.split(".").pop() || "";
      if (a.findIndex(function(c) {
        return c.toLowerCase() === i.toLowerCase();
      }) < 0)
        return !1;
    }
    return !0;
  }, e.isMaxNumberValid = function(a, s, i) {
    if (s !== 0 && !s)
      return !0;
    if (i === r.DEFAULT_NULL_INDEX) {
      if (a <= s)
        return !0;
    } else if (a <= s + 1)
      return !0;
    return !1;
  }, e.getErrorValidation = function(a) {
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, d = a.acceptType, u = a.maxFileSize, p = a.resolutionType, m = a.resolutionWidth, h = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, b, y, $, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(d, y.name) ? e.isMaxFileSizeValid(y.size, u) ? p ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if ($ = w.sent(), _ = e.isResolutionValid($, p, m, h), !_)
              return g.resolution = !0, [3, 5];
            w.label = 4;
          case 4:
            return b += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(Bb);
var ll = it && it.__assign || function() {
  return ll = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ll.apply(this, arguments);
}, pk = it && it.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), mk = it && it.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), hk = it && it.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && pk(t, e, n);
  return mk(t, e), t;
}, vc = it && it.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(d) {
      try {
        l(r.next(d));
      } catch (u) {
        s(u);
      }
    }
    function c(d) {
      try {
        l(r.throw(d));
      } catch (u) {
        s(u);
      }
    }
    function l(d) {
      d.done ? a(d.value) : o(d.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, gc = it && it.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(d) {
      return c([l, d]);
    };
  }
  function c(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, o && (a = l[0] & 2 ? o.return : l[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done)
          return a;
        switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: !1 };
          case 5:
            n.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              n = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              n.label = l[1];
              break;
            }
            if (l[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = l;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(l);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        l = t.call(e, n);
      } catch (d) {
        l = [6, d], o = 0;
      } finally {
        r = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, bc = it && it.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(zb, "__esModule", { value: !0 });
var Vt = hk(N), xc = Wd, vk = Bb, jn = wn, gk = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? jn.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, d = e.maxNumber, u = d === void 0 ? jn.INIT_MAX_NUMBER : d, p = e.acceptType, m = e.maxFileSize, h = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, $ = e.allowNonImageType, _ = $ === void 0 ? !1 : $, w = n || [], P = Vt.useRef(null), k = Vt.useState(jn.DEFAULT_NULL_INDEX), L = k[0], I = k[1], ee = Vt.useState(null), te = ee[0], K = ee[1], Z = Vt.useState(!1), O = Z[0], A = Z[1], j = Vt.useCallback(function() {
    return xc.openFileDialog(P);
  }, [
    P
  ]), W = Vt.useCallback(function() {
    I(jn.DEFAULT_NULL_INDEX), j();
  }, [j]), B = Vt.useCallback(function() {
    r == null || r([]);
  }, [r]), M = function(J) {
    var ve = bc(w);
    Array.isArray(J) ? J.forEach(function(Q) {
      ve.splice(Q, 1);
    }) : ve.splice(J, 1), r == null || r(ve);
  }, D = function(J) {
    I(J), j();
  }, U = function(J) {
    return vc(void 0, void 0, void 0, function() {
      var ve;
      return gc(this, function(Q) {
        switch (Q.label) {
          case 0:
            return [4, vk.getErrorValidation({
              fileList: J,
              maxFileSize: m,
              maxNumber: u,
              acceptType: p,
              keyUpdate: L,
              resolutionType: g,
              resolutionWidth: h,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return ve = Q.sent(), ve ? (K(ve), o == null || o(ve, J), [2, !1]) : (te && K(null), [2, !0]);
        }
      });
    });
  }, q = function(J) {
    return vc(void 0, void 0, void 0, function() {
      var ve, Q, Re, Ue, dt, T;
      return gc(this, function(z) {
        switch (z.label) {
          case 0:
            return J ? [4, xc.getListFiles(J, i)] : [
              2
              /*return*/
            ];
          case 1:
            return ve = z.sent(), ve.length ? [4, U(ve)] : [
              2
              /*return*/
            ];
          case 2:
            if (Q = z.sent(), !Q)
              return [
                2
                /*return*/
              ];
            if (Ue = [], L > jn.DEFAULT_NULL_INDEX)
              dt = ve[0], Re = bc(w), Re[L] = dt, Ue.push(L);
            else if (l)
              for (Re = bc(w, ve), T = w.length; T < Re.length; T += 1)
                Ue.push(T);
            else
              Re = [ve[0]], Ue.push(0);
            return r == null || r(Re, Ue), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(J) {
    return vc(void 0, void 0, void 0, function() {
      return gc(this, function(ve) {
        switch (ve.label) {
          case 0:
            return [4, q(J.target.files)];
          case 1:
            return ve.sent(), L > jn.DEFAULT_NULL_INDEX && I(jn.DEFAULT_NULL_INDEX), P.current && (P.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ce = Vt.useMemo(function() {
    return xc.getAcceptTypeString(p, _);
  }, [p, _]), ye = function(J) {
    J.preventDefault(), J.stopPropagation();
  }, be = function(J) {
    J.preventDefault(), J.stopPropagation(), J.dataTransfer.items && J.dataTransfer.items.length > 0 && A(!0);
  }, ne = function(J) {
    J.preventDefault(), J.stopPropagation(), A(!1);
  }, le = function(J) {
    J.preventDefault(), J.stopPropagation(), A(!1), J.dataTransfer.files && J.dataTransfer.files.length > 0 && q(J.dataTransfer.files);
  }, he = function(J) {
    J.preventDefault(), J.stopPropagation(), J.dataTransfer.clearData();
  };
  return Vt.default.createElement(
    Vt.default.Fragment,
    null,
    Vt.default.createElement("input", ll({ type: "file", accept: ce, ref: P, multiple: l && L === jn.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: W,
      onImageRemoveAll: B,
      onImageUpdate: D,
      onImageRemove: M,
      errors: te,
      dragProps: {
        onDrop: le,
        onDragEnter: be,
        onDragLeave: ne,
        onDragOver: ye,
        onDragStart: he
      },
      isDragging: O
    })
  );
}, Yb = zb.default = gk;
const bk = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Hb = ({
  resizer: e,
  imageFile: t,
  maxWidth: n = 1080,
  // Nueva resolución horizontal
  maxHeight: r = 720,
  // Nueva resolución vertical
  compressFormat: o = "png",
  // Formato de salida (JPEG, PNG, WEBP)
  quality: a = 80,
  // Calidad de compresión (0-100)
  rotation: s = 0,
  // Rotación en grados (0, 90, 180, 270)
  outputType: i = "base64"
}) => new Promise((c) => {
  e == null || e.imageFileResizer(
    t,
    n,
    r,
    o,
    a,
    s,
    async (l) => {
      const d = bk(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: d });
    },
    i
  );
}), xk = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Us, {}) })
] });
function yk() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function $k() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const As = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, zd = (e) => As("DIV", e) || As("SPAN", e), js = (e) => As("IMG", e), Yf = (e) => e.complete && e.naturalHeight !== 0, dl = (e) => As("SVG", e), Kb = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), wk = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = Kb({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, ur = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? wk({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : Kb({
  height: e,
  offset: r,
  width: t
}), _k = /url(?:\(['"]?)(.*?)(?:['"]?\))/, Hf = (e) => {
  var t;
  if (e) {
    if (js(e))
      return e.currentSrc;
    if (zd(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = _k.exec(n)) == null ? void 0 : t[1];
    }
  }
}, Ck = (e) => {
  if (e)
    return js(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, Sk = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = ur({
    containerHeight: e,
    containerWidth: r,
    hasScalableSrc: o,
    offset: a,
    targetHeight: s,
    targetWidth: i
  });
  return {
    top: n,
    left: t,
    width: r * c,
    height: e * c,
    transform: `translate(0,0) scale(${1 / c})`
  };
}, Rt = ({ position: e, relativeNum: t }) => {
  const n = parseFloat(e);
  return e.endsWith("%") ? t * n / 100 : n;
}, Ek = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const d = r / l, u = e / c, p = a === "cover" ? Math.max(d, u) : Math.min(d, u), [m = "50%", h = "50%"] = s.split(" "), v = Rt({ position: m, relativeNum: r - l * p }), g = Rt({ position: h, relativeNum: e - c * p }), b = ur({
      containerHeight: c * p,
      containerWidth: l * p,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + g,
      left: t + v,
      width: l * p * b,
      height: c * p * b,
      transform: `translate(0,0) scale(${1 / b})`
    };
  } else if (a === "none") {
    const [d = "50%", u = "50%"] = s.split(" "), p = Rt({ position: d, relativeNum: r - l }), m = Rt({ position: u, relativeNum: e - c }), h = ur({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + m,
      left: t + p,
      width: l * h,
      height: c * h,
      transform: `translate(0,0) scale(${1 / h})`
    };
  } else if (a === "fill") {
    const d = r / l, u = e / c, p = Math.max(d, u), m = ur({
      containerHeight: c * p,
      containerWidth: l * p,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      width: r * m,
      height: e * m,
      transform: `translate(0,0) scale(${1 / m})`
    };
  } else
    return {};
}, Nk = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const d = a / l, u = n / c, p = t === "cover" ? Math.max(d, u) : Math.min(d, u), [m = "50%", h = "50%"] = e.split(" "), v = Rt({ position: m, relativeNum: a - l * p }), g = Rt({ position: h, relativeNum: n - c * p }), b = ur({
      containerHeight: c * p,
      containerWidth: l * p,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + g,
      left: r + v,
      width: l * p * b,
      height: c * p * b,
      transform: `translate(0,0) scale(${1 / b})`
    };
  } else if (t === "auto") {
    const [d = "50%", u = "50%"] = e.split(" "), p = Rt({ position: d, relativeNum: a - l }), m = Rt({ position: u, relativeNum: n - c }), h = ur({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + m,
      left: r + p,
      width: l * h,
      height: c * h,
      transform: `translate(0,0) scale(${1 / h})`
    };
  } else {
    const [d = "50%", u = "50%"] = t.split(" "), p = Rt({ position: d, relativeNum: a }), m = Rt({ position: u, relativeNum: n }), h = p / l, v = m / c, g = Math.min(h, v), [b = "50%", y = "50%"] = e.split(" "), $ = Rt({ position: b, relativeNum: a - l * g }), _ = Rt({ position: y, relativeNum: n - c * g }), w = ur({
      containerHeight: c * g,
      containerWidth: l * g,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + _,
      left: r + $,
      width: l * g * w,
      height: c * g * w,
      transform: `translate(0,0) scale(${1 / w})`
    };
  }
}, Pk = /\.svg$/i, Tk = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var b;
  const c = n || ((b = t == null ? void 0 : t.slice) == null ? void 0 : b.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && Pk.test(t)), l = i.getBoundingClientRect(), d = window.getComputedStyle(i), u = o != null && zd(i), p = o != null && !u, m = Sk({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), h = p ? Ek({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    objectFit: d.objectFit,
    objectPosition: d.objectPosition,
    offset: a,
    targetHeight: o.naturalHeight,
    targetWidth: o.naturalWidth
  }) : void 0, v = u ? Nk({
    backgroundPosition: d.backgroundPosition,
    backgroundSize: d.backgroundSize,
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: o.naturalHeight,
    targetWidth: o.naturalWidth
  }) : void 0, g = Object.assign({}, m, h, v);
  if (r) {
    const y = window.innerWidth / 2, $ = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, w = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, P = y - _, k = $ - w;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${P}px,${k}px) scale(1)`;
  }
  return g;
}, kk = (e) => {
  if (!e)
    return {};
  if (dl(e)) {
    const t = e.parentElement, n = e.getBoundingClientRect();
    if (t) {
      const r = t.getBoundingClientRect();
      return {
        height: n.height,
        left: r.left - n.left,
        top: r.top - n.top,
        width: n.width
      };
    } else
      return {
        height: n.height,
        left: n.left,
        width: n.width,
        top: n.top
      };
  } else
    return {
      height: e.offsetHeight,
      left: e.offsetLeft,
      width: e.offsetWidth,
      top: e.offsetTop
    };
};
let Oo;
typeof document < "u" && (Oo = document.createElement("div"), Oo.setAttribute("data-rmiz-portal", ""), document.body.appendChild(Oo));
const Ok = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), Kf = {
  overflow: "",
  width: ""
};
function Mk(e) {
  return N.createElement(Gb, { ...e });
}
class Gb extends px {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = bo(), this.refDialog = bo(), this.refModalContent = bo(), this.refModalImg = bo(), this.refWrap = bo(), this.imgEl = null, this.prevBodyAttrs = Kf, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(Ok), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = Hf(t);
      if (!n)
        return;
      const r = new Image();
      js(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (Yf(r)) {
          o();
          return;
        }
        r.onload = o;
      });
    }, this.handleZoom = () => {
      var t, n;
      (n = (t = this.props).onZoomChange) == null || n.call(t, !0);
    }, this.handleUnzoom = () => {
      var t, n;
      (n = (t = this.props).onZoomChange) == null || n.call(t, !1);
    }, this.handleDialogCancel = (t) => {
      t.preventDefault();
    }, this.handleDialogClick = (t) => {
      (t.target === this.refModalContent.current || t.target === this.refModalImg.current) && this.handleUnzoom();
    }, this.handleKeyDown = (t) => {
      (t.key === "Escape" || t.keyCode === 27) && (t.preventDefault(), t.stopPropagation(), this.handleUnzoom());
    }, this.handleWheel = (t) => {
      t.ctrlKey || (t.stopPropagation(), queueMicrotask(() => {
        this.handleUnzoom();
      }));
    }, this.handleTouchStart = (t) => {
      t.changedTouches.length === 1 && t.changedTouches[0] && (this.touchYStart = t.changedTouches[0].screenY);
    }, this.handleTouchMove = (t) => {
      if (this.touchYStart != null && t.changedTouches[0]) {
        this.touchYEnd = t.changedTouches[0].screenY;
        const n = Math.max(this.touchYStart, this.touchYEnd), r = Math.min(this.touchYStart, this.touchYEnd);
        Math.abs(n - r) > 10 && (this.touchYStart = void 0, this.touchYEnd = void 0, this.handleUnzoom());
      }
    }, this.handleTouchCancel = () => {
      this.touchYStart = void 0, this.touchYEnd = void 0;
    }, this.handleResize = () => {
      this.setState({ shouldRefresh: !0 });
    }, this.zoom = () => {
      var t, n, r, o;
      this.bodyScrollDisable(), (n = (t = this.refDialog.current) == null ? void 0 : t.showModal) == null || n.call(t), this.setState({ modalState: "LOADING" }), this.loadZoomImg(), window.addEventListener("wheel", this.handleWheel, { passive: !0 }), window.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), window.addEventListener("touchmove", this.handleTouchMove, { passive: !0 }), window.addEventListener("touchcancel", this.handleTouchCancel, { passive: !0 }), document.addEventListener("keydown", this.handleKeyDown, !0), (o = (r = this.refModalImg.current) == null ? void 0 : r.addEventListener) == null || o.call(r, "transitionend", this.handleZoomEnd, { once: !0 });
    }, this.handleZoomEnd = () => {
      setTimeout(() => {
        this.setState({ modalState: "LOADED" }), window.addEventListener("resize", this.handleResize, { passive: !0 });
      }, 0);
    }, this.unzoom = () => {
      var t, n;
      this.setState({ modalState: "UNLOADING" }), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), document.removeEventListener("keydown", this.handleKeyDown, !0), (n = (t = this.refModalImg.current) == null ? void 0 : t.addEventListener) == null || n.call(t, "transitionend", this.handleUnzoomEnd, { once: !0 });
    }, this.handleUnzoomEnd = () => {
      setTimeout(() => {
        var t, n;
        window.removeEventListener("resize", this.handleResize), this.setState({
          shouldRefresh: !1,
          modalState: "UNLOADED"
        }), (n = (t = this.refDialog.current) == null ? void 0 : t.close) == null || n.call(t), this.bodyScrollEnable();
      }, 0);
    }, this.bodyScrollDisable = () => {
      this.prevBodyAttrs = {
        overflow: document.body.style.overflow,
        width: document.body.style.width
      };
      const t = document.body.clientWidth;
      document.body.style.overflow = "hidden", document.body.style.width = `${t}px`;
    }, this.bodyScrollEnable = () => {
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = Kf;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (Yf(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (dl(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const d = l.firstChild;
        d.style.width = `${r.width || 0}px`, d.style.height = `${r.height || 0}px`, d.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, d);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: d, IconZoom: u, isZoomed: p, wrapElement: m, ZoomContent: h, zoomImg: v, zoomMargin: g }, refContent: b, refDialog: y, refModalContent: $, refModalImg: _, refWrap: w, state: { id: P, isZoomImgLoaded: k, loadedImgEl: L, modalState: I, shouldRefresh: ee } } = this, te = `rmiz-modal-${P}`, K = `rmiz-modal-img-${P}`, Z = zd(a), O = js(a), A = dl(a), j = Ck(a), W = Hf(a), B = O ? a.sizes : void 0, M = O ? a.srcset : void 0, D = !!(v != null && v.src), U = a && (L || A) && window.getComputedStyle(a).display !== "none", q = j ? `${i}: ${j}` : i, oe = I === "LOADING" || I === "LOADED", ce = U ? "found" : "not-found", ye = I === "UNLOADED" || I === "UNLOADING" ? "hidden" : "visible", be = {
      visibility: I === "UNLOADED" ? "visible" : "hidden"
    }, ne = kk(a);
    this.styleModalImg = U ? Tk({
      hasZoomImg: D,
      imgSrc: W,
      isSvg: A,
      isZoomed: p && oe,
      loadedImgEl: L,
      offset: g,
      shouldRefresh: ee,
      targetEl: a
    }) : {};
    let le = null;
    if (U) {
      const he = O || Z ? N.createElement("img", { alt: j, sizes: B, src: W, srcSet: M, ...k && I === "LOADED" ? v : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: K, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : A ? N.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, J = N.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        N.createElement(d, null)
      );
      le = h ? N.createElement(h, { buttonUnzoom: J, modalState: I, img: he, onUnzoom: r }) : N.createElement(
        N.Fragment,
        null,
        he,
        J
      );
    }
    return N.createElement(
      m,
      { "aria-owns": te, "data-rmiz": "", ref: w },
      N.createElement(m, { "data-rmiz-content": ce, ref: b, style: be }, c),
      U && N.createElement(
        m,
        { "data-rmiz-ghost": "", style: ne },
        N.createElement(
          "button",
          { "aria-label": q, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          N.createElement(u, null)
        )
      ),
      U && Oo != null && fl(N.createElement(
        "dialog",
        { "aria-labelledby": K, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: te, onClick: n, onClose: r, onCancel: t, ref: y, role: "dialog" },
        N.createElement("div", { "data-rmiz-modal-overlay": ye }),
        N.createElement("div", { "data-rmiz-modal-content": "", ref: $ }, le)
      ), Oo)
    );
  }
  componentDidMount() {
    this.setId(), this.setAndTrackImg(), this.handleImgLoad(), this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    var t, n, r, o, a, s, i, c, l, d, u, p;
    this.state.modalState !== "UNLOADED" && this.bodyScrollEnable(), (n = (t = this.changeObserver) == null ? void 0 : t.disconnect) == null || n.call(t), (o = (r = this.imgElObserver) == null ? void 0 : r.disconnect) == null || o.call(r), (s = (a = this.imgEl) == null ? void 0 : a.removeEventListener) == null || s.call(a, "load", this.handleImgLoad), (c = (i = this.imgEl) == null ? void 0 : i.removeEventListener) == null || c.call(i, "click", this.handleZoom), (d = (l = this.refModalImg.current) == null ? void 0 : l.removeEventListener) == null || d.call(l, "transitionend", this.handleZoomEnd), (p = (u = this.refModalImg.current) == null ? void 0 : u.removeEventListener) == null || p.call(u, "transitionend", this.handleUnzoomEnd), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), window.removeEventListener("resize", this.handleResize), document.removeEventListener("keydown", this.handleKeyDown, !0);
  }
  componentDidUpdate(t) {
    this.UNSAFE_handleSvg(), this.handleIfZoomChanged(t.isZoomed);
  }
}
Gb.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: yk,
  IconZoom: $k,
  wrapElement: "div",
  zoomMargin: 0
};
function Zb(e) {
  const [t, n] = Y(!1);
  return N.createElement(Mk, { ...e, isZoomed: t, onZoomChange: n });
}
const Dk = ({ src: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Zb, { children: /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Us, {}) })
] }) }), Rk = ({ imageIndex: e, compress: t, disabled: n, tabIndexs: r, onImageUpdate: o, setUploadImage: a, onImageRemove: s, setLocalImage: i }) => n ? null : /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.viewCompress,
      onClick: () => t.openComparisons(),
      className: "text-green-600 backdrop-blur-sm border-green-600 bg-green-600 bg-opacity-10 hover:bg-green-600 hover:bg-opacity-25 hover:text-green-600",
      children: /* @__PURE__ */ f.exports.jsx(wb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: r == null ? void 0 : r.change,
      onClick: () => o(e),
      className: "text-yellow-600 backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-25 hover:text-yellow-600",
      children: /* @__PURE__ */ f.exports.jsx(ap, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      tabIndex: r == null ? void 0 : r.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => {
        s(e), i([]), a({ original: null, compressed: null });
      },
      className: "text-red-700 backdrop-blur-sm border-red-700 bg-red-700 bg-opacity-10 hover:bg-red-700 hover:bg-opacity-25 hover:text-red-700",
      children: /* @__PURE__ */ f.exports.jsx(sp, { size: 14 })
    }
  )
] }), Ak = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: F(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(np, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), A8 = ({
  initialPreview: e = null,
  setUploadImage: t,
  format: n,
  label: r,
  uploadLabel: o,
  tabIndexs: a,
  disabled: s,
  emptyClassName: i,
  imageContainerClassName: c,
  zoom: l,
  compress: d
}) => {
  const [u, p] = Y(e ? [{ data_url: e, file: null }] : []), m = async (h, v) => {
    var $, _, w, P, k, L, I;
    const g = ($ = h[0]) == null ? void 0 : $.file, b = (_ = h[0]) == null ? void 0 : _.data_url;
    g || (p([]), t({ original: null, compressed: null })), p(h);
    const y = os((w = h[0]) == null ? void 0 : w.file.size);
    if (d != null && d.resizer && g) {
      const { data_url: ee, file: te } = await Hb({
        resizer: d == null ? void 0 : d.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), K = os(te.size);
      t({
        original: {
          preview: b,
          file: g,
          size: {
            formated: y,
            bytes: (P = h[0]) == null ? void 0 : P.file.size
          }
        },
        compressed: {
          preview: ee == null ? void 0 : ee.toString(),
          file: te,
          size: {
            formated: K,
            bytes: te.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (k = h[0]) == null ? void 0 : k.data_url,
        file: (L = h[0]) == null ? void 0 : L.file,
        size: { formated: y, bytes: (I = h[0]) == null ? void 0 : I.file.size }
      },
      compressed: null
    });
  };
  return G(() => {
    e && p([{ data_url: e, file: null }]);
  }, [e]), /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full", children: [
    r && /* @__PURE__ */ f.exports.jsx(fn, { children: r }),
    r && /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Yb,
      {
        value: u,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: h, onImageUpload: v, onImageUpdate: g, onImageRemove: b, isDragging: y, dragProps: $ }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsx("div", { children: h.map((_, w) => /* @__PURE__ */ f.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ f.exports.jsx(Dk, { imageContainerClassName: c, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ f.exports.jsx(xk, { imageContainerClassName: c, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ f.exports.jsx(
            Rk,
            {
              disabled: s,
              imageIndex: w,
              setUploadImage: t,
              onImageRemove: b,
              onImageUpdate: g,
              compress: d,
              tabIndexs: a,
              setLocalImage: p
            }
          )
        ] }, w)) }) : /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: /* @__PURE__ */ f.exports.jsx(
          Ak,
          {
            dragProps: $,
            emptyClassName: i,
            isDragging: y,
            onImageUpload: v,
            tabIndexs: a,
            uploadLabel: o
          }
        ) }) })
      }
    )
  ] });
}, jk = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Us, {}) })
] }), Ik = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ f.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap backdrop-blur-sm border-green-900 bg-green-900 bg-opacity-10 hover:bg-green-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(wb, { size: 16 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "backdrop-blur-sm border-yellow-600 bg-yellow-600 bg-opacity-10 hover:bg-yellow-600 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(ap, { size: 14 })
    }
  ),
  /* @__PURE__ */ f.exports.jsx(
    Ve,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => o(e),
      className: "backdrop-blur-sm border-red-900 bg-red-900 bg-opacity-10 hover:bg-red-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ f.exports.jsx(sp, { size: 14 })
    }
  )
] }), Lk = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ f.exports.jsx(Zb, { children: /* @__PURE__ */ f.exports.jsxs(_r, { className: F("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ f.exports.jsx(Wn, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ f.exports.jsx(Cr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ f.exports.jsx(Us, {}) })
] }) }), Fk = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, onImageUpload: a }) => /* @__PURE__ */ f.exports.jsxs(
  "div",
  {
    ...e,
    className: F(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ f.exports.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: a,
          children: /* @__PURE__ */ f.exports.jsx(np, { size: 22 })
        }
      ),
      /* @__PURE__ */ f.exports.jsx("span", { className: "font-medium text-zinc-500", children: "o arrastra y suelta las imagenes" })
    ]
  }
), j8 = ({
  label: e,
  setUploadImages: t,
  format: n,
  uploadLabel: r,
  tabIndexs: o,
  emptyClassName: a,
  imageContainerClassName: s,
  zoom: i,
  compress: c,
  limit: l,
  initialPreview: d
}) => {
  const [u, p] = Y([]);
  G(() => {
    d && d.length && p([...u, ...d]);
  }, []);
  const m = async (h, v) => {
    p(h);
    const g = h.map(async (b) => {
      var P, k, L, I;
      const { data_url: y, file: $ } = await Hb({
        resizer: c.resizer,
        imageFile: b.file,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), _ = os((P = h[0]) == null ? void 0 : P.file.size), w = os($.size);
      return {
        original: {
          preview: (k = h[0]) == null ? void 0 : k.data_url,
          file: (L = h[0]) == null ? void 0 : L.file,
          size: {
            formated: _,
            bytes: (I = h[0]) == null ? void 0 : I.file.size
          }
        },
        compressed: {
          preview: y == null ? void 0 : y.toString(),
          file: $,
          size: {
            formated: w,
            bytes: $.size
          }
        }
      };
    });
    Promise.all(g).then(t);
  };
  return /* @__PURE__ */ f.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ f.exports.jsx(fn, { children: e }),
    /* @__PURE__ */ f.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ f.exports.jsx(
      Yb,
      {
        multiple: !0,
        value: u,
        dataURLKey: "data_url",
        onChange: m,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: l,
        children: ({
          imageList: h,
          onImageUpload: v,
          onImageUpdate: g,
          onImageRemove: b,
          isDragging: y,
          dragProps: $
        }) => /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: h.length >= 1 ? /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `grid ${l === 1 || !l ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              h.map((_, w) => /* @__PURE__ */ f.exports.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    i ? /* @__PURE__ */ f.exports.jsx(
                      Lk,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ) : /* @__PURE__ */ f.exports.jsx(
                      jk,
                      {
                        imageContainerClassName: s,
                        previewUrl: _ == null ? void 0 : _.data_url
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx(
                      Ik,
                      {
                        imageIndex: w,
                        onImageRemove: b,
                        onImageUpdate: g,
                        compress: c,
                        tabIndexs: o
                      }
                    )
                  ]
                },
                w
              )),
              u.length < l && /* @__PURE__ */ f.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  ...$,
                  className: F(
                    `w-full h-[237px] ${y ? "border-indigo-600" : "border-slate-50"} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    s
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(
                    Ve,
                    {
                      type: "button",
                      variant: "outline",
                      className: "p-2 h-min",
                      onClick: v,
                      children: /* @__PURE__ */ f.exports.jsx(m4, { className: "w-8 h-8" })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ f.exports.jsx(
          Fk,
          {
            dragProps: $,
            emptyClassName: a,
            isDragging: y,
            onImageUpload: v,
            tabIndexs: o,
            uploadLabel: r
          }
        ) })
      }
    )
  ] });
};
function I8({
  id: e,
  form: t,
  label: n,
  items: r,
  disabled: o,
  tabIndex: a,
  placeholder: s,
  defaultValue: i,
  notFoundLabel: c,
  ctaPlaceholder: l,
  buttonClassName: d,
  popoverClassName: u
}) {
  const [p, m] = Y(!1);
  return /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: t.control,
      name: e,
      defaultValue: i,
      render: ({ field: h }) => {
        var v;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: "flex flex-col", children: [
          /* @__PURE__ */ f.exports.jsx(fn, { children: n }),
          /* @__PURE__ */ f.exports.jsxs(En, { open: p, onOpenChange: m, children: [
            /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ve,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: F("w-min justify-between", !h.value && "text-muted-foreground", `${d}`),
                children: [
                  h.value ? (v = r.find((g) => {
                    var b, y;
                    return ((b = g == null ? void 0 : g.value) == null ? void 0 : b.toUpperCase()) === ((y = h == null ? void 0 : h.value) == null ? void 0 : y.toUpperCase());
                  })) == null ? void 0 : v.label : l,
                  /* @__PURE__ */ f.exports.jsx(Cc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(sn, { className: F("w-[200px] p-0", u), children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
              /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: s, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(Kn, { children: c }),
              /* @__PURE__ */ f.exports.jsx(Zt, { children: r.map((g) => /* @__PURE__ */ f.exports.jsxs(
                qt,
                {
                  value: g.value,
                  onSelect: (b) => {
                    t.setValue(e, b, { shouldDirty: !0 }), m(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (g == null ? void 0 : g.image) && /* @__PURE__ */ f.exports.jsx("img", { src: g.image, alt: g.label, width: 40, className: "mr-2" }),
                    (g == null ? void 0 : g.icon) && g.icon,
                    g.label,
                    /* @__PURE__ */ f.exports.jsx(
                      u4,
                      {
                        className: F(
                          "ml-auto h-4 w-4",
                          g.value === h.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                g.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function Vk({
  id: e,
  form: t,
  label: n,
  items: r,
  rules: o,
  value: a,
  disabled: s,
  setValue: i,
  tabIndex: c,
  placeholder: l,
  defaultValue: d,
  notFoundLabel: u,
  ctaPlaceholder: p,
  buttonClassName: m,
  popoverClassName: h
}) {
  var b;
  const [v, g] = Y(!1);
  return t ? /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: t.control,
      name: e,
      defaultValue: d,
      rules: o,
      render: ({ field: y, formState: $ }) => {
        var _, w, P;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = $.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              $.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ f.exports.jsxs(En, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ve,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: F("w-min justify-between", !y.value && "text-muted-foreground", `${m}`),
                children: [
                  y.value ? (P = r.find((k) => k.value === y.value)) == null ? void 0 : P.label : p,
                  /* @__PURE__ */ f.exports.jsx(Cc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(sn, { className: F("w-[200px] p-0", h), children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
              /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ f.exports.jsx(Kn, { children: u }),
              /* @__PURE__ */ f.exports.jsx(Zt, { children: r.map((k) => /* @__PURE__ */ f.exports.jsxs(
                qt,
                {
                  value: k.value,
                  onSelect: (L) => {
                    t.setValue(e, L), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (k == null ? void 0 : k.image) && /* @__PURE__ */ f.exports.jsx("img", { src: k.image, alt: k.label, width: 40, className: "mr-2" }),
                    (k == null ? void 0 : k.icon) && k.icon,
                    k.label,
                    /* @__PURE__ */ f.exports.jsx(
                      Kt,
                      {
                        className: F(
                          "ml-auto h-4 w-4",
                          k.value === y.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                k.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ f.exports.jsxs(En, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
      Ve,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((y) => y.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ f.exports.jsx(Cc, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(sn, { className: "w-full p-0", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
      /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ f.exports.jsx(Kn, { children: u }),
      /* @__PURE__ */ f.exports.jsx(Zt, { children: r.map((y) => /* @__PURE__ */ f.exports.jsxs(
        qt,
        {
          onSelect: ($) => {
            i($ === a ? "" : $), g(!1);
          },
          children: [
            y.label,
            /* @__PURE__ */ f.exports.jsx(
              Kt,
              {
                className: F(
                  "ml-auto h-4 w-4",
                  a === y.value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        y.value
      )) })
    ] }) })
  ] });
}
const Uk = ({ form: e, id: t, description: n, icon: r, placeholder: o, label: a, tabIndex: s, options: i, classNameContainer: c, classNamePopover: l }) => {
  var _;
  const d = V(null), [u, p] = Y(null);
  G(() => {
    const w = d.current;
    if (!w)
      return;
    const P = new ResizeObserver((k) => {
      const L = k[0].contentRect.width;
      p(L);
    });
    return P.observe(w), () => {
      P.unobserve(w), P.disconnect();
    };
  }, []);
  const m = (_ = e == null ? void 0 : e.formState) == null ? void 0 : _.defaultValues[t], h = i.map((w) => ({
    ...w,
    selected: m ? m.includes(w.value) : !1
  })), [v, g] = Y(h), b = (w) => v.filter((k) => k.selected).map((k) => k.value), y = () => g((w) => w.map((P) => ({ ...P, selected: !1 }))), $ = (w, P) => {
    const k = v.map((L) => L.id === w ? { ...L, selected: P } : L);
    g(k), e.setValue(t, k.filter((L) => L.selected).map((L) => L.value));
  };
  return /* @__PURE__ */ f.exports.jsx(
    Nr,
    {
      control: e.control,
      name: t,
      render: ({ field: w, formState: P }) => {
        var k;
        return /* @__PURE__ */ f.exports.jsxs(nr, { className: F("w-full space-y-2", c), children: [
          /* @__PURE__ */ f.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            a && /* @__PURE__ */ f.exports.jsxs(Pr, { className: "flex", children: [
              a,
              " "
            ] }),
            ((k = P == null ? void 0 : P.errors[t]) == null ? void 0 : k.message) && /* @__PURE__ */ f.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              P.errors[t].message
            ] })
          ] }),
          n && /* @__PURE__ */ f.exports.jsx(lo, { className: "text-xs", children: n }),
          /* @__PURE__ */ f.exports.jsxs(En, { children: [
            /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
              Ve,
              {
                ref: d,
                type: "button",
                variant: "outline",
                size: "sm",
                className: "py-5 border w-full justify-start",
                tabIndex: s,
                children: [
                  r && r,
                  !b().length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: o || "Seleccione alguna opción" }),
                  b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                    /* @__PURE__ */ f.exports.jsxs(
                      ht,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          b().length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: b().length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                      ht,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          b().length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((L) => L.selected).map((L) => /* @__PURE__ */ f.exports.jsx(
                      ht,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: L.label
                      },
                      L.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ f.exports.jsx(sn, { style: { width: u + 24 }, className: F("w-full p-0", l), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
              /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: a }),
              /* @__PURE__ */ f.exports.jsxs(Na, { children: [
                /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
                /* @__PURE__ */ f.exports.jsx(Zt, { children: v.map((L) => /* @__PURE__ */ f.exports.jsxs(
                  qt,
                  {
                    onSelect: () => {
                      L.selected ? $(L.id, !1) : $(L.id, !0);
                    },
                    children: [
                      /* @__PURE__ */ f.exports.jsx(
                        "div",
                        {
                          className: F(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            L.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                        }
                      ),
                      L.icon,
                      /* @__PURE__ */ f.exports.jsx("span", { children: L.label })
                    ]
                  },
                  L.value.toString()
                )) }),
                b().length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
                  /* @__PURE__ */ f.exports.jsx(fi, {}),
                  /* @__PURE__ */ f.exports.jsx(Zt, { children: /* @__PURE__ */ f.exports.jsx(
                    qt,
                    {
                      onSelect: () => {
                        e.setValue(t, []), y();
                      },
                      className: "justify-center text-center",
                      children: "Limpiar"
                    }
                  ) })
                ] })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  );
}, Wk = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i }) => {
  const c = V(null), [l, d] = Y(null);
  return G(() => {
    const u = c.current;
    if (!u)
      return;
    const p = new ResizeObserver((m) => {
      const h = m[0].contentRect.width;
      d(h);
    });
    return p.observe(u), () => {
      p.unobserve(u), p.disconnect();
    };
  }, []), /* @__PURE__ */ f.exports.jsxs("div", { className: F("w-full space-y-2", s), children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ f.exports.jsxs(fn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ f.exports.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ f.exports.jsxs(En, { children: [
      /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          ref: c,
          type: "button",
          variant: "outline",
          size: "sm",
          className: "py-5 border w-full justify-start",
          tabIndex: o,
          children: [
            t && t,
            !a.length && /* @__PURE__ */ f.exports.jsx("span", { className: "text-muted-foreground font-normal", children: n || "Seleccione alguna opción" }),
            a.length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
              /* @__PURE__ */ f.exports.jsxs(
                ht,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal lg:hidden",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ),
              /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ f.exports.jsxs(
                ht,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((u) => /* @__PURE__ */ f.exports.jsx(
                ht,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: u.label
                },
                u.id
              )) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ f.exports.jsx(sn, { style: { width: l + 24 }, className: F("w-full p-0", i), align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
        /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: r }),
        /* @__PURE__ */ f.exports.jsxs(Na, { children: [
          /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
          /* @__PURE__ */ f.exports.jsx(Zt, { children: a.map((u) => /* @__PURE__ */ f.exports.jsxs(
            qt,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ f.exports.jsx(
                  "div",
                  {
                    className: F(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ f.exports.jsx("span", { children: u.label })
              ]
            },
            u.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, L8 = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, ...l }) => i ? /* @__PURE__ */ f.exports.jsx(
  Wk,
  {
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    form: (l == null ? void 0 : l.form) || null,
    options: (l == null ? void 0 : l.options) || []
  }
) : /* @__PURE__ */ f.exports.jsx(
  Uk,
  {
    id: e,
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    form: (l == null ? void 0 : l.form) || null,
    options: (l == null ? void 0 : l.options) || []
  }
);
function zk({
  isOpen: e,
  onClose: t,
  children: n
}) {
  return /* @__PURE__ */ f.exports.jsxs(
    "div",
    {
      className: `fixed z-30 inset-0 bg-opacity-50  transition-opacity ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ f.exports.jsx("div", { className: "fixed z-50 inset-y-0  right-0  flex", children: /* @__PURE__ */ f.exports.jsx(
          "div",
          {
            className: "max-w-[250px] h-full bg-main overflow-y-scroll rounded-l-xl border-l-[1.5px] border-l-slate-30",
            children: n
          }
        ) }),
        /* @__PURE__ */ f.exports.jsx("div", { className: "h-full", onClick: t })
      ]
    }
  );
}
function Gf({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ f.exports.jsx(hr, { children: /* @__PURE__ */ f.exports.jsxs(vr, { children: [
    /* @__PURE__ */ f.exports.jsx(gr, { children: /* @__PURE__ */ f.exports.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-gray-[#eaeaea] rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ f.exports.jsx(
          Cb,
          {
            Link: r,
            to: o ? o.path : "/",
            pathname: o ? o.path : "/",
            label: t,
            icon: e,
            isBottomNavLink: !0
          }
        )
      }
    ) }),
    /* @__PURE__ */ f.exports.jsx(Gn, { children: t })
  ] }) });
}
function Bk({
  profile: e
}) {
  return /* @__PURE__ */ f.exports.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ f.exports.jsxs(_r, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ f.exports.jsx(Wn, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ f.exports.jsx(Cr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ f.exports.jsx(Wn, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ f.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ f.exports.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ f.exports.jsx(ht, { className: "w-full", children: e.role })
    ] })
  ] });
}
function Yk({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ f.exports.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ f.exports.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ f.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
      /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: t,
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(op, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
          ]
        }
      ) }),
      e.logout && /* @__PURE__ */ f.exports.jsx("li", { children: /* @__PURE__ */ f.exports.jsxs(
        "button",
        {
          onClick: () => {
            e.logout();
          },
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none",
          children: [
            /* @__PURE__ */ f.exports.jsx(rp, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ f.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function Hk({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
    /* @__PURE__ */ f.exports.jsx(Bk, { profile: a }),
    /* @__PURE__ */ f.exports.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ f.exports.jsx(
        Cb,
        {
          to: s.to,
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          Link: o
        },
        i
      )),
      t && /* @__PURE__ */ f.exports.jsx(
        $4,
        {
          pathname: t.pathname,
          label: t.label,
          icon: t.icon,
          sublinks: t.subLinks,
          Link: o
        }
      ),
      /* @__PURE__ */ f.exports.jsx(
        Yk,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function F8({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = Y(!1);
  return /* @__PURE__ */ f.exports.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-[#09090B] dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "grid h-full max-w-lg grid-cols-5 mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ f.exports.jsx(
        Gf,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ f.exports.jsx(
        Gf,
        {
          icon: /* @__PURE__ */ f.exports.jsx(Jx, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      zk,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ f.exports.jsx(
          Hk,
          {
            Link: o,
            sidebar: r,
            navLinksItems: t,
            subLinksItems: n,
            onCloseSideBar: () => s(!1)
          }
        )
      }
    )
  ] });
}
const Or = ct({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  searchForm: null,
  multiSelectedItems: [],
  limitOfMultiSelect: 0,
  setMultiItemsSelected: () => {
  },
  onSubmitTable: null,
  setSearchForm: () => {
  },
  setSelectItem: () => {
  },
  getGlobalFilters: () => {
  },
  resetOptionsByFilter: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function Kk() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = He(Or);
  return /* @__PURE__ */ f.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ f.exports.jsxs(
        hd,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ f.exports.jsx(si, { className: "h-8 w-[70px]", children: /* @__PURE__ */ f.exports.jsx(vd, { placeholder: e.limit }) }),
            /* @__PURE__ */ f.exports.jsx(ii, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ f.exports.jsx(ci, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ f.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ f.exports.jsx(vl, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ f.exports.jsx("div", { children: /* @__PURE__ */ f.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ f.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ f.exports.jsx(ao, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const V8 = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, Gk = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), U8 = {
  limit: 10,
  page: 1
}, yc = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), W8 = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], Zk = () => /* @__PURE__ */ f.exports.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), qk = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ f.exports.jsx("div", { children: r.render(o) }, yc()) : /* @__PURE__ */ f.exports.jsx(jt, { children: o[r.id] }, yc());
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.map((r) => /* @__PURE__ */ f.exports.jsx(Eh, { children: t.map((o) => n(o, r)) }, yc())) });
}, qb = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = He(Or), [s, i] = Y(
    o ? o.length : 0
  );
  return /* @__PURE__ */ f.exports.jsx(f.exports.Fragment, { children: e.length ? /* @__PURE__ */ f.exports.jsx(
    qk,
    {
      setMultiItemsSelected: r,
      setSelectItem: n,
      setItemsSelectedCount: i,
      itemsSelectedCount: s,
      data: e,
      multiItemsSelected: o,
      columns: t,
      limitOfMultiSelect: a
    }
  ) : /* @__PURE__ */ f.exports.jsx(Zk, {}) });
}, Xk = () => /* @__PURE__ */ f.exports.jsx(qb, {}), Qk = () => /* @__PURE__ */ f.exports.jsx("span", { className: "loader-fade-dot" }), Jk = () => /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ f.exports.jsx(Qk, {}),
  /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), eO = () => {
  const { showFilters: e, setShowFilters: t } = He(Or);
  return /* @__PURE__ */ f.exports.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ f.exports.jsx(yb, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, tO = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = He(Or), l = (d) => {
    c(d);
  };
  return /* @__PURE__ */ f.exports.jsxs(En, { children: [
    /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      n || /* @__PURE__ */ f.exports.jsx($b, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
        /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ f.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ f.exports.jsxs(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((d) => d.selected).map((d) => /* @__PURE__ */ f.exports.jsx(
          ht,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: d.label
          },
          d.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ f.exports.jsx(sn, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ f.exports.jsxs(Pn, { children: [
      /* @__PURE__ */ f.exports.jsx(Hn, { placeholder: r }),
      /* @__PURE__ */ f.exports.jsxs(Na, { children: [
        /* @__PURE__ */ f.exports.jsx(Kn, { children: "Sin Resultados" }),
        /* @__PURE__ */ f.exports.jsx(Zt, { children: o.map((d) => /* @__PURE__ */ f.exports.jsxs(
          qt,
          {
            onSelect: () => {
              d.selected ? s(e, d.id, !1) : s(e, d.id, !0);
            },
            children: [
              /* @__PURE__ */ f.exports.jsx(
                "div",
                {
                  className: F(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    d.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ f.exports.jsx(Kt, { className: F("h-4 w-4") })
                }
              ),
              d.icon,
              /* @__PURE__ */ f.exports.jsx("span", { children: d.label })
            ]
          },
          d.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(fi, {}),
          /* @__PURE__ */ f.exports.jsx(Zt, { children: /* @__PURE__ */ f.exports.jsx(
            qt,
            {
              onSelect: () => l(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, nO = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ f.exports.jsxs(En, { children: [
  /* @__PURE__ */ f.exports.jsx(Nn, { asChild: !0, children: /* @__PURE__ */ f.exports.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed", type: "button", children: [
    /* @__PURE__ */ f.exports.jsx(gl, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
      /* @__PURE__ */ f.exports.jsx(_a, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ f.exports.jsx(
        ht,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ f.exports.jsxs(sn, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ f.exports.jsxs(fn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ f.exports.jsx(
      ud,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), rO = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = He(Or), l = e.watch(n.map((u) => u.id)), d = () => {
    var p;
    a();
    const u = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((m) => {
      m[1] && u.push({
        field: ka(m[0]),
        text: m[1]
      });
    }), s({ queries: u, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ f.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ f.exports.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ f.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((u, p) => /* @__PURE__ */ f.exports.jsx(
          nO,
          {
            queryText: l[p],
            label: u.label,
            id: u.id,
            form: e
          },
          u.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ f.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ f.exports.jsx(eO, {}),
      o && r && r.map((u) => /* @__PURE__ */ f.exports.jsx(
        tO,
        {
          onSubmit: t,
          form: e,
          id: u.id,
          icon: u.icon,
          label: u.label,
          options: u.options
        },
        u.id
      )),
      o && (r != null && r.filter(
        (u) => u.options.some((p) => p.selected)
      ).length) ? /* @__PURE__ */ f.exports.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: d,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ f.exports.jsx(Ws, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, oO = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = He(Or), c = Hm({
    defaultValues: n.reduce((d, u) => (d[u.id] = "", d), {}),
    resolver: Pb(
      Rs.object(
        n.reduce((d, u) => (d[u.id] = Rs.string().optional(), d), {})
      )
    )
  }), l = async (d) => {
    var m;
    console.log({ data: d });
    const u = r(), p = [];
    (m = Object.entries(d)) == null || m.forEach((h) => {
      h[1] && p.push({
        field: ka(h[0]),
        text: h[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: u, limit: s, page: a });
  };
  return G(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ f.exports.jsx("div", {}) : /* @__PURE__ */ f.exports.jsx(Gm, { ...c, children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ f.exports.jsx(rO, { form: c, onSubmit: l }) : /* @__PURE__ */ f.exports.jsx("div", {}),
    /* @__PURE__ */ f.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ f.exports.jsx(
      Ve,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ f.exports.jsx(hl, {}) : /* @__PURE__ */ f.exports.jsxs(f.exports.Fragment, { children: [
          /* @__PURE__ */ f.exports.jsx(_b, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, aO = () => /* @__PURE__ */ f.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ f.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), sO = () => /* @__PURE__ */ f.exports.jsx(qb, {}), iO = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function z8(e) {
  const [t, n] = Y([]), [r, o] = Y([]), [a, s] = Y([]), [i, c] = Y(!1), [l, d] = Y(e == null ? void 0 : e.error), [u, p] = Y(e == null ? void 0 : e.loading), [m, h] = Y(), [v, g] = Y(
    (e == null ? void 0 : e.pagination) ?? iO
  ), [b, y] = Y(
    (e == null ? void 0 : e.columns) || []
  ), $ = ue(
    (O) => e.onSubmitTable({ ...O }),
    [e]
  ), _ = ue(
    (O) => {
      var B;
      g(O);
      const A = m.getValues(), j = [];
      (B = Object.entries(A)) == null || B.forEach((M) => {
        M[1] && j.push({
          field: Gk(M[0]),
          text: M[1]
        });
      });
      const W = r.map((M) => ({
        id: M.id,
        label: M.label,
        options: M.options.filter((D) => D.selected).map((D) => D.value)
      })).filter((M) => M.options.length > 0);
      $({
        filters: W,
        queries: j,
        limit: O.limit,
        page: O.page
      });
    },
    [r, $, m]
  ), w = ue(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), P = ue(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), k = () => r.map((O) => ({
    id: O.id,
    label: O.label,
    options: O.options.filter((A) => A.selected).map((A) => A.value)
  })).filter((O) => O.options.length > 0), L = (O) => {
    const A = r.find((j) => j.id === O);
    return A ? A.options.filter((W) => W.selected).map((W) => W.value) : [];
  }, I = (O, A, j) => {
    const W = r.map((B) => B.id === O ? {
      ...B,
      options: B.options.map((M) => M.id === A ? { ...M, selected: j } : M)
    } : B);
    o(W);
  }, ee = () => r, te = (O) => {
    const A = r.map((j) => j.id === O ? {
      ...j,
      options: j.options.map((W) => ({
        ...W,
        selected: !1
      }))
    } : j);
    o(A);
  }, K = (O) => _({ ...v, limit: O }), Z = () => {
    const O = r.map((A) => ({
      ...A,
      options: A.options.map((j) => ({ ...j, selected: !1 }))
    }));
    o(O);
  };
  return G(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), G(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), G(() => d((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), G(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), G(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), G(() => {
    const O = b.filter((A) => A.isQuery).map((A) => ({
      id: A.id,
      label: A.label
    }));
    s(O);
  }, [b]), G(() => {
    const O = (j) => (j == null ? void 0 : j.filters) && (j == null ? void 0 : j.filters.length), A = b.filter(O).map((j) => {
      const W = j.filters.map((M) => ({
        ...M,
        selected: !1
      }));
      return {
        ...j,
        id: j.id,
        options: W
      };
    });
    o(A);
  }, [b]), G(() => {
    e != null && e.filters && (e == null || e.filters.forEach((O) => {
      O != null && O.filters && b.forEach((A) => {
        O.id === A.id && o((j) => j.some((B) => B.id === O.id) ? j : [
          ...j,
          {
            id: A.id,
            label: A.label,
            options: O.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), G(() => {
    g((O) => {
      var A, j;
      return {
        ...O,
        hasNextPage: (A = e == null ? void 0 : e.pagination) == null ? void 0 : A.hasNextPage,
        hasPrevPage: (j = e == null ? void 0 : e.pagination) == null ? void 0 : j.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ f.exports.jsx(
    Or.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: P,
        searchForm: m,
        updateLimit: K,
        showFilters: i,
        resetFilters: Z,
        getGlobalFilters: ee,
        selectOptionFilter: I,
        resetOptionsByFilter: te,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: $,
        getFilterOptionsSelectedById: L,
        getFiltersWithOptionsSelected: k,
        setSelectItem: e.setSelectItem,
        setShowFilters: (O) => c(O),
        setSearchForm: (O) => h(O)
      },
      children: /* @__PURE__ */ f.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ f.exports.jsx(oO, { onSubmitTable: $, loading: u }),
        /* @__PURE__ */ f.exports.jsxs(
          "div",
          {
            className: `overflow-clip grid ${e.cardsColsNumber ? `grid-cols-${e.cardsColsNumber}` : "grid-cols-3"} gap-6`,
            children: [
              u && /* @__PURE__ */ f.exports.jsx(Jk, {}),
              !u && l && /* @__PURE__ */ f.exports.jsx(aO, {}),
              !u && !l && !t && /* @__PURE__ */ f.exports.jsx(sO, {}),
              !u && !l && t && /* @__PURE__ */ f.exports.jsx(Xk, {})
            ]
          }
        ),
        !u && !l && t && /* @__PURE__ */ f.exports.jsx(Kk, {})
      ] })
    }
  );
}
function B8(e) {
  const [t, n] = Y(null), [r, o] = Y(null), [a, s] = Y(!1);
  G(() => {
    e && (async () => {
      try {
        s(!0);
        const l = await e();
        n(l);
      } catch (l) {
        o(l);
      } finally {
        s(!1);
      }
    })();
  }, [e]);
  async function i(c) {
    try {
      s(!0);
      const l = await c();
      n(l);
    } catch (l) {
      o(l);
    } finally {
      s(!1);
    }
  }
  return { data: t, error: r, loading: a, fetcher: i };
}
const Y8 = ({ children: e }) => /* @__PURE__ */ f.exports.jsx("div", { className: "app-layout", children: e });
export {
  JO as Accordion,
  C6 as AccordionContent,
  w6 as AccordionItem,
  _6 as AccordionTrigger,
  ZO as AlertDialog,
  Z5 as AlertDialogAction,
  q5 as AlertDialogCancel,
  B5 as AlertDialogContent,
  G5 as AlertDialogDescription,
  H5 as AlertDialogFooter,
  Y5 as AlertDialogHeader,
  K5 as AlertDialogTitle,
  qO as AlertDialogTrigger,
  Y8 as AppLayout,
  zO as AspectRatio,
  _r as Avatar,
  Cr as AvatarFallback,
  Wn as AvatarImage,
  ht as Badge,
  F8 as BottomNavigation,
  Ve as Button,
  $o as CI_TYPES,
  u$ as Calendar,
  Eh as Card,
  jS as CardContent,
  AS as CardDescription,
  IS as CardFooter,
  DS as CardHeader,
  RS as CardTitle,
  kh as Checkbox,
  R8 as CodeVerification,
  e8 as Collapsible,
  n8 as CollapsibleContent,
  t8 as CollapsibleTrigger,
  Vk as ComboBox,
  L8 as ComboxCheckbox,
  Pn as Command,
  WO as CommandDialog,
  Kn as CommandEmpty,
  Zt as CommandGroup,
  Hn as CommandInput,
  qt as CommandItem,
  Na as CommandList,
  fi as CommandSeparator,
  XN as CommandShortcut,
  $O as ContextMenu,
  D2 as ContextMenuCheckboxItem,
  O2 as ContextMenuContent,
  _O as ContextMenuGroup,
  M2 as ContextMenuItem,
  A2 as ContextMenuLabel,
  CO as ContextMenuPortal,
  EO as ContextMenuRadioGroup,
  R2 as ContextMenuRadioItem,
  j2 as ContextMenuSeparator,
  I2 as ContextMenuShortcut,
  SO as ContextMenuSub,
  k2 as ContextMenuSubContent,
  T2 as ContextMenuSubTrigger,
  wO as ContextMenuTrigger,
  z8 as D4TCardsList,
  O8 as D4TTable,
  wC as Dialog,
  sh as DialogContent,
  EC as DialogDescription,
  CC as DialogFooter,
  _C as DialogHeader,
  SC as DialogTitle,
  PO as DialogTrigger,
  AO as DropdownMenu,
  yE as DropdownMenuCheckboxItem,
  bE as DropdownMenuContent,
  IO as DropdownMenuGroup,
  xE as DropdownMenuItem,
  wE as DropdownMenuLabel,
  LO as DropdownMenuPortal,
  VO as DropdownMenuRadioGroup,
  $E as DropdownMenuRadioItem,
  _E as DropdownMenuSeparator,
  CE as DropdownMenuShortcut,
  FO as DropdownMenuSub,
  gE as DropdownMenuSubContent,
  vE as DropdownMenuSubTrigger,
  jO as DropdownMenuTrigger,
  Gm as Form,
  va as FormControl,
  lo as FormDescription,
  Nr as FormField,
  nr as FormItem,
  Pr as FormLabel,
  rC as FormMessage,
  I8 as GenericCombobox,
  M8 as GenericSelect,
  a8 as HoverCard,
  j6 as HoverCardContent,
  s8 as HoverCardTrigger,
  Dk as ImageWithZoom,
  ud as Input,
  TO as InputPID,
  Fo as InputUI,
  fn as Label,
  i8 as LoaderDots,
  cP as Menubar,
  mP as MenubarCheckboxItem,
  fP as MenubarContent,
  d8 as MenubarGroup,
  pP as MenubarItem,
  vP as MenubarLabel,
  l8 as MenubarMenu,
  u8 as MenubarPortal,
  p8 as MenubarRadioGroup,
  hP as MenubarRadioItem,
  gP as MenubarSeparator,
  bP as MenubarShortcut,
  f8 as MenubarSub,
  uP as MenubarSubContent,
  dP as MenubarSubTrigger,
  lP as MenubarTrigger,
  j8 as MultipleImages,
  Cb as NavLink,
  $4 as NavLinkNested,
  YP as NavigationMenu,
  ZP as NavigationMenuContent,
  qP as NavigationMenuIndicator,
  h8 as NavigationMenuItem,
  v8 as NavigationMenuLink,
  HP as NavigationMenuList,
  GP as NavigationMenuTrigger,
  Mg as NavigationMenuViewport,
  ki as PHONE_LINE_CODES,
  En as Popover,
  sn as PopoverContent,
  Nn as PopoverTrigger,
  sT as Progress,
  _T as RadioGroup,
  CT as RadioGroupItem,
  b5 as ScrollArea,
  _v as ScrollBar,
  hd as Select,
  ii as SelectContent,
  kS as SelectGroup,
  ci as SelectItem,
  OS as SelectLabel,
  MS as SelectSeparator,
  si as SelectTrigger,
  vd as SelectValue,
  _a as Separator,
  YO as Sheet,
  KO as SheetClose,
  y5 as SheetContent,
  C5 as SheetDescription,
  w5 as SheetFooter,
  $5 as SheetHeader,
  _5 as SheetTitle,
  HO as SheetTrigger,
  E8 as Sidebar,
  N8 as SidebarContent,
  y4 as SidebarFooter,
  q3 as SidebarHeader,
  XO as Skeleton,
  GT as Slider,
  hl as Spinner,
  D8 as SwatchesPicker,
  V3 as Switch,
  Nv as TableBody,
  E5 as TableCaption,
  $d as TableCell,
  S5 as TableFooter,
  Pv as TableHead,
  Ev as TableHeader,
  hi as TableRow,
  yd as TableUI,
  $8 as Tabs,
  i3 as TabsContent,
  a3 as TabsList,
  s3 as TabsTrigger,
  OO as TextArea,
  ph as TextareaUI,
  d3 as Toggle,
  x4 as ToggleTheme,
  vr as Tooltip,
  Gn as TooltipContent,
  hr as TooltipProvider,
  gr as TooltipTrigger,
  A8 as UploadImage,
  _$ as badgeVariants,
  Mo as buttonVariants,
  ka as camelToSnake,
  F as cn,
  os as convertBytes,
  Ti as convertHexToRGBA,
  dO as fetcher,
  pO as formatCI,
  Bu as formatCITypes,
  gO as formatCodePhoneLines,
  V8 as formatListPagination,
  P8 as formatPagination,
  vO as formatPhone,
  hO as formatPhoneNumber,
  mO as formatRIF,
  jf as generateUUID,
  yc as generateUUIDToList,
  fO as getMultiOpacityColor,
  U8 as initialListPagination,
  T8 as initialPagination,
  k8 as insertColumn,
  W8 as insertColumnList,
  Gk as listCamelToSnake,
  KP as navigationMenuTriggerStyle,
  uO as simulateFetch,
  l3 as toggleVariants,
  B8 as useFetch,
  ni as useFormField,
  wi as useSidebar
};
//# sourceMappingURL=index.es.js.map
