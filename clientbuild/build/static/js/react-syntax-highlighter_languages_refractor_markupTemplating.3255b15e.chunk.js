"use strict";(self.webpackChunkclientbuild=self.webpackChunkclientbuild||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,u=i.length;-1!==t.code.indexOf(r=n(a,u));)++u;return i[u]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(u){for(var c=0;c<u.length&&!(r>=o.length);c++){var l=u[c];if("string"===typeof l||l.content&&"string"===typeof l.content){var s=o[r],p=t.tokenStack[s],g="string"===typeof l?l:l.content,f=n(a,s),k=g.indexOf(f);if(k>-1){++r;var d=g.substring(0,k),h=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),m=g.substring(k+f.length),y=[];d&&y.push.apply(y,i([d])),y.push(h),m&&y.push.apply(y,i([m])),"string"===typeof l?u.splice.apply(u,[c,1].concat(y)):l.content=y}}else l.content&&i(l.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.3255b15e.chunk.js.map