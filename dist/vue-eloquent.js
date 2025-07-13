var xu = Object.defineProperty;
var ku = (e, t, r) => t in e ? xu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var A = (e, t, r) => ku(e, typeof t != "symbol" ? t + "" : t, r);
import { getCurrentInstance as Lu, ref as te, onBeforeMount as Fu, watch as Ve, isRef as pn, reactive as H, onBeforeUnmount as ho, computed as x, unref as D, isReactive as Nu, isReadonly as Uu, inject as ss, provide as as, nextTick as _n } from "vue";
let pe;
function gp(e) {
  if (!e) throw new Error("Client is required when creating Broadcast");
  pe = e;
}
var Je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var At, is;
function Te() {
  if (is) return At;
  is = 1;
  var e = Array.isArray;
  return At = e, At;
}
var Rt, os;
function po() {
  if (os) return Rt;
  os = 1;
  var e = typeof Je == "object" && Je && Je.Object === Object && Je;
  return Rt = e, Rt;
}
var Tt, us;
function ot() {
  if (us) return Tt;
  us = 1;
  var e = po(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Tt = r, Tt;
}
var Ct, ls;
function Ln() {
  if (ls) return Ct;
  ls = 1;
  var e = ot(), t = e.Symbol;
  return Ct = t, Ct;
}
var Pt, cs;
function Bu() {
  if (cs) return Pt;
  cs = 1;
  var e = Ln(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, s = e ? e.toStringTag : void 0;
  function a(i) {
    var o = r.call(i, s), l = i[s];
    try {
      i[s] = void 0;
      var u = !0;
    } catch {
    }
    var f = n.call(i);
    return u && (o ? i[s] = l : delete i[s]), f;
  }
  return Pt = a, Pt;
}
var Dt, ds;
function Vu() {
  if (ds) return Dt;
  ds = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Dt = r, Dt;
}
var It, fs;
function ut() {
  if (fs) return It;
  fs = 1;
  var e = Ln(), t = Bu(), r = Vu(), n = "[object Null]", s = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function i(o) {
    return o == null ? o === void 0 ? s : n : a && a in Object(o) ? t(o) : r(o);
  }
  return It = i, It;
}
var xt, hs;
function lt() {
  if (hs) return xt;
  hs = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return xt = e, xt;
}
var kt, ps;
function Fn() {
  if (ps) return kt;
  ps = 1;
  var e = ut(), t = lt(), r = "[object Symbol]";
  function n(s) {
    return typeof s == "symbol" || t(s) && e(s) == r;
  }
  return kt = n, kt;
}
var Lt, _s;
function $u() {
  if (_s) return Lt;
  _s = 1;
  var e = Te(), t = Fn(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function s(a, i) {
    if (e(a))
      return !1;
    var o = typeof a;
    return o == "number" || o == "symbol" || o == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || i != null && a in Object(i);
  }
  return Lt = s, Lt;
}
var Ft, gs;
function Nn() {
  if (gs) return Ft;
  gs = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Ft = e, Ft;
}
var Nt, ms;
function _o() {
  if (ms) return Nt;
  ms = 1;
  var e = ut(), t = Nn(), r = "[object AsyncFunction]", n = "[object Function]", s = "[object GeneratorFunction]", a = "[object Proxy]";
  function i(o) {
    if (!t(o))
      return !1;
    var l = e(o);
    return l == n || l == s || l == r || l == a;
  }
  return Nt = i, Nt;
}
var Ut, Es;
function qu() {
  if (Es) return Ut;
  Es = 1;
  var e = ot(), t = e["__core-js_shared__"];
  return Ut = t, Ut;
}
var Bt, vs;
function Mu() {
  if (vs) return Bt;
  vs = 1;
  var e = qu(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return Bt = r, Bt;
}
var Vt, ys;
function ju() {
  if (ys) return Vt;
  ys = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Vt = r, Vt;
}
var $t, bs;
function Hu() {
  if (bs) return $t;
  bs = 1;
  var e = _o(), t = Mu(), r = Nn(), n = ju(), s = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, i = Function.prototype, o = Object.prototype, l = i.toString, u = o.hasOwnProperty, f = RegExp(
    "^" + l.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function d(E) {
    if (!r(E) || t(E))
      return !1;
    var _ = e(E) ? f : a;
    return _.test(n(E));
  }
  return $t = d, $t;
}
var qt, Ss;
function Ku() {
  if (Ss) return qt;
  Ss = 1;
  function e(t, r) {
    return t == null ? void 0 : t[r];
  }
  return qt = e, qt;
}
var Mt, Os;
function Un() {
  if (Os) return Mt;
  Os = 1;
  var e = Hu(), t = Ku();
  function r(n, s) {
    var a = t(n, s);
    return e(a) ? a : void 0;
  }
  return Mt = r, Mt;
}
var jt, ws;
function ct() {
  if (ws) return jt;
  ws = 1;
  var e = Un(), t = e(Object, "create");
  return jt = t, jt;
}
var Ht, As;
function zu() {
  if (As) return Ht;
  As = 1;
  var e = ct();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ht = t, Ht;
}
var Kt, Rs;
function Gu() {
  if (Rs) return Kt;
  Rs = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Kt = e, Kt;
}
var zt, Ts;
function Wu() {
  if (Ts) return zt;
  Ts = 1;
  var e = ct(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function s(a) {
    var i = this.__data__;
    if (e) {
      var o = i[a];
      return o === t ? void 0 : o;
    }
    return n.call(i, a) ? i[a] : void 0;
  }
  return zt = s, zt;
}
var Gt, Cs;
function Ju() {
  if (Cs) return Gt;
  Cs = 1;
  var e = ct(), t = Object.prototype, r = t.hasOwnProperty;
  function n(s) {
    var a = this.__data__;
    return e ? a[s] !== void 0 : r.call(a, s);
  }
  return Gt = n, Gt;
}
var Wt, Ps;
function Yu() {
  if (Ps) return Wt;
  Ps = 1;
  var e = ct(), t = "__lodash_hash_undefined__";
  function r(n, s) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && s === void 0 ? t : s, this;
  }
  return Wt = r, Wt;
}
var Jt, Ds;
function Xu() {
  if (Ds) return Jt;
  Ds = 1;
  var e = zu(), t = Gu(), r = Wu(), n = Ju(), s = Yu();
  function a(i) {
    var o = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++o < l; ) {
      var u = i[o];
      this.set(u[0], u[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = s, Jt = a, Jt;
}
var Yt, Is;
function Zu() {
  if (Is) return Yt;
  Is = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Yt = e, Yt;
}
var Xt, xs;
function go() {
  if (xs) return Xt;
  xs = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Xt = e, Xt;
}
var Zt, ks;
function dt() {
  if (ks) return Zt;
  ks = 1;
  var e = go();
  function t(r, n) {
    for (var s = r.length; s--; )
      if (e(r[s][0], n))
        return s;
    return -1;
  }
  return Zt = t, Zt;
}
var Qt, Ls;
function Qu() {
  if (Ls) return Qt;
  Ls = 1;
  var e = dt(), t = Array.prototype, r = t.splice;
  function n(s) {
    var a = this.__data__, i = e(a, s);
    if (i < 0)
      return !1;
    var o = a.length - 1;
    return i == o ? a.pop() : r.call(a, i, 1), --this.size, !0;
  }
  return Qt = n, Qt;
}
var er, Fs;
function el() {
  if (Fs) return er;
  Fs = 1;
  var e = dt();
  function t(r) {
    var n = this.__data__, s = e(n, r);
    return s < 0 ? void 0 : n[s][1];
  }
  return er = t, er;
}
var tr, Ns;
function tl() {
  if (Ns) return tr;
  Ns = 1;
  var e = dt();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return tr = t, tr;
}
var rr, Us;
function rl() {
  if (Us) return rr;
  Us = 1;
  var e = dt();
  function t(r, n) {
    var s = this.__data__, a = e(s, r);
    return a < 0 ? (++this.size, s.push([r, n])) : s[a][1] = n, this;
  }
  return rr = t, rr;
}
var nr, Bs;
function nl() {
  if (Bs) return nr;
  Bs = 1;
  var e = Zu(), t = Qu(), r = el(), n = tl(), s = rl();
  function a(i) {
    var o = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++o < l; ) {
      var u = i[o];
      this.set(u[0], u[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = s, nr = a, nr;
}
var sr, Vs;
function sl() {
  if (Vs) return sr;
  Vs = 1;
  var e = Un(), t = ot(), r = e(t, "Map");
  return sr = r, sr;
}
var ar, $s;
function al() {
  if ($s) return ar;
  $s = 1;
  var e = Xu(), t = nl(), r = sl();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return ar = n, ar;
}
var ir, qs;
function il() {
  if (qs) return ir;
  qs = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return ir = e, ir;
}
var or, Ms;
function ft() {
  if (Ms) return or;
  Ms = 1;
  var e = il();
  function t(r, n) {
    var s = r.__data__;
    return e(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
  }
  return or = t, or;
}
var ur, js;
function ol() {
  if (js) return ur;
  js = 1;
  var e = ft();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return ur = t, ur;
}
var lr, Hs;
function ul() {
  if (Hs) return lr;
  Hs = 1;
  var e = ft();
  function t(r) {
    return e(this, r).get(r);
  }
  return lr = t, lr;
}
var cr, Ks;
function ll() {
  if (Ks) return cr;
  Ks = 1;
  var e = ft();
  function t(r) {
    return e(this, r).has(r);
  }
  return cr = t, cr;
}
var dr, zs;
function cl() {
  if (zs) return dr;
  zs = 1;
  var e = ft();
  function t(r, n) {
    var s = e(this, r), a = s.size;
    return s.set(r, n), this.size += s.size == a ? 0 : 1, this;
  }
  return dr = t, dr;
}
var fr, Gs;
function dl() {
  if (Gs) return fr;
  Gs = 1;
  var e = al(), t = ol(), r = ul(), n = ll(), s = cl();
  function a(i) {
    var o = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++o < l; ) {
      var u = i[o];
      this.set(u[0], u[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = s, fr = a, fr;
}
var hr, Ws;
function fl() {
  if (Ws) return hr;
  Ws = 1;
  var e = dl(), t = "Expected a function";
  function r(n, s) {
    if (typeof n != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var a = function() {
      var i = arguments, o = s ? s.apply(this, i) : i[0], l = a.cache;
      if (l.has(o))
        return l.get(o);
      var u = n.apply(this, i);
      return a.cache = l.set(o, u) || l, u;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, hr = r, hr;
}
var pr, Js;
function hl() {
  if (Js) return pr;
  Js = 1;
  var e = fl(), t = 500;
  function r(n) {
    var s = e(n, function(i) {
      return a.size === t && a.clear(), i;
    }), a = s.cache;
    return s;
  }
  return pr = r, pr;
}
var _r, Ys;
function pl() {
  if (Ys) return _r;
  Ys = 1;
  var e = hl(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(s) {
    var a = [];
    return s.charCodeAt(0) === 46 && a.push(""), s.replace(t, function(i, o, l, u) {
      a.push(l ? u.replace(r, "$1") : o || i);
    }), a;
  });
  return _r = n, _r;
}
var gr, Xs;
function _l() {
  if (Xs) return gr;
  Xs = 1;
  function e(t, r) {
    for (var n = -1, s = t == null ? 0 : t.length, a = Array(s); ++n < s; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return gr = e, gr;
}
var mr, Zs;
function gl() {
  if (Zs) return mr;
  Zs = 1;
  var e = Ln(), t = _l(), r = Te(), n = Fn(), s = 1 / 0, a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function o(l) {
    if (typeof l == "string")
      return l;
    if (r(l))
      return t(l, o) + "";
    if (n(l))
      return i ? i.call(l) : "";
    var u = l + "";
    return u == "0" && 1 / l == -s ? "-0" : u;
  }
  return mr = o, mr;
}
var Er, Qs;
function ml() {
  if (Qs) return Er;
  Qs = 1;
  var e = gl();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Er = t, Er;
}
var vr, ea;
function Bn() {
  if (ea) return vr;
  ea = 1;
  var e = Te(), t = $u(), r = pl(), n = ml();
  function s(a, i) {
    return e(a) ? a : t(a, i) ? [a] : r(n(a));
  }
  return vr = s, vr;
}
var yr, ta;
function Vn() {
  if (ta) return yr;
  ta = 1;
  var e = Fn(), t = 1 / 0;
  function r(n) {
    if (typeof n == "string" || e(n))
      return n;
    var s = n + "";
    return s == "0" && 1 / n == -t ? "-0" : s;
  }
  return yr = r, yr;
}
var br, ra;
function El() {
  if (ra) return br;
  ra = 1;
  var e = Bn(), t = Vn();
  function r(n, s) {
    s = e(s, n);
    for (var a = 0, i = s.length; n != null && a < i; )
      n = n[t(s[a++])];
    return a && a == i ? n : void 0;
  }
  return br = r, br;
}
var Sr, na;
function vl() {
  if (na) return Sr;
  na = 1;
  var e = El();
  function t(r, n, s) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? s : a;
  }
  return Sr = t, Sr;
}
var yl = vl();
const bl = /* @__PURE__ */ Ke(yl);
var Or, sa;
function Sl() {
  if (sa) return Or;
  sa = 1;
  var e = Object.prototype, t = e.hasOwnProperty;
  function r(n, s) {
    return n != null && t.call(n, s);
  }
  return Or = r, Or;
}
var wr, aa;
function Ol() {
  if (aa) return wr;
  aa = 1;
  var e = ut(), t = lt(), r = "[object Arguments]";
  function n(s) {
    return t(s) && e(s) == r;
  }
  return wr = n, wr;
}
var Ar, ia;
function mo() {
  if (ia) return Ar;
  ia = 1;
  var e = Ol(), t = lt(), r = Object.prototype, n = r.hasOwnProperty, s = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(i) {
    return t(i) && n.call(i, "callee") && !s.call(i, "callee");
  };
  return Ar = a, Ar;
}
var Rr, oa;
function $n() {
  if (oa) return Rr;
  oa = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, s) {
    var a = typeof n;
    return s = s ?? e, !!s && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < s;
  }
  return Rr = r, Rr;
}
var Tr, ua;
function qn() {
  if (ua) return Tr;
  ua = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Tr = t, Tr;
}
var Cr, la;
function wl() {
  if (la) return Cr;
  la = 1;
  var e = Bn(), t = mo(), r = Te(), n = $n(), s = qn(), a = Vn();
  function i(o, l, u) {
    l = e(l, o);
    for (var f = -1, d = l.length, E = !1; ++f < d; ) {
      var _ = a(l[f]);
      if (!(E = o != null && u(o, _)))
        break;
      o = o[_];
    }
    return E || ++f != d ? E : (d = o == null ? 0 : o.length, !!d && s(d) && n(_, d) && (r(o) || t(o)));
  }
  return Cr = i, Cr;
}
var Pr, ca;
function Al() {
  if (ca) return Pr;
  ca = 1;
  var e = Sl(), t = wl();
  function r(n, s) {
    return n != null && t(n, s, e);
  }
  return Pr = r, Pr;
}
var Rl = Al();
const Tl = /* @__PURE__ */ Ke(Rl);
var Dr, da;
function Cl() {
  if (da) return Dr;
  da = 1;
  var e = Un(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return Dr = t, Dr;
}
var Ir, fa;
function Pl() {
  if (fa) return Ir;
  fa = 1;
  var e = Cl();
  function t(r, n, s) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: s,
      writable: !0
    }) : r[n] = s;
  }
  return Ir = t, Ir;
}
var xr, ha;
function Dl() {
  if (ha) return xr;
  ha = 1;
  var e = Pl(), t = go(), r = Object.prototype, n = r.hasOwnProperty;
  function s(a, i, o) {
    var l = a[i];
    (!(n.call(a, i) && t(l, o)) || o === void 0 && !(i in a)) && e(a, i, o);
  }
  return xr = s, xr;
}
var kr, pa;
function Il() {
  if (pa) return kr;
  pa = 1;
  var e = Dl(), t = Bn(), r = $n(), n = Nn(), s = Vn();
  function a(i, o, l, u) {
    if (!n(i))
      return i;
    o = t(o, i);
    for (var f = -1, d = o.length, E = d - 1, _ = i; _ != null && ++f < d; ) {
      var c = s(o[f]), g = l;
      if (c === "__proto__" || c === "constructor" || c === "prototype")
        return i;
      if (f != E) {
        var h = _[c];
        g = u ? u(h, c, _) : void 0, g === void 0 && (g = n(h) ? h : r(o[f + 1]) ? [] : {});
      }
      e(_, c, g), _ = _[c];
    }
    return i;
  }
  return kr = a, kr;
}
var Lr, _a;
function xl() {
  if (_a) return Lr;
  _a = 1;
  var e = Il();
  function t(r, n, s) {
    return r == null ? r : e(r, n, s);
  }
  return Lr = t, Lr;
}
var kl = xl();
const Ll = /* @__PURE__ */ Ke(kl), ga = (e, t) => (t.forEach((r) => {
  const s = r.split(".").join(".");
  if (Tl(e, s)) {
    const a = bl(e, s);
    a && Ll(e, s, new Date(a));
  }
}), e), Fl = (e, t) => typeof e < "u" ? typeof e.length > "u" ? (e = ga(e, t), e) : (e.forEach((r) => {
  ga(r, t);
}), e) : e;
function Eo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Nl } = Object.prototype, { getPrototypeOf: Mn } = Object, ht = /* @__PURE__ */ ((e) => (t) => {
  const r = Nl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (e) => (e = e.toLowerCase(), (t) => ht(t) === e), pt = (e) => (t) => typeof t === e, { isArray: Ce } = Array, $e = pt("undefined");
function Ul(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && X(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vo = ae("ArrayBuffer");
function Bl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vo(e.buffer), t;
}
const Vl = pt("string"), X = pt("function"), yo = pt("number"), _t = (e) => e !== null && typeof e == "object", $l = (e) => e === !0 || e === !1, Xe = (e) => {
  if (ht(e) !== "object")
    return !1;
  const t = Mn(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ql = ae("Date"), Ml = ae("File"), jl = ae("Blob"), Hl = ae("FileList"), Kl = (e) => _t(e) && X(e.pipe), zl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || X(e.append) && ((t = ht(e)) === "formdata" || // detect form-data instance
  t === "object" && X(e.toString) && e.toString() === "[object FormData]"));
}, Gl = ae("URLSearchParams"), [Wl, Jl, Yl, Xl] = ["ReadableStream", "Request", "Response", "Headers"].map(ae), Zl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ze(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Ce(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let o;
    for (n = 0; n < i; n++)
      o = a[n], t.call(null, e[o], o, e);
  }
}
function bo(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const _e = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, So = (e) => !$e(e) && e !== _e;
function gn() {
  const { caseless: e } = So(this) && this || {}, t = {}, r = (n, s) => {
    const a = e && bo(t, s) || s;
    Xe(t[a]) && Xe(n) ? t[a] = gn(t[a], n) : Xe(n) ? t[a] = gn({}, n) : Ce(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && ze(arguments[n], r);
  return t;
}
const Ql = (e, t, r, { allOwnKeys: n } = {}) => (ze(t, (s, a) => {
  r && X(s) ? e[a] = Eo(s, r) : e[a] = s;
}, { allOwnKeys: n }), e), ec = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), tc = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, rc = (e, t, r, n) => {
  let s, a, i;
  const o = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], (!n || n(i, e, t)) && !o[i] && (t[i] = e[i], o[i] = !0);
    e = r !== !1 && Mn(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, nc = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, sc = (e) => {
  if (!e) return null;
  if (Ce(e)) return e;
  let t = e.length;
  if (!yo(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ac = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Mn(Uint8Array)), ic = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, oc = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, uc = ae("HTMLFormElement"), lc = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), ma = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), cc = ae("RegExp"), Oo = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ze(r, (s, a) => {
    let i;
    (i = t(s, a, e)) !== !1 && (n[a] = i || s);
  }), Object.defineProperties(e, n);
}, dc = (e) => {
  Oo(e, (t, r) => {
    if (X(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (X(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, fc = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return Ce(e) ? n(e) : n(String(e).split(t)), r;
}, hc = () => {
}, pc = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Fr = "abcdefghijklmnopqrstuvwxyz", Ea = "0123456789", wo = {
  DIGIT: Ea,
  ALPHA: Fr,
  ALPHA_DIGIT: Fr + Fr.toUpperCase() + Ea
}, _c = (e = 16, t = wo.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function gc(e) {
  return !!(e && X(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const mc = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (_t(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const a = Ce(n) ? [] : {};
        return ze(n, (i, o) => {
          const l = r(i, s + 1);
          !$e(l) && (a[o] = l);
        }), t[s] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, Ec = ae("AsyncFunction"), vc = (e) => e && (_t(e) || X(e)) && X(e.then) && X(e.catch), Ao = ((e, t) => e ? setImmediate : t ? ((r, n) => (_e.addEventListener("message", ({ source: s, data: a }) => {
  s === _e && a === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), _e.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  X(_e.postMessage)
), yc = typeof queueMicrotask < "u" ? queueMicrotask.bind(_e) : typeof process < "u" && process.nextTick || Ao, p = {
  isArray: Ce,
  isArrayBuffer: vo,
  isBuffer: Ul,
  isFormData: zl,
  isArrayBufferView: Bl,
  isString: Vl,
  isNumber: yo,
  isBoolean: $l,
  isObject: _t,
  isPlainObject: Xe,
  isReadableStream: Wl,
  isRequest: Jl,
  isResponse: Yl,
  isHeaders: Xl,
  isUndefined: $e,
  isDate: ql,
  isFile: Ml,
  isBlob: jl,
  isRegExp: cc,
  isFunction: X,
  isStream: Kl,
  isURLSearchParams: Gl,
  isTypedArray: ac,
  isFileList: Hl,
  forEach: ze,
  merge: gn,
  extend: Ql,
  trim: Zl,
  stripBOM: ec,
  inherits: tc,
  toFlatObject: rc,
  kindOf: ht,
  kindOfTest: ae,
  endsWith: nc,
  toArray: sc,
  forEachEntry: ic,
  matchAll: oc,
  isHTMLForm: uc,
  hasOwnProperty: ma,
  hasOwnProp: ma,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Oo,
  freezeMethods: dc,
  toObjectSet: fc,
  toCamelCase: lc,
  noop: hc,
  toFiniteNumber: pc,
  findKey: bo,
  global: _e,
  isContextDefined: So,
  ALPHABET: wo,
  generateString: _c,
  isSpecCompliantForm: gc,
  toJSONObject: mc,
  isAsyncFn: Ec,
  isThenable: vc,
  setImmediate: Ao,
  asap: yc
};
function O(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
p.inherits(O, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: p.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ro = O.prototype, To = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  To[e] = { value: e };
});
Object.defineProperties(O, To);
Object.defineProperty(Ro, "isAxiosError", { value: !0 });
O.from = (e, t, r, n, s, a) => {
  const i = Object.create(Ro);
  return p.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (o) => o !== "isAxiosError"), O.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const bc = null;
function mn(e) {
  return p.isPlainObject(e) || p.isArray(e);
}
function Co(e) {
  return p.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function va(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = Co(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Sc(e) {
  return p.isArray(e) && !e.some(mn);
}
const Oc = p.toFlatObject(p, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function gt(e, t, r) {
  if (!p.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = p.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, h) {
    return !p.isUndefined(h[g]);
  });
  const n = r.metaTokens, s = r.visitor || f, a = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && p.isSpecCompliantForm(t);
  if (!p.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(c) {
    if (c === null) return "";
    if (p.isDate(c))
      return c.toISOString();
    if (!l && p.isBlob(c))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return p.isArrayBuffer(c) || p.isTypedArray(c) ? l && typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function f(c, g, h) {
    let m = c;
    if (c && !h && typeof c == "object") {
      if (p.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), c = JSON.stringify(c);
      else if (p.isArray(c) && Sc(c) || (p.isFileList(c) || p.endsWith(g, "[]")) && (m = p.toArray(c)))
        return g = Co(g), m.forEach(function(S, C) {
          !(p.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? va([g], C, a) : i === null ? g : g + "[]",
            u(S)
          );
        }), !1;
    }
    return mn(c) ? !0 : (t.append(va(h, g, a), u(c)), !1);
  }
  const d = [], E = Object.assign(Oc, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: mn
  });
  function _(c, g) {
    if (!p.isUndefined(c)) {
      if (d.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(c), p.forEach(c, function(m, b) {
        (!(p.isUndefined(m) || m === null) && s.call(
          t,
          m,
          p.isString(b) ? b.trim() : b,
          g,
          E
        )) === !0 && _(m, g ? g.concat(b) : [b]);
      }), d.pop();
    }
  }
  if (!p.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function ya(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function jn(e, t) {
  this._pairs = [], e && gt(e, this, t);
}
const Po = jn.prototype;
Po.append = function(t, r) {
  this._pairs.push([t, r]);
};
Po.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ya);
  } : ya;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function wc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Do(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || wc;
  p.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let a;
  if (s ? a = s(t, r) : a = p.isURLSearchParams(t) ? t.toString() : new jn(t, r).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ba {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    p.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Io = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ac = typeof URLSearchParams < "u" ? URLSearchParams : jn, Rc = typeof FormData < "u" ? FormData : null, Tc = typeof Blob < "u" ? Blob : null, Cc = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ac,
    FormData: Rc,
    Blob: Tc
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Hn = typeof window < "u" && typeof document < "u", En = typeof navigator == "object" && navigator || void 0, Pc = Hn && (!En || ["ReactNative", "NativeScript", "NS"].indexOf(En.product) < 0), Dc = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ic = Hn && window.location.href || "http://localhost", xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Hn,
  hasStandardBrowserEnv: Pc,
  hasStandardBrowserWebWorkerEnv: Dc,
  navigator: En,
  origin: Ic
}, Symbol.toStringTag, { value: "Module" })), z = {
  ...xc,
  ...Cc
};
function kc(e, t) {
  return gt(e, new z.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, a) {
      return z.isNode && p.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Lc(e) {
  return p.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Fc(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function xo(e) {
  function t(r, n, s, a) {
    let i = r[a++];
    if (i === "__proto__") return !0;
    const o = Number.isFinite(+i), l = a >= r.length;
    return i = !i && p.isArray(s) ? s.length : i, l ? (p.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !o) : ((!s[i] || !p.isObject(s[i])) && (s[i] = []), t(r, n, s[i], a) && p.isArray(s[i]) && (s[i] = Fc(s[i])), !o);
  }
  if (p.isFormData(e) && p.isFunction(e.entries)) {
    const r = {};
    return p.forEachEntry(e, (n, s) => {
      t(Lc(n), s, r, 0);
    }), r;
  }
  return null;
}
function Nc(e, t, r) {
  if (p.isString(e))
    try {
      return (t || JSON.parse)(e), p.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const Ge = {
  transitional: Io,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = p.isObject(t);
    if (a && p.isHTMLForm(t) && (t = new FormData(t)), p.isFormData(t))
      return s ? JSON.stringify(xo(t)) : t;
    if (p.isArrayBuffer(t) || p.isBuffer(t) || p.isStream(t) || p.isFile(t) || p.isBlob(t) || p.isReadableStream(t))
      return t;
    if (p.isArrayBufferView(t))
      return t.buffer;
    if (p.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let o;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return kc(t, this.formSerializer).toString();
      if ((o = p.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return gt(
          o ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || s ? (r.setContentType("application/json", !1), Nc(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Ge.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (p.isResponse(t) || p.isReadableStream(t))
      return t;
    if (t && p.isString(t) && (n && !this.responseType || s)) {
      const i = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (o) {
        if (i)
          throw o.name === "SyntaxError" ? O.from(o, O.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: z.classes.FormData,
    Blob: z.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
p.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ge.headers[e] = {};
});
const Uc = p.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Bc = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || t[r] && Uc[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Sa = Symbol("internals");
function Le(e) {
  return e && String(e).trim().toLowerCase();
}
function Ze(e) {
  return e === !1 || e == null ? e : p.isArray(e) ? e.map(Ze) : String(e);
}
function Vc(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const $c = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Nr(e, t, r, n, s) {
  if (p.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!p.isString(t)) {
    if (p.isString(n))
      return t.indexOf(n) !== -1;
    if (p.isRegExp(n))
      return n.test(t);
  }
}
function qc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Mc(e, t) {
  const r = p.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, a, i) {
        return this[n].call(this, t, s, a, i);
      },
      configurable: !0
    });
  });
}
class J {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function a(o, l, u) {
      const f = Le(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = p.findKey(s, f);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || l] = Ze(o));
    }
    const i = (o, l) => p.forEach(o, (u, f) => a(u, f, l));
    if (p.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (p.isString(t) && (t = t.trim()) && !$c(t))
      i(Bc(t), r);
    else if (p.isHeaders(t))
      for (const [o, l] of t.entries())
        a(l, o, n);
    else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Le(t), t) {
      const n = p.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Vc(s);
        if (p.isFunction(r))
          return r.call(this, s, n);
        if (p.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Le(t), t) {
      const n = p.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Nr(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(i) {
      if (i = Le(i), i) {
        const o = p.findKey(n, i);
        o && (!r || Nr(n, n[o], o, r)) && (delete n[o], s = !0);
      }
    }
    return p.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Nr(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return p.forEach(this, (s, a) => {
      const i = p.findKey(n, a);
      if (i) {
        r[i] = Ze(s), delete r[a];
        return;
      }
      const o = t ? qc(a) : String(a).trim();
      o !== a && delete r[a], r[o] = Ze(s), n[o] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return p.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && p.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Sa] = this[Sa] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const o = Le(i);
      n[o] || (Mc(s, i), n[o] = !0);
    }
    return p.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
J.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
p.reduceDescriptors(J.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
p.freezeMethods(J);
function Ur(e, t) {
  const r = this || Ge, n = t || r, s = J.from(n.headers);
  let a = n.data;
  return p.forEach(e, function(o) {
    a = o.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function ko(e) {
  return !!(e && e.__CANCEL__);
}
function Pe(e, t, r) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
p.inherits(Pe, O, {
  __CANCEL__: !0
});
function Lo(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function jc(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Hc(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), f = n[a];
    i || (i = u), r[s] = l, n[s] = u;
    let d = a, E = 0;
    for (; d !== s; )
      E += r[d++], d = d % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), u - i < t)
      return;
    const _ = f && u - f;
    return _ ? Math.round(E * 1e3 / _) : void 0;
  };
}
function Kc(e, t) {
  let r = 0, n = 1e3 / t, s, a;
  const i = (u, f = Date.now()) => {
    r = f, s = null, a && (clearTimeout(a), a = null), e.apply(null, u);
  };
  return [(...u) => {
    const f = Date.now(), d = f - r;
    d >= n ? i(u, f) : (s = u, a || (a = setTimeout(() => {
      a = null, i(s);
    }, n - d)));
  }, () => s && i(s)];
}
const nt = (e, t, r = 3) => {
  let n = 0;
  const s = Hc(50, 250);
  return Kc((a) => {
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, l = i - n, u = s(l), f = i <= o;
    n = i;
    const d = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && o && f ? (o - i) / u : void 0,
      event: a,
      lengthComputable: o != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, Oa = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, wa = (e) => (...t) => p.asap(() => e(...t)), zc = z.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, z.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(z.origin),
  z.navigator && /(msie|trident)/i.test(z.navigator.userAgent)
) : () => !0, Gc = z.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, a) {
      const i = [e + "=" + encodeURIComponent(t)];
      p.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), p.isString(n) && i.push("path=" + n), p.isString(s) && i.push("domain=" + s), a === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Wc(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jc(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Fo(e, t) {
  return e && !Wc(t) ? Jc(e, t) : t;
}
const Aa = (e) => e instanceof J ? { ...e } : e;
function Ee(e, t) {
  t = t || {};
  const r = {};
  function n(u, f, d, E) {
    return p.isPlainObject(u) && p.isPlainObject(f) ? p.merge.call({ caseless: E }, u, f) : p.isPlainObject(f) ? p.merge({}, f) : p.isArray(f) ? f.slice() : f;
  }
  function s(u, f, d, E) {
    if (p.isUndefined(f)) {
      if (!p.isUndefined(u))
        return n(void 0, u, d, E);
    } else return n(u, f, d, E);
  }
  function a(u, f) {
    if (!p.isUndefined(f))
      return n(void 0, f);
  }
  function i(u, f) {
    if (p.isUndefined(f)) {
      if (!p.isUndefined(u))
        return n(void 0, u);
    } else return n(void 0, f);
  }
  function o(u, f, d) {
    if (d in t)
      return n(u, f);
    if (d in e)
      return n(void 0, u);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: o,
    headers: (u, f, d) => s(Aa(u), Aa(f), d, !0)
  };
  return p.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = l[f] || s, E = d(e[f], t[f], f);
    p.isUndefined(E) && d !== o || (r[f] = E);
  }), r;
}
const No = (e) => {
  const t = Ee({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: i, auth: o } = t;
  t.headers = i = J.from(i), t.url = Do(Fo(t.baseURL, t.url), e.params, e.paramsSerializer), o && i.set(
    "Authorization",
    "Basic " + btoa((o.username || "") + ":" + (o.password ? unescape(encodeURIComponent(o.password)) : ""))
  );
  let l;
  if (p.isFormData(r)) {
    if (z.hasStandardBrowserEnv || z.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [u, ...f] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...f].join("; "));
    }
  }
  if (z.hasStandardBrowserEnv && (n && p.isFunction(n) && (n = n(t)), n || n !== !1 && zc(t.url))) {
    const u = s && a && Gc.read(a);
    u && i.set(s, u);
  }
  return t;
}, Yc = typeof XMLHttpRequest < "u", Xc = Yc && function(e) {
  return new Promise(function(r, n) {
    const s = No(e);
    let a = s.data;
    const i = J.from(s.headers).normalize();
    let { responseType: o, onUploadProgress: l, onDownloadProgress: u } = s, f, d, E, _, c;
    function g() {
      _ && _(), c && c(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function m() {
      if (!h)
        return;
      const S = J.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), L = {
        data: !o || o === "text" || o === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: S,
        config: e,
        request: h
      };
      Lo(function(W) {
        r(W), g();
      }, function(W) {
        n(W), g();
      }, L), h = null;
    }
    "onloadend" in h ? h.onloadend = m : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, h.onabort = function() {
      h && (n(new O("Request aborted", O.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      n(new O("Network Error", O.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let C = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const L = s.transitional || Io;
      s.timeoutErrorMessage && (C = s.timeoutErrorMessage), n(new O(
        C,
        L.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        h
      )), h = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in h && p.forEach(i.toJSON(), function(C, L) {
      h.setRequestHeader(L, C);
    }), p.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), o && o !== "json" && (h.responseType = s.responseType), u && ([E, c] = nt(u, !0), h.addEventListener("progress", E)), l && h.upload && ([d, _] = nt(l), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", _)), (s.cancelToken || s.signal) && (f = (S) => {
      h && (n(!S || S.type ? new Pe(null, e, h) : S), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const b = jc(s.url);
    if (b && z.protocols.indexOf(b) === -1) {
      n(new O("Unsupported protocol " + b + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(a || null);
  });
}, Zc = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const a = function(u) {
      if (!s) {
        s = !0, o();
        const f = u instanceof Error ? u : this.reason;
        n.abort(f instanceof O ? f : new Pe(f instanceof Error ? f.message : f));
      }
    };
    let i = t && setTimeout(() => {
      i = null, a(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
    }, t);
    const o = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: l } = n;
    return l.unsubscribe = () => p.asap(o), l;
  }
}, Qc = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, ed = async function* (e, t) {
  for await (const r of td(e))
    yield* Qc(r, t);
}, td = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ra = (e, t, r, n) => {
  const s = ed(e, t);
  let a = 0, i, o = (l) => {
    i || (i = !0, n && n(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: f } = await s.next();
        if (u) {
          o(), l.close();
          return;
        }
        let d = f.byteLength;
        if (r) {
          let E = a += d;
          r(E);
        }
        l.enqueue(new Uint8Array(f));
      } catch (u) {
        throw o(u), u;
      }
    },
    cancel(l) {
      return o(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, mt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Uo = mt && typeof ReadableStream == "function", rd = mt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Bo = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, nd = Uo && Bo(() => {
  let e = !1;
  const t = new Request(z.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ta = 64 * 1024, vn = Uo && Bo(() => p.isReadableStream(new Response("").body)), st = {
  stream: vn && ((e) => e.body)
};
mt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !st[t] && (st[t] = p.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new O(`Response type '${t}' is not supported`, O.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const sd = async (e) => {
  if (e == null)
    return 0;
  if (p.isBlob(e))
    return e.size;
  if (p.isSpecCompliantForm(e))
    return (await new Request(z.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (p.isArrayBufferView(e) || p.isArrayBuffer(e))
    return e.byteLength;
  if (p.isURLSearchParams(e) && (e = e + ""), p.isString(e))
    return (await rd(e)).byteLength;
}, ad = async (e, t) => {
  const r = p.toFiniteNumber(e.getContentLength());
  return r ?? sd(t);
}, id = mt && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: s,
    cancelToken: a,
    timeout: i,
    onDownloadProgress: o,
    onUploadProgress: l,
    responseType: u,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: E
  } = No(e);
  u = u ? (u + "").toLowerCase() : "text";
  let _ = Zc([s, a && a.toAbortSignal()], i), c;
  const g = _ && _.unsubscribe && (() => {
    _.unsubscribe();
  });
  let h;
  try {
    if (l && nd && r !== "get" && r !== "head" && (h = await ad(f, n)) !== 0) {
      let L = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), k;
      if (p.isFormData(n) && (k = L.headers.get("content-type")) && f.setContentType(k), L.body) {
        const [W, G] = Oa(
          h,
          nt(wa(l))
        );
        n = Ra(L.body, Ta, W, G);
      }
    }
    p.isString(d) || (d = d ? "include" : "omit");
    const m = "credentials" in Request.prototype;
    c = new Request(t, {
      ...E,
      signal: _,
      method: r.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: m ? d : void 0
    });
    let b = await fetch(c);
    const S = vn && (u === "stream" || u === "response");
    if (vn && (o || S && g)) {
      const L = {};
      ["status", "statusText", "headers"].forEach((Z) => {
        L[Z] = b[Z];
      });
      const k = p.toFiniteNumber(b.headers.get("content-length")), [W, G] = o && Oa(
        k,
        nt(wa(o), !0)
      ) || [];
      b = new Response(
        Ra(b.body, Ta, W, () => {
          G && G(), g && g();
        }),
        L
      );
    }
    u = u || "text";
    let C = await st[p.findKey(st, u) || "text"](b, e);
    return !S && g && g(), await new Promise((L, k) => {
      Lo(L, k, {
        data: C,
        headers: J.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: c
      });
    });
  } catch (m) {
    throw g && g(), m && m.name === "TypeError" && /fetch/i.test(m.message) ? Object.assign(
      new O("Network Error", O.ERR_NETWORK, e, c),
      {
        cause: m.cause || m
      }
    ) : O.from(m, m && m.code, e, c);
  }
}), yn = {
  http: bc,
  xhr: Xc,
  fetch: id
};
p.forEach(yn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ca = (e) => `- ${e}`, od = (e) => p.isFunction(e) || e === null || e === !1, Vo = {
  getAdapter: (e) => {
    e = p.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let i;
      if (n = r, !od(r) && (n = yn[(i = String(r)).toLowerCase()], n === void 0))
        throw new O(`Unknown adapter '${i}'`);
      if (n)
        break;
      s[i || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(s).map(
        ([o, l]) => `adapter ${o} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? a.length > 1 ? `since :
` + a.map(Ca).join(`
`) : " " + Ca(a[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: yn
};
function Br(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Pe(null, e);
}
function Pa(e) {
  return Br(e), e.headers = J.from(e.headers), e.data = Ur.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Vo.getAdapter(e.adapter || Ge.adapter)(e).then(function(n) {
    return Br(e), n.data = Ur.call(
      e,
      e.transformResponse,
      n
    ), n.headers = J.from(n.headers), n;
  }, function(n) {
    return ko(n) || (Br(e), n && n.response && (n.response.data = Ur.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = J.from(n.response.headers))), Promise.reject(n);
  });
}
const $o = "1.7.9", Et = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Et[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Da = {};
Et.transitional = function(t, r, n) {
  function s(a, i) {
    return "[Axios v" + $o + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, o) => {
    if (t === !1)
      throw new O(
        s(i, " has been removed" + (r ? " in " + r : "")),
        O.ERR_DEPRECATED
      );
    return r && !Da[i] && (Da[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, i, o) : !0;
  };
};
Et.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function ud(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], i = t[a];
    if (i) {
      const o = e[a], l = o === void 0 || i(o, a, e);
      if (l !== !0)
        throw new O("option " + a + " must be " + l, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + a, O.ERR_BAD_OPTION);
  }
}
const Qe = {
  assertOptions: ud,
  validators: Et
}, ie = Qe.validators;
class me {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ba(),
      response: new ba()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Ee(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && Qe.assertOptions(n, {
      silentJSONParsing: ie.transitional(ie.boolean),
      forcedJSONParsing: ie.transitional(ie.boolean),
      clarifyTimeoutError: ie.transitional(ie.boolean)
    }, !1), s != null && (p.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Qe.assertOptions(s, {
      encode: ie.function,
      serialize: ie.function
    }, !0)), Qe.assertOptions(r, {
      baseUrl: ie.spelling("baseURL"),
      withXsrfToken: ie.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = a && p.merge(
      a.common,
      a[r.method]
    );
    a && p.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (c) => {
        delete a[c];
      }
    ), r.headers = J.concat(i, a);
    const o = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(r) === !1 || (l = l && g.synchronous, o.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let f, d = 0, E;
    if (!l) {
      const c = [Pa.bind(this), void 0];
      for (c.unshift.apply(c, o), c.push.apply(c, u), E = c.length, f = Promise.resolve(r); d < E; )
        f = f.then(c[d++], c[d++]);
      return f;
    }
    E = o.length;
    let _ = r;
    for (d = 0; d < E; ) {
      const c = o[d++], g = o[d++];
      try {
        _ = c(_);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      f = Pa.call(this, _);
    } catch (c) {
      return Promise.reject(c);
    }
    for (d = 0, E = u.length; d < E; )
      f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(t) {
    t = Ee(this.defaults, t);
    const r = Fo(t.baseURL, t.url);
    return Do(r, t.params, t.paramsSerializer);
  }
}
p.forEach(["delete", "get", "head", "options"], function(t) {
  me.prototype[t] = function(r, n) {
    return this.request(Ee(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
p.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, i, o) {
      return this.request(Ee(o || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  me.prototype[t] = r(), me.prototype[t + "Form"] = r(!0);
});
class Kn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((o) => {
        n.subscribe(o), a = o;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(a);
      }, i;
    }, t(function(a, i, o) {
      n.reason || (n.reason = new Pe(a, i, o), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Kn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function ld(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function cd(e) {
  return p.isObject(e) && e.isAxiosError === !0;
}
const bn = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(bn).forEach(([e, t]) => {
  bn[t] = e;
});
function qo(e) {
  const t = new me(e), r = Eo(me.prototype.request, t);
  return p.extend(r, me.prototype, t, { allOwnKeys: !0 }), p.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return qo(Ee(e, s));
  }, r;
}
const $ = qo(Ge);
$.Axios = me;
$.CanceledError = Pe;
$.CancelToken = Kn;
$.isCancel = ko;
$.VERSION = $o;
$.toFormData = gt;
$.AxiosError = O;
$.Cancel = $.CanceledError;
$.all = function(t) {
  return Promise.all(t);
};
$.spread = ld;
$.isAxiosError = cd;
$.mergeConfig = Ee;
$.AxiosHeaders = J;
$.formToJSON = (e) => xo(p.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = Vo.getAdapter;
$.HttpStatusCode = bn;
$.default = $;
let T, be = "api";
function mp(e) {
  if (!e.httpClient && !e.baseURL)
    throw new Error("You must provide either a httpClient or a baseURL");
  return e.httpClient ? T = e.httpClient : T = $.create({
    withCredentials: !0,
    baseURL: e.baseURL
  }), e.apiPrefix && (be = e.apiPrefix), e.bearerToken && (T.defaults.headers.common.Authorization = `Bearer ${e.bearerToken}`), T;
}
var Vr, Ia;
function dd() {
  if (Ia) return Vr;
  Ia = 1;
  var e = Array.prototype, t = e.join;
  function r(n, s) {
    return n == null ? "" : t.call(n, s);
  }
  return Vr = r, Vr;
}
var fd = dd();
const F = /* @__PURE__ */ Ke(fd);
class zn extends Error {
  constructor(r, n) {
    super(r);
    A(this, "name", "");
    A(this, "error");
    this.message = r + " ||| " + n.message, this.error = n, this.stack = n.stack;
  }
}
class B extends zn {
  constructor(r, n) {
    super(r, n);
    A(this, "name");
    this.name = this.constructor.name;
  }
}
var hd = Object.create, Mo = Object.defineProperty, pd = Object.getOwnPropertyDescriptor, Gn = Object.getOwnPropertyNames, _d = Object.getPrototypeOf, gd = Object.prototype.hasOwnProperty, md = (e, t) => function() {
  return e && (t = (0, e[Gn(e)[0]])(e = 0)), t;
}, Ed = (e, t) => function() {
  return t || (0, e[Gn(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, vd = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s of Gn(t))
      !gd.call(e, s) && s !== r && Mo(e, s, { get: () => t[s], enumerable: !(n = pd(t, s)) || n.enumerable });
  return e;
}, yd = (e, t, r) => (r = e != null ? hd(_d(e)) : {}, vd(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Mo(r, "default", { value: e, enumerable: !0 }),
  e
)), We = md({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.0_@types+node@22.10.1__@swc+core@1.5.29_jiti@2.0.0_p_swvvp2d4pgn6xuiiec4l4x2i7a/node_modules/tsup/assets/esm_shims.js"() {
  }
}), bd = Ed({
  "../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e, t) {
    We(), t.exports = n;
    function r(a) {
      return a instanceof Buffer ? Buffer.from(a) : new a.constructor(a.buffer.slice(), a.byteOffset, a.length);
    }
    function n(a) {
      if (a = a || {}, a.circles) return s(a);
      const i = /* @__PURE__ */ new Map();
      if (i.set(Date, (d) => new Date(d)), i.set(Map, (d, E) => new Map(l(Array.from(d), E))), i.set(Set, (d, E) => new Set(l(Array.from(d), E))), a.constructorHandlers)
        for (const d of a.constructorHandlers)
          i.set(d[0], d[1]);
      let o = null;
      return a.proto ? f : u;
      function l(d, E) {
        const _ = Object.keys(d), c = new Array(_.length);
        for (let g = 0; g < _.length; g++) {
          const h = _[g], m = d[h];
          typeof m != "object" || m === null ? c[h] = m : m.constructor !== Object && (o = i.get(m.constructor)) ? c[h] = o(m, E) : ArrayBuffer.isView(m) ? c[h] = r(m) : c[h] = E(m);
        }
        return c;
      }
      function u(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return l(d, u);
        if (d.constructor !== Object && (o = i.get(d.constructor)))
          return o(d, u);
        const E = {};
        for (const _ in d) {
          if (Object.hasOwnProperty.call(d, _) === !1) continue;
          const c = d[_];
          typeof c != "object" || c === null ? E[_] = c : c.constructor !== Object && (o = i.get(c.constructor)) ? E[_] = o(c, u) : ArrayBuffer.isView(c) ? E[_] = r(c) : E[_] = u(c);
        }
        return E;
      }
      function f(d) {
        if (typeof d != "object" || d === null) return d;
        if (Array.isArray(d)) return l(d, f);
        if (d.constructor !== Object && (o = i.get(d.constructor)))
          return o(d, f);
        const E = {};
        for (const _ in d) {
          const c = d[_];
          typeof c != "object" || c === null ? E[_] = c : c.constructor !== Object && (o = i.get(c.constructor)) ? E[_] = o(c, f) : ArrayBuffer.isView(c) ? E[_] = r(c) : E[_] = f(c);
        }
        return E;
      }
    }
    function s(a) {
      const i = [], o = [], l = /* @__PURE__ */ new Map();
      if (l.set(Date, (_) => new Date(_)), l.set(Map, (_, c) => new Map(f(Array.from(_), c))), l.set(Set, (_, c) => new Set(f(Array.from(_), c))), a.constructorHandlers)
        for (const _ of a.constructorHandlers)
          l.set(_[0], _[1]);
      let u = null;
      return a.proto ? E : d;
      function f(_, c) {
        const g = Object.keys(_), h = new Array(g.length);
        for (let m = 0; m < g.length; m++) {
          const b = g[m], S = _[b];
          if (typeof S != "object" || S === null)
            h[b] = S;
          else if (S.constructor !== Object && (u = l.get(S.constructor)))
            h[b] = u(S, c);
          else if (ArrayBuffer.isView(S))
            h[b] = r(S);
          else {
            const C = i.indexOf(S);
            C !== -1 ? h[b] = o[C] : h[b] = c(S);
          }
        }
        return h;
      }
      function d(_) {
        if (typeof _ != "object" || _ === null) return _;
        if (Array.isArray(_)) return f(_, d);
        if (_.constructor !== Object && (u = l.get(_.constructor)))
          return u(_, d);
        const c = {};
        i.push(_), o.push(c);
        for (const g in _) {
          if (Object.hasOwnProperty.call(_, g) === !1) continue;
          const h = _[g];
          if (typeof h != "object" || h === null)
            c[g] = h;
          else if (h.constructor !== Object && (u = l.get(h.constructor)))
            c[g] = u(h, d);
          else if (ArrayBuffer.isView(h))
            c[g] = r(h);
          else {
            const m = i.indexOf(h);
            m !== -1 ? c[g] = o[m] : c[g] = d(h);
          }
        }
        return i.pop(), o.pop(), c;
      }
      function E(_) {
        if (typeof _ != "object" || _ === null) return _;
        if (Array.isArray(_)) return f(_, E);
        if (_.constructor !== Object && (u = l.get(_.constructor)))
          return u(_, E);
        const c = {};
        i.push(_), o.push(c);
        for (const g in _) {
          const h = _[g];
          if (typeof h != "object" || h === null)
            c[g] = h;
          else if (h.constructor !== Object && (u = l.get(h.constructor)))
            c[g] = u(h, E);
          else if (ArrayBuffer.isView(h))
            c[g] = r(h);
          else {
            const m = i.indexOf(h);
            m !== -1 ? c[g] = o[m] : c[g] = E(h);
          }
        }
        return i.pop(), o.pop(), c;
      }
    }
  }
});
We();
We();
We();
var jo = typeof navigator < "u", y = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof y.chrome < "u" && y.chrome.devtools;
jo && (y.self, y.top);
var xa;
typeof navigator < "u" && ((xa = navigator.userAgent) == null || xa.toLowerCase().includes("electron"));
We();
var Sd = yd(bd()), Od = /(?:^|[-_/])(\w)/g;
function wd(e, t) {
  return t ? t.toUpperCase() : "";
}
function Ad(e) {
  return e && `${e}`.replace(Od, wd);
}
function Rd(e, t) {
  let r = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  r.endsWith(`index${t}`) && (r = r.replace(`/index${t}`, t));
  const n = r.lastIndexOf("/"), s = r.substring(n + 1);
  {
    const a = s.lastIndexOf(t);
    return s.substring(0, a);
  }
}
var ka = (0, Sd.default)({ circles: !0 });
const Td = {
  trailing: !0
};
function we(e, t = 25, r = {}) {
  if (r = { ...Td, ...r }, !Number.isFinite(t))
    throw new TypeError("Expected `wait` to be a finite number");
  let n, s, a = [], i, o;
  const l = (u, f) => (i = Cd(e, u, f), i.finally(() => {
    if (i = null, r.trailing && o && !s) {
      const d = l(u, o);
      return o = null, d;
    }
  }), i);
  return function(...u) {
    return i ? (r.trailing && (o = u), i) : new Promise((f) => {
      const d = !s && r.leading;
      clearTimeout(s), s = setTimeout(() => {
        s = null;
        const E = r.leading ? n : l(this, u);
        for (const _ of a)
          _(E);
        a = [];
      }, t), d ? (n = l(this, u), f(n)) : a.push(f);
    });
  };
}
async function Cd(e, t, r) {
  return await e.apply(t, r);
}
function Sn(e, t = {}, r) {
  for (const n in e) {
    const s = e[n], a = r ? `${r}:${n}` : n;
    typeof s == "object" && s !== null ? Sn(s, t, a) : typeof s == "function" && (t[a] = s);
  }
  return t;
}
const Pd = { run: (e) => e() }, Dd = () => Pd, Ho = typeof console.createTask < "u" ? console.createTask : Dd;
function Id(e, t) {
  const r = t.shift(), n = Ho(r);
  return e.reduce(
    (s, a) => s.then(() => n.run(() => a(...t))),
    Promise.resolve()
  );
}
function xd(e, t) {
  const r = t.shift(), n = Ho(r);
  return Promise.all(e.map((s) => n.run(() => s(...t))));
}
function $r(e, t) {
  for (const r of [...e])
    r(t);
}
class kd {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, r, n = {}) {
    if (!t || typeof r != "function")
      return () => {
      };
    const s = t;
    let a;
    for (; this._deprecatedHooks[t]; )
      a = this._deprecatedHooks[t], t = a.to;
    if (a && !n.allowDeprecated) {
      let i = a.message;
      i || (i = `${s} hook has been deprecated` + (a.to ? `, please use ${a.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!r.name)
      try {
        Object.defineProperty(r, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(r), () => {
      r && (this.removeHook(t, r), r = void 0);
    };
  }
  hookOnce(t, r) {
    let n, s = (...a) => (typeof n == "function" && n(), n = void 0, s = void 0, r(...a));
    return n = this.hook(t, s), n;
  }
  removeHook(t, r) {
    if (this._hooks[t]) {
      const n = this._hooks[t].indexOf(r);
      n !== -1 && this._hooks[t].splice(n, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, r) {
    this._deprecatedHooks[t] = typeof r == "string" ? { to: r } : r;
    const n = this._hooks[t] || [];
    delete this._hooks[t];
    for (const s of n)
      this.hook(t, s);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const r in t)
      this.deprecateHook(r, t[r]);
  }
  addHooks(t) {
    const r = Sn(t), n = Object.keys(r).map(
      (s) => this.hook(s, r[s])
    );
    return () => {
      for (const s of n.splice(0, n.length))
        s();
    };
  }
  removeHooks(t) {
    const r = Sn(t);
    for (const n in r)
      this.removeHook(n, r[n]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...r) {
    return r.unshift(t), this.callHookWith(Id, t, ...r);
  }
  callHookParallel(t, ...r) {
    return r.unshift(t), this.callHookWith(xd, t, ...r);
  }
  callHookWith(t, r, ...n) {
    const s = this._before || this._after ? { name: r, args: n, context: {} } : void 0;
    this._before && $r(this._before, s);
    const a = t(
      r in this._hooks ? [...this._hooks[r]] : [],
      n
    );
    return a instanceof Promise ? a.finally(() => {
      this._after && s && $r(this._after, s);
    }) : (this._after && s && $r(this._after, s), a);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const r = this._before.indexOf(t);
        r !== -1 && this._before.splice(r, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const r = this._after.indexOf(t);
        r !== -1 && this._after.splice(r, 1);
      }
    };
  }
}
function Ko() {
  return new kd();
}
var Ld = Object.create, zo = Object.defineProperty, Fd = Object.getOwnPropertyDescriptor, Wn = Object.getOwnPropertyNames, Nd = Object.getPrototypeOf, Ud = Object.prototype.hasOwnProperty, Bd = (e, t) => function() {
  return e && (t = (0, e[Wn(e)[0]])(e = 0)), t;
}, Go = (e, t) => function() {
  return t || (0, e[Wn(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Vd = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let s of Wn(t))
      !Ud.call(e, s) && s !== r && zo(e, s, { get: () => t[s], enumerable: !(n = Fd(t, s)) || n.enumerable });
  return e;
}, $d = (e, t, r) => (r = e != null ? Ld(Nd(e)) : {}, Vd(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  zo(r, "default", { value: e, enumerable: !0 }),
  e
)), v = Bd({
  "../../node_modules/.pnpm/tsup@8.3.5_@microsoft+api-extractor@7.48.0_@types+node@22.10.1__@swc+core@1.5.29_jiti@2.0.0_p_swvvp2d4pgn6xuiiec4l4x2i7a/node_modules/tsup/assets/esm_shims.js"() {
  }
}), qd = Go({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e, t) {
    v(), function(r) {
      var n = {
        // latin
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "Ae",
        Å: "A",
        Æ: "AE",
        Ç: "C",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        Ð: "D",
        Ñ: "N",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "Oe",
        Ő: "O",
        Ø: "O",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "Ue",
        Ű: "U",
        Ý: "Y",
        Þ: "TH",
        ß: "ss",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "ae",
        å: "a",
        æ: "ae",
        ç: "c",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        ð: "d",
        ñ: "n",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "oe",
        ő: "o",
        ø: "o",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "ue",
        ű: "u",
        ý: "y",
        þ: "th",
        ÿ: "y",
        "ẞ": "SS",
        // language specific
        // Arabic
        ا: "a",
        أ: "a",
        إ: "i",
        آ: "aa",
        ؤ: "u",
        ئ: "e",
        ء: "a",
        ب: "b",
        ت: "t",
        ث: "th",
        ج: "j",
        ح: "h",
        خ: "kh",
        د: "d",
        ذ: "th",
        ر: "r",
        ز: "z",
        س: "s",
        ش: "sh",
        ص: "s",
        ض: "dh",
        ط: "t",
        ظ: "z",
        ع: "a",
        غ: "gh",
        ف: "f",
        ق: "q",
        ك: "k",
        ل: "l",
        م: "m",
        ن: "n",
        ه: "h",
        و: "w",
        ي: "y",
        ى: "a",
        ة: "h",
        ﻻ: "la",
        ﻷ: "laa",
        ﻹ: "lai",
        ﻵ: "laa",
        // Persian additional characters than Arabic
        گ: "g",
        چ: "ch",
        پ: "p",
        ژ: "zh",
        ک: "k",
        ی: "y",
        // Arabic diactrics
        "َ": "a",
        "ً": "an",
        "ِ": "e",
        "ٍ": "en",
        "ُ": "u",
        "ٌ": "on",
        "ْ": "",
        // Arabic numbers
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        // Persian numbers
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        // Burmese consonants
        က: "k",
        ခ: "kh",
        ဂ: "g",
        ဃ: "ga",
        င: "ng",
        စ: "s",
        ဆ: "sa",
        ဇ: "z",
        "စျ": "za",
        ည: "ny",
        ဋ: "t",
        ဌ: "ta",
        ဍ: "d",
        ဎ: "da",
        ဏ: "na",
        တ: "t",
        ထ: "ta",
        ဒ: "d",
        ဓ: "da",
        န: "n",
        ပ: "p",
        ဖ: "pa",
        ဗ: "b",
        ဘ: "ba",
        မ: "m",
        ယ: "y",
        ရ: "ya",
        လ: "l",
        ဝ: "w",
        သ: "th",
        ဟ: "h",
        ဠ: "la",
        အ: "a",
        // consonant character combos
        "ြ": "y",
        "ျ": "ya",
        "ွ": "w",
        "ြွ": "yw",
        "ျွ": "ywa",
        "ှ": "h",
        // independent vowels
        ဧ: "e",
        "၏": "-e",
        ဣ: "i",
        ဤ: "-i",
        ဉ: "u",
        ဦ: "-u",
        ဩ: "aw",
        "သြော": "aw",
        ဪ: "aw",
        // numbers
        "၀": "0",
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        // virama and tone marks which are silent in transliteration
        "္": "",
        "့": "",
        "း": "",
        // Czech
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z",
        // Dhivehi
        ހ: "h",
        ށ: "sh",
        ނ: "n",
        ރ: "r",
        ބ: "b",
        ޅ: "lh",
        ކ: "k",
        އ: "a",
        ވ: "v",
        މ: "m",
        ފ: "f",
        ދ: "dh",
        ތ: "th",
        ލ: "l",
        ގ: "g",
        ޏ: "gn",
        ސ: "s",
        ޑ: "d",
        ޒ: "z",
        ޓ: "t",
        ޔ: "y",
        ޕ: "p",
        ޖ: "j",
        ޗ: "ch",
        ޘ: "tt",
        ޙ: "hh",
        ޚ: "kh",
        ޛ: "th",
        ޜ: "z",
        ޝ: "sh",
        ޞ: "s",
        ޟ: "d",
        ޠ: "t",
        ޡ: "z",
        ޢ: "a",
        ޣ: "gh",
        ޤ: "q",
        ޥ: "w",
        "ަ": "a",
        "ާ": "aa",
        "ި": "i",
        "ީ": "ee",
        "ު": "u",
        "ޫ": "oo",
        "ެ": "e",
        "ޭ": "ey",
        "ޮ": "o",
        "ޯ": "oa",
        "ް": "",
        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        ა: "a",
        ბ: "b",
        გ: "g",
        დ: "d",
        ე: "e",
        ვ: "v",
        ზ: "z",
        თ: "t",
        ი: "i",
        კ: "k",
        ლ: "l",
        მ: "m",
        ნ: "n",
        ო: "o",
        პ: "p",
        ჟ: "zh",
        რ: "r",
        ს: "s",
        ტ: "t",
        უ: "u",
        ფ: "p",
        ქ: "k",
        ღ: "gh",
        ყ: "q",
        შ: "sh",
        ჩ: "ch",
        ც: "ts",
        ძ: "dz",
        წ: "ts",
        ჭ: "ch",
        ხ: "kh",
        ჯ: "j",
        ჰ: "h",
        // Greek
        α: "a",
        β: "v",
        γ: "g",
        δ: "d",
        ε: "e",
        ζ: "z",
        η: "i",
        θ: "th",
        ι: "i",
        κ: "k",
        λ: "l",
        μ: "m",
        ν: "n",
        ξ: "ks",
        ο: "o",
        π: "p",
        ρ: "r",
        σ: "s",
        τ: "t",
        υ: "y",
        φ: "f",
        χ: "x",
        ψ: "ps",
        ω: "o",
        ά: "a",
        έ: "e",
        ί: "i",
        ό: "o",
        ύ: "y",
        ή: "i",
        ώ: "o",
        ς: "s",
        ϊ: "i",
        ΰ: "y",
        ϋ: "y",
        ΐ: "i",
        Α: "A",
        Β: "B",
        Γ: "G",
        Δ: "D",
        Ε: "E",
        Ζ: "Z",
        Η: "I",
        Θ: "TH",
        Ι: "I",
        Κ: "K",
        Λ: "L",
        Μ: "M",
        Ν: "N",
        Ξ: "KS",
        Ο: "O",
        Π: "P",
        Ρ: "R",
        Σ: "S",
        Τ: "T",
        Υ: "Y",
        Φ: "F",
        Χ: "X",
        Ψ: "PS",
        Ω: "O",
        Ά: "A",
        Έ: "E",
        Ί: "I",
        Ό: "O",
        Ύ: "Y",
        Ή: "I",
        Ώ: "O",
        Ϊ: "I",
        Ϋ: "Y",
        // Latvian
        ā: "a",
        // 'č': 'c', // duplicate
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        // 'š': 's', // duplicate
        ū: "u",
        // 'ž': 'z', // duplicate
        Ā: "A",
        // 'Č': 'C', // duplicate
        Ē: "E",
        Ģ: "G",
        Ī: "I",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        // 'Š': 'S', // duplicate
        Ū: "U",
        // 'Ž': 'Z', // duplicate
        // Macedonian
        Ќ: "Kj",
        ќ: "kj",
        Љ: "Lj",
        љ: "lj",
        Њ: "Nj",
        њ: "nj",
        Тс: "Ts",
        тс: "ts",
        // Polish
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        // 'ó': 'o', // duplicate
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "E",
        Ł: "L",
        Ń: "N",
        Ś: "S",
        Ź: "Z",
        Ż: "Z",
        // Ukranian
        Є: "Ye",
        І: "I",
        Ї: "Yi",
        Ґ: "G",
        є: "ye",
        і: "i",
        ї: "yi",
        ґ: "g",
        // Romanian
        ă: "a",
        Ă: "A",
        ș: "s",
        Ș: "S",
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        ț: "t",
        Ț: "T",
        ţ: "t",
        Ţ: "T",
        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "yo",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "c",
        ч: "ch",
        ш: "sh",
        щ: "sh",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "yu",
        я: "ya",
        А: "A",
        Б: "B",
        В: "V",
        Г: "G",
        Д: "D",
        Е: "E",
        Ё: "Yo",
        Ж: "Zh",
        З: "Z",
        И: "I",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "C",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Sh",
        Ъ: "",
        Ы: "Y",
        Ь: "",
        Э: "E",
        Ю: "Yu",
        Я: "Ya",
        // Serbian
        ђ: "dj",
        ј: "j",
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        ћ: "c",
        џ: "dz",
        Ђ: "Dj",
        Ј: "j",
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        Ћ: "C",
        Џ: "Dz",
        // Slovak
        ľ: "l",
        ĺ: "l",
        ŕ: "r",
        Ľ: "L",
        Ĺ: "L",
        Ŕ: "R",
        // Turkish
        ş: "s",
        Ş: "S",
        ı: "i",
        İ: "I",
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        ğ: "g",
        Ğ: "G",
        // Vietnamese
        ả: "a",
        Ả: "A",
        ẳ: "a",
        Ẳ: "A",
        ẩ: "a",
        Ẩ: "A",
        đ: "d",
        Đ: "D",
        ẹ: "e",
        Ẹ: "E",
        ẽ: "e",
        Ẽ: "E",
        ẻ: "e",
        Ẻ: "E",
        ế: "e",
        Ế: "E",
        ề: "e",
        Ề: "E",
        ệ: "e",
        Ệ: "E",
        ễ: "e",
        Ễ: "E",
        ể: "e",
        Ể: "E",
        ỏ: "o",
        ọ: "o",
        Ọ: "o",
        ố: "o",
        Ố: "O",
        ồ: "o",
        Ồ: "O",
        ổ: "o",
        Ổ: "O",
        ộ: "o",
        Ộ: "O",
        ỗ: "o",
        Ỗ: "O",
        ơ: "o",
        Ơ: "O",
        ớ: "o",
        Ớ: "O",
        ờ: "o",
        Ờ: "O",
        ợ: "o",
        Ợ: "O",
        ỡ: "o",
        Ỡ: "O",
        Ở: "o",
        ở: "o",
        ị: "i",
        Ị: "I",
        ĩ: "i",
        Ĩ: "I",
        ỉ: "i",
        Ỉ: "i",
        ủ: "u",
        Ủ: "U",
        ụ: "u",
        Ụ: "U",
        ũ: "u",
        Ũ: "U",
        ư: "u",
        Ư: "U",
        ứ: "u",
        Ứ: "U",
        ừ: "u",
        Ừ: "U",
        ự: "u",
        Ự: "U",
        ữ: "u",
        Ữ: "U",
        ử: "u",
        Ử: "ư",
        ỷ: "y",
        Ỷ: "y",
        ỳ: "y",
        Ỳ: "Y",
        ỵ: "y",
        Ỵ: "Y",
        ỹ: "y",
        Ỹ: "Y",
        ạ: "a",
        Ạ: "A",
        ấ: "a",
        Ấ: "A",
        ầ: "a",
        Ầ: "A",
        ậ: "a",
        Ậ: "A",
        ẫ: "a",
        Ẫ: "A",
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        ắ: "a",
        Ắ: "A",
        ằ: "a",
        Ằ: "A",
        ặ: "a",
        Ặ: "A",
        ẵ: "a",
        Ẵ: "A",
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",
        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",
        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",
        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",
        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",
        // symbols
        "“": '"',
        "”": '"',
        "‘": "'",
        "’": "'",
        "∂": "d",
        ƒ: "f",
        "™": "(TM)",
        "©": "(C)",
        œ: "oe",
        Œ: "OE",
        "®": "(R)",
        "†": "+",
        "℠": "(SM)",
        "…": "...",
        "˚": "o",
        º: "o",
        ª: "a",
        "•": "*",
        "၊": ",",
        "။": ".",
        // currency
        $: "USD",
        "€": "EUR",
        "₢": "BRN",
        "₣": "FRF",
        "£": "GBP",
        "₤": "ITL",
        "₦": "NGN",
        "₧": "ESP",
        "₩": "KRW",
        "₪": "ILS",
        "₫": "VND",
        "₭": "LAK",
        "₮": "MNT",
        "₯": "GRD",
        "₱": "ARS",
        "₲": "PYG",
        "₳": "ARA",
        "₴": "UAH",
        "₵": "GHS",
        "¢": "cent",
        "¥": "CNY",
        元: "CNY",
        円: "YEN",
        "﷼": "IRR",
        "₠": "EWE",
        "฿": "THB",
        "₨": "INR",
        "₹": "INR",
        "₰": "PF",
        "₺": "TRY",
        "؋": "AFN",
        "₼": "AZN",
        лв: "BGN",
        "៛": "KHR",
        "₡": "CRC",
        "₸": "KZT",
        ден: "MKD",
        zł: "PLN",
        "₽": "RUB",
        "₾": "GEL"
      }, s = [
        // burmese
        "်",
        // Dhivehi
        "ް"
      ], a = {
        // Burmese
        // dependent vowels
        "ာ": "a",
        "ါ": "a",
        "ေ": "e",
        "ဲ": "e",
        "ိ": "i",
        "ီ": "i",
        "ို": "o",
        "ု": "u",
        "ူ": "u",
        "ေါင်": "aung",
        "ော": "aw",
        "ော်": "aw",
        "ေါ": "aw",
        "ေါ်": "aw",
        "်": "်",
        // this is special case but the character will be converted to latin in the code
        "က်": "et",
        "ိုက်": "aik",
        "ောက်": "auk",
        "င်": "in",
        "ိုင်": "aing",
        "ောင်": "aung",
        "စ်": "it",
        "ည်": "i",
        "တ်": "at",
        "ိတ်": "eik",
        "ုတ်": "ok",
        "ွတ်": "ut",
        "ေတ်": "it",
        "ဒ်": "d",
        "ိုဒ်": "ok",
        "ုဒ်": "ait",
        "န်": "an",
        "ာန်": "an",
        "ိန်": "ein",
        "ုန်": "on",
        "ွန်": "un",
        "ပ်": "at",
        "ိပ်": "eik",
        "ုပ်": "ok",
        "ွပ်": "ut",
        "န်ုပ်": "nub",
        "မ်": "an",
        "ိမ်": "ein",
        "ုမ်": "on",
        "ွမ်": "un",
        "ယ်": "e",
        "ိုလ်": "ol",
        "ဉ်": "in",
        "ံ": "an",
        "ိံ": "ein",
        "ုံ": "on",
        // Dhivehi
        "ައް": "ah",
        "ަށް": "ah"
      }, i = {
        en: {},
        // default language
        az: {
          // Azerbaijani
          ç: "c",
          ə: "e",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ə: "E",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U"
        },
        cs: {
          // Czech
          č: "c",
          ď: "d",
          ě: "e",
          ň: "n",
          ř: "r",
          š: "s",
          ť: "t",
          ů: "u",
          ž: "z",
          Č: "C",
          Ď: "D",
          Ě: "E",
          Ň: "N",
          Ř: "R",
          Š: "S",
          Ť: "T",
          Ů: "U",
          Ž: "Z"
        },
        fi: {
          // Finnish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        hu: {
          // Hungarian
          ä: "a",
          // ok
          Ä: "A",
          // ok
          // 'á': 'a', duplicate see charMap/latin
          // 'Á': 'A', duplicate see charMap/latin
          ö: "o",
          // ok
          Ö: "O",
          // ok
          // 'ő': 'o', duplicate see charMap/latin
          // 'Ő': 'O', duplicate see charMap/latin
          ü: "u",
          Ü: "U",
          ű: "u",
          Ű: "U"
        },
        lt: {
          // Lithuanian
          ą: "a",
          č: "c",
          ę: "e",
          ė: "e",
          į: "i",
          š: "s",
          ų: "u",
          ū: "u",
          ž: "z",
          Ą: "A",
          Č: "C",
          Ę: "E",
          Ė: "E",
          Į: "I",
          Š: "S",
          Ų: "U",
          Ū: "U"
        },
        lv: {
          // Latvian
          ā: "a",
          č: "c",
          ē: "e",
          ģ: "g",
          ī: "i",
          ķ: "k",
          ļ: "l",
          ņ: "n",
          š: "s",
          ū: "u",
          ž: "z",
          Ā: "A",
          Č: "C",
          Ē: "E",
          Ģ: "G",
          Ī: "i",
          Ķ: "k",
          Ļ: "L",
          Ņ: "N",
          Š: "S",
          Ū: "u",
          Ž: "Z"
        },
        pl: {
          // Polish
          ą: "a",
          ć: "c",
          ę: "e",
          ł: "l",
          ń: "n",
          ó: "o",
          ś: "s",
          ź: "z",
          ż: "z",
          Ą: "A",
          Ć: "C",
          Ę: "e",
          Ł: "L",
          Ń: "N",
          Ó: "O",
          Ś: "S",
          Ź: "Z",
          Ż: "Z"
        },
        sv: {
          // Swedish
          // 'å': 'a', duplicate see charMap/latin
          // 'Å': 'A', duplicate see charMap/latin
          ä: "a",
          // ok
          Ä: "A",
          // ok
          ö: "o",
          // ok
          Ö: "O"
          // ok
        },
        sk: {
          // Slovak
          ä: "a",
          Ä: "A"
        },
        sr: {
          // Serbian
          љ: "lj",
          њ: "nj",
          Љ: "Lj",
          Њ: "Nj",
          đ: "dj",
          Đ: "Dj"
        },
        tr: {
          // Turkish
          Ü: "U",
          Ö: "O",
          ü: "u",
          ö: "o"
        }
      }, o = {
        ar: {
          "∆": "delta",
          "∞": "la-nihaya",
          "♥": "hob",
          "&": "wa",
          "|": "aw",
          "<": "aqal-men",
          ">": "akbar-men",
          "∑": "majmou",
          "¤": "omla"
        },
        az: {},
        ca: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "amor",
          "&": "i",
          "|": "o",
          "<": "menys que",
          ">": "mes que",
          "∑": "suma dels",
          "¤": "moneda"
        },
        cs: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "nebo",
          "<": "mensi nez",
          ">": "vetsi nez",
          "∑": "soucet",
          "¤": "mena"
        },
        de: {
          "∆": "delta",
          "∞": "unendlich",
          "♥": "Liebe",
          "&": "und",
          "|": "oder",
          "<": "kleiner als",
          ">": "groesser als",
          "∑": "Summe von",
          "¤": "Waehrung"
        },
        dv: {
          "∆": "delta",
          "∞": "kolunulaa",
          "♥": "loabi",
          "&": "aai",
          "|": "noonee",
          "<": "ah vure kuda",
          ">": "ah vure bodu",
          "∑": "jumula",
          "¤": "faisaa"
        },
        en: {
          "∆": "delta",
          "∞": "infinity",
          "♥": "love",
          "&": "and",
          "|": "or",
          "<": "less than",
          ">": "greater than",
          "∑": "sum",
          "¤": "currency"
        },
        es: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "y",
          "|": "u",
          "<": "menos que",
          ">": "mas que",
          "∑": "suma de los",
          "¤": "moneda"
        },
        fa: {
          "∆": "delta",
          "∞": "bi-nahayat",
          "♥": "eshgh",
          "&": "va",
          "|": "ya",
          "<": "kamtar-az",
          ">": "bishtar-az",
          "∑": "majmooe",
          "¤": "vahed"
        },
        fi: {
          "∆": "delta",
          "∞": "aarettomyys",
          "♥": "rakkaus",
          "&": "ja",
          "|": "tai",
          "<": "pienempi kuin",
          ">": "suurempi kuin",
          "∑": "summa",
          "¤": "valuutta"
        },
        fr: {
          "∆": "delta",
          "∞": "infiniment",
          "♥": "Amour",
          "&": "et",
          "|": "ou",
          "<": "moins que",
          ">": "superieure a",
          "∑": "somme des",
          "¤": "monnaie"
        },
        ge: {
          "∆": "delta",
          "∞": "usasruloba",
          "♥": "siqvaruli",
          "&": "da",
          "|": "an",
          "<": "naklebi",
          ">": "meti",
          "∑": "jami",
          "¤": "valuta"
        },
        gr: {},
        hu: {
          "∆": "delta",
          "∞": "vegtelen",
          "♥": "szerelem",
          "&": "es",
          "|": "vagy",
          "<": "kisebb mint",
          ">": "nagyobb mint",
          "∑": "szumma",
          "¤": "penznem"
        },
        it: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amore",
          "&": "e",
          "|": "o",
          "<": "minore di",
          ">": "maggiore di",
          "∑": "somma",
          "¤": "moneta"
        },
        lt: {
          "∆": "delta",
          "∞": "begalybe",
          "♥": "meile",
          "&": "ir",
          "|": "ar",
          "<": "maziau nei",
          ">": "daugiau nei",
          "∑": "suma",
          "¤": "valiuta"
        },
        lv: {
          "∆": "delta",
          "∞": "bezgaliba",
          "♥": "milestiba",
          "&": "un",
          "|": "vai",
          "<": "mazak neka",
          ">": "lielaks neka",
          "∑": "summa",
          "¤": "valuta"
        },
        my: {
          "∆": "kwahkhyaet",
          "∞": "asaonasme",
          "♥": "akhyait",
          "&": "nhin",
          "|": "tho",
          "<": "ngethaw",
          ">": "kyithaw",
          "∑": "paungld",
          "¤": "ngwekye"
        },
        mk: {},
        nl: {
          "∆": "delta",
          "∞": "oneindig",
          "♥": "liefde",
          "&": "en",
          "|": "of",
          "<": "kleiner dan",
          ">": "groter dan",
          "∑": "som",
          "¤": "valuta"
        },
        pl: {
          "∆": "delta",
          "∞": "nieskonczonosc",
          "♥": "milosc",
          "&": "i",
          "|": "lub",
          "<": "mniejsze niz",
          ">": "wieksze niz",
          "∑": "suma",
          "¤": "waluta"
        },
        pt: {
          "∆": "delta",
          "∞": "infinito",
          "♥": "amor",
          "&": "e",
          "|": "ou",
          "<": "menor que",
          ">": "maior que",
          "∑": "soma",
          "¤": "moeda"
        },
        ro: {
          "∆": "delta",
          "∞": "infinit",
          "♥": "dragoste",
          "&": "si",
          "|": "sau",
          "<": "mai mic ca",
          ">": "mai mare ca",
          "∑": "suma",
          "¤": "valuta"
        },
        ru: {
          "∆": "delta",
          "∞": "beskonechno",
          "♥": "lubov",
          "&": "i",
          "|": "ili",
          "<": "menshe",
          ">": "bolshe",
          "∑": "summa",
          "¤": "valjuta"
        },
        sk: {
          "∆": "delta",
          "∞": "nekonecno",
          "♥": "laska",
          "&": "a",
          "|": "alebo",
          "<": "menej ako",
          ">": "viac ako",
          "∑": "sucet",
          "¤": "mena"
        },
        sr: {},
        tr: {
          "∆": "delta",
          "∞": "sonsuzluk",
          "♥": "ask",
          "&": "ve",
          "|": "veya",
          "<": "kucuktur",
          ">": "buyuktur",
          "∑": "toplam",
          "¤": "para birimi"
        },
        uk: {
          "∆": "delta",
          "∞": "bezkinechnist",
          "♥": "lubov",
          "&": "i",
          "|": "abo",
          "<": "menshe",
          ">": "bilshe",
          "∑": "suma",
          "¤": "valjuta"
        },
        vn: {
          "∆": "delta",
          "∞": "vo cuc",
          "♥": "yeu",
          "&": "va",
          "|": "hoac",
          "<": "nho hon",
          ">": "lon hon",
          "∑": "tong",
          "¤": "tien te"
        }
      }, l = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), u = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), f = [".", "!", "~", "*", "'", "(", ")"].join(""), d = function(h, m) {
        var b = "-", S = "", C = "", L = !0, k = {}, W, G, Z, fe, R, ue, re, le, xe, ne, w, ye, Q, P, j = "";
        if (typeof h != "string")
          return "";
        if (typeof m == "string" && (b = m), re = o.en, le = i.en, typeof m == "object") {
          W = m.maintainCase || !1, k = m.custom && typeof m.custom == "object" ? m.custom : k, Z = +m.truncate > 1 && m.truncate || !1, fe = m.uric || !1, R = m.uricNoSlash || !1, ue = m.mark || !1, L = !(m.symbols === !1 || m.lang === !1), b = m.separator || b, fe && (j += l), R && (j += u), ue && (j += f), re = m.lang && o[m.lang] && L ? o[m.lang] : L ? o.en : {}, le = m.lang && i[m.lang] ? i[m.lang] : m.lang === !1 || m.lang === !0 ? {} : i.en, m.titleCase && typeof m.titleCase.length == "number" && Array.prototype.toString.call(m.titleCase) ? (m.titleCase.forEach(function(V) {
            k[V + ""] = V + "";
          }), G = !0) : G = !!m.titleCase, m.custom && typeof m.custom.length == "number" && Array.prototype.toString.call(m.custom) && m.custom.forEach(function(V) {
            k[V + ""] = V + "";
          }), Object.keys(k).forEach(function(V) {
            var ke;
            V.length > 1 ? ke = new RegExp("\\b" + _(V) + "\\b", "gi") : ke = new RegExp(_(V), "gi"), h = h.replace(ke, k[V]);
          });
          for (w in k)
            j += w;
        }
        for (j += b, j = _(j), h = h.replace(/(^\s+|\s+$)/g, ""), Q = !1, P = !1, ne = 0, ye = h.length; ne < ye; ne++)
          w = h[ne], c(w, k) ? Q = !1 : le[w] ? (w = Q && le[w].match(/[A-Za-z0-9]/) ? " " + le[w] : le[w], Q = !1) : w in n ? (ne + 1 < ye && s.indexOf(h[ne + 1]) >= 0 ? (C += w, w = "") : P === !0 ? (w = a[C] + n[w], C = "") : w = Q && n[w].match(/[A-Za-z0-9]/) ? " " + n[w] : n[w], Q = !1, P = !1) : w in a ? (C += w, w = "", ne === ye - 1 && (w = a[C]), P = !0) : /* process symbol chars */ re[w] && !(fe && l.indexOf(w) !== -1) && !(R && u.indexOf(w) !== -1) ? (w = Q || S.substr(-1).match(/[A-Za-z0-9]/) ? b + re[w] : re[w], w += h[ne + 1] !== void 0 && h[ne + 1].match(/[A-Za-z0-9]/) ? b : "", Q = !0) : (P === !0 ? (w = a[C] + w, C = "", P = !1) : Q && (/[A-Za-z0-9]/.test(w) || S.substr(-1).match(/A-Za-z0-9]/)) && (w = " " + w), Q = !1), S += w.replace(new RegExp("[^\\w\\s" + j + "_-]", "g"), b);
        return G && (S = S.replace(/(\w)(\S*)/g, function(V, ke, ns) {
          var wt = ke.toUpperCase() + (ns !== null ? ns : "");
          return Object.keys(k).indexOf(wt.toLowerCase()) < 0 ? wt : wt.toLowerCase();
        })), S = S.replace(/\s+/g, b).replace(new RegExp("\\" + b + "+", "g"), b).replace(new RegExp("(^\\" + b + "+|\\" + b + "+$)", "g"), ""), Z && S.length > Z && (xe = S.charAt(Z) === b, S = S.slice(0, Z), xe || (S = S.slice(0, S.lastIndexOf(b)))), !W && !G && (S = S.toLowerCase()), S;
      }, E = function(h) {
        return function(b) {
          return d(b, h);
        };
      }, _ = function(h) {
        return h.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
      }, c = function(g, h) {
        for (var m in h)
          if (h[m] === g)
            return !0;
      };
      if (typeof t < "u" && t.exports)
        t.exports = d, t.exports.createSlug = E;
      else if (typeof define < "u" && define.amd)
        define([], function() {
          return d;
        });
      else
        try {
          if (r.getSlug || r.createSlug)
            throw "speakingurl: globals exists /(getSlug|createSlug)/";
          r.getSlug = d, r.createSlug = E;
        } catch {
        }
    }(e);
  }
}), Md = Go({
  "../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e, t) {
    v(), t.exports = qd();
  }
});
v();
v();
v();
v();
v();
v();
v();
v();
function jd(e) {
  var t;
  const r = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return r === "index" && ((t = e.__file) != null && t.endsWith("index.vue")) ? "" : r;
}
function Hd(e) {
  const t = e.__file;
  if (t)
    return Ad(Rd(t, ".vue"));
}
function La(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function vt(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)
    return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root)
    return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
async function Kd(e) {
  const { app: t, uid: r, instance: n } = e;
  try {
    if (n.__VUE_DEVTOOLS_NEXT_UID__)
      return n.__VUE_DEVTOOLS_NEXT_UID__;
    const s = await vt(t);
    if (!s)
      return null;
    const a = s.rootInstance === n;
    return `${s.id}:${a ? "root" : r}`;
  } catch {
  }
}
function Wo(e) {
  var t, r;
  const n = (t = e.subTree) == null ? void 0 : t.type, s = vt(e);
  return s ? ((r = s == null ? void 0 : s.types) == null ? void 0 : r.Fragment) === n : !1;
}
function yt(e) {
  var t, r, n;
  const s = jd((e == null ? void 0 : e.type) || {});
  if (s)
    return s;
  if ((e == null ? void 0 : e.root) === e)
    return "Root";
  for (const i in (r = (t = e.parent) == null ? void 0 : t.type) == null ? void 0 : r.components)
    if (e.parent.type.components[i] === (e == null ? void 0 : e.type))
      return La(e, i);
  for (const i in (n = e.appContext) == null ? void 0 : n.components)
    if (e.appContext.components[i] === (e == null ? void 0 : e.type))
      return La(e, i);
  const a = Hd((e == null ? void 0 : e.type) || {});
  return a || "Anonymous Component";
}
function On(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function zd() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
var Ye;
function Gd(e) {
  return Ye || (Ye = document.createRange()), Ye.selectNode(e), Ye.getBoundingClientRect();
}
function Wd(e) {
  const t = zd();
  if (!e.children)
    return t;
  for (let r = 0, n = e.children.length; r < n; r++) {
    const s = e.children[r];
    let a;
    if (s.component)
      a = ve(s.component);
    else if (s.el) {
      const i = s.el;
      i.nodeType === 1 || i.getBoundingClientRect ? a = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (a = Gd(i));
    }
    a && Jd(t, a);
  }
  return t;
}
function Jd(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Fa = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function ve(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Fa : Wo(e) ? Wd(e.subTree) : (t == null ? void 0 : t.nodeType) === 1 ? t == null ? void 0 : t.getBoundingClientRect() : e.subTree.component ? ve(e.subTree.component) : Fa;
}
v();
function Jn(e) {
  return Wo(e) ? Yd(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Yd(e) {
  if (!e.children)
    return [];
  const t = [];
  return e.children.forEach((r) => {
    r.component ? t.push(...Jn(r.component)) : r != null && r.el && t.push(r.el);
  }), t;
}
var Jo = "__vue-devtools-component-inspector__", Yo = "__vue-devtools-component-inspector__card__", Xo = "__vue-devtools-component-inspector__name__", Zo = "__vue-devtools-component-inspector__indicator__", Qo = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, Xd = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Zd = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function De() {
  return document.getElementById(Jo);
}
function Qd() {
  return document.getElementById(Yo);
}
function ef() {
  return document.getElementById(Zo);
}
function tf() {
  return document.getElementById(Xo);
}
function Yn(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function Xn(e) {
  var t;
  const r = document.createElement("div");
  r.id = (t = e.elementId) != null ? t : Jo, Object.assign(r.style, {
    ...Qo,
    ...Yn(e.bounds),
    ...e.style
  });
  const n = document.createElement("span");
  n.id = Yo, Object.assign(n.style, {
    ...Xd,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const s = document.createElement("span");
  s.id = Xo, s.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const a = document.createElement("i");
  return a.id = Zo, a.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(a.style, Zd), n.appendChild(s), n.appendChild(a), r.appendChild(n), document.body.appendChild(r), r;
}
function Zn(e) {
  const t = De(), r = Qd(), n = tf(), s = ef();
  t && (Object.assign(t.style, {
    ...Qo,
    ...Yn(e.bounds)
  }), Object.assign(r.style, {
    top: e.bounds.top < 35 ? 0 : "-35px"
  }), n.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, s.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function rf(e) {
  const t = ve(e);
  if (!t.width && !t.height)
    return;
  const r = yt(e);
  De() ? Zn({ bounds: t, name: r }) : Xn({ bounds: t, name: r });
}
function eu() {
  const e = De();
  e && (e.style.display = "none");
}
var wn = null;
function An(e) {
  const t = e.target;
  if (t) {
    const r = t.__vueParentComponent;
    if (r && (wn = r, r.vnode.el)) {
      const s = ve(r), a = yt(r);
      De() ? Zn({ bounds: s, name: a }) : Xn({ bounds: s, name: a });
    }
  }
}
function nf(e, t) {
  var r;
  if (e.preventDefault(), e.stopPropagation(), wn) {
    const n = (r = K.value) == null ? void 0 : r.app;
    Kd({
      app: n,
      uid: n.uid,
      instance: wn
    }).then((s) => {
      t(s);
    });
  }
}
var at = null;
function sf() {
  eu(), window.removeEventListener("mouseover", An), window.removeEventListener("click", at, !0), at = null;
}
function af() {
  return window.addEventListener("mouseover", An), new Promise((e) => {
    function t(r) {
      r.preventDefault(), r.stopPropagation(), nf(r, (n) => {
        window.removeEventListener("click", t, !0), at = null, window.removeEventListener("mouseover", An);
        const s = De();
        s && (s.style.display = "none"), e(JSON.stringify({ id: n }));
      });
    }
    at = t, window.addEventListener("click", t, !0);
  });
}
function of(e) {
  const t = On(K.value, e.id);
  if (t) {
    const [r] = Jn(t);
    if (typeof r.scrollIntoView == "function")
      r.scrollIntoView({
        behavior: "smooth"
      });
    else {
      const n = ve(t), s = document.createElement("div"), a = {
        ...Yn(n),
        position: "absolute"
      };
      Object.assign(s.style, a), document.body.appendChild(s), s.scrollIntoView({
        behavior: "smooth"
      }), setTimeout(() => {
        document.body.removeChild(s);
      }, 2e3);
    }
    setTimeout(() => {
      const n = ve(t);
      if (n.width || n.height) {
        const s = yt(t), a = De();
        a ? Zn({ ...e, name: s, bounds: n }) : Xn({ ...e, name: s, bounds: n }), setTimeout(() => {
          a && (a.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
v();
var Na, Ua;
(Ua = (Na = y).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__) != null || (Na.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function uf(e) {
  let t = 0;
  const r = setInterval(() => {
    y.__VUE_INSPECTOR__ && (clearInterval(r), t += 30, e()), t >= /* 5s */
    5e3 && clearInterval(r);
  }, 30);
}
function lf() {
  const e = y.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...r) => {
    e.disable(), t(...r);
  };
}
function cf() {
  return new Promise((e) => {
    function t() {
      lf(), e(y.__VUE_INSPECTOR__);
    }
    y.__VUE_INSPECTOR__ ? t() : uf(() => {
      t();
    });
  });
}
v();
v();
function df(e) {
  return !!(e && e.__v_isReadonly);
}
function tu(e) {
  return df(e) ? tu(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qr(e) {
  return !!(e && e.__v_isRef === !0);
}
function Fe(e) {
  const t = e && e.__v_raw;
  return t ? Fe(t) : e;
}
var ff = class {
  constructor() {
    this.refEditor = new hf();
  }
  set(e, t, r, n) {
    const s = Array.isArray(t) ? t : t.split(".");
    for (; s.length > 1; ) {
      const o = s.shift();
      e instanceof Map && (e = e.get(o)), e instanceof Set ? e = Array.from(e.values())[o] : e = e[o], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const a = s[0], i = this.refEditor.get(e)[a];
    n ? n(e, a, r) : this.refEditor.isRef(i) ? this.refEditor.set(i, r) : e[a] = r;
  }
  get(e, t) {
    const r = Array.isArray(t) ? t : t.split(".");
    for (let n = 0; n < r.length; n++)
      if (e instanceof Map ? e = e.get(r[n]) : e = e[r[n]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e)
        return;
    return e;
  }
  has(e, t, r = !1) {
    if (typeof e > "u")
      return !1;
    const n = Array.isArray(t) ? t.slice() : t.split("."), s = r ? 2 : 1;
    for (; e && n.length > s; ) {
      const a = n.shift();
      e = e[a], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, n[0]);
  }
  createDefaultSetCallback(e) {
    return (t, r, n) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(r, 1) : Fe(t) instanceof Map ? t.delete(r) : Fe(t) instanceof Set ? t.delete(Array.from(t.values())[r]) : Reflect.deleteProperty(t, r)), !e.remove) {
        const s = t[e.newKey || r];
        this.refEditor.isRef(s) ? this.refEditor.set(s, n) : Fe(t) instanceof Map ? t.set(e.newKey || r, n) : Fe(t) instanceof Set ? t.add(n) : t[e.newKey || r] = n;
      }
    };
  }
}, hf = class {
  set(e, t) {
    if (qr(e))
      e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((s) => e.add(s));
        return;
      }
      const r = Object.keys(t);
      if (e instanceof Map) {
        const s = new Set(e.keys());
        r.forEach((a) => {
          e.set(a, Reflect.get(t, a)), s.delete(a);
        }), s.forEach((a) => e.delete(a));
        return;
      }
      const n = new Set(Object.keys(e));
      r.forEach((s) => {
        Reflect.set(e, s, Reflect.get(t, s)), n.delete(s);
      }), n.forEach((s) => Reflect.deleteProperty(e, s));
    }
  }
  get(e) {
    return qr(e) ? e.value : e;
  }
  isRef(e) {
    return qr(e) || tu(e);
  }
};
v();
v();
v();
var pf = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function _f() {
  if (!jo || typeof localStorage > "u" || localStorage === null)
    return {
      recordingState: !1,
      mouseEventEnabled: !1,
      keyboardEventEnabled: !1,
      componentEventEnabled: !1,
      performanceEventEnabled: !1,
      selected: ""
    };
  const e = localStorage.getItem(pf);
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
v();
v();
v();
var Ba, Va;
(Va = (Ba = y).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS) != null || (Ba.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var gf = new Proxy(y.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, {
  get(e, t, r) {
    return Reflect.get(e, t, r);
  }
});
function mf(e, t) {
  q.timelineLayersState[t.id] = !1, gf.push({
    ...e,
    descriptorId: t.id,
    appRecord: vt(t.app)
  });
}
var $a, qa;
(qa = ($a = y).__VUE_DEVTOOLS_KIT_INSPECTOR__) != null || ($a.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var Qn = new Proxy(y.__VUE_DEVTOOLS_KIT_INSPECTOR__, {
  get(e, t, r) {
    return Reflect.get(e, t, r);
  }
}), ru = we(() => {
  Ie.hooks.callHook("sendInspectorToClient", nu());
});
function Ef(e, t) {
  var r, n;
  Qn.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: (r = e.treeFilterPlaceholder) != null ? r : "Search tree...",
    stateFilterPlaceholder: (n = e.stateFilterPlaceholder) != null ? n : "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: vt(t.app)
  }), ru();
}
function nu() {
  return Qn.filter((e) => e.descriptor.app === K.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    var t;
    const r = e.descriptor, n = e.options;
    return {
      id: n.id,
      label: n.label,
      logo: r.logo,
      icon: `custom-ic-baseline-${(t = n == null ? void 0 : n.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
      packageName: r.packageName,
      homepage: r.homepage,
      pluginId: r.id
    };
  });
}
function et(e, t) {
  return Qn.find((r) => r.options.id === e && (t ? r.descriptor.app === t : !0));
}
function vf() {
  const e = Ko();
  e.hook("addInspector", ({ inspector: n, plugin: s }) => {
    Ef(n, s.descriptor);
  });
  const t = we(async ({ inspectorId: n, plugin: s }) => {
    var a;
    if (!n || !((a = s == null ? void 0 : s.descriptor) != null && a.app) || q.highPerfModeEnabled)
      return;
    const i = et(n, s.descriptor.app), o = {
      app: s.descriptor.app,
      inspectorId: n,
      filter: (i == null ? void 0 : i.treeFilter) || "",
      rootNodes: []
    };
    await new Promise((l) => {
      e.callHookWith(
        async (u) => {
          await Promise.all(u.map((f) => f(o))), l();
        },
        "getInspectorTree"
        /* GET_INSPECTOR_TREE */
      );
    }), e.callHookWith(
      async (l) => {
        await Promise.all(l.map((u) => u({
          inspectorId: n,
          rootNodes: o.rootNodes
        })));
      },
      "sendInspectorTreeToClient"
      /* SEND_INSPECTOR_TREE_TO_CLIENT */
    );
  }, 120);
  e.hook("sendInspectorTree", t);
  const r = we(async ({ inspectorId: n, plugin: s }) => {
    var a;
    if (!n || !((a = s == null ? void 0 : s.descriptor) != null && a.app) || q.highPerfModeEnabled)
      return;
    const i = et(n, s.descriptor.app), o = {
      app: s.descriptor.app,
      inspectorId: n,
      nodeId: (i == null ? void 0 : i.selectedNodeId) || "",
      state: null
    }, l = {
      currentTab: `custom-inspector:${n}`
    };
    o.nodeId && await new Promise((u) => {
      e.callHookWith(
        async (f) => {
          await Promise.all(f.map((d) => d(o, l))), u();
        },
        "getInspectorState"
        /* GET_INSPECTOR_STATE */
      );
    }), e.callHookWith(
      async (u) => {
        await Promise.all(u.map((f) => f({
          inspectorId: n,
          nodeId: o.nodeId,
          state: o.state
        })));
      },
      "sendInspectorStateToClient"
      /* SEND_INSPECTOR_STATE_TO_CLIENT */
    );
  }, 120);
  return e.hook("sendInspectorState", r), e.hook("customInspectorSelectNode", ({ inspectorId: n, nodeId: s, plugin: a }) => {
    const i = et(n, a.descriptor.app);
    i && (i.selectedNodeId = s);
  }), e.hook("timelineLayerAdded", ({ options: n, plugin: s }) => {
    mf(n, s.descriptor);
  }), e.hook("timelineEventAdded", ({ options: n, plugin: s }) => {
    var a;
    const i = ["performance", "component-event", "keyboard", "mouse"];
    q.highPerfModeEnabled || !((a = q.timelineLayersState) != null && a[s.descriptor.id]) && !i.includes(n.layerId) || e.callHookWith(
      async (o) => {
        await Promise.all(o.map((l) => l(n)));
      },
      "sendTimelineEventToClient"
      /* SEND_TIMELINE_EVENT_TO_CLIENT */
    );
  }), e.hook("getComponentInstances", async ({ app: n }) => {
    const s = n.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!s)
      return null;
    const a = s.id.toString();
    return [...s.instanceMap].filter(([o]) => o.split(":")[0] === a).map(([, o]) => o);
  }), e.hook("getComponentBounds", async ({ instance: n }) => ve(n)), e.hook("getComponentName", ({ instance: n }) => yt(n)), e.hook("componentHighlight", ({ uid: n }) => {
    const s = K.value.instanceMap.get(n);
    s && rf(s);
  }), e.hook("componentUnhighlight", () => {
    eu();
  }), e;
}
var Ma, ja;
(ja = (Ma = y).__VUE_DEVTOOLS_KIT_APP_RECORDS__) != null || (Ma.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []);
var Ha, Ka;
(Ka = (Ha = y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__) != null || (Ha.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {});
var za, Ga;
(Ga = (za = y).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__) != null || (za.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = "");
var Wa, Ja;
(Ja = (Wa = y).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__) != null || (Wa.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []);
var Ya, Xa;
(Xa = (Ya = y).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__) != null || (Ya.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var ge = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function yf() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: _f()
  };
}
var Za, Qa;
(Qa = (Za = y)[ge]) != null || (Za[ge] = yf());
var bf = we((e) => {
  Ie.hooks.callHook("devtoolsStateUpdated", { state: e });
});
we((e, t) => {
  Ie.hooks.callHook("devtoolsConnectedUpdated", { state: e, oldState: t });
});
var bt = new Proxy(y.__VUE_DEVTOOLS_KIT_APP_RECORDS__, {
  get(e, t, r) {
    return t === "value" ? y.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : y.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
  }
}), K = new Proxy(y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, {
  get(e, t, r) {
    return t === "value" ? y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
  }
});
function su() {
  bf({
    ...y[ge],
    appRecords: bt.value,
    activeAppRecordId: K.id,
    tabs: y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Sf(e) {
  y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, su();
}
function Of(e) {
  y.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, su();
}
var q = new Proxy(y[ge], {
  get(e, t) {
    return t === "appRecords" ? bt : t === "activeAppRecordId" ? K.id : t === "tabs" ? y.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? y.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : y[ge][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, r) {
    return { ...y[ge] }, e[t] = r, y[ge][t] = r, !0;
  }
});
function wf(e = {}) {
  var t, r, n;
  const { file: s, host: a, baseUrl: i = window.location.origin, line: o = 0, column: l = 0 } = e;
  if (s) {
    if (a === "chrome-extension") {
      const u = s.replace(/\\/g, "\\\\"), f = (r = (t = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : t.openInEditorHost) != null ? r : "/";
      fetch(`${f}__open-in-editor?file=${encodeURI(s)}`).then((d) => {
        if (!d.ok) {
          const E = `Opening component ${u} failed`;
          console.log(`%c${E}`, "color:red");
        }
      });
    } else if (q.vitePluginDetected) {
      const u = (n = y.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) != null ? n : i;
      y.__VUE_INSPECTOR__.openInEditor(u, s, o, l);
    }
  }
}
v();
v();
v();
v();
v();
var ei, ti;
(ti = (ei = y).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__) != null || (ei.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var es = new Proxy(y.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, {
  get(e, t, r) {
    return Reflect.get(e, t, r);
  }
});
function Rn(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = e[r].defaultValue;
  }), t;
}
function ts(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Af(e) {
  var t, r, n;
  const s = (r = (t = es.find((a) => {
    var i;
    return a[0].id === e && !!((i = a[0]) != null && i.settings);
  })) == null ? void 0 : t[0]) != null ? r : null;
  return (n = s == null ? void 0 : s.settings) != null ? n : null;
}
function au(e, t) {
  var r, n, s;
  const a = ts(e);
  if (a) {
    const i = localStorage.getItem(a);
    if (i)
      return JSON.parse(i);
  }
  if (e) {
    const i = (n = (r = es.find((o) => o[0].id === e)) == null ? void 0 : r[0]) != null ? n : null;
    return Rn((s = i == null ? void 0 : i.settings) != null ? s : {});
  }
  return Rn(t);
}
function Rf(e, t) {
  const r = ts(e);
  localStorage.getItem(r) || localStorage.setItem(r, JSON.stringify(Rn(t)));
}
function Tf(e, t, r) {
  const n = ts(e), s = localStorage.getItem(n), a = JSON.parse(s || "{}"), i = {
    ...a,
    [t]: r
  };
  localStorage.setItem(n, JSON.stringify(i)), Ie.hooks.callHookWith(
    (o) => {
      o.forEach((l) => l({
        pluginId: e,
        key: t,
        oldValue: a[t],
        newValue: r,
        settings: i
      }));
    },
    "setPluginSettings"
    /* SET_PLUGIN_SETTINGS */
  );
}
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
var ri, ni, Y = (ni = (ri = y).__VUE_DEVTOOLS_HOOK) != null ? ni : ri.__VUE_DEVTOOLS_HOOK = Ko(), Cf = {
  vueAppInit(e) {
    Y.hook("app:init", e);
  },
  vueAppUnmount(e) {
    Y.hook("app:unmount", e);
  },
  vueAppConnected(e) {
    Y.hook("app:connected", e);
  },
  componentAdded(e) {
    return Y.hook("component:added", e);
  },
  componentEmit(e) {
    return Y.hook("component:emit", e);
  },
  componentUpdated(e) {
    return Y.hook("component:updated", e);
  },
  componentRemoved(e) {
    return Y.hook("component:removed", e);
  },
  setupDevtoolsPlugin(e) {
    Y.hook("devtools-plugin:setup", e);
  },
  perfStart(e) {
    return Y.hook("perf:start", e);
  },
  perfEnd(e) {
    return Y.hook("perf:end", e);
  }
}, iu = {
  on: Cf,
  setupDevToolsPlugin(e, t) {
    return Y.callHook("devtools-plugin:setup", e, t);
  }
}, Pf = class {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      // component inspector
      visitComponentTree: (e) => {
        this.hooks.hook("visitComponentTree", e);
      },
      inspectComponent: (e) => {
        this.hooks.hook("inspectComponent", e);
      },
      editComponentState: (e) => {
        this.hooks.hook("editComponentState", e);
      },
      // custom inspector
      getInspectorTree: (e) => {
        this.hooks.hook("getInspectorTree", e);
      },
      getInspectorState: (e) => {
        this.hooks.hook("getInspectorState", e);
      },
      editInspectorState: (e) => {
        this.hooks.hook("editInspectorState", e);
      },
      // timeline
      inspectTimelineEvent: (e) => {
        this.hooks.hook("inspectTimelineEvent", e);
      },
      timelineCleared: (e) => {
        this.hooks.hook("timelineCleared", e);
      },
      // settings
      setPluginSettings: (e) => {
        this.hooks.hook("setPluginSettings", e);
      }
    };
  }
  // component inspector
  notifyComponentUpdate(e) {
    var t;
    if (q.highPerfModeEnabled)
      return;
    const r = nu().find((n) => n.packageName === this.plugin.descriptor.packageName);
    if (r != null && r.id) {
      if (e) {
        const n = [
          e.appContext.app,
          e.uid,
          (t = e.parent) == null ? void 0 : t.uid,
          e
        ];
        Y.callHook("component:updated", ...n);
      } else
        Y.callHook(
          "component:updated"
          /* COMPONENT_UPDATED */
        );
      this.hooks.callHook("sendInspectorState", { inspectorId: r.id, plugin: this.plugin });
    }
  }
  // custom inspector
  addInspector(e) {
    this.hooks.callHook("addInspector", { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && Rf(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    q.highPerfModeEnabled || this.hooks.callHook("sendInspectorTree", { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    q.highPerfModeEnabled || this.hooks.callHook("sendInspectorState", { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook("customInspectorSelectNode", { inspectorId: e, nodeId: t, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook("visitComponentTree", e);
  }
  // timeline
  now() {
    return q.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook("timelineLayerAdded", { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    q.highPerfModeEnabled || this.hooks.callHook("timelineEventAdded", { options: e, plugin: this.plugin });
  }
  // settings
  getSettings(e) {
    return au(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  // utilities
  getComponentInstances(e) {
    return this.hooks.callHook("getComponentInstances", { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook("getComponentBounds", { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook("getComponentName", { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook("componentHighlight", { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(
      "componentUnhighlight"
      /* COMPONENT_UNHIGHLIGHT */
    );
  }
}, Df = Pf;
v();
v();
v();
v();
var If = "__vue_devtool_undefined__", xf = "__vue_devtool_infinity__", kf = "__vue_devtool_negative_infinity__", Lf = "__vue_devtool_nan__";
v();
v();
var Ff = {
  [If]: "undefined",
  [Lf]: "NaN",
  [xf]: "Infinity",
  [kf]: "-Infinity"
};
Object.entries(Ff).reduce((e, [t, r]) => (e[r] = t, e), {});
v();
v();
v();
v();
v();
var si, ai;
(ai = (si = y).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__) != null || (si.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function Nf(e, t) {
  return iu.setupDevToolsPlugin(e, t);
}
function Uf(e, t) {
  const [r, n] = e;
  if (r.app !== t)
    return;
  const s = new Df({
    plugin: {
      setupFn: n,
      descriptor: r
    },
    ctx: Ie
  });
  r.packageName === "vuex" && s.on.editInspectorState((a) => {
    s.sendInspectorState(a.inspectorId);
  }), n(s);
}
function ou(e) {
  y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || q.highPerfModeEnabled || (y.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), es.forEach((t) => {
    Uf(t, e);
  }));
}
v();
v();
var qe = "__VUE_DEVTOOLS_ROUTER__", Ae = "__VUE_DEVTOOLS_ROUTER_INFO__", ii, oi;
(oi = (ii = y)[Ae]) != null || (ii[Ae] = {
  currentRoute: null,
  routes: []
});
var ui, li;
(li = (ui = y)[qe]) != null || (ui[qe] = {});
new Proxy(y[Ae], {
  get(e, t) {
    return y[Ae][t];
  }
});
new Proxy(y[qe], {
  get(e, t) {
    if (t === "value")
      return y[qe];
  }
});
function Bf(e) {
  const t = /* @__PURE__ */ new Map();
  return ((e == null ? void 0 : e.getRoutes()) || []).filter((r) => !t.has(r.path) && t.set(r.path, 1));
}
function rs(e) {
  return e.map((t) => {
    let { path: r, name: n, children: s, meta: a } = t;
    return s != null && s.length && (s = rs(s)), {
      path: r,
      name: n,
      children: s,
      meta: a
    };
  });
}
function Vf(e) {
  if (e) {
    const { fullPath: t, hash: r, href: n, path: s, name: a, matched: i, params: o, query: l } = e;
    return {
      fullPath: t,
      hash: r,
      href: n,
      path: s,
      name: a,
      params: o,
      query: l,
      matched: rs(i)
    };
  }
  return e;
}
function $f(e, t) {
  function r() {
    var n;
    const s = (n = e.app) == null ? void 0 : n.config.globalProperties.$router, a = Vf(s == null ? void 0 : s.currentRoute.value), i = rs(Bf(s)), o = console.warn;
    console.warn = () => {
    }, y[Ae] = {
      currentRoute: a ? ka(a) : {},
      routes: ka(i)
    }, y[qe] = s, console.warn = o;
  }
  r(), iu.on.componentUpdated(we(() => {
    var n;
    ((n = t.value) == null ? void 0 : n.app) === e.app && (r(), !q.highPerfModeEnabled && Ie.hooks.callHook("routerInfoUpdated", { state: y[Ae] }));
  }, 200));
}
function qf(e) {
  return {
    // get inspector tree
    async getInspectorTree(t) {
      const r = {
        ...t,
        app: K.value.app,
        rootNodes: []
      };
      return await new Promise((n) => {
        e.callHookWith(
          async (s) => {
            await Promise.all(s.map((a) => a(r))), n();
          },
          "getInspectorTree"
          /* GET_INSPECTOR_TREE */
        );
      }), r.rootNodes;
    },
    // get inspector state
    async getInspectorState(t) {
      const r = {
        ...t,
        app: K.value.app,
        state: null
      }, n = {
        currentTab: `custom-inspector:${t.inspectorId}`
      };
      return await new Promise((s) => {
        e.callHookWith(
          async (a) => {
            await Promise.all(a.map((i) => i(r, n))), s();
          },
          "getInspectorState"
          /* GET_INSPECTOR_STATE */
        );
      }), r.state;
    },
    // edit inspector state
    editInspectorState(t) {
      const r = new ff(), n = {
        ...t,
        app: K.value.app,
        set: (s, a = t.path, i = t.state.value, o) => {
          r.set(s, a, i, o || r.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith(
        (s) => {
          s.forEach((a) => a(n));
        },
        "editInspectorState"
        /* EDIT_INSPECTOR_STATE */
      );
    },
    // send inspector state
    sendInspectorState(t) {
      const r = et(t);
      e.callHook("sendInspectorState", { inspectorId: t, plugin: {
        descriptor: r.descriptor,
        setupFn: () => ({})
      } });
    },
    // inspect component inspector
    inspectComponentInspector() {
      return af();
    },
    // cancel inspect component inspector
    cancelInspectComponentInspector() {
      return sf();
    },
    // get component render code
    getComponentRenderCode(t) {
      const r = On(K.value, t);
      if (r)
        return (r == null ? void 0 : r.type) instanceof Function ? r.type.toString() : r.render.toString();
    },
    // scroll to component
    scrollToComponent(t) {
      return of({ id: t });
    },
    // open in editor
    openInEditor: wf,
    // get vue inspector
    getVueInspector: cf,
    // toggle app
    toggleApp(t) {
      const r = bt.value.find((n) => n.id === t);
      r && (Of(t), Sf(r), $f(r, K), ru(), ou(r.app));
    },
    // inspect dom
    inspectDOM(t) {
      const r = On(K.value, t);
      if (r) {
        const [n] = Jn(r);
        n && (y.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = n);
      }
    },
    updatePluginSettings(t, r, n) {
      Tf(t, r, n);
    },
    getPluginSettings(t) {
      return {
        options: Af(t),
        values: au(t)
      };
    }
  };
}
v();
var ci, di;
(di = (ci = y).__VUE_DEVTOOLS_ENV__) != null || (ci.__VUE_DEVTOOLS_ENV__ = {
  vitePluginDetected: !1
});
var fi = vf(), hi, pi;
(pi = (hi = y).__VUE_DEVTOOLS_KIT_CONTEXT__) != null || (hi.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
  hooks: fi,
  get state() {
    return {
      ...q,
      activeAppRecordId: K.id,
      activeAppRecord: K.value,
      appRecords: bt.value
    };
  },
  api: qf(fi)
});
var Ie = y.__VUE_DEVTOOLS_KIT_CONTEXT__;
v();
$d(Md());
var _i, gi;
(gi = (_i = y).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__) != null || (_i.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
});
v();
function Mf(e) {
  q.highPerfModeEnabled = e ?? !q.highPerfModeEnabled, !e && K.value && ou(K.value.app);
}
v();
v();
v();
function jf(e) {
  q.devtoolsClientDetected = {
    ...q.devtoolsClientDetected,
    ...e
  };
  const t = Object.values(q.devtoolsClientDetected).some(Boolean);
  Mf(!t);
}
var mi, Ei;
(Ei = (mi = y).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__) != null || (mi.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = jf);
v();
v();
v();
v();
v();
v();
v();
var Hf = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, uu = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new Hf();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, Kf = class extends uu {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
v();
v();
function zf(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const r in e)
    e.hasOwnProperty(r) && t.push(e[r]);
  return t;
}
function Gf(e, t) {
  const r = zf(e);
  if ("find" in r)
    return r.find(t);
  const n = r;
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    if (t(a))
      return a;
  }
}
function Re(e, t) {
  Object.entries(e).forEach(([r, n]) => t(n, r));
}
function tt(e, t) {
  return e.indexOf(t) !== -1;
}
function vi(e, t) {
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (t(n))
      return n;
  }
}
var Wf = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return Gf(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
v();
v();
var Jf = (e) => Object.prototype.toString.call(e).slice(8, -1), lu = (e) => typeof e > "u", Yf = (e) => e === null, Me = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Tn = (e) => Me(e) && Object.keys(e).length === 0, de = (e) => Array.isArray(e), Xf = (e) => typeof e == "string", Zf = (e) => typeof e == "number" && !isNaN(e), Qf = (e) => typeof e == "boolean", eh = (e) => e instanceof RegExp, je = (e) => e instanceof Map, He = (e) => e instanceof Set, cu = (e) => Jf(e) === "Symbol", th = (e) => e instanceof Date && !isNaN(e.valueOf()), rh = (e) => e instanceof Error, yi = (e) => typeof e == "number" && isNaN(e), nh = (e) => Qf(e) || Yf(e) || lu(e) || Zf(e) || Xf(e) || cu(e), sh = (e) => typeof e == "bigint", ah = (e) => e === 1 / 0 || e === -1 / 0, ih = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), oh = (e) => e instanceof URL;
v();
var du = (e) => e.replace(/\./g, "\\."), Mr = (e) => e.map(String).map(du).join("."), Be = (e) => {
  const t = [];
  let r = "";
  for (let s = 0; s < e.length; s++) {
    let a = e.charAt(s);
    if (a === "\\" && e.charAt(s + 1) === ".") {
      r += ".", s++;
      continue;
    }
    if (a === ".") {
      t.push(r), r = "";
      continue;
    }
    r += a;
  }
  const n = r;
  return t.push(n), t;
};
v();
function oe(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var fu = [
  oe(lu, "undefined", () => null, () => {
  }),
  oe(sh, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  oe(th, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  oe(rh, "Error", (e, t) => {
    const r = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((n) => {
      r[n] = e[n];
    }), r;
  }, (e, t) => {
    const r = new Error(e.message);
    return r.name = e.name, r.stack = e.stack, t.allowedErrorProps.forEach((n) => {
      r[n] = e[n];
    }), r;
  }),
  oe(eh, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), r = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, r);
  }),
  oe(
    He,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  oe(je, "map", (e) => [...e.entries()], (e) => new Map(e)),
  oe((e) => yi(e) || ah(e), "number", (e) => yi(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  oe((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  oe(oh, "URL", (e) => e.toString(), (e) => new URL(e))
];
function St(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var hu = St((e, t) => cu(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, r) => {
  const n = r.symbolRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown symbol");
  return n;
}), uh = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), pu = St(ih, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const r = uh[t[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(e);
});
function _u(e, t) {
  return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var gu = St(_u, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const r = t.classRegistry.getAllowedProps(e.constructor);
  if (!r)
    return { ...e };
  const n = {};
  return r.forEach((s) => {
    n[s] = e[s];
  }), n;
}, (e, t, r) => {
  const n = r.classRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), e);
}), mu = St((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, r) => {
  const n = r.customTransformerRegistry.findByName(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown custom value");
  return n.deserialize(e);
}), lh = [gu, hu, mu, pu], bi = (e, t) => {
  const r = vi(lh, (s) => s.isApplicable(e, t));
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation(e, t)
    };
  const n = vi(fu, (s) => s.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation
    };
}, Eu = {};
fu.forEach((e) => {
  Eu[e.annotation] = e;
});
var ch = (e, t, r) => {
  if (de(t))
    switch (t[0]) {
      case "symbol":
        return hu.untransform(e, t, r);
      case "class":
        return gu.untransform(e, t, r);
      case "custom":
        return mu.untransform(e, t, r);
      case "typed-array":
        return pu.untransform(e, t, r);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const n = Eu[t];
    if (!n)
      throw new Error("Unknown transformation: " + t);
    return n.untransform(e, r);
  }
};
v();
var Se = (e, t) => {
  const r = e.keys();
  for (; t > 0; )
    r.next(), t--;
  return r.next().value;
};
function vu(e) {
  if (tt(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (tt(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (tt(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var dh = (e, t) => {
  vu(t);
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (He(e))
      e = Se(e, +n);
    else if (je(e)) {
      const s = +n, a = +t[++r] == 0 ? "key" : "value", i = Se(e, s);
      switch (a) {
        case "key":
          e = i;
          break;
        case "value":
          e = e.get(i);
          break;
      }
    } else
      e = e[n];
  }
  return e;
}, Cn = (e, t, r) => {
  if (vu(t), t.length === 0)
    return r(e);
  let n = e;
  for (let a = 0; a < t.length - 1; a++) {
    const i = t[a];
    if (de(n)) {
      const o = +i;
      n = n[o];
    } else if (Me(n))
      n = n[i];
    else if (He(n)) {
      const o = +i;
      n = Se(n, o);
    } else if (je(n)) {
      if (a === t.length - 2)
        break;
      const l = +i, u = +t[++a] == 0 ? "key" : "value", f = Se(n, l);
      switch (u) {
        case "key":
          n = f;
          break;
        case "value":
          n = n.get(f);
          break;
      }
    }
  }
  const s = t[t.length - 1];
  if (de(n) ? n[+s] = r(n[+s]) : Me(n) && (n[s] = r(n[s])), He(n)) {
    const a = Se(n, +s), i = r(a);
    a !== i && (n.delete(a), n.add(i));
  }
  if (je(n)) {
    const a = +t[t.length - 2], i = Se(n, a);
    switch (+s == 0 ? "key" : "value") {
      case "key": {
        const l = r(i);
        n.set(l, n.get(i)), l !== i && n.delete(i);
        break;
      }
      case "value": {
        n.set(i, r(n.get(i)));
        break;
      }
    }
  }
  return e;
};
function Pn(e, t, r = []) {
  if (!e)
    return;
  if (!de(e)) {
    Re(e, (a, i) => Pn(a, t, [...r, ...Be(i)]));
    return;
  }
  const [n, s] = e;
  s && Re(s, (a, i) => {
    Pn(a, t, [...r, ...Be(i)]);
  }), t(n, r);
}
function fh(e, t, r) {
  return Pn(t, (n, s) => {
    e = Cn(e, s, (a) => ch(a, n, r));
  }), e;
}
function hh(e, t) {
  function r(n, s) {
    const a = dh(e, Be(s));
    n.map(Be).forEach((i) => {
      e = Cn(e, i, () => a);
    });
  }
  if (de(t)) {
    const [n, s] = t;
    n.forEach((a) => {
      e = Cn(e, Be(a), () => e);
    }), s && Re(s, r);
  } else
    Re(t, r);
  return e;
}
var ph = (e, t) => Me(e) || de(e) || je(e) || He(e) || _u(e, t);
function _h(e, t, r) {
  const n = r.get(e);
  n ? n.push(t) : r.set(e, [t]);
}
function gh(e, t) {
  const r = {};
  let n;
  return e.forEach((s) => {
    if (s.length <= 1)
      return;
    t || (s = s.map((o) => o.map(String)).sort((o, l) => o.length - l.length));
    const [a, ...i] = s;
    a.length === 0 ? n = i.map(Mr) : r[Mr(a)] = i.map(Mr);
  }), n ? Tn(r) ? [n] : [n, r] : Tn(r) ? void 0 : r;
}
var yu = (e, t, r, n, s = [], a = [], i = /* @__PURE__ */ new Map()) => {
  var o;
  const l = nh(e);
  if (!l) {
    _h(e, s, t);
    const c = i.get(e);
    if (c)
      return n ? {
        transformedValue: null
      } : c;
  }
  if (!ph(e, r)) {
    const c = bi(e, r), g = c ? {
      transformedValue: c.value,
      annotations: [c.type]
    } : {
      transformedValue: e
    };
    return l || i.set(e, g), g;
  }
  if (tt(a, e))
    return {
      transformedValue: null
    };
  const u = bi(e, r), f = (o = u == null ? void 0 : u.value) != null ? o : e, d = de(f) ? [] : {}, E = {};
  Re(f, (c, g) => {
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      throw new Error(`Detected property ${g}. This is a prototype pollution risk, please remove it from your object.`);
    const h = yu(c, t, r, n, [...s, g], [...a, e], i);
    d[g] = h.transformedValue, de(h.annotations) ? E[g] = h.annotations : Me(h.annotations) && Re(h.annotations, (m, b) => {
      E[du(g) + "." + b] = m;
    });
  });
  const _ = Tn(E) ? {
    transformedValue: d,
    annotations: u ? [u.type] : void 0
  } : {
    transformedValue: d,
    annotations: u ? [u.type, E] : E
  };
  return l || i.set(e, _), _;
};
v();
v();
function bu(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Si(e) {
  return bu(e) === "Array";
}
function mh(e) {
  if (bu(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Eh(e, t, r, n, s) {
  const a = {}.propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
  a === "enumerable" && (e[t] = r), s && a === "nonenumerable" && Object.defineProperty(e, t, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Dn(e, t = {}) {
  if (Si(e))
    return e.map((s) => Dn(s, t));
  if (!mh(e))
    return e;
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols(e);
  return [...r, ...n].reduce((s, a) => {
    if (Si(t.props) && !t.props.includes(a))
      return s;
    const i = e[a], o = Dn(i, t);
    return Eh(s, a, o, e, t.nonenumerable), s;
  }, {});
}
var I = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new Kf(), this.symbolRegistry = new uu((t) => {
      var r;
      return (r = t.description) != null ? r : "";
    }), this.customTransformerRegistry = new Wf(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), r = yu(e, t, this, this.dedupe), n = {
      json: r.transformedValue
    };
    r.annotations && (n.meta = {
      ...n.meta,
      values: r.annotations
    });
    const s = gh(t, this.dedupe);
    return s && (n.meta = {
      ...n.meta,
      referentialEqualities: s
    }), n;
  }
  deserialize(e) {
    const { json: t, meta: r } = e;
    let n = Dn(t);
    return r != null && r.values && (n = fh(n, r.values, this)), r != null && r.referentialEqualities && (n = hh(n, r.referentialEqualities)), n;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
I.defaultInstance = new I();
I.serialize = I.defaultInstance.serialize.bind(I.defaultInstance);
I.deserialize = I.defaultInstance.deserialize.bind(I.defaultInstance);
I.stringify = I.defaultInstance.stringify.bind(I.defaultInstance);
I.parse = I.defaultInstance.parse.bind(I.defaultInstance);
I.registerClass = I.defaultInstance.registerClass.bind(I.defaultInstance);
I.registerSymbol = I.defaultInstance.registerSymbol.bind(I.defaultInstance);
I.registerCustom = I.defaultInstance.registerCustom.bind(I.defaultInstance);
I.allowErrorProps = I.defaultInstance.allowErrorProps.bind(I.defaultInstance);
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
v();
var Oi, wi;
(wi = (Oi = y).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__) != null || (Oi.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []);
var Ai, Ri;
(Ri = (Ai = y).__VUE_DEVTOOLS_KIT_RPC_CLIENT__) != null || (Ai.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null);
var Ti, Ci;
(Ci = (Ti = y).__VUE_DEVTOOLS_KIT_RPC_SERVER__) != null || (Ti.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null);
var Pi, Di;
(Di = (Pi = y).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__) != null || (Pi.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null);
var Ii, xi;
(xi = (Ii = y).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__) != null || (Ii.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null);
var ki, Li;
(Li = (ki = y).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__) != null || (ki.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
v();
v();
v();
v();
v();
v();
v();
var jr, Fi;
function vh() {
  if (Fi) return jr;
  Fi = 1;
  function e(t, r) {
    for (var n = -1, s = t == null ? 0 : t.length; ++n < s && r(t[n], n, t) !== !1; )
      ;
    return t;
  }
  return jr = e, jr;
}
var Hr, Ni;
function yh() {
  if (Ni) return Hr;
  Ni = 1;
  function e(t) {
    return function(r, n, s) {
      for (var a = -1, i = Object(r), o = s(r), l = o.length; l--; ) {
        var u = o[t ? l : ++a];
        if (n(i[u], u, i) === !1)
          break;
      }
      return r;
    };
  }
  return Hr = e, Hr;
}
var Kr, Ui;
function bh() {
  if (Ui) return Kr;
  Ui = 1;
  var e = yh(), t = e();
  return Kr = t, Kr;
}
var zr, Bi;
function Sh() {
  if (Bi) return zr;
  Bi = 1;
  function e(t, r) {
    for (var n = -1, s = Array(t); ++n < t; )
      s[n] = r(n);
    return s;
  }
  return zr = e, zr;
}
var Ne = { exports: {} }, Gr, Vi;
function Oh() {
  if (Vi) return Gr;
  Vi = 1;
  function e() {
    return !1;
  }
  return Gr = e, Gr;
}
Ne.exports;
var $i;
function wh() {
  return $i || ($i = 1, function(e, t) {
    var r = ot(), n = Oh(), s = t && !t.nodeType && t, a = s && !0 && e && !e.nodeType && e, i = a && a.exports === s, o = i ? r.Buffer : void 0, l = o ? o.isBuffer : void 0, u = l || n;
    e.exports = u;
  }(Ne, Ne.exports)), Ne.exports;
}
var Wr, qi;
function Ah() {
  if (qi) return Wr;
  qi = 1;
  var e = ut(), t = qn(), r = lt(), n = "[object Arguments]", s = "[object Array]", a = "[object Boolean]", i = "[object Date]", o = "[object Error]", l = "[object Function]", u = "[object Map]", f = "[object Number]", d = "[object Object]", E = "[object RegExp]", _ = "[object Set]", c = "[object String]", g = "[object WeakMap]", h = "[object ArrayBuffer]", m = "[object DataView]", b = "[object Float32Array]", S = "[object Float64Array]", C = "[object Int8Array]", L = "[object Int16Array]", k = "[object Int32Array]", W = "[object Uint8Array]", G = "[object Uint8ClampedArray]", Z = "[object Uint16Array]", fe = "[object Uint32Array]", R = {};
  R[b] = R[S] = R[C] = R[L] = R[k] = R[W] = R[G] = R[Z] = R[fe] = !0, R[n] = R[s] = R[h] = R[a] = R[m] = R[i] = R[o] = R[l] = R[u] = R[f] = R[d] = R[E] = R[_] = R[c] = R[g] = !1;
  function ue(re) {
    return r(re) && t(re.length) && !!R[e(re)];
  }
  return Wr = ue, Wr;
}
var Jr, Mi;
function Rh() {
  if (Mi) return Jr;
  Mi = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Jr = e, Jr;
}
var Ue = { exports: {} };
Ue.exports;
var ji;
function Th() {
  return ji || (ji = 1, function(e, t) {
    var r = po(), n = t && !t.nodeType && t, s = n && !0 && e && !e.nodeType && e, a = s && s.exports === n, i = a && r.process, o = function() {
      try {
        var l = s && s.require && s.require("util").types;
        return l || i && i.binding && i.binding("util");
      } catch {
      }
    }();
    e.exports = o;
  }(Ue, Ue.exports)), Ue.exports;
}
var Yr, Hi;
function Ch() {
  if (Hi) return Yr;
  Hi = 1;
  var e = Ah(), t = Rh(), r = Th(), n = r && r.isTypedArray, s = n ? t(n) : e;
  return Yr = s, Yr;
}
var Xr, Ki;
function Ph() {
  if (Ki) return Xr;
  Ki = 1;
  var e = Sh(), t = mo(), r = Te(), n = wh(), s = $n(), a = Ch(), i = Object.prototype, o = i.hasOwnProperty;
  function l(u, f) {
    var d = r(u), E = !d && t(u), _ = !d && !E && n(u), c = !d && !E && !_ && a(u), g = d || E || _ || c, h = g ? e(u.length, String) : [], m = h.length;
    for (var b in u)
      (f || o.call(u, b)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      _ && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      c && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      s(b, m))) && h.push(b);
    return h;
  }
  return Xr = l, Xr;
}
var Zr, zi;
function Dh() {
  if (zi) return Zr;
  zi = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, s = typeof n == "function" && n.prototype || e;
    return r === s;
  }
  return Zr = t, Zr;
}
var Qr, Gi;
function Ih() {
  if (Gi) return Qr;
  Gi = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Qr = e, Qr;
}
var en, Wi;
function xh() {
  if (Wi) return en;
  Wi = 1;
  var e = Ih(), t = e(Object.keys, Object);
  return en = t, en;
}
var tn, Ji;
function kh() {
  if (Ji) return tn;
  Ji = 1;
  var e = Dh(), t = xh(), r = Object.prototype, n = r.hasOwnProperty;
  function s(a) {
    if (!e(a))
      return t(a);
    var i = [];
    for (var o in Object(a))
      n.call(a, o) && o != "constructor" && i.push(o);
    return i;
  }
  return tn = s, tn;
}
var rn, Yi;
function Su() {
  if (Yi) return rn;
  Yi = 1;
  var e = _o(), t = qn();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return rn = r, rn;
}
var nn, Xi;
function Lh() {
  if (Xi) return nn;
  Xi = 1;
  var e = Ph(), t = kh(), r = Su();
  function n(s) {
    return r(s) ? e(s) : t(s);
  }
  return nn = n, nn;
}
var sn, Zi;
function Fh() {
  if (Zi) return sn;
  Zi = 1;
  var e = bh(), t = Lh();
  function r(n, s) {
    return n && e(n, s, t);
  }
  return sn = r, sn;
}
var an, Qi;
function Nh() {
  if (Qi) return an;
  Qi = 1;
  var e = Su();
  function t(r, n) {
    return function(s, a) {
      if (s == null)
        return s;
      if (!e(s))
        return r(s, a);
      for (var i = s.length, o = n ? i : -1, l = Object(s); (n ? o-- : ++o < i) && a(l[o], o, l) !== !1; )
        ;
      return s;
    };
  }
  return an = t, an;
}
var on, eo;
function Uh() {
  if (eo) return on;
  eo = 1;
  var e = Fh(), t = Nh(), r = t(e);
  return on = r, on;
}
var un, to;
function Bh() {
  if (to) return un;
  to = 1;
  function e(t) {
    return t;
  }
  return un = e, un;
}
var ln, ro;
function Vh() {
  if (ro) return ln;
  ro = 1;
  var e = Bh();
  function t(r) {
    return typeof r == "function" ? r : e;
  }
  return ln = t, ln;
}
var cn, no;
function $h() {
  if (no) return cn;
  no = 1;
  var e = vh(), t = Uh(), r = Vh(), n = Te();
  function s(a, i) {
    var o = n(a) ? e : t;
    return o(a, r(i));
  }
  return cn = s, cn;
}
var qh = $h();
const so = /* @__PURE__ */ Ke(qh);
var ee = /* @__PURE__ */ ((e) => (e.CREATE = "create", e.READ = "read", e.UPDATE = "update", e.DELETE = "delete", e))(ee || {}), In = /* @__PURE__ */ ((e) => (e.CREATED = "created", e.READ = "read", e.UPDATED = "updated", e.DELETED = "deleted", e))(In || {});
function ao(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ao(Object(r), !0).forEach(function(n) {
      Mh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ao(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mh(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function io(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((r, n) => (t.includes(n) || (r[n] = D(e[n])), r), {});
}
function it(e) {
  return typeof e == "function";
}
function jh(e) {
  return Nu(e) || Uu(e);
}
function Ou(e, t, r) {
  let n = e;
  const s = t.split(".");
  for (let a = 0; a < s.length; a++) {
    if (!n[s[a]]) return r;
    n = n[s[a]];
  }
  return n;
}
function dn(e, t, r) {
  return x(() => e.some((n) => Ou(t, n, {
    [r]: !1
  })[r]));
}
function oo(e, t, r) {
  return x(() => e.reduce((n, s) => {
    const a = Ou(t, s, {
      [r]: !1
    })[r] || [];
    return n.concat(a);
  }, []));
}
function wu(e, t, r, n) {
  return e.call(n, D(t), D(r), n);
}
function Au(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function Hh(e, t, r, n, s, a, i) {
  let {
    $lazy: o,
    $rewardEarly: l
  } = s, u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], f = arguments.length > 8 ? arguments[8] : void 0, d = arguments.length > 9 ? arguments[9] : void 0, E = arguments.length > 10 ? arguments[10] : void 0;
  const _ = te(!!n.value), c = te(0);
  r.value = !1;
  const g = Ve([t, n].concat(u, E), () => {
    if (o && !n.value || l && !d.value && !r.value)
      return;
    let h;
    try {
      h = wu(e, t, f, i);
    } catch (m) {
      h = Promise.reject(m);
    }
    c.value++, r.value = !!c.value, _.value = !1, Promise.resolve(h).then((m) => {
      c.value--, r.value = !!c.value, a.value = m, _.value = Au(m);
    }).catch((m) => {
      c.value--, r.value = !!c.value, a.value = m, _.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: _,
    $unwatch: g
  };
}
function Kh(e, t, r, n, s, a, i, o) {
  let {
    $lazy: l,
    $rewardEarly: u
  } = n;
  const f = () => ({}), d = x(() => {
    if (l && !r.value || u && !o.value)
      return !1;
    let E = !0;
    try {
      const _ = wu(e, t, i, a);
      s.value = _, E = Au(_);
    } catch (_) {
      s.value = _;
    }
    return E;
  });
  return {
    $unwatch: f,
    $invalid: d
  };
}
function zh(e, t, r, n, s, a, i, o, l, u, f) {
  const d = te(!1), E = e.$params || {}, _ = te(null);
  let c, g;
  e.$async ? {
    $invalid: c,
    $unwatch: g
  } = Hh(e.$validator, t, d, r, n, _, s, e.$watchTargets, l, u, f) : {
    $invalid: c,
    $unwatch: g
  } = Kh(e.$validator, t, r, n, _, s, l, u);
  const h = e.$message;
  return {
    $message: it(h) ? x(() => h(io({
      $pending: d,
      $invalid: c,
      $params: io(E),
      $model: t,
      $response: _,
      $validator: a,
      $propertyPath: o,
      $property: i
    }))) : h || "",
    $params: E,
    $pending: d,
    $invalid: c,
    $response: _,
    $unwatch: g
  };
}
function Gh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = D(e), r = Object.keys(t), n = {}, s = {}, a = {};
  let i = null;
  return r.forEach((o) => {
    const l = t[o];
    switch (!0) {
      case it(l.$validator):
        n[o] = l;
        break;
      case it(l):
        n[o] = {
          $validator: l
        };
        break;
      case o === "$validationGroups":
        i = l;
        break;
      case o.startsWith("$"):
        a[o] = l;
        break;
      default:
        s[o] = l;
    }
  }), {
    rules: n,
    nestedValidators: s,
    config: a,
    validationGroups: i
  };
}
const Wh = "__root";
function Jh(e, t, r, n, s, a, i, o, l) {
  const u = Object.keys(e), f = n.get(s, e), d = te(!1), E = te(!1), _ = te(0);
  if (f) {
    if (!f.$partial) return f;
    f.$unwatch(), d.value = f.$dirty.value;
  }
  const c = {
    $dirty: d,
    $path: s,
    $touch: () => {
      d.value || (d.value = !0);
    },
    $reset: () => {
      d.value && (d.value = !1);
    },
    $commit: () => {
    }
  };
  return u.length ? (u.forEach((g) => {
    c[g] = zh(e[g], t, c.$dirty, a, i, g, r, s, l, E, _);
  }), c.$externalResults = x(() => o.value ? [].concat(o.value).map((g, h) => ({
    $propertyPath: s,
    $property: r,
    $validator: "$externalResults",
    $uid: `${s}-externalResult-${h}`,
    $message: g,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), c.$invalid = x(() => {
    const g = u.some((h) => D(c[h].$invalid));
    return E.value = g, !!c.$externalResults.value.length || g;
  }), c.$pending = x(() => u.some((g) => D(c[g].$pending))), c.$error = x(() => c.$dirty.value ? c.$pending.value || c.$invalid.value : !1), c.$silentErrors = x(() => u.filter((g) => D(c[g].$invalid)).map((g) => {
    const h = c[g];
    return H({
      $propertyPath: s,
      $property: r,
      $validator: g,
      $uid: `${s}-${g}`,
      $message: h.$message,
      $params: h.$params,
      $response: h.$response,
      $pending: h.$pending
    });
  }).concat(c.$externalResults.value)), c.$errors = x(() => c.$dirty.value ? c.$silentErrors.value : []), c.$unwatch = () => u.forEach((g) => {
    c[g].$unwatch();
  }), c.$commit = () => {
    E.value = !0, _.value = Date.now();
  }, n.set(s, e, c), c) : (f && n.set(s, e, c), c);
}
function Yh(e, t, r, n, s, a, i) {
  const o = Object.keys(e);
  return o.length ? o.reduce((l, u) => (l[u] = xn({
    validations: e[u],
    state: t,
    key: u,
    parentKey: r,
    resultsCache: n,
    globalConfig: s,
    instance: a,
    externalResults: i
  }), l), {}) : {};
}
function Xh(e, t, r) {
  const n = x(() => [t, r].filter((c) => c).reduce((c, g) => c.concat(Object.values(D(g))), [])), s = x({
    get() {
      return e.$dirty.value || (n.value.length ? n.value.every((c) => c.$dirty) : !1);
    },
    set(c) {
      e.$dirty.value = c;
    }
  }), a = x(() => {
    const c = D(e.$silentErrors) || [], g = n.value.filter((h) => (D(h).$silentErrors || []).length).reduce((h, m) => h.concat(...m.$silentErrors), []);
    return c.concat(g);
  }), i = x(() => {
    const c = D(e.$errors) || [], g = n.value.filter((h) => (D(h).$errors || []).length).reduce((h, m) => h.concat(...m.$errors), []);
    return c.concat(g);
  }), o = x(() => n.value.some((c) => c.$invalid) || D(e.$invalid) || !1), l = x(() => n.value.some((c) => D(c.$pending)) || D(e.$pending) || !1), u = x(() => n.value.some((c) => c.$dirty) || n.value.some((c) => c.$anyDirty) || s.value), f = x(() => s.value ? l.value || o.value : !1), d = () => {
    e.$touch(), n.value.forEach((c) => {
      c.$touch();
    });
  }, E = () => {
    e.$commit(), n.value.forEach((c) => {
      c.$commit();
    });
  }, _ = () => {
    e.$reset(), n.value.forEach((c) => {
      c.$reset();
    });
  };
  return n.value.length && n.value.every((c) => c.$dirty) && d(), {
    $dirty: s,
    $errors: i,
    $invalid: o,
    $anyDirty: u,
    $error: f,
    $pending: l,
    $touch: d,
    $reset: _,
    $silentErrors: a,
    $commit: E
  };
}
function xn(e) {
  let {
    validations: t,
    state: r,
    key: n,
    parentKey: s,
    childResults: a,
    resultsCache: i,
    globalConfig: o = {},
    instance: l,
    externalResults: u
  } = e;
  const f = s ? `${s}.${n}` : n, {
    rules: d,
    nestedValidators: E,
    config: _,
    validationGroups: c
  } = Gh(t), g = ce(ce({}, o), _), h = n ? x(() => {
    const P = D(r);
    return P ? D(P[n]) : void 0;
  }) : r, m = ce({}, D(u) || {}), b = x(() => {
    const P = D(u);
    return n ? P ? D(P[n]) : void 0 : P;
  }), S = Jh(d, h, n, i, f, g, l, b, r), C = Yh(E, h, f, i, g, l, b), L = {};
  c && Object.entries(c).forEach((P) => {
    let [j, V] = P;
    L[j] = {
      $invalid: dn(V, C, "$invalid"),
      $error: dn(V, C, "$error"),
      $pending: dn(V, C, "$pending"),
      $errors: oo(V, C, "$errors"),
      $silentErrors: oo(V, C, "$silentErrors")
    };
  });
  const {
    $dirty: k,
    $errors: W,
    $invalid: G,
    $anyDirty: Z,
    $error: fe,
    $pending: R,
    $touch: ue,
    $reset: re,
    $silentErrors: le,
    $commit: xe
  } = Xh(S, C, a), ne = n ? x({
    get: () => D(h),
    set: (P) => {
      k.value = !0;
      const j = D(r), V = D(u);
      V && (V[n] = m[n]), pn(j[n]) ? j[n].value = P : j[n] = P;
    }
  }) : null;
  n && g.$autoDirty && Ve(h, () => {
    k.value || ue();
    const P = D(u);
    P && (P[n] = m[n]);
  }, {
    flush: "sync"
  });
  async function w() {
    return ue(), g.$rewardEarly && (xe(), await _n()), await _n(), new Promise((P) => {
      if (!R.value) return P(!G.value);
      const j = Ve(R, () => {
        P(!G.value), j();
      });
    });
  }
  function ye(P) {
    return (a.value || {})[P];
  }
  function Q() {
    pn(u) ? u.value = m : Object.keys(m).length === 0 ? Object.keys(u).forEach((P) => {
      delete u[P];
    }) : Object.assign(u, m);
  }
  return H(ce(ce(ce({}, S), {}, {
    $model: ne,
    $dirty: k,
    $error: fe,
    $errors: W,
    $invalid: G,
    $anyDirty: Z,
    $pending: R,
    $touch: ue,
    $reset: re,
    $path: f || Wh,
    $silentErrors: le,
    $validate: w,
    $commit: xe
  }, a && {
    $getResultsForChild: ye,
    $clearExternalResults: Q,
    $validationGroups: L
  }), C));
}
class Zh {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(t, r, n) {
    this.storage.set(t, {
      rules: r,
      result: n
    });
  }
  checkRulesValidity(t, r, n) {
    const s = Object.keys(n), a = Object.keys(r);
    return a.length !== s.length || !a.every((o) => s.includes(o)) ? !1 : a.every((o) => r[o].$params ? Object.keys(r[o].$params).every((l) => D(n[o].$params[l]) === D(r[o].$params[l])) : !0);
  }
  get(t, r) {
    const n = this.storage.get(t);
    if (!n) return;
    const {
      rules: s,
      result: a
    } = n, i = this.checkRulesValidity(t, r, s), o = a.$unwatch ? a.$unwatch : () => ({});
    return i ? a : {
      $dirty: a.$dirty,
      $partial: !0,
      $unwatch: o
    };
  }
}
const rt = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, uo = Symbol("vuelidate#injectChildResults"), lo = Symbol("vuelidate#removeChildResults");
function Qh(e) {
  let {
    $scope: t,
    instance: r
  } = e;
  const n = {}, s = te([]), a = x(() => s.value.reduce((f, d) => (f[d] = D(n[d]), f), {}));
  function i(f, d) {
    let {
      $registerAs: E,
      $scope: _,
      $stopPropagation: c
    } = d;
    c || t === rt.COLLECT_NONE || _ === rt.COLLECT_NONE || t !== rt.COLLECT_ALL && t !== _ || (n[E] = f, s.value.push(E));
  }
  r.__vuelidateInjectInstances = [].concat(r.__vuelidateInjectInstances || [], i);
  function o(f) {
    s.value = s.value.filter((d) => d !== f), delete n[f];
  }
  r.__vuelidateRemoveInstances = [].concat(r.__vuelidateRemoveInstances || [], o);
  const l = ss(uo, []);
  as(uo, r.__vuelidateInjectInstances);
  const u = ss(lo, []);
  return as(lo, r.__vuelidateRemoveInstances), {
    childResults: a,
    sendValidationResultsToParent: l,
    removeValidationResultsFromParent: u
  };
}
function Ru(e) {
  return new Proxy(e, {
    get(t, r) {
      return typeof t[r] == "object" ? Ru(t[r]) : x(() => t[r]);
    }
  });
}
let co = 0;
function ep(e, t) {
  var r;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (n = e, e = void 0, t = void 0);
  let {
    $registerAs: s,
    $scope: a = rt.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: o,
    currentVueInstance: l
  } = n;
  const u = l || ((r = Lu()) === null || r === void 0 ? void 0 : r.proxy), f = u ? u.$options : {};
  s || (co += 1, s = `_vuelidate_${co}`);
  const d = te({}), E = new Zh(), {
    childResults: _,
    sendValidationResultsToParent: c,
    removeValidationResultsFromParent: g
  } = u ? Qh({
    $scope: a,
    instance: u
  }) : {
    childResults: te({})
  };
  if (!e && f.validations) {
    const h = f.validations;
    t = te({}), Fu(() => {
      t.value = u, Ve(() => it(h) ? h.call(t.value, new Ru(t.value)) : h, (m) => {
        d.value = xn({
          validations: m,
          state: t,
          childResults: _,
          resultsCache: E,
          globalConfig: n,
          instance: u,
          externalResults: o || u.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), n = f.validationsConfig || n;
  } else {
    const h = pn(e) || jh(e) ? e : H(e || {});
    Ve(h, (m) => {
      d.value = xn({
        validations: m,
        state: t,
        childResults: _,
        resultsCache: E,
        globalConfig: n,
        instance: u ?? {},
        externalResults: o
      });
    }, {
      immediate: !0
    });
  }
  return u && (c.forEach((h) => h(d, {
    $registerAs: s,
    $scope: a,
    $stopPropagation: i
  })), ho(() => g.forEach((h) => h(s)))), x(() => ce(ce({}, D(d.value)), _.value));
}
class tp {
  constructor() {
    A(this, "model");
    /**
     * Holds the validation error states and messages
     * @param { any } v$ Validations
     */
    A(this, "v$");
    /**
     * Returns true if any errors are found
     */
    A(this, "$invalid", H({}));
    A(this, "$model", H({}));
    /**
     * Validations as per Vuelidate
     * https://vuelidate-next.netlify.app/guide.html#basics
     * Should be a computed property
     */
    A(this, "validations", x(() => ({})));
  }
  /**
   * Creates the validator
   * Sets Vuelidate
   */
  initValidations() {
    const t = this.model;
    this.v$ = ep(this.validations, { model: t }), this.set$Model(this.v$.value.model), N({ title: "Validation Initialized", data: this.v$.value.model });
  }
  /**
   * Validates the model and sets error messages
   */
  $validate() {
    return this.v$.value.$validate(), this.$invalid = this.v$.value.$invalid, U().then(), N({
      title: "Validation Response",
      data: {
        valid: !this.v$.value.$invalid,
        invalid: this.v$.value.$invalid,
        model: this.v$.value.model
      }
    }), !this.v$.value.$invalid;
  }
  /**
   * Resets all error messages
   */
  $reset() {
    this.v$.value.$reset(), Object.assign(this.$invalid, this.v$.value.$invalid), U().then(), N({ title: "Validation Reset", data: this.v$.value.model });
  }
  set$Model(t) {
    Object.assign(this.$model, t), U().then();
  }
}
class he extends zn {
  constructor(r, n) {
    super(r, n);
    A(this, "name");
    this.name = this.constructor.name;
  }
}
const M = [];
for (let e = 0; e < 256; ++e)
  M.push((e + 256).toString(16).slice(1));
function rp(e, t = 0) {
  return (M[e[t + 0]] + M[e[t + 1]] + M[e[t + 2]] + M[e[t + 3]] + "-" + M[e[t + 4]] + M[e[t + 5]] + "-" + M[e[t + 6]] + M[e[t + 7]] + "-" + M[e[t + 8]] + M[e[t + 9]] + "-" + M[e[t + 10]] + M[e[t + 11]] + M[e[t + 12]] + M[e[t + 13]] + M[e[t + 14]] + M[e[t + 15]]).toLowerCase();
}
let fn;
const np = new Uint8Array(16);
function sp() {
  if (!fn) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    fn = crypto.getRandomValues.bind(crypto);
  }
  return fn(np);
}
const ap = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), fo = { randomUUID: ap };
function Tu(e, t, r) {
  if (fo.randomUUID && !t && !e)
    return fo.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || sp)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, rp(n);
}
const ip = (e) => {
  console.log(e), e.forEach((t) => {
  });
};
class op extends tp {
  /**
   * @constructor
   */
  constructor() {
    super();
    /**
     * Model relationships
     */
    A(this, "relations");
    /**
     * Loading, success and error messages from API requests
     */
    A(this, "state", H({
      isLoading: !1,
      isSuccess: !0,
      isError: !1
    }));
    /**
     * Added for devtools support
     */
    A(this, "uuid");
    /**
     * Laravel Precognition's error messages
     */
    A(this, "errors", []);
    A(this, "isValid", !0);
    A(this, "isInvalid", !1);
    /**
     * To check if model is dirty / has been modified
     */
    A(this, "originalModel", {});
    /**
     * Default values for model paramters
     */
    A(this, "parameters");
    A(this, "protected", ["id", "created_at", "updated_at", "deleted_at"]);
    /**
     * To return the model to fresh/initial state
     */
    A(this, "defaultModel", {});
    this.uuid = Tu(), Pu(this).then(), N({ title: "Model Initialized", data: { uuid: this.uuid } });
  }
  /**
   * Creates instance of the model from API
   *
   * @async
   * @static
   * @param { Number } id - Model ID
   * @return { Promise<this> } An instance of the model
   */
  static async find(r) {
    const n = this.instance();
    return await n.find(r), n;
  }
  static instance() {
    return new this();
  }
  /**
   * Creates instance of the model from API
   *
   * @async
   * @param { Number } id - Model ID
   */
  async find(r) {
    this.setStateLoading(), typeof this.defaultModel > "u" && Object.assign(this.defaultModel, this.model);
    try {
      this.retrieving();
      const n = await this.api.show(r);
      this.setModel(n.data), N({ title: "Model Retrieved", data: { model: n.data } }), this.setOriginal(), this.setStateSuccess(), this.retrieved(n.data);
    } catch (n) {
      throw this.setStateError(), this.retrievingError(n), new he("Find", n);
    }
  }
  /**
   * Saves the model to database
   * If model has no id, it will be created (POST)
   * Otherwise it will be updated (PATCH)
   *
   * @async
   * @static
   * @param { Action } action - Action from enum
   * @return { Promise<{ model: any, actioned: Actioned.CREATED | Actioned.UPDATED }> } Actioned enum and Model
   */
  async save(r) {
    let n, s = "";
    this.saving();
    try {
      return !this.model.id || r === ee.CREATE ? (n = await this.create(), s = In.CREATED) : (n = await this.update(), s = In.UPDATED), this.saved(n), N({ title: s, data: { model: n } }), {
        actioned: s,
        model: n
      };
    } catch (a) {
      throw new he("Find", a);
    }
  }
  /**
   * Create a new model on the API
   *
   * @async
   * @template T
   * @return { Promise<T> } Model
   */
  async create() {
    try {
      this.creating(), this.setStateLoading();
      const r = await this.api.store(this.model);
      return this.setOriginal(), this.setModel(r.data), N({ title: "Created", data: { model: r.data } }), this.setStateSuccess(), this.created(r.data), r.data;
    } catch (r) {
      throw this.setStateError(), new he("Create", r);
    }
  }
  /**
   * Updates the model
   *
   * @async
   * @template T
   * @return { Promise<T> } Model
   */
  async update() {
    try {
      this.setStateLoading(), this.updating();
      const r = await this.api.update(this.model);
      return this.setOriginal(), this.setModel(r.data), N({ title: "Updated", data: { model: r.data } }), this.setStateSuccess(), this.updated(r.data), r.data;
    } catch (r) {
      throw this.setStateError(), new he("Update", r);
    }
  }
  /**
   * Deletes the model
   *
   * @async
   * @template T
   * @return { Promise<T> } Model
   */
  async delete() {
    try {
      this.deleting(), this.setStateLoading();
      const r = await this.api.destroy(this.model);
      return this.setOriginal(), this.setModel(r.data), N({ title: "Deleted", data: { model: r.data } }), this.setStateSuccess(), this.deleted(r.data), r.data;
    } catch (r) {
      throw this.setStateError(), new he("Delete", r);
    }
  }
  /**
   * Get model change logs
   * @async
   */
  async logs() {
    this.setStateLoading();
    try {
      const r = await this.api.logs(this.model.id);
      return this.setStateSuccess(), r.data;
    } catch (r) {
      throw this.setStateError(), new he("Logs", r);
    }
  }
  /**
   * Creates new instance of the model with default values
   *
   * @return { void }
   */
  fresh() {
    this.setModel(this.defaultModel), N({ title: "Fresh Model", data: { model: this.defaultModel } });
  }
  /**
   * Refresh model from API
   *
   * @async
   * @param { number? } id - Model id
   * @return { Promise<void> }
   */
  async refresh(r) {
    try {
      this.setStateLoading(), this.retrieving();
      const n = r || this.model.id, s = await this.api.show(n);
      this.setOriginal(), this.setStateSuccess(), this.factory(s.data), this.retrieved(s.data), N({ title: "Refreshed", data: { model: s.data } });
    } catch (n) {
      throw this.setStateError(), this.retrievingError(n), new he("Refresh", n);
    }
  }
  getOriginal() {
    return this.originalModel;
  }
  /**
   * Loads the model relationships
   *
   * @param { String | String[] } args - Relationships to load
   * @return { Promise<any> } Model or Models
   */
  async load(r) {
    switch (typeof r) {
      case "string":
        this.model[r] = await this[r]().get();
        break;
      case "object":
        for (const n of r)
          this.model[n] = await this[n]().get();
        break;
    }
    U().then();
  }
  /**
   * HasOne relationship
   *
   * @async
   * @param { any } api Api class to the relationship
   * @param { string } primaryKey of the relationship
   * @return { Promise<any> } Model
   */
  async hasOne(r, n) {
    const s = r.getResource();
    return await this.api.hasOne(s, n).get();
  }
  /**
   * HasMany relationship
   *
   * @async
   * @param { Api } api Api class to the relationship
   * @param { number } primaryKey of the relationship
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  hasMany(r, n) {
    const s = r.getResource();
    return {
      get: async () => await this.api.hasMany(s, n).get(),
      show: async (a) => await this.api.hasMany(s, n).show(a),
      create: async (a) => await this.api.hasMany(s, n).store(a),
      update: async (a) => await this.api.hasMany(s, n).update(a),
      delete: async (a) => await this.api.hasMany(s, n).delete(a.id)
    };
  }
  setRulesFromServer(r) {
    console.log(this.validations), so(r, (n, s) => {
      console.log(s, n);
      const a = ip(n);
      console.log(a);
    });
  }
  getDefault(r) {
    if (this.parameters && r in this.parameters)
      return this.parameters[r];
  }
  /**
   * Creates a new instance of the model based on existing Object
   *
   * @param { any } model Model object
   * @protected
   */
  factory(r) {
    this.defaultModel = Object.assign({}, this.model), r && this.setModel(r), so(this.parameters, (n, s) => {
      s in this.model && this.model[s] === void 0 && (this.model[s] = n);
    }), this.setOriginal();
  }
  /**
   * Updates the model property with new data
   *
   * @protected
   * @param { any } data - new model data
   * @return { VoidFunction }
   */
  setModel(r) {
    Object.assign(this.model, r), U().then();
  }
  /**
   * Creates a copy of the original model instance for refreshing if needed
   *
   * @return { VoidFunction }
   */
  setOriginal() {
    Object.assign(this.originalModel, this.model), U().then();
  }
  retrieving() {
  }
  /**
   * Retrieved runs after show method
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  retrieved(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  retrievingError(r) {
  }
  // Laravel validation testing
  /**
   * Runs before model is created
   */
  creating() {
  }
  /**
   * Runs after model is created
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  created(r) {
  }
  /**
   * Runs before model is updated
   */
  updating() {
  }
  /**
   * Runs after model is updated
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updated(r) {
  }
  /**
   * Runs before model is saved
   */
  saving() {
  }
  /**
   * Runs after model is saved
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  saved(r) {
  }
  /**
   * Runs before model is deleted
   */
  deleting() {
  }
  /**
   * Runs after model is created
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleted(r) {
  }
  /**
   * API starts loading state
   */
  setStateLoading() {
    this.state.isLoading = !0, this.state.isSuccess = !0, this.state.isError = !1, U().then(), N({ title: "Loading", data: this.state });
  }
  /**
   * API returned success response
   */
  setStateSuccess() {
    this.state.isLoading = !1, this.state.isSuccess = !0, this.state.isError = !1, U().then(), N({ title: "Loading success", data: this.state });
  }
  /**
   * API return error response
   */
  setStateError() {
    this.state.isLoading = !1, this.state.isSuccess = !1, this.state.isError = !0, U().then(), N({ title: "Loading error", data: this.state });
  }
}
const kn = [], Cu = [], Ot = [], Pu = async (e) => {
  if (!e) throw new Error("Model is not defined");
  const t = e instanceof op ? "model" : "collection";
  kn.push(e), Cu.push({
    id: e.uuid,
    label: e.constructor.name + "-" + kn.length,
    type: t
  }), Ot.push({
    id: e.uuid,
    model: e,
    type: t
  }), await U();
}, hn = () => ({ eloquentModels: kn, childrenNodes: Cu, childrenStates: Ot }), up = (e, t) => {
  if (e === "model")
    return lp(t);
  if (e === "collection")
    return cp(t);
};
function lp(e) {
  const t = Ot.find((r) => r.id === e);
  return {
    model: [
      { key: "uuid", value: t.model.uuid },
      { key: "model", value: t.model.model },
      { key: "defaultModel", value: t.model.defaultModel },
      { key: "relations", value: t.model.relations }
    ],
    state: [
      { key: "isLoading", value: t.model.state.isLoading },
      { key: "isSuccess", value: t.model.state.isSuccess },
      { key: "isError", value: t.model.state.isError }
    ],
    validation: [
      { key: "$model", value: t.model.$model },
      { key: "$invalid", value: t.model.$invalid },
      { key: "validations", value: t.model.validations }
    ]
  };
}
function cp(e) {
  const t = Ot.find((r) => r.id === e);
  return {
    data: [
      { key: "uuid", value: t.model.uuid },
      { key: "data", value: t.model.data },
      { key: "api", value: t.model.api }
    ],
    state: [
      { key: "isLoading", value: t.model.state.isLoading },
      { key: "isSuccess", value: t.model.state.isSuccess },
      { key: "isError", value: t.model.state.isError }
    ],
    query: [
      { key: "filter", value: t.model.filter },
      { key: "relationships", value: t.model.include },
      { key: "attributes", value: t.model.attributes },
      { key: "fields", value: t.model.fieldsSelection },
      { key: "paging", value: t.model.paging },
      { key: "sorting", value: t.model.sorting }
    ],
    broadcast: [
      { key: "isBroadcasting", value: t.model.isBroadcasting },
      { key: "channel", value: t.model.channel }
    ]
  };
}
const Oe = "vue-eloquent", Du = "vue-eloquent";
let se;
function dp(e) {
  Nf(
    {
      id: Oe,
      label: "Vue Eloquent",
      packageName: "vue-eloquent",
      homepage: "https://vue-eloquent.netlify.app/",
      app: e
    },
    (t) => {
      se = t, console.log("🚀 Vue Eloquent DevTools Plugin installed"), t.addInspector({
        id: Oe,
        label: "Vue Eloquent",
        icon: "api"
      }), t.addTimelineLayer({
        id: Du,
        color: 16750671,
        label: "Vue Eloquent"
      }), t.on.getInspectorTree((r, n) => {
        r.inspectorId === Oe && (r.rootNodes = [
          {
            id: "Models",
            label: "Models",
            children: hn().childrenNodes.filter((s) => s.type === "model")
          },
          {
            id: "Collections",
            label: "Collections",
            children: hn().childrenNodes.filter(
              (s) => s.type === "collection"
            )
          }
        ]);
      }), t.on.getInspectorState((r, n) => {
        if (r.inspectorId === Oe && r.nodeId) {
          const s = hn().childrenStates.find((a) => a.id === r.nodeId);
          if (s === void 0) {
            r.state = {};
            return;
          }
          r.state = up(s.type, s.id);
        }
      });
    }
  );
}
const U = async () => {
  se && setTimeout(async () => {
    await _n(), se == null || se.sendInspectorTree(Oe), se == null || se.sendInspectorState(Oe);
  }, 100);
}, N = ({ data: e, title: t = "Event" }) => {
  se && se.addTimelineEvent({
    layerId: Du,
    event: {
      time: se.now(),
      data: e,
      title: t
    }
  });
};
class Iu {
  constructor() {
    /**
     * Filters used on GET request
     */
    A(this, "filter", H({}));
    /**
     * Relations used on GET request
     */
    A(this, "include", H([]));
    /**
     * Attributes used on GET request
     */
    A(this, "attributes", H([]));
    /**
     * Fields to requested through API
     */
    A(this, "fieldsSelection", H([]));
    /**
     * Pagination used on GET request
     */
    A(this, "paging", H({}));
    /**
     * Sorting used on GET request
     */
    A(this, "sorting", H([]));
  }
  /**
   * Add a where clause to the query
   *
   * @param {object} filter - The filter to apply to the query
   * @return { this }
   */
  static where(t) {
    return this.instance().where(t);
  }
  /**
   * Add relationships to the query
   *
   * @param {string[]} relationships - The relationships to include in the query
   * @returns {this} The query instance
   */
  static with(t) {
    return this.instance().with(t);
  }
  /**
   * Add attributes to the query
   *
   * @param {string[]} attributes - The attributes to append to the query
   * @returns {this} The query instance
   */
  static append(t) {
    return this.instance().append(t);
  }
  /**
   * Select specific fields to be returned by the query
   *
   * @param {string[]} fields - The fields to select
   * @returns {this} The query instance
   */
  static select(t) {
    return this.instance().select(t);
  }
  /**
   * Sort the results of the query
   *
   * @param {string[]} sorting - The sorting criteria
   * @returns {this} The query instance
   */
  static sort(t) {
    return this.instance().sort(t);
  }
  /**
   * Set the pagination options for the query
   *
   * @param {object} paging - The pagination options
   * @returns {this} The query instance
   */
  static paginate(t) {
    return this.instance().paginate(t);
  }
  /**
   * Add a where clause to the query
   *
   * @param {object} filter - The filter to apply to the query
   * @returns {this} The query instance
   */
  where(t) {
    return Object.assign(this.filter, t), U().then(), this;
  }
  /**
   * Add relationships to the query
   *
   * @param {string[]} relationships - The relationships to include in the query
   * @returns {this} The query instance
   */
  with(t) {
    return this.include = [...t], U().then(), this;
  }
  /**
   * Add attributes to the query
   *
   * @param {string[]} attributes - The attributes to append to the query
   * @returns {this} The query instance
   */
  append(t) {
    return this.attributes = [...t], U().then(), this;
  }
  /**
   * Select specific fields to be returned by the query
   *
   * @param {string[]} fields - The fields to select
   * @returns {this} The query instance
   */
  select(t) {
    return this.fieldsSelection = [...t], U().then(), this;
  }
  /**
   * Sort the results of the query
   *
   * @param {string[]} sorting - The sorting criteria
   * @returns {this} The query instance
   */
  sort(t) {
    return this.sorting = [...t], U().then(), this;
  }
  /**
   * Set the pagination options for the query
   *
   * @param {object} paging - The pagination options
   * @returns {this} The query instance
   */
  paginate(t) {
    return Object.assign(this.paging, t), U().then(), this;
  }
  /**
   * Get the query parameters as a query string
   *
   * @returns {object} The query parameters
   */
  queryString() {
    const t = {};
    return this.filter && (t.filter = this.filter), this.include.length && (t.include = this.include.join(",")), this.fieldsSelection.length && (t.fields = this.fieldsSelection.join(",")), this.sorting.length && (t.sort = this.sorting.join(",")), this.attributes.length && (t.append = this.attributes), this.paging && (t.paginate = this.paging), t;
  }
}
class fp extends Iu {
  constructor() {
    super();
    /**
     * Base API endpoint
     * @param { string } apiPrefix
     */
    A(this, "apiPrefix", be);
    /**
     * API response parameters to be converted to Date
     * Accepts dot notation
     * @param { string[] } dates
     */
    A(this, "dates", ["created_at", "updated_at", "deleted_at"]);
  }
  /**
   * Returns instance
   *
   * @async
   * @static
   * @return { this }
   */
  static instance() {
    return new this();
  }
  static async get(r) {
    return await this.instance().get(r);
  }
  /**
   * Requests a single model from the API
   *
   * @async
   * @static
   * @template T
   * @param { number } id - Model ID
   * @return { Promise<any> } The data from the API
   */
  static show(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, r], "/");
    return n.retrieving(r), new Promise((a, i) => {
      T.get(s, {
        transformResponse: [(o) => n.transformResponse(o)]
      }).then((o) => {
        n.retrieved(o.data), a(o.data);
      }).catch((o) => {
        n.retrievingError(o), i(new B("Show", o));
      });
    });
  }
  /**
   * Validate the update request
   *
   * @async
   * @static
   * @template T
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static updateValidationRules(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, r.id], "/");
    return new Promise((a, i) => {
      T.patch(s, r, {
        headers: { "Request-Rules": !0 }
      }).then((o) => {
        a(o.data);
      }).catch((o) => {
        i(o.response);
      });
    });
  }
  /**
   * Updates a single model to the API
   *
   * @async
   * @static
   * @template {T extends ModelParams}
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static update(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, r.id], "/");
    return n.updating(r), new Promise((a, i) => {
      T.patch(s, r, {
        transformResponse: [(o) => n.transformResponse(o)]
      }).then((o) => {
        n.updated(o.data), a(o.data);
      }).catch((o) => {
        n.updatingError(o), i(new B("Update", o));
      });
    });
  }
  /**
   * Stores new model through the API
   *
   * @async
   * @static
   * @template T
   * @param { Partial<T> } payload - Model
   * @return { Promise<ApiResponse<T>> } The data from the API
   */
  static store(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource], "/");
    return n.storing(r), new Promise((a, i) => {
      T.post(s, r, {
        transformResponse: [(o) => n.transformResponse(o)]
      }).then((o) => {
        n.stored(o.data), a(o.data);
      }).catch((o) => {
        n.storingError(o), i(new B("Store", o));
      });
    });
  }
  /**
   * hasOne relationship methods
   *
   * @param { string } childResource - Child resource string to be passed on the endpoint
   * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  static hasOne(r, n) {
    const s = this.instance();
    return {
      get(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r],
          "/"
        );
        return s.fetching(a), new Promise((o, l) => {
          T.get(i, {
            params: a,
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.fetched(u.data), o(u.data.data[0]);
          }).catch((u) => {
            s.fetchingError(u), l(new B("Store", u));
          });
        });
      },
      show(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r, a.id],
          "/"
        );
        return s.retrieving(a), new Promise((o, l) => {
          T.get(i, {
            params: a,
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.retrieved(u.data), o(u.data);
          }).catch((u) => {
            s.retrievingError(u), l(new B("Store", u));
          });
        });
      },
      store(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r],
          "/"
        );
        return s.storing(a), new Promise((o, l) => {
          T.post(i, a, {
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.stored(u.data), o(u.data);
          }).catch((u) => {
            s.storingError(u), l(new B("Store", u));
          });
        });
      },
      update(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r, a.id],
          "/"
        );
        return s.updating(a), new Promise((o, l) => {
          T.patch(i, a, {
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.updated(u.data), o(u.data);
          }).catch((u) => {
            s.updatingError(u), l(new B("Store", u));
          });
        });
      },
      delete(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r, a.id],
          "/"
        );
        return s.destroying(a), new Promise((o, l) => {
          T.delete(i, {
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.destroyed(u.data), o(u.data);
          }).catch((u) => {
            s.destroyingError(u), l(new B("Store", u));
          });
        });
      }
    };
  }
  /**
   * hasMany relationship methods
   *
   * @param { string } childResource - Child resource string to be passed on the endpoint
   * @param { number } parentId - Parent ID - or Foreign Key - of the resource to be fetched
   * @return { Promise<{get, show, create, update, delete}> } Collection of Models
   */
  static hasMany(r, n) {
    const s = this.instance();
    return {
      get(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r],
          "/"
        );
        return s.fetching(a), new Promise((o, l) => {
          T.get(i, {
            params: a,
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.fetched(u.data), o(u.data.data);
          }).catch((u) => {
            s.fetchingError(u), l(new B("Store", u));
          });
        });
      },
      show(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r, a.id],
          "/"
        );
        return s.retrieving(a), new Promise((o, l) => {
          T.get(i, {
            params: a,
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.retrieved(u.data), o(u.data);
          }).catch((u) => {
            s.retrievingError(u), l(new B("Store", u));
          });
        });
      },
      store(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r],
          "/"
        );
        return s.storing(a), new Promise((o, l) => {
          T.post(i, a, {
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.stored(u.data), o(u.data);
          }).catch((u) => {
            s.storingError(u), l(new B("Store", u));
          });
        });
      },
      update(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r, a.id],
          "/"
        );
        return s.updating(a), new Promise((o, l) => {
          T.patch(i, a, {
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.updated(u.data), o(u.data);
          }).catch((u) => {
            s.updatingError(u), l(new B("Store", u));
          });
        });
      },
      delete(a) {
        const i = F(
          [s.apiPrefix, s.resource, n, r, a.id],
          "/"
        );
        return s.destroying(a), new Promise((o, l) => {
          T.delete(i, {
            transformResponse: [(u) => s.transformResponse(u)]
          }).then((u) => {
            s.destroyed(u.data), o(u.data);
          }).catch((u) => {
            s.destroyingError(u), l(new B("Store", u));
          });
        });
      }
    };
  }
  /**
   * Deletes a single model through the API
   *
   * @deprecated
   * @async
   * @static
   * @param { any } payload - Model
   * @return { Promise<any> } The data from the API
   */
  static delete(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, r.id], "/");
    return n.destroying(r), new Promise((a, i) => {
      T.delete(s, {
        transformResponse: [(o) => n.transformResponse(o)]
      }).then((o) => {
        n.destroyed(o.data), a(o.data);
      }).catch((o) => {
        n.destroyingError(o), i(new B("Delete", o));
      });
    });
  }
  static destroy(r, n = !0) {
    const s = typeof r == "number" ? r : r.id, a = this.instance();
    let i = null;
    n || (i = r);
    let o = "";
    return n ? o = F([a.apiPrefix, a.resource, s], "/") : o = F([a.apiPrefix, a.resource], "/"), a.destroying(r), new Promise((l, u) => {
      T.delete(o, {
        params: i,
        transformResponse: [(f) => a.transformResponse(f)]
      }).then((f) => {
        a.destroyed(f.data), l(f.data);
      }).catch((f) => {
        a.destroyingError(f), u(new B("Destroy", f));
      });
    });
  }
  /**
   * Stores multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { T[] } payload - Models. Will be wrapped in a data ({data: payload}) property before submitting to the API
   * @return { Promise<ApiResponse<T[]>> } The data from the API
   */
  static batchStore(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, "batch"], "/");
    return new Promise((a, i) => {
      T.post(
        s,
        { data: r },
        {
          transformResponse: [(o) => n.transformResponse(o)]
        }
      ).then((o) => {
        a(o.data);
      }).catch((o) => {
        n.batchStoringError(o), i(new B("BatchStoring", o));
      });
    });
  }
  /**
   * Updates multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { any[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<ApiResponse<T[]>> } The data from the API
   */
  static batchUpdate(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, "batch"], "/");
    return new Promise((a, i) => {
      T.patch(
        s,
        { data: r },
        {
          transformResponse: [(o) => n.transformResponse(o)]
        }
      ).then((o) => {
        a(o.data);
      }).catch((o) => {
        n.batchUpdatingError(o), i(new B("BatchUpdate", o));
      });
    });
  }
  /**
   * @deprecated Use batchDestroy instead
   * Batch destroys multiple records
   * @param { string } payload Api response
   */
  static batchDelete(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, "batch-delete"], "/");
    return new Promise((a, i) => {
      T.post(
        s,
        { data: r },
        {
          transformResponse: [(o) => n.transformResponse(o)]
        }
      ).then((o) => {
        a(o.data);
      }).catch((o) => {
        n.batchDestroyingError(o), i(new B("BatchDelete", o));
      });
    });
  }
  /**
   * Destroys multiple models to the API
   *
   * @async
   * @static
   * @template T
   * @param { T[] } payload - Models. Will be wrapped in a data property before submitting to the API
   * @return { Promise<any> } The data from the API
   */
  static batchDestroy(r) {
    const n = this.instance(), s = F([n.apiPrefix, n.resource, "batch-destroy"], "/");
    return new Promise((a, i) => {
      T.patch(
        s,
        { data: r },
        {
          transformResponse: [(o) => n.transformResponse(o)]
        }
      ).then((o) => {
        a(o.data);
      }).catch((o) => {
        n.batchDestroyingError(o), i(new B("BatchDestroy", o));
      });
    });
  }
  /**
   * Fetches model logs from API
   *
   * @async
   * @static
   * @param { any | number } payload Payload
   * @return { Promise<any> } The data from the API
   */
  static logs(r) {
    const n = this.instance();
    let s;
    typeof r == "number" ? s = r : s = r.id;
    const a = F([n.apiPrefix, n.resource, s, "logs"], "/");
    return new Promise((i, o) => {
      T.get(a, {
        transformResponse: [(l) => n.transformResponse(l)]
      }).then((l) => {
        i(l.data);
      }).catch((l) => {
        n.fetchingLogsError(l), o(new B("Logs", l));
      });
    });
  }
  /**
   * Returns the resource
   *
   * @return { string } resource
   */
  static getResource() {
    return this.instance().resource;
  }
  get(r) {
    const n = F([this.apiPrefix, this.resource], "/");
    let s;
    return r ? s = r : s = this.queryString(), this.fetching(s), new Promise((a, i) => {
      T.get(n, {
        params: s,
        transformResponse: [(o) => this.transformResponse(o)]
      }).then((o) => {
        this.fetched(o.data), a(o.data);
      }).catch((o) => {
        this.fetchingError(o), i(new B("Get", o));
      });
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  batchStoringError(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  batchUpdatingError(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  batchDestroyingError(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchingLogsError(r) {
  }
  /**
   * Transforms the response from the msw into a format that is expected
   *
   * @param { string } response Api response
   * @return { any } Parsed response
   */
  transformResponse(r) {
    if (console.log(r), r === null)
      return null;
    const n = JSON.parse(r);
    return n.data !== null && (n.data = Fl(n.data, this.dates)), n;
  }
  /**
   * Fetching runs before get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetching(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchingError(r) {
  }
  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetched(r) {
  }
  /**
   * Retrieving runs before show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  retrieving(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  retrievingError(r) {
  }
  /**
   * Retrieved runs after show method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  retrieved(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  storing(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  storingError(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stored(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updating(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updatingError(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updated(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  destroying(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  destroyingError(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  destroyed(r) {
  }
}
class hp extends zn {
  constructor(r, n) {
    super(r, n);
    A(this, "name");
    this.name = this.constructor.name;
  }
}
class Ep extends Iu {
  constructor() {
    super();
    /**
     * Added for devtools support
     */
    A(this, "uuid");
    /**
     * Loading, success and error messages from API requests
     */
    A(this, "state", H({
      isLoading: !1,
      isSuccess: !0,
      isError: !1
    }));
    A(this, "isBroadcasting", !1);
    /**
     * Broadcast channel name
     */
    A(this, "channel", "");
    this.uuid = Tu(), Pu(this).then(), N({ data: { uuid: this.uuid }, title: "Collection Initialized" }), ho(() => {
      this.leaveChannel();
    });
  }
  async get(r) {
    let n;
    this.setStateLoading();
    try {
      r ? n = r : n = this.queryString(), N({
        title: "Fetching",
        data: {
          query: n
        }
      }), this.fetching(n);
      const s = await this.api.get(n);
      return this.fetched(s), this.updateDataSource(s.data), N({ title: "Fetched", data: { data: s.data } }), this.setStateSuccess(), s.data;
    } catch (s) {
      throw this.fetchingError(s), this.setStateError(), new hp("Get", s);
    }
  }
  /**
   * Joins the broadcast channel
   * @param { string } channel Will join the default channel if null
   */
  joinChannel(r) {
    r && (this.channel = r), pe == null || pe.join(this.channel).error((n) => {
      console.error(n);
    }).listen(".created", (n) => {
      this.broadcastCreated(n);
    }).listen(".updated", (n) => {
      this.broadcastUpdated(n);
    }).listen(".deleted", (n) => {
      this.broadcastDeleted(n);
    }), this.isBroadcasting = !0, U().then(), N({ title: "Broadcasting", data: { channel: this.channel } });
  }
  /**
   * Leaves the broadcast channel
   */
  leaveChannel() {
    this.isBroadcasting && (pe == null || pe.leave(this.channel), this.isBroadcasting = !1), U().then(), N({ title: "Leaving Broadcast Channel", data: { channel: this.channel } });
  }
  /**
   * Creates an instance of the collection from a given array
   *
   * @template T
   * @param { T[]? } collection - Use the where method instead
   */
  factory(r) {
    r && r.length && (this.data = H([...r]));
  }
  /**
   * Fetching runs before get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetching(r) {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetchingError(r) {
  }
  /**
   * Fetched runs after get method
   * @param { any } payload Payload
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  fetched(r) {
  }
  /**
   * Broadcast created event
   * @param { any } e Broadcast event
   */
  broadcastCreated(r) {
  }
  /**
   * Broadcast updated event
   * @param { any } e Broadcast event
   */
  broadcastUpdated(r) {
  }
  /**
   * Broadcast deleted event
   * @param { any } e Broadcast event
   */
  broadcastDeleted(r) {
  }
  /**
   * API starts loading state
   */
  setStateLoading() {
    this.state.isLoading = !0, this.state.isSuccess = !0, this.state.isError = !1, U().then(), N({ title: "Loading", data: this.state });
  }
  /**
   * API returned success response
   */
  setStateSuccess() {
    this.state.isLoading = !1, this.state.isSuccess = !0, this.state.isError = !1, U().then(), N({ title: "Loading success", data: this.state });
  }
  /**
   * API return error response
   */
  setStateError() {
    this.state.isLoading = !1, this.state.isSuccess = !1, this.state.isError = !0, U().then(), N({ title: "Loading error", data: this.state });
  }
  updateDataSource(r) {
    this.data = H([...r]), U().then(), N({ title: "Data Update", data: r });
  }
}
class vp {
  constructor(t) {
    /**
     * Create a new Policy instance.
     *
     * @private
     * @params { Permissions } permissions: CRUD
     */
    A(this, "permissions", H({
      create: !0,
      read: !0,
      update: !0,
      delete: !0
    }));
    /**
     * Action being performed on the model (CRUD): CREATE, READ, UPDATE, DELETE
     * @param { Ref(Action) } action
     */
    A(this, "_action", te(ee.CREATE));
    t && this.set(t);
  }
  get action() {
    return this._action.value;
  }
  set action(t) {
    this._action.value = t;
  }
  /**
   * Sets the user permissions
   *
   * @param { Permissions } args
   */
  set(t) {
    typeof t.create < "u" ? this.permissions.create = t.create : this.permissions.create = !1, typeof t.read < "u" ? this.permissions.read = t.read : this.permissions.read = !1, typeof t.update < "u" ? this.permissions.update = t.update : this.permissions.update = !1, typeof t.delete < "u" ? this.permissions.delete = t.delete : this.permissions.delete = !1;
  }
  /**
   * Returns true if the user can perform the given action on the model
   *
   * @param { Action } action
   * @returns { boolean }
   */
  can(t) {
    return this.permissions[t];
  }
  /**
   * Returns true if the user cannot perform the given action on the model
   *
   * @param { Action } action
   * @returns { boolean }
   */
  cannot(t) {
    return !this.permissions[t];
  }
  /**
   * Returns true if the model is in read-only mode
   * @deprecated Use isReading() instead
   * @returns { boolean }
   */
  isReadOnly() {
    return this.permissions.update && this._action.value === ee.READ;
  }
  /**
   * Puts the model in edit mode if the user has permission
   * @deprecated Use updating() instead
   * @returns { boolean }
   */
  edit() {
    return this.updating();
  }
  /**
   * Sets the model and Creating mode
   *
   * @returns { boolean }
   */
  creating() {
    return this.permissions.create ? (this._action.value = ee.CREATE, !0) : !1;
  }
  /**
   * Sets the model and Reading mode
   *
   * @returns { boolean }
   */
  reading() {
    return this.permissions.read ? (this._action.value = ee.READ, !0) : !1;
  }
  /**
   * Sets the model and Updating mode
   *
   * @returns { boolean }
   */
  updating() {
    return this.permissions.update ? (this._action.value = ee.UPDATE, !0) : !1;
  }
  /**
   * Sets the model and Deleting mode
   *
   * @returns { boolean }
   */
  deleting() {
    return this.permissions.delete ? (this._action.value = ee.DELETE, !0) : !1;
  }
  /**
   * Returns true if the model is in reading mode
   *
   * @returns { boolean }
   */
  isReading() {
    return this._action.value === ee.READ;
  }
  /**
   * Returns true if the model is in updating mode
   *
   * @returns { boolean }
   */
  isUpdating() {
    return this._action.value === ee.UPDATE;
  }
  /**
   * Returns true if the model is in deleting mode
   *
   * @returns { boolean }
   */
  isDeleting() {
    return this._action.value === ee.DELETE;
  }
  /**
   * Returns true if the model is in creating mode
   *
   * @returns { boolean }
   */
  isCreating() {
    return this._action.value === ee.CREATE;
  }
}
class yp extends fp {
  constructor() {
    super();
    A(this, "resource", "eloquent-api/models");
  }
}
const bp = {
  install(e) {
    process.env.NODE_ENV !== "production" && dp(e);
  }
};
class Sp {
  /**
   * @param config
   */
  constructor(t) {
    A(this, "urls", {
      login: "login",
      logout: "logout",
      forgotPassword: "users/forgot-password",
      resetPassword: "users/reset-password"
    });
    t != null && t.login && (this.urls.login = t.login), t != null && t.logout && (this.urls.logout = t.logout), t != null && t.forgotPassword && (this.urls.forgotPassword = t.forgotPassword), t != null && t.resetPassword && (this.urls.resetPassword = t.resetPassword);
  }
  get token() {
    return localStorage.getItem("sanctum_token");
  }
  set token(t) {
    localStorage.setItem("sanctum_token", t);
  }
  /**
   * Logs in the user
   *
   * @async
   * @param { any } payload
   * @return { Promise<any> }
   */
  login(t) {
    return new Promise((r, n) => {
      T.get("/api/csrf-cookie").then(() => {
        const s = `${be}/${this.urls.login}`;
        T.post(s, t).then((a) => {
          this.token = a.data.token, T.defaults.headers.common.Authorization = `Bearer ${this.token}`, this.loggedIn(a.data), r(a.data);
        }).catch((a) => {
          console.error(a), n(a);
        });
      }).catch((s) => {
        console.error(s), this.loginError(s), n(s);
      });
    });
  }
  loggedIn(t) {
  }
  loginError(t) {
  }
  isAuthenticated() {
    return localStorage.getItem("sanctum_token") !== null;
  }
  logout() {
    const t = `${be}/${this.urls.logout}`;
    return new Promise((r, n) => {
      T.post(t).then((s) => {
        localStorage.removeItem("sanctum_token"), this.loggedOut(s.data), r(s.data);
      }).catch((s) => {
        console.error(s), this.logoutError(s), n(s);
      });
    });
  }
  loggedOut(t) {
  }
  logoutError(t) {
  }
  forgotPassword(t) {
    const r = `${be}/${this.urls.forgotPassword}`;
    return new Promise((n, s) => {
      T.post(r, { email: t }).then((a) => {
        n(a.data);
      }).catch((a) => {
        console.error(a), s(a);
      });
    });
  }
  resetPassword(t) {
    const r = `${be}/${this.urls.resetPassword}`;
    return new Promise((n, s) => {
      T.post(r, t).then((a) => {
        this.token = a.data.token, T.defaults.headers.common.Authorization = `Bearer ${this.token}`, this.loggedIn(a.data), n(a.data);
      }).catch((a) => {
        console.error(a), s(a);
      });
    });
  }
}
export {
  ee as Action,
  In as Actioned,
  fp as Api,
  B as ApiError,
  Iu as ApiQuery,
  Sp as Auth,
  Ep as Collection,
  hp as CollectionError,
  zn as EloquentError,
  op as Model,
  yp as ModelApi,
  he as ModelError,
  vp as Policy,
  bp as VueEloquentPlugin,
  pe as broadcast,
  gp as createBroadcast,
  mp as createHttp,
  ga as formatDates,
  Fl as formatObject,
  T as http
};
//# sourceMappingURL=vue-eloquent.js.map
