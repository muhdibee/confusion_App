(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{107:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=(t(104),t(105),t(106),t(107),t(19)),c=t(20),m=t(22),i=t(21),u=t(23),d=t(157),E=t(158),h=t(159),f=t(160),p=t(161),g=t(162),b="http://localhost:3001/",N=function(){return r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-2x fa-fw text-danger"}),r.a.createElement("p",null,"Loading...."))},v=t(33),O=function(e){var a=e.item,t=e.isLoading,n=e.errMess;return t?r.a.createElement(N,null):n?r.a.createElement("h4",null,n):r.a.createElement(v.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(d.a,null,r.a.createElement(E.a,{src:b+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("strong",null,a.name)),a.designation?r.a.createElement(p.a,null,r.a.createElement("strong",null,a.designation)):null,r.a.createElement(g.a,null,a.description))))};var w=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(O,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(O,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(O,{item:e.leaders,isLoading:e.leadersLoading,errMess:e.leadersErrMess}))))},y=t(6),M=t(184),k=t(163),L=t(164),j=t(165),C=t(166),S=t(167),x=t(168),D=t(169),F=t(170),A=t(171),I=t(172),T=t(173),R=t(174),q=t(175),_=t(176),H=t(8),P=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).toggleNav=t.toggleNav.bind(Object(y.a)(t)),t.toggleModal=t.toggleModal.bind(Object(y.a)(t)),t.handleLogin=t.handleLogin.bind(Object(y.a)(t)),t.state={isNavOpen:!1,isModalOpen:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(M.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(k.a,{toggle:this.toggleModal},r.a.createElement("strong",null,"Login")),r.a.createElement(L.a,null,r.a.createElement(j.a,{onSubmit:this.handleLogin},r.a.createElement(C.a,null,r.a.createElement(S.a,{htmlFor:"username"},"Username"),r.a.createElement(x.a,{type:"text",id:"username",name:"username",innerRef:function(a){return e.username=a}})),r.a.createElement(C.a,null,r.a.createElement(S.a,{htmlFor:"password"},"password"),r.a.createElement(x.a,{type:"text",id:"password",name:"password",innerRef:function(a){return e.password=a}})),r.a.createElement(C.a,{check:!0},r.a.createElement(S.a,{check:!0},r.a.createElement(x.a,{type:"checkbox",name:"remember",innerRef:function(a){return e.remember=a}}),"Remember me")),r.a.createElement(D.a,{type:"submit",value:"submit",color:"primary"},"Login")))),r.a.createElement(F.a,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(A.a,{onClick:this.toggleNav}),r.a.createElement(I.a,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(T.a,{isOpen:this.state.isNavOpen,navbar:!0,toggle:this.toggleNav},r.a.createElement(R.a,{navbar:!0},r.a.createElement(q.a,null,r.a.createElement(H.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(q.a,null,r.a.createElement(H.c,{className:"nav-link",to:"/about",toggle:this.toggleNav},r.a.createElement("span",{className:"fa fa-info us fa-lg"})," About us")),r.a.createElement(q.a,null,r.a.createElement(H.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(q.a,null,r.a.createElement(H.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us")))),r.a.createElement(R.a,{Navbar:!0,className:"ml-auto"},r.a.createElement(q.a,null,r.a.createElement(D.a,{outline:!0,onClick:this.toggleModal,className:"nav-link"},r.a.createElement("span",{className:"fa fa-sign-in text-white"}," Login")))))),r.a.createElement(_.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))))}}]),a}(n.Component);var G=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null),r.a.createElement(H.b,{to:"/home"},"Home"),r.a.createElement("li",null,r.a.createElement(H.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"contactus"},"Contact")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2020 LekeyTech")))))},W=t(177),Y=t(178),B=t(179);function K(e){var a=e.dish;e.onClick;return r.a.createElement(d.a,null,r.a.createElement(H.b,{to:"/menu/".concat(a.id)},r.a.createElement(E.a,{width:"100%",src:b+a.image,alt:a.name}),r.a.createElement(W.a,null,r.a.createElement(f.a,null,a.name))))}var z=function(e){var a=e.dishes.dishes.map((function(e){return r.a.createElement("div",{className:"col-5 col-md-4 m-1",key:e.id},r.a.createElement(K,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Y.a,null,r.a.createElement(B.a,null,r.a.createElement(H.b,{to:"/home"},"Home")," "),r.a.createElement(B.a,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},a))},J=t(37),U=t(180),Z=t(181),$=t(7),Q=function(e){return e&&e.length},V=function(e){return function(a){return a&&a.length<=e}},X=function(e){return function(a){return a&&a.length>=e}},ee=function(e){return!isNaN(Number(e))},ae=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},te=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).handleSubmit=t.handleSubmit.bind(Object(y.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Y.a,null,r.a.createElement(B.a,null,r.a.createElement(H.b,{to:"/home"},"Home")," "),r.a.createElement(B.a,{active:!0},"Contact")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us your Feedback")),r.a.createElement("div",{className:"col-12 col-md-10"},r.a.createElement($.Form,{model:"feedback",onSubmit:function(e){return a.handleSubmit(e)}},r.a.createElement(U.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"firstname",md:2},"First Name"),r.a.createElement(Z.a,{md:8},r.a.createElement($.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:Q,minLength:X(3),maxLength:V(15)}}),r.a.createElement($.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"required. ",minLength:"Must be greaterthan two character ",maxLength:"Must be 15 characters or less "}}))),r.a.createElement(U.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"lastname",md:2},"Last Name"),r.a.createElement(Z.a,{md:8},r.a.createElement($.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:" form-control",validators:{required:Q,minLength:X(3),maxLength:V(15)}}),r.a.createElement($.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"required",minLength:"Must be greaterthan two character",maxLength:"Must be 15 characters less"}}))),r.a.createElement(U.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"telnum",md:2},"Contact Tel."),r.a.createElement(Z.a,{md:8},r.a.createElement($.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:" form-control",validators:{required:Q,minLength:X(3),maxLength:V(15),isNumber:ee}}),r.a.createElement($.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(U.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"email",md:2},"Email"),r.a.createElement(Z.a,{md:8},r.a.createElement($.Control.text,{model:".email",classname:"form-control",id:"email",name:"email",placeholder:"Email",className:" form-control",validators:{required:Q,validEmail:ae}}),r.a.createElement($.Errors,(e={className:"text-danger",model:".email",show:"touched"},Object(J.a)(e,"show","touched"),Object(J.a)(e,"messages",{required:"Required",validEmail:"Invalid Email Address"}),e)))),r.a.createElement(U.a,{className:"form-group"},r.a.createElement(Z.a,{md:{size:5,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(S.a,{check:!0},r.a.createElement($.Control.checkbox,{model:".agree",classname:"form-check-input form-control"}),"",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(Z.a,{md:{size:3,offset:1}},r.a.createElement($.Control.select,{model:".contactType",classname:"form-control",name:"contactType"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(U.a,{className:"form-group"},r.a.createElement(S.a,{htmlFor:"message",md:2},"Your Feedback"),r.a.createElement(Z.a,{md:8},r.a.createElement($.Control.textarea,{model:".message",id:"message",name:"message",className:" form-control",rows:"12"}))),r.a.createElement(U.a,{className:"form-group"},r.a.createElement(Z.a,{md:{size:8,offset:2}},r.a.createElement(D.a,{type:"submit",color:"primary"},"Send Feedback")))))))}}]),a}(n.Component),ne=t(182),re=t(183);function le(e){var a=e.leaders,t=e.isLoading,n=e.errMess,l=a.map((function(e){return t?r.a.createElement(N,null):n?r.a.createElement("h4",null,n):r.a.createElement(v.Stagger,{in:!0},r.a.createElement(d.a,{className:"mb-0 px-3"},r.a.createElement(h.a,null,r.a.createElement(ne.a,{className:"mb-4 row"},r.a.createElement(ne.a,{left:!0,middle:!0,className:"mr-2"},r.a.createElement(ne.a,{object:!0,src:b+e.image,alt:e.name,height:"150px",width:"120px"})),r.a.createElement(ne.a,{body:!0},r.a.createElement(v.Fade,{in:!0},r.a.createElement(ne.a,{heading:!0},e.name),r.a.createElement("p",null,r.a.createElement("strong",null,e.designation)),e.description))))))}));return r.a.createElement("div",null,l)}var se=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Y.a,null,r.a.createElement(B.a,null,r.a.createElement(H.b,{to:"/home"},"Home")),r.a.createElement(B.a,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(d.a,null,r.a.createElement(re.a,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(h.a,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2020"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(d.a,null,r.a.createElement(h.a,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 m-3 text-center"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-10 "},r.a.createElement(ne.a,{list:!0},r.a.createElement(le,{leaders:e.leaders,isLoading:e.leadersLoading,errMess:e.leadersErrMess})))))};function oe(e){var a=e.dish,t=e.isLoading,n=e.errMess;return t?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,null))):n?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,n))):null!=a?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(d.a,null,r.a.createElement(E.a,{width:"100%",src:b+a.image,alt:a.name}),r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("strong",null,a.name)),r.a.createElement(g.a,null,a.description)))):void 0}function ce(e){var a=e.comments,t=e.dishId,n=e.postComment;if(null!=a)return r.a.createElement("div",{className:"col-12 "},r.a.createElement("h4",{className:"text-center"},"Comments"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(v.Stagger,{in:!0},a.map((function(e){var a=(new Date).toISOString();return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,{col:6,className:""},r.a.createElement(v.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", ",e.date)),r.a.createElement("p",null,"-- ",a)))))})))),r.a.createElement(ue,{postComment:n,dishId:t}))}var me=function(e){return e&&e.length},ie=function(e){return function(a){return a&&a.length<=e}},ue=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).toggleModal=t.toggleModal.bind(Object(y.a)(t)),t.handleCommentSubmit=t.handleCommentSubmit.bind(Object(y.a)(t)),t.state={isCommentModalOpen:!1},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isCommentModalOpen:!this.state.isCommentModalOpen})}},{key:"handleCommentSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,a=this;return r.a.createElement("div",null,r.a.createElement(M.a,{isOpen:this.state.isCommentModalOpen,toggle:this.toggleModal,className:"primary"},r.a.createElement(k.a,{className:"bg-light",toggle:this.toggleModal},r.a.createElement("strong",null,"Submit Comment")),r.a.createElement(L.a,null,r.a.createElement($.LocalForm,{onSubmit:function(e){return a.handleCommentSubmit(e)}},r.a.createElement(C.a,null,r.a.createElement(S.a,{htmlFor:"rating",className:"col-4"},"Rating"),r.a.createElement(Z.a,null,r.a.createElement($.Control.select,{model:".rating",name:"rating",id:"rating",className:"col-12 col-md-12 form-control"},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5")))),r.a.createElement(C.a,null,r.a.createElement(S.a,{htmlFor:"author",className:"col-4"},"Your Name"),r.a.createElement(Z.a,null,r.a.createElement($.Control.text,{model:".author",name:"author",id:"name",placeholder:"Your Name",className:"col-12 col-md-12 form-control",validators:{required:me,minlength:(e=3,function(a){return a&&a.length>=e}),maxlength:ie(15)}}),r.a.createElement($.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minlength:"Most be 3 characters or more",maxlength:"Most be 15 characters or less"}}))),r.a.createElement(C.a,null,r.a.createElement(S.a,{htmlFor:"comment",className:"col-4"},"Comment"),r.a.createElement($.Control.textarea,{rows:"8",model:".comment",name:"comment",id:"comment",className:"col-12 col-md-12 form-control",validators:{required:me}}),r.a.createElement($.Errors,{className:"text-danger",model:".comment",show:"touched",messages:{required:"Required"}})),r.a.createElement(D.a,{type:"submit",value:"submit",color:"primary"},"Submit")))),r.a.createElement(D.a,{outline:!0,onClick:this.toggleModal},r.a.createElement("i",{className:"fa fa-pencil"}),r.a.createElement("em",null,"Submit Comment")))}}]),a}(n.Component),de=function(e){function a(e){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return null!=this.props.dish?r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(Y.a,null,r.a.createElement(B.a,null,r.a.createElement(H.b,{to:"/menu"},"Menu")," "),r.a.createElement(B.a,{active:!0}," ",this.props.dish.name," ")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,this.props.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(oe,{dish:this.props.dish}),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(ce,{comments:this.props.comments,postComment:this.props.postComment,dishId:this.props.dish.id}))))):r.a.createElement("div",null)}}]),a}(n.Component),Ee=t(10),he=t(27),fe=function(){return{type:"DISHES_LOADING"}},pe=function(e){return{type:"DISHES_FAILED",payload:e}},ge=function(e){return{type:"ADD_DISHES",payload:e}},be=function(e){return{type:"ADD_COMMENTS",payload:e}},Ne=function(e){return{type:"COMMENTS_FAILED",payload:e}},ve=function(){return{type:"PROMOS_LOADING"}},Oe=function(e){return{type:"ADD_PROMOS",payload:e}},we=function(e){return{type:"PROMOS_FAILED",payload:e}},ye=function(e){return{type:"ADD_LEADERS",payload:e}},Me=function(){return{type:"LEADERS_LOADING"}},ke=t(59),Le=t(93),je=function(e){function a(e){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(ke.a,null,r.a.createElement(Le.a,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(Ee.d,{location:this.props.location},r.a.createElement(Ee.b,{path:"/home",component:function(){return r.a.createElement(w,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leaders:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(Ee.b,{path:"/about",component:function(){return r.a.createElement(se,{leaders:e.props.leaders.leaders,leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),r.a.createElement(Ee.b,{exact:!0,path:"/menu",component:function(){return r.a.createElement(z,{dishes:e.props.dishes})}}),r.a.createElement(Ee.b,{path:"/menu/:dishId",component:function(a){var t=a.match;return r.a.createElement(de,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(Ee.b,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(te,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(Ee.a,{to:"/home"})))),r.a.createElement(G,null))}}]),a}(n.Component),Ce=Object(Ee.g)(Object(he.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(a,t,n,r){return e(function(e,a,t,n){return function(r){var l={dishId:e,rating:a,author:t,comment:n};return l.date=(new Date).toISOString(),fetch(b+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(a,t,n,r))},fetchDishes:function(){return e((function(e){return e(fe(!0)),fetch(b+"dishes").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ge(a))})).catch((function(a){return e(pe(a.message))}))}))},resetFeedbackForm:function(){return e($.actions.reset("feedback"))},fetchComments:function(){return e((function(e){return fetch(b+"comments").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(be(a))})).catch((function(a){return e(Ne(a.message))}))}))},fetchPromos:function(){return e((function(e){return e(ve()),fetch(b+"promotions").then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(Oe(a))})).catch((function(a){return e(we(a.message))}))}))},fetchLeaders:function(){return e((function(e){return e(Me()),fetch(b+"leaders").then((function(e){if(e.ok)return e;throw new Error("Error"+e.status+":"+e.statusText)}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(a){return e(ye(a))}))}))},postFeedback:function(a){return e(function(e){return function(a){return fetch(b+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var a=new Error("Error "+e.status+": "+e.statusText);throw a.response=e,a}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){var a=JSON.stringify(e);alert("Thank you for Your feedback: "+a)})).catch((function(e){console.log("post Feedback",e.message),alert("Your feedback could not be posted\nError: "+e.message)}))}}(a))}}}))(je)),Se=(t(155),t(12)),xe=t(28),De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errmess:null,dishes:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_DISHES":return Object(Se.a)({},e,{isLoading:!1,errmess:null,dishes:a.payload});case"DISHES_LOADING":return Object(Se.a)({},e,{isLoading:!0,errmess:null,dishes:[]});case"DISHES_FAILED":return Object(Se.a)({},e,{isLoading:!1,errmess:a.payload});default:return e}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errmess:null,comments:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_COMMENTS":return Object(Se.a)({},e,{errmess:null,comments:a.payload});case"COMMENTS_FAILED":return Object(Se.a)({},e,{errmess:a.payload});case"ADD_COMMENT":var t=a.payload;return Object(Se.a)({},e,{comments:e.comments.concat(t)});default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PROMOS_LOADING":return Object(Se.a)({},e,{isLoading:!0,errMess:null,promotions:[]});case"ADD_PROMOS":return Object(Se.a)({},e,{isLoading:!1,errMess:null,promotions:a.payload});case"PROMOS_FAILED":return Object(Se.a)({},e,{isLoading:!1,errMess:a.payload});default:return e}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LEADERS_LOADING":return Object(Se.a)({},e,{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(Se.a)({},e,{isLoading:!1,errMess:a.payload,leaders:[]});case"ADD_LEADERS":return Object(Se.a)({},e,{isLoading:!1,errMess:null,leaders:a.payload});default:return e}},Te=t(96),Re=t(97),qe=t.n(Re),_e={firstname:"",lastname:"",telnum:"",email:"",agree:"false",contactType:"TEl.",message:""},He=Object(xe.createStore)(Object(xe.combineReducers)(Object(Se.a)({dishes:De,comments:Fe,promotions:Ae,leaders:Ie},Object($.createForms)({feedback:_e}))),Object(xe.applyMiddleware)(Te.a,qe.a)),Pe=function(e){function a(e){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(he.Provider,{store:He},r.a.createElement(H.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Ce,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,a,t){e.exports=t(156)}},[[99,1,2]]]);
//# sourceMappingURL=main.31a6a8b7.chunk.js.map