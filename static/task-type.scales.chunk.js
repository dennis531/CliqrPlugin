webpackJsonp([0],{118:function(e,n){n.f={}.propertyIsEnumerable},119:function(e,n){n.f=Object.getOwnPropertySymbols},120:function(e,n,t){t(122),e.exports=t(7).Object.assign},121:function(e,n,t){"use strict";var a=t(57),i=t(119),l=t(118),s=t(58),r=t(59),c=Object.assign;e.exports=!c||t(37)(function(){var e={},n={},t=Symbol(),a="abcdefghijklmnopqrst";return e[t]=7,a.split("").forEach(function(e){n[e]=e}),7!=c({},e)[t]||Object.keys(c({},n)).join("")!=a})?function(e,n){for(var t=s(e),c=arguments.length,o=1,u=i.f,p=l.f;c>o;)for(var h,d=r(arguments[o++]),v=u?a(d).concat(u(d)):a(d),m=v.length,g=0;m>g;)p.call(d,h=v[g++])&&(t[h]=d[h]);return t}:c},122:function(e,n,t){var a=t(23);a(a.S+a.F,"Object",{assign:t(121)})},126:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=t(26),l=t.n(i),s=t(0),r=t.n(s),c=t(1),o=t.n(c),u=t(196),p=t(198),h=t(199),d=t(201),v=t(202),m=t(195),g=t(194),f=t(234),q=(t.n(f),function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),l()(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()),w=function(){function e(n){a(this,e),this.task=n}return q(e,[{key:"getAssignmentView",value:function(e){return new u.a({model:this.task,voting:e,type:this})}},{key:"getShowView",value:function(){return new v.a({model:this.task,type:this})}},{key:"getEditView",value:function(){return new h.a({model:this.wrapTask(this.task),type:this})}},{key:"getCreateView",value:function(e){return new p.a({model:this.createTask(),taskGroup:e,type:this})}},{key:"getPollView",value:function(e){return new d.a({model:this.createResponse(e),voting:e,type:this})}},{key:"createTask",value:function(e){var n=new m.a;return o.a.times(1,function(){return n.addStatement()}),n}},{key:"wrapTask",value:function(e){return new m.a(e.attributes)}},{key:"createResponse",value:function(e){var n=new g.a({voting_id:e.id,task_id:e.getTask().id});return n}}]),e}();o.a.extend(w.prototype,r.a.Events),n.default=w},173:function(e,n,t){e.exports={default:t(176),__esModule:!0}},174:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(2),i=(t.n(a),function(e,n){n.hash;return e=t.i(a.escapeExpression)(e),new a.SafeString(e)});n.default=i},175:function(e,n,t){"use strict";var a=t(0),i=t.n(a),l=t(1),s=t.n(l),r={create:"create",update:"update",delete:"destroy",read:"show"},c=i.a.Model.extend({sync:function(e,n,t){return s.a.extend(t,{url:"function"==typeof n.url?n.url(r[e]):void 0}),i.a.sync(e,n,t)},url:function(e){var n=null!=this.id?"/"+this.id:"";return cliqr.config.PLUGIN_URL+"responses/"+e+n}});n.a=c},176:function(e,n,t){t(43),t(180),e.exports=t(7).Array.from},177:function(e,n,t){"use strict";var a=t(14),i=t(42);e.exports=function(e,n,t){n in e?a.f(e,n,i(0,t)):e[n]=t}},180:function(e,n,t){"use strict";var a=t(19),i=t(23),l=t(58),s=t(64),r=t(63),c=t(45),o=t(177),u=t(60);i(i.S+i.F*!t(65)(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,i,p,h=l(e),d="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,g=void 0!==m,f=0,q=u(h);if(g&&(m=a(m,v>2?arguments[2]:void 0,2)),void 0==q||d==Array&&r(q))for(n=c(h.length),t=new d(n);n>f;f++)o(t,f,g?m(h[f],f):h[f]);else for(p=q.call(h),t=new d;!(i=p.next()).done;f++)o(t,f,g?s(p,m,[i.value,f],!0):i.value);return t.length=f,t}})},183:function(e,n,t){"use strict";var a=t(22),i=t.n(a),l=t(0),s=t.n(l),r=t(8),c=t(197),o=i.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u=function(e){var n=o({},e.get("task"));return n.lrange_max=n.hrange_value-1,n.hrange_min=n.lrange_value+1,o({},e.toJSON(),{task:n})},p=r.a.extend({tagName:"section",events:{"click .js-add":"onClickAdd","click .js-remove":"onClickRemove","submit form":"onSubmitForm","click .js-cancel":"onClickCancel","keypress input.choice":"onChoiceUpdate","change input.choice":"onChoiceUpdate","input input.choice":"onChoiceUpdate","change .cliqr--scales-lrange":"onLRangeUpdate","change .cliqr--scales-hrange":"onHRangeUpdate","keypress .cliqr--scales-llabel, .cliqr--scales-hlabel":"onLabelChange","change .cliqr--scales-llabel, .cliqr--scales-hlabel":"onLabelChange","input .cliqr--scales-llabel, .cliqr--scales-hlabel":"onLabelChange"},initialize:function(e){var n=this;r.a.prototype.initialize.call(this),this.type=e.type,this.taskGroup=e.taskGroup;var t=new c.a({model:this.model,key:"description"});this.setView(".cliqr--scales-description",t),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"invalid",function(){return n.render({force:!0})})},template:t(230),context:function(){return{taskGroup:this.taskGroup&&this.taskGroup.toJSON(),task:u(this.model),error:this.model.validationError||null}},onClickAdd:function(e){e.preventDefault(),this.model.addStatement()},onClickRemove:function(e){e.preventDefault();var n=parseInt(s.a.$(e.target).closest(".choice-input").find("input[name]").attr("name").match(/\d+/)[0],10);this.model.removeStatement(n)},onChoiceUpdate:function(e){var n=s.a.$(e.target),t=parseInt(n.attr("name").match(/\d+/)[0],10),a=n.val();this.model.updateStatement(t,{text:a})},onLRangeUpdate:function(e){var n=parseInt(this.$(".cliqr--scales-lrange").val(),10),t=parseInt(this.$(".cliqr--scales-hrange").val(),10);n>=t&&(n=t-1),this.model.setLRange(n)},onHRangeUpdate:function(e){var n=parseInt(this.$(".cliqr--scales-lrange").val(),10),t=parseInt(this.$(".cliqr--scales-hrange").val(),10);t.toString().length>7&&(t=parseInt(t.toString().substring(0,6),10)),n>=t&&(t=n+1),this.model.setHRange(t)},onLabelChange:function(e){var n=this.$(".cliqr--scales-llabel").val(),t=this.$(".cliqr--scales-hlabel").val();this.model.setDimensions(n,t)}});n.a=p},185:function(e,n,t){var a=t(2);e.exports=(a.default||a).template({1:function(e,n,t,a,i){var l,s=null!=n?n:{};return'        <div class="cliqr--scales-range">\n\n            auf einer Skala von\n\n            <span class="cliqr--scales-label">\n                '+(null!=(l=t.if.call(s,null!=n?n.lrange_label:n,{name:"if",hash:{},fn:e.program(2,i,0),inverse:e.program(4,i,0),data:i}))?l:"")+'\n            </span>\n\n            bis\n\n            <span class="cliqr--scales-label">\n                '+(null!=(l=t.if.call(s,null!=n?n.hrange_label:n,{name:"if",hash:{},fn:e.program(6,i,0),inverse:e.program(8,i,0),data:i}))?l:"")+"\n            </span>\n        </div>\n"},2:function(e,n,t,a,i){var l,s=null!=n?n:{},r=t.helperMissing,c="function",o=e.escapeExpression;return" "+o((l=null!=(l=t.lrange_value||(null!=n?n.lrange_value:n))?l:r,typeof l===c?l.call(s,{name:"lrange_value",hash:{},data:i}):l))+" ("+o((l=null!=(l=t.lrange_label||(null!=n?n.lrange_label:n))?l:r,typeof l===c?l.call(s,{name:"lrange_label",hash:{},data:i}):l))+") "},4:function(e,n,t,a,i){var l;return" "+e.escapeExpression((l=null!=(l=t.lrange_value||(null!=n?n.lrange_value:n))?l:t.helperMissing,"function"==typeof l?l.call(null!=n?n:{},{name:"lrange_value",hash:{},data:i}):l))+" "},6:function(e,n,t,a,i){var l,s=null!=n?n:{},r=t.helperMissing,c="function",o=e.escapeExpression;return" "+o((l=null!=(l=t.hrange_value||(null!=n?n.hrange_value:n))?l:r,typeof l===c?l.call(s,{name:"hrange_value",hash:{},data:i}):l))+" ("+o((l=null!=(l=t.hrange_label||(null!=n?n.hrange_label:n))?l:r,typeof l===c?l.call(s,{name:"hrange_label",hash:{},data:i}):l))+") "},8:function(e,n,t,a,i){var l;return" "+e.escapeExpression((l=null!=(l=t.hrange_value||(null!=n?n.hrange_value:n))?l:t.helperMissing,"function"==typeof l?l.call(null!=n?n:{},{name:"hrange_value",hash:{},data:i}):l))+" "},compiler:[7,">= 4.0.0"],main:function(e,n,t,a,i){var l,s,r=null!=n?n:{},c=t.helperMissing,o="function";return"<header>\n    <h1>"+e.escapeExpression((s=null!=(s=t.header||(null!=n?n.header:n))?s:c,typeof s===o?s.call(r,{name:"header",hash:{},data:i}):s))+'</h1>\n    <div class="cliqr--scales-description">'+(null!=(s=null!=(s=t.description_html||(null!=n?n.description_html:n))?s:c,l=typeof s===o?s.call(r,{name:"description_html",hash:{},data:i}):s)?l:"")+"</div>\n\n"+(null!=(l=t.with.call(r,null!=n?n.task:n,{name:"with",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i}))?l:"")+"</header>\n"},useData:!0})},194:function(e,n,t){"use strict";var a=t(175),i=a.a.extend({defaults:{}});n.a=i},195:function(e,n,t){"use strict";function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return r()(e)}var i=t(22),l=t.n(i),s=t(173),r=t.n(s),c=t(1),o=t.n(c),u=t(24),p=l.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},h=u.a.extend({defaults:{type:"scales",task:{statements:[],lrange_value:1,lrange_label:null,hrange_value:10,hrange_label:null}},validate:function(e,n){var t=e.description,a=e.task;if(!t||o.a.isEmpty(t))return"Der Fragetext darf nicht leer sein.";if(window.STUDIP.wysiwyg&&t.trim()===window.STUDIP.wysiwyg.htmlMarker)return"Der Fragetext darf nicht leer sein.";if(!a)return"Task fehlt.";var i=a.statements,l=void 0!==i&&i,s=a.lrange_value,r=a.hrange_value;return!l||o.a.isEmpty(l)?"Es wird mindestens eine Aussage benötigt.":s>=r?"Das Minimum muss kleiner als das Maximum sein.":null},addStatement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=this.get("task"),i=[].concat(a(t.statements),[p({text:""},e)]);this.set("task",p({},t,{statements:i}),n)},removeStatement:function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},this.get("task")),t=[].concat(a(n.statements.slice(0,e)),a(n.statements.slice(e+1)));this.set("task",p({},n,{statements:t}))},updateStatement:function(e,n){var t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},this.get("task")),i=t.statements[e],l=[].concat(a(t.statements.slice(0,e)),[p({},i,n)],a(t.statements.slice(e+1)));this.set("task",p({},t,{statements:l}),{silent:!0})},setLRange:function(e){this.set("task",p({},this.get("task"),{lrange_value:e}))},setHRange:function(e){this.set("task",p({},this.get("task"),{hrange_value:e}))},setDimensions:function(e,n){this.set("task",p({},this.get("task"),{lrange_label:e,hrange_label:n}),{silent:!0})}});n.a=h},196:function(e,n,t){"use strict";var a=t(22),i=t.n(a),l=t(1),s=t.n(l),r=t(8),c=t(203),o=i.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u=r.a.extend({tagName:"section",className:"cliqr--scales-assignment-view",initialize:function(e){var n=this,t=e.voting;r.a.prototype.initialize.call(this),this.voting=t;var a=s.a.omit(this.model.get("task"),"statements");s.a.each(this.model.get("task").statements,function(e,t){n.appendView(".cliqr--scales-statements",new c.a({model:n.voting,statement:o({},a,e),index:t}))}),this.refreshViews()},template:t(227),context:function(){return{task:this.model.toJSON(),isRunning:this.voting.isRunning()}},postRender:function(){var e=window.MathJax.Hub;this.$(".cliqr--scales-description, td.text").each(function(n,t){return e.Queue(["Typeset",e,t])});var n=this.getViews(".cliqr--scales-statements");n&&s.a.invoke(n,"postRender")}});n.a=u},197:function(e,n,t){"use strict";var a=t(0),i=t.n(a),l=t(8),s=l.a.extend({tagName:"div",className:"cliqr--component-wysiwyg",events:{"keypress textarea":"onTextUpdate","change textarea":"onTextUpdate","input textarea":"onTextUpdate"},initialize:function(e){l.a.prototype.initialize.call(this),this.key=e.key,this.listenTo(this.model,"change:"+this.key,this.onModelChange)},remove:function(){this.removeWysiwyg(),l.a.prototype.remove.call(this)},editor:null,removeWysiwyg:function(){this.editor&&(this.editor.removeAllListeners(),this.editor=null)},template:t(229),context:function(){return{key:this.key,value:this.model.get(this.key)}},afterTemplate:function(){var e=this.$("textarea").get(0);if(e&&window.STUDIP.wysiwyg){window.STUDIP.wysiwyg.replace(e);var n=window.CKEDITOR.dom.element.get(e);n&&(this.editor=n.getEditor(),this.editor.on("change",this.onEditorChange,this),this.editor.once("focus",this.onEditorFocus,this))}},onEditorChange:function(e){var n=e.editor;this.model.set(this.key,n.getData(),{silent:!0})},onEditorFocus:function(e){var n=e.editor;this.$(".cke_toolbox_collapser_min").length&&n.execCommand("toolbarCollapse")},onTextUpdate:function(e){var n=i.a.$(e.target).val();this.model.set(this.key,n,{silent:!0})},onModelChange:function(){this.render()}});n.a=s},198:function(e,n,t){"use strict";var a=t(0),i=(t.n(a),t(183)),l=i.a.extend({className:"cliqr--scales-create-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&this.trigger("newTask",this.model)},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel")}});n.a=l},199:function(e,n,t){"use strict";var a=t(183),i=a.a.extend({className:"cliqr--scales-edit-view",onSubmitForm:function(e){e.preventDefault(),this.model.isValid()&&this.trigger("editTask",this.model)},onClickCancel:function(e){e.preventDefault(),this.trigger("cancel",this.model)}});n.a=i},200:function(e,n,t){"use strict";function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return l()(e)}var i=t(173),l=t.n(i),s=t(0),r=t.n(s),c=t(1),o=t.n(c),u=function(e,n,i,l){t.e(2).then(function(s){function c(e,n,t){var a=t.append("g").attr("class","box-plot");a.append("line").attr("class","center").attr("x1",e(n.min)).attr("y1",-10).attr("x2",e(n.max)).attr("y2",-10),a.append("rect").attr("class","box").attr("x",e(n.low)).attr("y",-20).attr("width",e(n.high)-e(n.low)).attr("height",20),a.append("line").attr("class","median").attr("x1",e(n.median)).attr("y1",-20).attr("x2",e(n.median)).attr("y2",0),a.append("line").attr("class","whisker").attr("x1",e(n.min)).attr("y1",-20).attr("x2",e(n.min)).attr("y2",0),a.append("line").attr("class","whisker").attr("x1",e(n.max)).attr("y1",-20).attr("x2",e(n.max)).attr("y2",0),a.append("text").attr("class","box").text(n.median).attr("dy",".3em").attr("dx","-.3em").attr("x",e(n.median)).attr("y",-10).attr("text-anchor","end"),a.append("text").attr("class","box").text(n.low).attr("dy","1em").attr("dx","-.3em").attr("x",e(n.low)).attr("y",-10).attr("text-anchor","end"),a.append("text").attr("class","box").text(n.high).attr("dy","1em").attr("dx",".3em").attr("x",e(n.high)).attr("y",-10).attr("text-anchor","start")}var u=t(181).d3,p=u.axisBottom,h=u.histogram,d=u.quantile,v=u.scaleLinear,m=u.select,g=e.find("svg")[0],f={top:20,right:20,bottom:30,left:20},q=r.a.$(g).width()-f.left-f.right,w=r.a.$(g).height()-f.top-f.bottom,x=10,b=w-x;if(!(q<=0)){n.sort();var y={min:o.a.first(n),low:d(n,.25),median:d(n,.5),high:d(n,.75),max:o.a.last(n)},k=m(g).append("g").attr("class","histogram").attr("transform","translate("+f.left+","+f.top+")"),_=l-i+1,S=void 0,E=!1;_<=20?(E=!0,S=[i-.5,l+.5]):(S=[i,l],_=10);var T=v().domain(S).rangeRound([0,q]),C=h().domain(T.domain()).thresholds(_),M=C(n),R=v().domain([0,o.a.max(o.a.pluck(M,"length"))]).range([b,0]);y.min!==y.max&&c(T,y,k);var A=(T(M[0].x1)-T(M[0].x0))/2,D=k.selectAll(".bar").data(M).enter().append("g").attr("class","bar").attr("transform",function(e){return"translate("+(T(e.x0)-(E?A:0))+","+R(e.length)+")"});D.append("rect").attr("x",1).attr("y",x).attr("width",T(M[0].x1)-T(M[0].x0)).attr("height",function(e){return b-R(e.length)}),D.append("text").attr("dy","1em").attr("y",x).attr("x",(T(M[0].x1)-T(M[0].x0))/2).attr("text-anchor","middle").text(function(e){return e.length||""});var O=p(T);E||O.tickValues(o.a.unique([i].concat(a(T.ticks().slice(0,-1)),[l]))),k.append("g").attr("class","axis axis--x").attr("transform","translate(0,"+w+")").call(O)}}.bind(null,t)).catch(t.oe)};n.a=u},201:function(e,n,t){"use strict";var a=t(22),i=t.n(a),l=t(0),s=t.n(l),r=t(1),c=t.n(r),o=t(8),u=i.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},p=function(e,n){var t=n.getTask(),a=t.get("task"),i=a.lrange_value,l=a.hrange_value,s=a.statements;return{response:e.toJSON(),voting:c.a.omit(n.toJSON(),"task"),task:u({},t.toJSON(),{initialValue:i+Math.floor((l-i)/2)}),statements:s}},h=o.a.extend({className:"cliqr--scales-poll-view",events:{"submit form":"onSubmitForm"},initialize:function(e){o.a.prototype.initialize.call(this),this.voting=e.voting},template:t(231),context:function(){return p(this.model,this.voting)},postRender:function(){var e=window.MathJax.Hub;this.$(".description, .text").each(function(n,t){return e.Queue(["Typeset",e,t])}),window.document.contains(this.el)&&c.a.each(this.$('input[type="range"]'),function(e){var n=s.a.$(e),t=n.parent().find(".rangeslider__ruler").get(0),a=n.parent().find("output").get(0);n.rangeslider({polyfill:!1,onInit:function(){this.$range.prepend(t),a.textContent=this.value},onSlide:function(e,n){a.textContent=n}})})},onSubmitForm:function(e){e.preventDefault();var n=c.a.map(this.$("input"),function(e){return parseInt(e.value,10)});this.model.set("response",{answer:n}),this.voting.trigger("newResponse",this.model,this.voting)}});n.a=h},202:function(e,n,t){"use strict";var a=t(0),i=t.n(a),l=i.a.View.extend({tagName:"section",className:"cliqr--scales-show-view",render:function(){var e=t(232);return this.$el.html(e(this.model.toJSON())),this},postRender:function(){var e=window.MathJax.Hub;this.$(".cliqr--scales-description, td.text").each(function(n,t){return e.Queue(["Typeset",e,t])})}});n.a=l},203:function(e,n,t){"use strict";var a=t(22),i=t.n(a),l=t(1),s=t.n(l),r=t(8),c=t(200),o=i.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},u=r.a.extend({tagName:"li",initialize:function(e){var n=e.statement,t=e.index;r.a.prototype.initialize.call(this),this.statement=n,this.index=t,this.listenTo(this.model,"change",this.render)},responses:function(){var e=this;return s.a.reduce(s.a.pluck(this.model.get("responses"),"answer"),function(n,t){return s.a.isArray(t)&&!s.a.isUndefined(t[e.index])?n.concat(t[e.index]):n},[])},template:t(228),context:function(){return o({},this.statement,{responses:this.responses(),isRunning:this.model.isRunning()})},afterTemplate:function(){!this.model.isRunning()},magic:function(){window.document.contains(this.el)&&t.i(c.a)(this.$el,this.responses(),this.statement.lrange_value,this.statement.hrange_value)},postRender:function(){this.model.isRunning()||this.magic()}});n.a=u},22:function(e,n,t){e.exports={default:t(120),__esModule:!0}},221:function(e,n,t){n=e.exports=t(123)(),n.push([e.i,"#cliqr-container .cliqr--votings-compare .cliqr--scales-assignment-view h1,#cliqr-poll-container .cliqr--votings-compare .cliqr--scales-assignment-view h1{display:none}#cliqr-container .cliqr--scales-assignment-view .cliqr--scales-description,#cliqr-poll-container .cliqr--scales-assignment-view .cliqr--scales-description{font-weight:400;font-size:2.75em}#cliqr-container .cliqr--scales-assignment-view .cliqr--scales-statements,#cliqr-poll-container .cliqr--scales-assignment-view .cliqr--scales-statements{margin-top:1em}#cliqr-container .cliqr--scales-assignment-view .cliqr--scales-statements li,#cliqr-poll-container .cliqr--scales-assignment-view .cliqr--scales-statements li{font-size:2em;line-height:2;padding-bottom:1em}#cliqr-container .cliqr--scales-assignment-view svg .bar,#cliqr-poll-container .cliqr--scales-assignment-view svg .bar{fill:#ffbd33}#cliqr-container .cliqr--scales-assignment-view svg .bar text,#cliqr-poll-container .cliqr--scales-assignment-view svg .bar text{fill:#000}#cliqr-container .cliqr--scales-assignment-view svg line.center,#cliqr-poll-container .cliqr--scales-assignment-view svg line.center{stroke:#000;stroke-width:2px;stroke-dasharray:3,3}#cliqr-container .cliqr--scales-assignment-view svg line.median,#cliqr-poll-container .cliqr--scales-assignment-view svg line.median{stroke:#000;stroke-width:2px}#cliqr-container .cliqr--scales-assignment-view svg line.whisker,#cliqr-poll-container .cliqr--scales-assignment-view svg line.whisker{stroke:#000;stroke-width:1px}#cliqr-container .cliqr--scales-assignment-view svg rect.box,#cliqr-poll-container .cliqr--scales-assignment-view svg rect.box{fill:#fff;stroke:#000;stroke-width:1px}#cliqr-container .cliqr--scales-assignment-view svg text.box,#cliqr-poll-container .cliqr--scales-assignment-view svg text.box{font-size:10px}#cliqr-container .cliqr--scales-show-view .cliqr--scales-description,#cliqr-poll-container .cliqr--scales-show-view .cliqr--scales-description{font-weight:400;font-size:2.75em}#cliqr-container .cliqr--scales-show-view .cliqr--scales-statements,#cliqr-poll-container .cliqr--scales-show-view .cliqr--scales-statements{margin-top:1em}#cliqr-container .cliqr--scales-show-view .cliqr--scales-statements li,#cliqr-poll-container .cliqr--scales-show-view .cliqr--scales-statements li{font-size:2em;line-height:2}#cliqr-container .cliqr--scales-create-view .cliqr--scales-description .cke_contents,#cliqr-container .cliqr--scales-edit-view .cliqr--scales-description .cke_contents,#cliqr-poll-container .cliqr--scales-create-view .cliqr--scales-description .cke_contents,#cliqr-poll-container .cliqr--scales-edit-view .cliqr--scales-description .cke_contents{font-size:2.75em}#cliqr-container .cliqr--scales-create-view .choices input,#cliqr-container .cliqr--scales-edit-view .choices input,#cliqr-poll-container .cliqr--scales-create-view .choices input,#cliqr-poll-container .cliqr--scales-edit-view .choices input{width:500px;margin-bottom:5px;padding:4px 6px;border:1px solid #ccc;box-shadow:inset 0 1px 2px rgba(0,0,0,.024)}#cliqr-container .cliqr--scales-create-view .choices .choice-input+.choice-input,#cliqr-container .cliqr--scales-edit-view .choices .choice-input+.choice-input,#cliqr-poll-container .cliqr--scales-create-view .choices .choice-input+.choice-input,#cliqr-poll-container .cliqr--scales-edit-view .choices .choice-input+.choice-input{margin-top:.5em}#cliqr-container .cliqr--scales-create-view .choices .choice-input input,#cliqr-container .cliqr--scales-edit-view .choices .choice-input input,#cliqr-poll-container .cliqr--scales-create-view .choices .choice-input input,#cliqr-poll-container .cliqr--scales-edit-view .choices .choice-input input{display:inline-block}#cliqr-container .cliqr--scales-create-view .choices .cliqr--scales-choice-actions,#cliqr-container .cliqr--scales-edit-view .choices .cliqr--scales-choice-actions,#cliqr-poll-container .cliqr--scales-create-view .choices .cliqr--scales-choice-actions,#cliqr-poll-container .cliqr--scales-edit-view .choices .cliqr--scales-choice-actions{margin-left:8px}#cliqr-container .cliqr--scales-create-view .choices .choices-required,#cliqr-container .cliqr--scales-edit-view .choices .choices-required,#cliqr-poll-container .cliqr--scales-create-view .choices .choices-required,#cliqr-poll-container .cliqr--scales-edit-view .choices .choices-required{position:relative}#cliqr-container .cliqr--scales-create-view .choices .choices-required select,#cliqr-container .cliqr--scales-edit-view .choices .choices-required select,#cliqr-poll-container .cliqr--scales-create-view .choices .choices-required select,#cliqr-poll-container .cliqr--scales-edit-view .choices .choices-required select{position:absolute;left:0;top:-25px;z-index:-1;border:none}#cliqr-container .cliqr--scales-create-view .cliqr--scales-range>div span,#cliqr-container .cliqr--scales-edit-view .cliqr--scales-range>div span,#cliqr-poll-container .cliqr--scales-create-view .cliqr--scales-range>div span,#cliqr-poll-container .cliqr--scales-edit-view .cliqr--scales-range>div span{display:inline-block;min-width:8em;line-height:3em}#cliqr-container .cliqr--scales-create-view .cliqr--scales-range>div input,#cliqr-container .cliqr--scales-edit-view .cliqr--scales-range>div input,#cliqr-poll-container .cliqr--scales-create-view .cliqr--scales-range>div input,#cliqr-poll-container .cliqr--scales-edit-view .cliqr--scales-range>div input{display:inline;vertical-align:baseline;width:auto}#cliqr-container .cliqr--scales-create-view .cliqr--scales-range>div input::-webkit-input-placeholder,#cliqr-container .cliqr--scales-edit-view .cliqr--scales-range>div input::-webkit-input-placeholder,#cliqr-poll-container .cliqr--scales-create-view .cliqr--scales-range>div input::-webkit-input-placeholder,#cliqr-poll-container .cliqr--scales-edit-view .cliqr--scales-range>div input::-webkit-input-placeholder{color:#888}#cliqr-container .cliqr--scales-create-view .cliqr--scales-range>div input::-moz-placeholder,#cliqr-container .cliqr--scales-edit-view .cliqr--scales-range>div input::-moz-placeholder,#cliqr-poll-container .cliqr--scales-create-view .cliqr--scales-range>div input::-moz-placeholder,#cliqr-poll-container .cliqr--scales-edit-view .cliqr--scales-range>div input::-moz-placeholder{color:#888}#cliqr-container .cliqr--scales-create-view .cliqr--scales-range>div input:-ms-input-placeholder,#cliqr-container .cliqr--scales-edit-view .cliqr--scales-range>div input:-ms-input-placeholder,#cliqr-poll-container .cliqr--scales-create-view .cliqr--scales-range>div input:-ms-input-placeholder,#cliqr-poll-container .cliqr--scales-edit-view .cliqr--scales-range>div input:-ms-input-placeholder{color:#888}#cliqr-container .cliqr--scales-create-view .cliqr--scales-range>div input::placeholder,#cliqr-container .cliqr--scales-edit-view .cliqr--scales-range>div input::placeholder,#cliqr-poll-container .cliqr--scales-create-view .cliqr--scales-range>div input::placeholder,#cliqr-poll-container .cliqr--scales-edit-view .cliqr--scales-range>div input::placeholder{color:#888}#cliqr-container .cliqr--scales-poll-view .description,#cliqr-poll-container .cliqr--scales-poll-view .description{font-size:2em}#cliqr-container .cliqr--scales-poll-view li,#cliqr-poll-container .cliqr--scales-poll-view li{padding:0}#cliqr-container .cliqr--scales-poll-view label,#cliqr-poll-container .cliqr--scales-poll-view label{display:block;padding:.75rem 1.25rem;margin:0}#cliqr-container .cliqr--scales-poll-view .rangeslider__ruler,#cliqr-poll-container .cliqr--scales-poll-view .rangeslider__ruler{cursor:pointer;font-size:.7em;margin:30px 3px 0;position:relative;top:-20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}#cliqr-container .cliqr--scales-poll-view output,#cliqr-poll-container .cliqr--scales-poll-view output{width:100%;text-align:center}",""])},227:function(e,n,t){var a=t(2);e.exports=(a.default||a).template({1:function(e,n,t,a,i){return' class="cliqr--voting-is-running"'},compiler:[7,">= 4.0.0"],main:function(e,n,a,i,l){var s;return(null!=(s=e.invokePartial(t(185),null!=n?n.task:n,{name:"./_scales_header",hash:{header:"Abstimmung:"},data:l,helpers:a,partials:i,decorators:e.decorators}))?s:"")+"\n<main"+(null!=(s=a.if.call(null!=n?n:{},null!=n?n.isRunning:n,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?s:"")+'>\n    <ol class="cliqr--scales-statements"></ol>\n</main>\n'},usePartial:!0,useData:!0})},228:function(e,n,t){var a=t(2);e.exports=(a.default||a).template({1:function(e,n,t,a,i){return' <svg width="100%" height="150" shape-rendering="crispEdges"></svg> '},compiler:[7,">= 4.0.0"],main:function(e,n,t,a,i){var l,s,r=null!=n?n:{};return(null!=(l=t.unless.call(r,null!=n?n.isRunning:n,{name:"unless",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i}))?l:"")+'\n<div class="text">'+e.escapeExpression((s=null!=(s=t.text||(null!=n?n.text:n))?s:t.helperMissing,"function"==typeof s?s.call(r,{name:"text",hash:{},data:i}):s))+"</div>\n"},useData:!0})},229:function(e,n,t){var a=t(2);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,n,t,a,i){var l,s=null!=n?n:{},r=t.helperMissing,c="function",o=e.escapeExpression;return'<textarea name="'+o((l=null!=(l=t.key||(null!=n?n.key:n))?l:r,typeof l===c?l.call(s,{name:"key",hash:{},data:i}):l))+'" class="x-wysiwyg" required="required">'+o((l=null!=(l=t.value||(null!=n?n.value:n))?l:r,typeof l===c?l.call(s,{name:"value",hash:{},data:i}):l))+"</textarea>\n"},useData:!0})},230:function(e,n,t){function a(e){return e&&(e.__esModule?e.default:e)}var i=t(2);e.exports=(i.default||i).template({1:function(e,n,t,a,i){return'        <div class="messagebox messagebox_error">\n            Fehler: '+e.escapeExpression(e.lambda(null!=n?n.error:n,n))+"\n        </div>\n"},3:function(e,n,i,l,s){var r=e.lambda,c=e.escapeExpression;return'                    <div class="choice-input">\n                        <input\n                            class="choice" maxlength="100" type="text"\n                            name="statements['+c(r(s&&s.index,n))+']"\n                            value="'+c(r(null!=n?n.text:n,n))+'" required>\n\n                        <span class="cliqr--scales-choice-actions">\n                            '+c(a(t(15)).call(null!=n?n:{},"remove","Entfernen","trash",{name:"fab",hash:{},data:s}))+"\n                        </span>\n                    </div>\n"},5:function(e,n,i,l,s){return'                    <div class="choices-required">\n                        <select required oninvalid="setCustomValidity(\''+e.escapeExpression(a(t(174)).call(null!=n?n:{},"Mindestens eine Aussage wird benötigt.",{name:"i18n",hash:{},data:s}))+"')\"></select>\n                    </div>\n"},7:function(e,n,t,a,i){var l=e.lambda,s=e.escapeExpression;return'            <div class="cliqr--scales-range">\n\n                <div>\n                    <label class="undecorated">\n                        <span> Minimum </span>\n                        <input class="cliqr--scales-lrange" maxlength="4" type="number" value="'+s(l(null!=n?n.lrange_value:n,n))+'" max="'+s(l(null!=n?n.lrange_max:n,n))+'">\n                    </label>\n                    <input class="cliqr--scales-llabel" maxlength="50" placeholder="Beschriftung (optional)" type="text" value="'+s(l(null!=n?n.lrange_label:n,n))+'">\n                </div>\n\n                <div>\n                    <label class="undecorated">\n                        <span> Maximum </span>\n                        <input class="cliqr--scales-hrange" maxlength="4" type="number" value="'+s(l(null!=n?n.hrange_value:n,n))+'" min="'+s(l(null!=n?n.hrange_min:n,n))+'">\n                    </label>\n                    <input class="cliqr--scales-hlabel" maxlength="50" placeholder="Beschriftung (optional)" type="text" value="'+s(l(null!=n?n.hrange_label:n,n))+'">\n                </div>\n\n            </div>\n'},compiler:[7,">= 4.0.0"],main:function(e,n,i,l,s){var r,c=null!=n?n:{},o=e.escapeExpression;return'<form class="default" method="post" accept-char="UTF-8">\n\n    <fieldset>\n        <legend>Skalen</legend>\n        <p>\n            Teilnehmer können Aussagen auf einer Skala bewerten.\n        </p>\n        <p>\n            Geeignet für:\n        </p>\n        <ul>\n            <li>\n                Fragen mit numerischen Antworten\n            </li>\n            <li>\n                wenn Teilnehmer etwas bewerten sollen\n            </li>\n            <li>\n                Generieren von Statistiken\n            </li>\n        </ul>\n    </fieldset>\n\n'+(null!=(r=i.if.call(c,null!=n?n.error:n,{name:"if",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s}))?r:"")+'\n    <fieldset>\n        <legend> Was möchten Sie fragen? </legend>\n        <label>\n            <div class="cliqr--scales-description"></div>\n        </label>\n    </fieldset>\n\n    <fieldset>\n        <legend>Aussagen</legend>\n        <label>\n            Tragen Sie die Aussage/n ein\n\n            <div class="choices">\n'+(null!=(r=i.each.call(c,null!=(r=null!=(r=null!=n?n.task:n)?r.task:r)?r.statements:r,{name:"each",hash:{},fn:e.program(3,s,0),inverse:e.noop,data:s}))?r:"")+"\n                "+o(a(t(5)).call(c,"add","Aussage hinzufügen",{
name:"button",hash:{class:"choice-add",icon:"add"},data:s}))+"\n\n"+(null!=(r=i.unless.call(c,null!=(r=null!=(r=null!=n?n.task:n)?r.task:r)?r.statements:r,{name:"unless",hash:{},fn:e.program(5,s,0),inverse:e.noop,data:s}))?r:"")+"            </div>\n\n        </label>\n    </fieldset>\n\n    <fieldset>\n        <legend>Skalenenden</legend>\n        <label>\n"+(null!=(r=i.with.call(c,null!=(r=null!=n?n.task:n)?r.task:r,{name:"with",hash:{},fn:e.program(7,s,0),inverse:e.noop,data:s}))?r:"")+"        </label>\n    </fieldset>\n\n    <footer>\n        "+o(a(t(5)).call(c,"save","Speichern",{name:"button",hash:{type:"submit",icon:"accept"},data:s}))+"\n        "+o(a(t(5)).call(c,"cancel","Abbrechen",{name:"button",hash:{icon:"decline"},data:s}))+"\n    </footer>\n</form>\n"},useData:!0})},231:function(e,n,t){var a=t(2);e.exports=(a.default||a).template({1:function(e,n,t,a,i){var l;return'                <p class="lead"> '+e.escapeExpression(e.lambda(null!=(l=null!=n?n.task:n)?l.title:l,n))+" </p>\n"},3:function(e,n,t,a,i,l,s){var r,c,o=e.lambda,u=e.escapeExpression,p=null!=n?n:{};return'                        <li class="list-group-item">\n                            <label>\n                                <input type="range"\n                                       min="'+u(o(null!=(r=null!=(r=null!=s[1]?s[1].task:s[1])?r.task:r)?r.lrange_value:r,n))+'"\n                                       max="'+u(o(null!=(r=null!=(r=null!=s[1]?s[1].task:s[1])?r.task:r)?r.hrange_value:r,n))+'"\n                                       value="'+u(o(null!=(r=null!=s[1]?s[1].task:s[1])?r.initialValue:r,n))+'">\n\n'+(null!=(r=t.with.call(p,null!=(r=null!=s[1]?s[1].task:s[1])?r.task:r,{name:"with",hash:{},fn:e.program(4,i,0,l,s),inverse:e.noop,data:i}))?r:"")+'\n                                <output></output>\n                                <div class="text">'+u((c=null!=(c=t.text||(null!=n?n.text:n))?c:t.helperMissing,"function"==typeof c?c.call(p,{name:"text",hash:{},data:i}):c))+"</div>\n                            </label>\n                        </li>\n"},4:function(e,n,t,a,i){var l,s=null!=n?n:{};return'                                    <div class="rangeslider__ruler">\n                                        <span>\n'+(null!=(l=t.if.call(s,null!=n?n.lrange_label:n,{name:"if",hash:{},fn:e.program(5,i,0),inverse:e.program(7,i,0),data:i}))?l:"")+"                                        </span>\n\n                                        <span>\n"+(null!=(l=t.if.call(s,null!=n?n.hrange_label:n,{name:"if",hash:{},fn:e.program(9,i,0),inverse:e.program(11,i,0),data:i}))?l:"")+"                                        </span>\n                                    </div>\n"},5:function(e,n,t,a,i){var l,s=null!=n?n:{},r=t.helperMissing,c="function",o=e.escapeExpression;return"                                                ("+o((l=null!=(l=t.lrange_value||(null!=n?n.lrange_value:n))?l:r,typeof l===c?l.call(s,{name:"lrange_value",hash:{},data:i}):l))+") "+o((l=null!=(l=t.lrange_label||(null!=n?n.lrange_label:n))?l:r,typeof l===c?l.call(s,{name:"lrange_label",hash:{},data:i}):l))+"\n"},7:function(e,n,t,a,i){var l;return"                                                "+e.escapeExpression((l=null!=(l=t.lrange_value||(null!=n?n.lrange_value:n))?l:t.helperMissing,"function"==typeof l?l.call(null!=n?n:{},{name:"lrange_value",hash:{},data:i}):l))+"\n"},9:function(e,n,t,a,i){var l,s=null!=n?n:{},r=t.helperMissing,c="function",o=e.escapeExpression;return"                                                "+o((l=null!=(l=t.hrange_label||(null!=n?n.hrange_label:n))?l:r,typeof l===c?l.call(s,{name:"hrange_label",hash:{},data:i}):l))+" ("+o((l=null!=(l=t.hrange_value||(null!=n?n.hrange_value:n))?l:r,typeof l===c?l.call(s,{name:"hrange_value",hash:{},data:i}):l))+")\n"},11:function(e,n,t,a,i){var l;return"                                                "+e.escapeExpression((l=null!=(l=t.hrange_value||(null!=n?n.hrange_value:n))?l:t.helperMissing,"function"==typeof l?l.call(null!=n?n:{},{name:"hrange_value",hash:{},data:i}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(e,n,t,a,i,l,s){var r,c=null!=n?n:{};return'<section class="cliqr--scales-poll">\n    <div class="jumbotron">\n        <div class="container">\n'+(null!=(r=t.if.call(c,null!=(r=null!=n?n.task:n)?r.title:r,{name:"if",hash:{},fn:e.program(1,i,0,l,s),inverse:e.noop,data:i}))?r:"")+'\n            <div class="description">'+(null!=(r=e.lambda(null!=(r=null!=n?n.task:n)?r.description_html:r,n))?r:"")+'</div>\n        </div>\n    </div>\n\n    <div class="container">\n        <form action="" method="post">\n\n            <div class="form-group">\n                <ul class="list-group">\n'+(null!=(r=t.each.call(c,null!=n?n.statements:n,{name:"each",hash:{},fn:e.program(3,i,0,l,s),inverse:e.noop,data:i}))?r:"")+'                </ul>\n            </div>\n\n\n            <div class="form-group">\n                <button class="btn btn-primary btn-block" type="submit">Antwort abschicken</button>\n            </div>\n        </form>\n\n    </div>\n</section>\n'},useData:!0,useDepths:!0})},232:function(e,n,t){var a=t(2);e.exports=(a.default||a).template({1:function(e,n,t,a,i){return'            <li class="text"> '+e.escapeExpression(e.lambda(null!=n?n.text:n,n))+" </li>\n"},compiler:[7,">= 4.0.0"],main:function(e,n,a,i,l){var s;return(null!=(s=e.invokePartial(t(185),n,{name:"./_scales_header",hash:{header:"Frage:"},data:l,helpers:a,partials:i,decorators:e.decorators}))?s:"")+'\n<main>\n    <ol class="cliqr--scales-statements">\n'+(null!=(s=a.each.call(null!=n?n:{},null!=(s=null!=n?n.task:n)?s.statements:s,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?s:"")+"    </ol>\n</main>\n"},usePartial:!0,useData:!0})},234:function(e,n,t){var a=t(221);"string"==typeof a&&(a=[[e.i,a,""]]);t(124)(a,{});a.locals&&(e.exports=a.locals)}});
//# sourceMappingURL=task-type.scales.chunk.js.map