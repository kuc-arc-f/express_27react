"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Csr = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
console.log("env=", process.env.NODE_ENV);
function Csr() {
    return ((0, jsx_runtime_1.jsxs)("html", { children: [(0, jsx_runtime_1.jsxs)("head", { children: [(0, jsx_runtime_1.jsx)("title", { children: "welcome" }), (process.env.NODE_ENV === "develop") ? ((0, jsx_runtime_1.jsx)("link", { href: "/static/style.css", rel: "stylesheet" })) : ((0, jsx_runtime_1.jsx)("link", { href: "/public/static/style.css", rel: "stylesheet" }))] }), (0, jsx_runtime_1.jsx)("div", { id: "root" }), (process.env.NODE_ENV === "develop") ? ((0, jsx_runtime_1.jsx)("script", { type: "module", src: "/static/main.js" })) : ((0, jsx_runtime_1.jsx)("script", { type: "module", src: "/public/static/main.js" }))] }));
}
exports.Csr = Csr;
