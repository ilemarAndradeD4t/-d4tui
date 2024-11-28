import * as C from "react";
import A, { useCallback as be, forwardRef as L, Children as Kr, isValidElement as Ta, createElement as w, cloneElement as sc, Fragment as vn, createContext as Wt, useContext as lt, useState as X, useEffect as ee, useLayoutEffect as fs, useRef as Z, useMemo as Zt, PureComponent as ic, useImperativeHandle as sv, useReducer as ud } from "react";
import * as Cw from "react-dom";
import iv, { flushSync as cv, createPortal as lv } from "react-dom";
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Cn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var eu = { exports: {} }, da = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp;
function Sw() {
  if (yp)
    return da;
  yp = 1;
  var e = A, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var u, f = {}, p = null, h = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (f[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: i, key: p, ref: h, props: f, _owner: o.current };
  }
  return da.Fragment = n, da.jsx = s, da.jsxs = s, da;
}
var fa = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xp;
function Nw() {
  return xp || (xp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = A, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function g(j) {
      if (j === null || typeof j != "object")
        return null;
      var le = m && j[m] || j[v];
      return typeof le == "function" ? le : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(j) {
      {
        for (var le = arguments.length, xe = new Array(le > 1 ? le - 1 : 0), ke = 1; ke < le; ke++)
          xe[ke - 1] = arguments[ke];
        x("error", j, xe);
      }
    }
    function x(j, le, xe) {
      {
        var ke = b.ReactDebugCurrentFrame, Ge = ke.getStackAddendum();
        Ge !== "" && (le += "%s", xe = xe.concat([Ge]));
        var nt = xe.map(function(We) {
          return String(We);
        });
        nt.unshift("Warning: " + le), Function.prototype.apply.call(console[j], console, nt);
      }
    }
    var _ = !1, $ = !1, N = !1, S = !1, M = !1, E;
    E = Symbol.for("react.module.reference");
    function V(j) {
      return !!(typeof j == "string" || typeof j == "function" || j === r || j === a || M || j === o || j === l || j === u || S || j === h || _ || $ || N || typeof j == "object" && j !== null && (j.$$typeof === p || j.$$typeof === f || j.$$typeof === s || j.$$typeof === i || j.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      j.$$typeof === E || j.getModuleId !== void 0));
    }
    function G(j, le, xe) {
      var ke = j.displayName;
      if (ke)
        return ke;
      var Ge = le.displayName || le.name || "";
      return Ge !== "" ? xe + "(" + Ge + ")" : xe;
    }
    function B(j) {
      return j.displayName || "Context";
    }
    function U(j) {
      if (j == null)
        return null;
      if (typeof j.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof j == "function")
        return j.displayName || j.name || null;
      if (typeof j == "string")
        return j;
      switch (j) {
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
        case u:
          return "SuspenseList";
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case i:
            var le = j;
            return B(le) + ".Consumer";
          case s:
            var xe = j;
            return B(xe._context) + ".Provider";
          case c:
            return G(j, j.render, "ForwardRef");
          case f:
            var ke = j.displayName || null;
            return ke !== null ? ke : U(j.type) || "Memo";
          case p: {
            var Ge = j, nt = Ge._payload, We = Ge._init;
            try {
              return U(We(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, k = 0, W, D, z, Y, H, Q, I;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function me() {
      {
        if (k === 0) {
          W = console.log, D = console.info, z = console.warn, Y = console.error, H = console.group, Q = console.groupCollapsed, I = console.groupEnd;
          var j = {
            configurable: !0,
            enumerable: !0,
            value: re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: j,
            log: j,
            warn: j,
            error: j,
            group: j,
            groupCollapsed: j,
            groupEnd: j
          });
        }
        k++;
      }
    }
    function ae() {
      {
        if (k--, k === 0) {
          var j = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, j, {
              value: W
            }),
            info: R({}, j, {
              value: D
            }),
            warn: R({}, j, {
              value: z
            }),
            error: R({}, j, {
              value: Y
            }),
            group: R({}, j, {
              value: H
            }),
            groupCollapsed: R({}, j, {
              value: Q
            }),
            groupEnd: R({}, j, {
              value: I
            })
          });
        }
        k < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = b.ReactCurrentDispatcher, ie;
    function ge(j, le, xe) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var ke = Ge.stack.trim().match(/\n( *(at )?)/);
            ie = ke && ke[1] || "";
          }
        return `
` + ie + j;
      }
    }
    var _e = !1, ce;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new he();
    }
    function K(j, le) {
      if (!j || _e)
        return "";
      {
        var xe = ce.get(j);
        if (xe !== void 0)
          return xe;
      }
      var ke;
      _e = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = te.current, te.current = null, me();
      try {
        if (le) {
          var We = function() {
            throw Error();
          };
          if (Object.defineProperty(We.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(We, []);
            } catch (Gn) {
              ke = Gn;
            }
            Reflect.construct(j, [], We);
          } else {
            try {
              We.call();
            } catch (Gn) {
              ke = Gn;
            }
            j.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gn) {
            ke = Gn;
          }
          j();
        }
      } catch (Gn) {
        if (Gn && ke && typeof Gn.stack == "string") {
          for (var ze = Gn.stack.split(`
`), jt = ke.stack.split(`
`), gt = ze.length - 1, wt = jt.length - 1; gt >= 1 && wt >= 0 && ze[gt] !== jt[wt]; )
            wt--;
          for (; gt >= 1 && wt >= 0; gt--, wt--)
            if (ze[gt] !== jt[wt]) {
              if (gt !== 1 || wt !== 1)
                do
                  if (gt--, wt--, wt < 0 || ze[gt] !== jt[wt]) {
                    var Jt = `
` + ze[gt].replace(" at new ", " at ");
                    return j.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", j.displayName)), typeof j == "function" && ce.set(j, Jt), Jt;
                  }
                while (gt >= 1 && wt >= 0);
              break;
            }
        }
      } finally {
        _e = !1, te.current = nt, ae(), Error.prepareStackTrace = Ge;
      }
      var xo = j ? j.displayName || j.name : "", bp = xo ? ge(xo) : "";
      return typeof j == "function" && ce.set(j, bp), bp;
    }
    function se(j, le, xe) {
      return K(j, !1);
    }
    function ne(j) {
      var le = j.prototype;
      return !!(le && le.isReactComponent);
    }
    function Ee(j, le, xe) {
      if (j == null)
        return "";
      if (typeof j == "function")
        return K(j, ne(j));
      if (typeof j == "string")
        return ge(j);
      switch (j) {
        case l:
          return ge("Suspense");
        case u:
          return ge("SuspenseList");
      }
      if (typeof j == "object")
        switch (j.$$typeof) {
          case c:
            return se(j.render);
          case f:
            return Ee(j.type, le, xe);
          case p: {
            var ke = j, Ge = ke._payload, nt = ke._init;
            try {
              return Ee(nt(Ge), le, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, Oe = {}, P = b.ReactDebugCurrentFrame;
    function F(j) {
      if (j) {
        var le = j._owner, xe = Ee(j.type, j._source, le ? le.type : null);
        P.setExtraStackFrame(xe);
      } else
        P.setExtraStackFrame(null);
    }
    function q(j, le, xe, ke, Ge) {
      {
        var nt = Function.call.bind(De);
        for (var We in j)
          if (nt(j, We)) {
            var ze = void 0;
            try {
              if (typeof j[We] != "function") {
                var jt = Error((ke || "React class") + ": " + xe + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof j[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jt.name = "Invariant Violation", jt;
              }
              ze = j[We](le, We, ke, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              ze = gt;
            }
            ze && !(ze instanceof Error) && (F(Ge), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", xe, We, typeof ze), F(null)), ze instanceof Error && !(ze.message in Oe) && (Oe[ze.message] = !0, F(Ge), y("Failed %s type: %s", xe, ze.message), F(null));
          }
      }
    }
    var fe = Array.isArray;
    function de(j) {
      return fe(j);
    }
    function oe(j) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, xe = le && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return xe;
      }
    }
    function we(j) {
      try {
        return Ae(j), !1;
      } catch {
        return !0;
      }
    }
    function Ae(j) {
      return "" + j;
    }
    function Ke(j) {
      if (we(j))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", oe(j)), Ae(j);
    }
    var et = b.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Ce, Se;
    Se = {};
    function Be(j) {
      if (De.call(j, "ref")) {
        var le = Object.getOwnPropertyDescriptor(j, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return j.ref !== void 0;
    }
    function Le(j) {
      if (De.call(j, "key")) {
        var le = Object.getOwnPropertyDescriptor(j, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return j.key !== void 0;
    }
    function Xe(j, le) {
      if (typeof j.ref == "string" && et.current && le && et.current.stateNode !== le) {
        var xe = U(et.current.type);
        Se[xe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(et.current.type), j.ref), Se[xe] = !0);
      }
    }
    function tt(j, le) {
      {
        var xe = function() {
          Qt || (Qt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        xe.isReactWarning = !0, Object.defineProperty(j, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function xt(j, le) {
      {
        var xe = function() {
          Ce || (Ce = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        xe.isReactWarning = !0, Object.defineProperty(j, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var ur = function(j, le, xe, ke, Ge, nt, We) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: j,
        key: le,
        ref: xe,
        props: We,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return ze._store = {}, Object.defineProperty(ze._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ze, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function an(j, le, xe, ke, Ge) {
      {
        var nt, We = {}, ze = null, jt = null;
        xe !== void 0 && (Ke(xe), ze = "" + xe), Le(le) && (Ke(le.key), ze = "" + le.key), Be(le) && (jt = le.ref, Xe(le, Ge));
        for (nt in le)
          De.call(le, nt) && !yt.hasOwnProperty(nt) && (We[nt] = le[nt]);
        if (j && j.defaultProps) {
          var gt = j.defaultProps;
          for (nt in gt)
            We[nt] === void 0 && (We[nt] = gt[nt]);
        }
        if (ze || jt) {
          var wt = typeof j == "function" ? j.displayName || j.name || "Unknown" : j;
          ze && tt(We, wt), jt && xt(We, wt);
        }
        return ur(j, ze, jt, Ge, ke, et.current, We);
      }
    }
    var Nt = b.ReactCurrentOwner, Tn = b.ReactDebugCurrentFrame;
    function Kn(j) {
      if (j) {
        var le = j._owner, xe = Ee(j.type, j._source, le ? le.type : null);
        Tn.setExtraStackFrame(xe);
      } else
        Tn.setExtraStackFrame(null);
    }
    var rl;
    rl = !1;
    function ol(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function pp() {
      {
        if (Nt.current) {
          var j = U(Nt.current.type);
          if (j)
            return `

Check the render method of \`` + j + "`.";
        }
        return "";
      }
    }
    function vw(j) {
      return "";
    }
    var hp = {};
    function gw(j) {
      {
        var le = pp();
        if (!le) {
          var xe = typeof j == "string" ? j : j.displayName || j.name;
          xe && (le = `

Check the top-level render call using <` + xe + ">.");
        }
        return le;
      }
    }
    function mp(j, le) {
      {
        if (!j._store || j._store.validated || j.key != null)
          return;
        j._store.validated = !0;
        var xe = gw(le);
        if (hp[xe])
          return;
        hp[xe] = !0;
        var ke = "";
        j && j._owner && j._owner !== Nt.current && (ke = " It was passed a child from " + U(j._owner.type) + "."), Kn(j), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, ke), Kn(null);
      }
    }
    function vp(j, le) {
      {
        if (typeof j != "object")
          return;
        if (de(j))
          for (var xe = 0; xe < j.length; xe++) {
            var ke = j[xe];
            ol(ke) && mp(ke, le);
          }
        else if (ol(j))
          j._store && (j._store.validated = !0);
        else if (j) {
          var Ge = g(j);
          if (typeof Ge == "function" && Ge !== j.entries)
            for (var nt = Ge.call(j), We; !(We = nt.next()).done; )
              ol(We.value) && mp(We.value, le);
        }
      }
    }
    function bw(j) {
      {
        var le = j.type;
        if (le == null || typeof le == "string")
          return;
        var xe;
        if (typeof le == "function")
          xe = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === f))
          xe = le.propTypes;
        else
          return;
        if (xe) {
          var ke = U(le);
          q(xe, j.props, "prop", ke, j);
        } else if (le.PropTypes !== void 0 && !rl) {
          rl = !0;
          var Ge = U(le);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yw(j) {
      {
        for (var le = Object.keys(j.props), xe = 0; xe < le.length; xe++) {
          var ke = le[xe];
          if (ke !== "children" && ke !== "key") {
            Kn(j), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), Kn(null);
            break;
          }
        }
        j.ref !== null && (Kn(j), y("Invalid attribute `ref` supplied to `React.Fragment`."), Kn(null));
      }
    }
    function gp(j, le, xe, ke, Ge, nt) {
      {
        var We = V(j);
        if (!We) {
          var ze = "";
          (j === void 0 || typeof j == "object" && j !== null && Object.keys(j).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jt = vw();
          jt ? ze += jt : ze += pp();
          var gt;
          j === null ? gt = "null" : de(j) ? gt = "array" : j !== void 0 && j.$$typeof === t ? (gt = "<" + (U(j.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof j, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, ze);
        }
        var wt = an(j, le, xe, Ge, nt);
        if (wt == null)
          return wt;
        if (We) {
          var Jt = le.children;
          if (Jt !== void 0)
            if (ke)
              if (de(Jt)) {
                for (var xo = 0; xo < Jt.length; xo++)
                  vp(Jt[xo], j);
                Object.freeze && Object.freeze(Jt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vp(Jt, j);
        }
        return j === r ? yw(wt) : bw(wt), wt;
      }
    }
    function xw(j, le, xe) {
      return gp(j, le, xe, !0);
    }
    function ww(j, le, xe) {
      return gp(j, le, xe, !1);
    }
    var $w = ww, _w = xw;
    fa.Fragment = r, fa.jsx = $w, fa.jsxs = _w;
  }()), fa;
}
process.env.NODE_ENV === "production" ? eu.exports = Sw() : eu.exports = Nw();
var d = eu.exports;
function O() {
  return O = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, O.apply(null, arguments);
}
function Ew(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ps(...e) {
  return (t) => e.forEach(
    (n) => Ew(n, t)
  );
}
function Pe(...e) {
  return be(ps(...e), e);
}
const gn = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e, o = Kr.toArray(n), a = o.find(Pw);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Kr.count(s) > 1 ? Kr.only(null) : /* @__PURE__ */ Ta(s) ? s.props.children : null : c);
    return /* @__PURE__ */ w(tu, O({}, r, {
      ref: t
    }), /* @__PURE__ */ Ta(s) ? /* @__PURE__ */ sc(s, void 0, i) : null);
  }
  return /* @__PURE__ */ w(tu, O({}, r, {
    ref: t
  }), n);
});
gn.displayName = "Slot";
const tu = /* @__PURE__ */ L((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Ta(n) ? /* @__PURE__ */ sc(n, {
    ...Ow(r, n.props),
    ref: t ? ps(t, n.ref) : n.ref
  }) : Kr.count(n) > 1 ? Kr.only(null) : null;
});
tu.displayName = "SlotClone";
const dd = ({ children: e }) => /* @__PURE__ */ w(vn, null, e);
function Pw(e) {
  return /* @__PURE__ */ Ta(e) && e.type === dd;
}
function Ow(e, t) {
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
function uv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = uv(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Tw() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = uv(e)) && (r && (r += " "), r += t);
  return r;
}
const wp = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, $p = Tw, Go = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return $p(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], f = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = wp(u) || wp(f);
    return o[l][p];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [f, p] = u;
    return p === void 0 || (l[f] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: f, className: p, ...h } = u;
    return Object.entries(h).every((m) => {
      let [v, g] = m;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === g;
    }) ? [
      ...l,
      f,
      p
    ] : l;
  }, []);
  return $p(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function ZG(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const XG = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, al = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, QG = (e) => {
  const t = al(e), n = al(e, 0.1), r = al(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, sl = {
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
}, JG = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), eY = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), tY = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), nY = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, gi = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, rY = () => [...sl.DIGITAL, ...sl.MOVILNET, ...sl.MOVISTAR], pa = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function dv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = dv(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function yr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = dv(e)) && (r && (r += " "), r += t);
  return r;
}
const fd = "-";
function jw(e) {
  const t = kw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(fd);
    return i[0] === "" && i.length !== 1 && i.shift(), fv(i, t) || Mw(s);
  }
  function a(s, i) {
    const c = n[s] || [];
    return i && r[s] ? [...c, ...r[s]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  };
}
function fv(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? fv(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(fd);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const _p = /^\[(.+)\]$/;
function Mw(e) {
  if (_p.test(e)) {
    const t = _p.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function kw(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Aw(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    nu(s, r, a, t);
  }), r;
}
function nu(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Cp(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Dw(o)) {
        nu(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      nu(s, Cp(t, a), n, r);
    });
  });
}
function Cp(e, t) {
  let n = e;
  return t.split(fd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Dw(e) {
  return e.isThemeGetter;
}
function Aw(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function Rw(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, s) {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}
const pv = "!";
function Iw(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    const i = [];
    let c = 0, l = 0, u;
    for (let v = 0; v < s.length; v++) {
      let g = s[v];
      if (c === 0) {
        if (g === r && (n || s.slice(v, v + o) === t)) {
          i.push(s.slice(l, v)), l = v + o;
          continue;
        }
        if (g === "/") {
          u = v;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const f = i.length === 0 ? s : s.substring(l), p = f.startsWith(pv), h = p ? f.substring(1) : f, m = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function Lw(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function Fw(e) {
  return {
    cache: Rw(e.cacheSize),
    splitModifiers: Iw(e),
    ...jw(e)
  };
}
const Bw = /\s+/;
function Vw(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(Bw).map((s) => {
    const {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = n(s);
    let f = r(u ? l.substring(0, u) : l), p = !!u;
    if (!f) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (f = r(l), !f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      p = !1;
    }
    const h = Lw(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + pv : h,
      classGroupId: f,
      originalClassName: s,
      hasPostfixModifier: p
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: c,
      hasPostfixModifier: l
    } = s, u = i + c;
    return a.has(u) ? !1 : (a.add(u), o(c, l).forEach((f) => a.add(i + f)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function zw() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = hv(t)) && (r && (r += " "), r += n);
  return r;
}
function hv(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = hv(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Ww(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const l = t.reduce((u, f) => f(u), e());
    return n = Fw(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const u = Vw(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(zw.apply(null, arguments));
  };
}
function st(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const mv = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hw = /^\d+\/\d+$/, Uw = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Gw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, qw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Yn(e) {
  return Hr(e) || Uw.has(e) || Hw.test(e);
}
function dr(e) {
  return Yo(e, "length", o$);
}
function Hr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ls(e) {
  return Yo(e, "number", Hr);
}
function ha(e) {
  return !!e && Number.isInteger(Number(e));
}
function Xw(e) {
  return e.endsWith("%") && Hr(e.slice(0, -1));
}
function Ie(e) {
  return mv.test(e);
}
function fr(e) {
  return Kw.test(e);
}
const Qw = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Jw(e) {
  return Yo(e, Qw, vv);
}
function e$(e) {
  return Yo(e, "position", vv);
}
const t$ = /* @__PURE__ */ new Set(["image", "url"]);
function n$(e) {
  return Yo(e, t$, s$);
}
function r$(e) {
  return Yo(e, "", a$);
}
function ma() {
  return !0;
}
function Yo(e, t, n) {
  const r = mv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function o$(e) {
  return Gw.test(e) && !Yw.test(e);
}
function vv() {
  return !1;
}
function a$(e) {
  return qw.test(e);
}
function s$(e) {
  return Zw.test(e);
}
function i$() {
  const e = st("colors"), t = st("spacing"), n = st("blur"), r = st("brightness"), o = st("borderColor"), a = st("borderRadius"), s = st("borderSpacing"), i = st("borderWidth"), c = st("contrast"), l = st("grayscale"), u = st("hueRotate"), f = st("invert"), p = st("gap"), h = st("gradientColorStops"), m = st("gradientColorStopPositions"), v = st("inset"), g = st("margin"), b = st("opacity"), y = st("padding"), x = st("saturate"), _ = st("scale"), $ = st("sepia"), N = st("skew"), S = st("space"), M = st("translate"), E = () => ["auto", "contain", "none"], V = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", Ie, t], B = () => [Ie, t], U = () => ["", Yn, dr], R = () => ["auto", Hr, Ie], k = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], D = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", Ie], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [Hr, Ls], I = () => [Hr, Ie];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ma],
      spacing: [Yn, dr],
      blur: ["none", "", fr, Ie],
      brightness: Q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", fr, Ie],
      borderSpacing: B(),
      borderWidth: U(),
      contrast: Q(),
      grayscale: Y(),
      hueRotate: I(),
      invert: Y(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Xw, dr],
      inset: G(),
      margin: G(),
      opacity: Q(),
      padding: B(),
      saturate: Q(),
      scale: Q(),
      sepia: Y(),
      skew: I(),
      space: B(),
      translate: B()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Ie]
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
        columns: [fr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
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
        object: [...k(), Ie]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: V()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": V()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": V()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        z: ["auto", ha, Ie]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: G()
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
        flex: ["1", "auto", "initial", "none", Ie]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ha, Ie]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ma]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ha, Ie]
        }, Ie]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": R()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": R()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ma]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ha, Ie]
        }, Ie]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": R()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": R()
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
        "auto-cols": ["auto", "min", "max", "fr", Ie]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Ie]
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
        justify: ["normal", ...z()]
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
        content: ["normal", ...z(), "baseline"]
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
        "place-content": [...z(), "baseline"]
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
        "space-x": [S]
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
        "space-y": [S]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ie, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Ie, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Ie, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [fr]
        }, fr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Ie, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Ie, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", fr, dr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ls]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ma]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Hr, Ls]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Yn, Ie]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Ie]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Ie]
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Yn, dr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Yn, Ie]
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
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Ie]
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
        content: ["none", Ie]
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
        bg: [...k(), e$]
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
        bg: ["auto", "cover", "contain", Jw]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, n$]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
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
        border: [...W(), "hidden"]
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
        divide: W()
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
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Yn, Ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Yn, dr]
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
        ring: U()
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
        "ring-offset": [Yn, dr]
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
        shadow: ["", "inner", "none", fr, r$]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ma]
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
        "mix-blend": [...D(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
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
        "drop-shadow": ["", "none", fr, Ie]
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
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
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
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
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
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Ie]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: I()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: I()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Ie]
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
        rotate: [ha, Ie]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Ie]
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
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Ie]
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
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
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
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
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
        "will-change": ["auto", "scroll", "contents", "transform", Ie]
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
        stroke: [Yn, dr, Ls]
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
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
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
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
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
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const c$ = /* @__PURE__ */ Ww(i$);
function T(...e) {
  return c$(yr(e));
}
const pd = ({ className: e }) => /* @__PURE__ */ d.jsx("div", { className: T(`spinner h-4 w-4 ${e}`) }), xr = Go(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
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
  ({ className: e, isLoading: t, children: n, variant: r, size: o, asChild: a = !1, ...s }, i) => {
    const c = a ? gn : "button";
    return /* @__PURE__ */ d.jsx(
      c,
      {
        className: T(xr({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ d.jsx(pd, {}) : n
      }
    );
  }
);
Ve.displayName = "Button";
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), gv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var u$ = {
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
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d$ = L(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => w(
    "svg",
    {
      ref: c,
      ...u$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: gv("lucide", o),
      ...i
    },
    [
      ...s.map(([l, u]) => w(l, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = (e, t) => {
  const n = L(
    ({ className: r, ...o }, a) => w(d$, {
      ref: a,
      iconNode: t,
      className: gv(`lucide-${l$(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f$ = ot("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p$ = ot("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = ot("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = ot("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = ot("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ru = ot("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h$ = ot("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = ot("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m$ = ot("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = ot("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bv = ot("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = ot("EyeOff", [
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
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = ot("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = ot("ImageOff", [
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
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = ot("ImagePlus", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = ot("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v$ = ot("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g$ = ot("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = ot("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = ot("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wv = ot("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = ot("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b$ = ot("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Ue(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Xt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Mt(e, t) {
  const n = Ue(e);
  return isNaN(t) ? Xt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function bn(e, t) {
  const n = Ue(e);
  if (isNaN(t))
    return Xt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Xt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const md = 6048e5, y$ = 864e5;
let x$ = {};
function hs() {
  return x$;
}
function Rn(e, t) {
  var i, c, l, u;
  const n = hs(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = Ue(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Zr(e) {
  return Rn(e, { weekStartsOn: 1 });
}
function _v(e) {
  const t = Ue(e), n = t.getFullYear(), r = Xt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Zr(r), a = Xt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Zr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ao(e) {
  const t = Ue(e);
  return t.setHours(0, 0, 0, 0), t;
}
function xi(e) {
  const t = Ue(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Mn(e, t) {
  const n = Ao(e), r = Ao(t), o = +n - xi(n), a = +r - xi(r);
  return Math.round((o - a) / y$);
}
function w$(e) {
  const t = _v(e), n = Xt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Zr(n);
}
function ou(e, t) {
  const n = t * 7;
  return Mt(e, n);
}
function $$(e, t) {
  return bn(e, t * 12);
}
function _$(e) {
  let t;
  return e.forEach(function(n) {
    const r = Ue(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function C$(e) {
  let t;
  return e.forEach((n) => {
    const r = Ue(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Vt(e, t) {
  const n = Ao(e), r = Ao(t);
  return +n == +r;
}
function vd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function S$(e) {
  if (!vd(e) && typeof e != "number")
    return !1;
  const t = Ue(e);
  return !isNaN(Number(t));
}
function Ma(e, t) {
  const n = Ue(e), r = Ue(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function N$(e, t, n) {
  const r = Rn(e, n), o = Rn(t, n), a = +r - xi(r), s = +o - xi(o);
  return Math.round((a - s) / md);
}
function gd(e) {
  const t = Ue(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function zt(e) {
  const t = Ue(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Cv(e) {
  const t = Ue(e), n = Xt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function bd(e, t) {
  var i, c, l, u;
  const n = hs(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = Ue(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Sv(e) {
  return bd(e, { weekStartsOn: 1 });
}
const E$ = {
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
}, P$ = (e, t, n) => {
  let r;
  const o = E$[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function cl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const O$ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, T$ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, j$ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, M$ = {
  date: cl({
    formats: O$,
    defaultWidth: "full"
  }),
  time: cl({
    formats: T$,
    defaultWidth: "full"
  }),
  dateTime: cl({
    formats: j$,
    defaultWidth: "full"
  })
}, k$ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, D$ = (e, t, n, r) => k$[e];
function va(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const A$ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, R$ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, I$ = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, L$ = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, F$ = {
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
}, B$ = {
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
}, V$ = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, z$ = {
  ordinalNumber: V$,
  era: va({
    values: A$,
    defaultWidth: "wide"
  }),
  quarter: va({
    values: R$,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: va({
    values: I$,
    defaultWidth: "wide"
  }),
  day: va({
    values: L$,
    defaultWidth: "wide"
  }),
  dayPeriod: va({
    values: F$,
    defaultWidth: "wide",
    formattingValues: B$,
    defaultFormattingWidth: "wide"
  })
};
function ga(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? H$(i, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      W$(i, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(l)
    ) : l;
    const u = t.slice(s.length);
    return { value: l, rest: u };
  };
}
function W$(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function H$(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function U$(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const K$ = /^(\d+)(th|st|nd|rd)?/i, G$ = /\d+/i, Y$ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, q$ = {
  any: [/^b/i, /^(a|c)/i]
}, Z$ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, X$ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Q$ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, J$ = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, e_ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, t_ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, n_ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, r_ = {
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
}, o_ = {
  ordinalNumber: U$({
    matchPattern: K$,
    parsePattern: G$,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ga({
    matchPatterns: Y$,
    defaultMatchWidth: "wide",
    parsePatterns: q$,
    defaultParseWidth: "any"
  }),
  quarter: ga({
    matchPatterns: Z$,
    defaultMatchWidth: "wide",
    parsePatterns: X$,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ga({
    matchPatterns: Q$,
    defaultMatchWidth: "wide",
    parsePatterns: J$,
    defaultParseWidth: "any"
  }),
  day: ga({
    matchPatterns: e_,
    defaultMatchWidth: "wide",
    parsePatterns: t_,
    defaultParseWidth: "any"
  }),
  dayPeriod: ga({
    matchPatterns: n_,
    defaultMatchWidth: "any",
    parsePatterns: r_,
    defaultParseWidth: "any"
  })
}, Nv = {
  code: "en-US",
  formatDistance: P$,
  formatLong: M$,
  formatRelative: D$,
  localize: z$,
  match: o_,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function a_(e) {
  const t = Ue(e);
  return Mn(t, Cv(t)) + 1;
}
function Ev(e) {
  const t = Ue(e), n = +Zr(t) - +w$(t);
  return Math.round(n / md) + 1;
}
function Pv(e, t) {
  var u, f, p, h;
  const n = Ue(e), r = n.getFullYear(), o = hs(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Xt(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Rn(s, t), c = Xt(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = Rn(c, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function s_(e, t) {
  var i, c, l, u;
  const n = hs(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = Pv(e, t), a = Xt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Rn(a, t);
}
function Ov(e, t) {
  const n = Ue(e), r = +Rn(n, t) - +s_(n, t);
  return Math.round(r / md) + 1;
}
function Qe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const pr = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Qe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Qe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Qe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Qe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Qe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Qe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Qe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Qe(o, t.length);
  }
}, wo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Np = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return pr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Pv(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return Qe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Qe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = _v(e);
    return Qe(n, t.length);
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
  u: function(e, t) {
    const n = e.getFullYear();
    return Qe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Qe(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return Qe(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return pr.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return Qe(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Ov(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Qe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ev(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Qe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : pr.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = a_(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Qe(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Qe(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Qe(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return Qe(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = wo.noon : r === 0 ? o = wo.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = wo.evening : r >= 12 ? o = wo.afternoon : r >= 4 ? o = wo.morning : o = wo.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return pr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : pr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : pr.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : pr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return pr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Pp(r);
      case "XXXX":
      case "XX":
        return Br(r);
      case "XXXXX":
      case "XXX":
      default:
        return Br(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Pp(r);
      case "xxxx":
      case "xx":
        return Br(r);
      case "xxxxx":
      case "xxx":
      default:
        return Br(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ep(r, ":");
      case "OOOO":
      default:
        return "GMT" + Br(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ep(r, ":");
      case "zzzz":
      default:
        return "GMT" + Br(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Qe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Qe(r, t.length);
  }
};
function Ep(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Qe(a, 2);
}
function Pp(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Qe(Math.abs(e) / 60, 2) : Br(e, t);
}
function Br(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Qe(Math.trunc(r / 60), 2), a = Qe(r % 60, 2);
  return n + o + t + a;
}
const Op = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Tv = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, i_ = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Op(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Op(r, t)).replace("{{time}}", Tv(o, t));
}, c_ = {
  p: Tv,
  P: i_
}, l_ = /^D+$/, u_ = /^Y+$/, d_ = ["D", "DD", "YY", "YYYY"];
function f_(e) {
  return l_.test(e);
}
function p_(e) {
  return u_.test(e);
}
function h_(e, t, n) {
  const r = m_(e, t, n);
  if (console.warn(r), d_.includes(e))
    throw new RangeError(r);
}
function m_(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const v_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, g_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, b_ = /^'([^]*?)'?$/, y_ = /''/g, x_ = /[a-zA-Z]/;
function so(e, t, n) {
  var u, f, p, h, m, v, g, b;
  const r = hs(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Nv, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((b = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = Ue(e);
  if (!S$(i))
    throw new RangeError("Invalid time value");
  let c = t.match(g_).map((y) => {
    const x = y[0];
    if (x === "p" || x === "P") {
      const _ = c_[x];
      return _(y, o.formatLong);
    }
    return y;
  }).join("").match(v_).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const x = y[0];
    if (x === "'")
      return { isToken: !1, value: w_(y) };
    if (Np[x])
      return { isToken: !0, value: y };
    if (x.match(x_))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
      );
    return { isToken: !1, value: y };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((y) => {
    if (!y.isToken)
      return y.value;
    const x = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && p_(x) || !(n != null && n.useAdditionalDayOfYearTokens) && f_(x)) && h_(x, t, String(e));
    const _ = Np[x[0]];
    return _(i, x, o.localize, l);
  }).join("");
}
function w_(e) {
  const t = e.match(b_);
  return t ? t[1].replace(y_, "'") : e;
}
function $_(e) {
  const t = Ue(e), n = t.getFullYear(), r = t.getMonth(), o = Xt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function __(e) {
  return Math.trunc(+Ue(e) / 1e3);
}
function C_(e) {
  const t = Ue(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function S_(e, t) {
  return N$(
    C_(e),
    zt(e),
    t
  ) + 1;
}
function au(e, t) {
  const n = Ue(e), r = Ue(t);
  return n.getTime() > r.getTime();
}
function jv(e, t) {
  const n = Ue(e), r = Ue(t);
  return +n < +r;
}
function yd(e, t) {
  const n = Ue(e), r = Ue(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function N_(e, t) {
  const n = Ue(e), r = Ue(t);
  return n.getFullYear() === r.getFullYear();
}
function ll(e, t) {
  return Mt(e, -t);
}
function ul(e, t) {
  const n = Ue(e), r = n.getFullYear(), o = n.getDate(), a = Xt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = $_(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function Tp(e, t) {
  const n = Ue(e);
  return isNaN(+n) ? Xt(e, NaN) : (n.setFullYear(t), n);
}
var je = function() {
  return je = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, je.apply(this, arguments);
};
function E_(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Mv(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function ms(e) {
  return e.mode === "multiple";
}
function vs(e) {
  return e.mode === "range";
}
function dc(e) {
  return e.mode === "single";
}
var P_ = {
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
function O_(e, t) {
  return so(e, "LLLL y", t);
}
function T_(e, t) {
  return so(e, "d", t);
}
function j_(e, t) {
  return so(e, "LLLL", t);
}
function M_(e) {
  return "".concat(e);
}
function k_(e, t) {
  return so(e, "cccccc", t);
}
function D_(e, t) {
  return so(e, "yyyy", t);
}
var A_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: O_,
  formatDay: T_,
  formatMonthCaption: j_,
  formatWeekNumber: M_,
  formatWeekdayName: k_,
  formatYearCaption: D_
}), R_ = function(e, t, n) {
  return so(e, "do MMMM (EEEE)", n);
}, I_ = function() {
  return "Month: ";
}, L_ = function() {
  return "Go to next month";
}, F_ = function() {
  return "Go to previous month";
}, B_ = function(e, t) {
  return so(e, "cccc", t);
}, V_ = function(e) {
  return "Week n. ".concat(e);
}, z_ = function() {
  return "Year: ";
}, W_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: R_,
  labelMonthDropdown: I_,
  labelNext: L_,
  labelPrevious: F_,
  labelWeekNumber: V_,
  labelWeekday: B_,
  labelYearDropdown: z_
});
function H_() {
  var e = "buttons", t = P_, n = Nv, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: A_,
    labels: W_,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function U_(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = zt(r) : t && (a = new Date(t, 0, 1)), o ? s = gd(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Ao(a) : void 0,
    toDate: s ? Ao(s) : void 0
  };
}
var kv = Wt(void 0);
function K_(e) {
  var t, n = e.initialProps, r = H_(), o = U_(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (dc(n) || ms(n) || vs(n)) && (c = n.onSelect);
  var l = je(je(je({}, r), n), { captionLayout: i, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: a, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: je(je({}, r.styles), n.styles), toDate: s });
  return d.jsx(kv.Provider, { value: l, children: e.children });
}
function at() {
  var e = lt(kv);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Dv(e) {
  var t = at(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return d.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function G_(e) {
  return d.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: d.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Av(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = at(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : G_;
  return d.jsxs("div", { className: i, style: c, children: [d.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), d.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r, children: a }), d.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [s, d.jsx(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function Y_(e) {
  var t, n = at(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return d.jsx(d.Fragment, {});
  if (!o)
    return d.jsx(d.Fragment, {});
  var f = [];
  if (N_(r, o))
    for (var p = zt(r), h = r.getMonth(); h <= o.getMonth(); h++)
      f.push(ul(p, h));
  else
    for (var p = zt(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      f.push(ul(p, h));
  var m = function(g) {
    var b = Number(g.target.value), y = ul(zt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Av;
  return d.jsx(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(g) {
    return d.jsx("option", { value: g.getMonth(), children: i(g, { locale: s }) }, g.getMonth());
  }) });
}
function q_(e) {
  var t, n = e.displayMonth, r = at(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return d.jsx(d.Fragment, {});
  if (!a)
    return d.jsx(d.Fragment, {});
  for (var h = o.getFullYear(), m = a.getFullYear(), v = h; v <= m; v++)
    p.push(Tp(Cv(/* @__PURE__ */ new Date()), v));
  var g = function(y) {
    var x = Tp(zt(n), Number(y.target.value));
    e.onChange(x);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Av;
  return d.jsx(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }), children: p.map(function(y) {
    return d.jsx("option", { value: y.getFullYear(), children: u(y, { locale: s }) }, y.getFullYear());
  }) });
}
function Z_(e, t) {
  var n = X(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function X_(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && Ma(a, o) < 0) {
    var l = -1 * (c - 1);
    o = bn(a, l);
  }
  return s && Ma(o, s) < 0 && (o = s), zt(o);
}
function Q_() {
  var e = at(), t = X_(e), n = Z_(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = zt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function J_(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = zt(e), a = zt(bn(o, r)), s = Ma(a, o), i = [], c = 0; c < s; c++) {
    var l = bn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function e2(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, s);
    var c = Ma(n, e);
    if (!(c < a))
      return bn(i, s);
  }
}
function t2(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, -s);
    var c = Ma(i, n);
    if (!(c <= 0))
      return bn(i, -s);
  }
}
var Rv = Wt(void 0);
function n2(e) {
  var t = at(), n = Q_(), r = n[0], o = n[1], a = J_(r, t), s = e2(r, t), i = t2(r, t), c = function(f) {
    return a.some(function(p) {
      return yd(f, p);
    });
  }, l = function(f, p) {
    c(f) || (p && jv(f, p) ? o(bn(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return d.jsx(Rv.Provider, { value: u, children: e.children });
}
function gs() {
  var e = lt(Rv);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function jp(e) {
  var t, n = at(), r = n.classNames, o = n.styles, a = n.components, s = gs().goToMonth, i = function(u) {
    s(bn(u, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Dv, l = d.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return d.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [d.jsx("div", { className: r.vhidden, children: l }), d.jsx(Y_, { onChange: i, displayMonth: e.displayMonth }), d.jsx(q_, { onChange: i, displayMonth: e.displayMonth })] });
}
function r2(e) {
  return d.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function o2(e) {
  return d.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var wi = L(function(e, t) {
  var n = at(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = je(je({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), d.jsx("button", je({}, e, { ref: t, type: "button", className: s, style: i }));
});
function a2(e) {
  var t, n, r = at(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return d.jsx(d.Fragment, {});
  var p = l(e.previousMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : o2, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : r2;
  return d.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && d.jsx(wi, { name: "previous-month", "aria-label": p, className: h, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? d.jsx(g, { className: s.nav_icon, style: i.nav_icon }) : d.jsx(b, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && d.jsx(wi, { name: "next-month", "aria-label": m, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? d.jsx(b, { className: s.nav_icon, style: i.nav_icon }) : d.jsx(g, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function Mp(e) {
  var t = at().numberOfMonths, n = gs(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(m) {
    return yd(e.displayMonth, m);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), f = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, h = function() {
    o && a(o);
  };
  return d.jsx(a2, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: h });
}
function s2(e) {
  var t, n = at(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : Dv, l;
  return o ? l = d.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = d.jsx(jp, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = d.jsxs(d.Fragment, { children: [d.jsx(jp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), d.jsx(Mp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = d.jsxs(d.Fragment, { children: [d.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(Mp, { displayMonth: e.displayMonth, id: e.id })] }), d.jsx("div", { className: r.caption, style: a.caption, children: l });
}
function i2(e) {
  var t = at(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? d.jsx("tfoot", { className: o, style: r.tfoot, children: d.jsx("tr", { children: d.jsx("td", { colSpan: 8, children: n }) }) }) : d.jsx(d.Fragment, {});
}
function c2(e, t, n) {
  for (var r = n ? Zr(/* @__PURE__ */ new Date()) : Rn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Mt(r, a);
    o.push(s);
  }
  return o;
}
function l2() {
  var e = at(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = c2(o, a, s);
  return d.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && d.jsx("td", { style: n.head_cell, className: t.head_cell }), l.map(function(u, f) {
    return d.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }), children: i(u, { locale: o }) }, f);
  })] });
}
function u2() {
  var e, t = at(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : l2;
  return d.jsx("thead", { style: r.head, className: n.head, children: d.jsx(a, {}) });
}
function d2(e) {
  var t = at(), n = t.locale, r = t.formatters.formatDay;
  return d.jsx(d.Fragment, { children: r(e.date, { locale: n }) });
}
var xd = Wt(void 0);
function f2(e) {
  if (!ms(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return d.jsx(xd.Provider, { value: t, children: e.children });
  }
  return d.jsx(p2, { initialProps: e.initialProps, children: e.children });
}
function p2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, f) {
    var p, h;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, f);
    var m = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? Mv([], r) : [];
        if (u.selected) {
          var b = g.findIndex(function(y) {
            return Vt(l, y);
          });
          g.splice(b, 1);
        } else
          g.push(l);
        (h = t.onSelect) === null || h === void 0 || h.call(t, g, l, u, f);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var u = a && r.length > a - 1, f = r.some(function(p) {
      return Vt(p, l);
    });
    return !!(u && !f);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return d.jsx(xd.Provider, { value: c, children: n });
}
function wd() {
  var e = lt(xd);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function h2(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Vt(o, e) && Vt(r, e) ? void 0 : Vt(o, e) ? { from: o, to: void 0 } : Vt(r, e) ? void 0 : au(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? au(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? jv(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var $d = Wt(void 0);
function m2(e) {
  if (!vs(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return d.jsx($d.Provider, { value: t, children: e.children });
  }
  return d.jsx(v2, { initialProps: e.initialProps, children: e.children });
}
function v2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(h, m, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, h, m, v);
    var y = h2(h, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, h, m, v);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (u.range_start = [a], s ? (u.range_end = [s], Vt(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]) : s && (u.range_start = [s], u.range_end = [s]), i && (a && !s && u.disabled.push({
    after: ll(a, i - 1),
    before: Mt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Mt(a, i - 1)
  }), !a && s && u.disabled.push({
    after: ll(s, i - 1),
    before: Mt(s, i - 1)
  })), c) {
    if (a && !s && (u.disabled.push({
      before: Mt(a, -c + 1)
    }), u.disabled.push({
      after: Mt(a, c - 1)
    })), a && s) {
      var f = Mn(s, a) + 1, p = c - f;
      u.disabled.push({
        before: ll(a, p)
      }), u.disabled.push({
        after: Mt(s, p)
      });
    }
    !a && s && (u.disabled.push({
      before: Mt(s, -c + 1)
    }), u.disabled.push({
      after: Mt(s, c - 1)
    }));
  }
  return d.jsx($d.Provider, { value: { selected: r, onDayClick: l, modifiers: u }, children: n });
}
function _d() {
  var e = lt($d);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ii(e) {
  return Array.isArray(e) ? Mv([], e) : e !== void 0 ? [e] : [];
}
function g2(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = ii(o);
  }), t;
}
var yn;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(yn || (yn = {}));
var b2 = yn.Selected, qn = yn.Disabled, y2 = yn.Hidden, x2 = yn.Today, dl = yn.RangeEnd, fl = yn.RangeMiddle, pl = yn.RangeStart, w2 = yn.Outside;
function $2(e, t, n) {
  var r, o = (r = {}, r[b2] = ii(e.selected), r[qn] = ii(e.disabled), r[y2] = ii(e.hidden), r[x2] = [e.today], r[dl] = [], r[fl] = [], r[pl] = [], r[w2] = [], r);
  return e.fromDate && o[qn].push({ before: e.fromDate }), e.toDate && o[qn].push({ after: e.toDate }), ms(e) ? o[qn] = o[qn].concat(t.modifiers[qn]) : vs(e) && (o[qn] = o[qn].concat(n.modifiers[qn]), o[pl] = n.modifiers[pl], o[fl] = n.modifiers[fl], o[dl] = n.modifiers[dl]), o;
}
var Iv = Wt(void 0);
function _2(e) {
  var t = at(), n = wd(), r = _d(), o = $2(t, n, r), a = g2(t.modifiers), s = je(je({}, o), a);
  return d.jsx(Iv.Provider, { value: s, children: e.children });
}
function Lv() {
  var e = lt(Iv);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function C2(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function S2(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function N2(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function E2(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function P2(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function O2(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = Mn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = Mn(e, r) >= 0 && Mn(o, e) >= 0;
    return s;
  }
  return o ? Vt(o, e) : r ? Vt(r, e) : !1;
}
function T2(e) {
  return vd(e);
}
function j2(e) {
  return Array.isArray(e) && e.every(vd);
}
function M2(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (T2(n))
      return Vt(e, n);
    if (j2(n))
      return n.includes(e);
    if (S2(n))
      return O2(e, n);
    if (P2(n))
      return n.dayOfWeek.includes(e.getDay());
    if (C2(n)) {
      var r = Mn(n.before, e), o = Mn(n.after, e), a = r > 0, s = o < 0, i = au(n.before, n.after);
      return i ? s && a : a || s;
    }
    return N2(n) ? Mn(e, n.after) > 0 : E2(n) ? Mn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Cd(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return M2(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !yd(e, n) && (o.outside = !0), o;
}
function k2(e, t) {
  for (var n = zt(e[0]), r = gd(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = Cd(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = Mt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = Mt(s, 1);
  }
  return a || o;
}
var D2 = 365;
function Fv(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, f = o.locale, p = {
    day: Mt,
    week: ou,
    month: bn,
    year: $$,
    startOfWeek: function(g) {
      return o.ISOWeek ? Zr(g) : Rn(g, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Sv(g) : bd(g, { locale: f, weekStartsOn: c });
    }
  }, h = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? h = _$([l, h]) : r === "after" && u && (h = C$([u, h]));
  var m = !0;
  if (a) {
    var v = Cd(h, a);
    m = !v.disabled && !v.hidden;
  }
  return m ? h : i.count > D2 ? i.lastFocused : Fv(h, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: je(je({}, i), { count: i.count + 1 })
  });
}
var Bv = Wt(void 0);
function A2(e) {
  var t = gs(), n = Lv(), r = X(), o = r[0], a = r[1], s = X(), i = s[0], c = s[1], l = k2(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, f = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, h = at(), m = function(g, b) {
    if (o) {
      var y = Fv(o, {
        moveBy: g,
        direction: b,
        context: h,
        modifiers: n
      });
      Vt(o, y) || (t.goToDate(y, o), p(y));
    }
  }, v = {
    focusedDay: o,
    focusTarget: u,
    blur: f,
    focus: p,
    focusDayAfter: function() {
      return m("day", "after");
    },
    focusDayBefore: function() {
      return m("day", "before");
    },
    focusWeekAfter: function() {
      return m("week", "after");
    },
    focusWeekBefore: function() {
      return m("week", "before");
    },
    focusMonthBefore: function() {
      return m("month", "before");
    },
    focusMonthAfter: function() {
      return m("month", "after");
    },
    focusYearBefore: function() {
      return m("year", "before");
    },
    focusYearAfter: function() {
      return m("year", "after");
    },
    focusStartOfWeek: function() {
      return m("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return m("endOfWeek", "after");
    }
  };
  return d.jsx(Bv.Provider, { value: v, children: e.children });
}
function Sd() {
  var e = lt(Bv);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function R2(e, t) {
  var n = Lv(), r = Cd(e, n, t);
  return r;
}
var Nd = Wt(void 0);
function I2(e) {
  if (!dc(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return d.jsx(Nd.Provider, { value: t, children: e.children });
  }
  return d.jsx(L2, { initialProps: e.initialProps, children: e.children });
}
function L2(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, l, u;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, i);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return d.jsx(Nd.Provider, { value: o, children: n });
}
function Vv() {
  var e = lt(Nd);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function F2(e, t) {
  var n = at(), r = Vv(), o = wd(), a = _d(), s = Sd(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, f = s.blur, p = s.focus, h = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, x = function(D) {
    var z, Y, H, Q;
    dc(n) ? (z = r.onDayClick) === null || z === void 0 || z.call(r, e, t, D) : ms(n) ? (Y = o.onDayClick) === null || Y === void 0 || Y.call(o, e, t, D) : vs(n) ? (H = a.onDayClick) === null || H === void 0 || H.call(a, e, t, D) : (Q = n.onDayClick) === null || Q === void 0 || Q.call(n, e, t, D);
  }, _ = function(D) {
    var z;
    p(e), (z = n.onDayFocus) === null || z === void 0 || z.call(n, e, t, D);
  }, $ = function(D) {
    var z;
    f(), (z = n.onDayBlur) === null || z === void 0 || z.call(n, e, t, D);
  }, N = function(D) {
    var z;
    (z = n.onDayMouseEnter) === null || z === void 0 || z.call(n, e, t, D);
  }, S = function(D) {
    var z;
    (z = n.onDayMouseLeave) === null || z === void 0 || z.call(n, e, t, D);
  }, M = function(D) {
    var z;
    (z = n.onDayPointerEnter) === null || z === void 0 || z.call(n, e, t, D);
  }, E = function(D) {
    var z;
    (z = n.onDayPointerLeave) === null || z === void 0 || z.call(n, e, t, D);
  }, V = function(D) {
    var z;
    (z = n.onDayTouchCancel) === null || z === void 0 || z.call(n, e, t, D);
  }, G = function(D) {
    var z;
    (z = n.onDayTouchEnd) === null || z === void 0 || z.call(n, e, t, D);
  }, B = function(D) {
    var z;
    (z = n.onDayTouchMove) === null || z === void 0 || z.call(n, e, t, D);
  }, U = function(D) {
    var z;
    (z = n.onDayTouchStart) === null || z === void 0 || z.call(n, e, t, D);
  }, R = function(D) {
    var z;
    (z = n.onDayKeyUp) === null || z === void 0 || z.call(n, e, t, D);
  }, k = function(D) {
    var z;
    switch (D.key) {
      case "ArrowLeft":
        D.preventDefault(), D.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        D.preventDefault(), D.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        D.preventDefault(), D.stopPropagation(), l();
        break;
      case "ArrowUp":
        D.preventDefault(), D.stopPropagation(), u();
        break;
      case "PageUp":
        D.preventDefault(), D.stopPropagation(), D.shiftKey ? v() : h();
        break;
      case "PageDown":
        D.preventDefault(), D.stopPropagation(), D.shiftKey ? g() : m();
        break;
      case "Home":
        D.preventDefault(), D.stopPropagation(), b();
        break;
      case "End":
        D.preventDefault(), D.stopPropagation(), y();
        break;
    }
    (z = n.onDayKeyDown) === null || z === void 0 || z.call(n, e, t, D);
  }, W = {
    onClick: x,
    onFocus: _,
    onBlur: $,
    onKeyDown: k,
    onKeyUp: R,
    onMouseEnter: N,
    onMouseLeave: S,
    onPointerEnter: M,
    onPointerLeave: E,
    onTouchCancel: V,
    onTouchEnd: G,
    onTouchMove: B,
    onTouchStart: U
  };
  return W;
}
function B2() {
  var e = at(), t = Vv(), n = wd(), r = _d(), o = dc(e) ? t.selected : ms(e) ? n.selected : vs(e) ? r.selected : void 0;
  return o;
}
function V2(e) {
  return Object.values(yn).includes(e);
}
function z2(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (V2(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function W2(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = je(je({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function H2(e, t, n) {
  var r, o, a, s = at(), i = Sd(), c = R2(e, t), l = F2(e, c), u = B2(), f = !!(s.onDayClick || s.mode !== "default");
  ee(function() {
    var N;
    c.outside || i.focusedDay && f && Vt(i.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = z2(s, c).join(" "), h = W2(s, c), m = !!(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : d2, g = d.jsx(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: h,
    className: p,
    children: g,
    role: "gridcell"
  }, y = i.focusTarget && Vt(i.focusTarget, e) && !c.outside, x = i.focusedDay && Vt(i.focusedDay, e), _ = je(je(je({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || y ? 0 : -1, r)), l), $ = {
    isButton: f,
    isHidden: m,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: b
  };
  return $;
}
function U2(e) {
  var t = Z(null), n = H2(e.date, e.displayMonth, t);
  return n.isHidden ? d.jsx("div", { role: "gridcell" }) : n.isButton ? d.jsx(wi, je({ name: "day", ref: t }, n.buttonProps)) : d.jsx("div", je({}, n.divProps));
}
function K2(e) {
  var t = e.number, n = e.dates, r = at(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return d.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: u });
  var f = c(Number(t), { locale: i }), p = function(h) {
    o(t, n, h);
  };
  return d.jsx(wi, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: p, children: u });
}
function G2(e) {
  var t, n, r = at(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : U2, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : K2, u;
  return s && (u = d.jsx("td", { className: a.cell, style: o.cell, children: d.jsx(l, { number: e.weekNumber, dates: e.dates }) })), d.jsxs("tr", { className: a.row, style: o.row, children: [u, e.dates.map(function(f) {
    return d.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: d.jsx(c, { displayMonth: e.displayMonth, date: f }) }, __(f));
  })] });
}
function kp(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Sv(t) : bd(t, n), o = n != null && n.ISOWeek ? Zr(e) : Rn(e, n), a = Mn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Mt(o, i));
  var c = s.reduce(function(l, u) {
    var f = n != null && n.ISOWeek ? Ev(u) : Ov(u, n), p = l.find(function(h) {
      return h.weekNumber === f;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: f,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Y2(e, t) {
  var n = kp(zt(e), gd(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = S_(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = ou(a, 6 - r), i = kp(ou(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function q2(e) {
  var t, n, r, o = at(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, h = o.ISOWeek, m = Y2(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: h,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : u2, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : G2, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : i2;
  return d.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && d.jsx(v, {}), d.jsx("tbody", { className: s.tbody, style: i.tbody, children: m.map(function(y) {
    return d.jsx(g, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), d.jsx(b, { displayMonth: e.displayMonth })] });
}
function Z2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var X2 = Z2() ? fs : ee, hl = !1, Q2 = 0;
function Dp() {
  return "react-day-picker-".concat(++Q2);
}
function J2(e) {
  var t, n = e ?? (hl ? Dp() : null), r = X(n), o = r[0], a = r[1];
  return X2(function() {
    o === null && a(Dp());
  }, []), ee(function() {
    hl === !1 && (hl = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function eC(e) {
  var t, n, r = at(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = gs().displayMonths, l = J2(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = s.month, h = e.displayIndex === 0, m = e.displayIndex === c.length - 1, v = !h && !m;
  o === "rtl" && (t = [h, m], m = t[0], h = t[1]), h && (f.push(a.caption_start), p = je(je({}, p), s.caption_start)), m && (f.push(a.caption_end), p = je(je({}, p), s.caption_end)), v && (f.push(a.caption_between), p = je(je({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : s2;
  return d.jsxs("div", { className: f.join(" "), style: p, children: [d.jsx(g, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(q2, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function tC(e) {
  var t = at(), n = t.classNames, r = t.styles;
  return d.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function nC(e) {
  var t, n, r = e.initialProps, o = at(), a = Sd(), s = gs(), i = X(!1), c = i[0], l = i[1];
  ee(function() {
    o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), l(!0)));
  }, [
    o.initialFocus,
    c,
    a.focus,
    a.focusTarget,
    a
  ]);
  var u = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && u.push(o.classNames.multiple_months), o.showWeekNumber && u.push(o.classNames.with_weeknumber);
  var f = je(je({}, o.styles.root), o.style), p = Object.keys(r).filter(function(m) {
    return m.startsWith("data-");
  }).reduce(function(m, v) {
    var g;
    return je(je({}, m), (g = {}, g[v] = r[v], g));
  }, {}), h = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : tC;
  return d.jsx("div", je({ className: u.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: d.jsx(h, { children: s.displayMonths.map(function(m, v) {
    return d.jsx(eC, { displayIndex: v, displayMonth: m }, v);
  }) }) }));
}
function rC(e) {
  var t = e.children, n = E_(e, ["children"]);
  return d.jsx(K_, { initialProps: n, children: d.jsx(n2, { children: d.jsx(I2, { initialProps: n, children: d.jsx(f2, { initialProps: n, children: d.jsx(m2, { initialProps: n, children: d.jsx(_2, { children: d.jsx(A2, { children: t }) }) }) }) }) }) });
}
function oC(e) {
  return d.jsx(rC, je({}, e, { children: d.jsx(nC, { initialProps: e }) }));
}
function aC({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    oC,
    {
      showOutsideDays: n,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          xr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: T(
          xr({ variant: "ghost" }),
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
        IconLeft: ({ ...o }) => /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ d.jsx(jr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
aC.displayName = "Calendar";
function sC(e, t) {
  const n = /* @__PURE__ */ Wt(t);
  function r(a) {
    const { children: s, ...i } = a, c = Zt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ w(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = lt(n);
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
function ut(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ Wt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(f) {
      const { scope: p, children: h, ...m } = f, v = (p == null ? void 0 : p[e][c]) || i, g = Zt(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ w(v.Provider, {
        value: g
      }, h);
    }
    function u(f, p) {
      const h = (p == null ? void 0 : p[e][c]) || i, m = lt(h);
      if (m)
        return m;
      if (s !== void 0)
        return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ Wt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return Zt(
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
    iC(o, ...t)
  ];
}
function iC(...e) {
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
        const f = c(a)[`__scope${l}`];
        return {
          ...i,
          ...f
        };
      }, {});
      return Zt(
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
function Je(e) {
  const t = Z(e);
  return ee(() => {
    t.current = e;
  }), Zt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const St = globalThis != null && globalThis.document ? fs : () => {
}, cC = [
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
], pe = cC.reduce((e, t) => {
  const n = /* @__PURE__ */ L((r, o) => {
    const { asChild: a, ...s } = r, i = a ? gn : t;
    return ee(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ w(i, O({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function $i(e, t) {
  e && cv(
    () => e.dispatchEvent(t)
  );
}
const zv = "Avatar", [lC, oY] = ut(zv), [uC, Wv] = lC(zv), dC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = X("idle");
  return /* @__PURE__ */ w(uC, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ w(pe.span, O({}, r, {
    ref: t
  })));
}), fC = "AvatarImage", pC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = Wv(fC, n), i = vC(r), c = Je((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return St(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ w(pe.img, O({}, a, {
    ref: t,
    src: r
  })) : null;
}), hC = "AvatarFallback", mC = /* @__PURE__ */ L((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Wv(hC, n), [s, i] = X(r === void 0);
  return ee(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ w(pe.span, O({}, o, {
    ref: t
  })) : null;
});
function vC(e) {
  const [t, n] = X("idle");
  return St(() => {
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
const Hv = dC, Uv = pC, Kv = mC, To = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Hv,
  {
    ref: n,
    className: T(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
To.displayName = Hv.displayName;
const Gr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Uv,
  {
    ref: n,
    className: T("aspect-square h-full w-full", e),
    ...t
  }
));
Gr.displayName = Uv.displayName;
const jo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Kv,
  {
    ref: n,
    className: T(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
jo.displayName = Kv.displayName;
const gC = Go(
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
function At({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ d.jsx("div", { className: T(gC({ variant: t }), e), ...n });
}
var bC = Array.isArray, Sn = bC, yC = typeof mt == "object" && mt && mt.Object === Object && mt, Gv = yC, xC = Gv, wC = typeof self == "object" && self && self.Object === Object && self, $C = xC || wC || Function("return this")(), Vn = $C, _C = Vn, CC = _C.Symbol, bs = CC, Ap = bs, Yv = Object.prototype, SC = Yv.hasOwnProperty, NC = Yv.toString, ba = Ap ? Ap.toStringTag : void 0;
function EC(e) {
  var t = SC.call(e, ba), n = e[ba];
  try {
    e[ba] = void 0;
    var r = !0;
  } catch {
  }
  var o = NC.call(e);
  return r && (t ? e[ba] = n : delete e[ba]), o;
}
var PC = EC, OC = Object.prototype, TC = OC.toString;
function jC(e) {
  return TC.call(e);
}
var MC = jC, Rp = bs, kC = PC, DC = MC, AC = "[object Null]", RC = "[object Undefined]", Ip = Rp ? Rp.toStringTag : void 0;
function IC(e) {
  return e == null ? e === void 0 ? RC : AC : Ip && Ip in Object(e) ? kC(e) : DC(e);
}
var io = IC;
function LC(e) {
  return e != null && typeof e == "object";
}
var co = LC, FC = io, BC = co, VC = "[object Symbol]";
function zC(e) {
  return typeof e == "symbol" || BC(e) && FC(e) == VC;
}
var ys = zC, WC = Sn, HC = ys, UC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, KC = /^\w*$/;
function GC(e, t) {
  if (WC(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || HC(e) ? !0 : KC.test(e) || !UC.test(e) || t != null && e in Object(t);
}
var Ed = GC;
function YC(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Mr = YC;
const qv = /* @__PURE__ */ Cn(Mr);
var qC = io, ZC = Mr, XC = "[object AsyncFunction]", QC = "[object Function]", JC = "[object GeneratorFunction]", eS = "[object Proxy]";
function tS(e) {
  if (!ZC(e))
    return !1;
  var t = qC(e);
  return t == QC || t == JC || t == XC || t == eS;
}
var Pd = tS;
const _i = /* @__PURE__ */ Cn(Pd);
var nS = Vn, rS = nS["__core-js_shared__"], oS = rS, ml = oS, Lp = function() {
  var e = /[^.]+$/.exec(ml && ml.keys && ml.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function aS(e) {
  return !!Lp && Lp in e;
}
var sS = aS, iS = Function.prototype, cS = iS.toString;
function lS(e) {
  if (e != null) {
    try {
      return cS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Zv = lS, uS = Pd, dS = sS, fS = Mr, pS = Zv, hS = /[\\^$.*+?()[\]{}|]/g, mS = /^\[object .+?Constructor\]$/, vS = Function.prototype, gS = Object.prototype, bS = vS.toString, yS = gS.hasOwnProperty, xS = RegExp(
  "^" + bS.call(yS).replace(hS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wS(e) {
  if (!fS(e) || dS(e))
    return !1;
  var t = uS(e) ? xS : mS;
  return t.test(pS(e));
}
var $S = wS;
function _S(e, t) {
  return e == null ? void 0 : e[t];
}
var CS = _S, SS = $S, NS = CS;
function ES(e, t) {
  var n = NS(e, t);
  return SS(n) ? n : void 0;
}
var lo = ES, PS = lo, OS = PS(Object, "create"), fc = OS, Fp = fc;
function TS() {
  this.__data__ = Fp ? Fp(null) : {}, this.size = 0;
}
var jS = TS;
function MS(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var kS = MS, DS = fc, AS = "__lodash_hash_undefined__", RS = Object.prototype, IS = RS.hasOwnProperty;
function LS(e) {
  var t = this.__data__;
  if (DS) {
    var n = t[e];
    return n === AS ? void 0 : n;
  }
  return IS.call(t, e) ? t[e] : void 0;
}
var FS = LS, BS = fc, VS = Object.prototype, zS = VS.hasOwnProperty;
function WS(e) {
  var t = this.__data__;
  return BS ? t[e] !== void 0 : zS.call(t, e);
}
var HS = WS, US = fc, KS = "__lodash_hash_undefined__";
function GS(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = US && t === void 0 ? KS : t, this;
}
var YS = GS, qS = jS, ZS = kS, XS = FS, QS = HS, JS = YS;
function qo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qo.prototype.clear = qS;
qo.prototype.delete = ZS;
qo.prototype.get = XS;
qo.prototype.has = QS;
qo.prototype.set = JS;
var eN = qo;
function tN() {
  this.__data__ = [], this.size = 0;
}
var nN = tN;
function rN(e, t) {
  return e === t || e !== e && t !== t;
}
var Od = rN, oN = Od;
function aN(e, t) {
  for (var n = e.length; n--; )
    if (oN(e[n][0], t))
      return n;
  return -1;
}
var pc = aN, sN = pc, iN = Array.prototype, cN = iN.splice;
function lN(e) {
  var t = this.__data__, n = sN(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : cN.call(t, n, 1), --this.size, !0;
}
var uN = lN, dN = pc;
function fN(e) {
  var t = this.__data__, n = dN(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var pN = fN, hN = pc;
function mN(e) {
  return hN(this.__data__, e) > -1;
}
var vN = mN, gN = pc;
function bN(e, t) {
  var n = this.__data__, r = gN(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var yN = bN, xN = nN, wN = uN, $N = pN, _N = vN, CN = yN;
function Zo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Zo.prototype.clear = xN;
Zo.prototype.delete = wN;
Zo.prototype.get = $N;
Zo.prototype.has = _N;
Zo.prototype.set = CN;
var hc = Zo, SN = lo, NN = Vn, EN = SN(NN, "Map"), Td = EN, Bp = eN, PN = hc, ON = Td;
function TN() {
  this.size = 0, this.__data__ = {
    hash: new Bp(),
    map: new (ON || PN)(),
    string: new Bp()
  };
}
var jN = TN;
function MN(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var kN = MN, DN = kN;
function AN(e, t) {
  var n = e.__data__;
  return DN(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var mc = AN, RN = mc;
function IN(e) {
  var t = RN(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var LN = IN, FN = mc;
function BN(e) {
  return FN(this, e).get(e);
}
var VN = BN, zN = mc;
function WN(e) {
  return zN(this, e).has(e);
}
var HN = WN, UN = mc;
function KN(e, t) {
  var n = UN(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var GN = KN, YN = jN, qN = LN, ZN = VN, XN = HN, QN = GN;
function Xo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Xo.prototype.clear = YN;
Xo.prototype.delete = qN;
Xo.prototype.get = ZN;
Xo.prototype.has = XN;
Xo.prototype.set = QN;
var jd = Xo, Xv = jd, JN = "Expected a function";
function Md(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(JN);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Md.Cache || Xv)(), n;
}
Md.Cache = Xv;
var eE = Md, tE = eE, nE = 500;
function rE(e) {
  var t = tE(e, function(r) {
    return n.size === nE && n.clear(), r;
  }), n = t.cache;
  return t;
}
var oE = rE, aE = oE, sE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, iE = /\\(\\)?/g, cE = aE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sE, function(n, r, o, a) {
    t.push(o ? a.replace(iE, "$1") : r || n);
  }), t;
}), lE = cE;
function uE(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Qv = uE, Vp = bs, dE = Qv, fE = Sn, pE = ys, hE = 1 / 0, zp = Vp ? Vp.prototype : void 0, Wp = zp ? zp.toString : void 0;
function Jv(e) {
  if (typeof e == "string")
    return e;
  if (fE(e))
    return dE(e, Jv) + "";
  if (pE(e))
    return Wp ? Wp.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hE ? "-0" : t;
}
var mE = Jv, vE = mE;
function gE(e) {
  return e == null ? "" : vE(e);
}
var eg = gE, bE = Sn, yE = Ed, xE = lE, wE = eg;
function $E(e, t) {
  return bE(e) ? e : yE(e, t) ? [e] : xE(wE(e));
}
var tg = $E, _E = ys, CE = 1 / 0;
function SE(e) {
  if (typeof e == "string" || _E(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -CE ? "-0" : t;
}
var vc = SE, NE = tg, EE = vc;
function PE(e, t) {
  t = NE(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[EE(t[n++])];
  return n && n == r ? e : void 0;
}
var kd = PE, OE = kd;
function TE(e, t, n) {
  var r = e == null ? void 0 : OE(e, t);
  return r === void 0 ? n : r;
}
var jE = TE;
function ME(e) {
  return e == null;
}
var kE = ME;
const DE = /* @__PURE__ */ Cn(kE);
var AE = io, RE = Sn, IE = co, LE = "[object String]";
function FE(e) {
  return typeof e == "string" || !RE(e) && IE(e) && AE(e) == LE;
}
var BE = FE;
const ng = /* @__PURE__ */ Cn(BE);
var Ye = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hp;
function VE() {
  if (Hp)
    return Ye;
  Hp = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), i = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function v(g) {
    if (typeof g == "object" && g !== null) {
      var b = g.$$typeof;
      switch (b) {
        case e:
          switch (g = g.type, g) {
            case n:
            case o:
            case r:
            case l:
            case u:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case i:
                case s:
                case c:
                case p:
                case f:
                case a:
                  return g;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return Ye.ContextConsumer = s, Ye.ContextProvider = a, Ye.Element = e, Ye.ForwardRef = c, Ye.Fragment = n, Ye.Lazy = p, Ye.Memo = f, Ye.Portal = t, Ye.Profiler = o, Ye.StrictMode = r, Ye.Suspense = l, Ye.SuspenseList = u, Ye.isAsyncMode = function() {
    return !1;
  }, Ye.isConcurrentMode = function() {
    return !1;
  }, Ye.isContextConsumer = function(g) {
    return v(g) === s;
  }, Ye.isContextProvider = function(g) {
    return v(g) === a;
  }, Ye.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Ye.isForwardRef = function(g) {
    return v(g) === c;
  }, Ye.isFragment = function(g) {
    return v(g) === n;
  }, Ye.isLazy = function(g) {
    return v(g) === p;
  }, Ye.isMemo = function(g) {
    return v(g) === f;
  }, Ye.isPortal = function(g) {
    return v(g) === t;
  }, Ye.isProfiler = function(g) {
    return v(g) === o;
  }, Ye.isStrictMode = function(g) {
    return v(g) === r;
  }, Ye.isSuspense = function(g) {
    return v(g) === l;
  }, Ye.isSuspenseList = function(g) {
    return v(g) === u;
  }, Ye.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === o || g === r || g === l || g === u || g === h || typeof g == "object" && g !== null && (g.$$typeof === p || g.$$typeof === f || g.$$typeof === a || g.$$typeof === s || g.$$typeof === c || g.$$typeof === m || g.getModuleId !== void 0);
  }, Ye.typeOf = v, Ye;
}
var qe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Up;
function zE() {
  return Up || (Up = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), i = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, v = !1, g = !1, b = !1, y = !1, x;
    x = Symbol.for("react.module.reference");
    function _(ne) {
      return !!(typeof ne == "string" || typeof ne == "function" || ne === n || ne === o || y || ne === r || ne === l || ne === u || b || ne === h || m || v || g || typeof ne == "object" && ne !== null && (ne.$$typeof === p || ne.$$typeof === f || ne.$$typeof === a || ne.$$typeof === s || ne.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      ne.$$typeof === x || ne.getModuleId !== void 0));
    }
    function $(ne) {
      if (typeof ne == "object" && ne !== null) {
        var Ee = ne.$$typeof;
        switch (Ee) {
          case e:
            var De = ne.type;
            switch (De) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return De;
              default:
                var Oe = De && De.$$typeof;
                switch (Oe) {
                  case i:
                  case s:
                  case c:
                  case p:
                  case f:
                  case a:
                    return Oe;
                  default:
                    return Ee;
                }
            }
          case t:
            return Ee;
        }
      }
    }
    var N = s, S = a, M = e, E = c, V = n, G = p, B = f, U = t, R = o, k = r, W = l, D = u, z = !1, Y = !1;
    function H(ne) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(ne) {
      return Y || (Y = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(ne) {
      return $(ne) === s;
    }
    function re(ne) {
      return $(ne) === a;
    }
    function me(ne) {
      return typeof ne == "object" && ne !== null && ne.$$typeof === e;
    }
    function ae(ne) {
      return $(ne) === c;
    }
    function te(ne) {
      return $(ne) === n;
    }
    function ie(ne) {
      return $(ne) === p;
    }
    function ge(ne) {
      return $(ne) === f;
    }
    function _e(ne) {
      return $(ne) === t;
    }
    function ce(ne) {
      return $(ne) === o;
    }
    function he(ne) {
      return $(ne) === r;
    }
    function K(ne) {
      return $(ne) === l;
    }
    function se(ne) {
      return $(ne) === u;
    }
    qe.ContextConsumer = N, qe.ContextProvider = S, qe.Element = M, qe.ForwardRef = E, qe.Fragment = V, qe.Lazy = G, qe.Memo = B, qe.Portal = U, qe.Profiler = R, qe.StrictMode = k, qe.Suspense = W, qe.SuspenseList = D, qe.isAsyncMode = H, qe.isConcurrentMode = Q, qe.isContextConsumer = I, qe.isContextProvider = re, qe.isElement = me, qe.isForwardRef = ae, qe.isFragment = te, qe.isLazy = ie, qe.isMemo = ge, qe.isPortal = _e, qe.isProfiler = ce, qe.isStrictMode = he, qe.isSuspense = K, qe.isSuspenseList = se, qe.isValidElementType = _, qe.typeOf = $;
  }()), qe;
}
process.env.NODE_ENV === "production" ? VE() : zE();
var WE = io, HE = co, UE = "[object Number]";
function KE(e) {
  return typeof e == "number" || HE(e) && WE(e) == UE;
}
var rg = KE;
const GE = /* @__PURE__ */ Cn(rg);
var YE = rg;
function qE(e) {
  return YE(e) && e != +e;
}
var ZE = qE;
const XE = /* @__PURE__ */ Cn(ZE);
var Bs = function(t) {
  return ng(t) && t.indexOf("%") === t.length - 1;
}, cn = function(t) {
  return GE(t) && !XE(t);
}, Ci = function(t) {
  return cn(t) || ng(t);
};
function su(e) {
  "@babel/helpers - typeof";
  return su = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, su(e);
}
var QE = ["viewBox", "children"], JE = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Kp = ["points", "pathLength"], vl = {
  svg: QE,
  polygon: Kp,
  polyline: Kp
}, og = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], eP = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, tP = function(t, n, r) {
  if (!qv(t) || su(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var s = t[a];
    og.includes(a) && typeof s == "function" && (o || (o = {}), o[a] = eP(s, n, r));
  }), o;
}, nP = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, rP = function(t, n, r, o) {
  var a, s = (a = vl == null ? void 0 : vl[o]) !== null && a !== void 0 ? a : [];
  return !_i(t) && (o && s.includes(n) || JE.includes(n)) || og.includes(n);
}, ag = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Ta(t) && (o = t.props), !qv(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(s) {
    var i;
    rP((i = o) === null || i === void 0 ? void 0 : i[s], s, n, r) && (a[s] = o[s]);
  }), a;
}, oP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function iu() {
  return iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, iu.apply(this, arguments);
}
function aP(e, t) {
  if (e == null)
    return {};
  var n = sP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sP(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
function iP(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, s = e.style, i = e.title, c = e.desc, l = aP(e, oP), u = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, f = yr("recharts-surface", a);
  return /* @__PURE__ */ A.createElement("svg", iu({}, ag(l, !0, "svg"), {
    className: f,
    width: n,
    height: r,
    style: s,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ A.createElement("title", null, i), /* @__PURE__ */ A.createElement("desc", null, c), t);
}
var cP = process.env.NODE_ENV !== "production", ci = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (cP && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[s++];
      }));
    }
};
function lP(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var uP = lP, dP = uP;
function fP(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : dP(e, t, n);
}
var pP = fP, hP = "\\ud800-\\udfff", mP = "\\u0300-\\u036f", vP = "\\ufe20-\\ufe2f", gP = "\\u20d0-\\u20ff", bP = mP + vP + gP, yP = "\\ufe0e\\ufe0f", xP = "\\u200d", wP = RegExp("[" + xP + hP + bP + yP + "]");
function $P(e) {
  return wP.test(e);
}
var sg = $P;
function _P(e) {
  return e.split("");
}
var CP = _P, ig = "\\ud800-\\udfff", SP = "\\u0300-\\u036f", NP = "\\ufe20-\\ufe2f", EP = "\\u20d0-\\u20ff", PP = SP + NP + EP, OP = "\\ufe0e\\ufe0f", TP = "[" + ig + "]", cu = "[" + PP + "]", lu = "\\ud83c[\\udffb-\\udfff]", jP = "(?:" + cu + "|" + lu + ")", cg = "[^" + ig + "]", lg = "(?:\\ud83c[\\udde6-\\uddff]){2}", ug = "[\\ud800-\\udbff][\\udc00-\\udfff]", MP = "\\u200d", dg = jP + "?", fg = "[" + OP + "]?", kP = "(?:" + MP + "(?:" + [cg, lg, ug].join("|") + ")" + fg + dg + ")*", DP = fg + dg + kP, AP = "(?:" + [cg + cu + "?", cu, lg, ug, TP].join("|") + ")", RP = RegExp(lu + "(?=" + lu + ")|" + AP + DP, "g");
function IP(e) {
  return e.match(RP) || [];
}
var LP = IP, FP = CP, BP = sg, VP = LP;
function zP(e) {
  return BP(e) ? VP(e) : FP(e);
}
var WP = zP, HP = pP, UP = sg, KP = WP, GP = eg;
function YP(e) {
  return function(t) {
    t = GP(t);
    var n = UP(t) ? KP(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? HP(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var qP = YP, ZP = qP, XP = ZP("toUpperCase"), QP = XP;
const pg = /* @__PURE__ */ Cn(QP);
function Vs(e) {
  return function() {
    return e;
  };
}
const hg = Math.cos, Si = Math.sin, Nn = Math.sqrt, Ni = Math.PI, gc = 2 * Ni, uu = Math.PI, du = 2 * uu, Vr = 1e-6, JP = du - Vr;
function mg(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function eO(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return mg;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class tO {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? mg : eO(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, r, o) {
    this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, r, o, a, s) {
    this._append`C${+t},${+n},${+r},${+o},${this._x1 = +a},${this._y1 = +s}`;
  }
  arcTo(t, n, r, o, a) {
    if (t = +t, n = +n, r = +r, o = +o, a = +a, a < 0)
      throw new Error(`negative radius: ${a}`);
    let s = this._x1, i = this._y1, c = r - t, l = o - n, u = s - t, f = i - n, p = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (p > Vr)
      if (!(Math.abs(f * c - l * u) > Vr) || !a)
        this._append`L${this._x1 = t},${this._y1 = n}`;
      else {
        let h = r - s, m = o - i, v = c * c + l * l, g = h * h + m * m, b = Math.sqrt(v), y = Math.sqrt(p), x = a * Math.tan((uu - Math.acos((v + p - g) / (2 * b * y))) / 2), _ = x / y, $ = x / b;
        Math.abs(_ - 1) > Vr && this._append`L${t + _ * u},${n + _ * f}`, this._append`A${a},${a},0,0,${+(f * h > u * m)},${this._x1 = t + $ * c},${this._y1 = n + $ * l}`;
      }
  }
  arc(t, n, r, o, a, s) {
    if (t = +t, n = +n, r = +r, s = !!s, r < 0)
      throw new Error(`negative radius: ${r}`);
    let i = r * Math.cos(o), c = r * Math.sin(o), l = t + i, u = n + c, f = 1 ^ s, p = s ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${u}` : (Math.abs(this._x1 - l) > Vr || Math.abs(this._y1 - u) > Vr) && this._append`L${l},${u}`, r && (p < 0 && (p = p % du + du), p > JP ? this._append`A${r},${r},0,1,${f},${t - i},${n - c}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = u}` : p > Vr && this._append`A${r},${r},0,${+(p >= uu)},${f},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function nO(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length)
      return t;
    if (n == null)
      t = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0))
        throw new RangeError(`invalid digits: ${n}`);
      t = r;
    }
    return e;
  }, () => new tO(t);
}
const Dd = {
  draw(e, t) {
    const n = Nn(t / Ni);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, gc);
  }
}, rO = {
  draw(e, t) {
    const n = Nn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, vg = Nn(1 / 3), oO = vg * 2, aO = {
  draw(e, t) {
    const n = Nn(t / oO), r = n * vg;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, sO = {
  draw(e, t) {
    const n = Nn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, iO = 0.8908130915292852, gg = Si(Ni / 10) / Si(7 * Ni / 10), cO = Si(gc / 10) * gg, lO = -hg(gc / 10) * gg, uO = {
  draw(e, t) {
    const n = Nn(t * iO), r = cO * n, o = lO * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const s = gc * a / 5, i = hg(s), c = Si(s);
      e.lineTo(c * n, -i * n), e.lineTo(i * r - c * o, c * r + i * o);
    }
    e.closePath();
  }
}, gl = Nn(3), dO = {
  draw(e, t) {
    const n = -Nn(t / (gl * 3));
    e.moveTo(0, n * 2), e.lineTo(-gl * n, -n), e.lineTo(gl * n, -n), e.closePath();
  }
}, en = -0.5, tn = Nn(3) / 2, fu = 1 / Nn(12), fO = (fu / 2 + 1) * 3, pO = {
  draw(e, t) {
    const n = Nn(t / fO), r = n / 2, o = n * fu, a = r, s = n * fu + n, i = -a, c = s;
    e.moveTo(r, o), e.lineTo(a, s), e.lineTo(i, c), e.lineTo(en * r - tn * o, tn * r + en * o), e.lineTo(en * a - tn * s, tn * a + en * s), e.lineTo(en * i - tn * c, tn * i + en * c), e.lineTo(en * r + tn * o, en * o - tn * r), e.lineTo(en * a + tn * s, en * s - tn * a), e.lineTo(en * i + tn * c, en * c - tn * i), e.closePath();
  }
};
function hO(e, t) {
  let n = null, r = nO(o);
  e = typeof e == "function" ? e : Vs(e || Dd), t = typeof t == "function" ? t : Vs(t === void 0 ? 64 : +t);
  function o() {
    let a;
    if (n || (n = a = r()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), a)
      return n = null, a + "" || null;
  }
  return o.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Vs(a), o) : e;
  }, o.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Vs(+a), o) : t;
  }, o.context = function(a) {
    return arguments.length ? (n = a ?? null, o) : n;
  }, o;
}
function ka(e) {
  "@babel/helpers - typeof";
  return ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ka(e);
}
var mO = ["type", "size", "sizeType"];
function pu() {
  return pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pu.apply(this, arguments);
}
function Gp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gp(Object(n), !0).forEach(function(r) {
      vO(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vO(e, t, n) {
  return t = gO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gO(e) {
  var t = bO(e, "string");
  return ka(t) == "symbol" ? t : t + "";
}
function bO(e, t) {
  if (ka(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ka(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yO(e, t) {
  if (e == null)
    return {};
  var n = xO(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function xO(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
var bg = {
  symbolCircle: Dd,
  symbolCross: rO,
  symbolDiamond: aO,
  symbolSquare: sO,
  symbolStar: uO,
  symbolTriangle: dO,
  symbolWye: pO
}, wO = Math.PI / 180, $O = function(t) {
  var n = "symbol".concat(pg(t));
  return bg[n] || Dd;
}, _O = function(t, n, r) {
  if (n === "area")
    return t;
  switch (r) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var o = 18 * wO;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, CO = function(t, n) {
  bg["symbol".concat(pg(t))] = n;
}, yg = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, s = t.sizeType, i = s === void 0 ? "area" : s, c = yO(t, mO), l = Yp(Yp({}, c), {}, {
    type: r,
    size: a,
    sizeType: i
  }), u = function() {
    var g = $O(r), b = hO().type(g).size(_O(a, i, r));
    return b();
  }, f = l.className, p = l.cx, h = l.cy, m = ag(l, !0);
  return p === +p && h === +h && a === +a ? /* @__PURE__ */ A.createElement("path", pu({}, m, {
    className: yr("recharts-symbols", f),
    transform: "translate(".concat(p, ", ").concat(h, ")"),
    d: u()
  })) : null;
};
yg.registerSymbol = CO;
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e);
}
function hu() {
  return hu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hu.apply(this, arguments);
}
function qp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function SO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qp(Object(n), !0).forEach(function(r) {
      Da(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function NO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EO(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, wg(r.key), r);
  }
}
function PO(e, t, n) {
  return t && EO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function OO(e, t, n) {
  return t = Ei(t), TO(e, xg() ? Reflect.construct(t, n || [], Ei(e).constructor) : t.apply(e, n));
}
function TO(e, t) {
  if (t && (Ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jO(e);
}
function jO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xg = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(e);
}
function MO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mu(e, t);
}
function mu(e, t) {
  return mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, mu(e, t);
}
function Da(e, t, n) {
  return t = wg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wg(e) {
  var t = kO(e, "string");
  return Ro(t) == "symbol" ? t : t + "";
}
function kO(e, t) {
  if (Ro(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ro(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nn = 32, Ad = /* @__PURE__ */ function(e) {
  function t() {
    return NO(this, t), OO(this, t, arguments);
  }
  return MO(t, e), PO(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, a = nn / 2, s = nn / 6, i = nn / 3, c = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ A.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: nn,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ A.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(i, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * i, ",").concat(a, `
            H`).concat(nn, "M").concat(2 * i, ",").concat(a, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(i, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ A.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(nn / 8, "h").concat(nn, "v").concat(nn * 3 / 4, "h").concat(-nn, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ A.isValidElement(r.legendIcon)) {
          var l = SO({}, r);
          return delete l.legendIcon, /* @__PURE__ */ A.cloneElement(r.legendIcon, l);
        }
        return /* @__PURE__ */ A.createElement(yg, {
          fill: c,
          cx: a,
          cy: a,
          size: nn,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, a = o.payload, s = o.iconSize, i = o.layout, c = o.formatter, l = o.inactiveColor, u = {
        x: 0,
        y: 0,
        width: nn,
        height: nn
      }, f = {
        display: i === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, m) {
        var v = h.formatter || c, g = yr(Da(Da({
          "recharts-legend-item": !0
        }, "legend-item-".concat(m), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var b = _i(h.value) ? null : h.value;
        ci(
          !_i(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var y = h.inactive ? l : h.color;
        return /* @__PURE__ */ A.createElement("li", hu({
          className: g,
          style: f,
          key: "legend-item-".concat(m)
        }, tP(r.props, h, m)), /* @__PURE__ */ A.createElement(iP, {
          width: s,
          height: s,
          viewBox: u,
          style: p
        }, r.renderIcon(h)), /* @__PURE__ */ A.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: y
          }
        }, v ? v(b, h, m) : b));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, a = r.layout, s = r.align;
      if (!o || !o.length)
        return null;
      var i = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? s : "left"
      };
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-default-legend",
        style: i
      }, this.renderItems());
    }
  }]);
}(ic);
Da(Ad, "displayName", "Legend");
Da(Ad, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var DO = hc;
function AO() {
  this.__data__ = new DO(), this.size = 0;
}
var RO = AO;
function IO(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var LO = IO;
function FO(e) {
  return this.__data__.get(e);
}
var BO = FO;
function VO(e) {
  return this.__data__.has(e);
}
var zO = VO, WO = hc, HO = Td, UO = jd, KO = 200;
function GO(e, t) {
  var n = this.__data__;
  if (n instanceof WO) {
    var r = n.__data__;
    if (!HO || r.length < KO - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new UO(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var YO = GO, qO = hc, ZO = RO, XO = LO, QO = BO, JO = zO, eT = YO;
function Qo(e) {
  var t = this.__data__ = new qO(e);
  this.size = t.size;
}
Qo.prototype.clear = ZO;
Qo.prototype.delete = XO;
Qo.prototype.get = QO;
Qo.prototype.has = JO;
Qo.prototype.set = eT;
var $g = Qo, tT = "__lodash_hash_undefined__";
function nT(e) {
  return this.__data__.set(e, tT), this;
}
var rT = nT;
function oT(e) {
  return this.__data__.has(e);
}
var aT = oT, sT = jd, iT = rT, cT = aT;
function Pi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new sT(); ++t < n; )
    this.add(e[t]);
}
Pi.prototype.add = Pi.prototype.push = iT;
Pi.prototype.has = cT;
var _g = Pi;
function lT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var uT = lT;
function dT(e, t) {
  return e.has(t);
}
var Cg = dT, fT = _g, pT = uT, hT = Cg, mT = 1, vT = 2;
function gT(e, t, n, r, o, a) {
  var s = n & mT, i = e.length, c = t.length;
  if (i != c && !(s && c > i))
    return !1;
  var l = a.get(e), u = a.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, p = !0, h = n & vT ? new fT() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var m = e[f], v = t[f];
    if (r)
      var g = s ? r(v, m, f, t, e, a) : r(m, v, f, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      p = !1;
      break;
    }
    if (h) {
      if (!pT(t, function(b, y) {
        if (!hT(h, y) && (m === b || o(m, b, n, r, a)))
          return h.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === v || o(m, v, n, r, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
var Sg = gT, bT = Vn, yT = bT.Uint8Array, xT = yT;
function wT(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var $T = wT;
function _T(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Rd = _T, Zp = bs, Xp = xT, CT = Od, ST = Sg, NT = $T, ET = Rd, PT = 1, OT = 2, TT = "[object Boolean]", jT = "[object Date]", MT = "[object Error]", kT = "[object Map]", DT = "[object Number]", AT = "[object RegExp]", RT = "[object Set]", IT = "[object String]", LT = "[object Symbol]", FT = "[object ArrayBuffer]", BT = "[object DataView]", Qp = Zp ? Zp.prototype : void 0, bl = Qp ? Qp.valueOf : void 0;
function VT(e, t, n, r, o, a, s) {
  switch (n) {
    case BT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case FT:
      return !(e.byteLength != t.byteLength || !a(new Xp(e), new Xp(t)));
    case TT:
    case jT:
    case DT:
      return CT(+e, +t);
    case MT:
      return e.name == t.name && e.message == t.message;
    case AT:
    case IT:
      return e == t + "";
    case kT:
      var i = NT;
    case RT:
      var c = r & PT;
      if (i || (i = ET), e.size != t.size && !c)
        return !1;
      var l = s.get(e);
      if (l)
        return l == t;
      r |= OT, s.set(e, t);
      var u = ST(i(e), i(t), r, o, a, s);
      return s.delete(e), u;
    case LT:
      if (bl)
        return bl.call(e) == bl.call(t);
  }
  return !1;
}
var zT = VT;
function WT(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ng = WT, HT = Ng, UT = Sn;
function KT(e, t, n) {
  var r = t(e);
  return UT(e) ? r : HT(r, n(e));
}
var GT = KT;
function YT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
var qT = YT;
function ZT() {
  return [];
}
var XT = ZT, QT = qT, JT = XT, ej = Object.prototype, tj = ej.propertyIsEnumerable, Jp = Object.getOwnPropertySymbols, nj = Jp ? function(e) {
  return e == null ? [] : (e = Object(e), QT(Jp(e), function(t) {
    return tj.call(e, t);
  }));
} : JT, rj = nj;
function oj(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var aj = oj, sj = io, ij = co, cj = "[object Arguments]";
function lj(e) {
  return ij(e) && sj(e) == cj;
}
var uj = lj, eh = uj, dj = co, Eg = Object.prototype, fj = Eg.hasOwnProperty, pj = Eg.propertyIsEnumerable, hj = eh(/* @__PURE__ */ function() {
  return arguments;
}()) ? eh : function(e) {
  return dj(e) && fj.call(e, "callee") && !pj.call(e, "callee");
}, Id = hj, Oi = { exports: {} };
function mj() {
  return !1;
}
var vj = mj;
Oi.exports;
(function(e, t) {
  var n = Vn, r = vj, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? n.Buffer : void 0, c = i ? i.isBuffer : void 0, l = c || r;
  e.exports = l;
})(Oi, Oi.exports);
var Pg = Oi.exports, gj = 9007199254740991, bj = /^(?:0|[1-9]\d*)$/;
function yj(e, t) {
  var n = typeof e;
  return t = t ?? gj, !!t && (n == "number" || n != "symbol" && bj.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Ld = yj, xj = 9007199254740991;
function wj(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xj;
}
var Fd = wj, $j = io, _j = Fd, Cj = co, Sj = "[object Arguments]", Nj = "[object Array]", Ej = "[object Boolean]", Pj = "[object Date]", Oj = "[object Error]", Tj = "[object Function]", jj = "[object Map]", Mj = "[object Number]", kj = "[object Object]", Dj = "[object RegExp]", Aj = "[object Set]", Rj = "[object String]", Ij = "[object WeakMap]", Lj = "[object ArrayBuffer]", Fj = "[object DataView]", Bj = "[object Float32Array]", Vj = "[object Float64Array]", zj = "[object Int8Array]", Wj = "[object Int16Array]", Hj = "[object Int32Array]", Uj = "[object Uint8Array]", Kj = "[object Uint8ClampedArray]", Gj = "[object Uint16Array]", Yj = "[object Uint32Array]", ct = {};
ct[Bj] = ct[Vj] = ct[zj] = ct[Wj] = ct[Hj] = ct[Uj] = ct[Kj] = ct[Gj] = ct[Yj] = !0;
ct[Sj] = ct[Nj] = ct[Lj] = ct[Ej] = ct[Fj] = ct[Pj] = ct[Oj] = ct[Tj] = ct[jj] = ct[Mj] = ct[kj] = ct[Dj] = ct[Aj] = ct[Rj] = ct[Ij] = !1;
function qj(e) {
  return Cj(e) && _j(e.length) && !!ct[$j(e)];
}
var Zj = qj;
function Xj(e) {
  return function(t) {
    return e(t);
  };
}
var Og = Xj, Ti = { exports: {} };
Ti.exports;
(function(e, t) {
  var n = Gv, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, s = a && n.process, i = function() {
    try {
      var c = o && o.require && o.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Ti, Ti.exports);
var Qj = Ti.exports, Jj = Zj, e5 = Og, th = Qj, nh = th && th.isTypedArray, t5 = nh ? e5(nh) : Jj, Tg = t5, n5 = aj, r5 = Id, o5 = Sn, a5 = Pg, s5 = Ld, i5 = Tg, c5 = Object.prototype, l5 = c5.hasOwnProperty;
function u5(e, t) {
  var n = o5(e), r = !n && r5(e), o = !n && !r && a5(e), a = !n && !r && !o && i5(e), s = n || r || o || a, i = s ? n5(e.length, String) : [], c = i.length;
  for (var l in e)
    (t || l5.call(e, l)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    s5(l, c))) && i.push(l);
  return i;
}
var d5 = u5, f5 = Object.prototype;
function p5(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || f5;
  return e === n;
}
var h5 = p5;
function m5(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var v5 = m5, g5 = v5, b5 = g5(Object.keys, Object), y5 = b5, x5 = h5, w5 = y5, $5 = Object.prototype, _5 = $5.hasOwnProperty;
function C5(e) {
  if (!x5(e))
    return w5(e);
  var t = [];
  for (var n in Object(e))
    _5.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var S5 = C5, N5 = Pd, E5 = Fd;
function P5(e) {
  return e != null && E5(e.length) && !N5(e);
}
var bc = P5, O5 = d5, T5 = S5, j5 = bc;
function M5(e) {
  return j5(e) ? O5(e) : T5(e);
}
var Bd = M5, k5 = GT, D5 = rj, A5 = Bd;
function R5(e) {
  return k5(e, A5, D5);
}
var I5 = R5, rh = I5, L5 = 1, F5 = Object.prototype, B5 = F5.hasOwnProperty;
function V5(e, t, n, r, o, a) {
  var s = n & L5, i = rh(e), c = i.length, l = rh(t), u = l.length;
  if (c != u && !s)
    return !1;
  for (var f = c; f--; ) {
    var p = i[f];
    if (!(s ? p in t : B5.call(t, p)))
      return !1;
  }
  var h = a.get(e), m = a.get(t);
  if (h && m)
    return h == t && m == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var g = s; ++f < c; ) {
    p = i[f];
    var b = e[p], y = t[p];
    if (r)
      var x = s ? r(y, b, p, t, e, a) : r(b, y, p, e, t, a);
    if (!(x === void 0 ? b === y || o(b, y, n, r, a) : x)) {
      v = !1;
      break;
    }
    g || (g = p == "constructor");
  }
  if (v && !g) {
    var _ = e.constructor, $ = t.constructor;
    _ != $ && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof $ == "function" && $ instanceof $) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var z5 = V5, W5 = lo, H5 = Vn, U5 = W5(H5, "DataView"), K5 = U5, G5 = lo, Y5 = Vn, q5 = G5(Y5, "Promise"), Z5 = q5, X5 = lo, Q5 = Vn, J5 = X5(Q5, "Set"), jg = J5, eM = lo, tM = Vn, nM = eM(tM, "WeakMap"), rM = nM, vu = K5, gu = Td, bu = Z5, yu = jg, xu = rM, Mg = io, Jo = Zv, oh = "[object Map]", oM = "[object Object]", ah = "[object Promise]", sh = "[object Set]", ih = "[object WeakMap]", ch = "[object DataView]", aM = Jo(vu), sM = Jo(gu), iM = Jo(bu), cM = Jo(yu), lM = Jo(xu), zr = Mg;
(vu && zr(new vu(new ArrayBuffer(1))) != ch || gu && zr(new gu()) != oh || bu && zr(bu.resolve()) != ah || yu && zr(new yu()) != sh || xu && zr(new xu()) != ih) && (zr = function(e) {
  var t = Mg(e), n = t == oM ? e.constructor : void 0, r = n ? Jo(n) : "";
  if (r)
    switch (r) {
      case aM:
        return ch;
      case sM:
        return oh;
      case iM:
        return ah;
      case cM:
        return sh;
      case lM:
        return ih;
    }
  return t;
});
var uM = zr, yl = $g, dM = Sg, fM = zT, pM = z5, lh = uM, uh = Sn, dh = Pg, hM = Tg, mM = 1, fh = "[object Arguments]", ph = "[object Array]", zs = "[object Object]", vM = Object.prototype, hh = vM.hasOwnProperty;
function gM(e, t, n, r, o, a) {
  var s = uh(e), i = uh(t), c = s ? ph : lh(e), l = i ? ph : lh(t);
  c = c == fh ? zs : c, l = l == fh ? zs : l;
  var u = c == zs, f = l == zs, p = c == l;
  if (p && dh(e)) {
    if (!dh(t))
      return !1;
    s = !0, u = !1;
  }
  if (p && !u)
    return a || (a = new yl()), s || hM(e) ? dM(e, t, n, r, o, a) : fM(e, t, c, n, r, o, a);
  if (!(n & mM)) {
    var h = u && hh.call(e, "__wrapped__"), m = f && hh.call(t, "__wrapped__");
    if (h || m) {
      var v = h ? e.value() : e, g = m ? t.value() : t;
      return a || (a = new yl()), o(v, g, n, r, a);
    }
  }
  return p ? (a || (a = new yl()), pM(e, t, n, r, o, a)) : !1;
}
var bM = gM, yM = bM, mh = co;
function kg(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !mh(e) && !mh(t) ? e !== e && t !== t : yM(e, t, n, r, kg, o);
}
var Dg = kg, xM = $g, wM = Dg, $M = 1, _M = 2;
function CM(e, t, n, r) {
  var o = n.length, a = o, s = !r;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var i = n[o];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    i = n[o];
    var c = i[0], l = e[c], u = i[1];
    if (s && i[2]) {
      if (l === void 0 && !(c in e))
        return !1;
    } else {
      var f = new xM();
      if (r)
        var p = r(l, u, c, e, t, f);
      if (!(p === void 0 ? wM(u, l, $M | _M, r, f) : p))
        return !1;
    }
  }
  return !0;
}
var SM = CM, NM = Mr;
function EM(e) {
  return e === e && !NM(e);
}
var Ag = EM, PM = Ag, OM = Bd;
function TM(e) {
  for (var t = OM(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, PM(o)];
  }
  return t;
}
var jM = TM;
function MM(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Rg = MM, kM = SM, DM = jM, AM = Rg;
function RM(e) {
  var t = DM(e);
  return t.length == 1 && t[0][2] ? AM(t[0][0], t[0][1]) : function(n) {
    return n === e || kM(n, e, t);
  };
}
var IM = RM;
function LM(e, t) {
  return e != null && t in Object(e);
}
var FM = LM, BM = tg, VM = Id, zM = Sn, WM = Ld, HM = Fd, UM = vc;
function KM(e, t, n) {
  t = BM(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = UM(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && HM(o) && WM(s, o) && (zM(e) || VM(e)));
}
var GM = KM, YM = FM, qM = GM;
function ZM(e, t) {
  return e != null && qM(e, t, YM);
}
var XM = ZM, QM = Dg, JM = jE, ek = XM, tk = Ed, nk = Ag, rk = Rg, ok = vc, ak = 1, sk = 2;
function ik(e, t) {
  return tk(e) && nk(t) ? rk(ok(e), t) : function(n) {
    var r = JM(n, e);
    return r === void 0 && r === t ? ek(n, e) : QM(t, r, ak | sk);
  };
}
var ck = ik;
function lk(e) {
  return e;
}
var yc = lk;
function uk(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var dk = uk, fk = kd;
function pk(e) {
  return function(t) {
    return fk(t, e);
  };
}
var hk = pk, mk = dk, vk = hk, gk = Ed, bk = vc;
function yk(e) {
  return gk(e) ? mk(bk(e)) : vk(e);
}
var xk = yk, wk = IM, $k = ck, _k = yc, Ck = Sn, Sk = xk;
function Nk(e) {
  return typeof e == "function" ? e : e == null ? _k : typeof e == "object" ? Ck(e) ? $k(e[0], e[1]) : wk(e) : Sk(e);
}
var Ig = Nk;
function Ek(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Pk = Ek;
function Ok(e) {
  return e !== e;
}
var Tk = Ok;
function jk(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var Mk = jk, kk = Pk, Dk = Tk, Ak = Mk;
function Rk(e, t, n) {
  return t === t ? Ak(e, t, n) : kk(e, Dk, n);
}
var Ik = Rk, Lk = Ik;
function Fk(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Lk(e, t, 0) > -1;
}
var Bk = Fk;
function Vk(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var zk = Vk;
function Wk() {
}
var Hk = Wk, xl = jg, Uk = Hk, Kk = Rd, Gk = 1 / 0, Yk = xl && 1 / Kk(new xl([, -0]))[1] == Gk ? function(e) {
  return new xl(e);
} : Uk, qk = Yk, Zk = _g, Xk = Bk, Qk = zk, Jk = Cg, e3 = qk, t3 = Rd, n3 = 200;
function r3(e, t, n) {
  var r = -1, o = Xk, a = e.length, s = !0, i = [], c = i;
  if (n)
    s = !1, o = Qk;
  else if (a >= n3) {
    var l = t ? null : e3(e);
    if (l)
      return t3(l);
    s = !1, o = Jk, c = new Zk();
  } else
    c = t ? [] : i;
  e:
    for (; ++r < a; ) {
      var u = e[r], f = t ? t(u) : u;
      if (u = n || u !== 0 ? u : 0, s && f === f) {
        for (var p = c.length; p--; )
          if (c[p] === f)
            continue e;
        t && c.push(f), i.push(u);
      } else
        o(c, f, n) || (c !== i && c.push(f), i.push(u));
    }
  return i;
}
var o3 = r3, a3 = Ig, s3 = o3;
function i3(e, t) {
  return e && e.length ? s3(e, a3(t)) : [];
}
var c3 = i3;
const vh = /* @__PURE__ */ Cn(c3);
function Lg(e, t, n) {
  return t === !0 ? vh(e, n) : _i(t) ? vh(e, t) : e;
}
function Io(e) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e);
}
var l3 = ["ref"];
function gh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gh(Object(n), !0).forEach(function(r) {
      xc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function u3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Bg(r.key), r);
  }
}
function d3(e, t, n) {
  return t && bh(e.prototype, t), n && bh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function f3(e, t, n) {
  return t = ji(t), p3(e, Fg() ? Reflect.construct(t, n || [], ji(e).constructor) : t.apply(e, n));
}
function p3(e, t) {
  if (t && (Io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return h3(e);
}
function h3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fg = function() {
    return !!e;
  })();
}
function ji(e) {
  return ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ji(e);
}
function m3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wu(e, t);
}
function wu(e, t) {
  return wu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, wu(e, t);
}
function xc(e, t, n) {
  return t = Bg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bg(e) {
  var t = v3(e, "string");
  return Io(t) == "symbol" ? t : t + "";
}
function v3(e, t) {
  if (Io(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Io(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g3(e, t) {
  if (e == null)
    return {};
  var n = b3(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function b3(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
function y3(e) {
  return e.value;
}
function x3(e, t) {
  if (/* @__PURE__ */ A.isValidElement(e))
    return /* @__PURE__ */ A.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ A.createElement(e, t);
  t.ref;
  var n = g3(t, l3);
  return /* @__PURE__ */ A.createElement(Ad, n);
}
var yh = 1, Vd = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    u3(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = f3(this, t, [].concat(o)), xc(n, "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return m3(t, e), d3(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        return r.height = this.wrapperNode.offsetHeight, r.width = this.wrapperNode.offsetWidth, r;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var r = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > yh || Math.abs(o.height - this.lastBoundingBox.height) > yh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Zn({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(r) {
      var o = this.props, a = o.layout, s = o.align, i = o.verticalAlign, c = o.margin, l = o.chartWidth, u = o.chartHeight, f, p;
      if (!r || (r.left === void 0 || r.left === null) && (r.right === void 0 || r.right === null))
        if (s === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((l || 0) - h.width) / 2
          };
        } else
          f = s === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!r || (r.top === void 0 || r.top === null) && (r.bottom === void 0 || r.bottom === null))
        if (i === "middle") {
          var m = this.getBBoxSnapshot();
          p = {
            top: ((u || 0) - m.height) / 2
          };
        } else
          p = i === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Zn(Zn({}, f), p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, s = o.width, i = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, u = o.payload, f = Zn(Zn({
        position: "absolute",
        width: s || "auto",
        height: i || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          r.wrapperNode = h;
        }
      }, x3(a, Zn(Zn({}, this.props), {}, {
        payload: Lg(u, l, y3)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = Zn(Zn({}, this.defaultProps), r.props), s = a.layout;
      return s === "vertical" && cn(r.props.height) ? {
        height: r.props.height
      } : s === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]);
}(ic);
xc(Vd, "displayName", "Legend");
xc(Vd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var xh = bs, w3 = Id, $3 = Sn, wh = xh ? xh.isConcatSpreadable : void 0;
function _3(e) {
  return $3(e) || w3(e) || !!(wh && e && e[wh]);
}
var C3 = _3, S3 = Ng, N3 = C3;
function Vg(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = N3), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? Vg(i, t - 1, n, r, o) : S3(o, i) : r || (o[o.length] = i);
  }
  return o;
}
var E3 = Vg;
function P3(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var c = s[e ? i : ++o];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var O3 = P3, T3 = O3, j3 = T3(), M3 = j3, k3 = M3, D3 = Bd;
function A3(e, t) {
  return e && k3(e, t, D3);
}
var R3 = A3, I3 = bc;
function L3(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!I3(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && r(s[a], a, s) !== !1; )
      ;
    return n;
  };
}
var F3 = L3, B3 = R3, V3 = F3, z3 = V3(B3), W3 = z3, H3 = W3, U3 = bc;
function K3(e, t) {
  var n = -1, r = U3(e) ? Array(e.length) : [];
  return H3(e, function(o, a, s) {
    r[++n] = t(o, a, s);
  }), r;
}
var G3 = K3;
function Y3(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var q3 = Y3, $h = ys;
function Z3(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = $h(e), s = t !== void 0, i = t === null, c = t === t, l = $h(t);
    if (!i && !l && !a && e > t || a && s && c && !i && !l || r && s && c || !n && c || !o)
      return 1;
    if (!r && !a && !l && e < t || l && n && o && !r && !a || i && n && o || !s && o || !c)
      return -1;
  }
  return 0;
}
var X3 = Z3, Q3 = X3;
function J3(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, s = o.length, i = n.length; ++r < s; ) {
    var c = Q3(o[r], a[r]);
    if (c) {
      if (r >= i)
        return c;
      var l = n[r];
      return c * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var eD = J3, wl = Qv, tD = kd, nD = Ig, rD = G3, oD = q3, aD = Og, sD = eD, iD = yc, cD = Sn;
function lD(e, t, n) {
  t.length ? t = wl(t, function(a) {
    return cD(a) ? function(s) {
      return tD(s, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [iD];
  var r = -1;
  t = wl(t, aD(nD));
  var o = rD(e, function(a, s, i) {
    var c = wl(t, function(l) {
      return l(a);
    });
    return { criteria: c, index: ++r, value: a };
  });
  return oD(o, function(a, s) {
    return sD(a, s, n);
  });
}
var uD = lD;
function dD(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var fD = dD, pD = fD, _h = Math.max;
function hD(e, t, n) {
  return t = _h(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = _h(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), pD(e, this, i);
  };
}
var mD = hD;
function vD(e) {
  return function() {
    return e;
  };
}
var gD = vD, bD = lo, yD = function() {
  try {
    var e = bD(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), xD = yD, wD = gD, Ch = xD, $D = yc, _D = Ch ? function(e, t) {
  return Ch(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wD(t),
    writable: !0
  });
} : $D, CD = _D, SD = 800, ND = 16, ED = Date.now;
function PD(e) {
  var t = 0, n = 0;
  return function() {
    var r = ED(), o = ND - (r - n);
    if (n = r, o > 0) {
      if (++t >= SD)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var OD = PD, TD = CD, jD = OD, MD = jD(TD), kD = MD, DD = yc, AD = mD, RD = kD;
function ID(e, t) {
  return RD(AD(e, t, DD), e + "");
}
var LD = ID, FD = Od, BD = bc, VD = Ld, zD = Mr;
function WD(e, t, n) {
  if (!zD(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? BD(n) && VD(t, n.length) : r == "string" && t in n) ? FD(n[t], e) : !1;
}
var HD = WD, UD = E3, KD = uD, GD = LD, Sh = HD, YD = GD(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && Sh(e, t[0], t[1]) ? t = [] : n > 2 && Sh(t[0], t[1], t[2]) && (t = [t[0]]), KD(e, UD(t, 1), []);
}), qD = YD;
const ZD = /* @__PURE__ */ Cn(qD);
function Aa(e) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Aa(e);
}
function $u() {
  return $u = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $u.apply(this, arguments);
}
function XD(e, t) {
  return t6(e) || e6(e, t) || JD(e, t) || QD();
}
function QD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JD(e, t) {
  if (e) {
    if (typeof e == "string")
      return Nh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Nh(e, t);
  }
}
function Nh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function e6(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0)
        for (; !(c = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); c = !0)
          ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return i;
  }
}
function t6(e) {
  if (Array.isArray(e))
    return e;
}
function Eh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eh(Object(n), !0).forEach(function(r) {
      n6(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function n6(e, t, n) {
  return t = r6(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function r6(e) {
  var t = o6(e, "string");
  return Aa(t) == "symbol" ? t : t + "";
}
function o6(e, t) {
  if (Aa(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Aa(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a6(e) {
  return Array.isArray(e) && Ci(e[0]) && Ci(e[1]) ? e.join(" ~ ") : e;
}
var s6 = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, s = t.itemStyle, i = s === void 0 ? {} : s, c = t.labelStyle, l = c === void 0 ? {} : c, u = t.payload, f = t.formatter, p = t.itemSorter, h = t.wrapperClassName, m = t.labelClassName, v = t.label, g = t.labelFormatter, b = t.accessibilityLayer, y = b === void 0 ? !1 : b, x = function() {
    if (u && u.length) {
      var B = {
        padding: 0,
        margin: 0
      }, U = (p ? ZD(u, p) : u).map(function(R, k) {
        if (R.type === "none")
          return null;
        var W = $l({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: R.color || "#000"
        }, i), D = R.formatter || f || a6, z = R.value, Y = R.name, H = z, Q = Y;
        if (D && H != null && Q != null) {
          var I = D(z, Y, R, k, u);
          if (Array.isArray(I)) {
            var re = XD(I, 2);
            H = re[0], Q = re[1];
          } else
            H = I;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ A.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(k),
            style: W
          }, Ci(Q) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, Q) : null, Ci(Q) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, H), /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, R.unit || ""))
        );
      });
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: B
      }, U);
    }
    return null;
  }, _ = $l({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), $ = $l({
    margin: 0
  }, l), N = !DE(v), S = N ? v : "", M = yr("recharts-default-tooltip", h), E = yr("recharts-tooltip-label", m);
  N && g && u !== void 0 && u !== null && (S = g(v, u));
  var V = y ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ A.createElement("div", $u({
    className: M,
    style: _
  }, V), /* @__PURE__ */ A.createElement("p", {
    className: E,
    style: $
  }, /* @__PURE__ */ A.isValidElement(S) ? S : "".concat(S)), x());
};
function Ra(e) {
  "@babel/helpers - typeof";
  return Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ra(e);
}
function Ws(e, t, n) {
  return t = i6(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function i6(e) {
  var t = c6(e, "string");
  return Ra(t) == "symbol" ? t : t + "";
}
function c6(e, t) {
  if (Ra(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ra(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ya = "recharts-tooltip-wrapper", l6 = {
  visibility: "hidden"
};
function u6(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return yr(ya, Ws(Ws(Ws(Ws({}, "".concat(ya, "-right"), cn(n) && t && cn(t.x) && n >= t.x), "".concat(ya, "-left"), cn(n) && t && cn(t.x) && n < t.x), "".concat(ya, "-bottom"), cn(r) && t && cn(t.y) && r >= t.y), "".concat(ya, "-top"), cn(r) && t && cn(t.y) && r < t.y));
}
function Ph(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.key, o = e.offsetTopLeft, a = e.position, s = e.reverseDirection, i = e.tooltipDimension, c = e.viewBox, l = e.viewBoxDimension;
  if (a && cn(a[r]))
    return a[r];
  var u = n[r] - i - o, f = n[r] + o;
  if (t[r])
    return s[r] ? u : f;
  if (s[r]) {
    var p = u, h = c[r];
    return p < h ? Math.max(f, c[r]) : Math.max(u, c[r]);
  }
  var m = f + i, v = c[r] + l;
  return m > v ? Math.max(u, c[r]) : Math.max(f, c[r]);
}
function d6(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function f6(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, s = e.tooltipBox, i = e.useTranslate3d, c = e.viewBox, l, u, f;
  return s.height > 0 && s.width > 0 && n ? (u = Ph({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = Ph({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = d6({
    translateX: u,
    translateY: f,
    useTranslate3d: i
  })) : l = l6, {
    cssProperties: l,
    cssClasses: u6({
      translateX: u,
      translateY: f,
      coordinate: n
    })
  };
}
function Lo(e) {
  "@babel/helpers - typeof";
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
function Oh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Th(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oh(Object(n), !0).forEach(function(r) {
      Cu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function p6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h6(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wg(r.key), r);
  }
}
function m6(e, t, n) {
  return t && h6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function v6(e, t, n) {
  return t = Mi(t), g6(e, zg() ? Reflect.construct(t, n || [], Mi(e).constructor) : t.apply(e, n));
}
function g6(e, t) {
  if (t && (Lo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return b6(e);
}
function b6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zg = function() {
    return !!e;
  })();
}
function Mi(e) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mi(e);
}
function y6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _u(e, t);
}
function _u(e, t) {
  return _u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, _u(e, t);
}
function Cu(e, t, n) {
  return t = Wg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wg(e) {
  var t = x6(e, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function x6(e, t) {
  if (Lo(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Lo(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jh = 1, w6 = /* @__PURE__ */ function(e) {
  function t() {
    var n;
    p6(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = v6(this, t, [].concat(o)), Cu(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Cu(n, "handleKeyDown", function(s) {
      if (s.key === "Escape") {
        var i, c, l, u;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (i = (c = n.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && i !== void 0 ? i : 0,
            y: (l = (u = n.props.coordinate) === null || u === void 0 ? void 0 : u.y) !== null && l !== void 0 ? l : 0
          }
        });
      }
    }), n;
  }
  return y6(t, e), m6(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > jh || Math.abs(r.height - this.state.lastBoundingBox.height) > jh) && this.setState({
          lastBoundingBox: {
            width: r.width,
            height: r.height
          }
        });
      } else
        (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
          lastBoundingBox: {
            width: -1,
            height: -1
          }
        });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var r, o;
      this.props.active && this.updateBBox(), this.state.dismissed && (((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.x) !== this.state.dismissedAtCoordinate.x || ((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.children, u = o.coordinate, f = o.hasPayload, p = o.isAnimationActive, h = o.offset, m = o.position, v = o.reverseDirection, g = o.useTranslate3d, b = o.viewBox, y = o.wrapperStyle, x = f6({
        allowEscapeViewBox: s,
        coordinate: u,
        offsetTopLeft: h,
        position: m,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: b
      }), _ = x.cssClasses, $ = x.cssProperties, N = Th(Th({
        transition: p && a ? "transform ".concat(i, "ms ").concat(c) : void 0
      }, $), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, y);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ A.createElement("div", {
          tabIndex: -1,
          className: _,
          style: N,
          ref: function(M) {
            r.wrapperNode = M;
          }
        }, l)
      );
    }
  }]);
}(ic), $6 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, li = {
  isSsr: $6(),
  get: function(t) {
    return li[t];
  },
  set: function(t, n) {
    if (typeof t == "string")
      li[t] = n;
    else {
      var r = Object.keys(t);
      r && r.length && r.forEach(function(o) {
        li[o] = t[o];
      });
    }
  }
};
function Fo(e) {
  "@babel/helpers - typeof";
  return Fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fo(e);
}
function Mh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mh(Object(n), !0).forEach(function(r) {
      zd(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function C6(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ug(r.key), r);
  }
}
function S6(e, t, n) {
  return t && C6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function N6(e, t, n) {
  return t = ki(t), E6(e, Hg() ? Reflect.construct(t, n || [], ki(e).constructor) : t.apply(e, n));
}
function E6(e, t) {
  if (t && (Fo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return P6(e);
}
function P6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Hg = function() {
    return !!e;
  })();
}
function ki(e) {
  return ki = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ki(e);
}
function O6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Su(e, t);
}
function Su(e, t) {
  return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Su(e, t);
}
function zd(e, t, n) {
  return t = Ug(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ug(e) {
  var t = T6(e, "string");
  return Fo(t) == "symbol" ? t : t + "";
}
function T6(e, t) {
  if (Fo(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Fo(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j6(e) {
  return e.dataKey;
}
function M6(e, t) {
  return /* @__PURE__ */ A.isValidElement(e) ? /* @__PURE__ */ A.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ A.createElement(e, t) : /* @__PURE__ */ A.createElement(s6, t);
}
var Wd = /* @__PURE__ */ function(e) {
  function t() {
    return _6(this, t), N6(this, t, arguments);
  }
  return O6(t, e), S6(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.content, u = o.coordinate, f = o.filterNull, p = o.isAnimationActive, h = o.offset, m = o.payload, v = o.payloadUniqBy, g = o.position, b = o.reverseDirection, y = o.useTranslate3d, x = o.viewBox, _ = o.wrapperStyle, $ = m ?? [];
      f && $.length && ($ = Lg(m.filter(function(S) {
        return S.value != null && (S.hide !== !0 || r.props.includeHidden);
      }), v, j6));
      var N = $.length > 0;
      return /* @__PURE__ */ A.createElement(w6, {
        allowEscapeViewBox: s,
        animationDuration: i,
        animationEasing: c,
        isAnimationActive: p,
        active: a,
        coordinate: u,
        hasPayload: N,
        offset: h,
        position: g,
        reverseDirection: b,
        useTranslate3d: y,
        viewBox: x,
        wrapperStyle: _
      }, M6(l, kh(kh({}, this.props), {}, {
        payload: $
      })));
    }
  }]);
}(ic);
zd(Wd, "displayName", "Tooltip");
zd(Wd, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !li.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var k6 = Vn, D6 = function() {
  return k6.Date.now();
}, A6 = D6, R6 = /\s/;
function I6(e) {
  for (var t = e.length; t-- && R6.test(e.charAt(t)); )
    ;
  return t;
}
var L6 = I6, F6 = L6, B6 = /^\s+/;
function V6(e) {
  return e && e.slice(0, F6(e) + 1).replace(B6, "");
}
var z6 = V6, W6 = z6, Dh = Mr, H6 = ys, Ah = NaN, U6 = /^[-+]0x[0-9a-f]+$/i, K6 = /^0b[01]+$/i, G6 = /^0o[0-7]+$/i, Y6 = parseInt;
function q6(e) {
  if (typeof e == "number")
    return e;
  if (H6(e))
    return Ah;
  if (Dh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Dh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = W6(e);
  var n = K6.test(e);
  return n || G6.test(e) ? Y6(e.slice(2), n ? 2 : 8) : U6.test(e) ? Ah : +e;
}
var Z6 = q6, X6 = Mr, _l = A6, Rh = Z6, Q6 = "Expected a function", J6 = Math.max, eA = Math.min;
function tA(e, t, n) {
  var r, o, a, s, i, c, l = 0, u = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Q6);
  t = Rh(t) || 0, X6(n) && (u = !!n.leading, f = "maxWait" in n, a = f ? J6(Rh(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function h(N) {
    var S = r, M = o;
    return r = o = void 0, l = N, s = e.apply(M, S), s;
  }
  function m(N) {
    return l = N, i = setTimeout(b, t), u ? h(N) : s;
  }
  function v(N) {
    var S = N - c, M = N - l, E = t - S;
    return f ? eA(E, a - M) : E;
  }
  function g(N) {
    var S = N - c, M = N - l;
    return c === void 0 || S >= t || S < 0 || f && M >= a;
  }
  function b() {
    var N = _l();
    if (g(N))
      return y(N);
    i = setTimeout(b, v(N));
  }
  function y(N) {
    return i = void 0, p && r ? h(N) : (r = o = void 0, s);
  }
  function x() {
    i !== void 0 && clearTimeout(i), l = 0, r = c = o = i = void 0;
  }
  function _() {
    return i === void 0 ? s : y(_l());
  }
  function $() {
    var N = _l(), S = g(N);
    if (r = arguments, o = this, c = N, S) {
      if (i === void 0)
        return m(c);
      if (f)
        return clearTimeout(i), i = setTimeout(b, t), h(c);
    }
    return i === void 0 && (i = setTimeout(b, t)), s;
  }
  return $.cancel = x, $.flush = _, $;
}
var nA = tA, rA = nA, oA = Mr, aA = "Expected a function";
function sA(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(aA);
  return oA(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), rA(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var iA = sA;
const cA = /* @__PURE__ */ Cn(iA);
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e);
}
function Ih(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ih(Object(n), !0).forEach(function(r) {
      lA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ih(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function lA(e, t, n) {
  return t = uA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function uA(e) {
  var t = dA(e, "string");
  return Ia(t) == "symbol" ? t : t + "";
}
function dA(e, t) {
  if (Ia(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ia(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fA(e, t) {
  return vA(e) || mA(e, t) || hA(e, t) || pA();
}
function pA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hA(e, t) {
  if (e) {
    if (typeof e == "string")
      return Lh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Lh(e, t);
  }
}
function Lh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function mA(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0)
        for (; !(c = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); c = !0)
          ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (s = n.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw o;
      }
    }
    return i;
  }
}
function vA(e) {
  if (Array.isArray(e))
    return e;
}
var gA = /* @__PURE__ */ L(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, s = a === void 0 ? "100%" : a, i = e.height, c = i === void 0 ? "100%" : i, l = e.minWidth, u = l === void 0 ? 0 : l, f = e.minHeight, p = e.maxHeight, h = e.children, m = e.debounce, v = m === void 0 ? 0 : m, g = e.id, b = e.className, y = e.onResize, x = e.style, _ = x === void 0 ? {} : x, $ = Z(null), N = Z();
  N.current = y, sv(t, function() {
    return Object.defineProperty($.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), $.current;
      },
      configurable: !0
    });
  });
  var S = X({
    containerWidth: o.width,
    containerHeight: o.height
  }), M = fA(S, 2), E = M[0], V = M[1], G = be(function(U, R) {
    V(function(k) {
      var W = Math.round(U), D = Math.round(R);
      return k.containerWidth === W && k.containerHeight === D ? k : {
        containerWidth: W,
        containerHeight: D
      };
    });
  }, []);
  ee(function() {
    var U = function(Y) {
      var H, Q = Y[0].contentRect, I = Q.width, re = Q.height;
      G(I, re), (H = N.current) === null || H === void 0 || H.call(N, I, re);
    };
    v > 0 && (U = cA(U, v, {
      trailing: !0,
      leading: !1
    }));
    var R = new ResizeObserver(U), k = $.current.getBoundingClientRect(), W = k.width, D = k.height;
    return G(W, D), R.observe($.current), function() {
      R.disconnect();
    };
  }, [G, v]);
  var B = Zt(function() {
    var U = E.containerWidth, R = E.containerHeight;
    if (U < 0 || R < 0)
      return null;
    ci(Bs(s) || Bs(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, s, c), ci(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var k = Bs(s) ? U : s, W = Bs(c) ? R : c;
    n && n > 0 && (k ? W = k / n : W && (k = W * n), p && W > p && (W = p)), ci(k > 0 || W > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, k, W, s, c, u, f, n);
    var D = !Array.isArray(h) && nP(h.type).endsWith("Chart");
    return A.Children.map(h, function(z) {
      return /* @__PURE__ */ A.isValidElement(z) ? /* @__PURE__ */ sc(z, Hs({
        width: k,
        height: W
      }, D ? {
        style: Hs({
          height: "100%",
          width: "100%",
          maxHeight: W,
          maxWidth: k
        }, z.props.style)
      } : {})) : z;
    });
  }, [n, h, c, p, f, u, E, s]);
  return /* @__PURE__ */ A.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: yr("recharts-responsive-container", b),
    style: Hs(Hs({}, _), {}, {
      width: s,
      height: c,
      minWidth: u,
      minHeight: f,
      maxHeight: p
    }),
    ref: $
  }, B);
});
const bA = { light: "", dark: ".dark" }, Kg = C.createContext(null);
function Gg() {
  const e = C.useContext(Kg);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const yA = C.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const s = C.useId(), i = `chart-${e || s.replace(/:/g, "")}`;
  return /* @__PURE__ */ d.jsx(Kg.Provider, { value: { config: r }, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-chart": i,
      ref: a,
      className: T(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ d.jsx(xA, { id: i, config: r }),
        /* @__PURE__ */ d.jsx(gA, { children: n })
      ]
    }
  ) });
});
yA.displayName = "Chart";
const xA = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([r, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ d.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(bA).map(
          ([r, o]) => `
${o} [data-chart=${e}] {
${n.map(([a, s]) => {
            var c;
            const i = ((c = s.theme) == null ? void 0 : c[r]) || s.color;
            return i ? `  --color-${a}: ${i};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, aY = Wd, wA = C.forwardRef(
  ({
    active: e,
    payload: t,
    className: n,
    indicator: r = "dot",
    hideLabel: o = !1,
    hideIndicator: a = !1,
    label: s,
    labelFormatter: i,
    labelClassName: c,
    formatter: l,
    color: u,
    nameKey: f,
    labelKey: p
  }, h) => {
    const { config: m } = Gg(), v = C.useMemo(() => {
      var $;
      if (o || !(t != null && t.length))
        return null;
      const [b] = t, y = `${p || b.dataKey || b.name || "value"}`, x = Nu(m, b, y), _ = !p && typeof s == "string" ? (($ = m[s]) == null ? void 0 : $.label) || s : x == null ? void 0 : x.label;
      return i ? /* @__PURE__ */ d.jsx("div", { className: T("font-medium", c), children: i(_, t) }) : _ ? /* @__PURE__ */ d.jsx("div", { className: T("font-medium", c), children: _ }) : null;
    }, [
      s,
      i,
      t,
      o,
      c,
      m,
      p
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const g = t.length === 1 && r !== "dot";
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: h,
        className: T(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          g ? null : v,
          /* @__PURE__ */ d.jsx("div", { className: "grid gap-1.5", children: t.map((b, y) => {
            const x = `${f || b.name || b.dataKey || "value"}`, _ = Nu(m, b, x), $ = u || b.payload.fill || b.color;
            return /* @__PURE__ */ d.jsx(
              "div",
              {
                className: T(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: l && (b == null ? void 0 : b.value) !== void 0 && b.name ? l(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  _ != null && _.icon ? /* @__PURE__ */ d.jsx(_.icon, {}) : !a && /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      className: T(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": g && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": $,
                        "--color-border": $
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: T(
                        "flex flex-1 justify-between leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ d.jsxs("div", { className: "grid gap-1.5", children: [
                          g ? v : null,
                          /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground", children: (_ == null ? void 0 : _.label) || b.name })
                        ] }),
                        b.value && /* @__PURE__ */ d.jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: b.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              b.dataKey
            );
          }) })
        ]
      }
    );
  }
);
wA.displayName = "ChartTooltip";
const sY = Vd, $A = C.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
    const { config: s } = Gg();
    return n != null && n.length ? /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: a,
        className: T(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((i) => {
          const c = `${o || i.dataKey || "value"}`, l = Nu(s, i, c);
          return /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: T(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              ),
              children: [
                l != null && l.icon && !t ? /* @__PURE__ */ d.jsx(l.icon, {}) : /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-[2px]",
                    style: {
                      backgroundColor: i.color
                    }
                  }
                ),
                l == null ? void 0 : l.label
              ]
            },
            i.value
          );
        })
      }
    ) : null;
  }
);
$A.displayName = "ChartLegend";
function Nu(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function kr(e) {
  const t = e + "CollectionProvider", [n, r] = ut(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (h) => {
    const { scope: m, children: v } = h, g = A.useRef(null), b = A.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ A.createElement(o, {
      scope: m,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ A.forwardRef((h, m) => {
    const { scope: v, children: g } = h, b = a(i, v), y = Pe(m, b.collectionRef);
    return /* @__PURE__ */ A.createElement(gn, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ A.forwardRef((h, m) => {
    const { scope: v, children: g, ...b } = h, y = A.useRef(null), x = Pe(m, y), _ = a(l, v);
    return A.useEffect(() => (_.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void _.itemMap.delete(y))), /* @__PURE__ */ A.createElement(gn, {
      [u]: "",
      ref: x
    }, g);
  });
  function p(h) {
    const m = a(e + "CollectionConsumer", h);
    return A.useCallback(() => {
      const g = m.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (_, $) => b.indexOf(_.ref.current) - b.indexOf($.ref.current)
      );
    }, [
      m.collectionRef,
      m.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: c,
      ItemSlot: f
    },
    p,
    r
  ];
}
const _A = /* @__PURE__ */ Wt(void 0);
function zn(e) {
  const t = lt(_A);
  return e || t || "ltr";
}
function CA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
  ee(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Eu = "dismissableLayer.update", SA = "dismissableLayer.pointerDownOutside", NA = "dismissableLayer.focusOutside";
let Fh;
const EA = /* @__PURE__ */ Wt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), uo = /* @__PURE__ */ L((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = lt(EA), [f, p] = X(null), h = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = X({}), v = Pe(
    t,
    (M) => p(M)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), x = f ? g.indexOf(f) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, $ = x >= y, N = PA((M) => {
    const E = M.target, V = [
      ...u.branches
    ].some(
      (G) => G.contains(E)
    );
    !$ || V || (a == null || a(M), i == null || i(M), M.defaultPrevented || c == null || c());
  }, h), S = OA((M) => {
    const E = M.target;
    [
      ...u.branches
    ].some(
      (G) => G.contains(E)
    ) || (s == null || s(M), i == null || i(M), M.defaultPrevented || c == null || c());
  }, h);
  return CA((M) => {
    x === u.layers.size - 1 && (o == null || o(M), !M.defaultPrevented && c && (M.preventDefault(), c()));
  }, h), ee(() => {
    if (f)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Fh = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Bh(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Fh);
      };
  }, [
    f,
    h,
    r,
    u
  ]), ee(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Bh());
  }, [
    f,
    u
  ]), ee(() => {
    const M = () => m({});
    return document.addEventListener(Eu, M), () => document.removeEventListener(Eu, M);
  }, []), /* @__PURE__ */ w(pe.div, O({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: J(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: J(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: J(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function PA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = Z(!1), o = Z(() => {
  });
  return ee(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Yg(SA, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", o.current);
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
function OA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = Z(!1);
  return ee(() => {
    const o = (a) => {
      a.target && !r.current && Yg(NA, n, {
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
function Bh() {
  const e = new CustomEvent(Eu);
  document.dispatchEvent(e);
}
function Yg(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? $i(o, a) : o.dispatchEvent(a);
}
let Cl = 0;
function wc() {
  ee(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Vh()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Vh()), Cl++, () => {
      Cl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Cl--;
    };
  }, []);
}
function Vh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Sl = "focusScope.autoFocusOnMount", Nl = "focusScope.autoFocusOnUnmount", zh = {
  bubbles: !1,
  cancelable: !0
}, $c = /* @__PURE__ */ L((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = X(null), l = Je(o), u = Je(a), f = Z(null), p = Pe(
    t,
    (v) => c(v)
  ), h = Z({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  ee(() => {
    if (r) {
      let v = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.target;
        i.contains(_) ? f.current = _ : vr(f.current, {
          select: !0
        });
      }, g = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.relatedTarget;
        _ !== null && (i.contains(_) || vr(f.current, {
          select: !0
        }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const $ of x)
            $.removedNodes.length > 0 && vr(i);
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
    h.paused
  ]), ee(() => {
    if (i) {
      Hh.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Sl, zh);
        i.addEventListener(Sl, l), i.dispatchEvent(b), b.defaultPrevented || (TA(AA(qg(i)), {
          select: !0
        }), document.activeElement === v && vr(i));
      }
      return () => {
        i.removeEventListener(Sl, l), setTimeout(() => {
          const b = new CustomEvent(Nl, zh);
          i.addEventListener(Nl, u), i.dispatchEvent(b), b.defaultPrevented || vr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Nl, u), Hh.remove(h);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    h
  ]);
  const m = be((v) => {
    if (!n && !r || h.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [x, _] = jA(y);
      x && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && vr(x, {
        select: !0
      })) : v.shiftKey && b === x && (v.preventDefault(), n && vr(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    h.paused
  ]);
  return /* @__PURE__ */ w(pe.div, O({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: m
  }));
});
function TA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (vr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function jA(e) {
  const t = qg(e), n = Wh(t, e), r = Wh(t.reverse(), e);
  return [
    n,
    r
  ];
}
function qg(e) {
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
function Wh(e, t) {
  for (const n of e)
    if (!MA(n, {
      upTo: t
    }))
      return n;
}
function MA(e, { upTo: t }) {
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
function kA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && kA(e) && t && e.select();
  }
}
const Hh = DA();
function DA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Uh(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Uh(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Uh(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function AA(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const RA = C.useId || (() => {
});
let IA = 0;
function bt(e) {
  const [t, n] = C.useState(RA());
  return St(() => {
    n(
      (r) => r ?? String(IA++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const LA = ["top", "right", "bottom", "left"], wr = Math.min, Kt = Math.max, Di = Math.round, Us = Math.floor, Dn = (e) => ({
  x: e,
  y: e
}), FA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, BA = {
  start: "end",
  end: "start"
};
function Pu(e, t, n) {
  return Kt(e, wr(t, n));
}
function tr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nr(e) {
  return e.split("-")[0];
}
function ea(e) {
  return e.split("-")[1];
}
function Hd(e) {
  return e === "x" ? "y" : "x";
}
function Ud(e) {
  return e === "y" ? "height" : "width";
}
function $r(e) {
  return ["top", "bottom"].includes(nr(e)) ? "y" : "x";
}
function Kd(e) {
  return Hd($r(e));
}
function VA(e, t, n) {
  n === void 0 && (n = !1);
  const r = ea(e), o = Kd(e), a = Ud(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ai(s)), [s, Ai(s)];
}
function zA(e) {
  const t = Ai(e);
  return [Ou(e), t, Ou(t)];
}
function Ou(e) {
  return e.replace(/start|end/g, (t) => BA[t]);
}
function WA(e, t, n) {
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
function HA(e, t, n, r) {
  const o = ea(e);
  let a = WA(nr(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Ou)))), a;
}
function Ai(e) {
  return e.replace(/left|right|bottom|top/g, (t) => FA[t]);
}
function UA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zg(e) {
  return typeof e != "number" ? UA(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ri(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Kh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = $r(t), s = Kd(t), i = Ud(s), c = nr(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (ea(t)) {
    case "start":
      h[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const KA = async (e, t, n) => {
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
    x: u,
    y: f
  } = Kh(l, r, c), p = r, h = {}, m = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x: y,
      y: x,
      data: _,
      reset: $
    } = await b({
      x: u,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = y ?? u, f = x ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ..._
      }
    }, $ && m <= 50 && (m++, typeof $ == "object" && ($.placement && (p = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: u,
      y: f
    } = Kh(l, p, c)), v = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function La(e, t) {
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
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = tr(t, e), m = Zg(h), g = i[p ? f === "floating" ? "reference" : "floating" : f], b = Ri(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Ri(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (b.top - $.top + m.top) / _.y,
    bottom: ($.bottom - b.bottom + m.bottom) / _.y,
    left: (b.left - $.left + m.left) / _.x,
    right: ($.right - b.right + m.right) / _.x
  };
}
const GA = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = tr(e, t) || {};
    if (l == null)
      return {};
    const f = Zg(u), p = {
      x: n,
      y: r
    }, h = Kd(o), m = Ud(h), v = await s.getDimensions(l), g = h === "y", b = g ? "top" : "left", y = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", _ = a.reference[m] + a.reference[h] - p[h] - a.floating[m], $ = p[h] - a.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let S = N ? N[x] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(N))) && (S = i.floating[x] || a.floating[m]);
    const M = _ / 2 - $ / 2, E = S / 2 - v[m] / 2 - 1, V = wr(f[b], E), G = wr(f[y], E), B = V, U = S - v[m] - G, R = S / 2 - v[m] / 2 + M, k = Pu(B, R, U), W = !c.arrow && ea(o) != null && R !== k && a.reference[m] / 2 - (R < B ? V : G) - v[m] / 2 < 0, D = W ? R < B ? R - B : R - U : 0;
    return {
      [h]: p[h] + D,
      data: {
        [h]: k,
        centerOffset: R - k - D,
        ...W && {
          alignmentOffset: D
        }
      },
      reset: W
    };
  }
}), YA = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...g
      } = tr(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = nr(o), y = $r(i), x = nr(i) === i, _ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), $ = p || (x || !v ? [Ai(i)] : zA(i)), N = m !== "none";
      !p && N && $.push(...HA(i, v, m, _));
      const S = [i, ...$], M = await La(t, g), E = [];
      let V = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && E.push(M[b]), f) {
        const R = VA(o, s, _);
        E.push(M[R[0]], M[R[1]]);
      }
      if (V = [...V, {
        placement: o,
        overflows: E
      }], !E.every((R) => R <= 0)) {
        var G, B;
        const R = (((G = a.flip) == null ? void 0 : G.index) || 0) + 1, k = S[R];
        if (k)
          return {
            data: {
              index: R,
              overflows: V
            },
            reset: {
              placement: k
            }
          };
        let W = (B = V.filter((D) => D.overflows[0] <= 0).sort((D, z) => D.overflows[1] - z.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!W)
          switch (h) {
            case "bestFit": {
              var U;
              const D = (U = V.filter((z) => {
                if (N) {
                  const Y = $r(z.placement);
                  return Y === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((Y) => Y > 0).reduce((Y, H) => Y + H, 0)]).sort((z, Y) => z[1] - Y[1])[0]) == null ? void 0 : U[0];
              D && (W = D);
              break;
            }
            case "initialPlacement":
              W = i;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function Gh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Yh(e) {
  return LA.some((t) => e[t] >= 0);
}
const qA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = tr(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await La(t, {
            ...o,
            elementContext: "reference"
          }), s = Gh(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Yh(s)
            }
          };
        }
        case "escaped": {
          const a = await La(t, {
            ...o,
            altBoundary: !0
          }), s = Gh(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Yh(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function ZA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = nr(n), i = ea(n), c = $r(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, f = tr(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof m == "number" && (h = i === "end" ? m * -1 : m), c ? {
    x: h * u,
    y: p * l
  } : {
    x: p * l,
    y: h * u
  };
}
const XA = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await ZA(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, QA = function(e) {
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
      } = tr(e, t), l = {
        x: n,
        y: r
      }, u = await La(t, c), f = $r(nr(o)), p = Hd(f);
      let h = l[p], m = l[f];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = h + u[g], x = h - u[b];
        h = Pu(y, h, x);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = m + u[g], x = m - u[b];
        m = Pu(y, m, x);
      }
      const v = i.fn({
        ...t,
        [p]: h,
        [f]: m
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [p]: a,
            [f]: s
          }
        }
      };
    }
  };
}, JA = function(e) {
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
      } = tr(e, t), u = {
        x: n,
        y: r
      }, f = $r(o), p = Hd(f);
      let h = u[p], m = u[f];
      const v = tr(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const x = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[x] + g.mainAxis, $ = a.reference[p] + a.reference[x] - g.mainAxis;
        h < _ ? h = _ : h > $ && (h = $);
      }
      if (l) {
        var b, y;
        const x = p === "y" ? "width" : "height", _ = ["top", "left"].includes(nr(o)), $ = a.reference[f] - a.floating[x] + (_ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + (_ ? 0 : g.crossAxis), N = a.reference[f] + a.reference[x] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) - (_ ? g.crossAxis : 0);
        m < $ ? m = $ : m > N && (m = N);
      }
      return {
        [p]: h,
        [f]: m
      };
    }
  };
}, eR = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = tr(e, t), u = await La(t, l), f = nr(o), p = ea(o), h = $r(o) === "y", {
        width: m,
        height: v
      } = a.floating;
      let g, b;
      f === "top" || f === "bottom" ? (g = f, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = f, g = p === "end" ? "top" : "bottom");
      const y = v - u.top - u.bottom, x = m - u.left - u.right, _ = wr(v - u[g], y), $ = wr(m - u[b], x), N = !t.middlewareData.shift;
      let S = _, M = $;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = x), (r = t.middlewareData.shift) != null && r.enabled.y && (S = y), N && !p) {
        const V = Kt(u.left, 0), G = Kt(u.right, 0), B = Kt(u.top, 0), U = Kt(u.bottom, 0);
        h ? M = m - 2 * (V !== 0 || G !== 0 ? V + G : Kt(u.left, u.right)) : S = v - 2 * (B !== 0 || U !== 0 ? B + U : Kt(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: M,
        availableHeight: S
      });
      const E = await s.getDimensions(i.floating);
      return m !== E.width || v !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function _c() {
  return typeof window < "u";
}
function ta(e) {
  return Xg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wn(e) {
  var t;
  return (t = (Xg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xg(e) {
  return _c() ? e instanceof Node || e instanceof Yt(e).Node : !1;
}
function xn(e) {
  return _c() ? e instanceof Element || e instanceof Yt(e).Element : !1;
}
function In(e) {
  return _c() ? e instanceof HTMLElement || e instanceof Yt(e).HTMLElement : !1;
}
function qh(e) {
  return !_c() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Yt(e).ShadowRoot;
}
function xs(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = wn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function tR(e) {
  return ["table", "td", "th"].includes(ta(e));
}
function Cc(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Gd(e) {
  const t = Yd(), n = xn(e) ? wn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function nR(e) {
  let t = _r(e);
  for (; In(t) && !Bo(t); ) {
    if (Gd(t))
      return t;
    if (Cc(t))
      return null;
    t = _r(t);
  }
  return null;
}
function Yd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Bo(e) {
  return ["html", "body", "#document"].includes(ta(e));
}
function wn(e) {
  return Yt(e).getComputedStyle(e);
}
function Sc(e) {
  return xn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _r(e) {
  if (ta(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qh(e) && e.host || // Fallback.
    Wn(e)
  );
  return qh(t) ? t.host : t;
}
function Qg(e) {
  const t = _r(e);
  return Bo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && xs(t) ? t : Qg(t);
}
function Fa(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Qg(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Yt(o);
  if (a) {
    const i = Tu(s);
    return t.concat(s, s.visualViewport || [], xs(o) ? o : [], i && n ? Fa(i) : []);
  }
  return t.concat(o, Fa(o, [], n));
}
function Tu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Jg(e) {
  const t = wn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = In(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Di(n) !== a || Di(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function qd(e) {
  return xn(e) ? e : e.contextElement;
}
function Mo(e) {
  const t = qd(e);
  if (!In(t))
    return Dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Jg(t);
  let s = (a ? Di(n.width) : n.width) / r, i = (a ? Di(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const rR = /* @__PURE__ */ Dn(0);
function eb(e) {
  const t = Yt(e);
  return !Yd() || !t.visualViewport ? rR : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function oR(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function Xr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = qd(e);
  let s = Dn(1);
  t && (r ? xn(r) && (s = Mo(r)) : s = Mo(e));
  const i = oR(a, n, r) ? eb(a) : Dn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Yt(a), h = r && xn(r) ? Yt(r) : r;
    let m = p, v = Tu(m);
    for (; v && r && h !== m; ) {
      const g = Mo(v), b = v.getBoundingClientRect(), y = wn(v), x = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * g.x, _ = b.top + (v.clientTop + parseFloat(y.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, f *= g.y, c += x, l += _, m = Yt(v), v = Tu(m);
    }
  }
  return Ri({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Zd(e, t) {
  const n = Sc(e).scrollLeft;
  return t ? t.left + n : Xr(Wn(e)).left + n;
}
function tb(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Zd(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function aR(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Wn(r), i = t ? Cc(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Dn(1);
  const u = Dn(0), f = In(r);
  if ((f || !f && !a) && ((ta(r) !== "body" || xs(s)) && (c = Sc(r)), In(r))) {
    const h = Xr(r);
    l = Mo(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !f && !a ? tb(s, c, !0) : Dn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function sR(e) {
  return Array.from(e.getClientRects());
}
function iR(e) {
  const t = Wn(e), n = Sc(e), r = e.ownerDocument.body, o = Kt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Kt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Zd(e);
  const i = -n.scrollTop;
  return wn(r).direction === "rtl" && (s += Kt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function cR(e, t) {
  const n = Yt(e), r = Wn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Yd();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function lR(e, t) {
  const n = Xr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = In(e) ? Mo(e) : Dn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Zh(e, t, n) {
  let r;
  if (t === "viewport")
    r = cR(e, n);
  else if (t === "document")
    r = iR(Wn(e));
  else if (xn(t))
    r = lR(t, n);
  else {
    const o = eb(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ri(r);
}
function nb(e, t) {
  const n = _r(e);
  return n === t || !xn(n) || Bo(n) ? !1 : wn(n).position === "fixed" || nb(n, t);
}
function uR(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Fa(e, [], !1).filter((i) => xn(i) && ta(i) !== "body"), o = null;
  const a = wn(e).position === "fixed";
  let s = a ? _r(e) : e;
  for (; xn(s) && !Bo(s); ) {
    const i = wn(s), c = Gd(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xs(s) && !c && nb(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = _r(s);
  }
  return t.set(e, r), r;
}
function dR(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Cc(t) ? [] : uR(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const f = Zh(t, u, o);
    return l.top = Kt(f.top, l.top), l.right = wr(f.right, l.right), l.bottom = wr(f.bottom, l.bottom), l.left = Kt(f.left, l.left), l;
  }, Zh(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function fR(e) {
  const {
    width: t,
    height: n
  } = Jg(e);
  return {
    width: t,
    height: n
  };
}
function pR(e, t, n) {
  const r = In(t), o = Wn(t), a = n === "fixed", s = Xr(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Dn(0);
  if (r || !r && !a)
    if ((ta(t) !== "body" || xs(o)) && (i = Sc(t)), r) {
      const p = Xr(t, !0, a, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else
      o && (c.x = Zd(o));
  const l = o && !r && !a ? tb(o, i) : Dn(0), u = s.left + i.scrollLeft - c.x - l.x, f = s.top + i.scrollTop - c.y - l.y;
  return {
    x: u,
    y: f,
    width: s.width,
    height: s.height
  };
}
function El(e) {
  return wn(e).position === "static";
}
function Xh(e, t) {
  if (!In(e) || wn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Wn(e) === n && (n = n.ownerDocument.body), n;
}
function rb(e, t) {
  const n = Yt(e);
  if (Cc(e))
    return n;
  if (!In(e)) {
    let o = _r(e);
    for (; o && !Bo(o); ) {
      if (xn(o) && !El(o))
        return o;
      o = _r(o);
    }
    return n;
  }
  let r = Xh(e, t);
  for (; r && tR(r) && El(r); )
    r = Xh(r, t);
  return r && Bo(r) && El(r) && !Gd(r) ? n : r || nR(e) || n;
}
const hR = async function(e) {
  const t = this.getOffsetParent || rb, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: pR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function mR(e) {
  return wn(e).direction === "rtl";
}
const vR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: aR,
  getDocumentElement: Wn,
  getClippingRect: dR,
  getOffsetParent: rb,
  getElementRects: hR,
  getClientRects: sR,
  getDimensions: fR,
  getScale: Mo,
  isElement: xn,
  isRTL: mR
};
function gR(e, t) {
  let n = null, r;
  const o = Wn(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: u,
      width: f,
      height: p
    } = e.getBoundingClientRect();
    if (i || t(), !f || !p)
      return;
    const h = Us(u), m = Us(o.clientWidth - (l + f)), v = Us(o.clientHeight - (u + p)), g = Us(l), y = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -g + "px",
      threshold: Kt(0, wr(1, c)) || 1
    };
    let x = !0;
    function _($) {
      const N = $[0].intersectionRatio;
      if (N !== c) {
        if (!x)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
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
function bR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = qd(e), u = o || a ? [...l ? Fa(l) : [], ...Fa(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const f = l && i ? gR(l, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, v = c ? Xr(e) : null;
  c && g();
  function g() {
    const b = Xr(e);
    v && (b.x !== v.x || b.y !== v.y || b.width !== v.width || b.height !== v.height) && n(), v = b, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var b;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f == null || f(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const yR = XA, xR = QA, wR = YA, $R = eR, _R = qA, Qh = GA, CR = JA, SR = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: vR,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return KA(e, t, {
    ...o,
    platform: a
  });
};
var ui = typeof document < "u" ? fs : ee;
function Ii(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Ii(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Ii(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ob(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jh(e, t) {
  const n = ob(e);
  return Math.round(t * n) / n;
}
function Pl(e) {
  const t = C.useRef(e);
  return ui(() => {
    t.current = e;
  }), t;
}
function NR(e) {
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
  } = e, [u, f] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = C.useState(r);
  Ii(p, r) || h(r);
  const [m, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((z) => {
    z !== N.current && (N.current = z, v(z));
  }, []), x = C.useCallback((z) => {
    z !== S.current && (S.current = z, b(z));
  }, []), _ = a || m, $ = s || g, N = C.useRef(null), S = C.useRef(null), M = C.useRef(u), E = c != null, V = Pl(c), G = Pl(o), B = Pl(l), U = C.useCallback(() => {
    if (!N.current || !S.current)
      return;
    const z = {
      placement: t,
      strategy: n,
      middleware: p
    };
    G.current && (z.platform = G.current), SR(N.current, S.current, z).then((Y) => {
      const H = {
        ...Y,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      R.current && !Ii(M.current, H) && (M.current = H, Cw.flushSync(() => {
        f(H);
      }));
    });
  }, [p, t, n, G, B]);
  ui(() => {
    l === !1 && M.current.isPositioned && (M.current.isPositioned = !1, f((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [l]);
  const R = C.useRef(!1);
  ui(() => (R.current = !0, () => {
    R.current = !1;
  }), []), ui(() => {
    if (_ && (N.current = _), $ && (S.current = $), _ && $) {
      if (V.current)
        return V.current(_, $, U);
      U();
    }
  }, [_, $, U, V, E]);
  const k = C.useMemo(() => ({
    reference: N,
    floating: S,
    setReference: y,
    setFloating: x
  }), [y, x]), W = C.useMemo(() => ({
    reference: _,
    floating: $
  }), [_, $]), D = C.useMemo(() => {
    const z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return z;
    const Y = Jh(W.floating, u.x), H = Jh(W.floating, u.y);
    return i ? {
      ...z,
      transform: "translate(" + Y + "px, " + H + "px)",
      ...ob(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Y,
      top: H
    };
  }, [n, i, W.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: U,
    refs: k,
    elements: W,
    floatingStyles: D
  }), [u, U, k, W, D]);
}
const ER = (e) => {
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
      return r && t(r) ? r.current != null ? Qh({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Qh({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, PR = (e, t) => ({
  ...yR(e),
  options: [e, t]
}), OR = (e, t) => ({
  ...xR(e),
  options: [e, t]
}), TR = (e, t) => ({
  ...CR(e),
  options: [e, t]
}), jR = (e, t) => ({
  ...wR(e),
  options: [e, t]
}), MR = (e, t) => ({
  ...$R(e),
  options: [e, t]
}), kR = (e, t) => ({
  ..._R(e),
  options: [e, t]
}), DR = (e, t) => ({
  ...ER(e),
  options: [e, t]
});
function ws(e) {
  const [t, n] = X(void 0);
  return St(() => {
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
const ab = "Popper", [sb, Hn] = ut(ab), [AR, ib] = sb(ab), RR = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = X(null);
  return /* @__PURE__ */ w(AR, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, IR = "PopperAnchor", LR = /* @__PURE__ */ L((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = ib(IR, n), s = Z(null), i = Pe(t, s);
  return ee(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ w(pe.div, O({}, o, {
    ref: i
  }));
}), cb = "PopperContent", [FR, iY] = sb(cb), BR = /* @__PURE__ */ L((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: f = "bottom", sideOffset: p = 0, align: h = "center", alignOffset: m = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: y = 0, sticky: x = "partial", hideWhenDetached: _ = !1, updatePositionStrategy: $ = "optimized", onPlaced: N, ...S } = e, M = ib(cb, u), [E, V] = X(null), G = Pe(
    t,
    (Ee) => V(Ee)
  ), [B, U] = X(null), R = ws(B), k = (n = R == null ? void 0 : R.width) !== null && n !== void 0 ? n : 0, W = (r = R == null ? void 0 : R.height) !== null && r !== void 0 ? r : 0, D = f + (h !== "center" ? "-" + h : ""), z = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, Y = Array.isArray(b) ? b : [
    b
  ], H = Y.length > 0, Q = {
    padding: z,
    boundary: Y.filter(VR),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: H
  }, { refs: I, floatingStyles: re, placement: me, isPositioned: ae, middlewareData: te } = NR({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: D,
    whileElementsMounted: (...Ee) => bR(...Ee, {
      animationFrame: $ === "always"
    }),
    elements: {
      reference: M.anchor
    },
    middleware: [
      PR({
        mainAxis: p + W,
        alignmentAxis: m
      }),
      g && OR({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? TR() : void 0,
        ...Q
      }),
      g && jR({
        ...Q
      }),
      MR({
        ...Q,
        apply: ({ elements: Ee, rects: De, availableWidth: Oe, availableHeight: P }) => {
          const { width: F, height: q } = De.reference, fe = Ee.floating.style;
          fe.setProperty("--radix-popper-available-width", `${Oe}px`), fe.setProperty("--radix-popper-available-height", `${P}px`), fe.setProperty("--radix-popper-anchor-width", `${F}px`), fe.setProperty("--radix-popper-anchor-height", `${q}px`);
        }
      }),
      B && DR({
        element: B,
        padding: v
      }),
      zR({
        arrowWidth: k,
        arrowHeight: W
      }),
      _ && kR({
        strategy: "referenceHidden",
        ...Q
      })
    ]
  }), [ie, ge] = lb(me), _e = Je(N);
  St(() => {
    ae && (_e == null || _e());
  }, [
    ae,
    _e
  ]);
  const ce = (o = te.arrow) === null || o === void 0 ? void 0 : o.x, he = (a = te.arrow) === null || a === void 0 ? void 0 : a.y, K = ((s = te.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [se, ne] = X();
  return St(() => {
    E && ne(window.getComputedStyle(E).zIndex);
  }, [
    E
  ]), /* @__PURE__ */ w("div", {
    ref: I.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...re,
      transform: ae ? re.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: se,
      "--radix-popper-transform-origin": [
        (i = te.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = te.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ w(FR, {
    scope: u,
    placedSide: ie,
    onArrowChange: U,
    arrowX: ce,
    arrowY: he,
    shouldHideArrow: K
  }, /* @__PURE__ */ w(pe.div, O({
    "data-side": ie,
    "data-align": ge
  }, S, {
    ref: G,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ae ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = te.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function VR(e) {
  return e !== null;
}
const zR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, h = f ? 0 : e.arrowHeight, [m, v] = lb(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[v], b = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + h / 2;
    let x = "", _ = "";
    return m === "bottom" ? (x = f ? g : `${b}px`, _ = `${-h}px`) : m === "top" ? (x = f ? g : `${b}px`, _ = `${c.floating.height + h}px`) : m === "right" ? (x = `${-h}px`, _ = f ? g : `${y}px`) : m === "left" && (x = `${c.floating.width + h}px`, _ = f ? g : `${y}px`), {
      data: {
        x,
        y: _
      }
    };
  }
});
function lb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const na = RR, $s = LR, _s = BR, Nc = /* @__PURE__ */ L((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ iv.createPortal(/* @__PURE__ */ w(pe.div, O({}, o, {
    ref: t
  })), r) : null;
});
function WR(e, t) {
  return ud((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ft = (e) => {
  const { present: t, children: n } = e, r = HR(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Kr.only(n), a = Pe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ sc(o, {
    ref: a
  }) : null;
};
ft.displayName = "Presence";
function HR(e) {
  const [t, n] = X(), r = Z({}), o = Z(e), a = Z("none"), s = e ? "mounted" : "unmounted", [i, c] = WR(s, {
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
  return ee(() => {
    const l = Ks(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), St(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, h = Ks(l);
      e ? c("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), St(() => {
    if (t) {
      const l = (f) => {
        const h = Ks(r.current).includes(f.animationName);
        f.target === t && h && cv(
          () => c("ANIMATION_END")
        );
      }, u = (f) => {
        f.target === t && (a.current = Ks(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
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
    ref: be((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ks(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = UR({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Je(n), c = be((l) => {
    if (a) {
      const f = typeof l == "function" ? l(e) : l;
      f !== e && i(f);
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
function UR({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = Z(r), a = Je(t);
  return ee(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Ol = "rovingFocusGroup.onEntryFocus", KR = {
  bubbles: !1,
  cancelable: !0
}, Xd = "RovingFocusGroup", [ju, ub, GR] = kr(Xd), [YR, Dr] = ut(Xd, [
  GR
]), [qR, ZR] = YR(Xd), XR = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ w(ju.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(ju.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ w(QR, O({}, e, {
  ref: t
}))))), QR = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, f = Z(null), p = Pe(t, f), h = zn(a), [m = null, v] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = X(!1), y = Je(l), x = ub(n), _ = Z(!1), [$, N] = X(0);
  return ee(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(Ol, y), () => S.removeEventListener(Ol, y);
  }, [
    y
  ]), /* @__PURE__ */ w(qR, {
    scope: n,
    orientation: r,
    dir: h,
    loop: o,
    currentTabStopId: m,
    onItemFocus: be(
      (S) => v(S),
      [
        v
      ]
    ),
    onItemShiftTab: be(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: be(
      () => N(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: be(
      () => N(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ w(pe.div, O({
    tabIndex: g || $ === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: J(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: J(e.onFocus, (S) => {
      const M = !_.current;
      if (S.target === S.currentTarget && M && !g) {
        const E = new CustomEvent(Ol, KR);
        if (S.currentTarget.dispatchEvent(E), !E.defaultPrevented) {
          const V = x().filter(
            (k) => k.focusable
          ), G = V.find(
            (k) => k.active
          ), B = V.find(
            (k) => k.id === m
          ), R = [
            G,
            B,
            ...V
          ].filter(Boolean).map(
            (k) => k.ref.current
          );
          db(R);
        }
      }
      _.current = !1;
    }),
    onBlur: J(
      e.onBlur,
      () => b(!1)
    )
  })));
}), JR = "RovingFocusGroupItem", e4 = /* @__PURE__ */ L((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = bt(), c = a || i, l = ZR(JR, n), u = l.currentTabStopId === c, f = ub(n), { onFocusableItemAdd: p, onFocusableItemRemove: h } = l;
  return ee(() => {
    if (r)
      return p(), () => h();
  }, [
    r,
    p,
    h
  ]), /* @__PURE__ */ w(ju.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ w(pe.span, O({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: J(e.onMouseDown, (m) => {
      r ? l.onItemFocus(c) : m.preventDefault();
    }),
    onFocus: J(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: J(e.onKeyDown, (m) => {
      if (m.key === "Tab" && m.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (m.target !== m.currentTarget)
        return;
      const v = r4(m, l.orientation, l.dir);
      if (v !== void 0) {
        m.preventDefault();
        let b = f().filter(
          (y) => y.focusable
        ).map(
          (y) => y.ref.current
        );
        if (v === "last")
          b.reverse();
        else if (v === "prev" || v === "next") {
          v === "prev" && b.reverse();
          const y = b.indexOf(m.currentTarget);
          b = l.loop ? o4(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => db(b)
        );
      }
    })
  })));
}), t4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function n4(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function r4(e, t, n) {
  const r = n4(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return t4[r];
}
function db(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function o4(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ec = XR, Pc = e4;
var a4 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, $o = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ys = {}, Tl = 0, fb = function(e) {
  return e && (e.host || fb(e.parentNode));
}, s4 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, i4 = function(e, t, n, r) {
  var o = s4(t, Array.isArray(e) ? e : [e]);
  Ys[n] || (Ys[n] = /* @__PURE__ */ new WeakMap());
  var a = Ys[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || i.has(f) || (i.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", v = ($o.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          $o.set(p, v), a.set(p, g), s.push(p), v === 1 && m && Gs.set(p, !0), g === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return u(t), i.clear(), Tl++, function() {
    s.forEach(function(f) {
      var p = $o.get(f) - 1, h = a.get(f) - 1;
      $o.set(f, p), a.set(f, h), p || (Gs.has(f) || f.removeAttribute(r), Gs.delete(f)), h || f.removeAttribute(n);
    }), Tl--, Tl || ($o = /* @__PURE__ */ new WeakMap(), $o = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ys = {});
  };
}, Oc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = a4(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), i4(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, jn = function() {
  return jn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, jn.apply(this, arguments);
};
function pb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function c4(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var di = "right-scroll-bar-position", fi = "width-before-scroll-bar", l4 = "with-scroll-bars-hidden", u4 = "--removed-body-scroll-bar-size";
function jl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function d4(e, t) {
  var n = X(function() {
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
var f4 = typeof window < "u" ? C.useLayoutEffect : C.useEffect, em = /* @__PURE__ */ new WeakMap();
function p4(e, t) {
  var n = d4(null, function(r) {
    return e.forEach(function(o) {
      return jl(o, r);
    });
  });
  return f4(function() {
    var r = em.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || jl(i, null);
      }), a.forEach(function(i) {
        o.has(i) || jl(i, s);
      });
    }
    em.set(n, e);
  }, [e]), n;
}
function h4(e) {
  return e;
}
function m4(e, t) {
  t === void 0 && (t = h4);
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
        var u = s;
        s = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function v4(e) {
  e === void 0 && (e = {});
  var t = m4(null);
  return t.options = jn({ async: !0, ssr: !1 }, e), t;
}
var hb = function(e) {
  var t = e.sideCar, n = pb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, jn({}, n));
};
hb.isSideCarExport = !0;
function g4(e, t) {
  return e.useMedium(t), hb;
}
var mb = v4(), Ml = function() {
}, Tc = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Ml,
    onWheelCapture: Ml,
    onTouchMoveCapture: Ml
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, h = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = pb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = p, _ = p4([n, t]), $ = jn(jn({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(x, { sideCar: mb, removeScrollBar: l, shards: f, noIsolation: h, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), jn(jn({}, $), { ref: _ })) : C.createElement(b, jn({}, $, { className: c, ref: _ }), i)
  );
});
Tc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Tc.classNames = {
  fullWidth: fi,
  zeroRight: di
};
var b4 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function y4() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = b4();
  return t && e.setAttribute("nonce", t), e;
}
function x4(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function w4(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $4 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = y4()) && (x4(t, n), w4(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, _4 = function() {
  var e = $4();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vb = function() {
  var e = _4(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, C4 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kl = function(e) {
  return parseInt(e || "", 10) || 0;
}, S4 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [kl(n), kl(r), kl(o)];
}, N4 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return C4;
  var t = S4(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, E4 = vb(), ko = "data-scroll-locked", P4 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(l4, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(ko, `] {
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
  
  .`).concat(di, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(fi, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(di, " .").concat(di, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fi, " .").concat(fi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ko, `] {
    `).concat(u4, ": ").concat(i, `px;
  }
`);
}, tm = function() {
  var e = parseInt(document.body.getAttribute(ko) || "0", 10);
  return isFinite(e) ? e : 0;
}, O4 = function() {
  C.useEffect(function() {
    return document.body.setAttribute(ko, (tm() + 1).toString()), function() {
      var e = tm() - 1;
      e <= 0 ? document.body.removeAttribute(ko) : document.body.setAttribute(ko, e.toString());
    };
  }, []);
}, T4 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  O4();
  var a = C.useMemo(function() {
    return N4(o);
  }, [o]);
  return C.createElement(E4, { styles: P4(a, !t, o, n ? "" : "!important") });
}, Mu = !1;
if (typeof window < "u")
  try {
    var qs = Object.defineProperty({}, "passive", {
      get: function() {
        return Mu = !0, !0;
      }
    });
    window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
  } catch {
    Mu = !1;
  }
var _o = Mu ? { passive: !1 } : !1, j4 = function(e) {
  return e.tagName === "TEXTAREA";
}, gb = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !j4(e) && n[t] === "visible")
  );
}, M4 = function(e) {
  return gb(e, "overflowY");
}, k4 = function(e) {
  return gb(e, "overflowX");
}, nm = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = bb(e, n);
    if (r) {
      var o = yb(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, D4 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, A4 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, bb = function(e, t) {
  return e === "v" ? M4(t) : k4(t);
}, yb = function(e, t) {
  return e === "v" ? D4(t) : A4(t);
}, R4 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, I4 = function(e, t, n, r, o) {
  var a = R4(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, f = 0, p = 0;
  do {
    var h = yb(e, i), m = h[0], v = h[1], g = h[2], b = v - g - a * m;
    (m || b) && bb(e, i) && (f += b, p += m), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (f === 0 || !o) || !u && (p === 0 || !o)) && (l = !0), l;
}, Zs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, rm = function(e) {
  return [e.deltaX, e.deltaY];
}, om = function(e) {
  return e && "current" in e ? e.current : e;
}, L4 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, F4 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, B4 = 0, Co = [];
function V4(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(B4++)[0], a = C.useState(function() {
    return vb();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = c4([e.lockRef.current], (e.shards || []).map(om), !0).filter(Boolean);
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
    var b = Zs(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], $, N = v.target, S = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && S === "h" && N.type === "range")
      return !1;
    var M = nm(S, N);
    if (!M)
      return !0;
    if (M ? $ = S : ($ = S === "v" ? "h" : "v", M = nm(S, N)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (x || _) && (r.current = $), !$)
      return !0;
    var E = r.current || $;
    return I4(E, g, v, E === "h" ? x : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Co.length || Co[Co.length - 1] !== a)) {
      var b = "deltaY" in g ? rm(g) : Zs(g), y = t.current.filter(function($) {
        return $.name === g.type && $.target === g.target && L4($.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (s.current.shards || []).map(om).filter(Boolean).filter(function($) {
          return $.contains(g.target);
        }), _ = x.length > 0 ? i(g, x[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(v, g, b, y) {
    var x = { name: v, delta: g, target: b, should: y };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== x;
      });
    }, 1);
  }, []), u = C.useCallback(function(v) {
    n.current = Zs(v), r.current = void 0;
  }, []), f = C.useCallback(function(v) {
    l(v.type, rm(v), v.target, i(v, e.lockRef.current));
  }, []), p = C.useCallback(function(v) {
    l(v.type, Zs(v), v.target, i(v, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return Co.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, _o), document.addEventListener("touchmove", c, _o), document.addEventListener("touchstart", u, _o), function() {
      Co = Co.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", c, _o), document.removeEventListener("touchmove", c, _o), document.removeEventListener("touchstart", u, _o);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    m ? C.createElement(a, { styles: F4(o) }) : null,
    h ? C.createElement(T4, { gapMode: "margin" }) : null
  );
}
const z4 = g4(mb, V4);
var Cs = C.forwardRef(function(e, t) {
  return C.createElement(Tc, jn({}, e, { ref: t, sideCar: z4 }));
});
Cs.classNames = Tc.classNames;
const ku = [
  "Enter",
  " "
], W4 = [
  "ArrowDown",
  "PageUp",
  "Home"
], xb = [
  "ArrowUp",
  "PageDown",
  "End"
], H4 = [
  ...W4,
  ...xb
], U4 = {
  ltr: [
    ...ku,
    "ArrowRight"
  ],
  rtl: [
    ...ku,
    "ArrowLeft"
  ]
}, K4 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, jc = "Menu", [Ba, G4, Y4] = kr(jc), [fo, Ss] = ut(jc, [
  Y4,
  Hn,
  Dr
]), Mc = Hn(), wb = Dr(), [$b, Ar] = fo(jc), [q4, Ns] = fo(jc), Z4 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Mc(t), [c, l] = X(null), u = Z(!1), f = Je(a), p = zn(o);
  return ee(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", m, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", m, {
        capture: !0,
        once: !0
      });
    }, m = () => u.current = !1;
    return document.addEventListener("keydown", h, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", h, {
        capture: !0
      }), document.removeEventListener("pointerdown", m, {
        capture: !0
      }), document.removeEventListener("pointermove", m, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ w(na, i, /* @__PURE__ */ w($b, {
    scope: t,
    open: n,
    onOpenChange: f,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ w(q4, {
    scope: t,
    onClose: be(
      () => f(!1),
      [
        f
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, _b = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Mc(n);
  return /* @__PURE__ */ w($s, O({}, o, r, {
    ref: t
  }));
}), Cb = "MenuPortal", [X4, Sb] = fo(Cb, {
  forceMount: void 0
}), Q4 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Ar(Cb, t);
  return /* @__PURE__ */ w(X4, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ft, {
    present: n || a.open
  }, /* @__PURE__ */ w(Nc, {
    asChild: !0,
    container: o
  }, r)));
}, pn = "MenuContent", [J4, Qd] = fo(pn), e7 = /* @__PURE__ */ L((e, t) => {
  const n = Sb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ar(pn, e.__scopeMenu), s = Ns(pn, e.__scopeMenu);
  return /* @__PURE__ */ w(Ba.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ft, {
    present: r || a.open
  }, /* @__PURE__ */ w(Ba.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ w(t7, O({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(n7, O({}, o, {
    ref: t
  })))));
}), t7 = /* @__PURE__ */ L((e, t) => {
  const n = Ar(pn, e.__scopeMenu), r = Z(null), o = Pe(t, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return Oc(a);
  }, []), /* @__PURE__ */ w(Jd, O({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: J(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), n7 = /* @__PURE__ */ L((e, t) => {
  const n = Ar(pn, e.__scopeMenu);
  return /* @__PURE__ */ w(Jd, O({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Jd = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: p, onDismiss: h, disableOutsideScroll: m, ...v } = e, g = Ar(pn, n), b = Ns(pn, n), y = Mc(n), x = wb(n), _ = G4(n), [$, N] = X(null), S = Z(null), M = Pe(t, S, g.onContentChange), E = Z(0), V = Z(""), G = Z(0), B = Z(null), U = Z("right"), R = Z(0), k = m ? Cs : vn, W = m ? {
    as: gn,
    allowPinchZoom: !0
  } : void 0, D = (Y) => {
    var H, Q;
    const I = V.current + Y, re = _().filter(
      (_e) => !_e.disabled
    ), me = document.activeElement, ae = (H = re.find(
      (_e) => _e.ref.current === me
    )) === null || H === void 0 ? void 0 : H.textValue, te = re.map(
      (_e) => _e.textValue
    ), ie = w7(te, I, ae), ge = (Q = re.find(
      (_e) => _e.textValue === ie
    )) === null || Q === void 0 ? void 0 : Q.ref.current;
    (function _e(ce) {
      V.current = ce, window.clearTimeout(E.current), ce !== "" && (E.current = window.setTimeout(
        () => _e(""),
        1e3
      ));
    })(I), ge && setTimeout(
      () => ge.focus()
    );
  };
  ee(() => () => window.clearTimeout(E.current), []), wc();
  const z = be((Y) => {
    var H, Q;
    return U.current === ((H = B.current) === null || H === void 0 ? void 0 : H.side) && _7(Y, (Q = B.current) === null || Q === void 0 ? void 0 : Q.area);
  }, []);
  return /* @__PURE__ */ w(J4, {
    scope: n,
    searchRef: V,
    onItemEnter: be((Y) => {
      z(Y) && Y.preventDefault();
    }, [
      z
    ]),
    onItemLeave: be((Y) => {
      var H;
      z(Y) || ((H = S.current) === null || H === void 0 || H.focus(), N(null));
    }, [
      z
    ]),
    onTriggerLeave: be((Y) => {
      z(Y) && Y.preventDefault();
    }, [
      z
    ]),
    pointerGraceTimerRef: G,
    onPointerGraceIntentChange: be((Y) => {
      B.current = Y;
    }, [])
  }, /* @__PURE__ */ w(k, W, /* @__PURE__ */ w($c, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: J(a, (Y) => {
      var H;
      Y.preventDefault(), (H = S.current) === null || H === void 0 || H.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ w(uo, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: f,
    onInteractOutside: p,
    onDismiss: h
  }, /* @__PURE__ */ w(Ec, O({
    asChild: !0
  }, x, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: $,
    onCurrentTabStopIdChange: N,
    onEntryFocus: J(c, (Y) => {
      b.isUsingKeyboardRef.current || Y.preventDefault();
    })
  }), /* @__PURE__ */ w(_s, O({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Mb(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: M,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: J(v.onKeyDown, (Y) => {
      const Q = Y.target.closest("[data-radix-menu-content]") === Y.currentTarget, I = Y.ctrlKey || Y.altKey || Y.metaKey, re = Y.key.length === 1;
      Q && (Y.key === "Tab" && Y.preventDefault(), !I && re && D(Y.key));
      const me = S.current;
      if (Y.target !== me || !H4.includes(Y.key))
        return;
      Y.preventDefault();
      const te = _().filter(
        (ie) => !ie.disabled
      ).map(
        (ie) => ie.ref.current
      );
      xb.includes(Y.key) && te.reverse(), y7(te);
    }),
    onBlur: J(e.onBlur, (Y) => {
      Y.currentTarget.contains(Y.target) || (window.clearTimeout(E.current), V.current = "");
    }),
    onPointerMove: J(e.onPointerMove, Va((Y) => {
      const H = Y.target, Q = R.current !== Y.clientX;
      if (Y.currentTarget.contains(H) && Q) {
        const I = Y.clientX > R.current ? "right" : "left";
        U.current = I, R.current = Y.clientX;
      }
    }))
  })))))));
}), Nb = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(pe.div, O({
    role: "group"
  }, r, {
    ref: t
  }));
}), r7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(pe.div, O({}, r, {
    ref: t
  }));
}), Du = "MenuItem", am = "menu.itemSelect", ef = /* @__PURE__ */ L((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = Z(null), s = Ns(Du, e.__scopeMenu), i = Qd(Du, e.__scopeMenu), c = Pe(t, a), l = Z(!1), u = () => {
    const f = a.current;
    if (!n && f) {
      const p = new CustomEvent(am, {
        bubbles: !0,
        cancelable: !0
      });
      f.addEventListener(
        am,
        (h) => r == null ? void 0 : r(h),
        {
          once: !0
        }
      ), $i(f, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ w(Eb, O({}, o, {
    ref: c,
    disabled: n,
    onClick: J(e.onClick, u),
    onPointerDown: (f) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, f), l.current = !0;
    },
    onPointerUp: J(e.onPointerUp, (f) => {
      var p;
      l.current || (p = f.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: J(e.onKeyDown, (f) => {
      const p = i.searchRef.current !== "";
      n || p && f.key === " " || ku.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
    })
  }));
}), Eb = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Qd(Du, n), i = wb(n), c = Z(null), l = Pe(t, c), [u, f] = X(!1), [p, h] = X("");
  return ee(() => {
    const m = c.current;
    if (m) {
      var v;
      h(((v = m.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ w(Ba.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ w(Pc, O({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ w(pe.div, O({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: J(e.onPointerMove, Va((m) => {
      r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: J(e.onPointerLeave, Va(
      (m) => s.onItemLeave(m)
    )),
    onFocus: J(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: J(
      e.onBlur,
      () => f(!1)
    )
  }))));
}), o7 = /* @__PURE__ */ L((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ w(Ob, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ w(ef, O({
    role: "menuitemcheckbox",
    "aria-checked": Li(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": tf(n),
    onSelect: J(
      o.onSelect,
      () => r == null ? void 0 : r(Li(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), a7 = "MenuRadioGroup", [s7, i7] = fo(a7, {
  value: void 0,
  onValueChange: () => {
  }
}), c7 = /* @__PURE__ */ L((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Je(r);
  return /* @__PURE__ */ w(s7, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ w(Nb, O({}, o, {
    ref: t
  })));
}), l7 = "MenuRadioItem", u7 = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = i7(l7, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ w(Ob, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ w(ef, O({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": tf(a),
    onSelect: J(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Pb = "MenuItemIndicator", [Ob, d7] = fo(Pb, {
  checked: !1
}), f7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = d7(Pb, n);
  return /* @__PURE__ */ w(ft, {
    present: r || Li(a.checked) || a.checked === !0
  }, /* @__PURE__ */ w(pe.span, O({}, o, {
    ref: t,
    "data-state": tf(a.checked)
  })));
}), p7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ w(pe.div, O({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Tb = "MenuSub", [h7, jb] = fo(Tb), m7 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Ar(Tb, t), s = Mc(t), [i, c] = X(null), [l, u] = X(null), f = Je(o);
  return ee(() => (a.open === !1 && f(!1), () => f(!1)), [
    a.open,
    f
  ]), /* @__PURE__ */ w(na, s, /* @__PURE__ */ w($b, {
    scope: t,
    open: r,
    onOpenChange: f,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ w(h7, {
    scope: t,
    contentId: bt(),
    triggerId: bt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Xs = "MenuSubTrigger", v7 = /* @__PURE__ */ L((e, t) => {
  const n = Ar(Xs, e.__scopeMenu), r = Ns(Xs, e.__scopeMenu), o = jb(Xs, e.__scopeMenu), a = Qd(Xs, e.__scopeMenu), s = Z(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = be(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return ee(
    () => u,
    [
      u
    ]
  ), ee(() => {
    const f = i.current;
    return () => {
      window.clearTimeout(f), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ w(_b, O({
    asChild: !0
  }, l), /* @__PURE__ */ w(Eb, O({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": Mb(n.open)
  }, e, {
    ref: ps(t, o.onTriggerChange),
    onClick: (f) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: J(e.onPointerMove, Va((f) => {
      a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: J(e.onPointerLeave, Va((f) => {
      var p;
      u();
      const h = (p = n.content) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
      if (h) {
        var m;
        const v = (m = n.content) === null || m === void 0 ? void 0 : m.dataset.side, g = v === "right", b = g ? -5 : 5, y = h[g ? "left" : "right"], x = h[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: f.clientX + b,
              y: f.clientY
            },
            {
              x: y,
              y: h.top
            },
            {
              x,
              y: h.top
            },
            {
              x,
              y: h.bottom
            },
            {
              x: y,
              y: h.bottom
            }
          ],
          side: v
        }), window.clearTimeout(i.current), i.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(f), f.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: J(e.onKeyDown, (f) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && f.key === " ") && U4[r.dir].includes(f.key)) {
        var h;
        n.onOpenChange(!0), (h = n.content) === null || h === void 0 || h.focus(), f.preventDefault();
      }
    })
  })));
}), g7 = "MenuSubContent", b7 = /* @__PURE__ */ L((e, t) => {
  const n = Sb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ar(pn, e.__scopeMenu), s = Ns(pn, e.__scopeMenu), i = jb(g7, e.__scopeMenu), c = Z(null), l = Pe(t, c);
  return /* @__PURE__ */ w(Ba.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(ft, {
    present: r || a.open
  }, /* @__PURE__ */ w(Ba.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ w(Jd, O({
    id: i.contentId,
    "aria-labelledby": i.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var f;
      s.isUsingKeyboardRef.current && ((f = c.current) === null || f === void 0 || f.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: J(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: J(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: J(e.onKeyDown, (u) => {
      const f = u.currentTarget.contains(u.target), p = K4[s.dir].includes(u.key);
      if (f && p) {
        var h;
        a.onOpenChange(!1), (h = i.trigger) === null || h === void 0 || h.focus(), u.preventDefault();
      }
    })
  })))));
});
function Mb(e) {
  return e ? "open" : "closed";
}
function Li(e) {
  return e === "indeterminate";
}
function tf(e) {
  return Li(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function y7(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function x7(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function w7(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = x7(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function $7(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function _7(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return $7(n, t);
}
function Va(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const nf = Z4, rf = _b, of = Q4, af = e7, sf = Nb, cf = r7, lf = ef, uf = o7, df = c7, ff = u7, pf = f7, hf = p7, mf = m7, vf = v7, gf = b7, kb = "ContextMenu", [C7, cY] = ut(kb, [
  Ss
]), It = Ss(), [S7, Db] = C7(kb), N7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = X(!1), c = It(t), l = Je(r), u = be((f) => {
    i(f), l(f);
  }, [
    l
  ]);
  return /* @__PURE__ */ w(S7, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ w(nf, O({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, E7 = "ContextMenuTrigger", P7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Db(E7, n), s = It(n), i = Z({
    x: 0,
    y: 0
  }), c = Z({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = Z(0), u = be(
    () => window.clearTimeout(l.current),
    []
  ), f = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return ee(
    () => u,
    [
      u
    ]
  ), ee(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ w(vn, null, /* @__PURE__ */ w(rf, O({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ w(pe.span, O({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : J(e.onContextMenu, (p) => {
      u(), f(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : J(e.onPointerDown, Qs((p) => {
      u(), l.current = window.setTimeout(
        () => f(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : J(e.onPointerMove, Qs(u)),
    onPointerCancel: r ? e.onPointerCancel : J(e.onPointerCancel, Qs(u)),
    onPointerUp: r ? e.onPointerUp : J(e.onPointerUp, Qs(u))
  })));
}), O7 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ w(of, O({}, r, n));
}, T7 = "ContextMenuContent", j7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Db(T7, n), a = It(n), s = Z(!1);
  return /* @__PURE__ */ w(af, O({}, a, r, {
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
}), M7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(sf, O({}, o, r, {
    ref: t
  }));
}), k7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(cf, O({}, o, r, {
    ref: t
  }));
}), D7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(lf, O({}, o, r, {
    ref: t
  }));
}), A7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(uf, O({}, o, r, {
    ref: t
  }));
}), R7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(df, O({}, o, r, {
    ref: t
  }));
}), I7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(ff, O({}, o, r, {
    ref: t
  }));
}), L7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(pf, O({}, o, r, {
    ref: t
  }));
}), F7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(hf, O({}, o, r, {
    ref: t
  }));
}), B7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = It(t), [i, c] = vt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ w(mf, O({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, V7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(vf, O({}, o, r, {
    ref: t
  }));
}), z7 = /* @__PURE__ */ L((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ w(gf, O({}, o, r, {
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
function Qs(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const W7 = N7, H7 = P7, Ab = O7, Rb = j7, U7 = M7, Ib = k7, Lb = D7, Fb = A7, K7 = R7, Bb = I7, Vb = L7, zb = F7, G7 = B7, Wb = V7, Hb = z7, lY = W7, uY = H7, dY = U7, fY = Ab, pY = G7, hY = K7, Y7 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  Wb,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(jr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Y7.displayName = Wb.displayName;
const q7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Hb,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
q7.displayName = Hb.displayName;
const Z7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(Ab, { children: /* @__PURE__ */ d.jsx(
  Rb,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
Z7.displayName = Rb.displayName;
const X7 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Lb,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
X7.displayName = Lb.displayName;
const Q7 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  Fb,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Vb, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Q7.displayName = Fb.displayName;
const J7 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Bb,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Vb, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
J7.displayName = Bb.displayName;
const e8 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Ib,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
e8.displayName = Ib.displayName;
const t8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  zb,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
t8.displayName = zb.displayName;
const n8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
n8.displayName = "ContextMenuShortcut";
var Es = (e) => e.type === "checkbox", Po = (e) => e instanceof Date, kt = (e) => e == null;
const Ub = (e) => typeof e == "object";
var Ct = (e) => !kt(e) && !Array.isArray(e) && Ub(e) && !Po(e), Kb = (e) => Ct(e) && e.target ? Es(e.target) ? e.target.checked : e.target.value : e, r8 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Gb = (e, t) => e.has(r8(t)), o8 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ct(t) && t.hasOwnProperty("isPrototypeOf");
}, bf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Bt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(bf && (e instanceof Blob || e instanceof FileList)) && (n || Ct(e)))
    if (t = n ? [] : {}, !n && !o8(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Bt(e[r]));
  else
    return e;
  return t;
}
var Ps = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ht = (e) => e === void 0, ve = (e, t, n) => {
  if (!t || !Ct(e))
    return n;
  const r = Ps(t.split(/[,[\].]+?/)).reduce((o, a) => kt(o) ? o : o[a], e);
  return ht(r) || r === e ? ht(e[t]) ? n : e[t] : r;
}, ln = (e) => typeof e == "boolean";
const Fi = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, dn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Xn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Yb = A.createContext(null), kc = () => A.useContext(Yb), a8 = (e) => {
  const { children: t, ...n } = e;
  return A.createElement(Yb.Provider, { value: n }, t);
};
var qb = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== dn.all && (t._proxyFormState[s] = !r || dn.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Ut = (e) => Ct(e) && !Object.keys(e).length, Zb = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Ut(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || dn.all));
}, pi = (e) => Array.isArray(e) ? e : [e], Xb = (e, t, n) => !e || !t || e === t || pi(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function yf(e) {
  const t = A.useRef(e);
  t.current = e, A.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function s8(e) {
  const t = kc(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = A.useState(n._formState), c = A.useRef(!0), l = A.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = A.useRef(o);
  return u.current = o, yf({
    disabled: r,
    next: (f) => c.current && Xb(u.current, f.name, a) && Zb(f, l.current, n._updateFormState) && i({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), A.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), qb(s, n, l.current, !1);
}
var kn = (e) => typeof e == "string", Qb = (e, t, n, r, o) => kn(e) ? (r && t.watch.add(e), ve(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), ve(n, a))) : (r && (t.watchAll = !0), n);
function i8(e) {
  const t = kc(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = A.useRef(r);
  i.current = r, yf({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Xb(i.current, u.name, s) && l(Bt(Qb(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = A.useState(n._getWatch(r, o));
  return A.useEffect(() => n._removeUnmounted()), c;
}
var xf = (e) => /^\w*$/.test(e), Jb = (e) => Ps(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ze = (e, t, n) => {
  let r = -1;
  const o = xf(t) ? [t] : Jb(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = Ct(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
};
function c8(e) {
  const t = kc(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, s = Gb(o._names.array, n), i = i8({
    control: o,
    name: n,
    defaultValue: ve(o._formValues, n, ve(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = s8({
    control: o,
    name: n
  }), l = A.useRef(o.register(n, {
    ...e.rules,
    value: i,
    ...ln(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return A.useEffect(() => {
    const u = o._options.shouldUnregister || a, f = (p, h) => {
      const m = ve(o._fields, p);
      m && (m._f.mount = h);
    };
    if (f(n, !0), u) {
      const p = Bt(ve(o._options.defaultValues, n));
      Ze(o._defaultValues, n, p), ht(ve(o._formValues, n)) && Ze(o._formValues, n, p);
    }
    return () => {
      (s ? u && !o._state.action : u) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, s, a]), A.useEffect(() => {
    ve(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: ve(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: i,
      ...ln(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: A.useCallback((u) => l.current.onChange({
        target: {
          value: Kb(u),
          name: n
        },
        type: Fi.CHANGE
      }), [n]),
      onBlur: A.useCallback(() => l.current.onBlur({
        target: {
          value: ve(o._formValues, n),
          name: n
        },
        type: Fi.BLUR
      }), [n, o]),
      ref: (u) => {
        const f = ve(o._fields, n);
        f && u && (f._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!ve(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ve(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ve(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!ve(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => ve(c.errors, n)
      }
    })
  };
}
const l8 = (e) => e.render(c8(e));
var ey = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, sm = (e) => ({
  isOnSubmit: !e || e === dn.onSubmit,
  isOnBlur: e === dn.onBlur,
  isOnChange: e === dn.onChange,
  isOnAll: e === dn.all,
  isOnTouch: e === dn.onTouched
}), im = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Ea = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const a = ve(e, o);
    if (a) {
      const { _f: s, ...i } = a;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r)
          break;
        if (s.ref && t(s.ref, s.name) && !r)
          break;
        Ea(i, t);
      } else
        Ct(i) && Ea(i, t);
    }
  }
};
var u8 = (e, t, n) => {
  const r = Ps(ve(e, n));
  return Ze(r, "root", t[n]), Ze(e, n, r), e;
}, wf = (e) => e.type === "file", br = (e) => typeof e == "function", Bi = (e) => {
  if (!bf)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, hi = (e) => kn(e), $f = (e) => e.type === "radio", Vi = (e) => e instanceof RegExp;
const cm = {
  value: !1,
  isValid: !1
}, lm = { value: !0, isValid: !0 };
var ty = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ht(e[0].attributes.value) ? ht(e[0].value) || e[0].value === "" ? lm : { value: e[0].value, isValid: !0 } : lm
    ) : cm;
  }
  return cm;
};
const um = {
  isValid: !1,
  value: null
};
var ny = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, um) : um;
function dm(e, t, n = "validate") {
  if (hi(e) || Array.isArray(e) && e.every(hi) || ln(e) && !e)
    return {
      type: n,
      message: hi(e) ? e : "",
      ref: t
    };
}
var So = (e) => Ct(e) && !Vi(e) ? e : {
  value: e,
  message: ""
}, fm = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: f, pattern: p, validate: h, name: m, valueAsNumber: v, mount: g, disabled: b } = e._f, y = ve(t, m);
  if (!g || b)
    return {};
  const x = s ? s[0] : a, _ = (B) => {
    r && x.reportValidity && (x.setCustomValidity(ln(B) ? "" : B || ""), x.reportValidity());
  }, $ = {}, N = $f(a), S = Es(a), M = N || S, E = (v || wf(a)) && ht(a.value) && ht(y) || Bi(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, V = ey.bind(null, m, n, $), G = (B, U, R, k = Xn.maxLength, W = Xn.minLength) => {
    const D = B ? U : R;
    $[m] = {
      type: B ? k : W,
      message: D,
      ref: a,
      ...V(B ? k : W, D)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!M && (E || kt(y)) || ln(y) && !y || S && !ty(s).isValid || N && !ny(s).isValid)) {
    const { value: B, message: U } = hi(i) ? { value: !!i, message: i } : So(i);
    if (B && ($[m] = {
      type: Xn.required,
      message: U,
      ref: x,
      ...V(Xn.required, U)
    }, !n))
      return _(U), $;
  }
  if (!E && (!kt(u) || !kt(f))) {
    let B, U;
    const R = So(f), k = So(u);
    if (!kt(y) && !isNaN(y)) {
      const W = a.valueAsNumber || y && +y;
      kt(R.value) || (B = W > R.value), kt(k.value) || (U = W < k.value);
    } else {
      const W = a.valueAsDate || new Date(y), D = (H) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + H), z = a.type == "time", Y = a.type == "week";
      kn(R.value) && y && (B = z ? D(y) > D(R.value) : Y ? y > R.value : W > new Date(R.value)), kn(k.value) && y && (U = z ? D(y) < D(k.value) : Y ? y < k.value : W < new Date(k.value));
    }
    if ((B || U) && (G(!!B, R.message, k.message, Xn.max, Xn.min), !n))
      return _($[m].message), $;
  }
  if ((c || l) && !E && (kn(y) || o && Array.isArray(y))) {
    const B = So(c), U = So(l), R = !kt(B.value) && y.length > +B.value, k = !kt(U.value) && y.length < +U.value;
    if ((R || k) && (G(R, B.message, U.message), !n))
      return _($[m].message), $;
  }
  if (p && !E && kn(y)) {
    const { value: B, message: U } = So(p);
    if (Vi(B) && !y.match(B) && ($[m] = {
      type: Xn.pattern,
      message: U,
      ref: a,
      ...V(Xn.pattern, U)
    }, !n))
      return _(U), $;
  }
  if (h) {
    if (br(h)) {
      const B = await h(y, t), U = dm(B, x);
      if (U && ($[m] = {
        ...U,
        ...V(Xn.validate, U.message)
      }, !n))
        return _(U.message), $;
    } else if (Ct(h)) {
      let B = {};
      for (const U in h) {
        if (!Ut(B) && !n)
          break;
        const R = dm(await h[U](y, t), x, U);
        R && (B = {
          ...R,
          ...V(U, R.message)
        }, _(R.message), n && ($[m] = B));
      }
      if (!Ut(B) && ($[m] = {
        ref: x,
        ...B
      }, !n))
        return $;
    }
  }
  return _(!0), $;
};
function d8(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ht(e) ? r++ : e[t[r++]];
  return e;
}
function f8(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ht(e[t]))
      return !1;
  return !0;
}
function _t(e, t) {
  const n = Array.isArray(t) ? t : xf(t) ? [t] : Jb(t), r = n.length === 1 ? e : d8(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (Ct(r) && Ut(r) || Array.isArray(r) && f8(r)) && _t(e, n.slice(0, -1)), e;
}
var Dl = () => {
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
}, zi = (e) => kt(e) || !Ub(e);
function Ur(e, t) {
  if (zi(e) || zi(t))
    return e === t;
  if (Po(e) && Po(t))
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
      if (Po(a) && Po(s) || Ct(a) && Ct(s) || Array.isArray(a) && Array.isArray(s) ? !Ur(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var ry = (e) => e.type === "select-multiple", p8 = (e) => $f(e) || Es(e), Al = (e) => Bi(e) && e.isConnected, oy = (e) => {
  for (const t in e)
    if (br(e[t]))
      return !0;
  return !1;
};
function Wi(e, t = {}) {
  const n = Array.isArray(e);
  if (Ct(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Ct(e[r]) && !oy(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Wi(e[r], t[r])) : kt(e[r]) || (t[r] = !0);
  return t;
}
function ay(e, t, n) {
  const r = Array.isArray(e);
  if (Ct(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Ct(e[o]) && !oy(e[o]) ? ht(t) || zi(n[o]) ? n[o] = Array.isArray(e[o]) ? Wi(e[o], []) : { ...Wi(e[o]) } : ay(e[o], kt(t) ? {} : t[o], n[o]) : n[o] = !Ur(e[o], t[o]);
  return n;
}
var Js = (e, t) => ay(e, t, Wi(t)), sy = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ht(e) ? e : t ? e === "" ? NaN : e && +e : n && kn(e) ? new Date(e) : r ? r(e) : e;
function Rl(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return wf(t) ? t.files : $f(t) ? ny(e.refs).value : ry(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Es(t) ? ty(e.refs).value : sy(ht(t.value) ? e.ref.value : t.value, e);
}
var h8 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = ve(t, a);
    s && Ze(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, xa = (e) => ht(e) ? e : Vi(e) ? e.source : Ct(e) ? Vi(e.value) ? e.value.source : e.value : e, m8 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function pm(e, t, n) {
  const r = ve(e, n);
  if (r || xf(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = ve(t, a), i = ve(e, a);
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
var v8 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, g8 = (e, t) => !Ps(ve(e, t)).length && _t(e, t);
const b8 = {
  mode: dn.onSubmit,
  reValidateMode: dn.onChange,
  shouldFocusError: !0
};
function y8(e = {}) {
  let t = {
    ...b8,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: br(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, o = Ct(t.defaultValues) || Ct(t.values) ? Bt(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : Bt(o), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, i = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, l = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: Dl(),
    array: Dl(),
    state: Dl()
  }, p = sm(t.mode), h = sm(t.reValidateMode), m = t.criteriaMode === dn.all, v = (P) => (F) => {
    clearTimeout(l), l = setTimeout(P, F);
  }, g = async (P) => {
    if (u.isValid || P) {
      const F = t.resolver ? Ut((await M()).errors) : await V(r, !0);
      F !== n.isValid && f.state.next({
        isValid: F
      });
    }
  }, b = (P, F) => {
    (u.isValidating || u.validatingFields) && ((P || Array.from(i.mount)).forEach((q) => {
      q && (F ? Ze(n.validatingFields, q, F) : _t(n.validatingFields, q));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Ut(n.validatingFields)
    }));
  }, y = (P, F = [], q, fe, de = !0, oe = !0) => {
    if (fe && q) {
      if (s.action = !0, oe && Array.isArray(ve(r, P))) {
        const we = q(ve(r, P), fe.argA, fe.argB);
        de && Ze(r, P, we);
      }
      if (oe && Array.isArray(ve(n.errors, P))) {
        const we = q(ve(n.errors, P), fe.argA, fe.argB);
        de && Ze(n.errors, P, we), g8(n.errors, P);
      }
      if (u.touchedFields && oe && Array.isArray(ve(n.touchedFields, P))) {
        const we = q(ve(n.touchedFields, P), fe.argA, fe.argB);
        de && Ze(n.touchedFields, P, we);
      }
      u.dirtyFields && (n.dirtyFields = Js(o, a)), f.state.next({
        name: P,
        isDirty: B(P, F),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ze(a, P, F);
  }, x = (P, F) => {
    Ze(n.errors, P, F), f.state.next({
      errors: n.errors
    });
  }, _ = (P) => {
    n.errors = P, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, $ = (P, F, q, fe) => {
    const de = ve(r, P);
    if (de) {
      const oe = ve(a, P, ht(q) ? ve(o, P) : q);
      ht(oe) || fe && fe.defaultChecked || F ? Ze(a, P, F ? oe : Rl(de._f)) : k(P, oe), s.mount && g();
    }
  }, N = (P, F, q, fe, de) => {
    let oe = !1, we = !1;
    const Ae = {
      name: P
    }, Ke = !!(ve(r, P) && ve(r, P)._f.disabled);
    if (!q || fe) {
      u.isDirty && (we = n.isDirty, n.isDirty = Ae.isDirty = B(), oe = we !== Ae.isDirty);
      const et = Ke || Ur(ve(o, P), F);
      we = !!(!Ke && ve(n.dirtyFields, P)), et || Ke ? _t(n.dirtyFields, P) : Ze(n.dirtyFields, P, !0), Ae.dirtyFields = n.dirtyFields, oe = oe || u.dirtyFields && we !== !et;
    }
    if (q) {
      const et = ve(n.touchedFields, P);
      et || (Ze(n.touchedFields, P, q), Ae.touchedFields = n.touchedFields, oe = oe || u.touchedFields && et !== q);
    }
    return oe && de && f.state.next(Ae), oe ? Ae : {};
  }, S = (P, F, q, fe) => {
    const de = ve(n.errors, P), oe = u.isValid && ln(F) && n.isValid !== F;
    if (e.delayError && q ? (c = v(() => x(P, q)), c(e.delayError)) : (clearTimeout(l), c = null, q ? Ze(n.errors, P, q) : _t(n.errors, P)), (q ? !Ur(de, q) : de) || !Ut(fe) || oe) {
      const we = {
        ...fe,
        ...oe && ln(F) ? { isValid: F } : {},
        errors: n.errors,
        name: P
      };
      n = {
        ...n,
        ...we
      }, f.state.next(we);
    }
  }, M = async (P) => {
    b(P, !0);
    const F = await t.resolver(a, t.context, h8(P || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(P), F;
  }, E = async (P) => {
    const { errors: F } = await M(P);
    if (P)
      for (const q of P) {
        const fe = ve(F, q);
        fe ? Ze(n.errors, q, fe) : _t(n.errors, q);
      }
    else
      n.errors = F;
    return F;
  }, V = async (P, F, q = {
    valid: !0
  }) => {
    for (const fe in P) {
      const de = P[fe];
      if (de) {
        const { _f: oe, ...we } = de;
        if (oe) {
          const Ae = i.array.has(oe.name);
          b([fe], !0);
          const Ke = await fm(de, a, m, t.shouldUseNativeValidation && !F, Ae);
          if (b([fe]), Ke[oe.name] && (q.valid = !1, F))
            break;
          !F && (ve(Ke, oe.name) ? Ae ? u8(n.errors, Ke, oe.name) : Ze(n.errors, oe.name, Ke[oe.name]) : _t(n.errors, oe.name));
        }
        we && await V(we, F, q);
      }
    }
    return q.valid;
  }, G = () => {
    for (const P of i.unMount) {
      const F = ve(r, P);
      F && (F._f.refs ? F._f.refs.every((q) => !Al(q)) : !Al(F._f.ref)) && te(P);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, B = (P, F) => (P && F && Ze(a, P, F), !Ur(Q(), o)), U = (P, F, q) => Qb(P, i, {
    ...s.mount ? a : ht(F) ? o : kn(P) ? { [P]: F } : F
  }, q, F), R = (P) => Ps(ve(s.mount ? a : o, P, e.shouldUnregister ? ve(o, P, []) : [])), k = (P, F, q = {}) => {
    const fe = ve(r, P);
    let de = F;
    if (fe) {
      const oe = fe._f;
      oe && (!oe.disabled && Ze(a, P, sy(F, oe)), de = Bi(oe.ref) && kt(F) ? "" : F, ry(oe.ref) ? [...oe.ref.options].forEach((we) => we.selected = de.includes(we.value)) : oe.refs ? Es(oe.ref) ? oe.refs.length > 1 ? oe.refs.forEach((we) => (!we.defaultChecked || !we.disabled) && (we.checked = Array.isArray(de) ? !!de.find((Ae) => Ae === we.value) : de === we.value)) : oe.refs[0] && (oe.refs[0].checked = !!de) : oe.refs.forEach((we) => we.checked = we.value === de) : wf(oe.ref) ? oe.ref.value = "" : (oe.ref.value = de, oe.ref.type || f.values.next({
        name: P,
        values: { ...a }
      })));
    }
    (q.shouldDirty || q.shouldTouch) && N(P, de, q.shouldTouch, q.shouldDirty, !0), q.shouldValidate && H(P);
  }, W = (P, F, q) => {
    for (const fe in F) {
      const de = F[fe], oe = `${P}.${fe}`, we = ve(r, oe);
      (i.array.has(P) || !zi(de) || we && !we._f) && !Po(de) ? W(oe, de, q) : k(oe, de, q);
    }
  }, D = (P, F, q = {}) => {
    const fe = ve(r, P), de = i.array.has(P), oe = Bt(F);
    Ze(a, P, oe), de ? (f.array.next({
      name: P,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && q.shouldDirty && f.state.next({
      name: P,
      dirtyFields: Js(o, a),
      isDirty: B(P, oe)
    })) : fe && !fe._f && !kt(oe) ? W(P, oe, q) : k(P, oe, q), im(P, i) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? P : void 0,
      values: { ...a }
    });
  }, z = async (P) => {
    s.mount = !0;
    const F = P.target;
    let q = F.name, fe = !0;
    const de = ve(r, q), oe = () => F.type ? Rl(de._f) : Kb(P), we = (Ae) => {
      fe = Number.isNaN(Ae) || Ae === ve(a, q, Ae);
    };
    if (de) {
      let Ae, Ke;
      const et = oe(), yt = P.type === Fi.BLUR || P.type === Fi.FOCUS_OUT, Qt = !m8(de._f) && !t.resolver && !ve(n.errors, q) && !de._f.deps || v8(yt, ve(n.touchedFields, q), n.isSubmitted, h, p), Ce = im(q, i, yt);
      Ze(a, q, et), yt ? (de._f.onBlur && de._f.onBlur(P), c && c(0)) : de._f.onChange && de._f.onChange(P);
      const Se = N(q, et, yt, !1), Be = !Ut(Se) || Ce;
      if (!yt && f.values.next({
        name: q,
        type: P.type,
        values: { ...a }
      }), Qt)
        return u.isValid && g(), Be && f.state.next({ name: q, ...Ce ? {} : Se });
      if (!yt && Ce && f.state.next({ ...n }), t.resolver) {
        const { errors: Le } = await M([q]);
        if (we(et), fe) {
          const Xe = pm(n.errors, r, q), tt = pm(Le, r, Xe.name || q);
          Ae = tt.error, q = tt.name, Ke = Ut(Le);
        }
      } else
        b([q], !0), Ae = (await fm(de, a, m, t.shouldUseNativeValidation))[q], b([q]), we(et), fe && (Ae ? Ke = !1 : u.isValid && (Ke = await V(r, !0)));
      fe && (de._f.deps && H(de._f.deps), S(q, Ke, Ae, Se));
    }
  }, Y = (P, F) => {
    if (ve(n.errors, F) && P.focus)
      return P.focus(), 1;
  }, H = async (P, F = {}) => {
    let q, fe;
    const de = pi(P);
    if (t.resolver) {
      const oe = await E(ht(P) ? P : de);
      q = Ut(oe), fe = P ? !de.some((we) => ve(oe, we)) : q;
    } else
      P ? (fe = (await Promise.all(de.map(async (oe) => {
        const we = ve(r, oe);
        return await V(we && we._f ? { [oe]: we } : we);
      }))).every(Boolean), !(!fe && !n.isValid) && g()) : fe = q = await V(r);
    return f.state.next({
      ...!kn(P) || u.isValid && q !== n.isValid ? {} : { name: P },
      ...t.resolver || !P ? { isValid: q } : {},
      errors: n.errors
    }), F.shouldFocus && !fe && Ea(r, Y, P ? de : i.mount), fe;
  }, Q = (P) => {
    const F = {
      ...o,
      ...s.mount ? a : {}
    };
    return ht(P) ? F : kn(P) ? ve(F, P) : P.map((q) => ve(F, q));
  }, I = (P, F) => ({
    invalid: !!ve((F || n).errors, P),
    isDirty: !!ve((F || n).dirtyFields, P),
    isTouched: !!ve((F || n).touchedFields, P),
    isValidating: !!ve((F || n).validatingFields, P),
    error: ve((F || n).errors, P)
  }), re = (P) => {
    P && pi(P).forEach((F) => _t(n.errors, F)), f.state.next({
      errors: P ? n.errors : {}
    });
  }, me = (P, F, q) => {
    const fe = (ve(r, P, { _f: {} })._f || {}).ref;
    Ze(n.errors, P, {
      ...F,
      ref: fe
    }), f.state.next({
      name: P,
      errors: n.errors,
      isValid: !1
    }), q && q.shouldFocus && fe && fe.focus && fe.focus();
  }, ae = (P, F) => br(P) ? f.values.subscribe({
    next: (q) => P(U(void 0, F), q)
  }) : U(P, F, !0), te = (P, F = {}) => {
    for (const q of P ? pi(P) : i.mount)
      i.mount.delete(q), i.array.delete(q), F.keepValue || (_t(r, q), _t(a, q)), !F.keepError && _t(n.errors, q), !F.keepDirty && _t(n.dirtyFields, q), !F.keepTouched && _t(n.touchedFields, q), !F.keepIsValidating && _t(n.validatingFields, q), !t.shouldUnregister && !F.keepDefaultValue && _t(o, q);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...F.keepDirty ? { isDirty: B() } : {}
    }), !F.keepIsValid && g();
  }, ie = ({ disabled: P, name: F, field: q, fields: fe, value: de }) => {
    if (ln(P)) {
      const oe = P ? void 0 : ht(de) ? Rl(q ? q._f : ve(fe, F)._f) : de;
      Ze(a, F, oe), N(F, oe, !1, !1, !0);
    }
  }, ge = (P, F = {}) => {
    let q = ve(r, P);
    const fe = ln(F.disabled);
    return Ze(r, P, {
      ...q || {},
      _f: {
        ...q && q._f ? q._f : { ref: { name: P } },
        name: P,
        mount: !0,
        ...F
      }
    }), i.mount.add(P), q ? ie({
      field: q,
      disabled: F.disabled,
      name: P,
      value: F.value
    }) : $(P, !0, F.value), {
      ...fe ? { disabled: F.disabled } : {},
      ...t.progressive ? {
        required: !!F.required,
        min: xa(F.min),
        max: xa(F.max),
        minLength: xa(F.minLength),
        maxLength: xa(F.maxLength),
        pattern: xa(F.pattern)
      } : {},
      name: P,
      onChange: z,
      onBlur: z,
      ref: (de) => {
        if (de) {
          ge(P, F), q = ve(r, P);
          const oe = ht(de.value) && de.querySelectorAll && de.querySelectorAll("input,select,textarea")[0] || de, we = p8(oe), Ae = q._f.refs || [];
          if (we ? Ae.find((Ke) => Ke === oe) : oe === q._f.ref)
            return;
          Ze(r, P, {
            _f: {
              ...q._f,
              ...we ? {
                refs: [
                  ...Ae.filter(Al),
                  oe,
                  ...Array.isArray(ve(o, P)) ? [{}] : []
                ],
                ref: { type: oe.type, name: P }
              } : { ref: oe }
            }
          }), $(P, !1, void 0, oe);
        } else
          q = ve(r, P, {}), q._f && (q._f.mount = !1), (t.shouldUnregister || F.shouldUnregister) && !(Gb(i.array, P) && s.action) && i.unMount.add(P);
      }
    };
  }, _e = () => t.shouldFocusError && Ea(r, Y, i.mount), ce = (P) => {
    ln(P) && (f.state.next({ disabled: P }), Ea(r, (F, q) => {
      let fe = P;
      const de = ve(r, q);
      de && ln(de._f.disabled) && (fe || (fe = de._f.disabled)), F.disabled = fe;
    }, 0, !1));
  }, he = (P, F) => async (q) => {
    let fe;
    q && (q.preventDefault && q.preventDefault(), q.persist && q.persist());
    let de = Bt(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: oe, values: we } = await M();
      n.errors = oe, de = we;
    } else
      await V(r);
    if (_t(n.errors, "root"), Ut(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await P(de, q);
      } catch (oe) {
        fe = oe;
      }
    } else
      F && await F({ ...n.errors }, q), _e(), setTimeout(_e);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ut(n.errors) && !fe,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), fe)
      throw fe;
  }, K = (P, F = {}) => {
    ve(r, P) && (ht(F.defaultValue) ? D(P, Bt(ve(o, P))) : (D(P, F.defaultValue), Ze(o, P, Bt(F.defaultValue))), F.keepTouched || _t(n.touchedFields, P), F.keepDirty || (_t(n.dirtyFields, P), n.isDirty = F.defaultValue ? B(P, Bt(ve(o, P))) : B()), F.keepError || (_t(n.errors, P), u.isValid && g()), f.state.next({ ...n }));
  }, se = (P, F = {}) => {
    const q = P ? Bt(P) : o, fe = Bt(q), de = Ut(P), oe = de ? o : fe;
    if (F.keepDefaultValues || (o = q), !F.keepValues) {
      if (F.keepDirtyValues)
        for (const we of i.mount)
          ve(n.dirtyFields, we) ? Ze(oe, we, ve(a, we)) : D(we, ve(oe, we));
      else {
        if (bf && ht(P))
          for (const we of i.mount) {
            const Ae = ve(r, we);
            if (Ae && Ae._f) {
              const Ke = Array.isArray(Ae._f.refs) ? Ae._f.refs[0] : Ae._f.ref;
              if (Bi(Ke)) {
                const et = Ke.closest("form");
                if (et) {
                  et.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = e.shouldUnregister ? F.keepDefaultValues ? Bt(o) : {} : Bt(oe), f.array.next({
        values: { ...oe }
      }), f.values.next({
        values: { ...oe }
      });
    }
    i = {
      mount: F.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !u.isValid || !!F.keepIsValid || !!F.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: F.keepSubmitCount ? n.submitCount : 0,
      isDirty: de ? !1 : F.keepDirty ? n.isDirty : !!(F.keepDefaultValues && !Ur(P, o)),
      isSubmitted: F.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: de ? [] : F.keepDirtyValues ? F.keepDefaultValues && a ? Js(o, a) : n.dirtyFields : F.keepDefaultValues && P ? Js(o, P) : {},
      touchedFields: F.keepTouched ? n.touchedFields : {},
      errors: F.keepErrors ? n.errors : {},
      isSubmitSuccessful: F.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ne = (P, F) => se(br(P) ? P(a) : P, F);
  return {
    control: {
      register: ge,
      unregister: te,
      getFieldState: I,
      handleSubmit: he,
      setError: me,
      _executeSchema: M,
      _getWatch: U,
      _getDirty: B,
      _updateValid: g,
      _removeUnmounted: G,
      _updateFieldArray: y,
      _updateDisabledField: ie,
      _getFieldArray: R,
      _reset: se,
      _resetDefaultValues: () => br(t.defaultValues) && t.defaultValues().then((P) => {
        ne(P, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (P) => {
        n = {
          ...n,
          ...P
        };
      },
      _disableForm: ce,
      _subjects: f,
      _proxyFormState: u,
      _setErrors: _,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return s;
      },
      set _state(P) {
        s = P;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(P) {
        i = P;
      },
      get _formState() {
        return n;
      },
      set _formState(P) {
        n = P;
      },
      get _options() {
        return t;
      },
      set _options(P) {
        t = {
          ...t,
          ...P
        };
      }
    },
    trigger: H,
    register: ge,
    handleSubmit: he,
    watch: ae,
    setValue: D,
    getValues: Q,
    reset: ne,
    resetField: K,
    clearErrors: re,
    unregister: te,
    setError: me,
    setFocus: (P, F = {}) => {
      const q = ve(r, P), fe = q && q._f;
      if (fe) {
        const de = fe.refs ? fe.refs[0] : fe.ref;
        de.focus && (de.focus(), F.shouldSelect && de.select());
      }
    },
    getFieldState: I
  };
}
function iy(e = {}) {
  const t = A.useRef(), n = A.useRef(), [r, o] = A.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: br(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: br(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...y8(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, yf({
    subject: a._subjects.state,
    next: (s) => {
      Zb(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), A.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), A.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), A.useEffect(() => {
    e.values && !Ur(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), A.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), A.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), A.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = qb(r, a), t.current;
}
const x8 = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ w(pe.label, O({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), cy = x8, w8 = Go(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Un = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  cy,
  {
    ref: n,
    className: T(w8(), e),
    ...t
  }
));
Un.displayName = cy.displayName;
const ly = a8, uy = C.createContext(
  {}
), po = ({
  ...e
}) => /* @__PURE__ */ d.jsx(uy.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(l8, { ...e }) }), Dc = () => {
  const e = C.useContext(uy), t = C.useContext(dy), { getFieldState: n, formState: r } = kc(), o = n(e.name, r);
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
}, dy = C.createContext(
  {}
), Rr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ d.jsx(dy.Provider, { value: { id: r }, children: /* @__PURE__ */ d.jsx("div", { ref: n, className: T("space-y-2", e), ...t }) });
});
Rr.displayName = "FormItem";
const ho = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Dc();
  return /* @__PURE__ */ d.jsx(
    Un,
    {
      ref: n,
      className: T(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
ho.displayName = "FormLabel";
const Os = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Dc();
  return /* @__PURE__ */ d.jsx(
    gn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Os.displayName = "FormControl";
const ra = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Dc();
  return /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: T("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ra.displayName = "FormDescription";
const $8 = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Dc(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: T("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
$8.displayName = "FormMessage";
const fy = "Dialog", [py, hy] = ut(fy), [_8, En] = py(fy), C8 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = Z(null), c = Z(null), [l = !1, u] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(_8, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: bt(),
    titleId: bt(),
    descriptionId: bt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: be(
      () => u(
        (f) => !f
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, S8 = "DialogTrigger", N8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(S8, n), a = Pe(t, o.triggerRef);
  return /* @__PURE__ */ w(pe.button, O({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": _f(o.open)
  }, r, {
    ref: a,
    onClick: J(e.onClick, o.onOpenToggle)
  }));
}), my = "DialogPortal", [E8, vy] = py(my, {
  forceMount: void 0
}), P8 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = En(my, t);
  return /* @__PURE__ */ w(E8, {
    scope: t,
    forceMount: n
  }, Kr.map(
    r,
    (s) => /* @__PURE__ */ w(ft, {
      present: n || a.open
    }, /* @__PURE__ */ w(Nc, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Au = "DialogOverlay", O8 = /* @__PURE__ */ L((e, t) => {
  const n = vy(Au, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = En(Au, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ w(ft, {
    present: r || a.open
  }, /* @__PURE__ */ w(T8, O({}, o, {
    ref: t
  }))) : null;
}), T8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(Au, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ w(Cs, {
      as: gn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ w(pe.div, O({
      "data-state": _f(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Vo = "DialogContent", j8 = /* @__PURE__ */ L((e, t) => {
  const n = vy(Vo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = En(Vo, e.__scopeDialog);
  return /* @__PURE__ */ w(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(M8, O({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(k8, O({}, o, {
    ref: t
  })));
}), M8 = /* @__PURE__ */ L((e, t) => {
  const n = En(Vo, e.__scopeDialog), r = Z(null), o = Pe(t, n.contentRef, r);
  return ee(() => {
    const a = r.current;
    if (a)
      return Oc(a);
  }, []), /* @__PURE__ */ w(gy, O({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: J(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: J(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: J(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), k8 = /* @__PURE__ */ L((e, t) => {
  const n = En(Vo, e.__scopeDialog), r = Z(!1), o = Z(!1);
  return /* @__PURE__ */ w(gy, O({}, e, {
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
}), gy = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = En(Vo, n), c = Z(null), l = Pe(t, c);
  return wc(), /* @__PURE__ */ w(vn, null, /* @__PURE__ */ w($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(uo, O({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": _f(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), by = "DialogTitle", D8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(by, n);
  return /* @__PURE__ */ w(pe.h2, O({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), A8 = "DialogDescription", R8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(A8, n);
  return /* @__PURE__ */ w(pe.p, O({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), I8 = "DialogClose", L8 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(I8, n);
  return /* @__PURE__ */ w(pe.button, O({
    type: "button"
  }, r, {
    ref: t,
    onClick: J(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function _f(e) {
  return e ? "open" : "closed";
}
const F8 = "DialogTitleWarning", [B8, mY] = sC(F8, {
  contentName: Vo,
  titleName: by,
  docsSlug: "dialog"
}), Ts = C8, Ac = N8, js = P8, mo = O8, vo = j8, oa = D8, aa = R8, go = L8, yy = Ts, vY = Ac, V8 = js, gY = go, xy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  mo,
  {
    ref: n,
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
xy.displayName = mo.displayName;
const Cf = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(V8, { children: [
  /* @__PURE__ */ d.jsx(xy, {}),
  /* @__PURE__ */ d.jsxs(
    vo,
    {
      ref: r,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ d.jsxs(go, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ d.jsx(uc, { className: "h-4 w-4" }),
          /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Cf.displayName = vo.displayName;
const z8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
z8.displayName = "DialogHeader";
const W8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
W8.displayName = "DialogFooter";
const H8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  oa,
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
H8.displayName = oa.displayName;
const U8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  aa,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
U8.displayName = aa.displayName;
const K8 = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, u] = C.useState(!1);
  return s ? /* @__PURE__ */ d.jsxs("div", { className: T("w-full", a), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full" }) }),
    r && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full" }),
    /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ d.jsx(Ot, { className: "h-4 w-4 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }),
      /* @__PURE__ */ d.jsx(
        Ot,
        {
          className: i()
        }
      ),
      o === "right" && /* @__PURE__ */ d.jsx(Ot, { className: "h-4 w-4 absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" })
    ] })
  ] }) : c.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: T("w-full", a), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsxs(Un, { className: "flex", htmlFor: e, children: [
      n,
      " "
    ] }) }),
    r && /* @__PURE__ */ d.jsx("p", { className: "text-muted-foreground text-xs", children: r }),
    /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      o === "left" && /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
        "button",
        {
          type: "button",
          onClick: () => u((f) => !f),
          className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
          tabIndex: -1,
          children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ca, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ d.jsx(
        za,
        {
          ...c,
          className: T(i(), c.className),
          type: l ? "text" : "password"
        }
      ),
      o === "right" && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ d.jsx(
        "button",
        {
          type: "button",
          tabIndex: -1,
          onClick: () => u((f) => !f),
          children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ca, { size: 18 })
        }
      ) })
    ] })
  ] }) : /* @__PURE__ */ d.jsx(
    po,
    {
      control: t.control,
      name: e,
      render: ({ field: f, formState: p }) => {
        var h;
        return /* @__PURE__ */ d.jsxs(Rr, { className: T("w-full", a), children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
            n && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
              n,
              " "
            ] }),
            ((h = p == null ? void 0 : p.errors[e]) == null ? void 0 : h.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              p.errors[e].message
            ] })
          ] }),
          r && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: r }),
          /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ d.jsx(Os, { children: /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
            o === "left" && /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
              "button",
              {
                type: "button",
                onClick: () => u((m) => !m),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                tabIndex: -1,
                disabled: c == null ? void 0 : c.disabled,
                children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ca, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ d.jsx(
              za,
              {
                ...f,
                ...c,
                disabled: c == null ? void 0 : c.disabled,
                className: T(i(), c.className),
                type: l ? "text" : "password"
              }
            ),
            o === "right" && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ d.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => u((m) => !m),
                children: l ? /* @__PURE__ */ d.jsx(Fs, { size: 18 }) : /* @__PURE__ */ d.jsx(Ca, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  );
}, G8 = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: T("w-full", s), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
    Ot,
    {
      className: T(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: T("w-full", s), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsxs(Un, { className: "flex", htmlFor: e, children: [
    r,
    " "
  ] }) }),
  o && /* @__PURE__ */ d.jsx("p", { className: "text-muted-foreground text-xs", children: o }),
  /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
  /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
    a === "left" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
    /* @__PURE__ */ d.jsx(
      za,
      {
        ...l,
        className: i()
      }
    ),
    a === "right" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
  ] })
] }) : /* @__PURE__ */ d.jsx(
  po,
  {
    control: t.control,
    name: e,
    render: ({ field: u, formState: f }) => {
      var p;
      return /* @__PURE__ */ d.jsxs(Rr, { className: T("w-full", s), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
          r && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
            r,
            " "
          ] }),
          ((p = f == null ? void 0 : f.errors[e]) == null ? void 0 : p.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            f.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
          a === "left" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: n }),
          /* @__PURE__ */ d.jsx(Os, { children: /* @__PURE__ */ d.jsx(
            za,
            {
              ...u,
              ...l,
              disabled: l == null ? void 0 : l.disabled,
              className: i()
            }
          ) }),
          a === "right" && n && /* @__PURE__ */ d.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: n })
        ] })
      ] });
    }
  }
), za = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ d.jsx(
    "input",
    {
      type: t,
      className: T(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
za.displayName = "InputUI";
function Sf({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ d.jsx(
    K8,
    {
      id: t,
      validateInputIconClassNames: l,
      classNameContainer: r,
      iconDirection: i,
      description: o,
      isLoading: s,
      label: n,
      form: (c == null ? void 0 : c.form) || null,
      rest: c
    }
  ) : /* @__PURE__ */ d.jsx(
    G8,
    {
      id: t,
      validateInputIconClassNames: l,
      classNameContainer: r,
      iconDirection: i,
      description: o,
      isLoading: s,
      label: n,
      form: (c == null ? void 0 : c.form) || null,
      rest: c,
      icon: a
    }
  );
}
const Y8 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), q8 = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, hm = (e) => {
  const t = [
    pa.VENEZUELAN,
    pa.JURIDICAL,
    pa.FOREIGN,
    pa.PASSPORT,
    pa.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Pt = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: hm(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: hm(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function bY({ form: e, pid: t = Pt, format: n = !0 }) {
  var o, a, s, i, c, l, u, f, p, h, m, v, g, b, y, x, _;
  const r = ($) => {
    var E;
    const { value: N } = $.target, S = n ? Y8(N) : N, M = ((E = t == null ? void 0 : t.number) == null ? void 0 : E.id) || Pt.number.id;
    e.setValue(M, S);
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ d.jsx(
      LU,
      {
        id: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.id) || Pt.type.id,
        form: e,
        label: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.label) || Pt.type.label,
        items: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.items) || Pt.type.items,
        tabIndex: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.tabIndex) || Pt.type.tabIndex,
        placeholder: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.placeholder) || Pt.type.placeholder,
        defaultValue: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.defaultValue) || Pt.type.defaultValue,
        notFoundLabel: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.notFoundLabel) || Pt.type.notFoundLabel,
        ctaPlaceholder: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.ctaPlaceholder) || Pt.type.ctaPlaceholder,
        buttonClassName: ((p = t == null ? void 0 : t.type) == null ? void 0 : p.buttonClassName) || Pt.type.buttonClassName,
        popoverClassName: ((h = t == null ? void 0 : t.type) == null ? void 0 : h.popoverClassName) || Pt.type.popoverClassName,
        disabled: (m = t == null ? void 0 : t.type) == null ? void 0 : m.disabled
      }
    ),
    /* @__PURE__ */ d.jsx(
      Sf,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || Pt.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: q8,
        onKeyUp: r,
        tabIndex: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.tabIndex) || Pt.number.tabIndex,
        maxLength: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.maxLength) || Pt.number.maxLength,
        placeholder: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.placeholder) || Pt.number.placeholder,
        disabled: (_ = t == null ? void 0 : t.number) == null ? void 0 : _.disabled
      }
    )
  ] });
}
const wy = "Popover", [$y, yY] = ut(wy, [
  Hn
]), Nf = Hn(), [Z8, sa] = $y(wy), X8 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Nf(t), c = Z(null), [l, u] = X(!1), [f = !1, p] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w(na, i, /* @__PURE__ */ w(Z8, {
    scope: t,
    contentId: bt(),
    triggerRef: c,
    open: f,
    onOpenChange: p,
    onOpenToggle: be(
      () => p(
        (h) => !h
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: be(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: be(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, Q8 = "PopoverTrigger", J8 = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, ...r } = e, o = sa(Q8, n), a = Nf(n), s = Pe(t, o.triggerRef), i = /* @__PURE__ */ w(pe.button, O({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Sy(o.open)
  }, r, {
    ref: s,
    onClick: J(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ w($s, O({
    asChild: !0
  }, a), i);
}), _y = "PopoverPortal", [eI, tI] = $y(_y, {
  forceMount: void 0
}), nI = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = sa(_y, t);
  return /* @__PURE__ */ w(eI, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ w(ft, {
    present: n || a.open
  }, /* @__PURE__ */ w(Nc, {
    asChild: !0,
    container: o
  }, r)));
}, Wa = "PopoverContent", rI = /* @__PURE__ */ L((e, t) => {
  const n = tI(Wa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = sa(Wa, e.__scopePopover);
  return /* @__PURE__ */ w(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ w(oI, O({}, o, {
    ref: t
  })) : /* @__PURE__ */ w(aI, O({}, o, {
    ref: t
  })));
}), oI = /* @__PURE__ */ L((e, t) => {
  const n = sa(Wa, e.__scopePopover), r = Z(null), o = Pe(t, r), a = Z(!1);
  return ee(() => {
    const s = r.current;
    if (s)
      return Oc(s);
  }, []), /* @__PURE__ */ w(Cs, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w(Cy, O({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: J(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: J(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: J(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), aI = /* @__PURE__ */ L((e, t) => {
  const n = sa(Wa, e.__scopePopover), r = Z(!1), o = Z(!1);
  return /* @__PURE__ */ w(Cy, O({}, e, {
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
}), Cy = /* @__PURE__ */ L((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...f } = e, p = sa(Wa, n), h = Nf(n);
  return wc(), /* @__PURE__ */ w($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ w(uo, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ w(_s, O({
    "data-state": Sy(p.open),
    role: "dialog",
    id: p.contentId
  }, h, f, {
    ref: t,
    style: {
      ...f.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function Sy(e) {
  return e ? "open" : "closed";
}
const sI = X8, iI = J8, cI = nI, Ny = rI, rr = sI, or = iI, Ln = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(cI, { children: /* @__PURE__ */ d.jsx(
  Ny,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Ln.displayName = Ny.displayName;
const Ey = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
    "textarea",
    {
      className: T(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Ey.displayName = "TextareaUI";
const xY = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: T("w-full"), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
    Ot,
    {
      className: T("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ d.jsx(
  po,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var f;
      return /* @__PURE__ */ d.jsxs(Rr, { className: T("w-full", s), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
            n,
            " "
          ] }),
          ((f = u == null ? void 0 : u.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            u.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ d.jsx(Os, { children: /* @__PURE__ */ d.jsx(
          Ey,
          {
            placeholder: a,
            className: T("resize-none", r),
            ...l,
            ...c
          }
        ) })
      ] });
    }
  }
);
function Ha(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ia(e) {
  const t = Z({
    value: e,
    previous: e
  });
  return Zt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Py = /* @__PURE__ */ L((e, t) => /* @__PURE__ */ w(pe.span, O({}, e, {
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
}))), Oy = Py, lI = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], uI = [
  " ",
  "Enter"
], Rc = "Select", [Ic, Ef, dI] = kr(Rc), [ca, wY] = ut(Rc, [
  dI,
  Hn
]), Pf = Hn(), [fI, bo] = ca(Rc), [pI, hI] = ca(Rc), mI = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: f, disabled: p, required: h } = e, m = Pf(t), [v, g] = X(null), [b, y] = X(null), [x, _] = X(!1), $ = zn(l), [N = !1, S] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [M, E] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), V = Z(null), G = v ? !!v.closest("form") : !0, [B, U] = X(/* @__PURE__ */ new Set()), R = Array.from(B).map(
    (k) => k.props.value
  ).join(";");
  return /* @__PURE__ */ w(na, m, /* @__PURE__ */ w(fI, {
    required: h,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: _,
    contentId: bt(),
    value: M,
    onValueChange: E,
    open: N,
    onOpenChange: S,
    dir: $,
    triggerPointerDownPosRef: V,
    disabled: p
  }, /* @__PURE__ */ w(Ic.Provider, {
    scope: t
  }, /* @__PURE__ */ w(pI, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: be((k) => {
      U(
        (W) => new Set(W).add(k)
      );
    }, []),
    onNativeOptionRemove: be((k) => {
      U((W) => {
        const D = new Set(W);
        return D.delete(k), D;
      });
    }, [])
  }, n)), G ? /* @__PURE__ */ w(ky, {
    key: R,
    "aria-hidden": !0,
    required: h,
    tabIndex: -1,
    name: u,
    autoComplete: f,
    value: M,
    onChange: (k) => E(k.target.value),
    disabled: p
  }, M === void 0 ? /* @__PURE__ */ w("option", {
    value: ""
  }) : null, Array.from(B)) : null));
}, vI = "SelectTrigger", gI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Pf(n), s = bo(vI, n), i = s.disabled || r, c = Pe(t, s.onTriggerChange), l = Ef(n), [u, f, p] = Dy((m) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = Ay(v, m, g);
    b !== void 0 && s.onValueChange(b.value);
  }), h = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ w($s, O({
    asChild: !0
  }, a), /* @__PURE__ */ w(pe.button, O({
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
    "data-placeholder": My(s.value) ? "" : void 0
  }, o, {
    ref: c,
    onClick: J(o.onClick, (m) => {
      m.currentTarget.focus();
    }),
    onPointerDown: J(o.onPointerDown, (m) => {
      const v = m.target;
      v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (h(), s.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      }, m.preventDefault());
    }),
    onKeyDown: J(o.onKeyDown, (m) => {
      const v = u.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(v && m.key === " ") && lI.includes(m.key) && (h(), m.preventDefault());
    })
  })));
}), bI = "SelectValue", yI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = bo(bI, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, f = Pe(t, c.onValueNodeChange);
  return St(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ w(pe.span, O({}, i, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), My(c.value) ? /* @__PURE__ */ w(vn, null, s) : a);
}), xI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ w(pe.span, O({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), wI = (e) => /* @__PURE__ */ w(Nc, O({
  asChild: !0
}, e)), zo = "SelectContent", $I = /* @__PURE__ */ L((e, t) => {
  const n = bo(zo, e.__scopeSelect), [r, o] = X();
  if (St(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ lv(/* @__PURE__ */ w(Ty, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w(Ic.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ w("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ w(_I, O({}, e, {
    ref: t
  }));
}), Jn = 10, [Ty, Lc] = ca(zo), _I = /* @__PURE__ */ L((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g,
    //
    ...b
  } = e, y = bo(zo, n), [x, _] = X(null), [$, N] = X(null), S = Pe(
    t,
    (ie) => _(ie)
  ), [M, E] = X(null), [V, G] = X(null), B = Ef(n), [U, R] = X(!1), k = Z(!1);
  ee(() => {
    if (x)
      return Oc(x);
  }, [
    x
  ]), wc();
  const W = be((ie) => {
    const [ge, ..._e] = B().map(
      (K) => K.ref.current
    ), [ce] = _e.slice(-1), he = document.activeElement;
    for (const K of ie)
      if (K === he || (K == null || K.scrollIntoView({
        block: "nearest"
      }), K === ge && $ && ($.scrollTop = 0), K === ce && $ && ($.scrollTop = $.scrollHeight), K == null || K.focus(), document.activeElement !== he))
        return;
  }, [
    B,
    $
  ]), D = be(
    () => W([
      M,
      x
    ]),
    [
      W,
      M,
      x
    ]
  );
  ee(() => {
    U && D();
  }, [
    U,
    D
  ]);
  const { onOpenChange: z, triggerPointerDownPosRef: Y } = y;
  ee(() => {
    if (x) {
      let ie = {
        x: 0,
        y: 0
      };
      const ge = (ce) => {
        var he, K, se, ne;
        ie = {
          x: Math.abs(Math.round(ce.pageX) - ((he = (K = Y.current) === null || K === void 0 ? void 0 : K.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(ce.pageY) - ((se = (ne = Y.current) === null || ne === void 0 ? void 0 : ne.y) !== null && se !== void 0 ? se : 0))
        };
      }, _e = (ce) => {
        ie.x <= 10 && ie.y <= 10 ? ce.preventDefault() : x.contains(ce.target) || z(!1), document.removeEventListener("pointermove", ge), Y.current = null;
      };
      return Y.current !== null && (document.addEventListener("pointermove", ge), document.addEventListener("pointerup", _e, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", ge), document.removeEventListener("pointerup", _e, {
          capture: !0
        });
      };
    }
  }, [
    x,
    z,
    Y
  ]), ee(() => {
    const ie = () => z(!1);
    return window.addEventListener("blur", ie), window.addEventListener("resize", ie), () => {
      window.removeEventListener("blur", ie), window.removeEventListener("resize", ie);
    };
  }, [
    z
  ]);
  const [H, Q] = Dy((ie) => {
    const ge = B().filter(
      (he) => !he.disabled
    ), _e = ge.find(
      (he) => he.ref.current === document.activeElement
    ), ce = Ay(ge, ie, _e);
    ce && setTimeout(
      () => ce.ref.current.focus()
    );
  }), I = be((ie, ge, _e) => {
    const ce = !k.current && !_e;
    (y.value !== void 0 && y.value === ge || ce) && (E(ie), ce && (k.current = !0));
  }, [
    y.value
  ]), re = be(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), me = be((ie, ge, _e) => {
    const ce = !k.current && !_e;
    (y.value !== void 0 && y.value === ge || ce) && G(ie);
  }, [
    y.value
  ]), ae = r === "popper" ? mm : CI, te = ae === mm ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: f,
    collisionBoundary: p,
    collisionPadding: h,
    sticky: m,
    hideWhenDetached: v,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ w(Ty, {
    scope: n,
    content: x,
    viewport: $,
    onViewportChange: N,
    itemRefCallback: I,
    selectedItem: M,
    onItemLeave: re,
    itemTextRefCallback: me,
    focusSelectedItem: D,
    selectedItemText: V,
    position: r,
    isPositioned: U,
    searchRef: H
  }, /* @__PURE__ */ w(Cs, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ w($c, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (ie) => {
      ie.preventDefault();
    },
    onUnmountAutoFocus: J(o, (ie) => {
      var ge;
      (ge = y.trigger) === null || ge === void 0 || ge.focus({
        preventScroll: !0
      }), ie.preventDefault();
    })
  }, /* @__PURE__ */ w(uo, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (ie) => ie.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ w(ae, O({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (ie) => ie.preventDefault()
  }, b, te, {
    onPlaced: () => R(!0),
    ref: S,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: J(b.onKeyDown, (ie) => {
      const ge = ie.ctrlKey || ie.altKey || ie.metaKey;
      if (ie.key === "Tab" && ie.preventDefault(), !ge && ie.key.length === 1 && Q(ie.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(ie.key)) {
        let ce = B().filter(
          (he) => !he.disabled
        ).map(
          (he) => he.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(ie.key) && (ce = ce.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(ie.key)) {
          const he = ie.target, K = ce.indexOf(he);
          ce = ce.slice(K + 1);
        }
        setTimeout(
          () => W(ce)
        ), ie.preventDefault();
      }
    })
  }))))));
}), CI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = bo(zo, n), s = Lc(zo, n), [i, c] = X(null), [l, u] = X(null), f = Pe(
    t,
    (S) => u(S)
  ), p = Ef(n), h = Z(!1), m = Z(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, x = be(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const S = a.trigger.getBoundingClientRect(), M = l.getBoundingClientRect(), E = a.valueNode.getBoundingClientRect(), V = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = V.left - M.left, K = E.left - he, se = S.left - K, ne = S.width + se, Ee = Math.max(ne, M.width), De = window.innerWidth - Jn, Oe = Ha(K, [
          Jn,
          De - Ee
        ]);
        i.style.minWidth = ne + "px", i.style.left = Oe + "px";
      } else {
        const he = M.right - V.right, K = window.innerWidth - E.right - he, se = window.innerWidth - S.right - K, ne = S.width + se, Ee = Math.max(ne, M.width), De = window.innerWidth - Jn, Oe = Ha(K, [
          Jn,
          De - Ee
        ]);
        i.style.minWidth = ne + "px", i.style.right = Oe + "px";
      }
      const G = p(), B = window.innerHeight - Jn * 2, U = v.scrollHeight, R = window.getComputedStyle(l), k = parseInt(R.borderTopWidth, 10), W = parseInt(R.paddingTop, 10), D = parseInt(R.borderBottomWidth, 10), z = parseInt(R.paddingBottom, 10), Y = k + W + U + z + D, H = Math.min(g.offsetHeight * 5, Y), Q = window.getComputedStyle(v), I = parseInt(Q.paddingTop, 10), re = parseInt(Q.paddingBottom, 10), me = S.top + S.height / 2 - Jn, ae = B - me, te = g.offsetHeight / 2, ie = g.offsetTop + te, ge = k + W + ie, _e = Y - ge;
      if (ge <= me) {
        const he = g === G[G.length - 1].ref.current;
        i.style.bottom = "0px";
        const K = l.clientHeight - v.offsetTop - v.offsetHeight, se = Math.max(ae, te + (he ? re : 0) + K + D), ne = ge + se;
        i.style.height = ne + "px";
      } else {
        const he = g === G[0].ref.current;
        i.style.top = "0px";
        const se = Math.max(me, k + v.offsetTop + (he ? I : 0) + te) + _e;
        i.style.height = se + "px", v.scrollTop = ge - me + v.offsetTop;
      }
      i.style.margin = `${Jn}px 0`, i.style.minHeight = H + "px", i.style.maxHeight = B + "px", r == null || r(), requestAnimationFrame(
        () => h.current = !0
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
  St(
    () => x(),
    [
      x
    ]
  );
  const [_, $] = X();
  St(() => {
    l && $(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = be((S) => {
    S && m.current === !0 && (x(), y == null || y(), m.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ w(SI, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: h,
    onScrollButtonChange: N
  }, /* @__PURE__ */ w("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ w(pe.div, O({}, o, {
    ref: f,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), mm = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Jn, ...a } = e, s = Pf(n);
  return /* @__PURE__ */ w(_s, O({}, s, a, {
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
}), [SI, NI] = ca(zo, {}), vm = "SelectViewport", EI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Lc(vm, n), a = NI(vm, n), s = Pe(t, o.onViewportChange), i = Z(0);
  return /* @__PURE__ */ w(vn, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(Ic.Slot, {
    scope: n
  }, /* @__PURE__ */ w(pe.div, O({
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
    onScroll: J(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: f } = a;
      if (f != null && f.current && u) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const h = window.innerHeight - Jn * 2, m = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(m, v);
          if (g < h) {
            const b = g + p, y = Math.min(h, b), x = b - y;
            u.style.height = y + "px", u.style.bottom === "0px" && (l.scrollTop = x > 0 ? x : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), PI = "SelectGroup", [OI, TI] = ca(PI), jI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = bt();
  return /* @__PURE__ */ w(OI, {
    scope: n,
    id: o
  }, /* @__PURE__ */ w(pe.div, O({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), MI = "SelectLabel", kI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = TI(MI, n);
  return /* @__PURE__ */ w(pe.div, O({
    id: o.id
  }, r, {
    ref: t
  }));
}), Ru = "SelectItem", [DI, jy] = ca(Ru), AI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = bo(Ru, n), c = Lc(Ru, n), l = i.value === r, [u, f] = X(a ?? ""), [p, h] = X(!1), m = Pe(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = bt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ w(DI, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: be((b) => {
      f((y) => {
        var x;
        return y || ((x = b == null ? void 0 : b.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ w(Ic.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ w(pe.div, O({
    role: "option",
    "aria-labelledby": v,
    "data-highlighted": p ? "" : void 0,
    "aria-selected": l && p,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: m,
    onFocus: J(
      s.onFocus,
      () => h(!0)
    ),
    onBlur: J(
      s.onBlur,
      () => h(!1)
    ),
    onPointerUp: J(s.onPointerUp, g),
    onPointerMove: J(s.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: J(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: J(s.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (uI.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), ei = "SelectItemText", RI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = bo(ei, n), i = Lc(ei, n), c = jy(ei, n), l = hI(ei, n), [u, f] = X(null), p = Pe(
    t,
    (b) => f(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), h = u == null ? void 0 : u.textContent, m = Zt(
    () => /* @__PURE__ */ w("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, h),
    [
      c.disabled,
      c.value,
      h
    ]
  ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = l;
  return St(() => (v(m), () => g(m)), [
    v,
    g,
    m
  ]), /* @__PURE__ */ w(vn, null, /* @__PURE__ */ w(pe.span, O({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ lv(a.children, s.valueNode) : null);
}), II = "SelectItemIndicator", LI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return jy(II, n).isSelected ? /* @__PURE__ */ w(pe.span, O({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), FI = /* @__PURE__ */ L((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ w(pe.div, O({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function My(e) {
  return e === "" || e === void 0;
}
const ky = /* @__PURE__ */ L((e, t) => {
  const { value: n, ...r } = e, o = Z(null), a = Pe(t, o), s = ia(n);
  return ee(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && u) {
      const f = new Event("change", {
        bubbles: !0
      });
      u.call(i, n), i.dispatchEvent(f);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ w(Py, {
    asChild: !0
  }, /* @__PURE__ */ w("select", O({}, r, {
    ref: a,
    defaultValue: n
  })));
});
ky.displayName = "BubbleSelect";
function Dy(e) {
  const t = Je(e), n = Z(""), r = Z(0), o = be((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = be(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return ee(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Ay(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = BI(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function BI(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const VI = mI, Ry = gI, zI = yI, WI = xI, HI = wI, Iy = $I, UI = EI, KI = jI, Ly = kI, Fy = AI, GI = RI, YI = LI, By = FI, Of = VI, qI = KI, Tf = zI, Fc = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Ry,
  {
    ref: r,
    className: T(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(WI, { asChild: !0, children: /* @__PURE__ */ d.jsx(ja, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Fc.displayName = Ry.displayName;
const Bc = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ d.jsx(HI, { children: /* @__PURE__ */ d.jsx(
  Iy,
  {
    ref: o,
    className: T(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ d.jsx(
      UI,
      {
        className: T(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Bc.displayName = Iy.displayName;
const ZI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ly,
  {
    ref: n,
    className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
ZI.displayName = Ly.displayName;
const Vc = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Fy,
  {
    ref: r,
    className: T(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(YI, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d.jsx(GI, { children: t })
    ]
  }
));
Vc.displayName = Fy.displayName;
const XI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  By,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
XI.displayName = By.displayName;
const Vy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: T(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Vy.displayName = "Card";
const QI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: T("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
QI.displayName = "CardHeader";
const JI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "h3",
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
JI.displayName = "CardTitle";
const e9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "p",
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
e9.displayName = "CardDescription";
const t9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: T("p-6 pt-0", e), ...t }));
t9.displayName = "CardContent";
const n9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: T(" flex items-center p-6 pt-0", e),
    ...t
  }
));
n9.displayName = "CardFooter";
const zy = "Checkbox", [r9, $Y] = ut(zy), [o9, a9] = r9(zy), s9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [f, p] = X(null), h = Pe(
    t,
    (x) => p(x)
  ), m = Z(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = Z(g);
  return ee(() => {
    const x = f == null ? void 0 : f.form;
    if (x) {
      const _ = () => b(y.current);
      return x.addEventListener("reset", _), () => x.removeEventListener("reset", _);
    }
  }, [
    f,
    b
  ]), /* @__PURE__ */ w(o9, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ w(pe.button, O({
    type: "button",
    role: "checkbox",
    "aria-checked": Yr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Wy(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: h,
    onKeyDown: J(e.onKeyDown, (x) => {
      x.key === "Enter" && x.preventDefault();
    }),
    onClick: J(e.onClick, (x) => {
      b(
        (_) => Yr(_) ? !0 : !_
      ), v && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(l9, {
    control: f,
    bubbles: !m.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), i9 = "CheckboxIndicator", c9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = a9(i9, n);
  return /* @__PURE__ */ w(ft, {
    present: r || Yr(a.state) || a.state === !0
  }, /* @__PURE__ */ w(pe.span, O({
    "data-state": Wy(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), l9 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Z(null), s = ia(n), i = ws(t);
  return ee(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Yr(n), f.call(c, Yr(n) ? !1 : n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", O({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Yr(n) ? !1 : n
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
function Yr(e) {
  return e === "indeterminate";
}
function Wy(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Hy = s9, u9 = c9, jf = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Hy,
  {
    ref: n,
    className: T(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx(
      u9,
      {
        className: T("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" })
      }
    )
  }
));
jf.displayName = Hy.displayName;
const Uy = "DropdownMenu", [d9, _Y] = ut(Uy, [
  Ss
]), Lt = Ss(), [f9, Ky] = d9(Uy), p9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Lt(t), l = Z(null), [u = !1, f] = vt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ w(f9, {
    scope: t,
    triggerId: bt(),
    triggerRef: l,
    contentId: bt(),
    open: u,
    onOpenChange: f,
    onOpenToggle: be(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    modal: i
  }, /* @__PURE__ */ w(nf, O({}, c, {
    open: u,
    onOpenChange: f,
    dir: r,
    modal: i
  }), n));
}, h9 = "DropdownMenuTrigger", m9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Ky(h9, n), s = Lt(n);
  return /* @__PURE__ */ w(rf, O({
    asChild: !0
  }, s), /* @__PURE__ */ w(pe.button, O({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: ps(t, a.triggerRef),
    onPointerDown: J(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: J(e.onKeyDown, (i) => {
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
}), v9 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ w(of, O({}, r, n));
}, g9 = "DropdownMenuContent", b9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ky(g9, n), a = Lt(n), s = Z(!1);
  return /* @__PURE__ */ w(af, O({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: J(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: J(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      (!o.modal || u) && (s.current = !0);
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
}), y9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(sf, O({}, o, r, {
    ref: t
  }));
}), x9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(cf, O({}, o, r, {
    ref: t
  }));
}), w9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(lf, O({}, o, r, {
    ref: t
  }));
}), $9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(uf, O({}, o, r, {
    ref: t
  }));
}), _9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(df, O({}, o, r, {
    ref: t
  }));
}), C9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(ff, O({}, o, r, {
    ref: t
  }));
}), S9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(pf, O({}, o, r, {
    ref: t
  }));
}), N9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(hf, O({}, o, r, {
    ref: t
  }));
}), E9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(mf, O({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, P9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(vf, O({}, o, r, {
    ref: t
  }));
}), O9 = /* @__PURE__ */ L((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ w(gf, O({}, o, r, {
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
}), T9 = p9, j9 = m9, Gy = v9, Yy = b9, M9 = y9, qy = x9, Zy = w9, Xy = $9, k9 = _9, Qy = C9, Jy = S9, e0 = N9, D9 = E9, t0 = P9, n0 = O9, CY = T9, SY = j9, NY = M9, EY = Gy, PY = D9, OY = k9, A9 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  t0,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(jr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
A9.displayName = t0.displayName;
const R9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  n0,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
R9.displayName = n0.displayName;
const I9 = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d.jsx(Gy, { children: /* @__PURE__ */ d.jsx(
  Yy,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
I9.displayName = Yy.displayName;
const L9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Zy,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
L9.displayName = Zy.displayName;
const F9 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  Xy,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Jy, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
F9.displayName = Xy.displayName;
const B9 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Qy,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Jy, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
B9.displayName = Qy.displayName;
const V9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  qy,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
V9.displayName = qy.displayName;
const z9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  e0,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
z9.displayName = e0.displayName;
const W9 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: T("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
W9.displayName = "DropdownMenuShortcut";
const Iu = "horizontal", H9 = [
  "horizontal",
  "vertical"
], r0 = /* @__PURE__ */ L((e, t) => {
  const { decorative: n, orientation: r = Iu, ...o } = e, a = o0(r) ? r : Iu, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ w(pe.div, O({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
r0.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !o0(r) ? new Error(U9(o, n)) : null;
  }
};
function U9(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Iu}\`.`;
}
function o0(e) {
  return H9.includes(e);
}
const a0 = r0, Ms = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ d.jsx(
    a0,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: T(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
Ms.displayName = a0.displayName;
var gm = 1, K9 = 0.9, G9 = 0.8, Y9 = 0.17, Il = 0.1, Ll = 0.999, q9 = 0.9999, Z9 = 0.99, X9 = /[\\\/_+.#"@\[\(\{&]/, Q9 = /[\\\/_+.#"@\[\(\{&]/g, J9 = /[\s-]/, s0 = /[\s-]/g;
function Lu(e, t, n, r, o, a, s) {
  if (a === t.length)
    return o === e.length ? gm : Z9;
  var i = `${o},${a}`;
  if (s[i] !== void 0)
    return s[i];
  for (var c = r.charAt(a), l = n.indexOf(c, o), u = 0, f, p, h, m; l >= 0; )
    f = Lu(e, t, n, r, l + 1, a + 1, s), f > u && (l === o ? f *= gm : X9.test(e.charAt(l - 1)) ? (f *= G9, h = e.slice(o, l - 1).match(Q9), h && o > 0 && (f *= Math.pow(Ll, h.length))) : J9.test(e.charAt(l - 1)) ? (f *= K9, m = e.slice(o, l - 1).match(s0), m && o > 0 && (f *= Math.pow(Ll, m.length))) : (f *= Y9, o > 0 && (f *= Math.pow(Ll, l - o))), e.charAt(l) !== t.charAt(a) && (f *= q9)), (f < Il && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (p = Lu(e, t, n, r, l + 1, a + 2, s), p * Il > f && (f = p * Il)), f > u && (u = f), l = n.indexOf(c, l + 1);
  return s[i] = u, u;
}
function bm(e) {
  return e.toLowerCase().replace(s0, " ");
}
function eL(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Lu(e, t, bm(e), bm(t), 0, 0, {});
}
var wa = '[cmdk-group=""]', Fl = '[cmdk-group-items=""]', tL = '[cmdk-group-heading=""]', Mf = '[cmdk-item=""]', ym = `${Mf}:not([aria-disabled="true"])`, Fu = "cmdk-item-select", Wr = "data-value", nL = (e, t, n) => eL(e, t, n), i0 = C.createContext(void 0), ks = () => C.useContext(i0), c0 = C.createContext(void 0), kf = () => C.useContext(c0), l0 = C.createContext(void 0), u0 = C.forwardRef((e, t) => {
  let n = No(() => {
    var I, re;
    return { search: "", value: (re = (I = e.value) != null ? I : e.defaultValue) != null ? re : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = No(() => /* @__PURE__ */ new Set()), o = No(() => /* @__PURE__ */ new Map()), a = No(() => /* @__PURE__ */ new Map()), s = No(() => /* @__PURE__ */ new Set()), i = f0(e), { label: c, children: l, value: u, onValueChange: f, filter: p, shouldFilter: h, loop: m, disablePointerSelection: v = !1, vimBindings: g = !0, ...b } = e, y = C.useId(), x = C.useId(), _ = C.useId(), $ = C.useRef(null), N = fL();
  Qr(() => {
    if (u !== void 0) {
      let I = u.trim();
      n.current.value = I, S.emit();
    }
  }, [u]), Qr(() => {
    N(6, U);
  }, []);
  let S = C.useMemo(() => ({ subscribe: (I) => (s.current.add(I), () => s.current.delete(I)), snapshot: () => n.current, setState: (I, re, me) => {
    var ae, te, ie;
    if (!Object.is(n.current[I], re)) {
      if (n.current[I] = re, I === "search")
        B(), V(), N(1, G);
      else if (I === "value" && (me || N(5, U), ((ae = i.current) == null ? void 0 : ae.value) !== void 0)) {
        let ge = re ?? "";
        (ie = (te = i.current).onValueChange) == null || ie.call(te, ge);
        return;
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((I) => I());
  } }), []), M = C.useMemo(() => ({ value: (I, re, me) => {
    var ae;
    re !== ((ae = a.current.get(I)) == null ? void 0 : ae.value) && (a.current.set(I, { value: re, keywords: me }), n.current.filtered.items.set(I, E(re, me)), N(2, () => {
      V(), S.emit();
    }));
  }, item: (I, re) => (r.current.add(I), re && (o.current.has(re) ? o.current.get(re).add(I) : o.current.set(re, /* @__PURE__ */ new Set([I]))), N(3, () => {
    B(), V(), n.current.value || G(), S.emit();
  }), () => {
    a.current.delete(I), r.current.delete(I), n.current.filtered.items.delete(I);
    let me = R();
    N(4, () => {
      B(), (me == null ? void 0 : me.getAttribute("id")) === I && G(), S.emit();
    });
  }), group: (I) => (o.current.has(I) || o.current.set(I, /* @__PURE__ */ new Set()), () => {
    a.current.delete(I), o.current.delete(I);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], disablePointerSelection: v, listId: y, inputId: _, labelId: x, listInnerRef: $ }), []);
  function E(I, re) {
    var me, ae;
    let te = (ae = (me = i.current) == null ? void 0 : me.filter) != null ? ae : nL;
    return I ? te(I, n.current.search, re) : 0;
  }
  function V() {
    if (!n.current.search || i.current.shouldFilter === !1)
      return;
    let I = n.current.filtered.items, re = [];
    n.current.filtered.groups.forEach((ae) => {
      let te = o.current.get(ae), ie = 0;
      te.forEach((ge) => {
        let _e = I.get(ge);
        ie = Math.max(_e, ie);
      }), re.push([ae, ie]);
    });
    let me = $.current;
    k().sort((ae, te) => {
      var ie, ge;
      let _e = ae.getAttribute("id"), ce = te.getAttribute("id");
      return ((ie = I.get(ce)) != null ? ie : 0) - ((ge = I.get(_e)) != null ? ge : 0);
    }).forEach((ae) => {
      let te = ae.closest(Fl);
      te ? te.appendChild(ae.parentElement === te ? ae : ae.closest(`${Fl} > *`)) : me.appendChild(ae.parentElement === me ? ae : ae.closest(`${Fl} > *`));
    }), re.sort((ae, te) => te[1] - ae[1]).forEach((ae) => {
      let te = $.current.querySelector(`${wa}[${Wr}="${encodeURIComponent(ae[0])}"]`);
      te == null || te.parentElement.appendChild(te);
    });
  }
  function G() {
    let I = k().find((me) => me.getAttribute("aria-disabled") !== "true"), re = I == null ? void 0 : I.getAttribute(Wr);
    S.setState("value", re || void 0);
  }
  function B() {
    var I, re, me, ae;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let te = 0;
    for (let ie of r.current) {
      let ge = (re = (I = a.current.get(ie)) == null ? void 0 : I.value) != null ? re : "", _e = (ae = (me = a.current.get(ie)) == null ? void 0 : me.keywords) != null ? ae : [], ce = E(ge, _e);
      n.current.filtered.items.set(ie, ce), ce > 0 && te++;
    }
    for (let [ie, ge] of o.current)
      for (let _e of ge)
        if (n.current.filtered.items.get(_e) > 0) {
          n.current.filtered.groups.add(ie);
          break;
        }
    n.current.filtered.count = te;
  }
  function U() {
    var I, re, me;
    let ae = R();
    ae && (((I = ae.parentElement) == null ? void 0 : I.firstChild) === ae && ((me = (re = ae.closest(wa)) == null ? void 0 : re.querySelector(tL)) == null || me.scrollIntoView({ block: "nearest" })), ae.scrollIntoView({ block: "nearest" }));
  }
  function R() {
    var I;
    return (I = $.current) == null ? void 0 : I.querySelector(`${Mf}[aria-selected="true"]`);
  }
  function k() {
    var I;
    return Array.from((I = $.current) == null ? void 0 : I.querySelectorAll(ym));
  }
  function W(I) {
    let re = k()[I];
    re && S.setState("value", re.getAttribute(Wr));
  }
  function D(I) {
    var re;
    let me = R(), ae = k(), te = ae.findIndex((ge) => ge === me), ie = ae[te + I];
    (re = i.current) != null && re.loop && (ie = te + I < 0 ? ae[ae.length - 1] : te + I === ae.length ? ae[0] : ae[te + I]), ie && S.setState("value", ie.getAttribute(Wr));
  }
  function z(I) {
    let re = R(), me = re == null ? void 0 : re.closest(wa), ae;
    for (; me && !ae; )
      me = I > 0 ? uL(me, wa) : dL(me, wa), ae = me == null ? void 0 : me.querySelector(ym);
    ae ? S.setState("value", ae.getAttribute(Wr)) : D(I);
  }
  let Y = () => W(k().length - 1), H = (I) => {
    I.preventDefault(), I.metaKey ? Y() : I.altKey ? z(1) : D(1);
  }, Q = (I) => {
    I.preventDefault(), I.metaKey ? W(0) : I.altKey ? z(-1) : D(-1);
  };
  return C.createElement(pe.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (I) => {
    var re;
    if ((re = b.onKeyDown) == null || re.call(b, I), !I.defaultPrevented)
      switch (I.key) {
        case "n":
        case "j": {
          g && I.ctrlKey && H(I);
          break;
        }
        case "ArrowDown": {
          H(I);
          break;
        }
        case "p":
        case "k": {
          g && I.ctrlKey && Q(I);
          break;
        }
        case "ArrowUp": {
          Q(I);
          break;
        }
        case "Home": {
          I.preventDefault(), W(0);
          break;
        }
        case "End": {
          I.preventDefault(), Y();
          break;
        }
        case "Enter":
          if (!I.nativeEvent.isComposing && I.keyCode !== 229) {
            I.preventDefault();
            let me = R();
            if (me) {
              let ae = new Event(Fu);
              me.dispatchEvent(ae);
            }
          }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: hL }, c), zc(e, (I) => C.createElement(c0.Provider, { value: S }, C.createElement(i0.Provider, { value: M }, I))));
}), rL = C.forwardRef((e, t) => {
  var n, r;
  let o = C.useId(), a = C.useRef(null), s = C.useContext(l0), i = ks(), c = f0(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Qr(() => {
    if (!l)
      return i.item(o, s == null ? void 0 : s.id);
  }, [l]);
  let u = p0(o, a, [e.value, e.children, a], e.keywords), f = kf(), p = Jr((N) => N.value && N.value === u.current), h = Jr((N) => l || i.filter() === !1 ? !0 : N.search ? N.filtered.items.get(o) > 0 : !0);
  C.useEffect(() => {
    let N = a.current;
    if (!(!N || e.disabled))
      return N.addEventListener(Fu, m), () => N.removeEventListener(Fu, m);
  }, [h, e.onSelect, e.disabled]);
  function m() {
    var N, S;
    v(), (S = (N = c.current).onSelect) == null || S.call(N, u.current);
  }
  function v() {
    f.setState("value", u.current, !0);
  }
  if (!h)
    return null;
  let { disabled: g, value: b, onSelect: y, forceMount: x, keywords: _, ...$ } = e;
  return C.createElement(pe.div, { ref: Ua([a, t]), ...$, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.disablePointerSelection ? void 0 : v, onClick: g ? void 0 : m }, e.children);
}), oL = C.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = C.useId(), i = C.useRef(null), c = C.useRef(null), l = C.useId(), u = ks(), f = Jr((h) => o || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Qr(() => u.group(s), []), p0(s, i, [e.value, e.heading, c]);
  let p = C.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return C.createElement(pe.div, { ref: Ua([i, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && C.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), zc(e, (h) => C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, C.createElement(l0.Provider, { value: p }, h))));
}), aL = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Jr((s) => !s.search);
  return !n && !a ? null : C.createElement(pe.div, { ref: Ua([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), sL = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = kf(), s = Jr((u) => u.search), i = Jr((u) => u.value), c = ks(), l = C.useMemo(() => {
    var u;
    let f = (u = c.listInnerRef.current) == null ? void 0 : u.querySelector(`${Mf}[${Wr}="${encodeURIComponent(i)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement(pe.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (u) => {
    o || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), d0 = C.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = C.useRef(null), s = C.useRef(null), i = ks();
  return C.useEffect(() => {
    if (s.current && a.current) {
      let c = s.current, l = a.current, u, f = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let p = c.offsetHeight;
          l.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return f.observe(c), () => {
        cancelAnimationFrame(u), f.unobserve(c);
      };
    }
  }, []), C.createElement(pe.div, { ref: Ua([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: i.listId }, zc(e, (c) => C.createElement("div", { ref: Ua([s, i.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), iL = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return C.createElement(Ts, { open: n, onOpenChange: r }, C.createElement(js, { container: s }, C.createElement(mo, { "cmdk-overlay": "", className: o }), C.createElement(vo, { "aria-label": e.label, "cmdk-dialog": "", className: a }, C.createElement(u0, { ref: t, ...i }))));
}), cL = C.forwardRef((e, t) => Jr((n) => n.filtered.count === 0) ? C.createElement(pe.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), lL = C.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return C.createElement(pe.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, zc(e, (s) => C.createElement("div", { "aria-hidden": !0 }, s)));
}), Ht = Object.assign(u0, { List: d0, Item: rL, Input: sL, Group: oL, Separator: aL, Dialog: iL, Empty: cL, Loading: lL });
function uL(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function dL(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function f0(e) {
  let t = C.useRef(e);
  return Qr(() => {
    t.current = e;
  }), t;
}
var Qr = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function No(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ua(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Jr(e) {
  let t = kf(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function p0(e, t, n, r = []) {
  let o = C.useRef(), a = ks();
  return Qr(() => {
    var s;
    let i = (() => {
      var l;
      for (let u of n) {
        if (typeof u == "string")
          return u.trim();
        if (typeof u == "object" && "current" in u)
          return u.current ? (l = u.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = r.map((l) => l.trim());
    a.value(e, i, c), (s = t.current) == null || s.setAttribute(Wr, i), o.current = i;
  }), o;
}
var fL = () => {
  let [e, t] = C.useState(), n = No(() => /* @__PURE__ */ new Map());
  return Qr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function pL(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function zc({ asChild: e, children: t }, n) {
  return e && C.isValidElement(t) ? C.cloneElement(pL(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var hL = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const ar = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht,
  {
    ref: n,
    className: T(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
ar.displayName = Ht.displayName;
const TY = ({ children: e, ...t }) => /* @__PURE__ */ d.jsx(yy, { ...t, children: /* @__PURE__ */ d.jsx(Cf, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ d.jsx(ar, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), Cr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ d.jsx(yi, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ d.jsx(
    Ht.Input,
    {
      ref: n,
      className: T(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
Cr.displayName = Ht.Input.displayName;
const la = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.List,
  {
    ref: n,
    className: T("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
la.displayName = Ht.List.displayName;
const Sr = C.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  Ht.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Sr.displayName = Ht.Empty.displayName;
const $n = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.Group,
  {
    ref: n,
    className: T(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
$n.displayName = Ht.Group.displayName;
const Ka = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.Separator,
  {
    ref: n,
    className: T("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ka.displayName = Ht.Separator.displayName;
const Gt = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ht.Item,
  {
    ref: n,
    className: T("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
Gt.displayName = Ht.Item.displayName;
const mL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
mL.displayName = "CommandShortcut";
const vL = /* @__PURE__ */ L((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ w("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ w(pe.div, O({}, o, {
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
}), gL = vL, jY = gL;
function bL(e, t) {
  return ud((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const h0 = "ScrollArea", [m0, MY] = ut(h0), [yL, on] = m0(h0), xL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = X(null), [l, u] = X(null), [f, p] = X(null), [h, m] = X(null), [v, g] = X(null), [b, y] = X(0), [x, _] = X(0), [$, N] = X(!1), [S, M] = X(!1), E = Pe(
    t,
    (G) => c(G)
  ), V = zn(o);
  return /* @__PURE__ */ w(yL, {
    scope: n,
    type: r,
    dir: V,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: f,
    onContentChange: p,
    scrollbarX: h,
    onScrollbarXChange: m,
    scrollbarXEnabled: $,
    onScrollbarXEnabledChange: N,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: M,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ w(pe.div, O({
    dir: V
  }, s, {
    ref: E,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": b + "px",
      "--radix-scroll-area-corner-height": x + "px",
      ...e.style
    }
  })));
}), wL = "ScrollAreaViewport", $L = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = on(wL, n), s = Z(null), i = Pe(t, s, a.onViewportChange);
  return /* @__PURE__ */ w(vn, null, /* @__PURE__ */ w("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ w(pe.div, O({
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
  }), /* @__PURE__ */ w("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), ir = "ScrollAreaScrollbar", v0 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(ir, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return ee(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ w(_L, O({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ w(CL, O({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ w(g0, O({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ w(Df, O({}, r, {
    ref: t
  })) : null;
}), _L = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(ir, e.__scopeScrollArea), [a, s] = X(!1);
  return ee(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, u = () => {
        c = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", u);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ w(ft, {
    present: n || a
  }, /* @__PURE__ */ w(g0, O({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), CL = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = on(ir, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Hc(
    () => c("SCROLL_END"),
    100
  ), [i, c] = bL("hidden", {
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
  return ee(() => {
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
  ]), ee(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let f = l[u];
      const p = () => {
        const h = l[u];
        f !== h && (c("SCROLL"), s()), f = h;
      };
      return l.addEventListener("scroll", p), () => l.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ w(ft, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ w(Df, O({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: J(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: J(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), g0 = /* @__PURE__ */ L((e, t) => {
  const n = on(ir, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = X(!1), i = e.orientation === "horizontal", c = Hc(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Wo(n.viewport, c), Wo(n.content, c), /* @__PURE__ */ w(ft, {
    present: r || a
  }, /* @__PURE__ */ w(Df, O({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Df = /* @__PURE__ */ L((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = on(ir, e.__scopeScrollArea), a = Z(null), s = Z(0), [i, c] = X({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = w0(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, h) {
    return ML(p, s.current, i, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ w(SL, O({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, h = xm(p, i, o.dir);
        a.current.style.transform = `translate3d(${h}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ w(NL, O({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, h = xm(p, i);
        a.current.style.transform = `translate3d(0, ${h}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = f(p));
    }
  })) : null;
}), SL = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(ir, e.__scopeScrollArea), [s, i] = X(), c = Z(null), l = Pe(t, c, a.onScrollbarXChange);
  return ee(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(y0, O({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": Wc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), _0(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Hi(s.paddingLeft),
          paddingEnd: Hi(s.paddingRight)
        }
      });
    }
  }));
}), NL = /* @__PURE__ */ L((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(ir, e.__scopeScrollArea), [s, i] = X(), c = Z(null), l = Pe(t, c, a.onScrollbarYChange);
  return ee(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ w(y0, O({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": Wc(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), _0(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Hi(s.paddingTop),
          paddingEnd: Hi(s.paddingBottom)
        }
      });
    }
  }));
}), [EL, b0] = m0(ir), y0 = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: f, ...p } = e, h = on(ir, n), [m, v] = X(null), g = Pe(
    t,
    (E) => v(E)
  ), b = Z(null), y = Z(""), x = h.viewport, _ = r.content - r.viewport, $ = Je(u), N = Je(c), S = Hc(f, 10);
  function M(E) {
    if (b.current) {
      const V = E.clientX - b.current.left, G = E.clientY - b.current.top;
      l({
        x: V,
        y: G
      });
    }
  }
  return ee(() => {
    const E = (V) => {
      const G = V.target;
      (m == null ? void 0 : m.contains(G)) && $(V, _);
    };
    return document.addEventListener("wheel", E, {
      passive: !1
    }), () => document.removeEventListener("wheel", E, {
      passive: !1
    });
  }, [
    x,
    m,
    _,
    $
  ]), ee(N, [
    r,
    N
  ]), Wo(m, S), Wo(h.content, S), /* @__PURE__ */ w(EL, {
    scope: n,
    scrollbar: m,
    hasThumb: o,
    onThumbChange: Je(a),
    onThumbPointerUp: Je(s),
    onThumbPositionChange: N,
    onThumbPointerDown: Je(i)
  }, /* @__PURE__ */ w(pe.div, O({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: J(e.onPointerDown, (E) => {
      E.button === 0 && (E.target.setPointerCapture(E.pointerId), b.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), M(E));
    }),
    onPointerMove: J(e.onPointerMove, M),
    onPointerUp: J(e.onPointerUp, (E) => {
      const V = E.target;
      V.hasPointerCapture(E.pointerId) && V.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = y.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null;
    })
  })));
}), Bu = "ScrollAreaThumb", PL = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = b0(Bu, e.__scopeScrollArea);
  return /* @__PURE__ */ w(ft, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ w(OL, O({
    ref: t
  }, r)));
}), OL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = on(Bu, n), s = b0(Bu, n), { onThumbPositionChange: i } = s, c = Pe(
    t,
    (f) => s.onThumbChange(f)
  ), l = Z(), u = Hc(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return ee(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (u(), !l.current) {
          const h = kL(f, i);
          l.current = h, i();
        }
      };
      return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ w(pe.div, O({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: J(e.onPointerDownCapture, (f) => {
      const h = f.target.getBoundingClientRect(), m = f.clientX - h.left, v = f.clientY - h.top;
      s.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: J(e.onPointerUp, s.onThumbPointerUp)
  }));
}), x0 = "ScrollAreaCorner", TL = /* @__PURE__ */ L((e, t) => {
  const n = on(x0, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ w(jL, O({}, e, {
    ref: t
  })) : null;
}), jL = /* @__PURE__ */ L((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = on(x0, n), [a, s] = X(0), [i, c] = X(0), l = !!(a && i);
  return Wo(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), Wo(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), l ? /* @__PURE__ */ w(pe.div, O({}, r, {
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
function Hi(e) {
  return e ? parseInt(e, 10) : 0;
}
function w0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Wc(e) {
  const t = w0(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function ML(e, t, n, r = "ltr") {
  const o = Wc(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, f = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return $0([
    c,
    l
  ], f)(e);
}
function xm(e, t, n = "ltr") {
  const r = Wc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Ha(e, c);
  return $0([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function $0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function _0(e, t) {
  return e > 0 && e < t;
}
const kL = (e, t = () => {
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
function Hc(e, t) {
  const n = Je(e), r = Z(0);
  return ee(
    () => () => window.clearTimeout(r.current),
    []
  ), be(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Wo(e, t) {
  const n = Je(t);
  St(() => {
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
const C0 = xL, DL = $L, AL = TL, RL = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  C0,
  {
    ref: r,
    className: T("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx(DL, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ d.jsx(S0, {}),
      /* @__PURE__ */ d.jsx(AL, {})
    ]
  }
));
RL.displayName = C0.displayName;
const S0 = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ d.jsx(
  v0,
  {
    ref: r,
    orientation: t,
    className: T(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(PL, { className: "relative flex-1 rounded-full bg-border" })
  }
));
S0.displayName = v0.displayName;
const kY = Ts, DY = Ac, AY = go, IL = js, N0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  mo,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
N0.displayName = mo.displayName;
const LL = Go(
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
), FL = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(IL, { children: [
  /* @__PURE__ */ d.jsx(N0, {}),
  /* @__PURE__ */ d.jsxs(
    vo,
    {
      ref: o,
      className: T(LL({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ d.jsxs(go, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ d.jsx(uc, { className: "h-4 w-4" }),
          /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
FL.displayName = vo.displayName;
const BL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
BL.displayName = "SheetHeader";
const VL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
VL.displayName = "SheetFooter";
const zL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  oa,
  {
    ref: n,
    className: T("text-lg font-semibold text-foreground", e),
    ...t
  }
));
zL.displayName = oa.displayName;
const WL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  aa,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
WL.displayName = aa.displayName;
const Af = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ d.jsx(
  "table",
  {
    ref: n,
    className: T("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Af.displayName = "TableUI";
const E0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("thead", { ref: n, className: T("[&_tr]:border-b", e), ...t }));
E0.displayName = "TableHeader";
const P0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tbody",
  {
    ref: n,
    className: T("[&_tr:last-child]:border-0", e),
    ...t
  }
));
P0.displayName = "TableBody";
const HL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: n,
    className: T("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
HL.displayName = "TableFooter";
const Uc = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tr",
  {
    ref: n,
    className: T(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Uc.displayName = "TableRow";
const O0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "th",
  {
    ref: n,
    className: T(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
O0.displayName = "TableHead";
const Rf = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: n,
    className: T("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Rf.displayName = "TableCell";
const UL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: n,
    className: T("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
UL.displayName = "TableCaption";
const KL = "AlertDialog", [GL, RY] = ut(KL, [
  hy
]), cr = hy(), YL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = cr(t);
  return /* @__PURE__ */ w(Ts, O({}, r, n, {
    modal: !0
  }));
}, qL = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = cr(n);
  return /* @__PURE__ */ w(Ac, O({}, o, r, {
    ref: t
  }));
}), ZL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = cr(t);
  return /* @__PURE__ */ w(js, O({}, r, n));
}, XL = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = cr(n);
  return /* @__PURE__ */ w(mo, O({}, o, r, {
    ref: t
  }));
}), T0 = "AlertDialogContent", [QL, JL] = GL(T0), eF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = cr(n), s = Z(null), i = Pe(t, s), c = Z(null);
  return /* @__PURE__ */ w(B8, {
    contentName: T0,
    titleName: tF,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ w(QL, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ w(vo, O({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: J(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ w(dd, null, r), !1)));
}), tF = "AlertDialogTitle", nF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = cr(n);
  return /* @__PURE__ */ w(oa, O({}, o, r, {
    ref: t
  }));
}), rF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = cr(n);
  return /* @__PURE__ */ w(aa, O({}, o, r, {
    ref: t
  }));
}), oF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = cr(n);
  return /* @__PURE__ */ w(go, O({}, o, r, {
    ref: t
  }));
}), aF = "AlertDialogCancel", sF = /* @__PURE__ */ L((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = JL(aF, n), a = cr(n), s = Pe(t, o);
  return /* @__PURE__ */ w(go, O({}, a, r, {
    ref: s
  }));
}), iF = YL, cF = qL, lF = ZL, j0 = XL, M0 = eF, k0 = oF, D0 = sF, A0 = nF, R0 = rF, IY = iF, LY = cF, uF = lF, I0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  j0,
  {
    className: T(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
I0.displayName = j0.displayName;
const dF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs(uF, { children: [
  /* @__PURE__ */ d.jsx(I0, {}),
  /* @__PURE__ */ d.jsx(
    M0,
    {
      ref: n,
      className: T(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
dF.displayName = M0.displayName;
const fF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
fF.displayName = "AlertDialogHeader";
const pF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
pF.displayName = "AlertDialogFooter";
const hF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  A0,
  {
    ref: n,
    className: T("text-lg font-semibold", e),
    ...t
  }
));
hF.displayName = A0.displayName;
const mF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  R0,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
mF.displayName = R0.displayName;
const vF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  k0,
  {
    ref: n,
    className: T(xr(), e),
    ...t
  }
));
vF.displayName = k0.displayName;
const gF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  D0,
  {
    ref: n,
    className: T(
      xr({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
gF.displayName = D0.displayName;
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: T("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const L0 = "Collapsible", [bF, F0] = ut(L0), [yF, If] = bF(L0), xF = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = vt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ w(yF, {
    scope: n,
    disabled: a,
    contentId: bt(),
    open: c,
    onOpenToggle: be(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ w(pe.div, O({
    "data-state": Lf(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), wF = "CollapsibleTrigger", B0 = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = If(wF, n);
  return /* @__PURE__ */ w(pe.button, O({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Lf(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: J(e.onClick, o.onOpenToggle)
  }));
}), V0 = "CollapsibleContent", z0 = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = If(V0, e.__scopeCollapsible);
  return /* @__PURE__ */ w(
    ft,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ w($F, O({}, r, {
      ref: t,
      present: a
    }))
  );
}), $F = /* @__PURE__ */ L((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = If(V0, n), [i, c] = X(r), l = Z(null), u = Pe(t, l), f = Z(0), p = f.current, h = Z(0), m = h.current, v = s.open || i, g = Z(v), b = Z();
  return ee(() => {
    const y = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(y);
  }, []), St(() => {
    const y = l.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const x = y.getBoundingClientRect();
      f.current = x.height, h.current = x.width, g.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ w(pe.div, O({
    "data-state": Lf(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !v
  }, a, {
    ref: u,
    style: {
      "--radix-collapsible-content-height": p ? `${p}px` : void 0,
      "--radix-collapsible-content-width": m ? `${m}px` : void 0,
      ...e.style
    }
  }), v && o);
});
function Lf(e) {
  return e ? "open" : "closed";
}
const W0 = xF, _F = B0, CF = z0, Ir = "Accordion", SF = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Ff, NF, EF] = kr(Ir), [Kc, FY] = ut(Ir, [
  EF,
  F0
]), Bf = F0(), H0 = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ A.createElement(Ff.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ A.createElement(jF, O({}, a, {
    ref: t
  })) : /* @__PURE__ */ A.createElement(TF, O({}, o, {
    ref: t
  })));
});
H0.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [U0, PF] = Kc(Ir), [K0, OF] = Kc(Ir, {
  collapsible: !1
}), TF = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ A.createElement(U0, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: A.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ A.createElement(K0, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ A.createElement(G0, O({}, s, {
    ref: t
  }))));
}), jF = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = A.useCallback(
    (u) => i(
      (f = []) => [
        ...f,
        u
      ]
    ),
    [
      i
    ]
  ), l = A.useCallback(
    (u) => i(
      (f = []) => f.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ A.createElement(U0, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ A.createElement(K0, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ A.createElement(G0, O({}, a, {
    ref: t
  }))));
}), [MF, Gc] = Kc(Ir), G0 = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = A.useRef(null), c = Pe(i, t), l = NF(n), f = zn(o) === "ltr", p = J(e.onKeyDown, (h) => {
    var m;
    if (!SF.includes(h.key))
      return;
    const v = h.target, g = l().filter((E) => {
      var V;
      return !((V = E.ref.current) !== null && V !== void 0 && V.disabled);
    }), b = g.findIndex(
      (E) => E.ref.current === v
    ), y = g.length;
    if (b === -1)
      return;
    h.preventDefault();
    let x = b;
    const _ = 0, $ = y - 1, N = () => {
      x = b + 1, x > $ && (x = _);
    }, S = () => {
      x = b - 1, x < _ && (x = $);
    };
    switch (h.key) {
      case "Home":
        x = _;
        break;
      case "End":
        x = $;
        break;
      case "ArrowRight":
        a === "horizontal" && (f ? N() : S());
        break;
      case "ArrowDown":
        a === "vertical" && N();
        break;
      case "ArrowLeft":
        a === "horizontal" && (f ? S() : N());
        break;
      case "ArrowUp":
        a === "vertical" && S();
        break;
    }
    const M = x % y;
    (m = g[M].ref.current) === null || m === void 0 || m.focus();
  });
  return /* @__PURE__ */ A.createElement(MF, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ A.createElement(Ff.Slot, {
    scope: n
  }, /* @__PURE__ */ A.createElement(pe.div, O({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Vu = "AccordionItem", [kF, Vf] = Kc(Vu), DF = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Gc(Vu, n), s = PF(Vu, n), i = Bf(n), c = bt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ A.createElement(kF, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ A.createElement(W0, O({
    "data-orientation": a.orientation,
    "data-state": Y0(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (f) => {
      f ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), AF = "AccordionHeader", RF = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gc(Ir, n), a = Vf(AF, n);
  return /* @__PURE__ */ A.createElement(pe.h3, O({
    "data-orientation": o.orientation,
    "data-state": Y0(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), wm = "AccordionTrigger", IF = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gc(Ir, n), a = Vf(wm, n), s = OF(wm, n), i = Bf(n);
  return /* @__PURE__ */ A.createElement(Ff.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ A.createElement(_F, O({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), LF = "AccordionContent", FF = /* @__PURE__ */ A.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gc(Ir, n), a = Vf(LF, n), s = Bf(n);
  return /* @__PURE__ */ A.createElement(CF, O({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, s, r, {
    ref: t,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function Y0(e) {
  return e ? "open" : "closed";
}
const BF = H0, VF = DF, zF = RF, q0 = IF, Z0 = FF, BY = BF, WF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  VF,
  {
    ref: n,
    className: T("border-b", e),
    ...t
  }
));
WF.displayName = "AccordionItem";
const HF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(zF, { className: "flex", children: /* @__PURE__ */ d.jsxs(
  q0,
  {
    ref: r,
    className: T(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(ja, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
HF.displayName = q0.displayName;
const UF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Z0,
  {
    ref: r,
    className: T(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
UF.displayName = Z0.displayName;
const VY = W0, zY = B0, WY = z0;
let Bl;
const X0 = "HoverCard", [Q0, HY] = ut(X0, [
  Hn
]), zf = Hn(), [KF, Wf] = Q0(X0), GF = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = zf(t), l = Z(0), u = Z(0), f = Z(!1), p = Z(!1), [h = !1, m] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = be(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => m(!0),
      s
    );
  }, [
    s,
    m
  ]), g = be(() => {
    clearTimeout(l.current), !f.current && !p.current && (u.current = window.setTimeout(
      () => m(!1),
      i
    ));
  }, [
    i,
    m
  ]), b = be(
    () => m(!1),
    [
      m
    ]
  );
  return ee(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ w(KF, {
    scope: t,
    open: h,
    onOpenChange: m,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: f,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ w(na, c, n));
}, YF = "HoverCardTrigger", qF = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Wf(YF, n), a = zf(n);
  return /* @__PURE__ */ w($s, O({
    asChild: !0
  }, a), /* @__PURE__ */ w(pe.a, O({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: J(e.onPointerEnter, Ui(o.onOpen)),
    onPointerLeave: J(e.onPointerLeave, Ui(o.onClose)),
    onFocus: J(e.onFocus, o.onOpen),
    onBlur: J(e.onBlur, o.onClose),
    onTouchStart: J(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), ZF = "HoverCardPortal", [UY, XF] = Q0(ZF, {
  forceMount: void 0
}), zu = "HoverCardContent", QF = /* @__PURE__ */ L((e, t) => {
  const n = XF(zu, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Wf(zu, e.__scopeHoverCard);
  return /* @__PURE__ */ w(ft, {
    present: r || a.open
  }, /* @__PURE__ */ w(JF, O({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: J(e.onPointerEnter, Ui(a.onOpen)),
    onPointerLeave: J(e.onPointerLeave, Ui(a.onClose)),
    ref: t
  })));
}), JF = /* @__PURE__ */ L((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Wf(zu, n), l = zf(n), u = Z(null), f = Pe(t, u), [p, h] = X(!1);
  return ee(() => {
    if (p) {
      const m = document.body;
      return Bl = m.style.userSelect || m.style.webkitUserSelect, m.style.userSelect = "none", m.style.webkitUserSelect = "none", () => {
        m.style.userSelect = Bl, m.style.webkitUserSelect = Bl;
      };
    }
  }, [
    p
  ]), ee(() => {
    if (u.current) {
      const m = () => {
        h(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var v;
          ((v = document.getSelection()) === null || v === void 0 ? void 0 : v.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", m), () => {
        document.removeEventListener("pointerup", m), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    c.isPointerDownOnContentRef,
    c.hasSelectionRef
  ]), ee(() => {
    u.current && eB(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ w(uo, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: J(a, (m) => {
      m.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ w(_s, O({}, l, i, {
    onPointerDown: J(i.onPointerDown, (m) => {
      m.currentTarget.contains(m.target) && h(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: f,
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
function Ui(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function eB(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const tB = GF, nB = qF, J0 = QF, KY = tB, GY = nB, rB = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(
  J0,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: T(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
rB.displayName = J0.displayName;
const YY = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), Hf = "Menubar", [Wu, oB, aB] = kr(Hf), [ex, qY] = ut(Hf, [
  aB,
  Dr
]), Ft = Ss(), tx = Dr(), [sB, Uf] = ex(Hf), iB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = zn(i), u = tx(n), [f = "", p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [h, m] = X(null);
  return /* @__PURE__ */ w(sB, {
    scope: n,
    value: f,
    onMenuOpen: be((v) => {
      p(v), m(v);
    }, [
      p
    ]),
    onMenuClose: be(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: be((v) => {
      p(
        (g) => g ? "" : v
      ), m(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ w(Wu.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Wu.Slot, {
    scope: n
  }, /* @__PURE__ */ w(Ec, O({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: h,
    onCurrentTabStopIdChange: m
  }), /* @__PURE__ */ w(pe.div, O({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), nx = "MenubarMenu", [cB, rx] = ex(nx), lB = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = bt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Uf(nx, t), i = Ft(t), c = Z(null), l = Z(!1), u = s.value === a;
  return ee(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ w(cB, {
    scope: t,
    value: a,
    triggerId: bt(),
    triggerRef: c,
    contentId: bt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ w(nf, O({}, i, {
    open: u,
    onOpenChange: (f) => {
      f || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, $m = "MenubarTrigger", uB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = tx(n), s = Ft(n), i = Uf($m, n), c = rx($m, n), l = Z(null), u = Pe(t, l, c.triggerRef), [f, p] = X(!1), h = i.value === c.value;
  return /* @__PURE__ */ w(Wu.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ w(Pc, O({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ w(rf, O({
    asChild: !0
  }, s), /* @__PURE__ */ w(pe.button, O({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": h,
    "aria-controls": h ? c.contentId : void 0,
    "data-highlighted": f ? "" : void 0,
    "data-state": h ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: u,
    onPointerDown: J(e.onPointerDown, (m) => {
      !r && m.button === 0 && m.ctrlKey === !1 && (i.onMenuOpen(c.value), h || m.preventDefault());
    }),
    onPointerEnter: J(e.onPointerEnter, () => {
      if (!!i.value && !h) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: J(e.onKeyDown, (m) => {
      r || ([
        "Enter",
        " "
      ].includes(m.key) && i.onMenuToggle(c.value), m.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(m.key) && (c.wasKeyboardTriggerOpenRef.current = !0, m.preventDefault()));
    }),
    onFocus: J(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: J(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), dB = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ft(t);
  return /* @__PURE__ */ w(of, O({}, r, n));
}, _m = "MenubarContent", fB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ft(n), s = Uf(_m, n), i = rx(_m, n), c = oB(n), l = Z(!1);
  return /* @__PURE__ */ w(af, O({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: J(e.onCloseAutoFocus, (u) => {
      if (!!!s.value && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: J(e.onFocusOutside, (u) => {
      const f = u.target;
      c().some((h) => {
        var m;
        return (m = h.ref.current) === null || m === void 0 ? void 0 : m.contains(f);
      }) && u.preventDefault();
    }),
    onInteractOutside: J(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: J(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const f = u.target, p = f.hasAttribute("data-radix-menubar-subtrigger"), h = f.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || h && v)
          return;
        let y = c().filter(
          ($) => !$.disabled
        ).map(
          ($) => $.value
        );
        v && y.reverse();
        const x = y.indexOf(i.value);
        y = s.loop ? CB(y, x + 1) : y.slice(x + 1);
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
}), pB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(sf, O({}, o, r, {
    ref: t
  }));
}), hB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(cf, O({}, o, r, {
    ref: t
  }));
}), mB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(lf, O({}, o, r, {
    ref: t
  }));
}), vB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(uf, O({}, o, r, {
    ref: t
  }));
}), gB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(df, O({}, o, r, {
    ref: t
  }));
}), bB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(ff, O({}, o, r, {
    ref: t
  }));
}), yB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(pf, O({}, o, r, {
    ref: t
  }));
}), xB = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(hf, O({}, o, r, {
    ref: t
  }));
}), wB = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ft(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ w(mf, O({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, $B = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(vf, O({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), _B = /* @__PURE__ */ L((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ w(gf, O({}, o, {
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
function CB(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const ox = iB, SB = lB, ax = uB, sx = dB, ix = fB, NB = pB, cx = hB, lx = mB, ux = vB, EB = gB, dx = bB, fx = yB, px = xB, PB = wB, hx = $B, mx = _B, ZY = SB, XY = NB, QY = sx, JY = PB, eq = EB, OB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  ox,
  {
    ref: n,
    className: T(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
OB.displayName = ox.displayName;
const TB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  ax,
  {
    ref: n,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
TB.displayName = ax.displayName;
const jB = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  hx,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(jr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
jB.displayName = hx.displayName;
const MB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  mx,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
MB.displayName = mx.displayName;
const kB = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ d.jsx(sx, { children: /* @__PURE__ */ d.jsx(
    ix,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: T(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
kB.displayName = ix.displayName;
const DB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  lx,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
DB.displayName = lx.displayName;
const AB = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  ux,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(fx, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
AB.displayName = ux.displayName;
const RB = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  dx,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(fx, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
RB.displayName = dx.displayName;
const IB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  cx,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
IB.displayName = cx.displayName;
const LB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  px,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
LB.displayName = px.displayName;
const FB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: T(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
FB.displayname = "MenubarShortcut";
const Ds = "NavigationMenu", [Kf, vx, BB] = kr(Ds), [Hu, VB, zB] = kr(Ds), [Gf, tq] = ut(Ds, [
  BB,
  zB
]), [WB, Pn] = Gf(Ds), [HB, UB] = Gf(Ds), KB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [f, p] = X(null), h = Pe(
    t,
    (E) => p(E)
  ), m = zn(l), v = Z(0), g = Z(0), b = Z(0), [y, x] = X(!0), [_ = "", $] = vt({
    prop: r,
    onChange: (E) => {
      const V = E !== "", G = i > 0;
      V ? (window.clearTimeout(b.current), G && x(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => x(!0),
        i
      )), o == null || o(E);
    },
    defaultProp: a
  }), N = be(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => $(""),
      150
    );
  }, [
    $
  ]), S = be((E) => {
    window.clearTimeout(g.current), $(E);
  }, [
    $
  ]), M = be((E) => {
    _ === E ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), $(E);
    }, s);
  }, [
    _,
    $,
    s
  ]);
  return ee(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ w(GB, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: m,
    orientation: c,
    rootNavigationMenu: f,
    onTriggerEnter: (E) => {
      window.clearTimeout(v.current), y ? M(E) : S(E);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), N();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: N,
    onItemSelect: (E) => {
      $(
        (V) => V === E ? "" : E
      );
    },
    onItemDismiss: () => $("")
  }, /* @__PURE__ */ w(pe.nav, O({
    "aria-label": "Main",
    "data-orientation": c,
    dir: m
  }, u, {
    ref: h
  })));
}), GB = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: f, onContentEnter: p, onContentLeave: h } = e, [m, v] = X(null), [g, b] = X(/* @__PURE__ */ new Map()), [y, x] = X(null);
  return /* @__PURE__ */ w(WB, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: ia(i),
    baseId: bt(),
    dir: o,
    orientation: a,
    viewport: m,
    onViewportChange: v,
    indicatorTrack: y,
    onIndicatorTrackChange: x,
    onTriggerEnter: Je(u),
    onTriggerLeave: Je(f),
    onContentEnter: Je(p),
    onContentLeave: Je(h),
    onItemSelect: Je(c),
    onItemDismiss: Je(l),
    onViewportContentChange: be((_, $) => {
      b((N) => (N.set(_, $), new Map(N)));
    }, []),
    onViewportContentRemove: be((_) => {
      b(($) => $.has(_) ? ($.delete(_), new Map($)) : $);
    }, [])
  }, /* @__PURE__ */ w(Kf.Provider, {
    scope: t
  }, /* @__PURE__ */ w(HB, {
    scope: t,
    items: g
  }, s)));
}, YB = "NavigationMenuList", qB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Pn(YB, n), a = /* @__PURE__ */ w(pe.ul, O({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ w(pe.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ w(Kf.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ w(wx, {
    asChild: !0
  }, a) : a));
}), ZB = "NavigationMenuItem", [XB, gx] = Gf(ZB), QB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = bt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = Z(null), c = Z(null), l = Z(null), u = Z(() => {
  }), f = Z(!1), p = be((m = "start") => {
    if (i.current) {
      u.current();
      const v = Uu(i.current);
      v.length && Yf(m === "start" ? v : v.reverse());
    }
  }, []), h = be(() => {
    if (i.current) {
      const m = Uu(i.current);
      m.length && (u.current = lV(m));
    }
  }, []);
  return /* @__PURE__ */ w(XB, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: f,
    onEntryKeyDown: p,
    onFocusProxyEnter: p,
    onRootContentClose: h,
    onContentFocusOutside: h
  }, /* @__PURE__ */ w(pe.li, O({}, o, {
    ref: t
  })));
}), Cm = "NavigationMenuTrigger", JB = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Pn(Cm, e.__scopeNavigationMenu), s = gx(Cm, e.__scopeNavigationMenu), i = Z(null), c = Pe(i, s.triggerRef, t), l = _x(a.baseId, s.value), u = Cx(a.baseId, s.value), f = Z(!1), p = Z(!1), h = s.value === a.value;
  return /* @__PURE__ */ w(vn, null, /* @__PURE__ */ w(Kf.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ w($x, {
    asChild: !0
  }, /* @__PURE__ */ w(pe.button, O({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": qf(h),
    "aria-expanded": h,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: J(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: J(e.onPointerMove, Ki(() => {
      r || p.current || s.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(s.value), f.current = !0);
    })),
    onPointerLeave: J(e.onPointerLeave, Ki(() => {
      r || (a.onTriggerLeave(), f.current = !1);
    })),
    onClick: J(e.onClick, () => {
      a.onItemSelect(s.value), p.current = h;
    }),
    onKeyDown: J(e.onKeyDown, (m) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      h && m.key === g && (s.onEntryKeyDown(), m.preventDefault());
    })
  })))), h && /* @__PURE__ */ w(vn, null, /* @__PURE__ */ w(Oy, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (m) => {
      const v = s.contentRef.current, g = m.relatedTarget, b = g === i.current, y = v == null ? void 0 : v.contains(g);
      (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ w("span", {
    "aria-owns": u
  })));
}), Sm = "navigationMenu.linkSelect", eV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ w($x, {
    asChild: !0
  }, /* @__PURE__ */ w(pe.a, O({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: J(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Sm, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Sm,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), $i(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(mi, {
          bubbles: !0,
          cancelable: !0
        });
        $i(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), bx = "NavigationMenuIndicator", tV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(bx, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? /* @__PURE__ */ iv.createPortal(/* @__PURE__ */ w(ft, {
    present: n || a
  }, /* @__PURE__ */ w(nV, O({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), nV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Pn(bx, n), a = vx(n), [s, i] = X(null), [c, l] = X(null), u = o.orientation === "horizontal", f = !!o.value;
  ee(() => {
    var h;
    const v = (h = a().find(
      (g) => g.value === o.value
    )) === null || h === void 0 ? void 0 : h.ref.current;
    v && i(v);
  }, [
    a,
    o.value
  ]);
  const p = () => {
    s && l({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return Ku(s, p), Ku(o.indicatorTrack, p), c ? /* @__PURE__ */ w(pe.div, O({
    "aria-hidden": !0,
    "data-state": f ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...u ? {
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
}), Ga = "NavigationMenuContent", rV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Ga, e.__scopeNavigationMenu), a = gx(Ga, e.__scopeNavigationMenu), s = Pe(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ w(oV, O({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ w(ft, {
    present: n || i
  }, /* @__PURE__ */ w(yx, O({
    "data-state": qf(i)
  }, c, {
    ref: s,
    onPointerEnter: J(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: J(e.onPointerLeave, Ki(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), oV = /* @__PURE__ */ L((e, t) => {
  const n = Pn(Ga, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return St(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), St(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), mi = "navigationMenu.rootContentDismiss", yx = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = Pn(Ga, n), f = Z(null), p = Pe(f, t), h = _x(u.baseId, r), m = Cx(u.baseId, r), v = vx(n), g = Z(null), { onItemDismiss: b } = u;
  ee(() => {
    const x = f.current;
    if (u.isRootMenu && x) {
      const _ = () => {
        var $;
        b(), i(), x.contains(document.activeElement) && (($ = o.current) === null || $ === void 0 || $.focus());
      };
      return x.addEventListener(mi, _), () => x.removeEventListener(mi, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    b,
    i
  ]);
  const y = Zt(() => {
    const _ = v().map(
      (V) => V.value
    );
    u.dir === "rtl" && _.reverse();
    const $ = _.indexOf(u.value), N = _.indexOf(u.previousValue), S = r === u.value, M = N === _.indexOf(r);
    if (!S && !M)
      return g.current;
    const E = (() => {
      if ($ !== N) {
        if (S && N !== -1)
          return $ > N ? "from-end" : "from-start";
        if (M && $ !== -1)
          return $ > N ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = E, E;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    v,
    r
  ]);
  return /* @__PURE__ */ w(wx, {
    asChild: !0
  }, /* @__PURE__ */ w(uo, O({
    id: m,
    "aria-labelledby": h,
    "data-motion": y,
    "data-orientation": u.orientation
  }, l, {
    ref: p,
    onDismiss: () => {
      var x;
      const _ = new Event(mi, {
        bubbles: !0,
        cancelable: !0
      });
      (x = f.current) === null || x === void 0 || x.dispatchEvent(_);
    },
    onFocusOutside: J(e.onFocusOutside, (x) => {
      var _;
      c();
      const $ = x.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains($) && x.preventDefault();
    }),
    onPointerDownOutside: J(e.onPointerDownOutside, (x) => {
      var _;
      const $ = x.target, N = v().some((M) => {
        var E;
        return (E = M.ref.current) === null || E === void 0 ? void 0 : E.contains($);
      }), S = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains($));
      (N || S || !u.isRootMenu) && x.preventDefault();
    }),
    onKeyDown: J(e.onKeyDown, (x) => {
      const _ = x.altKey || x.ctrlKey || x.metaKey;
      if (x.key === "Tab" && !_) {
        const S = Uu(x.currentTarget), M = document.activeElement, E = S.findIndex(
          (B) => B === M
        ), G = x.shiftKey ? S.slice(0, E).reverse() : S.slice(E + 1, S.length);
        if (Yf(G))
          x.preventDefault();
        else {
          var N;
          (N = a.current) === null || N === void 0 || N.focus();
        }
      }
    }),
    onEscapeKeyDown: J(e.onEscapeKeyDown, (x) => {
      s.current = !0;
    })
  })));
}), xx = "NavigationMenuViewport", aV = /* @__PURE__ */ L((e, t) => {
  const { forceMount: n, ...r } = e, a = !!Pn(xx, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ w(ft, {
    present: n || a
  }, /* @__PURE__ */ w(sV, O({}, r, {
    ref: t
  })));
}), sV = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Pn(xx, n), s = Pe(t, a.onViewportChange), i = UB(Ga, e.__scopeNavigationMenu), [c, l] = X(null), [u, f] = X(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, h = c ? (c == null ? void 0 : c.height) + "px" : void 0, m = !!a.value, v = m ? a.value : a.previousValue;
  return Ku(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ w(pe.div, O({
    "data-state": qf(m),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !m && a.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": p,
      "--radix-navigation-menu-viewport-height": h,
      ...o.style
    },
    onPointerEnter: J(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: J(e.onPointerLeave, Ki(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: x, ..._ }]) => {
    const $ = v === b;
    return /* @__PURE__ */ w(ft, {
      key: b,
      present: x || $
    }, /* @__PURE__ */ w(yx, O({}, _, {
      ref: ps(y, (N) => {
        $ && N && f(N);
      })
    })));
  }));
}), iV = "FocusGroup", wx = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Pn(iV, n);
  return /* @__PURE__ */ w(Hu.Provider, {
    scope: n
  }, /* @__PURE__ */ w(Hu.Slot, {
    scope: n
  }, /* @__PURE__ */ w(pe.div, O({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), Nm = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], cV = "FocusGroupItem", $x = /* @__PURE__ */ L((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = VB(n), a = Pn(cV, n);
  return /* @__PURE__ */ w(Hu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ w(pe.button, O({}, r, {
    ref: t,
    onKeyDown: J(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...Nm
      ].includes(s.key)) {
        let c = o().map(
          (f) => f.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), Nm.includes(s.key)) {
          const f = c.indexOf(s.currentTarget);
          c = c.slice(f + 1);
        }
        setTimeout(
          () => Yf(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Uu(e) {
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
function Yf(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function lV(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Ku(e, t) {
  const n = Je(t);
  St(() => {
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
function qf(e) {
  return e ? "open" : "closed";
}
function _x(e, t) {
  return `${e}-trigger-${t}`;
}
function Cx(e, t) {
  return `${e}-content-${t}`;
}
function Ki(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Sx = KB, Nx = qB, uV = QB, Ex = JB, dV = eV, Px = tV, Ox = rV, Tx = aV, fV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Sx,
  {
    ref: r,
    className: T(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(jx, {})
    ]
  }
));
fV.displayName = Sx.displayName;
const pV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Nx,
  {
    ref: n,
    className: T(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
pV.displayName = Nx.displayName;
const nq = uV, hV = Go(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), mV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Ex,
  {
    ref: r,
    className: T(hV(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ d.jsx(
        ja,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
mV.displayName = Ex.displayName;
const vV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ox,
  {
    ref: n,
    className: T(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
vV.displayName = Ox.displayName;
const rq = dV, jx = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { className: T("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ d.jsx(
  Tx,
  {
    className: T(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
jx.displayName = Tx.displayName;
const gV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Px,
  {
    ref: n,
    className: T(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
gV.displayName = Px.displayName;
const Mx = "Progress", Yc = 100, [bV, oq] = ut(Mx), [yV, xV] = bV(Mx), kx = /* @__PURE__ */ L((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = _V, ...s } = e, i = Gu(o) ? o : Yc, c = Ax(r, i) ? r : null, l = Gi(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ w(yV, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ w(pe.div, O({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Gi(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Dx(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
kx.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Gu(r) ? new Error(CV(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = Gu(e.max) ? e.max : Yc;
    return r != null && !Ax(r, a) ? new Error(SV(o, n)) : null;
  }
};
const wV = "ProgressIndicator", $V = /* @__PURE__ */ L((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = xV(wV, r);
  return /* @__PURE__ */ w(pe.div, O({
    "data-state": Dx(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function _V(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Dx(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Gi(e) {
  return typeof e == "number";
}
function Gu(e) {
  return Gi(e) && !isNaN(e) && e > 0;
}
function Ax(e, t) {
  return Gi(e) && !isNaN(e) && e <= t && e >= 0;
}
function CV(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Yc}\`.`;
}
function SV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Yc} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Rx = kx, NV = $V, EV = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Rx,
  {
    ref: r,
    className: T(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(
      NV,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
EV.displayName = Rx.displayName;
const Ix = "Radio", [PV, Lx] = ut(Ix), [OV, TV] = PV(Ix), jV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, f] = X(null), p = Pe(
    t,
    (v) => f(v)
  ), h = Z(!1), m = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ w(OV, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ w(pe.button, O({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Fx(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: J(e.onClick, (v) => {
      o || c == null || c(), m && (h.current = v.isPropagationStopped(), h.current || v.stopPropagation());
    })
  })), m && /* @__PURE__ */ w(DV, {
    control: u,
    bubbles: !h.current,
    name: r,
    value: i,
    checked: o,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), MV = "RadioIndicator", kV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = TV(MV, n);
  return /* @__PURE__ */ w(ft, {
    present: r || a.checked
  }, /* @__PURE__ */ w(pe.span, O({
    "data-state": Fx(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), DV = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Z(null), s = ia(n), i = ws(t);
  return ee(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      f.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", O({
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
function Fx(e) {
  return e ? "checked" : "unchecked";
}
const AV = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Bx = "RadioGroup", [RV, aq] = ut(Bx, [
  Dr,
  Lx
]), Vx = Dr(), zx = Lx(), [IV, LV] = RV(Bx), FV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: f, ...p } = e, h = Vx(n), m = zn(l), [v, g] = vt({
    prop: a,
    defaultProp: o,
    onChange: f
  });
  return /* @__PURE__ */ w(IV, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ w(Ec, O({
    asChild: !0
  }, h, {
    orientation: c,
    dir: m,
    loop: u
  }), /* @__PURE__ */ w(pe.div, O({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: m
  }, p, {
    ref: t
  }))));
}), BV = "RadioGroupItem", VV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = LV(BV, n), s = a.disabled || r, i = Vx(n), c = zx(n), l = Z(null), u = Pe(t, l), f = a.value === o.value, p = Z(!1);
  return ee(() => {
    const h = (v) => {
      AV.includes(v.key) && (p.current = !0);
    }, m = () => p.current = !1;
    return document.addEventListener("keydown", h), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", h), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ w(Pc, O({
    asChild: !0
  }, i, {
    focusable: !s,
    active: f
  }), /* @__PURE__ */ w(jV, O({
    disabled: s,
    required: a.required,
    checked: f
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: J((h) => {
      h.key === "Enter" && h.preventDefault();
    }),
    onFocus: J(o.onFocus, () => {
      var h;
      p.current && ((h = l.current) === null || h === void 0 || h.click());
    })
  })));
}), zV = /* @__PURE__ */ L((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = zx(n);
  return /* @__PURE__ */ w(kV, O({}, o, r, {
    ref: t
  }));
}), Wx = FV, Hx = VV, WV = zV, HV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Wx,
  {
    className: T("grid gap-2", e),
    ...t,
    ref: n
  }
));
HV.displayName = Wx.displayName;
const UV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Hx,
  {
    ref: r,
    className: T(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(WV, { className: "flex items-center justify-center", children: /* @__PURE__ */ d.jsx(lc, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
UV.displayName = Hx.displayName;
const Ux = [
  "PageUp",
  "PageDown"
], Kx = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Gx = {
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
}, As = "Slider", [Yu, KV, GV] = kr(As), [Yx, sq] = ut(As, [
  GV
]), [YV, qc] = Yx(As), qV = /* @__PURE__ */ L((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: f = () => {
  }, onValueCommit: p = () => {
  }, inverted: h = !1, ...m } = e, [v, g] = X(null), b = Pe(
    t,
    (R) => g(R)
  ), y = Z(/* @__PURE__ */ new Set()), x = Z(0), _ = s === "horizontal", $ = v ? !!v.closest("form") : !0, N = _ ? ZV : XV, [S = [], M] = vt({
    prop: u,
    defaultProp: l,
    onChange: (R) => {
      var k;
      (k = [
        ...y.current
      ][x.current]) === null || k === void 0 || k.focus(), f(R);
    }
  }), E = Z(S);
  function V(R) {
    const k = sz(S, R);
    U(R, k);
  }
  function G(R) {
    U(R, x.current);
  }
  function B() {
    const R = E.current[x.current];
    S[x.current] !== R && p(S);
  }
  function U(R, k, { commit: W } = {
    commit: !1
  }) {
    const D = uz(a), z = dz(Math.round((R - r) / a) * a + r, D), Y = Ha(z, [
      r,
      o
    ]);
    M((H = []) => {
      const Q = oz(H, Y, k);
      if (lz(Q, c * a)) {
        x.current = Q.indexOf(Y);
        const I = String(Q) !== String(H);
        return I && W && p(Q), I ? Q : H;
      } else
        return H;
    });
  }
  return /* @__PURE__ */ w(YV, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: x,
    thumbs: y.current,
    values: S,
    orientation: s
  }, /* @__PURE__ */ w(Yu.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(Yu.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(N, O({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, m, {
    ref: b,
    onPointerDown: J(m.onPointerDown, () => {
      i || (E.current = S);
    }),
    min: r,
    max: o,
    inverted: h,
    onSlideStart: i ? void 0 : V,
    onSlideMove: i ? void 0 : G,
    onSlideEnd: i ? void 0 : B,
    onHomeKeyDown: () => !i && U(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && U(o, S.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: R, direction: k }) => {
      if (!i) {
        const z = Ux.includes(R.key) || R.shiftKey && Kx.includes(R.key) ? 10 : 1, Y = x.current, H = S[Y], Q = a * z * k;
        U(H + Q, Y, {
          commit: !0
        });
      }
    }
  })))), $ && S.map(
    (R, k) => /* @__PURE__ */ w(rz, {
      key: k,
      name: n ? n + (S.length > 1 ? "[]" : "") : void 0,
      value: R
    })
  ));
}), [qx, Zx] = Yx(As, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), ZV = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [f, p] = X(null), h = Pe(
    t,
    (x) => p(x)
  ), m = Z(), v = zn(o), g = v === "ltr", b = g && !a || !g && a;
  function y(x) {
    const _ = m.current || f.getBoundingClientRect(), $ = [
      0,
      _.width
    ], S = Zf($, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return m.current = _, S(x - _.left);
  }
  return /* @__PURE__ */ w(qx, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ w(Xx, O({
    dir: v,
    "data-orientation": "horizontal"
  }, u, {
    ref: h,
    style: {
      ...u.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (x) => {
      const _ = y(x.clientX);
      s == null || s(_);
    },
    onSlideMove: (x) => {
      const _ = y(x.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      m.current = void 0, c == null || c();
    },
    onStepKeyDown: (x) => {
      const $ = Gx[b ? "from-left" : "from-right"].includes(x.key);
      l == null || l({
        event: x,
        direction: $ ? -1 : 1
      });
    }
  })));
}), XV = /* @__PURE__ */ L((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = Z(null), f = Pe(t, u), p = Z(), h = !o;
  function m(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], x = Zf(b, h ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, x(v - g.top);
  }
  return /* @__PURE__ */ w(qx, {
    scope: e.__scopeSlider,
    startEdge: h ? "bottom" : "top",
    endEdge: h ? "top" : "bottom",
    size: "height",
    direction: h ? 1 : -1
  }, /* @__PURE__ */ w(Xx, O({
    "data-orientation": "vertical"
  }, l, {
    ref: f,
    style: {
      ...l.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (v) => {
      const g = m(v.clientY);
      a == null || a(g);
    },
    onSlideMove: (v) => {
      const g = m(v.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      p.current = void 0, i == null || i();
    },
    onStepKeyDown: (v) => {
      const b = Gx[h ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), Xx = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = qc(As, n);
  return /* @__PURE__ */ w(pe.span, O({}, l, {
    ref: t,
    onKeyDown: J(e.onKeyDown, (f) => {
      f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : Ux.concat(Kx).includes(f.key) && (c(f), f.preventDefault());
    }),
    onPointerDown: J(e.onPointerDown, (f) => {
      const p = f.target;
      p.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(p) ? p.focus() : r(f);
    }),
    onPointerMove: J(e.onPointerMove, (f) => {
      f.target.hasPointerCapture(f.pointerId) && o(f);
    }),
    onPointerUp: J(e.onPointerUp, (f) => {
      const p = f.target;
      p.hasPointerCapture(f.pointerId) && (p.releasePointerCapture(f.pointerId), a(f));
    })
  }));
}), QV = "SliderTrack", JV = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = qc(QV, n);
  return /* @__PURE__ */ w(pe.span, O({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), Em = "SliderRange", ez = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = qc(Em, n), a = Zx(Em, n), s = Z(null), i = Pe(t, s), c = o.values.length, l = o.values.map(
    (p) => Qx(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, f = 100 - Math.max(...l);
  return /* @__PURE__ */ w(pe.span, O({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: f + "%"
    }
  }));
}), Pm = "SliderThumb", tz = /* @__PURE__ */ L((e, t) => {
  const n = KV(e.__scopeSlider), [r, o] = X(null), a = Pe(
    t,
    (i) => o(i)
  ), s = Zt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ w(nz, O({}, e, {
    ref: a,
    index: s
  }));
}), nz = /* @__PURE__ */ L((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = qc(Pm, n), s = Zx(Pm, n), [i, c] = X(null), l = Pe(
    t,
    (g) => c(g)
  ), u = ws(i), f = a.values[r], p = f === void 0 ? 0 : Qx(f, a.min, a.max), h = az(r, a.values.length), m = u == null ? void 0 : u[s.size], v = m ? iz(m, p, s.direction) : 0;
  return ee(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ w("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ w(Yu.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ w(pe.span, O({
    role: "slider",
    "aria-label": e["aria-label"] || h,
    "aria-valuemin": a.min,
    "aria-valuenow": f,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: f === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: J(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), rz = (e) => {
  const { value: t, ...n } = e, r = Z(null), o = ia(t);
  return ee(() => {
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
  ]), /* @__PURE__ */ w("input", O({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function oz(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function Qx(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Ha(a, [
    0,
    100
  ]);
}
function az(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function sz(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function iz(e, t, n) {
  const r = e / 2, a = Zf([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function cz(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function lz(e, t) {
  if (t > 0) {
    const n = cz(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Zf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function uz(e) {
  return (String(e).split(".")[1] || "").length;
}
function dz(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Jx = qV, fz = JV, pz = ez, hz = tz, mz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs(
  Jx,
  {
    ref: n,
    className: T(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(fz, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ d.jsx(pz, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ d.jsx(hz, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
mz.displayName = Jx.displayName;
const e1 = "Tabs", [vz, iq] = ut(e1, [
  Dr
]), t1 = Dr(), [gz, Xf] = vz(e1), bz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = zn(i), [f, p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ w(gz, {
    scope: n,
    baseId: bt(),
    value: f,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ w(pe.div, O({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), yz = "TabsList", xz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Xf(yz, n), s = t1(n);
  return /* @__PURE__ */ w(Ec, O({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ w(pe.div, O({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), wz = "TabsTrigger", $z = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Xf(wz, n), i = t1(n), c = n1(s.baseId, r), l = r1(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ w(Pc, O({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ w(pe.button, O({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: t,
    onMouseDown: J(e.onMouseDown, (f) => {
      !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
    }),
    onKeyDown: J(e.onKeyDown, (f) => {
      [
        " ",
        "Enter"
      ].includes(f.key) && s.onValueChange(r);
    }),
    onFocus: J(e.onFocus, () => {
      const f = s.activationMode !== "manual";
      !u && !o && f && s.onValueChange(r);
    })
  })));
}), _z = "TabsContent", Cz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Xf(_z, n), c = n1(i.baseId, r), l = r1(i.baseId, r), u = r === i.value, f = Z(u);
  return ee(() => {
    const p = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ w(
    ft,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ w(pe.div, O({
      "data-state": u ? "active" : "inactive",
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
        animationDuration: f.current ? "0s" : void 0
      }
    }), p && a)
  );
});
function n1(e, t) {
  return `${e}-trigger-${t}`;
}
function r1(e, t) {
  return `${e}-content-${t}`;
}
const Sz = bz, o1 = xz, a1 = $z, s1 = Cz, cq = Sz, Nz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  o1,
  {
    ref: n,
    className: T(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Nz.displayName = o1.displayName;
const Ez = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  a1,
  {
    ref: n,
    className: T(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ez.displayName = a1.displayName;
const Pz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  s1,
  {
    ref: n,
    className: T(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Pz.displayName = s1.displayName;
const Oz = /* @__PURE__ */ L((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = vt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ w(pe.button, O({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: J(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), i1 = Oz, Tz = Go(
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
), jz = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ d.jsx(
  i1,
  {
    ref: o,
    className: T(Tz({ variant: t, size: n, className: e })),
    ...r
  }
));
jz.displayName = i1.displayName;
const [Zc, lq] = ut("Tooltip", [
  Hn
]), Qf = Hn(), Mz = "TooltipProvider", kz = 700, qu = "tooltip.open", [Dz, Jf] = Zc(Mz), Az = (e) => {
  const { __scopeTooltip: t, delayDuration: n = kz, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = X(!0), c = Z(!1), l = Z(0);
  return ee(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ w(Dz, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: be(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: be(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: be((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, ep = "Tooltip", [Rz, Xc] = Zc(ep), Iz = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = Jf(ep, e.__scopeTooltip), l = Qf(t), [u, f] = X(null), p = bt(), h = Z(0), m = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = Z(!1), [b = !1, y] = vt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(qu))) : c.onClose(), a == null || a(S);
    }
  }), x = Zt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = be(() => {
    window.clearTimeout(h.current), g.current = !1, y(!0);
  }, [
    y
  ]), $ = be(() => {
    window.clearTimeout(h.current), y(!1);
  }, [
    y
  ]), N = be(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return ee(() => () => window.clearTimeout(h.current), []), /* @__PURE__ */ w(na, l, /* @__PURE__ */ w(Rz, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: x,
    trigger: u,
    onTriggerChange: f,
    onTriggerEnter: be(() => {
      c.isOpenDelayed ? N() : _();
    }, [
      c.isOpenDelayed,
      N,
      _
    ]),
    onTriggerLeave: be(() => {
      m ? $() : window.clearTimeout(h.current);
    }, [
      $,
      m
    ]),
    onOpen: _,
    onClose: $,
    disableHoverableContent: m
  }, n));
}, Om = "TooltipTrigger", Lz = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Xc(Om, n), a = Jf(Om, n), s = Qf(n), i = Z(null), c = Pe(t, i, o.onTriggerChange), l = Z(!1), u = Z(!1), f = be(
    () => l.current = !1,
    []
  );
  return ee(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ w($s, O({
    asChild: !0
  }, s), /* @__PURE__ */ w(pe.button, O({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: J(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: J(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: J(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", f, {
        once: !0
      });
    }),
    onFocus: J(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: J(e.onBlur, o.onClose),
    onClick: J(e.onClick, o.onClose)
  })));
}), Fz = "TooltipPortal", [uq, Bz] = Zc(Fz, {
  forceMount: void 0
}), Ya = "TooltipContent", Vz = /* @__PURE__ */ L((e, t) => {
  const n = Bz(Ya, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Xc(Ya, e.__scopeTooltip);
  return /* @__PURE__ */ w(ft, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ w(c1, O({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ w(zz, O({
    side: o
  }, a, {
    ref: t
  })));
}), zz = /* @__PURE__ */ L((e, t) => {
  const n = Xc(Ya, e.__scopeTooltip), r = Jf(Ya, e.__scopeTooltip), o = Z(null), a = Pe(t, o), [s, i] = X(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: f } = r, p = be(() => {
    i(null), f(!1);
  }, [
    f
  ]), h = be((m, v) => {
    const g = m.currentTarget, b = {
      x: m.clientX,
      y: m.clientY
    }, y = Hz(b, g.getBoundingClientRect()), x = Uz(b, y), _ = Kz(v.getBoundingClientRect()), $ = Yz([
      ...x,
      ..._
    ]);
    i($), f(!0);
  }, [
    f
  ]);
  return ee(() => () => p(), [
    p
  ]), ee(() => {
    if (c && u) {
      const m = (g) => h(g, u), v = (g) => h(g, c);
      return c.addEventListener("pointerleave", m), u.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", m), u.removeEventListener("pointerleave", v);
      };
    }
  }, [
    c,
    u,
    h,
    p
  ]), ee(() => {
    if (s) {
      const m = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, y = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), x = !Gz(b, s);
        y ? p() : x && (p(), l());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    c,
    u,
    s,
    l,
    p
  ]), /* @__PURE__ */ w(c1, O({}, e, {
    ref: a
  }));
}), [Wz, dq] = Zc(ep, {
  isInside: !1
}), c1 = /* @__PURE__ */ L((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = Xc(Ya, n), l = Qf(n), { onClose: u } = c;
  return ee(() => (document.addEventListener(qu, u), () => document.removeEventListener(qu, u)), [
    u
  ]), ee(() => {
    if (c.trigger) {
      const f = (p) => {
        const h = p.target;
        h != null && h.contains(c.trigger) && u();
      };
      return window.addEventListener("scroll", f, {
        capture: !0
      }), () => window.removeEventListener("scroll", f, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    u
  ]), /* @__PURE__ */ w(uo, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ w(_s, O({
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
  }), /* @__PURE__ */ w(dd, null, r), /* @__PURE__ */ w(Wz, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ w(Oy, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function Hz(e, t) {
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
function Uz(e, t, n = 5) {
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
function Kz(e) {
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
function Gz(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function Yz(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), qz(t);
}
function qz(e) {
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
const Zz = Az, Xz = Iz, Qz = Lz, l1 = Vz, eo = Zz, to = Xz, no = Qz, Nr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d.jsx(
  l1,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Nr.displayName = l1.displayName;
const u1 = "Switch", [Jz, fq] = ut(u1), [eW, tW] = Jz(u1), nW = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [f, p] = X(null), h = Pe(
    t,
    (y) => p(y)
  ), m = Z(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ w(eW, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ w(pe.button, O({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": d1(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: h,
    onClick: J(e.onClick, (y) => {
      b(
        (x) => !x
      ), v && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ w(aW, {
    control: f,
    bubbles: !m.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), rW = "SwitchThumb", oW = /* @__PURE__ */ L((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = tW(rW, n);
  return /* @__PURE__ */ w(pe.span, O({
    "data-state": d1(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), aW = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = Z(null), s = ia(n), i = ws(t);
  return ee(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && f) {
      const p = new Event("click", {
        bubbles: r
      });
      f.call(c, n), c.dispatchEvent(p);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ w("input", O({
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
function d1(e) {
  return e ? "checked" : "unchecked";
}
const f1 = nW, sW = oW, iW = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  f1,
  {
    className: T(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ d.jsx(
      sW,
      {
        className: T(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
iW.displayName = f1.displayName;
var cW = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Tm = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const h = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((m) => m(t, h));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => l, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (cW ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, o, c);
  return c;
}, lW = (e) => e ? Tm(e) : Tm;
var Zu = { exports: {} }, Vl = {}, ti = { exports: {} }, zl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm;
function uW() {
  if (jm)
    return zl;
  jm = 1;
  var e = A;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(f, p) {
    var h = p(), m = r({ inst: { value: h, getSnapshot: p } }), v = m[0].inst, g = m[1];
    return a(function() {
      v.value = h, v.getSnapshot = p, c(v) && g({ inst: v });
    }, [f, h, p]), o(function() {
      return c(v) && g({ inst: v }), f(function() {
        c(v) && g({ inst: v });
      });
    }, [f]), s(h), h;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !n(f, h);
    } catch {
      return !0;
    }
  }
  function l(f, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return zl.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, zl;
}
var Wl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function dW() {
  return Mm || (Mm = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = A, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var _ = arguments.length, $ = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
          $[N - 1] = arguments[N];
        r("error", x, $);
      }
    }
    function r(x, _, $) {
      {
        var N = t.ReactDebugCurrentFrame, S = N.getStackAddendum();
        S !== "" && (_ += "%s", $ = $.concat([S]));
        var M = $.map(function(E) {
          return String(E);
        });
        M.unshift("Warning: " + _), Function.prototype.apply.call(console[x], console, M);
      }
    }
    function o(x, _) {
      return x === _ && (x !== 0 || 1 / x === 1 / _) || x !== x && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, f = !1;
    function p(x, _, $) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = _();
      if (!f) {
        var S = _();
        a(N, S) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var M = s({
        inst: {
          value: N,
          getSnapshot: _
        }
      }), E = M[0].inst, V = M[1];
      return c(function() {
        E.value = N, E.getSnapshot = _, h(E) && V({
          inst: E
        });
      }, [x, N, _]), i(function() {
        h(E) && V({
          inst: E
        });
        var G = function() {
          h(E) && V({
            inst: E
          });
        };
        return x(G);
      }, [x]), l(N), N;
    }
    function h(x) {
      var _ = x.getSnapshot, $ = x.value;
      try {
        var N = _();
        return !a($, N);
      } catch {
        return !0;
      }
    }
    function m(x, _, $) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? m : p, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Wl.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wl;
}
var km;
function p1() {
  return km || (km = 1, process.env.NODE_ENV === "production" ? ti.exports = uW() : ti.exports = dW()), ti.exports;
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
var Dm;
function fW() {
  if (Dm)
    return Vl;
  Dm = 1;
  var e = A, t = p1();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Vl.useSyncExternalStoreWithSelector = function(l, u, f, p, h) {
    var m = a(null);
    if (m.current === null) {
      var v = { hasValue: !1, value: null };
      m.current = v;
    } else
      v = m.current;
    m = i(function() {
      function b(N) {
        if (!y) {
          if (y = !0, x = N, N = p(N), h !== void 0 && v.hasValue) {
            var S = v.value;
            if (h(S, N))
              return _ = S;
          }
          return _ = N;
        }
        if (S = _, r(x, N))
          return S;
        var M = p(N);
        return h !== void 0 && h(S, M) ? S : (x = N, _ = M);
      }
      var y = !1, x, _, $ = f === void 0 ? null : f;
      return [function() {
        return b(u());
      }, $ === null ? void 0 : function() {
        return b($());
      }];
    }, [u, f, p, h]);
    var g = o(l, m[0], m[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Vl;
}
var Hl = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Am;
function pW() {
  return Am || (Am = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = A, t = p1();
    function n(u, f) {
      return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(u, f, p, h, m) {
      var v = a(null), g;
      v.current === null ? (g = {
        hasValue: !1,
        value: null
      }, v.current = g) : g = v.current;
      var b = i(function() {
        var $ = !1, N, S, M = function(B) {
          if (!$) {
            $ = !0, N = B;
            var U = h(B);
            if (m !== void 0 && g.hasValue) {
              var R = g.value;
              if (m(R, U))
                return S = R, R;
            }
            return S = U, U;
          }
          var k = N, W = S;
          if (r(k, B))
            return W;
          var D = h(B);
          return m !== void 0 && m(W, D) ? W : (N = B, S = D, D);
        }, E = p === void 0 ? null : p, V = function() {
          return M(f());
        }, G = E === null ? void 0 : function() {
          return M(E());
        };
        return [V, G];
      }, [f, p, h, m]), y = b[0], x = b[1], _ = o(u, y, x);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Hl.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Hl;
}
process.env.NODE_ENV === "production" ? Zu.exports = fW() : Zu.exports = pW();
var hW = Zu.exports;
const mW = /* @__PURE__ */ Cn(hW);
var h1 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: vW } = A, { useSyncExternalStoreWithSelector: gW } = mW;
let Rm = !1;
const bW = (e) => e;
function yW(e, t = bW, n) {
  (h1 ? "production" : void 0) !== "production" && n && !Rm && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Rm = !0);
  const r = gW(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return vW(r), r;
}
const Im = (e) => {
  (h1 ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? lW(e) : e, n = (r, o) => yW(t, r, o);
  return Object.assign(n, t), n;
}, xW = (e) => e ? Im(e) : Im, wW = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ d.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ d.jsxs(To, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ d.jsx(
      Gr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ d.jsx(jo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ d.jsx(b$, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ d.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ d.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ d.jsx(At, { className: "w-full bg-brand-secondary dark:text-white", children: e.role })
  ] })
] });
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $W = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = (e, t, n, r) => {
  const o = L(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, className: c, children: l, ...u }, f) => w(
      "svg",
      {
        ref: f,
        ...$W[e],
        width: s,
        height: s,
        className: ["tabler-icon", `tabler-icon-${t}`, c].join(" "),
        strokeWidth: i,
        stroke: a,
        ...u
      },
      [
        ...r.map(([p, h]) => w(p, h)),
        ...Array.isArray(l) ? l : [l]
      ]
    )
  );
  return o.displayName = `${n}`, o;
};
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var m1 = Lr("outline", "adjustments-horizontal", "IconAdjustmentsHorizontal", [["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v1 = Lr("outline", "adjustments", "IconAdjustments", [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _W = Lr("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CW = Lr("outline", "click", "IconClick", [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g1 = Lr("outline", "moon", "IconMoon", [["path", { d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var b1 = Lr("outline", "photo-star", "IconPhotoStar", [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }], ["path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z", key: "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var y1 = Lr("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var x1 = Lr("outline", "sun", "IconSun", [["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }], ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7", key: "svg-1" }]]), Lm = ["light", "dark"], SW = "(prefers-color-scheme: dark)", NW = C.createContext(void 0), EW = { setTheme: (e) => {
}, themes: [] }, PW = () => {
  var e;
  return (e = C.useContext(NW)) != null ? e : EW;
};
C.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: c }) => {
  let l = a === "system", u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((m) => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Lm.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (m, v = !1, g = !0) => {
    let b = s ? s[m] : m, y = v ? m + "|| ''" : `'${b}'`, x = "";
    return o && g && !v && Lm.includes(m) && (x += `d.style.colorScheme = '${m}';`), n === "class" ? v || b ? x += `c.add(${y})` : x += "null" : b && (x += `d[s](n,${y})`), x;
  }, h = e ? `!function(){${u}${p(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${SW}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${l ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return C.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: h } });
});
const OW = ({ isExpanded: e }) => {
  const [t, n] = X(!1), { theme: r, setTheme: o } = PW();
  if (ee(() => {
    n(!0);
  }, []), !t)
    return null;
  const a = () => {
    o(r === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: a,
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
      children: r === "light" ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(g1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(x1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, TW = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ d.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ d.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ d.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(OW, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ d.jsx(v$, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(g$, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ d.jsx(yv, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Qc = xW((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), pq = ({
  children: e,
  className: t,
  profile: n,
  logout: r,
  theme: o,
  isDrawerSidebar: a
}) => {
  const { isExpanded: s, toggleExpandSidebar: i } = Qc();
  return /* @__PURE__ */ d.jsx(
    "aside",
    {
      tabIndex: -1,
      className: T(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ d.jsx(wW, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ d.jsx(
          TW,
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
}, hq = ({ children: e }) => {
  const { isExpanded: t } = Qc();
  return /* @__PURE__ */ d.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ d.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, w1 = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = X(!1), c = Z(null), { isExpanded: l } = Qc();
  return ee(() => {
    const u = () => {
      const f = c.current.querySelector(
        `#${e.replaceAll("/", "_")}`
      );
      if (f) {
        const p = f.offsetWidth < f.scrollWidth;
        i(p);
      }
    };
    return window.addEventListener("resize", u), u(), () => window.removeEventListener("resize", u);
  }, [e]), o ? /* @__PURE__ */ d.jsx(eo, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    o,
    {
      href: e,
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ d.jsxs(to, { children: [
          /* @__PURE__ */ d.jsx(no, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ d.jsx(Nr, { children: /* @__PURE__ */ d.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ d.jsx(eo, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: c,
      className: a ? "cursor-pointer" : `cursor-pointer border-2 border-transparent flex ${l ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10
          ${r.startsWith(e) && "border-2 border-brand-primary/30 bg-brand-primary/20  hover:dark:bg-brand-primary/10 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: n }),
        !s && l && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: a ? "" : t
          }
        ),
        s && l && /* @__PURE__ */ d.jsxs(to, { children: [
          /* @__PURE__ */ d.jsx(no, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ d.jsx(Nr, { children: /* @__PURE__ */ d.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Fm = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = X(!1), c = Z(null);
  return ee(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const f = u.offsetWidth < u.scrollWidth;
        i(f);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ d.jsx(eo, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg  hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
        ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ d.jsxs(to, { children: [
          /* @__PURE__ */ d.jsx(no, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ d.jsx(Nr, { children: /* @__PURE__ */ d.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ d.jsx(eo, { delayDuration: 180, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 
          ${t.startsWith(n) && "border-2 border-brand-primary/30 bg-brand-primary/20 dark:bg-brand-primary/20 text-brand-primary"} select-none`,
      children: [
        /* @__PURE__ */ d.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ d.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ d.jsxs(to, { children: [
          /* @__PURE__ */ d.jsx(no, { className: "truncate", children: /* @__PURE__ */ d.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ d.jsx(Nr, { children: /* @__PURE__ */ d.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, jW = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = X(!1), [i, c] = X(!1), { isExpanded: l } = Qc(), u = Z(null), f = () => c((h) => !h), p = e.replaceAll(" ", "_");
  return ee(() => {
    const h = () => {
      const m = u.current.querySelector(`#${p}`);
      if (m) {
        const v = m.offsetWidth < m.scrollWidth;
        s(v);
      }
    };
    return window.addEventListener("resize", h), h(), () => window.removeEventListener("resize", h);
  }, [e]), o ? /* @__PURE__ */ d.jsxs(eo, { delayDuration: 180, children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: u,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ d.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ d.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ d.jsxs(to, { children: [
              /* @__PURE__ */ d.jsx(no, { className: "truncate", children: /* @__PURE__ */ d.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ d.jsx(Nr, { children: /* @__PURE__ */ d.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ d.jsx(Sp, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(ja, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Fm,
      {
        ...h,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, h.to)) })
  ] }) : /* @__PURE__ */ d.jsxs(eo, { delayDuration: 180, children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: u,
        onClick: f,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
        children: [
          /* @__PURE__ */ d.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ d.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ d.jsx(
              "span",
              {
                id: p,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ d.jsxs(to, { children: [
              /* @__PURE__ */ d.jsx(no, { className: "truncate", children: /* @__PURE__ */ d.jsx(
                "span",
                {
                  id: p,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ d.jsx(Nr, { children: /* @__PURE__ */ d.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ d.jsx(Sp, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(ja, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Fm,
      {
        ...h,
        pathname: r,
        isExpanded: l
      }
    ) }, h.to)) })
  ] });
}, lr = Wt({
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
  },
  onSelectAllItems: void 0,
  isSelectedAllItems: !1
});
function MW() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = lt(lr);
  return /* @__PURE__ */ d.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ d.jsxs(
        Of,
        {
          value: `${e.limit}`,
          onValueChange: (a) => {
            t(Number(a), 1);
          },
          children: [
            /* @__PURE__ */ d.jsx(Fc, { className: "h-8 w-[70px]", children: /* @__PURE__ */ d.jsx(Tf, { placeholder: e.limit }) }),
            /* @__PURE__ */ d.jsx(Bc, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ d.jsx(Vc, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ d.jsx(jr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const $1 = () => {
  const { columns: e, onSelectAllItems: t, isSelectedAllItems: n, isMultiSelect: r } = lt(lr), o = (a, s) => t && s === 0 && r ? /* @__PURE__ */ d.jsx(
    jf,
    {
      className: "border-white data-[state=checked]:bg-brand-primary-lighter",
      onCheckedChange: t,
      checked: n
    }
  ) : /* @__PURE__ */ d.jsx(d.Fragment, { children: a.label });
  return /* @__PURE__ */ d.jsx(E0, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ d.jsx(Uc, { children: e.length > 0 && e.map((a, s) => /* @__PURE__ */ d.jsx(
    O0,
    {
      className: "text-brand-text",
      children: o(a, s)
    },
    `${a.id}-${s}`
  )) }) });
}, mq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, ua = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), vq = { limit: 10, page: 1 }, Bm = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), gq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], kW = ({ colSpan: e }) => /* @__PURE__ */ d.jsx(Uc, { children: /* @__PURE__ */ d.jsx(Rf, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), DW = ({
  data: e,
  columns: t,
  setSelectItem: n,
  setMultiItemsSelected: r,
  multiItemsSelected: o,
  limitOfMultiSelect: a,
  itemsSelectedCount: s,
  setItemsSelectedCount: i
}) => {
  const c = (l, u) => {
    const f = () => {
      const p = o ? o.some((h) => h.id === u.id) : !1;
      if (o.length === a && !p) {
        console.log("NO puedes seleccionar más elementos.");
        return;
      }
      if (p) {
        const h = o.filter(
          (m) => m.id !== u.id
        );
        r(h), i(s - 1);
      } else {
        const h = [
          ...o,
          { ...u, isSelected: !0 }
        ];
        r(h), i(s + 1);
      }
    };
    return l != null && l.render ? /* @__PURE__ */ d.jsx("div", { children: l.render(u) }) : l.id === "select" ? /* @__PURE__ */ d.jsx(
      Ve,
      {
        onClick: () => n(u),
        variant: "outline",
        size: "icon",
        type: "button",
        children: /* @__PURE__ */ d.jsx(CW, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ d.jsx(
      jf,
      {
        className: "border-slate-500 data-[state=checked]:bg-brand-primary-lighter",
        onClick: () => {
          o && f();
        },
        checked: o ? o.some(
          (p) => p.id === u.id
        ) : !1,
        disabled: s === a && !s
      }
    ) : /* @__PURE__ */ d.jsx(d.Fragment, { children: u[l.id] });
  };
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map((l) => /* @__PURE__ */ d.jsx(Uc, { children: t.map((u) => /* @__PURE__ */ d.jsx(Rf, { children: c(u, l) }, Bm())) }, Bm())) });
}, _1 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = lt(lr), [s, i] = X(
    o ? o.length : 0
  );
  return /* @__PURE__ */ d.jsx(P0, { className: "bg-card", children: e.length ? /* @__PURE__ */ d.jsx(
    DW,
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
  ) : /* @__PURE__ */ d.jsx(kW, { colSpan: t.length }) });
}, AW = () => /* @__PURE__ */ d.jsxs(Af, { children: [
  /* @__PURE__ */ d.jsx($1, {}),
  /* @__PURE__ */ d.jsx(_1, {})
] }), RW = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), IW = () => /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ d.jsx(RW, {}),
  /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Vm = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = ve(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, C1 = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Vm(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Vm(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, LW = function(e, t) {
  t.shouldUseNativeValidation && C1(e, t);
  var n = {};
  for (var r in e) {
    var o = ve(t.fields, r), a = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (FW(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, ve(n, r));
      Ze(s, "root", a), Ze(n, r, s);
    } else
      Ze(n, r, a);
  }
  return n;
}, FW = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, BW = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(f) {
        return e.push(f);
      });
    }), t) {
      var c = n[s].types, l = c && c[r.code];
      n[s] = ey(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, S1 = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && C1({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: LW(BW(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, He;
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
})(He || (He = {}));
var Xu;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Xu || (Xu = {}));
const $e = He.arrayToEnum([
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
]), gr = (e) => {
  switch (typeof e) {
    case "undefined":
      return $e.undefined;
    case "string":
      return $e.string;
    case "number":
      return isNaN(e) ? $e.nan : $e.number;
    case "boolean":
      return $e.boolean;
    case "function":
      return $e.function;
    case "bigint":
      return $e.bigint;
    case "symbol":
      return $e.symbol;
    case "object":
      return Array.isArray(e) ? $e.array : e === null ? $e.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? $e.promise : typeof Map < "u" && e instanceof Map ? $e.map : typeof Set < "u" && e instanceof Set ? $e.set : typeof Date < "u" && e instanceof Date ? $e.date : $e.object;
    default:
      return $e.unknown;
  }
}, ue = He.arrayToEnum([
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
]), VW = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class qt extends Error {
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
  static assert(t) {
    if (!(t instanceof qt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, He.jsonStringifyReplacer, 2);
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
qt.create = (e) => new qt(e);
const Ho = (e, t) => {
  let n;
  switch (e.code) {
    case ue.invalid_type:
      e.received === $e.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ue.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, He.jsonStringifyReplacer)}`;
      break;
    case ue.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${He.joinValues(e.keys, ", ")}`;
      break;
    case ue.invalid_union:
      n = "Invalid input";
      break;
    case ue.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${He.joinValues(e.options)}`;
      break;
    case ue.invalid_enum_value:
      n = `Invalid enum value. Expected ${He.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ue.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ue.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ue.invalid_date:
      n = "Invalid date";
      break;
    case ue.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : He.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ue.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ue.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ue.custom:
      n = "Invalid input";
      break;
    case ue.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ue.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ue.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, He.assertNever(e);
  }
  return { message: n };
};
let N1 = Ho;
function zW(e) {
  N1 = e;
}
function Yi() {
  return N1;
}
const qi = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, a = [...n, ...o.path || []], s = {
    ...o,
    path: a
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: a,
      message: o.message
    };
  let i = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(s, { data: t, defaultError: i }).message;
  return {
    ...o,
    path: a,
    message: i
  };
}, WW = [];
function ye(e, t) {
  const n = Yi(), r = qi({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === Ho ? void 0 : Ho
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class Tt {
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
        return Me;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const a = await o.key, s = await o.value;
      r.push({
        key: a,
        value: s
      });
    }
    return Tt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Me;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Me = Object.freeze({
  status: "aborted"
}), Oo = (e) => ({ status: "dirty", value: e }), Rt = (e) => ({ status: "valid", value: e }), Qu = (e) => e.status === "aborted", Ju = (e) => e.status === "dirty", qa = (e) => e.status === "valid", Zi = (e) => typeof Promise < "u" && e instanceof Promise;
function Xi(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function E1(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ne;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Ne || (Ne = {}));
var Sa, Na;
class Fn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const zm = (e, t) => {
  if (qa(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new qt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Re(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => {
    var c, l;
    const { message: u } = e;
    return s.code === "invalid_enum_value" ? { message: u ?? i.defaultError } : typeof i.data > "u" ? { message: (c = u ?? r) !== null && c !== void 0 ? c : i.defaultError } : s.code !== "invalid_type" ? { message: i.defaultError } : { message: (l = u ?? n) !== null && l !== void 0 ? l : i.defaultError };
  }, description: o };
}
class Fe {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return gr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: gr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Tt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: gr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Zi(n))
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
      parsedType: gr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return zm(o, a);
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
      parsedType: gr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Zi(o) ? o : Promise.resolve(o));
    return zm(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ue.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new _n({
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return An.create(this, this._def);
  }
  nullable() {
    return Tr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return hn.create(this, this._def);
  }
  promise() {
    return Ko.create(this, this._def);
  }
  or(t) {
    return Ja.create([this, t], this._def);
  }
  and(t) {
    return es.create(this, t, this._def);
  }
  transform(t) {
    return new _n({
      ...Re(this._def),
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new as({
      ...Re(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Te.ZodDefault
    });
  }
  brand() {
    return new tp({
      typeName: Te.ZodBranded,
      type: this,
      ...Re(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ss({
      ...Re(this._def),
      innerType: this,
      catchValue: n,
      typeName: Te.ZodCatch
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
    return Rs.create(this, t);
  }
  readonly() {
    return is.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const HW = /^c[^\s-]{8,}$/i, UW = /^[0-9a-z]+$/, KW = /^[0-9A-HJKMNP-TV-Z]{26}$/, GW = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, YW = /^[a-z0-9_-]{21}$/i, qW = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, ZW = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, XW = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ul;
const QW = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, JW = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, eH = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, P1 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", tH = new RegExp(`^${P1}$`);
function O1(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function nH(e) {
  return new RegExp(`^${O1(e)}$`);
}
function T1(e) {
  let t = `${P1}T${O1(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function rH(e, t) {
  return !!((t === "v4" || !t) && QW.test(e) || (t === "v6" || !t) && JW.test(e));
}
class fn extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== $e.string) {
      const a = this._getOrReturnCtx(t);
      return ye(a, {
        code: ue.invalid_type,
        expected: $e.string,
        received: a.parsedType
      }), Me;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ye(o, {
          code: ue.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ye(o, {
          code: ue.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        ZW.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "email",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Ul || (Ul = new RegExp(XW, "u")), Ul.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "emoji",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        GW.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "uuid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        YW.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "nanoid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        HW.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "cuid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        UW.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "cuid2",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        KW.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "ulid",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ye(o, {
            validation: "url",
            code: ue.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "regex",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? T1(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "date" ? tH.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.invalid_string,
          validation: "date",
          message: a.message
        }), r.dirty()) : a.kind === "time" ? nH(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ue.invalid_string,
          validation: "time",
          message: a.message
        }), r.dirty()) : a.kind === "duration" ? qW.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "duration",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? rH(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "ip",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "base64" ? eH.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "base64",
          code: ue.invalid_string,
          message: a.message
        }), r.dirty()) : He.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: ue.invalid_string,
      ...Ne.errToObj(r)
    });
  }
  _addCheck(t) {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Ne.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Ne.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Ne.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Ne.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Ne.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Ne.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Ne.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Ne.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Ne.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Ne.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...Ne.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...Ne.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Ne.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Ne.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Ne.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Ne.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Ne.errToObj(t));
  }
  trim() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
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
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
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
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
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
fn.create = (e) => {
  var t;
  return new fn({
    checks: [],
    typeName: Te.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
function oH(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Er extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== $e.number) {
      const a = this._getOrReturnCtx(t);
      return ye(a, {
        code: ue.invalid_type,
        expected: $e.number,
        received: a.parsedType
      }), Me;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "int" ? He.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? oH(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.not_finite,
        message: a.message
      }), o.dirty()) : He.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ne.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ne.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ne.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ne.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Er({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ne.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Er({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Ne.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ne.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Ne.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Ne.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Ne.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && He.isInteger(t.value));
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
Er.create = (e) => new Er({
  checks: [],
  typeName: Te.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class Pr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== $e.bigint) {
      const a = this._getOrReturnCtx(t);
      return ye(a, {
        code: ue.invalid_type,
        expected: $e.bigint,
        received: a.parsedType
      }), Me;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ue.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : He.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ne.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ne.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ne.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ne.toString(n));
  }
  setLimit(t, n, r, o) {
    return new Pr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ne.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Pr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Ne.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Ne.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ne.toString(n)
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
Pr.create = (e) => {
  var t;
  return new Pr({
    checks: [],
    typeName: Te.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Re(e)
  });
};
class Za extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== $e.boolean) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.boolean,
        received: r.parsedType
      }), Me;
    }
    return Rt(t.data);
  }
}
Za.create = (e) => new Za({
  typeName: Te.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Re(e)
});
class ro extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== $e.date) {
      const a = this._getOrReturnCtx(t);
      return ye(a, {
        code: ue.invalid_type,
        expected: $e.date,
        received: a.parsedType
      }), Me;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ye(a, {
        code: ue.invalid_date
      }), Me;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ue.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ue.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : He.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new ro({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Ne.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Ne.toString(n)
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
ro.create = (e) => new ro({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Te.ZodDate,
  ...Re(e)
});
class Qi extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.symbol) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.symbol,
        received: r.parsedType
      }), Me;
    }
    return Rt(t.data);
  }
}
Qi.create = (e) => new Qi({
  typeName: Te.ZodSymbol,
  ...Re(e)
});
class Xa extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.undefined,
        received: r.parsedType
      }), Me;
    }
    return Rt(t.data);
  }
}
Xa.create = (e) => new Xa({
  typeName: Te.ZodUndefined,
  ...Re(e)
});
class Qa extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.null) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.null,
        received: r.parsedType
      }), Me;
    }
    return Rt(t.data);
  }
}
Qa.create = (e) => new Qa({
  typeName: Te.ZodNull,
  ...Re(e)
});
class Uo extends Fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Uo.create = (e) => new Uo({
  typeName: Te.ZodAny,
  ...Re(e)
});
class qr extends Fe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
qr.create = (e) => new qr({
  typeName: Te.ZodUnknown,
  ...Re(e)
});
class sr extends Fe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ye(n, {
      code: ue.invalid_type,
      expected: $e.never,
      received: n.parsedType
    }), Me;
  }
}
sr.create = (e) => new sr({
  typeName: Te.ZodNever,
  ...Re(e)
});
class Ji extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.void,
        received: r.parsedType
      }), Me;
    }
    return Rt(t.data);
  }
}
Ji.create = (e) => new Ji({
  typeName: Te.ZodVoid,
  ...Re(e)
});
class hn extends Fe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== $e.array)
      return ye(n, {
        code: ue.invalid_type,
        expected: $e.array,
        received: n.parsedType
      }), Me;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ye(n, {
        code: s ? ue.too_big : ue.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ye(n, {
      code: ue.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ye(n, {
      code: ue.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new Fn(n, s, n.path, i)))).then((s) => Tt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new Fn(n, s, n.path, i)));
    return Tt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new hn({
      ...this._def,
      minLength: { value: t, message: Ne.toString(n) }
    });
  }
  max(t, n) {
    return new hn({
      ...this._def,
      maxLength: { value: t, message: Ne.toString(n) }
    });
  }
  length(t, n) {
    return new hn({
      ...this._def,
      exactLength: { value: t, message: Ne.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
hn.create = (e, t) => new hn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Te.ZodArray,
  ...Re(t)
});
function Eo(e) {
  if (e instanceof pt) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = An.create(Eo(r));
    }
    return new pt({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof hn ? new hn({
      ...e._def,
      type: Eo(e.element)
    }) : e instanceof An ? An.create(Eo(e.unwrap())) : e instanceof Tr ? Tr.create(Eo(e.unwrap())) : e instanceof Bn ? Bn.create(e.items.map((t) => Eo(t))) : e;
}
class pt extends Fe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = He.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== $e.object) {
      const l = this._getOrReturnCtx(t);
      return ye(l, {
        code: ue.invalid_type,
        expected: $e.object,
        received: l.parsedType
      }), Me;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof sr && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], f = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Fn(o, f, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof sr) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (ye(o, {
          code: ue.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of i) {
        const f = o.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new Fn(o, f, o.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const f = await u.key, p = await u.value;
        l.push({
          key: f,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => Tt.mergeObjectSync(r, l)) : Tt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Ne.errToObj, new pt({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = Ne.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new pt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new pt({
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
    return new pt({
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
    return new pt({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Te.ZodObject
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
    return new pt({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return He.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return He.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Eo(this);
  }
  partial(t) {
    const n = {};
    return He.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return He.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof An; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return j1(He.objectKeys(this.shape));
  }
}
pt.create = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: sr.create(),
  typeName: Te.ZodObject,
  ...Re(t)
});
pt.strictCreate = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: sr.create(),
  typeName: Te.ZodObject,
  ...Re(t)
});
pt.lazycreate = (e, t) => new pt({
  shape: e,
  unknownKeys: "strip",
  catchall: sr.create(),
  typeName: Te.ZodObject,
  ...Re(t)
});
class Ja extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new qt(i.ctx.common.issues));
      return ye(n, {
        code: ue.invalid_union,
        unionErrors: s
      }), Me;
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
        }, u = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((c) => new qt(c));
      return ye(n, {
        code: ue.invalid_union,
        unionErrors: i
      }), Me;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ja.create = (e, t) => new Ja({
  options: e,
  typeName: Te.ZodUnion,
  ...Re(t)
});
const Qn = (e) => e instanceof ns ? Qn(e.schema) : e instanceof _n ? Qn(e.innerType()) : e instanceof rs ? [e.value] : e instanceof Or ? e.options : e instanceof os ? He.objectValues(e.enum) : e instanceof as ? Qn(e._def.innerType) : e instanceof Xa ? [void 0] : e instanceof Qa ? [null] : e instanceof An ? [void 0, ...Qn(e.unwrap())] : e instanceof Tr ? [null, ...Qn(e.unwrap())] : e instanceof tp || e instanceof is ? Qn(e.unwrap()) : e instanceof ss ? Qn(e._def.innerType) : [];
class Jc extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.object)
      return ye(n, {
        code: ue.invalid_type,
        expected: $e.object,
        received: n.parsedType
      }), Me;
    const r = this.discriminator, o = n.data[r], a = this.optionsMap.get(o);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ye(n, {
      code: ue.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), Me);
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
      const s = Qn(a.shape[t]);
      if (!s.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new Jc({
      typeName: Te.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Re(r)
    });
  }
}
function ed(e, t) {
  const n = gr(e), r = gr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === $e.object && r === $e.object) {
    const o = He.objectKeys(t), a = He.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = ed(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === $e.array && r === $e.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = ed(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === $e.date && r === $e.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class es extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Qu(a) || Qu(s))
        return Me;
      const i = ed(a.value, s.value);
      return i.valid ? ((Ju(a) || Ju(s)) && n.dirty(), { status: n.value, value: i.data }) : (ye(r, {
        code: ue.invalid_intersection_types
      }), Me);
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
es.create = (e, t, n) => new es({
  left: e,
  right: t,
  typeName: Te.ZodIntersection,
  ...Re(n)
});
class Bn extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.array)
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.array,
        received: r.parsedType
      }), Me;
    if (r.data.length < this._def.items.length)
      return ye(r, {
        code: ue.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Me;
    !this._def.rest && r.data.length > this._def.items.length && (ye(r, {
      code: ue.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new Fn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => Tt.mergeArray(n, s)) : Tt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Bn({
      ...this._def,
      rest: t
    });
  }
}
Bn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Bn({
    items: e,
    typeName: Te.ZodTuple,
    rest: null,
    ...Re(t)
  });
};
class ts extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.object)
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.object,
        received: r.parsedType
      }), Me;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new Fn(r, i, r.path, i)),
        value: s._parse(new Fn(r, r.data[i], r.path, i)),
        alwaysSet: i in r.data
      });
    return r.common.async ? Tt.mergeObjectAsync(n, o) : Tt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Fe ? new ts({
      keyType: t,
      valueType: n,
      typeName: Te.ZodRecord,
      ...Re(r)
    }) : new ts({
      keyType: fn.create(),
      valueType: t,
      typeName: Te.ZodRecord,
      ...Re(n)
    });
  }
}
class ec extends Fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.map)
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.map,
        received: r.parsedType
      }), Me;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new Fn(r, i, r.path, [l, "key"])),
      value: a._parse(new Fn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return Me;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return Me;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
ec.create = (e, t, n) => new ec({
  valueType: t,
  keyType: e,
  typeName: Te.ZodMap,
  ...Re(n)
});
class oo extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.set)
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.set,
        received: r.parsedType
      }), Me;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ye(r, {
      code: ue.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ye(r, {
      code: ue.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return Me;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new Fn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new oo({
      ...this._def,
      minSize: { value: t, message: Ne.toString(n) }
    });
  }
  max(t, n) {
    return new oo({
      ...this._def,
      maxSize: { value: t, message: Ne.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
oo.create = (e, t) => new oo({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Te.ZodSet,
  ...Re(t)
});
class Do extends Fe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.function)
      return ye(n, {
        code: ue.invalid_type,
        expected: $e.function,
        received: n.parsedType
      }), Me;
    function r(i, c) {
      return qi({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Yi(),
          Ho
        ].filter((l) => !!l),
        issueData: {
          code: ue.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return qi({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Yi(),
          Ho
        ].filter((l) => !!l),
        issueData: {
          code: ue.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    if (this._def.returns instanceof Ko) {
      const i = this;
      return Rt(async function(...c) {
        const l = new qt([]), u = await i._def.args.parseAsync(c, a).catch((h) => {
          throw l.addIssue(r(c, h)), l;
        }), f = await Reflect.apply(s, this, u);
        return await i._def.returns._def.type.parseAsync(f, a).catch((h) => {
          throw l.addIssue(o(f, h)), l;
        });
      });
    } else {
      const i = this;
      return Rt(function(...c) {
        const l = i._def.args.safeParse(c, a);
        if (!l.success)
          throw new qt([r(c, l.error)]);
        const u = Reflect.apply(s, this, l.data), f = i._def.returns.safeParse(u, a);
        if (!f.success)
          throw new qt([o(u, f.error)]);
        return f.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Do({
      ...this._def,
      args: Bn.create(t).rest(qr.create())
    });
  }
  returns(t) {
    return new Do({
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
    return new Do({
      args: t || Bn.create([]).rest(qr.create()),
      returns: n || qr.create(),
      typeName: Te.ZodFunction,
      ...Re(r)
    });
  }
}
class ns extends Fe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
ns.create = (e, t) => new ns({
  getter: e,
  typeName: Te.ZodLazy,
  ...Re(t)
});
class rs extends Fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ye(n, {
        received: n.data,
        code: ue.invalid_literal,
        expected: this._def.value
      }), Me;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
rs.create = (e, t) => new rs({
  value: e,
  typeName: Te.ZodLiteral,
  ...Re(t)
});
function j1(e, t) {
  return new Or({
    values: e,
    typeName: Te.ZodEnum,
    ...Re(t)
  });
}
class Or extends Fe {
  constructor() {
    super(...arguments), Sa.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ye(n, {
        expected: He.joinValues(r),
        received: n.parsedType,
        code: ue.invalid_type
      }), Me;
    }
    if (Xi(this, Sa) || E1(this, Sa, new Set(this._def.values)), !Xi(this, Sa).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ye(n, {
        received: n.data,
        code: ue.invalid_enum_value,
        options: r
      }), Me;
    }
    return Rt(t.data);
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
  extract(t, n = this._def) {
    return Or.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Or.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Sa = /* @__PURE__ */ new WeakMap();
Or.create = j1;
class os extends Fe {
  constructor() {
    super(...arguments), Na.set(this, void 0);
  }
  _parse(t) {
    const n = He.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== $e.string && r.parsedType !== $e.number) {
      const o = He.objectValues(n);
      return ye(r, {
        expected: He.joinValues(o),
        received: r.parsedType,
        code: ue.invalid_type
      }), Me;
    }
    if (Xi(this, Na) || E1(this, Na, new Set(He.getValidEnumValues(this._def.values))), !Xi(this, Na).has(t.data)) {
      const o = He.objectValues(n);
      return ye(r, {
        received: r.data,
        code: ue.invalid_enum_value,
        options: o
      }), Me;
    }
    return Rt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Na = /* @__PURE__ */ new WeakMap();
os.create = (e, t) => new os({
  values: e,
  typeName: Te.ZodNativeEnum,
  ...Re(t)
});
class Ko extends Fe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.promise && n.common.async === !1)
      return ye(n, {
        code: ue.invalid_type,
        expected: $e.promise,
        received: n.parsedType
      }), Me;
    const r = n.parsedType === $e.promise ? n.data : Promise.resolve(n.data);
    return Rt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Ko.create = (e, t) => new Ko({
  type: e,
  typeName: Te.ZodPromise,
  ...Re(t)
});
class _n extends Fe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Te.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, a = {
      addIssue: (s) => {
        ye(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), o.type === "preprocess") {
      const s = o.transform(r.data, a);
      if (r.common.async)
        return Promise.resolve(s).then(async (i) => {
          if (n.value === "aborted")
            return Me;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? Me : c.status === "dirty" || n.value === "dirty" ? Oo(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return Me;
        const i = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? Me : i.status === "dirty" || n.value === "dirty" ? Oo(i.value) : i;
      }
    }
    if (o.type === "refinement") {
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
        return i.status === "aborted" ? Me : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? Me : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!qa(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => qa(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    He.assertNever(o);
  }
}
_n.create = (e, t, n) => new _n({
  schema: e,
  typeName: Te.ZodEffects,
  effect: t,
  ...Re(n)
});
_n.createWithPreprocess = (e, t, n) => new _n({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Te.ZodEffects,
  ...Re(n)
});
class An extends Fe {
  _parse(t) {
    return this._getType(t) === $e.undefined ? Rt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
An.create = (e, t) => new An({
  innerType: e,
  typeName: Te.ZodOptional,
  ...Re(t)
});
class Tr extends Fe {
  _parse(t) {
    return this._getType(t) === $e.null ? Rt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Tr.create = (e, t) => new Tr({
  innerType: e,
  typeName: Te.ZodNullable,
  ...Re(t)
});
class as extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === $e.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
as.create = (e, t) => new as({
  innerType: e,
  typeName: Te.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Re(t)
});
class ss extends Fe {
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
    return Zi(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new qt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ss.create = (e, t) => new ss({
  innerType: e,
  typeName: Te.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Re(t)
});
class tc extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.nan) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ue.invalid_type,
        expected: $e.nan,
        received: r.parsedType
      }), Me;
    }
    return { status: "valid", value: t.data };
  }
}
tc.create = (e) => new tc({
  typeName: Te.ZodNaN,
  ...Re(e)
});
const aH = Symbol("zod_brand");
class tp extends Fe {
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
class Rs extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Me : a.status === "dirty" ? (n.dirty(), Oo(a.value)) : this._def.out._parseAsync({
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
      return o.status === "aborted" ? Me : o.status === "dirty" ? (n.dirty(), {
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
    return new Rs({
      in: t,
      out: n,
      typeName: Te.ZodPipeline
    });
  }
}
class is extends Fe {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return qa(n) && (n.value = Object.freeze(n.value)), n;
  }
  unwrap() {
    return this._def.innerType;
  }
}
is.create = (e, t) => new is({
  innerType: e,
  typeName: Te.ZodReadonly,
  ...Re(t)
});
function M1(e, t = {}, n) {
  return e ? Uo.create().superRefine((r, o) => {
    var a, s;
    if (!e(r)) {
      const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
      o.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : Uo.create();
}
const sH = {
  object: pt.lazycreate
};
var Te;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Te || (Te = {}));
const iH = (e, t = {
  message: `Input not instance of ${e.name}`
}) => M1((n) => n instanceof e, t), k1 = fn.create, D1 = Er.create, cH = tc.create, lH = Pr.create, A1 = Za.create, uH = ro.create, dH = Qi.create, fH = Xa.create, pH = Qa.create, hH = Uo.create, mH = qr.create, vH = sr.create, gH = Ji.create, bH = hn.create, yH = pt.create, xH = pt.strictCreate, wH = Ja.create, $H = Jc.create, _H = es.create, CH = Bn.create, SH = ts.create, NH = ec.create, EH = oo.create, PH = Do.create, OH = ns.create, TH = rs.create, jH = Or.create, MH = os.create, kH = Ko.create, Wm = _n.create, DH = An.create, AH = Tr.create, RH = _n.createWithPreprocess, IH = Rs.create, LH = () => k1().optional(), FH = () => D1().optional(), BH = () => A1().optional(), VH = {
  string: (e) => fn.create({ ...e, coerce: !0 }),
  number: (e) => Er.create({ ...e, coerce: !0 }),
  boolean: (e) => Za.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Pr.create({ ...e, coerce: !0 }),
  date: (e) => ro.create({ ...e, coerce: !0 })
}, zH = Me;
var nc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ho,
  setErrorMap: zW,
  getErrorMap: Yi,
  makeIssue: qi,
  EMPTY_PATH: WW,
  addIssueToContext: ye,
  ParseStatus: Tt,
  INVALID: Me,
  DIRTY: Oo,
  OK: Rt,
  isAborted: Qu,
  isDirty: Ju,
  isValid: qa,
  isAsync: Zi,
  get util() {
    return He;
  },
  get objectUtil() {
    return Xu;
  },
  ZodParsedType: $e,
  getParsedType: gr,
  ZodType: Fe,
  datetimeRegex: T1,
  ZodString: fn,
  ZodNumber: Er,
  ZodBigInt: Pr,
  ZodBoolean: Za,
  ZodDate: ro,
  ZodSymbol: Qi,
  ZodUndefined: Xa,
  ZodNull: Qa,
  ZodAny: Uo,
  ZodUnknown: qr,
  ZodNever: sr,
  ZodVoid: Ji,
  ZodArray: hn,
  ZodObject: pt,
  ZodUnion: Ja,
  ZodDiscriminatedUnion: Jc,
  ZodIntersection: es,
  ZodTuple: Bn,
  ZodRecord: ts,
  ZodMap: ec,
  ZodSet: oo,
  ZodFunction: Do,
  ZodLazy: ns,
  ZodLiteral: rs,
  ZodEnum: Or,
  ZodNativeEnum: os,
  ZodPromise: Ko,
  ZodEffects: _n,
  ZodTransformer: _n,
  ZodOptional: An,
  ZodNullable: Tr,
  ZodDefault: as,
  ZodCatch: ss,
  ZodNaN: tc,
  BRAND: aH,
  ZodBranded: tp,
  ZodPipeline: Rs,
  ZodReadonly: is,
  custom: M1,
  Schema: Fe,
  ZodSchema: Fe,
  late: sH,
  get ZodFirstPartyTypeKind() {
    return Te;
  },
  coerce: VH,
  any: hH,
  array: bH,
  bigint: lH,
  boolean: A1,
  date: uH,
  discriminatedUnion: $H,
  effect: Wm,
  enum: jH,
  function: PH,
  instanceof: iH,
  intersection: _H,
  lazy: OH,
  literal: TH,
  map: NH,
  nan: cH,
  nativeEnum: MH,
  never: vH,
  null: pH,
  nullable: AH,
  number: D1,
  object: yH,
  oboolean: BH,
  onumber: FH,
  optional: DH,
  ostring: LH,
  pipeline: IH,
  preprocess: RH,
  promise: kH,
  record: SH,
  set: EH,
  strictObject: xH,
  string: k1,
  symbol: dH,
  transformer: Wm,
  tuple: CH,
  undefined: fH,
  union: wH,
  unknown: mH,
  void: gH,
  NEVER: zH,
  ZodIssueCode: ue,
  quotelessJson: VW,
  ZodError: qt
});
const WH = () => {
  const { showFilters: e, setShowFilters: t } = lt(lr);
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ d.jsx(m1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, HH = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = lt(lr), [l, u] = X(null), f = Z(null), p = (h) => {
    c(h);
  };
  return ee(() => {
    const h = f.current;
    if (!h)
      return;
    const m = new ResizeObserver((v) => {
      const g = v[0].contentRect.width;
      u(g);
    });
    return m.observe(h), () => {
      m.unobserve(h), m.disconnect();
    };
  }, []), /* @__PURE__ */ d.jsxs(rr, { children: [
    /* @__PURE__ */ d.jsx(or, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      Ve,
      {
        size: "sm",
        type: "button",
        ref: f,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ d.jsx(v1, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            /* @__PURE__ */ d.jsx(Ms, { orientation: "vertical", className: "mx-2 h-4" }),
            /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length >= 1 ? /* @__PURE__ */ d.jsx(
              At,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: i(e).length === 1 ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  i(e).length,
                  " seleccionado"
                ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  i(e).length,
                  " seleccionados"
                ] })
              }
            ) : o.filter((h) => h.selected).map((h) => /* @__PURE__ */ d.jsx(
              At,
              {
                variant: "secondary",
                className: "rounded-sm px-1 font-normal",
                children: h.label.length >= 20 ? null : h.label
              },
              h.value.toString()
            )) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx("style", { children: `
          .combox-checkbox-content {
            min-width: 150px !important;
            width: ${l + 24}px !important;
          }

          .checkbox-tooltip-content {
            min-width: 150px !important;
            width: ${l + 10}px !important;
          }
        ` }),
    /* @__PURE__ */ d.jsx(Ln, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ d.jsxs(ar, { children: [
      /* @__PURE__ */ d.jsx(Cr, { placeholder: r }),
      /* @__PURE__ */ d.jsxs(la, { children: [
        /* @__PURE__ */ d.jsx(Sr, { children: "Sin Resultados" }),
        /* @__PURE__ */ d.jsx($n, { children: o.map((h) => /* @__PURE__ */ d.jsxs(
          Gt,
          {
            onSelect: () => {
              h.selected ? s(e, h.id, !1) : s(e, h.id, !0);
            },
            children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: T(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    h.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ d.jsx(rn, { className: T("h-4 w-4") })
                }
              ),
              h.icon,
              /* @__PURE__ */ d.jsx("span", { className: "truncate", children: h.label })
            ]
          },
          h.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(Ka, {}),
          /* @__PURE__ */ d.jsx($n, { children: /* @__PURE__ */ d.jsx(
            Gt,
            {
              onSelect: () => p(e),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, UH = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = lt(lr), l = () => {
    var f;
    const u = [];
    (f = Object.entries(t == null ? void 0 : t.getValues())) == null || f.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : ua(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ d.jsxs(rr, { children: [
    /* @__PURE__ */ d.jsx(or, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ d.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(Ms, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ d.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: o
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ d.jsxs(Ln, { className: "w-fit p-4", align: "start", children: [
      /* @__PURE__ */ d.jsxs(Un, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ d.jsx(
          Sf,
          {
            id: e,
            form: t,
            type: "text",
            placeholder: `Ingrese ${n}`
          }
        ),
        /* @__PURE__ */ d.jsx(
          Ve,
          {
            type: "button",
            onClick: l,
            className: "h-10 w-fit",
            children: /* @__PURE__ */ d.jsx(yi, { size: 18 })
          }
        )
      ] })
    ] })
  ] });
}, KH = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = lt(lr), u = e.watch(n.map((p) => p.id)), f = () => {
    var h;
    a();
    const p = [];
    (h = Object.entries(e == null ? void 0 : e.getValues())) == null || h.forEach((m) => {
      m[1] && p.push({
        field: l ? m[0] : ua(m[0]),
        text: m[1]
      });
    }), s({ queries: p, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ d.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-col-reverse items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ d.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ d.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((p, h) => /* @__PURE__ */ d.jsx(
          UH,
          {
            queryText: u[h],
            label: p.label,
            id: p.id,
            form: e
          },
          p.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ d.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ d.jsx(WH, {}),
      o && r && r.map((p) => /* @__PURE__ */ d.jsx(
        HH,
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
        (p) => p.options.some((h) => h.selected)
      ).length) ? /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: f,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ d.jsx(uc, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, GH = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = lt(lr), l = iy({
    defaultValues: n.reduce((f, p) => (f[p.id] = "", f), {}),
    resolver: S1(
      nc.object(
        n.reduce((f, p) => (f[p.id] = nc.string().optional(), f), {})
      )
    )
  }), u = async (f) => {
    var m;
    console.log({ data: f });
    const p = r(), h = [];
    (m = Object.entries(f)) == null || m.forEach((v) => {
      v[1] && h.push({
        field: c ? v[0] : ua(v[0]),
        text: v[1]
      });
    }), console.log("queries formatted ", h), e({ queries: h, filters: p, limit: s, page: a });
  };
  return ee(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ d.jsx("div", {}) : /* @__PURE__ */ d.jsx(ly, { ...l, children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ d.jsx(KH, { form: l, onSubmit: u }) : /* @__PURE__ */ d.jsx("div", {}),
    /* @__PURE__ */ d.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ d.jsx(pd, {}) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(y1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, YH = () => /* @__PURE__ */ d.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), qH = () => /* @__PURE__ */ d.jsxs(Af, { children: [
  /* @__PURE__ */ d.jsx($1, {}),
  /* @__PURE__ */ d.jsx(_1, {})
] }), ZH = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function bq(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [f, p] = X(e == null ? void 0 : e.loading), [h, m] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? ZH
  ), [b, y] = X(
    (e == null ? void 0 : e.columns) || []
  ), [x, _] = X(!1), [$, N] = X(!1), S = be(
    (H) => e.onSubmitTable({ ...H }),
    [e]
  ), M = be(
    (H) => {
      var me;
      g(H);
      const Q = h.getValues(), I = [];
      (me = Object.entries(Q)) == null || me.forEach((ae) => {
        ae[1] && I.push({
          field: e != null && e.isFormatedUpperQueries ? ae[0] : ua(ae[0]),
          text: ae[1]
        });
      });
      const re = r.map((ae) => ({
        id: ae.id,
        label: ae.label,
        options: ae.options.filter((te) => te.selected).map((te) => te.value)
      })).filter((ae) => ae.options.length > 0);
      S({
        filters: re,
        queries: I,
        limit: H.limit,
        page: H.page
      });
    },
    [r, S, h]
  ), E = be(() => {
    M({ ...v, page: v.page + 1 });
  }, [v, M]), V = be(() => {
    v.page > 1 && M({ ...v, page: v.page - 1 });
  }, [v, M]), G = be(() => {
    g({ ...v, page: 1 });
  }, []), B = () => r.map((H) => ({
    id: H.id,
    label: H.label,
    options: H.options.filter((Q) => Q.selected).map((Q) => Q.value)
  })).filter((H) => H.options.length > 0), U = (H) => {
    const Q = r.find((I) => I.id === H);
    return Q ? Q.options.filter((re) => re.selected).map((re) => re.value) : [];
  }, R = (H, Q, I) => {
    const re = r.map((me) => me.id === H ? {
      ...me,
      options: me.options.map((ae) => ae.id === Q ? { ...ae, selected: I } : ae)
    } : me);
    o(re);
  }, k = () => r, W = (H) => {
    const Q = r.map((I) => I.id === H ? {
      ...I,
      options: I.options.map((re) => ({
        ...re,
        selected: !1
      }))
    } : I);
    o(Q);
  }, D = (H, Q) => M({
    ...v,
    limit: H,
    page: Q || (v == null ? void 0 : v.page)
  }), z = () => {
    const H = r.map((Q) => ({
      ...Q,
      options: Q.options.map((I) => ({ ...I, selected: !1 }))
    }));
    o(H);
  }, Y = (H) => {
    var Q;
    if (H) {
      const I = (Q = e == null ? void 0 : e.data) == null ? void 0 : Q.map((re) => ({
        ...re,
        isSelected: H
      }));
      e == null || e.setMultiItemsSelected(I);
    } else
      e == null || e.setMultiItemsSelected([]);
    N(H), e != null && e.onSelectAllItems && (e == null || e.onSelectAllItems(H));
  };
  return ee(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), ee(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), ee(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), ee(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), ee(() => {
    const H = {
      id: "multi-select",
      label: ""
    };
    e != null && e.setMultiItemsSelected && (e != null && e.multiItemsSelected) && (e != null && e.columns) ? (_(!0), y([H, ...e == null ? void 0 : e.columns])) : y((e == null ? void 0 : e.columns) || []);
  }, [e == null ? void 0 : e.columns]), ee(() => {
    var H;
    e != null && e.isSelectedAllItems && ((H = e == null ? void 0 : e.data) != null && H.length) && Y(e == null ? void 0 : e.isSelectedAllItems);
  }, [e == null ? void 0 : e.isSelectedAllItems, e == null ? void 0 : e.data]), ee(() => {
    const H = b.filter((Q) => Q.isQuery).map((Q) => ({
      id: Q.id,
      label: Q.label
    }));
    s(H);
  }, [b]), ee(() => {
    const H = (I) => (I == null ? void 0 : I.filters) && (I == null ? void 0 : I.filters.length), Q = b.filter(H).map((I) => {
      const re = I.filters.map((ae) => ({
        ...ae,
        selected: !1
      }));
      return {
        ...I,
        id: I.id,
        options: re
      };
    });
    o(Q);
  }, [b]), ee(() => {
    e != null && e.filters && (e == null || e.filters.forEach((H) => {
      H != null && H.filters && b.forEach((Q) => {
        H.id === Q.id && o((I) => I.some((me) => me.id === H.id) ? I : [
          ...I,
          {
            id: Q.id,
            label: Q.label,
            options: H.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), ee(() => {
    g((H) => {
      var Q, I;
      return {
        ...H,
        hasNextPage: (Q = e == null ? void 0 : e.pagination) == null ? void 0 : Q.hasNextPage,
        hasPrevPage: (I = e == null ? void 0 : e.pagination) == null ? void 0 : I.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ d.jsx(
    lr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: E,
        prevPage: V,
        resetPage: G,
        searchForm: h,
        isFormatedUpperQueries: e == null ? void 0 : e.isFormatedUpperQueries,
        updateLimit: D,
        showFilters: i,
        resetFilters: z,
        getGlobalFilters: k,
        selectOptionFilter: R,
        resetOptionsByFilter: W,
        multiItemsSelected: e == null ? void 0 : e.multiItemsSelected,
        setMultiItemsSelected: e == null ? void 0 : e.setMultiItemsSelected,
        limitOfMultiSelect: e == null ? void 0 : e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: S,
        getFilterOptionsSelectedById: U,
        getFiltersWithOptionsSelected: B,
        setSelectItem: e == null ? void 0 : e.setSelectItem,
        setShowFilters: (H) => c(H),
        setSearchForm: (H) => m(H),
        onSelectAllItems: Y,
        isSelectedAllItems: $,
        setIsMultiSelect: _,
        isMultiSelect: x
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ d.jsx(GH, { onSubmitTable: S, loading: f }),
        /* @__PURE__ */ d.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          f && /* @__PURE__ */ d.jsx(IW, {}),
          !f && l && /* @__PURE__ */ d.jsx(YH, {}),
          !f && !l && !t && /* @__PURE__ */ d.jsx(qH, {}),
          !f && !l && t && /* @__PURE__ */ d.jsx(AW, {})
        ] }),
        !f && !l && t && /* @__PURE__ */ d.jsx(MW, {})
      ] })
    }
  );
}
const yq = ({
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
  classNameGroup: u,
  disabled: f,
  isLoading: p
}) => p ? /* @__PURE__ */ d.jsxs("div", { className: T("w-full", c), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: t && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(Ot, { className: "w-full h-9 mt-2" }) })
] }) : /* @__PURE__ */ d.jsx(
  po,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: h, formState: m }) => {
      var v;
      return /* @__PURE__ */ d.jsxs(Rr, { className: T("w-full", c), children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
            t,
            " "
          ] }),
          ((v = m == null ? void 0 : m.errors[e]) == null ? void 0 : v.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            m.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: o }),
        /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ d.jsxs(
          Of,
          {
            onValueChange: (g) => g && h.onChange(g),
            defaultValue: h.value,
            disabled: f,
            value: h == null ? void 0 : h.value,
            children: [
              /* @__PURE__ */ d.jsx(Os, { children: /* @__PURE__ */ d.jsx(Fc, { disabled: f, tabIndex: i, className: T("w-full [&_>_span]:truncate", l), children: /* @__PURE__ */ d.jsx(Tf, { placeholder: r }) }) }),
              /* @__PURE__ */ d.jsx(Bc, { children: /* @__PURE__ */ d.jsxs(qI, { className: T("overflow-auto", u), children: [
                a.length ? null : /* @__PURE__ */ d.jsx("div", { className: "px-2 py-1 text-sm", children: "Sin Resultados" }),
                a.map((g) => {
                  var b, y;
                  return /* @__PURE__ */ d.jsx(Vc, { value: (b = g.value) == null ? void 0 : b.toString(), disabled: g == null ? void 0 : g.disabled, children: /* @__PURE__ */ d.jsxs("div", { className: "flex justify-center items-center", children: [
                    (g == null ? void 0 : g.icon) && /* @__PURE__ */ d.jsx("div", { className: "dark:text-white mr-2 h-5", children: g.icon }),
                    g.label
                  ] }) }, (y = g.value) == null ? void 0 : y.toString());
                })
              ] }) })
            ]
          }
        )
      ] });
    }
  }
);
function el() {
  return (el = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function R1(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function td(e) {
  var t = Z(e), n = Z(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var cs = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Pa = function(e) {
  return "touches" in e;
}, nd = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Hm = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Pa(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: cs((o.pageX - (r.left + nd(e).pageXOffset)) / r.width), top: cs((o.pageY - (r.top + nd(e).pageYOffset)) / r.height) };
}, Um = function(e) {
  !Pa(e) && e.preventDefault();
}, I1 = A.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = R1(e, ["onMove", "onKey"]), o = Z(null), a = td(t), s = td(n), i = Z(null), c = Z(!1), l = Zt(function() {
    var h = function(g) {
      Um(g), (Pa(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Hm(o.current, g, i.current)) : v(!1);
    }, m = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = nd(o.current), x = g ? y.addEventListener : y.removeEventListener;
      x(b ? "touchmove" : "mousemove", h), x(b ? "touchend" : "mouseup", m);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Um(b), !function(_, $) {
        return $ && !Pa(_);
      }(b, c.current) && y)) {
        if (Pa(b)) {
          c.current = !0;
          var x = b.changedTouches || [];
          x.length && (i.current = x[0].identifier);
        }
        y.focus(), a(Hm(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], f = l[1], p = l[2];
  return ee(function() {
    return p;
  }, [p]), A.createElement("div", el({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), np = function(e) {
  return e.filter(Boolean).join(" ");
}, L1 = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = np(["react-colorful__pointer", e.className]);
  return A.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, A.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Et = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, XH = function(e) {
  return nU(rd(e));
}, rd = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Et(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Et(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, QH = function(e) {
  return tU(eU(e));
}, JH = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Et(e.h), s: Et(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Et(o / 2), a: Et(r, 2) };
}, od = function(e) {
  var t = JH(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, eU = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: Et(255 * [r, i, s, s, c, r][l]), g: Et(255 * [c, r, r, i, s, s][l]), b: Et(255 * [s, s, c, r, r, i][l]), a: Et(o, 2) };
}, ni = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, tU = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ni(Et(255 * o)) : "";
  return "#" + ni(t) + ni(n) + ni(r) + a;
}, nU = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Et(60 * (i < 0 ? i + 6 : i)), s: Et(a ? s / a * 100 : 0), v: Et(a / 255 * 100), a: o };
}, rU = A.memo(function(e) {
  var t = e.hue, n = e.onChange, r = np(["react-colorful__hue", e.className]);
  return A.createElement("div", { className: r }, A.createElement(I1, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: cs(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Et(t), "aria-valuemax": "360", "aria-valuemin": "0" }, A.createElement(L1, { className: "react-colorful__hue-pointer", left: t / 360, color: od({ h: t, s: 100, v: 100, a: 1 }) })));
}), oU = A.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: od({ h: t.h, s: 100, v: 100, a: 1 }) };
  return A.createElement("div", { className: "react-colorful__saturation", style: r }, A.createElement(I1, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: cs(t.s + 100 * o.left, 0, 100), v: cs(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Et(t.s) + "%, Brightness " + Et(t.v) + "%" }, A.createElement(L1, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: od(t) })));
}), F1 = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, aU = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || F1(rd(e), rd(t));
};
function sU(e, t, n) {
  var r = td(n), o = X(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = Z({ color: t, hsva: a });
  ee(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), ee(function() {
    var l;
    F1(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = be(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var iU = typeof window < "u" ? fs : ee, cU = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Km = /* @__PURE__ */ new Map(), lU = function(e) {
  iU(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Km.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Km.set(t, n);
      var r = cU();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, uU = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = R1(e, ["className", "colorModel", "color", "onChange"]), i = Z(null);
  lU(i);
  var c = sU(n, o, a), l = c[0], u = c[1], f = np(["react-colorful", t]);
  return A.createElement("div", el({}, s, { ref: i, className: f }), A.createElement(oU, { hsva: l, onChange: u }), A.createElement(rU, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, dU = { defaultColor: "000", toHsva: XH, fromHsva: function(e) {
  return QH({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: aU }, fU = function(e) {
  return A.createElement(uU, el({}, e, { colorModel: dU }));
};
const xq = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ d.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ d.jsx(fU, { color: e, onChange: t }),
  /* @__PURE__ */ d.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ d.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function pU(e, t, n) {
  var r = X([]), o = r[0], a = r[1], s = Z([]), i = be(function(f, p) {
    var h = e(f, p), m = h[0], v = h[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), m;
  }, [e]), c = ud(i, n), l = c[0], u = c[1];
  return ee(function() {
    var f = o.pop();
    if (f) {
      var p = t(f, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), ee(function() {
    return function() {
      s.current.forEach(function(f) {
        f();
      });
    };
  }, []), [l, u];
}
function un() {
  return un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, un.apply(this, arguments);
}
function hU(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var tl = {
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
}, Dt;
for (Dt = 1; Dt < 25; Dt += 1)
  tl[111 + Dt] = "F" + Dt;
for (Dt = 65; Dt < 91; Dt += 1) {
  var Gm = /* @__PURE__ */ String.fromCharCode(Dt);
  tl[Dt] = [/* @__PURE__ */ Gm.toLowerCase(), /* @__PURE__ */ Gm.toUpperCase()];
}
for (Dt = 96; Dt < 106; Dt += 1)
  tl[Dt] = /* @__PURE__ */ String.fromCharCode(Dt - 48);
function mU(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = tl[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var vU = {
  getKey: mU
};
function ri() {
}
function B1(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function gU(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var bU = ["refs"], Kl = [], yU = ["autoFocus", "length", "validate", "format", "formatAriaLabel", "debug"], xU = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], wU = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], $U = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  formatAriaLabel: function(t, n) {
    return "pin code " + t + " of " + n;
  },
  onResolveKey: ri,
  onRejectKey: ri,
  onChange: ri,
  onComplete: ri,
  debug: !1
};
function _U(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: CU(e.validate),
    fallback: null
  };
}
function V1(e) {
  return Math.max(0, e - 1);
}
function ad(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function CU(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Ym(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = ad(o + e.focusIdx - 1, e.codeLength), s = B1(0, o).flatMap(function(i) {
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
  }), [un({}, e, {
    focusIdx: a
  }), s];
}
var SU = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
        case "Process":
          return [un({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), Kl];
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
          var r = V1(t.focusIdx);
          return [un({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = ad(t.focusIdx, t.codeLength);
          return [un({}, t, {
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
          var a = ad(t.focusIdx, t.codeLength);
          return [un({}, t, {
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
        return [t, Kl];
      var s = un({}, t, {
        fallback: null
      }), i = [], c = t.fallback, l = c.idx, u = c.val, f = n.val;
      if (u === "" && f === "")
        i.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (f !== "")
        return Ym(s, l, f);
      return [s, i];
    }
    case "handle-paste":
      return Ym(t, n.idx, n.val);
    case "focus-input":
      return [un({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, Kl];
  }
};
function NU(e) {
  var t = e.refs, n = hU(e, bU);
  return be(function(r) {
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
          var s = V1(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var i = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), c = t.current.map(function(u) {
          return u.value.trim();
        }), l = (i === "rtl" ? c.reverse() : c).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var EU = /* @__PURE__ */ L(function(e, t) {
  var n = un({}, $U, e), r = n.autoFocus, o = n.formatAriaLabel, a = n.length, s = gU([].concat(yU, xU), n), i = Z([]), c = NU(un({
    refs: i
  }, n)), l = pU(SU, c, _U(n))[1];
  sv(t, function() {
    return i.current;
  }, [i]);
  function u(g) {
    return function() {
      l({
        type: "focus-input",
        idx: g
      });
    };
  }
  function f(g) {
    return function(b) {
      var y = vU.getKey(b.nativeEvent);
      !wU.includes(y) && !b.ctrlKey && !b.altKey && !b.metaKey && b.nativeEvent.target instanceof HTMLInputElement && (b.preventDefault(), l({
        type: "handle-key-down",
        idx: g,
        key: y,
        val: b.nativeEvent.target.value
      }));
    };
  }
  function p(g) {
    return function(b) {
      b.nativeEvent.target instanceof HTMLInputElement && l({
        type: "handle-key-up",
        idx: g,
        val: b.nativeEvent.target.value
      });
    };
  }
  function h(g) {
    return function(b) {
      b.preventDefault();
      var y = b.clipboardData.getData("Text");
      l({
        type: "handle-paste",
        idx: g,
        val: y
      });
    };
  }
  function m(g) {
    return function(b) {
      b && (i.current[g] = b);
    };
  }
  function v(g) {
    return !!(g === 0 && r);
  }
  return A.createElement(A.Fragment, null, B1(0, a).map(function(g) {
    return A.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, s, {
      "aria-disabled": s.disabled ? "true" : void 0,
      "aria-label": o(g + 1, a),
      "aria-readonly": s.readOnly ? "true" : void 0,
      "aria-required": "true",
      key: g,
      ref: m(g),
      autoFocus: v(g),
      onFocus: u(g),
      onKeyDown: f(g),
      onKeyUp: p(g),
      onPaste: h(g)
    }));
  }));
});
const wq = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = A.useState(!1);
  return /* @__PURE__ */ d.jsx("div", { className: T("pin-field-container", s), children: /* @__PURE__ */ d.jsx(
    EU,
    {
      className: T("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var z1 = {}, rp = {};
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
})(rp);
var W1 = {}, er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.DEFAULT_DATA_URL_KEY = er.INIT_MAX_NUMBER = er.DEFAULT_NULL_INDEX = void 0;
er.DEFAULT_NULL_INDEX = -1;
er.INIT_MAX_NUMBER = 1e3;
er.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = mt && mt.__awaiter || function(a, s, i, c) {
    function l(u) {
      return u instanceof i ? u : new i(function(f) {
        f(u);
      });
    }
    return new (i || (i = Promise))(function(u, f) {
      function p(v) {
        try {
          m(c.next(v));
        } catch (g) {
          f(g);
        }
      }
      function h(v) {
        try {
          m(c.throw(v));
        } catch (g) {
          f(g);
        }
      }
      function m(v) {
        v.done ? u(v.value) : l(v.value).then(p, h);
      }
      m((c = c.apply(a, s || [])).next());
    });
  }, n = mt && mt.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (u[0] & 1)
        throw u[1];
      return u[1];
    }, trys: [], ops: [] }, c, l, u, f;
    return f = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
      return this;
    }), f;
    function p(m) {
      return function(v) {
        return h([m, v]);
      };
    }
    function h(m) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (u = m[0] & 2 ? l.return : m[0] ? l.throw || ((u = l.return) && u.call(l), 0) : l.next) && !(u = u.call(l, m[1])).done)
            return u;
          switch (l = 0, u && (m = [m[0] & 2, u.value]), m[0]) {
            case 0:
            case 1:
              u = m;
              break;
            case 4:
              return i.label++, { value: m[1], done: !1 };
            case 5:
              i.label++, l = m[1], m = [0];
              continue;
            case 7:
              m = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (u = i.trys, !(u = u.length > 0 && u[u.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                i = 0;
                continue;
              }
              if (m[0] === 3 && (!u || m[1] > u[0] && m[1] < u[3])) {
                i.label = m[1];
                break;
              }
              if (m[0] === 6 && i.label < u[1]) {
                i.label = u[1], u = m;
                break;
              }
              if (u && i.label < u[2]) {
                i.label = u[2], i.ops.push(m);
                break;
              }
              u[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          m = s.call(a, i);
        } catch (v) {
          m = [6, v], l = 0;
        } finally {
          c = u = 0;
        }
      if (m[0] & 5)
        throw m[1];
      return { value: m[0] ? m[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = er, o = rp;
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
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, u = a.acceptType, f = a.maxFileSize, p = a.resolutionType, h = a.resolutionWidth, m = a.resolutionHeight, v = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, b, y, x, _;
      return n(this, function($) {
        switch ($.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, $.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, y.name) ? e.isMaxFileSizeValid(y.size, f) ? p ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (x = $.sent(), _ = e.isResolutionValid(x, p, h, m), !_)
              return g.resolution = !0, [3, 5];
            $.label = 4;
          case 4:
            return b += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(W1);
var sd = mt && mt.__assign || function() {
  return sd = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, sd.apply(this, arguments);
}, PU = mt && mt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), OU = mt && mt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), TU = mt && mt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && PU(t, e, n);
  return OU(t, e), t;
}, Gl = mt && mt.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(u) {
      try {
        l(r.next(u));
      } catch (f) {
        s(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        s(f);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, Yl = mt && mt.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(u) {
      return c([l, u]);
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
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        r = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, ql = mt && mt.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(z1, "__esModule", { value: !0 });
var sn = TU(A), Zl = rp, jU = W1, hr = er, MU = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? hr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, f = u === void 0 ? hr.INIT_MAX_NUMBER : u, p = e.acceptType, h = e.maxFileSize, m = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, x = e.allowNonImageType, _ = x === void 0 ? !1 : x, $ = n || [], N = sn.useRef(null), S = sn.useState(hr.DEFAULT_NULL_INDEX), M = S[0], E = S[1], V = sn.useState(null), G = V[0], B = V[1], U = sn.useState(!1), R = U[0], k = U[1], W = sn.useCallback(function() {
    return Zl.openFileDialog(N);
  }, [
    N
  ]), D = sn.useCallback(function() {
    E(hr.DEFAULT_NULL_INDEX), W();
  }, [W]), z = sn.useCallback(function() {
    r == null || r([]);
  }, [r]), Y = function(ce) {
    var he = ql($);
    Array.isArray(ce) ? ce.forEach(function(K) {
      he.splice(K, 1);
    }) : he.splice(ce, 1), r == null || r(he);
  }, H = function(ce) {
    E(ce), W();
  }, Q = function(ce) {
    return Gl(void 0, void 0, void 0, function() {
      var he;
      return Yl(this, function(K) {
        switch (K.label) {
          case 0:
            return [4, jU.getErrorValidation({
              fileList: ce,
              maxFileSize: h,
              maxNumber: f,
              acceptType: p,
              keyUpdate: M,
              resolutionType: g,
              resolutionWidth: m,
              resolutionHeight: v,
              value: $,
              allowNonImageType: _
            })];
          case 1:
            return he = K.sent(), he ? (B(he), o == null || o(he, ce), [2, !1]) : (G && B(null), [2, !0]);
        }
      });
    });
  }, I = function(ce) {
    return Gl(void 0, void 0, void 0, function() {
      var he, K, se, ne, Ee, De;
      return Yl(this, function(Oe) {
        switch (Oe.label) {
          case 0:
            return ce ? [4, Zl.getListFiles(ce, i)] : [
              2
              /*return*/
            ];
          case 1:
            return he = Oe.sent(), he.length ? [4, Q(he)] : [
              2
              /*return*/
            ];
          case 2:
            if (K = Oe.sent(), !K)
              return [
                2
                /*return*/
              ];
            if (ne = [], M > hr.DEFAULT_NULL_INDEX)
              Ee = he[0], se = ql($), se[M] = Ee, ne.push(M);
            else if (l)
              for (se = ql($, he), De = $.length; De < se.length; De += 1)
                ne.push(De);
            else
              se = [he[0]], ne.push(0);
            return r == null || r(se, ne), [
              2
              /*return*/
            ];
        }
      });
    });
  }, re = function(ce) {
    return Gl(void 0, void 0, void 0, function() {
      return Yl(this, function(he) {
        switch (he.label) {
          case 0:
            return [4, I(ce.target.files)];
          case 1:
            return he.sent(), M > hr.DEFAULT_NULL_INDEX && E(hr.DEFAULT_NULL_INDEX), N.current && (N.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, me = sn.useMemo(function() {
    return Zl.getAcceptTypeString(p, _);
  }, [p, _]), ae = function(ce) {
    ce.preventDefault(), ce.stopPropagation();
  }, te = function(ce) {
    ce.preventDefault(), ce.stopPropagation(), ce.dataTransfer.items && ce.dataTransfer.items.length > 0 && k(!0);
  }, ie = function(ce) {
    ce.preventDefault(), ce.stopPropagation(), k(!1);
  }, ge = function(ce) {
    ce.preventDefault(), ce.stopPropagation(), k(!1), ce.dataTransfer.files && ce.dataTransfer.files.length > 0 && I(ce.dataTransfer.files);
  }, _e = function(ce) {
    ce.preventDefault(), ce.stopPropagation(), ce.dataTransfer.clearData();
  };
  return sn.default.createElement(
    sn.default.Fragment,
    null,
    sn.default.createElement("input", sd({ type: "file", accept: me, ref: N, multiple: l && M === hr.DEFAULT_NULL_INDEX, onChange: re, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: $,
      onImageUpload: D,
      onImageRemoveAll: z,
      onImageUpdate: H,
      onImageRemove: Y,
      errors: G,
      dragProps: {
        onDrop: ge,
        onDragEnter: te,
        onDragLeave: ie,
        onDragOver: ae,
        onDragStart: _e
      },
      isDragging: R
    })
  );
}, H1 = z1.default = MU;
const kU = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, U1 = ({
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
      const u = kU(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
});
function rc(e, t) {
  fetch(e).then((n) => n.blob()).then((n) => {
    const r = window.URL.createObjectURL(new Blob([n])), o = document.createElement("a");
    o.href = r, o.setAttribute("download", t || "imagen.jpg"), document.body.appendChild(o), o.click();
  });
}
const DU = (e) => {
  const { imageIndex: t, compress: n, disabled: r, tabIndexs: o, onImageUpdate: a, setUploadImage: s, onImageRemove: i, setLocalImage: c, download: l, handleOnRemove: u, edit: f, src: p } = e;
  return /* @__PURE__ */ d.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !r && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(b1, { size: 16 })
      }
    ),
    !r && f && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.change,
        onClick: () => a(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(wv, { size: 16 })
      }
    ),
    !r && /* @__PURE__ */ d.jsx(
      Ve,
      {
        tabIndex: o == null ? void 0 : o.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          u(t), i(t), c([]), s({ original: null, compressed: null });
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx($v, { size: 16 })
      }
    ),
    l && p && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: o == null ? void 0 : o.viewCompress,
        onClick: () => rc(p, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 16 })
      }
    )
  ] });
}, AU = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    ...e,
    className: T(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: T("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ d.jsx(hd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ d.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), K1 = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s, ...i }) => {
  const [c, l] = X(!1);
  return r ? /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit relative", children: [
    a && /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "button",
        onClick: () => rc(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 18 })
      }
    ),
    /* @__PURE__ */ d.jsxs(yy, { open: c, onOpenChange: l, children: [
      /* @__PURE__ */ d.jsxs(To, { className: T("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ d.jsx(
          Gr,
          {
            ...i,
            src: e,
            onClick: () => l(!0),
            className: T("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n)
          }
        ),
        /* @__PURE__ */ d.jsx(jo, { className: T("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(il, {}) })
      ] }),
      /* @__PURE__ */ d.jsx(Cf, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => l(!1), children: /* @__PURE__ */ d.jsxs(To, { className: T("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ d.jsx(Gr, { src: e, className: T("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ d.jsx(jo, { className: T("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(il, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsxs(To, { className: T("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
    a && /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "button",
        onClick: () => rc(e, s),
        className: "absolute top-2 right-2 w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 18 })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Gr,
      {
        ...i,
        src: e,
        className: T("aspect-video w-auto rounded-md object-contain m-auto h-full", n),
        style: { width: "-webkit-fill-available" }
      }
    ),
    /* @__PURE__ */ d.jsx(jo, { className: T("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(il, {}) })
  ] }) });
}, $q = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, crossOrigin: o, format: a, label: s, uploadLabel: i, tabIndexs: c, disabled: l, emptyClassName: u, imageContainerClassName: f, zoom: p, compress: h, download: m, onRemove: v, onEdit: g } = e, [b, y] = X(n ? [{ data_url: n, file: null }] : []), x = async ($, N) => {
    var V, G, B, U, R, k, W, D, z, Y;
    const S = (V = $[0]) == null ? void 0 : V.file, M = (G = $[0]) == null ? void 0 : G.data_url;
    S || (y([]), r({ original: null, compressed: null })), y($);
    const E = gi((B = $[0]) == null ? void 0 : B.file.size);
    if (h != null && h.resizer && S) {
      const { data_url: H, file: Q } = await U1({
        resizer: h == null ? void 0 : h.resizer,
        imageFile: S,
        quality: (a == null ? void 0 : a.quality) || 10,
        maxWidth: (a == null ? void 0 : a.width) || 500,
        maxHeight: (a == null ? void 0 : a.width) || 500,
        compressFormat: (a == null ? void 0 : a.extension) || "png",
        rotation: (a == null ? void 0 : a.rotation) || 0
      }), I = gi(Q.size);
      r({
        original: {
          preview: M,
          file: S,
          size: {
            formated: E,
            bytes: (U = $[0]) == null ? void 0 : U.file.size
          }
        },
        compressed: {
          preview: H == null ? void 0 : H.toString(),
          file: Q,
          size: {
            formated: I,
            bytes: Q.size
          }
        }
      });
      return;
    }
    g && (R = $[0]) != null && R.data_url && g({
      data_url: ((k = $[0]) == null ? void 0 : k.data_url) || null,
      file: ((W = $[0]) == null ? void 0 : W.file) || null
    }), r({
      original: {
        preview: (D = $[0]) == null ? void 0 : D.data_url,
        file: (z = $[0]) == null ? void 0 : z.file,
        size: { formated: E, bytes: (Y = $[0]) == null ? void 0 : Y.file.size }
      },
      compressed: null
    });
  }, _ = ($) => {
    $ == null || !b || !b.length || v && v(b[$]);
  };
  return ee(() => {
    n && y([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full", children: [
    s && /* @__PURE__ */ d.jsx(Un, { children: s }),
    s && /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsx(
      H1,
      {
        value: b,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: $, onImageUpload: N, onImageUpdate: S, onImageRemove: M, isDragging: E, dragProps: V }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: $.length >= 1 ? /* @__PURE__ */ d.jsx("div", { children: $.map((G, B) => /* @__PURE__ */ d.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ d.jsx(
            K1,
            {
              zoom: p,
              src: G == null ? void 0 : G.data_url,
              crossOrigin: o,
              containerClassName: f
            }
          ),
          /* @__PURE__ */ d.jsx(
            DU,
            {
              edit: t,
              imageIndex: B,
              compress: h,
              disabled: l,
              download: m,
              tabIndexs: c,
              src: G == null ? void 0 : G.data_url,
              onImageRemove: M,
              onImageUpdate: S,
              setLocalImage: y,
              setUploadImage: r,
              handleOnRemove: _
            }
          )
        ] }, B)) }) : /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
          AU,
          {
            dragProps: V,
            emptyClassName: u,
            isDragging: E,
            onImageUpload: N,
            tabIndexs: c,
            uploadLabel: i,
            disabled: l
          }
        ) }) })
      }
    )
  ] });
}, RU = (e) => {
  const { imageIndex: t, compress: n, tabIndexs: r, onImageUpdate: o, onImageRemove: a, disabled: s, download: i, handleOnRemoveImage: c, src: l, edit: u } = e;
  return /* @__PURE__ */ d.jsxs("div", { className: "mt-2 gap-x-2 w-fit flex flex-col justify-center items-end gap-y-2 absolute top-2 right-4 bg-transparent", children: [
    (n == null ? void 0 : n.openComparisons) && !s && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => n.openComparisons(),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(b1, { size: 16 })
      }
    ),
    !s && u && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.change,
        onClick: () => o(t),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(wv, { size: 16 })
      }
    ),
    !s && /* @__PURE__ */ d.jsx(
      Ve,
      {
        tabIndex: r == null ? void 0 : r.delete,
        type: "button",
        size: "icon",
        onClick: () => {
          c(t), a(t);
        },
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx($v, { size: 16 })
      }
    ),
    i && l && /* @__PURE__ */ d.jsx(
      Ve,
      {
        size: "icon",
        type: "button",
        tabIndex: r == null ? void 0 : r.viewCompress,
        onClick: () => rc(l, "imagen.jpg"),
        className: "w-fit h-fit p-2 z-10 hover:brightness-[0.85] focus-visible:ring-offset-0 focus-visible:ring-1",
        children: /* @__PURE__ */ d.jsx(bi, { size: 16 })
      }
    )
  ] });
}, IU = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    ...e,
    className: T(
      `${t ? "border-indigo-600" : "border-muted-foreground"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed border-muted-foreground rounded-md text-center",
      n
    ),
    children: [
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "icon",
          type: "button",
          variant: "outline",
          tabIndex: r == null ? void 0 : r.upload,
          disabled: a,
          className: `mt-2 ${t && "text-indigo-600"}`,
          onClick: s,
          children: /* @__PURE__ */ d.jsx(hd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ d.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), _q = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, crossOrigin: c, imageContainerClassName: l, zoom: u, compress: f, limit: p, initialPreview: h, disabled: m, download: v, onRemove: g, onEdit: b } = e, [y, x] = X([]);
  ee(() => {
    h && h.length && x([...h]);
  }, [h]);
  const _ = async (N, S) => {
    x(N);
    const M = N.map(async (E) => {
      var V, G, B, U;
      if (f != null && f.resizer && (E != null && E.file) && !((V = E == null ? void 0 : E.file) != null && V.compressed)) {
        const { data_url: R, file: k } = await U1({
          imageFile: E == null ? void 0 : E.file,
          resizer: f == null ? void 0 : f.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), W = gi(k == null ? void 0 : k.size), D = {
          original: {
            preview: E == null ? void 0 : E.data_url,
            file: E == null ? void 0 : E.file,
            size: {
              formated: (G = E == null ? void 0 : E.file) != null && G.size ? gi((B = E == null ? void 0 : E.file) == null ? void 0 : B.size) : null,
              bytes: ((U = E == null ? void 0 : E.file) == null ? void 0 : U.size) || null
            }
          },
          compressed: {
            preview: R == null ? void 0 : R.toString(),
            file: k,
            size: {
              formated: W,
              bytes: k == null ? void 0 : k.size
            }
          }
        };
        return {
          ...E,
          file: D,
          data_url: E == null ? void 0 : E.data_url
        };
      } else
        return {
          ...E,
          file: (E == null ? void 0 : E.file) || null
        };
    });
    if (b && S) {
      const E = N[S[0]];
      E != null && E.data_url && b({
        data_url: (E == null ? void 0 : E.data_url) || null,
        file: (E == null ? void 0 : E.file) || null
      });
    }
    Promise.all(M).then((E) => {
      r(E);
    });
  }, $ = (N) => {
    N == null || !y || !y.length || g && g(y[N]);
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    n && /* @__PURE__ */ d.jsx(Un, { children: n }),
    /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsx(
      H1,
      {
        multiple: !0,
        value: y,
        dataURLKey: "data_url",
        onChange: _,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: p,
        children: ({ imageList: N, onImageUpload: S, onImageUpdate: M, onImageRemove: E, isDragging: V, dragProps: G }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: N.length >= 1 ? /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `grid ${p === 1 || !p ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              N.map((B, U) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ d.jsx(
                      K1,
                      {
                        zoom: u,
                        src: B == null ? void 0 : B.data_url,
                        crossOrigin: c,
                        containerClassName: l
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      RU,
                      {
                        edit: t,
                        imageIndex: U,
                        download: v,
                        compress: f,
                        disabled: m,
                        tabIndexs: s,
                        src: B == null ? void 0 : B.data_url,
                        onImageRemove: E,
                        onImageUpdate: M,
                        handleOnRemoveImage: $
                      }
                    )
                  ]
                },
                U
              )),
              y.length < p && /* @__PURE__ */ d.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  ...G,
                  className: T(
                    `w-full h-[237px] ${V ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
                    l
                  ),
                  children: /* @__PURE__ */ d.jsx(
                    Ve,
                    {
                      size: "icon",
                      type: "button",
                      variant: "outline",
                      tabIndex: s == null ? void 0 : s.upload,
                      disabled: m,
                      className: `mt-2 ${V && "text-indigo-600"}`,
                      onClick: S,
                      children: /* @__PURE__ */ d.jsx(hd, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ d.jsx(
          IU,
          {
            dragProps: G,
            emptyClassName: i,
            isDragging: V,
            onImageUpload: S,
            tabIndexs: s,
            uploadLabel: a,
            disabled: m
          }
        ) })
      }
    )
  ] });
};
function Cq({
  id: e,
  form: t,
  label: n,
  items: r,
  disabled: o,
  tabIndex: a,
  isLoading: s,
  placeholder: i,
  defaultValue: c,
  notFoundLabel: l,
  classNameGroup: u,
  ctaPlaceholder: f,
  buttonClassName: p,
  popoverClassName: h
}) {
  const [m, v] = X(!1);
  return s ? /* @__PURE__ */ d.jsxs("div", { className: T("w-full"), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
      Ot,
      {
        className: T("w-full h-9 mt-2")
      }
    ) })
  ] }) : /* @__PURE__ */ d.jsx(
    po,
    {
      control: t.control,
      name: e,
      defaultValue: c,
      render: ({ field: g }) => {
        var b;
        return /* @__PURE__ */ d.jsxs(Rr, { className: "flex flex-col", children: [
          /* @__PURE__ */ d.jsx(Un, { children: n }),
          /* @__PURE__ */ d.jsxs(rr, { open: m, onOpenChange: v, children: [
            /* @__PURE__ */ d.jsx(or, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: T("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (b = r.find((y) => {
                    var x, _;
                    return ((x = y == null ? void 0 : y.value) == null ? void 0 : x.toUpperCase()) === ((_ = g == null ? void 0 : g.value) == null ? void 0 : _.toUpperCase());
                  })) == null ? void 0 : b.label : f,
                  /* @__PURE__ */ d.jsx(ru, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ln, { className: T("w-[200px] p-0", h), children: /* @__PURE__ */ d.jsxs(ar, { children: [
              /* @__PURE__ */ d.jsx(Cr, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ d.jsxs(la, { children: [
                /* @__PURE__ */ d.jsx(Sr, { children: l }),
                /* @__PURE__ */ d.jsx($n, { className: T("overflow-auto", u), children: r.map((y) => /* @__PURE__ */ d.jsxs(
                  Gt,
                  {
                    disabled: y == null ? void 0 : y.disabled,
                    value: y.value,
                    className: T("w-full flex justify-start items-center", (y == null ? void 0 : y.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (x) => {
                      t.setValue(e, x, { shouldDirty: !0 }), v(!1);
                    },
                    children: [
                      (y == null ? void 0 : y.image) && /* @__PURE__ */ d.jsx("img", { src: y.image, alt: y.label, width: 40, className: "mr-2" }),
                      (y == null ? void 0 : y.icon) && y.icon,
                      y.label,
                      /* @__PURE__ */ d.jsx(
                        _W,
                        {
                          className: T(
                            "ml-auto h-4 w-4",
                            y.value === g.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  y.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  );
}
function LU({
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
  defaultValue: u,
  notFoundLabel: f,
  ctaPlaceholder: p,
  buttonClassName: h,
  popoverClassName: m
}) {
  var b;
  const [v, g] = X(!1);
  return t ? /* @__PURE__ */ d.jsx(
    po,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: y, formState: x }) => {
        var _, $, N;
        return /* @__PURE__ */ d.jsxs(Rr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
            n,
            " ",
            (($ = (_ = x.errors) == null ? void 0 : _.pidType) == null ? void 0 : $.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              x.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ d.jsxs(rr, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ d.jsx(or, { asChild: !0, disabled: s, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: T("w-min justify-between", !y.value && "text-muted-foreground", `${h}`),
                children: [
                  y.value ? (N = r.find((S) => S.value === y.value)) == null ? void 0 : N.label : p,
                  /* @__PURE__ */ d.jsx(ru, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ln, { className: T("w-[200px] p-0", m), children: /* @__PURE__ */ d.jsxs(ar, { children: [
              /* @__PURE__ */ d.jsx(Cr, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ d.jsxs(d0, { children: [
                /* @__PURE__ */ d.jsx(Sr, { children: f }),
                /* @__PURE__ */ d.jsx($n, { children: r.map((S) => /* @__PURE__ */ d.jsxs(
                  Gt,
                  {
                    value: S.value,
                    onSelect: (M) => {
                      t.setValue(e, M), g(!1);
                    },
                    className: "w-full flex justify-start items-center",
                    children: [
                      (S == null ? void 0 : S.image) && /* @__PURE__ */ d.jsx("img", { src: S.image, alt: S.label, width: 40, className: "mr-2" }),
                      (S == null ? void 0 : S.icon) && S.icon,
                      S.label,
                      /* @__PURE__ */ d.jsx(
                        rn,
                        {
                          className: T(
                            "ml-auto h-4 w-4",
                            S.value === y.value ? "opacity-100" : "opacity-0"
                          )
                        }
                      )
                    ]
                  },
                  S.value
                )) })
              ] })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ d.jsxs(rr, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ d.jsx(or, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      Ve,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": v,
        className: "w-full justify-between",
        children: [
          a ? (b = r.find((y) => y.value === a)) == null ? void 0 : b.label : p,
          /* @__PURE__ */ d.jsx(ru, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ d.jsx(Ln, { className: "w-full p-0", children: /* @__PURE__ */ d.jsxs(ar, { children: [
      /* @__PURE__ */ d.jsx(Cr, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ d.jsx(Sr, { children: f }),
      /* @__PURE__ */ d.jsx($n, { children: r.map((y) => /* @__PURE__ */ d.jsxs(
        Gt,
        {
          onSelect: (x) => {
            i(x === a ? "" : x), g(!1);
          },
          children: [
            y.label,
            /* @__PURE__ */ d.jsx(
              rn,
              {
                className: T(
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
const FU = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = Z(null), [u, f] = X(null);
  return ee(() => {
    const p = l.current;
    if (!p)
      return;
    const h = new ResizeObserver((m) => {
      const v = m[0].contentRect.width;
      f(v);
    });
    return h.observe(p), () => {
      h.unobserve(p), h.disconnect();
    };
  }, []), /* @__PURE__ */ d.jsxs("div", { className: T("w-full space-y-2", s), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsxs(Un, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ d.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ d.jsxs(rr, { children: [
      /* @__PURE__ */ d.jsx(or, { asChild: !0, disabled: c, children: /* @__PURE__ */ d.jsxs(
        Ve,
        {
          ref: l,
          type: "button",
          variant: "outline",
          disabled: c,
          size: "sm",
          className: "py-5 border w-full justify-start",
          tabIndex: o,
          children: [
            t && t,
            !a.length && /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground font-normal", children: n || "Seleccione alguna opción" }),
            a.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsxs(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal lg:hidden",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ),
              /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: a.length > 2 ? /* @__PURE__ */ d.jsxs(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: [
                    a.length,
                    " seleccionados"
                  ]
                }
              ) : a.map((p) => /* @__PURE__ */ d.jsx(
                At,
                {
                  variant: "secondary",
                  className: "rounded-sm px-1 font-normal",
                  children: p.label
                },
                p.id
              )) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ d.jsx(Ln, { style: { width: u + 24 }, className: T("w-full p-0", i), align: "start", children: /* @__PURE__ */ d.jsxs(ar, { children: [
        /* @__PURE__ */ d.jsx(Cr, { placeholder: r }),
        /* @__PURE__ */ d.jsxs(la, { children: [
          /* @__PURE__ */ d.jsx(Sr, { children: "Sin Resultados" }),
          /* @__PURE__ */ d.jsx($n, { children: a.map((p) => /* @__PURE__ */ d.jsxs(
            Gt,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    className: T(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ d.jsx(rn, { className: T("h-4 w-4") })
                  }
                ),
                /* @__PURE__ */ d.jsx("span", { children: p.label })
              ]
            },
            p.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}, BU = (e) => {
  var U;
  const {
    form: t,
    id: n,
    description: r,
    icon: o,
    placeholder: a,
    label: s,
    tabIndex: i,
    selectAllLabel: c,
    items: l,
    classNameContainer: u,
    classNamePopover: f,
    disabled: p
  } = e, h = (U = t == null ? void 0 : t.formState) == null ? void 0 : U.defaultValues[n], m = (R) => ({
    ...R,
    selected: h ? h.includes(R.value) : !1
  }), [v, g] = X(
    l.map(m)
  ), [b, y] = X(!1), [x, _] = X(null), [$, N] = X(!1), S = Z(null), M = Zt(() => v.filter((R) => R.selected).map((R) => R.value), [v]), E = (R) => {
    const k = R.filter((W) => W.selected).map((W) => W.value);
    t.setValue(n, k, {
      shouldDirty: !0,
      shouldValidate: !0
    });
  }, V = () => {
    const R = v.map((k) => ({
      ...k,
      selected: !1
    }));
    g(R), E(R);
  }, G = (R, k) => {
    const W = v.map((D) => D.id === R ? { ...D, selected: k } : D);
    g(W), E(W), y(W.every((D) => D.selected));
  }, B = () => {
    if (b)
      return V(), y(!1);
    y(!0);
    const R = v.map((k) => ({
      ...k,
      selected: !0
    }));
    g(R), E(R);
  };
  return ee(() => {
    const R = S.current;
    if (!R)
      return;
    const k = new ResizeObserver((W) => {
      const D = W[0].contentRect.width;
      _(D);
    });
    return k.observe(R), () => {
      k.unobserve(R), k.disconnect();
    };
  }, []), ee(() => {
    const R = l.map(m);
    g(R), t.setValue(
      n,
      R.filter((k) => k.selected).map((k) => k.value)
    ), y(R.every((k) => k.selected));
  }, [l]), ee(() => {
    g((R) => R.map((k) => ({
      ...k,
      selected: h == null ? void 0 : h.includes(k.value)
    })));
  }, [h]), /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
    po,
    {
      control: t.control,
      name: n,
      render: ({ field: R, formState: k }) => {
        var W;
        return /* @__PURE__ */ d.jsxs(Rr, { className: T("w-full space-y-2", u), children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
              s,
              " "
            ] }),
            ((W = k == null ? void 0 : k.errors[n]) == null ? void 0 : W.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              k.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: r }),
          /* @__PURE__ */ d.jsxs(rr, { open: $, onOpenChange: N, children: [
            /* @__PURE__ */ d.jsx(or, { asChild: !0, disabled: p, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                ref: S,
                type: "button",
                variant: "outline",
                size: "sm",
                disabled: p,
                className: "py-5 border w-full justify-start",
                tabIndex: i,
                children: [
                  o && o,
                  !M.length && /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground font-normal", children: a || "Seleccione alguna opción" }),
                  M.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                    /* @__PURE__ */ d.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          M.length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: M.length > 2 ? /* @__PURE__ */ d.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          M.length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((D) => D.selected).map((D) => /* @__PURE__ */ d.jsx(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: D.label
                      },
                      D.value.toString()
                    )) })
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx("style", { children: `
                .combox-checkbox-content {
                    min-width: 150px !important;
                    width: ${x + 24}px !important;
                  }

                  .checkbox-tooltip-content {
                    min-width: 150px !important;
                    width: ${x + 10}px !important;
                  }
                ` }),
            /* @__PURE__ */ d.jsx(
              Ln,
              {
                className: T(
                  "w-full p-0 combox-checkbox-content",
                  f
                ),
                align: "start",
                children: /* @__PURE__ */ d.jsxs(ar, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ d.jsx(Cr, { placeholder: s }),
                  /* @__PURE__ */ d.jsxs(la, { children: [
                    /* @__PURE__ */ d.jsx(Sr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ d.jsxs($n, { children: [
                      /* @__PURE__ */ d.jsxs(Gt, { onSelect: B, children: [
                        /* @__PURE__ */ d.jsx(
                          "div",
                          {
                            className: T(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              b ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                            ),
                            children: /* @__PURE__ */ d.jsx(rn, { className: T("h-4 w-4") })
                          }
                        ),
                        /* @__PURE__ */ d.jsx("span", { className: "truncate", children: c || "Seleccionar todos" })
                      ] }),
                      /* @__PURE__ */ d.jsx(Ka, { className: "my-2" }),
                      v.map((D) => /* @__PURE__ */ d.jsxs(
                        Gt,
                        {
                          disabled: D == null ? void 0 : D.disabled,
                          onSelect: () => {
                            G(D.id, !D.selected);
                          },
                          children: [
                            /* @__PURE__ */ d.jsx(
                              "div",
                              {
                                className: T(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  D.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ d.jsx(rn, { className: T("h-4 w-4") })
                              }
                            ),
                            D.icon,
                            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: D.label })
                          ]
                        },
                        D.value.toString()
                      ))
                    ] }),
                    /* @__PURE__ */ d.jsx(Ka, { className: "my-1" }),
                    /* @__PURE__ */ d.jsxs($n, { className: "[&_>_div]:flex [&_>_div]:w-full [&_>_div]:flex-row [&_>_div]:justify-between [&_>_div]:items-center [&_>_div]:gap-3", children: [
                      M.length > 0 && /* @__PURE__ */ d.jsxs(
                        Gt,
                        {
                          onSelect: () => {
                            t.setValue(n, []), V(), y(!1);
                          },
                          className: T(
                            xr({ variant: "ghost" }),
                            "w-full aria-selected:bg-muted/50 h-fit py-1.5"
                          ),
                          children: [
                            /* @__PURE__ */ d.jsx(h$, { size: 14, className: "mr-2" }),
                            "Limpiar"
                          ]
                        }
                      ),
                      /* @__PURE__ */ d.jsxs(
                        Gt,
                        {
                          onSelect: () => N(!1),
                          className: T(
                            xr({ variant: "default" }),
                            "w-full aria-selected:bg-primary/80 aria-selected:text-white h-fit py-1.5"
                          ),
                          children: [
                            /* @__PURE__ */ d.jsx(Ca, { size: 14, className: "mr-2" }),
                            "Cerrar"
                          ]
                        }
                      )
                    ] })
                  ] })
                ] })
              }
            )
          ] })
        ] });
      }
    }
  ) });
}, Sq = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...u }) => i ? /* @__PURE__ */ d.jsx(
  FU,
  {
    label: o,
    description: t,
    classNameContainer: s,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: l,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
) : /* @__PURE__ */ d.jsx(
  BU,
  {
    id: e,
    label: o,
    classNameContainer: s,
    description: t,
    classNamePopover: c,
    icon: n,
    placeholder: r,
    tabIndex: a,
    disabled: l,
    selectAllLabel: u == null ? void 0 : u.selectAllLabel,
    form: (u == null ? void 0 : u.form) || null,
    items: (u == null ? void 0 : u.items) || []
  }
);
function VU({
  isOpen: e,
  onClose: t,
  children: n
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: `fixed z-30 inset-0 bg-opacity-50  transition-opacity ${e ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "fixed z-50 inset-y-0  right-0  flex", "data-testId": "bottom-drawer", children: /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "max-w-[250px] h-full overflow-y-scroll rounded-l-xl border-l-[1.5px] bg-brand-sidebar-background text-brand-sidebar-text",
            children: n
          }
        ) }),
        /* @__PURE__ */ d.jsx("div", { className: "h-full", "data-testId": "bottom-outside-drawer", onClick: t })
      ]
    }
  );
}
function qm({
  icon: e,
  titleDescription: t,
  actionToSet: n,
  Link: r,
  item: o
}) {
  return /* @__PURE__ */ d.jsx(eo, { children: /* @__PURE__ */ d.jsxs(to, { children: [
    /* @__PURE__ */ d.jsx(no, { children: /* @__PURE__ */ d.jsx(
      "div",
      {
        onClick: n ? () => {
          n(!0);
        } : null,
        "data-testId": `bottom-sidebar-${t}`,
        role: "button",
        className: "w-full border-2 border-transparent flex justify-center items-center p-2 group group-hover:text-[#eaeaea] text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover hover:dark:bg-main-hover select-none",
        children: /* @__PURE__ */ d.jsx(
          w1,
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
    /* @__PURE__ */ d.jsx(Nr, { children: t })
  ] }) });
}
function zU({
  profile: e
}) {
  return /* @__PURE__ */ d.jsxs("header", { className: "justify-center w-full h-14 flex items-start gap-x-3 my-10 px-10", children: [
    /* @__PURE__ */ d.jsxs(To, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
      /* @__PURE__ */ d.jsx(Gr, { src: e == null ? void 0 : e.photo, className: "object-cover" }),
      /* @__PURE__ */ d.jsx(jo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ d.jsx(Gr, { src: e == null ? void 0 : e.photo, className: "object-cover" }) })
    ] }),
    /* @__PURE__ */ d.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
      /* @__PURE__ */ d.jsxs("span", { className: "truncate", children: [
        e == null ? void 0 : e.name,
        " ",
        e == null ? void 0 : e.lastname
      ] }),
      (e == null ? void 0 : e.role) && /* @__PURE__ */ d.jsx(At, { className: "w-full", children: e.role })
    ] })
  ] });
}
const WU = ({ isExpanded: e, theme: t }) => {
  const [n, r] = X(!1), { value: o, toggleTheme: a } = t;
  return ee(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: a,
      "data-testId": "theme-sidebar-bottom-btn",
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(g1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(x1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function HU({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ d.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ d.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ d.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(WU, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ d.jsx(xv, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
          ]
        }
      ) }),
      e.logout && /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: () => {
            e.logout();
          },
          "data-testId": "logout-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ d.jsx(yv, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function UU({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(zU, { profile: a }),
    /* @__PURE__ */ d.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ d.jsx(
        w1,
        {
          to: s.to,
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          Link: o
        },
        i
      )),
      t && t.map((s, i) => /* @__PURE__ */ d.jsx(
        jW,
        {
          pathname: s.pathname,
          label: s.label,
          icon: s.icon,
          sublinks: s.subLinks,
          Link: o
        },
        i
      )),
      /* @__PURE__ */ d.jsx(
        HU,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function Nq({
  bottomItems: e,
  navLinksItems: t,
  subLinksItems: n,
  sidebar: r,
  Link: o
}) {
  const [a, s] = X(!1);
  return /* @__PURE__ */ d.jsxs("div", { className: "lg:hidden md:block md:min-w-640 md:max-w-767 fixed bottom-0 left-0 z-50 w-full h-16 bg-brand-sidebar-background border-t border-gray-200 dark:border-[#151313] rounded-t-xl", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between h-full max-w-lg  mx-auto font-medium", children: [
      e.map((i, c) => /* @__PURE__ */ d.jsx(
        qm,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ d.jsx(
        qm,
        {
          icon: /* @__PURE__ */ d.jsx(xv, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      VU,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ d.jsx(
          UU,
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
const yo = Wt({
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
function KU() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = lt(yo);
  return /* @__PURE__ */ d.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ d.jsxs(
        Of,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ d.jsx(Fc, { className: "h-8 w-[70px]", children: /* @__PURE__ */ d.jsx(Tf, { placeholder: e.limit }) }),
            /* @__PURE__ */ d.jsx(Bc, { side: "top", children: [5, 10, 15, 20].map((a) => /* @__PURE__ */ d.jsx(Vc, { value: `${a}`, children: a }, a)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ d.jsx(jr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const Eq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, GU = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), Pq = {
  limit: 10,
  page: 1
}, Xl = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), Oq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], YU = () => /* @__PURE__ */ d.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), qU = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ d.jsx("div", { children: r.render(o) }, Xl()) : /* @__PURE__ */ d.jsx(vn, { children: o[r.id] }, Xl());
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map((r) => /* @__PURE__ */ d.jsx(Vy, { children: t.map((o) => n(o, r)) }, Xl())) });
}, G1 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = lt(yo), [s, i] = X(
    o ? o.length : 0
  );
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.length ? /* @__PURE__ */ d.jsx(
    qU,
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
  ) : /* @__PURE__ */ d.jsx(YU, {}) });
}, ZU = () => /* @__PURE__ */ d.jsx(G1, {}), XU = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), QU = () => /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ d.jsx(XU, {}),
  /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), JU = () => {
  const { showFilters: e, setShowFilters: t } = lt(yo);
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ d.jsx(m1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, eK = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = lt(yo), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ d.jsxs(rr, { children: [
    /* @__PURE__ */ d.jsx(or, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ d.jsx(v1, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(Ms, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ d.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: i(e).length
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: i(e).length > 2 ? /* @__PURE__ */ d.jsxs(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              i(e).length,
              " seleccionados"
            ]
          }
        ) : o.filter((u) => u.selected).map((u) => /* @__PURE__ */ d.jsx(
          At,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: u.label
          },
          u.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ d.jsx(Ln, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ d.jsxs(ar, { children: [
      /* @__PURE__ */ d.jsx(Cr, { placeholder: r }),
      /* @__PURE__ */ d.jsxs(la, { children: [
        /* @__PURE__ */ d.jsx(Sr, { children: "Sin Resultados" }),
        /* @__PURE__ */ d.jsx($n, { children: o.map((u) => /* @__PURE__ */ d.jsxs(
          Gt,
          {
            onSelect: () => {
              u.selected ? s(e, u.id, !1) : s(e, u.id, !0);
            },
            children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: T(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ d.jsx(rn, { className: T("h-4 w-4") })
                }
              ),
              u.icon,
              /* @__PURE__ */ d.jsx("span", { children: u.label })
            ]
          },
          u.value.toString()
        )) }),
        i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(Ka, {}),
          /* @__PURE__ */ d.jsx($n, { children: /* @__PURE__ */ d.jsx(
            Gt,
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
}, tK = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ d.jsxs(rr, { children: [
  /* @__PURE__ */ d.jsx(or, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ d.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(Ms, { orientation: "vertical", className: "mx-2 h-4" }),
      /* @__PURE__ */ d.jsx(
        At,
        {
          variant: "secondary",
          className: "rounded-sm px-1 font-normal",
          children: o
        }
      )
    ] })
  ] }) }),
  /* @__PURE__ */ d.jsxs(Ln, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ d.jsxs(Un, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ d.jsx(
      Sf,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), nK = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c }
  } = lt(yo), l = e.watch(n.map((f) => f.id)), u = () => {
    var p;
    a();
    const f = [];
    (p = Object.entries(e == null ? void 0 : e.getValues())) == null || p.forEach((h) => {
      h[1] && f.push({
        field: ua(h[0]),
        text: h[1]
      });
    }), s({ queries: f, filters: [], limit: c, page: i });
  };
  return /* @__PURE__ */ d.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ d.jsx(
      "form",
      {
        onSubmit: e.handleSubmit(t),
        className: "w-full flex justify-start items-center sm:mr-4",
        children: /* @__PURE__ */ d.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((f, p) => /* @__PURE__ */ d.jsx(
          tK,
          {
            queryText: l[p],
            label: f.label,
            id: f.id,
            form: e
          },
          f.id
        )) })
      }
    ),
    r != null && r.length ? /* @__PURE__ */ d.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ d.jsx(JU, {}),
      o && r && r.map((f) => /* @__PURE__ */ d.jsx(
        eK,
        {
          onSubmit: t,
          form: e,
          id: f.id,
          icon: f.icon,
          label: f.label,
          options: f.options
        },
        f.id
      )),
      o && (r != null && r.filter(
        (f) => f.options.some((p) => p.selected)
      ).length) ? /* @__PURE__ */ d.jsxs(
        Ve,
        {
          type: "button",
          variant: "ghost",
          onClick: u,
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ d.jsx(uc, { className: "ml-2 h-4 w-4" })
          ]
        }
      ) : null
    ] }) : null
  ] }) });
}, rK = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = lt(yo), c = iy({
    defaultValues: n.reduce((u, f) => (u[f.id] = "", u), {}),
    resolver: S1(
      nc.object(
        n.reduce((u, f) => (u[f.id] = nc.string().optional(), u), {})
      )
    )
  }), l = async (u) => {
    var h;
    console.log({ data: u });
    const f = r(), p = [];
    (h = Object.entries(u)) == null || h.forEach((m) => {
      m[1] && p.push({
        field: ua(m[0]),
        text: m[1]
      });
    }), console.log("queries formatted ", p), e({ queries: p, filters: f, limit: s, page: a });
  };
  return ee(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ d.jsx("div", {}) : /* @__PURE__ */ d.jsx(ly, { ...c, children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ d.jsx(nK, { form: c, onSubmit: l }) : /* @__PURE__ */ d.jsx("div", {}),
    /* @__PURE__ */ d.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ d.jsx(pd, {}) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(y1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, oK = () => /* @__PURE__ */ d.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), aK = () => /* @__PURE__ */ d.jsx(G1, {}), sK = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function Tq(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [f, p] = X(e == null ? void 0 : e.loading), [h, m] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? sK
  ), [b, y] = X(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: x } = e, _ = be(
    (k) => e.onSubmitTable({ ...k }),
    [e]
  ), $ = be(
    (k) => {
      var Y;
      g(k);
      const W = h.getValues(), D = [];
      (Y = Object.entries(W)) == null || Y.forEach((H) => {
        H[1] && D.push({
          field: GU(H[0]),
          text: H[1]
        });
      });
      const z = r.map((H) => ({
        id: H.id,
        label: H.label,
        options: H.options.filter((Q) => Q.selected).map((Q) => Q.value)
      })).filter((H) => H.options.length > 0);
      _({
        filters: z,
        queries: D,
        limit: k.limit,
        page: k.page
      });
    },
    [r, _, h]
  ), N = be(() => {
    $({ ...v, page: v.page + 1 });
  }, [v, $]), S = be(() => {
    v.page > 1 && $({ ...v, page: v.page - 1 });
  }, [v, $]), M = () => r.map((k) => ({
    id: k.id,
    label: k.label,
    options: k.options.filter((W) => W.selected).map((W) => W.value)
  })).filter((k) => k.options.length > 0), E = (k) => {
    const W = r.find((D) => D.id === k);
    return W ? W.options.filter((z) => z.selected).map((z) => z.value) : [];
  }, V = (k, W, D) => {
    const z = r.map((Y) => Y.id === k ? {
      ...Y,
      options: Y.options.map((H) => H.id === W ? { ...H, selected: D } : H)
    } : Y);
    o(z);
  }, G = () => r, B = (k) => {
    const W = r.map((D) => D.id === k ? {
      ...D,
      options: D.options.map((z) => ({
        ...z,
        selected: !1
      }))
    } : D);
    o(W);
  }, U = (k) => $({ ...v, limit: k }), R = () => {
    const k = r.map((W) => ({
      ...W,
      options: W.options.map((D) => ({ ...D, selected: !1 }))
    }));
    o(k);
  };
  return ee(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), ee(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), ee(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), ee(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), ee(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), ee(() => {
    const k = b.filter((W) => W.isQuery).map((W) => ({
      id: W.id,
      label: W.label
    }));
    s(k);
  }, [b]), ee(() => {
    const k = (D) => (D == null ? void 0 : D.filters) && (D == null ? void 0 : D.filters.length), W = b.filter(k).map((D) => {
      const z = D.filters.map((H) => ({
        ...H,
        selected: !1
      }));
      return {
        ...D,
        id: D.id,
        options: z
      };
    });
    o(W);
  }, [b]), ee(() => {
    e != null && e.filters && (e == null || e.filters.forEach((k) => {
      k != null && k.filters && b.forEach((W) => {
        k.id === W.id && o((D) => D.some((Y) => Y.id === k.id) ? D : [
          ...D,
          {
            id: W.id,
            label: W.label,
            options: k.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), ee(() => {
    g((k) => {
      var W, D;
      return {
        ...k,
        hasNextPage: (W = e == null ? void 0 : e.pagination) == null ? void 0 : W.hasNextPage,
        hasPrevPage: (D = e == null ? void 0 : e.pagination) == null ? void 0 : D.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ d.jsx(
    yo.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: N,
        prevPage: S,
        searchForm: h,
        updateLimit: U,
        showFilters: i,
        resetFilters: R,
        getGlobalFilters: G,
        selectOptionFilter: V,
        resetOptionsByFilter: B,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: E,
        getFiltersWithOptionsSelected: M,
        setSelectItem: e.setSelectItem,
        setShowFilters: (k) => c(k),
        setSearchForm: (k) => m(k)
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ d.jsx(rK, { onSubmitTable: _, loading: f }),
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${x ? `${x === 2 ? "sm" : "lg"}:grid-cols-${x}` : "grid-cols-3"}  gap-6`,
            children: [
              f && /* @__PURE__ */ d.jsx(QU, {}),
              !f && l && /* @__PURE__ */ d.jsx(oK, {}),
              !f && !l && !t && /* @__PURE__ */ d.jsx(aK, {}),
              !f && !l && t && /* @__PURE__ */ d.jsx(ZU, {})
            ]
          }
        ),
        !f && !l && t && /* @__PURE__ */ d.jsx(KU, {})
      ] })
    }
  );
}
function iK(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Zm(e) {
  return iK(e) || Array.isArray(e);
}
function cK() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function op(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Zm(i) || !Zm(c) ? i === c : op(i, c);
  });
}
function Xm(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function lK(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Xm(e), r = Xm(t);
  return n.every((o, a) => {
    const s = r[a];
    return op(o, s);
  });
}
function ap(e) {
  return typeof e == "number";
}
function id(e) {
  return typeof e == "string";
}
function sp(e) {
  return typeof e == "boolean";
}
function Qm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function dt(e) {
  return Math.abs(e);
}
function ip(e) {
  return Math.sign(e);
}
function Oa(e, t) {
  return dt(e - t);
}
function uK(e, t) {
  if (e === 0 || t === 0 || dt(e) <= dt(t))
    return 0;
  const n = Oa(dt(e), dt(t));
  return dt(n / e);
}
function ls(e) {
  return us(e).map(Number);
}
function mn(e) {
  return e[Is(e)];
}
function Is(e) {
  return Math.max(0, e.length - 1);
}
function cp(e, t) {
  return t === Is(e);
}
function Jm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function us(e) {
  return Object.keys(e);
}
function Y1(e, t) {
  return [e, t].reduce((n, r) => (us(r).forEach((o) => {
    const a = n[o], s = r[o], i = Qm(a) && Qm(s);
    n[o] = i ? Y1(a, s) : s;
  }), n), {});
}
function q1(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function dK(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(c) {
    return a(c) / 2;
  }
  function a(c) {
    return t - c;
  }
  function s(c, l) {
    return id(e) ? n[e](c) : e(t, c, l);
  }
  return {
    measure: s
  };
}
function ds() {
  let e = [];
  function t(o, a, s, i = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(a, s, i), c = () => o.removeEventListener(a, s, i);
    else {
      const l = o;
      l.addListener(s), c = () => l.removeListener(s);
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function fK(e, t, n, r) {
  const o = ds(), a = 1e3 / 60;
  let s = null, i = 0, c = 0;
  function l() {
    o.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function u() {
    h(), o.clear();
  }
  function f(g) {
    if (!c)
      return;
    s || (s = g);
    const b = g - s;
    for (s = g, i += b; i >= a; )
      n(), i -= a;
    const y = dt(i / a);
    r(y), c && t.requestAnimationFrame(f);
  }
  function p() {
    c || (c = t.requestAnimationFrame(f));
  }
  function h() {
    t.cancelAnimationFrame(c), s = null, i = 0, c = 0;
  }
  function m() {
    s = null, i = 0;
  }
  return {
    init: l,
    destroy: u,
    start: p,
    stop: h,
    update: n,
    render: r
  };
}
function pK(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", s = !r && n ? -1 : 1, i = u(), c = f();
  function l(m) {
    const {
      height: v,
      width: g
    } = m;
    return r ? v : g;
  }
  function u() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function p(m) {
    return m * s;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: i,
    endEdge: c,
    measureSize: l,
    direction: p
  };
}
function ao(e = 0, t = 0) {
  const n = dt(e - t);
  function r(l) {
    return l < e;
  }
  function o(l) {
    return l > t;
  }
  function a(l) {
    return r(l) || o(l);
  }
  function s(l) {
    return a(l) ? r(l) ? e : t : l;
  }
  function i(l) {
    return n ? l - n * Math.ceil((l - t) / n) : l;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: i
  };
}
function Z1(e, t, n) {
  const {
    constrain: r
  } = ao(0, e), o = e + 1;
  let a = s(t);
  function s(p) {
    return n ? dt((o + p) % o) : r(p);
  }
  function i() {
    return a;
  }
  function c(p) {
    return a = s(p), f;
  }
  function l(p) {
    return u().set(i() + p);
  }
  function u() {
    return Z1(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return f;
}
function hK(e, t, n, r, o, a, s, i, c, l, u, f, p, h, m, v, g, b, y) {
  const {
    cross: x,
    direction: _
  } = e, $ = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, S = ds(), M = ds(), E = ao(50, 225).constrain(h.measure(20)), V = {
    mouse: 300,
    touch: 400
  }, G = {
    mouse: 500,
    touch: 600
  }, B = m ? 43 : 25;
  let U = !1, R = 0, k = 0, W = !1, D = !1, z = !1, Y = !1;
  function H(K) {
    if (!y)
      return;
    function se(Ee) {
      (sp(y) || y(K, Ee)) && te(Ee);
    }
    const ne = t;
    S.add(ne, "dragstart", (Ee) => Ee.preventDefault(), N).add(ne, "touchmove", () => {
    }, N).add(ne, "touchend", () => {
    }).add(ne, "touchstart", se).add(ne, "mousedown", se).add(ne, "touchcancel", ge).add(ne, "contextmenu", ge).add(ne, "click", _e, !0);
  }
  function Q() {
    S.clear(), M.clear();
  }
  function I() {
    const K = Y ? n : t;
    M.add(K, "touchmove", ie, N).add(K, "touchend", ge).add(K, "mousemove", ie, N).add(K, "mouseup", ge);
  }
  function re(K) {
    const se = K.nodeName || "";
    return $.includes(se);
  }
  function me() {
    return (m ? G : V)[Y ? "mouse" : "touch"];
  }
  function ae(K, se) {
    const ne = f.add(ip(K) * -1), Ee = u.byDistance(K, !m).distance;
    return m || dt(K) < E ? Ee : g && se ? Ee * 0.5 : u.byIndex(ne.get(), 0).distance;
  }
  function te(K) {
    const se = q1(K, r);
    Y = se, z = m && se && !K.buttons && U, U = Oa(o.get(), s.get()) >= 2, !(se && K.button !== 0) && (re(K.target) || (W = !0, a.pointerDown(K), l.useFriction(0).useDuration(0), o.set(s), I(), R = a.readPoint(K), k = a.readPoint(K, x), p.emit("pointerDown")));
  }
  function ie(K) {
    const se = a.readPoint(K), ne = a.readPoint(K, x), Ee = Oa(se, R), De = Oa(ne, k);
    if (!D && !Y && (!K.cancelable || (D = Ee > De, !D)))
      return ge(K);
    const Oe = a.pointerMove(K);
    Ee > v && (z = !0), l.useFriction(0.3).useDuration(1), i.start(), o.add(_(Oe)), K.preventDefault();
  }
  function ge(K) {
    const ne = u.byDistance(0, !1).index !== f.get(), Ee = a.pointerUp(K) * me(), De = ae(_(Ee), ne), Oe = uK(Ee, De), P = B - 10 * Oe, F = b + Oe / 50;
    D = !1, W = !1, M.clear(), l.useDuration(P).useFriction(F), c.distance(De, !m), Y = !1, p.emit("pointerUp");
  }
  function _e(K) {
    z && (K.stopPropagation(), K.preventDefault(), z = !1);
  }
  function ce() {
    return W;
  }
  return {
    init: H,
    pointerDown: ce,
    destroy: Q
  };
}
function mK(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const m = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (q1(f, t) ? f : f.touches[0])[m];
  }
  function i(f) {
    return r = f, o = f, s(f);
  }
  function c(f) {
    const p = s(f) - s(o), h = a(f) - a(r) > 170;
    return o = f, h && (r = f), p;
  }
  function l(f) {
    if (!r || !o)
      return 0;
    const p = s(o) - s(r), h = a(f) - a(r), m = a(f) - a(o) > 170, v = p / h;
    return h && !m && dt(v) > 0.1 ? v : 0;
  }
  return {
    pointerDown: i,
    pointerMove: c,
    pointerUp: l,
    readPoint: s
  };
}
function vK() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: s
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + s,
      left: o,
      width: a,
      height: s
    };
  }
  return {
    measure: e
  };
}
function gK(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function bK(e, t, n, r, o, a, s) {
  let i, c, l = [], u = !1;
  function f(v) {
    return o.measureSize(s.measure(v));
  }
  function p(v) {
    if (!a)
      return;
    c = f(e), l = r.map(f);
    function g(y) {
      for (const x of y) {
        const _ = x.target === e, $ = r.indexOf(x.target), N = _ ? c : l[$], S = f(_ ? e : r[$]);
        if (dt(S - N) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((y) => {
      u || (sp(a) || a(v, y)) && g(y);
    }), [e].concat(r).forEach((y) => i.observe(y));
  }
  function h() {
    i && i.disconnect(), u = !0;
  }
  return {
    init: p,
    destroy: h
  };
}
function yK(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function f() {
    const $ = n.get() - e.get(), N = !i;
    let S = 0;
    return N ? (a = 0, e.set(n), S = $) : (a += $ / i, a *= c, l += a, e.add(a), S = l - u), s = ip(S), u = l, _;
  }
  function p() {
    const $ = n.get() - t.get();
    return dt($) < 1e-3;
  }
  function h() {
    return i;
  }
  function m() {
    return s;
  }
  function v() {
    return a;
  }
  function g() {
    return y(r);
  }
  function b() {
    return x(o);
  }
  function y($) {
    return i = $, _;
  }
  function x($) {
    return c = $, _;
  }
  const _ = {
    direction: m,
    duration: h,
    velocity: v,
    seek: f,
    settled: p,
    useBaseFriction: b,
    useBaseDuration: g,
    useFriction: x,
    useDuration: y
  };
  return _;
}
function xK(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = ao(0.1, 0.99);
  let c = !1;
  function l() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(h) {
    if (!l())
      return;
    const m = e.reachedMin(t.get()) ? "min" : "max", v = dt(e[m] - t.get()), g = n.get() - t.get(), b = i.constrain(v / s);
    n.subtract(g * b), !h && dt(g) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(h) {
    c = !h;
  }
  return {
    constrain: u,
    toggleActive: f
  };
}
function wK(e, t, n, r, o) {
  const a = ao(-t + e, 0), s = f(), i = u(), c = p();
  function l(m, v) {
    return Oa(m, v) < 1;
  }
  function u() {
    const m = s[0], v = mn(s), g = s.lastIndexOf(m), b = s.indexOf(v) + 1;
    return ao(g, b);
  }
  function f() {
    return n.map((m, v) => {
      const {
        min: g,
        max: b
      } = a, y = a.constrain(m), x = !v, _ = cp(n, v);
      return x ? b : _ || l(g, y) ? g : l(b, y) ? b : y;
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function p() {
    if (t <= e + o)
      return [a.max];
    if (r === "keepSnaps")
      return s;
    const {
      min: m,
      max: v
    } = i;
    return s.slice(m, v);
  }
  return {
    snapsContained: c,
    scrollContainLimit: i
  };
}
function $K(e, t, n) {
  const r = t[0], o = n ? r - e : mn(t);
  return {
    limit: ao(o, r)
  };
}
function _K(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: c
  } = ao(a, s);
  function l(p) {
    return p === 1 ? c(n.get()) : p === -1 ? i(n.get()) : !1;
  }
  function u(p) {
    if (!l(p))
      return;
    const h = e * (p * -1);
    r.forEach((m) => m.add(h));
  }
  return {
    loop: u
  };
}
function CK(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const s = a - t;
    return n ? s / -n : 0;
  }
  return {
    get: r
  };
}
function SK(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, c = f().map(t.measure), l = p(), u = h();
  function f() {
    return i(r).map((v) => mn(v)[s] - v[0][a]).map(dt);
  }
  function p() {
    return r.map((v) => n[a] - v[a]).map((v) => -dt(v));
  }
  function h() {
    return i(l).map((v) => v[0]).map((v, g) => v + c[g]);
  }
  return {
    snaps: l,
    snapsAligned: u
  };
}
function NK(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), h = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : h ? p : p.slice(i, c).map((m, v, g) => {
      const b = !v, y = cp(g, v);
      if (b) {
        const x = mn(g[0]) + 1;
        return Jm(x);
      }
      if (y) {
        const x = Is(a) - mn(g)[0] + 1;
        return Jm(x, mn(g)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: l
  };
}
function EK(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function c(m) {
    return m.concat().sort((v, g) => dt(v) - dt(g))[0];
  }
  function l(m) {
    const v = e ? s(m) : i(m), g = t.map((y, x) => ({
      diff: u(y - v, 0),
      index: x
    })).sort((y, x) => dt(y.diff) - dt(x.diff)), {
      index: b
    } = g[0];
    return {
      index: b,
      distance: v
    };
  }
  function u(m, v) {
    const g = [m, m + n, m - n];
    if (!e)
      return g[0];
    if (!v)
      return c(g);
    const b = g.filter((y) => ip(y) === v);
    return b.length ? c(b) : mn(g) - n;
  }
  function f(m, v) {
    const g = t[m] - o.get(), b = u(g, v);
    return {
      index: m,
      distance: b
    };
  }
  function p(m, v) {
    const g = o.get() + m, {
      index: b,
      distance: y
    } = l(g), x = !e && a(g);
    if (!v || x)
      return {
        index: b,
        distance: m
      };
    const _ = t[b] - y, $ = m + u(_, 0);
    return {
      index: b,
      distance: $
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: u
  };
}
function PK(e, t, n, r, o, a, s) {
  function i(f) {
    const p = f.distance, h = f.index !== t.get();
    a.add(p), p && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (n.set(t.get()), t.set(f.index), s.emit("select"));
  }
  function c(f, p) {
    const h = o.byDistance(f, p);
    i(h);
  }
  function l(f, p) {
    const h = t.clone().set(f), m = o.byIndex(h.get(), p);
    i(m);
  }
  return {
    distance: c,
    index: l
  };
}
function OK(e, t, n, r, o, a) {
  let s = 0;
  function i() {
    a.add(document, "keydown", c, !1), t.forEach(l);
  }
  function c(f) {
    f.code === "Tab" && (s = (/* @__PURE__ */ new Date()).getTime());
  }
  function l(f) {
    const p = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - s > 10)
        return;
      e.scrollLeft = 0;
      const v = t.indexOf(f), g = n.findIndex((b) => b.includes(v));
      ap(g) && (o.useDuration(0), r.index(g, 0));
    };
    a.add(f, "focus", p, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: i
  };
}
function vi(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = s(c);
  }
  function o(c) {
    t += s(c);
  }
  function a(c) {
    t -= s(c);
  }
  function s(c) {
    return ap(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function X1(e, t) {
  const n = e.scroll === "x" ? a : s, r = t.style;
  let o = !1;
  function a(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function s(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function i(f) {
    o || (r.transform = n(e.direction(f)));
  }
  function c(f) {
    o = !f;
  }
  function l() {
    o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: l,
    to: i,
    toggleActive: c
  };
}
function TK(e, t, n, r, o, a, s, i, c) {
  const u = ls(o), f = ls(o).reverse(), p = b().concat(y());
  function h(S, M) {
    return S.reduce((E, V) => E - o[V], M);
  }
  function m(S, M) {
    return S.reduce((E, V) => h(E, M) > 0 ? E.concat([V]) : E, []);
  }
  function v(S) {
    return a.map((M, E) => ({
      start: M - r[E] + 0.5 + S,
      end: M + t - 0.5 + S
    }));
  }
  function g(S, M, E) {
    const V = v(M);
    return S.map((G) => {
      const B = E ? 0 : -n, U = E ? n : 0, R = E ? "end" : "start", k = V[G][R];
      return {
        index: G,
        loopPoint: k,
        slideLocation: vi(-1),
        translate: X1(e, c[G]),
        target: () => i.get() > k ? B : U
      };
    });
  }
  function b() {
    const S = s[0], M = m(f, S);
    return g(M, n, !1);
  }
  function y() {
    const S = t - s[0] - 1, M = m(u, S);
    return g(M, -n, !0);
  }
  function x() {
    return p.every(({
      index: S
    }) => {
      const M = u.filter((E) => E !== S);
      return h(M, t) <= 0.1;
    });
  }
  function _() {
    p.forEach((S) => {
      const {
        target: M,
        translate: E,
        slideLocation: V
      } = S, G = M();
      G !== V.get() && (E.to(G), V.set(G));
    });
  }
  function $() {
    p.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: x,
    clear: $,
    loop: _,
    loopPoints: p
  };
}
function jK(e, t, n) {
  let r, o = !1;
  function a(c) {
    if (!n)
      return;
    function l(u) {
      for (const f of u)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((u) => {
      o || (sp(n) || n(c, u)) && l(u);
    }), r.observe(e, {
      childList: !0
    });
  }
  function s() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: s
  };
}
function MK(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, c = !1;
  function l() {
    i = new IntersectionObserver((m) => {
      c || (m.forEach((v) => {
        const g = t.indexOf(v.target);
        o[g] = v;
      }), a = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((m) => i.observe(m));
  }
  function u() {
    i && i.disconnect(), c = !0;
  }
  function f(m) {
    return us(o).reduce((v, g) => {
      const b = parseInt(g), {
        isIntersecting: y
      } = o[b];
      return (m && y || !m && !y) && v.push(b), v;
    }, []);
  }
  function p(m = !0) {
    if (m && a)
      return a;
    if (!m && s)
      return s;
    const v = f(m);
    return m && (a = v), m || (s = v), v;
  }
  return {
    init: l,
    destroy: u,
    get: p
  };
}
function kK(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: c
  } = e, l = n[0] && o, u = m(), f = v(), p = n.map(s), h = g();
  function m() {
    if (!l)
      return 0;
    const y = n[0];
    return dt(t[i] - y[i]);
  }
  function v() {
    if (!l)
      return 0;
    const y = a.getComputedStyle(mn(r));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function g() {
    return n.map((y, x, _) => {
      const $ = !x, N = cp(_, x);
      return $ ? p[x] + u : N ? p[x] + f : _[x + 1][i] - y[i];
    }).map(dt);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: h,
    startGap: u,
    endGap: f
  };
}
function DK(e, t, n, r, o, a, s, i, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: f
  } = e, p = ap(n);
  function h(b, y) {
    return ls(b).filter((x) => x % y === 0).map((x) => b.slice(x, x + y));
  }
  function m(b) {
    return b.length ? ls(b).reduce((y, x, _) => {
      const $ = mn(y) || 0, N = $ === 0, S = x === Is(b), M = o[l] - a[$][l], E = o[l] - a[x][u], V = !r && N ? f(s) : 0, G = !r && S ? f(i) : 0, B = dt(E - G - (M + V));
      return _ && B > t + c && y.push(x), S && y.push(b.length), y;
    }, []).map((y, x, _) => {
      const $ = Math.max(_[x - 1] || 0);
      return b.slice($, y);
    }) : [];
  }
  function v(b) {
    return p ? h(b, n) : m(b);
  }
  return {
    groupSlides: v
  };
}
function AK(e, t, n, r, o, a, s) {
  const {
    align: i,
    axis: c,
    direction: l,
    startIndex: u,
    loop: f,
    duration: p,
    dragFree: h,
    dragThreshold: m,
    inViewThreshold: v,
    slidesToScroll: g,
    skipSnaps: b,
    containScroll: y,
    watchResize: x,
    watchSlides: _,
    watchDrag: $
  } = a, N = 2, S = vK(), M = S.measure(t), E = n.map(S.measure), V = pK(c, l), G = V.measureSize(M), B = gK(G), U = dK(i, G), R = !f && !!y, k = f || !!y, {
    slideSizes: W,
    slideSizesWithGaps: D,
    startGap: z,
    endGap: Y
  } = kK(V, M, E, n, k, o), H = DK(V, G, g, f, M, E, z, Y, N), {
    snaps: Q,
    snapsAligned: I
  } = SK(V, U, M, E, H), re = -mn(Q) + mn(D), {
    snapsContained: me,
    scrollContainLimit: ae
  } = wK(G, re, I, y, N), te = R ? me : I, {
    limit: ie
  } = $K(re, te, f), ge = Z1(Is(te), u, f), _e = ge.clone(), ce = ls(n), he = ({
    dragHandler: yt,
    scrollBody: Qt,
    scrollBounds: Ce,
    options: {
      loop: Se
    }
  }) => {
    Se || Ce.constrain(yt.pointerDown()), Qt.seek();
  }, K = ({
    scrollBody: yt,
    translate: Qt,
    location: Ce,
    offsetLocation: Se,
    scrollLooper: Be,
    slideLooper: Le,
    dragHandler: Xe,
    animation: tt,
    eventHandler: xt,
    options: {
      loop: ur
    }
  }, an) => {
    const Nt = yt.velocity(), Tn = yt.settled();
    Tn && !Xe.pointerDown() && (tt.stop(), xt.emit("settle")), Tn || xt.emit("scroll"), Se.set(Ce.get() - Nt + Nt * an), ur && (Be.loop(yt.direction()), Le.loop()), Qt.to(Se.get());
  }, se = fK(r, o, () => he(et), (yt) => K(et, yt)), ne = 0.68, Ee = te[ge.get()], De = vi(Ee), Oe = vi(Ee), P = vi(Ee), F = yK(De, Oe, P, p, ne), q = EK(f, te, re, ie, P), fe = PK(se, ge, _e, F, q, P, s), de = CK(ie), oe = ds(), we = MK(t, n, s, v), {
    slideRegistry: Ae
  } = NK(R, y, te, ae, H, ce), Ke = OK(e, n, Ae, fe, F, oe), et = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: M,
    slideRects: E,
    animation: se,
    axis: V,
    dragHandler: hK(V, e, r, o, P, mK(V, o), De, se, fe, F, q, ge, s, B, h, m, b, ne, $),
    eventStore: oe,
    percentOfView: B,
    index: ge,
    indexPrevious: _e,
    limit: ie,
    location: De,
    offsetLocation: Oe,
    options: a,
    resizeHandler: bK(t, s, o, n, V, x, S),
    scrollBody: F,
    scrollBounds: xK(ie, Oe, P, F, B),
    scrollLooper: _K(re, ie, Oe, [De, Oe, P]),
    scrollProgress: de,
    scrollSnapList: te.map(de.get),
    scrollSnaps: te,
    scrollTarget: q,
    scrollTo: fe,
    slideLooper: TK(V, G, re, W, D, Q, te, Oe, n),
    slideFocus: Ke,
    slidesHandler: jK(t, s, _),
    slidesInView: we,
    slideIndexes: ce,
    slideRegistry: Ae,
    slidesToScroll: H,
    target: P,
    translate: X1(V, t)
  };
  return et;
}
function RK() {
  const e = {};
  let t;
  function n(c) {
    t = c;
  }
  function r(c) {
    return e[c] || [];
  }
  function o(c) {
    return r(c).forEach((l) => l(t, c)), i;
  }
  function a(c, l) {
    return e[c] = r(c).concat([l]), i;
  }
  function s(c, l) {
    return e[c] = r(c).filter((u) => u !== l), i;
  }
  const i = {
    init: n,
    emit: o,
    off: s,
    on: a
  };
  return i;
}
const IK = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function LK(e) {
  function t(a, s) {
    return Y1(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = us(s).filter((c) => e.matchMedia(c).matches).map((c) => s[c]).reduce((c, l) => t(c, l), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => us(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function FK(e) {
  let t = [];
  function n(a, s) {
    return t = s.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(a, e)), s.reduce((i, c) => Object.assign(i, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function oc(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = LK(o), s = FK(a), i = ds(), c = RK(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: h,
    emit: m
  } = c, v = G;
  let g = !1, b, y = l(IK, oc.globalOptions), x = l(y), _ = [], $, N, S;
  function M() {
    const {
      container: he,
      slides: K
    } = x;
    N = (id(he) ? e.querySelector(he) : he) || e.children[0];
    const ne = id(K) ? N.querySelectorAll(K) : K;
    S = [].slice.call(ne || N.children);
  }
  function E(he) {
    const K = AK(e, N, S, r, o, he, c);
    if (he.loop && !K.slideLooper.canLoop()) {
      const se = Object.assign({}, he, {
        loop: !1
      });
      return E(se);
    }
    return K;
  }
  function V(he, K) {
    g || (y = l(y, he), x = u(y), _ = K || _, M(), b = E(x), f([y, ..._.map(({
      options: se
    }) => se)]).forEach((se) => i.add(se, "change", G)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(), b.eventHandler.init(ce), b.resizeHandler.init(ce), b.slidesHandler.init(ce), b.options.loop && b.slideLooper.loop(), N.offsetParent && S.length && b.dragHandler.init(ce), $ = s.init(ce, _)));
  }
  function G(he, K) {
    const se = Q();
    B(), V(l({
      startIndex: se
    }, he), K), c.emit("reInit");
  }
  function B() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), i.clear();
  }
  function U() {
    g || (g = !0, i.clear(), B(), c.emit("destroy"));
  }
  function R(he, K, se) {
    !x.active || g || (b.scrollBody.useBaseFriction().useDuration(K === !0 ? 0 : x.duration), b.scrollTo.index(he, se || 0));
  }
  function k(he) {
    const K = b.index.add(1).get();
    R(K, he, -1);
  }
  function W(he) {
    const K = b.index.add(-1).get();
    R(K, he, 1);
  }
  function D() {
    return b.index.add(1).get() !== Q();
  }
  function z() {
    return b.index.add(-1).get() !== Q();
  }
  function Y() {
    return b.scrollSnapList;
  }
  function H() {
    return b.scrollProgress.get(b.location.get());
  }
  function Q() {
    return b.index.get();
  }
  function I() {
    return b.indexPrevious.get();
  }
  function re() {
    return b.slidesInView.get();
  }
  function me() {
    return b.slidesInView.get(!1);
  }
  function ae() {
    return $;
  }
  function te() {
    return b;
  }
  function ie() {
    return e;
  }
  function ge() {
    return N;
  }
  function _e() {
    return S;
  }
  const ce = {
    canScrollNext: D,
    canScrollPrev: z,
    containerNode: ge,
    internalEngine: te,
    destroy: U,
    off: h,
    on: p,
    emit: m,
    plugins: ae,
    previousScrollSnap: I,
    reInit: v,
    rootNode: ie,
    scrollNext: k,
    scrollPrev: W,
    scrollProgress: H,
    scrollSnapList: Y,
    scrollTo: R,
    selectedScrollSnap: Q,
    slideNodes: _e,
    slidesInView: re,
    slidesNotInView: me
  };
  return V(t, n), setTimeout(() => c.emit("init"), 0), ce;
}
oc.globalOptions = void 0;
function lp(e = {}, t = []) {
  const n = Z(e), r = Z(t), [o, a] = X(), [s, i] = X(), c = be(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return ee(() => {
    if (cK() && s) {
      oc.globalOptions = lp.globalOptions;
      const l = oc(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), ee(() => {
    op(n.current, e) || (n.current = e, c());
  }, [e, c]), ee(() => {
    lK(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
lp.globalOptions = void 0;
const Q1 = C.createContext(null);
function nl() {
  const e = C.useContext(Q1);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const BK = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = lp(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [u, f] = C.useState(!1), [p, h] = C.useState(!1), m = C.useCallback((y) => {
      y && (f(y.canScrollPrev()), h(y.canScrollNext()));
    }, []), v = C.useCallback(() => {
      l == null || l.scrollPrev();
    }, [l]), g = C.useCallback(() => {
      l == null || l.scrollNext();
    }, [l]), b = C.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), v()) : y.key === "ArrowRight" && (y.preventDefault(), g());
      },
      [v, g]
    );
    return C.useEffect(() => {
      !l || !n || n(l);
    }, [l, n]), C.useEffect(() => {
      if (l)
        return m(l), l.on("reInit", m), l.on("select", m), () => {
          l == null || l.off("select", m);
        };
    }, [l, m]), /* @__PURE__ */ d.jsx(
      Q1.Provider,
      {
        value: {
          carouselRef: c,
          api: l,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: v,
          scrollNext: g,
          canScrollPrev: u,
          canScrollNext: p
        },
        children: /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: b,
            className: T("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...s,
            children: a
          }
        )
      }
    );
  }
);
BK.displayName = "Carousel";
const VK = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = nl();
  return /* @__PURE__ */ d.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      className: T(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
VK.displayName = "CarouselContent";
const zK = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = nl();
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: T(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
zK.displayName = "CarouselItem";
const WK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = nl();
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: T(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(f$, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
WK.displayName = "CarouselPrevious";
const HK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = nl();
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: T(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(p$, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
HK.displayName = "CarouselNext";
var J1 = A.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
}, onPress: () => {
}, onRelease: () => {
}, onDrag: () => {
}, onNestedDrag: () => {
}, onNestedOpenChange: () => {
}, onNestedRelease: () => {
}, openProp: void 0, dismissible: !1, isOpen: !1, keyboardIsOpen: { current: !1 }, snapPointsOffset: null, snapPoints: null, modal: !1, shouldFade: !1, activeSnapPoint: null, onOpenChange: () => {
}, setActiveSnapPoint: () => {
}, visible: !1, closeDrawer: () => {
}, setVisible: () => {
}, direction: "bottom" }), up = () => A.useContext(J1);
function UK(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
UK(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var KK = typeof window < "u" ? fs : ee;
function cd(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function GK() {
  return dp(/^Mac/);
}
function YK() {
  return dp(/^iPhone/);
}
function qK() {
  return dp(/^iPad/) || GK() && navigator.maxTouchPoints > 1;
}
function ew() {
  return YK() || qK();
}
function dp(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Ql = typeof document < "u" && window.visualViewport;
function ev(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function tw(e) {
  for (ev(e) && (e = e.parentElement); e && !ev(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var ZK = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), oi = 0, Jl;
function XK(e = {}) {
  let { isDisabled: t } = e;
  KK(() => {
    if (!t)
      return oi++, oi === 1 && (ew() ? Jl = JK() : Jl = QK()), () => {
        oi--, oi === 0 && Jl();
      };
  }, [t]);
}
function QK() {
  return cd(nw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function JK() {
  let e, t = 0, n = (f) => {
    e = tw(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let p = f.changedTouches[0].pageY, h = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((h <= 0 && p > t || h >= m && p < t) && f.preventDefault(), t = p);
  }, o = (f) => {
    let p = f.target;
    ld(p) && p !== document.activeElement && (f.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (f) => {
    let p = f.target;
    ld(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Ql && (Ql.height < window.innerHeight ? requestAnimationFrame(() => {
        tv(p);
      }) : Ql.addEventListener("resize", () => tv(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = cd(nw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = cd($a(document, "touchstart", n, { passive: !1, capture: !0 }), $a(document, "touchmove", r, { passive: !1, capture: !0 }), $a(document, "touchend", o, { passive: !1, capture: !0 }), $a(document, "focus", a, !0), $a(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function nw(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function $a(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function tv(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = tw(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function ld(e) {
  return e instanceof HTMLInputElement && !ZK.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function eG(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function tG(...e) {
  return (t) => e.forEach((n) => eG(n, t));
}
function rw(...e) {
  return C.useCallback(tG(...e), e);
}
var mr = null;
function nG({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o }) {
  let [a, s] = A.useState(typeof window < "u" ? window.location.href : ""), i = A.useRef(0), c = A.useCallback(() => {
    if (mr === null && e) {
      mr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: u, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-i.current}px`, document.body.style.left = `${-u}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let p = f - window.innerHeight;
        p && i.current >= f && (document.body.style.top = `${-(i.current + p)}px`);
      }), 300);
    }
  }, [e]), l = A.useCallback(() => {
    if (mr !== null) {
      let u = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      document.body.style.position = mr.position, document.body.style.top = mr.top, document.body.style.left = mr.left, document.body.style.height = mr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, u);
      }), mr = null;
    }
  }, [a]);
  return A.useEffect(() => {
    function u() {
      i.current = window.scrollY;
    }
    return u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u);
    };
  }, []), A.useEffect(() => {
    n || !r || (e ? (c(), t || setTimeout(() => {
      l();
    }, 500)) : l());
  }, [e, r, a, t, n, c, l]), { restorePositionSetting: l };
}
var ow = /* @__PURE__ */ new WeakMap();
function it(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && ow.set(e, r);
}
function ai(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = ow.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
    e.style[r] = o;
  }));
}
var $t = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function si(e, t) {
  let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[$t(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[$t(t) ? 5 : 4]) : null);
}
function rG(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var rt = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, aw = 0.4;
function sw(e) {
  let t = A.useRef(e);
  return A.useEffect(() => {
    t.current = e;
  }), A.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function oG({ defaultProp: e, onChange: t }) {
  let n = A.useState(e), [r] = n, o = A.useRef(r), a = sw(t);
  return A.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function aG({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = oG({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = sw(n), c = A.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function sG({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom" }) {
  let [c, l] = aG({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), u = A.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), f = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = A.useMemo(() => n == null ? void 0 : n.findIndex((x) => x === c), [n, c]), h = A.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.map((_) => {
      let $ = typeof window < "u", N = typeof _ == "string", S = 0;
      if (N && (S = parseInt(_, 10)), $t(i)) {
        let E = N ? S : $ ? _ * window.innerHeight : 0;
        return $ ? i === "bottom" ? window.innerHeight - E : -window.innerHeight + E : E;
      }
      let M = N ? S : $ ? _ * window.innerWidth : 0;
      return $ ? i === "right" ? window.innerWidth - M : -window.innerWidth + M : M;
    })) != null ? x : [];
  }, [n]), m = A.useMemo(() => p !== null ? h == null ? void 0 : h[p] : null, [h, p]), v = A.useCallback((x) => {
    var _;
    let $ = (_ = h == null ? void 0 : h.findIndex((N) => N === x)) != null ? _ : null;
    s($), it(r.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(i) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)` }), h && $ !== h.length - 1 && $ !== a ? it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "0" }) : it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), l($ !== null ? n == null ? void 0 : n[$] : null);
  }, [r.current, n, h, a, o, l]);
  A.useEffect(() => {
    var x;
    if (e) {
      let _ = (x = n == null ? void 0 : n.findIndex(($) => $ === e)) != null ? x : -1;
      h && _ !== -1 && typeof h[_] == "number" && v(h[_]);
    }
  }, [e, n, h, v]);
  function g({ draggedDistance: x, closeDrawer: _, velocity: $, dismissible: N }) {
    if (a === void 0)
      return;
    let S = i === "bottom" || i === "right" ? (m ?? 0) - x : (m ?? 0) + x, M = p === a - 1, E = p === 0, V = x > 0;
    if (M && it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), $ > 2 && !V) {
      N ? _() : v(h[0]);
      return;
    }
    if ($ > 2 && V && h && n) {
      v(h[n.length - 1]);
      return;
    }
    let G = h == null ? void 0 : h.reduce((U, R) => typeof U != "number" || typeof R != "number" ? U : Math.abs(R - S) < Math.abs(U - S) ? R : U), B = $t(i) ? window.innerHeight : window.innerWidth;
    if ($ > aw && Math.abs(x) < B * 0.4) {
      let U = V ? 1 : -1;
      if (U > 0 && u) {
        v(h[n.length - 1]);
        return;
      }
      if (E && U < 0 && N && _(), p === null)
        return;
      v(h[p + U]);
      return;
    }
    v(G);
  }
  function b({ draggedDistance: x }) {
    if (m === null)
      return;
    let _ = i === "bottom" || i === "right" ? m - x : m + x;
    (i === "bottom" || i === "right") && _ < h[h.length - 1] || (i === "top" || i === "left") && _ > h[h.length - 1] || it(r.current, { transform: $t(i) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)` });
  }
  function y(x, _) {
    if (!n || typeof p != "number" || !h || a === void 0)
      return null;
    let $ = p === a - 1;
    if (p >= a && _)
      return 0;
    if ($ && !_)
      return 1;
    if (!f && !$)
      return null;
    let N = $ ? p + 1 : p - 1, S = $ ? h[N] - h[N - 1] : h[N + 1] - h[N], M = x / Math.abs(S);
    return $ ? 1 - M : M;
  }
  return { isLastSnapPoint: u, activeSnapPoint: c, shouldFade: f, getPercentageDragged: y, setActiveSnapPoint: l, activeSnapPointIndex: p, onRelease: g, onDrag: b, snapPointsOffset: h };
}
var iG = 0.25, cG = 100, nv = 8, Fr = 16, rv = 26, ov = "vaul-dragging";
function iw({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i = !1, closeThreshold: c = iG, scrollLockTimeout: l = cG, dismissible: u = !0, fadeFromIndex: f = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: h, fixed: m, modal: v = !0, onClose: g, direction: b = "bottom", preventScrollRestoration: y = !0 }) {
  var x;
  let [_ = !1, $] = A.useState(!1), [N, S] = A.useState(!1), [M, E] = A.useState(!1), [V, G] = A.useState(!1), [B, U] = A.useState(!1), [R, k] = A.useState(!1), W = A.useRef(null), D = A.useRef(null), z = A.useRef(null), Y = A.useRef(null), H = A.useRef(null), Q = A.useRef(!1), I = A.useRef(null), re = A.useRef(0), me = A.useRef(!1), ae = A.useRef(0), te = A.useRef(null), ie = A.useRef(((x = te.current) == null ? void 0 : x.getBoundingClientRect().height) || 0), ge = A.useRef(0), _e = A.useCallback((Ce) => {
    s && Ce === ne.length - 1 && (D.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ce, activeSnapPointIndex: he, setActiveSnapPoint: K, onRelease: se, snapPointsOffset: ne, onDrag: Ee, shouldFade: De, getPercentageDragged: Oe } = sG({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: h, drawerRef: te, fadeFromIndex: f, overlayRef: W, onSnapPointChange: _e, direction: b });
  XK({ isDisabled: !_ || B || !v || R || !N });
  let { restorePositionSetting: P } = nG({ isOpen: _, modal: v, nested: i, hasBeenOpened: N, preventScrollRestoration: y });
  function F() {
    return (window.innerWidth - rv) / window.innerWidth;
  }
  function q(Ce) {
    var Se;
    !u && !s || te.current && !te.current.contains(Ce.target) || (ie.current = ((Se = te.current) == null ? void 0 : Se.getBoundingClientRect().height) || 0, U(!0), z.current = /* @__PURE__ */ new Date(), ew() && window.addEventListener("touchend", () => Q.current = !1, { once: !0 }), Ce.target.setPointerCapture(Ce.pointerId), re.current = $t(b) ? Ce.screenY : Ce.screenX);
  }
  function fe(Ce, Se) {
    var Be;
    let Le = Ce, Xe = (Be = window.getSelection()) == null ? void 0 : Be.toString(), tt = te.current ? si(te.current, b) : null, xt = /* @__PURE__ */ new Date();
    if (Le.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (D.current && xt.getTime() - D.current.getTime() < 500)
      return !1;
    if (tt !== null && (b === "bottom" ? tt > 0 : tt < 0))
      return !0;
    if (Xe && Xe.length > 0)
      return !1;
    if (H.current && xt.getTime() - H.current.getTime() < l && tt === 0 || Se)
      return H.current = xt, !1;
    for (; Le; ) {
      if (Le.scrollHeight > Le.clientHeight) {
        if (Le.scrollTop !== 0)
          return H.current = /* @__PURE__ */ new Date(), !1;
        if (Le.getAttribute("role") === "dialog")
          return !0;
      }
      Le = Le.parentNode;
    }
    return !0;
  }
  function de(Ce) {
    if (te.current && B) {
      let Se = b === "bottom" || b === "right" ? 1 : -1, Be = (re.current - ($t(b) ? Ce.screenY : Ce.screenX)) * Se, Le = Be > 0;
      if (s && he === 0 && !u || !Q.current && !fe(Ce.target, Le))
        return;
      if (te.current.classList.add(ov), Q.current = !0, it(te.current, { transition: "none" }), it(W.current, { transition: "none" }), s && Ee({ draggedDistance: Be }), Le && !s) {
        let Nt = rG(Be), Tn = Math.min(Nt * -1, 0) * Se;
        it(te.current, { transform: $t(b) ? `translate3d(0, ${Tn}px, 0)` : `translate3d(${Tn}px, 0, 0)` });
        return;
      }
      let Xe = Math.abs(Be), tt = document.querySelector("[vaul-drawer-wrapper]"), xt = Xe / ie.current, ur = Oe(Xe, Le);
      ur !== null && (xt = ur);
      let an = 1 - xt;
      if ((De || f && he === f - 1) && (o == null || o(Ce, xt), it(W.current, { opacity: `${an}`, transition: "none" }, !0)), tt && W.current && r) {
        let Nt = Math.min(F() + xt * (1 - F()), 1), Tn = 8 - xt * 8, Kn = Math.max(0, 14 - xt * 14);
        it(tt, { borderRadius: `${Tn}px`, transform: $t(b) ? `scale(${Nt}) translate3d(0, ${Kn}px, 0)` : `scale(${Nt}) translate3d(${Kn}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!s) {
        let Nt = Xe * Se;
        it(te.current, { transform: $t(b) ? `translate3d(0, ${Nt}px, 0)` : `translate3d(${Nt}px, 0, 0)` });
      }
    }
  }
  A.useEffect(() => () => {
    Ke(!1), P();
  }, []), A.useEffect(() => {
    var Ce;
    function Se() {
      var Be;
      if (!te.current)
        return;
      let Le = document.activeElement;
      if (ld(Le) || me.current) {
        let Xe = ((Be = window.visualViewport) == null ? void 0 : Be.height) || 0, tt = window.innerHeight - Xe, xt = te.current.getBoundingClientRect().height || 0;
        ge.current || (ge.current = xt);
        let ur = te.current.getBoundingClientRect().top;
        if (Math.abs(ae.current - tt) > 60 && (me.current = !me.current), s && s.length > 0 && ne && he) {
          let an = ne[he] || 0;
          tt += an;
        }
        if (ae.current = tt, xt > Xe || me.current) {
          let an = te.current.getBoundingClientRect().height, Nt = an;
          an > Xe && (Nt = Xe - rv), m ? te.current.style.height = `${an - Math.max(tt, 0)}px` : te.current.style.height = `${Math.max(Nt, Xe - ur)}px`;
        } else
          te.current.style.height = `${ge.current}px`;
        s && s.length > 0 && !me.current ? te.current.style.bottom = "0px" : te.current.style.bottom = `${Math.max(tt, 0)}px`;
      }
    }
    return (Ce = window.visualViewport) == null || Ce.addEventListener("resize", Se), () => {
      var Be;
      return (Be = window.visualViewport) == null ? void 0 : Be.removeEventListener("resize", Se);
    };
  }, [he, s, ne]);
  function oe() {
    te.current && (g == null || g(), it(te.current, { transform: $t(b) ? `translate3d(0, ${b === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${b === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), it(W.current, { opacity: "0", transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), Ke(!1), setTimeout(() => {
      E(!1), $(!1);
    }, 300), setTimeout(() => {
      s && K(s[0]);
    }, rt.DURATION * 1e3));
  }
  A.useEffect(() => {
    if (!_ && r) {
      let Ce = setTimeout(() => {
        ai(document.body);
      }, 200);
      return () => clearTimeout(Ce);
    }
  }, [_, r]), A.useEffect(() => {
    e ? ($(!0), S(!0)) : oe();
  }, [e]), A.useEffect(() => {
    V && (t == null || t(_));
  }, [_]), A.useEffect(() => {
    G(!0);
  }, []);
  function we() {
    if (!te.current)
      return;
    let Ce = document.querySelector("[vaul-drawer-wrapper]"), Se = si(te.current, b);
    it(te.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), it(W.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), r && Se && Se > 0 && _ && it(Ce, { borderRadius: `${nv}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${F()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${F()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` }, !0);
  }
  function Ae(Ce) {
    var Se;
    if (!B || !te.current)
      return;
    te.current.classList.remove(ov), Q.current = !1, U(!1), Y.current = /* @__PURE__ */ new Date();
    let Be = si(te.current, b);
    if (!fe(Ce.target, !1) || !Be || Number.isNaN(Be) || z.current === null)
      return;
    let Le = Y.current.getTime() - z.current.getTime(), Xe = re.current - ($t(b) ? Ce.screenY : Ce.screenX), tt = Math.abs(Xe) / Le;
    if (tt > 0.05 && (k(!0), setTimeout(() => {
      k(!1);
    }, 200)), s) {
      se({ draggedDistance: Xe * (b === "bottom" || b === "right" ? 1 : -1), closeDrawer: oe, velocity: tt, dismissible: u }), a == null || a(Ce, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? Xe > 0 : Xe < 0) {
      we(), a == null || a(Ce, !0);
      return;
    }
    if (tt > aw) {
      oe(), a == null || a(Ce, !1);
      return;
    }
    let xt = Math.min((Se = te.current.getBoundingClientRect().height) != null ? Se : 0, window.innerHeight);
    if (Be >= xt * c) {
      oe(), a == null || a(Ce, !1);
      return;
    }
    a == null || a(Ce, !0), we();
  }
  A.useEffect(() => {
    _ && (it(document.documentElement, { scrollBehavior: "auto" }), D.current = /* @__PURE__ */ new Date(), Ke(!0));
  }, [_]), A.useEffect(() => {
    var Ce;
    if (te.current && M) {
      let Se = (Ce = te == null ? void 0 : te.current) == null ? void 0 : Ce.querySelectorAll("*");
      Se == null || Se.forEach((Be) => {
        let Le = Be;
        (Le.scrollHeight > Le.clientHeight || Le.scrollWidth > Le.clientWidth) && Le.classList.add("vaul-scrollable");
      });
    }
  }, [M]);
  function Ke(Ce) {
    let Se = document.querySelector("[vaul-drawer-wrapper]");
    !Se || !r || (Ce ? (it(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), it(document.body, { background: "black" }, !0), it(Se, { borderRadius: `${nv}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${F()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${F()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })) : (ai(Se, "overflow"), ai(Se, "transform"), ai(Se, "borderRadius"), it(Se, { transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })));
  }
  function et(Ce) {
    let Se = Ce ? (window.innerWidth - Fr) / window.innerWidth : 1, Be = Ce ? -Fr : 0;
    I.current && window.clearTimeout(I.current), it(te.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: `scale(${Se}) translate3d(0, ${Be}px, 0)` }), !Ce && te.current && (I.current = setTimeout(() => {
      let Le = si(te.current, b);
      it(te.current, { transition: "none", transform: $t(b) ? `translate3d(0, ${Le}px, 0)` : `translate3d(${Le}px, 0, 0)` });
    }, 500));
  }
  function yt(Ce, Se) {
    if (Se < 0)
      return;
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = (Be - Fr) / Be, Xe = Le + Se * (1 - Le), tt = -Fr + Se * Fr;
    it(te.current, { transform: $t(b) ? `scale(${Xe}) translate3d(0, ${tt}px, 0)` : `scale(${Xe}) translate3d(${tt}px, 0, 0)`, transition: "none" });
  }
  function Qt(Ce, Se) {
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = Se ? (Be - Fr) / Be : 1, Xe = Se ? -Fr : 0;
    Se && it(te.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(b) ? `scale(${Le}) translate3d(0, ${Xe}px, 0)` : `scale(${Le}) translate3d(${Xe}px, 0, 0)` });
  }
  return A.createElement(Ts, { modal: v, onOpenChange: (Ce) => {
    if (e !== void 0) {
      t == null || t(Ce);
      return;
    }
    Ce ? (S(!0), $(Ce)) : oe();
  }, open: _ }, A.createElement(J1.Provider, { value: { visible: M, activeSnapPoint: ce, snapPoints: s, setActiveSnapPoint: K, drawerRef: te, overlayRef: W, scaleBackground: Ke, onOpenChange: t, onPress: q, setVisible: E, onRelease: Ae, onDrag: de, dismissible: u, isOpen: _, shouldFade: De, closeDrawer: oe, onNestedDrag: yt, onNestedOpenChange: et, onNestedRelease: Qt, keyboardIsOpen: me, openProp: e, modal: v, snapPointsOffset: ne, direction: b } }, n));
}
var cw = A.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = up(), l = rw(n, r), u = o && o.length > 0;
  return A.createElement(mo, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
cw.displayName = "Drawer.Overlay";
var lw = A.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: f, snapPointsOffset: p, visible: h, closeDrawer: m, modal: v, openProp: g, onOpenChange: b, setVisible: y, direction: x } = up(), _ = rw(a, s);
  return A.useEffect(() => {
    y(!0);
  }, []), A.createElement(vo, { onOpenAutoFocus: ($) => {
    var N;
    e ? e($) : ($.preventDefault(), (N = s.current) == null || N.focus());
  }, onPointerDown: i, onPointerDownOutside: ($) => {
    if (t == null || t($), !v || $.defaultPrevented) {
      $.preventDefault();
      return;
    }
    f.current && (f.current = !1), $.preventDefault(), b == null || b(!1), !(!u || g !== void 0) && m();
  }, onPointerMove: l, onPointerUp: c, ref: _, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-direction": x, "vaul-drawer-visible": h ? "true" : "false" });
});
lw.displayName = "Drawer.Content";
function lG({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = up();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return A.createElement(iw, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var On = { Root: iw, NestedRoot: lG, Content: lw, Overlay: cw, Trigger: Ac, Portal: js, Close: go, Title: oa, Description: aa };
const uG = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ d.jsx(
  On.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
uG.displayName = "Drawer";
const jq = On.Trigger, dG = On.Portal, Mq = On.Close, uw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  On.Overlay,
  {
    ref: n,
    className: T("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
uw.displayName = On.Overlay.displayName;
const fG = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(dG, { children: [
  /* @__PURE__ */ d.jsx(uw, {}),
  /* @__PURE__ */ d.jsxs(
    On.Content,
    {
      ref: r,
      className: T(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        t
      ]
    }
  )
] }));
fG.displayName = "DrawerContent";
const pG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
pG.displayName = "DrawerHeader";
const hG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: T("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
hG.displayName = "DrawerFooter";
const mG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  On.Title,
  {
    ref: n,
    className: T(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
mG.displayName = On.Title.displayName;
const vG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  On.Description,
  {
    ref: n,
    className: T("text-sm text-muted-foreground", e),
    ...t
  }
));
vG.displayName = On.Description.displayName;
var gG = Object.defineProperty, bG = Object.defineProperties, yG = Object.getOwnPropertyDescriptors, ac = Object.getOwnPropertySymbols, dw = Object.prototype.hasOwnProperty, fw = Object.prototype.propertyIsEnumerable, av = (e, t, n) => t in e ? gG(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xG = (e, t) => {
  for (var n in t || (t = {}))
    dw.call(t, n) && av(e, n, t[n]);
  if (ac)
    for (var n of ac(t))
      fw.call(t, n) && av(e, n, t[n]);
  return e;
}, wG = (e, t) => bG(e, yG(t)), $G = (e, t) => {
  var n = {};
  for (var r in e)
    dw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ac)
    for (var r of ac(e))
      t.indexOf(r) < 0 && fw.call(e, r) && (n[r] = e[r]);
  return n;
}, _G = "^\\d+$";
function CG(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function SG(e) {
  let t = C.useRef();
  return C.useEffect(() => {
    t.current = e;
  }), t.current;
}
var NG = 18, pw = 40, EG = `${pw}px`, PG = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function OG({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = C.useRef({ done: !1, refocused: !1 }), [a, s] = C.useState(!1), [i, c] = C.useState(!1), [l, u] = C.useState(!1), f = C.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), p = C.useCallback(() => {
    let h = e.current, m = t.current;
    if (!h || !m || l || n === "none")
      return;
    let v = h, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, y = g - NG, x = b;
    if (!(document.querySelectorAll(PG).length === 0 && document.elementFromPoint(y, x) === h) && (s(!0), u(!0), !o.current.refocused && document.activeElement === m)) {
      let _ = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange(_[0], _[1]), o.current.refocused = !0;
    }
  }, [e, t, l, n]);
  return C.useEffect(() => {
    let h = e.current;
    if (!h || n === "none")
      return;
    function m() {
      let g = window.innerWidth - h.getBoundingClientRect().right;
      c(g >= pw);
    }
    m();
    let v = setInterval(m, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, n]), C.useEffect(() => {
    let h = r || document.activeElement === t.current;
    if (n === "none" || !h)
      return;
    let m = setTimeout(p, 0), v = setTimeout(p, 2e3), g = setTimeout(p, 5e3), b = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(m), clearTimeout(v), clearTimeout(g), clearTimeout(b);
    };
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: EG };
}
var hw = C.createContext({}), mw = C.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = _G, inputMode: c = "numeric", onComplete: l, pushPasswordManagerStrategy: u = "increase-width", containerClassName: f, noScriptCSSFallback: p = TG, render: h, children: m } = n, v = $G(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), g, b, y, x, _;
  let [$, N] = C.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), S = r ?? $, M = SG(S), E = C.useCallback((K) => {
    o == null || o(K), N(K);
  }, [o]), V = C.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), G = C.useRef(null), B = C.useRef(null), U = C.useRef({ value: S, onChange: E, isIOS: typeof window < "u" && ((b = (g = window == null ? void 0 : window.CSS) == null ? void 0 : g.supports) == null ? void 0 : b.call(g, "-webkit-touch-callout", "none")) }), R = C.useRef({ prev: [(y = G.current) == null ? void 0 : y.selectionStart, (x = G.current) == null ? void 0 : x.selectionEnd, (_ = G.current) == null ? void 0 : _.selectionDirection] });
  C.useImperativeHandle(t, () => G.current, []), C.useEffect(() => {
    let K = G.current, se = B.current;
    if (!K || !se)
      return;
    U.current.value !== K.value && U.current.onChange(K.value), R.current.prev = [K.selectionStart, K.selectionEnd, K.selectionDirection];
    function ne() {
      if (document.activeElement !== K) {
        H(null), I(null);
        return;
      }
      let Oe = K.selectionStart, P = K.selectionEnd, F = K.selectionDirection, q = K.maxLength, fe = K.value, de = R.current.prev, oe = -1, we = -1, Ae;
      if (fe.length !== 0 && Oe !== null && P !== null) {
        let Qt = Oe === P, Ce = Oe === fe.length && fe.length < q;
        if (Qt && !Ce) {
          let Se = Oe;
          if (Se === 0)
            oe = 0, we = 1, Ae = "forward";
          else if (Se === q)
            oe = Se - 1, we = Se, Ae = "backward";
          else if (q > 1 && fe.length > 1) {
            let Be = 0;
            if (de[0] !== null && de[1] !== null) {
              Ae = Se < de[1] ? "backward" : "forward";
              let Le = de[0] === de[1] && de[0] < q;
              Ae === "backward" && !Le && (Be = -1);
            }
            oe = Be + Se, we = Be + Se + 1;
          }
        }
        oe !== -1 && we !== -1 && oe !== we && G.current.setSelectionRange(oe, we, Ae);
      }
      let Ke = oe !== -1 ? oe : Oe, et = we !== -1 ? we : P, yt = Ae ?? F;
      H(Ke), I(et), R.current.prev = [Ke, et, yt];
    }
    if (document.addEventListener("selectionchange", ne, { capture: !0 }), ne(), document.activeElement === K && z(!0), !document.getElementById("input-otp-style")) {
      let Oe = document.createElement("style");
      if (Oe.id = "input-otp-style", document.head.appendChild(Oe), Oe.sheet) {
        let P = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        _a(Oe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), _a(Oe.sheet, `[data-input-otp]:autofill { ${P} }`), _a(Oe.sheet, `[data-input-otp]:-webkit-autofill { ${P} }`), _a(Oe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), _a(Oe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let Ee = () => {
      se && se.style.setProperty("--root-height", `${K.clientHeight}px`);
    };
    Ee();
    let De = new ResizeObserver(Ee);
    return De.observe(K), () => {
      document.removeEventListener("selectionchange", ne, { capture: !0 }), De.disconnect();
    };
  }, []);
  let [k, W] = C.useState(!1), [D, z] = C.useState(!1), [Y, H] = C.useState(null), [Q, I] = C.useState(null);
  C.useEffect(() => {
    CG(() => {
      var K, se, ne, Ee;
      (K = G.current) == null || K.dispatchEvent(new Event("input"));
      let De = (se = G.current) == null ? void 0 : se.selectionStart, Oe = (ne = G.current) == null ? void 0 : ne.selectionEnd, P = (Ee = G.current) == null ? void 0 : Ee.selectionDirection;
      De !== null && Oe !== null && (H(De), I(Oe), R.current.prev = [De, Oe, P]);
    });
  }, [S, D]), C.useEffect(() => {
    M !== void 0 && S !== M && M.length < a && S.length === a && (l == null || l(S));
  }, [a, l, M, S]);
  let re = OG({ containerRef: B, inputRef: G, pushPasswordManagerStrategy: u, isFocused: D }), me = C.useCallback((K) => {
    let se = K.currentTarget.value.slice(0, a);
    if (se.length > 0 && V && !V.test(se)) {
      K.preventDefault();
      return;
    }
    typeof M == "string" && se.length < M.length && document.dispatchEvent(new Event("selectionchange")), E(se);
  }, [a, E, M, V]), ae = C.useCallback(() => {
    var K;
    if (G.current) {
      let se = Math.min(G.current.value.length, a - 1), ne = G.current.value.length;
      (K = G.current) == null || K.setSelectionRange(se, ne), H(se), I(ne);
    }
    z(!0);
  }, [a]), te = C.useCallback((K) => {
    var se, ne;
    let Ee = G.current;
    if (!U.current.isIOS || !K.clipboardData || !Ee)
      return;
    let De = K.clipboardData.getData("text/plain");
    K.preventDefault();
    let Oe = (se = G.current) == null ? void 0 : se.selectionStart, P = (ne = G.current) == null ? void 0 : ne.selectionEnd, F = (Oe !== P ? S.slice(0, Oe) + De + S.slice(P) : S.slice(0, Oe) + De + S.slice(Oe)).slice(0, a);
    if (F.length > 0 && V && !V.test(F))
      return;
    Ee.value = F, E(F);
    let q = Math.min(F.length, a - 1), fe = F.length;
    Ee.setSelectionRange(q, fe), H(q), I(fe);
  }, [a, E, V, S]), ie = C.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), ge = C.useMemo(() => ({ position: "absolute", inset: 0, width: re.willPushPWMBadge ? `calc(100% + ${re.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: re.willPushPWMBadge ? `inset(0 ${re.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [re.PWM_BADGE_SPACE_WIDTH, re.willPushPWMBadge, s]), _e = C.useMemo(() => C.createElement("input", wG(xG({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": Y, "data-input-otp-mse": Q, inputMode: c, pattern: V == null ? void 0 : V.source, style: ge, maxLength: a, value: S, ref: G, onPaste: (K) => {
    var se;
    te(K), (se = v.onPaste) == null || se.call(v, K);
  }, onChange: me, onMouseOver: (K) => {
    var se;
    W(!0), (se = v.onMouseOver) == null || se.call(v, K);
  }, onMouseLeave: (K) => {
    var se;
    W(!1), (se = v.onMouseLeave) == null || se.call(v, K);
  }, onFocus: (K) => {
    var se;
    ae(), (se = v.onFocus) == null || se.call(v, K);
  }, onBlur: (K) => {
    var se;
    z(!1), (se = v.onBlur) == null || se.call(v, K);
  } })), [me, ae, te, c, ge, a, Q, Y, v, V == null ? void 0 : V.source, S]), ce = C.useMemo(() => ({ slots: Array.from({ length: a }).map((K, se) => {
    let ne = D && Y !== null && Q !== null && (Y === Q && se === Y || se >= Y && se < Q), Ee = S[se] !== void 0 ? S[se] : null;
    return { char: Ee, isActive: ne, hasFakeCaret: ne && Ee === null };
  }), isFocused: D, isHovering: !v.disabled && k }), [D, k, a, Q, Y, v.disabled, S]), he = C.useMemo(() => h ? h(ce) : C.createElement(hw.Provider, { value: ce }, m), [m, ce, h]);
  return C.createElement(C.Fragment, null, p !== null && C.createElement("noscript", null, C.createElement("style", null, p)), C.createElement("div", { ref: B, "data-input-otp-container": !0, style: ie, className: f }, he, C.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, _e)));
});
mw.displayName = "Input";
function _a(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var TG = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const jG = C.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  mw,
  {
    ref: r,
    containerClassName: T(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: T("disabled:cursor-not-allowed", e),
    ...n
  }
));
jG.displayName = "InputOTP";
const MG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: T("flex items-center", e), ...t }));
MG.displayName = "InputOTPGroup";
const kG = C.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = C.useContext(hw), { char: a, hasFakeCaret: s, isActive: i } = o.slots[e];
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: r,
      className: T(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        i && "z-10 ring-2 ring-ring ring-offset-background",
        t
      ),
      ...n,
      children: [
        a,
        s && /* @__PURE__ */ d.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
kG.displayName = "InputOTPSlot";
const DG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ d.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ d.jsx(m$, {}) }));
DG.displayName = "InputOTPSeparator";
const AG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ d.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
AG.displayName = "Breadcrumb";
const RG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "ol",
  {
    ref: n,
    className: T(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
RG.displayName = "BreadcrumbList";
const IG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "li",
  {
    ref: n,
    className: T("inline-flex items-center gap-1.5", e),
    ...t
  }
));
IG.displayName = "BreadcrumbItem";
const LG = C.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? gn : "a";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      ref: r,
      className: T("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
LG.displayName = "BreadcrumbLink";
const FG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: T("font-normal text-foreground", e),
    ...t
  }
));
FG.displayName = "BreadcrumbPage";
const BG = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ d.jsx(jr, {})
  }
);
BG.displayName = "BreadcrumbSeparator";
const VG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(bv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
VG.displayName = "BreadcrumbElipssis";
const zG = ({ className: e, ...t }) => /* @__PURE__ */ d.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: T("mx-auto flex w-full justify-center", e),
    ...t
  }
);
zG.displayName = "Pagination";
const WG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "ul",
  {
    ref: n,
    className: T("flex flex-row items-center gap-1", e),
    ...t
  }
));
WG.displayName = "PaginationContent";
const HG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("li", { ref: n, className: T("", e), ...t }));
HG.displayName = "PaginationItem";
const fp = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ d.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: T(
      xr({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
fp.displayName = "PaginationLink";
const UG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  fp,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: T("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { children: "Previous" })
    ]
  }
);
UG.displayName = "PaginationPrevious";
const KG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  fp,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: T("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx("span", { children: "Next" }),
      /* @__PURE__ */ d.jsx(jr, { className: "h-4 w-4" })
    ]
  }
);
KG.displayName = "PaginationNext";
const GG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: T("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(bv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
GG.displayName = "PaginationEllipsis";
const kq = ({ children: e }) => /* @__PURE__ */ d.jsx("div", { className: "app-layout", children: e });
export {
  BY as Accordion,
  UF as AccordionContent,
  WF as AccordionItem,
  HF as AccordionTrigger,
  IY as AlertDialog,
  vF as AlertDialogAction,
  gF as AlertDialogCancel,
  dF as AlertDialogContent,
  mF as AlertDialogDescription,
  pF as AlertDialogFooter,
  fF as AlertDialogHeader,
  I0 as AlertDialogOverlay,
  uF as AlertDialogPortal,
  hF as AlertDialogTitle,
  LY as AlertDialogTrigger,
  kq as AppLayout,
  jY as AspectRatio,
  To as Avatar,
  jo as AvatarFallback,
  Gr as AvatarImage,
  At as Badge,
  Nq as BottomNavigation,
  AG as Breadcrumb,
  VG as BreadcrumbEllipsis,
  IG as BreadcrumbItem,
  LG as BreadcrumbLink,
  RG as BreadcrumbList,
  FG as BreadcrumbPage,
  BG as BreadcrumbSeparator,
  Ve as Button,
  pa as CI_TYPES,
  aC as Calendar,
  Vy as Card,
  t9 as CardContent,
  e9 as CardDescription,
  n9 as CardFooter,
  QI as CardHeader,
  JI as CardTitle,
  BK as Carousel,
  VK as CarouselContent,
  zK as CarouselItem,
  HK as CarouselNext,
  WK as CarouselPrevious,
  yA as ChartContainer,
  sY as ChartLegend,
  $A as ChartLegendContent,
  xA as ChartStyle,
  aY as ChartTooltip,
  wA as ChartTooltipContent,
  jf as Checkbox,
  wq as CodeVerification,
  VY as Collapsible,
  WY as CollapsibleContent,
  zY as CollapsibleTrigger,
  LU as ComboBox,
  Sq as ComboxCheckbox,
  ar as Command,
  TY as CommandDialog,
  Sr as CommandEmpty,
  $n as CommandGroup,
  Cr as CommandInput,
  Gt as CommandItem,
  la as CommandList,
  Ka as CommandSeparator,
  mL as CommandShortcut,
  lY as ContextMenu,
  Q7 as ContextMenuCheckboxItem,
  Z7 as ContextMenuContent,
  dY as ContextMenuGroup,
  X7 as ContextMenuItem,
  e8 as ContextMenuLabel,
  fY as ContextMenuPortal,
  hY as ContextMenuRadioGroup,
  J7 as ContextMenuRadioItem,
  t8 as ContextMenuSeparator,
  n8 as ContextMenuShortcut,
  pY as ContextMenuSub,
  q7 as ContextMenuSubContent,
  Y7 as ContextMenuSubTrigger,
  uY as ContextMenuTrigger,
  Tq as D4TCardsList,
  K1 as D4TImage,
  bq as D4TTable,
  yy as Dialog,
  gY as DialogClose,
  Cf as DialogContent,
  U8 as DialogDescription,
  W8 as DialogFooter,
  z8 as DialogHeader,
  xy as DialogOverlay,
  V8 as DialogPortal,
  H8 as DialogTitle,
  vY as DialogTrigger,
  uG as Drawer,
  Mq as DrawerClose,
  fG as DrawerContent,
  vG as DrawerDescription,
  hG as DrawerFooter,
  pG as DrawerHeader,
  uw as DrawerOverlay,
  dG as DrawerPortal,
  mG as DrawerTitle,
  jq as DrawerTrigger,
  CY as DropdownMenu,
  F9 as DropdownMenuCheckboxItem,
  I9 as DropdownMenuContent,
  NY as DropdownMenuGroup,
  L9 as DropdownMenuItem,
  V9 as DropdownMenuLabel,
  EY as DropdownMenuPortal,
  OY as DropdownMenuRadioGroup,
  B9 as DropdownMenuRadioItem,
  z9 as DropdownMenuSeparator,
  W9 as DropdownMenuShortcut,
  PY as DropdownMenuSub,
  R9 as DropdownMenuSubContent,
  A9 as DropdownMenuSubTrigger,
  SY as DropdownMenuTrigger,
  ly as Form,
  Os as FormControl,
  ra as FormDescription,
  po as FormField,
  Rr as FormItem,
  ho as FormLabel,
  $8 as FormMessage,
  Cq as GenericCombobox,
  yq as GenericSelect,
  KY as HoverCard,
  rB as HoverCardContent,
  GY as HoverCardTrigger,
  Sf as Input,
  jG as InputOTP,
  MG as InputOTPGroup,
  DG as InputOTPSeparator,
  kG as InputOTPSlot,
  bY as InputPID,
  za as InputUI,
  Un as Label,
  YY as LoaderDots,
  OB as Menubar,
  AB as MenubarCheckboxItem,
  kB as MenubarContent,
  XY as MenubarGroup,
  DB as MenubarItem,
  IB as MenubarLabel,
  ZY as MenubarMenu,
  QY as MenubarPortal,
  eq as MenubarRadioGroup,
  RB as MenubarRadioItem,
  LB as MenubarSeparator,
  FB as MenubarShortcut,
  JY as MenubarSub,
  MB as MenubarSubContent,
  jB as MenubarSubTrigger,
  TB as MenubarTrigger,
  _q as MultipleImages,
  w1 as NavLink,
  jW as NavLinkNested,
  fV as NavigationMenu,
  vV as NavigationMenuContent,
  gV as NavigationMenuIndicator,
  nq as NavigationMenuItem,
  rq as NavigationMenuLink,
  pV as NavigationMenuList,
  mV as NavigationMenuTrigger,
  jx as NavigationMenuViewport,
  sl as PHONE_LINE_CODES,
  zG as Pagination,
  WG as PaginationContent,
  GG as PaginationEllipsis,
  HG as PaginationItem,
  fp as PaginationLink,
  KG as PaginationNext,
  UG as PaginationPrevious,
  rr as Popover,
  Ln as PopoverContent,
  or as PopoverTrigger,
  EV as Progress,
  HV as RadioGroup,
  UV as RadioGroupItem,
  RL as ScrollArea,
  S0 as ScrollBar,
  Of as Select,
  Bc as SelectContent,
  qI as SelectGroup,
  Vc as SelectItem,
  ZI as SelectLabel,
  XI as SelectSeparator,
  Fc as SelectTrigger,
  Tf as SelectValue,
  Ms as Separator,
  kY as Sheet,
  AY as SheetClose,
  FL as SheetContent,
  WL as SheetDescription,
  VL as SheetFooter,
  BL as SheetHeader,
  N0 as SheetOverlay,
  IL as SheetPortal,
  zL as SheetTitle,
  DY as SheetTrigger,
  pq as Sidebar,
  hq as SidebarContent,
  TW as SidebarFooter,
  wW as SidebarHeader,
  Ot as Skeleton,
  mz as Slider,
  pd as Spinner,
  xq as SwatchesPicker,
  iW as Switch,
  P0 as TableBody,
  UL as TableCaption,
  Rf as TableCell,
  HL as TableFooter,
  O0 as TableHead,
  E0 as TableHeader,
  Uc as TableRow,
  Af as TableUI,
  cq as Tabs,
  Pz as TabsContent,
  Nz as TabsList,
  Ez as TabsTrigger,
  xY as TextArea,
  Ey as TextareaUI,
  jz as Toggle,
  OW as ToggleTheme,
  to as Tooltip,
  Nr as TooltipContent,
  eo as TooltipProvider,
  no as TooltipTrigger,
  $q as UploadImage,
  gC as badgeVariants,
  xr as buttonVariants,
  ua as camelToSnake,
  T as cn,
  gi as convertBytes,
  al as convertHexToRGBA,
  ZG as fetcher,
  JG as formatCI,
  hm as formatCITypes,
  rY as formatCodePhoneLines,
  Eq as formatListPagination,
  mq as formatPagination,
  nY as formatPhone,
  tY as formatPhoneNumber,
  eY as formatRIF,
  Bm as generateUUID,
  Xl as generateUUIDToList,
  QG as getMultiOpacityColor,
  Pq as initialListPagination,
  vq as initialPagination,
  gq as insertColumn,
  Oq as insertColumnList,
  GU as listCamelToSnake,
  hV as navigationMenuTriggerStyle,
  XG as simulateFetch,
  Tz as toggleVariants,
  Dc as useFormField,
  Qc as useSidebar
};
//# sourceMappingURL=index.es.js.map
