import * as C from "react";
import I, { useCallback as ve, forwardRef as F, Children as Kr, isValidElement as Ta, createElement as $, cloneElement as sc, Fragment as vn, createContext as Wt, useContext as lt, useState as X, useEffect as J, useLayoutEffect as fs, useRef as q, useMemo as Zt, PureComponent as ic, useImperativeHandle as cv, useReducer as fd } from "react";
import * as Pw from "react-dom";
import lv, { flushSync as uv, createPortal as dv } from "react-dom";
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
var xp;
function Ow() {
  if (xp)
    return da;
  xp = 1;
  var e = I, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var wp;
function Tw() {
  return wp || (wp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = I, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function g(M) {
      if (M === null || typeof M != "object")
        return null;
      var se = m && M[m] || M[v];
      return typeof se == "function" ? se : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(M) {
      {
        for (var se = arguments.length, xe = new Array(se > 1 ? se - 1 : 0), Me = 1; Me < se; Me++)
          xe[Me - 1] = arguments[Me];
        x("error", M, xe);
      }
    }
    function x(M, se, xe) {
      {
        var Me = b.ReactDebugCurrentFrame, Ge = Me.getStackAddendum();
        Ge !== "" && (se += "%s", xe = xe.concat([Ge]));
        var nt = xe.map(function(We) {
          return String(We);
        });
        nt.unshift("Warning: " + se), Function.prototype.apply.call(console[M], console, nt);
      }
    }
    var _ = !1, w = !1, N = !1, S = !1, D = !1, E;
    E = Symbol.for("react.module.reference");
    function W(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === a || D || M === o || M === l || M === u || S || M === h || _ || w || N || typeof M == "object" && M !== null && (M.$$typeof === p || M.$$typeof === f || M.$$typeof === s || M.$$typeof === i || M.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === E || M.getModuleId !== void 0));
    }
    function G(M, se, xe) {
      var Me = M.displayName;
      if (Me)
        return Me;
      var Ge = se.displayName || se.name || "";
      return Ge !== "" ? xe + "(" + Ge + ")" : xe;
    }
    function z(M) {
      return M.displayName || "Context";
    }
    function K(M) {
      if (M == null)
        return null;
      if (typeof M.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof M == "function")
        return M.displayName || M.name || null;
      if (typeof M == "string")
        return M;
      switch (M) {
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
      if (typeof M == "object")
        switch (M.$$typeof) {
          case i:
            var se = M;
            return z(se) + ".Consumer";
          case s:
            var xe = M;
            return z(xe._context) + ".Provider";
          case c:
            return G(M, M.render, "ForwardRef");
          case f:
            var Me = M.displayName || null;
            return Me !== null ? Me : K(M.type) || "Memo";
          case p: {
            var Ge = M, nt = Ge._payload, We = Ge._init;
            try {
              return K(We(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, P = 0, R, O, V, U, Z, oe, H;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function be() {
      {
        if (P === 0) {
          R = console.log, O = console.info, V = console.warn, U = console.error, Z = console.group, oe = console.groupCollapsed, H = console.groupEnd;
          var M = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: M,
            log: M,
            warn: M,
            error: M,
            group: M,
            groupCollapsed: M,
            groupEnd: M
          });
        }
        P++;
      }
    }
    function pe() {
      {
        if (P--, P === 0) {
          var M = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, M, {
              value: R
            }),
            info: L({}, M, {
              value: O
            }),
            warn: L({}, M, {
              value: V
            }),
            error: L({}, M, {
              value: U
            }),
            group: L({}, M, {
              value: Z
            }),
            groupCollapsed: L({}, M, {
              value: oe
            }),
            groupEnd: L({}, M, {
              value: H
            })
          });
        }
        P < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = b.ReactCurrentDispatcher, re;
    function me(M, se, xe) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var Me = Ge.stack.trim().match(/\n( *(at )?)/);
            re = Me && Me[1] || "";
          }
        return `
` + re + M;
      }
    }
    var _e = !1, ae;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new fe();
    }
    function A(M, se) {
      if (!M || _e)
        return "";
      {
        var xe = ae.get(M);
        if (xe !== void 0)
          return xe;
      }
      var Me;
      _e = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = ee.current, ee.current = null, be();
      try {
        if (se) {
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
              Me = Gn;
            }
            Reflect.construct(M, [], We);
          } else {
            try {
              We.call();
            } catch (Gn) {
              Me = Gn;
            }
            M.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Gn) {
            Me = Gn;
          }
          M();
        }
      } catch (Gn) {
        if (Gn && Me && typeof Gn.stack == "string") {
          for (var ze = Gn.stack.split(`
`), jt = Me.stack.split(`
`), gt = ze.length - 1, wt = jt.length - 1; gt >= 1 && wt >= 0 && ze[gt] !== jt[wt]; )
            wt--;
          for (; gt >= 1 && wt >= 0; gt--, wt--)
            if (ze[gt] !== jt[wt]) {
              if (gt !== 1 || wt !== 1)
                do
                  if (gt--, wt--, wt < 0 || ze[gt] !== jt[wt]) {
                    var Jt = `
` + ze[gt].replace(" at new ", " at ");
                    return M.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", M.displayName)), typeof M == "function" && ae.set(M, Jt), Jt;
                  }
                while (gt >= 1 && wt >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ee.current = nt, pe(), Error.prepareStackTrace = Ge;
      }
      var xo = M ? M.displayName || M.name : "", yp = xo ? me(xo) : "";
      return typeof M == "function" && ae.set(M, yp), yp;
    }
    function ne(M, se, xe) {
      return A(M, !1);
    }
    function ye(M) {
      var se = M.prototype;
      return !!(se && se.isReactComponent);
    }
    function Pe(M, se, xe) {
      if (M == null)
        return "";
      if (typeof M == "function")
        return A(M, ye(M));
      if (typeof M == "string")
        return me(M);
      switch (M) {
        case l:
          return me("Suspense");
        case u:
          return me("SuspenseList");
      }
      if (typeof M == "object")
        switch (M.$$typeof) {
          case c:
            return ne(M.render);
          case f:
            return Pe(M.type, se, xe);
          case p: {
            var Me = M, Ge = Me._payload, nt = Me._init;
            try {
              return Pe(nt(Ge), se, xe);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Oe = {}, T = b.ReactDebugCurrentFrame;
    function B(M) {
      if (M) {
        var se = M._owner, xe = Pe(M.type, M._source, se ? se.type : null);
        T.setExtraStackFrame(xe);
      } else
        T.setExtraStackFrame(null);
    }
    function Y(M, se, xe, Me, Ge) {
      {
        var nt = Function.call.bind(Ie);
        for (var We in M)
          if (nt(M, We)) {
            var ze = void 0;
            try {
              if (typeof M[We] != "function") {
                var jt = Error((Me || "React class") + ": " + xe + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof M[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jt.name = "Invariant Violation", jt;
              }
              ze = M[We](se, We, Me, xe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gt) {
              ze = gt;
            }
            ze && !(ze instanceof Error) && (B(Ge), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", xe, We, typeof ze), B(null)), ze instanceof Error && !(ze.message in Oe) && (Oe[ze.message] = !0, B(Ge), y("Failed %s type: %s", xe, ze.message), B(null));
          }
      }
    }
    var ue = Array.isArray;
    function ce(M) {
      return ue(M);
    }
    function te(M) {
      {
        var se = typeof Symbol == "function" && Symbol.toStringTag, xe = se && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return xe;
      }
    }
    function we(M) {
      try {
        return De(M), !1;
      } catch {
        return !0;
      }
    }
    function De(M) {
      return "" + M;
    }
    function Ke(M) {
      if (we(M))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", te(M)), De(M);
    }
    var et = b.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, Ce, Se;
    Se = {};
    function Be(M) {
      if (Ie.call(M, "ref")) {
        var se = Object.getOwnPropertyDescriptor(M, "ref").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return M.ref !== void 0;
    }
    function Le(M) {
      if (Ie.call(M, "key")) {
        var se = Object.getOwnPropertyDescriptor(M, "key").get;
        if (se && se.isReactWarning)
          return !1;
      }
      return M.key !== void 0;
    }
    function Xe(M, se) {
      if (typeof M.ref == "string" && et.current && se && et.current.stateNode !== se) {
        var xe = K(et.current.type);
        Se[xe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(et.current.type), M.ref), Se[xe] = !0);
      }
    }
    function tt(M, se) {
      {
        var xe = function() {
          Qt || (Qt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(M, "key", {
          get: xe,
          configurable: !0
        });
      }
    }
    function xt(M, se) {
      {
        var xe = function() {
          Ce || (Ce = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", se));
        };
        xe.isReactWarning = !0, Object.defineProperty(M, "ref", {
          get: xe,
          configurable: !0
        });
      }
    }
    var lr = function(M, se, xe, Me, Ge, nt, We) {
      var ze = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: M,
        key: se,
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
        value: Me
      }), Object.defineProperty(ze, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(ze.props), Object.freeze(ze)), ze;
    };
    function an(M, se, xe, Me, Ge) {
      {
        var nt, We = {}, ze = null, jt = null;
        xe !== void 0 && (Ke(xe), ze = "" + xe), Le(se) && (Ke(se.key), ze = "" + se.key), Be(se) && (jt = se.ref, Xe(se, Ge));
        for (nt in se)
          Ie.call(se, nt) && !yt.hasOwnProperty(nt) && (We[nt] = se[nt]);
        if (M && M.defaultProps) {
          var gt = M.defaultProps;
          for (nt in gt)
            We[nt] === void 0 && (We[nt] = gt[nt]);
        }
        if (ze || jt) {
          var wt = typeof M == "function" ? M.displayName || M.name || "Unknown" : M;
          ze && tt(We, wt), jt && xt(We, wt);
        }
        return lr(M, ze, jt, Ge, Me, et.current, We);
      }
    }
    var Nt = b.ReactCurrentOwner, Tn = b.ReactDebugCurrentFrame;
    function Kn(M) {
      if (M) {
        var se = M._owner, xe = Pe(M.type, M._source, se ? se.type : null);
        Tn.setExtraStackFrame(xe);
      } else
        Tn.setExtraStackFrame(null);
    }
    var rl;
    rl = !1;
    function ol(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function hp() {
      {
        if (Nt.current) {
          var M = K(Nt.current.type);
          if (M)
            return `

Check the render method of \`` + M + "`.";
        }
        return "";
      }
    }
    function xw(M) {
      return "";
    }
    var mp = {};
    function ww(M) {
      {
        var se = hp();
        if (!se) {
          var xe = typeof M == "string" ? M : M.displayName || M.name;
          xe && (se = `

Check the top-level render call using <` + xe + ">.");
        }
        return se;
      }
    }
    function vp(M, se) {
      {
        if (!M._store || M._store.validated || M.key != null)
          return;
        M._store.validated = !0;
        var xe = ww(se);
        if (mp[xe])
          return;
        mp[xe] = !0;
        var Me = "";
        M && M._owner && M._owner !== Nt.current && (Me = " It was passed a child from " + K(M._owner.type) + "."), Kn(M), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', xe, Me), Kn(null);
      }
    }
    function gp(M, se) {
      {
        if (typeof M != "object")
          return;
        if (ce(M))
          for (var xe = 0; xe < M.length; xe++) {
            var Me = M[xe];
            ol(Me) && vp(Me, se);
          }
        else if (ol(M))
          M._store && (M._store.validated = !0);
        else if (M) {
          var Ge = g(M);
          if (typeof Ge == "function" && Ge !== M.entries)
            for (var nt = Ge.call(M), We; !(We = nt.next()).done; )
              ol(We.value) && vp(We.value, se);
        }
      }
    }
    function $w(M) {
      {
        var se = M.type;
        if (se == null || typeof se == "string")
          return;
        var xe;
        if (typeof se == "function")
          xe = se.propTypes;
        else if (typeof se == "object" && (se.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        se.$$typeof === f))
          xe = se.propTypes;
        else
          return;
        if (xe) {
          var Me = K(se);
          Y(xe, M.props, "prop", Me, M);
        } else if (se.PropTypes !== void 0 && !rl) {
          rl = !0;
          var Ge = K(se);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof se.getDefaultProps == "function" && !se.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _w(M) {
      {
        for (var se = Object.keys(M.props), xe = 0; xe < se.length; xe++) {
          var Me = se[xe];
          if (Me !== "children" && Me !== "key") {
            Kn(M), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), Kn(null);
            break;
          }
        }
        M.ref !== null && (Kn(M), y("Invalid attribute `ref` supplied to `React.Fragment`."), Kn(null));
      }
    }
    function bp(M, se, xe, Me, Ge, nt) {
      {
        var We = W(M);
        if (!We) {
          var ze = "";
          (M === void 0 || typeof M == "object" && M !== null && Object.keys(M).length === 0) && (ze += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jt = xw();
          jt ? ze += jt : ze += hp();
          var gt;
          M === null ? gt = "null" : ce(M) ? gt = "array" : M !== void 0 && M.$$typeof === t ? (gt = "<" + (K(M.type) || "Unknown") + " />", ze = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof M, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, ze);
        }
        var wt = an(M, se, xe, Ge, nt);
        if (wt == null)
          return wt;
        if (We) {
          var Jt = se.children;
          if (Jt !== void 0)
            if (Me)
              if (ce(Jt)) {
                for (var xo = 0; xo < Jt.length; xo++)
                  gp(Jt[xo], M);
                Object.freeze && Object.freeze(Jt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gp(Jt, M);
        }
        return M === r ? _w(wt) : $w(wt), wt;
      }
    }
    function Cw(M, se, xe) {
      return bp(M, se, xe, !0);
    }
    function Sw(M, se, xe) {
      return bp(M, se, xe, !1);
    }
    var Nw = Sw, Ew = Cw;
    fa.Fragment = r, fa.jsx = Nw, fa.jsxs = Ew;
  }()), fa;
}
process.env.NODE_ENV === "production" ? eu.exports = Ow() : eu.exports = Tw();
var d = eu.exports;
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, j.apply(null, arguments);
}
function jw(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ps(...e) {
  return (t) => e.forEach(
    (n) => jw(n, t)
  );
}
function Ee(...e) {
  return ve(ps(...e), e);
}
const gn = /* @__PURE__ */ F((e, t) => {
  const { children: n, ...r } = e, o = Kr.toArray(n), a = o.find(kw);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? Kr.count(s) > 1 ? Kr.only(null) : /* @__PURE__ */ Ta(s) ? s.props.children : null : c);
    return /* @__PURE__ */ $(tu, j({}, r, {
      ref: t
    }), /* @__PURE__ */ Ta(s) ? /* @__PURE__ */ sc(s, void 0, i) : null);
  }
  return /* @__PURE__ */ $(tu, j({}, r, {
    ref: t
  }), n);
});
gn.displayName = "Slot";
const tu = /* @__PURE__ */ F((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Ta(n) ? /* @__PURE__ */ sc(n, {
    ...Mw(r, n.props),
    ref: t ? ps(t, n.ref) : n.ref
  }) : Kr.count(n) > 1 ? Kr.only(null) : null;
});
tu.displayName = "SlotClone";
const pd = ({ children: e }) => /* @__PURE__ */ $(vn, null, e);
function kw(e) {
  return /* @__PURE__ */ Ta(e) && e.type === pd;
}
function Mw(e, t) {
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
function fv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = fv(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Dw() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = fv(e)) && (r && (r += " "), r += t);
  return r;
}
const $p = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, _p = Dw, Go = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return _p(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], f = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const p = $p(u) || $p(f);
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
  return _p(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function QG(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const JG = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, al = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, eY = (e) => {
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
}, tY = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), nY = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), rY = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), oY = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, gi = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, aY = () => [...sl.DIGITAL, ...sl.MOVILNET, ...sl.MOVISTAR], pa = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function pv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = pv(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function br() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = pv(e)) && (r && (r += " "), r += t);
  return r;
}
const hd = "-";
function Aw(e) {
  const t = Iw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(s) {
    const i = s.split(hd);
    return i[0] === "" && i.length !== 1 && i.shift(), hv(i, t) || Rw(s);
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
function hv(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? hv(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(hd);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}
const Cp = /^\[(.+)\]$/;
function Rw(e) {
  if (Cp.test(e)) {
    const t = Cp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Iw(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Fw(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    nu(s, r, a, t);
  }), r;
}
function nu(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Sp(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Lw(o)) {
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
      nu(s, Sp(t, a), n, r);
    });
  });
}
function Sp(e, t) {
  let n = e;
  return t.split(hd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Lw(e) {
  return e.isThemeGetter;
}
function Fw(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
    return [n, o];
  }) : e;
}
function Bw(e) {
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
const mv = "!";
function Vw(e) {
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
    const f = i.length === 0 ? s : s.substring(l), p = f.startsWith(mv), h = p ? f.substring(1) : f, m = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function zw(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function Ww(e) {
  return {
    cache: Bw(e.cacheSize),
    splitModifiers: Vw(e),
    ...Aw(e)
  };
}
const Uw = /\s+/;
function Hw(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(Uw).map((s) => {
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
    const h = zw(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + mv : h,
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
function Kw() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = vv(t)) && (r && (r += " "), r += n);
  return r;
}
function vv(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = vv(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Gw(e, ...t) {
  let n, r, o, a = s;
  function s(c) {
    const l = t.reduce((u, f) => f(u), e());
    return n = Ww(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const u = Hw(c, n);
    return o(c, u), u;
  }
  return function() {
    return a(Kw.apply(null, arguments));
  };
}
function st(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const gv = /^\[(?:([a-z-]+):)?(.+)\]$/i, Yw = /^\d+\/\d+$/, qw = /* @__PURE__ */ new Set(["px", "full", "screen"]), Zw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Qw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Jw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, e$ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Yn(e) {
  return Ur(e) || qw.has(e) || Yw.test(e);
}
function ur(e) {
  return Yo(e, "length", c$);
}
function Ur(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ls(e) {
  return Yo(e, "number", Ur);
}
function ha(e) {
  return !!e && Number.isInteger(Number(e));
}
function t$(e) {
  return e.endsWith("%") && Ur(e.slice(0, -1));
}
function Re(e) {
  return gv.test(e);
}
function dr(e) {
  return Zw.test(e);
}
const n$ = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function r$(e) {
  return Yo(e, n$, bv);
}
function o$(e) {
  return Yo(e, "position", bv);
}
const a$ = /* @__PURE__ */ new Set(["image", "url"]);
function s$(e) {
  return Yo(e, a$, u$);
}
function i$(e) {
  return Yo(e, "", l$);
}
function ma() {
  return !0;
}
function Yo(e, t, n) {
  const r = gv.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function c$(e) {
  return Xw.test(e) && !Qw.test(e);
}
function bv() {
  return !1;
}
function l$(e) {
  return Jw.test(e);
}
function u$(e) {
  return e$.test(e);
}
function d$() {
  const e = st("colors"), t = st("spacing"), n = st("blur"), r = st("brightness"), o = st("borderColor"), a = st("borderRadius"), s = st("borderSpacing"), i = st("borderWidth"), c = st("contrast"), l = st("grayscale"), u = st("hueRotate"), f = st("invert"), p = st("gap"), h = st("gradientColorStops"), m = st("gradientColorStopPositions"), v = st("inset"), g = st("margin"), b = st("opacity"), y = st("padding"), x = st("saturate"), _ = st("scale"), w = st("sepia"), N = st("skew"), S = st("space"), D = st("translate"), E = () => ["auto", "contain", "none"], W = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", Re, t], z = () => [Re, t], K = () => ["", Yn, ur], L = () => ["auto", Ur, Re], P = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], R = () => ["solid", "dashed", "dotted", "double", "none"], O = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], U = () => ["", "0", Re], Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], oe = () => [Ur, Ls], H = () => [Ur, Re];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ma],
      spacing: [Yn, ur],
      blur: ["none", "", dr, Re],
      brightness: oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dr, Re],
      borderSpacing: z(),
      borderWidth: K(),
      contrast: oe(),
      grayscale: U(),
      hueRotate: H(),
      invert: U(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [t$, ur],
      inset: G(),
      margin: G(),
      opacity: oe(),
      padding: z(),
      saturate: oe(),
      scale: oe(),
      sepia: U(),
      skew: H(),
      space: z(),
      translate: z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Re]
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
        columns: [dr]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Z()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Z()
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
        object: [...P(), Re]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
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
        z: ["auto", ha, Re]
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
        flex: ["1", "auto", "initial", "none", Re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: U()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: U()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ha, Re]
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
          span: ["full", ha, Re]
        }, Re]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
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
          span: [ha, Re]
        }, Re]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", Re]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Re]
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
        justify: ["normal", ...V()]
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
        content: ["normal", ...V(), "baseline"]
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
        "place-content": [...V(), "baseline"]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Re, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Re, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Re, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [dr]
        }, dr]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Re, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Re, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Re, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Re, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", dr, ur]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Re]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ur, Ls]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Yn, Re]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Re]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Re]
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
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Yn, ur]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Yn, Re]
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
        indent: z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Re]
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
        content: ["none", Re]
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
        bg: [...P(), o$]
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
        bg: ["auto", "cover", "contain", r$]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, s$]
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
        border: [...R(), "hidden"]
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
        divide: R()
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
        outline: ["", ...R()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Yn, Re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Yn, ur]
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
        ring: K()
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
        "ring-offset": [Yn, ur]
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
        shadow: ["", "inner", "none", dr, i$]
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
        "mix-blend": [...O(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": O()
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
        "drop-shadow": ["", "none", dr, Re]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Re]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Re]
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
        rotate: [ha, Re]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [D]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [D]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Re]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Re]
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
        "scroll-m": z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": z()
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
        "will-change": ["auto", "scroll", "contents", "transform", Re]
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
        stroke: [Yn, ur, Ls]
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
const f$ = /* @__PURE__ */ Gw(d$);
function k(...e) {
  return f$(br(e));
}
const md = ({ className: e }) => /* @__PURE__ */ d.jsx("div", { className: k(`spinner h-4 w-4 ${e}`) }), yr = Go(
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
        className: k(yr({ variant: r, size: o, className: e })),
        ref: i,
        ...s,
        children: t ? /* @__PURE__ */ d.jsx(md, {}) : n
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
const p$ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), yv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var h$ = {
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
const m$ = F(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, c) => $(
    "svg",
    {
      ref: c,
      ...h$,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: yv("lucide", o),
      ...i
    },
    [
      ...s.map(([l, u]) => $(l, u)),
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
  const n = F(
    ({ className: r, ...o }, a) => $(m$, {
      ref: a,
      iconNode: t,
      className: yv(`lucide-${p$(e)}`, r),
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
const v$ = ot("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g$ = ot("ArrowRight", [
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
const Tr = ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = ot("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
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
const b$ = ot("CircleX", [
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
const y$ = ot("Dot", [
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
const xv = ot("Ellipsis", [
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
const vd = ot("ImagePlus", [
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
const wv = ot("LogOut", [
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
const x$ = ot("PanelLeftClose", [
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
const w$ = ot("PanelLeftOpen", [
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
const $v = ot("PanelLeft", [
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
const _v = ot("SquarePen", [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  ["path", { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" }]
]);
/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = ot("Trash", [
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
const $$ = ot("User", [
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
function He(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Xt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function kt(e, t) {
  const n = He(e);
  return isNaN(t) ? Xt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function bn(e, t) {
  const n = He(e);
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
const gd = 6048e5, _$ = 864e5;
let C$ = {};
function hs() {
  return C$;
}
function Rn(e, t) {
  var i, c, l, u;
  const n = hs(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = He(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Zr(e) {
  return Rn(e, { weekStartsOn: 1 });
}
function Sv(e) {
  const t = He(e), n = t.getFullYear(), r = Xt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Zr(r), a = Xt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = Zr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Ao(e) {
  const t = He(e);
  return t.setHours(0, 0, 0, 0), t;
}
function xi(e) {
  const t = He(e), n = new Date(
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
function kn(e, t) {
  const n = Ao(e), r = Ao(t), o = +n - xi(n), a = +r - xi(r);
  return Math.round((o - a) / _$);
}
function S$(e) {
  const t = Sv(e), n = Xt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Zr(n);
}
function ou(e, t) {
  const n = t * 7;
  return kt(e, n);
}
function N$(e, t) {
  return bn(e, t * 12);
}
function E$(e) {
  let t;
  return e.forEach(function(n) {
    const r = He(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function P$(e) {
  let t;
  return e.forEach((n) => {
    const r = He(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Vt(e, t) {
  const n = Ao(e), r = Ao(t);
  return +n == +r;
}
function bd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function O$(e) {
  if (!bd(e) && typeof e != "number")
    return !1;
  const t = He(e);
  return !isNaN(Number(t));
}
function ka(e, t) {
  const n = He(e), r = He(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function T$(e, t, n) {
  const r = Rn(e, n), o = Rn(t, n), a = +r - xi(r), s = +o - xi(o);
  return Math.round((a - s) / gd);
}
function yd(e) {
  const t = He(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function zt(e) {
  const t = He(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Nv(e) {
  const t = He(e), n = Xt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function xd(e, t) {
  var i, c, l, u;
  const n = hs(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = He(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Ev(e) {
  return xd(e, { weekStartsOn: 1 });
}
const j$ = {
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
}, k$ = (e, t, n) => {
  let r;
  const o = j$[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function cl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const M$ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, D$ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, A$ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, R$ = {
  date: cl({
    formats: M$,
    defaultWidth: "full"
  }),
  time: cl({
    formats: D$,
    defaultWidth: "full"
  }),
  dateTime: cl({
    formats: A$,
    defaultWidth: "full"
  })
}, I$ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, L$ = (e, t, n, r) => I$[e];
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
const F$ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, B$ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, V$ = {
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
}, z$ = {
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
}, W$ = {
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
}, U$ = {
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
}, H$ = (e, t) => {
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
}, K$ = {
  ordinalNumber: H$,
  era: va({
    values: F$,
    defaultWidth: "wide"
  }),
  quarter: va({
    values: B$,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: va({
    values: V$,
    defaultWidth: "wide"
  }),
  day: va({
    values: z$,
    defaultWidth: "wide"
  }),
  dayPeriod: va({
    values: W$,
    defaultWidth: "wide",
    formattingValues: U$,
    defaultFormattingWidth: "wide"
  })
};
function ga(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Y$(i, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      G$(i, (f) => f.test(s))
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
function G$(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Y$(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function q$(e) {
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
const Z$ = /^(\d+)(th|st|nd|rd)?/i, X$ = /\d+/i, Q$ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, J$ = {
  any: [/^b/i, /^(a|c)/i]
}, e_ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, t_ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, n_ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, r_ = {
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
}, o_ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, a_ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, s_ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, i_ = {
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
}, c_ = {
  ordinalNumber: q$({
    matchPattern: Z$,
    parsePattern: X$,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ga({
    matchPatterns: Q$,
    defaultMatchWidth: "wide",
    parsePatterns: J$,
    defaultParseWidth: "any"
  }),
  quarter: ga({
    matchPatterns: e_,
    defaultMatchWidth: "wide",
    parsePatterns: t_,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ga({
    matchPatterns: n_,
    defaultMatchWidth: "wide",
    parsePatterns: r_,
    defaultParseWidth: "any"
  }),
  day: ga({
    matchPatterns: o_,
    defaultMatchWidth: "wide",
    parsePatterns: a_,
    defaultParseWidth: "any"
  }),
  dayPeriod: ga({
    matchPatterns: s_,
    defaultMatchWidth: "any",
    parsePatterns: i_,
    defaultParseWidth: "any"
  })
}, Pv = {
  code: "en-US",
  formatDistance: k$,
  formatLong: R$,
  formatRelative: L$,
  localize: K$,
  match: c_,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function l_(e) {
  const t = He(e);
  return kn(t, Nv(t)) + 1;
}
function Ov(e) {
  const t = He(e), n = +Zr(t) - +S$(t);
  return Math.round(n / gd) + 1;
}
function Tv(e, t) {
  var u, f, p, h;
  const n = He(e), r = n.getFullYear(), o = hs(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Xt(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Rn(s, t), c = Xt(e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = Rn(c, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= l.getTime() ? r : r - 1;
}
function u_(e, t) {
  var i, c, l, u;
  const n = hs(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = Tv(e, t), a = Xt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Rn(a, t);
}
function jv(e, t) {
  const n = He(e), r = +Rn(n, t) - +u_(n, t);
  return Math.round(r / gd) + 1;
}
function Qe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const fr = {
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
}, Ep = {
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
    return fr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Tv(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return Qe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Qe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Sv(e);
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
        return fr.M(e, t);
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
    const o = jv(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Qe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ov(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Qe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : fr.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = l_(e);
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
    return fr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : fr.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : fr.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : fr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return fr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Op(r);
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
        return Op(r);
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
        return "GMT" + Pp(r, ":");
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
        return "GMT" + Pp(r, ":");
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
function Pp(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Qe(a, 2);
}
function Op(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Qe(Math.abs(e) / 60, 2) : Br(e, t);
}
function Br(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Qe(Math.trunc(r / 60), 2), a = Qe(r % 60, 2);
  return n + o + t + a;
}
const Tp = (e, t) => {
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
}, kv = (e, t) => {
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
}, d_ = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Tp(e, t);
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
  return a.replace("{{date}}", Tp(r, t)).replace("{{time}}", kv(o, t));
}, f_ = {
  p: kv,
  P: d_
}, p_ = /^D+$/, h_ = /^Y+$/, m_ = ["D", "DD", "YY", "YYYY"];
function v_(e) {
  return p_.test(e);
}
function g_(e) {
  return h_.test(e);
}
function b_(e, t, n) {
  const r = y_(e, t, n);
  if (console.warn(r), m_.includes(e))
    throw new RangeError(r);
}
function y_(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const x_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, w_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, $_ = /^'([^]*?)'?$/, __ = /''/g, C_ = /[a-zA-Z]/;
function so(e, t, n) {
  var u, f, p, h, m, v, g, b;
  const r = hs(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Pv, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((b = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = He(e);
  if (!O$(i))
    throw new RangeError("Invalid time value");
  let c = t.match(w_).map((y) => {
    const x = y[0];
    if (x === "p" || x === "P") {
      const _ = f_[x];
      return _(y, o.formatLong);
    }
    return y;
  }).join("").match(x_).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const x = y[0];
    if (x === "'")
      return { isToken: !1, value: S_(y) };
    if (Ep[x])
      return { isToken: !0, value: y };
    if (x.match(C_))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && g_(x) || !(n != null && n.useAdditionalDayOfYearTokens) && v_(x)) && b_(x, t, String(e));
    const _ = Ep[x[0]];
    return _(i, x, o.localize, l);
  }).join("");
}
function S_(e) {
  const t = e.match($_);
  return t ? t[1].replace(__, "'") : e;
}
function N_(e) {
  const t = He(e), n = t.getFullYear(), r = t.getMonth(), o = Xt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function E_(e) {
  return Math.trunc(+He(e) / 1e3);
}
function P_(e) {
  const t = He(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function O_(e, t) {
  return T$(
    P_(e),
    zt(e),
    t
  ) + 1;
}
function au(e, t) {
  const n = He(e), r = He(t);
  return n.getTime() > r.getTime();
}
function Mv(e, t) {
  const n = He(e), r = He(t);
  return +n < +r;
}
function wd(e, t) {
  const n = He(e), r = He(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function T_(e, t) {
  const n = He(e), r = He(t);
  return n.getFullYear() === r.getFullYear();
}
function ll(e, t) {
  return kt(e, -t);
}
function ul(e, t) {
  const n = He(e), r = n.getFullYear(), o = n.getDate(), a = Xt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = N_(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function jp(e, t) {
  const n = He(e);
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
function j_(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Dv(e, t, n) {
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
var k_ = {
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
function M_(e, t) {
  return so(e, "LLLL y", t);
}
function D_(e, t) {
  return so(e, "d", t);
}
function A_(e, t) {
  return so(e, "LLLL", t);
}
function R_(e) {
  return "".concat(e);
}
function I_(e, t) {
  return so(e, "cccccc", t);
}
function L_(e, t) {
  return so(e, "yyyy", t);
}
var F_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: M_,
  formatDay: D_,
  formatMonthCaption: A_,
  formatWeekNumber: R_,
  formatWeekdayName: I_,
  formatYearCaption: L_
}), B_ = function(e, t, n) {
  return so(e, "do MMMM (EEEE)", n);
}, V_ = function() {
  return "Month: ";
}, z_ = function() {
  return "Go to next month";
}, W_ = function() {
  return "Go to previous month";
}, U_ = function(e, t) {
  return so(e, "cccc", t);
}, H_ = function(e) {
  return "Week n. ".concat(e);
}, K_ = function() {
  return "Year: ";
}, G_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: B_,
  labelMonthDropdown: V_,
  labelNext: z_,
  labelPrevious: W_,
  labelWeekNumber: H_,
  labelWeekday: U_,
  labelYearDropdown: K_
});
function Y_() {
  var e = "buttons", t = k_, n = Pv, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: F_,
    labels: G_,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function q_(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = zt(r) : t && (a = new Date(t, 0, 1)), o ? s = yd(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Ao(a) : void 0,
    toDate: s ? Ao(s) : void 0
  };
}
var Av = Wt(void 0);
function Z_(e) {
  var t, n = e.initialProps, r = Y_(), o = q_(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (dc(n) || ms(n) || vs(n)) && (c = n.onSelect);
  var l = je(je(je({}, r), n), { captionLayout: i, classNames: je(je({}, r.classNames), n.classNames), components: je({}, n.components), formatters: je(je({}, r.formatters), n.formatters), fromDate: a, labels: je(je({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: je(je({}, r.modifiers), n.modifiers), modifiersClassNames: je(je({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: je(je({}, r.styles), n.styles), toDate: s });
  return d.jsx(Av.Provider, { value: l, children: e.children });
}
function at() {
  var e = lt(Av);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Rv(e) {
  var t = at(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return d.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function X_(e) {
  return d.jsx("svg", je({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: d.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Iv(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = at(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : X_;
  return d.jsxs("div", { className: i, style: c, children: [d.jsx("span", { className: l.classNames.vhidden, children: e["aria-label"] }), d.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r, children: a }), d.jsxs("div", { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true", children: [s, d.jsx(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })] })] });
}
function Q_(e) {
  var t, n = at(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return d.jsx(d.Fragment, {});
  if (!o)
    return d.jsx(d.Fragment, {});
  var f = [];
  if (T_(r, o))
    for (var p = zt(r), h = r.getMonth(); h <= o.getMonth(); h++)
      f.push(ul(p, h));
  else
    for (var p = zt(/* @__PURE__ */ new Date()), h = 0; h <= 11; h++)
      f.push(ul(p, h));
  var m = function(g) {
    var b = Number(g.target.value), y = ul(zt(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Iv;
  return d.jsx(v, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: f.map(function(g) {
    return d.jsx("option", { value: g.getMonth(), children: i(g, { locale: s }) }, g.getMonth());
  }) });
}
function J_(e) {
  var t, n = e.displayMonth, r = at(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return d.jsx(d.Fragment, {});
  if (!a)
    return d.jsx(d.Fragment, {});
  for (var h = o.getFullYear(), m = a.getFullYear(), v = h; v <= m; v++)
    p.push(jp(Nv(/* @__PURE__ */ new Date()), v));
  var g = function(y) {
    var x = jp(zt(n), Number(y.target.value));
    e.onChange(x);
  }, b = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : Iv;
  return d.jsx(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }), children: p.map(function(y) {
    return d.jsx("option", { value: y.getFullYear(), children: u(y, { locale: s }) }, y.getFullYear());
  }) });
}
function e2(e, t) {
  var n = X(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function t2(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && ka(a, o) < 0) {
    var l = -1 * (c - 1);
    o = bn(a, l);
  }
  return s && ka(o, s) < 0 && (o = s), zt(o);
}
function n2() {
  var e = at(), t = t2(e), n = e2(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = zt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function r2(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = zt(e), a = zt(bn(o, r)), s = ka(a, o), i = [], c = 0; c < s; c++) {
    var l = bn(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function o2(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, s);
    var c = ka(n, e);
    if (!(c < a))
      return bn(i, s);
  }
}
function a2(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = zt(e);
    if (!n)
      return bn(i, -s);
    var c = ka(i, n);
    if (!(c <= 0))
      return bn(i, -s);
  }
}
var Lv = Wt(void 0);
function s2(e) {
  var t = at(), n = n2(), r = n[0], o = n[1], a = r2(r, t), s = o2(r, t), i = a2(r, t), c = function(f) {
    return a.some(function(p) {
      return wd(f, p);
    });
  }, l = function(f, p) {
    c(f) || (p && Mv(f, p) ? o(bn(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return d.jsx(Lv.Provider, { value: u, children: e.children });
}
function gs() {
  var e = lt(Lv);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function kp(e) {
  var t, n = at(), r = n.classNames, o = n.styles, a = n.components, s = gs().goToMonth, i = function(u) {
    s(bn(u, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Rv, l = d.jsx(c, { id: e.id, displayMonth: e.displayMonth });
  return d.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [d.jsx("div", { className: r.vhidden, children: l }), d.jsx(Q_, { onChange: i, displayMonth: e.displayMonth }), d.jsx(J_, { onChange: i, displayMonth: e.displayMonth })] });
}
function i2(e) {
  return d.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function c2(e) {
  return d.jsx("svg", je({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: d.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var wi = F(function(e, t) {
  var n = at(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = je(je({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), d.jsx("button", je({}, e, { ref: t, type: "button", className: s, style: i }));
});
function l2(e) {
  var t, n, r = at(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return d.jsx(d.Fragment, {});
  var p = l(e.previousMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), m = u(e.nextMonth, { locale: a }), v = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : c2, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : i2;
  return d.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && d.jsx(wi, { name: "previous-month", "aria-label": p, className: h, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? d.jsx(g, { className: s.nav_icon, style: i.nav_icon }) : d.jsx(b, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && d.jsx(wi, { name: "next-month", "aria-label": m, className: v, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? d.jsx(b, { className: s.nav_icon, style: i.nav_icon }) : d.jsx(g, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function Mp(e) {
  var t = at().numberOfMonths, n = gs(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(m) {
    return wd(e.displayMonth, m);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), f = t > 1 && (l || !c), p = function() {
    r && a(r);
  }, h = function() {
    o && a(o);
  };
  return d.jsx(l2, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: h });
}
function u2(e) {
  var t, n = at(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : Rv, l;
  return o ? l = d.jsx(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = d.jsx(kp, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = d.jsxs(d.Fragment, { children: [d.jsx(kp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), d.jsx(Mp, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : l = d.jsxs(d.Fragment, { children: [d.jsx(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(Mp, { displayMonth: e.displayMonth, id: e.id })] }), d.jsx("div", { className: r.caption, style: a.caption, children: l });
}
function d2(e) {
  var t = at(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? d.jsx("tfoot", { className: o, style: r.tfoot, children: d.jsx("tr", { children: d.jsx("td", { colSpan: 8, children: n }) }) }) : d.jsx(d.Fragment, {});
}
function f2(e, t, n) {
  for (var r = n ? Zr(/* @__PURE__ */ new Date()) : Rn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = kt(r, a);
    o.push(s);
  }
  return o;
}
function p2() {
  var e = at(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = f2(o, a, s);
  return d.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && d.jsx("td", { style: n.head_cell, className: t.head_cell }), l.map(function(u, f) {
    return d.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }), children: i(u, { locale: o }) }, f);
  })] });
}
function h2() {
  var e, t = at(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : p2;
  return d.jsx("thead", { style: r.head, className: n.head, children: d.jsx(a, {}) });
}
function m2(e) {
  var t = at(), n = t.locale, r = t.formatters.formatDay;
  return d.jsx(d.Fragment, { children: r(e.date, { locale: n }) });
}
var $d = Wt(void 0);
function v2(e) {
  if (!ms(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return d.jsx($d.Provider, { value: t, children: e.children });
  }
  return d.jsx(g2, { initialProps: e.initialProps, children: e.children });
}
function g2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, f) {
    var p, h;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, l, u, f);
    var m = !!(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!m) {
      var v = !!(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!v) {
        var g = r ? Dv([], r) : [];
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
  return d.jsx($d.Provider, { value: c, children: n });
}
function _d() {
  var e = lt($d);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function b2(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Vt(o, e) && Vt(r, e) ? void 0 : Vt(o, e) ? { from: o, to: void 0 } : Vt(r, e) ? void 0 : au(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? au(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Mv(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Cd = Wt(void 0);
function y2(e) {
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
    return d.jsx(Cd.Provider, { value: t, children: e.children });
  }
  return d.jsx(x2, { initialProps: e.initialProps, children: e.children });
}
function x2(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(h, m, v) {
    var g, b;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, h, m, v);
    var y = b2(h, r);
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
    before: kt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: kt(a, i - 1)
  }), !a && s && u.disabled.push({
    after: ll(s, i - 1),
    before: kt(s, i - 1)
  })), c) {
    if (a && !s && (u.disabled.push({
      before: kt(a, -c + 1)
    }), u.disabled.push({
      after: kt(a, c - 1)
    })), a && s) {
      var f = kn(s, a) + 1, p = c - f;
      u.disabled.push({
        before: ll(a, p)
      }), u.disabled.push({
        after: kt(s, p)
      });
    }
    !a && s && (u.disabled.push({
      before: kt(s, -c + 1)
    }), u.disabled.push({
      after: kt(s, c - 1)
    }));
  }
  return d.jsx(Cd.Provider, { value: { selected: r, onDayClick: l, modifiers: u }, children: n });
}
function Sd() {
  var e = lt(Cd);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ii(e) {
  return Array.isArray(e) ? Dv([], e) : e !== void 0 ? [e] : [];
}
function w2(e) {
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
var $2 = yn.Selected, qn = yn.Disabled, _2 = yn.Hidden, C2 = yn.Today, dl = yn.RangeEnd, fl = yn.RangeMiddle, pl = yn.RangeStart, S2 = yn.Outside;
function N2(e, t, n) {
  var r, o = (r = {}, r[$2] = ii(e.selected), r[qn] = ii(e.disabled), r[_2] = ii(e.hidden), r[C2] = [e.today], r[dl] = [], r[fl] = [], r[pl] = [], r[S2] = [], r);
  return e.fromDate && o[qn].push({ before: e.fromDate }), e.toDate && o[qn].push({ after: e.toDate }), ms(e) ? o[qn] = o[qn].concat(t.modifiers[qn]) : vs(e) && (o[qn] = o[qn].concat(n.modifiers[qn]), o[pl] = n.modifiers[pl], o[fl] = n.modifiers[fl], o[dl] = n.modifiers[dl]), o;
}
var Fv = Wt(void 0);
function E2(e) {
  var t = at(), n = _d(), r = Sd(), o = N2(t, n, r), a = w2(t.modifiers), s = je(je({}, o), a);
  return d.jsx(Fv.Provider, { value: s, children: e.children });
}
function Bv() {
  var e = lt(Fv);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function P2(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function O2(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function T2(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function j2(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function k2(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function M2(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = kn(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = kn(e, r) >= 0 && kn(o, e) >= 0;
    return s;
  }
  return o ? Vt(o, e) : r ? Vt(r, e) : !1;
}
function D2(e) {
  return bd(e);
}
function A2(e) {
  return Array.isArray(e) && e.every(bd);
}
function R2(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (D2(n))
      return Vt(e, n);
    if (A2(n))
      return n.includes(e);
    if (O2(n))
      return M2(e, n);
    if (k2(n))
      return n.dayOfWeek.includes(e.getDay());
    if (P2(n)) {
      var r = kn(n.before, e), o = kn(n.after, e), a = r > 0, s = o < 0, i = au(n.before, n.after);
      return i ? s && a : a || s;
    }
    return T2(n) ? kn(e, n.after) > 0 : j2(n) ? kn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Nd(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return R2(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !wd(e, n) && (o.outside = !0), o;
}
function I2(e, t) {
  for (var n = zt(e[0]), r = yd(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = Nd(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = kt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = kt(s, 1);
  }
  return a || o;
}
var L2 = 365;
function Vv(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, f = o.locale, p = {
    day: kt,
    week: ou,
    month: bn,
    year: N$,
    startOfWeek: function(g) {
      return o.ISOWeek ? Zr(g) : Rn(g, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Ev(g) : xd(g, { locale: f, weekStartsOn: c });
    }
  }, h = p[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? h = E$([l, h]) : r === "after" && u && (h = P$([u, h]));
  var m = !0;
  if (a) {
    var v = Nd(h, a);
    m = !v.disabled && !v.hidden;
  }
  return m ? h : i.count > L2 ? i.lastFocused : Vv(h, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: je(je({}, i), { count: i.count + 1 })
  });
}
var zv = Wt(void 0);
function F2(e) {
  var t = gs(), n = Bv(), r = X(), o = r[0], a = r[1], s = X(), i = s[0], c = s[1], l = I2(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, f = function() {
    c(o), a(void 0);
  }, p = function(g) {
    a(g);
  }, h = at(), m = function(g, b) {
    if (o) {
      var y = Vv(o, {
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
  return d.jsx(zv.Provider, { value: v, children: e.children });
}
function Ed() {
  var e = lt(zv);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function B2(e, t) {
  var n = Bv(), r = Nd(e, n, t);
  return r;
}
var Pd = Wt(void 0);
function V2(e) {
  if (!dc(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return d.jsx(Pd.Provider, { value: t, children: e.children });
  }
  return d.jsx(z2, { initialProps: e.initialProps, children: e.children });
}
function z2(e) {
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
  return d.jsx(Pd.Provider, { value: o, children: n });
}
function Wv() {
  var e = lt(Pd);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function W2(e, t) {
  var n = at(), r = Wv(), o = _d(), a = Sd(), s = Ed(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, f = s.blur, p = s.focus, h = s.focusMonthBefore, m = s.focusMonthAfter, v = s.focusYearBefore, g = s.focusYearAfter, b = s.focusStartOfWeek, y = s.focusEndOfWeek, x = function(O) {
    var V, U, Z, oe;
    dc(n) ? (V = r.onDayClick) === null || V === void 0 || V.call(r, e, t, O) : ms(n) ? (U = o.onDayClick) === null || U === void 0 || U.call(o, e, t, O) : vs(n) ? (Z = a.onDayClick) === null || Z === void 0 || Z.call(a, e, t, O) : (oe = n.onDayClick) === null || oe === void 0 || oe.call(n, e, t, O);
  }, _ = function(O) {
    var V;
    p(e), (V = n.onDayFocus) === null || V === void 0 || V.call(n, e, t, O);
  }, w = function(O) {
    var V;
    f(), (V = n.onDayBlur) === null || V === void 0 || V.call(n, e, t, O);
  }, N = function(O) {
    var V;
    (V = n.onDayMouseEnter) === null || V === void 0 || V.call(n, e, t, O);
  }, S = function(O) {
    var V;
    (V = n.onDayMouseLeave) === null || V === void 0 || V.call(n, e, t, O);
  }, D = function(O) {
    var V;
    (V = n.onDayPointerEnter) === null || V === void 0 || V.call(n, e, t, O);
  }, E = function(O) {
    var V;
    (V = n.onDayPointerLeave) === null || V === void 0 || V.call(n, e, t, O);
  }, W = function(O) {
    var V;
    (V = n.onDayTouchCancel) === null || V === void 0 || V.call(n, e, t, O);
  }, G = function(O) {
    var V;
    (V = n.onDayTouchEnd) === null || V === void 0 || V.call(n, e, t, O);
  }, z = function(O) {
    var V;
    (V = n.onDayTouchMove) === null || V === void 0 || V.call(n, e, t, O);
  }, K = function(O) {
    var V;
    (V = n.onDayTouchStart) === null || V === void 0 || V.call(n, e, t, O);
  }, L = function(O) {
    var V;
    (V = n.onDayKeyUp) === null || V === void 0 || V.call(n, e, t, O);
  }, P = function(O) {
    var V;
    switch (O.key) {
      case "ArrowLeft":
        O.preventDefault(), O.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        O.preventDefault(), O.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        O.preventDefault(), O.stopPropagation(), l();
        break;
      case "ArrowUp":
        O.preventDefault(), O.stopPropagation(), u();
        break;
      case "PageUp":
        O.preventDefault(), O.stopPropagation(), O.shiftKey ? v() : h();
        break;
      case "PageDown":
        O.preventDefault(), O.stopPropagation(), O.shiftKey ? g() : m();
        break;
      case "Home":
        O.preventDefault(), O.stopPropagation(), b();
        break;
      case "End":
        O.preventDefault(), O.stopPropagation(), y();
        break;
    }
    (V = n.onDayKeyDown) === null || V === void 0 || V.call(n, e, t, O);
  }, R = {
    onClick: x,
    onFocus: _,
    onBlur: w,
    onKeyDown: P,
    onKeyUp: L,
    onMouseEnter: N,
    onMouseLeave: S,
    onPointerEnter: D,
    onPointerLeave: E,
    onTouchCancel: W,
    onTouchEnd: G,
    onTouchMove: z,
    onTouchStart: K
  };
  return R;
}
function U2() {
  var e = at(), t = Wv(), n = _d(), r = Sd(), o = dc(e) ? t.selected : ms(e) ? n.selected : vs(e) ? r.selected : void 0;
  return o;
}
function H2(e) {
  return Object.values(yn).includes(e);
}
function K2(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (H2(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function G2(e, t) {
  var n = je({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = je(je({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Y2(e, t, n) {
  var r, o, a, s = at(), i = Ed(), c = B2(e, t), l = W2(e, c), u = U2(), f = !!(s.onDayClick || s.mode !== "default");
  J(function() {
    var N;
    c.outside || i.focusedDay && f && Vt(i.focusedDay, e) && ((N = n.current) === null || N === void 0 || N.focus());
  }, [
    i.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = K2(s, c).join(" "), h = G2(s, c), m = !!(c.outside && !s.showOutsideDays || c.hidden), v = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : m2, g = d.jsx(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: h,
    className: p,
    children: g,
    role: "gridcell"
  }, y = i.focusTarget && Vt(i.focusTarget, e) && !c.outside, x = i.focusedDay && Vt(i.focusedDay, e), _ = je(je(je({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = x || y ? 0 : -1, r)), l), w = {
    isButton: f,
    isHidden: m,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: b
  };
  return w;
}
function q2(e) {
  var t = q(null), n = Y2(e.date, e.displayMonth, t);
  return n.isHidden ? d.jsx("div", { role: "gridcell" }) : n.isButton ? d.jsx(wi, je({ name: "day", ref: t }, n.buttonProps)) : d.jsx("div", je({}, n.divProps));
}
function Z2(e) {
  var t = e.number, n = e.dates, r = at(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return d.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: u });
  var f = c(Number(t), { locale: i }), p = function(h) {
    o(t, n, h);
  };
  return d.jsx(wi, { name: "week-number", "aria-label": f, className: s.weeknumber, style: a.weeknumber, onClick: p, children: u });
}
function X2(e) {
  var t, n, r = at(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : q2, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : Z2, u;
  return s && (u = d.jsx("td", { className: a.cell, style: o.cell, children: d.jsx(l, { number: e.weekNumber, dates: e.dates }) })), d.jsxs("tr", { className: a.row, style: o.row, children: [u, e.dates.map(function(f) {
    return d.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: d.jsx(c, { displayMonth: e.displayMonth, date: f }) }, E_(f));
  })] });
}
function Dp(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Ev(t) : xd(t, n), o = n != null && n.ISOWeek ? Zr(e) : Rn(e, n), a = kn(r, o), s = [], i = 0; i <= a; i++)
    s.push(kt(o, i));
  var c = s.reduce(function(l, u) {
    var f = n != null && n.ISOWeek ? Ov(u) : jv(u, n), p = l.find(function(h) {
      return h.weekNumber === f;
    });
    return p ? (p.dates.push(u), l) : (l.push({
      weekNumber: f,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Q2(e, t) {
  var n = Dp(zt(e), yd(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = O_(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = ou(a, 6 - r), i = Dp(ou(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function J2(e) {
  var t, n, r, o = at(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, h = o.ISOWeek, m = Q2(e.displayMonth, {
    useFixedWeeks: !!l,
    ISOWeek: h,
    locale: a,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : h2, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : X2, b = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : d2;
  return d.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && d.jsx(v, {}), d.jsx("tbody", { className: s.tbody, style: i.tbody, children: m.map(function(y) {
    return d.jsx(g, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), d.jsx(b, { displayMonth: e.displayMonth })] });
}
function eC() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var tC = eC() ? fs : J, hl = !1, nC = 0;
function Ap() {
  return "react-day-picker-".concat(++nC);
}
function rC(e) {
  var t, n = e ?? (hl ? Ap() : null), r = X(n), o = r[0], a = r[1];
  return tC(function() {
    o === null && a(Ap());
  }, []), J(function() {
    hl === !1 && (hl = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function oC(e) {
  var t, n, r = at(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = gs().displayMonths, l = rC(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [a.month], p = s.month, h = e.displayIndex === 0, m = e.displayIndex === c.length - 1, v = !h && !m;
  o === "rtl" && (t = [h, m], m = t[0], h = t[1]), h && (f.push(a.caption_start), p = je(je({}, p), s.caption_start)), m && (f.push(a.caption_end), p = je(je({}, p), s.caption_end)), v && (f.push(a.caption_between), p = je(je({}, p), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : u2;
  return d.jsxs("div", { className: f.join(" "), style: p, children: [d.jsx(g, { id: l, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), d.jsx(J2, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function aC(e) {
  var t = at(), n = t.classNames, r = t.styles;
  return d.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function sC(e) {
  var t, n, r = e.initialProps, o = at(), a = Ed(), s = gs(), i = X(!1), c = i[0], l = i[1];
  J(function() {
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
  }, {}), h = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : aC;
  return d.jsx("div", je({ className: u.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: d.jsx(h, { children: s.displayMonths.map(function(m, v) {
    return d.jsx(oC, { displayIndex: v, displayMonth: m }, v);
  }) }) }));
}
function iC(e) {
  var t = e.children, n = j_(e, ["children"]);
  return d.jsx(Z_, { initialProps: n, children: d.jsx(s2, { children: d.jsx(V2, { initialProps: n, children: d.jsx(v2, { initialProps: n, children: d.jsx(y2, { initialProps: n, children: d.jsx(E2, { children: d.jsx(F2, { children: t }) }) }) }) }) }) });
}
function cC(e) {
  return d.jsx(iC, je({}, e, { children: d.jsx(sC, { initialProps: e }) }));
}
function lC({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ d.jsx(
    cC,
    {
      showOutsideDays: n,
      className: k("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: k(
          yr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: k(
          yr({ variant: "ghost" }),
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
        IconRight: ({ ...o }) => /* @__PURE__ */ d.jsx(Tr, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
lC.displayName = "Calendar";
function uC(e, t) {
  const n = /* @__PURE__ */ Wt(t);
  function r(a) {
    const { children: s, ...i } = a, c = Zt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ $(n.Provider, {
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
      return /* @__PURE__ */ $(v.Provider, {
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
    dC(o, ...t)
  ];
}
function dC(...e) {
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
  const t = q(e);
  return J(() => {
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
}, fC = [
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
], de = fC.reduce((e, t) => {
  const n = /* @__PURE__ */ F((r, o) => {
    const { asChild: a, ...s } = r, i = a ? gn : t;
    return J(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ $(i, j({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function $i(e, t) {
  e && uv(
    () => e.dispatchEvent(t)
  );
}
const Uv = "Avatar", [pC, sY] = ut(Uv), [hC, Hv] = pC(Uv), mC = /* @__PURE__ */ F((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = X("idle");
  return /* @__PURE__ */ $(hC, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ $(de.span, j({}, r, {
    ref: t
  })));
}), vC = "AvatarImage", gC = /* @__PURE__ */ F((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = Hv(vC, n), i = xC(r), c = Je((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return St(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ $(de.img, j({}, a, {
    ref: t,
    src: r
  })) : null;
}), bC = "AvatarFallback", yC = /* @__PURE__ */ F((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Hv(bC, n), [s, i] = X(r === void 0);
  return J(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ $(de.span, j({}, o, {
    ref: t
  })) : null;
});
function xC(e) {
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
const Kv = mC, Gv = gC, Yv = yC, To = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Kv,
  {
    ref: n,
    className: k(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
To.displayName = Kv.displayName;
const Gr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Gv,
  {
    ref: n,
    className: k("aspect-square h-full w-full", e),
    ...t
  }
));
Gr.displayName = Gv.displayName;
const jo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Yv,
  {
    ref: n,
    className: k(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
jo.displayName = Yv.displayName;
const wC = Go(
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
  return /* @__PURE__ */ d.jsx("div", { className: k(wC({ variant: t }), e), ...n });
}
var $C = Array.isArray, Sn = $C, _C = typeof mt == "object" && mt && mt.Object === Object && mt, qv = _C, CC = qv, SC = typeof self == "object" && self && self.Object === Object && self, NC = CC || SC || Function("return this")(), Vn = NC, EC = Vn, PC = EC.Symbol, bs = PC, Rp = bs, Zv = Object.prototype, OC = Zv.hasOwnProperty, TC = Zv.toString, ba = Rp ? Rp.toStringTag : void 0;
function jC(e) {
  var t = OC.call(e, ba), n = e[ba];
  try {
    e[ba] = void 0;
    var r = !0;
  } catch {
  }
  var o = TC.call(e);
  return r && (t ? e[ba] = n : delete e[ba]), o;
}
var kC = jC, MC = Object.prototype, DC = MC.toString;
function AC(e) {
  return DC.call(e);
}
var RC = AC, Ip = bs, IC = kC, LC = RC, FC = "[object Null]", BC = "[object Undefined]", Lp = Ip ? Ip.toStringTag : void 0;
function VC(e) {
  return e == null ? e === void 0 ? BC : FC : Lp && Lp in Object(e) ? IC(e) : LC(e);
}
var io = VC;
function zC(e) {
  return e != null && typeof e == "object";
}
var co = zC, WC = io, UC = co, HC = "[object Symbol]";
function KC(e) {
  return typeof e == "symbol" || UC(e) && WC(e) == HC;
}
var ys = KC, GC = Sn, YC = ys, qC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ZC = /^\w*$/;
function XC(e, t) {
  if (GC(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || YC(e) ? !0 : ZC.test(e) || !qC.test(e) || t != null && e in Object(t);
}
var Od = XC;
function QC(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var jr = QC;
const Xv = /* @__PURE__ */ Cn(jr);
var JC = io, eS = jr, tS = "[object AsyncFunction]", nS = "[object Function]", rS = "[object GeneratorFunction]", oS = "[object Proxy]";
function aS(e) {
  if (!eS(e))
    return !1;
  var t = JC(e);
  return t == nS || t == rS || t == tS || t == oS;
}
var Td = aS;
const _i = /* @__PURE__ */ Cn(Td);
var sS = Vn, iS = sS["__core-js_shared__"], cS = iS, ml = cS, Fp = function() {
  var e = /[^.]+$/.exec(ml && ml.keys && ml.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function lS(e) {
  return !!Fp && Fp in e;
}
var uS = lS, dS = Function.prototype, fS = dS.toString;
function pS(e) {
  if (e != null) {
    try {
      return fS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qv = pS, hS = Td, mS = uS, vS = jr, gS = Qv, bS = /[\\^$.*+?()[\]{}|]/g, yS = /^\[object .+?Constructor\]$/, xS = Function.prototype, wS = Object.prototype, $S = xS.toString, _S = wS.hasOwnProperty, CS = RegExp(
  "^" + $S.call(_S).replace(bS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function SS(e) {
  if (!vS(e) || mS(e))
    return !1;
  var t = hS(e) ? CS : yS;
  return t.test(gS(e));
}
var NS = SS;
function ES(e, t) {
  return e == null ? void 0 : e[t];
}
var PS = ES, OS = NS, TS = PS;
function jS(e, t) {
  var n = TS(e, t);
  return OS(n) ? n : void 0;
}
var lo = jS, kS = lo, MS = kS(Object, "create"), fc = MS, Bp = fc;
function DS() {
  this.__data__ = Bp ? Bp(null) : {}, this.size = 0;
}
var AS = DS;
function RS(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var IS = RS, LS = fc, FS = "__lodash_hash_undefined__", BS = Object.prototype, VS = BS.hasOwnProperty;
function zS(e) {
  var t = this.__data__;
  if (LS) {
    var n = t[e];
    return n === FS ? void 0 : n;
  }
  return VS.call(t, e) ? t[e] : void 0;
}
var WS = zS, US = fc, HS = Object.prototype, KS = HS.hasOwnProperty;
function GS(e) {
  var t = this.__data__;
  return US ? t[e] !== void 0 : KS.call(t, e);
}
var YS = GS, qS = fc, ZS = "__lodash_hash_undefined__";
function XS(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = qS && t === void 0 ? ZS : t, this;
}
var QS = XS, JS = AS, eN = IS, tN = WS, nN = YS, rN = QS;
function qo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qo.prototype.clear = JS;
qo.prototype.delete = eN;
qo.prototype.get = tN;
qo.prototype.has = nN;
qo.prototype.set = rN;
var oN = qo;
function aN() {
  this.__data__ = [], this.size = 0;
}
var sN = aN;
function iN(e, t) {
  return e === t || e !== e && t !== t;
}
var jd = iN, cN = jd;
function lN(e, t) {
  for (var n = e.length; n--; )
    if (cN(e[n][0], t))
      return n;
  return -1;
}
var pc = lN, uN = pc, dN = Array.prototype, fN = dN.splice;
function pN(e) {
  var t = this.__data__, n = uN(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : fN.call(t, n, 1), --this.size, !0;
}
var hN = pN, mN = pc;
function vN(e) {
  var t = this.__data__, n = mN(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var gN = vN, bN = pc;
function yN(e) {
  return bN(this.__data__, e) > -1;
}
var xN = yN, wN = pc;
function $N(e, t) {
  var n = this.__data__, r = wN(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var _N = $N, CN = sN, SN = hN, NN = gN, EN = xN, PN = _N;
function Zo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Zo.prototype.clear = CN;
Zo.prototype.delete = SN;
Zo.prototype.get = NN;
Zo.prototype.has = EN;
Zo.prototype.set = PN;
var hc = Zo, ON = lo, TN = Vn, jN = ON(TN, "Map"), kd = jN, Vp = oN, kN = hc, MN = kd;
function DN() {
  this.size = 0, this.__data__ = {
    hash: new Vp(),
    map: new (MN || kN)(),
    string: new Vp()
  };
}
var AN = DN;
function RN(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var IN = RN, LN = IN;
function FN(e, t) {
  var n = e.__data__;
  return LN(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var mc = FN, BN = mc;
function VN(e) {
  var t = BN(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var zN = VN, WN = mc;
function UN(e) {
  return WN(this, e).get(e);
}
var HN = UN, KN = mc;
function GN(e) {
  return KN(this, e).has(e);
}
var YN = GN, qN = mc;
function ZN(e, t) {
  var n = qN(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var XN = ZN, QN = AN, JN = zN, eE = HN, tE = YN, nE = XN;
function Xo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Xo.prototype.clear = QN;
Xo.prototype.delete = JN;
Xo.prototype.get = eE;
Xo.prototype.has = tE;
Xo.prototype.set = nE;
var Md = Xo, Jv = Md, rE = "Expected a function";
function Dd(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(rE);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Dd.Cache || Jv)(), n;
}
Dd.Cache = Jv;
var oE = Dd, aE = oE, sE = 500;
function iE(e) {
  var t = aE(e, function(r) {
    return n.size === sE && n.clear(), r;
  }), n = t.cache;
  return t;
}
var cE = iE, lE = cE, uE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dE = /\\(\\)?/g, fE = lE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(uE, function(n, r, o, a) {
    t.push(o ? a.replace(dE, "$1") : r || n);
  }), t;
}), pE = fE;
function hE(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var eg = hE, zp = bs, mE = eg, vE = Sn, gE = ys, bE = 1 / 0, Wp = zp ? zp.prototype : void 0, Up = Wp ? Wp.toString : void 0;
function tg(e) {
  if (typeof e == "string")
    return e;
  if (vE(e))
    return mE(e, tg) + "";
  if (gE(e))
    return Up ? Up.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -bE ? "-0" : t;
}
var yE = tg, xE = yE;
function wE(e) {
  return e == null ? "" : xE(e);
}
var ng = wE, $E = Sn, _E = Od, CE = pE, SE = ng;
function NE(e, t) {
  return $E(e) ? e : _E(e, t) ? [e] : CE(SE(e));
}
var rg = NE, EE = ys, PE = 1 / 0;
function OE(e) {
  if (typeof e == "string" || EE(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -PE ? "-0" : t;
}
var vc = OE, TE = rg, jE = vc;
function kE(e, t) {
  t = TE(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[jE(t[n++])];
  return n && n == r ? e : void 0;
}
var Ad = kE, ME = Ad;
function DE(e, t, n) {
  var r = e == null ? void 0 : ME(e, t);
  return r === void 0 ? n : r;
}
var AE = DE;
function RE(e) {
  return e == null;
}
var IE = RE;
const LE = /* @__PURE__ */ Cn(IE);
var FE = io, BE = Sn, VE = co, zE = "[object String]";
function WE(e) {
  return typeof e == "string" || !BE(e) && VE(e) && FE(e) == zE;
}
var UE = WE;
const og = /* @__PURE__ */ Cn(UE);
var su = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hp;
function HE() {
  if (Hp)
    return Ye;
  Hp = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var N = w.$$typeof;
      switch (N) {
        case t:
          switch (w = w.type, w) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case f:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case u:
                case m:
                case h:
                case s:
                  return w;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function _(w) {
    return x(w) === l;
  }
  return Ye.AsyncMode = c, Ye.ConcurrentMode = l, Ye.ContextConsumer = i, Ye.ContextProvider = s, Ye.Element = t, Ye.ForwardRef = u, Ye.Fragment = r, Ye.Lazy = m, Ye.Memo = h, Ye.Portal = n, Ye.Profiler = a, Ye.StrictMode = o, Ye.Suspense = f, Ye.isAsyncMode = function(w) {
    return _(w) || x(w) === c;
  }, Ye.isConcurrentMode = _, Ye.isContextConsumer = function(w) {
    return x(w) === i;
  }, Ye.isContextProvider = function(w) {
    return x(w) === s;
  }, Ye.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ye.isForwardRef = function(w) {
    return x(w) === u;
  }, Ye.isFragment = function(w) {
    return x(w) === r;
  }, Ye.isLazy = function(w) {
    return x(w) === m;
  }, Ye.isMemo = function(w) {
    return x(w) === h;
  }, Ye.isPortal = function(w) {
    return x(w) === n;
  }, Ye.isProfiler = function(w) {
    return x(w) === a;
  }, Ye.isStrictMode = function(w) {
    return x(w) === o;
  }, Ye.isSuspense = function(w) {
    return x(w) === f;
  }, Ye.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === f || w === p || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === h || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === v);
  }, Ye.typeOf = x, Ye;
}
var qe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kp;
function KE() {
  return Kp || (Kp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function x(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === l || A === a || A === o || A === f || A === p || typeof A == "object" && A !== null && (A.$$typeof === m || A.$$typeof === h || A.$$typeof === s || A.$$typeof === i || A.$$typeof === u || A.$$typeof === g || A.$$typeof === b || A.$$typeof === y || A.$$typeof === v);
    }
    function _(A) {
      if (typeof A == "object" && A !== null) {
        var ne = A.$$typeof;
        switch (ne) {
          case t:
            var ye = A.type;
            switch (ye) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case f:
                return ye;
              default:
                var Pe = ye && ye.$$typeof;
                switch (Pe) {
                  case i:
                  case u:
                  case m:
                  case h:
                  case s:
                    return Pe;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var w = c, N = l, S = i, D = s, E = t, W = u, G = r, z = m, K = h, L = n, P = a, R = o, O = f, V = !1;
    function U(A) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(A) || _(A) === c;
    }
    function Z(A) {
      return _(A) === l;
    }
    function oe(A) {
      return _(A) === i;
    }
    function H(A) {
      return _(A) === s;
    }
    function le(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function be(A) {
      return _(A) === u;
    }
    function pe(A) {
      return _(A) === r;
    }
    function ee(A) {
      return _(A) === m;
    }
    function re(A) {
      return _(A) === h;
    }
    function me(A) {
      return _(A) === n;
    }
    function _e(A) {
      return _(A) === a;
    }
    function ae(A) {
      return _(A) === o;
    }
    function fe(A) {
      return _(A) === f;
    }
    qe.AsyncMode = w, qe.ConcurrentMode = N, qe.ContextConsumer = S, qe.ContextProvider = D, qe.Element = E, qe.ForwardRef = W, qe.Fragment = G, qe.Lazy = z, qe.Memo = K, qe.Portal = L, qe.Profiler = P, qe.StrictMode = R, qe.Suspense = O, qe.isAsyncMode = U, qe.isConcurrentMode = Z, qe.isContextConsumer = oe, qe.isContextProvider = H, qe.isElement = le, qe.isForwardRef = be, qe.isFragment = pe, qe.isLazy = ee, qe.isMemo = re, qe.isPortal = me, qe.isProfiler = _e, qe.isStrictMode = ae, qe.isSuspense = fe, qe.isValidElementType = x, qe.typeOf = _;
  }()), qe;
}
process.env.NODE_ENV === "production" ? su.exports = HE() : su.exports = KE();
var Gp = su.exports, GE = io, YE = co, qE = "[object Number]";
function ZE(e) {
  return typeof e == "number" || YE(e) && GE(e) == qE;
}
var ag = ZE;
const XE = /* @__PURE__ */ Cn(ag);
var QE = ag;
function JE(e) {
  return QE(e) && e != +e;
}
var eP = JE;
const tP = /* @__PURE__ */ Cn(eP);
var Bs = function(t) {
  return og(t) && t.indexOf("%") === t.length - 1;
}, cn = function(t) {
  return XE(t) && !tP(t);
}, Ci = function(t) {
  return cn(t) || og(t);
};
function iu(e) {
  "@babel/helpers - typeof";
  return iu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, iu(e);
}
var nP = ["viewBox", "children"], rP = [
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
], Yp = ["points", "pathLength"], vl = {
  svg: nP,
  polygon: Yp,
  polyline: Yp
}, sg = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], oP = function(t, n, r) {
  return function(o) {
    return t(n, r, o), null;
  };
}, aP = function(t, n, r) {
  if (!Xv(t) || iu(t) !== "object")
    return null;
  var o = null;
  return Object.keys(t).forEach(function(a) {
    var s = t[a];
    sg.includes(a) && typeof s == "function" && (o || (o = {}), o[a] = oP(s, n, r));
  }), o;
}, sP = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, iP = function(t, n, r, o) {
  var a, s = (a = vl == null ? void 0 : vl[o]) !== null && a !== void 0 ? a : [];
  return !_i(t) && (o && s.includes(n) || rP.includes(n)) || sg.includes(n);
}, ig = function(t, n, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var o = t;
  if (/* @__PURE__ */ Ta(t) && (o = t.props), !Xv(o))
    return null;
  var a = {};
  return Object.keys(o).forEach(function(s) {
    var i;
    iP((i = o) === null || i === void 0 ? void 0 : i[s], s, n, r) && (a[s] = o[s]);
  }), a;
}, cP = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function cu() {
  return cu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cu.apply(this, arguments);
}
function lP(e, t) {
  if (e == null)
    return {};
  var n = uP(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function uP(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function dP(e) {
  var t = e.children, n = e.width, r = e.height, o = e.viewBox, a = e.className, s = e.style, i = e.title, c = e.desc, l = lP(e, cP), u = o || {
    width: n,
    height: r,
    x: 0,
    y: 0
  }, f = br("recharts-surface", a);
  return /* @__PURE__ */ I.createElement("svg", cu({}, ig(l, !0, "svg"), {
    className: f,
    width: n,
    height: r,
    style: s,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height)
  }), /* @__PURE__ */ I.createElement("title", null, i), /* @__PURE__ */ I.createElement("desc", null, c), t);
}
var fP = process.env.NODE_ENV !== "production", ci = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  if (fP && typeof console < "u" && console.warn && (n === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (n === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      console.warn(n.replace(/%s/g, function() {
        return o[s++];
      }));
    }
};
function pP(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
var hP = pP, mP = hP;
function vP(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : mP(e, t, n);
}
var gP = vP, bP = "\\ud800-\\udfff", yP = "\\u0300-\\u036f", xP = "\\ufe20-\\ufe2f", wP = "\\u20d0-\\u20ff", $P = yP + xP + wP, _P = "\\ufe0e\\ufe0f", CP = "\\u200d", SP = RegExp("[" + CP + bP + $P + _P + "]");
function NP(e) {
  return SP.test(e);
}
var cg = NP;
function EP(e) {
  return e.split("");
}
var PP = EP, lg = "\\ud800-\\udfff", OP = "\\u0300-\\u036f", TP = "\\ufe20-\\ufe2f", jP = "\\u20d0-\\u20ff", kP = OP + TP + jP, MP = "\\ufe0e\\ufe0f", DP = "[" + lg + "]", lu = "[" + kP + "]", uu = "\\ud83c[\\udffb-\\udfff]", AP = "(?:" + lu + "|" + uu + ")", ug = "[^" + lg + "]", dg = "(?:\\ud83c[\\udde6-\\uddff]){2}", fg = "[\\ud800-\\udbff][\\udc00-\\udfff]", RP = "\\u200d", pg = AP + "?", hg = "[" + MP + "]?", IP = "(?:" + RP + "(?:" + [ug, dg, fg].join("|") + ")" + hg + pg + ")*", LP = hg + pg + IP, FP = "(?:" + [ug + lu + "?", lu, dg, fg, DP].join("|") + ")", BP = RegExp(uu + "(?=" + uu + ")|" + FP + LP, "g");
function VP(e) {
  return e.match(BP) || [];
}
var zP = VP, WP = PP, UP = cg, HP = zP;
function KP(e) {
  return UP(e) ? HP(e) : WP(e);
}
var GP = KP, YP = gP, qP = cg, ZP = GP, XP = ng;
function QP(e) {
  return function(t) {
    t = XP(t);
    var n = qP(t) ? ZP(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? YP(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var JP = QP, eO = JP, tO = eO("toUpperCase"), nO = tO;
const mg = /* @__PURE__ */ Cn(nO);
function Vs(e) {
  return function() {
    return e;
  };
}
const vg = Math.cos, Si = Math.sin, Nn = Math.sqrt, Ni = Math.PI, gc = 2 * Ni, du = Math.PI, fu = 2 * du, Vr = 1e-6, rO = fu - Vr;
function gg(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function oO(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return gg;
  const n = 10 ** t;
  return function(r) {
    this._ += r[0];
    for (let o = 1, a = r.length; o < a; ++o)
      this._ += Math.round(arguments[o] * n) / n + r[o];
  };
}
class aO {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? gg : oO(t);
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
        let h = r - s, m = o - i, v = c * c + l * l, g = h * h + m * m, b = Math.sqrt(v), y = Math.sqrt(p), x = a * Math.tan((du - Math.acos((v + p - g) / (2 * b * y))) / 2), _ = x / y, w = x / b;
        Math.abs(_ - 1) > Vr && this._append`L${t + _ * u},${n + _ * f}`, this._append`A${a},${a},0,0,${+(f * h > u * m)},${this._x1 = t + w * c},${this._y1 = n + w * l}`;
      }
  }
  arc(t, n, r, o, a, s) {
    if (t = +t, n = +n, r = +r, s = !!s, r < 0)
      throw new Error(`negative radius: ${r}`);
    let i = r * Math.cos(o), c = r * Math.sin(o), l = t + i, u = n + c, f = 1 ^ s, p = s ? o - a : a - o;
    this._x1 === null ? this._append`M${l},${u}` : (Math.abs(this._x1 - l) > Vr || Math.abs(this._y1 - u) > Vr) && this._append`L${l},${u}`, r && (p < 0 && (p = p % fu + fu), p > rO ? this._append`A${r},${r},0,1,${f},${t - i},${n - c}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = u}` : p > Vr && this._append`A${r},${r},0,${+(p >= du)},${f},${this._x1 = t + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(t, n, r, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+o}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function sO(e) {
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
  }, () => new aO(t);
}
const Rd = {
  draw(e, t) {
    const n = Nn(t / Ni);
    e.moveTo(n, 0), e.arc(0, 0, n, 0, gc);
  }
}, iO = {
  draw(e, t) {
    const n = Nn(t / 5) / 2;
    e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
  }
}, bg = Nn(1 / 3), cO = bg * 2, lO = {
  draw(e, t) {
    const n = Nn(t / cO), r = n * bg;
    e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
  }
}, uO = {
  draw(e, t) {
    const n = Nn(t), r = -n / 2;
    e.rect(r, r, n, n);
  }
}, dO = 0.8908130915292852, yg = Si(Ni / 10) / Si(7 * Ni / 10), fO = Si(gc / 10) * yg, pO = -vg(gc / 10) * yg, hO = {
  draw(e, t) {
    const n = Nn(t * dO), r = fO * n, o = pO * n;
    e.moveTo(0, -n), e.lineTo(r, o);
    for (let a = 1; a < 5; ++a) {
      const s = gc * a / 5, i = vg(s), c = Si(s);
      e.lineTo(c * n, -i * n), e.lineTo(i * r - c * o, c * r + i * o);
    }
    e.closePath();
  }
}, gl = Nn(3), mO = {
  draw(e, t) {
    const n = -Nn(t / (gl * 3));
    e.moveTo(0, n * 2), e.lineTo(-gl * n, -n), e.lineTo(gl * n, -n), e.closePath();
  }
}, en = -0.5, tn = Nn(3) / 2, pu = 1 / Nn(12), vO = (pu / 2 + 1) * 3, gO = {
  draw(e, t) {
    const n = Nn(t / vO), r = n / 2, o = n * pu, a = r, s = n * pu + n, i = -a, c = s;
    e.moveTo(r, o), e.lineTo(a, s), e.lineTo(i, c), e.lineTo(en * r - tn * o, tn * r + en * o), e.lineTo(en * a - tn * s, tn * a + en * s), e.lineTo(en * i - tn * c, tn * i + en * c), e.lineTo(en * r + tn * o, en * o - tn * r), e.lineTo(en * a + tn * s, en * s - tn * a), e.lineTo(en * i + tn * c, en * c - tn * i), e.closePath();
  }
};
function bO(e, t) {
  let n = null, r = sO(o);
  e = typeof e == "function" ? e : Vs(e || Rd), t = typeof t == "function" ? t : Vs(t === void 0 ? 64 : +t);
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
function Ma(e) {
  "@babel/helpers - typeof";
  return Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ma(e);
}
var yO = ["type", "size", "sizeType"];
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
function Zp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qp(Object(n), !0).forEach(function(r) {
      xO(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xO(e, t, n) {
  return t = wO(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wO(e) {
  var t = $O(e, "string");
  return Ma(t) == "symbol" ? t : String(t);
}
function $O(e, t) {
  if (Ma(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ma(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _O(e, t) {
  if (e == null)
    return {};
  var n = CO(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function CO(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var xg = {
  symbolCircle: Rd,
  symbolCross: iO,
  symbolDiamond: lO,
  symbolSquare: uO,
  symbolStar: hO,
  symbolTriangle: mO,
  symbolWye: gO
}, SO = Math.PI / 180, NO = function(t) {
  var n = "symbol".concat(mg(t));
  return xg[n] || Rd;
}, EO = function(t, n, r) {
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
      var o = 18 * SO;
      return 1.25 * t * t * (Math.tan(o) - Math.tan(o * 2) * Math.pow(Math.tan(o), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, PO = function(t, n) {
  xg["symbol".concat(mg(t))] = n;
}, wg = function(t) {
  var n = t.type, r = n === void 0 ? "circle" : n, o = t.size, a = o === void 0 ? 64 : o, s = t.sizeType, i = s === void 0 ? "area" : s, c = _O(t, yO), l = Zp(Zp({}, c), {}, {
    type: r,
    size: a,
    sizeType: i
  }), u = function() {
    var g = NO(r), b = bO().type(g).size(EO(a, i, r));
    return b();
  }, f = l.className, p = l.cx, h = l.cy, m = ig(l, !0);
  return p === +p && h === +h && a === +a ? /* @__PURE__ */ I.createElement("path", hu({}, m, {
    className: br("recharts-symbols", f),
    transform: "translate(".concat(p, ", ").concat(h, ")"),
    d: u()
  })) : null;
};
wg.registerSymbol = PO;
function Ro(e) {
  "@babel/helpers - typeof";
  return Ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ro(e);
}
function mu() {
  return mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mu.apply(this, arguments);
}
function Xp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function OO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xp(Object(n), !0).forEach(function(r) {
      Da(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function TO(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jO(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _g(r.key), r);
  }
}
function kO(e, t, n) {
  return t && jO(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MO(e, t, n) {
  return t = Ei(t), DO(e, $g() ? Reflect.construct(t, n || [], Ei(e).constructor) : t.apply(e, n));
}
function DO(e, t) {
  if (t && (Ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AO(e);
}
function AO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $g() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($g = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ei(e);
}
function RO(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vu(e, t);
}
function vu(e, t) {
  return vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, vu(e, t);
}
function Da(e, t, n) {
  return t = _g(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _g(e) {
  var t = IO(e, "string");
  return Ro(t) == "symbol" ? t : String(t);
}
function IO(e, t) {
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
var nn = 32, Id = /* @__PURE__ */ function(e) {
  RO(t, e);
  function t() {
    return TO(this, t), MO(this, t, arguments);
  }
  return kO(t, [{
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
          return /* @__PURE__ */ I.createElement("line", {
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
          return /* @__PURE__ */ I.createElement("path", {
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
          return /* @__PURE__ */ I.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(nn / 8, "h").concat(nn, "v").concat(nn * 3 / 4, "h").concat(-nn, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ I.isValidElement(r.legendIcon)) {
          var l = OO({}, r);
          return delete l.legendIcon, /* @__PURE__ */ I.cloneElement(r.legendIcon, l);
        }
        return /* @__PURE__ */ I.createElement(wg, {
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
        var v = h.formatter || c, g = br(Da(Da({
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
        return /* @__PURE__ */ I.createElement("li", mu({
          className: g,
          style: f,
          key: "legend-item-".concat(m)
        }, aP(r.props, h, m)), /* @__PURE__ */ I.createElement(dP, {
          width: s,
          height: s,
          viewBox: u,
          style: p
        }, r.renderIcon(h)), /* @__PURE__ */ I.createElement("span", {
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
      return /* @__PURE__ */ I.createElement("ul", {
        className: "recharts-default-legend",
        style: i
      }, this.renderItems());
    }
  }]), t;
}(ic);
Da(Id, "displayName", "Legend");
Da(Id, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var LO = hc;
function FO() {
  this.__data__ = new LO(), this.size = 0;
}
var BO = FO;
function VO(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
var zO = VO;
function WO(e) {
  return this.__data__.get(e);
}
var UO = WO;
function HO(e) {
  return this.__data__.has(e);
}
var KO = HO, GO = hc, YO = kd, qO = Md, ZO = 200;
function XO(e, t) {
  var n = this.__data__;
  if (n instanceof GO) {
    var r = n.__data__;
    if (!YO || r.length < ZO - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new qO(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var QO = XO, JO = hc, eT = BO, tT = zO, nT = UO, rT = KO, oT = QO;
function Qo(e) {
  var t = this.__data__ = new JO(e);
  this.size = t.size;
}
Qo.prototype.clear = eT;
Qo.prototype.delete = tT;
Qo.prototype.get = nT;
Qo.prototype.has = rT;
Qo.prototype.set = oT;
var Cg = Qo, aT = "__lodash_hash_undefined__";
function sT(e) {
  return this.__data__.set(e, aT), this;
}
var iT = sT;
function cT(e) {
  return this.__data__.has(e);
}
var lT = cT, uT = Md, dT = iT, fT = lT;
function Pi(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new uT(); ++t < n; )
    this.add(e[t]);
}
Pi.prototype.add = Pi.prototype.push = dT;
Pi.prototype.has = fT;
var Sg = Pi;
function pT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
var hT = pT;
function mT(e, t) {
  return e.has(t);
}
var Ng = mT, vT = Sg, gT = hT, bT = Ng, yT = 1, xT = 2;
function wT(e, t, n, r, o, a) {
  var s = n & yT, i = e.length, c = t.length;
  if (i != c && !(s && c > i))
    return !1;
  var l = a.get(e), u = a.get(t);
  if (l && u)
    return l == t && u == e;
  var f = -1, p = !0, h = n & xT ? new vT() : void 0;
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
      if (!gT(t, function(b, y) {
        if (!bT(h, y) && (m === b || o(m, b, n, r, a)))
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
var Eg = wT, $T = Vn, _T = $T.Uint8Array, CT = _T;
function ST(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
var NT = ST;
function ET(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Ld = ET, Qp = bs, Jp = CT, PT = jd, OT = Eg, TT = NT, jT = Ld, kT = 1, MT = 2, DT = "[object Boolean]", AT = "[object Date]", RT = "[object Error]", IT = "[object Map]", LT = "[object Number]", FT = "[object RegExp]", BT = "[object Set]", VT = "[object String]", zT = "[object Symbol]", WT = "[object ArrayBuffer]", UT = "[object DataView]", eh = Qp ? Qp.prototype : void 0, bl = eh ? eh.valueOf : void 0;
function HT(e, t, n, r, o, a, s) {
  switch (n) {
    case UT:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case WT:
      return !(e.byteLength != t.byteLength || !a(new Jp(e), new Jp(t)));
    case DT:
    case AT:
    case LT:
      return PT(+e, +t);
    case RT:
      return e.name == t.name && e.message == t.message;
    case FT:
    case VT:
      return e == t + "";
    case IT:
      var i = TT;
    case BT:
      var c = r & kT;
      if (i || (i = jT), e.size != t.size && !c)
        return !1;
      var l = s.get(e);
      if (l)
        return l == t;
      r |= MT, s.set(e, t);
      var u = OT(i(e), i(t), r, o, a, s);
      return s.delete(e), u;
    case zT:
      if (bl)
        return bl.call(e) == bl.call(t);
  }
  return !1;
}
var KT = HT;
function GT(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Pg = GT, YT = Pg, qT = Sn;
function ZT(e, t, n) {
  var r = t(e);
  return qT(e) ? r : YT(r, n(e));
}
var XT = ZT;
function QT(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
var JT = QT;
function ej() {
  return [];
}
var tj = ej, nj = JT, rj = tj, oj = Object.prototype, aj = oj.propertyIsEnumerable, th = Object.getOwnPropertySymbols, sj = th ? function(e) {
  return e == null ? [] : (e = Object(e), nj(th(e), function(t) {
    return aj.call(e, t);
  }));
} : rj, ij = sj;
function cj(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var lj = cj, uj = io, dj = co, fj = "[object Arguments]";
function pj(e) {
  return dj(e) && uj(e) == fj;
}
var hj = pj, nh = hj, mj = co, Og = Object.prototype, vj = Og.hasOwnProperty, gj = Og.propertyIsEnumerable, bj = nh(/* @__PURE__ */ function() {
  return arguments;
}()) ? nh : function(e) {
  return mj(e) && vj.call(e, "callee") && !gj.call(e, "callee");
}, Fd = bj, Oi = { exports: {} };
function yj() {
  return !1;
}
var xj = yj;
Oi.exports;
(function(e, t) {
  var n = Vn, r = xj, o = t && !t.nodeType && t, a = o && !0 && e && !e.nodeType && e, s = a && a.exports === o, i = s ? n.Buffer : void 0, c = i ? i.isBuffer : void 0, l = c || r;
  e.exports = l;
})(Oi, Oi.exports);
var Tg = Oi.exports, wj = 9007199254740991, $j = /^(?:0|[1-9]\d*)$/;
function _j(e, t) {
  var n = typeof e;
  return t = t ?? wj, !!t && (n == "number" || n != "symbol" && $j.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Bd = _j, Cj = 9007199254740991;
function Sj(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Cj;
}
var Vd = Sj, Nj = io, Ej = Vd, Pj = co, Oj = "[object Arguments]", Tj = "[object Array]", jj = "[object Boolean]", kj = "[object Date]", Mj = "[object Error]", Dj = "[object Function]", Aj = "[object Map]", Rj = "[object Number]", Ij = "[object Object]", Lj = "[object RegExp]", Fj = "[object Set]", Bj = "[object String]", Vj = "[object WeakMap]", zj = "[object ArrayBuffer]", Wj = "[object DataView]", Uj = "[object Float32Array]", Hj = "[object Float64Array]", Kj = "[object Int8Array]", Gj = "[object Int16Array]", Yj = "[object Int32Array]", qj = "[object Uint8Array]", Zj = "[object Uint8ClampedArray]", Xj = "[object Uint16Array]", Qj = "[object Uint32Array]", ct = {};
ct[Uj] = ct[Hj] = ct[Kj] = ct[Gj] = ct[Yj] = ct[qj] = ct[Zj] = ct[Xj] = ct[Qj] = !0;
ct[Oj] = ct[Tj] = ct[zj] = ct[jj] = ct[Wj] = ct[kj] = ct[Mj] = ct[Dj] = ct[Aj] = ct[Rj] = ct[Ij] = ct[Lj] = ct[Fj] = ct[Bj] = ct[Vj] = !1;
function Jj(e) {
  return Pj(e) && Ej(e.length) && !!ct[Nj(e)];
}
var e5 = Jj;
function t5(e) {
  return function(t) {
    return e(t);
  };
}
var jg = t5, Ti = { exports: {} };
Ti.exports;
(function(e, t) {
  var n = qv, r = t && !t.nodeType && t, o = r && !0 && e && !e.nodeType && e, a = o && o.exports === r, s = a && n.process, i = function() {
    try {
      var c = o && o.require && o.require("util").types;
      return c || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = i;
})(Ti, Ti.exports);
var n5 = Ti.exports, r5 = e5, o5 = jg, rh = n5, oh = rh && rh.isTypedArray, a5 = oh ? o5(oh) : r5, kg = a5, s5 = lj, i5 = Fd, c5 = Sn, l5 = Tg, u5 = Bd, d5 = kg, f5 = Object.prototype, p5 = f5.hasOwnProperty;
function h5(e, t) {
  var n = c5(e), r = !n && i5(e), o = !n && !r && l5(e), a = !n && !r && !o && d5(e), s = n || r || o || a, i = s ? s5(e.length, String) : [], c = i.length;
  for (var l in e)
    (t || p5.call(e, l)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    u5(l, c))) && i.push(l);
  return i;
}
var m5 = h5, v5 = Object.prototype;
function g5(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || v5;
  return e === n;
}
var b5 = g5;
function y5(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var x5 = y5, w5 = x5, $5 = w5(Object.keys, Object), _5 = $5, C5 = b5, S5 = _5, N5 = Object.prototype, E5 = N5.hasOwnProperty;
function P5(e) {
  if (!C5(e))
    return S5(e);
  var t = [];
  for (var n in Object(e))
    E5.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var O5 = P5, T5 = Td, j5 = Vd;
function k5(e) {
  return e != null && j5(e.length) && !T5(e);
}
var bc = k5, M5 = m5, D5 = O5, A5 = bc;
function R5(e) {
  return A5(e) ? M5(e) : D5(e);
}
var zd = R5, I5 = XT, L5 = ij, F5 = zd;
function B5(e) {
  return I5(e, F5, L5);
}
var V5 = B5, ah = V5, z5 = 1, W5 = Object.prototype, U5 = W5.hasOwnProperty;
function H5(e, t, n, r, o, a) {
  var s = n & z5, i = ah(e), c = i.length, l = ah(t), u = l.length;
  if (c != u && !s)
    return !1;
  for (var f = c; f--; ) {
    var p = i[f];
    if (!(s ? p in t : U5.call(t, p)))
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
    var _ = e.constructor, w = t.constructor;
    _ != w && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof w == "function" && w instanceof w) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var K5 = H5, G5 = lo, Y5 = Vn, q5 = G5(Y5, "DataView"), Z5 = q5, X5 = lo, Q5 = Vn, J5 = X5(Q5, "Promise"), ek = J5, tk = lo, nk = Vn, rk = tk(nk, "Set"), Mg = rk, ok = lo, ak = Vn, sk = ok(ak, "WeakMap"), ik = sk, gu = Z5, bu = kd, yu = ek, xu = Mg, wu = ik, Dg = io, Jo = Qv, sh = "[object Map]", ck = "[object Object]", ih = "[object Promise]", ch = "[object Set]", lh = "[object WeakMap]", uh = "[object DataView]", lk = Jo(gu), uk = Jo(bu), dk = Jo(yu), fk = Jo(xu), pk = Jo(wu), zr = Dg;
(gu && zr(new gu(new ArrayBuffer(1))) != uh || bu && zr(new bu()) != sh || yu && zr(yu.resolve()) != ih || xu && zr(new xu()) != ch || wu && zr(new wu()) != lh) && (zr = function(e) {
  var t = Dg(e), n = t == ck ? e.constructor : void 0, r = n ? Jo(n) : "";
  if (r)
    switch (r) {
      case lk:
        return uh;
      case uk:
        return sh;
      case dk:
        return ih;
      case fk:
        return ch;
      case pk:
        return lh;
    }
  return t;
});
var hk = zr, yl = Cg, mk = Eg, vk = KT, gk = K5, dh = hk, fh = Sn, ph = Tg, bk = kg, yk = 1, hh = "[object Arguments]", mh = "[object Array]", zs = "[object Object]", xk = Object.prototype, vh = xk.hasOwnProperty;
function wk(e, t, n, r, o, a) {
  var s = fh(e), i = fh(t), c = s ? mh : dh(e), l = i ? mh : dh(t);
  c = c == hh ? zs : c, l = l == hh ? zs : l;
  var u = c == zs, f = l == zs, p = c == l;
  if (p && ph(e)) {
    if (!ph(t))
      return !1;
    s = !0, u = !1;
  }
  if (p && !u)
    return a || (a = new yl()), s || bk(e) ? mk(e, t, n, r, o, a) : vk(e, t, c, n, r, o, a);
  if (!(n & yk)) {
    var h = u && vh.call(e, "__wrapped__"), m = f && vh.call(t, "__wrapped__");
    if (h || m) {
      var v = h ? e.value() : e, g = m ? t.value() : t;
      return a || (a = new yl()), o(v, g, n, r, a);
    }
  }
  return p ? (a || (a = new yl()), gk(e, t, n, r, o, a)) : !1;
}
var $k = wk, _k = $k, gh = co;
function Ag(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !gh(e) && !gh(t) ? e !== e && t !== t : _k(e, t, n, r, Ag, o);
}
var Rg = Ag, Ck = Cg, Sk = Rg, Nk = 1, Ek = 2;
function Pk(e, t, n, r) {
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
      var f = new Ck();
      if (r)
        var p = r(l, u, c, e, t, f);
      if (!(p === void 0 ? Sk(u, l, Nk | Ek, r, f) : p))
        return !1;
    }
  }
  return !0;
}
var Ok = Pk, Tk = jr;
function jk(e) {
  return e === e && !Tk(e);
}
var Ig = jk, kk = Ig, Mk = zd;
function Dk(e) {
  for (var t = Mk(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, kk(o)];
  }
  return t;
}
var Ak = Dk;
function Rk(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var Lg = Rk, Ik = Ok, Lk = Ak, Fk = Lg;
function Bk(e) {
  var t = Lk(e);
  return t.length == 1 && t[0][2] ? Fk(t[0][0], t[0][1]) : function(n) {
    return n === e || Ik(n, e, t);
  };
}
var Vk = Bk;
function zk(e, t) {
  return e != null && t in Object(e);
}
var Wk = zk, Uk = rg, Hk = Fd, Kk = Sn, Gk = Bd, Yk = Vd, qk = vc;
function Zk(e, t, n) {
  t = Uk(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = qk(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Yk(o) && Gk(s, o) && (Kk(e) || Hk(e)));
}
var Xk = Zk, Qk = Wk, Jk = Xk;
function eM(e, t) {
  return e != null && Jk(e, t, Qk);
}
var tM = eM, nM = Rg, rM = AE, oM = tM, aM = Od, sM = Ig, iM = Lg, cM = vc, lM = 1, uM = 2;
function dM(e, t) {
  return aM(e) && sM(t) ? iM(cM(e), t) : function(n) {
    var r = rM(n, e);
    return r === void 0 && r === t ? oM(n, e) : nM(t, r, lM | uM);
  };
}
var fM = dM;
function pM(e) {
  return e;
}
var yc = pM;
function hM(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var mM = hM, vM = Ad;
function gM(e) {
  return function(t) {
    return vM(t, e);
  };
}
var bM = gM, yM = mM, xM = bM, wM = Od, $M = vc;
function _M(e) {
  return wM(e) ? yM($M(e)) : xM(e);
}
var CM = _M, SM = Vk, NM = fM, EM = yc, PM = Sn, OM = CM;
function TM(e) {
  return typeof e == "function" ? e : e == null ? EM : typeof e == "object" ? PM(e) ? NM(e[0], e[1]) : SM(e) : OM(e);
}
var Fg = TM;
function jM(e, t, n, r) {
  for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var kM = jM;
function MM(e) {
  return e !== e;
}
var DM = MM;
function AM(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
var RM = AM, IM = kM, LM = DM, FM = RM;
function BM(e, t, n) {
  return t === t ? FM(e, t, n) : IM(e, LM, n);
}
var VM = BM, zM = VM;
function WM(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && zM(e, t, 0) > -1;
}
var UM = WM;
function HM(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r]))
      return !0;
  return !1;
}
var KM = HM;
function GM() {
}
var YM = GM, xl = Mg, qM = YM, ZM = Ld, XM = 1 / 0, QM = xl && 1 / ZM(new xl([, -0]))[1] == XM ? function(e) {
  return new xl(e);
} : qM, JM = QM, e3 = Sg, t3 = UM, n3 = KM, r3 = Ng, o3 = JM, a3 = Ld, s3 = 200;
function i3(e, t, n) {
  var r = -1, o = t3, a = e.length, s = !0, i = [], c = i;
  if (n)
    s = !1, o = n3;
  else if (a >= s3) {
    var l = t ? null : o3(e);
    if (l)
      return a3(l);
    s = !1, o = r3, c = new e3();
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
var c3 = i3, l3 = Fg, u3 = c3;
function d3(e, t) {
  return e && e.length ? u3(e, l3(t)) : [];
}
var f3 = d3;
const bh = /* @__PURE__ */ Cn(f3);
function Bg(e, t, n) {
  return t === !0 ? bh(e, n) : _i(t) ? bh(e, t) : e;
}
function Io(e) {
  "@babel/helpers - typeof";
  return Io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Io(e);
}
var p3 = ["ref"];
function yh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yh(Object(n), !0).forEach(function(r) {
      xc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function h3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wg(r.key), r);
  }
}
function m3(e, t, n) {
  return t && xh(e.prototype, t), n && xh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function v3(e, t, n) {
  return t = ji(t), g3(e, Vg() ? Reflect.construct(t, n || [], ji(e).constructor) : t.apply(e, n));
}
function g3(e, t) {
  if (t && (Io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zg(e);
}
function Vg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vg = function() {
    return !!e;
  })();
}
function ji(e) {
  return ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ji(e);
}
function zg(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function b3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $u(e, t);
}
function $u(e, t) {
  return $u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, $u(e, t);
}
function xc(e, t, n) {
  return t = Wg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wg(e) {
  var t = y3(e, "string");
  return Io(t) == "symbol" ? t : String(t);
}
function y3(e, t) {
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
function x3(e, t) {
  if (e == null)
    return {};
  var n = w3(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function w3(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function $3(e) {
  return e.value;
}
function _3(e, t) {
  if (/* @__PURE__ */ I.isValidElement(e))
    return /* @__PURE__ */ I.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ I.createElement(e, t);
  t.ref;
  var n = x3(t, p3);
  return /* @__PURE__ */ I.createElement(Id, n);
}
var wh = 1, Wd = /* @__PURE__ */ function(e) {
  b3(t, e);
  function t() {
    var n;
    h3(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = v3(this, t, [].concat(o)), xc(zg(n), "lastBoundingBox", {
      width: -1,
      height: -1
    }), n;
  }
  return m3(t, [{
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
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > wh || Math.abs(o.height - this.lastBoundingBox.height) > wh) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, r && r(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, r && r(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Lr({}, this.lastBoundingBox) : {
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
      return Lr(Lr({}, f), p);
    }
  }, {
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.content, s = o.width, i = o.height, c = o.wrapperStyle, l = o.payloadUniqBy, u = o.payload, f = Lr(Lr({
        position: "absolute",
        width: s || "auto",
        height: i || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ I.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          r.wrapperNode = h;
        }
      }, _3(a, Lr(Lr({}, this.props), {}, {
        payload: Bg(u, l, $3)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(r, o) {
      var a = r.props.layout;
      return a === "vertical" && cn(r.props.height) ? {
        height: r.props.height
      } : a === "horizontal" ? {
        width: r.props.width || o
      } : null;
    }
  }]), t;
}(ic);
xc(Wd, "displayName", "Legend");
xc(Wd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var $h = bs, C3 = Fd, S3 = Sn, _h = $h ? $h.isConcatSpreadable : void 0;
function N3(e) {
  return S3(e) || C3(e) || !!(_h && e && e[_h]);
}
var E3 = N3, P3 = Pg, O3 = E3;
function Ug(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = O3), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? Ug(i, t - 1, n, r, o) : P3(o, i) : r || (o[o.length] = i);
  }
  return o;
}
var T3 = Ug;
function j3(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var c = s[e ? i : ++o];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var k3 = j3, M3 = k3, D3 = M3(), A3 = D3, R3 = A3, I3 = zd;
function L3(e, t) {
  return e && R3(e, t, I3);
}
var F3 = L3, B3 = bc;
function V3(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!B3(n))
      return e(n, r);
    for (var o = n.length, a = t ? o : -1, s = Object(n); (t ? a-- : ++a < o) && r(s[a], a, s) !== !1; )
      ;
    return n;
  };
}
var z3 = V3, W3 = F3, U3 = z3, H3 = U3(W3), K3 = H3, G3 = K3, Y3 = bc;
function q3(e, t) {
  var n = -1, r = Y3(e) ? Array(e.length) : [];
  return G3(e, function(o, a, s) {
    r[++n] = t(o, a, s);
  }), r;
}
var Z3 = q3;
function X3(e, t) {
  var n = e.length;
  for (e.sort(t); n--; )
    e[n] = e[n].value;
  return e;
}
var Q3 = X3, Ch = ys;
function J3(e, t) {
  if (e !== t) {
    var n = e !== void 0, r = e === null, o = e === e, a = Ch(e), s = t !== void 0, i = t === null, c = t === t, l = Ch(t);
    if (!i && !l && !a && e > t || a && s && c && !i && !l || r && s && c || !n && c || !o)
      return 1;
    if (!r && !a && !l && e < t || l && n && o && !r && !a || i && n && o || !s && o || !c)
      return -1;
  }
  return 0;
}
var e6 = J3, t6 = e6;
function n6(e, t, n) {
  for (var r = -1, o = e.criteria, a = t.criteria, s = o.length, i = n.length; ++r < s; ) {
    var c = t6(o[r], a[r]);
    if (c) {
      if (r >= i)
        return c;
      var l = n[r];
      return c * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var r6 = n6, wl = eg, o6 = Ad, a6 = Fg, s6 = Z3, i6 = Q3, c6 = jg, l6 = r6, u6 = yc, d6 = Sn;
function f6(e, t, n) {
  t.length ? t = wl(t, function(a) {
    return d6(a) ? function(s) {
      return o6(s, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [u6];
  var r = -1;
  t = wl(t, c6(a6));
  var o = s6(e, function(a, s, i) {
    var c = wl(t, function(l) {
      return l(a);
    });
    return { criteria: c, index: ++r, value: a };
  });
  return i6(o, function(a, s) {
    return l6(a, s, n);
  });
}
var p6 = f6;
function h6(e, t, n) {
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
var m6 = h6, v6 = m6, Sh = Math.max;
function g6(e, t, n) {
  return t = Sh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Sh(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), v6(e, this, i);
  };
}
var b6 = g6;
function y6(e) {
  return function() {
    return e;
  };
}
var x6 = y6, w6 = lo, $6 = function() {
  try {
    var e = w6(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), _6 = $6, C6 = x6, Nh = _6, S6 = yc, N6 = Nh ? function(e, t) {
  return Nh(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: C6(t),
    writable: !0
  });
} : S6, E6 = N6, P6 = 800, O6 = 16, T6 = Date.now;
function j6(e) {
  var t = 0, n = 0;
  return function() {
    var r = T6(), o = O6 - (r - n);
    if (n = r, o > 0) {
      if (++t >= P6)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var k6 = j6, M6 = E6, D6 = k6, A6 = D6(M6), R6 = A6, I6 = yc, L6 = b6, F6 = R6;
function B6(e, t) {
  return F6(L6(e, t, I6), e + "");
}
var V6 = B6, z6 = jd, W6 = bc, U6 = Bd, H6 = jr;
function K6(e, t, n) {
  if (!H6(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? W6(n) && U6(t, n.length) : r == "string" && t in n) ? z6(n[t], e) : !1;
}
var G6 = K6, Y6 = T3, q6 = p6, Z6 = V6, Eh = G6, X6 = Z6(function(e, t) {
  if (e == null)
    return [];
  var n = t.length;
  return n > 1 && Eh(e, t[0], t[1]) ? t = [] : n > 2 && Eh(t[0], t[1], t[2]) && (t = [t[0]]), q6(e, Y6(t, 1), []);
}), Q6 = X6;
const J6 = /* @__PURE__ */ Cn(Q6);
function Aa(e) {
  "@babel/helpers - typeof";
  return Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Aa(e);
}
function _u() {
  return _u = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _u.apply(this, arguments);
}
function eD(e, t) {
  return oD(e) || rD(e, t) || nD(e, t) || tD();
}
function tD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nD(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ph(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ph(e, t);
  }
}
function Ph(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function rD(e, t) {
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
function oD(e) {
  if (Array.isArray(e))
    return e;
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
function $l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oh(Object(n), !0).forEach(function(r) {
      aD(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function aD(e, t, n) {
  return t = sD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sD(e) {
  var t = iD(e, "string");
  return Aa(t) == "symbol" ? t : String(t);
}
function iD(e, t) {
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
function cD(e) {
  return Array.isArray(e) && Ci(e[0]) && Ci(e[1]) ? e.join(" ~ ") : e;
}
var lD = function(t) {
  var n = t.separator, r = n === void 0 ? " : " : n, o = t.contentStyle, a = o === void 0 ? {} : o, s = t.itemStyle, i = s === void 0 ? {} : s, c = t.labelStyle, l = c === void 0 ? {} : c, u = t.payload, f = t.formatter, p = t.itemSorter, h = t.wrapperClassName, m = t.labelClassName, v = t.label, g = t.labelFormatter, b = t.accessibilityLayer, y = b === void 0 ? !1 : b, x = function() {
    if (u && u.length) {
      var z = {
        padding: 0,
        margin: 0
      }, K = (p ? J6(u, p) : u).map(function(L, P) {
        if (L.type === "none")
          return null;
        var R = $l({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: L.color || "#000"
        }, i), O = L.formatter || f || cD, V = L.value, U = L.name, Z = V, oe = U;
        if (O && Z != null && oe != null) {
          var H = O(V, U, L, P, u);
          if (Array.isArray(H)) {
            var le = eD(H, 2);
            Z = le[0], oe = le[1];
          } else
            Z = H;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ I.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(P),
            style: R
          }, Ci(oe) ? /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, oe) : null, Ci(oe) ? /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, r) : null, /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, Z), /* @__PURE__ */ I.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, L.unit || ""))
        );
      });
      return /* @__PURE__ */ I.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: z
      }, K);
    }
    return null;
  }, _ = $l({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), w = $l({
    margin: 0
  }, l), N = !LE(v), S = N ? v : "", D = br("recharts-default-tooltip", h), E = br("recharts-tooltip-label", m);
  N && g && u !== void 0 && u !== null && (S = g(v, u));
  var W = y ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ I.createElement("div", _u({
    className: D,
    style: _
  }, W), /* @__PURE__ */ I.createElement("p", {
    className: E,
    style: w
  }, /* @__PURE__ */ I.isValidElement(S) ? S : "".concat(S)), x());
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
  return t = uD(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function uD(e) {
  var t = dD(e, "string");
  return Ra(t) == "symbol" ? t : String(t);
}
function dD(e, t) {
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
var ya = "recharts-tooltip-wrapper", fD = {
  visibility: "hidden"
};
function pD(e) {
  var t = e.coordinate, n = e.translateX, r = e.translateY;
  return br(ya, Ws(Ws(Ws(Ws({}, "".concat(ya, "-right"), cn(n) && t && cn(t.x) && n >= t.x), "".concat(ya, "-left"), cn(n) && t && cn(t.x) && n < t.x), "".concat(ya, "-bottom"), cn(r) && t && cn(t.y) && r >= t.y), "".concat(ya, "-top"), cn(r) && t && cn(t.y) && r < t.y));
}
function Th(e) {
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
function hD(e) {
  var t = e.translateX, n = e.translateY, r = e.useTranslate3d;
  return {
    transform: r ? "translate3d(".concat(t, "px, ").concat(n, "px, 0)") : "translate(".concat(t, "px, ").concat(n, "px)")
  };
}
function mD(e) {
  var t = e.allowEscapeViewBox, n = e.coordinate, r = e.offsetTopLeft, o = e.position, a = e.reverseDirection, s = e.tooltipBox, i = e.useTranslate3d, c = e.viewBox, l, u, f;
  return s.height > 0 && s.width > 0 && n ? (u = Th({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "x",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = Th({
    allowEscapeViewBox: t,
    coordinate: n,
    key: "y",
    offsetTopLeft: r,
    position: o,
    reverseDirection: a,
    tooltipDimension: s.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), l = hD({
    translateX: u,
    translateY: f,
    useTranslate3d: i
  })) : l = fD, {
    cssProperties: l,
    cssClasses: pD({
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
function jh(e, t) {
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
    t % 2 ? jh(Object(n), !0).forEach(function(r) {
      Nu(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function vD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gD(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Kg(r.key), r);
  }
}
function bD(e, t, n) {
  return t && gD(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yD(e, t, n) {
  return t = ki(t), xD(e, Hg() ? Reflect.construct(t, n || [], ki(e).constructor) : t.apply(e, n));
}
function xD(e, t) {
  if (t && (Lo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Cu(e);
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
function Cu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Su(e, t);
}
function Su(e, t) {
  return Su = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Su(e, t);
}
function Nu(e, t, n) {
  return t = Kg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Kg(e) {
  var t = $D(e, "string");
  return Lo(t) == "symbol" ? t : String(t);
}
function $D(e, t) {
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
var Mh = 1, _D = /* @__PURE__ */ function(e) {
  wD(t, e);
  function t() {
    var n;
    vD(this, t);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return n = yD(this, t, [].concat(o)), Nu(Cu(n), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Nu(Cu(n), "handleKeyDown", function(s) {
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
  return bD(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var r = this.wrapperNode.getBoundingClientRect();
        (Math.abs(r.width - this.state.lastBoundingBox.width) > Mh || Math.abs(r.height - this.state.lastBoundingBox.height) > Mh) && this.setState({
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
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.children, u = o.coordinate, f = o.hasPayload, p = o.isAnimationActive, h = o.offset, m = o.position, v = o.reverseDirection, g = o.useTranslate3d, b = o.viewBox, y = o.wrapperStyle, x = mD({
        allowEscapeViewBox: s,
        coordinate: u,
        offsetTopLeft: h,
        position: m,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: g,
        viewBox: b
      }), _ = x.cssClasses, w = x.cssProperties, N = kh(kh({
        transition: p && a ? "transform ".concat(i, "ms ").concat(c) : void 0
      }, w), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, y);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ I.createElement("div", {
          tabIndex: -1,
          className: _,
          style: N,
          ref: function(D) {
            r.wrapperNode = D;
          }
        }, l)
      );
    }
  }]), t;
}(ic), CD = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, li = {
  isSsr: CD(),
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
function Dh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ah(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dh(Object(n), !0).forEach(function(r) {
      Ud(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function SD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ND(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Yg(r.key), r);
  }
}
function ED(e, t, n) {
  return t && ND(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PD(e, t, n) {
  return t = Mi(t), OD(e, Gg() ? Reflect.construct(t, n || [], Mi(e).constructor) : t.apply(e, n));
}
function OD(e, t) {
  if (t && (Fo(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return TD(e);
}
function TD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gg = function() {
    return !!e;
  })();
}
function Mi(e) {
  return Mi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mi(e);
}
function jD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Eu(e, t);
}
function Eu(e, t) {
  return Eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Eu(e, t);
}
function Ud(e, t, n) {
  return t = Yg(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Yg(e) {
  var t = kD(e, "string");
  return Fo(t) == "symbol" ? t : String(t);
}
function kD(e, t) {
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
function MD(e) {
  return e.dataKey;
}
function DD(e, t) {
  return /* @__PURE__ */ I.isValidElement(e) ? /* @__PURE__ */ I.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ I.createElement(e, t) : /* @__PURE__ */ I.createElement(lD, t);
}
var Hd = /* @__PURE__ */ function(e) {
  jD(t, e);
  function t() {
    return SD(this, t), PD(this, t, arguments);
  }
  return ED(t, [{
    key: "render",
    value: function() {
      var r = this, o = this.props, a = o.active, s = o.allowEscapeViewBox, i = o.animationDuration, c = o.animationEasing, l = o.content, u = o.coordinate, f = o.filterNull, p = o.isAnimationActive, h = o.offset, m = o.payload, v = o.payloadUniqBy, g = o.position, b = o.reverseDirection, y = o.useTranslate3d, x = o.viewBox, _ = o.wrapperStyle, w = m ?? [];
      f && w.length && (w = Bg(m.filter(function(S) {
        return S.value != null && (S.hide !== !0 || r.props.includeHidden);
      }), v, MD));
      var N = w.length > 0;
      return /* @__PURE__ */ I.createElement(_D, {
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
      }, DD(l, Ah(Ah({}, this.props), {}, {
        payload: w
      })));
    }
  }]), t;
}(ic);
Ud(Hd, "displayName", "Tooltip");
Ud(Hd, "defaultProps", {
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
var AD = Vn, RD = function() {
  return AD.Date.now();
}, ID = RD, LD = /\s/;
function FD(e) {
  for (var t = e.length; t-- && LD.test(e.charAt(t)); )
    ;
  return t;
}
var BD = FD, VD = BD, zD = /^\s+/;
function WD(e) {
  return e && e.slice(0, VD(e) + 1).replace(zD, "");
}
var UD = WD, HD = UD, Rh = jr, KD = ys, Ih = NaN, GD = /^[-+]0x[0-9a-f]+$/i, YD = /^0b[01]+$/i, qD = /^0o[0-7]+$/i, ZD = parseInt;
function XD(e) {
  if (typeof e == "number")
    return e;
  if (KD(e))
    return Ih;
  if (Rh(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Rh(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = HD(e);
  var n = YD.test(e);
  return n || qD.test(e) ? ZD(e.slice(2), n ? 2 : 8) : GD.test(e) ? Ih : +e;
}
var QD = XD, JD = jr, _l = ID, Lh = QD, eA = "Expected a function", tA = Math.max, nA = Math.min;
function rA(e, t, n) {
  var r, o, a, s, i, c, l = 0, u = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(eA);
  t = Lh(t) || 0, JD(n) && (u = !!n.leading, f = "maxWait" in n, a = f ? tA(Lh(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function h(N) {
    var S = r, D = o;
    return r = o = void 0, l = N, s = e.apply(D, S), s;
  }
  function m(N) {
    return l = N, i = setTimeout(b, t), u ? h(N) : s;
  }
  function v(N) {
    var S = N - c, D = N - l, E = t - S;
    return f ? nA(E, a - D) : E;
  }
  function g(N) {
    var S = N - c, D = N - l;
    return c === void 0 || S >= t || S < 0 || f && D >= a;
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
  function w() {
    var N = _l(), S = g(N);
    if (r = arguments, o = this, c = N, S) {
      if (i === void 0)
        return m(c);
      if (f)
        return clearTimeout(i), i = setTimeout(b, t), h(c);
    }
    return i === void 0 && (i = setTimeout(b, t)), s;
  }
  return w.cancel = x, w.flush = _, w;
}
var oA = rA, aA = oA, sA = jr, iA = "Expected a function";
function cA(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(iA);
  return sA(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), aA(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
var lA = cA;
const uA = /* @__PURE__ */ Cn(lA);
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e);
}
function Fh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Us(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fh(Object(n), !0).forEach(function(r) {
      dA(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dA(e, t, n) {
  return t = fA(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fA(e) {
  var t = pA(e, "string");
  return Ia(t) == "symbol" ? t : String(t);
}
function pA(e, t) {
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
function hA(e, t) {
  return bA(e) || gA(e, t) || vA(e, t) || mA();
}
function mA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vA(e, t) {
  if (e) {
    if (typeof e == "string")
      return Bh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Bh(e, t);
  }
}
function Bh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function gA(e, t) {
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
function bA(e) {
  if (Array.isArray(e))
    return e;
}
var yA = /* @__PURE__ */ F(function(e, t) {
  var n = e.aspect, r = e.initialDimension, o = r === void 0 ? {
    width: -1,
    height: -1
  } : r, a = e.width, s = a === void 0 ? "100%" : a, i = e.height, c = i === void 0 ? "100%" : i, l = e.minWidth, u = l === void 0 ? 0 : l, f = e.minHeight, p = e.maxHeight, h = e.children, m = e.debounce, v = m === void 0 ? 0 : m, g = e.id, b = e.className, y = e.onResize, x = e.style, _ = x === void 0 ? {} : x, w = q(null), N = q();
  N.current = y, cv(t, function() {
    return Object.defineProperty(w.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), w.current;
      },
      configurable: !0
    });
  });
  var S = X({
    containerWidth: o.width,
    containerHeight: o.height
  }), D = hA(S, 2), E = D[0], W = D[1], G = ve(function(K, L) {
    W(function(P) {
      var R = Math.round(K), O = Math.round(L);
      return P.containerWidth === R && P.containerHeight === O ? P : {
        containerWidth: R,
        containerHeight: O
      };
    });
  }, []);
  J(function() {
    var K = function(U) {
      var Z, oe = U[0].contentRect, H = oe.width, le = oe.height;
      G(H, le), (Z = N.current) === null || Z === void 0 || Z.call(N, H, le);
    };
    v > 0 && (K = uA(K, v, {
      trailing: !0,
      leading: !1
    }));
    var L = new ResizeObserver(K), P = w.current.getBoundingClientRect(), R = P.width, O = P.height;
    return G(R, O), L.observe(w.current), function() {
      L.disconnect();
    };
  }, [G, v]);
  var z = Zt(function() {
    var K = E.containerWidth, L = E.containerHeight;
    if (K < 0 || L < 0)
      return null;
    ci(Bs(s) || Bs(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, s, c), ci(!n || n > 0, "The aspect(%s) must be greater than zero.", n);
    var P = Bs(s) ? K : s, R = Bs(c) ? L : c;
    n && n > 0 && (P ? R = P / n : R && (P = R * n), p && R > p && (R = p)), ci(P > 0 || R > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, P, R, s, c, u, f, n);
    var O = !Array.isArray(h) && Gp.isElement(h) && sP(h.type).endsWith("Chart");
    return I.Children.map(h, function(V) {
      return Gp.isElement(V) ? /* @__PURE__ */ sc(V, Us({
        width: P,
        height: R
      }, O ? {
        style: Us({
          height: "100%",
          width: "100%",
          maxHeight: R,
          maxWidth: P
        }, V.props.style)
      } : {})) : V;
    });
  }, [n, h, c, p, f, u, E, s]);
  return /* @__PURE__ */ I.createElement("div", {
    id: g ? "".concat(g) : void 0,
    className: br("recharts-responsive-container", b),
    style: Us(Us({}, _), {}, {
      width: s,
      height: c,
      minWidth: u,
      minHeight: f,
      maxHeight: p
    }),
    ref: w
  }, z);
});
const xA = { light: "", dark: ".dark" }, qg = C.createContext(null);
function Zg() {
  const e = C.useContext(qg);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const wA = C.forwardRef(({ id: e, className: t, children: n, config: r, ...o }, a) => {
  const s = C.useId(), i = `chart-${e || s.replace(/:/g, "")}`;
  return /* @__PURE__ */ d.jsx(qg.Provider, { value: { config: r }, children: /* @__PURE__ */ d.jsxs(
    "div",
    {
      "data-chart": i,
      ref: a,
      className: k(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ d.jsx($A, { id: i, config: r }),
        /* @__PURE__ */ d.jsx(yA, { children: n })
      ]
    }
  ) });
});
wA.displayName = "Chart";
const $A = ({ id: e, config: t }) => {
  const n = Object.entries(t).filter(
    ([r, o]) => o.theme || o.color
  );
  return n.length ? /* @__PURE__ */ d.jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(xA).map(
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
}, iY = Hd, _A = C.forwardRef(
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
    const { config: m } = Zg(), v = C.useMemo(() => {
      var w;
      if (o || !(t != null && t.length))
        return null;
      const [b] = t, y = `${p || b.dataKey || b.name || "value"}`, x = Pu(m, b, y), _ = !p && typeof s == "string" ? ((w = m[s]) == null ? void 0 : w.label) || s : x == null ? void 0 : x.label;
      return i ? /* @__PURE__ */ d.jsx("div", { className: k("font-medium", c), children: i(_, t) }) : _ ? /* @__PURE__ */ d.jsx("div", { className: k("font-medium", c), children: _ }) : null;
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
        className: k(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          n
        ),
        children: [
          g ? null : v,
          /* @__PURE__ */ d.jsx("div", { className: "grid gap-1.5", children: t.map((b, y) => {
            const x = `${f || b.name || b.dataKey || "value"}`, _ = Pu(m, b, x), w = u || b.payload.fill || b.color;
            return /* @__PURE__ */ d.jsx(
              "div",
              {
                className: k(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  r === "dot" && "items-center"
                ),
                children: l && (b == null ? void 0 : b.value) !== void 0 && b.name ? l(b.value, b.name, b, y, b.payload) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                  _ != null && _.icon ? /* @__PURE__ */ d.jsx(_.icon, {}) : !a && /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      className: k(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": r === "dot",
                          "w-1": r === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                          "my-0.5": g && r === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": w,
                        "--color-border": w
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      className: k(
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
_A.displayName = "ChartTooltip";
const cY = Wd, CA = C.forwardRef(
  ({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: o }, a) => {
    const { config: s } = Zg();
    return n != null && n.length ? /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: a,
        className: k(
          "flex items-center justify-center gap-4",
          r === "top" ? "pb-3" : "pt-3",
          e
        ),
        children: n.map((i) => {
          const c = `${o || i.dataKey || "value"}`, l = Pu(s, i, c);
          return /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: k(
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
CA.displayName = "ChartLegend";
function Pu(e, t, n) {
  if (typeof t != "object" || t === null)
    return;
  const r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let o = n;
  return n in t && typeof t[n] == "string" ? o = t[n] : r && n in r && typeof r[n] == "string" && (o = r[n]), o in e ? e[o] : e[n];
}
function Q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
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
    const { scope: m, children: v } = h, g = I.useRef(null), b = I.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ I.createElement(o, {
      scope: m,
      itemMap: b,
      collectionRef: g
    }, v);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ I.forwardRef((h, m) => {
    const { scope: v, children: g } = h, b = a(i, v), y = Ee(m, b.collectionRef);
    return /* @__PURE__ */ I.createElement(gn, {
      ref: y
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", f = /* @__PURE__ */ I.forwardRef((h, m) => {
    const { scope: v, children: g, ...b } = h, y = I.useRef(null), x = Ee(m, y), _ = a(l, v);
    return I.useEffect(() => (_.itemMap.set(y, {
      ref: y,
      ...b
    }), () => void _.itemMap.delete(y))), /* @__PURE__ */ I.createElement(gn, {
      [u]: "",
      ref: x
    }, g);
  });
  function p(h) {
    const m = a(e + "CollectionConsumer", h);
    return I.useCallback(() => {
      const g = m.collectionRef.current;
      if (!g)
        return [];
      const b = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (_, w) => b.indexOf(_.ref.current) - b.indexOf(w.ref.current)
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
const SA = /* @__PURE__ */ Wt(void 0);
function zn(e) {
  const t = lt(SA);
  return e || t || "ltr";
}
function NA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e);
  J(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const Ou = "dismissableLayer.update", EA = "dismissableLayer.pointerDownOutside", PA = "dismissableLayer.focusOutside";
let Vh;
const OA = /* @__PURE__ */ Wt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), uo = /* @__PURE__ */ F((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = lt(OA), [f, p] = X(null), h = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = X({}), v = Ee(
    t,
    (D) => p(D)
  ), g = Array.from(u.layers), [b] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = g.indexOf(b), x = f ? g.indexOf(f) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = x >= y, N = TA((D) => {
    const E = D.target, W = [
      ...u.branches
    ].some(
      (G) => G.contains(E)
    );
    !w || W || (a == null || a(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, h), S = jA((D) => {
    const E = D.target;
    [
      ...u.branches
    ].some(
      (G) => G.contains(E)
    ) || (s == null || s(D), i == null || i(D), D.defaultPrevented || c == null || c());
  }, h);
  return NA((D) => {
    x === u.layers.size - 1 && (o == null || o(D), !D.defaultPrevented && c && (D.preventDefault(), c()));
  }, h), J(() => {
    if (f)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Vh = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), zh(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Vh);
      };
  }, [
    f,
    h,
    r,
    u
  ]), J(() => () => {
    f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), zh());
  }, [
    f,
    u
  ]), J(() => {
    const D = () => m({});
    return document.addEventListener(Ou, D), () => document.removeEventListener(Ou, D);
  }, []), /* @__PURE__ */ $(de.div, j({}, l, {
    ref: v,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Q(e.onFocusCapture, S.onFocusCapture),
    onBlurCapture: Q(e.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: Q(e.onPointerDownCapture, N.onPointerDownCapture)
  }));
});
function TA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = q(!1), o = q(() => {
  });
  return J(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Xg(EA, n, c, {
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
function jA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Je(e), r = q(!1);
  return J(() => {
    const o = (a) => {
      a.target && !r.current && Xg(PA, n, {
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
function zh() {
  const e = new CustomEvent(Ou);
  document.dispatchEvent(e);
}
function Xg(e, t, n, { discrete: r }) {
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
  J(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Wh()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Wh()), Cl++, () => {
      Cl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Cl--;
    };
  }, []);
}
function Wh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Sl = "focusScope.autoFocusOnMount", Nl = "focusScope.autoFocusOnUnmount", Uh = {
  bubbles: !1,
  cancelable: !0
}, $c = /* @__PURE__ */ F((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = X(null), l = Je(o), u = Je(a), f = q(null), p = Ee(
    t,
    (v) => c(v)
  ), h = q({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  J(() => {
    if (r) {
      let v = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.target;
        i.contains(_) ? f.current = _ : mr(f.current, {
          select: !0
        });
      }, g = function(x) {
        if (h.paused || !i)
          return;
        const _ = x.relatedTarget;
        _ !== null && (i.contains(_) || mr(f.current, {
          select: !0
        }));
      }, b = function(x) {
        if (document.activeElement === document.body)
          for (const w of x)
            w.removedNodes.length > 0 && mr(i);
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
  ]), J(() => {
    if (i) {
      Kh.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const b = new CustomEvent(Sl, Uh);
        i.addEventListener(Sl, l), i.dispatchEvent(b), b.defaultPrevented || (kA(IA(Qg(i)), {
          select: !0
        }), document.activeElement === v && mr(i));
      }
      return () => {
        i.removeEventListener(Sl, l), setTimeout(() => {
          const b = new CustomEvent(Nl, Uh);
          i.addEventListener(Nl, u), i.dispatchEvent(b), b.defaultPrevented || mr(v ?? document.body, {
            select: !0
          }), i.removeEventListener(Nl, u), Kh.remove(h);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    h
  ]);
  const m = ve((v) => {
    if (!n && !r || h.paused)
      return;
    const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
    if (g && b) {
      const y = v.currentTarget, [x, _] = MA(y);
      x && _ ? !v.shiftKey && b === _ ? (v.preventDefault(), n && mr(x, {
        select: !0
      })) : v.shiftKey && b === x && (v.preventDefault(), n && mr(_, {
        select: !0
      })) : b === y && v.preventDefault();
    }
  }, [
    n,
    r,
    h.paused
  ]);
  return /* @__PURE__ */ $(de.div, j({
    tabIndex: -1
  }, s, {
    ref: p,
    onKeyDown: m
  }));
});
function kA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (mr(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function MA(e) {
  const t = Qg(e), n = Hh(t, e), r = Hh(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Qg(e) {
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
function Hh(e, t) {
  for (const n of e)
    if (!DA(n, {
      upTo: t
    }))
      return n;
}
function DA(e, { upTo: t }) {
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
function AA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function mr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && AA(e) && t && e.select();
  }
}
const Kh = RA();
function RA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Gh(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Gh(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Gh(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function IA(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const LA = C.useId || (() => {
});
let FA = 0;
function bt(e) {
  const [t, n] = C.useState(LA());
  return St(() => {
    n(
      (r) => r ?? String(FA++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
const BA = ["top", "right", "bottom", "left"], xr = Math.min, Kt = Math.max, Di = Math.round, Hs = Math.floor, Dn = (e) => ({
  x: e,
  y: e
}), VA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zA = {
  start: "end",
  end: "start"
};
function Tu(e, t, n) {
  return Kt(e, xr(t, n));
}
function er(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tr(e) {
  return e.split("-")[0];
}
function ea(e) {
  return e.split("-")[1];
}
function Kd(e) {
  return e === "x" ? "y" : "x";
}
function Gd(e) {
  return e === "y" ? "height" : "width";
}
function wr(e) {
  return ["top", "bottom"].includes(tr(e)) ? "y" : "x";
}
function Yd(e) {
  return Kd(wr(e));
}
function WA(e, t, n) {
  n === void 0 && (n = !1);
  const r = ea(e), o = Yd(e), a = Gd(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ai(s)), [s, Ai(s)];
}
function UA(e) {
  const t = Ai(e);
  return [ju(e), t, ju(t)];
}
function ju(e) {
  return e.replace(/start|end/g, (t) => zA[t]);
}
function HA(e, t, n) {
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
function KA(e, t, n, r) {
  const o = ea(e);
  let a = HA(tr(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(ju)))), a;
}
function Ai(e) {
  return e.replace(/left|right|bottom|top/g, (t) => VA[t]);
}
function GA(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jg(e) {
  return typeof e != "number" ? GA(e) : {
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
function Yh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = wr(t), s = Yd(t), i = Gd(s), c = tr(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
const YA = async (e, t, n) => {
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
  } = Yh(l, r, c), p = r, h = {}, m = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: b
    } = i[v], {
      x: y,
      y: x,
      data: _,
      reset: w
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
    }, w && m <= 50 && (m++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: u,
      y: f
    } = Yh(l, p, c)), v = -1);
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
  } = er(t, e), m = Jg(h), g = i[p ? f === "floating" ? "reference" : "floating" : f], b = Ri(await a.getClippingRect({
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
  }, w = Ri(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (b.top - w.top + m.top) / _.y,
    bottom: (w.bottom - b.bottom + m.bottom) / _.y,
    left: (b.left - w.left + m.left) / _.x,
    right: (w.right - b.right + m.right) / _.x
  };
}
const qA = (e) => ({
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
    } = er(e, t) || {};
    if (l == null)
      return {};
    const f = Jg(u), p = {
      x: n,
      y: r
    }, h = Yd(o), m = Gd(h), v = await s.getDimensions(l), g = h === "y", b = g ? "top" : "left", y = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", _ = a.reference[m] + a.reference[h] - p[h] - a.floating[m], w = p[h] - a.reference[h], N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let S = N ? N[x] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(N))) && (S = i.floating[x] || a.floating[m]);
    const D = _ / 2 - w / 2, E = S / 2 - v[m] / 2 - 1, W = xr(f[b], E), G = xr(f[y], E), z = W, K = S - v[m] - G, L = S / 2 - v[m] / 2 + D, P = Tu(z, L, K), R = !c.arrow && ea(o) != null && L !== P && a.reference[m] / 2 - (L < z ? W : G) - v[m] / 2 < 0, O = R ? L < z ? L - z : L - K : 0;
    return {
      [h]: p[h] + O,
      data: {
        [h]: P,
        centerOffset: L - P - O,
        ...R && {
          alignmentOffset: O
        }
      },
      reset: R
    };
  }
}), ZA = function(e) {
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
      } = er(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const b = tr(o), y = wr(i), x = tr(i) === i, _ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = p || (x || !v ? [Ai(i)] : UA(i)), N = m !== "none";
      !p && N && w.push(...KA(i, v, m, _));
      const S = [i, ...w], D = await La(t, g), E = [];
      let W = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && E.push(D[b]), f) {
        const L = WA(o, s, _);
        E.push(D[L[0]], D[L[1]]);
      }
      if (W = [...W, {
        placement: o,
        overflows: E
      }], !E.every((L) => L <= 0)) {
        var G, z;
        const L = (((G = a.flip) == null ? void 0 : G.index) || 0) + 1, P = S[L];
        if (P)
          return {
            data: {
              index: L,
              overflows: W
            },
            reset: {
              placement: P
            }
          };
        let R = (z = W.filter((O) => O.overflows[0] <= 0).sort((O, V) => O.overflows[1] - V.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!R)
          switch (h) {
            case "bestFit": {
              var K;
              const O = (K = W.filter((V) => {
                if (N) {
                  const U = wr(V.placement);
                  return U === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((U) => U > 0).reduce((U, Z) => U + Z, 0)]).sort((V, U) => V[1] - U[1])[0]) == null ? void 0 : K[0];
              O && (R = O);
              break;
            }
            case "initialPlacement":
              R = i;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function qh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zh(e) {
  return BA.some((t) => e[t] >= 0);
}
const XA = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = er(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await La(t, {
            ...o,
            elementContext: "reference"
          }), s = qh(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Zh(s)
            }
          };
        }
        case "escaped": {
          const a = await La(t, {
            ...o,
            altBoundary: !0
          }), s = qh(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Zh(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function QA(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = tr(n), i = ea(n), c = wr(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, f = er(t, e);
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
const JA = function(e) {
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
      } = t, c = await QA(t, e);
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
}, eR = function(e) {
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
      } = er(e, t), l = {
        x: n,
        y: r
      }, u = await La(t, c), f = wr(tr(o)), p = Kd(f);
      let h = l[p], m = l[f];
      if (a) {
        const g = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", y = h + u[g], x = h - u[b];
        h = Tu(y, h, x);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", y = m + u[g], x = m - u[b];
        m = Tu(y, m, x);
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
}, tR = function(e) {
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
      } = er(e, t), u = {
        x: n,
        y: r
      }, f = wr(o), p = Kd(f);
      let h = u[p], m = u[f];
      const v = er(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const x = p === "y" ? "height" : "width", _ = a.reference[p] - a.floating[x] + g.mainAxis, w = a.reference[p] + a.reference[x] - g.mainAxis;
        h < _ ? h = _ : h > w && (h = w);
      }
      if (l) {
        var b, y;
        const x = p === "y" ? "width" : "height", _ = ["top", "left"].includes(tr(o)), w = a.reference[f] - a.floating[x] + (_ && ((b = s.offset) == null ? void 0 : b[f]) || 0) + (_ ? 0 : g.crossAxis), N = a.reference[f] + a.reference[x] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) - (_ ? g.crossAxis : 0);
        m < w ? m = w : m > N && (m = N);
      }
      return {
        [p]: h,
        [f]: m
      };
    }
  };
}, nR = function(e) {
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
      } = er(e, t), u = await La(t, l), f = tr(o), p = ea(o), h = wr(o) === "y", {
        width: m,
        height: v
      } = a.floating;
      let g, b;
      f === "top" || f === "bottom" ? (g = f, b = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = f, g = p === "end" ? "top" : "bottom");
      const y = v - u.top - u.bottom, x = m - u.left - u.right, _ = xr(v - u[g], y), w = xr(m - u[b], x), N = !t.middlewareData.shift;
      let S = _, D = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (D = x), (r = t.middlewareData.shift) != null && r.enabled.y && (S = y), N && !p) {
        const W = Kt(u.left, 0), G = Kt(u.right, 0), z = Kt(u.top, 0), K = Kt(u.bottom, 0);
        h ? D = m - 2 * (W !== 0 || G !== 0 ? W + G : Kt(u.left, u.right)) : S = v - 2 * (z !== 0 || K !== 0 ? z + K : Kt(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: D,
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
  return eb(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Yt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wn(e) {
  var t;
  return (t = (eb(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function eb(e) {
  return _c() ? e instanceof Node || e instanceof Yt(e).Node : !1;
}
function xn(e) {
  return _c() ? e instanceof Element || e instanceof Yt(e).Element : !1;
}
function In(e) {
  return _c() ? e instanceof HTMLElement || e instanceof Yt(e).HTMLElement : !1;
}
function Xh(e) {
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
function rR(e) {
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
function qd(e) {
  const t = Zd(), n = xn(e) ? wn(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function oR(e) {
  let t = $r(e);
  for (; In(t) && !Bo(t); ) {
    if (qd(t))
      return t;
    if (Cc(t))
      return null;
    t = $r(t);
  }
  return null;
}
function Zd() {
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
function $r(e) {
  if (ta(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xh(e) && e.host || // Fallback.
    Wn(e)
  );
  return Xh(t) ? t.host : t;
}
function tb(e) {
  const t = $r(e);
  return Bo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && xs(t) ? t : tb(t);
}
function Fa(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = tb(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Yt(o);
  if (a) {
    const i = ku(s);
    return t.concat(s, s.visualViewport || [], xs(o) ? o : [], i && n ? Fa(i) : []);
  }
  return t.concat(o, Fa(o, [], n));
}
function ku(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function nb(e) {
  const t = wn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = In(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Di(n) !== a || Di(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Xd(e) {
  return xn(e) ? e : e.contextElement;
}
function ko(e) {
  const t = Xd(e);
  if (!In(t))
    return Dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = nb(t);
  let s = (a ? Di(n.width) : n.width) / r, i = (a ? Di(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const aR = /* @__PURE__ */ Dn(0);
function rb(e) {
  const t = Yt(e);
  return !Zd() || !t.visualViewport ? aR : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function sR(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Yt(e) ? !1 : t;
}
function Xr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Xd(e);
  let s = Dn(1);
  t && (r ? xn(r) && (s = ko(r)) : s = ko(e));
  const i = sR(a, n, r) ? rb(a) : Dn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Yt(a), h = r && xn(r) ? Yt(r) : r;
    let m = p, v = ku(m);
    for (; v && r && h !== m; ) {
      const g = ko(v), b = v.getBoundingClientRect(), y = wn(v), x = b.left + (v.clientLeft + parseFloat(y.paddingLeft)) * g.x, _ = b.top + (v.clientTop + parseFloat(y.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, f *= g.y, c += x, l += _, m = Yt(v), v = ku(m);
    }
  }
  return Ri({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Qd(e, t) {
  const n = Sc(e).scrollLeft;
  return t ? t.left + n : Xr(Wn(e)).left + n;
}
function ob(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Qd(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function iR(e) {
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
    l = ko(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !f && !a ? ob(s, c, !0) : Dn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function cR(e) {
  return Array.from(e.getClientRects());
}
function lR(e) {
  const t = Wn(e), n = Sc(e), r = e.ownerDocument.body, o = Kt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Kt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Qd(e);
  const i = -n.scrollTop;
  return wn(r).direction === "rtl" && (s += Kt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function uR(e, t) {
  const n = Yt(e), r = Wn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Zd();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function dR(e, t) {
  const n = Xr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = In(e) ? ko(e) : Dn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Qh(e, t, n) {
  let r;
  if (t === "viewport")
    r = uR(e, n);
  else if (t === "document")
    r = lR(Wn(e));
  else if (xn(t))
    r = dR(t, n);
  else {
    const o = rb(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ri(r);
}
function ab(e, t) {
  const n = $r(e);
  return n === t || !xn(n) || Bo(n) ? !1 : wn(n).position === "fixed" || ab(n, t);
}
function fR(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Fa(e, [], !1).filter((i) => xn(i) && ta(i) !== "body"), o = null;
  const a = wn(e).position === "fixed";
  let s = a ? $r(e) : e;
  for (; xn(s) && !Bo(s); ) {
    const i = wn(s), c = qd(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xs(s) && !c && ab(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = $r(s);
  }
  return t.set(e, r), r;
}
function pR(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Cc(t) ? [] : fR(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const f = Qh(t, u, o);
    return l.top = Kt(f.top, l.top), l.right = xr(f.right, l.right), l.bottom = xr(f.bottom, l.bottom), l.left = Kt(f.left, l.left), l;
  }, Qh(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function hR(e) {
  const {
    width: t,
    height: n
  } = nb(e);
  return {
    width: t,
    height: n
  };
}
function mR(e, t, n) {
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
      o && (c.x = Qd(o));
  const l = o && !r && !a ? ob(o, i) : Dn(0), u = s.left + i.scrollLeft - c.x - l.x, f = s.top + i.scrollTop - c.y - l.y;
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
function Jh(e, t) {
  if (!In(e) || wn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Wn(e) === n && (n = n.ownerDocument.body), n;
}
function sb(e, t) {
  const n = Yt(e);
  if (Cc(e))
    return n;
  if (!In(e)) {
    let o = $r(e);
    for (; o && !Bo(o); ) {
      if (xn(o) && !El(o))
        return o;
      o = $r(o);
    }
    return n;
  }
  let r = Jh(e, t);
  for (; r && rR(r) && El(r); )
    r = Jh(r, t);
  return r && Bo(r) && El(r) && !qd(r) ? n : r || oR(e) || n;
}
const vR = async function(e) {
  const t = this.getOffsetParent || sb, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: mR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function gR(e) {
  return wn(e).direction === "rtl";
}
const bR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: iR,
  getDocumentElement: Wn,
  getClippingRect: pR,
  getOffsetParent: sb,
  getElementRects: vR,
  getClientRects: cR,
  getDimensions: hR,
  getScale: ko,
  isElement: xn,
  isRTL: gR
};
function yR(e, t) {
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
    const h = Hs(u), m = Hs(o.clientWidth - (l + f)), v = Hs(o.clientHeight - (u + p)), g = Hs(l), y = {
      rootMargin: -h + "px " + -m + "px " + -v + "px " + -g + "px",
      threshold: Kt(0, xr(1, c)) || 1
    };
    let x = !0;
    function _(w) {
      const N = w[0].intersectionRatio;
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
function xR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Xd(e), u = o || a ? [...l ? Fa(l) : [], ...Fa(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), a && b.addEventListener("resize", n);
  });
  const f = l && i ? yR(l, n) : null;
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
const wR = JA, $R = eR, _R = ZA, CR = nR, SR = XA, em = qA, NR = tR, ER = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: bR,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return YA(e, t, {
    ...o,
    platform: a
  });
};
var ui = typeof document < "u" ? fs : J;
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
function ib(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tm(e, t) {
  const n = ib(e);
  return Math.round(t * n) / n;
}
function Pl(e) {
  const t = C.useRef(e);
  return ui(() => {
    t.current = e;
  }), t;
}
function PR(e) {
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
  const [m, v] = C.useState(null), [g, b] = C.useState(null), y = C.useCallback((V) => {
    V !== N.current && (N.current = V, v(V));
  }, []), x = C.useCallback((V) => {
    V !== S.current && (S.current = V, b(V));
  }, []), _ = a || m, w = s || g, N = C.useRef(null), S = C.useRef(null), D = C.useRef(u), E = c != null, W = Pl(c), G = Pl(o), z = Pl(l), K = C.useCallback(() => {
    if (!N.current || !S.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: p
    };
    G.current && (V.platform = G.current), ER(N.current, S.current, V).then((U) => {
      const Z = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: z.current !== !1
      };
      L.current && !Ii(D.current, Z) && (D.current = Z, Pw.flushSync(() => {
        f(Z);
      }));
    });
  }, [p, t, n, G, z]);
  ui(() => {
    l === !1 && D.current.isPositioned && (D.current.isPositioned = !1, f((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [l]);
  const L = C.useRef(!1);
  ui(() => (L.current = !0, () => {
    L.current = !1;
  }), []), ui(() => {
    if (_ && (N.current = _), w && (S.current = w), _ && w) {
      if (W.current)
        return W.current(_, w, K);
      K();
    }
  }, [_, w, K, W, E]);
  const P = C.useMemo(() => ({
    reference: N,
    floating: S,
    setReference: y,
    setFloating: x
  }), [y, x]), R = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), O = C.useMemo(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return V;
    const U = tm(R.floating, u.x), Z = tm(R.floating, u.y);
    return i ? {
      ...V,
      transform: "translate(" + U + "px, " + Z + "px)",
      ...ib(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: Z
    };
  }, [n, i, R.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: K,
    refs: P,
    elements: R,
    floatingStyles: O
  }), [u, K, P, R, O]);
}
const OR = (e) => {
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
      return r && t(r) ? r.current != null ? em({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? em({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, TR = (e, t) => ({
  ...wR(e),
  options: [e, t]
}), jR = (e, t) => ({
  ...$R(e),
  options: [e, t]
}), kR = (e, t) => ({
  ...NR(e),
  options: [e, t]
}), MR = (e, t) => ({
  ..._R(e),
  options: [e, t]
}), DR = (e, t) => ({
  ...CR(e),
  options: [e, t]
}), AR = (e, t) => ({
  ...SR(e),
  options: [e, t]
}), RR = (e, t) => ({
  ...OR(e),
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
const cb = "Popper", [lb, Un] = ut(cb), [IR, ub] = lb(cb), LR = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = X(null);
  return /* @__PURE__ */ $(IR, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, FR = "PopperAnchor", BR = /* @__PURE__ */ F((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = ub(FR, n), s = q(null), i = Ee(t, s);
  return J(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ $(de.div, j({}, o, {
    ref: i
  }));
}), db = "PopperContent", [VR, lY] = lb(db), zR = /* @__PURE__ */ F((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: f = "bottom", sideOffset: p = 0, align: h = "center", alignOffset: m = 0, arrowPadding: v = 0, avoidCollisions: g = !0, collisionBoundary: b = [], collisionPadding: y = 0, sticky: x = "partial", hideWhenDetached: _ = !1, updatePositionStrategy: w = "optimized", onPlaced: N, ...S } = e, D = ub(db, u), [E, W] = X(null), G = Ee(
    t,
    (Pe) => W(Pe)
  ), [z, K] = X(null), L = ws(z), P = (n = L == null ? void 0 : L.width) !== null && n !== void 0 ? n : 0, R = (r = L == null ? void 0 : L.height) !== null && r !== void 0 ? r : 0, O = f + (h !== "center" ? "-" + h : ""), V = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, U = Array.isArray(b) ? b : [
    b
  ], Z = U.length > 0, oe = {
    padding: V,
    boundary: U.filter(WR),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Z
  }, { refs: H, floatingStyles: le, placement: be, isPositioned: pe, middlewareData: ee } = PR({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: O,
    whileElementsMounted: (...Pe) => xR(...Pe, {
      animationFrame: w === "always"
    }),
    elements: {
      reference: D.anchor
    },
    middleware: [
      TR({
        mainAxis: p + R,
        alignmentAxis: m
      }),
      g && jR({
        mainAxis: !0,
        crossAxis: !1,
        limiter: x === "partial" ? kR() : void 0,
        ...oe
      }),
      g && MR({
        ...oe
      }),
      DR({
        ...oe,
        apply: ({ elements: Pe, rects: Ie, availableWidth: Oe, availableHeight: T }) => {
          const { width: B, height: Y } = Ie.reference, ue = Pe.floating.style;
          ue.setProperty("--radix-popper-available-width", `${Oe}px`), ue.setProperty("--radix-popper-available-height", `${T}px`), ue.setProperty("--radix-popper-anchor-width", `${B}px`), ue.setProperty("--radix-popper-anchor-height", `${Y}px`);
        }
      }),
      z && RR({
        element: z,
        padding: v
      }),
      UR({
        arrowWidth: P,
        arrowHeight: R
      }),
      _ && AR({
        strategy: "referenceHidden",
        ...oe
      })
    ]
  }), [re, me] = fb(be), _e = Je(N);
  St(() => {
    pe && (_e == null || _e());
  }, [
    pe,
    _e
  ]);
  const ae = (o = ee.arrow) === null || o === void 0 ? void 0 : o.x, fe = (a = ee.arrow) === null || a === void 0 ? void 0 : a.y, A = ((s = ee.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [ne, ye] = X();
  return St(() => {
    E && ye(window.getComputedStyle(E).zIndex);
  }, [
    E
  ]), /* @__PURE__ */ $("div", {
    ref: H.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...le,
      transform: pe ? le.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: ne,
      "--radix-popper-transform-origin": [
        (i = ee.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ee.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ $(VR, {
    scope: u,
    placedSide: re,
    onArrowChange: K,
    arrowX: ae,
    arrowY: fe,
    shouldHideArrow: A
  }, /* @__PURE__ */ $(de.div, j({
    "data-side": re,
    "data-align": me
  }, S, {
    ref: G,
    style: {
      ...S.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: pe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ee.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function WR(e) {
  return e !== null;
}
const UR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, f = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = f ? 0 : e.arrowWidth, h = f ? 0 : e.arrowHeight, [m, v] = fb(i), g = {
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
function fb(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const na = LR, $s = BR, _s = zR, Nc = /* @__PURE__ */ F((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ lv.createPortal(/* @__PURE__ */ $(de.div, j({}, o, {
    ref: t
  })), r) : null;
});
function HR(e, t) {
  return fd((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const ft = (e) => {
  const { present: t, children: n } = e, r = KR(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : Kr.only(n), a = Ee(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ sc(o, {
    ref: a
  }) : null;
};
ft.displayName = "Presence";
function KR(e) {
  const [t, n] = X(), r = q({}), o = q(e), a = q("none"), s = e ? "mounted" : "unmounted", [i, c] = HR(s, {
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
  return J(() => {
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
        f.target === t && h && uv(
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
    ref: ve((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ks(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function vt({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = GR({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Je(n), c = ve((l) => {
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
function GR({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = q(r), a = Je(t);
  return J(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Ol = "rovingFocusGroup.onEntryFocus", YR = {
  bubbles: !1,
  cancelable: !0
}, Jd = "RovingFocusGroup", [Mu, pb, qR] = kr(Jd), [ZR, Mr] = ut(Jd, [
  qR
]), [XR, QR] = ZR(Jd), JR = /* @__PURE__ */ F((e, t) => /* @__PURE__ */ $(Mu.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(Mu.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ $(e4, j({}, e, {
  ref: t
}))))), e4 = /* @__PURE__ */ F((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, f = q(null), p = Ee(t, f), h = zn(a), [m = null, v] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, b] = X(!1), y = Je(l), x = pb(n), _ = q(!1), [w, N] = X(0);
  return J(() => {
    const S = f.current;
    if (S)
      return S.addEventListener(Ol, y), () => S.removeEventListener(Ol, y);
  }, [
    y
  ]), /* @__PURE__ */ $(XR, {
    scope: n,
    orientation: r,
    dir: h,
    loop: o,
    currentTabStopId: m,
    onItemFocus: ve(
      (S) => v(S),
      [
        v
      ]
    ),
    onItemShiftTab: ve(
      () => b(!0),
      []
    ),
    onFocusableItemAdd: ve(
      () => N(
        (S) => S + 1
      ),
      []
    ),
    onFocusableItemRemove: ve(
      () => N(
        (S) => S - 1
      ),
      []
    )
  }, /* @__PURE__ */ $(de.div, j({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: p,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: Q(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: Q(e.onFocus, (S) => {
      const D = !_.current;
      if (S.target === S.currentTarget && D && !g) {
        const E = new CustomEvent(Ol, YR);
        if (S.currentTarget.dispatchEvent(E), !E.defaultPrevented) {
          const W = x().filter(
            (P) => P.focusable
          ), G = W.find(
            (P) => P.active
          ), z = W.find(
            (P) => P.id === m
          ), L = [
            G,
            z,
            ...W
          ].filter(Boolean).map(
            (P) => P.ref.current
          );
          hb(L);
        }
      }
      _.current = !1;
    }),
    onBlur: Q(
      e.onBlur,
      () => b(!1)
    )
  })));
}), t4 = "RovingFocusGroupItem", n4 = /* @__PURE__ */ F((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = bt(), c = a || i, l = QR(t4, n), u = l.currentTabStopId === c, f = pb(n), { onFocusableItemAdd: p, onFocusableItemRemove: h } = l;
  return J(() => {
    if (r)
      return p(), () => h();
  }, [
    r,
    p,
    h
  ]), /* @__PURE__ */ $(Mu.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ $(de.span, j({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: Q(e.onMouseDown, (m) => {
      r ? l.onItemFocus(c) : m.preventDefault();
    }),
    onFocus: Q(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: Q(e.onKeyDown, (m) => {
      if (m.key === "Tab" && m.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (m.target !== m.currentTarget)
        return;
      const v = a4(m, l.orientation, l.dir);
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
          b = l.loop ? s4(b, y + 1) : b.slice(y + 1);
        }
        setTimeout(
          () => hb(b)
        );
      }
    })
  })));
}), r4 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function o4(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function a4(e, t, n) {
  const r = o4(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return r4[r];
}
function hb(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function s4(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Ec = JR, Pc = n4;
var i4 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, $o = /* @__PURE__ */ new WeakMap(), Gs = /* @__PURE__ */ new WeakMap(), Ys = {}, Tl = 0, mb = function(e) {
  return e && (e.host || mb(e.parentNode));
}, c4 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = mb(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, l4 = function(e, t, n, r) {
  var o = c4(t, Array.isArray(e) ? e : [e]);
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
  var r = Array.from(Array.isArray(e) ? e : [e]), o = i4(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), l4(r, o, n, "aria-hidden")) : function() {
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
function vb(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function u4(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var di = "right-scroll-bar-position", fi = "width-before-scroll-bar", d4 = "with-scroll-bars-hidden", f4 = "--removed-body-scroll-bar-size";
function jl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function p4(e, t) {
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
var h4 = typeof window < "u" ? C.useLayoutEffect : C.useEffect, nm = /* @__PURE__ */ new WeakMap();
function m4(e, t) {
  var n = p4(null, function(r) {
    return e.forEach(function(o) {
      return jl(o, r);
    });
  });
  return h4(function() {
    var r = nm.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || jl(i, null);
      }), a.forEach(function(i) {
        o.has(i) || jl(i, s);
      });
    }
    nm.set(n, e);
  }, [e]), n;
}
function v4(e) {
  return e;
}
function g4(e, t) {
  t === void 0 && (t = v4);
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
function b4(e) {
  e === void 0 && (e = {});
  var t = g4(null);
  return t.options = jn({ async: !0, ssr: !1 }, e), t;
}
var gb = function(e) {
  var t = e.sideCar, n = vb(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, jn({}, n));
};
gb.isSideCarExport = !0;
function y4(e, t) {
  return e.useMedium(t), gb;
}
var bb = b4(), kl = function() {
}, Tc = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: kl,
    onWheelCapture: kl,
    onTouchMoveCapture: kl
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, h = e.noIsolation, m = e.inert, v = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = vb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), x = p, _ = m4([n, t]), w = jn(jn({}, y), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement(x, { sideCar: bb, removeScrollBar: l, shards: f, noIsolation: h, inert: m, setCallbacks: a, allowPinchZoom: !!v, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), jn(jn({}, w), { ref: _ })) : C.createElement(b, jn({}, w, { className: c, ref: _ }), i)
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
var x4 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function w4() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = x4();
  return t && e.setAttribute("nonce", t), e;
}
function $4(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _4(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var C4 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = w4()) && ($4(t, n), _4(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, S4 = function() {
  var e = C4();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, yb = function() {
  var e = S4(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, N4 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ml = function(e) {
  return parseInt(e || "", 10) || 0;
}, E4 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ml(n), Ml(r), Ml(o)];
}, P4 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return N4;
  var t = E4(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, O4 = yb(), Mo = "data-scroll-locked", T4 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(d4, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Mo, `] {
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
  
  body[`).concat(Mo, `] {
    `).concat(f4, ": ").concat(i, `px;
  }
`);
}, rm = function() {
  var e = parseInt(document.body.getAttribute(Mo) || "0", 10);
  return isFinite(e) ? e : 0;
}, j4 = function() {
  C.useEffect(function() {
    return document.body.setAttribute(Mo, (rm() + 1).toString()), function() {
      var e = rm() - 1;
      e <= 0 ? document.body.removeAttribute(Mo) : document.body.setAttribute(Mo, e.toString());
    };
  }, []);
}, k4 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  j4();
  var a = C.useMemo(function() {
    return P4(o);
  }, [o]);
  return C.createElement(O4, { styles: T4(a, !t, o, n ? "" : "!important") });
}, Du = !1;
if (typeof window < "u")
  try {
    var qs = Object.defineProperty({}, "passive", {
      get: function() {
        return Du = !0, !0;
      }
    });
    window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
  } catch {
    Du = !1;
  }
var _o = Du ? { passive: !1 } : !1, M4 = function(e) {
  return e.tagName === "TEXTAREA";
}, xb = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !M4(e) && n[t] === "visible")
  );
}, D4 = function(e) {
  return xb(e, "overflowY");
}, A4 = function(e) {
  return xb(e, "overflowX");
}, om = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = wb(e, n);
    if (r) {
      var o = $b(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, R4 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, I4 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, wb = function(e, t) {
  return e === "v" ? D4(t) : A4(t);
}, $b = function(e, t) {
  return e === "v" ? R4(t) : I4(t);
}, L4 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, F4 = function(e, t, n, r, o) {
  var a = L4(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, f = 0, p = 0;
  do {
    var h = $b(e, i), m = h[0], v = h[1], g = h[2], b = v - g - a * m;
    (m || b) && wb(e, i) && (f += b, p += m), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (f === 0 || !o) || !u && (p === 0 || !o)) && (l = !0), l;
}, Zs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, am = function(e) {
  return [e.deltaX, e.deltaY];
}, sm = function(e) {
  return e && "current" in e ? e.current : e;
}, B4 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, V4 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, z4 = 0, Co = [];
function W4(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(z4++)[0], a = C.useState(function() {
    return yb();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = u4([e.lockRef.current], (e.shards || []).map(sm), !0).filter(Boolean);
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
    var b = Zs(v), y = n.current, x = "deltaX" in v ? v.deltaX : y[0] - b[0], _ = "deltaY" in v ? v.deltaY : y[1] - b[1], w, N = v.target, S = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && S === "h" && N.type === "range")
      return !1;
    var D = om(S, N);
    if (!D)
      return !0;
    if (D ? w = S : (w = S === "v" ? "h" : "v", D = om(S, N)), !D)
      return !1;
    if (!r.current && "changedTouches" in v && (x || _) && (r.current = w), !w)
      return !0;
    var E = r.current || w;
    return F4(E, g, v, E === "h" ? x : _, !0);
  }, []), c = C.useCallback(function(v) {
    var g = v;
    if (!(!Co.length || Co[Co.length - 1] !== a)) {
      var b = "deltaY" in g ? am(g) : Zs(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && B4(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (s.current.shards || []).map(sm).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
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
    l(v.type, am(v), v.target, i(v, e.lockRef.current));
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
    m ? C.createElement(a, { styles: V4(o) }) : null,
    h ? C.createElement(k4, { gapMode: "margin" }) : null
  );
}
const U4 = y4(bb, W4);
var Cs = C.forwardRef(function(e, t) {
  return C.createElement(Tc, jn({}, e, { ref: t, sideCar: U4 }));
});
Cs.classNames = Tc.classNames;
const Au = [
  "Enter",
  " "
], H4 = [
  "ArrowDown",
  "PageUp",
  "Home"
], _b = [
  "ArrowUp",
  "PageDown",
  "End"
], K4 = [
  ...H4,
  ..._b
], G4 = {
  ltr: [
    ...Au,
    "ArrowRight"
  ],
  rtl: [
    ...Au,
    "ArrowLeft"
  ]
}, Y4 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, jc = "Menu", [Ba, q4, Z4] = kr(jc), [fo, Ss] = ut(jc, [
  Z4,
  Un,
  Mr
]), kc = Un(), Cb = Mr(), [Sb, Dr] = fo(jc), [X4, Ns] = fo(jc), Q4 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = kc(t), [c, l] = X(null), u = q(!1), f = Je(a), p = zn(o);
  return J(() => {
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
  }, []), /* @__PURE__ */ $(na, i, /* @__PURE__ */ $(Sb, {
    scope: t,
    open: n,
    onOpenChange: f,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ $(X4, {
    scope: t,
    onClose: ve(
      () => f(!1),
      [
        f
      ]
    ),
    isUsingKeyboardRef: u,
    dir: p,
    modal: s
  }, r)));
}, Nb = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = kc(n);
  return /* @__PURE__ */ $($s, j({}, o, r, {
    ref: t
  }));
}), Eb = "MenuPortal", [J4, Pb] = fo(Eb, {
  forceMount: void 0
}), e7 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Dr(Eb, t);
  return /* @__PURE__ */ $(J4, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(ft, {
    present: n || a.open
  }, /* @__PURE__ */ $(Nc, {
    asChild: !0,
    container: o
  }, r)));
}, pn = "MenuContent", [t7, ef] = fo(pn), n7 = /* @__PURE__ */ F((e, t) => {
  const n = Pb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Dr(pn, e.__scopeMenu), s = Ns(pn, e.__scopeMenu);
  return /* @__PURE__ */ $(Ba.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(Ba.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ $(r7, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(o7, j({}, o, {
    ref: t
  })))));
}), r7 = /* @__PURE__ */ F((e, t) => {
  const n = Dr(pn, e.__scopeMenu), r = q(null), o = Ee(t, r);
  return J(() => {
    const a = r.current;
    if (a)
      return Oc(a);
  }, []), /* @__PURE__ */ $(tf, j({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: Q(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), o7 = /* @__PURE__ */ F((e, t) => {
  const n = Dr(pn, e.__scopeMenu);
  return /* @__PURE__ */ $(tf, j({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), tf = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: p, onDismiss: h, disableOutsideScroll: m, ...v } = e, g = Dr(pn, n), b = Ns(pn, n), y = kc(n), x = Cb(n), _ = q4(n), [w, N] = X(null), S = q(null), D = Ee(t, S, g.onContentChange), E = q(0), W = q(""), G = q(0), z = q(null), K = q("right"), L = q(0), P = m ? Cs : vn, R = m ? {
    as: gn,
    allowPinchZoom: !0
  } : void 0, O = (U) => {
    var Z, oe;
    const H = W.current + U, le = _().filter(
      (_e) => !_e.disabled
    ), be = document.activeElement, pe = (Z = le.find(
      (_e) => _e.ref.current === be
    )) === null || Z === void 0 ? void 0 : Z.textValue, ee = le.map(
      (_e) => _e.textValue
    ), re = _7(ee, H, pe), me = (oe = le.find(
      (_e) => _e.textValue === re
    )) === null || oe === void 0 ? void 0 : oe.ref.current;
    (function _e(ae) {
      W.current = ae, window.clearTimeout(E.current), ae !== "" && (E.current = window.setTimeout(
        () => _e(""),
        1e3
      ));
    })(H), me && setTimeout(
      () => me.focus()
    );
  };
  J(() => () => window.clearTimeout(E.current), []), wc();
  const V = ve((U) => {
    var Z, oe;
    return K.current === ((Z = z.current) === null || Z === void 0 ? void 0 : Z.side) && S7(U, (oe = z.current) === null || oe === void 0 ? void 0 : oe.area);
  }, []);
  return /* @__PURE__ */ $(t7, {
    scope: n,
    searchRef: W,
    onItemEnter: ve((U) => {
      V(U) && U.preventDefault();
    }, [
      V
    ]),
    onItemLeave: ve((U) => {
      var Z;
      V(U) || ((Z = S.current) === null || Z === void 0 || Z.focus(), N(null));
    }, [
      V
    ]),
    onTriggerLeave: ve((U) => {
      V(U) && U.preventDefault();
    }, [
      V
    ]),
    pointerGraceTimerRef: G,
    onPointerGraceIntentChange: ve((U) => {
      z.current = U;
    }, [])
  }, /* @__PURE__ */ $(P, R, /* @__PURE__ */ $($c, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: Q(a, (U) => {
      var Z;
      U.preventDefault(), (Z = S.current) === null || Z === void 0 || Z.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ $(uo, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: f,
    onInteractOutside: p,
    onDismiss: h
  }, /* @__PURE__ */ $(Ec, j({
    asChild: !0
  }, x, {
    dir: b.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: N,
    onEntryFocus: Q(c, (U) => {
      b.isUsingKeyboardRef.current || U.preventDefault();
    })
  }), /* @__PURE__ */ $(_s, j({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": Ab(g.open),
    "data-radix-menu-content": "",
    dir: b.dir
  }, y, v, {
    ref: D,
    style: {
      outline: "none",
      ...v.style
    },
    onKeyDown: Q(v.onKeyDown, (U) => {
      const oe = U.target.closest("[data-radix-menu-content]") === U.currentTarget, H = U.ctrlKey || U.altKey || U.metaKey, le = U.key.length === 1;
      oe && (U.key === "Tab" && U.preventDefault(), !H && le && O(U.key));
      const be = S.current;
      if (U.target !== be || !K4.includes(U.key))
        return;
      U.preventDefault();
      const ee = _().filter(
        (re) => !re.disabled
      ).map(
        (re) => re.ref.current
      );
      _b.includes(U.key) && ee.reverse(), w7(ee);
    }),
    onBlur: Q(e.onBlur, (U) => {
      U.currentTarget.contains(U.target) || (window.clearTimeout(E.current), W.current = "");
    }),
    onPointerMove: Q(e.onPointerMove, Va((U) => {
      const Z = U.target, oe = L.current !== U.clientX;
      if (U.currentTarget.contains(Z) && oe) {
        const H = U.clientX > L.current ? "right" : "left";
        K.current = H, L.current = U.clientX;
      }
    }))
  })))))));
}), Ob = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    role: "group"
  }, r, {
    ref: t
  }));
}), a7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({}, r, {
    ref: t
  }));
}), Ru = "MenuItem", im = "menu.itemSelect", nf = /* @__PURE__ */ F((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = q(null), s = Ns(Ru, e.__scopeMenu), i = ef(Ru, e.__scopeMenu), c = Ee(t, a), l = q(!1), u = () => {
    const f = a.current;
    if (!n && f) {
      const p = new CustomEvent(im, {
        bubbles: !0,
        cancelable: !0
      });
      f.addEventListener(
        im,
        (h) => r == null ? void 0 : r(h),
        {
          once: !0
        }
      ), $i(f, p), p.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ $(Tb, j({}, o, {
    ref: c,
    disabled: n,
    onClick: Q(e.onClick, u),
    onPointerDown: (f) => {
      var p;
      (p = e.onPointerDown) === null || p === void 0 || p.call(e, f), l.current = !0;
    },
    onPointerUp: Q(e.onPointerUp, (f) => {
      var p;
      l.current || (p = f.currentTarget) === null || p === void 0 || p.click();
    }),
    onKeyDown: Q(e.onKeyDown, (f) => {
      const p = i.searchRef.current !== "";
      n || p && f.key === " " || Au.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
    })
  }));
}), Tb = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = ef(Ru, n), i = Cb(n), c = q(null), l = Ee(t, c), [u, f] = X(!1), [p, h] = X("");
  return J(() => {
    const m = c.current;
    if (m) {
      var v;
      h(((v = m.textContent) !== null && v !== void 0 ? v : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ $(Ba.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? p
  }, /* @__PURE__ */ $(Pc, j({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ $(de.div, j({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: Q(e.onPointerMove, Va((m) => {
      r ? s.onItemLeave(m) : (s.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: Q(e.onPointerLeave, Va(
      (m) => s.onItemLeave(m)
    )),
    onFocus: Q(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: Q(
      e.onBlur,
      () => f(!1)
    )
  }))));
}), s7 = /* @__PURE__ */ F((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ $(kb, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ $(nf, j({
    role: "menuitemcheckbox",
    "aria-checked": Li(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": rf(n),
    onSelect: Q(
      o.onSelect,
      () => r == null ? void 0 : r(Li(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), i7 = "MenuRadioGroup", [c7, l7] = fo(i7, {
  value: void 0,
  onValueChange: () => {
  }
}), u7 = /* @__PURE__ */ F((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = Je(r);
  return /* @__PURE__ */ $(c7, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ $(Ob, j({}, o, {
    ref: t
  })));
}), d7 = "MenuRadioItem", f7 = /* @__PURE__ */ F((e, t) => {
  const { value: n, ...r } = e, o = l7(d7, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ $(kb, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ $(nf, j({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": rf(a),
    onSelect: Q(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), jb = "MenuItemIndicator", [kb, p7] = fo(jb, {
  checked: !1
}), h7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = p7(jb, n);
  return /* @__PURE__ */ $(ft, {
    present: r || Li(a.checked) || a.checked === !0
  }, /* @__PURE__ */ $(de.span, j({}, o, {
    ref: t,
    "data-state": rf(a.checked)
  })));
}), m7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), Mb = "MenuSub", [v7, Db] = fo(Mb), g7 = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Dr(Mb, t), s = kc(t), [i, c] = X(null), [l, u] = X(null), f = Je(o);
  return J(() => (a.open === !1 && f(!1), () => f(!1)), [
    a.open,
    f
  ]), /* @__PURE__ */ $(na, s, /* @__PURE__ */ $(Sb, {
    scope: t,
    open: r,
    onOpenChange: f,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ $(v7, {
    scope: t,
    contentId: bt(),
    triggerId: bt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Xs = "MenuSubTrigger", b7 = /* @__PURE__ */ F((e, t) => {
  const n = Dr(Xs, e.__scopeMenu), r = Ns(Xs, e.__scopeMenu), o = Db(Xs, e.__scopeMenu), a = ef(Xs, e.__scopeMenu), s = q(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = ve(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return J(
    () => u,
    [
      u
    ]
  ), J(() => {
    const f = i.current;
    return () => {
      window.clearTimeout(f), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ $(Nb, j({
    asChild: !0
  }, l), /* @__PURE__ */ $(Tb, j({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": Ab(n.open)
  }, e, {
    ref: ps(t, o.onTriggerChange),
    onClick: (f) => {
      var p;
      (p = e.onClick) === null || p === void 0 || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: Q(e.onPointerMove, Va((f) => {
      a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: Q(e.onPointerLeave, Va((f) => {
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
    onKeyDown: Q(e.onKeyDown, (f) => {
      const p = a.searchRef.current !== "";
      if (!(e.disabled || p && f.key === " ") && G4[r.dir].includes(f.key)) {
        var h;
        n.onOpenChange(!0), (h = n.content) === null || h === void 0 || h.focus(), f.preventDefault();
      }
    })
  })));
}), y7 = "MenuSubContent", x7 = /* @__PURE__ */ F((e, t) => {
  const n = Pb(pn, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Dr(pn, e.__scopeMenu), s = Ns(pn, e.__scopeMenu), i = Db(y7, e.__scopeMenu), c = q(null), l = Ee(t, c);
  return /* @__PURE__ */ $(Ba.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(Ba.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ $(tf, j({
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
    onFocusOutside: Q(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: Q(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: Q(e.onKeyDown, (u) => {
      const f = u.currentTarget.contains(u.target), p = Y4[s.dir].includes(u.key);
      if (f && p) {
        var h;
        a.onOpenChange(!1), (h = i.trigger) === null || h === void 0 || h.focus(), u.preventDefault();
      }
    })
  })))));
});
function Ab(e) {
  return e ? "open" : "closed";
}
function Li(e) {
  return e === "indeterminate";
}
function rf(e) {
  return Li(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function w7(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function $7(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function _7(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = $7(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function C7(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function S7(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return C7(n, t);
}
function Va(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const of = Q4, af = Nb, sf = e7, cf = n7, lf = Ob, uf = a7, df = nf, ff = s7, pf = u7, hf = f7, mf = h7, vf = m7, gf = g7, bf = b7, yf = x7, Rb = "ContextMenu", [N7, uY] = ut(Rb, [
  Ss
]), It = Ss(), [E7, Ib] = N7(Rb), P7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = X(!1), c = It(t), l = Je(r), u = ve((f) => {
    i(f), l(f);
  }, [
    l
  ]);
  return /* @__PURE__ */ $(E7, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ $(of, j({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, O7 = "ContextMenuTrigger", T7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Ib(O7, n), s = It(n), i = q({
    x: 0,
    y: 0
  }), c = q({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = q(0), u = ve(
    () => window.clearTimeout(l.current),
    []
  ), f = (p) => {
    i.current = {
      x: p.clientX,
      y: p.clientY
    }, a.onOpenChange(!0);
  };
  return J(
    () => u,
    [
      u
    ]
  ), J(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(af, j({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ $(de.span, j({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : Q(e.onContextMenu, (p) => {
      u(), f(p), p.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : Q(e.onPointerDown, Qs((p) => {
      u(), l.current = window.setTimeout(
        () => f(p),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : Q(e.onPointerMove, Qs(u)),
    onPointerCancel: r ? e.onPointerCancel : Q(e.onPointerCancel, Qs(u)),
    onPointerUp: r ? e.onPointerUp : Q(e.onPointerUp, Qs(u))
  })));
}), j7 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = It(t);
  return /* @__PURE__ */ $(sf, j({}, r, n));
}, k7 = "ContextMenuContent", M7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = Ib(k7, n), a = It(n), s = q(!1);
  return /* @__PURE__ */ $(cf, j({}, a, r, {
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
}), D7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), A7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), R7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), I7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), L7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(pf, j({}, o, r, {
    ref: t
  }));
}), F7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(hf, j({}, o, r, {
    ref: t
  }));
}), B7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(mf, j({}, o, r, {
    ref: t
  }));
}), V7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(vf, j({}, o, r, {
    ref: t
  }));
}), z7 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = It(t), [i, c] = vt({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ $(gf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, W7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(bf, j({}, o, r, {
    ref: t
  }));
}), U7 = /* @__PURE__ */ F((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = It(n);
  return /* @__PURE__ */ $(yf, j({}, o, r, {
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
const H7 = P7, K7 = T7, Lb = j7, Fb = M7, G7 = D7, Bb = A7, Vb = R7, zb = I7, Y7 = L7, Wb = F7, Ub = B7, Hb = V7, q7 = z7, Kb = W7, Gb = U7, dY = H7, fY = K7, pY = G7, hY = Lb, mY = q7, vY = Y7, Z7 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  Kb,
  {
    ref: o,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(Tr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Z7.displayName = Kb.displayName;
const X7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Gb,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
X7.displayName = Gb.displayName;
const Q7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(Lb, { children: /* @__PURE__ */ d.jsx(
  Fb,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
Q7.displayName = Fb.displayName;
const J7 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Vb,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
J7.displayName = Vb.displayName;
const e8 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  zb,
  {
    ref: o,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Ub, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
e8.displayName = zb.displayName;
const t8 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Wb,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(Ub, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
t8.displayName = Wb.displayName;
const n8 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Bb,
  {
    ref: r,
    className: k(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
n8.displayName = Bb.displayName;
const r8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Hb,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
r8.displayName = Hb.displayName;
const o8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: k(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
o8.displayName = "ContextMenuShortcut";
var Es = (e) => e.type === "checkbox", Po = (e) => e instanceof Date, Mt = (e) => e == null;
const Yb = (e) => typeof e == "object";
var Ct = (e) => !Mt(e) && !Array.isArray(e) && Yb(e) && !Po(e), qb = (e) => Ct(e) && e.target ? Es(e.target) ? e.target.checked : e.target.value : e, a8 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Zb = (e, t) => e.has(a8(t)), s8 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Ct(t) && t.hasOwnProperty("isPrototypeOf");
}, xf = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Bt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(xf && (e instanceof Blob || e instanceof FileList)) && (n || Ct(e)))
    if (t = n ? [] : {}, !n && !s8(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Bt(e[r]));
  else
    return e;
  return t;
}
var Ps = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ht = (e) => e === void 0, he = (e, t, n) => {
  if (!t || !Ct(e))
    return n;
  const r = Ps(t.split(/[,[\].]+?/)).reduce((o, a) => Mt(o) ? o : o[a], e);
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
}, Zn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Xb = I.createContext(null), Mc = () => I.useContext(Xb), i8 = (e) => {
  const { children: t, ...n } = e;
  return I.createElement(Xb.Provider, { value: n }, t);
};
var Qb = (e, t, n, r = !0) => {
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
}, Ht = (e) => Ct(e) && !Object.keys(e).length, Jb = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Ht(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || dn.all));
}, pi = (e) => Array.isArray(e) ? e : [e], ey = (e, t, n) => !e || !t || e === t || pi(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function wf(e) {
  const t = I.useRef(e);
  t.current = e, I.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function c8(e) {
  const t = Mc(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = I.useState(n._formState), c = I.useRef(!0), l = I.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = I.useRef(o);
  return u.current = o, wf({
    disabled: r,
    next: (f) => c.current && ey(u.current, f.name, a) && Jb(f, l.current, n._updateFormState) && i({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), I.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), Qb(s, n, l.current, !1);
}
var Mn = (e) => typeof e == "string", ty = (e, t, n, r, o) => Mn(e) ? (r && t.watch.add(e), he(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), he(n, a))) : (r && (t.watchAll = !0), n);
function l8(e) {
  const t = Mc(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = I.useRef(r);
  i.current = r, wf({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      ey(i.current, u.name, s) && l(Bt(ty(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = I.useState(n._getWatch(r, o));
  return I.useEffect(() => n._removeUnmounted()), c;
}
var $f = (e) => /^\w*$/.test(e), ny = (e) => Ps(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Ze = (e, t, n) => {
  let r = -1;
  const o = $f(t) ? [t] : ny(t), a = o.length, s = a - 1;
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
function u8(e) {
  const t = Mc(), { name: n, disabled: r, control: o = t.control, shouldUnregister: a } = e, s = Zb(o._names.array, n), i = l8({
    control: o,
    name: n,
    defaultValue: he(o._formValues, n, he(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = c8({
    control: o,
    name: n
  }), l = I.useRef(o.register(n, {
    ...e.rules,
    value: i,
    ...ln(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return I.useEffect(() => {
    const u = o._options.shouldUnregister || a, f = (p, h) => {
      const m = he(o._fields, p);
      m && (m._f.mount = h);
    };
    if (f(n, !0), u) {
      const p = Bt(he(o._options.defaultValues, n));
      Ze(o._defaultValues, n, p), ht(he(o._formValues, n)) && Ze(o._formValues, n, p);
    }
    return () => {
      (s ? u && !o._state.action : u) ? o.unregister(n) : f(n, !1);
    };
  }, [n, o, s, a]), I.useEffect(() => {
    he(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: he(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: i,
      ...ln(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: I.useCallback((u) => l.current.onChange({
        target: {
          value: qb(u),
          name: n
        },
        type: Fi.CHANGE
      }), [n]),
      onBlur: I.useCallback(() => l.current.onBlur({
        target: {
          value: he(o._formValues, n),
          name: n
        },
        type: Fi.BLUR
      }), [n, o]),
      ref: (u) => {
        const f = he(o._fields, n);
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
        get: () => !!he(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!he(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!he(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!he(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => he(c.errors, n)
      }
    })
  };
}
const d8 = (e) => e.render(u8(e));
var ry = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, cm = (e) => ({
  isOnSubmit: !e || e === dn.onSubmit,
  isOnBlur: e === dn.onBlur,
  isOnChange: e === dn.onChange,
  isOnAll: e === dn.all,
  isOnTouch: e === dn.onTouched
}), lm = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Ea = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const a = he(e, o);
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
var f8 = (e, t, n) => {
  const r = Ps(he(e, n));
  return Ze(r, "root", t[n]), Ze(e, n, r), e;
}, _f = (e) => e.type === "file", gr = (e) => typeof e == "function", Bi = (e) => {
  if (!xf)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, hi = (e) => Mn(e), Cf = (e) => e.type === "radio", Vi = (e) => e instanceof RegExp;
const um = {
  value: !1,
  isValid: !1
}, dm = { value: !0, isValid: !0 };
var oy = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ht(e[0].attributes.value) ? ht(e[0].value) || e[0].value === "" ? dm : { value: e[0].value, isValid: !0 } : dm
    ) : um;
  }
  return um;
};
const fm = {
  isValid: !1,
  value: null
};
var ay = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, fm) : fm;
function pm(e, t, n = "validate") {
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
}, hm = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: f, pattern: p, validate: h, name: m, valueAsNumber: v, mount: g, disabled: b } = e._f, y = he(t, m);
  if (!g || b)
    return {};
  const x = s ? s[0] : a, _ = (z) => {
    r && x.reportValidity && (x.setCustomValidity(ln(z) ? "" : z || ""), x.reportValidity());
  }, w = {}, N = Cf(a), S = Es(a), D = N || S, E = (v || _f(a)) && ht(a.value) && ht(y) || Bi(a) && a.value === "" || y === "" || Array.isArray(y) && !y.length, W = ry.bind(null, m, n, w), G = (z, K, L, P = Zn.maxLength, R = Zn.minLength) => {
    const O = z ? K : L;
    w[m] = {
      type: z ? P : R,
      message: O,
      ref: a,
      ...W(z ? P : R, O)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : i && (!D && (E || Mt(y)) || ln(y) && !y || S && !oy(s).isValid || N && !ay(s).isValid)) {
    const { value: z, message: K } = hi(i) ? { value: !!i, message: i } : So(i);
    if (z && (w[m] = {
      type: Zn.required,
      message: K,
      ref: x,
      ...W(Zn.required, K)
    }, !n))
      return _(K), w;
  }
  if (!E && (!Mt(u) || !Mt(f))) {
    let z, K;
    const L = So(f), P = So(u);
    if (!Mt(y) && !isNaN(y)) {
      const R = a.valueAsNumber || y && +y;
      Mt(L.value) || (z = R > L.value), Mt(P.value) || (K = R < P.value);
    } else {
      const R = a.valueAsDate || new Date(y), O = (Z) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Z), V = a.type == "time", U = a.type == "week";
      Mn(L.value) && y && (z = V ? O(y) > O(L.value) : U ? y > L.value : R > new Date(L.value)), Mn(P.value) && y && (K = V ? O(y) < O(P.value) : U ? y < P.value : R < new Date(P.value));
    }
    if ((z || K) && (G(!!z, L.message, P.message, Zn.max, Zn.min), !n))
      return _(w[m].message), w;
  }
  if ((c || l) && !E && (Mn(y) || o && Array.isArray(y))) {
    const z = So(c), K = So(l), L = !Mt(z.value) && y.length > +z.value, P = !Mt(K.value) && y.length < +K.value;
    if ((L || P) && (G(L, z.message, K.message), !n))
      return _(w[m].message), w;
  }
  if (p && !E && Mn(y)) {
    const { value: z, message: K } = So(p);
    if (Vi(z) && !y.match(z) && (w[m] = {
      type: Zn.pattern,
      message: K,
      ref: a,
      ...W(Zn.pattern, K)
    }, !n))
      return _(K), w;
  }
  if (h) {
    if (gr(h)) {
      const z = await h(y, t), K = pm(z, x);
      if (K && (w[m] = {
        ...K,
        ...W(Zn.validate, K.message)
      }, !n))
        return _(K.message), w;
    } else if (Ct(h)) {
      let z = {};
      for (const K in h) {
        if (!Ht(z) && !n)
          break;
        const L = pm(await h[K](y, t), x, K);
        L && (z = {
          ...L,
          ...W(K, L.message)
        }, _(L.message), n && (w[m] = z));
      }
      if (!Ht(z) && (w[m] = {
        ref: x,
        ...z
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function p8(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = ht(e) ? r++ : e[t[r++]];
  return e;
}
function h8(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !ht(e[t]))
      return !1;
  return !0;
}
function _t(e, t) {
  const n = Array.isArray(t) ? t : $f(t) ? [t] : ny(t), r = n.length === 1 ? e : p8(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (Ct(r) && Ht(r) || Array.isArray(r) && h8(r)) && _t(e, n.slice(0, -1)), e;
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
}, zi = (e) => Mt(e) || !Yb(e);
function Hr(e, t) {
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
      if (Po(a) && Po(s) || Ct(a) && Ct(s) || Array.isArray(a) && Array.isArray(s) ? !Hr(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var sy = (e) => e.type === "select-multiple", m8 = (e) => Cf(e) || Es(e), Al = (e) => Bi(e) && e.isConnected, iy = (e) => {
  for (const t in e)
    if (gr(e[t]))
      return !0;
  return !1;
};
function Wi(e, t = {}) {
  const n = Array.isArray(e);
  if (Ct(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || Ct(e[r]) && !iy(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Wi(e[r], t[r])) : Mt(e[r]) || (t[r] = !0);
  return t;
}
function cy(e, t, n) {
  const r = Array.isArray(e);
  if (Ct(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || Ct(e[o]) && !iy(e[o]) ? ht(t) || zi(n[o]) ? n[o] = Array.isArray(e[o]) ? Wi(e[o], []) : { ...Wi(e[o]) } : cy(e[o], Mt(t) ? {} : t[o], n[o]) : n[o] = !Hr(e[o], t[o]);
  return n;
}
var Js = (e, t) => cy(e, t, Wi(t)), ly = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => ht(e) ? e : t ? e === "" ? NaN : e && +e : n && Mn(e) ? new Date(e) : r ? r(e) : e;
function Rl(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return _f(t) ? t.files : Cf(t) ? ay(e.refs).value : sy(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Es(t) ? oy(e.refs).value : ly(ht(t.value) ? e.ref.value : t.value, e);
}
var v8 = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = he(t, a);
    s && Ze(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, xa = (e) => ht(e) ? e : Vi(e) ? e.source : Ct(e) ? Vi(e.value) ? e.value.source : e.value : e, g8 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function mm(e, t, n) {
  const r = he(e, n);
  if (r || $f(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = he(t, a), i = he(e, a);
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
var b8 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, y8 = (e, t) => !Ps(he(e, t)).length && _t(e, t);
const x8 = {
  mode: dn.onSubmit,
  reValidateMode: dn.onChange,
  shouldFocusError: !0
};
function w8(e = {}) {
  let t = {
    ...x8,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: gr(t.defaultValues),
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
  }, p = cm(t.mode), h = cm(t.reValidateMode), m = t.criteriaMode === dn.all, v = (T) => (B) => {
    clearTimeout(l), l = setTimeout(T, B);
  }, g = async (T) => {
    if (u.isValid || T) {
      const B = t.resolver ? Ht((await D()).errors) : await W(r, !0);
      B !== n.isValid && f.state.next({
        isValid: B
      });
    }
  }, b = (T, B) => {
    (u.isValidating || u.validatingFields) && ((T || Array.from(i.mount)).forEach((Y) => {
      Y && (B ? Ze(n.validatingFields, Y, B) : _t(n.validatingFields, Y));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Ht(n.validatingFields)
    }));
  }, y = (T, B = [], Y, ue, ce = !0, te = !0) => {
    if (ue && Y) {
      if (s.action = !0, te && Array.isArray(he(r, T))) {
        const we = Y(he(r, T), ue.argA, ue.argB);
        ce && Ze(r, T, we);
      }
      if (te && Array.isArray(he(n.errors, T))) {
        const we = Y(he(n.errors, T), ue.argA, ue.argB);
        ce && Ze(n.errors, T, we), y8(n.errors, T);
      }
      if (u.touchedFields && te && Array.isArray(he(n.touchedFields, T))) {
        const we = Y(he(n.touchedFields, T), ue.argA, ue.argB);
        ce && Ze(n.touchedFields, T, we);
      }
      u.dirtyFields && (n.dirtyFields = Js(o, a)), f.state.next({
        name: T,
        isDirty: z(T, B),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Ze(a, T, B);
  }, x = (T, B) => {
    Ze(n.errors, T, B), f.state.next({
      errors: n.errors
    });
  }, _ = (T) => {
    n.errors = T, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, w = (T, B, Y, ue) => {
    const ce = he(r, T);
    if (ce) {
      const te = he(a, T, ht(Y) ? he(o, T) : Y);
      ht(te) || ue && ue.defaultChecked || B ? Ze(a, T, B ? te : Rl(ce._f)) : P(T, te), s.mount && g();
    }
  }, N = (T, B, Y, ue, ce) => {
    let te = !1, we = !1;
    const De = {
      name: T
    }, Ke = !!(he(r, T) && he(r, T)._f.disabled);
    if (!Y || ue) {
      u.isDirty && (we = n.isDirty, n.isDirty = De.isDirty = z(), te = we !== De.isDirty);
      const et = Ke || Hr(he(o, T), B);
      we = !!(!Ke && he(n.dirtyFields, T)), et || Ke ? _t(n.dirtyFields, T) : Ze(n.dirtyFields, T, !0), De.dirtyFields = n.dirtyFields, te = te || u.dirtyFields && we !== !et;
    }
    if (Y) {
      const et = he(n.touchedFields, T);
      et || (Ze(n.touchedFields, T, Y), De.touchedFields = n.touchedFields, te = te || u.touchedFields && et !== Y);
    }
    return te && ce && f.state.next(De), te ? De : {};
  }, S = (T, B, Y, ue) => {
    const ce = he(n.errors, T), te = u.isValid && ln(B) && n.isValid !== B;
    if (e.delayError && Y ? (c = v(() => x(T, Y)), c(e.delayError)) : (clearTimeout(l), c = null, Y ? Ze(n.errors, T, Y) : _t(n.errors, T)), (Y ? !Hr(ce, Y) : ce) || !Ht(ue) || te) {
      const we = {
        ...ue,
        ...te && ln(B) ? { isValid: B } : {},
        errors: n.errors,
        name: T
      };
      n = {
        ...n,
        ...we
      }, f.state.next(we);
    }
  }, D = async (T) => {
    b(T, !0);
    const B = await t.resolver(a, t.context, v8(T || i.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(T), B;
  }, E = async (T) => {
    const { errors: B } = await D(T);
    if (T)
      for (const Y of T) {
        const ue = he(B, Y);
        ue ? Ze(n.errors, Y, ue) : _t(n.errors, Y);
      }
    else
      n.errors = B;
    return B;
  }, W = async (T, B, Y = {
    valid: !0
  }) => {
    for (const ue in T) {
      const ce = T[ue];
      if (ce) {
        const { _f: te, ...we } = ce;
        if (te) {
          const De = i.array.has(te.name);
          b([ue], !0);
          const Ke = await hm(ce, a, m, t.shouldUseNativeValidation && !B, De);
          if (b([ue]), Ke[te.name] && (Y.valid = !1, B))
            break;
          !B && (he(Ke, te.name) ? De ? f8(n.errors, Ke, te.name) : Ze(n.errors, te.name, Ke[te.name]) : _t(n.errors, te.name));
        }
        we && await W(we, B, Y);
      }
    }
    return Y.valid;
  }, G = () => {
    for (const T of i.unMount) {
      const B = he(r, T);
      B && (B._f.refs ? B._f.refs.every((Y) => !Al(Y)) : !Al(B._f.ref)) && ee(T);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, z = (T, B) => (T && B && Ze(a, T, B), !Hr(oe(), o)), K = (T, B, Y) => ty(T, i, {
    ...s.mount ? a : ht(B) ? o : Mn(T) ? { [T]: B } : B
  }, Y, B), L = (T) => Ps(he(s.mount ? a : o, T, e.shouldUnregister ? he(o, T, []) : [])), P = (T, B, Y = {}) => {
    const ue = he(r, T);
    let ce = B;
    if (ue) {
      const te = ue._f;
      te && (!te.disabled && Ze(a, T, ly(B, te)), ce = Bi(te.ref) && Mt(B) ? "" : B, sy(te.ref) ? [...te.ref.options].forEach((we) => we.selected = ce.includes(we.value)) : te.refs ? Es(te.ref) ? te.refs.length > 1 ? te.refs.forEach((we) => (!we.defaultChecked || !we.disabled) && (we.checked = Array.isArray(ce) ? !!ce.find((De) => De === we.value) : ce === we.value)) : te.refs[0] && (te.refs[0].checked = !!ce) : te.refs.forEach((we) => we.checked = we.value === ce) : _f(te.ref) ? te.ref.value = "" : (te.ref.value = ce, te.ref.type || f.values.next({
        name: T,
        values: { ...a }
      })));
    }
    (Y.shouldDirty || Y.shouldTouch) && N(T, ce, Y.shouldTouch, Y.shouldDirty, !0), Y.shouldValidate && Z(T);
  }, R = (T, B, Y) => {
    for (const ue in B) {
      const ce = B[ue], te = `${T}.${ue}`, we = he(r, te);
      (i.array.has(T) || !zi(ce) || we && !we._f) && !Po(ce) ? R(te, ce, Y) : P(te, ce, Y);
    }
  }, O = (T, B, Y = {}) => {
    const ue = he(r, T), ce = i.array.has(T), te = Bt(B);
    Ze(a, T, te), ce ? (f.array.next({
      name: T,
      values: { ...a }
    }), (u.isDirty || u.dirtyFields) && Y.shouldDirty && f.state.next({
      name: T,
      dirtyFields: Js(o, a),
      isDirty: z(T, te)
    })) : ue && !ue._f && !Mt(te) ? R(T, te, Y) : P(T, te, Y), lm(T, i) && f.state.next({ ...n }), f.values.next({
      name: s.mount ? T : void 0,
      values: { ...a }
    });
  }, V = async (T) => {
    s.mount = !0;
    const B = T.target;
    let Y = B.name, ue = !0;
    const ce = he(r, Y), te = () => B.type ? Rl(ce._f) : qb(T), we = (De) => {
      ue = Number.isNaN(De) || De === he(a, Y, De);
    };
    if (ce) {
      let De, Ke;
      const et = te(), yt = T.type === Fi.BLUR || T.type === Fi.FOCUS_OUT, Qt = !g8(ce._f) && !t.resolver && !he(n.errors, Y) && !ce._f.deps || b8(yt, he(n.touchedFields, Y), n.isSubmitted, h, p), Ce = lm(Y, i, yt);
      Ze(a, Y, et), yt ? (ce._f.onBlur && ce._f.onBlur(T), c && c(0)) : ce._f.onChange && ce._f.onChange(T);
      const Se = N(Y, et, yt, !1), Be = !Ht(Se) || Ce;
      if (!yt && f.values.next({
        name: Y,
        type: T.type,
        values: { ...a }
      }), Qt)
        return u.isValid && g(), Be && f.state.next({ name: Y, ...Ce ? {} : Se });
      if (!yt && Ce && f.state.next({ ...n }), t.resolver) {
        const { errors: Le } = await D([Y]);
        if (we(et), ue) {
          const Xe = mm(n.errors, r, Y), tt = mm(Le, r, Xe.name || Y);
          De = tt.error, Y = tt.name, Ke = Ht(Le);
        }
      } else
        b([Y], !0), De = (await hm(ce, a, m, t.shouldUseNativeValidation))[Y], b([Y]), we(et), ue && (De ? Ke = !1 : u.isValid && (Ke = await W(r, !0)));
      ue && (ce._f.deps && Z(ce._f.deps), S(Y, Ke, De, Se));
    }
  }, U = (T, B) => {
    if (he(n.errors, B) && T.focus)
      return T.focus(), 1;
  }, Z = async (T, B = {}) => {
    let Y, ue;
    const ce = pi(T);
    if (t.resolver) {
      const te = await E(ht(T) ? T : ce);
      Y = Ht(te), ue = T ? !ce.some((we) => he(te, we)) : Y;
    } else
      T ? (ue = (await Promise.all(ce.map(async (te) => {
        const we = he(r, te);
        return await W(we && we._f ? { [te]: we } : we);
      }))).every(Boolean), !(!ue && !n.isValid) && g()) : ue = Y = await W(r);
    return f.state.next({
      ...!Mn(T) || u.isValid && Y !== n.isValid ? {} : { name: T },
      ...t.resolver || !T ? { isValid: Y } : {},
      errors: n.errors
    }), B.shouldFocus && !ue && Ea(r, U, T ? ce : i.mount), ue;
  }, oe = (T) => {
    const B = {
      ...o,
      ...s.mount ? a : {}
    };
    return ht(T) ? B : Mn(T) ? he(B, T) : T.map((Y) => he(B, Y));
  }, H = (T, B) => ({
    invalid: !!he((B || n).errors, T),
    isDirty: !!he((B || n).dirtyFields, T),
    isTouched: !!he((B || n).touchedFields, T),
    isValidating: !!he((B || n).validatingFields, T),
    error: he((B || n).errors, T)
  }), le = (T) => {
    T && pi(T).forEach((B) => _t(n.errors, B)), f.state.next({
      errors: T ? n.errors : {}
    });
  }, be = (T, B, Y) => {
    const ue = (he(r, T, { _f: {} })._f || {}).ref;
    Ze(n.errors, T, {
      ...B,
      ref: ue
    }), f.state.next({
      name: T,
      errors: n.errors,
      isValid: !1
    }), Y && Y.shouldFocus && ue && ue.focus && ue.focus();
  }, pe = (T, B) => gr(T) ? f.values.subscribe({
    next: (Y) => T(K(void 0, B), Y)
  }) : K(T, B, !0), ee = (T, B = {}) => {
    for (const Y of T ? pi(T) : i.mount)
      i.mount.delete(Y), i.array.delete(Y), B.keepValue || (_t(r, Y), _t(a, Y)), !B.keepError && _t(n.errors, Y), !B.keepDirty && _t(n.dirtyFields, Y), !B.keepTouched && _t(n.touchedFields, Y), !B.keepIsValidating && _t(n.validatingFields, Y), !t.shouldUnregister && !B.keepDefaultValue && _t(o, Y);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...B.keepDirty ? { isDirty: z() } : {}
    }), !B.keepIsValid && g();
  }, re = ({ disabled: T, name: B, field: Y, fields: ue, value: ce }) => {
    if (ln(T)) {
      const te = T ? void 0 : ht(ce) ? Rl(Y ? Y._f : he(ue, B)._f) : ce;
      Ze(a, B, te), N(B, te, !1, !1, !0);
    }
  }, me = (T, B = {}) => {
    let Y = he(r, T);
    const ue = ln(B.disabled);
    return Ze(r, T, {
      ...Y || {},
      _f: {
        ...Y && Y._f ? Y._f : { ref: { name: T } },
        name: T,
        mount: !0,
        ...B
      }
    }), i.mount.add(T), Y ? re({
      field: Y,
      disabled: B.disabled,
      name: T,
      value: B.value
    }) : w(T, !0, B.value), {
      ...ue ? { disabled: B.disabled } : {},
      ...t.progressive ? {
        required: !!B.required,
        min: xa(B.min),
        max: xa(B.max),
        minLength: xa(B.minLength),
        maxLength: xa(B.maxLength),
        pattern: xa(B.pattern)
      } : {},
      name: T,
      onChange: V,
      onBlur: V,
      ref: (ce) => {
        if (ce) {
          me(T, B), Y = he(r, T);
          const te = ht(ce.value) && ce.querySelectorAll && ce.querySelectorAll("input,select,textarea")[0] || ce, we = m8(te), De = Y._f.refs || [];
          if (we ? De.find((Ke) => Ke === te) : te === Y._f.ref)
            return;
          Ze(r, T, {
            _f: {
              ...Y._f,
              ...we ? {
                refs: [
                  ...De.filter(Al),
                  te,
                  ...Array.isArray(he(o, T)) ? [{}] : []
                ],
                ref: { type: te.type, name: T }
              } : { ref: te }
            }
          }), w(T, !1, void 0, te);
        } else
          Y = he(r, T, {}), Y._f && (Y._f.mount = !1), (t.shouldUnregister || B.shouldUnregister) && !(Zb(i.array, T) && s.action) && i.unMount.add(T);
      }
    };
  }, _e = () => t.shouldFocusError && Ea(r, U, i.mount), ae = (T) => {
    ln(T) && (f.state.next({ disabled: T }), Ea(r, (B, Y) => {
      let ue = T;
      const ce = he(r, Y);
      ce && ln(ce._f.disabled) && (ue || (ue = ce._f.disabled)), B.disabled = ue;
    }, 0, !1));
  }, fe = (T, B) => async (Y) => {
    let ue;
    Y && (Y.preventDefault && Y.preventDefault(), Y.persist && Y.persist());
    let ce = Bt(a);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: te, values: we } = await D();
      n.errors = te, ce = we;
    } else
      await W(r);
    if (_t(n.errors, "root"), Ht(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await T(ce, Y);
      } catch (te) {
        ue = te;
      }
    } else
      B && await B({ ...n.errors }, Y), _e(), setTimeout(_e);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ht(n.errors) && !ue,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), ue)
      throw ue;
  }, A = (T, B = {}) => {
    he(r, T) && (ht(B.defaultValue) ? O(T, Bt(he(o, T))) : (O(T, B.defaultValue), Ze(o, T, Bt(B.defaultValue))), B.keepTouched || _t(n.touchedFields, T), B.keepDirty || (_t(n.dirtyFields, T), n.isDirty = B.defaultValue ? z(T, Bt(he(o, T))) : z()), B.keepError || (_t(n.errors, T), u.isValid && g()), f.state.next({ ...n }));
  }, ne = (T, B = {}) => {
    const Y = T ? Bt(T) : o, ue = Bt(Y), ce = Ht(T), te = ce ? o : ue;
    if (B.keepDefaultValues || (o = Y), !B.keepValues) {
      if (B.keepDirtyValues)
        for (const we of i.mount)
          he(n.dirtyFields, we) ? Ze(te, we, he(a, we)) : O(we, he(te, we));
      else {
        if (xf && ht(T))
          for (const we of i.mount) {
            const De = he(r, we);
            if (De && De._f) {
              const Ke = Array.isArray(De._f.refs) ? De._f.refs[0] : De._f.ref;
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
      a = e.shouldUnregister ? B.keepDefaultValues ? Bt(o) : {} : Bt(te), f.array.next({
        values: { ...te }
      }), f.values.next({
        values: { ...te }
      });
    }
    i = {
      mount: B.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, s.mount = !u.isValid || !!B.keepIsValid || !!B.keepDirtyValues, s.watch = !!e.shouldUnregister, f.state.next({
      submitCount: B.keepSubmitCount ? n.submitCount : 0,
      isDirty: ce ? !1 : B.keepDirty ? n.isDirty : !!(B.keepDefaultValues && !Hr(T, o)),
      isSubmitted: B.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: ce ? [] : B.keepDirtyValues ? B.keepDefaultValues && a ? Js(o, a) : n.dirtyFields : B.keepDefaultValues && T ? Js(o, T) : {},
      touchedFields: B.keepTouched ? n.touchedFields : {},
      errors: B.keepErrors ? n.errors : {},
      isSubmitSuccessful: B.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ye = (T, B) => ne(gr(T) ? T(a) : T, B);
  return {
    control: {
      register: me,
      unregister: ee,
      getFieldState: H,
      handleSubmit: fe,
      setError: be,
      _executeSchema: D,
      _getWatch: K,
      _getDirty: z,
      _updateValid: g,
      _removeUnmounted: G,
      _updateFieldArray: y,
      _updateDisabledField: re,
      _getFieldArray: L,
      _reset: ne,
      _resetDefaultValues: () => gr(t.defaultValues) && t.defaultValues().then((T) => {
        ye(T, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (T) => {
        n = {
          ...n,
          ...T
        };
      },
      _disableForm: ae,
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
      set _state(T) {
        s = T;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(T) {
        i = T;
      },
      get _formState() {
        return n;
      },
      set _formState(T) {
        n = T;
      },
      get _options() {
        return t;
      },
      set _options(T) {
        t = {
          ...t,
          ...T
        };
      }
    },
    trigger: Z,
    register: me,
    handleSubmit: fe,
    watch: pe,
    setValue: O,
    getValues: oe,
    reset: ye,
    resetField: A,
    clearErrors: le,
    unregister: ee,
    setError: be,
    setFocus: (T, B = {}) => {
      const Y = he(r, T), ue = Y && Y._f;
      if (ue) {
        const ce = ue.refs ? ue.refs[0] : ue.ref;
        ce.focus && (ce.focus(), B.shouldSelect && ce.select());
      }
    },
    getFieldState: H
  };
}
function uy(e = {}) {
  const t = I.useRef(), n = I.useRef(), [r, o] = I.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: gr(e.defaultValues),
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
    defaultValues: gr(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...w8(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, wf({
    subject: a._subjects.state,
    next: (s) => {
      Jb(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), I.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), I.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const s = a._getDirty();
      s !== r.isDirty && a._subjects.state.next({
        isDirty: s
      });
    }
  }, [a, r.isDirty]), I.useEffect(() => {
    e.values && !Hr(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, o((s) => ({ ...s }))) : a._resetDefaultValues();
  }, [e.values, a]), I.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), I.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), I.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = Qb(r, a), t.current;
}
const $8 = /* @__PURE__ */ F((e, t) => /* @__PURE__ */ $(de.label, j({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), dy = $8, _8 = Go(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Hn = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  dy,
  {
    ref: n,
    className: k(_8(), e),
    ...t
  }
));
Hn.displayName = dy.displayName;
const fy = i8, py = C.createContext(
  {}
), po = ({
  ...e
}) => /* @__PURE__ */ d.jsx(py.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(d8, { ...e }) }), Dc = () => {
  const e = C.useContext(py), t = C.useContext(hy), { getFieldState: n, formState: r } = Mc(), o = n(e.name, r);
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
}, hy = C.createContext(
  {}
), Ar = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ d.jsx(hy.Provider, { value: { id: r }, children: /* @__PURE__ */ d.jsx("div", { ref: n, className: k("space-y-2", e), ...t }) });
});
Ar.displayName = "FormItem";
const ho = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Dc();
  return /* @__PURE__ */ d.jsx(
    Hn,
    {
      ref: n,
      className: k(r && "text-destructive", e),
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
      className: k("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
ra.displayName = "FormDescription";
const C8 = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Dc(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ d.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: k("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
C8.displayName = "FormMessage";
const my = "Dialog", [vy, gy] = ut(my), [S8, En] = vy(my), N8 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = q(null), c = q(null), [l = !1, u] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(S8, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: bt(),
    titleId: bt(),
    descriptionId: bt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: ve(
      () => u(
        (f) => !f
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, E8 = "DialogTrigger", P8 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(E8, n), a = Ee(t, o.triggerRef);
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Sf(o.open)
  }, r, {
    ref: a,
    onClick: Q(e.onClick, o.onOpenToggle)
  }));
}), by = "DialogPortal", [O8, yy] = vy(by, {
  forceMount: void 0
}), T8 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = En(by, t);
  return /* @__PURE__ */ $(O8, {
    scope: t,
    forceMount: n
  }, Kr.map(
    r,
    (s) => /* @__PURE__ */ $(ft, {
      present: n || a.open
    }, /* @__PURE__ */ $(Nc, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Iu = "DialogOverlay", j8 = /* @__PURE__ */ F((e, t) => {
  const n = yy(Iu, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = En(Iu, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(k8, j({}, o, {
    ref: t
  }))) : null;
}), k8 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(Iu, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ $(Cs, {
      as: gn,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ $(de.div, j({
      "data-state": Sf(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Vo = "DialogContent", M8 = /* @__PURE__ */ F((e, t) => {
  const n = yy(Vo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = En(Vo, e.__scopeDialog);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(D8, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(A8, j({}, o, {
    ref: t
  })));
}), D8 = /* @__PURE__ */ F((e, t) => {
  const n = En(Vo, e.__scopeDialog), r = q(null), o = Ee(t, n.contentRef, r);
  return J(() => {
    const a = r.current;
    if (a)
      return Oc(a);
  }, []), /* @__PURE__ */ $(xy, j({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Q(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Q(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: Q(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), A8 = /* @__PURE__ */ F((e, t) => {
  const n = En(Vo, e.__scopeDialog), r = q(!1), o = q(!1);
  return /* @__PURE__ */ $(xy, j({}, e, {
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
}), xy = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = En(Vo, n), c = q(null), l = Ee(t, c);
  return wc(), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(uo, j({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Sf(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), wy = "DialogTitle", R8 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(wy, n);
  return /* @__PURE__ */ $(de.h2, j({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), I8 = "DialogDescription", L8 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(I8, n);
  return /* @__PURE__ */ $(de.p, j({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), F8 = "DialogClose", B8 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = En(F8, n);
  return /* @__PURE__ */ $(de.button, j({
    type: "button"
  }, r, {
    ref: t,
    onClick: Q(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Sf(e) {
  return e ? "open" : "closed";
}
const V8 = "DialogTitleWarning", [z8, gY] = uC(V8, {
  contentName: Vo,
  titleName: wy,
  docsSlug: "dialog"
}), Ts = N8, Ac = P8, js = T8, mo = j8, vo = M8, oa = R8, aa = L8, go = B8, $y = Ts, bY = Ac, W8 = js, yY = go, _y = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  mo,
  {
    ref: n,
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
_y.displayName = mo.displayName;
const Nf = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(W8, { children: [
  /* @__PURE__ */ d.jsx(_y, {}),
  /* @__PURE__ */ d.jsxs(
    vo,
    {
      ref: r,
      className: k(
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
Nf.displayName = vo.displayName;
const U8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
U8.displayName = "DialogHeader";
const H8 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
H8.displayName = "DialogFooter";
const K8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  oa,
  {
    ref: n,
    className: k(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
K8.displayName = oa.displayName;
const G8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  aa,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
G8.displayName = aa.displayName;
const Y8 = ({ id: e, form: t, label: n, description: r, iconDirection: o, classNameContainer: a, isLoading: s, validateInputIconClassNames: i, rest: c }) => {
  const [l, u] = C.useState(!1);
  return s ? /* @__PURE__ */ d.jsxs("div", { className: k("w-full", a), children: [
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
  ] }) : c.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: k("w-full", a), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsxs(Hn, { className: "flex", htmlFor: e, children: [
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
          className: k(i(), c.className),
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
        return /* @__PURE__ */ d.jsxs(Ar, { className: k("w-full", a), children: [
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
                className: k(i(), c.className),
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
}, q8 = ({ id: e, form: t, icon: n, label: r, description: o, iconDirection: a, classNameContainer: s, validateInputIconClassNames: i, isLoading: c, rest: l }) => c || c && l.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: k("w-full", s), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
    Ot,
    {
      className: k(i(), "w-full h-9 mt-2")
    }
  ) })
] }) : l.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: k("w-full", s), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsxs(Hn, { className: "flex", htmlFor: e, children: [
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
      return /* @__PURE__ */ d.jsxs(Ar, { className: k("w-full", s), children: [
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
      className: k(
        "w-full flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
za.displayName = "InputUI";
function Ef({ children: e, id: t, label: n, classNameContainer: r, description: o, icon: a, isLoading: s, iconDirection: i = "left", ...c }) {
  const l = () => i === "left" && (a || c.type === "password") ? "pl-9" : i === "right" ? "pr-9" : "";
  return c.type === "password" ? /* @__PURE__ */ d.jsx(
    Y8,
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
    q8,
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
const Z8 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), X8 = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, vm = (e) => {
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
    defaultValue: vm(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: vm(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function xY({ form: e, pid: t = Pt, format: n = !0 }) {
  var o, a, s, i, c, l, u, f, p, h, m, v, g, b, y, x, _;
  const r = (w) => {
    var E;
    const { value: N } = w.target, S = n ? Z8(N) : N, D = ((E = t == null ? void 0 : t.number) == null ? void 0 : E.id) || Pt.number.id;
    e.setValue(D, S);
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ d.jsx(
      BH,
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
      Ef,
      {
        id: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.id) || Pt.number.id,
        form: e,
        type: "text",
        defaultValue: (g = t == null ? void 0 : t.number) == null ? void 0 : g.defaultValue,
        onKeyPress: X8,
        onKeyUp: r,
        tabIndex: ((b = t == null ? void 0 : t.number) == null ? void 0 : b.tabIndex) || Pt.number.tabIndex,
        maxLength: ((y = t == null ? void 0 : t.number) == null ? void 0 : y.maxLength) || Pt.number.maxLength,
        placeholder: ((x = t == null ? void 0 : t.number) == null ? void 0 : x.placeholder) || Pt.number.placeholder,
        disabled: (_ = t == null ? void 0 : t.number) == null ? void 0 : _.disabled
      }
    )
  ] });
}
const Cy = "Popover", [Sy, wY] = ut(Cy, [
  Un
]), Pf = Un(), [Q8, sa] = Sy(Cy), J8 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Pf(t), c = q(null), [l, u] = X(!1), [f = !1, p] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ $(na, i, /* @__PURE__ */ $(Q8, {
    scope: t,
    contentId: bt(),
    triggerRef: c,
    open: f,
    onOpenChange: p,
    onOpenToggle: ve(
      () => p(
        (h) => !h
      ),
      [
        p
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ve(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: ve(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, eI = "PopoverTrigger", tI = /* @__PURE__ */ F((e, t) => {
  const { __scopePopover: n, ...r } = e, o = sa(eI, n), a = Pf(n), s = Ee(t, o.triggerRef), i = /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Py(o.open)
  }, r, {
    ref: s,
    onClick: Q(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ $($s, j({
    asChild: !0
  }, a), i);
}), Ny = "PopoverPortal", [nI, rI] = Sy(Ny, {
  forceMount: void 0
}), oI = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = sa(Ny, t);
  return /* @__PURE__ */ $(nI, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ $(ft, {
    present: n || a.open
  }, /* @__PURE__ */ $(Nc, {
    asChild: !0,
    container: o
  }, r)));
}, Wa = "PopoverContent", aI = /* @__PURE__ */ F((e, t) => {
  const n = rI(Wa, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = sa(Wa, e.__scopePopover);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ $(sI, j({}, o, {
    ref: t
  })) : /* @__PURE__ */ $(iI, j({}, o, {
    ref: t
  })));
}), sI = /* @__PURE__ */ F((e, t) => {
  const n = sa(Wa, e.__scopePopover), r = q(null), o = Ee(t, r), a = q(!1);
  return J(() => {
    const s = r.current;
    if (s)
      return Oc(s);
  }, []), /* @__PURE__ */ $(Cs, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $(Ey, j({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Q(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: Q(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: Q(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), iI = /* @__PURE__ */ F((e, t) => {
  const n = sa(Wa, e.__scopePopover), r = q(!1), o = q(!1);
  return /* @__PURE__ */ $(Ey, j({}, e, {
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
}), Ey = /* @__PURE__ */ F((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...f } = e, p = sa(Wa, n), h = Pf(n);
  return wc(), /* @__PURE__ */ $($c, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ $(uo, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => p.onOpenChange(!1)
  }, /* @__PURE__ */ $(_s, j({
    "data-state": Py(p.open),
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
function Py(e) {
  return e ? "open" : "closed";
}
const cI = J8, lI = tI, uI = oI, Oy = aI, nr = cI, rr = lI, Ln = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(uI, { children: /* @__PURE__ */ d.jsx(
  Oy,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: k(
      "z-50 w-72 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Ln.displayName = Oy.displayName;
const Ty = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
    "textarea",
    {
      className: k(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Ty.displayName = "TextareaUI";
const $Y = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, isLoading: i, ...c }) => i || i && c.readOnly ? /* @__PURE__ */ d.jsxs("div", { className: k("w-full"), children: [
  /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
  o && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[150px] my-2" }),
  /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
    Ot,
    {
      className: k("w-full h-9 mt-2")
    }
  ) })
] }) : /* @__PURE__ */ d.jsx(
  po,
  {
    control: t.control,
    name: e,
    render: ({ field: l, formState: u }) => {
      var f;
      return /* @__PURE__ */ d.jsxs(Ar, { className: k("w-full", s), children: [
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
          Ty,
          {
            placeholder: a,
            className: k("resize-none", r),
            ...l,
            ...c
          }
        ) })
      ] });
    }
  }
);
function Ua(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ia(e) {
  const t = q({
    value: e,
    previous: e
  });
  return Zt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const jy = /* @__PURE__ */ F((e, t) => /* @__PURE__ */ $(de.span, j({}, e, {
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
}))), ky = jy, dI = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], fI = [
  " ",
  "Enter"
], Rc = "Select", [Ic, Of, pI] = kr(Rc), [ca, _Y] = ut(Rc, [
  pI,
  Un
]), Tf = Un(), [hI, bo] = ca(Rc), [mI, vI] = ca(Rc), gI = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: f, disabled: p, required: h } = e, m = Tf(t), [v, g] = X(null), [b, y] = X(null), [x, _] = X(!1), w = zn(l), [N = !1, S] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [D, E] = vt({
    prop: s,
    defaultProp: i,
    onChange: c
  }), W = q(null), G = v ? !!v.closest("form") : !0, [z, K] = X(/* @__PURE__ */ new Set()), L = Array.from(z).map(
    (P) => P.props.value
  ).join(";");
  return /* @__PURE__ */ $(na, m, /* @__PURE__ */ $(hI, {
    required: h,
    scope: t,
    trigger: v,
    onTriggerChange: g,
    valueNode: b,
    onValueNodeChange: y,
    valueNodeHasChildren: x,
    onValueNodeHasChildrenChange: _,
    contentId: bt(),
    value: D,
    onValueChange: E,
    open: N,
    onOpenChange: S,
    dir: w,
    triggerPointerDownPosRef: W,
    disabled: p
  }, /* @__PURE__ */ $(Ic.Provider, {
    scope: t
  }, /* @__PURE__ */ $(mI, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: ve((P) => {
      K(
        (R) => new Set(R).add(P)
      );
    }, []),
    onNativeOptionRemove: ve((P) => {
      K((R) => {
        const O = new Set(R);
        return O.delete(P), O;
      });
    }, [])
  }, n)), G ? /* @__PURE__ */ $(Ry, {
    key: L,
    "aria-hidden": !0,
    required: h,
    tabIndex: -1,
    name: u,
    autoComplete: f,
    value: D,
    onChange: (P) => E(P.target.value),
    disabled: p
  }, D === void 0 ? /* @__PURE__ */ $("option", {
    value: ""
  }) : null, Array.from(z)) : null));
}, bI = "SelectTrigger", yI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Tf(n), s = bo(bI, n), i = s.disabled || r, c = Ee(t, s.onTriggerChange), l = Of(n), [u, f, p] = Iy((m) => {
    const v = l().filter(
      (y) => !y.disabled
    ), g = v.find(
      (y) => y.value === s.value
    ), b = Ly(v, m, g);
    b !== void 0 && s.onValueChange(b.value);
  }), h = () => {
    i || (s.onOpenChange(!0), p());
  };
  return /* @__PURE__ */ $($s, j({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.button, j({
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
    "data-placeholder": Ay(s.value) ? "" : void 0
  }, o, {
    ref: c,
    onClick: Q(o.onClick, (m) => {
      m.currentTarget.focus();
    }),
    onPointerDown: Q(o.onPointerDown, (m) => {
      const v = m.target;
      v.hasPointerCapture(m.pointerId) && v.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (h(), s.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      }, m.preventDefault());
    }),
    onKeyDown: Q(o.onKeyDown, (m) => {
      const v = u.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && f(m.key), !(v && m.key === " ") && dI.includes(m.key) && (h(), m.preventDefault());
    })
  })));
}), xI = "SelectValue", wI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = bo(xI, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, f = Ee(t, c.onValueNodeChange);
  return St(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ $(de.span, j({}, i, {
    ref: f,
    style: {
      pointerEvents: "none"
    }
  }), Ay(c.value) ? /* @__PURE__ */ $(vn, null, s) : a);
}), $I = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ $(de.span, j({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), _I = (e) => /* @__PURE__ */ $(Nc, j({
  asChild: !0
}, e)), zo = "SelectContent", CI = /* @__PURE__ */ F((e, t) => {
  const n = bo(zo, e.__scopeSelect), [r, o] = X();
  if (St(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ dv(/* @__PURE__ */ $(My, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $(Ic.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ $("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ $(SI, j({}, e, {
    ref: t
  }));
}), Qn = 10, [My, Lc] = ca(zo), SI = /* @__PURE__ */ F((e, t) => {
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
  } = e, y = bo(zo, n), [x, _] = X(null), [w, N] = X(null), S = Ee(
    t,
    (re) => _(re)
  ), [D, E] = X(null), [W, G] = X(null), z = Of(n), [K, L] = X(!1), P = q(!1);
  J(() => {
    if (x)
      return Oc(x);
  }, [
    x
  ]), wc();
  const R = ve((re) => {
    const [me, ..._e] = z().map(
      (A) => A.ref.current
    ), [ae] = _e.slice(-1), fe = document.activeElement;
    for (const A of re)
      if (A === fe || (A == null || A.scrollIntoView({
        block: "nearest"
      }), A === me && w && (w.scrollTop = 0), A === ae && w && (w.scrollTop = w.scrollHeight), A == null || A.focus(), document.activeElement !== fe))
        return;
  }, [
    z,
    w
  ]), O = ve(
    () => R([
      D,
      x
    ]),
    [
      R,
      D,
      x
    ]
  );
  J(() => {
    K && O();
  }, [
    K,
    O
  ]);
  const { onOpenChange: V, triggerPointerDownPosRef: U } = y;
  J(() => {
    if (x) {
      let re = {
        x: 0,
        y: 0
      };
      const me = (ae) => {
        var fe, A, ne, ye;
        re = {
          x: Math.abs(Math.round(ae.pageX) - ((fe = (A = U.current) === null || A === void 0 ? void 0 : A.x) !== null && fe !== void 0 ? fe : 0)),
          y: Math.abs(Math.round(ae.pageY) - ((ne = (ye = U.current) === null || ye === void 0 ? void 0 : ye.y) !== null && ne !== void 0 ? ne : 0))
        };
      }, _e = (ae) => {
        re.x <= 10 && re.y <= 10 ? ae.preventDefault() : x.contains(ae.target) || V(!1), document.removeEventListener("pointermove", me), U.current = null;
      };
      return U.current !== null && (document.addEventListener("pointermove", me), document.addEventListener("pointerup", _e, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", me), document.removeEventListener("pointerup", _e, {
          capture: !0
        });
      };
    }
  }, [
    x,
    V,
    U
  ]), J(() => {
    const re = () => V(!1);
    return window.addEventListener("blur", re), window.addEventListener("resize", re), () => {
      window.removeEventListener("blur", re), window.removeEventListener("resize", re);
    };
  }, [
    V
  ]);
  const [Z, oe] = Iy((re) => {
    const me = z().filter(
      (fe) => !fe.disabled
    ), _e = me.find(
      (fe) => fe.ref.current === document.activeElement
    ), ae = Ly(me, re, _e);
    ae && setTimeout(
      () => ae.ref.current.focus()
    );
  }), H = ve((re, me, _e) => {
    const ae = !P.current && !_e;
    (y.value !== void 0 && y.value === me || ae) && (E(re), ae && (P.current = !0));
  }, [
    y.value
  ]), le = ve(
    () => x == null ? void 0 : x.focus(),
    [
      x
    ]
  ), be = ve((re, me, _e) => {
    const ae = !P.current && !_e;
    (y.value !== void 0 && y.value === me || ae) && G(re);
  }, [
    y.value
  ]), pe = r === "popper" ? gm : NI, ee = pe === gm ? {
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
  return /* @__PURE__ */ $(My, {
    scope: n,
    content: x,
    viewport: w,
    onViewportChange: N,
    itemRefCallback: H,
    selectedItem: D,
    onItemLeave: le,
    itemTextRefCallback: be,
    focusSelectedItem: O,
    selectedItemText: W,
    position: r,
    isPositioned: K,
    searchRef: Z
  }, /* @__PURE__ */ $(Cs, {
    as: gn,
    allowPinchZoom: !0
  }, /* @__PURE__ */ $($c, {
    asChild: !0,
    trapped: y.open,
    onMountAutoFocus: (re) => {
      re.preventDefault();
    },
    onUnmountAutoFocus: Q(o, (re) => {
      var me;
      (me = y.trigger) === null || me === void 0 || me.focus({
        preventScroll: !0
      }), re.preventDefault();
    })
  }, /* @__PURE__ */ $(uo, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (re) => re.preventDefault(),
    onDismiss: () => y.onOpenChange(!1)
  }, /* @__PURE__ */ $(pe, j({
    role: "listbox",
    id: y.contentId,
    "data-state": y.open ? "open" : "closed",
    dir: y.dir,
    onContextMenu: (re) => re.preventDefault()
  }, b, ee, {
    onPlaced: () => L(!0),
    ref: S,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...b.style
    },
    onKeyDown: Q(b.onKeyDown, (re) => {
      const me = re.ctrlKey || re.altKey || re.metaKey;
      if (re.key === "Tab" && re.preventDefault(), !me && re.key.length === 1 && oe(re.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(re.key)) {
        let ae = z().filter(
          (fe) => !fe.disabled
        ).map(
          (fe) => fe.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(re.key) && (ae = ae.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(re.key)) {
          const fe = re.target, A = ae.indexOf(fe);
          ae = ae.slice(A + 1);
        }
        setTimeout(
          () => R(ae)
        ), re.preventDefault();
      }
    })
  }))))));
}), NI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = bo(zo, n), s = Lc(zo, n), [i, c] = X(null), [l, u] = X(null), f = Ee(
    t,
    (S) => u(S)
  ), p = Of(n), h = q(!1), m = q(!0), { viewport: v, selectedItem: g, selectedItemText: b, focusSelectedItem: y } = s, x = ve(() => {
    if (a.trigger && a.valueNode && i && l && v && g && b) {
      const S = a.trigger.getBoundingClientRect(), D = l.getBoundingClientRect(), E = a.valueNode.getBoundingClientRect(), W = b.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const fe = W.left - D.left, A = E.left - fe, ne = S.left - A, ye = S.width + ne, Pe = Math.max(ye, D.width), Ie = window.innerWidth - Qn, Oe = Ua(A, [
          Qn,
          Ie - Pe
        ]);
        i.style.minWidth = ye + "px", i.style.left = Oe + "px";
      } else {
        const fe = D.right - W.right, A = window.innerWidth - E.right - fe, ne = window.innerWidth - S.right - A, ye = S.width + ne, Pe = Math.max(ye, D.width), Ie = window.innerWidth - Qn, Oe = Ua(A, [
          Qn,
          Ie - Pe
        ]);
        i.style.minWidth = ye + "px", i.style.right = Oe + "px";
      }
      const G = p(), z = window.innerHeight - Qn * 2, K = v.scrollHeight, L = window.getComputedStyle(l), P = parseInt(L.borderTopWidth, 10), R = parseInt(L.paddingTop, 10), O = parseInt(L.borderBottomWidth, 10), V = parseInt(L.paddingBottom, 10), U = P + R + K + V + O, Z = Math.min(g.offsetHeight * 5, U), oe = window.getComputedStyle(v), H = parseInt(oe.paddingTop, 10), le = parseInt(oe.paddingBottom, 10), be = S.top + S.height / 2 - Qn, pe = z - be, ee = g.offsetHeight / 2, re = g.offsetTop + ee, me = P + R + re, _e = U - me;
      if (me <= be) {
        const fe = g === G[G.length - 1].ref.current;
        i.style.bottom = "0px";
        const A = l.clientHeight - v.offsetTop - v.offsetHeight, ne = Math.max(pe, ee + (fe ? le : 0) + A + O), ye = me + ne;
        i.style.height = ye + "px";
      } else {
        const fe = g === G[0].ref.current;
        i.style.top = "0px";
        const ne = Math.max(be, P + v.offsetTop + (fe ? H : 0) + ee) + _e;
        i.style.height = ne + "px", v.scrollTop = me - be + v.offsetTop;
      }
      i.style.margin = `${Qn}px 0`, i.style.minHeight = Z + "px", i.style.maxHeight = z + "px", r == null || r(), requestAnimationFrame(
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
  const [_, w] = X();
  St(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const N = ve((S) => {
    S && m.current === !0 && (x(), y == null || y(), m.current = !1);
  }, [
    x,
    y
  ]);
  return /* @__PURE__ */ $(EI, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: h,
    onScrollButtonChange: N
  }, /* @__PURE__ */ $("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ $(de.div, j({}, o, {
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
}), gm = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = Qn, ...a } = e, s = Tf(n);
  return /* @__PURE__ */ $(_s, j({}, s, a, {
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
}), [EI, PI] = ca(zo, {}), bm = "SelectViewport", OI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = Lc(bm, n), a = PI(bm, n), s = Ee(t, o.onViewportChange), i = q(0);
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(Ic.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, j({
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
    onScroll: Q(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: f } = a;
      if (f != null && f.current && u) {
        const p = Math.abs(i.current - l.scrollTop);
        if (p > 0) {
          const h = window.innerHeight - Qn * 2, m = parseFloat(u.style.minHeight), v = parseFloat(u.style.height), g = Math.max(m, v);
          if (g < h) {
            const b = g + p, y = Math.min(h, b), x = b - y;
            u.style.height = y + "px", u.style.bottom === "0px" && (l.scrollTop = x > 0 ? x : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), TI = "SelectGroup", [jI, kI] = ca(TI), MI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = bt();
  return /* @__PURE__ */ $(jI, {
    scope: n,
    id: o
  }, /* @__PURE__ */ $(de.div, j({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), DI = "SelectLabel", AI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = kI(DI, n);
  return /* @__PURE__ */ $(de.div, j({
    id: o.id
  }, r, {
    ref: t
  }));
}), Lu = "SelectItem", [RI, Dy] = ca(Lu), II = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = bo(Lu, n), c = Lc(Lu, n), l = i.value === r, [u, f] = X(a ?? ""), [p, h] = X(!1), m = Ee(t, (b) => {
    var y;
    return (y = c.itemRefCallback) === null || y === void 0 ? void 0 : y.call(c, b, r, o);
  }), v = bt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  if (r === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ $(RI, {
    scope: n,
    value: r,
    disabled: o,
    textId: v,
    isSelected: l,
    onItemTextChange: ve((b) => {
      f((y) => {
        var x;
        return y || ((x = b == null ? void 0 : b.textContent) !== null && x !== void 0 ? x : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ $(Ic.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ $(de.div, j({
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
    onFocus: Q(
      s.onFocus,
      () => h(!0)
    ),
    onBlur: Q(
      s.onBlur,
      () => h(!1)
    ),
    onPointerUp: Q(s.onPointerUp, g),
    onPointerMove: Q(s.onPointerMove, (b) => {
      if (o) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      } else
        b.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: Q(s.onPointerLeave, (b) => {
      if (b.currentTarget === document.activeElement) {
        var y;
        (y = c.onItemLeave) === null || y === void 0 || y.call(c);
      }
    }),
    onKeyDown: Q(s.onKeyDown, (b) => {
      var y;
      ((y = c.searchRef) === null || y === void 0 ? void 0 : y.current) !== "" && b.key === " " || (fI.includes(b.key) && g(), b.key === " " && b.preventDefault());
    })
  }))));
}), ei = "SelectItemText", LI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = bo(ei, n), i = Lc(ei, n), c = Dy(ei, n), l = vI(ei, n), [u, f] = X(null), p = Ee(
    t,
    (b) => f(b),
    c.onItemTextChange,
    (b) => {
      var y;
      return (y = i.itemTextRefCallback) === null || y === void 0 ? void 0 : y.call(i, b, c.value, c.disabled);
    }
  ), h = u == null ? void 0 : u.textContent, m = Zt(
    () => /* @__PURE__ */ $("option", {
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
  ]), /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(de.span, j({
    id: c.textId
  }, a, {
    ref: p
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ dv(a.children, s.valueNode) : null);
}), FI = "SelectItemIndicator", BI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return Dy(FI, n).isSelected ? /* @__PURE__ */ $(de.span, j({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), VI = /* @__PURE__ */ F((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ $(de.div, j({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
});
function Ay(e) {
  return e === "" || e === void 0;
}
const Ry = /* @__PURE__ */ F((e, t) => {
  const { value: n, ...r } = e, o = q(null), a = Ee(t, o), s = ia(n);
  return J(() => {
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
  ]), /* @__PURE__ */ $(jy, {
    asChild: !0
  }, /* @__PURE__ */ $("select", j({}, r, {
    ref: a,
    defaultValue: n
  })));
});
Ry.displayName = "BubbleSelect";
function Iy(e) {
  const t = Je(e), n = q(""), r = q(0), o = ve((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = ve(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return J(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function Ly(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = zI(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function zI(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const WI = gI, Fy = yI, UI = wI, HI = $I, KI = _I, By = CI, GI = OI, YI = MI, Vy = AI, zy = II, qI = LI, ZI = BI, Wy = VI, jf = WI, XI = YI, kf = UI, Fc = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Fy,
  {
    ref: r,
    className: k(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(HI, { asChild: !0, children: /* @__PURE__ */ d.jsx(ja, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Fc.displayName = Fy.displayName;
const Bc = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ d.jsx(KI, { children: /* @__PURE__ */ d.jsx(
  By,
  {
    ref: o,
    className: k(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ d.jsx(
      GI,
      {
        className: k(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Bc.displayName = By.displayName;
const QI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Vy,
  {
    ref: n,
    className: k("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
QI.displayName = Vy.displayName;
const Vc = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  zy,
  {
    ref: r,
    className: k(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(ZI, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ d.jsx(qI, { children: t })
    ]
  }
));
Vc.displayName = zy.displayName;
const JI = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Wy,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
JI.displayName = Wy.displayName;
const Uy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: k(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Uy.displayName = "Card";
const e9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: k("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
e9.displayName = "CardHeader";
const t9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "h3",
  {
    ref: n,
    className: k(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
t9.displayName = "CardTitle";
const n9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "p",
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
n9.displayName = "CardDescription";
const r9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: k("p-6 pt-0", e), ...t }));
r9.displayName = "CardContent";
const o9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    ref: n,
    className: k(" flex items-center p-6 pt-0", e),
    ...t
  }
));
o9.displayName = "CardFooter";
const Hy = "Checkbox", [a9, CY] = ut(Hy), [s9, i9] = a9(Hy), c9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [f, p] = X(null), h = Ee(
    t,
    (x) => p(x)
  ), m = q(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  }), y = q(g);
  return J(() => {
    const x = f == null ? void 0 : f.form;
    if (x) {
      const _ = () => b(y.current);
      return x.addEventListener("reset", _), () => x.removeEventListener("reset", _);
    }
  }, [
    f,
    b
  ]), /* @__PURE__ */ $(s9, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "checkbox",
    "aria-checked": Yr(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": Ky(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: h,
    onKeyDown: Q(e.onKeyDown, (x) => {
      x.key === "Enter" && x.preventDefault();
    }),
    onClick: Q(e.onClick, (x) => {
      b(
        (_) => Yr(_) ? !0 : !_
      ), v && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(d9, {
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
}), l9 = "CheckboxIndicator", u9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = i9(l9, n);
  return /* @__PURE__ */ $(ft, {
    present: r || Yr(a.state) || a.state === !0
  }, /* @__PURE__ */ $(de.span, j({
    "data-state": Ky(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), d9 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = ws(t);
  return J(() => {
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
  ]), /* @__PURE__ */ $("input", j({
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
function Ky(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Gy = c9, f9 = u9, Yy = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Gy,
  {
    ref: n,
    className: k(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx(
      f9,
      {
        className: k("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" })
      }
    )
  }
));
Yy.displayName = Gy.displayName;
const qy = "DropdownMenu", [p9, SY] = ut(qy, [
  Ss
]), Lt = Ss(), [h9, Zy] = p9(qy), m9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = Lt(t), l = q(null), [u = !1, f] = vt({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ $(h9, {
    scope: t,
    triggerId: bt(),
    triggerRef: l,
    contentId: bt(),
    open: u,
    onOpenChange: f,
    onOpenToggle: ve(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    modal: i
  }, /* @__PURE__ */ $(of, j({}, c, {
    open: u,
    onOpenChange: f,
    dir: r,
    modal: i
  }), n));
}, v9 = "DropdownMenuTrigger", g9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Zy(v9, n), s = Lt(n);
  return /* @__PURE__ */ $(af, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
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
    onPointerDown: Q(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: Q(e.onKeyDown, (i) => {
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
}), b9 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Lt(t);
  return /* @__PURE__ */ $(sf, j({}, r, n));
}, y9 = "DropdownMenuContent", x9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Zy(y9, n), a = Lt(n), s = q(!1);
  return /* @__PURE__ */ $(cf, j({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: Q(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: Q(e.onInteractOutside, (i) => {
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
}), w9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), $9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), _9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), C9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), S9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(pf, j({}, o, r, {
    ref: t
  }));
}), N9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(hf, j({}, o, r, {
    ref: t
  }));
}), E9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(mf, j({}, o, r, {
    ref: t
  }));
}), P9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(vf, j({}, o, r, {
    ref: t
  }));
}), O9 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Lt(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(gf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, T9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(bf, j({}, o, r, {
    ref: t
  }));
}), j9 = /* @__PURE__ */ F((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Lt(n);
  return /* @__PURE__ */ $(yf, j({}, o, r, {
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
}), k9 = m9, M9 = g9, Xy = b9, Qy = x9, D9 = w9, Jy = $9, e0 = _9, t0 = C9, A9 = S9, n0 = N9, r0 = E9, o0 = P9, R9 = O9, a0 = T9, s0 = j9, NY = k9, EY = M9, PY = D9, OY = Xy, TY = R9, jY = A9, I9 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  a0,
  {
    ref: o,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(Tr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
I9.displayName = a0.displayName;
const L9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  s0,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
L9.displayName = s0.displayName;
const F9 = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d.jsx(Xy, { children: /* @__PURE__ */ d.jsx(
  Qy,
  {
    ref: r,
    sideOffset: t,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
F9.displayName = Qy.displayName;
const B9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  e0,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
B9.displayName = e0.displayName;
const V9 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  t0,
  {
    ref: o,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(r0, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
V9.displayName = t0.displayName;
const z9 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  n0,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(r0, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
z9.displayName = n0.displayName;
const W9 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Jy,
  {
    ref: r,
    className: k(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
W9.displayName = Jy.displayName;
const U9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  o0,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
U9.displayName = o0.displayName;
const H9 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: k("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
H9.displayName = "DropdownMenuShortcut";
const Fu = "horizontal", K9 = [
  "horizontal",
  "vertical"
], i0 = /* @__PURE__ */ F((e, t) => {
  const { decorative: n, orientation: r = Fu, ...o } = e, a = c0(r) ? r : Fu, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ $(de.div, j({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
i0.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !c0(r) ? new Error(G9(o, n)) : null;
  }
};
function G9(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Fu}\`.`;
}
function c0(e) {
  return K9.includes(e);
}
const l0 = i0, ks = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ d.jsx(
    l0,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: k(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
ks.displayName = l0.displayName;
var ym = 1, Y9 = 0.9, q9 = 0.8, Z9 = 0.17, Il = 0.1, Ll = 0.999, X9 = 0.9999, Q9 = 0.99, J9 = /[\\\/_+.#"@\[\(\{&]/, eL = /[\\\/_+.#"@\[\(\{&]/g, tL = /[\s-]/, u0 = /[\s-]/g;
function Bu(e, t, n, r, o, a, s) {
  if (a === t.length)
    return o === e.length ? ym : Q9;
  var i = `${o},${a}`;
  if (s[i] !== void 0)
    return s[i];
  for (var c = r.charAt(a), l = n.indexOf(c, o), u = 0, f, p, h, m; l >= 0; )
    f = Bu(e, t, n, r, l + 1, a + 1, s), f > u && (l === o ? f *= ym : J9.test(e.charAt(l - 1)) ? (f *= q9, h = e.slice(o, l - 1).match(eL), h && o > 0 && (f *= Math.pow(Ll, h.length))) : tL.test(e.charAt(l - 1)) ? (f *= Y9, m = e.slice(o, l - 1).match(u0), m && o > 0 && (f *= Math.pow(Ll, m.length))) : (f *= Z9, o > 0 && (f *= Math.pow(Ll, l - o))), e.charAt(l) !== t.charAt(a) && (f *= X9)), (f < Il && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (p = Bu(e, t, n, r, l + 1, a + 2, s), p * Il > f && (f = p * Il)), f > u && (u = f), l = n.indexOf(c, l + 1);
  return s[i] = u, u;
}
function xm(e) {
  return e.toLowerCase().replace(u0, " ");
}
function nL(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Bu(e, t, xm(e), xm(t), 0, 0, {});
}
var wa = '[cmdk-group=""]', Fl = '[cmdk-group-items=""]', rL = '[cmdk-group-heading=""]', Mf = '[cmdk-item=""]', wm = `${Mf}:not([aria-disabled="true"])`, Vu = "cmdk-item-select", Wr = "data-value", oL = (e, t, n) => nL(e, t, n), d0 = C.createContext(void 0), Ms = () => C.useContext(d0), f0 = C.createContext(void 0), Df = () => C.useContext(f0), p0 = C.createContext(void 0), h0 = C.forwardRef((e, t) => {
  let n = No(() => {
    var H, le;
    return { search: "", value: (le = (H = e.value) != null ? H : e.defaultValue) != null ? le : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = No(() => /* @__PURE__ */ new Set()), o = No(() => /* @__PURE__ */ new Map()), a = No(() => /* @__PURE__ */ new Map()), s = No(() => /* @__PURE__ */ new Set()), i = v0(e), { label: c, children: l, value: u, onValueChange: f, filter: p, shouldFilter: h, loop: m, disablePointerSelection: v = !1, vimBindings: g = !0, ...b } = e, y = C.useId(), x = C.useId(), _ = C.useId(), w = C.useRef(null), N = hL();
  Qr(() => {
    if (u !== void 0) {
      let H = u.trim();
      n.current.value = H, S.emit();
    }
  }, [u]), Qr(() => {
    N(6, K);
  }, []);
  let S = C.useMemo(() => ({ subscribe: (H) => (s.current.add(H), () => s.current.delete(H)), snapshot: () => n.current, setState: (H, le, be) => {
    var pe, ee, re;
    if (!Object.is(n.current[H], le)) {
      if (n.current[H] = le, H === "search")
        z(), W(), N(1, G);
      else if (H === "value" && (be || N(5, K), ((pe = i.current) == null ? void 0 : pe.value) !== void 0)) {
        let me = le ?? "";
        (re = (ee = i.current).onValueChange) == null || re.call(ee, me);
        return;
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((H) => H());
  } }), []), D = C.useMemo(() => ({ value: (H, le, be) => {
    var pe;
    le !== ((pe = a.current.get(H)) == null ? void 0 : pe.value) && (a.current.set(H, { value: le, keywords: be }), n.current.filtered.items.set(H, E(le, be)), N(2, () => {
      W(), S.emit();
    }));
  }, item: (H, le) => (r.current.add(H), le && (o.current.has(le) ? o.current.get(le).add(H) : o.current.set(le, /* @__PURE__ */ new Set([H]))), N(3, () => {
    z(), W(), n.current.value || G(), S.emit();
  }), () => {
    a.current.delete(H), r.current.delete(H), n.current.filtered.items.delete(H);
    let be = L();
    N(4, () => {
      z(), (be == null ? void 0 : be.getAttribute("id")) === H && G(), S.emit();
    });
  }), group: (H) => (o.current.has(H) || o.current.set(H, /* @__PURE__ */ new Set()), () => {
    a.current.delete(H), o.current.delete(H);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], disablePointerSelection: v, listId: y, inputId: _, labelId: x, listInnerRef: w }), []);
  function E(H, le) {
    var be, pe;
    let ee = (pe = (be = i.current) == null ? void 0 : be.filter) != null ? pe : oL;
    return H ? ee(H, n.current.search, le) : 0;
  }
  function W() {
    if (!n.current.search || i.current.shouldFilter === !1)
      return;
    let H = n.current.filtered.items, le = [];
    n.current.filtered.groups.forEach((pe) => {
      let ee = o.current.get(pe), re = 0;
      ee.forEach((me) => {
        let _e = H.get(me);
        re = Math.max(_e, re);
      }), le.push([pe, re]);
    });
    let be = w.current;
    P().sort((pe, ee) => {
      var re, me;
      let _e = pe.getAttribute("id"), ae = ee.getAttribute("id");
      return ((re = H.get(ae)) != null ? re : 0) - ((me = H.get(_e)) != null ? me : 0);
    }).forEach((pe) => {
      let ee = pe.closest(Fl);
      ee ? ee.appendChild(pe.parentElement === ee ? pe : pe.closest(`${Fl} > *`)) : be.appendChild(pe.parentElement === be ? pe : pe.closest(`${Fl} > *`));
    }), le.sort((pe, ee) => ee[1] - pe[1]).forEach((pe) => {
      let ee = w.current.querySelector(`${wa}[${Wr}="${encodeURIComponent(pe[0])}"]`);
      ee == null || ee.parentElement.appendChild(ee);
    });
  }
  function G() {
    let H = P().find((be) => be.getAttribute("aria-disabled") !== "true"), le = H == null ? void 0 : H.getAttribute(Wr);
    S.setState("value", le || void 0);
  }
  function z() {
    var H, le, be, pe;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let ee = 0;
    for (let re of r.current) {
      let me = (le = (H = a.current.get(re)) == null ? void 0 : H.value) != null ? le : "", _e = (pe = (be = a.current.get(re)) == null ? void 0 : be.keywords) != null ? pe : [], ae = E(me, _e);
      n.current.filtered.items.set(re, ae), ae > 0 && ee++;
    }
    for (let [re, me] of o.current)
      for (let _e of me)
        if (n.current.filtered.items.get(_e) > 0) {
          n.current.filtered.groups.add(re);
          break;
        }
    n.current.filtered.count = ee;
  }
  function K() {
    var H, le, be;
    let pe = L();
    pe && (((H = pe.parentElement) == null ? void 0 : H.firstChild) === pe && ((be = (le = pe.closest(wa)) == null ? void 0 : le.querySelector(rL)) == null || be.scrollIntoView({ block: "nearest" })), pe.scrollIntoView({ block: "nearest" }));
  }
  function L() {
    var H;
    return (H = w.current) == null ? void 0 : H.querySelector(`${Mf}[aria-selected="true"]`);
  }
  function P() {
    var H;
    return Array.from((H = w.current) == null ? void 0 : H.querySelectorAll(wm));
  }
  function R(H) {
    let le = P()[H];
    le && S.setState("value", le.getAttribute(Wr));
  }
  function O(H) {
    var le;
    let be = L(), pe = P(), ee = pe.findIndex((me) => me === be), re = pe[ee + H];
    (le = i.current) != null && le.loop && (re = ee + H < 0 ? pe[pe.length - 1] : ee + H === pe.length ? pe[0] : pe[ee + H]), re && S.setState("value", re.getAttribute(Wr));
  }
  function V(H) {
    let le = L(), be = le == null ? void 0 : le.closest(wa), pe;
    for (; be && !pe; )
      be = H > 0 ? fL(be, wa) : pL(be, wa), pe = be == null ? void 0 : be.querySelector(wm);
    pe ? S.setState("value", pe.getAttribute(Wr)) : O(H);
  }
  let U = () => R(P().length - 1), Z = (H) => {
    H.preventDefault(), H.metaKey ? U() : H.altKey ? V(1) : O(1);
  }, oe = (H) => {
    H.preventDefault(), H.metaKey ? R(0) : H.altKey ? V(-1) : O(-1);
  };
  return C.createElement(de.div, { ref: t, tabIndex: -1, ...b, "cmdk-root": "", onKeyDown: (H) => {
    var le;
    if ((le = b.onKeyDown) == null || le.call(b, H), !H.defaultPrevented)
      switch (H.key) {
        case "n":
        case "j": {
          g && H.ctrlKey && Z(H);
          break;
        }
        case "ArrowDown": {
          Z(H);
          break;
        }
        case "p":
        case "k": {
          g && H.ctrlKey && oe(H);
          break;
        }
        case "ArrowUp": {
          oe(H);
          break;
        }
        case "Home": {
          H.preventDefault(), R(0);
          break;
        }
        case "End": {
          H.preventDefault(), U();
          break;
        }
        case "Enter":
          if (!H.nativeEvent.isComposing && H.keyCode !== 229) {
            H.preventDefault();
            let be = L();
            if (be) {
              let pe = new Event(Vu);
              be.dispatchEvent(pe);
            }
          }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: D.inputId, id: D.labelId, style: vL }, c), zc(e, (H) => C.createElement(f0.Provider, { value: S }, C.createElement(d0.Provider, { value: D }, H))));
}), aL = C.forwardRef((e, t) => {
  var n, r;
  let o = C.useId(), a = C.useRef(null), s = C.useContext(p0), i = Ms(), c = v0(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Qr(() => {
    if (!l)
      return i.item(o, s == null ? void 0 : s.id);
  }, [l]);
  let u = g0(o, a, [e.value, e.children, a], e.keywords), f = Df(), p = Jr((N) => N.value && N.value === u.current), h = Jr((N) => l || i.filter() === !1 ? !0 : N.search ? N.filtered.items.get(o) > 0 : !0);
  C.useEffect(() => {
    let N = a.current;
    if (!(!N || e.disabled))
      return N.addEventListener(Vu, m), () => N.removeEventListener(Vu, m);
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
  let { disabled: g, value: b, onSelect: y, forceMount: x, keywords: _, ...w } = e;
  return C.createElement(de.div, { ref: Ha([a, t]), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.disablePointerSelection ? void 0 : v, onClick: g ? void 0 : m }, e.children);
}), sL = C.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = C.useId(), i = C.useRef(null), c = C.useRef(null), l = C.useId(), u = Ms(), f = Jr((h) => o || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Qr(() => u.group(s), []), g0(s, i, [e.value, e.heading, c]);
  let p = C.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return C.createElement(de.div, { ref: Ha([i, t]), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && C.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), zc(e, (h) => C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, C.createElement(p0.Provider, { value: p }, h))));
}), iL = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Jr((s) => !s.search);
  return !n && !a ? null : C.createElement(de.div, { ref: Ha([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), cL = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Df(), s = Jr((u) => u.search), i = Jr((u) => u.value), c = Ms(), l = C.useMemo(() => {
    var u;
    let f = (u = c.listInnerRef.current) == null ? void 0 : u.querySelector(`${Mf}[${Wr}="${encodeURIComponent(i)}"]`);
    return f == null ? void 0 : f.getAttribute("id");
  }, []);
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement(de.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": l, id: c.inputId, type: "text", value: o ? e.value : s, onChange: (u) => {
    o || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), m0 = C.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = C.useRef(null), s = C.useRef(null), i = Ms();
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
  }, []), C.createElement(de.div, { ref: Ha([a, t]), ...o, "cmdk-list": "", role: "listbox", "aria-label": r, id: i.listId }, zc(e, (c) => C.createElement("div", { ref: Ha([s, i.listInnerRef]), "cmdk-list-sizer": "" }, c)));
}), lL = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return C.createElement(Ts, { open: n, onOpenChange: r }, C.createElement(js, { container: s }, C.createElement(mo, { "cmdk-overlay": "", className: o }), C.createElement(vo, { "aria-label": e.label, "cmdk-dialog": "", className: a }, C.createElement(h0, { ref: t, ...i }))));
}), uL = C.forwardRef((e, t) => Jr((n) => n.filtered.count === 0) ? C.createElement(de.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), dL = C.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return C.createElement(de.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, zc(e, (s) => C.createElement("div", { "aria-hidden": !0 }, s)));
}), Ut = Object.assign(h0, { List: m0, Item: aL, Input: cL, Group: sL, Separator: iL, Dialog: lL, Empty: uL, Loading: dL });
function fL(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function pL(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function v0(e) {
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
function Ha(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Jr(e) {
  let t = Df(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function g0(e, t, n, r = []) {
  let o = C.useRef(), a = Ms();
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
var hL = () => {
  let [e, t] = C.useState(), n = No(() => /* @__PURE__ */ new Map());
  return Qr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function mL(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function zc({ asChild: e, children: t }, n) {
  return e && C.isValidElement(t) ? C.cloneElement(mL(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var vL = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const or = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ut,
  {
    ref: n,
    className: k(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
or.displayName = Ut.displayName;
const kY = ({ children: e, ...t }) => /* @__PURE__ */ d.jsx($y, { ...t, children: /* @__PURE__ */ d.jsx(Nf, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ d.jsx(or, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), _r = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ d.jsx(yi, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ d.jsx(
    Ut.Input,
    {
      ref: n,
      className: k(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
_r.displayName = Ut.Input.displayName;
const la = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ut.List,
  {
    ref: n,
    className: k("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
la.displayName = Ut.List.displayName;
const Cr = C.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  Ut.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Cr.displayName = Ut.Empty.displayName;
const $n = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ut.Group,
  {
    ref: n,
    className: k(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
$n.displayName = Ut.Group.displayName;
const Ka = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ut.Separator,
  {
    ref: n,
    className: k("-mx-1 h-px bg-border", e),
    ...t
  }
));
Ka.displayName = Ut.Separator.displayName;
const Gt = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Ut.Item,
  {
    ref: n,
    className: k("cmdk-item relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer", e),
    ...t
  }
));
Gt.displayName = Ut.Item.displayName;
const gL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: k(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
gL.displayName = "CommandShortcut";
const bL = /* @__PURE__ */ F((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ $("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ $(de.div, j({}, o, {
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
}), yL = bL, MY = yL;
function xL(e, t) {
  return fd((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const b0 = "ScrollArea", [y0, DY] = ut(b0), [wL, on] = y0(b0), $L = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = X(null), [l, u] = X(null), [f, p] = X(null), [h, m] = X(null), [v, g] = X(null), [b, y] = X(0), [x, _] = X(0), [w, N] = X(!1), [S, D] = X(!1), E = Ee(
    t,
    (G) => c(G)
  ), W = zn(o);
  return /* @__PURE__ */ $(wL, {
    scope: n,
    type: r,
    dir: W,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: f,
    onContentChange: p,
    scrollbarX: h,
    onScrollbarXChange: m,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: N,
    scrollbarY: v,
    onScrollbarYChange: g,
    scrollbarYEnabled: S,
    onScrollbarYEnabledChange: D,
    onCornerWidthChange: y,
    onCornerHeightChange: _
  }, /* @__PURE__ */ $(de.div, j({
    dir: W
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
}), _L = "ScrollAreaViewport", CL = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = on(_L, n), s = q(null), i = Ee(t, s, a.onViewportChange);
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ $(de.div, j({
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
  }), /* @__PURE__ */ $("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), sr = "ScrollAreaScrollbar", x0 = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return J(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ $(SL, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ $(NL, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ $(w0, j({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ $(Af, j({}, r, {
    ref: t
  })) : null;
}), SL = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), [a, s] = X(!1);
  return J(() => {
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
  ]), /* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(w0, j({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), NL = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = on(sr, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Uc(
    () => c("SCROLL_END"),
    100
  ), [i, c] = xL("hidden", {
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
  return J(() => {
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
  ]), J(() => {
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
  ]), /* @__PURE__ */ $(ft, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ $(Af, j({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: Q(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: Q(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), w0 = /* @__PURE__ */ F((e, t) => {
  const n = on(sr, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = X(!1), i = e.orientation === "horizontal", c = Uc(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Wo(n.viewport, c), Wo(n.content, c), /* @__PURE__ */ $(ft, {
    present: r || a
  }, /* @__PURE__ */ $(Af, j({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), Af = /* @__PURE__ */ F((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = on(sr, e.__scopeScrollArea), a = q(null), s = q(0), [i, c] = X({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = S0(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (p) => s.current = p
  };
  function f(p, h) {
    return DL(p, s.current, i, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ $(EL, j({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, h = $m(p, i, o.dir);
        a.current.style.transform = `translate3d(${h}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ $(PL, j({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, h = $m(p, i);
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
}), EL = /* @__PURE__ */ F((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(sr, e.__scopeScrollArea), [s, i] = X(), c = q(null), l = Ee(t, c, a.onScrollbarXChange);
  return J(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(_0, j({
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
        e.onWheelScroll(p), E0(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Ui(s.paddingLeft),
          paddingEnd: Ui(s.paddingRight)
        }
      });
    }
  }));
}), PL = /* @__PURE__ */ F((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = on(sr, e.__scopeScrollArea), [s, i] = X(), c = q(null), l = Ee(t, c, a.onScrollbarYChange);
  return J(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ $(_0, j({
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
        e.onWheelScroll(p), E0(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Ui(s.paddingTop),
          paddingEnd: Ui(s.paddingBottom)
        }
      });
    }
  }));
}), [OL, $0] = y0(sr), _0 = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: f, ...p } = e, h = on(sr, n), [m, v] = X(null), g = Ee(
    t,
    (E) => v(E)
  ), b = q(null), y = q(""), x = h.viewport, _ = r.content - r.viewport, w = Je(u), N = Je(c), S = Uc(f, 10);
  function D(E) {
    if (b.current) {
      const W = E.clientX - b.current.left, G = E.clientY - b.current.top;
      l({
        x: W,
        y: G
      });
    }
  }
  return J(() => {
    const E = (W) => {
      const G = W.target;
      (m == null ? void 0 : m.contains(G)) && w(W, _);
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
    w
  ]), J(N, [
    r,
    N
  ]), Wo(m, S), Wo(h.content, S), /* @__PURE__ */ $(OL, {
    scope: n,
    scrollbar: m,
    hasThumb: o,
    onThumbChange: Je(a),
    onThumbPointerUp: Je(s),
    onThumbPositionChange: N,
    onThumbPointerDown: Je(i)
  }, /* @__PURE__ */ $(de.div, j({}, p, {
    ref: g,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: Q(e.onPointerDown, (E) => {
      E.button === 0 && (E.target.setPointerCapture(E.pointerId), b.current = m.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), D(E));
    }),
    onPointerMove: Q(e.onPointerMove, D),
    onPointerUp: Q(e.onPointerUp, (E) => {
      const W = E.target;
      W.hasPointerCapture(E.pointerId) && W.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = y.current, h.viewport && (h.viewport.style.scrollBehavior = ""), b.current = null;
    })
  })));
}), zu = "ScrollAreaThumb", TL = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = $0(zu, e.__scopeScrollArea);
  return /* @__PURE__ */ $(ft, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ $(jL, j({
    ref: t
  }, r)));
}), jL = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = on(zu, n), s = $0(zu, n), { onThumbPositionChange: i } = s, c = Ee(
    t,
    (f) => s.onThumbChange(f)
  ), l = q(), u = Uc(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return J(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (u(), !l.current) {
          const h = AL(f, i);
          l.current = h, i();
        }
      };
      return i(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ $(de.div, j({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: Q(e.onPointerDownCapture, (f) => {
      const h = f.target.getBoundingClientRect(), m = f.clientX - h.left, v = f.clientY - h.top;
      s.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: Q(e.onPointerUp, s.onThumbPointerUp)
  }));
}), C0 = "ScrollAreaCorner", kL = /* @__PURE__ */ F((e, t) => {
  const n = on(C0, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ $(ML, j({}, e, {
    ref: t
  })) : null;
}), ML = /* @__PURE__ */ F((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = on(C0, n), [a, s] = X(0), [i, c] = X(0), l = !!(a && i);
  return Wo(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), Wo(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), l ? /* @__PURE__ */ $(de.div, j({}, r, {
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
function Ui(e) {
  return e ? parseInt(e, 10) : 0;
}
function S0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Wc(e) {
  const t = S0(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function DL(e, t, n, r = "ltr") {
  const o = Wc(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, f = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return N0([
    c,
    l
  ], f)(e);
}
function $m(e, t, n = "ltr") {
  const r = Wc(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = Ua(e, c);
  return N0([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function N0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function E0(e, t) {
  return e > 0 && e < t;
}
const AL = (e, t = () => {
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
function Uc(e, t) {
  const n = Je(e), r = q(0);
  return J(
    () => () => window.clearTimeout(r.current),
    []
  ), ve(() => {
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
const P0 = $L, RL = CL, IL = kL, LL = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  P0,
  {
    ref: r,
    className: k("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx(RL, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ d.jsx(O0, {}),
      /* @__PURE__ */ d.jsx(IL, {})
    ]
  }
));
LL.displayName = P0.displayName;
const O0 = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ d.jsx(
  x0,
  {
    ref: r,
    orientation: t,
    className: k(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(TL, { className: "relative flex-1 rounded-full bg-border" })
  }
));
O0.displayName = x0.displayName;
const AY = Ts, RY = Ac, IY = go, FL = js, T0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  mo,
  {
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
T0.displayName = mo.displayName;
const BL = Go(
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
), VL = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(FL, { children: [
  /* @__PURE__ */ d.jsx(T0, {}),
  /* @__PURE__ */ d.jsxs(
    vo,
    {
      ref: o,
      className: k(BL({ side: e }), t),
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
VL.displayName = vo.displayName;
const zL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
zL.displayName = "SheetHeader";
const WL = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
WL.displayName = "SheetFooter";
const UL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  oa,
  {
    ref: n,
    className: k("text-lg font-semibold text-foreground", e),
    ...t
  }
));
UL.displayName = oa.displayName;
const HL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  aa,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
HL.displayName = aa.displayName;
const Rf = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ d.jsx(
  "table",
  {
    ref: n,
    className: k("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Rf.displayName = "TableUI";
const j0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("thead", { ref: n, className: k("[&_tr]:border-b", e), ...t }));
j0.displayName = "TableHeader";
const k0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tbody",
  {
    ref: n,
    className: k("[&_tr:last-child]:border-0", e),
    ...t
  }
));
k0.displayName = "TableBody";
const KL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: n,
    className: k("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
KL.displayName = "TableFooter";
const Hc = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tr",
  {
    ref: n,
    className: k(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
Hc.displayName = "TableRow";
const M0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "th",
  {
    ref: n,
    className: k(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
M0.displayName = "TableHead";
const If = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: n,
    className: k("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
If.displayName = "TableCell";
const GL = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: n,
    className: k("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
GL.displayName = "TableCaption";
const YL = "AlertDialog", [qL, LY] = ut(YL, [
  gy
]), ir = gy(), ZL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ir(t);
  return /* @__PURE__ */ $(Ts, j({}, r, n, {
    modal: !0
  }));
}, XL = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(Ac, j({}, o, r, {
    ref: t
  }));
}), QL = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = ir(t);
  return /* @__PURE__ */ $(js, j({}, r, n));
}, JL = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(mo, j({}, o, r, {
    ref: t
  }));
}), D0 = "AlertDialogContent", [eF, tF] = qL(D0), nF = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = ir(n), s = q(null), i = Ee(t, s), c = q(null);
  return /* @__PURE__ */ $(z8, {
    contentName: D0,
    titleName: rF,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ $(eF, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ $(vo, j({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: Q(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ $(pd, null, r), !1)));
}), rF = "AlertDialogTitle", oF = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(oa, j({}, o, r, {
    ref: t
  }));
}), aF = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(aa, j({}, o, r, {
    ref: t
  }));
}), sF = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = ir(n);
  return /* @__PURE__ */ $(go, j({}, o, r, {
    ref: t
  }));
}), iF = "AlertDialogCancel", cF = /* @__PURE__ */ F((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = tF(iF, n), a = ir(n), s = Ee(t, o);
  return /* @__PURE__ */ $(go, j({}, a, r, {
    ref: s
  }));
}), lF = ZL, uF = XL, dF = QL, A0 = JL, R0 = nF, I0 = sF, L0 = cF, F0 = oF, B0 = aF, FY = lF, BY = uF, fF = dF, V0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  A0,
  {
    className: k(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
V0.displayName = A0.displayName;
const pF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs(fF, { children: [
  /* @__PURE__ */ d.jsx(V0, {}),
  /* @__PURE__ */ d.jsx(
    R0,
    {
      ref: n,
      className: k(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...t
    }
  )
] }));
pF.displayName = R0.displayName;
const hF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
hF.displayName = "AlertDialogHeader";
const mF = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
mF.displayName = "AlertDialogFooter";
const vF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  F0,
  {
    ref: n,
    className: k("text-lg font-semibold", e),
    ...t
  }
));
vF.displayName = F0.displayName;
const gF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  B0,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
gF.displayName = B0.displayName;
const bF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  I0,
  {
    ref: n,
    className: k(yr(), e),
    ...t
  }
));
bF.displayName = I0.displayName;
const yF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  L0,
  {
    ref: n,
    className: k(
      yr({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
yF.displayName = L0.displayName;
function Ot({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      className: k("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const z0 = "Collapsible", [xF, W0] = ut(z0), [wF, Lf] = xF(z0), $F = /* @__PURE__ */ F((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = vt({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ $(wF, {
    scope: n,
    disabled: a,
    contentId: bt(),
    open: c,
    onOpenToggle: ve(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ $(de.div, j({
    "data-state": Ff(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), _F = "CollapsibleTrigger", U0 = /* @__PURE__ */ F((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = Lf(_F, n);
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": Ff(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: Q(e.onClick, o.onOpenToggle)
  }));
}), H0 = "CollapsibleContent", K0 = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = Lf(H0, e.__scopeCollapsible);
  return /* @__PURE__ */ $(
    ft,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ $(CF, j({}, r, {
      ref: t,
      present: a
    }))
  );
}), CF = /* @__PURE__ */ F((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Lf(H0, n), [i, c] = X(r), l = q(null), u = Ee(t, l), f = q(0), p = f.current, h = q(0), m = h.current, v = s.open || i, g = q(v), b = q();
  return J(() => {
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
  ]), /* @__PURE__ */ $(de.div, j({
    "data-state": Ff(s.open),
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
function Ff(e) {
  return e ? "open" : "closed";
}
const G0 = $F, SF = U0, NF = K0, Rr = "Accordion", EF = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [Bf, PF, OF] = kr(Rr), [Kc, VY] = ut(Rr, [
  OF,
  W0
]), Vf = W0(), Y0 = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ I.createElement(Bf.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ I.createElement(MF, j({}, a, {
    ref: t
  })) : /* @__PURE__ */ I.createElement(kF, j({}, o, {
    ref: t
  })));
});
Y0.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [q0, TF] = Kc(Rr), [Z0, jF] = Kc(Rr, {
  collapsible: !1
}), kF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ I.createElement(q0, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: I.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ I.createElement(Z0, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ I.createElement(X0, j({}, s, {
    ref: t
  }))));
}), MF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = vt({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = I.useCallback(
    (u) => i(
      (f = []) => [
        ...f,
        u
      ]
    ),
    [
      i
    ]
  ), l = I.useCallback(
    (u) => i(
      (f = []) => f.filter(
        (p) => p !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ I.createElement(q0, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ I.createElement(Z0, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ I.createElement(X0, j({}, a, {
    ref: t
  }))));
}), [DF, Gc] = Kc(Rr), X0 = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = I.useRef(null), c = Ee(i, t), l = PF(n), f = zn(o) === "ltr", p = Q(e.onKeyDown, (h) => {
    var m;
    if (!EF.includes(h.key))
      return;
    const v = h.target, g = l().filter((E) => {
      var W;
      return !((W = E.ref.current) !== null && W !== void 0 && W.disabled);
    }), b = g.findIndex(
      (E) => E.ref.current === v
    ), y = g.length;
    if (b === -1)
      return;
    h.preventDefault();
    let x = b;
    const _ = 0, w = y - 1, N = () => {
      x = b + 1, x > w && (x = _);
    }, S = () => {
      x = b - 1, x < _ && (x = w);
    };
    switch (h.key) {
      case "Home":
        x = _;
        break;
      case "End":
        x = w;
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
    const D = x % y;
    (m = g[D].ref.current) === null || m === void 0 || m.focus();
  });
  return /* @__PURE__ */ I.createElement(DF, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ I.createElement(Bf.Slot, {
    scope: n
  }, /* @__PURE__ */ I.createElement(de.div, j({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : p
  }))));
}), Wu = "AccordionItem", [AF, zf] = Kc(Wu), RF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = Gc(Wu, n), s = TF(Wu, n), i = Vf(n), c = bt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ I.createElement(AF, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ I.createElement(G0, j({
    "data-orientation": a.orientation,
    "data-state": Q0(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (f) => {
      f ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), IF = "AccordionHeader", LF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gc(Rr, n), a = zf(IF, n);
  return /* @__PURE__ */ I.createElement(de.h3, j({
    "data-orientation": o.orientation,
    "data-state": Q0(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), _m = "AccordionTrigger", FF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gc(Rr, n), a = zf(_m, n), s = jF(_m, n), i = Vf(n);
  return /* @__PURE__ */ I.createElement(Bf.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ I.createElement(SF, j({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), BF = "AccordionContent", VF = /* @__PURE__ */ I.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = Gc(Rr, n), a = zf(BF, n), s = Vf(n);
  return /* @__PURE__ */ I.createElement(NF, j({
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
function Q0(e) {
  return e ? "open" : "closed";
}
const zF = Y0, WF = RF, UF = LF, J0 = FF, ex = VF, zY = zF, HF = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  WF,
  {
    ref: n,
    className: k("border-b", e),
    ...t
  }
));
HF.displayName = "AccordionItem";
const KF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(UF, { className: "flex", children: /* @__PURE__ */ d.jsxs(
  J0,
  {
    ref: r,
    className: k(
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
KF.displayName = J0.displayName;
const GF = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  ex,
  {
    ref: r,
    className: k(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
GF.displayName = ex.displayName;
const WY = G0, UY = U0, HY = K0;
let Bl;
const tx = "HoverCard", [nx, KY] = ut(tx, [
  Un
]), Wf = Un(), [YF, Uf] = nx(tx), qF = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = Wf(t), l = q(0), u = q(0), f = q(!1), p = q(!1), [h = !1, m] = vt({
    prop: r,
    defaultProp: o,
    onChange: a
  }), v = ve(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => m(!0),
      s
    );
  }, [
    s,
    m
  ]), g = ve(() => {
    clearTimeout(l.current), !f.current && !p.current && (u.current = window.setTimeout(
      () => m(!1),
      i
    ));
  }, [
    i,
    m
  ]), b = ve(
    () => m(!1),
    [
      m
    ]
  );
  return J(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ $(YF, {
    scope: t,
    open: h,
    onOpenChange: m,
    onOpen: v,
    onClose: g,
    onDismiss: b,
    hasSelectionRef: f,
    isPointerDownOnContentRef: p
  }, /* @__PURE__ */ $(na, c, n));
}, ZF = "HoverCardTrigger", XF = /* @__PURE__ */ F((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = Uf(ZF, n), a = Wf(n);
  return /* @__PURE__ */ $($s, j({
    asChild: !0
  }, a), /* @__PURE__ */ $(de.a, j({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: Q(e.onPointerEnter, Hi(o.onOpen)),
    onPointerLeave: Q(e.onPointerLeave, Hi(o.onClose)),
    onFocus: Q(e.onFocus, o.onOpen),
    onBlur: Q(e.onBlur, o.onClose),
    onTouchStart: Q(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), QF = "HoverCardPortal", [GY, JF] = nx(QF, {
  forceMount: void 0
}), Uu = "HoverCardContent", eB = /* @__PURE__ */ F((e, t) => {
  const n = JF(Uu, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Uf(Uu, e.__scopeHoverCard);
  return /* @__PURE__ */ $(ft, {
    present: r || a.open
  }, /* @__PURE__ */ $(tB, j({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: Q(e.onPointerEnter, Hi(a.onOpen)),
    onPointerLeave: Q(e.onPointerLeave, Hi(a.onClose)),
    ref: t
  })));
}), tB = /* @__PURE__ */ F((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = Uf(Uu, n), l = Wf(n), u = q(null), f = Ee(t, u), [p, h] = X(!1);
  return J(() => {
    if (p) {
      const m = document.body;
      return Bl = m.style.userSelect || m.style.webkitUserSelect, m.style.userSelect = "none", m.style.webkitUserSelect = "none", () => {
        m.style.userSelect = Bl, m.style.webkitUserSelect = Bl;
      };
    }
  }, [
    p
  ]), J(() => {
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
  ]), J(() => {
    u.current && nB(u.current).forEach(
      (v) => v.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ $(uo, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: Q(a, (m) => {
      m.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ $(_s, j({}, l, i, {
    onPointerDown: Q(i.onPointerDown, (m) => {
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
function Hi(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function nB(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const rB = qF, oB = XF, rx = eB, YY = rB, qY = oB, aB = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(
  rx,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: k(
      "z-50 w-64 rounded-md border bg-card p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
aB.displayName = rx.displayName;
const ZY = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), Hf = "Menubar", [Hu, sB, iB] = kr(Hf), [ox, XY] = ut(Hf, [
  iB,
  Mr
]), Ft = Ss(), ax = Mr(), [cB, Kf] = ox(Hf), lB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = zn(i), u = ax(n), [f = "", p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [h, m] = X(null);
  return /* @__PURE__ */ $(cB, {
    scope: n,
    value: f,
    onMenuOpen: ve((v) => {
      p(v), m(v);
    }, [
      p
    ]),
    onMenuClose: ve(
      () => p(""),
      [
        p
      ]
    ),
    onMenuToggle: ve((v) => {
      p(
        (g) => g ? "" : v
      ), m(v);
    }, [
      p
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ $(Hu.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Hu.Slot, {
    scope: n
  }, /* @__PURE__ */ $(Ec, j({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: h,
    onCurrentTabStopIdChange: m
  }), /* @__PURE__ */ $(de.div, j({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), sx = "MenubarMenu", [uB, ix] = ox(sx), dB = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = bt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Kf(sx, t), i = Ft(t), c = q(null), l = q(!1), u = s.value === a;
  return J(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ $(uB, {
    scope: t,
    value: a,
    triggerId: bt(),
    triggerRef: c,
    contentId: bt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ $(of, j({}, i, {
    open: u,
    onOpenChange: (f) => {
      f || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, Cm = "MenubarTrigger", fB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = ax(n), s = Ft(n), i = Kf(Cm, n), c = ix(Cm, n), l = q(null), u = Ee(t, l, c.triggerRef), [f, p] = X(!1), h = i.value === c.value;
  return /* @__PURE__ */ $(Hu.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ $(Pc, j({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ $(af, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
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
    onPointerDown: Q(e.onPointerDown, (m) => {
      !r && m.button === 0 && m.ctrlKey === !1 && (i.onMenuOpen(c.value), h || m.preventDefault());
    }),
    onPointerEnter: Q(e.onPointerEnter, () => {
      if (!!i.value && !h) {
        var v;
        i.onMenuOpen(c.value), (v = l.current) === null || v === void 0 || v.focus();
      }
    }),
    onKeyDown: Q(e.onKeyDown, (m) => {
      r || ([
        "Enter",
        " "
      ].includes(m.key) && i.onMenuToggle(c.value), m.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(m.key) && (c.wasKeyboardTriggerOpenRef.current = !0, m.preventDefault()));
    }),
    onFocus: Q(
      e.onFocus,
      () => p(!0)
    ),
    onBlur: Q(
      e.onBlur,
      () => p(!1)
    )
  })))));
}), pB = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = Ft(t);
  return /* @__PURE__ */ $(sf, j({}, r, n));
}, Sm = "MenubarContent", hB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = Ft(n), s = Kf(Sm, n), i = ix(Sm, n), c = sB(n), l = q(!1);
  return /* @__PURE__ */ $(cf, j({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: Q(e.onCloseAutoFocus, (u) => {
      if (!!!s.value && !l.current) {
        var p;
        (p = i.triggerRef.current) === null || p === void 0 || p.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: Q(e.onFocusOutside, (u) => {
      const f = u.target;
      c().some((h) => {
        var m;
        return (m = h.ref.current) === null || m === void 0 ? void 0 : m.contains(f);
      }) && u.preventDefault();
    }),
    onInteractOutside: Q(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: Q(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const f = u.target, p = f.hasAttribute("data-radix-menubar-subtrigger"), h = f.closest("[data-radix-menubar-content]") !== u.currentTarget, v = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!v && p || h && v)
          return;
        let y = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        v && y.reverse();
        const x = y.indexOf(i.value);
        y = s.loop ? NB(y, x + 1) : y.slice(x + 1);
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
}), mB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(lf, j({}, o, r, {
    ref: t
  }));
}), vB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(uf, j({}, o, r, {
    ref: t
  }));
}), gB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(df, j({}, o, r, {
    ref: t
  }));
}), bB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(ff, j({}, o, r, {
    ref: t
  }));
}), yB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(pf, j({}, o, r, {
    ref: t
  }));
}), xB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(hf, j({}, o, r, {
    ref: t
  }));
}), wB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(mf, j({}, o, r, {
    ref: t
  }));
}), $B = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(vf, j({}, o, r, {
    ref: t
  }));
}), _B = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = Ft(t), [i = !1, c] = vt({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ $(gf, j({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, CB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(bf, j({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), SB = /* @__PURE__ */ F((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = Ft(n);
  return /* @__PURE__ */ $(yf, j({}, o, {
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
function NB(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const cx = lB, EB = dB, lx = fB, ux = pB, dx = hB, PB = mB, fx = vB, px = gB, hx = bB, OB = yB, mx = xB, vx = wB, gx = $B, TB = _B, bx = CB, yx = SB, QY = EB, JY = PB, eq = ux, tq = TB, nq = OB, jB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  cx,
  {
    ref: n,
    className: k(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
jB.displayName = cx.displayName;
const kB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  lx,
  {
    ref: n,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
kB.displayName = lx.displayName;
const MB = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  bx,
  {
    ref: o,
    className: k(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ d.jsx(Tr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
MB.displayName = bx.displayName;
const DB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  yx,
  {
    ref: n,
    className: k(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
DB.displayName = yx.displayName;
const AB = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ d.jsx(ux, { children: /* @__PURE__ */ d.jsx(
    dx,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: k(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-card p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
AB.displayName = dx.displayName;
const RB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  px,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
RB.displayName = px.displayName;
const IB = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  hx,
  {
    ref: o,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(vx, { children: /* @__PURE__ */ d.jsx(rn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
IB.displayName = hx.displayName;
const LB = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  mx,
  {
    ref: r,
    className: k(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ d.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(vx, { children: /* @__PURE__ */ d.jsx(lc, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
LB.displayName = mx.displayName;
const FB = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  fx,
  {
    ref: r,
    className: k(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
FB.displayName = fx.displayName;
const BB = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  gx,
  {
    ref: n,
    className: k("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
BB.displayName = gx.displayName;
const VB = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "span",
  {
    className: k(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
VB.displayname = "MenubarShortcut";
const Ds = "NavigationMenu", [Gf, xx, zB] = kr(Ds), [Ku, WB, UB] = kr(Ds), [Yf, rq] = ut(Ds, [
  zB,
  UB
]), [HB, Pn] = Yf(Ds), [KB, GB] = Yf(Ds), YB = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [f, p] = X(null), h = Ee(
    t,
    (E) => p(E)
  ), m = zn(l), v = q(0), g = q(0), b = q(0), [y, x] = X(!0), [_ = "", w] = vt({
    prop: r,
    onChange: (E) => {
      const W = E !== "", G = i > 0;
      W ? (window.clearTimeout(b.current), G && x(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
        () => x(!0),
        i
      )), o == null || o(E);
    },
    defaultProp: a
  }), N = ve(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), S = ve((E) => {
    window.clearTimeout(g.current), w(E);
  }, [
    w
  ]), D = ve((E) => {
    _ === E ? window.clearTimeout(g.current) : v.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(E);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return J(() => () => {
    window.clearTimeout(v.current), window.clearTimeout(g.current), window.clearTimeout(b.current);
  }, []), /* @__PURE__ */ $(qB, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: m,
    orientation: c,
    rootNavigationMenu: f,
    onTriggerEnter: (E) => {
      window.clearTimeout(v.current), y ? D(E) : S(E);
    },
    onTriggerLeave: () => {
      window.clearTimeout(v.current), N();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: N,
    onItemSelect: (E) => {
      w(
        (W) => W === E ? "" : E
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ $(de.nav, j({
    "aria-label": "Main",
    "data-orientation": c,
    dir: m
  }, u, {
    ref: h
  })));
}), qB = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: f, onContentEnter: p, onContentLeave: h } = e, [m, v] = X(null), [g, b] = X(/* @__PURE__ */ new Map()), [y, x] = X(null);
  return /* @__PURE__ */ $(HB, {
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
    onViewportContentChange: ve((_, w) => {
      b((N) => (N.set(_, w), new Map(N)));
    }, []),
    onViewportContentRemove: ve((_) => {
      b((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ $(Gf.Provider, {
    scope: t
  }, /* @__PURE__ */ $(KB, {
    scope: t,
    items: g
  }, s)));
}, ZB = "NavigationMenuList", XB = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Pn(ZB, n), a = /* @__PURE__ */ $(de.ul, j({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ $(de.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ $(Gf.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ $(Sx, {
    asChild: !0
  }, a) : a));
}), QB = "NavigationMenuItem", [JB, wx] = Yf(QB), eV = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = bt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = q(null), c = q(null), l = q(null), u = q(() => {
  }), f = q(!1), p = ve((m = "start") => {
    if (i.current) {
      u.current();
      const v = Gu(i.current);
      v.length && qf(m === "start" ? v : v.reverse());
    }
  }, []), h = ve(() => {
    if (i.current) {
      const m = Gu(i.current);
      m.length && (u.current = dV(m));
    }
  }, []);
  return /* @__PURE__ */ $(JB, {
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
  }, /* @__PURE__ */ $(de.li, j({}, o, {
    ref: t
  })));
}), Nm = "NavigationMenuTrigger", tV = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Pn(Nm, e.__scopeNavigationMenu), s = wx(Nm, e.__scopeNavigationMenu), i = q(null), c = Ee(i, s.triggerRef, t), l = Ex(a.baseId, s.value), u = Px(a.baseId, s.value), f = q(!1), p = q(!1), h = s.value === a.value;
  return /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(Gf.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ $(Nx, {
    asChild: !0
  }, /* @__PURE__ */ $(de.button, j({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": Zf(h),
    "aria-expanded": h,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: Q(e.onPointerEnter, () => {
      p.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: Q(e.onPointerMove, Ki(() => {
      r || p.current || s.wasEscapeCloseRef.current || f.current || (a.onTriggerEnter(s.value), f.current = !0);
    })),
    onPointerLeave: Q(e.onPointerLeave, Ki(() => {
      r || (a.onTriggerLeave(), f.current = !1);
    })),
    onClick: Q(e.onClick, () => {
      a.onItemSelect(s.value), p.current = h;
    }),
    onKeyDown: Q(e.onKeyDown, (m) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      h && m.key === g && (s.onEntryKeyDown(), m.preventDefault());
    })
  })))), h && /* @__PURE__ */ $(vn, null, /* @__PURE__ */ $(ky, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (m) => {
      const v = s.contentRef.current, g = m.relatedTarget, b = g === i.current, y = v == null ? void 0 : v.contains(g);
      (b || !y) && s.onFocusProxyEnter(b ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ $("span", {
    "aria-owns": u
  })));
}), Em = "navigationMenu.linkSelect", nV = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ $(Nx, {
    asChild: !0
  }, /* @__PURE__ */ $(de.a, j({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: Q(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Em, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Em,
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
}), $x = "NavigationMenuIndicator", rV = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn($x, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? /* @__PURE__ */ lv.createPortal(/* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(oV, j({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), oV = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Pn($x, n), a = xx(n), [s, i] = X(null), [c, l] = X(null), u = o.orientation === "horizontal", f = !!o.value;
  J(() => {
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
  return Yu(s, p), Yu(o.indicatorTrack, p), c ? /* @__PURE__ */ $(de.div, j({
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
}), Ga = "NavigationMenuContent", aV = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, o = Pn(Ga, e.__scopeNavigationMenu), a = wx(Ga, e.__scopeNavigationMenu), s = Ee(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ $(sV, j({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ $(ft, {
    present: n || i
  }, /* @__PURE__ */ $(_x, j({
    "data-state": Zf(i)
  }, c, {
    ref: s,
    onPointerEnter: Q(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: Q(e.onPointerLeave, Ki(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), sV = /* @__PURE__ */ F((e, t) => {
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
}), mi = "navigationMenu.rootContentDismiss", _x = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = Pn(Ga, n), f = q(null), p = Ee(f, t), h = Ex(u.baseId, r), m = Px(u.baseId, r), v = xx(n), g = q(null), { onItemDismiss: b } = u;
  J(() => {
    const x = f.current;
    if (u.isRootMenu && x) {
      const _ = () => {
        var w;
        b(), i(), x.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
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
      (W) => W.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), N = _.indexOf(u.previousValue), S = r === u.value, D = N === _.indexOf(r);
    if (!S && !D)
      return g.current;
    const E = (() => {
      if (w !== N) {
        if (S && N !== -1)
          return w > N ? "from-end" : "from-start";
        if (D && w !== -1)
          return w > N ? "to-start" : "to-end";
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
  return /* @__PURE__ */ $(Sx, {
    asChild: !0
  }, /* @__PURE__ */ $(uo, j({
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
    onFocusOutside: Q(e.onFocusOutside, (x) => {
      var _;
      c();
      const w = x.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && x.preventDefault();
    }),
    onPointerDownOutside: Q(e.onPointerDownOutside, (x) => {
      var _;
      const w = x.target, N = v().some((D) => {
        var E;
        return (E = D.ref.current) === null || E === void 0 ? void 0 : E.contains(w);
      }), S = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (N || S || !u.isRootMenu) && x.preventDefault();
    }),
    onKeyDown: Q(e.onKeyDown, (x) => {
      const _ = x.altKey || x.ctrlKey || x.metaKey;
      if (x.key === "Tab" && !_) {
        const S = Gu(x.currentTarget), D = document.activeElement, E = S.findIndex(
          (z) => z === D
        ), G = x.shiftKey ? S.slice(0, E).reverse() : S.slice(E + 1, S.length);
        if (qf(G))
          x.preventDefault();
        else {
          var N;
          (N = a.current) === null || N === void 0 || N.focus();
        }
      }
    }),
    onEscapeKeyDown: Q(e.onEscapeKeyDown, (x) => {
      s.current = !0;
    })
  })));
}), Cx = "NavigationMenuViewport", iV = /* @__PURE__ */ F((e, t) => {
  const { forceMount: n, ...r } = e, a = !!Pn(Cx, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ $(ft, {
    present: n || a
  }, /* @__PURE__ */ $(cV, j({}, r, {
    ref: t
  })));
}), cV = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Pn(Cx, n), s = Ee(t, a.onViewportChange), i = GB(Ga, e.__scopeNavigationMenu), [c, l] = X(null), [u, f] = X(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, h = c ? (c == null ? void 0 : c.height) + "px" : void 0, m = !!a.value, v = m ? a.value : a.previousValue;
  return Yu(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ $(de.div, j({
    "data-state": Zf(m),
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
    onPointerEnter: Q(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: Q(e.onPointerLeave, Ki(a.onContentLeave))
  }), Array.from(i.items).map(([b, { ref: y, forceMount: x, ..._ }]) => {
    const w = v === b;
    return /* @__PURE__ */ $(ft, {
      key: b,
      present: x || w
    }, /* @__PURE__ */ $(_x, j({}, _, {
      ref: ps(y, (N) => {
        w && N && f(N);
      })
    })));
  }));
}), lV = "FocusGroup", Sx = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Pn(lV, n);
  return /* @__PURE__ */ $(Ku.Provider, {
    scope: n
  }, /* @__PURE__ */ $(Ku.Slot, {
    scope: n
  }, /* @__PURE__ */ $(de.div, j({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), Pm = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], uV = "FocusGroupItem", Nx = /* @__PURE__ */ F((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = WB(n), a = Pn(uV, n);
  return /* @__PURE__ */ $(Ku.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ $(de.button, j({}, r, {
    ref: t,
    onKeyDown: Q(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...Pm
      ].includes(s.key)) {
        let c = o().map(
          (f) => f.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), Pm.includes(s.key)) {
          const f = c.indexOf(s.currentTarget);
          c = c.slice(f + 1);
        }
        setTimeout(
          () => qf(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Gu(e) {
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
function qf(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function dV(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Yu(e, t) {
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
function Zf(e) {
  return e ? "open" : "closed";
}
function Ex(e, t) {
  return `${e}-trigger-${t}`;
}
function Px(e, t) {
  return `${e}-content-${t}`;
}
function Ki(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Ox = YB, Tx = XB, fV = eV, jx = tV, pV = nV, kx = rV, Mx = aV, Dx = iV, hV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  Ox,
  {
    ref: r,
    className: k(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ d.jsx(Ax, {})
    ]
  }
));
hV.displayName = Ox.displayName;
const mV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Tx,
  {
    ref: n,
    className: k(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
mV.displayName = Tx.displayName;
const oq = fV, vV = Go(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), gV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
  jx,
  {
    ref: r,
    className: k(vV(), "group", e),
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
gV.displayName = jx.displayName;
const bV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Mx,
  {
    ref: n,
    className: k(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
bV.displayName = Mx.displayName;
const aq = pV, Ax = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { className: k("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ d.jsx(
  Dx,
  {
    className: k(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-card text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
Ax.displayName = Dx.displayName;
const yV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  kx,
  {
    ref: n,
    className: k(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ d.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
yV.displayName = kx.displayName;
const Rx = "Progress", Yc = 100, [xV, sq] = ut(Rx), [wV, $V] = xV(Rx), Ix = /* @__PURE__ */ F((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = SV, ...s } = e, i = qu(o) ? o : Yc, c = Fx(r, i) ? r : null, l = Gi(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ $(wV, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ $(de.div, j({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": Gi(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": Lx(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
Ix.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !qu(r) ? new Error(NV(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = qu(e.max) ? e.max : Yc;
    return r != null && !Fx(r, a) ? new Error(EV(o, n)) : null;
  }
};
const _V = "ProgressIndicator", CV = /* @__PURE__ */ F((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = $V(_V, r);
  return /* @__PURE__ */ $(de.div, j({
    "data-state": Lx(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function SV(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Lx(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Gi(e) {
  return typeof e == "number";
}
function qu(e) {
  return Gi(e) && !isNaN(e) && e > 0;
}
function Fx(e, t) {
  return Gi(e) && !isNaN(e) && e <= t && e >= 0;
}
function NV(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Yc}\`.`;
}
function EV(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Yc} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const Bx = Ix, PV = CV, OV = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Bx,
  {
    ref: r,
    className: k(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(
      PV,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
OV.displayName = Bx.displayName;
const Vx = "Radio", [TV, zx] = ut(Vx), [jV, kV] = TV(Vx), MV = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, f] = X(null), p = Ee(
    t,
    (v) => f(v)
  ), h = q(!1), m = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ $(jV, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": Wx(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: p,
    onClick: Q(e.onClick, (v) => {
      o || c == null || c(), m && (h.current = v.isPropagationStopped(), h.current || v.stopPropagation());
    })
  })), m && /* @__PURE__ */ $(RV, {
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
}), DV = "RadioIndicator", AV = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = kV(DV, n);
  return /* @__PURE__ */ $(ft, {
    present: r || a.checked
  }, /* @__PURE__ */ $(de.span, j({
    "data-state": Wx(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), RV = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = ws(t);
  return J(() => {
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
  ]), /* @__PURE__ */ $("input", j({
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
function Wx(e) {
  return e ? "checked" : "unchecked";
}
const IV = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Ux = "RadioGroup", [LV, iq] = ut(Ux, [
  Mr,
  zx
]), Hx = Mr(), Kx = zx(), [FV, BV] = LV(Ux), VV = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: f, ...p } = e, h = Hx(n), m = zn(l), [v, g] = vt({
    prop: a,
    defaultProp: o,
    onChange: f
  });
  return /* @__PURE__ */ $(FV, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: v,
    onValueChange: g
  }, /* @__PURE__ */ $(Ec, j({
    asChild: !0
  }, h, {
    orientation: c,
    dir: m,
    loop: u
  }), /* @__PURE__ */ $(de.div, j({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: m
  }, p, {
    ref: t
  }))));
}), zV = "RadioGroupItem", WV = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = BV(zV, n), s = a.disabled || r, i = Hx(n), c = Kx(n), l = q(null), u = Ee(t, l), f = a.value === o.value, p = q(!1);
  return J(() => {
    const h = (v) => {
      IV.includes(v.key) && (p.current = !0);
    }, m = () => p.current = !1;
    return document.addEventListener("keydown", h), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", h), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ $(Pc, j({
    asChild: !0
  }, i, {
    focusable: !s,
    active: f
  }), /* @__PURE__ */ $(MV, j({
    disabled: s,
    required: a.required,
    checked: f
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: Q((h) => {
      h.key === "Enter" && h.preventDefault();
    }),
    onFocus: Q(o.onFocus, () => {
      var h;
      p.current && ((h = l.current) === null || h === void 0 || h.click());
    })
  })));
}), UV = /* @__PURE__ */ F((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = Kx(n);
  return /* @__PURE__ */ $(AV, j({}, o, r, {
    ref: t
  }));
}), Gx = VV, Yx = WV, HV = UV, KV = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Gx,
  {
    className: k("grid gap-2", e),
    ...t,
    ref: n
  }
));
KV.displayName = Gx.displayName;
const GV = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  Yx,
  {
    ref: r,
    className: k(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ d.jsx(HV, { className: "flex items-center justify-center", children: /* @__PURE__ */ d.jsx(lc, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
GV.displayName = Yx.displayName;
const qx = [
  "PageUp",
  "PageDown"
], Zx = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], Xx = {
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
}, As = "Slider", [Zu, YV, qV] = kr(As), [Qx, cq] = ut(As, [
  qV
]), [ZV, qc] = Qx(As), XV = /* @__PURE__ */ F((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: f = () => {
  }, onValueCommit: p = () => {
  }, inverted: h = !1, ...m } = e, [v, g] = X(null), b = Ee(
    t,
    (L) => g(L)
  ), y = q(/* @__PURE__ */ new Set()), x = q(0), _ = s === "horizontal", w = v ? !!v.closest("form") : !0, N = _ ? QV : JV, [S = [], D] = vt({
    prop: u,
    defaultProp: l,
    onChange: (L) => {
      var P;
      (P = [
        ...y.current
      ][x.current]) === null || P === void 0 || P.focus(), f(L);
    }
  }), E = q(S);
  function W(L) {
    const P = cz(S, L);
    K(L, P);
  }
  function G(L) {
    K(L, x.current);
  }
  function z() {
    const L = E.current[x.current];
    S[x.current] !== L && p(S);
  }
  function K(L, P, { commit: R } = {
    commit: !1
  }) {
    const O = fz(a), V = pz(Math.round((L - r) / a) * a + r, O), U = Ua(V, [
      r,
      o
    ]);
    D((Z = []) => {
      const oe = sz(Z, U, P);
      if (dz(oe, c * a)) {
        x.current = oe.indexOf(U);
        const H = String(oe) !== String(Z);
        return H && R && p(oe), H ? oe : Z;
      } else
        return Z;
    });
  }
  return /* @__PURE__ */ $(ZV, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: x,
    thumbs: y.current,
    values: S,
    orientation: s
  }, /* @__PURE__ */ $(Zu.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(Zu.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(N, j({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, m, {
    ref: b,
    onPointerDown: Q(m.onPointerDown, () => {
      i || (E.current = S);
    }),
    min: r,
    max: o,
    inverted: h,
    onSlideStart: i ? void 0 : W,
    onSlideMove: i ? void 0 : G,
    onSlideEnd: i ? void 0 : z,
    onHomeKeyDown: () => !i && K(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && K(o, S.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: L, direction: P }) => {
      if (!i) {
        const V = qx.includes(L.key) || L.shiftKey && Zx.includes(L.key) ? 10 : 1, U = x.current, Z = S[U], oe = a * V * P;
        K(Z + oe, U, {
          commit: !0
        });
      }
    }
  })))), w && S.map(
    (L, P) => /* @__PURE__ */ $(az, {
      key: P,
      name: n ? n + (S.length > 1 ? "[]" : "") : void 0,
      value: L
    })
  ));
}), [Jx, e1] = Qx(As, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), QV = /* @__PURE__ */ F((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [f, p] = X(null), h = Ee(
    t,
    (x) => p(x)
  ), m = q(), v = zn(o), g = v === "ltr", b = g && !a || !g && a;
  function y(x) {
    const _ = m.current || f.getBoundingClientRect(), w = [
      0,
      _.width
    ], S = Xf(w, b ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return m.current = _, S(x - _.left);
  }
  return /* @__PURE__ */ $(Jx, {
    scope: e.__scopeSlider,
    startEdge: b ? "left" : "right",
    endEdge: b ? "right" : "left",
    direction: b ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ $(t1, j({
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
      const w = Xx[b ? "from-left" : "from-right"].includes(x.key);
      l == null || l({
        event: x,
        direction: w ? -1 : 1
      });
    }
  })));
}), JV = /* @__PURE__ */ F((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = q(null), f = Ee(t, u), p = q(), h = !o;
  function m(v) {
    const g = p.current || u.current.getBoundingClientRect(), b = [
      0,
      g.height
    ], x = Xf(b, h ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return p.current = g, x(v - g.top);
  }
  return /* @__PURE__ */ $(Jx, {
    scope: e.__scopeSlider,
    startEdge: h ? "bottom" : "top",
    endEdge: h ? "top" : "bottom",
    size: "height",
    direction: h ? 1 : -1
  }, /* @__PURE__ */ $(t1, j({
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
      const b = Xx[h ? "from-bottom" : "from-top"].includes(v.key);
      c == null || c({
        event: v,
        direction: b ? -1 : 1
      });
    }
  })));
}), t1 = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = qc(As, n);
  return /* @__PURE__ */ $(de.span, j({}, l, {
    ref: t,
    onKeyDown: Q(e.onKeyDown, (f) => {
      f.key === "Home" ? (s(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : qx.concat(Zx).includes(f.key) && (c(f), f.preventDefault());
    }),
    onPointerDown: Q(e.onPointerDown, (f) => {
      const p = f.target;
      p.setPointerCapture(f.pointerId), f.preventDefault(), u.thumbs.has(p) ? p.focus() : r(f);
    }),
    onPointerMove: Q(e.onPointerMove, (f) => {
      f.target.hasPointerCapture(f.pointerId) && o(f);
    }),
    onPointerUp: Q(e.onPointerUp, (f) => {
      const p = f.target;
      p.hasPointerCapture(f.pointerId) && (p.releasePointerCapture(f.pointerId), a(f));
    })
  }));
}), ez = "SliderTrack", tz = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = qc(ez, n);
  return /* @__PURE__ */ $(de.span, j({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), Om = "SliderRange", nz = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = qc(Om, n), a = e1(Om, n), s = q(null), i = Ee(t, s), c = o.values.length, l = o.values.map(
    (p) => n1(p, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, f = 100 - Math.max(...l);
  return /* @__PURE__ */ $(de.span, j({
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
}), Tm = "SliderThumb", rz = /* @__PURE__ */ F((e, t) => {
  const n = YV(e.__scopeSlider), [r, o] = X(null), a = Ee(
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
  return /* @__PURE__ */ $(oz, j({}, e, {
    ref: a,
    index: s
  }));
}), oz = /* @__PURE__ */ F((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = qc(Tm, n), s = e1(Tm, n), [i, c] = X(null), l = Ee(
    t,
    (g) => c(g)
  ), u = ws(i), f = a.values[r], p = f === void 0 ? 0 : n1(f, a.min, a.max), h = iz(r, a.values.length), m = u == null ? void 0 : u[s.size], v = m ? lz(m, p, s.direction) : 0;
  return J(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ $("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${p}% + ${v}px)`
    }
  }, /* @__PURE__ */ $(Zu.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ $(de.span, j({
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
    onFocus: Q(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), az = (e) => {
  const { value: t, ...n } = e, r = q(null), o = ia(t);
  return J(() => {
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
  ]), /* @__PURE__ */ $("input", j({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function sz(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function n1(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Ua(a, [
    0,
    100
  ]);
}
function iz(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function cz(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function lz(e, t, n) {
  const r = e / 2, a = Xf([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function uz(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function dz(e, t) {
  if (t > 0) {
    const n = uz(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Xf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function fz(e) {
  return (String(e).split(".")[1] || "").length;
}
function pz(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const r1 = XV, hz = tz, mz = nz, vz = rz, gz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsxs(
  r1,
  {
    ref: n,
    className: k(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(hz, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ d.jsx(mz, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ d.jsx(vz, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
gz.displayName = r1.displayName;
const o1 = "Tabs", [bz, lq] = ut(o1, [
  Mr
]), a1 = Mr(), [yz, Qf] = bz(o1), xz = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = zn(i), [f, p] = vt({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ $(yz, {
    scope: n,
    baseId: bt(),
    value: f,
    onValueChange: p,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ $(de.div, j({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), wz = "TabsList", $z = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Qf(wz, n), s = a1(n);
  return /* @__PURE__ */ $(Ec, j({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ $(de.div, j({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), _z = "TabsTrigger", Cz = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Qf(_z, n), i = a1(n), c = s1(s.baseId, r), l = i1(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ $(Pc, j({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ $(de.button, j({
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
    onMouseDown: Q(e.onMouseDown, (f) => {
      !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
    }),
    onKeyDown: Q(e.onKeyDown, (f) => {
      [
        " ",
        "Enter"
      ].includes(f.key) && s.onValueChange(r);
    }),
    onFocus: Q(e.onFocus, () => {
      const f = s.activationMode !== "manual";
      !u && !o && f && s.onValueChange(r);
    })
  })));
}), Sz = "TabsContent", Nz = /* @__PURE__ */ F((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Qf(Sz, n), c = s1(i.baseId, r), l = i1(i.baseId, r), u = r === i.value, f = q(u);
  return J(() => {
    const p = requestAnimationFrame(
      () => f.current = !1
    );
    return () => cancelAnimationFrame(p);
  }, []), /* @__PURE__ */ $(
    ft,
    {
      present: o || u
    },
    ({ present: p }) => /* @__PURE__ */ $(de.div, j({
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
function s1(e, t) {
  return `${e}-trigger-${t}`;
}
function i1(e, t) {
  return `${e}-content-${t}`;
}
const Ez = xz, c1 = $z, l1 = Cz, u1 = Nz, uq = Ez, Pz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  c1,
  {
    ref: n,
    className: k(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Pz.displayName = c1.displayName;
const Oz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  l1,
  {
    ref: n,
    className: k(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Oz.displayName = l1.displayName;
const Tz = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  u1,
  {
    ref: n,
    className: k(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Tz.displayName = u1.displayName;
const jz = /* @__PURE__ */ F((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = vt({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ $(de.button, j({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: Q(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), d1 = jz, kz = Go(
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
), Mz = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ d.jsx(
  d1,
  {
    ref: o,
    className: k(kz({ variant: t, size: n, className: e })),
    ...r
  }
));
Mz.displayName = d1.displayName;
const [Zc, dq] = ut("Tooltip", [
  Un
]), Jf = Un(), Dz = "TooltipProvider", Az = 700, Xu = "tooltip.open", [Rz, ep] = Zc(Dz), Iz = (e) => {
  const { __scopeTooltip: t, delayDuration: n = Az, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = X(!0), c = q(!1), l = q(0);
  return J(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ $(Rz, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: ve(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: ve(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: ve((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, tp = "Tooltip", [Lz, Xc] = Zc(tp), Fz = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = ep(tp, e.__scopeTooltip), l = Jf(t), [u, f] = X(null), p = bt(), h = q(0), m = s ?? c.disableHoverableContent, v = i ?? c.delayDuration, g = q(!1), [b = !1, y] = vt({
    prop: r,
    defaultProp: o,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Xu))) : c.onClose(), a == null || a(S);
    }
  }), x = Zt(() => b ? g.current ? "delayed-open" : "instant-open" : "closed", [
    b
  ]), _ = ve(() => {
    window.clearTimeout(h.current), g.current = !1, y(!0);
  }, [
    y
  ]), w = ve(() => {
    window.clearTimeout(h.current), y(!1);
  }, [
    y
  ]), N = ve(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, y(!0);
    }, v);
  }, [
    v,
    y
  ]);
  return J(() => () => window.clearTimeout(h.current), []), /* @__PURE__ */ $(na, l, /* @__PURE__ */ $(Lz, {
    scope: t,
    contentId: p,
    open: b,
    stateAttribute: x,
    trigger: u,
    onTriggerChange: f,
    onTriggerEnter: ve(() => {
      c.isOpenDelayed ? N() : _();
    }, [
      c.isOpenDelayed,
      N,
      _
    ]),
    onTriggerLeave: ve(() => {
      m ? w() : window.clearTimeout(h.current);
    }, [
      w,
      m
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: m
  }, n));
}, jm = "TooltipTrigger", Bz = /* @__PURE__ */ F((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = Xc(jm, n), a = ep(jm, n), s = Jf(n), i = q(null), c = Ee(t, i, o.onTriggerChange), l = q(!1), u = q(!1), f = ve(
    () => l.current = !1,
    []
  );
  return J(() => () => document.removeEventListener("pointerup", f), [
    f
  ]), /* @__PURE__ */ $($s, j({
    asChild: !0
  }, s), /* @__PURE__ */ $(de.button, j({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: Q(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: Q(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: Q(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", f, {
        once: !0
      });
    }),
    onFocus: Q(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: Q(e.onBlur, o.onClose),
    onClick: Q(e.onClick, o.onClose)
  })));
}), Vz = "TooltipPortal", [fq, zz] = Zc(Vz, {
  forceMount: void 0
}), Ya = "TooltipContent", Wz = /* @__PURE__ */ F((e, t) => {
  const n = zz(Ya, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = Xc(Ya, e.__scopeTooltip);
  return /* @__PURE__ */ $(ft, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ $(f1, j({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ $(Uz, j({
    side: o
  }, a, {
    ref: t
  })));
}), Uz = /* @__PURE__ */ F((e, t) => {
  const n = Xc(Ya, e.__scopeTooltip), r = ep(Ya, e.__scopeTooltip), o = q(null), a = Ee(t, o), [s, i] = X(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: f } = r, p = ve(() => {
    i(null), f(!1);
  }, [
    f
  ]), h = ve((m, v) => {
    const g = m.currentTarget, b = {
      x: m.clientX,
      y: m.clientY
    }, y = Kz(b, g.getBoundingClientRect()), x = Gz(b, y), _ = Yz(v.getBoundingClientRect()), w = Zz([
      ...x,
      ..._
    ]);
    i(w), f(!0);
  }, [
    f
  ]);
  return J(() => () => p(), [
    p
  ]), J(() => {
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
  ]), J(() => {
    if (s) {
      const m = (v) => {
        const g = v.target, b = {
          x: v.clientX,
          y: v.clientY
        }, y = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), x = !qz(b, s);
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
  ]), /* @__PURE__ */ $(f1, j({}, e, {
    ref: a
  }));
}), [Hz, pq] = Zc(tp, {
  isInside: !1
}), f1 = /* @__PURE__ */ F((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = Xc(Ya, n), l = Jf(n), { onClose: u } = c;
  return J(() => (document.addEventListener(Xu, u), () => document.removeEventListener(Xu, u)), [
    u
  ]), J(() => {
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
  ]), /* @__PURE__ */ $(uo, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (f) => f.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ $(_s, j({
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
  }), /* @__PURE__ */ $(pd, null, r), /* @__PURE__ */ $(Hz, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ $(ky, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function Kz(e, t) {
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
function Gz(e, t, n = 5) {
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
function Yz(e) {
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
function qz(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function Zz(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Xz(t);
}
function Xz(e) {
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
const Qz = Iz, Jz = Fz, eW = Bz, p1 = Wz, eo = Qz, to = Jz, no = eW, Sr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ d.jsx(
  p1,
  {
    ref: r,
    sideOffset: t,
    className: k(
      "z-50 overflow-hidden rounded-md border bg-card px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
Sr.displayName = p1.displayName;
const h1 = "Switch", [tW, hq] = ut(h1), [nW, rW] = tW(h1), oW = /* @__PURE__ */ F((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [f, p] = X(null), h = Ee(
    t,
    (y) => p(y)
  ), m = q(!1), v = f ? !!f.closest("form") : !0, [g = !1, b] = vt({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ $(nW, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ $(de.button, j({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": m1(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: h,
    onClick: Q(e.onClick, (y) => {
      b(
        (x) => !x
      ), v && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), v && /* @__PURE__ */ $(iW, {
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
}), aW = "SwitchThumb", sW = /* @__PURE__ */ F((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = rW(aW, n);
  return /* @__PURE__ */ $(de.span, j({
    "data-state": m1(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), iW = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = q(null), s = ia(n), i = ws(t);
  return J(() => {
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
  ]), /* @__PURE__ */ $("input", j({
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
function m1(e) {
  return e ? "checked" : "unchecked";
}
const v1 = oW, cW = sW, lW = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  v1,
  {
    className: k(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ d.jsx(
      cW,
      {
        className: k(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
lW.displayName = v1.displayName;
var uW = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const km = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (u, f) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const h = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((m) => m(t, h));
    }
  }, o = () => t, c = { setState: r, getState: o, getInitialState: () => l, subscribe: (u) => (n.add(u), () => n.delete(u)), destroy: () => {
    (uW ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, o, c);
  return c;
}, dW = (e) => e ? km(e) : km;
var Qu = { exports: {} }, Vl = {}, ti = { exports: {} }, zl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm;
function fW() {
  if (Mm)
    return zl;
  Mm = 1;
  var e = I;
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
var Dm;
function pW() {
  return Dm || (Dm = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = I, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(x) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), N = 1; N < _; N++)
          w[N - 1] = arguments[N];
        r("error", x, w);
      }
    }
    function r(x, _, w) {
      {
        var N = t.ReactDebugCurrentFrame, S = N.getStackAddendum();
        S !== "" && (_ += "%s", w = w.concat([S]));
        var D = w.map(function(E) {
          return String(E);
        });
        D.unshift("Warning: " + _), Function.prototype.apply.call(console[x], console, D);
      }
    }
    function o(x, _) {
      return x === _ && (x !== 0 || 1 / x === 1 / _) || x !== x && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, f = !1;
    function p(x, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var N = _();
      if (!f) {
        var S = _();
        a(N, S) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var D = s({
        inst: {
          value: N,
          getSnapshot: _
        }
      }), E = D[0].inst, W = D[1];
      return c(function() {
        E.value = N, E.getSnapshot = _, h(E) && W({
          inst: E
        });
      }, [x, N, _]), i(function() {
        h(E) && W({
          inst: E
        });
        var G = function() {
          h(E) && W({
            inst: E
          });
        };
        return x(G);
      }, [x]), l(N), N;
    }
    function h(x) {
      var _ = x.getSnapshot, w = x.value;
      try {
        var N = _();
        return !a(w, N);
      } catch {
        return !0;
      }
    }
    function m(x, _, w) {
      return _();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !v, b = g ? m : p, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : b;
    Wl.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wl;
}
var Am;
function g1() {
  return Am || (Am = 1, process.env.NODE_ENV === "production" ? ti.exports = fW() : ti.exports = pW()), ti.exports;
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
var Rm;
function hW() {
  if (Rm)
    return Vl;
  Rm = 1;
  var e = I, t = g1();
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
        var D = p(N);
        return h !== void 0 && h(S, D) ? S : (x = N, _ = D);
      }
      var y = !1, x, _, w = f === void 0 ? null : f;
      return [function() {
        return b(u());
      }, w === null ? void 0 : function() {
        return b(w());
      }];
    }, [u, f, p, h]);
    var g = o(l, m[0], m[1]);
    return s(function() {
      v.hasValue = !0, v.value = g;
    }, [g]), c(g), g;
  }, Vl;
}
var Ul = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im;
function mW() {
  return Im || (Im = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = I, t = g1();
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
        var w = !1, N, S, D = function(z) {
          if (!w) {
            w = !0, N = z;
            var K = h(z);
            if (m !== void 0 && g.hasValue) {
              var L = g.value;
              if (m(L, K))
                return S = L, L;
            }
            return S = K, K;
          }
          var P = N, R = S;
          if (r(P, z))
            return R;
          var O = h(z);
          return m !== void 0 && m(R, O) ? R : (N = z, S = O, O);
        }, E = p === void 0 ? null : p, W = function() {
          return D(f());
        }, G = E === null ? void 0 : function() {
          return D(E());
        };
        return [W, G];
      }, [f, p, h, m]), y = b[0], x = b[1], _ = o(u, y, x);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Ul.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ul;
}
process.env.NODE_ENV === "production" ? Qu.exports = hW() : Qu.exports = mW();
var vW = Qu.exports;
const gW = /* @__PURE__ */ Cn(vW);
var b1 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: bW } = I, { useSyncExternalStoreWithSelector: yW } = gW;
let Lm = !1;
const xW = (e) => e;
function wW(e, t = xW, n) {
  (b1 ? "production" : void 0) !== "production" && n && !Lm && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Lm = !0);
  const r = yW(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return bW(r), r;
}
const Fm = (e) => {
  (b1 ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? dW(e) : e, n = (r, o) => wW(t, r, o);
  return Object.assign(n, t), n;
}, $W = (e) => e ? Fm(e) : Fm, _W = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ d.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ d.jsxs(To, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ d.jsx(
      Gr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ d.jsx(jo, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ d.jsx($$, { className: "text-black dark:text-white h-full" }) })
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
var CW = {
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
const Ir = (e, t, n, r) => {
  const o = F(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, className: c, children: l, ...u }, f) => $(
      "svg",
      {
        ref: f,
        ...CW[e],
        width: s,
        height: s,
        className: ["tabler-icon", `tabler-icon-${t}`, c].join(" "),
        strokeWidth: i,
        stroke: a,
        ...u
      },
      [
        ...r.map(([p, h]) => $(p, h)),
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
var y1 = Ir("outline", "adjustments-horizontal", "IconAdjustmentsHorizontal", [["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M4 6l8 0", key: "svg-1" }], ["path", { d: "M16 6l4 0", key: "svg-2" }], ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }], ["path", { d: "M4 12l2 0", key: "svg-4" }], ["path", { d: "M10 12l10 0", key: "svg-5" }], ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }], ["path", { d: "M4 18l11 0", key: "svg-7" }], ["path", { d: "M19 18l1 0", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var x1 = Ir("outline", "adjustments", "IconAdjustments", [["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M6 4v4", key: "svg-1" }], ["path", { d: "M6 12v8", key: "svg-2" }], ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }], ["path", { d: "M12 4v10", key: "svg-4" }], ["path", { d: "M12 18v2", key: "svg-5" }], ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }], ["path", { d: "M18 4v1", key: "svg-7" }], ["path", { d: "M18 9v11", key: "svg-8" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var SW = Ir("outline", "check", "IconCheck", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var NW = Ir("outline", "click", "IconClick", [["path", { d: "M3 12l3 0", key: "svg-0" }], ["path", { d: "M12 3l0 3", key: "svg-1" }], ["path", { d: "M7.8 7.8l-2.2 -2.2", key: "svg-2" }], ["path", { d: "M16.2 7.8l2.2 -2.2", key: "svg-3" }], ["path", { d: "M7.8 16.2l-2.2 2.2", key: "svg-4" }], ["path", { d: "M12 12l9 3l-4 2l-2 4l-3 -9", key: "svg-5" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var w1 = Ir("outline", "moon", "IconMoon", [["path", { d: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", key: "svg-0" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $1 = Ir("outline", "photo-star", "IconPhotoStar", [["path", { d: "M15 8h.01", key: "svg-0" }], ["path", { d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5", key: "svg-1" }], ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }], ["path", { d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z", key: "svg-3" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _1 = Ir("outline", "search", "IconSearch", [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]]);
/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var C1 = Ir("outline", "sun", "IconSun", [["path", { d: "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0", key: "svg-0" }], ["path", { d: "M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7", key: "svg-1" }]]), Bm = ["light", "dark"], EW = "(prefers-color-scheme: dark)", PW = C.createContext(void 0), OW = { setTheme: (e) => {
}, themes: [] }, TW = () => {
  var e;
  return (e = C.useContext(PW)) != null ? e : OW;
};
C.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: c }) => {
  let l = a === "system", u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((m) => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, f = o ? Bm.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", p = (m, v = !1, g = !0) => {
    let b = s ? s[m] : m, y = v ? m + "|| ''" : `'${b}'`, x = "";
    return o && g && !v && Bm.includes(m) && (x += `d.style.colorScheme = '${m}';`), n === "class" ? v || b ? x += `c.add(${y})` : x += "null" : b && (x += `d[s](n,${y})`), x;
  }, h = e ? `!function(){${u}${p(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${EW}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}${l ? "" : "else{" + p(a, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${p(s ? "x[e]" : "e", !0)}}else{${p(a, !1, !1)};}${f}}catch(t){}}();`;
  return C.createElement("script", { nonce: c, dangerouslySetInnerHTML: { __html: h } });
});
const jW = ({ isExpanded: e }) => {
  const [t, n] = X(!1), { theme: r, setTheme: o } = TW();
  if (J(() => {
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
        /* @__PURE__ */ d.jsx(w1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(C1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  );
}, kW = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ d.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ d.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ d.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(jW, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ d.jsx(x$, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(w$, { className: "dark:text-white", size: 20 }),
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
          /* @__PURE__ */ d.jsx(wv, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), Qc = $W((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), mq = ({
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
      className: k(
        `sidebar dark:border-transparent overflow-hidden ${a ? "" : "hidden"} lg:block`,
        t,
        `${s ? "max-w-[240px]" : "max-w-[100px]"}`,
        `${a ? "ml-auto" : ""}`
      ),
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ d.jsx(_W, { isExpanded: s, profile: n }),
        e,
        /* @__PURE__ */ d.jsx(
          kW,
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
}, vq = ({ children: e }) => {
  const { isExpanded: t } = Qc();
  return /* @__PURE__ */ d.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ d.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, S1 = ({
  to: e,
  label: t,
  icon: n,
  pathname: r,
  Link: o,
  isBottomNavLink: a
}) => {
  const [s, i] = X(!1), c = q(null), { isExpanded: l } = Qc();
  return J(() => {
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
          /* @__PURE__ */ d.jsx(Sr, { children: /* @__PURE__ */ d.jsx("p", { children: t }) })
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
          /* @__PURE__ */ d.jsx(Sr, { children: /* @__PURE__ */ d.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, Vm = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = X(!1), c = q(null);
  return J(() => {
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
          /* @__PURE__ */ d.jsx(Sr, { children: /* @__PURE__ */ d.jsx("p", { children: o }) })
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
          /* @__PURE__ */ d.jsx(Sr, { children: /* @__PURE__ */ d.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, MW = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = X(!1), [i, c] = X(!1), { isExpanded: l } = Qc(), u = q(null), f = () => c((h) => !h), p = e.replaceAll(" ", "_");
  return J(() => {
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
              /* @__PURE__ */ d.jsx(Sr, { children: /* @__PURE__ */ d.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ d.jsx(Np, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(ja, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Vm,
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
              /* @__PURE__ */ d.jsx(Sr, { children: /* @__PURE__ */ d.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ d.jsx(Np, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ d.jsx(ja, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((h) => /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(
      Vm,
      {
        ...h,
        pathname: r,
        isExpanded: l
      }
    ) }, h.to)) })
  ] });
}, cr = Wt({
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
function DW() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = lt(cr);
  return /* @__PURE__ */ d.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ d.jsxs(
        jf,
        {
          value: `${e.limit}`,
          onValueChange: (a) => {
            t(Number(a), 1);
          },
          children: [
            /* @__PURE__ */ d.jsx(Fc, { className: "h-8 w-[70px]", children: /* @__PURE__ */ d.jsx(kf, { placeholder: e.limit }) }),
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
            /* @__PURE__ */ d.jsx(Tr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const N1 = () => {
  const { columns: e } = lt(cr);
  return /* @__PURE__ */ d.jsx(j0, { className: "bg-brand-primary-lighter", children: /* @__PURE__ */ d.jsx(Hc, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ d.jsx(M0, { className: "text-brand-text", children: t.label }, `${t.id}-${n}`)) }) });
}, gq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, ua = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), bq = { limit: 10, page: 1 }, zm = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), yq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], AW = ({ colSpan: e }) => /* @__PURE__ */ d.jsx(Hc, { children: /* @__PURE__ */ d.jsx(If, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), RW = ({
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
      const p = o ? o.some(
        (h) => h.id === u.id
      ) : !1;
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
        children: /* @__PURE__ */ d.jsx(NW, { size: 18 })
      }
    ) : l.id === "multi-select" ? /* @__PURE__ */ d.jsx(
      Yy,
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
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map((l) => /* @__PURE__ */ d.jsx(Hc, { children: t.map((u) => /* @__PURE__ */ d.jsx(If, { children: c(u, l) }, zm())) }, zm())) });
}, E1 = () => {
  const {
    data: e,
    columns: t,
    setSelectItem: n,
    setMultiItemsSelected: r,
    multiItemsSelected: o,
    limitOfMultiSelect: a
  } = lt(cr), [s, i] = X(
    o ? o.length : 0
  );
  return /* @__PURE__ */ d.jsx(k0, { className: "bg-card", children: e.length ? /* @__PURE__ */ d.jsx(
    RW,
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
  ) : /* @__PURE__ */ d.jsx(AW, { colSpan: t.length }) });
}, IW = () => /* @__PURE__ */ d.jsxs(Rf, { children: [
  /* @__PURE__ */ d.jsx(N1, {}),
  /* @__PURE__ */ d.jsx(E1, {})
] }), LW = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), FW = () => /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ d.jsx(LW, {}),
  /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var Wm = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = he(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, P1 = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? Wm(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return Wm(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, BW = function(e, t) {
  t.shouldUseNativeValidation && P1(e, t);
  var n = {};
  for (var r in e) {
    var o = he(t.fields, r), a = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (VW(t.names || Object.keys(e), r)) {
      var s = Object.assign({}, he(n, r));
      Ze(s, "root", a), Ze(n, r, s);
    } else
      Ze(n, r, a);
  }
  return n;
}, VW = function(e, t) {
  return e.some(function(n) {
    return n.startsWith(t + ".");
  });
}, zW = function(e, t) {
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
      n[s] = ry(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, O1 = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && P1({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: BW(zW(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, Ue;
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
})(Ue || (Ue = {}));
var Ju;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ju || (Ju = {}));
const $e = Ue.arrayToEnum([
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
]), vr = (e) => {
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
}, ie = Ue.arrayToEnum([
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
]), WW = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
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
    return JSON.stringify(this.issues, Ue.jsonStringifyReplacer, 2);
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
const Uo = (e, t) => {
  let n;
  switch (e.code) {
    case ie.invalid_type:
      e.received === $e.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ie.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ue.jsonStringifyReplacer)}`;
      break;
    case ie.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ue.joinValues(e.keys, ", ")}`;
      break;
    case ie.invalid_union:
      n = "Invalid input";
      break;
    case ie.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ue.joinValues(e.options)}`;
      break;
    case ie.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ue.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ie.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ie.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ie.invalid_date:
      n = "Invalid date";
      break;
    case ie.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ue.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ie.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ie.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ie.custom:
      n = "Invalid input";
      break;
    case ie.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ie.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ie.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ue.assertNever(e);
  }
  return { message: n };
};
let T1 = Uo;
function UW(e) {
  T1 = e;
}
function Yi() {
  return T1;
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
}, HW = [];
function ge(e, t) {
  const n = Yi(), r = qi({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === Uo ? void 0 : Uo
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
        return ke;
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
        return ke;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), a.value !== "__proto__" && (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const ke = Object.freeze({
  status: "aborted"
}), Oo = (e) => ({ status: "dirty", value: e }), Rt = (e) => ({ status: "valid", value: e }), ed = (e) => e.status === "aborted", td = (e) => e.status === "dirty", qa = (e) => e.status === "valid", Zi = (e) => typeof Promise < "u" && e instanceof Promise;
function Xi(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function j1(e, t, n, r, o) {
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
const Um = (e, t) => {
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
function Ae(e) {
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
    return vr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: vr(t.data),
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
        parsedType: vr(t.data),
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
      parsedType: vr(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Um(o, a);
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
      parsedType: vr(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await (Zi(o) ? o : Promise.resolve(o));
    return Um(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ie.custom,
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
    return Or.create(this, this._def);
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
      ...Ae(this._def),
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new as({
      ...Ae(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Te.ZodDefault
    });
  }
  brand() {
    return new np({
      typeName: Te.ZodBranded,
      type: this,
      ...Ae(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ss({
      ...Ae(this._def),
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
const KW = /^c[^\s-]{8,}$/i, GW = /^[0-9a-z]+$/, YW = /^[0-9A-HJKMNP-TV-Z]{26}$/, qW = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, ZW = /^[a-z0-9_-]{21}$/i, XW = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, QW = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, JW = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Hl;
const eU = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, tU = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, nU = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, k1 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", rU = new RegExp(`^${k1}$`);
function M1(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function oU(e) {
  return new RegExp(`^${M1(e)}$`);
}
function D1(e) {
  let t = `${k1}T${M1(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function aU(e, t) {
  return !!((t === "v4" || !t) && eU.test(e) || (t === "v6" || !t) && tU.test(e));
}
class fn extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== $e.string) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.string,
        received: a.parsedType
      }), ke;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ge(o, {
          code: ie.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ge(o, {
          code: ie.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        QW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        Hl || (Hl = new RegExp(JW, "u")), Hl.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        qW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "nanoid")
        ZW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "nanoid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        KW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        GW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        YW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ulid",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ge(o, {
            validation: "url",
            code: ie.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "regex",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? D1(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "date" ? rU.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "date",
          message: a.message
        }), r.dirty()) : a.kind === "time" ? oU(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ie.invalid_string,
          validation: "time",
          message: a.message
        }), r.dirty()) : a.kind === "duration" ? XW.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "duration",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? aU(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : a.kind === "base64" ? nU.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "base64",
          code: ie.invalid_string,
          message: a.message
        }), r.dirty()) : Ue.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: ie.invalid_string,
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
    ...Ae(e)
  });
};
function sU(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class Nr extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== $e.number) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.number,
        received: a.parsedType
      }), ke;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "int" ? Ue.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? sU(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_finite,
        message: a.message
      }), o.dirty()) : Ue.assertNever(a);
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
    return new Nr({
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
    return new Nr({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ue.isInteger(t.value));
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
Nr.create = (e) => new Nr({
  checks: [],
  typeName: Te.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class Er extends Fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== $e.bigint) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.bigint,
        received: a.parsedType
      }), ke;
    }
    let r;
    const o = new Tt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ie.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : Ue.assertNever(a);
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
Er.create = (e) => {
  var t;
  return new Er({
    checks: [],
    typeName: Te.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ae(e)
  });
};
class Za extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== $e.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.boolean,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Za.create = (e) => new Za({
  typeName: Te.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ae(e)
});
class ro extends Fe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== $e.date) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_type,
        expected: $e.date,
        received: a.parsedType
      }), ke;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ie.invalid_date
      }), ke;
    }
    const r = new Tt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ie.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ie.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : Ue.assertNever(a);
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
  ...Ae(e)
});
class Qi extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.symbol,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Qi.create = (e) => new Qi({
  typeName: Te.ZodSymbol,
  ...Ae(e)
});
class Xa extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.undefined,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Xa.create = (e) => new Xa({
  typeName: Te.ZodUndefined,
  ...Ae(e)
});
class Qa extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.null,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Qa.create = (e) => new Qa({
  typeName: Te.ZodNull,
  ...Ae(e)
});
class Ho extends Fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Rt(t.data);
  }
}
Ho.create = (e) => new Ho({
  typeName: Te.ZodAny,
  ...Ae(e)
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
  ...Ae(e)
});
class ar extends Fe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ie.invalid_type,
      expected: $e.never,
      received: n.parsedType
    }), ke;
  }
}
ar.create = (e) => new ar({
  typeName: Te.ZodNever,
  ...Ae(e)
});
class Ji extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.void,
        received: r.parsedType
      }), ke;
    }
    return Rt(t.data);
  }
}
Ji.create = (e) => new Ji({
  typeName: Te.ZodVoid,
  ...Ae(e)
});
class hn extends Fe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== $e.array)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.array,
        received: n.parsedType
      }), ke;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ge(n, {
        code: s ? ie.too_big : ie.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ge(n, {
      code: ie.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ge(n, {
      code: ie.too_big,
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
  ...Ae(t)
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
    }) : e instanceof An ? An.create(Eo(e.unwrap())) : e instanceof Or ? Or.create(Eo(e.unwrap())) : e instanceof Bn ? Bn.create(e.items.map((t) => Eo(t))) : e;
}
class pt extends Fe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ue.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== $e.object) {
      const l = this._getOrReturnCtx(t);
      return ge(l, {
        code: ie.invalid_type,
        expected: $e.object,
        received: l.parsedType
      }), ke;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof ar && this._def.unknownKeys === "strip"))
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
    if (this._def.catchall instanceof ar) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (ge(o, {
          code: ie.unrecognized_keys,
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
    return Ue.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
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
    return Ue.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new pt({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ue.objectKeys(this.shape).forEach((r) => {
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
    return A1(Ue.objectKeys(this.shape));
  }
}
pt.create = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strip",
  catchall: ar.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
pt.strictCreate = (e, t) => new pt({
  shape: () => e,
  unknownKeys: "strict",
  catchall: ar.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
});
pt.lazycreate = (e, t) => new pt({
  shape: e,
  unknownKeys: "strip",
  catchall: ar.create(),
  typeName: Te.ZodObject,
  ...Ae(t)
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
      return ge(n, {
        code: ie.invalid_union,
        unionErrors: s
      }), ke;
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
      return ge(n, {
        code: ie.invalid_union,
        unionErrors: i
      }), ke;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ja.create = (e, t) => new Ja({
  options: e,
  typeName: Te.ZodUnion,
  ...Ae(t)
});
const Xn = (e) => e instanceof ns ? Xn(e.schema) : e instanceof _n ? Xn(e.innerType()) : e instanceof rs ? [e.value] : e instanceof Pr ? e.options : e instanceof os ? Ue.objectValues(e.enum) : e instanceof as ? Xn(e._def.innerType) : e instanceof Xa ? [void 0] : e instanceof Qa ? [null] : e instanceof An ? [void 0, ...Xn(e.unwrap())] : e instanceof Or ? [null, ...Xn(e.unwrap())] : e instanceof np || e instanceof is ? Xn(e.unwrap()) : e instanceof ss ? Xn(e._def.innerType) : [];
class Jc extends Fe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.object)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.object,
        received: n.parsedType
      }), ke;
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
      code: ie.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), ke);
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
      const s = Xn(a.shape[t]);
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
      ...Ae(r)
    });
  }
}
function nd(e, t) {
  const n = vr(e), r = vr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === $e.object && r === $e.object) {
    const o = Ue.objectKeys(t), a = Ue.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = nd(e[i], t[i]);
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
      const s = e[a], i = t[a], c = nd(s, i);
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
      if (ed(a) || ed(s))
        return ke;
      const i = nd(a.value, s.value);
      return i.valid ? ((td(a) || td(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
        code: ie.invalid_intersection_types
      }), ke);
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
  ...Ae(n)
});
class Bn extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.array)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.array,
        received: r.parsedType
      }), ke;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ie.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ke;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ie.too_big,
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
    ...Ae(t)
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
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.object,
        received: r.parsedType
      }), ke;
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
      ...Ae(r)
    }) : new ts({
      keyType: fn.create(),
      valueType: t,
      typeName: Te.ZodRecord,
      ...Ae(n)
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
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.map,
        received: r.parsedType
      }), ke;
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
            return ke;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return ke;
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
  ...Ae(n)
});
class oo extends Fe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== $e.set)
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.set,
        received: r.parsedType
      }), ke;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ge(r, {
      code: ie.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ge(r, {
      code: ie.too_big,
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
          return ke;
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
  ...Ae(t)
});
class Do extends Fe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.function)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.function,
        received: n.parsedType
      }), ke;
    function r(i, c) {
      return qi({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Yi(),
          Uo
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_arguments,
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
          Uo
        ].filter((l) => !!l),
        issueData: {
          code: ie.invalid_return_type,
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
      ...Ae(r)
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
  ...Ae(t)
});
class rs extends Fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ie.invalid_literal,
        expected: this._def.value
      }), ke;
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
  ...Ae(t)
});
function A1(e, t) {
  return new Pr({
    values: e,
    typeName: Te.ZodEnum,
    ...Ae(t)
  });
}
class Pr extends Fe {
  constructor() {
    super(...arguments), Sa.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: Ue.joinValues(r),
        received: n.parsedType,
        code: ie.invalid_type
      }), ke;
    }
    if (Xi(this, Sa) || j1(this, Sa, new Set(this._def.values)), !Xi(this, Sa).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ie.invalid_enum_value,
        options: r
      }), ke;
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
    return Pr.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return Pr.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Sa = /* @__PURE__ */ new WeakMap();
Pr.create = A1;
class os extends Fe {
  constructor() {
    super(...arguments), Na.set(this, void 0);
  }
  _parse(t) {
    const n = Ue.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== $e.string && r.parsedType !== $e.number) {
      const o = Ue.objectValues(n);
      return ge(r, {
        expected: Ue.joinValues(o),
        received: r.parsedType,
        code: ie.invalid_type
      }), ke;
    }
    if (Xi(this, Na) || j1(this, Na, new Set(Ue.getValidEnumValues(this._def.values))), !Xi(this, Na).has(t.data)) {
      const o = Ue.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ie.invalid_enum_value,
        options: o
      }), ke;
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
  ...Ae(t)
});
class Ko extends Fe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== $e.promise && n.common.async === !1)
      return ge(n, {
        code: ie.invalid_type,
        expected: $e.promise,
        received: n.parsedType
      }), ke;
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
  ...Ae(t)
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
        ge(r, s), s.fatal ? n.abort() : n.dirty();
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
            return ke;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? ke : c.status === "dirty" || n.value === "dirty" ? Oo(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return ke;
        const i = this._def.schema._parseSync({
          data: s,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? ke : i.status === "dirty" || n.value === "dirty" ? Oo(i.value) : i;
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
        return i.status === "aborted" ? ke : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? ke : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
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
    Ue.assertNever(o);
  }
}
_n.create = (e, t, n) => new _n({
  schema: e,
  typeName: Te.ZodEffects,
  effect: t,
  ...Ae(n)
});
_n.createWithPreprocess = (e, t, n) => new _n({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Te.ZodEffects,
  ...Ae(n)
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
  ...Ae(t)
});
class Or extends Fe {
  _parse(t) {
    return this._getType(t) === $e.null ? Rt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Or.create = (e, t) => new Or({
  innerType: e,
  typeName: Te.ZodNullable,
  ...Ae(t)
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
  ...Ae(t)
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
  ...Ae(t)
});
class tc extends Fe {
  _parse(t) {
    if (this._getType(t) !== $e.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ie.invalid_type,
        expected: $e.nan,
        received: r.parsedType
      }), ke;
    }
    return { status: "valid", value: t.data };
  }
}
tc.create = (e) => new tc({
  typeName: Te.ZodNaN,
  ...Ae(e)
});
const iU = Symbol("zod_brand");
class np extends Fe {
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
        return a.status === "aborted" ? ke : a.status === "dirty" ? (n.dirty(), Oo(a.value)) : this._def.out._parseAsync({
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
      return o.status === "aborted" ? ke : o.status === "dirty" ? (n.dirty(), {
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
  ...Ae(t)
});
function R1(e, t = {}, n) {
  return e ? Ho.create().superRefine((r, o) => {
    var a, s;
    if (!e(r)) {
      const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
      o.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : Ho.create();
}
const cU = {
  object: pt.lazycreate
};
var Te;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Te || (Te = {}));
const lU = (e, t = {
  message: `Input not instance of ${e.name}`
}) => R1((n) => n instanceof e, t), I1 = fn.create, L1 = Nr.create, uU = tc.create, dU = Er.create, F1 = Za.create, fU = ro.create, pU = Qi.create, hU = Xa.create, mU = Qa.create, vU = Ho.create, gU = qr.create, bU = ar.create, yU = Ji.create, xU = hn.create, wU = pt.create, $U = pt.strictCreate, _U = Ja.create, CU = Jc.create, SU = es.create, NU = Bn.create, EU = ts.create, PU = ec.create, OU = oo.create, TU = Do.create, jU = ns.create, kU = rs.create, MU = Pr.create, DU = os.create, AU = Ko.create, Hm = _n.create, RU = An.create, IU = Or.create, LU = _n.createWithPreprocess, FU = Rs.create, BU = () => I1().optional(), VU = () => L1().optional(), zU = () => F1().optional(), WU = {
  string: (e) => fn.create({ ...e, coerce: !0 }),
  number: (e) => Nr.create({ ...e, coerce: !0 }),
  boolean: (e) => Za.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => Er.create({ ...e, coerce: !0 }),
  date: (e) => ro.create({ ...e, coerce: !0 })
}, UU = ke;
var nc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Uo,
  setErrorMap: UW,
  getErrorMap: Yi,
  makeIssue: qi,
  EMPTY_PATH: HW,
  addIssueToContext: ge,
  ParseStatus: Tt,
  INVALID: ke,
  DIRTY: Oo,
  OK: Rt,
  isAborted: ed,
  isDirty: td,
  isValid: qa,
  isAsync: Zi,
  get util() {
    return Ue;
  },
  get objectUtil() {
    return Ju;
  },
  ZodParsedType: $e,
  getParsedType: vr,
  ZodType: Fe,
  datetimeRegex: D1,
  ZodString: fn,
  ZodNumber: Nr,
  ZodBigInt: Er,
  ZodBoolean: Za,
  ZodDate: ro,
  ZodSymbol: Qi,
  ZodUndefined: Xa,
  ZodNull: Qa,
  ZodAny: Ho,
  ZodUnknown: qr,
  ZodNever: ar,
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
  ZodEnum: Pr,
  ZodNativeEnum: os,
  ZodPromise: Ko,
  ZodEffects: _n,
  ZodTransformer: _n,
  ZodOptional: An,
  ZodNullable: Or,
  ZodDefault: as,
  ZodCatch: ss,
  ZodNaN: tc,
  BRAND: iU,
  ZodBranded: np,
  ZodPipeline: Rs,
  ZodReadonly: is,
  custom: R1,
  Schema: Fe,
  ZodSchema: Fe,
  late: cU,
  get ZodFirstPartyTypeKind() {
    return Te;
  },
  coerce: WU,
  any: vU,
  array: xU,
  bigint: dU,
  boolean: F1,
  date: fU,
  discriminatedUnion: CU,
  effect: Hm,
  enum: MU,
  function: TU,
  instanceof: lU,
  intersection: SU,
  lazy: jU,
  literal: kU,
  map: PU,
  nan: uU,
  nativeEnum: DU,
  never: bU,
  null: mU,
  nullable: IU,
  number: L1,
  object: wU,
  oboolean: zU,
  onumber: VU,
  optional: RU,
  ostring: BU,
  pipeline: FU,
  preprocess: LU,
  promise: AU,
  record: EU,
  set: OU,
  strictObject: $U,
  string: I1,
  symbol: pU,
  transformer: Hm,
  tuple: NU,
  undefined: hU,
  union: _U,
  unknown: gU,
  void: yU,
  NEVER: UU,
  ZodIssueCode: ie,
  quotelessJson: WW,
  ZodError: qt
});
const HU = () => {
  const { showFilters: e, setShowFilters: t } = lt(cr);
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ d.jsx(y1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, KU = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = lt(cr), [l, u] = X(null), f = q(null), p = (h) => {
    c(h);
  };
  return J(() => {
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
  }, []), /* @__PURE__ */ d.jsxs(nr, { children: [
    /* @__PURE__ */ d.jsx(rr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
      Ve,
      {
        size: "sm",
        type: "button",
        ref: f,
        variant: "outline",
        className: "py-5 border-dashed border-muted-foreground",
        children: [
          n || /* @__PURE__ */ d.jsx(x1, { size: 16, className: "mr-2" }),
          r,
          i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            /* @__PURE__ */ d.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
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
    /* @__PURE__ */ d.jsx(Ln, { className: "p-0 combox-checkbox-content", align: "start", children: /* @__PURE__ */ d.jsxs(or, { children: [
      /* @__PURE__ */ d.jsx(_r, { placeholder: r }),
      /* @__PURE__ */ d.jsxs(la, { children: [
        /* @__PURE__ */ d.jsx(Cr, { children: "Sin Resultados" }),
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
                  className: k(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    h.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ d.jsx(rn, { className: k("h-4 w-4") })
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
}, GU = ({ id: e, form: t, label: n, icon: r, queryText: o }) => {
  const { onSubmitTable: a, pagination: { page: s, limit: i }, isFormatedUpperQueries: c } = lt(cr), l = () => {
    var f;
    const u = [];
    (f = Object.entries(t == null ? void 0 : t.getValues())) == null || f.forEach((p) => {
      p[1] && u.push({
        field: c ? p[0] : ua(p[0]),
        text: p[1]
      });
    }), a({ queries: u, filters: [], limit: i, page: s });
  };
  return /* @__PURE__ */ d.jsxs(nr, { children: [
    /* @__PURE__ */ d.jsx(rr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
      /* @__PURE__ */ d.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
      n,
      o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
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
      /* @__PURE__ */ d.jsxs(Hn, { htmlFor: e, children: [
        "Buscar ",
        n
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "w-full flex justify-between items-end gap-x-3", children: [
        /* @__PURE__ */ d.jsx(
          Ef,
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
}, YU = ({ form: e, onSubmit: t }) => {
  const {
    queries: n,
    filters: r,
    showFilters: o,
    resetFilters: a,
    onSubmitTable: s,
    pagination: { page: i, limit: c },
    isFormatedUpperQueries: l
  } = lt(cr), u = e.watch(n.map((p) => p.id)), f = () => {
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
          GU,
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
      /* @__PURE__ */ d.jsx(HU, {}),
      o && r && r.map((p) => /* @__PURE__ */ d.jsx(
        KU,
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
}, qU = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i,
    isFormatedUpperQueries: c
  } = lt(cr), l = uy({
    defaultValues: n.reduce((f, p) => (f[p.id] = "", f), {}),
    resolver: O1(
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
  return J(() => i(l), [l]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ d.jsx("div", {}) : /* @__PURE__ */ d.jsx(fy, { ...l, children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ d.jsx(YU, { form: l, onSubmit: u }) : /* @__PURE__ */ d.jsx("div", {}),
    /* @__PURE__ */ d.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "submit",
        onClick: l.handleSubmit(u),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ d.jsx(md, {}) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(_1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, ZU = () => /* @__PURE__ */ d.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), XU = () => /* @__PURE__ */ d.jsxs(Rf, { children: [
  /* @__PURE__ */ d.jsx(N1, {}),
  /* @__PURE__ */ d.jsx(E1, {})
] }), QU = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function xq(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [f, p] = X(e == null ? void 0 : e.loading), [h, m] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? QU
  ), [b, y] = X(
    (e == null ? void 0 : e.columns) || []
  ), x = ve(
    (P) => e.onSubmitTable({ ...P }),
    [e]
  ), _ = ve(
    (P) => {
      var U;
      g(P);
      const R = h.getValues(), O = [];
      (U = Object.entries(R)) == null || U.forEach((Z) => {
        Z[1] && O.push({
          field: e.isFormatedUpperQueries ? Z[0] : ua(Z[0]),
          text: Z[1]
        });
      });
      const V = r.map((Z) => ({
        id: Z.id,
        label: Z.label,
        options: Z.options.filter((oe) => oe.selected).map((oe) => oe.value)
      })).filter((Z) => Z.options.length > 0);
      x({
        filters: V,
        queries: O,
        limit: P.limit,
        page: P.page
      });
    },
    [r, x, h]
  ), w = ve(() => {
    _({ ...v, page: v.page + 1 });
  }, [v, _]), N = ve(() => {
    v.page > 1 && _({ ...v, page: v.page - 1 });
  }, [v, _]), S = ve(() => {
    g({ ...v, page: 1 });
  }, []), D = () => r.map((P) => ({
    id: P.id,
    label: P.label,
    options: P.options.filter((R) => R.selected).map((R) => R.value)
  })).filter((P) => P.options.length > 0), E = (P) => {
    const R = r.find((O) => O.id === P);
    return R ? R.options.filter((V) => V.selected).map((V) => V.value) : [];
  }, W = (P, R, O) => {
    const V = r.map((U) => U.id === P ? {
      ...U,
      options: U.options.map((Z) => Z.id === R ? { ...Z, selected: O } : Z)
    } : U);
    o(V);
  }, G = () => r, z = (P) => {
    const R = r.map((O) => O.id === P ? {
      ...O,
      options: O.options.map((V) => ({
        ...V,
        selected: !1
      }))
    } : O);
    o(R);
  }, K = (P, R) => _({
    ...v,
    limit: P,
    page: R || (v == null ? void 0 : v.page)
  }), L = () => {
    const P = r.map((R) => ({
      ...R,
      options: R.options.map((O) => ({ ...O, selected: !1 }))
    }));
    o(P);
  };
  return J(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), J(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), J(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), J(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), J(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), J(() => {
    const P = b.filter((R) => R.isQuery).map((R) => ({
      id: R.id,
      label: R.label
    }));
    s(P);
  }, [b]), J(() => {
    const P = (O) => (O == null ? void 0 : O.filters) && (O == null ? void 0 : O.filters.length), R = b.filter(P).map((O) => {
      const V = O.filters.map((Z) => ({
        ...Z,
        selected: !1
      }));
      return {
        ...O,
        id: O.id,
        options: V
      };
    });
    o(R);
  }, [b]), J(() => {
    e != null && e.filters && (e == null || e.filters.forEach((P) => {
      P != null && P.filters && b.forEach((R) => {
        P.id === R.id && o((O) => O.some((U) => U.id === P.id) ? O : [
          ...O,
          {
            id: R.id,
            label: R.label,
            options: P.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), J(() => {
    g((P) => {
      var R, O;
      return {
        ...P,
        hasNextPage: (R = e == null ? void 0 : e.pagination) == null ? void 0 : R.hasNextPage,
        hasPrevPage: (O = e == null ? void 0 : e.pagination) == null ? void 0 : O.hasPrevPage
      };
    });
  }, [e.pagination.hasNextPage, e.pagination.hasPrevPage]), /* @__PURE__ */ d.jsx(
    cr.Provider,
    {
      value: {
        data: t,
        columns: b,
        pagination: v,
        nextPage: w,
        prevPage: N,
        resetPage: S,
        searchForm: h,
        isFormatedUpperQueries: e.isFormatedUpperQueries,
        updateLimit: K,
        showFilters: i,
        resetFilters: L,
        getGlobalFilters: G,
        selectOptionFilter: W,
        resetOptionsByFilter: z,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: x,
        getFilterOptionsSelectedById: E,
        getFiltersWithOptionsSelected: D,
        setSelectItem: e.setSelectItem,
        setShowFilters: (P) => c(P),
        setSearchForm: (P) => m(P)
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ d.jsx(qU, { onSubmitTable: x, loading: f }),
        /* @__PURE__ */ d.jsxs("div", { className: "rounded-md border overflow-clip", children: [
          f && /* @__PURE__ */ d.jsx(FW, {}),
          !f && l && /* @__PURE__ */ d.jsx(ZU, {}),
          !f && !l && !t && /* @__PURE__ */ d.jsx(XU, {}),
          !f && !l && t && /* @__PURE__ */ d.jsx(IW, {})
        ] }),
        !f && !l && t && /* @__PURE__ */ d.jsx(DW, {})
      ] })
    }
  );
}
const wq = ({
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
}) => p ? /* @__PURE__ */ d.jsxs("div", { className: k("w-full", c), children: [
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
      return /* @__PURE__ */ d.jsxs(Ar, { className: k("w-full", c), children: [
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
          jf,
          {
            onValueChange: (g) => g && h.onChange(g),
            defaultValue: h.value,
            disabled: f,
            value: h == null ? void 0 : h.value,
            children: [
              /* @__PURE__ */ d.jsx(Os, { children: /* @__PURE__ */ d.jsx(Fc, { disabled: f, tabIndex: i, className: k("w-full [&_>_span]:truncate", l), children: /* @__PURE__ */ d.jsx(kf, { placeholder: r }) }) }),
              /* @__PURE__ */ d.jsx(Bc, { children: /* @__PURE__ */ d.jsxs(XI, { className: k("overflow-auto", u), children: [
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
function B1(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function rd(e) {
  var t = q(e), n = q(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var cs = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, Pa = function(e) {
  return "touches" in e;
}, od = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Km = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = Pa(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: cs((o.pageX - (r.left + od(e).pageXOffset)) / r.width), top: cs((o.pageY - (r.top + od(e).pageYOffset)) / r.height) };
}, Gm = function(e) {
  !Pa(e) && e.preventDefault();
}, V1 = I.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = B1(e, ["onMove", "onKey"]), o = q(null), a = rd(t), s = rd(n), i = q(null), c = q(!1), l = Zt(function() {
    var h = function(g) {
      Gm(g), (Pa(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Km(o.current, g, i.current)) : v(!1);
    }, m = function() {
      return v(!1);
    };
    function v(g) {
      var b = c.current, y = od(o.current), x = g ? y.addEventListener : y.removeEventListener;
      x(b ? "touchmove" : "mousemove", h), x(b ? "touchend" : "mouseup", m);
    }
    return [function(g) {
      var b = g.nativeEvent, y = o.current;
      if (y && (Gm(b), !function(_, w) {
        return w && !Pa(_);
      }(b, c.current) && y)) {
        if (Pa(b)) {
          c.current = !0;
          var x = b.changedTouches || [];
          x.length && (i.current = x[0].identifier);
        }
        y.focus(), a(Km(y, b, i.current)), v(!0);
      }
    }, function(g) {
      var b = g.which || g.keyCode;
      b < 37 || b > 40 || (g.preventDefault(), s({ left: b === 39 ? 0.05 : b === 37 ? -0.05 : 0, top: b === 40 ? 0.05 : b === 38 ? -0.05 : 0 }));
    }, v];
  }, [s, a]), u = l[0], f = l[1], p = l[2];
  return J(function() {
    return p;
  }, [p]), I.createElement("div", el({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: f, tabIndex: 0, role: "slider" }));
}), rp = function(e) {
  return e.filter(Boolean).join(" ");
}, z1 = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = rp(["react-colorful__pointer", e.className]);
  return I.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, I.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, Et = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, JU = function(e) {
  return oH(ad(e));
}, ad = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? Et(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? Et(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, eH = function(e) {
  return rH(nH(e));
}, tH = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: Et(e.h), s: Et(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: Et(o / 2), a: Et(r, 2) };
}, sd = function(e) {
  var t = tH(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, nH = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: Et(255 * [r, i, s, s, c, r][l]), g: Et(255 * [c, r, r, i, s, s][l]), b: Et(255 * [s, s, c, r, r, i][l]), a: Et(o, 2) };
}, ni = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, rH = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? ni(Et(255 * o)) : "";
  return "#" + ni(t) + ni(n) + ni(r) + a;
}, oH = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: Et(60 * (i < 0 ? i + 6 : i)), s: Et(a ? s / a * 100 : 0), v: Et(a / 255 * 100), a: o };
}, aH = I.memo(function(e) {
  var t = e.hue, n = e.onChange, r = rp(["react-colorful__hue", e.className]);
  return I.createElement("div", { className: r }, I.createElement(V1, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: cs(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": Et(t), "aria-valuemax": "360", "aria-valuemin": "0" }, I.createElement(z1, { className: "react-colorful__hue-pointer", left: t / 360, color: sd({ h: t, s: 100, v: 100, a: 1 }) })));
}), sH = I.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: sd({ h: t.h, s: 100, v: 100, a: 1 }) };
  return I.createElement("div", { className: "react-colorful__saturation", style: r }, I.createElement(V1, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: cs(t.s + 100 * o.left, 0, 100), v: cs(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + Et(t.s) + "%, Brightness " + Et(t.v) + "%" }, I.createElement(z1, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: sd(t) })));
}), W1 = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, iH = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || W1(ad(e), ad(t));
};
function cH(e, t, n) {
  var r = rd(n), o = X(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = q({ color: t, hsva: a });
  J(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), J(function() {
    var l;
    W1(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = ve(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var lH = typeof window < "u" ? fs : J, uH = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Ym = /* @__PURE__ */ new Map(), dH = function(e) {
  lH(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Ym.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Ym.set(t, n);
      var r = uH();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, fH = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = B1(e, ["className", "colorModel", "color", "onChange"]), i = q(null);
  dH(i);
  var c = cH(n, o, a), l = c[0], u = c[1], f = rp(["react-colorful", t]);
  return I.createElement("div", el({}, s, { ref: i, className: f }), I.createElement(sH, { hsva: l, onChange: u }), I.createElement(aH, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, pH = { defaultColor: "000", toHsva: JU, fromHsva: function(e) {
  return eH({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: iH }, hH = function(e) {
  return I.createElement(fH, el({}, e, { colorModel: pH }));
};
const $q = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ d.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ d.jsx(hH, { color: e, onChange: t }),
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
function mH(e, t, n) {
  var r = X([]), o = r[0], a = r[1], s = q([]), i = ve(function(f, p) {
    var h = e(f, p), m = h[0], v = h[1];
    return a(function(g) {
      return [].concat(v.reverse(), g);
    }), m;
  }, [e]), c = fd(i, n), l = c[0], u = c[1];
  return J(function() {
    var f = o.pop();
    if (f) {
      var p = t(f, u);
      p && s.current.push(p), a([].concat(o));
    }
  }, [o, t]), J(function() {
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
function vH(e, t) {
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
  var qm = /* @__PURE__ */ String.fromCharCode(Dt);
  tl[Dt] = [/* @__PURE__ */ qm.toLowerCase(), /* @__PURE__ */ qm.toUpperCase()];
}
for (Dt = 96; Dt < 106; Dt += 1)
  tl[Dt] = /* @__PURE__ */ String.fromCharCode(Dt - 48);
function gH(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = tl[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var bH = {
  getKey: gH
};
function ri() {
}
function U1(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function yH(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var xH = ["refs"], Kl = [], wH = ["autoFocus", "length", "validate", "format", "formatAriaLabel", "debug"], $H = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], _H = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], CH = {
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
function SH(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: NH(e.validate),
    fallback: null
  };
}
function H1(e) {
  return Math.max(0, e - 1);
}
function id(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function NH(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Zm(e, t, n) {
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
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = id(o + e.focusIdx - 1, e.codeLength), s = U1(0, o).flatMap(function(i) {
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
var EH = function(t, n) {
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
          var r = H1(t.focusIdx);
          return [un({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = id(t.focusIdx, t.codeLength);
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
          var a = id(t.focusIdx, t.codeLength);
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
        return Zm(s, l, f);
      return [s, i];
    }
    case "handle-paste":
      return Zm(t, n.idx, n.val);
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
function PH(e) {
  var t = e.refs, n = vH(e, xH);
  return ve(function(r) {
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
          var s = H1(r.idx);
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
var OH = /* @__PURE__ */ F(function(e, t) {
  var n = un({}, CH, e), r = n.autoFocus, o = n.formatAriaLabel, a = n.length, s = yH([].concat(wH, $H), n), i = q([]), c = PH(un({
    refs: i
  }, n)), l = mH(EH, c, SH(n))[1];
  cv(t, function() {
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
      var y = bH.getKey(b.nativeEvent);
      !_H.includes(y) && !b.ctrlKey && !b.altKey && !b.metaKey && b.nativeEvent.target instanceof HTMLInputElement && (b.preventDefault(), l({
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
  return I.createElement(I.Fragment, null, U1(0, a).map(function(g) {
    return I.createElement("input", Object.assign({
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
const _q = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = I.useState(!1);
  return /* @__PURE__ */ d.jsx("div", { className: k("pin-field-container", s), children: /* @__PURE__ */ d.jsx(
    OH,
    {
      className: k("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var K1 = {}, op = {};
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
})(op);
var G1 = {}, Jn = {};
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.DEFAULT_DATA_URL_KEY = Jn.INIT_MAX_NUMBER = Jn.DEFAULT_NULL_INDEX = void 0;
Jn.DEFAULT_NULL_INDEX = -1;
Jn.INIT_MAX_NUMBER = 1e3;
Jn.DEFAULT_DATA_URL_KEY = "dataURL";
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
  var r = Jn, o = op;
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
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            b = 0, w.label = 2;
          case 2:
            return b < s.length ? (y = s[b].file, y ? !v && !e.isImageValid(y.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, y.name) ? e.isMaxFileSizeValid(y.size, f) ? p ? [4, o.getImage(y)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if (x = w.sent(), _ = e.isResolutionValid(x, p, h, m), !_)
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
})(G1);
var cd = mt && mt.__assign || function() {
  return cd = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, cd.apply(this, arguments);
}, TH = mt && mt.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), jH = mt && mt.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), kH = mt && mt.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && TH(t, e, n);
  return jH(t, e), t;
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
Object.defineProperty(K1, "__esModule", { value: !0 });
var sn = kH(I), Zl = op, MH = G1, pr = Jn, DH = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? pr.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, f = u === void 0 ? pr.INIT_MAX_NUMBER : u, p = e.acceptType, h = e.maxFileSize, m = e.resolutionWidth, v = e.resolutionHeight, g = e.resolutionType, b = e.inputProps, y = b === void 0 ? {} : b, x = e.allowNonImageType, _ = x === void 0 ? !1 : x, w = n || [], N = sn.useRef(null), S = sn.useState(pr.DEFAULT_NULL_INDEX), D = S[0], E = S[1], W = sn.useState(null), G = W[0], z = W[1], K = sn.useState(!1), L = K[0], P = K[1], R = sn.useCallback(function() {
    return Zl.openFileDialog(N);
  }, [
    N
  ]), O = sn.useCallback(function() {
    E(pr.DEFAULT_NULL_INDEX), R();
  }, [R]), V = sn.useCallback(function() {
    r == null || r([]);
  }, [r]), U = function(ae) {
    var fe = ql(w);
    Array.isArray(ae) ? ae.forEach(function(A) {
      fe.splice(A, 1);
    }) : fe.splice(ae, 1), r == null || r(fe);
  }, Z = function(ae) {
    E(ae), R();
  }, oe = function(ae) {
    return Gl(void 0, void 0, void 0, function() {
      var fe;
      return Yl(this, function(A) {
        switch (A.label) {
          case 0:
            return [4, MH.getErrorValidation({
              fileList: ae,
              maxFileSize: h,
              maxNumber: f,
              acceptType: p,
              keyUpdate: D,
              resolutionType: g,
              resolutionWidth: m,
              resolutionHeight: v,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return fe = A.sent(), fe ? (z(fe), o == null || o(fe, ae), [2, !1]) : (G && z(null), [2, !0]);
        }
      });
    });
  }, H = function(ae) {
    return Gl(void 0, void 0, void 0, function() {
      var fe, A, ne, ye, Pe, Ie;
      return Yl(this, function(Oe) {
        switch (Oe.label) {
          case 0:
            return ae ? [4, Zl.getListFiles(ae, i)] : [
              2
              /*return*/
            ];
          case 1:
            return fe = Oe.sent(), fe.length ? [4, oe(fe)] : [
              2
              /*return*/
            ];
          case 2:
            if (A = Oe.sent(), !A)
              return [
                2
                /*return*/
              ];
            if (ye = [], D > pr.DEFAULT_NULL_INDEX)
              Pe = fe[0], ne = ql(w), ne[D] = Pe, ye.push(D);
            else if (l)
              for (ne = ql(w, fe), Ie = w.length; Ie < ne.length; Ie += 1)
                ye.push(Ie);
            else
              ne = [fe[0]], ye.push(0);
            return r == null || r(ne, ye), [
              2
              /*return*/
            ];
        }
      });
    });
  }, le = function(ae) {
    return Gl(void 0, void 0, void 0, function() {
      return Yl(this, function(fe) {
        switch (fe.label) {
          case 0:
            return [4, H(ae.target.files)];
          case 1:
            return fe.sent(), D > pr.DEFAULT_NULL_INDEX && E(pr.DEFAULT_NULL_INDEX), N.current && (N.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, be = sn.useMemo(function() {
    return Zl.getAcceptTypeString(p, _);
  }, [p, _]), pe = function(ae) {
    ae.preventDefault(), ae.stopPropagation();
  }, ee = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.items && ae.dataTransfer.items.length > 0 && P(!0);
  }, re = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), P(!1);
  }, me = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), P(!1), ae.dataTransfer.files && ae.dataTransfer.files.length > 0 && H(ae.dataTransfer.files);
  }, _e = function(ae) {
    ae.preventDefault(), ae.stopPropagation(), ae.dataTransfer.clearData();
  };
  return sn.default.createElement(
    sn.default.Fragment,
    null,
    sn.default.createElement("input", cd({ type: "file", accept: be, ref: N, multiple: l && D === pr.DEFAULT_NULL_INDEX, onChange: le, style: { display: "none" } }, y)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: O,
      onImageRemoveAll: V,
      onImageUpdate: Z,
      onImageRemove: U,
      errors: G,
      dragProps: {
        onDrop: me,
        onDragEnter: ee,
        onDragLeave: re,
        onDragOver: pe,
        onDragStart: _e
      },
      isDragging: L
    })
  );
}, Y1 = K1.default = DH;
const AH = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, q1 = ({
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
      const u = AH(l == null ? void 0 : l.toString(), t.name);
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
const RH = (e) => {
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
        children: /* @__PURE__ */ d.jsx($1, { size: 16 })
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
        children: /* @__PURE__ */ d.jsx(_v, { size: 16 })
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
        children: /* @__PURE__ */ d.jsx(Cv, { size: 16 })
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
}, IH = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    ...e,
    className: k(
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
          className: k("mt-2", t && "text-indigo-600", a && "cursor-not-allowed"),
          onClick: s,
          children: /* @__PURE__ */ d.jsx(vd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ d.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), Z1 = ({ src: e, containerClassName: t, imageClassName: n, zoom: r, fallback: o, download: a, filename: s, ...i }) => {
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
    /* @__PURE__ */ d.jsxs($y, { open: c, onOpenChange: l, children: [
      /* @__PURE__ */ d.jsxs(To, { className: k("relative w-auto h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
        /* @__PURE__ */ d.jsx(
          Gr,
          {
            ...i,
            src: e,
            onClick: () => l(!0),
            className: k("aspect-video w-auto rounded-md object-contain m-auto h-full cursor-zoom-in", n)
          }
        ),
        /* @__PURE__ */ d.jsx(jo, { className: k("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(il, {}) })
      ] }),
      /* @__PURE__ */ d.jsx(Nf, { className: "p-10 bg-transparent border-none shadow-none w-[90vw] h-screen mx-auto sm:max-w-none sm:border-none", style: { background: "transparent !important" }, onClick: () => l(!1), children: /* @__PURE__ */ d.jsxs(To, { className: k("w-full h-full rounded-md"), children: [
        /* @__PURE__ */ d.jsx(Gr, { src: e, className: k("aspect-video rounded-md object-contain m-auto h-full"), style: { width: "-webkit-fill-available" } }),
        /* @__PURE__ */ d.jsx(jo, { className: k("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(il, {}) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsxs(To, { className: k("relative w-full h-[236px] rounded-md bg-muted p-4 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20 transition-colors ease-in-out duration-200", t), children: [
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
        className: k("aspect-video w-auto rounded-md object-contain m-auto h-full", n),
        style: { width: "-webkit-fill-available" }
      }
    ),
    /* @__PURE__ */ d.jsx(jo, { className: k("w-full h-full rounded-md", o == null ? void 0 : o.className), children: (o == null ? void 0 : o.children) || /* @__PURE__ */ d.jsx(il, {}) })
  ] }) });
}, Cq = (e) => {
  const { edit: t = !0, initialPreview: n = null, setUploadImage: r, crossOrigin: o, format: a, label: s, uploadLabel: i, tabIndexs: c, disabled: l, emptyClassName: u, imageContainerClassName: f, zoom: p, compress: h, download: m, onRemove: v, onEdit: g } = e, [b, y] = X(n ? [{ data_url: n, file: null }] : []), x = async (w, N) => {
    var W, G, z, K, L, P, R, O, V, U;
    const S = (W = w[0]) == null ? void 0 : W.file, D = (G = w[0]) == null ? void 0 : G.data_url;
    S || (y([]), r({ original: null, compressed: null })), y(w);
    const E = gi((z = w[0]) == null ? void 0 : z.file.size);
    if (h != null && h.resizer && S) {
      const { data_url: Z, file: oe } = await q1({
        resizer: h == null ? void 0 : h.resizer,
        imageFile: S,
        quality: (a == null ? void 0 : a.quality) || 10,
        maxWidth: (a == null ? void 0 : a.width) || 500,
        maxHeight: (a == null ? void 0 : a.width) || 500,
        compressFormat: (a == null ? void 0 : a.extension) || "png",
        rotation: (a == null ? void 0 : a.rotation) || 0
      }), H = gi(oe.size);
      r({
        original: {
          preview: D,
          file: S,
          size: {
            formated: E,
            bytes: (K = w[0]) == null ? void 0 : K.file.size
          }
        },
        compressed: {
          preview: Z == null ? void 0 : Z.toString(),
          file: oe,
          size: {
            formated: H,
            bytes: oe.size
          }
        }
      });
      return;
    }
    g && (L = w[0]) != null && L.data_url && g({
      data_url: ((P = w[0]) == null ? void 0 : P.data_url) || null,
      file: ((R = w[0]) == null ? void 0 : R.file) || null
    }), r({
      original: {
        preview: (O = w[0]) == null ? void 0 : O.data_url,
        file: (V = w[0]) == null ? void 0 : V.file,
        size: { formated: E, bytes: (U = w[0]) == null ? void 0 : U.file.size }
      },
      compressed: null
    });
  }, _ = (w) => {
    w == null || !b || !b.length || v && v(b[w]);
  };
  return J(() => {
    n && y([{ data_url: n, file: null }]);
  }, [n]), /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full", children: [
    s && /* @__PURE__ */ d.jsx(Hn, { children: s }),
    s && /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsx(
      Y1,
      {
        value: b,
        onChange: x,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: w, onImageUpload: N, onImageUpdate: S, onImageRemove: D, isDragging: E, dragProps: W }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: w.length >= 1 ? /* @__PURE__ */ d.jsx("div", { children: w.map((G, z) => /* @__PURE__ */ d.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          /* @__PURE__ */ d.jsx(
            Z1,
            {
              zoom: p,
              src: G == null ? void 0 : G.data_url,
              crossOrigin: o,
              containerClassName: f
            }
          ),
          /* @__PURE__ */ d.jsx(
            RH,
            {
              edit: t,
              imageIndex: z,
              compress: h,
              disabled: l,
              download: m,
              tabIndexs: c,
              src: G == null ? void 0 : G.data_url,
              onImageRemove: D,
              onImageUpdate: S,
              setLocalImage: y,
              setUploadImage: r,
              handleOnRemove: _
            }
          )
        ] }, z)) }) : /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
          IH,
          {
            dragProps: W,
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
}, LH = (e) => {
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
        children: /* @__PURE__ */ d.jsx($1, { size: 16 })
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
        children: /* @__PURE__ */ d.jsx(_v, { size: 16 })
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
        children: /* @__PURE__ */ d.jsx(Cv, { size: 16 })
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
}, FH = ({ dragProps: e, isDragging: t, emptyClassName: n, tabIndexs: r, uploadLabel: o, disabled: a, onImageUpload: s }) => /* @__PURE__ */ d.jsxs(
  "div",
  {
    ...e,
    className: k(
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
          children: /* @__PURE__ */ d.jsx(vd, { size: 24 })
        }
      ),
      !a && /* @__PURE__ */ d.jsx("span", { className: "font-normal text-sm text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), Sq = (e) => {
  const { edit: t = !0, label: n, setUploadImages: r, format: o, uploadLabel: a, tabIndexs: s, emptyClassName: i, crossOrigin: c, imageContainerClassName: l, zoom: u, compress: f, limit: p, initialPreview: h, disabled: m, download: v, onRemove: g, onEdit: b } = e, [y, x] = X([]);
  J(() => {
    h && h.length && x([...h]);
  }, [h]);
  const _ = async (N, S) => {
    x(N);
    const D = N.map(async (E) => {
      var W, G, z, K;
      if (f != null && f.resizer && (E != null && E.file) && !((W = E == null ? void 0 : E.file) != null && W.compressed)) {
        const { data_url: L, file: P } = await q1({
          imageFile: E == null ? void 0 : E.file,
          resizer: f == null ? void 0 : f.resizer,
          quality: (o == null ? void 0 : o.quality) || 10,
          maxWidth: (o == null ? void 0 : o.width) || 500,
          maxHeight: (o == null ? void 0 : o.width) || 500,
          rotation: (o == null ? void 0 : o.rotation) || 0,
          compressFormat: (o == null ? void 0 : o.extension) || "png"
        }), R = gi(P == null ? void 0 : P.size), O = {
          original: {
            preview: E == null ? void 0 : E.data_url,
            file: E == null ? void 0 : E.file,
            size: {
              formated: (G = E == null ? void 0 : E.file) != null && G.size ? gi((z = E == null ? void 0 : E.file) == null ? void 0 : z.size) : null,
              bytes: ((K = E == null ? void 0 : E.file) == null ? void 0 : K.size) || null
            }
          },
          compressed: {
            preview: L == null ? void 0 : L.toString(),
            file: P,
            size: {
              formated: R,
              bytes: P == null ? void 0 : P.size
            }
          }
        };
        return {
          ...E,
          file: O,
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
    Promise.all(D).then((E) => {
      r(E);
    });
  }, w = (N) => {
    N == null || !y || !y.length || g && g(y[N]);
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    n && /* @__PURE__ */ d.jsx(Hn, { children: n }),
    /* @__PURE__ */ d.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ d.jsx(
      Y1,
      {
        multiple: !0,
        value: y,
        dataURLKey: "data_url",
        onChange: _,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        maxNumber: p,
        children: ({ imageList: N, onImageUpload: S, onImageUpdate: D, onImageRemove: E, isDragging: W, dragProps: G }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: N.length >= 1 ? /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `grid ${p === 1 || !p ? "grid-cols-1" : "grid-cols-2"} grid-flow-row gap-4`,
            children: [
              N.map((z, K) => /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: "imagen-container w-full flex flex-col justify-center items-center relative",
                  children: [
                    /* @__PURE__ */ d.jsx(
                      Z1,
                      {
                        zoom: u,
                        src: z == null ? void 0 : z.data_url,
                        crossOrigin: c,
                        containerClassName: l
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      LH,
                      {
                        edit: t,
                        imageIndex: K,
                        download: v,
                        compress: f,
                        disabled: m,
                        tabIndexs: s,
                        src: z == null ? void 0 : z.data_url,
                        onImageRemove: E,
                        onImageUpdate: D,
                        handleOnRemoveImage: w
                      }
                    )
                  ]
                },
                K
              )),
              y.length < p && /* @__PURE__ */ d.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  ...G,
                  className: k(
                    `w-full h-[237px] ${W ? "border-indigo-600" : "border-muted-foreground"} flex flex-col justify-center items-center border-dashed border-muted-foreground border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`,
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
                      className: `mt-2 ${W && "text-indigo-600"}`,
                      onClick: S,
                      children: /* @__PURE__ */ d.jsx(vd, { size: 24 })
                    }
                  )
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ d.jsx(
          FH,
          {
            dragProps: G,
            emptyClassName: i,
            isDragging: W,
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
function Nq({
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
  return s ? /* @__PURE__ */ d.jsxs("div", { className: k("w-full"), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: n && /* @__PURE__ */ d.jsx(Ot, { className: "h-5 w-full max-w-[90px]" }) }),
    /* @__PURE__ */ d.jsx("div", { className: "relative", children: /* @__PURE__ */ d.jsx(
      Ot,
      {
        className: k("w-full h-9 mt-2")
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
        return /* @__PURE__ */ d.jsxs(Ar, { className: "flex flex-col", children: [
          /* @__PURE__ */ d.jsx(Hn, { children: n }),
          /* @__PURE__ */ d.jsxs(nr, { open: m, onOpenChange: v, children: [
            /* @__PURE__ */ d.jsx(rr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                disabled: o,
                tabIndex: a,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: k("w-min justify-between", !g.value && "text-muted-foreground", `${p}`),
                children: [
                  g.value ? (b = r.find((y) => {
                    var x, _;
                    return ((x = y == null ? void 0 : y.value) == null ? void 0 : x.toUpperCase()) === ((_ = g == null ? void 0 : g.value) == null ? void 0 : _.toUpperCase());
                  })) == null ? void 0 : b.label : f,
                  /* @__PURE__ */ d.jsx(ru, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ln, { className: k("w-[200px] p-0", h), children: /* @__PURE__ */ d.jsxs(or, { children: [
              /* @__PURE__ */ d.jsx(_r, { placeholder: i, className: "h-9" }),
              /* @__PURE__ */ d.jsxs(la, { children: [
                /* @__PURE__ */ d.jsx(Cr, { children: l }),
                /* @__PURE__ */ d.jsx($n, { className: k("overflow-auto", u), children: r.map((y) => /* @__PURE__ */ d.jsxs(
                  Gt,
                  {
                    disabled: y == null ? void 0 : y.disabled,
                    value: y.value,
                    className: k("w-full flex justify-start items-center", (y == null ? void 0 : y.disabled) && "pointer-events-none opacity-50 cursor-default"),
                    onSelect: (x) => {
                      t.setValue(e, x, { shouldDirty: !0 }), v(!1);
                    },
                    children: [
                      (y == null ? void 0 : y.image) && /* @__PURE__ */ d.jsx("img", { src: y.image, alt: y.label, width: 40, className: "mr-2" }),
                      (y == null ? void 0 : y.icon) && y.icon,
                      y.label,
                      /* @__PURE__ */ d.jsx(
                        SW,
                        {
                          className: k(
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
function BH({
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
        var _, w, N;
        return /* @__PURE__ */ d.jsxs(Ar, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = x.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              x.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ d.jsxs(nr, { open: v, onOpenChange: g, children: [
            /* @__PURE__ */ d.jsx(rr, { asChild: !0, disabled: s, children: /* @__PURE__ */ d.jsxs(
              Ve,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: k("w-min justify-between", !y.value && "text-muted-foreground", `${h}`),
                children: [
                  y.value ? (N = r.find((S) => S.value === y.value)) == null ? void 0 : N.label : p,
                  /* @__PURE__ */ d.jsx(ru, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ln, { className: k("w-[200px] p-0", m), children: /* @__PURE__ */ d.jsxs(or, { children: [
              /* @__PURE__ */ d.jsx(_r, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ d.jsxs(m0, { children: [
                /* @__PURE__ */ d.jsx(Cr, { children: f }),
                /* @__PURE__ */ d.jsx($n, { children: r.map((S) => /* @__PURE__ */ d.jsxs(
                  Gt,
                  {
                    value: S.value,
                    onSelect: (D) => {
                      t.setValue(e, D), g(!1);
                    },
                    className: "w-full flex justify-start items-center",
                    children: [
                      (S == null ? void 0 : S.image) && /* @__PURE__ */ d.jsx("img", { src: S.image, alt: S.label, width: 40, className: "mr-2" }),
                      (S == null ? void 0 : S.icon) && S.icon,
                      S.label,
                      /* @__PURE__ */ d.jsx(
                        rn,
                        {
                          className: k(
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
  ) : /* @__PURE__ */ d.jsxs(nr, { open: v, onOpenChange: g, children: [
    /* @__PURE__ */ d.jsx(rr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
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
    /* @__PURE__ */ d.jsx(Ln, { className: "w-full p-0", children: /* @__PURE__ */ d.jsxs(or, { children: [
      /* @__PURE__ */ d.jsx(_r, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ d.jsx(Cr, { children: f }),
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
                className: k(
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
const VH = ({ description: e, icon: t, placeholder: n, label: r, tabIndex: o, options: a, classNameContainer: s, classNamePopover: i, disabled: c }) => {
  const l = q(null), [u, f] = X(null);
  return J(() => {
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
  }, []), /* @__PURE__ */ d.jsxs("div", { className: k("w-full space-y-2", s), children: [
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-start items-end", children: r && /* @__PURE__ */ d.jsxs(Hn, { className: "flex", children: [
      r,
      " "
    ] }) }),
    e && /* @__PURE__ */ d.jsx("p", { className: "text-xs", children: e }),
    /* @__PURE__ */ d.jsxs(nr, { children: [
      /* @__PURE__ */ d.jsx(rr, { asChild: !0, disabled: c, children: /* @__PURE__ */ d.jsxs(
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
      /* @__PURE__ */ d.jsx(Ln, { style: { width: u + 24 }, className: k("w-full p-0", i), align: "start", children: /* @__PURE__ */ d.jsxs(or, { children: [
        /* @__PURE__ */ d.jsx(_r, { placeholder: r }),
        /* @__PURE__ */ d.jsxs(la, { children: [
          /* @__PURE__ */ d.jsx(Cr, { children: "Sin Resultados" }),
          /* @__PURE__ */ d.jsx($n, { children: a.map((p) => /* @__PURE__ */ d.jsxs(
            Gt,
            {
              disabled: !0,
              className: "cursor-default",
              children: [
                /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    className: k(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground"
                      // option
                      //   ? 'bg-primary text-primary-foreground'
                      //   : 'opacity-50 [&_svg]:invisible'
                    ),
                    children: /* @__PURE__ */ d.jsx(rn, { className: k("h-4 w-4") })
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
}, zH = (e) => {
  var K;
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
  } = e, h = (K = t == null ? void 0 : t.formState) == null ? void 0 : K.defaultValues[n], m = (L) => ({
    ...L,
    selected: h ? h.includes(L.value) : !1
  }), [v, g] = X(
    l.map(m)
  ), [b, y] = X(!1), [x, _] = X(null), [w, N] = X(!1), S = q(null), D = Zt(() => v.filter((L) => L.selected).map((L) => L.value), [v]), E = (L) => {
    const P = L.filter((R) => R.selected).map((R) => R.value);
    t.setValue(n, P, {
      shouldDirty: !0,
      shouldValidate: !0
    });
  }, W = () => {
    const L = v.map((P) => ({
      ...P,
      selected: !1
    }));
    g(L), E(L);
  }, G = (L, P) => {
    const R = v.map((O) => O.id === L ? { ...O, selected: P } : O);
    g(R), E(R), y(R.every((O) => O.selected));
  }, z = () => {
    if (b)
      return W(), y(!1);
    y(!0);
    const L = v.map((P) => ({
      ...P,
      selected: !0
    }));
    g(L), E(L);
  };
  return J(() => {
    const L = S.current;
    if (!L)
      return;
    const P = new ResizeObserver((R) => {
      const O = R[0].contentRect.width;
      _(O);
    });
    return P.observe(L), () => {
      P.unobserve(L), P.disconnect();
    };
  }, []), J(() => {
    const L = l.map(m);
    g(L), t.setValue(
      n,
      L.filter((P) => P.selected).map((P) => P.value)
    ), y(L.every((P) => P.selected));
  }, [l]), J(() => {
    g((L) => L.map((P) => ({
      ...P,
      selected: h == null ? void 0 : h.includes(P.value)
    })));
  }, [h]), /* @__PURE__ */ d.jsx(d.Fragment, { children: /* @__PURE__ */ d.jsx(
    po,
    {
      control: t.control,
      name: n,
      render: ({ field: L, formState: P }) => {
        var R;
        return /* @__PURE__ */ d.jsxs(Ar, { className: k("w-full space-y-2", u), children: [
          /* @__PURE__ */ d.jsxs("div", { className: "flex justify-start items-end", children: [
            s && /* @__PURE__ */ d.jsxs(ho, { className: "flex", children: [
              s,
              " "
            ] }),
            ((R = P == null ? void 0 : P.errors[n]) == null ? void 0 : R.message) && /* @__PURE__ */ d.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              P.errors[n].message
            ] })
          ] }),
          r && /* @__PURE__ */ d.jsx(ra, { className: "text-xs", children: r }),
          /* @__PURE__ */ d.jsxs(nr, { open: w, onOpenChange: N, children: [
            /* @__PURE__ */ d.jsx(rr, { asChild: !0, disabled: p, children: /* @__PURE__ */ d.jsxs(
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
                  !D.length && /* @__PURE__ */ d.jsx("span", { className: "text-muted-foreground font-normal", children: a || "Seleccione alguna opción" }),
                  D.length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                    /* @__PURE__ */ d.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal lg:hidden",
                        children: [
                          D.length,
                          " seleccionados"
                        ]
                      }
                    ),
                    /* @__PURE__ */ d.jsx("div", { className: "hidden space-x-1 lg:flex", children: D.length > 2 ? /* @__PURE__ */ d.jsxs(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: [
                          D.length,
                          " seleccionados"
                        ]
                      }
                    ) : v.filter((O) => O.selected).map((O) => /* @__PURE__ */ d.jsx(
                      At,
                      {
                        variant: "secondary",
                        className: "rounded-sm px-1 font-normal",
                        children: O.label
                      },
                      O.value.toString()
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
                className: k(
                  "w-full p-0 combox-checkbox-content",
                  f
                ),
                align: "start",
                children: /* @__PURE__ */ d.jsxs(or, { style: { width: "50px !important" }, children: [
                  /* @__PURE__ */ d.jsx(_r, { placeholder: s }),
                  /* @__PURE__ */ d.jsxs(la, { children: [
                    /* @__PURE__ */ d.jsx(Cr, { children: "Sin Resultados" }),
                    /* @__PURE__ */ d.jsxs($n, { children: [
                      /* @__PURE__ */ d.jsxs(Gt, { onSelect: z, children: [
                        /* @__PURE__ */ d.jsx(
                          "div",
                          {
                            className: k(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              b ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                            ),
                            children: /* @__PURE__ */ d.jsx(rn, { className: k("h-4 w-4") })
                          }
                        ),
                        /* @__PURE__ */ d.jsx("span", { className: "truncate", children: c || "Seleccionar todos" })
                      ] }),
                      /* @__PURE__ */ d.jsx(Ka, { className: "my-2" }),
                      v.map((O) => /* @__PURE__ */ d.jsxs(
                        Gt,
                        {
                          disabled: O == null ? void 0 : O.disabled,
                          onSelect: () => {
                            G(O.id, !O.selected);
                          },
                          children: [
                            /* @__PURE__ */ d.jsx(
                              "div",
                              {
                                className: k(
                                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                  O.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                                ),
                                children: /* @__PURE__ */ d.jsx(rn, { className: k("h-4 w-4") })
                              }
                            ),
                            O.icon,
                            /* @__PURE__ */ d.jsx("span", { className: "truncate", children: O.label })
                          ]
                        },
                        O.value.toString()
                      ))
                    ] }),
                    /* @__PURE__ */ d.jsx(Ka, { className: "my-1" }),
                    /* @__PURE__ */ d.jsxs($n, { className: "[&_>_div]:flex [&_>_div]:w-full [&_>_div]:flex-row [&_>_div]:justify-between [&_>_div]:items-center [&_>_div]:gap-3", children: [
                      D.length > 0 && /* @__PURE__ */ d.jsxs(
                        Gt,
                        {
                          onSelect: () => {
                            t.setValue(n, []), W(), y(!1);
                          },
                          className: k(
                            yr({ variant: "ghost" }),
                            "w-full aria-selected:bg-muted/50 h-fit py-1.5"
                          ),
                          children: [
                            /* @__PURE__ */ d.jsx(b$, { size: 14, className: "mr-2" }),
                            "Limpiar"
                          ]
                        }
                      ),
                      /* @__PURE__ */ d.jsxs(
                        Gt,
                        {
                          onSelect: () => N(!1),
                          className: k(
                            yr({ variant: "default" }),
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
}, Eq = ({ id: e, description: t, icon: n, placeholder: r, label: o, tabIndex: a, classNameContainer: s, readOnly: i, classNamePopover: c, disabled: l, ...u }) => i ? /* @__PURE__ */ d.jsx(
  VH,
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
  zH,
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
function WH({
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
function Xm({
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
          S1,
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
    /* @__PURE__ */ d.jsx(Sr, { children: t })
  ] }) });
}
function UH({
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
const HH = ({ isExpanded: e, theme: t }) => {
  const [n, r] = X(!1), { value: o, toggleTheme: a } = t;
  return J(() => {
    r(!0);
  }, []), n ? /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: a,
      "data-testId": "theme-sidebar-bottom-btn",
      className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none`,
      children: o === "light" ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(w1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
      ] }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(C1, { className: "dark:text-white" }),
        !e && /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
      ] })
    }
  ) : null;
};
function KH({
  sidebar: e,
  onCloseSideBar: t
}) {
  return /* @__PURE__ */ d.jsxs("section", { className: "pl-2 pr-3 my-2", children: [
    /* @__PURE__ */ d.jsx("div", { className: "border border-slate-200 w-full" }),
    /* @__PURE__ */ d.jsxs("ul", { className: "mt-2 space-y-2", children: [
      e.theme && /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsx(HH, { isExpanded: !1, theme: e.theme }) }),
      /* @__PURE__ */ d.jsx("li", { children: /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: t,
          "data-testId": "toggle-sidebar-bottom-btn",
          className: "w-full border-2 border-transparent flex items-center p-2 group group-hover:text-black text-base font-normal text-brand-sidebar-text rounded-lg hover:bg-brand-sidebar-iconsHover/20 hover:dark:bg-brand-sidebar-iconsHover/10 select-none",
          children: [
            /* @__PURE__ */ d.jsx($v, { className: "dark:text-white", size: 20 }),
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
            /* @__PURE__ */ d.jsx(wv, { className: "dark:text-white", size: 20 }),
            /* @__PURE__ */ d.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
          ]
        }
      ) })
    ] })
  ] });
}
function GH({
  navLinksItems: e,
  subLinksItems: t,
  sidebar: n,
  onCloseSideBar: r,
  Link: o
}) {
  const { profile: a } = n;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(UH, { profile: a }),
    /* @__PURE__ */ d.jsxs("aside", { className: "px-6", children: [
      e == null ? void 0 : e.map((s, i) => /* @__PURE__ */ d.jsx(
        S1,
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
        MW,
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
        KH,
        {
          onCloseSideBar: r,
          sidebar: n
        }
      )
    ] })
  ] });
}
function Pq({
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
        Xm,
        {
          icon: i.icon,
          titleDescription: i.titleDescription,
          Link: o,
          item: i
        },
        c
      )),
      /* @__PURE__ */ d.jsx(
        Xm,
        {
          icon: /* @__PURE__ */ d.jsx($v, {}),
          titleDescription: "Options",
          actionToSet: s,
          Link: null,
          item: null
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      WH,
      {
        isOpen: a,
        onClose: () => s(!1),
        children: /* @__PURE__ */ d.jsx(
          GH,
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
function YH() {
  var o;
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = lt(yo);
  return /* @__PURE__ */ d.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ d.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ d.jsxs("p", { className: "text-sm font-medium", children: [
        ((o = e == null ? void 0 : e.labels) == null ? void 0 : o.plural) || "Items",
        " por Pagina"
      ] }),
      /* @__PURE__ */ d.jsxs(
        jf,
        {
          value: `${e.limit}`,
          onValueChange: (a) => t(Number(a)),
          children: [
            /* @__PURE__ */ d.jsx(Fc, { className: "h-8 w-[70px]", children: /* @__PURE__ */ d.jsx(kf, { placeholder: e.limit }) }),
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
            /* @__PURE__ */ d.jsx(Tr, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const Oq = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, qH = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLowerCase()}`).toUpperCase(), Tq = {
  limit: 10,
  page: 1
}, Xl = () => ("10000000-1000-4000-8000" + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), jq = (e, t) => [
  ...t.slice(0, t.length - 1),
  e,
  ...t.slice(t.length - 1)
], ZH = () => /* @__PURE__ */ d.jsx("span", { className: "mt-10 ml-5", children: "Sin Resultados" }), XH = ({
  data: e,
  columns: t
}) => {
  const n = (r, o) => r != null && r.render ? /* @__PURE__ */ d.jsx("div", { children: r.render(o) }, Xl()) : /* @__PURE__ */ d.jsx(vn, { children: o[r.id] }, Xl());
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: e.map((r) => /* @__PURE__ */ d.jsx(Uy, { children: t.map((o) => n(o, r)) }, Xl())) });
}, X1 = () => {
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
    XH,
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
  ) : /* @__PURE__ */ d.jsx(ZH, {}) });
}, QH = () => /* @__PURE__ */ d.jsx(X1, {}), JH = () => /* @__PURE__ */ d.jsx("span", { className: "loader-fade-dot" }), eK = () => /* @__PURE__ */ d.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ d.jsx(JH, {}),
  /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] }), tK = () => {
  const { showFilters: e, setShowFilters: t } = lt(yo);
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      type: "button",
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ d.jsx(y1, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, nK = ({ id: e, form: t, icon: n, label: r, options: o, onSubmit: a }) => {
  const { selectOptionFilter: s, getFilterOptionsSelectedById: i, resetOptionsByFilter: c } = lt(yo), l = (u) => {
    c(u);
  };
  return /* @__PURE__ */ d.jsxs(nr, { children: [
    /* @__PURE__ */ d.jsx(rr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { type: "button", variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", children: [
      n || /* @__PURE__ */ d.jsx(x1, { size: 16, className: "mr-2" }),
      r,
      i(e).length > 0 && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
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
    /* @__PURE__ */ d.jsx(Ln, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ d.jsxs(or, { children: [
      /* @__PURE__ */ d.jsx(_r, { placeholder: r }),
      /* @__PURE__ */ d.jsxs(la, { children: [
        /* @__PURE__ */ d.jsx(Cr, { children: "Sin Resultados" }),
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
                  className: k(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    u.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ d.jsx(rn, { className: k("h-4 w-4") })
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
}, rK = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ d.jsxs(nr, { children: [
  /* @__PURE__ */ d.jsx(rr, { asChild: !0, children: /* @__PURE__ */ d.jsxs(Ve, { variant: "outline", size: "sm", className: "py-5 border-dashed border-muted-foreground", type: "button", children: [
    /* @__PURE__ */ d.jsx(yi, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    o && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(ks, { orientation: "vertical", className: "mx-2 h-4" }),
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
    /* @__PURE__ */ d.jsxs(Hn, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ d.jsx(
      Ef,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), oK = ({ form: e, onSubmit: t }) => {
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
          rK,
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
      /* @__PURE__ */ d.jsx(tK, {}),
      o && r && r.map((f) => /* @__PURE__ */ d.jsx(
        nK,
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
}, aK = ({ onSubmitTable: e, loading: t }) => {
  const {
    queries: n,
    getFiltersWithOptionsSelected: r,
    filters: o,
    pagination: { page: a, limit: s },
    setSearchForm: i
  } = lt(yo), c = uy({
    defaultValues: n.reduce((u, f) => (u[f.id] = "", u), {}),
    resolver: O1(
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
  return J(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ d.jsx("div", {}) : /* @__PURE__ */ d.jsx(fy, { ...c, children: /* @__PURE__ */ d.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ d.jsx(oK, { form: c, onSubmit: l }) : /* @__PURE__ */ d.jsx("div", {}),
    /* @__PURE__ */ d.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "bg-brand-primary hover:bg-brand-primary-opaque ml-auto py-5 whitespace-nowrap text-white",
        children: t ? /* @__PURE__ */ d.jsx(md, {}) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(_1, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, sK = () => /* @__PURE__ */ d.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ d.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), iK = () => /* @__PURE__ */ d.jsx(X1, {}), cK = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function kq(e) {
  const [t, n] = X([]), [r, o] = X([]), [a, s] = X([]), [i, c] = X(!1), [l, u] = X(e == null ? void 0 : e.error), [f, p] = X(e == null ? void 0 : e.loading), [h, m] = X(), [v, g] = X(
    (e == null ? void 0 : e.pagination) ?? cK
  ), [b, y] = X(
    (e == null ? void 0 : e.columns) || []
  ), { cardsColsNumber: x } = e, _ = ve(
    (P) => e.onSubmitTable({ ...P }),
    [e]
  ), w = ve(
    (P) => {
      var U;
      g(P);
      const R = h.getValues(), O = [];
      (U = Object.entries(R)) == null || U.forEach((Z) => {
        Z[1] && O.push({
          field: qH(Z[0]),
          text: Z[1]
        });
      });
      const V = r.map((Z) => ({
        id: Z.id,
        label: Z.label,
        options: Z.options.filter((oe) => oe.selected).map((oe) => oe.value)
      })).filter((Z) => Z.options.length > 0);
      _({
        filters: V,
        queries: O,
        limit: P.limit,
        page: P.page
      });
    },
    [r, _, h]
  ), N = ve(() => {
    w({ ...v, page: v.page + 1 });
  }, [v, w]), S = ve(() => {
    v.page > 1 && w({ ...v, page: v.page - 1 });
  }, [v, w]), D = () => r.map((P) => ({
    id: P.id,
    label: P.label,
    options: P.options.filter((R) => R.selected).map((R) => R.value)
  })).filter((P) => P.options.length > 0), E = (P) => {
    const R = r.find((O) => O.id === P);
    return R ? R.options.filter((V) => V.selected).map((V) => V.value) : [];
  }, W = (P, R, O) => {
    const V = r.map((U) => U.id === P ? {
      ...U,
      options: U.options.map((Z) => Z.id === R ? { ...Z, selected: O } : Z)
    } : U);
    o(V);
  }, G = () => r, z = (P) => {
    const R = r.map((O) => O.id === P ? {
      ...O,
      options: O.options.map((V) => ({
        ...V,
        selected: !1
      }))
    } : O);
    o(R);
  }, K = (P) => w({ ...v, limit: P }), L = () => {
    const P = r.map((R) => ({
      ...R,
      options: R.options.map((O) => ({ ...O, selected: !1 }))
    }));
    o(P);
  };
  return J(() => n((e == null ? void 0 : e.data) || []), [e == null ? void 0 : e.data]), J(() => p(e == null ? void 0 : e.loading), [e == null ? void 0 : e.loading]), J(() => u((e == null ? void 0 : e.error) || !1), [e == null ? void 0 : e.error]), J(() => g(e == null ? void 0 : e.pagination), [e == null ? void 0 : e.pagination]), J(() => y((e == null ? void 0 : e.columns) || []), [e == null ? void 0 : e.columns]), J(() => {
    const P = b.filter((R) => R.isQuery).map((R) => ({
      id: R.id,
      label: R.label
    }));
    s(P);
  }, [b]), J(() => {
    const P = (O) => (O == null ? void 0 : O.filters) && (O == null ? void 0 : O.filters.length), R = b.filter(P).map((O) => {
      const V = O.filters.map((Z) => ({
        ...Z,
        selected: !1
      }));
      return {
        ...O,
        id: O.id,
        options: V
      };
    });
    o(R);
  }, [b]), J(() => {
    e != null && e.filters && (e == null || e.filters.forEach((P) => {
      P != null && P.filters && b.forEach((R) => {
        P.id === R.id && o((O) => O.some((U) => U.id === P.id) ? O : [
          ...O,
          {
            id: R.id,
            label: R.label,
            options: P.filters
          }
        ]);
      });
    }));
  }, [b, e == null ? void 0 : e.filters]), J(() => {
    g((P) => {
      var R, O;
      return {
        ...P,
        hasNextPage: (R = e == null ? void 0 : e.pagination) == null ? void 0 : R.hasNextPage,
        hasPrevPage: (O = e == null ? void 0 : e.pagination) == null ? void 0 : O.hasPrevPage
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
        updateLimit: K,
        showFilters: i,
        resetFilters: L,
        getGlobalFilters: G,
        selectOptionFilter: W,
        resetOptionsByFilter: z,
        multiItemsSelected: e.multiItemsSelected,
        setMultiItemsSelected: e.setMultiItemsSelected,
        limitOfMultiSelect: e.limitOfMultiSelect,
        queries: a,
        filters: r,
        onSubmitTable: _,
        getFilterOptionsSelectedById: E,
        getFiltersWithOptionsSelected: D,
        setSelectItem: e.setSelectItem,
        setShowFilters: (P) => c(P),
        setSearchForm: (P) => m(P)
      },
      children: /* @__PURE__ */ d.jsxs("div", { className: "w-full h-fit space-y-4", children: [
        /* @__PURE__ */ d.jsx(aK, { onSubmitTable: _, loading: f }),
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `overflow-clip grid grid-cols-1 ${x ? `${x === 2 ? "sm" : "lg"}:grid-cols-${x}` : "grid-cols-3"}  gap-6`,
            children: [
              f && /* @__PURE__ */ d.jsx(eK, {}),
              !f && l && /* @__PURE__ */ d.jsx(sK, {}),
              !f && !l && !t && /* @__PURE__ */ d.jsx(iK, {}),
              !f && !l && t && /* @__PURE__ */ d.jsx(QH, {})
            ]
          }
        ),
        !f && !l && t && /* @__PURE__ */ d.jsx(YH, {})
      ] })
    }
  );
}
function lK(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qm(e) {
  return lK(e) || Array.isArray(e);
}
function uK() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ap(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], c = t[s];
    return typeof i == "function" ? `${i}` == `${c}` : !Qm(i) || !Qm(c) ? i === c : ap(i, c);
  });
}
function Jm(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function dK(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Jm(e), r = Jm(t);
  return n.every((o, a) => {
    const s = r[a];
    return ap(o, s);
  });
}
function sp(e) {
  return typeof e == "number";
}
function ld(e) {
  return typeof e == "string";
}
function ip(e) {
  return typeof e == "boolean";
}
function ev(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function dt(e) {
  return Math.abs(e);
}
function cp(e) {
  return Math.sign(e);
}
function Oa(e, t) {
  return dt(e - t);
}
function fK(e, t) {
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
function lp(e, t) {
  return t === Is(e);
}
function tv(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function us(e) {
  return Object.keys(e);
}
function Q1(e, t) {
  return [e, t].reduce((n, r) => (us(r).forEach((o) => {
    const a = n[o], s = r[o], i = ev(a) && ev(s);
    n[o] = i ? Q1(a, s) : s;
  }), n), {});
}
function J1(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function pK(e, t) {
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
    return ld(e) ? n[e](c) : e(t, c, l);
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
function hK(e, t, n, r) {
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
function mK(e, t) {
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
function ew(e, t, n) {
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
    return ew(e, i(), n);
  }
  const f = {
    get: i,
    set: c,
    add: l,
    clone: u
  };
  return f;
}
function vK(e, t, n, r, o, a, s, i, c, l, u, f, p, h, m, v, g, b, y) {
  const {
    cross: x,
    direction: _
  } = e, w = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, S = ds(), D = ds(), E = ao(50, 225).constrain(h.measure(20)), W = {
    mouse: 300,
    touch: 400
  }, G = {
    mouse: 500,
    touch: 600
  }, z = m ? 43 : 25;
  let K = !1, L = 0, P = 0, R = !1, O = !1, V = !1, U = !1;
  function Z(A) {
    if (!y)
      return;
    function ne(Pe) {
      (ip(y) || y(A, Pe)) && ee(Pe);
    }
    const ye = t;
    S.add(ye, "dragstart", (Pe) => Pe.preventDefault(), N).add(ye, "touchmove", () => {
    }, N).add(ye, "touchend", () => {
    }).add(ye, "touchstart", ne).add(ye, "mousedown", ne).add(ye, "touchcancel", me).add(ye, "contextmenu", me).add(ye, "click", _e, !0);
  }
  function oe() {
    S.clear(), D.clear();
  }
  function H() {
    const A = U ? n : t;
    D.add(A, "touchmove", re, N).add(A, "touchend", me).add(A, "mousemove", re, N).add(A, "mouseup", me);
  }
  function le(A) {
    const ne = A.nodeName || "";
    return w.includes(ne);
  }
  function be() {
    return (m ? G : W)[U ? "mouse" : "touch"];
  }
  function pe(A, ne) {
    const ye = f.add(cp(A) * -1), Pe = u.byDistance(A, !m).distance;
    return m || dt(A) < E ? Pe : g && ne ? Pe * 0.5 : u.byIndex(ye.get(), 0).distance;
  }
  function ee(A) {
    const ne = J1(A, r);
    U = ne, V = m && ne && !A.buttons && K, K = Oa(o.get(), s.get()) >= 2, !(ne && A.button !== 0) && (le(A.target) || (R = !0, a.pointerDown(A), l.useFriction(0).useDuration(0), o.set(s), H(), L = a.readPoint(A), P = a.readPoint(A, x), p.emit("pointerDown")));
  }
  function re(A) {
    const ne = a.readPoint(A), ye = a.readPoint(A, x), Pe = Oa(ne, L), Ie = Oa(ye, P);
    if (!O && !U && (!A.cancelable || (O = Pe > Ie, !O)))
      return me(A);
    const Oe = a.pointerMove(A);
    Pe > v && (V = !0), l.useFriction(0.3).useDuration(1), i.start(), o.add(_(Oe)), A.preventDefault();
  }
  function me(A) {
    const ye = u.byDistance(0, !1).index !== f.get(), Pe = a.pointerUp(A) * be(), Ie = pe(_(Pe), ye), Oe = fK(Pe, Ie), T = z - 10 * Oe, B = b + Oe / 50;
    O = !1, R = !1, D.clear(), l.useDuration(T).useFriction(B), c.distance(Ie, !m), U = !1, p.emit("pointerUp");
  }
  function _e(A) {
    V && (A.stopPropagation(), A.preventDefault(), V = !1);
  }
  function ae() {
    return R;
  }
  return {
    init: Z,
    pointerDown: ae,
    destroy: oe
  };
}
function gK(e, t) {
  let r, o;
  function a(f) {
    return f.timeStamp;
  }
  function s(f, p) {
    const m = `client${(p || e.scroll) === "x" ? "X" : "Y"}`;
    return (J1(f, t) ? f : f.touches[0])[m];
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
function bK() {
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
function yK(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function xK(e, t, n, r, o, a, s) {
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
        const _ = x.target === e, w = r.indexOf(x.target), N = _ ? c : l[w], S = f(_ ? e : r[w]);
        if (dt(S - N) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    i = new ResizeObserver((y) => {
      u || (ip(a) || a(v, y)) && g(y);
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
function wK(e, t, n, r, o) {
  let a = 0, s = 0, i = r, c = o, l = e.get(), u = 0;
  function f() {
    const w = n.get() - e.get(), N = !i;
    let S = 0;
    return N ? (a = 0, e.set(n), S = w) : (a += w / i, a *= c, l += a, e.add(a), S = l - u), s = cp(S), u = l, _;
  }
  function p() {
    const w = n.get() - t.get();
    return dt(w) < 1e-3;
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
  function y(w) {
    return i = w, _;
  }
  function x(w) {
    return c = w, _;
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
function $K(e, t, n, r, o) {
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
function _K(e, t, n, r, o) {
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
      } = a, y = a.constrain(m), x = !v, _ = lp(n, v);
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
function CK(e, t, n) {
  const r = t[0], o = n ? r - e : mn(t);
  return {
    limit: ao(o, r)
  };
}
function SK(e, t, n, r) {
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
function NK(e) {
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
function EK(e, t, n, r, o) {
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
function PK(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: c
  } = r, l = u();
  function u() {
    const p = s(a), h = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : h ? p : p.slice(i, c).map((m, v, g) => {
      const b = !v, y = lp(g, v);
      if (b) {
        const x = mn(g[0]) + 1;
        return tv(x);
      }
      if (y) {
        const x = Is(a) - mn(g)[0] + 1;
        return tv(x, mn(g)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: l
  };
}
function OK(e, t, n, r, o) {
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
    const b = g.filter((y) => cp(y) === v);
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
    const _ = t[b] - y, w = m + u(_, 0);
    return {
      index: b,
      distance: w
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: u
  };
}
function TK(e, t, n, r, o, a, s) {
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
function jK(e, t, n, r, o, a) {
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
      sp(g) && (o.useDuration(0), r.index(g, 0));
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
    return sp(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function tw(e, t) {
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
function kK(e, t, n, r, o, a, s, i, c) {
  const u = ls(o), f = ls(o).reverse(), p = b().concat(y());
  function h(S, D) {
    return S.reduce((E, W) => E - o[W], D);
  }
  function m(S, D) {
    return S.reduce((E, W) => h(E, D) > 0 ? E.concat([W]) : E, []);
  }
  function v(S) {
    return a.map((D, E) => ({
      start: D - r[E] + 0.5 + S,
      end: D + t - 0.5 + S
    }));
  }
  function g(S, D, E) {
    const W = v(D);
    return S.map((G) => {
      const z = E ? 0 : -n, K = E ? n : 0, L = E ? "end" : "start", P = W[G][L];
      return {
        index: G,
        loopPoint: P,
        slideLocation: vi(-1),
        translate: tw(e, c[G]),
        target: () => i.get() > P ? z : K
      };
    });
  }
  function b() {
    const S = s[0], D = m(f, S);
    return g(D, n, !1);
  }
  function y() {
    const S = t - s[0] - 1, D = m(u, S);
    return g(D, -n, !0);
  }
  function x() {
    return p.every(({
      index: S
    }) => {
      const D = u.filter((E) => E !== S);
      return h(D, t) <= 0.1;
    });
  }
  function _() {
    p.forEach((S) => {
      const {
        target: D,
        translate: E,
        slideLocation: W
      } = S, G = D();
      G !== W.get() && (E.to(G), W.set(G));
    });
  }
  function w() {
    p.forEach((S) => S.translate.clear());
  }
  return {
    canLoop: x,
    clear: w,
    loop: _,
    loopPoints: p
  };
}
function MK(e, t, n) {
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
      o || (ip(n) || n(c, u)) && l(u);
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
function DK(e, t, n, r) {
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
function AK(e, t, n, r, o, a) {
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
      const w = !x, N = lp(_, x);
      return w ? p[x] + u : N ? p[x] + f : _[x + 1][i] - y[i];
    }).map(dt);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: h,
    startGap: u,
    endGap: f
  };
}
function RK(e, t, n, r, o, a, s, i, c) {
  const {
    startEdge: l,
    endEdge: u,
    direction: f
  } = e, p = sp(n);
  function h(b, y) {
    return ls(b).filter((x) => x % y === 0).map((x) => b.slice(x, x + y));
  }
  function m(b) {
    return b.length ? ls(b).reduce((y, x, _) => {
      const w = mn(y) || 0, N = w === 0, S = x === Is(b), D = o[l] - a[w][l], E = o[l] - a[x][u], W = !r && N ? f(s) : 0, G = !r && S ? f(i) : 0, z = dt(E - G - (D + W));
      return _ && z > t + c && y.push(x), S && y.push(b.length), y;
    }, []).map((y, x, _) => {
      const w = Math.max(_[x - 1] || 0);
      return b.slice(w, y);
    }) : [];
  }
  function v(b) {
    return p ? h(b, n) : m(b);
  }
  return {
    groupSlides: v
  };
}
function IK(e, t, n, r, o, a, s) {
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
    watchDrag: w
  } = a, N = 2, S = bK(), D = S.measure(t), E = n.map(S.measure), W = mK(c, l), G = W.measureSize(D), z = yK(G), K = pK(i, G), L = !f && !!y, P = f || !!y, {
    slideSizes: R,
    slideSizesWithGaps: O,
    startGap: V,
    endGap: U
  } = AK(W, D, E, n, P, o), Z = RK(W, G, g, f, D, E, V, U, N), {
    snaps: oe,
    snapsAligned: H
  } = EK(W, K, D, E, Z), le = -mn(oe) + mn(O), {
    snapsContained: be,
    scrollContainLimit: pe
  } = _K(G, le, H, y, N), ee = L ? be : H, {
    limit: re
  } = CK(le, ee, f), me = ew(Is(ee), u, f), _e = me.clone(), ae = ls(n), fe = ({
    dragHandler: yt,
    scrollBody: Qt,
    scrollBounds: Ce,
    options: {
      loop: Se
    }
  }) => {
    Se || Ce.constrain(yt.pointerDown()), Qt.seek();
  }, A = ({
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
      loop: lr
    }
  }, an) => {
    const Nt = yt.velocity(), Tn = yt.settled();
    Tn && !Xe.pointerDown() && (tt.stop(), xt.emit("settle")), Tn || xt.emit("scroll"), Se.set(Ce.get() - Nt + Nt * an), lr && (Be.loop(yt.direction()), Le.loop()), Qt.to(Se.get());
  }, ne = hK(r, o, () => fe(et), (yt) => A(et, yt)), ye = 0.68, Pe = ee[me.get()], Ie = vi(Pe), Oe = vi(Pe), T = vi(Pe), B = wK(Ie, Oe, T, p, ye), Y = OK(f, ee, le, re, T), ue = TK(ne, me, _e, B, Y, T, s), ce = NK(re), te = ds(), we = DK(t, n, s, v), {
    slideRegistry: De
  } = PK(L, y, ee, pe, Z, ae), Ke = jK(e, n, De, ue, B, te), et = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: D,
    slideRects: E,
    animation: ne,
    axis: W,
    dragHandler: vK(W, e, r, o, T, gK(W, o), Ie, ne, ue, B, Y, me, s, z, h, m, b, ye, w),
    eventStore: te,
    percentOfView: z,
    index: me,
    indexPrevious: _e,
    limit: re,
    location: Ie,
    offsetLocation: Oe,
    options: a,
    resizeHandler: xK(t, s, o, n, W, x, S),
    scrollBody: B,
    scrollBounds: $K(re, Oe, T, B, z),
    scrollLooper: SK(le, re, Oe, [Ie, Oe, T]),
    scrollProgress: ce,
    scrollSnapList: ee.map(ce.get),
    scrollSnaps: ee,
    scrollTarget: Y,
    scrollTo: ue,
    slideLooper: kK(W, G, le, R, O, oe, ee, Oe, n),
    slideFocus: Ke,
    slidesHandler: MK(t, s, _),
    slidesInView: we,
    slideIndexes: ae,
    slideRegistry: De,
    slidesToScroll: Z,
    target: T,
    translate: tw(W, t)
  };
  return et;
}
function LK() {
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
const FK = {
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
function BK(e) {
  function t(a, s) {
    return Q1(a, s || {});
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
function VK(e) {
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
  const r = e.ownerDocument, o = r.defaultView, a = BK(o), s = VK(a), i = ds(), c = LK(), {
    mergeOptions: l,
    optionsAtMedia: u,
    optionsMediaQueries: f
  } = a, {
    on: p,
    off: h,
    emit: m
  } = c, v = G;
  let g = !1, b, y = l(FK, oc.globalOptions), x = l(y), _ = [], w, N, S;
  function D() {
    const {
      container: fe,
      slides: A
    } = x;
    N = (ld(fe) ? e.querySelector(fe) : fe) || e.children[0];
    const ye = ld(A) ? N.querySelectorAll(A) : A;
    S = [].slice.call(ye || N.children);
  }
  function E(fe) {
    const A = IK(e, N, S, r, o, fe, c);
    if (fe.loop && !A.slideLooper.canLoop()) {
      const ne = Object.assign({}, fe, {
        loop: !1
      });
      return E(ne);
    }
    return A;
  }
  function W(fe, A) {
    g || (y = l(y, fe), x = u(y), _ = A || _, D(), b = E(x), f([y, ..._.map(({
      options: ne
    }) => ne)]).forEach((ne) => i.add(ne, "change", G)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(), b.eventHandler.init(ae), b.resizeHandler.init(ae), b.slidesHandler.init(ae), b.options.loop && b.slideLooper.loop(), N.offsetParent && S.length && b.dragHandler.init(ae), w = s.init(ae, _)));
  }
  function G(fe, A) {
    const ne = oe();
    z(), W(l({
      startIndex: ne
    }, fe), A), c.emit("reInit");
  }
  function z() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), s.destroy(), i.clear();
  }
  function K() {
    g || (g = !0, i.clear(), z(), c.emit("destroy"));
  }
  function L(fe, A, ne) {
    !x.active || g || (b.scrollBody.useBaseFriction().useDuration(A === !0 ? 0 : x.duration), b.scrollTo.index(fe, ne || 0));
  }
  function P(fe) {
    const A = b.index.add(1).get();
    L(A, fe, -1);
  }
  function R(fe) {
    const A = b.index.add(-1).get();
    L(A, fe, 1);
  }
  function O() {
    return b.index.add(1).get() !== oe();
  }
  function V() {
    return b.index.add(-1).get() !== oe();
  }
  function U() {
    return b.scrollSnapList;
  }
  function Z() {
    return b.scrollProgress.get(b.location.get());
  }
  function oe() {
    return b.index.get();
  }
  function H() {
    return b.indexPrevious.get();
  }
  function le() {
    return b.slidesInView.get();
  }
  function be() {
    return b.slidesInView.get(!1);
  }
  function pe() {
    return w;
  }
  function ee() {
    return b;
  }
  function re() {
    return e;
  }
  function me() {
    return N;
  }
  function _e() {
    return S;
  }
  const ae = {
    canScrollNext: O,
    canScrollPrev: V,
    containerNode: me,
    internalEngine: ee,
    destroy: K,
    off: h,
    on: p,
    emit: m,
    plugins: pe,
    previousScrollSnap: H,
    reInit: v,
    rootNode: re,
    scrollNext: P,
    scrollPrev: R,
    scrollProgress: Z,
    scrollSnapList: U,
    scrollTo: L,
    selectedScrollSnap: oe,
    slideNodes: _e,
    slidesInView: le,
    slidesNotInView: be
  };
  return W(t, n), setTimeout(() => c.emit("init"), 0), ae;
}
oc.globalOptions = void 0;
function up(e = {}, t = []) {
  const n = q(e), r = q(t), [o, a] = X(), [s, i] = X(), c = ve(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return J(() => {
    if (uK() && s) {
      oc.globalOptions = up.globalOptions;
      const l = oc(s, n.current, r.current);
      return a(l), () => l.destroy();
    } else
      a(void 0);
  }, [s, a]), J(() => {
    ap(n.current, e) || (n.current = e, c());
  }, [e, c]), J(() => {
    dK(r.current, t) || (r.current = t, c());
  }, [t, c]), [i, o];
}
up.globalOptions = void 0;
const nw = C.createContext(null);
function nl() {
  const e = C.useContext(nw);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const zK = C.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [c, l] = up(
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
      nw.Provider,
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
            className: k("relative", o),
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
zK.displayName = "Carousel";
const WK = C.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = nl();
  return /* @__PURE__ */ d.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      className: k(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
WK.displayName = "CarouselContent";
const UK = C.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = nl();
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: k(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
UK.displayName = "CarouselItem";
const HK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = nl();
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: k(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(v$, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
HK.displayName = "CarouselPrevious";
const KK = C.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = nl();
  return /* @__PURE__ */ d.jsxs(
    Ve,
    {
      ref: o,
      variant: t,
      size: n,
      className: k(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ d.jsx(g$, { className: "h-4 w-4" }),
        /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
KK.displayName = "CarouselNext";
var rw = I.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
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
}, direction: "bottom" }), dp = () => I.useContext(rw);
function GK(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
GK(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var YK = typeof window < "u" ? fs : J;
function ud(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function qK() {
  return fp(/^Mac/);
}
function ZK() {
  return fp(/^iPhone/);
}
function XK() {
  return fp(/^iPad/) || qK() && navigator.maxTouchPoints > 1;
}
function ow() {
  return ZK() || XK();
}
function fp(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Ql = typeof document < "u" && window.visualViewport;
function nv(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function aw(e) {
  for (nv(e) && (e = e.parentElement); e && !nv(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var QK = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), oi = 0, Jl;
function JK(e = {}) {
  let { isDisabled: t } = e;
  YK(() => {
    if (!t)
      return oi++, oi === 1 && (ow() ? Jl = tG() : Jl = eG()), () => {
        oi--, oi === 0 && Jl();
      };
  }, [t]);
}
function eG() {
  return ud(sw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function tG() {
  let e, t = 0, n = (f) => {
    e = aw(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let p = f.changedTouches[0].pageY, h = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((h <= 0 && p > t || h >= m && p < t) && f.preventDefault(), t = p);
  }, o = (f) => {
    let p = f.target;
    dd(p) && p !== document.activeElement && (f.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (f) => {
    let p = f.target;
    dd(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", Ql && (Ql.height < window.innerHeight ? requestAnimationFrame(() => {
        rv(p);
      }) : Ql.addEventListener("resize", () => rv(p), { once: !0 }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, c = window.pageYOffset, l = ud(sw(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = ud($a(document, "touchstart", n, { passive: !1, capture: !0 }), $a(document, "touchmove", r, { passive: !1, capture: !0 }), $a(document, "touchend", o, { passive: !1, capture: !0 }), $a(document, "focus", a, !0), $a(window, "scroll", s));
  return () => {
    l(), u(), window.scrollTo(i, c);
  };
}
function sw(e, t, n) {
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
function rv(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = aw(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom, s = n.getBoundingClientRect().bottom;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function dd(e) {
  return e instanceof HTMLInputElement && !QK.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function nG(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function rG(...e) {
  return (t) => e.forEach((n) => nG(n, t));
}
function iw(...e) {
  return C.useCallback(rG(...e), e);
}
var hr = null;
function oG({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o }) {
  let [a, s] = I.useState(typeof window < "u" ? window.location.href : ""), i = I.useRef(0), c = I.useCallback(() => {
    if (hr === null && e) {
      hr = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: u, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-i.current}px`, document.body.style.left = `${-u}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let p = f - window.innerHeight;
        p && i.current >= f && (document.body.style.top = `${-(i.current + p)}px`);
      }), 300);
    }
  }, [e]), l = I.useCallback(() => {
    if (hr !== null) {
      let u = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      document.body.style.position = hr.position, document.body.style.top = hr.top, document.body.style.left = hr.left, document.body.style.height = hr.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (o && a !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, u);
      }), hr = null;
    }
  }, [a]);
  return I.useEffect(() => {
    function u() {
      i.current = window.scrollY;
    }
    return u(), window.addEventListener("scroll", u), () => {
      window.removeEventListener("scroll", u);
    };
  }, []), I.useEffect(() => {
    n || !r || (e ? (c(), t || setTimeout(() => {
      l();
    }, 500)) : l());
  }, [e, r, a, t, n, c, l]), { restorePositionSetting: l };
}
var cw = /* @__PURE__ */ new WeakMap();
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
  }), !n && cw.set(e, r);
}
function ai(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = cw.get(e);
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
function aG(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var rt = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] }, lw = 0.4;
function uw(e) {
  let t = I.useRef(e);
  return I.useEffect(() => {
    t.current = e;
  }), I.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function sG({ defaultProp: e, onChange: t }) {
  let n = I.useState(e), [r] = n, o = I.useRef(r), a = uw(t);
  return I.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
function iG({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  let [r, o] = sG({ defaultProp: t, onChange: n }), a = e !== void 0, s = a ? e : r, i = uw(n), c = I.useCallback((l) => {
    if (a) {
      let u = typeof l == "function" ? l(e) : l;
      u !== e && i(u);
    } else
      o(l);
  }, [a, e, o, i]);
  return [s, c];
}
function cG({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom" }) {
  let [c, l] = iG({ prop: e, defaultProp: n == null ? void 0 : n[0], onChange: t }), u = I.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), f = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = I.useMemo(() => n == null ? void 0 : n.findIndex((x) => x === c), [n, c]), h = I.useMemo(() => {
    var x;
    return (x = n == null ? void 0 : n.map((_) => {
      let w = typeof window < "u", N = typeof _ == "string", S = 0;
      if (N && (S = parseInt(_, 10)), $t(i)) {
        let E = N ? S : w ? _ * window.innerHeight : 0;
        return w ? i === "bottom" ? window.innerHeight - E : -window.innerHeight + E : E;
      }
      let D = N ? S : w ? _ * window.innerWidth : 0;
      return w ? i === "right" ? window.innerWidth - D : -window.innerWidth + D : D;
    })) != null ? x : [];
  }, [n]), m = I.useMemo(() => p !== null ? h == null ? void 0 : h[p] : null, [h, p]), v = I.useCallback((x) => {
    var _;
    let w = (_ = h == null ? void 0 : h.findIndex((N) => N === x)) != null ? _ : null;
    s(w), it(r.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(i) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)` }), h && w !== h.length - 1 && w !== a ? it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "0" }) : it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), l(w !== null ? n == null ? void 0 : n[w] : null);
  }, [r.current, n, h, a, o, l]);
  I.useEffect(() => {
    var x;
    if (e) {
      let _ = (x = n == null ? void 0 : n.findIndex((w) => w === e)) != null ? x : -1;
      h && _ !== -1 && typeof h[_] == "number" && v(h[_]);
    }
  }, [e, n, h, v]);
  function g({ draggedDistance: x, closeDrawer: _, velocity: w, dismissible: N }) {
    if (a === void 0)
      return;
    let S = i === "bottom" || i === "right" ? (m ?? 0) - x : (m ?? 0) + x, D = p === a - 1, E = p === 0, W = x > 0;
    if (D && it(o.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), w > 2 && !W) {
      N ? _() : v(h[0]);
      return;
    }
    if (w > 2 && W && h && n) {
      v(h[n.length - 1]);
      return;
    }
    let G = h == null ? void 0 : h.reduce((K, L) => typeof K != "number" || typeof L != "number" ? K : Math.abs(L - S) < Math.abs(K - S) ? L : K), z = $t(i) ? window.innerHeight : window.innerWidth;
    if (w > lw && Math.abs(x) < z * 0.4) {
      let K = W ? 1 : -1;
      if (K > 0 && u) {
        v(h[n.length - 1]);
        return;
      }
      if (E && K < 0 && N && _(), p === null)
        return;
      v(h[p + K]);
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
    let w = p === a - 1;
    if (p >= a && _)
      return 0;
    if (w && !_)
      return 1;
    if (!f && !w)
      return null;
    let N = w ? p + 1 : p - 1, S = w ? h[N] - h[N - 1] : h[N + 1] - h[N], D = x / Math.abs(S);
    return w ? 1 - D : D;
  }
  return { isLastSnapPoint: u, activeSnapPoint: c, shouldFade: f, getPercentageDragged: y, setActiveSnapPoint: l, activeSnapPointIndex: p, onRelease: g, onDrag: b, snapPointsOffset: h };
}
var lG = 0.25, uG = 100, ov = 8, Fr = 16, av = 26, sv = "vaul-dragging";
function dw({ open: e, onOpenChange: t, children: n, shouldScaleBackground: r, onDrag: o, onRelease: a, snapPoints: s, nested: i = !1, closeThreshold: c = lG, scrollLockTimeout: l = uG, dismissible: u = !0, fadeFromIndex: f = s && s.length - 1, activeSnapPoint: p, setActiveSnapPoint: h, fixed: m, modal: v = !0, onClose: g, direction: b = "bottom", preventScrollRestoration: y = !0 }) {
  var x;
  let [_ = !1, w] = I.useState(!1), [N, S] = I.useState(!1), [D, E] = I.useState(!1), [W, G] = I.useState(!1), [z, K] = I.useState(!1), [L, P] = I.useState(!1), R = I.useRef(null), O = I.useRef(null), V = I.useRef(null), U = I.useRef(null), Z = I.useRef(null), oe = I.useRef(!1), H = I.useRef(null), le = I.useRef(0), be = I.useRef(!1), pe = I.useRef(0), ee = I.useRef(null), re = I.useRef(((x = ee.current) == null ? void 0 : x.getBoundingClientRect().height) || 0), me = I.useRef(0), _e = I.useCallback((Ce) => {
    s && Ce === ye.length - 1 && (O.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ae, activeSnapPointIndex: fe, setActiveSnapPoint: A, onRelease: ne, snapPointsOffset: ye, onDrag: Pe, shouldFade: Ie, getPercentageDragged: Oe } = cG({ snapPoints: s, activeSnapPointProp: p, setActiveSnapPointProp: h, drawerRef: ee, fadeFromIndex: f, overlayRef: R, onSnapPointChange: _e, direction: b });
  JK({ isDisabled: !_ || z || !v || L || !N });
  let { restorePositionSetting: T } = oG({ isOpen: _, modal: v, nested: i, hasBeenOpened: N, preventScrollRestoration: y });
  function B() {
    return (window.innerWidth - av) / window.innerWidth;
  }
  function Y(Ce) {
    var Se;
    !u && !s || ee.current && !ee.current.contains(Ce.target) || (re.current = ((Se = ee.current) == null ? void 0 : Se.getBoundingClientRect().height) || 0, K(!0), V.current = /* @__PURE__ */ new Date(), ow() && window.addEventListener("touchend", () => oe.current = !1, { once: !0 }), Ce.target.setPointerCapture(Ce.pointerId), le.current = $t(b) ? Ce.screenY : Ce.screenX);
  }
  function ue(Ce, Se) {
    var Be;
    let Le = Ce, Xe = (Be = window.getSelection()) == null ? void 0 : Be.toString(), tt = ee.current ? si(ee.current, b) : null, xt = /* @__PURE__ */ new Date();
    if (Le.hasAttribute("data-vaul-no-drag"))
      return !1;
    if (b === "right" || b === "left")
      return !0;
    if (O.current && xt.getTime() - O.current.getTime() < 500)
      return !1;
    if (tt !== null && (b === "bottom" ? tt > 0 : tt < 0))
      return !0;
    if (Xe && Xe.length > 0)
      return !1;
    if (Z.current && xt.getTime() - Z.current.getTime() < l && tt === 0 || Se)
      return Z.current = xt, !1;
    for (; Le; ) {
      if (Le.scrollHeight > Le.clientHeight) {
        if (Le.scrollTop !== 0)
          return Z.current = /* @__PURE__ */ new Date(), !1;
        if (Le.getAttribute("role") === "dialog")
          return !0;
      }
      Le = Le.parentNode;
    }
    return !0;
  }
  function ce(Ce) {
    if (ee.current && z) {
      let Se = b === "bottom" || b === "right" ? 1 : -1, Be = (le.current - ($t(b) ? Ce.screenY : Ce.screenX)) * Se, Le = Be > 0;
      if (s && fe === 0 && !u || !oe.current && !ue(Ce.target, Le))
        return;
      if (ee.current.classList.add(sv), oe.current = !0, it(ee.current, { transition: "none" }), it(R.current, { transition: "none" }), s && Pe({ draggedDistance: Be }), Le && !s) {
        let Nt = aG(Be), Tn = Math.min(Nt * -1, 0) * Se;
        it(ee.current, { transform: $t(b) ? `translate3d(0, ${Tn}px, 0)` : `translate3d(${Tn}px, 0, 0)` });
        return;
      }
      let Xe = Math.abs(Be), tt = document.querySelector("[vaul-drawer-wrapper]"), xt = Xe / re.current, lr = Oe(Xe, Le);
      lr !== null && (xt = lr);
      let an = 1 - xt;
      if ((Ie || f && fe === f - 1) && (o == null || o(Ce, xt), it(R.current, { opacity: `${an}`, transition: "none" }, !0)), tt && R.current && r) {
        let Nt = Math.min(B() + xt * (1 - B()), 1), Tn = 8 - xt * 8, Kn = Math.max(0, 14 - xt * 14);
        it(tt, { borderRadius: `${Tn}px`, transform: $t(b) ? `scale(${Nt}) translate3d(0, ${Kn}px, 0)` : `scale(${Nt}) translate3d(${Kn}px, 0, 0)`, transition: "none" }, !0);
      }
      if (!s) {
        let Nt = Xe * Se;
        it(ee.current, { transform: $t(b) ? `translate3d(0, ${Nt}px, 0)` : `translate3d(${Nt}px, 0, 0)` });
      }
    }
  }
  I.useEffect(() => () => {
    Ke(!1), T();
  }, []), I.useEffect(() => {
    var Ce;
    function Se() {
      var Be;
      if (!ee.current)
        return;
      let Le = document.activeElement;
      if (dd(Le) || be.current) {
        let Xe = ((Be = window.visualViewport) == null ? void 0 : Be.height) || 0, tt = window.innerHeight - Xe, xt = ee.current.getBoundingClientRect().height || 0;
        me.current || (me.current = xt);
        let lr = ee.current.getBoundingClientRect().top;
        if (Math.abs(pe.current - tt) > 60 && (be.current = !be.current), s && s.length > 0 && ye && fe) {
          let an = ye[fe] || 0;
          tt += an;
        }
        if (pe.current = tt, xt > Xe || be.current) {
          let an = ee.current.getBoundingClientRect().height, Nt = an;
          an > Xe && (Nt = Xe - av), m ? ee.current.style.height = `${an - Math.max(tt, 0)}px` : ee.current.style.height = `${Math.max(Nt, Xe - lr)}px`;
        } else
          ee.current.style.height = `${me.current}px`;
        s && s.length > 0 && !be.current ? ee.current.style.bottom = "0px" : ee.current.style.bottom = `${Math.max(tt, 0)}px`;
      }
    }
    return (Ce = window.visualViewport) == null || Ce.addEventListener("resize", Se), () => {
      var Be;
      return (Be = window.visualViewport) == null ? void 0 : Be.removeEventListener("resize", Se);
    };
  }, [fe, s, ye]);
  function te() {
    ee.current && (g == null || g(), it(ee.current, { transform: $t(b) ? `translate3d(0, ${b === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${b === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), it(R.current, { opacity: "0", transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), Ke(!1), setTimeout(() => {
      E(!1), w(!1);
    }, 300), setTimeout(() => {
      s && A(s[0]);
    }, rt.DURATION * 1e3));
  }
  I.useEffect(() => {
    if (!_ && r) {
      let Ce = setTimeout(() => {
        ai(document.body);
      }, 200);
      return () => clearTimeout(Ce);
    }
  }, [_, r]), I.useEffect(() => {
    e ? (w(!0), S(!0)) : te();
  }, [e]), I.useEffect(() => {
    W && (t == null || t(_));
  }, [_]), I.useEffect(() => {
    G(!0);
  }, []);
  function we() {
    if (!ee.current)
      return;
    let Ce = document.querySelector("[vaul-drawer-wrapper]"), Se = si(ee.current, b);
    it(ee.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})` }), it(R.current, { transition: `opacity ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, opacity: "1" }), r && Se && Se > 0 && _ && it(Ce, { borderRadius: `${ov}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${B()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${B()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` }, !0);
  }
  function De(Ce) {
    var Se;
    if (!z || !ee.current)
      return;
    ee.current.classList.remove(sv), oe.current = !1, K(!1), U.current = /* @__PURE__ */ new Date();
    let Be = si(ee.current, b);
    if (!ue(Ce.target, !1) || !Be || Number.isNaN(Be) || V.current === null)
      return;
    let Le = U.current.getTime() - V.current.getTime(), Xe = le.current - ($t(b) ? Ce.screenY : Ce.screenX), tt = Math.abs(Xe) / Le;
    if (tt > 0.05 && (P(!0), setTimeout(() => {
      P(!1);
    }, 200)), s) {
      ne({ draggedDistance: Xe * (b === "bottom" || b === "right" ? 1 : -1), closeDrawer: te, velocity: tt, dismissible: u }), a == null || a(Ce, !0);
      return;
    }
    if (b === "bottom" || b === "right" ? Xe > 0 : Xe < 0) {
      we(), a == null || a(Ce, !0);
      return;
    }
    if (tt > lw) {
      te(), a == null || a(Ce, !1);
      return;
    }
    let xt = Math.min((Se = ee.current.getBoundingClientRect().height) != null ? Se : 0, window.innerHeight);
    if (Be >= xt * c) {
      te(), a == null || a(Ce, !1);
      return;
    }
    a == null || a(Ce, !0), we();
  }
  I.useEffect(() => {
    _ && (it(document.documentElement, { scrollBehavior: "auto" }), O.current = /* @__PURE__ */ new Date(), Ke(!0));
  }, [_]), I.useEffect(() => {
    var Ce;
    if (ee.current && D) {
      let Se = (Ce = ee == null ? void 0 : ee.current) == null ? void 0 : Ce.querySelectorAll("*");
      Se == null || Se.forEach((Be) => {
        let Le = Be;
        (Le.scrollHeight > Le.clientHeight || Le.scrollWidth > Le.clientWidth) && Le.classList.add("vaul-scrollable");
      });
    }
  }, [D]);
  function Ke(Ce) {
    let Se = document.querySelector("[vaul-drawer-wrapper]");
    !Se || !r || (Ce ? (it(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), it(document.body, { background: "black" }, !0), it(Se, { borderRadius: `${ov}px`, overflow: "hidden", ...$t(b) ? { transform: `scale(${B()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${B()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })) : (ai(Se, "overflow"), ai(Se, "transform"), ai(Se, "borderRadius"), it(Se, { transitionProperty: "transform, border-radius", transitionDuration: `${rt.DURATION}s`, transitionTimingFunction: `cubic-bezier(${rt.EASE.join(",")})` })));
  }
  function et(Ce) {
    let Se = Ce ? (window.innerWidth - Fr) / window.innerWidth : 1, Be = Ce ? -Fr : 0;
    H.current && window.clearTimeout(H.current), it(ee.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: `scale(${Se}) translate3d(0, ${Be}px, 0)` }), !Ce && ee.current && (H.current = setTimeout(() => {
      let Le = si(ee.current, b);
      it(ee.current, { transition: "none", transform: $t(b) ? `translate3d(0, ${Le}px, 0)` : `translate3d(${Le}px, 0, 0)` });
    }, 500));
  }
  function yt(Ce, Se) {
    if (Se < 0)
      return;
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = (Be - Fr) / Be, Xe = Le + Se * (1 - Le), tt = -Fr + Se * Fr;
    it(ee.current, { transform: $t(b) ? `scale(${Xe}) translate3d(0, ${tt}px, 0)` : `scale(${Xe}) translate3d(${tt}px, 0, 0)`, transition: "none" });
  }
  function Qt(Ce, Se) {
    let Be = $t(b) ? window.innerHeight : window.innerWidth, Le = Se ? (Be - Fr) / Be : 1, Xe = Se ? -Fr : 0;
    Se && it(ee.current, { transition: `transform ${rt.DURATION}s cubic-bezier(${rt.EASE.join(",")})`, transform: $t(b) ? `scale(${Le}) translate3d(0, ${Xe}px, 0)` : `scale(${Le}) translate3d(${Xe}px, 0, 0)` });
  }
  return I.createElement(Ts, { modal: v, onOpenChange: (Ce) => {
    if (e !== void 0) {
      t == null || t(Ce);
      return;
    }
    Ce ? (S(!0), w(Ce)) : te();
  }, open: _ }, I.createElement(rw.Provider, { value: { visible: D, activeSnapPoint: ae, snapPoints: s, setActiveSnapPoint: A, drawerRef: ee, overlayRef: R, scaleBackground: Ke, onOpenChange: t, onPress: Y, setVisible: E, onRelease: De, onDrag: ce, dismissible: u, isOpen: _, shouldFade: Ie, closeDrawer: te, onNestedDrag: yt, onNestedOpenChange: et, onNestedRelease: Qt, keyboardIsOpen: be, openProp: e, modal: v, snapPointsOffset: ye, direction: b } }, n));
}
var fw = I.forwardRef(function({ children: e, ...t }, n) {
  let { overlayRef: r, snapPoints: o, onRelease: a, shouldFade: s, isOpen: i, visible: c } = dp(), l = iw(n, r), u = o && o.length > 0;
  return I.createElement(mo, { onMouseUp: a, ref: l, "vaul-drawer-visible": c ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": i && u ? "true" : "false", "vaul-snap-points-overlay": i && s ? "true" : "false", ...t });
});
fw.displayName = "Drawer.Overlay";
var pw = I.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: r, ...o }, a) {
  let { drawerRef: s, onPress: i, onRelease: c, onDrag: l, dismissible: u, keyboardIsOpen: f, snapPointsOffset: p, visible: h, closeDrawer: m, modal: v, openProp: g, onOpenChange: b, setVisible: y, direction: x } = dp(), _ = iw(a, s);
  return I.useEffect(() => {
    y(!0);
  }, []), I.createElement(vo, { onOpenAutoFocus: (w) => {
    var N;
    e ? e(w) : (w.preventDefault(), (N = s.current) == null || N.focus());
  }, onPointerDown: i, onPointerDownOutside: (w) => {
    if (t == null || t(w), !v || w.defaultPrevented) {
      w.preventDefault();
      return;
    }
    f.current && (f.current = !1), w.preventDefault(), b == null || b(!1), !(!u || g !== void 0) && m();
  }, onPointerMove: l, onPointerUp: c, ref: _, style: p && p.length > 0 ? { "--snap-point-height": `${p[0]}px`, ...r } : r, ...o, "vaul-drawer": "", "vaul-drawer-direction": x, "vaul-drawer-visible": h ? "true" : "false" });
});
pw.displayName = "Drawer.Content";
function dG({ onDrag: e, onOpenChange: t, ...n }) {
  let { onNestedDrag: r, onNestedOpenChange: o, onNestedRelease: a } = dp();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return I.createElement(dw, { nested: !0, onClose: () => {
    o(!1);
  }, onDrag: (s, i) => {
    r(s, i), e == null || e(s, i);
  }, onOpenChange: (s) => {
    s && o(s), t == null || t(s);
  }, onRelease: a, ...n });
}
var On = { Root: dw, NestedRoot: dG, Content: pw, Overlay: fw, Trigger: Ac, Portal: js, Close: go, Title: oa, Description: aa };
const fG = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ d.jsx(
  On.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
fG.displayName = "Drawer";
const Mq = On.Trigger, pG = On.Portal, Dq = On.Close, hw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  On.Overlay,
  {
    ref: n,
    className: k("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
hw.displayName = On.Overlay.displayName;
const hG = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsxs(pG, { children: [
  /* @__PURE__ */ d.jsx(hw, {}),
  /* @__PURE__ */ d.jsxs(
    On.Content,
    {
      ref: r,
      className: k(
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
hG.displayName = "DrawerContent";
const mG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
mG.displayName = "DrawerHeader";
const vG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: k("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
vG.displayName = "DrawerFooter";
const gG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  On.Title,
  {
    ref: n,
    className: k(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
gG.displayName = On.Title.displayName;
const bG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  On.Description,
  {
    ref: n,
    className: k("text-sm text-muted-foreground", e),
    ...t
  }
));
bG.displayName = On.Description.displayName;
var yG = Object.defineProperty, xG = Object.defineProperties, wG = Object.getOwnPropertyDescriptors, ac = Object.getOwnPropertySymbols, mw = Object.prototype.hasOwnProperty, vw = Object.prototype.propertyIsEnumerable, iv = (e, t, n) => t in e ? yG(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $G = (e, t) => {
  for (var n in t || (t = {}))
    mw.call(t, n) && iv(e, n, t[n]);
  if (ac)
    for (var n of ac(t))
      vw.call(t, n) && iv(e, n, t[n]);
  return e;
}, _G = (e, t) => xG(e, wG(t)), CG = (e, t) => {
  var n = {};
  for (var r in e)
    mw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ac)
    for (var r of ac(e))
      t.indexOf(r) < 0 && vw.call(e, r) && (n[r] = e[r]);
  return n;
}, SG = "^\\d+$";
function NG(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function EG(e) {
  let t = C.useRef();
  return C.useEffect(() => {
    t.current = e;
  }), t.current;
}
var PG = 18, gw = 40, OG = `${gw}px`, TG = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function jG({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let o = C.useRef({ done: !1, refocused: !1 }), [a, s] = C.useState(!1), [i, c] = C.useState(!1), [l, u] = C.useState(!1), f = C.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && i, [a, i, n]), p = C.useCallback(() => {
    let h = e.current, m = t.current;
    if (!h || !m || l || n === "none")
      return;
    let v = h, g = v.getBoundingClientRect().left + v.offsetWidth, b = v.getBoundingClientRect().top + v.offsetHeight / 2, y = g - PG, x = b;
    if (!(document.querySelectorAll(TG).length === 0 && document.elementFromPoint(y, x) === h) && (s(!0), u(!0), !o.current.refocused && document.activeElement === m)) {
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
      c(g >= gw);
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
  }, [t, r, n, p]), { hasPWMBadge: a, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: OG };
}
var bw = C.createContext({}), yw = C.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i = SG, inputMode: c = "numeric", onComplete: l, pushPasswordManagerStrategy: u = "increase-width", containerClassName: f, noScriptCSSFallback: p = kG, render: h, children: m } = n, v = CG(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), g, b, y, x, _;
  let [w, N] = C.useState(typeof v.defaultValue == "string" ? v.defaultValue : ""), S = r ?? w, D = EG(S), E = C.useCallback((A) => {
    o == null || o(A), N(A);
  }, [o]), W = C.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), G = C.useRef(null), z = C.useRef(null), K = C.useRef({ value: S, onChange: E, isIOS: typeof window < "u" && ((b = (g = window == null ? void 0 : window.CSS) == null ? void 0 : g.supports) == null ? void 0 : b.call(g, "-webkit-touch-callout", "none")) }), L = C.useRef({ prev: [(y = G.current) == null ? void 0 : y.selectionStart, (x = G.current) == null ? void 0 : x.selectionEnd, (_ = G.current) == null ? void 0 : _.selectionDirection] });
  C.useImperativeHandle(t, () => G.current, []), C.useEffect(() => {
    let A = G.current, ne = z.current;
    if (!A || !ne)
      return;
    K.current.value !== A.value && K.current.onChange(A.value), L.current.prev = [A.selectionStart, A.selectionEnd, A.selectionDirection];
    function ye() {
      if (document.activeElement !== A) {
        Z(null), H(null);
        return;
      }
      let Oe = A.selectionStart, T = A.selectionEnd, B = A.selectionDirection, Y = A.maxLength, ue = A.value, ce = L.current.prev, te = -1, we = -1, De;
      if (ue.length !== 0 && Oe !== null && T !== null) {
        let Qt = Oe === T, Ce = Oe === ue.length && ue.length < Y;
        if (Qt && !Ce) {
          let Se = Oe;
          if (Se === 0)
            te = 0, we = 1, De = "forward";
          else if (Se === Y)
            te = Se - 1, we = Se, De = "backward";
          else if (Y > 1 && ue.length > 1) {
            let Be = 0;
            if (ce[0] !== null && ce[1] !== null) {
              De = Se < ce[1] ? "backward" : "forward";
              let Le = ce[0] === ce[1] && ce[0] < Y;
              De === "backward" && !Le && (Be = -1);
            }
            te = Be + Se, we = Be + Se + 1;
          }
        }
        te !== -1 && we !== -1 && te !== we && G.current.setSelectionRange(te, we, De);
      }
      let Ke = te !== -1 ? te : Oe, et = we !== -1 ? we : T, yt = De ?? B;
      Z(Ke), H(et), L.current.prev = [Ke, et, yt];
    }
    if (document.addEventListener("selectionchange", ye, { capture: !0 }), ye(), document.activeElement === A && V(!0), !document.getElementById("input-otp-style")) {
      let Oe = document.createElement("style");
      if (Oe.id = "input-otp-style", document.head.appendChild(Oe), Oe.sheet) {
        let T = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        _a(Oe.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), _a(Oe.sheet, `[data-input-otp]:autofill { ${T} }`), _a(Oe.sheet, `[data-input-otp]:-webkit-autofill { ${T} }`), _a(Oe.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), _a(Oe.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let Pe = () => {
      ne && ne.style.setProperty("--root-height", `${A.clientHeight}px`);
    };
    Pe();
    let Ie = new ResizeObserver(Pe);
    return Ie.observe(A), () => {
      document.removeEventListener("selectionchange", ye, { capture: !0 }), Ie.disconnect();
    };
  }, []);
  let [P, R] = C.useState(!1), [O, V] = C.useState(!1), [U, Z] = C.useState(null), [oe, H] = C.useState(null);
  C.useEffect(() => {
    NG(() => {
      var A, ne, ye, Pe;
      (A = G.current) == null || A.dispatchEvent(new Event("input"));
      let Ie = (ne = G.current) == null ? void 0 : ne.selectionStart, Oe = (ye = G.current) == null ? void 0 : ye.selectionEnd, T = (Pe = G.current) == null ? void 0 : Pe.selectionDirection;
      Ie !== null && Oe !== null && (Z(Ie), H(Oe), L.current.prev = [Ie, Oe, T]);
    });
  }, [S, O]), C.useEffect(() => {
    D !== void 0 && S !== D && D.length < a && S.length === a && (l == null || l(S));
  }, [a, l, D, S]);
  let le = jG({ containerRef: z, inputRef: G, pushPasswordManagerStrategy: u, isFocused: O }), be = C.useCallback((A) => {
    let ne = A.currentTarget.value.slice(0, a);
    if (ne.length > 0 && W && !W.test(ne)) {
      A.preventDefault();
      return;
    }
    typeof D == "string" && ne.length < D.length && document.dispatchEvent(new Event("selectionchange")), E(ne);
  }, [a, E, D, W]), pe = C.useCallback(() => {
    var A;
    if (G.current) {
      let ne = Math.min(G.current.value.length, a - 1), ye = G.current.value.length;
      (A = G.current) == null || A.setSelectionRange(ne, ye), Z(ne), H(ye);
    }
    V(!0);
  }, [a]), ee = C.useCallback((A) => {
    var ne, ye;
    let Pe = G.current;
    if (!K.current.isIOS || !A.clipboardData || !Pe)
      return;
    let Ie = A.clipboardData.getData("text/plain");
    A.preventDefault();
    let Oe = (ne = G.current) == null ? void 0 : ne.selectionStart, T = (ye = G.current) == null ? void 0 : ye.selectionEnd, B = (Oe !== T ? S.slice(0, Oe) + Ie + S.slice(T) : S.slice(0, Oe) + Ie + S.slice(Oe)).slice(0, a);
    if (B.length > 0 && W && !W.test(B))
      return;
    Pe.value = B, E(B);
    let Y = Math.min(B.length, a - 1), ue = B.length;
    Pe.setSelectionRange(Y, ue), Z(Y), H(ue);
  }, [a, E, W, S]), re = C.useMemo(() => ({ position: "relative", cursor: v.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [v.disabled]), me = C.useMemo(() => ({ position: "absolute", inset: 0, width: le.willPushPWMBadge ? `calc(100% + ${le.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: le.willPushPWMBadge ? `inset(0 ${le.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [le.PWM_BADGE_SPACE_WIDTH, le.willPushPWMBadge, s]), _e = C.useMemo(() => C.createElement("input", _G($G({ autoComplete: v.autoComplete || "one-time-code" }, v), { "data-input-otp": !0, "data-input-otp-mss": U, "data-input-otp-mse": oe, inputMode: c, pattern: W == null ? void 0 : W.source, style: me, maxLength: a, value: S, ref: G, onPaste: (A) => {
    var ne;
    ee(A), (ne = v.onPaste) == null || ne.call(v, A);
  }, onChange: be, onMouseOver: (A) => {
    var ne;
    R(!0), (ne = v.onMouseOver) == null || ne.call(v, A);
  }, onMouseLeave: (A) => {
    var ne;
    R(!1), (ne = v.onMouseLeave) == null || ne.call(v, A);
  }, onFocus: (A) => {
    var ne;
    pe(), (ne = v.onFocus) == null || ne.call(v, A);
  }, onBlur: (A) => {
    var ne;
    V(!1), (ne = v.onBlur) == null || ne.call(v, A);
  } })), [be, pe, ee, c, me, a, oe, U, v, W == null ? void 0 : W.source, S]), ae = C.useMemo(() => ({ slots: Array.from({ length: a }).map((A, ne) => {
    let ye = O && U !== null && oe !== null && (U === oe && ne === U || ne >= U && ne < oe), Pe = S[ne] !== void 0 ? S[ne] : null;
    return { char: Pe, isActive: ye, hasFakeCaret: ye && Pe === null };
  }), isFocused: O, isHovering: !v.disabled && P }), [O, P, a, oe, U, v.disabled, S]), fe = C.useMemo(() => h ? h(ae) : C.createElement(bw.Provider, { value: ae }, m), [m, ae, h]);
  return C.createElement(C.Fragment, null, p !== null && C.createElement("noscript", null, C.createElement("style", null, p)), C.createElement("div", { ref: z, "data-input-otp-container": !0, style: re, className: f }, fe, C.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, _e)));
});
yw.displayName = "Input";
function _a(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var kG = `
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
const MG = C.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  yw,
  {
    ref: r,
    containerClassName: k(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: k("disabled:cursor-not-allowed", e),
    ...n
  }
));
MG.displayName = "InputOTP";
const DG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("div", { ref: n, className: k("flex items-center", e), ...t }));
DG.displayName = "InputOTPGroup";
const AG = C.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = C.useContext(bw), { char: a, hasFakeCaret: s, isActive: i } = o.slots[e];
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: r,
      className: k(
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
AG.displayName = "InputOTPSlot";
const RG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ d.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ d.jsx(y$, {}) }));
RG.displayName = "InputOTPSeparator";
const IG = C.forwardRef(({ ...e }, t) => /* @__PURE__ */ d.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
IG.displayName = "Breadcrumb";
const LG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "ol",
  {
    ref: n,
    className: k(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
LG.displayName = "BreadcrumbList";
const FG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "li",
  {
    ref: n,
    className: k("inline-flex items-center gap-1.5", e),
    ...t
  }
));
FG.displayName = "BreadcrumbItem";
const BG = C.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? gn : "a";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      ref: r,
      className: k("transition-colors hover:text-foreground", t),
      ...n
    }
  );
});
BG.displayName = "BreadcrumbLink";
const VG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: k("font-normal text-foreground", e),
    ...t
  }
));
VG.displayName = "BreadcrumbPage";
const zG = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: k("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ d.jsx(Tr, {})
  }
);
zG.displayName = "BreadcrumbSeparator";
const WG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: k("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(xv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
WG.displayName = "BreadcrumbElipssis";
const UG = ({ className: e, ...t }) => /* @__PURE__ */ d.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: k("mx-auto flex w-full justify-center", e),
    ...t
  }
);
UG.displayName = "Pagination";
const HG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "ul",
  {
    ref: n,
    className: k("flex flex-row items-center gap-1", e),
    ...t
  }
));
HG.displayName = "PaginationContent";
const KG = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx("li", { ref: n, className: k("", e), ...t }));
KG.displayName = "PaginationItem";
const pp = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ d.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: k(
      yr({
        variant: t ? "outline" : "ghost",
        size: n
      }),
      e
    ),
    ...r
  }
);
pp.displayName = "PaginationLink";
const GG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  pp,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: k("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(cc, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { children: "Previous" })
    ]
  }
);
GG.displayName = "PaginationPrevious";
const YG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  pp,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: k("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx("span", { children: "Next" }),
      /* @__PURE__ */ d.jsx(Tr, { className: "h-4 w-4" })
    ]
  }
);
YG.displayName = "PaginationNext";
const qG = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: k("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ d.jsx(xv, { className: "h-4 w-4" }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
qG.displayName = "PaginationEllipsis";
const Aq = ({ children: e }) => /* @__PURE__ */ d.jsx("div", { className: "app-layout", children: e });
export {
  zY as Accordion,
  GF as AccordionContent,
  HF as AccordionItem,
  KF as AccordionTrigger,
  FY as AlertDialog,
  bF as AlertDialogAction,
  yF as AlertDialogCancel,
  pF as AlertDialogContent,
  gF as AlertDialogDescription,
  mF as AlertDialogFooter,
  hF as AlertDialogHeader,
  V0 as AlertDialogOverlay,
  fF as AlertDialogPortal,
  vF as AlertDialogTitle,
  BY as AlertDialogTrigger,
  Aq as AppLayout,
  MY as AspectRatio,
  To as Avatar,
  jo as AvatarFallback,
  Gr as AvatarImage,
  At as Badge,
  Pq as BottomNavigation,
  IG as Breadcrumb,
  WG as BreadcrumbEllipsis,
  FG as BreadcrumbItem,
  BG as BreadcrumbLink,
  LG as BreadcrumbList,
  VG as BreadcrumbPage,
  zG as BreadcrumbSeparator,
  Ve as Button,
  pa as CI_TYPES,
  lC as Calendar,
  Uy as Card,
  r9 as CardContent,
  n9 as CardDescription,
  o9 as CardFooter,
  e9 as CardHeader,
  t9 as CardTitle,
  zK as Carousel,
  WK as CarouselContent,
  UK as CarouselItem,
  KK as CarouselNext,
  HK as CarouselPrevious,
  wA as ChartContainer,
  cY as ChartLegend,
  CA as ChartLegendContent,
  $A as ChartStyle,
  iY as ChartTooltip,
  _A as ChartTooltipContent,
  Yy as Checkbox,
  _q as CodeVerification,
  WY as Collapsible,
  HY as CollapsibleContent,
  UY as CollapsibleTrigger,
  BH as ComboBox,
  Eq as ComboxCheckbox,
  or as Command,
  kY as CommandDialog,
  Cr as CommandEmpty,
  $n as CommandGroup,
  _r as CommandInput,
  Gt as CommandItem,
  la as CommandList,
  Ka as CommandSeparator,
  gL as CommandShortcut,
  dY as ContextMenu,
  e8 as ContextMenuCheckboxItem,
  Q7 as ContextMenuContent,
  pY as ContextMenuGroup,
  J7 as ContextMenuItem,
  n8 as ContextMenuLabel,
  hY as ContextMenuPortal,
  vY as ContextMenuRadioGroup,
  t8 as ContextMenuRadioItem,
  r8 as ContextMenuSeparator,
  o8 as ContextMenuShortcut,
  mY as ContextMenuSub,
  X7 as ContextMenuSubContent,
  Z7 as ContextMenuSubTrigger,
  fY as ContextMenuTrigger,
  kq as D4TCardsList,
  Z1 as D4TImage,
  xq as D4TTable,
  $y as Dialog,
  yY as DialogClose,
  Nf as DialogContent,
  G8 as DialogDescription,
  H8 as DialogFooter,
  U8 as DialogHeader,
  _y as DialogOverlay,
  W8 as DialogPortal,
  K8 as DialogTitle,
  bY as DialogTrigger,
  fG as Drawer,
  Dq as DrawerClose,
  hG as DrawerContent,
  bG as DrawerDescription,
  vG as DrawerFooter,
  mG as DrawerHeader,
  hw as DrawerOverlay,
  pG as DrawerPortal,
  gG as DrawerTitle,
  Mq as DrawerTrigger,
  NY as DropdownMenu,
  V9 as DropdownMenuCheckboxItem,
  F9 as DropdownMenuContent,
  PY as DropdownMenuGroup,
  B9 as DropdownMenuItem,
  W9 as DropdownMenuLabel,
  OY as DropdownMenuPortal,
  jY as DropdownMenuRadioGroup,
  z9 as DropdownMenuRadioItem,
  U9 as DropdownMenuSeparator,
  H9 as DropdownMenuShortcut,
  TY as DropdownMenuSub,
  L9 as DropdownMenuSubContent,
  I9 as DropdownMenuSubTrigger,
  EY as DropdownMenuTrigger,
  fy as Form,
  Os as FormControl,
  ra as FormDescription,
  po as FormField,
  Ar as FormItem,
  ho as FormLabel,
  C8 as FormMessage,
  Nq as GenericCombobox,
  wq as GenericSelect,
  YY as HoverCard,
  aB as HoverCardContent,
  qY as HoverCardTrigger,
  Ef as Input,
  MG as InputOTP,
  DG as InputOTPGroup,
  RG as InputOTPSeparator,
  AG as InputOTPSlot,
  xY as InputPID,
  za as InputUI,
  Hn as Label,
  ZY as LoaderDots,
  jB as Menubar,
  IB as MenubarCheckboxItem,
  AB as MenubarContent,
  JY as MenubarGroup,
  RB as MenubarItem,
  FB as MenubarLabel,
  QY as MenubarMenu,
  eq as MenubarPortal,
  nq as MenubarRadioGroup,
  LB as MenubarRadioItem,
  BB as MenubarSeparator,
  VB as MenubarShortcut,
  tq as MenubarSub,
  DB as MenubarSubContent,
  MB as MenubarSubTrigger,
  kB as MenubarTrigger,
  Sq as MultipleImages,
  S1 as NavLink,
  MW as NavLinkNested,
  hV as NavigationMenu,
  bV as NavigationMenuContent,
  yV as NavigationMenuIndicator,
  oq as NavigationMenuItem,
  aq as NavigationMenuLink,
  mV as NavigationMenuList,
  gV as NavigationMenuTrigger,
  Ax as NavigationMenuViewport,
  sl as PHONE_LINE_CODES,
  UG as Pagination,
  HG as PaginationContent,
  qG as PaginationEllipsis,
  KG as PaginationItem,
  pp as PaginationLink,
  YG as PaginationNext,
  GG as PaginationPrevious,
  nr as Popover,
  Ln as PopoverContent,
  rr as PopoverTrigger,
  OV as Progress,
  KV as RadioGroup,
  GV as RadioGroupItem,
  LL as ScrollArea,
  O0 as ScrollBar,
  jf as Select,
  Bc as SelectContent,
  XI as SelectGroup,
  Vc as SelectItem,
  QI as SelectLabel,
  JI as SelectSeparator,
  Fc as SelectTrigger,
  kf as SelectValue,
  ks as Separator,
  AY as Sheet,
  IY as SheetClose,
  VL as SheetContent,
  HL as SheetDescription,
  WL as SheetFooter,
  zL as SheetHeader,
  T0 as SheetOverlay,
  FL as SheetPortal,
  UL as SheetTitle,
  RY as SheetTrigger,
  mq as Sidebar,
  vq as SidebarContent,
  kW as SidebarFooter,
  _W as SidebarHeader,
  Ot as Skeleton,
  gz as Slider,
  md as Spinner,
  $q as SwatchesPicker,
  lW as Switch,
  k0 as TableBody,
  GL as TableCaption,
  If as TableCell,
  KL as TableFooter,
  M0 as TableHead,
  j0 as TableHeader,
  Hc as TableRow,
  Rf as TableUI,
  uq as Tabs,
  Tz as TabsContent,
  Pz as TabsList,
  Oz as TabsTrigger,
  $Y as TextArea,
  Ty as TextareaUI,
  Mz as Toggle,
  jW as ToggleTheme,
  to as Tooltip,
  Sr as TooltipContent,
  eo as TooltipProvider,
  no as TooltipTrigger,
  Cq as UploadImage,
  wC as badgeVariants,
  yr as buttonVariants,
  ua as camelToSnake,
  k as cn,
  gi as convertBytes,
  al as convertHexToRGBA,
  QG as fetcher,
  tY as formatCI,
  vm as formatCITypes,
  aY as formatCodePhoneLines,
  Oq as formatListPagination,
  gq as formatPagination,
  oY as formatPhone,
  rY as formatPhoneNumber,
  nY as formatRIF,
  zm as generateUUID,
  Xl as generateUUIDToList,
  eY as getMultiOpacityColor,
  Tq as initialListPagination,
  bq as initialPagination,
  yq as insertColumn,
  jq as insertColumnList,
  qH as listCamelToSnake,
  vV as navigationMenuTriggerStyle,
  JG as simulateFetch,
  kz as toggleVariants,
  Dc as useFormField,
  Qc as useSidebar
};
//# sourceMappingURL=index.es.js.map
