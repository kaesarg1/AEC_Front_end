(this.webpackJsonppwafinal=this.webpackJsonppwafinal||[]).push([[0],{28:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"/pwafinal/src/images/icons/favicon.ico"},34:function(e,t,a){e.exports=a(48)},39:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(39),a(12)),s=a(13),i=a(15),u=a(14),m=a(16),d=a.n(m),h=a(18),p=a(10),b=a(51),f=a(52),E=a(30),v=a(54),y=a(53),g=a(56),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={photo:"",setErrors:{}},n.handleAdd=n.handleAdd.bind(Object(p.a)(n)),n.handlePhoto=n.handlePhoto.bind(Object(p.a)(n)),n.AddItems=n.AddItems.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"AddItems",value:function(){var e=Object(h.a)(d.a.mark((function e(t,a,n){var r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:t,lien:a,details:n})});case 3:if(!(r=e.sent).ok){e.next=10;break}return e.next=7,r.json();case 7:return o=e.sent,this.props.history.push("/"),e.abrupt("return",o);case 10:throw new Error("Request failed!");case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"handleAdd",value:function(e){e.preventDefault();var t=document.getElementById("nom").value,a=document.getElementById("lienphoto").value,n=document.getElementById("details").value;this.AddItems(t,a,n)}},{key:"handlePhoto",value:function(e){var t=document.getElementById("lienphoto").value;this.setState({lienphoto:t})}},{key:"render",value:function(){return console.log(this.props.history),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:"containermax mx-auto pl-5 ml-5"},r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"col-md-6 col-md-offset-3 pb-sm-5 mx-auto pl-5 ml-5"},r.a.createElement(v.a,{className:"form pt-5 mt-5"},r.a.createElement(v.a.Group,{controlId:"nom"},r.a.createElement(v.a.Label,null,"Nom"),r.a.createElement(v.a.Control,{type:"text",placeholder:"nom"})),r.a.createElement(v.a.Group,{controlId:"lienphoto"},r.a.createElement(v.a.Label,null,"URL d'une photo"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:this.handlePhoto})),""!==this.state.photo&&r.a.createElement(y.a,{src:this.state.photo,rounded:!0,width:"125"}),r.a.createElement(v.a.Group,{controlId:"details"},r.a.createElement(v.a.Label,null,"Details"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Details"})),r.a.createElement(g.a,{variant:"primary",type:"submit",onClick:this.handleAdd},"Enregistrer"))))))}}]),a}(r.a.Component),k=a(55),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},n}return Object(s.a)(a,[{key:"handleClick",value:function(e){this.props.history.push({pathname:"/EditItems",state:{id:e}})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,o=t.items;return a?r.a.createElement("div",null,"Erreur : ",a.message):n?r.a.createElement(b.a,{className:"containermax mx-auto"},r.a.createElement(f.a,{className:"justify-content-md-center",style:{display:"flex",flexDirection:"row"}},r.a.createElement(E.a,{className:"col-md-6 col-md-offset-3 pb-sm-5"},o.map((function(t){return r.a.createElement(k.a,{className:"cards",bg:"light",key:t.nom,style:{width:"18rem"}},r.a.createElement(k.a.Img,{className:"pics",variant:"top",src:t.lienphoto}),r.a.createElement(k.a.Body,{bg:"light"},r.a.createElement(k.a.Title,null,r.a.createElement("h3",null,t.nom)),r.a.createElement(k.a.Text,null,t.details),r.a.createElement(g.a,{className:"buttondet",onClick:function(){return e.handleClick(t._id)},variant:"primary",message:"1"},"D\xe9tails")))}))))):r.a.createElement("div",null,"Chargement\u2026")}}]),a}(r.a.Component),O=a(19),I=a(31),w=a.n(I),C=(a(28),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:"col-md-6 col-md-offset-3 col-sm-12"},r.a.createElement(O.b,{activeClassName:"selected col-sm-12",to:"/"},r.a.createElement("img",{src:w.a,alt:"Logo"})),r.a.createElement(O.b,{activeClassName:"selected debarras col-sm-12",to:"/",style:{textDecoration:"none"}},"  D\xe9barras"),r.a.createElement(O.b,{activeClassName:"selected debarras col-sm-12",to:"/AddItems"},"Ajouter")))}}]),a}(r.a.Component)),N=a(5),D=a(33),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log("opening edititems"),(n=t.call(this,e)).state={donneesRecues:{nom:"",lienphoto:"",details:""},setErrors:{}},n.handleEdit=n.handleEdit.bind(Object(p.a)(n)),n.handlePhoto=n.handlePhoto.bind(Object(p.a)(n)),n.edititem=n.edititem.bind(Object(p.a)(n)),n.removeitem=n.removeitem.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.setState({ItemID:this.props.location.state.id});case 3:return e.next=5,fetch("https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout/"+this.state.ItemID);case 5:return t=e.sent,e.next=8,t.json();case 8:if(a=e.sent,console.log(this.responseDeApi),this.setState({donneesRecues:a}),console.log(this.state.donneesRecues),t.ok){e.next=14;break}throw Error(t.statusText);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"edititem",value:function(){var e=Object(h.a)(d.a.mark((function e(t,a,n){var r,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a,n),e.prev=1,e.next=4,fetch("https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout/"+this.state.ItemID,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:t,lienphoto:a,details:n})});case 4:if(r=e.sent,console.log("response"),!r.ok){e.next=13;break}return e.next=9,r;case 9:return o=e.sent,this.props.history.push("/"),D.a.success("Modification "+t),e.abrupt("return",o);case 13:throw new Error("Request failed!");case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,this,[[1,16]])})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"removeitem",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://crudcrud.com/api/75decff3939b4ec9b5447b5bda52bb48/ajout/"+this.state.ItemID,{method:"DELETE"});case 3:if(!(t=e.sent).ok){e.next=9;break}return console.log(t),console.log("SUPPRESSION!"),this.props.history.push("/"),e.abrupt("return",t);case 9:throw new Error("Request failed!");case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleEdit",value:function(e){e.preventDefault();var t=document.getElementById("nomitem").value,a=document.getElementById("lienphotoitem").value,n=document.getElementById("details").value;this.edititem(t,a,n)}},{key:"handlePhoto",value:function(e){var t=document.getElementById("lienphotoitem").value;this.setState({photo:t})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Group,{controlId:"nomitem"},r.a.createElement(v.a.Label,null,"Nom"),r.a.createElement(v.a.Control,{type:"text",defaultValue:this.state.donneesRecues.nom})),r.a.createElement(v.a.Group,{controlId:"lienphotoitem"},r.a.createElement(v.a.Label,null,"URL d'une photo"),r.a.createElement(v.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:this.handlePhoto,defaultValue:this.state.donneesRecues.lienphoto})),""!==this.state.donneesRecues.lienphoto&&r.a.createElement(y.a,{src:this.state.donneesRecues.lienphoto,rounded:!0,width:"125"}),r.a.createElement(v.a.Group,{controlId:"details"},r.a.createElement(v.a.Label,null,"D\xe9tails"),r.a.createElement(v.a.Control,{type:"text",defaultValue:this.state.donneesRecues.details})),r.a.createElement(g.a,{variant:"primary",type:"submit",onClick:this.handleEdit},"Enregistrer")))),r.a.createElement("button",{className:"btn btn-danger mt-5",variant:"primary",onClick:this.removeitem},"Supprimer l'item")))}}]),a}(r.a.Component),L=a(25),S=a.n(L);var A=function(){return r.a.createElement("div",{className:"main-footer bg-dark col-md-6 col-sm-12 pb-sm-0"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col-sm"},"\xa9",(new Date).getFullYear()," CESAR FRANCO | All rights reserved | Terms Of Service | Privacy"))))},B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(O.a,null,r.a.createElement(f.a,null,r.a.createElement(C,null),r.a.createElement(N.c,null,r.a.createElement(S.a,{delay:L.anime.stagger(100),scale:[.1,.9]},r.a.createElement(N.a,{path:"/",exact:!0,component:x}),r.a.createElement(N.a,{path:"/AddItems",component:j}),r.a.createElement(N.a,{path:"/EditItems",component:R})))),r.a.createElement(f.a,null,r.a.createElement(A,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.4a098ba4.chunk.js.map
