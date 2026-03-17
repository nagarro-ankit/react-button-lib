var s = { exports: {} }, e = {};
var x;
function p() {
  if (x) return e;
  x = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), R = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(a, r, t) {
    var u = null;
    if (t !== void 0 && (u = "" + t), r.key !== void 0 && (u = "" + r.key), "key" in r) {
      t = {};
      for (var o in r)
        o !== "key" && (t[o] = r[o]);
    } else t = r;
    return r = t.ref, {
      $$typeof: n,
      type: a,
      key: u,
      ref: r !== void 0 ? r : null,
      props: t
    };
  }
  return e.Fragment = R, e.jsx = i, e.jsxs = i, e;
}
var d;
function l() {
  return d || (d = 1, s.exports = p()), s.exports;
}
var v = l();
const c = ({ label: n = "Click Me" }) => /* @__PURE__ */ v.jsx(
  "button",
  {
    style: {
      padding: "10px 16px",
      background: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer"
    },
    children: n
  }
);
export {
  c as Button
};
