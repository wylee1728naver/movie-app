(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{26:function(e,t,s){},46:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),o=s(15),c=s.n(o),i=(s(26),s(6)),r=s.n(i),l=s(16),m=s(17),d=s(18),u=s(21),j=s(20),v=s(19),p=s.n(v),b=(s(46),s(0));var h=function(e){e.id;var t=e.year,s=e.title,n=e.summary,a=e.poster,o=e.genres;return Object(b.jsxs)("div",{className:"movie",children:[Object(b.jsx)("img",{src:a,alt:s,title:s}),Object(b.jsxs)("div",{className:"movie__data",children:[Object(b.jsx)("h3",{className:"movie__title",style:{backgroundColor:"red"},children:s}),Object(b.jsx)("h5",{className:"movie__year",children:t}),Object(b.jsx)("ul",{className:"movie__genres",children:o.map((function(e,t){return Object(b.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(b.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]})]})]})},g=(s(48),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(m.a)(this,s),(n=t.call(this,e)).state={isLoading:!0,movies:[]},n.getMovies=Object(l.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by");case 2:t=e.sent,s=t.data.data.movies,n.setState({movies:s,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),console.log("hello"),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("I just updated")}},{key:"componentWillUnmount",value:function(){console.log("Goodbye")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return console.log(s),Object(b.jsx)("section",{className:"container",children:t?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(b.jsx)("div",{className:"movies",children:s.map((function(e){return Object(b.jsx)(h,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.aa795e91.chunk.js.map