(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),i=n.n(r),c=n(4),o=n(5),u=n(7),s=n(6),d=n(8),h=n(1),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).clearSignature=function(e){n.drawRef.clear(),console.log(n.drawRef)},n.handleSubmit=function(e){e.preventDefault();var t=n.drawRef.toDataURL();n.setState({saved:t})},n.state={x:0,y:0,initialX:0,initialY:0},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.saved),l.a.createElement("div",null,l.a.createElement(h.SketchField,{ref:function(t){return e.drawRef=t},width:"100%",height:"100%",style:{border:"1px solid #333"},tool:h.Tools.Pencil,lineColor:"black",lineWidth:2}),l.a.createElement("button",{onClick:this.handleSubmit},"Save"),l.a.createElement("button",{onClick:this.clearSignature},"Clear"))}}]),t}(l.a.Component),f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{width:"100%",height:"100%"}},"Please Sign Your Name"),l.a.createElement(m,null))};n(15);function b(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))}var p=document.getElementById("root");i.a.render(l.a.createElement(b,null),p)},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c564b40a.chunk.js.map