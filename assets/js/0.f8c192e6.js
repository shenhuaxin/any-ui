(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{76:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),a("p",[t._v("推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i any-ui -S\n")])]),a("h3",{attrs:{id:"引入组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入组件")]),a("h4",{attrs:{id:"方式1-按需引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式1-按需引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式1: 按需引入")]),a("ol",[a("li",[t._v("安装 babel-plugin-import 插件")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i babel-plugin-import -d\n")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v(".babelrc 或 babel-loader 中添加插件配置")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 注意：webpack 1 无需设置 libraryDirectory。")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"import"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"libraryName"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"any-ui"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"libraryDirectory"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"es"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"style"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h4",{attrs:{id:"方式2-全部引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式2-全部引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式2: 全部引入")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Atom "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'any-ui'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'any-ui/index.css'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Atom"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),a("p",[t._v("一旦配置了 babel-plugin-import 全部引入功能会失效, 2者不能并存.")])]),a("h3",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" CDN")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" 引入css "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("link rel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"stylesheet"')]),t._v(" href"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"https://unpkg.com/any-ui/index.css"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" 引入js "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"https://unpkg.com/any-ui/index.js"')]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),a("h3",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[t._v("#")]),t._v(" Hello world")]),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装"}},[t._v("安装")])]),a("li",[a("a",{attrs:{href:"#引入组件"}},[t._v("引入组件")])]),a("li",[a("a",{attrs:{href:"#cdn"}},[t._v("CDN")])]),a("li",[a("a",{attrs:{href:"#hello-world"}},[t._v("Hello world")])])])]),a("p")])}],!1,null,null,null);s.default=r.exports}}]);