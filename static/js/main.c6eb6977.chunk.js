(this["webpackJsonpproject-3"]=this["webpackJsonpproject-3"]||[]).push([[0],{46:function(e,t,n){e.exports=n(75)},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),l=n(23),s=n(12),i=n(25),u={questions:[],score:0,answer:"",correct_number:0,incorrect_number:0},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=Object(i.a)({},e);switch(t.type){case"START":return n.questions=t.value,n.score=0,n.answer="",n.correct_number=0,n.incorrect_number=0,n;case"CORRECT":return Object(i.a)({},e,{score:e.score+=5,answer:"",correct_number:e.correct_number+=1});case"INCORRECT_NUMBER":return n.incorrect_number+=1,n;case"ANSWER":return Object(i.a)({},e,{answer:t.answer});default:return n}},p=n(16),h=n(24),v=n(9),f=n(10),b=n(13),d=n(11),y=n(14),E=n(76),x=n(77),w=function(e){function t(){return Object(v.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.title,a=e.options,c=e.onChange;return r.a.createElement("div",{className:"dropdown"},r.a.createElement(E.a,{for:t},n),r.a.createElement(x.a,{type:"select",name:t,id:t,onChange:c},a.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.text)}))))}}]),t}(a.Component),g=[{name:"amount",title:"Number Of Questions",options:[{value:5,text:"5"},{value:10,text:"10"},{value:15,text:"15"}]},{name:"category",title:"Choose Category",options:[{value:"any",text:"Any Category"},{value:"9",text:"General Knowledge"},{value:"10",text:"Entertainment: Books"},{value:"11",text:"Entertainment: Film"},{value:"12",text:"Entertainment: Music"},{value:"13",text:"Entertainment: Musicals & Theatres"},{value:"14",text:"Entertainment: Television"},{value:"15",text:"Entertainment: Video Games"},{value:"16",text:"Entertainment: Board Games"},{value:"17",text:"Science & Nature"},{value:"18",text:"Science: Computers"},{value:"19",text:"Science: Mathematics"},{value:"20",text:"Mythology"},{value:"21",text:"Sports"},{value:"22",text:"Geography"},{value:"23",text:"History"},{value:"24",text:"Politics"},{value:"25",text:"Art"},{value:"26",text:"Celebrities"},{value:"27",text:"Animals"},{value:"28",text:"Vehicles"},{value:"29",text:"Entertainment: Comics"},{value:"30",text:"Science: Gadgets"},{value:"31",text:"Entertainment: Japanese Anime & Manga"},{value:"32",text:"Entertainment: Cartoon & Animations"}]},{name:"level",title:"Choose Difficulty",options:[{value:"any",text:"Any Difficulty"},{value:"easy",text:"Easy"},{value:"medium",text:"Medium"},{value:"hard",text:"hard"}]},{name:"type",title:"Choose The Questions Type",options:[{value:"any",text:"Any"},{value:"multiple",text:"Multiple"},{value:"boolean",text:"True / False"}]}],j=n(78),O=n(44),C=n.n(O),k=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={amount:5,category:"any",level:"any",type:"multiple",dropdowns:g},n.onChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r))},n.handleClick=function(){var e=n.generateUrl();n.sendRequest(e)},n.generateUrl=function(){var e=n.state,t=e.amount,a=e.category,r=e.level,c=e.type,o="https://opentdb.com/api.php?amount=".concat(t,"&type=").concat(c);return"any"!==a&&(o+="&category=".concat(a)),"any"!==r&&(o+="&Difficulty=".concat(r)),o},n.sendRequest=function(e){C.a.get(e).then((function(e){var t=e.data.results;n.props.start(t),n.props.history.push("/questions")})).catch((function(e){return console.log(e)}))},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flex  flex-column h-100"},r.a.createElement("div",{className:"container h-100 flex flex-column justify-content-center w-500px"},r.a.createElement("div",{className:"bg-white p-5 rounded"},this.state.dropdowns.map((function(t,n){return r.a.createElement(w,{key:n,name:t.name,title:t.title,options:t.options,onChange:e.onChange})})),r.a.createElement("br",null),r.a.createElement(j.a,{outline:!0,block:!0,color:"primary",onClick:this.handleClick},"Start Game"))))}}]),t}(a.Component),N=Object(s.b)(null,(function(e){return{start:function(t){return e({type:"START",value:t})}}}))(Object(p.e)(k)),_=n(31),A=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selected:0},n.handleClick=function(e,t){n.props.clickAnswer(e),n.setState({selected:t})},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return this.props.answers.map((function(t,n){return r.a.createElement("div",{className:"clickable".concat(e.state.selected===n?" selected":""),onClick:function(){return e.handleClick(t,n)},key:n},r.a.createElement("strong",null,t),r.a.createElement("hr",null))}))}}]),t}(a.Component),S=Object(s.b)(null,(function(e){return{clickAnswer:function(t){return e({type:"ANSWER",answer:t})}}}))(A),R=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={answers:[],id:0,correct_answer:""},n.shuffle=function(e){for(var t=0;t<e.length;t++){var n=Math.floor(Math.random()*e.length),a=e[t];e[t]=e[n],e[n]=a}return e},n.onNextClick=function(){if(n.props.answer===n.state.correct_answer?n.props.addScore():n.props.incorrect_number(),n.state.id>=n.props.questions.length-1)return n.props.history.push("/results"),!0;n.setState((function(e){var t=Object(_.a)({},e);t.id+=1;var a=n.props.questions[t.id],r=a.correct_answer,c=a.incorrect_answers.concat(r);return t.answers=n.shuffle(c),t.correct_answer=r,t}))},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(0===this.props.questions.length)return this.props.history.push("/"),!1;var t=this.props.questions[this.state.id],n=t.correct_answer,a=t.incorrect_answers;this.setState((function(t){var r=Object(_.a)({},t),c=a.concat(n);return r.answers=e.shuffle(c),r.correct_answer=n,r}))}},{key:"render",value:function(){var e=this.state.id+1,t=this.props.questions.length;return this.state.answers.length?r.a.createElement("div",{className:"flex  flex-column h-100"},r.a.createElement("div",{className:"container h-100 flex flex-column justify-content-center w-500px"},r.a.createElement("div",{className:"bg-white p-5 rounded"},r.a.createElement("div",{className:"flex align-items-center justify-content-between mb-2"},r.a.createElement("div",null,r.a.createElement("h5",null,"Question: ",e," out of ",t," ")),r.a.createElement("div",null,r.a.createElement("h5",null,"Score: +",this.props.score))),r.a.createElement("h4",null,this.props.questions[this.state.id].question.replace(/&quot;/gi,"")),r.a.createElement("br",null),r.a.createElement(S,{answers:this.state.answers}),r.a.createElement("br",null),r.a.createElement(j.a,{block:!0,color:"warning",onClick:this.onNextClick},"NEXT")))):null}}]),t}(a.Component),q=Object(s.b)((function(e){return{questions:e.questions,answer:e.answer,score:e.score}}),(function(e){return{addScore:function(){return e({type:"CORRECT"})},incorrect_number:function(){return e({type:"INCORRECT_NUMBER"})}}}))(Object(p.e)(R)),T=(n(42),function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){n.props.history.replace("/")},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.score,n=e.correct_number,a=e.incorrect_number;return r.a.createElement("div",{className:"flex  flex-column h-100"},r.a.createElement("div",{className:"container h-100 flex flex-column justify-content-center w-500px"},r.a.createElement("div",{className:"bg-white p-5 rounded"},r.a.createElement("h1",null,"Results"),r.a.createElement("hr",null),r.a.createElement("h3",null,"Score: +",t," "),r.a.createElement("h4",{className:"green"},"Correct Questions Number: ",n," "),r.a.createElement("h4",{className:"red"},"Incorrect Questions Number: ",a," "),r.a.createElement("br",null),r.a.createElement(j.a,{onClick:this.handleClick,color:"primary",outline:!0,block:!0},"Start Again"))))}}]),t}(a.Component)),M=Object(s.b)((function(e){return{score:e.score,correct_number:e.correct_number,incorrect_number:e.incorrect_number}}),null)(Object(p.e)(T));var B=function(){return r.a.createElement("div",{className:"App h-100"},r.a.createElement(p.a,{path:"/",exact:!0,component:N}),r.a.createElement(p.a,{path:"/questions",exact:!0,component:q}),r.a.createElement(p.a,{path:"/results",exact:!0,component:M}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(18),Q=(n(74),Object(l.b)(m));o.a.render(r.a.createElement(s.a,{store:Q},r.a.createElement(G.a,null,r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.c6eb6977.chunk.js.map