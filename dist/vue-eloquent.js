import * as e from "vue";
import { computed as t, nextTick as n, onBeforeUnmount as r, reactive as i, ref as a } from "vue";
//#region \0rolldown/runtime.js
var o = Object.create, s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = Object.getOwnPropertyNames, u = Object.getPrototypeOf, d = Object.prototype.hasOwnProperty, f = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), p = (e, t) => {
	let n = {};
	for (var r in e) s(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || s(n, Symbol.toStringTag, { value: "Module" }), n;
}, m = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = l(t), a = 0, o = i.length, u; a < o; a++) u = i[a], !d.call(e, u) && u !== n && s(e, u, {
		get: ((e) => t[e]).bind(null, u),
		enumerable: !(r = c(t, u)) || r.enumerable
	});
	return e;
}, h = (e, t, n) => (m(e, t, "default"), n && m(n, t, "default")), g = (e, t, n) => (n = e == null ? {} : o(u(e)), m(t || !e || !e.__esModule || !d.call(e, "default") ? s(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), _;
function v(e) {
	if (!e) throw Error("Client is required when creating Broadcast");
	_ = e;
}
//#endregion
//#region node_modules/lodash/isArray.js
var y = /* @__PURE__ */ f(((e, t) => {
	t.exports = Array.isArray;
})), b = /* @__PURE__ */ f(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), x = /* @__PURE__ */ f(((e, t) => {
	var n = b(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), S = /* @__PURE__ */ f(((e, t) => {
	t.exports = x().Symbol;
})), ee = /* @__PURE__ */ f(((e, t) => {
	var n = S(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), C = /* @__PURE__ */ f(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), te = /* @__PURE__ */ f(((e, t) => {
	var n = S(), r = ee(), i = C(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), w = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), T = /* @__PURE__ */ f(((e, t) => {
	var n = te(), r = w(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), E = /* @__PURE__ */ f(((e, t) => {
	var n = y(), r = T(), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
	function o(e, t) {
		if (n(e)) return !1;
		var o = typeof e;
		return o == "number" || o == "symbol" || o == "boolean" || e == null || r(e) ? !0 : a.test(e) || !i.test(e) || t != null && e in Object(t);
	}
	t.exports = o;
})), D = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), O = /* @__PURE__ */ f(((e, t) => {
	var n = te(), r = D(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), k = /* @__PURE__ */ f(((e, t) => {
	t.exports = x()["__core-js_shared__"];
})), A = /* @__PURE__ */ f(((e, t) => {
	var n = k(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), ne = /* @__PURE__ */ f(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), re = /* @__PURE__ */ f(((e, t) => {
	var n = O(), r = A(), i = D(), a = ne(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), ie = /* @__PURE__ */ f(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), ae = /* @__PURE__ */ f(((e, t) => {
	var n = re(), r = ie();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), oe = /* @__PURE__ */ f(((e, t) => {
	t.exports = ae()(Object, "create");
})), se = /* @__PURE__ */ f(((e, t) => {
	var n = oe();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), ce = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), le = /* @__PURE__ */ f(((e, t) => {
	var n = oe(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), ue = /* @__PURE__ */ f(((e, t) => {
	var n = oe(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), de = /* @__PURE__ */ f(((e, t) => {
	var n = oe(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), fe = /* @__PURE__ */ f(((e, t) => {
	var n = se(), r = ce(), i = le(), a = ue(), o = de();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), pe = /* @__PURE__ */ f(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), me = /* @__PURE__ */ f(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), he = /* @__PURE__ */ f(((e, t) => {
	var n = me();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), ge = /* @__PURE__ */ f(((e, t) => {
	var n = he(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), _e = /* @__PURE__ */ f(((e, t) => {
	var n = he();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), ve = /* @__PURE__ */ f(((e, t) => {
	var n = he();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), ye = /* @__PURE__ */ f(((e, t) => {
	var n = he();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), be = /* @__PURE__ */ f(((e, t) => {
	var n = pe(), r = ge(), i = _e(), a = ve(), o = ye();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), xe = /* @__PURE__ */ f(((e, t) => {
	t.exports = ae()(x(), "Map");
})), Se = /* @__PURE__ */ f(((e, t) => {
	var n = fe(), r = be(), i = xe();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), Ce = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), we = /* @__PURE__ */ f(((e, t) => {
	var n = Ce();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), Te = /* @__PURE__ */ f(((e, t) => {
	var n = we();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), Ee = /* @__PURE__ */ f(((e, t) => {
	var n = we();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), De = /* @__PURE__ */ f(((e, t) => {
	var n = we();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), Oe = /* @__PURE__ */ f(((e, t) => {
	var n = we();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), ke = /* @__PURE__ */ f(((e, t) => {
	var n = Se(), r = Te(), i = Ee(), a = De(), o = Oe();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Ae = /* @__PURE__ */ f(((e, t) => {
	var n = ke(), r = "Expected a function";
	function i(e, t) {
		if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(r);
		var a = function() {
			var n = arguments, r = t ? t.apply(this, n) : n[0], i = a.cache;
			if (i.has(r)) return i.get(r);
			var o = e.apply(this, n);
			return a.cache = i.set(r, o) || i, o;
		};
		return a.cache = new (i.Cache || n)(), a;
	}
	i.Cache = n, t.exports = i;
})), je = /* @__PURE__ */ f(((e, t) => {
	var n = Ae(), r = 500;
	function i(e) {
		var t = n(e, function(e) {
			return i.size === r && i.clear(), e;
		}), i = t.cache;
		return t;
	}
	t.exports = i;
})), Me = /* @__PURE__ */ f(((e, t) => {
	var n = je(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g;
	t.exports = n(function(e) {
		var t = [];
		return e.charCodeAt(0) === 46 && t.push(""), e.replace(r, function(e, n, r, a) {
			t.push(r ? a.replace(i, "$1") : n || e);
		}), t;
	});
})), Ne = /* @__PURE__ */ f(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
		return i;
	}
	t.exports = n;
})), Pe = /* @__PURE__ */ f(((e, t) => {
	var n = S(), r = Ne(), i = y(), a = T(), o = 1 / 0, s = n ? n.prototype : void 0, c = s ? s.toString : void 0;
	function l(e) {
		if (typeof e == "string") return e;
		if (i(e)) return r(e, l) + "";
		if (a(e)) return c ? c.call(e) : "";
		var t = e + "";
		return t == "0" && 1 / e == -o ? "-0" : t;
	}
	t.exports = l;
})), Fe = /* @__PURE__ */ f(((e, t) => {
	var n = Pe();
	function r(e) {
		return e == null ? "" : n(e);
	}
	t.exports = r;
})), Ie = /* @__PURE__ */ f(((e, t) => {
	var n = y(), r = E(), i = Me(), a = Fe();
	function o(e, t) {
		return n(e) ? e : r(e, t) ? [e] : i(a(e));
	}
	t.exports = o;
})), Le = /* @__PURE__ */ f(((e, t) => {
	var n = T(), r = 1 / 0;
	function i(e) {
		if (typeof e == "string" || n(e)) return e;
		var t = e + "";
		return t == "0" && 1 / e == -r ? "-0" : t;
	}
	t.exports = i;
})), Re = /* @__PURE__ */ f(((e, t) => {
	var n = Ie(), r = Le();
	function i(e, t) {
		t = n(t, e);
		for (var i = 0, a = t.length; e != null && i < a;) e = e[r(t[i++])];
		return i && i == a ? e : void 0;
	}
	t.exports = i;
})), ze = /* @__PURE__ */ f(((e, t) => {
	var n = Re();
	function r(e, t, r) {
		var i = e == null ? void 0 : n(e, t);
		return i === void 0 ? r : i;
	}
	t.exports = r;
})), Be = /* @__PURE__ */ f(((e, t) => {
	var n = Object.prototype.hasOwnProperty;
	function r(e, t) {
		return e != null && n.call(e, t);
	}
	t.exports = r;
})), Ve = /* @__PURE__ */ f(((e, t) => {
	var n = te(), r = w(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), He = /* @__PURE__ */ f(((e, t) => {
	var n = Ve(), r = w(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), Ue = /* @__PURE__ */ f(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), We = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), Ge = /* @__PURE__ */ f(((e, t) => {
	var n = Ie(), r = He(), i = y(), a = Ue(), o = We(), s = Le();
	function c(e, t, c) {
		t = n(t, e);
		for (var l = -1, u = t.length, d = !1; ++l < u;) {
			var f = s(t[l]);
			if (!(d = e != null && c(e, f))) break;
			e = e[f];
		}
		return d || ++l != u ? d : (u = e == null ? 0 : e.length, !!u && o(u) && a(f, u) && (i(e) || r(e)));
	}
	t.exports = c;
})), Ke = /* @__PURE__ */ f(((e, t) => {
	var n = Be(), r = Ge();
	function i(e, t) {
		return e != null && r(e, t, n);
	}
	t.exports = i;
})), qe = /* @__PURE__ */ f(((e, t) => {
	var n = ae();
	t.exports = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch {}
	}();
})), Je = /* @__PURE__ */ f(((e, t) => {
	var n = qe();
	function r(e, t, r) {
		t == "__proto__" && n ? n(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	t.exports = r;
})), Ye = /* @__PURE__ */ f(((e, t) => {
	var n = Je(), r = me(), i = Object.prototype.hasOwnProperty;
	function a(e, t, a) {
		var o = e[t];
		(!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a);
	}
	t.exports = a;
})), Xe = /* @__PURE__ */ f(((e, t) => {
	var n = Ye(), r = Ie(), i = Ue(), a = D(), o = Le();
	function s(e, t, s, c) {
		if (!a(e)) return e;
		t = r(t, e);
		for (var l = -1, u = t.length, d = u - 1, f = e; f != null && ++l < u;) {
			var p = o(t[l]), m = s;
			if (p === "__proto__" || p === "constructor" || p === "prototype") return e;
			if (l != d) {
				var h = f[p];
				m = c ? c(h, p, f) : void 0, m === void 0 && (m = a(h) ? h : i(t[l + 1]) ? [] : {});
			}
			n(f, p, m), f = f[p];
		}
		return e;
	}
	t.exports = s;
})), Ze = /* @__PURE__ */ f(((e, t) => {
	var n = Xe();
	function r(e, t, r) {
		return e == null ? e : n(e, t, r);
	}
	t.exports = r;
})), Qe = /* @__PURE__ */ g(ze(), 1), $e = /* @__PURE__ */ g(Ke(), 1), et = /* @__PURE__ */ g(Ze(), 1), tt = (e, t) => (t.forEach((t) => {
	let n = t.split(".").join(".");
	if ((0, $e.default)(e, n)) {
		let t = (0, Qe.default)(e, n);
		t && (0, et.default)(e, n, new Date(t));
	}
}), e), nt = (e, t) => e === void 0 ? e : e.length === void 0 ? (e = tt(e, t), e) : (e.forEach((e) => {
	tt(e, t);
}), e);
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function rt(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: it } = Object.prototype, { getPrototypeOf: at } = Object, { iterator: ot, toStringTag: st } = Symbol, ct = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), lt = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), ut = (e, t, n) => e === Object.prototype || !n && t === null, dt = (e) => {
	if (!Object.isExtensible(e)) return !1;
	let t = Object.getOwnPropertyNames(e);
	return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((t) => {
		if (lt(t)) return !1;
		let n = Object.getOwnPropertyDescriptor(e, t);
		return !!n && n.configurable && n.writable === !0;
	});
}, ft = (e, t) => {
	let n = e, r = [];
	for (; n != null;) {
		if (r.indexOf(n) !== -1) return !1;
		r.push(n);
		let i = at(n);
		if (ut(n, i, n === e)) return !1;
		if (ct(n, t)) return !0;
		n = i;
	}
	return !1;
}, pt = (e, t) => e != null && ft(e, t) ? e[t] : void 0, mt = (e) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	let t = at(e);
	if (t === null && dt(e)) return e;
	let n = Object.create(null), r = Object.create(null), i = [], a = e;
	for (; a != null && i.indexOf(a) === -1;) {
		i.push(a);
		let o = a === e ? t : at(a);
		if (ut(a, o, a === e)) break;
		let s = Object.getOwnPropertyNames(a);
		Object.getOwnPropertySymbols && s.push(...Object.getOwnPropertySymbols(a));
		for (let t of s) lt(t) || ct(r, t) || (n[t] = e[t], r[t] = !0);
		a = o;
	}
	return n;
}, ht = ((e) => (t) => {
	let n = it.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), gt = (e) => (e = e.toLowerCase(), (t) => ht(t) === e), _t = (e) => (t) => typeof t === e, { isArray: vt } = Array, yt = _t("undefined");
function bt(e) {
	return e !== null && !yt(e) && e.constructor !== null && !yt(e.constructor) && j(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var xt = gt("ArrayBuffer");
function St(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && xt(e.buffer), t;
}
var Ct = _t("string"), j = _t("function"), wt = _t("number"), Tt = (e) => typeof e == "object" && !!e, Et = (e) => e === !0 || e === !1, Dt = (e) => {
	if (!Tt(e)) return !1;
	let t = at(e);
	return (t === null || t === Object.prototype || at(t) === null) && !ft(e, st) && !ft(e, ot);
}, Ot = (e) => {
	if (!Tt(e) || bt(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, kt = gt("Date"), At = gt("File"), jt = (e) => !!(e && e.uri !== void 0), Mt = (e) => e && e.getParts !== void 0, Nt = gt("Blob"), Pt = gt("FileList"), Ft = gt("Set"), It = (e) => Tt(e) && j(e.pipe);
function Lt() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var Rt = Lt(), zt = Rt.FormData === void 0 ? void 0 : Rt.FormData, Bt = (e) => {
	if (!e) return !1;
	if (zt && e instanceof zt) return !0;
	let t = at(e);
	if (!t || t === Object.prototype || !j(e.append)) return !1;
	let n = ht(e);
	return n === "formdata" || n === "object" && j(e.toString) && e.toString() === "[object FormData]";
}, Vt = gt("URLSearchParams"), [Ht, Ut, Wt, Gt] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(gt), Kt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qt(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), vt(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (bt(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function Jt(e, t) {
	if (bt(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var Yt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xt = (e) => !yt(e) && e !== Yt;
function Zt(...e) {
	let { caseless: t, skipUndefined: n } = Xt(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && Jt(r, i) || i, o = ct(r, a) ? r[a] : void 0;
		Dt(o) && Dt(e) ? r[a] = Zt(o, e) : Dt(e) ? r[a] = Zt({}, e) : vt(e) ? r[a] = e.slice() : (!n || !yt(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || bt(n) || (qt(n, i), typeof n != "object" || vt(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			un.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var Qt = (e, t, n, { allOwnKeys: r } = {}) => (qt(t, (t, r) => {
	n && j(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: rt(t, n),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(e, r, {
		__proto__: null,
		value: t,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: r }), e), $t = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), en = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		__proto__: null,
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", {
		__proto__: null,
		value: t.prototype
	}), n && Object.assign(e.prototype, n);
}, tn = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && at(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, nn = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, rn = (e) => {
	if (!e) return null;
	if (vt(e)) return e;
	let t = e.length;
	if (!wt(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, an = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && at(Uint8Array)), on = (e, t) => {
	let n = (e && e[ot]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, sn = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, cn = gt("HTMLFormElement"), ln = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: un } = Object.prototype, dn = gt("RegExp"), fn = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	qt(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, pn = (e) => {
	fn(e, (t, n) => {
		if (j(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (j(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, mn = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return vt(e) ? r(e) : r(String(e).split(t)), n;
}, hn = () => {}, gn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function _n(e) {
	return !!(e && j(e.append) && e[st] === "FormData" && e[ot]);
}
var vn = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (Tt(e)) {
			if (t.has(e)) return;
			if (bt(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r;
				if (Ft(e)) {
					r = [];
					for (let t of e) {
						let e = n(t);
						!yt(e) && r.push(e);
					}
				} else r = vt(e) ? [] : {}, qt(e, (e, t) => {
					let i = n(e);
					!yt(i) && (r[t] = i);
				});
				return t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, yn = gt("AsyncFunction"), bn = (e) => e && (Tt(e) || j(e)) && j(e.then) && j(e.catch), xn = ((e, t) => e ? setImmediate : t ? ((e, t) => (Yt.addEventListener("message", ({ source: n, data: r }) => {
	n === Yt && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), Yt.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", j(Yt.postMessage)), Sn = typeof queueMicrotask < "u" ? queueMicrotask.bind(Yt) : typeof process < "u" && process.nextTick || xn, Cn = (e) => e != null && j(e[ot]), M = {
	isArray: vt,
	isArrayBuffer: xt,
	isBuffer: bt,
	isFormData: Bt,
	isArrayBufferView: St,
	isString: Ct,
	isNumber: wt,
	isBoolean: Et,
	isObject: Tt,
	isPlainObject: Dt,
	isEmptyObject: Ot,
	isReadableStream: Ht,
	isRequest: Ut,
	isResponse: Wt,
	isHeaders: Gt,
	isUndefined: yt,
	isDate: kt,
	isFile: At,
	isReactNativeBlob: jt,
	isReactNative: Mt,
	isBlob: Nt,
	isRegExp: dn,
	isFunction: j,
	isStream: It,
	isURLSearchParams: Vt,
	isTypedArray: an,
	isFileList: Pt,
	forEach: qt,
	merge: Zt,
	extend: Qt,
	trim: Kt,
	stripBOM: $t,
	inherits: en,
	toFlatObject: tn,
	kindOf: ht,
	kindOfTest: gt,
	endsWith: nn,
	toArray: rn,
	forEachEntry: on,
	matchAll: sn,
	isHTMLForm: cn,
	hasOwnProperty: ct,
	hasOwnProp: ct,
	hasOwnInPrototypeChain: ft,
	getSafeProp: pt,
	toSafeFlatObject: mt,
	reduceDescriptors: fn,
	freezeMethods: pn,
	toObjectSet: mn,
	toCamelCase: ln,
	noop: hn,
	toFiniteNumber: gn,
	findKey: Jt,
	global: Yt,
	isContextDefined: Xt,
	isSpecCompliantForm: _n,
	toJSONObject: vn,
	isAsyncFn: yn,
	isThenable: bn,
	setImmediate: xn,
	asap: Sn,
	isIterable: Cn,
	isSafeIterable: (e) => e != null && ft(e, ot) && Cn(e)
}, wn = M.toObjectSet([
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
]), Tn = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim();
		let a = M.hasOwnProp(t, n);
		!n || a && M.hasOwnProp(wn, n) || (n === "set-cookie" ? a ? t[n].push(r) : t[n] = [r] : t[n] = a ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function En(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
var Dn = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), On = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function kn(e, t) {
	return M.isArray(e) ? e.map((e) => kn(e, t)) : En(String(e).replace(t, ""));
}
var An = (e) => kn(e, Dn), jn = (e) => kn(e, On);
function Mn(e) {
	let t = Object.create(null);
	return M.forEach(e.toJSON(), (e, n) => {
		t[n] = jn(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var Nn = Symbol("internals");
function Pn(e) {
	return e && String(e).trim().toLowerCase();
}
function Fn(e) {
	return e === !1 || e == null ? e : M.isArray(e) ? e.map(Fn) : An(String(e));
}
function In(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var Ln = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Rn(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
function zn(e) {
	let t = e.length - 1;
	if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34) return e;
	let n = "";
	for (let r = 1; r < t; r++) {
		let i = e.charCodeAt(r);
		if (i === 34 || i === 92 && (r += 1, r >= t)) return e;
		n += e[r];
	}
	return n;
}
function Bn(e) {
	let t = Object.create(null), n = String(e), r = 0, i = !1, a = !1;
	function o(e) {
		let i = Rn(n.slice(r, e)), a = i.indexOf("=");
		if (a < 1) return;
		let o = Rn(i.slice(0, a));
		if (!Ln.test(o)) return;
		let s = o.toLowerCase();
		if (s === "__proto__" || s === "constructor" || s === "prototype") return;
		let c = Rn(i.slice(a + 1));
		t[s] = zn(c);
	}
	for (let e = 0; e < n.length; e++) {
		let t = n.charCodeAt(e);
		i ? a ? a = !1 : t === 92 ? a = !0 : t === 34 && (i = !1) : t === 34 ? i = !0 : (t === 44 || t === 59) && (o(e), r = e + 1);
	}
	return o(n.length), t;
}
var Vn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Hn(e, t, n, r, i) {
	if (M.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), M.isString(t)) {
		if (M.isString(r)) return t.indexOf(r) !== -1;
		if (M.isRegExp(r)) return r.test(t);
	}
}
function Un(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Wn(e, t) {
	let n = M.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			__proto__: null,
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var N = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = Pn(t);
			if (!i) return;
			let a = M.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = Fn(e));
		}
		let a = (e, t) => M.forEach(e, (e, n) => i(e, n, t));
		if (M.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (M.isString(e) && (e = e.trim()) && !Vn(e)) a(Tn(e), t);
		else if (M.isObject(e) && M.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!M.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], M.hasOwnProp(n, i) ? (r = n[i], n[i] = M.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = Pn(e), e) {
			let n = M.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return In(e);
				if (M.isFunction(t)) return t.call(this, e, n);
				if (M.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = Pn(e), e) {
			let n = M.findKey(this, e);
			return !(!n || this[n] === void 0 || t && !Hn(this, this[n], n, t));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = Pn(e), e) {
				let i = M.findKey(n, e);
				i && (!t || Hn(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return M.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || Hn(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return M.forEach(this, (r, i) => {
			let a = M.findKey(n, i);
			if (a) {
				t[a] = Fn(r), delete t[i];
				return;
			}
			let o = e ? Un(i) : String(i).trim();
			o !== i && delete t[i], t[o] = Fn(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return M.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && M.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		let e = this.get("set-cookie");
		return M.isArray(e) ? e : e == null || e === !1 ? [] : [e];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static parseParameters(e) {
		return Bn(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[Nn] = this[Nn] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = Pn(e);
			t[r] || (Wn(n, e), t[r] = !0);
		}
		return M.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
N.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), M.reduceDescriptors(N.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), M.freezeMethods(N);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var Gn = "[REDACTED ****]";
function Kn(e) {
	if (M.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (M.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function qn(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || M.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof N && (e = e.toJSON()), r.push(e);
		let t;
		if (M.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			M.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!M.isPlainObject(e) && Kn(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? Gn : i(a);
				M.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
function Jn(e) {
	try {
		return String(e);
	} catch {
		return "";
	}
}
function Yn(e) {
	return e.errors.map((e) => {
		try {
			return e && e.message ? Jn(e.message) : Jn(e);
		} catch {
			return "";
		}
	}).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var P = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = t.message;
		!s && M.isArray(t.errors) && t.errors.length && (s = Yn(t));
		let c = new e(s, n || t.code, r, i, a);
		return Object.defineProperty(c, "cause", {
			__proto__: null,
			value: t,
			writable: !0,
			enumerable: !1,
			configurable: !0
		}), c.name = t.name, t.status != null && c.status == null && (c.status = t.status), o && Object.assign(c, o), c;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			__proto__: null,
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		let e = this.config, t = e && M.hasOwnProp(e, "redact") ? e.redact : void 0, n = M.isArray(t) && t.length > 0 ? qn(e, t) : M.toJSONObject(e);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: n,
			code: this.code,
			status: this.status
		};
	}
};
P.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", P.ERR_BAD_OPTION = "ERR_BAD_OPTION", P.ECONNABORTED = "ECONNABORTED", P.ETIMEDOUT = "ETIMEDOUT", P.ECONNREFUSED = "ECONNREFUSED", P.ERR_NETWORK = "ERR_NETWORK", P.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", P.ERR_DEPRECATED = "ERR_DEPRECATED", P.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", P.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", P.ERR_CANCELED = "ERR_CANCELED", P.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", P.ERR_INVALID_URL = "ERR_INVALID_URL", P.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function Xn(e) {
	return M.isPlainObject(e) || M.isArray(e);
}
function Zn(e) {
	return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qn(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = Zn(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function $n(e) {
	return M.isArray(e) && !e.some(Xn);
}
var er = M.toFlatObject(M, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function tr(e, t, n) {
	if (!M.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData();
	let r = (e, t) => {
		let r = M.getSafeProp(n, e);
		return M.isUndefined(r) ? t : r;
	}, i = r("metaTokens", !0), a = r("visitor") || h, o = r("dots", !1), s = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, l = r("maxDepth", 100), u = c && M.isSpecCompliantForm(t), d = [];
	if (!M.isFunction(a)) throw TypeError("visitor must be a function");
	function f(e) {
		if (e === null) return "";
		if (M.isDate(e)) return e.toISOString();
		if (M.isBoolean(e)) return e.toString();
		if (!u && M.isBlob(e)) throw new P("Blob is not supported. Use a Buffer instead.");
		if (M.isArrayBuffer(e) || M.isTypedArray(e)) {
			if (u && typeof c == "function") return new c([e]);
			throw new P("Blob is not supported. Use a Buffer instead.", P.ERR_NOT_SUPPORT);
		}
		return e;
	}
	function p(e) {
		if (e > l) throw new P("Object is too deeply nested (" + e + " levels). Max depth: " + l, P.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function m(e, t) {
		if (l === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!M.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), p(t + n.length - 1), r;
		});
	}
	function h(e, n, r) {
		let a = e;
		if (M.isReactNative(t) && M.isReactNativeBlob(e)) return t.append(Qn(r, n, o), f(e)), !1;
		if (e && !r && typeof e == "object") {
			if (M.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = m(e, 1);
			else if (M.isArray(e) && $n(e) || (M.isFileList(e) || M.endsWith(n, "[]")) && (a = M.toArray(e))) return n = Zn(n), a.forEach(function(e, r) {
				!(M.isUndefined(e) || e === null) && t.append(s === !0 ? Qn([n], r, o) : s === null ? n : n + "[]", f(e));
			}), !1;
		}
		return Xn(e) ? !0 : (t.append(Qn(r, n, o), f(e)), !1);
	}
	let g = Object.assign(er, {
		defaultVisitor: h,
		convertValue: f,
		isVisitable: Xn
	});
	function _(e, n, r = 0) {
		if (!M.isUndefined(e)) {
			if (p(r), d.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			d.push(e), M.forEach(e, function(e, i) {
				(!(M.isUndefined(e) || e === null) && a.call(t, e, M.isString(i) ? i.trim() : i, n, g)) === !0 && _(e, n ? n.concat(i) : [i], r + 1);
			}), d.pop();
		}
	}
	if (!M.isObject(e)) throw TypeError("data must be an object");
	return _(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function nr(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
		return t[e];
	});
}
function rr(e, t) {
	this._pairs = [], e && tr(e, this, t);
}
var ir = rr.prototype;
ir.append = function(e, t) {
	this._pairs.push([e, t]);
}, ir.toString = function(e) {
	let t = e ? (t) => e.call(this, t, nr) : nr;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function ar(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function or(e, t, n) {
	if (!t) return e;
	e ||= "";
	let r = M.isFunction(n) ? { serialize: n } : n, i = M.getSafeProp(r, "encode") || ar, a = M.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : M.isURLSearchParams(t) ? t.toString() : new rr(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var sr = Symbol("internals");
function cr(e) {
	return e ? e.length : 0;
}
function lr(e) {
	if (e) for (; e.length && e[e.length - 1] === null;) e.pop();
}
function ur(e, t) {
	let n = e.handlers, r = cr(n);
	n === t.handlersRef ? r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(e, r) {
		n[e.index] !== e.handler && t.handlerEntries.delete(r);
	}) : t.handlerEntries.clear()) : (t.handlersRef = n, t.handlerEntries.clear()), t.handlersLength = r;
}
var dr = class {
	constructor() {
		this.handlers = [], this[sr] = {
			handlersRef: this.handlers,
			handlersLength: this.handlers.length,
			handlerEntries: /* @__PURE__ */ new Map(),
			iterationDepth: 0,
			nextId: 0
		};
	}
	use(e, t, n) {
		let r = {
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}, i = this[sr];
		this.handlers ??= [], ur(this, i);
		let a = i.nextId++;
		return this.handlers.push(r), i.handlerEntries.set(a, {
			handler: r,
			index: this.handlers.length - 1
		}), i.handlersLength = this.handlers.length, a;
	}
	eject(e) {
		let t = this[sr];
		ur(this, t);
		let n = t.handlerEntries.get(e);
		if (n) {
			if (t.handlerEntries.delete(e), this.handlers[n.index] !== n.handler) return;
			this.handlers[n.index] = null, t.iterationDepth || (lr(this.handlers), t.handlersLength = this.handlers.length);
		}
	}
	clear() {
		this.handlers && (this.handlers = [], ur(this, this[sr]));
	}
	forEach(e) {
		let t = this[sr];
		ur(this, t), t.iterationDepth++;
		try {
			M.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		} finally {
			--t.iterationDepth || (ur(this, t), lr(this.handlers), t.handlersLength = cr(this.handlers));
		}
	}
}, fr = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, pr = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : rr,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, mr = /* @__PURE__ */ p({
	hasBrowserEnv: () => hr,
	hasStandardBrowserEnv: () => _r,
	hasStandardBrowserWebWorkerEnv: () => vr,
	navigator: () => gr,
	origin: () => yr
}), hr = typeof window < "u" && typeof document < "u", gr = typeof navigator == "object" && navigator || void 0, _r = hr && (!gr || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(gr.product) < 0), vr = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", yr = hr && window.location.href || "http://localhost", F = {
	...mr,
	...pr
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function br(e, t) {
	return tr(e, new F.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return F.isNode && M.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var xr = 100;
function Sr(e) {
	if (e > xr) throw new P("FormData field is too deeply nested (" + e + " levels). Max depth: " + xr, P.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Cr(e) {
	let t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Sr(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function wr(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function Tr(e) {
	function t(e, n, r, i) {
		Sr(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && M.isArray(r) ? r.length : a, s ? (M.hasOwnProp(r, a) ? r[a] = M.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!M.hasOwnProp(r, a) || !M.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && M.isArray(r[a]) && (r[a] = wr(r[a])), !o);
	}
	if (M.isFormData(e) && M.isFunction(e.entries)) {
		let n = {};
		return M.forEachEntry(e, (e, r) => {
			t(Cr(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/core/methodList.js
var Er = Object.freeze([
	"get",
	"delete",
	"head",
	"options",
	"post",
	"put",
	"patch",
	"purge",
	"link",
	"unlink",
	"query"
]), Dr = (e, t) => e != null && M.hasOwnProp(e, t) ? e[t] : void 0;
function Or(e, t, n) {
	if (M.isString(e)) try {
		return (t || JSON.parse)(e), M.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var kr = {
	transitional: fr,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = M.isObject(e);
		if (i && M.isHTMLForm(e) && (e = new FormData(e)), M.isFormData(e)) return r ? JSON.stringify(Tr(e)) : e;
		if (M.isArrayBuffer(e) || M.isBuffer(e) || M.isStream(e) || M.isFile(e) || M.isBlob(e) || M.isReadableStream(e)) return e;
		if (M.isArrayBufferView(e)) return e.buffer;
		if (M.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Dr(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return br(e, t).toString();
			if ((a = M.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Dr(this, "env"), r = n && n.FormData;
				return tr(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Or(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Dr(this, "transitional") || kr.transitional, n = t && t.forcedJSONParsing, r = Dr(this, "responseType"), i = r === "json";
		if (M.isResponse(e) || M.isReadableStream(e)) return e;
		if (e && M.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Dr(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? P.from(e, P.ERR_BAD_RESPONSE, this, null, Dr(this, "response")) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: F.classes.FormData,
		Blob: F.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
M.forEach(Er, (e) => {
	kr.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Ar(e, t) {
	let n = this || kr, r = t || n, i = N.from(r.headers), a = r.data;
	return M.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function jr(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var Mr = class extends P {
	constructor(e, t, n) {
		super(e ?? "canceled", P.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function Nr(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new P("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? P.ERR_BAD_REQUEST : P.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/normalizeURLForProtocolCheck.js
var Pr = /[\t\n\r]/g;
function Fr(e) {
	if (typeof e != "string") return e;
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t).replace(Pr, "");
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function Ir(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function Lr(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/throttle.js
function Rr(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [
		(...e) => {
			let t = Date.now(), s = t - n;
			s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
				a = null, o(i);
			}, r - s));
		},
		() => i && o(i),
		(...e) => o(e)
	];
}
//#endregion
//#region node_modules/axios/lib/helpers/progressEventReducer.js
var zr = (e, t, n = 3) => {
	let r = 0, i = Lr(50, 250);
	return Rr((n) => {
		if (!n || !M.isNumber(n.loaded)) return;
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = Math.max(0, o == null ? a : Math.min(a, o)), c = Math.max(0, s - r), l = i(c);
		r = Math.max(r, s), e({
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: c,
			rate: l || void 0,
			estimated: l && o ? (o - s) / l : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, Br = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, Vr = (e, t = M.asap) => (...n) => t(() => e(...n)), Hr = F.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, F.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(F.origin), F.navigator && /(msie|trident)/i.test(F.navigator.userAgent)) : () => !0, Ur = F.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		M.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), M.isString(r) && s.push(`path=${r}`), M.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), M.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.split(";");
		for (let n = 0; n < t.length; n++) {
			let r = t[n].replace(/^\s+/, ""), i = r.indexOf("=");
			if (i !== -1 && r.slice(0, i) === e) try {
				return decodeURIComponent(r.slice(i + 1));
			} catch {
				return r.slice(i + 1);
			}
		}
		return null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
//#endregion
//#region node_modules/axios/lib/helpers/isAbsoluteURL.js
function Wr(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function Gr(e, t) {
	if (!t) return e;
	let n = e.length;
	for (; n > 0 && e.charCodeAt(n - 1) === 47;) n--;
	return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var Kr = /^https?:(?!\/\/)/i;
function qr(e) {
	return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (e, t, n = "") => `${t}${n}${Gn}`);
}
function Jr(e) {
	let t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Gn}@`), n = t.indexOf("#"), r = (n === -1 ? t : t.slice(0, n)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${Gn}`);
	return n === -1 ? r : `${r}#${qr(t.slice(n + 1))}`;
}
function Yr(e, t) {
	if (typeof e == "string") {
		let n = Fr(e);
		if (Kr.test(n)) throw new P(`Invalid URL ${JSON.stringify(Jr(n))}: missing "//" after protocol`, P.ERR_INVALID_URL, t);
	}
}
function Xr(e, t, n, r) {
	Yr(t, r);
	let i = !Wr(t);
	return e && (i || n === !1) ? (Yr(e, r), Gr(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var Zr = (e) => e instanceof N ? { ...e } : e, Qr = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function $r(e, t) {
	e ||= {}, t ||= {};
	let n = Object.create(null);
	Object.defineProperty(n, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
	function r(e, t, n, r) {
		return M.isPlainObject(e) && M.isPlainObject(t) ? M.merge.call({ caseless: r }, e, t) : M.isPlainObject(t) ? M.merge({}, t) : M.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!M.isUndefined(t)) return r(e, t, n, i);
		if (!M.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!M.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!M.isUndefined(t)) return r(void 0, t);
		if (!M.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = M.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!M.isUndefined(r)) {
			if (M.isPlainObject(r)) {
				if (M.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = M.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (M.isPlainObject(i) && M.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (M.hasOwnProp(t, a)) return r(n, i);
		if (M.hasOwnProp(e, a)) return r(void 0, n);
	}
	let l = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutErrorMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		allowedSocketPaths: o,
		responseEncoding: o,
		validateStatus: c,
		headers: (e, t, n) => i(Zr(e), Zr(t), n, !0)
	};
	return M.forEach(Qr({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = M.hasOwnProp(l, r) ? l[r] : i, o = a(M.hasOwnProp(e, r) ? e[r] : void 0, M.hasOwnProp(t, r) ? t[r] : void 0, r);
		M.isUndefined(o) && a !== c || (n[r] = o);
	}), M.hasOwnProp(t, "validateStatus") && M.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (M.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/core/setFormDataHeaders.js
var ei = ["content-type", "content-length"];
function ti(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t || {}).forEach(([t, n]) => {
		ei.includes(t.toLowerCase()) && e.set(t, n);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var ni = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function ri(e) {
	let t = $r({}, e), n = (e) => M.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = N.from(s), t.url = or(Xr(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let t = M.getSafeProp(c, "username") || "", n = M.getSafeProp(c, "password") || "";
		try {
			s.set("Authorization", "Basic " + btoa(t + ":" + (n ? ni(n) : "")));
		} catch (t) {
			throw P.from(t, P.ERR_BAD_OPTION_VALUE, e);
		}
	}
	if (M.isFormData(r)) {
		let e = M.getSafeProp(r, "getHeaders");
		F.hasStandardBrowserEnv || F.hasStandardBrowserWebWorkerEnv || M.isReactNative(r) ? s.setContentType(void 0) : M.isFunction(e) && ti(s, e.call(r), n("formDataHeaderPolicy"));
	}
	if (F.hasStandardBrowserEnv && (M.isFunction(i) && (i = i(t)), i === !0 || i == null && Hr(t.url))) {
		let e = a && o && Ur.read(o);
		e && s.set(a, e);
	}
	return t;
}
var ii = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = ri(e), i = r.data, a = N.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p, m;
		function h() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let g = new XMLHttpRequest();
		g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
		function _(i) {
			if (!g) return;
			if (g.status === 0 && (Ir(Fr(r.url)) || Ir(F.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
				n(new P("Request aborted", P.ECONNABORTED, e, g)), h(), g = null;
				return;
			}
			try {
				i ? m && m(i) : p && p();
			} catch (e) {
				setTimeout(() => {
					throw e;
				});
			}
			if (!g) return;
			let a = N.from("getAllResponseHeaders" in g && g.getAllResponseHeaders());
			Nr(function(e) {
				t(e), h();
			}, function(e) {
				n(e), h();
			}, {
				data: !o || o === "text" || o === "json" ? g.responseText : g.response,
				status: g.status,
				statusText: g.statusText,
				headers: a,
				config: e,
				request: g
			}), g = null;
		}
		"onloadend" in g ? g.onloadend = _ : g.onreadystatechange = function() {
			g && g.readyState === 4 && (g.status !== 0 || g.responseURL && g.responseURL.startsWith("file:")) && setTimeout(_);
		}, g.onabort = function() {
			g &&= (n(new P("Request aborted", P.ECONNABORTED, e, g)), h(), null);
		}, g.onerror = function(t) {
			let r = new P(t && t.message ? t.message : "Network Error", P.ERR_NETWORK, e, g);
			r.event = t || null, n(r), h(), g = null;
		}, g.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || fr;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new P(t, i.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED, e, g)), h(), g = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in g && M.forEach(Mn(a), function(e, t) {
			g.setRequestHeader(t, e);
		}), M.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), o && o !== "json" && (g.responseType = r.responseType), c && ([d, p, m] = zr(c, !0), g.addEventListener("progress", d)), s && g.upload && ([u, f] = zr(s), g.upload.addEventListener("progress", u), g.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			g &&= (n(!t || t.type ? new Mr(null, e, g) : t), g.abort(), h(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let v = Ir(r.url);
		if (v && !F.protocols.includes(v)) {
			n(new P("Unsupported protocol " + v + ":", P.ERR_BAD_REQUEST, e)), h();
			return;
		}
		g.send(i || null);
	});
}, ai = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof P ? t : new Mr(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new P(`timeout of ${t}ms exceeded`, P.ETIMEDOUT));
	}, t), o = () => {
		e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
			e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
		}), null);
	};
	e.forEach((e) => {
		if (!r) {
			if (e.aborted) {
				i.call(e);
				return;
			}
			e.addEventListener("abort", i, { once: !0 });
		}
	});
	let { signal: s } = n;
	return s.unsubscribe = () => M.asap(o), s;
}, oi = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, si = async function* (e, t) {
	for await (let n of ci(e)) yield* oi(n, t);
}, ci = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, li = (e, t, n, r) => {
	let i = si(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, ui = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, di = (e, t, n) => t + 2 < n && ui(e.charCodeAt(t + 1)) && ui(e.charCodeAt(t + 2)), fi = (e) => e <= 57 ? e - 48 : (e & 223) - 55, pi = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, mi = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, hi = (e) => {
	let t = Math.floor(e / 4), n = e % 4;
	return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, gi = (e) => {
	let t = e.length, n = 0;
	return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, _i = (e) => {
	let t = e.length, n = 0, r = 0, i = !1;
	for (let a = 0; a < t; a++) {
		let o = e.charCodeAt(a);
		if (o === 37 && di(e, a, t) && (o = fi(e.charCodeAt(a + 1)) * 16 + fi(e.charCodeAt(a + 2)), a += 2), !mi(o)) {
			if (o === 61) {
				r++;
				continue;
			}
			if (!pi(o) || r > 0) {
				i = !0;
				continue;
			}
			n++;
		}
	}
	return i || r > 2 || r > 0 && (n + r) % 4 != 0 || n % 4 == 1 ? gi(e) : hi(n);
}, vi = (e, t) => {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let n = e.indexOf(",");
	if (n < 0) return 0;
	let r = e.slice(5, n), i = e.slice(n + 1);
	if (/;base64/i.test(r)) return t(i);
	let a = 0;
	for (let e = 0, t = i.length; e < t; e++) {
		let n = i.charCodeAt(e);
		if (n === 37 && di(i, e, t)) a += 1, e += 2;
		else if (n < 128) a += 1;
		else if (n < 2048) a += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = i.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (a += 4, e++) : a += 3;
		} else a += 3;
	}
	return a;
};
function yi(e) {
	let t = typeof e == "string" ? e.indexOf("#") : -1;
	return vi(t === -1 ? e : e.slice(0, t), _i);
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var bi = "1.20.0", xi = 65536, Si = {
	cache: "default",
	redirect: "follow",
	referrer: "about:client",
	referrerPolicy: "",
	mode: "cors",
	integrity: "",
	keepalive: !1,
	priority: "auto",
	window: null
}, { isFunction: Ci } = M, wi = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Ti = (e) => {
	if (!M.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Ei = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Di = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Oi = (e) => {
	let t = M.global !== void 0 && M.global !== null ? M.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = M.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Ci(i) : typeof fetch == "function", c = Ci(a), l = Ci(o);
	if (!s) return !1;
	let u = s && Ci(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Ei(() => {
		let e = !1, t = new a(F.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Ei(() => M.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
	s && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!m[e] && (m[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new P(`Response type '${e}' is not supported`, P.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (M.isBlob(e)) return e.size;
		if (M.isSpecCompliantForm(e)) return (await new a(F.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (M.isArrayBufferView(e) || M.isArrayBuffer(e)) return e.byteLength;
		if (M.isURLSearchParams(e) && (e += ""), M.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => M.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: ee, maxContentLength: C, maxBodyLength: te, maxRedirects: w } = ri(e), T = M.isNumber(C) && C > -1, E = M.isNumber(te) && te > -1, D = (t) => M.hasOwnProp(e, t) ? e[t] : void 0, O = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let k = ai([l, d && d.toAbortSignal()], _), A = null, ne = k && k.unsubscribe && (() => {
			k.unsubscribe();
		}), re, ie = null, ae = () => new P("Request body larger than maxBodyLength limit", P.ERR_BAD_REQUEST, e, A);
		try {
			let i, l = D("auth");
			if (l && (i = {
				username: M.getSafeProp(l, "username") || "",
				password: M.getSafeProp(l, "password") || ""
			}), Di(t)) {
				let e = new URL(t, F.origin);
				!i && (e.username || e.password) && (i = {
					username: Ti(e.username),
					password: Ti(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(wi((i.username || "") + ":" + (i.password || ""))))), T && typeof t == "string" && t.startsWith("data:") && yi(t) > C) throw new P("maxContentLength size of " + C + " exceeded", P.ERR_BAD_RESPONSE, e, A);
			if (E && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (re = e, e > te)) throw ae();
			}
			let d = E && (M.isReadableStream(s) || M.isStream(s)), _ = (e, t, n) => li(e, xi, (e) => {
				if (E && e > te) throw ie = ae();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (y || d)) {
				if (re ??= await g(x, s), re !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (M.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && Br(re, zr(Vr(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new P("Stream request bodies are not supported by the current fetch implementation", P.ERR_NOT_SUPPORT, e, A);
			M.isString(S) || (S = S ? "include" : "omit");
			let oe = c && "credentials" in a.prototype;
			if (M.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + bi, !1);
			let se = ee == null ? ee : Object.assign(Object.create(null), ee);
			se && (delete se.body, delete se.headers, delete se.method, delete se.signal, delete se.duplex, delete se.credentials);
			let ce = Object.assign(Object.create(null), se, {
				signal: k,
				method: n.toUpperCase(),
				headers: Mn(x.normalize()),
				body: s,
				duplex: "half",
				credentials: oe ? S : void 0
			});
			c && (M.forEach(Si, (e, t) => {
				ce[t] === void 0 && (ce[t] = e);
			}), ce.signal === void 0 && (ce.signal = null), ce.body === void 0 && (ce.body = null)), w === 0 && (ce.redirect = "manual", se && (se.redirect = "manual")), A = c && new a(t, ce);
			let le = await (c ? O(A, se) : O(t, ce)), ue = N.from(le.headers);
			if (T) {
				let t = M.toFiniteNumber(ue.getContentLength());
				if (t != null && t > C) throw new P("maxContentLength size of " + C + " exceeded", P.ERR_BAD_RESPONSE, e, A);
			}
			let de = p && (b === "stream" || b === "response");
			if (p && le.body && (v || T || de && ne)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = le[e];
				});
				let n = M.toFiniteNumber(ue.getContentLength()), [r, i] = v && Br(n, zr(Vr(v), !0)) || [], a = 0;
				le = new o(li(le.body, xi, (t) => {
					if (T && (a = t, a > C)) throw new P("maxContentLength size of " + C + " exceeded", P.ERR_BAD_RESPONSE, e, A);
					r && r(t);
				}, () => {
					i && i(), ne && ne();
				}), t);
			}
			b ||= "text";
			let fe = await m[M.findKey(m, b) || "text"](le, e);
			if (T && !p && !de) {
				let t;
				if (fe != null && (typeof fe.byteLength == "number" ? t = fe.byteLength : typeof fe.size == "number" ? t = fe.size : typeof fe == "string" && (t = typeof r == "function" ? new r().encode(fe).byteLength : fe.length)), typeof t == "number" && t > C) throw new P("maxContentLength size of " + C + " exceeded", P.ERR_BAD_RESPONSE, e, A);
			}
			return !de && ne && ne(), await new Promise((t, n) => {
				Nr(t, n, {
					data: fe,
					headers: N.from(le.headers),
					status: le.status,
					statusText: le.statusText,
					config: e,
					request: A
				});
			});
		} catch (t) {
			if (ne && ne(), k && k.aborted && k.reason instanceof P) {
				let n = k.reason;
				throw n.config = e, A && (n.request = A), t !== n && Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			if (ie) throw A && !ie.request && (ie.request = A), ie;
			if (t instanceof P) throw A && !t.request && (t.request = A), t;
			if (t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message)) {
				let n = new P("Network Error", P.ERR_NETWORK, e, A, t && t.response);
				throw Object.defineProperty(n, "cause", {
					__proto__: null,
					value: t.cause || t,
					writable: !0,
					enumerable: !1,
					configurable: !0
				}), n;
			}
			throw P.from(t, t && t.code, e, A, t && t.response);
		}
	};
}, ki = /* @__PURE__ */ new Map(), Ai = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = ki;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : Oi(t)), l = c;
	return c;
};
Ai();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var ji = {
	http: null,
	xhr: ii,
	fetch: { get: Ai }
};
M.forEach(ji, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				__proto__: null,
				value: t
			});
		} catch {}
		Object.defineProperty(e, "adapterName", {
			__proto__: null,
			value: t
		});
	}
});
var Mi = (e) => `- ${e}`, Ni = (e) => M.isFunction(e) || e === null || e === !1;
function Pi(e, t) {
	e = M.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Ni(r) && (i = ji[(n = String(r)).toLowerCase()], i === void 0)) throw new P(`Unknown adapter '${n}'`);
		if (i && (M.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new P("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Mi).join("\n") : " " + Mi(e[0]) : "as no adapter specified"), P.ERR_NOT_SUPPORT);
	}
	return i;
}
var Fi = {
	getAdapter: Pi,
	adapters: ji
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function Ii(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Mr(null, e);
}
function Li(e) {
	let t = M.toSafeFlatObject(e);
	return Ii(t), t.headers = N.from(M.getSafeProp(t, "headers")), t.data = Ar.call(t, t.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Fi.getAdapter(t.adapter || kr.adapter, t)(t).then(function(e) {
		Ii(t), t.response = e;
		try {
			e.data = Ar.call(t, t.transformResponse, e);
		} finally {
			delete t.response;
		}
		return e.headers = N.from(e.headers), e;
	}, function(e) {
		if (!jr(e) && (Ii(t), e && e.response)) {
			t.response = e.response;
			try {
				e.response.data = Ar.call(t, t.transformResponse, e.response);
			} finally {
				delete t.response;
			}
			e.response.headers = N.from(e.response.headers);
		}
		return Promise.reject(e);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var Ri = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	Ri[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var zi = {};
Ri.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + bi + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new P(r(i, " has been removed" + (t ? " in " + t : "")), P.ERR_DEPRECATED);
		return t && !zi[i] && (zi[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, Ri.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Bi(e, t, n) {
	if (typeof e != "object" || !e) throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new P("option " + a + " must be " + n, P.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new P("Unknown option " + a, P.ERR_BAD_OPTION);
	}
}
var Vi = {
	assertOptions: Bi,
	validators: Ri
}, I = Vi.validators, Hi = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new dr(),
			response: new dr()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) try {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = t.stack, r = "";
				if (typeof n == "string") {
					let e = n.indexOf("\n");
					r = e === -1 ? "" : n.slice(e + 1);
				}
				if (!e.stack) e.stack = r;
				else if (r) {
					let t = r.indexOf("\n"), n = t === -1 ? -1 : r.indexOf("\n", t + 1), i = n === -1 ? "" : r.slice(n + 1);
					String(e.stack).endsWith(i) || (e.stack += "\n" + r);
				}
			} catch {}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = $r(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && Vi.assertOptions(n, {
			silentJSONParsing: I.transitional(I.boolean),
			forcedJSONParsing: I.transitional(I.boolean),
			clarifyTimeoutError: I.transitional(I.boolean),
			legacyInterceptorReqResOrdering: I.transitional(I.boolean),
			advertiseZstdAcceptEncoding: I.transitional(I.boolean),
			validateStatusUndefinedResolves: I.transitional(I.boolean)
		}, !1), r != null && (M.isFunction(r) ? t.paramsSerializer = { serialize: r } : Vi.assertOptions(r, {
			encode: I.function,
			serialize: I.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Vi.assertOptions(t, {
			baseUrl: I.spelling("baseURL"),
			withXsrfToken: I.spelling("withXSRFToken")
		}, !0), t.method = (M.getSafeProp(t, "method") || M.getSafeProp(this.defaults, "method") || "get").toLowerCase();
		let a = i && M.merge(i.common, i[t.method]);
		i && M.forEach(Er.concat("common"), (e) => {
			delete i[e];
		}), t.headers = N.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || fr;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [Li.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e ? e(f) : f;
			} catch (e) {
				if (!t) {
					l = Promise.reject(e);
					break;
				}
				try {
					let n = t.call(this, e);
					M.isThenable(n) && (l = Promise.resolve(n).then(() => Li.call(this, f)));
				} catch (e) {
					l = Promise.reject(e);
				}
				break;
			}
		}
		if (!l) try {
			l = Li.call(this, f);
		} catch (e) {
			l = Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = $r(this.defaults, e), or(Xr(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
M.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	Hi.prototype[e] = function(t, n) {
		return this.request($r(n || {}, {
			method: e,
			url: t,
			data: n && M.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), M.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request($r(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	Hi.prototype[e] = t(), e !== "query" && (Hi.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var Ui = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new Mr(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/spread.js
function Wi(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function Gi(e) {
	return M.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var Ki = {
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
	ContentTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	UnprocessableContent: 422,
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
	NetworkAuthenticationRequired: 511,
	WebServerReturnsAnUnknownError: 520,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(Ki).forEach(([e, t]) => {
	Ki[t] === void 0 && (Ki[t] = e);
});
//#endregion
//#region node_modules/axios/lib/axios.js
function qi(e) {
	let t = new Hi(e), n = rt(Hi.prototype.request, t);
	return M.extend(n, Hi.prototype, t, { allOwnKeys: !0 }), M.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return qi($r(e, t));
	}, n;
}
var L = qi(kr);
L.Axios = Hi, L.CanceledError = Mr, L.CancelToken = Ui, L.isCancel = jr, L.VERSION = bi, L.toFormData = tr, L.AxiosError = P, L.Cancel = L.CanceledError, L.all = function(e) {
	return Promise.all(e);
}, L.spread = Wi, L.isAxiosError = Gi, L.mergeConfig = $r, L.AxiosHeaders = N, L.formToJSON = (e) => Tr(M.isHTMLForm(e) ? new FormData(e) : e), L.getAdapter = Fi.getAdapter, L.HttpStatusCode = Ki, L.default = L;
//#endregion
//#region src/http/http.ts
var R, Ji = "api";
function Yi(e) {
	if (!e.httpClient && !e.baseURL) throw Error("You must provide either a httpClient or a baseURL");
	return R = e.httpClient ? e.httpClient : L.create({
		withCredentials: !0,
		baseURL: e.baseURL
	}), e.apiPrefix && (Ji = e.apiPrefix), e.bearerToken && (R.defaults.headers.common.Authorization = `Bearer ${e.bearerToken}`), R;
}
//#endregion
//#region src/EloquentError.ts
var z = /* @__PURE__ */ g((/* @__PURE__ */ f(((e, t) => {
	var n = Array.prototype.join;
	function r(e, t) {
		return e == null ? "" : n.call(e, t);
	}
	t.exports = r;
})))(), 1), Xi = class extends Error {
	name = "";
	error;
	constructor(e, t) {
		super(e), this.message = e + " ||| " + t.message, this.error = t, this.stack = t.stack;
	}
}, B = class extends Xi {
	error;
	name;
	constructor(e, t) {
		super(e, t), this.error = t, this.name = this.constructor.name;
	}
}, Zi = Object.create, Qi = Object.defineProperty, $i = Object.getOwnPropertyDescriptor, ea = Object.getOwnPropertyNames, ta = Object.getPrototypeOf, na = Object.prototype.hasOwnProperty, ra = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), ia = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ea(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !na.call(e, s) && s !== n && Qi(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = $i(t, s)) || r.enumerable
	});
	return e;
}, aa = (e, t, n) => (n = e == null ? {} : Zi(ta(e)), ia(t || !e || !e.__esModule ? Qi(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), oa = typeof navigator < "u", V = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
V.chrome !== void 0 && V.chrome.devtools, oa && (V.self, V.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var sa = /* @__PURE__ */ aa((/* @__PURE__ */ ra(((e, t) => {
	t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e ||= {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				o[c] = typeof l != "object" || !l ? l : l.constructor !== Object && (r = t.get(l.constructor)) ? r(l, i) : ArrayBuffer.isView(l) ? n(l) : i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				i[a] = typeof s != "object" || !s ? s : s.constructor !== Object && (r = t.get(s.constructor)) ? r(s, o) : ArrayBuffer.isView(s) ? n(s) : o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				i[a] = typeof o != "object" || !o ? o : o.constructor !== Object && (r = t.get(o.constructor)) ? r(o, s) : ArrayBuffer.isView(o) ? n(o) : s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					c[u] = e === -1 ? o(d) : r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					c[o] = e === -1 ? s(l) : r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					s[o] = e === -1 ? c(l) : r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
})))(), 1), ca = /(?:^|[-_/])(\w)/g;
function la(e, t) {
	return t ? t.toUpperCase() : "";
}
function ua(e) {
	return e && `${e}`.replace(ca, la);
}
function da(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var fa = (0, sa.default)({ circles: !0 }), pa = { trailing: !0 };
function ma(e, t = 25, n = {}) {
	if (n = {
		...pa,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = ha(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o), l = function(...e) {
		return n.trailing && (s = e), o || new Promise((o) => {
			let l = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				s = null;
				for (let e of a) e(t);
				a = [];
			}, t), l ? (r = c(this, e), o(r)) : a.push(o);
		});
	}, u = (e) => {
		e && (clearTimeout(e), i = null);
	};
	return l.isPending = () => !!i, l.cancel = () => {
		u(i), a = [], s = null;
	}, l.flush = () => {
		if (u(i), !s || o) return;
		let e = s;
		return s = null, c(this, e);
	}, l;
}
async function ha(e, t, n) {
	return await e.apply(t, n);
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function ga(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? ga(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var _a = { run: (e) => e() }, va = console.createTask === void 0 ? () => _a : console.createTask;
function ya(e, t) {
	let n = va(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function ba(e, t) {
	let n = va(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function xa(e, t) {
	for (let n of [...e]) n(t);
}
var Sa = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e ||= `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ""), this._deprecatedMessages ||= /* @__PURE__ */ new Set(), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = ga(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = ga(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(ya, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(ba, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && xa(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && xa(this._after, r);
		}) : (this._after && r && xa(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function Ca() {
	return new Sa();
}
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.js
var wa = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
function Ta(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function Ea(e) {
	let t = e.__file;
	if (t) return ua(da(t, ".vue"));
}
function Da(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Oa(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function ka(e) {
	let t = e.subTree?.type, n = Oa(e);
	return n ? n?.types?.Fragment === t : !1;
}
function Aa(e) {
	let t = Ta(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return Da(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return Da(e, t);
	return Ea(e?.type || {}) || "Anonymous Component";
}
function ja(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function Ma(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Na() {
	let e = {
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
var Pa;
function Fa(e) {
	return Pa ||= document.createRange(), Pa.selectNode(e), Pa.getBoundingClientRect();
}
function Ia(e) {
	let t = Na();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = za(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = Fa(e));
		}
		i && La(t, i);
	}
	return t;
}
function La(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Ra = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function za(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? Ra : ka(e) ? Ia(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? za(e.subTree.component) : Ra;
}
function Ba(e) {
	return ka(e) ? Va(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Va(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...Ba(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var Ha = "__vue-devtools-component-inspector__", Ua = "__vue-devtools-component-inspector__card__", Wa = "__vue-devtools-component-inspector__name__", Ga = "__vue-devtools-component-inspector__indicator__", Ka = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, qa = {
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
}, Ja = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function Ya() {
	return document.getElementById(Ha);
}
function Xa() {
	return document.getElementById(Ua);
}
function Za() {
	return document.getElementById(Ga);
}
function Qa() {
	return document.getElementById(Wa);
}
function $a(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function eo(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? Ha, Object.assign(t.style, {
		...Ka,
		...$a(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Ua, Object.assign(n.style, {
		...qa,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = Wa, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Ga, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Ja), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function to(e) {
	let t = Ya(), n = Xa(), r = Qa(), i = Za();
	t && (Object.assign(t.style, {
		...Ka,
		...$a(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function no(e) {
	let t = za(e);
	if (!t.width && !t.height) return;
	let n = Aa(e);
	Ya() ? to({
		bounds: t,
		name: n
	}) : eo({
		bounds: t,
		name: n
	});
}
function ro() {
	let e = Ya();
	e && (e.style.display = "none");
}
var io = null;
function ao(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (io = e, e.vnode.el)) {
			let t = za(e), n = Aa(e);
			Ya() ? to({
				bounds: t,
				name: n
			}) : eo({
				bounds: t,
				name: n
			});
		}
	}
}
function oo(e, t) {
	e.preventDefault(), e.stopPropagation(), io && t(ja(io));
}
var so = null;
function co() {
	ro(), window.removeEventListener("mouseover", ao), window.removeEventListener("click", so, !0), so = null;
}
function lo() {
	return window.addEventListener("mouseover", ao), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), oo(n, (n) => {
				window.removeEventListener("click", t, !0), so = null, window.removeEventListener("mouseover", ao);
				let r = Ya();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		so = t, window.addEventListener("click", t, !0);
	});
}
function uo(e) {
	let t = Ma(W.value, e.id);
	if (t) {
		let [n] = Ba(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = za(t), n = document.createElement("div"), r = {
				...$a(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = za(t);
			if (n.width || n.height) {
				let r = Aa(t), i = Ya();
				i ? to({
					...e,
					name: r,
					bounds: n
				}) : eo({
					...e,
					name: r,
					bounds: n
				}), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
V.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function fo(e) {
	let t = 0, n = setInterval(() => {
		V.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function po() {
	let e = V.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function mo() {
	return new Promise((e) => {
		function t() {
			po(), e(V.__VUE_INSPECTOR__);
		}
		V.__VUE_INSPECTOR__ ? t() : fo(() => {
			t();
		});
	});
}
var ho = /* @__PURE__ */ function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function go(e) {
	return !!(e && e[ho.IS_READONLY]);
}
function _o(e) {
	return go(e) ? _o(e[ho.RAW]) : !!(e && e[ho.IS_REACTIVE]);
}
function vo(e) {
	return !!(e && e.__v_isRef === !0);
}
function yo(e) {
	let t = e && e[ho.RAW];
	return t ? yo(t) : e;
}
var bo = class {
	constructor() {
		this.refEditor = new xo();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : yo(t) instanceof Map ? t.delete(n) : yo(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : yo(t) instanceof Map ? t.set(e.newKey || n, r) : yo(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, xo = class {
	set(e, t) {
		if (vo(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return vo(e) ? e.value : e;
	}
	isRef(e) {
		return vo(e) || _o(e);
	}
};
new bo();
var So = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Co() {
	if (typeof window > "u" || !oa || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(So);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
V.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var wo = new Proxy(V.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function To(e, t) {
	G.timelineLayersState[t.id] = !1, wo.push({
		...e,
		descriptorId: t.id,
		appRecord: Oa(t.app)
	});
}
V.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var Eo = new Proxy(V.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), Do = ma(() => {
	ds.hooks.callHook(jo.SEND_INSPECTOR_TO_CLIENT, ko());
});
function Oo(e, t) {
	Eo.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: Oa(t.app)
	}), Do();
}
function ko() {
	return Eo.filter((e) => e.descriptor.app === W.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		let t = e.descriptor, n = e.options;
		return {
			id: n.id,
			label: n.label,
			logo: t.logo,
			icon: `custom-ic-baseline-${n?.icon?.replace(/_/g, "-")}`,
			packageName: t.packageName,
			homepage: t.homepage,
			pluginId: t.id
		};
	});
}
function Ao(e, t) {
	return Eo.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var H = /* @__PURE__ */ function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), U = /* @__PURE__ */ function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), jo = /* @__PURE__ */ function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function Mo() {
	let e = Ca();
	e.hook(U.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		Oo(e, t.descriptor);
	});
	let t = ma(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || G.highPerfModeEnabled) return;
		let r = Ao(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, H.GET_INSPECTOR_TREE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, jo.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(U.SEND_INSPECTOR_TREE, t);
	let n = ma(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || G.highPerfModeEnabled) return;
		let r = Ao(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, H.GET_INSPECTOR_STATE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, jo.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(U.SEND_INSPECTOR_STATE, n), e.hook(U.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = Ao(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(U.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		To(e, t.descriptor);
	}), e.hook(U.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		G.highPerfModeEnabled || !G.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, jo.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(U.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(U.GET_COMPONENT_BOUNDS, async ({ instance: e }) => za(e)), e.hook(U.GET_COMPONENT_NAME, ({ instance: e }) => Aa(e)), e.hook(U.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = W.value.instanceMap.get(e);
		t && no(t);
	}), e.hook(U.COMPONENT_UNHIGHLIGHT, () => {
		ro();
	}), e;
}
V.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", V.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], V.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var No = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Po() {
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
		timelineLayersState: Co()
	};
}
V[No] ??= Po();
var Fo = ma((e) => {
	ds.hooks.callHook(jo.DEVTOOLS_STATE_UPDATED, { state: e });
});
ma((e, t) => {
	ds.hooks.callHook(jo.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var Io = new Proxy(V.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? V.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : V.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), W = new Proxy(V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function Lo() {
	Fo({
		...V[No],
		appRecords: Io.value,
		activeAppRecordId: W.id,
		tabs: V.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: V.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function Ro(e) {
	V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Lo();
}
function zo(e) {
	V.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Lo();
}
var G = new Proxy(V[No], {
	get(e, t) {
		return t === "appRecords" ? Io : t === "activeAppRecordId" ? W.id : t === "tabs" ? V.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? V.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : V[No][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, V[No][t] = n, !0;
	}
});
function Bo(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			let e = t.replace(/\\/g, "\\\\"), n = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (G.vitePluginDetected) {
			let e = V.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			V.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
V.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var Vo = new Proxy(V.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function Ho(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function Uo(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Wo(e) {
	return (Vo.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function Go(e, t) {
	let n = Uo(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return Ho(e ? (Vo.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Ko(e, t) {
	let n = Uo(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Ho(t)));
}
function qo(e, t, n) {
	let r = Uo(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), ds.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, H.SET_PLUGIN_SETTINGS);
}
var K = /* @__PURE__ */ function(e) {
	return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({}), q = V.__VUE_DEVTOOLS_HOOK ??= Ca(), Jo = {
	on: {
		vueAppInit(e) {
			q.hook(K.APP_INIT, e);
		},
		vueAppUnmount(e) {
			q.hook(K.APP_UNMOUNT, e);
		},
		vueAppConnected(e) {
			q.hook(K.APP_CONNECTED, e);
		},
		componentAdded(e) {
			return q.hook(K.COMPONENT_ADDED, e);
		},
		componentEmit(e) {
			return q.hook(K.COMPONENT_EMIT, e);
		},
		componentUpdated(e) {
			return q.hook(K.COMPONENT_UPDATED, e);
		},
		componentRemoved(e) {
			return q.hook(K.COMPONENT_REMOVED, e);
		},
		setupDevtoolsPlugin(e) {
			q.hook(K.SETUP_DEVTOOLS_PLUGIN, e);
		},
		perfStart(e) {
			return q.hook(K.PERFORMANCE_START, e);
		},
		perfEnd(e) {
			return q.hook(K.PERFORMANCE_END, e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return q.callHook(K.SETUP_DEVTOOLS_PLUGIN, e, t);
	}
}, Yo = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook(H.VISIT_COMPONENT_TREE, e);
			},
			inspectComponent: (e) => {
				this.hooks.hook(H.INSPECT_COMPONENT, e);
			},
			editComponentState: (e) => {
				this.hooks.hook(H.EDIT_COMPONENT_STATE, e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook(H.GET_INSPECTOR_TREE, e);
			},
			getInspectorState: (e) => {
				this.hooks.hook(H.GET_INSPECTOR_STATE, e);
			},
			editInspectorState: (e) => {
				this.hooks.hook(H.EDIT_INSPECTOR_STATE, e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook(H.INSPECT_TIMELINE_EVENT, e);
			},
			timelineCleared: (e) => {
				this.hooks.hook(H.TIMELINE_CLEARED, e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook(H.SET_PLUGIN_SETTINGS, e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (G.highPerfModeEnabled) return;
		let t = ko().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				q.callHook(K.COMPONENT_UPDATED, ...t);
			} else q.callHook(K.COMPONENT_UPDATED);
			this.hooks.callHook(U.SEND_INSPECTOR_STATE, {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook(U.ADD_INSPECTOR, {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Ko(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		G.highPerfModeEnabled || this.hooks.callHook(U.SEND_INSPECTOR_TREE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		G.highPerfModeEnabled || this.hooks.callHook(U.SEND_INSPECTOR_STATE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook(U.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook(H.VISIT_COMPONENT_TREE, e);
	}
	now() {
		return G.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook(U.TIMELINE_LAYER_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		G.highPerfModeEnabled || this.hooks.callHook(U.TIMELINE_EVENT_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return Go(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook(U.GET_COMPONENT_INSTANCES, { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook(U.GET_COMPONENT_BOUNDS, { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook(U.GET_COMPONENT_NAME, { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(U.COMPONENT_HIGHLIGHT, { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook(U.COMPONENT_UNHIGHLIGHT);
	}
}, Xo = "__vue_devtool_undefined__", Zo = "__vue_devtool_infinity__", Qo = "__vue_devtool_negative_infinity__", $o = "__vue_devtool_nan__";
Object.entries({
	[Xo]: "undefined",
	[$o]: "NaN",
	[Zo]: "Infinity",
	[Qo]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), V.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function es(e, t) {
	return Jo.setupDevToolsPlugin(e, t);
}
function ts(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Yo({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: ds
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function ns(e, t) {
	V.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || (!G.highPerfModeEnabled || t?.inspectingComponent) && (V.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Vo.forEach((t) => {
		ts(t, e);
	}));
}
var rs = "__VUE_DEVTOOLS_ROUTER__", is = "__VUE_DEVTOOLS_ROUTER_INFO__";
V[is] ??= {
	currentRoute: null,
	routes: []
}, V[rs] ??= {}, new Proxy(V[is], { get(e, t) {
	return V[is][t];
} }), new Proxy(V[rs], { get(e, t) {
	if (t === "value") return V[rs];
} });
function as(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function os(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = os(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function ss(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: os(o)
		};
	}
	return e;
}
function cs(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = ss(t?.currentRoute.value), r = os(as(t)), i = console.warn;
		console.warn = () => {}, V[is] = {
			currentRoute: n ? fa(n) : {},
			routes: fa(r)
		}, V[rs] = t, console.warn = i;
	}
	n(), Jo.on.componentUpdated(ma(() => {
		t.value?.app === e.app && (n(), !G.highPerfModeEnabled && ds.hooks.callHook(jo.ROUTER_INFO_UPDATED, { state: V[is] }));
	}, 200));
}
function ls(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: W.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, H.GET_INSPECTOR_TREE);
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: W.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, H.GET_INSPECTOR_STATE);
			}), n.state;
		},
		editInspectorState(t) {
			let n = new bo(), r = {
				...t,
				app: W.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, H.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(t) {
			let n = Ao(t);
			e.callHook(U.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return lo();
		},
		cancelInspectComponentInspector() {
			return co();
		},
		getComponentRenderCode(e) {
			let t = Ma(W.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return uo({ id: e });
		},
		openInEditor: Bo,
		getVueInspector: mo,
		toggleApp(e, t) {
			let n = Io.value.find((t) => t.id === e);
			n && (zo(e), Ro(n), cs(n, W), Do(), ns(n.app, t));
		},
		inspectDOM(e) {
			let t = Ma(W.value, e);
			if (t) {
				let [e] = Ba(t);
				e && (V.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			qo(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Wo(e),
				values: Go(e)
			};
		}
	};
}
V.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var us = Mo();
V.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: us,
	get state() {
		return {
			...G,
			activeAppRecordId: W.id,
			activeAppRecord: W.value,
			appRecords: Io.value
		};
	},
	api: ls(us)
};
var ds = V.__VUE_DEVTOOLS_KIT_CONTEXT__, fs = /* @__PURE__ */ wa(((e, t) => {
	(function(e) {
		var n = {
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
			ẞ: "SS",
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
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
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
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
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
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
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
			"္": "",
			"့": "",
			"း": "",
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
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
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
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
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
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
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
			"“": "\"",
			"”": "\"",
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
		}, r = ["်", "ް"], i = {
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
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
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
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
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
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
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
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", m = "", h = !0, g = {}, _, v, y, b, x, S, ee, C, te, w, T, E, D, O, k = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), ee = o.en, C = a.en, typeof t == "object") for (T in _ = t.maintainCase || !1, g = t.custom && typeof t.custom == "object" ? t.custom : g, y = +t.truncate > 1 && t.truncate || !1, b = t.uric || !1, x = t.uricNoSlash || !1, S = t.mark || !1, h = t.symbols !== !1 && t.lang !== !1, u = t.separator || u, b && (k += s), x && (k += c), S && (k += l), ee = t.lang && o[t.lang] && h ? o[t.lang] : h ? o.en : {}, C = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				g[e + ""] = e + "";
			}), v = !0) : v = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				g[e + ""] = e + "";
			}), Object.keys(g).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, g[t]);
			}), g) k += T;
			for (k += u, k = f(k), e = e.replace(/(^\s+|\s+$)/g, ""), D = !1, O = !1, w = 0, E = e.length; w < E; w++) T = e[w], p(T, g) ? D = !1 : C[T] ? (T = D && C[T].match(/[A-Za-z0-9]/) ? " " + C[T] : C[T], D = !1) : T in n ? (w + 1 < E && r.indexOf(e[w + 1]) >= 0 ? (m += T, T = "") : O === !0 ? (T = i[m] + n[T], m = "") : T = D && n[T].match(/[A-Za-z0-9]/) ? " " + n[T] : n[T], D = !1, O = !1) : T in i ? (m += T, T = "", w === E - 1 && (T = i[m]), O = !0) : ee[T] && !(b && s.indexOf(T) !== -1) && !(x && c.indexOf(T) !== -1) ? (T = D || d.substr(-1).match(/[A-Za-z0-9]/) ? u + ee[T] : ee[T], T += e[w + 1] !== void 0 && e[w + 1].match(/[A-Za-z0-9]/) ? u : "", D = !0) : (O === !0 ? (T = i[m] + T, m = "", O = !1) : D && (/[A-Za-z0-9]/.test(T) || d.substr(-1).match(/A-Za-z0-9]/)) && (T = " " + T), D = !1), d += T.replace(RegExp("[^\\w\\s" + k + "_-]", "g"), u);
			return v && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(g).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), y && d.length > y && (te = d.charAt(y) === u, d = d.slice(0, y), te || (d = d.slice(0, d.lastIndexOf(u)))), !_ && !v && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, p = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch {}
	})(e);
}));
(/* @__PURE__ */ wa(((e, t) => {
	t.exports = fs();
})))(), V.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function ps(e) {
	G.highPerfModeEnabled = e ?? !G.highPerfModeEnabled, !e && W.value && ns(W.value.app);
}
function ms(e) {
	G.devtoolsClientDetected = {
		...G.devtoolsClientDetected,
		...e
	}, ps(!Object.values(G.devtoolsClientDetected).some(Boolean));
}
V.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= ms;
var hs = class {
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
}, gs = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new hs();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t ||= this.generateIdentifier(e), this.kv.set(t, e));
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
}, _s = class extends gs {
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
function vs(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function ys(e, t) {
	let n = vs(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function bs(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function xs(e, t) {
	return e.indexOf(t) !== -1;
}
function Ss(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var Cs = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return ys(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, ws = (e) => Object.prototype.toString.call(e).slice(8, -1), Ts = (e) => e === void 0, Es = (e) => e === null, Ds = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, Os = (e) => Ds(e) && Object.keys(e).length === 0, ks = (e) => Array.isArray(e), As = (e) => typeof e == "string", js = (e) => typeof e == "number" && !isNaN(e), Ms = (e) => typeof e == "boolean", Ns = (e) => e instanceof RegExp, Ps = (e) => e instanceof Map, Fs = (e) => e instanceof Set, Is = (e) => ws(e) === "Symbol", Ls = (e) => e instanceof Date && !isNaN(e.valueOf()), Rs = (e) => e instanceof Error, zs = (e) => typeof e == "number" && isNaN(e), Bs = (e) => Ms(e) || Es(e) || Ts(e) || js(e) || As(e) || Is(e), Vs = (e) => typeof e == "bigint", Hs = (e) => e === Infinity || e === -Infinity, Us = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Ws = (e) => e instanceof URL, Gs = (e) => e.replace(/\./g, "\\."), Ks = (e) => e.map(String).map(Gs).join("."), qs = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
function Js(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Ys = [
	Js(Ts, "undefined", () => null, () => void 0),
	Js(Vs, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Js(Ls, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Js(Rs, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	Js(Ns, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Js(Fs, "set", (e) => [...e.values()], (e) => new Set(e)),
	Js(Ps, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Js((e) => zs(e) || Hs(e), "number", (e) => zs(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Js((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Js(Ws, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Xs(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Zs = Xs((e, t) => Is(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Qs = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), $s = Xs(Us, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Qs[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function ec(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var tc = Xs(ec, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return { ...e };
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), nc = Xs((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), rc = [
	tc,
	Zs,
	nc,
	$s
], ic = (e, t) => {
	let n = Ss(rc, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = Ss(Ys, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, ac = {};
Ys.forEach((e) => {
	ac[e.annotation] = e;
});
var oc = (e, t, n) => {
	if (ks(t)) switch (t[0]) {
		case "symbol": return Zs.untransform(e, t, n);
		case "class": return tc.untransform(e, t, n);
		case "custom": return nc.untransform(e, t, n);
		case "typed-array": return $s.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = ac[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, sc = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function cc(e) {
	if (xs(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (xs(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (xs(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var lc = (e, t) => {
	cc(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Fs(e)) e = sc(e, +r);
		else if (Ps(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = sc(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value": e = e.get(o);
			}
		} else e = e[r];
	}
	return e;
}, uc = (e, t, n) => {
	if (cc(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (ks(r)) {
			let e = +n;
			r = r[e];
		} else if (Ds(r)) r = r[n];
		else if (Fs(r)) {
			let e = +n;
			r = sc(r, e);
		} else if (Ps(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = sc(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value": r = r.get(o);
			}
		}
	}
	let i = t[t.length - 1];
	if (ks(r) ? r[+i] = n(r[+i]) : Ds(r) && (r[i] = n(r[i])), Fs(r)) {
		let e = sc(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (Ps(r)) {
		let e = +t[t.length - 2], a = sc(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value": r.set(a, n(r.get(a)));
		}
	}
	return e;
};
function dc(e, t, n = []) {
	if (!e) return;
	if (!ks(e)) {
		bs(e, (e, r) => dc(e, t, [...n, ...qs(r)]));
		return;
	}
	let [r, i] = e;
	i && bs(i, (e, r) => {
		dc(e, t, [...n, ...qs(r)]);
	}), t(r, n);
}
function fc(e, t, n) {
	return dc(t, (t, r) => {
		e = uc(e, r, (e) => oc(e, t, n));
	}), e;
}
function pc(e, t) {
	function n(t, n) {
		let r = lc(e, qs(n));
		t.map(qs).forEach((t) => {
			e = uc(e, t, () => r);
		});
	}
	if (ks(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = uc(e, qs(t), () => e);
		}), i && bs(i, n);
	} else bs(t, n);
	return e;
}
var mc = (e, t) => Ds(e) || ks(e) || Ps(e) || Fs(e) || ec(e, t);
function hc(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function gc(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Ks) : n[Ks(i)] = a.map(Ks);
	}), r ? Os(n) ? [r] : [r, n] : Os(n) ? void 0 : n;
}
var _c = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = Bs(e);
	if (!s) {
		hc(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!mc(e, n)) {
		let t = ic(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (xs(a, e)) return { transformedValue: null };
	let c = ic(e, n), l = c?.value ?? e, u = ks(l) ? [] : {}, d = {};
	bs(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = _c(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, ks(l.annotations) ? d[c] = l.annotations : Ds(l.annotations) && bs(l.annotations, (e, t) => {
			d[Gs(c) + "." + t] = e;
		});
	});
	let f = Os(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function vc(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function yc(e) {
	return vc(e) === "Array";
}
function bc(e) {
	if (vc(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function xc(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function Sc(e, t = {}) {
	if (yc(e)) return e.map((e) => Sc(e, t));
	if (!bc(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (yc(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return xc(n, r, Sc(i, t), e, t.nonenumerable), n;
	}, {});
}
var J = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new _s(), this.symbolRegistry = new gs((e) => e.description ?? ""), this.customTransformerRegistry = new Cs(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = _c(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = gc(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = Sc(t);
		return n?.values && (r = fc(r, n.values, this)), n?.referentialEqualities && (r = pc(r, n.referentialEqualities)), r;
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
J.defaultInstance = new J(), J.serialize = J.defaultInstance.serialize.bind(J.defaultInstance), J.deserialize = J.defaultInstance.deserialize.bind(J.defaultInstance), J.stringify = J.defaultInstance.stringify.bind(J.defaultInstance), J.parse = J.defaultInstance.parse.bind(J.defaultInstance), J.registerClass = J.defaultInstance.registerClass.bind(J.defaultInstance), J.registerSymbol = J.defaultInstance.registerSymbol.bind(J.defaultInstance), J.registerCustom = J.defaultInstance.registerCustom.bind(J.defaultInstance), J.allowErrorProps = J.defaultInstance.allowErrorProps.bind(J.defaultInstance), J.serialize, J.deserialize, J.stringify, J.parse, J.registerClass, J.registerCustom, J.registerSymbol, J.allowErrorProps, V.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [], V.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null, V.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null, V.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null, V.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null, V.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
//#endregion
//#region node_modules/lodash/_arrayEach.js
var Cc = /* @__PURE__ */ f(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
		return e;
	}
	t.exports = n;
})), wc = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		return function(t, n, r) {
			for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
				var c = o[e ? s : ++i];
				if (n(a[c], c, a) === !1) break;
			}
			return t;
		};
	}
	t.exports = n;
})), Tc = /* @__PURE__ */ f(((e, t) => {
	t.exports = wc()();
})), Ec = /* @__PURE__ */ f(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), Dc = /* @__PURE__ */ f(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), Oc = /* @__PURE__ */ f(((e, t) => {
	var n = x(), r = Dc(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), kc = /* @__PURE__ */ f(((e, t) => {
	var n = te(), r = We(), i = w(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", ee = "[object Int16Array]", C = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = {};
	k[b] = k[x] = k[S] = k[ee] = k[C] = k[T] = k[E] = k[D] = k[O] = !0, k[a] = k[o] = k[v] = k[s] = k[y] = k[c] = k[l] = k[u] = k[d] = k[f] = k[p] = k[m] = k[h] = k[g] = k[_] = !1;
	function A(e) {
		return i(e) && r(e.length) && !!k[n(e)];
	}
	t.exports = A;
})), Ac = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), jc = /* @__PURE__ */ f(((e, t) => {
	var n = b(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), Mc = /* @__PURE__ */ f(((e, t) => {
	var n = kc(), r = Ac(), i = jc(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), Nc = /* @__PURE__ */ f(((e, t) => {
	var n = Ec(), r = He(), i = y(), a = Oc(), o = Ue(), s = Mc(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), Pc = /* @__PURE__ */ f(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), Fc = /* @__PURE__ */ f(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), Ic = /* @__PURE__ */ f(((e, t) => {
	t.exports = Fc()(Object.keys, Object);
})), Lc = /* @__PURE__ */ f(((e, t) => {
	var n = Pc(), r = Ic(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), Rc = /* @__PURE__ */ f(((e, t) => {
	var n = O(), r = We();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), zc = /* @__PURE__ */ f(((e, t) => {
	var n = Nc(), r = Lc(), i = Rc();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), Bc = /* @__PURE__ */ f(((e, t) => {
	var n = Tc(), r = zc();
	function i(e, t) {
		return e && n(e, t, r);
	}
	t.exports = i;
})), Vc = /* @__PURE__ */ f(((e, t) => {
	var n = Rc();
	function r(e, t) {
		return function(r, i) {
			if (r == null) return r;
			if (!n(r)) return e(r, i);
			for (var a = r.length, o = t ? a : -1, s = Object(r); (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;);
			return r;
		};
	}
	t.exports = r;
})), Hc = /* @__PURE__ */ f(((e, t) => {
	var n = Bc();
	t.exports = Vc()(n);
})), Uc = /* @__PURE__ */ f(((e, t) => {
	function n(e) {
		return e;
	}
	t.exports = n;
})), Wc = /* @__PURE__ */ f(((e, t) => {
	var n = Uc();
	function r(e) {
		return typeof e == "function" ? e : n;
	}
	t.exports = r;
})), Gc = /* @__PURE__ */ g((/* @__PURE__ */ f(((e, t) => {
	var n = Cc(), r = Hc(), i = Wc(), a = y();
	function o(e, t) {
		return (a(e) ? n : r)(e, i(t));
	}
	t.exports = o;
})))(), 1), Y = /* @__PURE__ */ function(e) {
	return e.CREATE = "create", e.READ = "read", e.UPDATE = "update", e.DELETE = "delete", e;
}(Y || {}), Kc = /* @__PURE__ */ function(e) {
	return e.CREATED = "created", e.READ = "read", e.UPDATED = "updated", e.DELETED = "deleted", e;
}(Kc || {}), X = /* @__PURE__ */ p({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => Xc,
	install: () => Jc,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => Yc
});
import * as qc from "vue";
h(X, qc);
function Jc() {}
function Yc(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Xc(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
//#endregion
//#region node_modules/@vuelidate/core/dist/index.mjs
function Zc(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Qc(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Zc(Object(n), !0).forEach(function(t) {
			$c(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zc(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function $c(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function el(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
	return Object.keys(e).reduce((n, r) => (t.includes(r) || (n[r] = (0, X.unref)(e[r])), n), {});
}
function tl(e) {
	return typeof e == "function";
}
function nl(e) {
	return (0, X.isReactive)(e) || (0, X.isReadonly)(e);
}
function rl(e, t, n) {
	let r = e, i = t.split(".");
	for (let e = 0; e < i.length; e++) {
		if (!r[i[e]]) return n;
		r = r[i[e]];
	}
	return r;
}
function il(e, t, n) {
	return (0, X.computed)(() => e.some((e) => rl(t, e, { [n]: !1 })[n]));
}
function al(e, t, n) {
	return (0, X.computed)(() => e.reduce((e, r) => {
		let i = rl(t, r, { [n]: !1 })[n] || [];
		return e.concat(i);
	}, []));
}
function ol(e, t, n, r) {
	return e.call(r, (0, X.unref)(t), (0, X.unref)(n), r);
}
function sl(e) {
	return e.$valid === void 0 ? !e : !e.$valid;
}
function cl(e, t, n, r, i, a, o) {
	let { $lazy: s, $rewardEarly: c } = i, l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], u = arguments.length > 8 ? arguments[8] : void 0, d = arguments.length > 9 ? arguments[9] : void 0, f = arguments.length > 10 ? arguments[10] : void 0, p = (0, X.ref)(!!r.value), m = (0, X.ref)(0);
	return n.value = !1, {
		$invalid: p,
		$unwatch: (0, X.watch)([t, r].concat(l, f), () => {
			if (s && !r.value || c && !d.value && !n.value) return;
			let i;
			try {
				i = ol(e, t, u, o);
			} catch (e) {
				i = Promise.reject(e);
			}
			m.value++, n.value = !!m.value, p.value = !1, Promise.resolve(i).then((e) => {
				m.value--, n.value = !!m.value, a.value = e, p.value = sl(e);
			}).catch((e) => {
				m.value--, n.value = !!m.value, a.value = e, p.value = !0;
			});
		}, {
			immediate: !0,
			deep: typeof t == "object"
		})
	};
}
function ll(e, t, n, r, i, a, o, s) {
	let { $lazy: c, $rewardEarly: l } = r;
	return {
		$unwatch: () => ({}),
		$invalid: (0, X.computed)(() => {
			if (c && !n.value || l && !s.value) return !1;
			let r = !0;
			try {
				let n = ol(e, t, o, a);
				i.value = n, r = sl(n);
			} catch (e) {
				i.value = e;
			}
			return r;
		})
	};
}
function ul(e, t, n, r, i, a, o, s, c, l, u) {
	let d = (0, X.ref)(!1), f = e.$params || {}, p = (0, X.ref)(null), m, h;
	e.$async ? {$invalid: m, $unwatch: h} = cl(e.$validator, t, d, n, r, p, i, e.$watchTargets, c, l, u) : {$invalid: m, $unwatch: h} = ll(e.$validator, t, n, r, p, i, c, l);
	let g = e.$message;
	return {
		$message: tl(g) ? (0, X.computed)(() => g(el({
			$pending: d,
			$invalid: m,
			$params: el(f),
			$model: t,
			$response: p,
			$validator: a,
			$propertyPath: s,
			$property: o
		}))) : g || "",
		$params: f,
		$pending: d,
		$invalid: m,
		$response: p,
		$unwatch: h
	};
}
function dl() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = (0, X.unref)(e), n = Object.keys(t), r = {}, i = {}, a = {}, o = null;
	return n.forEach((e) => {
		let n = t[e];
		switch (!0) {
			case tl(n.$validator):
				r[e] = n;
				break;
			case tl(n):
				r[e] = { $validator: n };
				break;
			case e === "$validationGroups":
				o = n;
				break;
			case e.startsWith("$"):
				a[e] = n;
				break;
			default: i[e] = n;
		}
	}), {
		rules: r,
		nestedValidators: i,
		config: a,
		validationGroups: o
	};
}
var fl = "__root";
function pl(e, t, n, r, i, a, o, s, c) {
	let l = Object.keys(e), u = r.get(i, e), d = (0, X.ref)(!1), f = (0, X.ref)(!1), p = (0, X.ref)(0);
	if (u) {
		if (!u.$partial) return u;
		u.$unwatch(), d.value = u.$dirty.value;
	}
	let m = {
		$dirty: d,
		$path: i,
		$touch: () => {
			d.value ||= !0;
		},
		$reset: () => {
			d.value &&= !1;
		},
		$commit: () => {}
	};
	return l.length ? (l.forEach((r) => {
		m[r] = ul(e[r], t, m.$dirty, a, o, r, n, i, c, f, p);
	}), m.$externalResults = (0, X.computed)(() => s.value ? [].concat(s.value).map((e, t) => ({
		$propertyPath: i,
		$property: n,
		$validator: "$externalResults",
		$uid: `${i}-externalResult-${t}`,
		$message: e,
		$params: {},
		$response: null,
		$pending: !1
	})) : []), m.$invalid = (0, X.computed)(() => {
		let e = l.some((e) => (0, X.unref)(m[e].$invalid));
		return f.value = e, !!m.$externalResults.value.length || e;
	}), m.$pending = (0, X.computed)(() => l.some((e) => (0, X.unref)(m[e].$pending))), m.$error = (0, X.computed)(() => m.$dirty.value ? m.$pending.value || m.$invalid.value : !1), m.$silentErrors = (0, X.computed)(() => l.filter((e) => (0, X.unref)(m[e].$invalid)).map((e) => {
		let t = m[e];
		return (0, X.reactive)({
			$propertyPath: i,
			$property: n,
			$validator: e,
			$uid: `${i}-${e}`,
			$message: t.$message,
			$params: t.$params,
			$response: t.$response,
			$pending: t.$pending
		});
	}).concat(m.$externalResults.value)), m.$errors = (0, X.computed)(() => m.$dirty.value ? m.$silentErrors.value : []), m.$unwatch = () => l.forEach((e) => {
		m[e].$unwatch();
	}), m.$commit = () => {
		f.value = !0, p.value = Date.now();
	}, r.set(i, e, m), m) : (u && r.set(i, e, m), m);
}
function ml(e, t, n, r, i, a, o) {
	let s = Object.keys(e);
	return s.length ? s.reduce((s, c) => (s[c] = gl({
		validations: e[c],
		state: t,
		key: c,
		parentKey: n,
		resultsCache: r,
		globalConfig: i,
		instance: a,
		externalResults: o
	}), s), {}) : {};
}
function hl(e, t, n) {
	let r = (0, X.computed)(() => [t, n].filter((e) => e).reduce((e, t) => e.concat(Object.values((0, X.unref)(t))), [])), i = (0, X.computed)({
		get() {
			return e.$dirty.value || (r.value.length ? r.value.every((e) => e.$dirty) : !1);
		},
		set(t) {
			e.$dirty.value = t;
		}
	}), a = (0, X.computed)(() => {
		let t = (0, X.unref)(e.$silentErrors) || [], n = r.value.filter((e) => ((0, X.unref)(e).$silentErrors || []).length).reduce((e, t) => e.concat(...t.$silentErrors), []);
		return t.concat(n);
	}), o = (0, X.computed)(() => {
		let t = (0, X.unref)(e.$errors) || [], n = r.value.filter((e) => ((0, X.unref)(e).$errors || []).length).reduce((e, t) => e.concat(...t.$errors), []);
		return t.concat(n);
	}), s = (0, X.computed)(() => r.value.some((e) => e.$invalid) || (0, X.unref)(e.$invalid) || !1), c = (0, X.computed)(() => r.value.some((e) => (0, X.unref)(e.$pending)) || (0, X.unref)(e.$pending) || !1), l = (0, X.computed)(() => r.value.some((e) => e.$dirty) || r.value.some((e) => e.$anyDirty) || i.value), u = (0, X.computed)(() => i.value ? c.value || s.value : !1), d = () => {
		e.$touch(), r.value.forEach((e) => {
			e.$touch();
		});
	};
	return r.value.length && r.value.every((e) => e.$dirty) && d(), {
		$dirty: i,
		$errors: o,
		$invalid: s,
		$anyDirty: l,
		$error: u,
		$pending: c,
		$touch: d,
		$reset: () => {
			e.$reset(), r.value.forEach((e) => {
				e.$reset();
			});
		},
		$silentErrors: a,
		$commit: () => {
			e.$commit(), r.value.forEach((e) => {
				e.$commit();
			});
		}
	};
}
function gl(e) {
	let { validations: t, state: n, key: r, parentKey: i, childResults: a, resultsCache: o, globalConfig: s = {}, instance: c, externalResults: l } = e, u = i ? `${i}.${r}` : r, { rules: d, nestedValidators: f, config: p, validationGroups: m } = dl(t), h = Qc(Qc({}, s), p), g = r ? (0, X.computed)(() => {
		let e = (0, X.unref)(n);
		return e ? (0, X.unref)(e[r]) : void 0;
	}) : n, _ = Qc({}, (0, X.unref)(l) || {}), v = (0, X.computed)(() => {
		let e = (0, X.unref)(l);
		return r ? e ? (0, X.unref)(e[r]) : void 0 : e;
	}), y = pl(d, g, r, o, u, h, c, v, n), b = ml(f, g, u, o, h, c, v), x = {};
	m && Object.entries(m).forEach((e) => {
		let [t, n] = e;
		x[t] = {
			$invalid: il(n, b, "$invalid"),
			$error: il(n, b, "$error"),
			$pending: il(n, b, "$pending"),
			$errors: al(n, b, "$errors"),
			$silentErrors: al(n, b, "$silentErrors")
		};
	});
	let { $dirty: S, $errors: ee, $invalid: C, $anyDirty: te, $error: w, $pending: T, $touch: E, $reset: D, $silentErrors: O, $commit: k } = hl(y, b, a), A = r ? (0, X.computed)({
		get: () => (0, X.unref)(g),
		set: (e) => {
			S.value = !0;
			let t = (0, X.unref)(n), i = (0, X.unref)(l);
			i && (i[r] = _[r]), (0, X.isRef)(t[r]) ? t[r].value = e : t[r] = e;
		}
	}) : null;
	r && h.$autoDirty && (0, X.watch)(g, () => {
		S.value || E();
		let e = (0, X.unref)(l);
		e && (e[r] = _[r]);
	}, { flush: "sync" });
	async function ne() {
		return E(), h.$rewardEarly && (k(), await (0, X.nextTick)()), await (0, X.nextTick)(), new Promise((e) => {
			if (!T.value) return e(!C.value);
			let t = (0, X.watch)(T, () => {
				e(!C.value), t();
			});
		});
	}
	function re(e) {
		return (a.value || {})[e];
	}
	function ie() {
		(0, X.isRef)(l) ? l.value = _ : Object.keys(_).length === 0 ? Object.keys(l).forEach((e) => {
			delete l[e];
		}) : Object.assign(l, _);
	}
	return (0, X.reactive)(Qc(Qc(Qc({}, y), {}, {
		$model: A,
		$dirty: S,
		$error: w,
		$errors: ee,
		$invalid: C,
		$anyDirty: te,
		$pending: T,
		$touch: E,
		$reset: D,
		$path: u || fl,
		$silentErrors: O,
		$validate: ne,
		$commit: k
	}, a && {
		$getResultsForChild: re,
		$clearExternalResults: ie,
		$validationGroups: x
	}), b));
}
var _l = class {
	constructor() {
		this.storage = /* @__PURE__ */ new Map();
	}
	set(e, t, n) {
		this.storage.set(e, {
			rules: t,
			result: n
		});
	}
	checkRulesValidity(e, t, n) {
		let r = Object.keys(n), i = Object.keys(t);
		return i.length !== r.length || !i.every((e) => r.includes(e)) ? !1 : i.every((e) => !t[e].$params || Object.keys(t[e].$params).every((r) => (0, X.unref)(n[e].$params[r]) === (0, X.unref)(t[e].$params[r])));
	}
	get(e, t) {
		let n = this.storage.get(e);
		if (!n) return;
		let { rules: r, result: i } = n, a = this.checkRulesValidity(e, t, r), o = i.$unwatch ? i.$unwatch : () => ({});
		return a ? i : {
			$dirty: i.$dirty,
			$partial: !0,
			$unwatch: o
		};
	}
}, vl = {
	COLLECT_ALL: !0,
	COLLECT_NONE: !1
}, yl = Symbol("vuelidate#injectChildResults"), bl = Symbol("vuelidate#removeChildResults");
function xl(e) {
	let { $scope: t, instance: n } = e, r = {}, i = (0, X.ref)([]), a = (0, X.computed)(() => i.value.reduce((e, t) => (e[t] = (0, X.unref)(r[t]), e), {}));
	function o(e, n) {
		let { $registerAs: a, $scope: o, $stopPropagation: s } = n;
		s || t === vl.COLLECT_NONE || o === vl.COLLECT_NONE || t !== vl.COLLECT_ALL && t !== o || (r[a] = e, i.value.push(a));
	}
	n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], o);
	function s(e) {
		i.value = i.value.filter((t) => t !== e), delete r[e];
	}
	n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], s);
	let c = (0, X.inject)(yl, []);
	(0, X.provide)(yl, n.__vuelidateInjectInstances);
	let l = (0, X.inject)(bl, []);
	return (0, X.provide)(bl, n.__vuelidateRemoveInstances), {
		childResults: a,
		sendValidationResultsToParent: c,
		removeValidationResultsFromParent: l
	};
}
function Sl(e) {
	return new Proxy(e, { get(e, t) {
		return typeof e[t] == "object" ? Sl(e[t]) : (0, X.computed)(() => e[t]);
	} });
}
var Cl = 0;
function wl(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	arguments.length === 1 && (n = e, e = void 0, t = void 0);
	let { $registerAs: r, $scope: i = vl.COLLECT_ALL, $stopPropagation: a, $externalResults: o, currentVueInstance: s } = n, c = s || (0, X.getCurrentInstance)()?.proxy, l = c ? c.$options : {};
	r ||= (Cl += 1, `_vuelidate_${Cl}`);
	let u = (0, X.ref)({}), d = new _l(), { childResults: f, sendValidationResultsToParent: p, removeValidationResultsFromParent: m } = c ? xl({
		$scope: i,
		instance: c
	}) : { childResults: (0, X.ref)({}) };
	if (!e && l.validations) {
		let e = l.validations;
		t = (0, X.ref)({}), (0, X.onBeforeMount)(() => {
			t.value = c, (0, X.watch)(() => tl(e) ? e.call(t.value, new Sl(t.value)) : e, (e) => {
				u.value = gl({
					validations: e,
					state: t,
					childResults: f,
					resultsCache: d,
					globalConfig: n,
					instance: c,
					externalResults: o || c.vuelidateExternalResults
				});
			}, { immediate: !0 });
		}), n = l.validationsConfig || n;
	} else {
		let r = (0, X.isRef)(e) || nl(e) ? e : (0, X.reactive)(e || {});
		(0, X.watch)(r, (e) => {
			u.value = gl({
				validations: e,
				state: t,
				childResults: f,
				resultsCache: d,
				globalConfig: n,
				instance: c ?? {},
				externalResults: o
			});
		}, { immediate: !0 });
	}
	return c && (p.forEach((e) => e(u, {
		$registerAs: r,
		$scope: i,
		$stopPropagation: a
	})), (0, X.onBeforeUnmount)(() => m.forEach((e) => e(r)))), (0, X.computed)(() => Qc(Qc({}, (0, X.unref)(u.value)), f.value));
}
//#endregion
//#region src/model/Validator.ts
var Tl = class {
	model;
	v$;
	$invalid = i({});
	$model = i({});
	validations = t(() => ({}));
	constructor() {}
	initValidations() {
		let e = this.model;
		this.v$ = wl(this.validations, { model: e }), this.set$Model(this.v$.value.model), $({
			title: "Validation Initialized",
			data: this.v$.value.model
		});
	}
	$validate() {
		return this.v$.value.$validate(), this.$invalid = this.v$.value.$invalid, Q().then(), $({
			title: "Validation Response",
			data: {
				valid: !this.v$.value.$invalid,
				invalid: this.v$.value.$invalid,
				model: this.v$.value.model
			}
		}), !this.v$.value.$invalid;
	}
	$reset() {
		this.v$.value.$reset(), Object.assign(this.$invalid, this.v$.value.$invalid), Q().then(), $({
			title: "Validation Reset",
			data: this.v$.value.model
		});
	}
	set$Model(e) {
		Object.assign(this.$model, e), Q().then();
	}
}, El = class extends Xi {
	name;
	constructor(e, t) {
		super(e, t), this.name = this.constructor.name;
	}
}, Z = [];
for (let e = 0; e < 256; ++e) Z.push((e + 256).toString(16).slice(1));
function Dl(e, t = 0) {
	return (Z[e[t + 0]] + Z[e[t + 1]] + Z[e[t + 2]] + Z[e[t + 3]] + "-" + Z[e[t + 4]] + Z[e[t + 5]] + "-" + Z[e[t + 6]] + Z[e[t + 7]] + "-" + Z[e[t + 8]] + Z[e[t + 9]] + "-" + Z[e[t + 10]] + Z[e[t + 11]] + Z[e[t + 12]] + Z[e[t + 13]] + Z[e[t + 14]] + Z[e[t + 15]]).toLowerCase();
}
//#endregion
//#region node_modules/uuid/dist/rng.js
var Ol = /* @__PURE__ */ new Uint8Array(16);
function kl() {
	return crypto.getRandomValues(Ol);
}
//#endregion
//#region node_modules/uuid/dist/v4.js
function Al(e, t, n) {
	return !t && !e && crypto.randomUUID ? crypto.randomUUID() : jl(e, t, n);
}
function jl(e, t, n) {
	e ||= {};
	let r = e.random ?? e.rng?.() ?? kl();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Dl(r);
}
//#endregion
//#region src/model/MapRules.ts
var Ml = (e) => {
	console.log(e), e.forEach((e) => {});
}, Nl = class extends Tl {
	relations;
	state = i({
		isLoading: !1,
		isSuccess: !0,
		isError: !1
	});
	uuid;
	errors = [];
	isValid = !0;
	isInvalid = !1;
	originalModel = {};
	parameters;
	protected = [
		"id",
		"created_at",
		"updated_at",
		"deleted_at"
	];
	defaultModel = {};
	constructor() {
		super(), this.uuid = Al(), Ll(this).then(), $({
			title: "Model Initialized",
			data: { uuid: this.uuid }
		});
	}
	static async find(e) {
		let t = this.instance();
		return await t.find(e), t;
	}
	static instance() {
		return new this();
	}
	async find(e) {
		this.setStateLoading(), this.defaultModel === void 0 && Object.assign(this.defaultModel, this.model);
		try {
			this.retrieving();
			let t = await this.api.show(e);
			this.setModel(t.data), $({
				title: "Model Retrieved",
				data: { model: t.data }
			}), this.setOriginal(), this.setStateSuccess(), this.retrieved(t.data);
		} catch (e) {
			throw this.setStateError(), this.retrievingError(e), new El("Find", e);
		}
	}
	async save(e) {
		let t, n = "";
		this.saving();
		try {
			return !this.model.id || e === Y.CREATE ? (t = await this.create(), n = Kc.CREATED) : (t = await this.update(), n = Kc.UPDATED), this.saved(t), $({
				title: n,
				data: { model: t }
			}), {
				actioned: n,
				model: t
			};
		} catch (e) {
			throw new El("Find", e);
		}
	}
	async create() {
		try {
			this.creating(), this.setStateLoading();
			let e = await this.api.store(this.model);
			return this.setOriginal(), this.setModel(e.data), $({
				title: "Created",
				data: { model: e.data }
			}), this.setStateSuccess(), this.created(e.data), e.data;
		} catch (e) {
			throw this.setStateError(), new El("Create", e);
		}
	}
	async update() {
		try {
			this.setStateLoading(), this.updating();
			let e = await this.api.update(this.model);
			return this.setOriginal(), this.setModel(e.data), $({
				title: "Updated",
				data: { model: e.data }
			}), this.setStateSuccess(), this.updated(e.data), e.data;
		} catch (e) {
			throw this.setStateError(), new El("Update", e);
		}
	}
	async delete() {
		try {
			this.deleting(), this.setStateLoading();
			let e = await this.api.destroy(this.model);
			return this.setOriginal(), this.setModel(e.data), $({
				title: "Deleted",
				data: { model: e.data }
			}), this.setStateSuccess(), this.deleted(e.data), e.data;
		} catch (e) {
			throw this.setStateError(), new El("Delete", e);
		}
	}
	async logs() {
		this.setStateLoading();
		try {
			let e = await this.api.logs(this.model.id);
			return this.setStateSuccess(), e.data;
		} catch (e) {
			throw this.setStateError(), new El("Logs", e);
		}
	}
	fresh() {
		this.setModel(this.defaultModel), $({
			title: "Fresh Model",
			data: { model: this.defaultModel }
		});
	}
	async refresh(e) {
		try {
			this.setStateLoading(), this.retrieving();
			let t = e || this.model.id, n = await this.api.show(t);
			this.setOriginal(), this.setStateSuccess(), this.factory(n.data), this.retrieved(n.data), $({
				title: "Refreshed",
				data: { model: n.data }
			});
		} catch (e) {
			throw this.setStateError(), this.retrievingError(e), new El("Refresh", e);
		}
	}
	getOriginal() {
		return this.originalModel;
	}
	async load(e) {
		switch (typeof e) {
			case "string":
				this.model[e] = await this[e]().get();
				break;
			case "object": for (let t of e) this.model[t] = await this[t]().get();
		}
		Q().then();
	}
	async hasOne(e, t) {
		let n = e.getResource();
		return await this.api.hasOne(n, t).get();
	}
	hasMany(e, t) {
		let n = e.getResource();
		return {
			get: async () => await this.api.hasMany(n, t).get(),
			show: async (e) => await this.api.hasMany(n, t).show({ id: e }),
			create: async (e) => await this.api.hasMany(n, t).store(e),
			update: async (e) => await this.api.hasMany(n, t).update(e),
			delete: async (e) => await this.api.hasMany(n, t).delete(e.id)
		};
	}
	setRulesFromServer(e) {
		console.log(this.validations), (0, Gc.default)(e, (e, t) => {
			console.log(t, e);
			let n = Ml(e);
			console.log(n);
		});
	}
	getDefault(e) {
		if (this.parameters && e in this.parameters) return this.parameters[e];
	}
	factory(e) {
		this.defaultModel = Object.assign({}, this.model), e && this.setModel(e), (0, Gc.default)(this.parameters, (e, t) => {
			t in this.model && this.model[t] === void 0 && (this.model[t] = e);
		}), this.setOriginal();
	}
	setModel(e) {
		Object.assign(this.model, e), Q().then();
	}
	setOriginal() {
		Object.assign(this.originalModel, this.model), Q().then();
	}
	retrieving() {}
	retrieved(e) {}
	retrievingError(e) {}
	creating() {}
	created(e) {}
	updating() {}
	updated(e) {}
	saving() {}
	saved(e) {}
	deleting() {}
	deleted(e) {}
	setStateLoading() {
		this.state.isLoading = !0, this.state.isSuccess = !0, this.state.isError = !1, Q().then(), $({
			title: "Loading",
			data: this.state
		});
	}
	setStateSuccess() {
		this.state.isLoading = !1, this.state.isSuccess = !0, this.state.isError = !1, Q().then(), $({
			title: "Loading success",
			data: this.state
		});
	}
	setStateError() {
		this.state.isLoading = !1, this.state.isSuccess = !1, this.state.isError = !0, Q().then(), $({
			title: "Loading error",
			data: this.state
		});
	}
}, Pl = [], Fl = [], Il = [], Ll = async (e) => {
	if (!e) throw Error("Model is not defined");
	let t = e instanceof Nl ? "model" : "collection";
	Pl.push(e), Fl.push({
		id: e.uuid,
		label: e.constructor.name + "-" + Pl.length,
		type: t
	}), Il.push({
		id: e.uuid,
		model: e,
		type: t
	}), await Q();
}, Rl = () => ({
	eloquentModels: Pl,
	childrenNodes: Fl,
	childrenStates: Il
}), zl = (e, t) => {
	if (e === "model") return Bl(t);
	if (e === "collection") return Vl(t);
};
function Bl(e) {
	let t = Il.find((t) => t.id === e);
	return {
		model: [
			{
				key: "uuid",
				value: t.model.uuid
			},
			{
				key: "model",
				value: t.model.model
			},
			{
				key: "defaultModel",
				value: t.model.defaultModel
			},
			{
				key: "relations",
				value: t.model.relations
			}
		],
		state: [
			{
				key: "isLoading",
				value: t.model.state.isLoading
			},
			{
				key: "isSuccess",
				value: t.model.state.isSuccess
			},
			{
				key: "isError",
				value: t.model.state.isError
			}
		],
		validation: [
			{
				key: "$model",
				value: t.model.$model
			},
			{
				key: "$invalid",
				value: t.model.$invalid
			},
			{
				key: "validations",
				value: t.model.validations
			}
		]
	};
}
function Vl(e) {
	let t = Il.find((t) => t.id === e);
	return {
		data: [
			{
				key: "uuid",
				value: t.model.uuid
			},
			{
				key: "data",
				value: t.model.data
			},
			{
				key: "api",
				value: t.model.api
			}
		],
		state: [
			{
				key: "isLoading",
				value: t.model.state.isLoading
			},
			{
				key: "isSuccess",
				value: t.model.state.isSuccess
			},
			{
				key: "isError",
				value: t.model.state.isError
			}
		],
		query: [
			{
				key: "filter",
				value: t.model.filter
			},
			{
				key: "relationships",
				value: t.model.include
			},
			{
				key: "attributes",
				value: t.model.attributes
			},
			{
				key: "fields",
				value: t.model.fieldsSelection
			},
			{
				key: "paging",
				value: t.model.paging
			},
			{
				key: "sorting",
				value: t.model.sorting
			}
		],
		broadcast: [{
			key: "isBroadcasting",
			value: t.model.isBroadcasting
		}, {
			key: "channel",
			value: t.model.channel
		}]
	};
}
//#endregion
//#region src/devtools/devtools.ts
var Hl = "vue-eloquent", Ul = "vue-eloquent", Wl;
function Gl(e) {
	es({
		id: Hl,
		label: "Vue Eloquent",
		packageName: "vue-eloquent",
		homepage: "https://vue-eloquent.netlify.app/",
		app: e
	}, (e) => {
		Wl = e, console.log("🚀 Vue Eloquent DevTools Plugin installed"), e.addInspector({
			id: Hl,
			label: "Vue Eloquent",
			icon: "api"
		}), e.addTimelineLayer({
			id: Ul,
			color: 16750671,
			label: "Vue Eloquent"
		}), e.on.getInspectorTree((e) => {
			e.inspectorId === Hl && (e.rootNodes = [{
				id: "Models",
				label: "Models",
				children: Rl().childrenNodes.filter((e) => e.type === "model")
			}, {
				id: "Collections",
				label: "Collections",
				children: Rl().childrenNodes.filter((e) => e.type === "collection")
			}]);
		}), e.on.getInspectorState((e) => {
			if (e.inspectorId === Hl && e.nodeId) {
				let t = Rl().childrenStates.find((t) => t.id === e.nodeId);
				if (t === void 0) {
					e.state = {};
					return;
				}
				e.state = zl(t.type, t.id);
			}
		});
	});
}
var Q = async () => {
	Wl && setTimeout(async () => {
		await n(), Wl?.sendInspectorTree(Hl), Wl?.sendInspectorState(Hl);
	}, 100);
}, $ = ({ data: e, title: t = "Event" }) => {
	Wl && Wl.addTimelineEvent({
		layerId: Ul,
		event: {
			time: Wl.now(),
			data: e,
			title: t
		}
	});
}, Kl = class {
	filter = i({});
	include = i([]);
	attributes = i([]);
	fieldsSelection = i([]);
	paging = i({});
	sorting = i([]);
	constructor() {}
	static instance() {
		return new this();
	}
	static where(e) {
		return this.instance().where(e);
	}
	static with(e) {
		return this.instance().with(e);
	}
	static append(e) {
		return this.instance().append(e);
	}
	static select(e) {
		return this.instance().select(e);
	}
	static sort(e) {
		return this.instance().sort(e);
	}
	static paginate(e) {
		return this.instance().paginate(e);
	}
	where(e) {
		return Object.assign(this.filter, e), Q().then(), this;
	}
	with(e) {
		return this.include = [...e], Q().then(), this;
	}
	append(e) {
		return this.attributes = [...e], Q().then(), this;
	}
	select(e) {
		return this.fieldsSelection = [...e], Q().then(), this;
	}
	sort(e) {
		return this.sorting = [...e], Q().then(), this;
	}
	paginate(e) {
		return Object.assign(this.paging, e), Q().then(), this;
	}
	queryString() {
		let e = {};
		return this.filter && (e.filter = this.filter), this.include.length && (e.include = this.include.join(",")), this.fieldsSelection.length && (e.fields = this.fieldsSelection.join(",")), this.sorting.length && (e.sort = this.sorting.join(",")), this.attributes.length && (e.append = this.attributes), this.paging && (e.paginate = this.paging), e;
	}
}, ql = class extends Kl {
	apiPrefix = Ji;
	dates = [
		"created_at",
		"updated_at",
		"deleted_at"
	];
	constructor() {
		super();
	}
	static async get(e) {
		return await this.instance().get(e);
	}
	static show(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			e
		], "/");
		return t.retrieving(e), new Promise((e, r) => {
			R.get(n, { transformResponse: [(e) => t.transformResponse(e)] }).then((n) => {
				t.retrieved(n.data), e(n.data);
			}).catch((e) => {
				t.retrievingError(e), r(new B("Show", e));
			});
		});
	}
	static updateValidationRules(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			e.id
		], "/");
		return new Promise((t, r) => {
			R.patch(n, e, { headers: { "Request-Rules": !0 } }).then((e) => {
				t(e.data);
			}).catch((e) => {
				r(e.response);
			});
		});
	}
	static update(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			e.id
		], "/");
		return t.updating(e), new Promise((r, i) => {
			R.patch(n, e, { transformResponse: [(e) => t.transformResponse(e)] }).then((e) => {
				t.updated(e.data), r(e.data);
			}).catch((e) => {
				t.updatingError(e), i(new B("Update", e));
			});
		});
	}
	static store(e) {
		let t = this.instance(), n = (0, z.default)([t.apiPrefix, t.resource], "/");
		return t.storing(e), new Promise((r, i) => {
			R.post(n, e, { transformResponse: [(e) => t.transformResponse(e)] }).then((e) => {
				t.stored(e.data), r(e.data);
			}).catch((e) => {
				t.storingError(e), i(new B("Store", e));
			});
		});
	}
	static hasOne(e, t) {
		let n = this.instance();
		return {
			get(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e
				], "/");
				return n.fetching(r), new Promise((e, t) => {
					R.get(i, {
						params: r,
						transformResponse: [(e) => n.transformResponse(e)]
					}).then((t) => {
						n.fetched(t.data), e(t.data.data[0]);
					}).catch((e) => {
						n.fetchingError(e), t(new B("Store", e));
					});
				});
			},
			show(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e,
					r.id
				], "/");
				return n.retrieving(r), new Promise((e, t) => {
					R.get(i, {
						params: r,
						transformResponse: [(e) => n.transformResponse(e)]
					}).then((t) => {
						n.retrieved(t.data), e(t.data);
					}).catch((e) => {
						n.retrievingError(e), t(new B("Store", e));
					});
				});
			},
			store(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e
				], "/");
				return n.storing(r), new Promise((e, t) => {
					R.post(i, r, { transformResponse: [(e) => n.transformResponse(e)] }).then((t) => {
						n.stored(t.data), e(t.data);
					}).catch((e) => {
						n.storingError(e), t(new B("Store", e));
					});
				});
			},
			update(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e,
					r.id
				], "/");
				return n.updating(r), new Promise((e, t) => {
					R.patch(i, r, { transformResponse: [(e) => n.transformResponse(e)] }).then((t) => {
						n.updated(t.data), e(t.data);
					}).catch((e) => {
						n.updatingError(e), t(new B("Store", e));
					});
				});
			},
			delete(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e,
					r.id
				], "/");
				return n.destroying(r), new Promise((e, t) => {
					R.delete(i, { transformResponse: [(e) => n.transformResponse(e)] }).then((t) => {
						n.destroyed(t.data), e(t.data);
					}).catch((e) => {
						n.destroyingError(e), t(new B("Store", e));
					});
				});
			}
		};
	}
	static hasMany(e, t) {
		let n = this.instance();
		return {
			get(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e
				], "/");
				return n.fetching(r), new Promise((e, t) => {
					R.get(i, {
						params: r,
						transformResponse: [(e) => n.transformResponse(e)]
					}).then((t) => {
						n.fetched(t.data), e(t.data.data);
					}).catch((e) => {
						n.fetchingError(e), t(new B("Store", e));
					});
				});
			},
			show(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e,
					r.id
				], "/");
				return n.retrieving(r), new Promise((e, t) => {
					R.get(i, {
						params: r,
						transformResponse: [(e) => n.transformResponse(e)]
					}).then((t) => {
						n.retrieved(t.data), e(t.data);
					}).catch((e) => {
						n.retrievingError(e), t(new B("Store", e));
					});
				});
			},
			store(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e
				], "/");
				return n.storing(r), new Promise((e, t) => {
					R.post(i, r, { transformResponse: [(e) => n.transformResponse(e)] }).then((t) => {
						n.stored(t.data), e(t.data);
					}).catch((e) => {
						n.storingError(e), t(new B("Store", e));
					});
				});
			},
			update(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e,
					r.id
				], "/");
				return n.updating(r), new Promise((e, t) => {
					R.patch(i, r, { transformResponse: [(e) => n.transformResponse(e)] }).then((t) => {
						n.updated(t.data), e(t.data);
					}).catch((e) => {
						n.updatingError(e), t(new B("Store", e));
					});
				});
			},
			delete(r) {
				let i = (0, z.default)([
					n.apiPrefix,
					n.resource,
					t,
					e,
					r.id
				], "/");
				return n.destroying(r), new Promise((e, t) => {
					R.delete(i, { transformResponse: [(e) => n.transformResponse(e)] }).then((t) => {
						n.destroyed(t.data), e(t.data);
					}).catch((e) => {
						n.destroyingError(e), t(new B("Store", e));
					});
				});
			}
		};
	}
	static delete(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			e.id
		], "/");
		return t.destroying(e), new Promise((e, r) => {
			R.delete(n, { transformResponse: [(e) => t.transformResponse(e)] }).then((n) => {
				t.destroyed(n.data), e(n.data);
			}).catch((e) => {
				t.destroyingError(e), r(new B("Delete", e));
			});
		});
	}
	static destroy(e, t = !0) {
		let n = typeof e == "number" ? e : e.id, r = this.instance(), i = null;
		t || (i = e);
		let a = "";
		return a = t ? (0, z.default)([
			r.apiPrefix,
			r.resource,
			n
		], "/") : (0, z.default)([r.apiPrefix, r.resource], "/"), r.destroying(e), new Promise((e, t) => {
			R.delete(a, {
				params: i,
				transformResponse: [(e) => r.transformResponse(e)]
			}).then((t) => {
				r.destroyed(t.data), e(t.data);
			}).catch((e) => {
				r.destroyingError(e), t(new B("Destroy", e));
			});
		});
	}
	static batchStore(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			"batch"
		], "/");
		return new Promise((r, i) => {
			R.post(n, { data: e }, { transformResponse: [(e) => t.transformResponse(e)] }).then((e) => {
				r(e.data);
			}).catch((e) => {
				t.batchStoringError(e), i(new B("BatchStoring", e));
			});
		});
	}
	static batchUpdate(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			"batch"
		], "/");
		return new Promise((r, i) => {
			R.patch(n, { data: e }, { transformResponse: [(e) => t.transformResponse(e)] }).then((e) => {
				r(e.data);
			}).catch((e) => {
				t.batchUpdatingError(e), i(new B("BatchUpdate", e));
			});
		});
	}
	static batchDelete(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			"batch-delete"
		], "/");
		return new Promise((r, i) => {
			R.post(n, { data: e }, { transformResponse: [(e) => t.transformResponse(e)] }).then((e) => {
				r(e.data);
			}).catch((e) => {
				t.batchDestroyingError(e), i(new B("BatchDelete", e));
			});
		});
	}
	static batchDestroy(e) {
		let t = this.instance(), n = (0, z.default)([
			t.apiPrefix,
			t.resource,
			"batch-destroy"
		], "/");
		return new Promise((r, i) => {
			R.patch(n, { data: e }, { transformResponse: [(e) => t.transformResponse(e)] }).then((e) => {
				r(e.data);
			}).catch((e) => {
				t.batchDestroyingError(e), i(new B("BatchDestroy", e));
			});
		});
	}
	static logs(e) {
		let t = this.instance(), n;
		n = typeof e == "number" ? e : e.id;
		let r = (0, z.default)([
			t.apiPrefix,
			t.resource,
			n,
			"logs"
		], "/");
		return new Promise((e, n) => {
			R.get(r, { transformResponse: [(e) => t.transformResponse(e)] }).then((t) => {
				e(t.data);
			}).catch((e) => {
				t.fetchingLogsError(e), n(new B("Logs", e));
			});
		});
	}
	static getResource() {
		return this.instance().resource;
	}
	static url(...e) {
		let t = this.instance();
		return (0, z.default)([
			t.apiPrefix,
			t.resource,
			...e
		], "/");
	}
	static send(e, t, n, r) {
		return R.request({
			method: e,
			url: t,
			data: n,
			params: r
		}).then((e) => e.data);
	}
	get(e) {
		let t = (0, z.default)([this.apiPrefix, this.resource], "/"), n;
		return n = e || this.queryString(), this.fetching(n), new Promise((e, r) => {
			R.get(t, {
				params: n,
				transformResponse: [(e) => this.transformResponse(e)]
			}).then((t) => {
				this.fetched(t.data), e(t.data);
			}).catch((e) => {
				this.fetchingError(e), r(new B("Get", e));
			});
		});
	}
	batchStoringError(e) {}
	batchUpdatingError(e) {}
	batchDestroyingError(e) {}
	fetchingLogsError(e) {}
	transformResponse(e) {
		if (e === null) return null;
		let t = JSON.parse(e);
		return t.data !== null && (t.data = nt(t.data, this.dates)), t;
	}
	fetching(e) {}
	fetchingError(e) {}
	fetched(e) {}
	retrieving(e) {}
	retrievingError(e) {}
	retrieved(e) {}
	storing(e) {}
	storingError(e) {}
	stored(e) {}
	updating(e) {}
	updatingError(e) {}
	updated(e) {}
	destroying(e) {}
	destroyingError(e) {}
	destroyed(e) {}
}, Jl = class extends Xi {
	name;
	constructor(e, t) {
		super(e, t), this.name = this.constructor.name;
	}
}, Yl = class extends Kl {
	uuid;
	state = i({
		isLoading: !1,
		isSuccess: !0,
		isError: !1
	});
	isBroadcasting = !1;
	channel = "";
	constructor() {
		super(), this.uuid = Al(), Ll(this).then(), $({
			data: { uuid: this.uuid },
			title: "Collection Initialized"
		}), r(() => {
			this.leaveChannel();
		});
	}
	async get(e) {
		let t;
		this.setStateLoading();
		try {
			t = e || this.queryString(), $({
				title: "Fetching",
				data: { query: t }
			}), this.fetching(t);
			let n = await this.api.get(t);
			return this.fetched(n), this.updateDataSource(n.data), $({
				title: "Fetched",
				data: { data: n.data }
			}), this.setStateSuccess(), n.data;
		} catch (e) {
			throw this.fetchingError(e), this.setStateError(), new Jl("Get", e);
		}
	}
	joinChannel(e) {
		e && (this.channel = e), _?.join(this.channel).error((e) => {
			console.error(e);
		}).listen(".created", (e) => {
			this.broadcastCreated(e);
		}).listen(".updated", (e) => {
			this.broadcastUpdated(e);
		}).listen(".deleted", (e) => {
			this.broadcastDeleted(e);
		}), this.isBroadcasting = !0, Q().then(), $({
			title: "Broadcasting",
			data: { channel: this.channel }
		});
	}
	leaveChannel() {
		this.isBroadcasting &&= (_?.leave(this.channel), !1), Q().then(), $({
			title: "Leaving Broadcast Channel",
			data: { channel: this.channel }
		});
	}
	factory(e) {
		e && e.length && (this.data = i([...e]));
	}
	fetching(e) {}
	fetchingError(e) {}
	fetched(e) {}
	broadcastCreated(e) {}
	broadcastUpdated(e) {}
	broadcastDeleted(e) {}
	setStateLoading() {
		this.state.isLoading = !0, this.state.isSuccess = !0, this.state.isError = !1, Q().then(), $({
			title: "Loading",
			data: this.state
		});
	}
	setStateSuccess() {
		this.state.isLoading = !1, this.state.isSuccess = !0, this.state.isError = !1, Q().then(), $({
			title: "Loading success",
			data: this.state
		});
	}
	setStateError() {
		this.state.isLoading = !1, this.state.isSuccess = !1, this.state.isError = !0, Q().then(), $({
			title: "Loading error",
			data: this.state
		});
	}
	updateDataSource(e) {
		this.data = i([...e]), Q().then(), $({
			title: "Data Update",
			data: e
		});
	}
}, Xl = class {
	permissions = i({
		create: !0,
		read: !0,
		update: !0,
		delete: !0
	});
	constructor(e) {
		e && this.set(e);
	}
	_action = a(Y.CREATE);
	get action() {
		return this._action.value;
	}
	set action(e) {
		this._action.value = e;
	}
	set(e) {
		e.create === void 0 ? this.permissions.create = !1 : this.permissions.create = e.create, e.read === void 0 ? this.permissions.read = !1 : this.permissions.read = e.read, e.update === void 0 ? this.permissions.update = !1 : this.permissions.update = e.update, e.delete === void 0 ? this.permissions.delete = !1 : this.permissions.delete = e.delete;
	}
	can(e) {
		return this.permissions[e];
	}
	cannot(e) {
		return !this.permissions[e];
	}
	isReadOnly() {
		return this.permissions.update && this._action.value === Y.READ;
	}
	edit() {
		return this.updating();
	}
	creating() {
		return this.permissions.create ? (this._action.value = Y.CREATE, !0) : !1;
	}
	reading() {
		return this.permissions.read ? (this._action.value = Y.READ, !0) : !1;
	}
	updating() {
		return this.permissions.update ? (this._action.value = Y.UPDATE, !0) : !1;
	}
	deleting() {
		return this.permissions.delete ? (this._action.value = Y.DELETE, !0) : !1;
	}
	isReading() {
		return this._action.value === Y.READ;
	}
	isUpdating() {
		return this._action.value === Y.UPDATE;
	}
	isDeleting() {
		return this._action.value === Y.DELETE;
	}
	isCreating() {
		return this._action.value === Y.CREATE;
	}
}, Zl = class extends ql {
	resource = "eloquent-api/models";
	constructor() {
		super();
	}
}, Ql = { install(e) {
	process.env.NODE_ENV !== "production" && Gl(e);
} }, $l = class {
	urls = {
		login: "login",
		logout: "logout",
		forgotPassword: "users/forgot-password",
		resetPassword: "users/reset-password"
	};
	constructor(e) {
		e?.login && (this.urls.login = e.login), e?.logout && (this.urls.logout = e.logout), e?.forgotPassword && (this.urls.forgotPassword = e.forgotPassword), e?.resetPassword && (this.urls.resetPassword = e.resetPassword);
	}
	get token() {
		return localStorage.getItem("sanctum_token");
	}
	set token(e) {
		localStorage.setItem("sanctum_token", e);
	}
	login(e) {
		return new Promise((t, n) => {
			R.get("/api/csrf-cookie").then(() => {
				let r = `${Ji}/${this.urls.login}`;
				R.post(r, e).then((e) => {
					this.token = e.data.token, R.defaults.headers.common.Authorization = `Bearer ${this.token}`, this.loggedIn(e.data), t(e.data);
				}).catch((e) => {
					console.error(e), n(e);
				});
			}).catch((e) => {
				console.error(e), this.loginError(e), n(e);
			});
		});
	}
	loggedIn(e) {}
	loginError(e) {}
	isAuthenticated() {
		return localStorage.getItem("sanctum_token") !== null;
	}
	logout() {
		let e = `${Ji}/${this.urls.logout}`;
		return new Promise((t, n) => {
			R.post(e).then((e) => {
				localStorage.removeItem("sanctum_token"), this.loggedOut(e.data), t(e.data);
			}).catch((e) => {
				console.error(e), this.logoutError(e), n(e);
			});
		});
	}
	loggedOut(e) {}
	logoutError(e) {}
	forgotPassword(e) {
		let t = `${Ji}/${this.urls.forgotPassword}`;
		return new Promise((n, r) => {
			R.post(t, { email: e }).then((e) => {
				n(e.data);
			}).catch((e) => {
				console.error(e), r(e);
			});
		});
	}
	resetPassword(e) {
		let t = `${Ji}/${this.urls.resetPassword}`;
		return new Promise((n, r) => {
			R.post(t, e).then((e) => {
				this.token = e.data.token, R.defaults.headers.common.Authorization = `Bearer ${this.token}`, this.loggedIn(e.data), n(e.data);
			}).catch((e) => {
				console.error(e), r(e);
			});
		});
	}
};
//#endregion
export { Y as Action, Kc as Actioned, ql as Api, B as ApiError, Kl as ApiQuery, $l as Auth, Yl as Collection, Jl as CollectionError, Xi as EloquentError, Nl as Model, Zl as ModelApi, El as ModelError, Xl as Policy, Ql as VueEloquentPlugin, _ as broadcast, v as createBroadcast, Yi as createHttp, tt as formatDates, nt as formatObject, R as http };

//# sourceMappingURL=vue-eloquent.js.map