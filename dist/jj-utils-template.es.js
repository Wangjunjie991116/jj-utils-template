function c(t, n) {
  let e = 0;
  return function(...u) {
    const r = Date.now();
    r - e >= n && (t.apply(this, u), e = r);
  };
}
function i(t) {
  if (t === null || typeof t != "object")
    return t;
  if (t instanceof Date)
    return new Date(t.getTime());
  if (t instanceof Array)
    return t.map((n) => i(n));
  if (t instanceof Object) {
    const n = {};
    return Object.keys(t).forEach((e) => {
      n[e] = i(t[e]);
    }), n;
  }
  return t;
}
function f(t, n) {
  return console.log("add2"), t + n;
}
function o(t, n) {
  return t - n;
}
function a(t, n) {
  return t * n;
}
function l(t, n) {
  if (n === 0)
    throw new Error("除数不能为0");
  return t / n;
}
export {
  f as add,
  i as deepClone,
  l as divide,
  a as multiply,
  o as subtract,
  c as throttle
};
