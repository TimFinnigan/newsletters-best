(this["webpackJsonpnewsletters-best"]=this["webpackJsonpnewsletters-best"]||[]).push([[0],{12:function(e,t,r){},16:function(e,t,r){},17:function(e){e.exports=JSON.parse('[{"author":"Maria Popova","description":"The week\u2019s most interesting and inspiring articles across art, science, philosophy, creativity, children\u2019s books, and other strands of our search for truth, beauty, and meaning.","categories":["Art","Science","Philosophy"],"frequency":"Weekly","image":"https://www.brainpickings.org/wp-content/themes/brainpickings/images/brain_pickings_icon@2x.png","source":{"name":"Brainpickings","url":"https://www.brainpickings.org/newsletter/"}},{"author":"Tim Ferriss","description":"The five coolest things I\u2019ve found (or explored) that week. It could include exclusive giveaways or chances to interact with me, books, gadgets, albums, articles, new hacks/tricks, and \u2014 of course \u2014 all sorts of weird stuff I dig up around the world.","categories":["Business","Technology"],"frequency":"Weekly","image":"https://peterattiamd.com/wp-content/uploads/2018/06/TimFerrissShoot-186.jpg","source":{"name":"Five-Bullet Friday","url":"https://go.tim.blog/5-bullet-friday-1/"}},{"author":"Ryan Holiday","description":"5 to 10 amazing books that I read, reviewed and think you\u2019ll like. The goal of the newsletter is to recommend books that stick with you long after you\u2019ve put them down\u2014or better yet, change your life.","categories":["Books"],"frequency":"Monthly","image":"https://149366099.v2.pressablecdn.com/wp-content/uploads/2018/06/r-holiday-500px.jpg","source":{"name":"Reading Recommendations","url":"https://ryanholiday.net/reading-newsletter/"}},{"author":"Benedict Evans","description":"My notes for the week on the news that actually matters and what it might mean.","categories":["Business","Technology"],"frequency":"Weekly","image":"https://pbs.twimg.com/profile_images/845396356579508224/1ruiOPLI_400x400.jpg","source":{"name":"Newsletter","url":"https://www.ben-evans.com/"}},{"author":"NY Times","description":"Wake Up With The Times, Anywhere in the World. Get the Morning Briefing in your inbox. What you need to know to start your day, each weekday morning.","categories":["News"],"frequency":"Daily","image":"https://static01.nyt.com/email-images/Newsletter%20Icons/Morning-Briefing.png","source":{"name":"Morning Briefing","url":"https://www.nytimes.com/interactive/2018/briefing/global-morning-briefing-newsletter-signup.html"}}]')},18:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(6),l=r.n(o),s=(r(12),r(4)),i=r(3);function c(e){var t=e.preGlobalFilteredRows,r=e.globalFilter,n=e.setGlobalFilter,o=t.length;return a.a.createElement("span",null,a.a.createElement("input",{value:r||"",onChange:function(e){n(e.target.value||void 0)},placeholder:"Search ".concat(o," newsletters..."),style:{width:"100%"}}))}function u(e){var t=e.columns,r=e.data,n=Object(i.c)({columns:t,data:r},i.a,i.b),o=n.getTableProps,l=n.getTableBodyProps,s=n.headerGroups,u=n.rows,m=n.prepareRow,d=n.state,p=n.preGlobalFilteredRows,h=n.setGlobalFilter;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c,{preGlobalFilteredRows:p,globalFilter:d.globalFilter,setGlobalFilter:h,onChange:h}),a.a.createElement("table",o(),a.a.createElement("thead",null,s.map((function(e){return a.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return a.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:e.isSorted?e.isSortedDesc?"sort-desc":"sort-asc":""}),e.render("Header"))})))}))),a.a.createElement("tbody",l(),u.map((function(e,t){return m(e),a.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return a.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))))}r(16);var m=r(17),d=function(e){var t=e.values;return a.a.createElement(a.a.Fragment,null,t.map((function(e,t){return a.a.createElement("span",{key:t,className:"badge"},e)})))};var p=function(){s.a.initialize("UA-74402730-2"),s.a.pageview("/Home");var e=Object(n.useMemo)((function(){return[{Header:"Newsletter",columns:[{Header:" ",accessor:"image",Cell:function(e){var t=e.cell.value;return a.a.createElement("img",{className:"icon",src:t,alt:""})}},{Header:"Name",accessor:"source",Cell:function(e){var t=e.cell.value;return a.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name)}},{Header:"Author",accessor:"author"}]},{Header:"Details",columns:[{Header:"Description",accessor:"description"},{Header:"Category",accessor:"categories",Cell:function(e){var t=e.cell.value;return a.a.createElement(d,{values:t})}},{Header:"Frequency",accessor:"frequency"}]}]}),[]);return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"newsletters.best"),a.a.createElement("span",{id:"subscribe"},a.a.createElement("a",{href:"https://tinyletter.com/newsletters-best",target:"_blank",rel:"noopener noreferrer"},"Subscribe")," ","for monthly updates on new newsletters"),a.a.createElement(u,{columns:e,data:m.sort((function(){return Math.random()-.5}))}),a.a.createElement("footer",null,a.a.createElement("span",null,"Made by"," ",a.a.createElement("a",{href:"http://timfinnigan.com",target:"_blank",rel:"noopener noreferrer"},"Tim Finnigan"))),a.a.createElement("span",null,"TODO"),a.a.createElement("ol",null,a.a.createElement("li",null,"Home site: add email. reorder projects(newsletters first)"),a.a.createElement("li",null,"share on product hunt"),a.a.createElement("li",null,"upon launching - thank people on Twitter (also helps spread the word...)"),a.a.createElement("li",null,"Add 100 newsletters"),a.a.createElement("li",null,"Add pagination? start with 50?")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(18)}},[[7,1,2]]]);
//# sourceMappingURL=main.c3bd4d9e.chunk.js.map