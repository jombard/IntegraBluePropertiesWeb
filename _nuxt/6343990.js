(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("4e8213bc",content,!0,{sourceMap:!1})},121:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("38d26539",content,!0,{sourceMap:!1})},122:function(t,e,n){var content=n(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("e6bfadd6",content,!0,{sourceMap:!1})},123:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("58dc9d76",content,!0,{sourceMap:!1})},124:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0641b0c2",content,!0,{sourceMap:!1})},125:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("14d83f55",content,!0,{sourceMap:!1})},144:function(t,e,n){"use strict";n.r(e);var o=n(156),r=n(157),l=n(158),m=n(159),d=n(160),c={name:"TopPageLinks",components:{EmailIcon:o.a,PhoneIcon:r.a,TwitterIcon:l.a,FacebookIcon:m.a,InstagramIcon:d.a}},f=n(2),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto flex flex-row py-2"},[n("a",{staticClass:"mr-5 w-10 md:w-6 mb-0",attrs:{href:"mailto:hello@integrablue.co.uk"}},[n("EmailIcon"),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Email")])],1),t._v(" "),n("a",{staticClass:"mr-5 w-10 md:w-6 mb-0",attrs:{href:"tel:01308 800 291"}},[n("PhoneIcon"),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Phone")])],1),t._v(" "),n("a",{staticClass:"mr-5 w-10 md:w-6 mb-0",attrs:{href:"https://twitter.com/integrablueprop",target:"_blank",rel:"nofollow norefer"}},[n("TwitterIcon"),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Twitter")])],1),t._v(" "),n("a",{staticClass:"mr-5 w-10 md:w-6 mb-0",attrs:{href:"https://www.facebook.com/integrablueproperties/",target:"_blank",rel:"nofollow norefer"}},[n("FacebookIcon"),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Facebook")])],1),t._v(" "),n("a",{staticClass:"mr-5 w-10 md:w-6 mb-0",attrs:{href:"https://www.instagram.com/integrablueproperties/",target:"_blank",rel:"nofollow norefer"}},[n("InstagramIcon"),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Instagram")])],1)])}),[],!1,null,null,null);e.default=component.exports},145:function(t,e,n){"use strict";n.r(e);n(215);var o=n(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),n("ul",{staticClass:"md:hidden"},[n("li",[n("nuxt-link",{attrs:{to:"/landlords"}},[t._v("Landlords")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/investors"}},[t._v("Investors")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/holiday-lets"}},[t._v("Holiday Lets")])],1)])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])}),[],!1,null,"7826c350",null);e.default=component.exports},155:function(t,e,n){"use strict";var o={watch:{$route:function(){this.$store.dispatch("menu/close")}}},r=(n(209),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("AppHeader"),this._v(" "),e("AppSidebar"),this._v(" "),e("div",{staticClass:"page-wrapper"},[e("Nuxt")],1),this._v(" "),e("AppFooter")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppHeader:n(250).default,AppSidebar:n(252).default,AppFooter:n(253).default})},161:function(t,e,n){t.exports=n.p+"img/mews.41d1d29.jpg"},162:function(t,e,n){"use strict";n.r(e);var o={name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,default:""},isWhite:{type:Boolean}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto px-4 py-10 md:py-24 relative"},[n("h1",{staticClass:"font-bold mb-5 text-4xl md:text-6xl leading-tight",class:t.isWhite?"text-white":"text-blue"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",[t.subtitle?n("p",{staticClass:"text-2xl md:text-3xl leading-7 mb-0",class:t.isWhite?"text-white":"text-gray-900"},[t._v("\n      "+t._s(t.subtitle)+"\n    ")]):t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},168:function(t,e,n){n(169),t.exports=n(170)},205:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("38dfa7e4",content,!0,{sourceMap:!1})},206:function(t,e,n){(e=n(27)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bg-white{--bg-opacity:1;background-color:#f1ede2;background-color:rgba(241,237,226,var(--bg-opacity))}.bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.bg-blue{--bg-opacity:1;background-color:#006298;background-color:rgba(0,98,152,var(--bg-opacity))}.rounded{border-radius:.25rem}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.font-serif{font-family:Georgia,Cambria,"Times New Roman",Times,serif}.font-medium{font-weight:500}.font-bold{font-weight:700}.h-1{height:.25rem}.h-32{height:8rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-4xl{font-size:2.25rem}.leading-7{line-height:1.75rem}.leading-tight{line-height:1.25}.leading-relaxed{line-height:1.625}.mx-4{margin-left:1rem;margin-right:1rem}.my-24{margin-top:6rem;margin-bottom:6rem}.mx-auto{margin-left:auto;margin-right:auto}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mt-3{margin-top:.75rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mr-5{margin-right:1.25rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mt-8{margin-top:2rem}.mb-8{margin-bottom:2rem}.mt-10{margin-top:2.5rem}.mb-10{margin-bottom:2.5rem}.max-w-2xl{max-width:42rem}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.p-4{padding:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-24{padding-top:6rem;padding-bottom:6rem}.pr-5{padding-right:1.25rem}.pb-5{padding-bottom:1.25rem}.pt-10{padding-top:2.5rem}.static{position:static}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.resize-none{resize:none}.focus\\:shadow-outline:focus{box-shadow:0 0 0 3px rgba(66,153,225,.5)}.text-center{text-align:center}.text-white{--text-opacity:1;color:#f1ede2;color:rgba(241,237,226,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.text-blue{--text-opacity:1;color:#006298;color:rgba(0,98,152,var(--text-opacity))}.italic{font-style:italic}.uppercase{text-transform:uppercase}.tracking-wider{letter-spacing:.05em}.w-10{width:2.5rem}.w-1\\/2{width:50%}.w-1\\/4{width:25%}.w-full{width:100%}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:flex-row{flex-direction:row}.md\\:flex-no-wrap{flex-wrap:nowrap}.md\\:text-3xl{font-size:1.875rem}.md\\:text-5xl{font-size:3rem}.md\\:text-6xl{font-size:4rem}.md\\:mx-0{margin-left:0;margin-right:0}.md\\:mb-0{margin-bottom:0}.md\\:p-8{padding:2rem}.md\\:p-10{padding:2.5rem}.md\\:py-24{padding-top:6rem;padding-bottom:6rem}.md\\:pb-0{padding-bottom:0}.md\\:pr-5{padding-right:1.25rem}.md\\:pt-24{padding-top:6rem}.md\\:absolute{position:absolute}.md\\:text-left{text-align:left}.md\\:w-6{width:1.5rem}.md\\:w-1\\/2{width:50%}.md\\:w-1\\/3{width:33.333333%}.md\\:w-1\\/4{width:25%}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}',""]),t.exports=e},209:function(t,e,n){"use strict";n(120)},210:function(t,e,n){var o=n(27),r=n(165),l=n(161);e=o(!1);var m=r(l);e.push([t.i,'*,:after,:before{box-sizing:border-box;margin:0}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}body{margin:0;padding:0}.logo,h1{font-weight:400}.logo{font-size:1.2em}.logo strong{color:#006298}p{margin-bottom:1em}.page-wrapper{margin-top:68px;margin-bottom:400px;background-color:#fff}.main-bg{position:absolute;background:url('+m+');background-position:40% 0;width:40%;height:800px;right:0;opacity:.6}.bg-cover-img{background-attachment:fixed;background-size:cover;background-position-x:0,center;background-position-x:initial,center;background-position-y:0,center;background-position-y:initial,center;background-repeat:repeat,no-repeat;background-repeat:initial,no-repeat}@-webkit-keyframes slideInFromLeft{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes slideInFromLeft{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@-webkit-keyframes slideInFromRight{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes slideInFromRight{0%{transform:translateX(100%)}to{transform:translateX(0)}}.slide-in-from-left{-webkit-animation:slideInFromLeft 1s ease-out 0s 1;animation:slideInFromLeft 1s ease-out 0s 1}.slide-in-from-right{-webkit-animation:slideInFromRight 1s ease-out 0s 1;animation:slideInFromRight 1s ease-out 0s 1}a.link-underline{position:relative}a.link-underline:before{content:"";background-color:#006298;height:5px;position:absolute;bottom:0;left:0;transition:all .5s;right:100%}a.link-underline:hover:before{right:0}.btn{align-self:center;position:relative;white-space:nowrap;z-index:10;transition:1s;padding:1rem 2rem;display:inline-block}.btn-blue{color:#fff;background-color:#006298}.btn-blue:focus,.btn-blue:hover{background-color:#004368}.btn-white{color:#006298}.btn-white:focus,.btn-white:hover{color:#fff;background-color:#006298}@media (min-width:600px){body{font-size:18px}}@media (min-width:900px){body{font-size:20px}.page-wrapper{margin-bottom:300px}}@media (min-width:1200px){body{font-size:22px}}.nuxt-content h3{font-size:1.875rem;line-height:1.25}@media (min-width:768px){.nuxt-content h3{font-size:3rem}}.nuxt-content ul{margin-bottom:1em;list-style-type:none}.nuxt-content ul li:before{content:"\\25A0";color:#006298;margin-right:10px}.page-enter-active,.page-enter-active~.footer{transition:filter .25s cubic-bezier(.47,0,.745,.715)}.page-leave-active,.page-leave-active~.footer{transition:filter .25s cubic-bezier(.39,.575,.565,1)}.page-enter,.page-enter~.footer,.page-leave-active,.page-leave-active~.footer{filter:grayscale(1) opacity(0)}',""]),t.exports=e},211:function(t,e,n){"use strict";n(121)},212:function(t,e,n){(e=n(27)(!1)).push([t.i,"header{position:fixed;width:100%;background-color:#fff;z-index:1000;top:0;box-shadow:0 0 2rem -1rem rgba(0,0,0,.2)}",""]),t.exports=e},213:function(t,e,n){"use strict";n(122)},214:function(t,e,n){(e=n(27)(!1)).push([t.i,".wrapper{display:inline-block;position:relative;cursor:pointer}.main-item{width:25px;height:25px;position:relative}.line{position:absolute;background-color:#006298;height:5px;width:100%;border-radius:10px;transition:all .32s cubic-bezier(.25,.1,.28,1.54)}.line01{top:17%}.line02{top:49%}.line03{top:79%}.menu.close .line01{transform:rotate(45deg);top:49%}.menu.close .line02,.menu.close .line03{transform:rotate(-45deg);top:49%}@media (min-width:600px){.menu,.wrapper{display:none}nav ul{display:flex}nav ul li a{font-size:.9em;padding:.3em .8em}}",""]),t.exports=e},215:function(t,e,n){"use strict";n(123)},216:function(t,e,n){(e=n(27)(!1)).push([t.i,".sidenav li>a[data-v-7826c350]{font-size:1.5rem;line-height:3rem}.sidenav li>ul>li>a[data-v-7826c350]{font-size:1.25rem;line-height:2.5rem;margin-left:1rem}.nuxt-link-exact-active[data-v-7826c350]{color:#006298;font-weight:700}",""]),t.exports=e},217:function(t,e,n){"use strict";n(124)},218:function(t,e,n){(e=n(27)(!1)).push([t.i,".menu-container[data-v-5697e4c1]{height:100%;width:100%}.sidenav[data-v-5697e4c1]{height:100%;width:80%;background-color:#d6d6d6;z-index:10000;position:fixed;top:0;left:0;box-sizing:border-box;padding:1rem 3rem}.sidenav li>a[data-v-5697e4c1]{font-size:1.5rem}.slide-side-enter-active[data-v-5697e4c1],.slide-side-leave-active[data-v-5697e4c1]{transition:all .3s ease-out}.slide-side-enter[data-v-5697e4c1],.slide-side-leave-to[data-v-5697e4c1]{transform:translateX(-100%)}",""]),t.exports=e},221:function(t,e,n){"use strict";n(125)},222:function(t,e,n){(e=n(27)(!1)).push([t.i,"footer{z-index:-1}",""]),t.exports=e},223:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"actions",(function(){return l})),n.d(e,"mutations",(function(){return m}));var o=function(){return{isOpen:!1}},r={isOpen:function(t){return t.isOpen}},l={toggle:function(t){(0,t.commit)("TOGGLE")},close:function(t){(0,t.commit)("CLOSE")}},m={TOGGLE:function(t){t.isOpen=!t.isOpen},CLOSE:function(t){t.isOpen=!1}}},250:function(t,e,n){"use strict";n.r(e);var o={name:"TheHeader"},r=(n(211),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"container mx-auto flex justify-between p-4"},[e("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[this._v("Integra"),e("strong",[this._v("Blue")]),this._v(" Properties")]),this._v(" "),e("nav",[e("MenuIcon"),this._v(" "),e("AppLinks",{staticClass:"hidden md:flex"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MenuIcon:n(251).default,AppLinks:n(145).default})},251:function(t,e,n){"use strict";n.r(e);var o={name:"MenuIcon",computed:{isMenuOpen:function(){return this.$store.getters["menu/isOpen"]}}},r=(n(213),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"main-item menu text-blue",class:{close:t.isMenuOpen},on:{click:function(e){return t.$store.dispatch("menu/toggle")}}},[n("span",{staticClass:"line line01"}),t._v(" "),n("span",{staticClass:"line line02"}),t._v(" "),n("span",{staticClass:"line line03"})])])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){"use strict";n.r(e);var o={name:"SidebarMenu",computed:{isMenuOpen:function(){return this.$store.getters["menu/isOpen"]}}},r=(n(217),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-container"},[e("transition",{attrs:{name:"slide-side"}},[this.isMenuOpen?e("div",{staticClass:"sidenav"},[e("AppLinks"),this._v(" "),e("TopPageLinks",{staticClass:"text-blue"})],1):this._e()])],1)}),[],!1,null,"5697e4c1",null);e.default=component.exports;installComponents(component,{AppLinks:n(145).default,TopPageLinks:n(144).default})},253:function(t,e,n){"use strict";n.r(e);var o={name:"Footer"},r=(n(221),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"fixed bottom-0 w-full bg-gray-900 pt-10 pb-5 text-gray-500"},[n("div",{staticClass:"container mx-auto px-4"},[n("div",{staticClass:"flex flex-col md:flex-row mb-5"},[n("div",{staticClass:"mb-5 md:mb-0 md:w-1/2"},[n("strong",[t._v("IntegraBlue Properties")]),n("br"),t._v(" "),n("TopPageLinks")],1),t._v(" "),n("div",{staticClass:"mb-5 md:mb-0 md:w-1/4"},[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),n("br"),t._v(" "),n("nuxt-link",{attrs:{to:"/services"}},[t._v("Services")]),n("br"),t._v(" "),n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),n("div",{staticClass:"mb-5 md:mb-0 md:w-1/4"},[n("nuxt-link",{attrs:{to:"/landlords"}},[t._v("Landlords")]),n("br"),t._v(" "),n("nuxt-link",{attrs:{to:"/holiday-lets"}},[t._v("Holiday Lets")]),n("br"),t._v(" "),n("nuxt-link",{attrs:{to:"/investors"}},[t._v("Investors")])],1)]),t._v(" "),n("div",{staticClass:"text-base"},[t._v("\n      Registered Company in England no: 12247772 © Copyright 2020. All\n      Rights Reserved.\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TopPageLinks:n(144).default})},34:function(t,e,n){"use strict";var o={props:{error:{type:Object,default:null}}},r=n(2),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto py-24"},[e("PageHeader",{attrs:{title:"An error has occurred"}},[e("pre",[this._v(this._s(this.error))])])],1)}),[],!1,null,"6c71edb1",null);e.a=component.exports;installComponents(component,{PageHeader:n(162).default})}},[[168,15,1,16]]]);