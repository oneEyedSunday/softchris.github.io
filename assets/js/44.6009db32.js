(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{285:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"adding-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding images")]),e._v(" "),s("p",[e._v("Follow me on "),s("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),s("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),s("p",[e._v("So how do we deal with images that we have locally. It's really very easy, we just need to import and assign them to the source property of our image, like so:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import myImage from './assets/myImg.png';\n\nclass TestComponent extends React.Component {\n  render() {\n    return (\n      <img src={myImage} />\n    );\n  }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("So why does this work, well here is an explanation from the official docs:")]),e._v(" "),s("blockquote",[s("p",[e._v("...You can import a file right in a JavaScript module. This tells Webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the src attribute of an image or the href of a link to a PDF.")])]),e._v(" "),s("blockquote",[s("p",[e._v("To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png...")])])])},[],!1,null,null,null);t.default=n.exports}}]);