(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Stage.1042b791.png"},function(e,t,a){e.exports=a.p+"static/media/Alex_Name.4ebe406d.png"},function(e,t,a){e.exports=a.p+"static/media/Alex_Avatar.254e6b1b.png"},function(e,t,a){e.exports=a.p+"static/media/man.061441c5.png"},function(e,t,a){e.exports=a.p+"static/media/woman.b68cb98a.png"},function(e,t,a){e.exports=a.p+"static/media/robot.92ff2427.png"},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(1),c=a(2),s=a(4),i=a(3),l=a(5),o=a(0),u=a.n(o),m=a(8),h=a.n(m),d=a(9),p=a.n(d),v=a(10),f=a.n(v),b=a(11),E=a.n(b),C=a(12),k=a.n(C),g=a(13),N=a.n(g),O=a(14),y=a.n(O),j=(a(21),[{id:0,text:"Welcome to JEOPARDY!",button:"Click to Start"},{id:1,text:"Please enter your first name",button:"Choose Name"},{id:2,text:"Please choose a character",button:"Choose Character",class:""}]);function S(e){return u.a.createElement("div",null,u.a.createElement("img",{className:"window",src:e.src,alt:""}))}function x(e){return e.step?u.a.createElement("div",null,u.a.createElement("h2",{className:"text"},e.step),u.a.createElement("h5",null,e.name)):u.a.createElement("div",null)}function w(e){return u.a.createElement("div",null,u.a.createElement("button",{onClick:e.onClick},e.step))}function A(e){return 1===e.step?u.a.createElement("div",null,u.a.createElement("input",{onChange:e.onChange,onKeyPress:e.onEnter,type:"text",className:"input"})):u.a.createElement("div",null," ")}function z(e){return u.a.createElement("div",null,u.a.createElement("input",{type:"image",className:e.avatarClassName,src:e.src,onClick:e.onClick,alt:"",value:e.value,key:e.keyValue}))}var R=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"renderAvatar",value:function(e){var t=this;return u.a.createElement(z,{src:this.props.src[e].picture,value:this.props.src[e].value,onClick:function(){return t.props.onClick(e)},key:e,avatarClassName:this.props.src[e].className})}},{key:"render",value:function(){var e=this,t=this.props.src.map(function(t,a){return e.renderAvatar(a)});return 2===this.props.step?u.a.createElement("div",{className:"avatarsContainer"},t):u.a.createElement("div",null)}}]),t}(u.a.Component),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={counter:0,data:[{}],photos:[p.a,f.a,E.a],avatar:[{picture:k.a,value:"Man",className:"avatar"},{picture:N.a,value:"Woman",className:"avatar"},{picture:y.a,value:"Robot",className:"avatar"}],name:"",score:0,avatarSelected:"",finalizeCharacter:!1},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleButtonClick",value:function(){0===this.state.counter&&this.setState({counter:this.state.counter+1}),1===this.state.counter&&this.setState({counter:this.state.counter+1}),2===this.state.counter&&this.state.avatarSelected&&this.setState({finalizeCharacter:!this.state.finalizeCharacter})}},{key:"handleReload",value:function(){window.location.reload()}},{key:"handleAvatarClick",value:function(e){var t=Object(n.a)(this.state.avatar);if(!this.state.avatarSelected){t[e].className="avatar selected",this.setState({avatarSelected:this.state.avatar[e].value,avatar:t});var a=Object(n.a)(this.state.data);console.log(a[2]),a[2].button="Finalize Character",this.setState({data:a}),console.log(this.state.finalizeCharacter)}}},{key:"handleEnter",value:function(e){"Enter"===e.key&&(console.log("Enter"),this.setState({name:e.target.value,counter:this.state.counter+1}))}},{key:"handleInputChange",value:function(e){this.setState({name:e.target.value})}},{key:"componentWillMount",value:function(){console.log(j),this.setState({data:j})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.counter,r=t.photos,c=t.avatar;if(!this.state.data)return u.a.createElement("div",null,"Loading...");if(this.state.finalizeCharacter){var s=this.state.avatar.filter(function(t){return t.value==="".concat(e.state.avatarSelected)});return console.log(s),u.a.createElement("div",{className:"game finalized"},u.a.createElement("h1",null,"You Selected..."),u.a.createElement("p",null,"Name: ",this.state.name),u.a.createElement("img",{className:"finalizedImage",src:s[0].picture,alt:""}),u.a.createElement("button",{className:"button",onClick:this.handleReload.bind(this)},"Reload"))}return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"startMenu_Top"},u.a.createElement("h1",{className:"game-title"},"8-bit JEOPARDY"),u.a.createElement(S,{className:"window",src:r[n]}),u.a.createElement(x,{step:a[n].text})),u.a.createElement("div",{className:"startMenu_Bottom"},u.a.createElement(A,{step:n,onEnter:this.handleEnter.bind(this),onChange:this.handleInputChange.bind(this)}),u.a.createElement(R,{step:n,src:c,onClick:function(t){return e.handleAvatarClick(t)}}),u.a.createElement(w,{step:a[n].button,onClick:this.handleButtonClick.bind(this)})))}}]),t}(u.a.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"main_startMenu"},u.a.createElement(M,null))}}]),t}(u.a.Component),_=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(P,{className:"board"}))}}]),t}(u.a.Component);h.a.render(u.a.createElement(_,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.df979ee2.chunk.js.map