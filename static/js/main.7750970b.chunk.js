(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{107:function(e,t,a){e.exports={logo:"Logo_logo__2--_R"}},108:function(e,t,a){e.exports={title:"Title_title__2qDMs"}},11:function(e,t,a){e.exports={link:"Header_link__MF_ty",active:"Header_active__2wia3",header:"Header_header__2RhEF"}},112:function(e,t,a){e.exports={wrapperLoading:"Loading_wrapperLoading__2nV3u"}},113:function(e,t,a){e.exports={test:"test_test__oUI8K",wrapper:"test_wrapper__2s3oZ"}},114:function(e,t,a){e.exports={column:"TestSuperInput_column__3XyrP"}},115:function(e,t,a){e.exports={column:"TestSuperButton_column__2tQ-x"}},116:function(e,t,a){e.exports={column:"TestSuperCheckbox_column__3-eY1"}},117:function(e,t,a){e.exports={span:"SuperEditableSpan_span__1f8Nv"}},118:function(e,t,a){e.exports={column:"TestSuperSelect_column__2kAnk"}},119:function(e,t,a){e.exports={column:"TestSuperRadio_column__glKUJ"}},120:function(e,t,a){},121:function(e,t,a){e.exports={column:"TestSuperRange_column__3-fkA"}},127:function(e,t,a){},150:function(e,t,a){},20:function(e,t,a){e.exports={containerForm:"EnterEmail_containerForm__2psxF",formWrapper:"EnterEmail_formWrapper__2lRKZ",formTitle:"EnterEmail_formTitle__EnQON",formSubTitle:"EnterEmail_formSubTitle__3iRE7",formEmail:"EnterEmail_formEmail__ivYTI",formInput:"EnterEmail_formInput__3Qhaz",textEmail:"EnterEmail_textEmail__34sKG",buttonInner:"EnterEmail_buttonInner__1u9ZC",blockSingUp:"EnterEmail_blockSingUp__tYIhA",formText:"EnterEmail_formText__1hxQM",linkSingUp:"EnterEmail_linkSingUp__2snna"}},24:function(e,t,a){e.exports={group:"Input_group__2sviZ",input:"Input_input__3cueq",bar:"Input_bar__3XouU",highlight:"Input_highlight__qkzD1",inputHighlighter:"Input_inputHighlighter__2xHTa",passwordControl:"Input_passwordControl__1KhUm",showPassword:"Input_showPassword__3kd7y",hidePassword:"Input_hidePassword__3Ji5J",label:"Input_label__2xK8P"}},25:function(e,t,a){e.exports={containerForm:"NewPassword_containerForm__YpxW_",formWrapper:"NewPassword_formWrapper__kgKb4",formTitle:"NewPassword_formTitle__2bLzW",formSubTitle:"NewPassword_formSubTitle__1VeDk",formLogin:"NewPassword_formLogin__3GZPk",buttonInner:"NewPassword_buttonInner__3V-0K",textNewPassword:"NewPassword_textNewPassword__3gZSW"}},250:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(51),c=a.n(s),i=(a(127),a(73),a(6)),o=a(0),l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Profile"})})},u=a(9),j=a.n(u);var d,b,m=function(){var e="".concat(j.a.eye," ").concat(j.a.eyeR),t="".concat(j.a.blod," ").concat(j.a.blod2);return Object(o.jsx)("div",{className:j.a.container,children:Object(o.jsxs)("div",{className:j.a.error,children:[Object(o.jsx)("p",{className:j.a.p,children:"4"}),Object(o.jsx)("span",{className:j.a.dracula,children:Object(o.jsxs)("div",{className:j.a.con,children:[Object(o.jsx)("div",{className:j.a.hair}),Object(o.jsx)("div",{className:j.a.hairR}),Object(o.jsx)("div",{className:j.a.head}),Object(o.jsx)("div",{className:j.a.eye}),Object(o.jsx)("div",{className:e}),Object(o.jsx)("div",{className:j.a.mouth}),Object(o.jsx)("div",{className:j.a.blod}),Object(o.jsx)("div",{className:t})]})}),Object(o.jsx)("p",{className:j.a.p,children:"4"}),Object(o.jsx)("div",{className:j.a.pageMs,children:Object(o.jsx)("p",{className:j.a.pageMsg,children:" Oops, the page you're looking for Disappeared "})})]})})},p=a(7),O=a(2),h=a(104),_=a.n(h).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),x=function(){return _.post("auth/me")},g=function(e){return _.post("auth/login",e)},f=function(e){return _.post("auth/register",e)},v=function(e){return _.post("auth/forgot",e)},N=function(e){return _.post("auth/set-new-password",e)},C=a(43),E=a.n(C),S=(a(150),a(18)),w=a(4),y=a(5),P=a(24),I=a.n(P),T=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","title"],R=function(e){var t=e.type,a=e.onChange,n=(e.onChangeText,e.onKeyPress,e.onEnter,e.error),s=(e.className,e.spanClassName,e.title),c=Object(y.a)(e,T),i=r.a.useState(!1),l=Object(w.a)(i,2),u=l[0],j=l[1];return Object(o.jsxs)("div",{className:I.a.group,children:[Object(o.jsx)("input",Object(O.a)({required:!0,type:u?"text":t,onChange:function(e){a&&a(e)},className:I.a.input},c)),Object(o.jsx)("a",{className:"".concat(I.a.passwordControl," ").concat(u?I.a.showPassword:I.a.hidePassword),style:"password"===t?{display:"inline"}:{display:"none"},onClick:function(){return j((function(e){return!e}))},children:Object(o.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("line",{x1:"40",y1:"30",x2:"240",y2:"100"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.23997 17 6.99997 14.76 6.99997 12C6.99997 9.24 9.23997 6.99999 12 6.99999C14.76 6.99999 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 8.99997 10.34 8.99997 12C8.99997 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z",fill:"#2D2E46"})]})}),Object(o.jsx)("span",{className:I.a.highlight}),Object(o.jsx)("span",{className:I.a.bar}),Object(o.jsx)("label",{className:I.a.label,children:s}),Object(o.jsx)("div",{style:{color:"red",position:"absolute",top:"50px"},children:n})]})},k=a(107),A=a.n(k),L=function(){return Object(o.jsx)("h1",{className:A.a.logo,children:"it-incubator"})},F=a(108),M=a.n(F),D=function(e){return Object(o.jsx)("h2",{className:M.a.title,children:e.title})},W=a(31),G=a.n(W),V=["size","variant","title","className"],B=function(e){var t=e.size,a=void 0===t?0:t,n=e.variant,r=void 0===n?0:n,s=e.title,c=e.className,i=Object(y.a)(e,V),l=0===a?G.a.small:1===a?G.a.medium:G.a.big,u=0===r?G.a.default:1===r?G.a.primary:G.a.secondary,j="".concat(G.a.btn," ").concat(l," ").concat(u,"  ").concat(c," ");return Object(o.jsx)("button",Object(O.a)(Object(O.a)({className:j},i),{},{children:s||i.children}))};!function(e){e[e.small=0]="small",e[e.medium=1]="medium",e[e.big=2]="big"}(d||(d={})),function(e){e[e.default=0]="default",e[e.primary=1]="primary",e[e.secondary=2]="secondary"}(b||(b={}));var U=a(16),q=U.b().shape({email:U.d().email("Email is invalid").required("Email is required"),password:U.d().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:U.d().oneOf([U.c("password"),null],"Passwords must match").required("Confirm Password is required"),acceptTerms:U.a().oneOf([!0],"Accept Ts & Cs is required")}),Y=a(37),Z=a.n(Y),z=["type","onChange","onChangeChecked","className","spanClassName","children","error","title"],H=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=e.error,c=e.title,i=Object(y.a)(e,z),l="".concat(Z.a.checkbox," ").concat(n||"");return Object(o.jsxs)("label",{style:{position:"relative"},children:[Object(o.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:l},i)),r&&Object(o.jsx)("span",{className:Z.a.spanClassName,children:r}),r?c:r,Object(o.jsx)("div",{style:{color:"red",position:"absolute",top:"30px"},children:s})]})},K=r.a.memo((function(e){var t=e.initialValues,a=e.onSubmit,n=Object(S.d)({initialValues:t,onSubmit:a,validationSchema:q});return Object(o.jsx)("div",{className:E.a.form,children:Object(o.jsx)("div",{className:E.a.containerForm,children:Object(o.jsxs)("div",{className:E.a.formWrapper,children:[Object(o.jsx)(L,{}),Object(o.jsx)(D,{title:"Sign In"}),Object(o.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(o.jsx)(R,Object(O.a)({type:"text",title:"Email",error:n.touched.email&&n.errors.email?n.errors.email:null},n.getFieldProps("email"))),Object(o.jsx)(R,Object(O.a)({type:"password",title:"Password",error:n.touched.password&&n.errors.password?n.errors.password:null},n.getFieldProps("password"))),Object(o.jsx)(R,Object(O.a)({type:"password",title:"Confirm password",error:n.touched.confirmPassword&&n.errors.confirmPassword?n.errors.confirmPassword:null},n.getFieldProps("confirmPassword"))),Object(o.jsx)(H,Object(O.a)(Object(O.a)({error:n.touched.acceptTerms&&n.errors.acceptTerms?n.errors.acceptTerms:null},n.getFieldProps("acceptTerms")),{},{children:"Accept Terms & Conditions"})),Object(o.jsxs)("div",{className:E.a.btnInner,children:[Object(o.jsx)(B,{size:d.small,variant:b.default,title:"Cancel"}),Object(o.jsx)(B,{size:d.medium,variant:b.primary,title:"Register"})]})]})]})})})})),J=function(){var e=Object(p.b)(),t=r.a.useCallback((function(t){var a;e((a=t,function(e){f(a).then((function(){e({type:"login/registration",isRegistration:!0})}))}))}),[e]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(K,{initialValues:{email:"",password:"",confirmPassword:"",acceptTerms:""},onSubmit:t})})},X=a(25),Q=a.n(X),$=a.p+"static/media/loading.f3889154.svg",ee=a(112),te=a.n(ee),ae=function(){return Object(o.jsx)("div",{className:te.a.wrapperLoading,children:Object(o.jsx)("img",{src:$})})},ne=a(26),re=a.n(ne),se=["title"],ce=function(e){var t=e.title,a=Object(y.a)(e,se),n=r.a.useState(!1),s=Object(w.a)(n,2),c=s[0],i=s[1],l=Object(S.c)(Object(O.a)(Object(O.a)({},a),{},{type:"password"})),u=Object(w.a)(l,2),j=u[0],d=u[1];return Object(o.jsxs)("div",{className:re.a.group,children:[Object(o.jsx)("input",Object(O.a)(Object(O.a)({required:!0,type:c?"text":"password"},j),{},{className:re.a.input},a)),Object(o.jsx)("a",{className:"".concat(re.a.passwordControl," ").concat(c?re.a.showPassword:re.a.hidePassword),style:"password"===a.name?{display:"inline"}:{display:"none"},onClick:function(){return i((function(e){return!e}))},children:Object(o.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(o.jsx)("line",{x1:"40",y1:"30",x2:"240",y2:"100"}),Object(o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.23997 17 6.99997 14.76 6.99997 12C6.99997 9.24 9.23997 6.99999 12 6.99999C14.76 6.99999 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 8.99997 10.34 8.99997 12C8.99997 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z",fill:"#2D2E46"})]})}),Object(o.jsx)("span",{className:re.a.highlight}),Object(o.jsx)("span",{className:re.a.bar}),Object(o.jsx)("label",{className:re.a.label,children:t}),Object(o.jsx)("div",{style:{color:"red",position:"absolute",top:"50px"},children:d.touched&&d.error?Object(o.jsx)("div",{className:"error",children:d.error}):null})]})},ie=r.a.memo((function(e){var t=e.initialValues,a=e.onSubmit,n=e.disable,r=e.loading,s=e.validationSchema;return e.toLoginPage?Object(o.jsx)(i.a,{to:It.LOGIN}):Object(o.jsx)(S.b,{initialValues:t,onSubmit:a,validationSchema:s,children:Object(o.jsxs)("div",{className:Q.a.form,children:[r&&Object(o.jsx)(ae,{}),Object(o.jsx)("div",{className:Q.a.containerForm,children:Object(o.jsxs)("div",{className:Q.a.formWrapper,children:[Object(o.jsx)("h2",{className:Q.a.formTitle,children:"It-incubator "}),Object(o.jsx)("span",{className:Q.a.formSubTitle,children:"Create new password"}),Object(o.jsxs)(S.a,{className:Q.a.formLogin,children:[Object(o.jsx)(ce,{title:"Password",name:"password"}),Object(o.jsx)("p",{className:Q.a.textNewPassword,children:"Create new password and we will send you further instructions to email"}),Object(o.jsx)("div",{className:Q.a.buttonInner,children:Object(o.jsx)(B,{size:d.big,variant:b.primary,title:"Create new password",disabled:n})})]})]})})]})})})),oe={toCheckEmailPage:!1,setMailName:"",toLoginPage:!1,buttonDisable:!1,loading:!1},le=function(e){return{type:"RECOVERY/BUTTON-DISABLE",disable:e}},ue=function(e){return{type:"RECOVERY/LOADING-SHOW",loading:e}},je=function(){var e=Object(p.c)((function(e){return e.recovery.buttonDisable})),t=Object(p.c)((function(e){return e.recovery.loading})),a=Object(p.c)((function(e){return e.recovery.toLoginPage})),n=Object(i.g)().token,s=Object(p.b)(),c={password:"",resetPasswordToken:n},l=r.a.useCallback((function(e){var t;s((t=e,function(e){e(le(!0)),e(ue(!0)),N(t).then((function(t){e({type:"RECOVERY/LOGIN-PAGE",toLoginPage:!0}),console.log(t.data.info)})).catch((function(e){console.log(e.response.data.error)})).finally((function(){e(le(!1)),e(ue(!1))}))}))}),[s]),u=U.b().shape({password:U.d().min(8,"Password must be at least 8 characters").required("Password is required")});return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(ie,{initialValues:c,onSubmit:l,disable:e,loading:t,validationSchema:u,toLoginPage:a})})},de=a(32),be=a.n(de),me=a.p+"static/media/mail.bc3a4042.svg",pe=r.a.memo((function(){var e=Object(p.c)((function(e){return e.recovery.setMailName}));return Object(o.jsx)("div",{className:be.a.form,children:Object(o.jsx)("div",{className:be.a.containerForm,children:Object(o.jsxs)("div",{className:be.a.formWrapper,children:[Object(o.jsx)("h2",{className:be.a.formTitle,children:"It-incubator"}),Object(o.jsx)("img",{className:be.a.imgMail,src:me,alt:"mail"}),Object(o.jsx)("span",{className:be.a.formSubTitle,children:"Check Email"}),Object(o.jsxs)("p",{className:be.a.textCheckEmail,children:["We\u2019ve sent an Email with instructions to ",e]})]})})})})),Oe=a(20),he=a.n(Oe),_e=a(10),xe=r.a.memo((function(e){var t=e.initialValues,a=e.onSubmit,n=e.isMail,r=e.disable,s=e.loading,c=e.validationSchema;return n?Object(o.jsx)(i.a,{to:It.FORGOT_EMAIL}):Object(o.jsx)(S.b,{initialValues:t,onSubmit:a,validationSchema:c,children:Object(o.jsxs)("div",{className:he.a.form,children:[s&&Object(o.jsx)(ae,{}),Object(o.jsx)("div",{className:he.a.containerForm,children:Object(o.jsxs)("div",{className:he.a.formWrapper,children:[Object(o.jsx)("h2",{className:he.a.formTitle,children:"It-incubator "}),Object(o.jsx)("span",{className:he.a.formSubTitle,children:"Forgot your password?"}),Object(o.jsxs)(S.a,{className:he.a.formEmail,children:[Object(o.jsx)(ce,{type:"email",title:"Email",name:"email"}),Object(o.jsx)("p",{className:he.a.textEmail,children:"Enter your email address and we will send you further instructions "}),Object(o.jsx)("div",{className:he.a.buttonInner,children:Object(o.jsx)(B,{size:d.big,variant:b.primary,title:"Send Instructions",disabled:r})})]}),Object(o.jsxs)("div",{className:he.a.blockSingUp,children:[Object(o.jsx)("span",{className:he.a.formText,children:"Did you remember your password?"}),Object(o.jsx)(_e.b,{to:It.LOGIN,className:he.a.linkSingUp,children:"Try logging in"})]})]})})]})})})),ge=function(){var e=Object(p.c)((function(e){return e.recovery.toCheckEmailPage})),t=Object(p.c)((function(e){return e.recovery.buttonDisable})),a=Object(p.c)((function(e){return e.recovery.loading})),n=Object(p.b)(),s=U.b().shape({email:U.d().email("Email is invalid").required("Email is required")}),c=r.a.useCallback((function(e){var t;n((t=e,function(e){e(le(!0)),e(ue(!0)),v(t).then((function(a){e({type:"RECOVERY/CHECK-MAIL-PAGE",toCheckEmailPage:!0}),e({type:"RECOVERY/SET-MAIL-NAME",setMailName:t.email}),console.log(a.data.info)})).catch((function(e){console.log(e.response.data.error)})).finally((function(){e(le(!1)),e(ue(!1))}))}))}),[n]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(xe,{initialValues:{email:"",from:"",message:""},onSubmit:c,isMail:e,disable:t,loading:a,validationSchema:s})})},fe={meObject:{}},ve={isLoggedIn:!1,isInitialized:!1,error:""},Ne=function(e){return{type:"APP/INITIALIZE-APP",isInitialized:e}},Ce=function(e){return{type:"APP/SET_AUTH_ERROR",error:e}},Ee=a(27),Se=a.n(Ee),we=function(e){var t=e.initialValues,a=e.onSubmit,n=(e.validate,Object(S.d)({initialValues:t,onSubmit:a}));return Object(o.jsx)("div",{className:Se.a.form,children:Object(o.jsx)("div",{className:Se.a.containerForm,children:Object(o.jsxs)("div",{className:Se.a.formWrapper,children:[Object(o.jsx)(L,{}),Object(o.jsx)(D,{title:"Sign In"}),Object(o.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(o.jsx)(R,Object(O.a)({type:"text",title:"Email",error:n.touched.email&&n.errors.email?n.errors.email:null},n.getFieldProps("email"))),Object(o.jsx)(R,Object(O.a)({type:"password",title:"Password",error:n.touched.password&&n.errors.password?n.errors.password:null},n.getFieldProps("password"))),Object(o.jsx)(_e.b,{to:It.RECOVERY_PASSWORD,className:Se.a.linkForgotPassword,children:"Forgot password"}),Object(o.jsx)("div",{className:Se.a.buttonInner,children:Object(o.jsx)(B,{title:"Login"})})]}),Object(o.jsxs)("div",{className:Se.a.blockSingUp,children:[Object(o.jsx)("span",{className:Se.a.formText,children:"Don\u2019t have an account?"}),Object(o.jsx)(_e.b,{to:It.REGISTRATION,className:Se.a.linkSingUp,children:"Sign Up "})]})]})})})},ye=function(){var e=Object(p.b)();return Object(o.jsx)(we,{initialValues:{email:"",password:""},validate:function(e){return function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<8&&(t.password="Password must be more than 8 characters long"):t.password="Required",e.confirmPassword?e.confirmPassword.length<8&&(t.confirmPassword="Password must be more than 8 characters long"):t.confirmPassword="Required",t}(e)},onSubmit:function(t){e(function(e){return function(t){g(e).then((function(e){t({type:"login/SET-IS-LOGGED-IN",isLoggedIn:!0})}))}}(t))}})},Pe=a(113),Ie=a.n(Pe),Te=a(44),Re=a.n(Te),ke=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],Ae=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,l=Object(y.a)(e,ke),u="".concat(Re.a.error," ").concat(i||""),j="".concat(Re.a.input," ").concat(s?Re.a.errorInput:Re.a.superInput," ").concat(c);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",Object(O.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},l)),s&&Object(o.jsx)("span",{className:u,children:s})]})},Le=a(114),Fe=a.n(Le),Me=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),a=t[0],r=t[1],s=a?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442";return Object(o.jsxs)("div",{className:Fe.a.column,children:[Object(o.jsx)(Ae,{value:a,onChangeText:r,onEnter:function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},error:s}),Object(o.jsx)(Ae,{})]})},De=a(115),We=a.n(De),Ge=a(56),Ve=a.n(Ge),Be=["red","className"],Ue=function(e){var t=e.red,a=e.className,n=Object(y.a)(e,Be),r="".concat(Ve.a.button," ").concat(t?Ve.a.red:Ve.a.default,"  ").concat(a," ");return Object(o.jsx)("button",Object(O.a)({className:r},n))},qe=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),a=t[0],r=(t[1],a?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442");return Object(o.jsxs)("div",{className:We.a.column,children:[Object(o.jsx)(Ue,{children:"default"}),Object(o.jsx)(Ue,{red:!0,onClick:function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},children:"delete"}),Object(o.jsx)(Ue,{disabled:!0,children:"disabled"})]})},Ye=a(116),Ze=a.n(Ye),ze=["type","onChange","onChangeChecked","className","spanClassName","children"],He=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=Object(y.a)(e,ze),c="".concat(Z.a.checkbox," ").concat(n||"");return Object(o.jsxs)("label",{children:[Object(o.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c},s)),r&&Object(o.jsx)("span",{className:Z.a.spanClassName,children:r})]})},Ke=function(){return Object(o.jsx)("div",{className:Ze.a.column,children:Object(o.jsx)(He,{})})},Je=a(71),Xe=a.n(Je);function Qe(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function $e(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}Qe("test",{x:"A",y:1});$e("test",{x:"",y:0});var et=a(117),tt=a.n(et),at=["autoFocus","onBlur","onEnter","spanProps"],nt=["children","onDoubleClick","className"],rt=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,s=Object(y.a)(e,at),c=Object(n.useState)(!1),i=Object(w.a)(c,2),l=i[0],u=i[1],j=r||{},d=j.children,b=j.onDoubleClick,m=j.className,p=Object(y.a)(j,nt),h="".concat(tt.a.span," ").concat(m||"");return Object(o.jsx)(o.Fragment,{children:l?Object(o.jsx)(Ae,Object(O.a)({autoFocus:!0,onBlur:function(e){u(!1),t&&t(e)},onEnter:function(){u(!1),a&&a()}},s)):Object(o.jsxs)("span",Object(O.a)(Object(O.a)({onDoubleClick:function(e){u(!0),b&&b(e)},className:h},p),{},{children:["\u270e ",d||s.value]}))})},st=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)("div",{className:Xe.a.column,children:[Object(o.jsx)("div",{children:Object(o.jsx)(rt,{value:a,onChangeText:r,spanProps:{children:a?void 0:"enter text..."}})}),Object(o.jsxs)("div",{className:Xe.a.button,children:[Object(o.jsx)(Ue,{onClick:function(){Qe("editable-span-value",a)},children:"save"}),Object(o.jsx)(Ue,{onClick:function(){r($e("editable-span-value",""))},red:!0,children:"restore"})]})]})},ct=a(72),it=a.n(ct),ot=["options","className","onChange","onChangeOption"],lt=function(e){var t=e.options,a=e.className,n=e.onChange,r=e.onChangeOption,s=Object(y.a)(e,ot),c=t?t.map((function(e,t){return Object(o.jsx)("option",{className:it.a.option,value:e,children:e},e+"-"+t)})):[],i=it.a.select+(a?""+a:"");return Object(o.jsx)("select",Object(O.a)(Object(O.a)({className:i,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},s),{},{children:c}))},ut=a(118),jt=a.n(ut),dt=["hello","bye","success"],bt=function(){var e=Object(n.useState)(dt[1]),t=Object(w.a)(e,2),a=t[0],r=t[1];return Object(o.jsx)("div",{className:jt.a.column,children:Object(o.jsx)(lt,{options:dt,value:a,onChangeOption:r})})},mt=a(38),pt=a.n(mt),Ot=["type","name","className","options","value","onChange","onChangeOption"],ht=function(e){e.type;var t=e.name,a=(e.className,e.options),n=e.value,r=e.onChange,s=e.onChangeOption,c=Object(y.a)(e,Ot),i=function(e){r&&r(e),s&&s(e.currentTarget.value)},l=a?a.map((function(e,a){return Object(o.jsx)("div",{className:pt.a.body,children:Object(o.jsxs)("label",{className:pt.a.label,children:[Object(o.jsx)("input",Object(O.a)({className:pt.a.radio,type:"radio",name:t,checked:e===n,value:e,onChange:i},c)),Object(o.jsx)("div",{className:pt.a.radDesign}),Object(o.jsx)("div",{className:pt.a.RadText,children:e})]},t+"-"+a)})})):[];return Object(o.jsx)(o.Fragment,{children:l})},_t=a(119),xt=a.n(_t),gt=["hello","bye","success"],ft=function(){var e=Object(n.useState)(gt[1]),t=Object(w.a)(e,2),a=t[0],r=t[1];return Object(o.jsx)("div",{className:xt.a.column,children:Object(o.jsx)(ht,{name:"radio",options:gt,value:a,onChangeOption:r})})},vt=a(120),Nt=a.n(vt),Ct=["type","onChange","onChangeRange","className"],Et=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,r=Object(y.a)(e,Ct),s="".concat(Nt.a.range," ").concat(n||"");return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("input",Object(O.a)({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:s},r))})},St=a(121),wt=a.n(St),yt=function(){var e=Object(n.useState)(10),t=Object(w.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)("div",{className:wt.a.column,children:[Object(o.jsx)("span",{children:a}),Object(o.jsx)(Et,{value:a,onChangeRange:r})]})},Pt=function(){return Object(o.jsxs)("div",{className:Ie.a.test,children:[Object(o.jsx)("span",{children:"SuperInputText"}),Object(o.jsx)("div",{children:Object(o.jsx)(Me,{})}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"SuperButton"}),Object(o.jsx)("div",{children:Object(o.jsx)(qe,{})}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"SuperRadio"}),Object(o.jsx)("div",{children:Object(o.jsx)(ft,{})}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"SuperEditableSpan"}),Object(o.jsx)("div",{children:Object(o.jsx)(st,{})}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"SuperSelect"}),Object(o.jsx)("div",{children:Object(o.jsx)(bt,{})}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"SuperCheckbox"}),Object(o.jsx)("div",{children:Object(o.jsx)(Ke,{})}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("span",{children:"SuperRange"}),Object(o.jsx)("div",{children:Object(o.jsx)(yt,{})}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{})]})},It={LOGIN:"/login",REGISTRATION:"/registration",PROFILE:"/profile",RECOVERY_PASSWORD:"/recovery-password",NEW_PASSWORD:"/set-new-password/:token",TEST:"/test",HEADER:"/header",FORGOT_EMAIL:"/check-email"},Tt=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{path:"/",exact:!0,render:function(){return Object(o.jsx)(i.a,{to:It.LOGIN})}}),Object(o.jsx)(i.b,{path:It.LOGIN,render:function(){return Object(o.jsx)(ye,{})}}),Object(o.jsx)(i.b,{path:It.REGISTRATION,render:function(){return Object(o.jsx)(J,{})}}),Object(o.jsx)(i.b,{path:It.PROFILE,render:function(){return Object(o.jsx)(l,{})}}),Object(o.jsx)(i.b,{path:It.RECOVERY_PASSWORD,render:function(){return Object(o.jsx)(ge,{})}}),Object(o.jsx)(i.b,{path:It.NEW_PASSWORD,render:function(){return Object(o.jsx)(je,{})}}),Object(o.jsx)(i.b,{path:It.FORGOT_EMAIL,render:function(){return Object(o.jsx)(pe,{})}}),Object(o.jsx)(i.b,{path:It.TEST,render:function(){return Object(o.jsx)(Pt,{})}}),Object(o.jsx)(i.b,{render:function(){return Object(o.jsx)(m,{})}})]})})},Rt=a(11),kt=a.n(Rt);function At(){return Object(o.jsxs)("div",{className:kt.a.header,children:[Object(o.jsx)(_e.b,{to:It.LOGIN,className:kt.a.link,activeClassName:kt.a.active,children:"Login"}),Object(o.jsx)(_e.b,{to:It.REGISTRATION,className:kt.a.link,activeClassName:kt.a.active,children:"Registration"}),Object(o.jsx)(_e.b,{to:It.RECOVERY_PASSWORD,className:kt.a.link,activeClassName:kt.a.active,children:"Forgot"}),Object(o.jsx)(_e.b,{to:It.FORGOT_EMAIL,className:kt.a.link,activeClassName:kt.a.active,children:"Check"}),Object(o.jsx)(_e.b,{to:It.NEW_PASSWORD,className:kt.a.link,activeClassName:kt.a.active,children:"NewPassword"}),Object(o.jsx)(_e.b,{to:It.PROFILE,className:kt.a.link,activeClassName:kt.a.active,children:"Profile"}),Object(o.jsx)(_e.b,{to:It.TEST,className:kt.a.link,activeClassName:kt.a.active,children:"Test"})]})}var Lt=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.auth.isInitialized}));return Object(n.useEffect)((function(){e((function(e){x().then((function(t){e(Ne(!0)),e({type:"APP/USER-DATA",userData:t.data}),t.data.error?Ce(t.data.error):Ce(null)})).catch((function(t){e(Ne(!0)),t.response?Ce(t.response.data.error):Ce(null)}))}))}),[e]),t?Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(At,{}),Object(o.jsx)(Tt,{})]}):Object(o.jsx)("div",{children:"...Loading"})},Ft=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,251)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},Mt=a(57),Dt=a(122),Wt=Object(Mt.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(O.a)(Object(O.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"APP/INITIALIZE-APP":return Object(O.a)(Object(O.a)({},e),{},{isInitialized:t.isInitialized});case"APP/SET_AUTH_ERROR":return Object(O.a)(Object(O.a)({},e),{},{error:t.error});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/USER-DATA":return Object(O.a)(Object(O.a)({},e),{},{meObject:t.userData});default:return e}},recovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVERY/CHECK-MAIL-PAGE":return Object(O.a)(Object(O.a)({},e),{},{toCheckEmailPage:t.toCheckEmailPage});case"RECOVERY/SET-MAIL-NAME":return Object(O.a)(Object(O.a)({},e),{},{setMailName:t.setMailName});case"RECOVERY/LOGIN-PAGE":return Object(O.a)(Object(O.a)({},e),{},{toLoginPage:t.toLoginPage});case"RECOVERY/BUTTON-DISABLE":return Object(O.a)(Object(O.a)({},e),{},{buttonDisable:t.disable});case"RECOVERY/LOADING-SHOW":return Object(O.a)(Object(O.a)({},e),{},{loading:t.loading});default:return e}}}),Gt=Object(Mt.c)(Wt,Object(Mt.a)(Dt.a)),Vt=Gt;window.store=Gt,c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(_e.a,{children:Object(o.jsx)(p.a,{store:Vt,children:Object(o.jsx)(Lt,{})})})}),document.getElementById("root")),Ft()},26:function(e,t,a){e.exports={group:"Input_group__2sms0",input:"Input_input__15Muy",bar:"Input_bar__2JMci",highlight:"Input_highlight__2T5aX",inputHighlighter:"Input_inputHighlighter__15Jte",passwordControl:"Input_passwordControl__EfWCk",showPassword:"Input_showPassword__31eN-",hidePassword:"Input_hidePassword__3pgZ_",label:"Input_label__MaPCx"}},27:function(e,t,a){e.exports={containerForm:"AuthLogin_containerForm__22l5H",formWrapper:"AuthLogin_formWrapper__3iTus",linkForgotPassword:"AuthLogin_linkForgotPassword__1Z9eL",buttonInner:"AuthLogin_buttonInner__1IStY",blockSingUp:"AuthLogin_blockSingUp__3Gqo2",formText:"AuthLogin_formText___R6ry",linkSingUp:"AuthLogin_linkSingUp__oC48c"}},31:function(e,t,a){e.exports={btn:"Button_btn__V5JXr",small:"Button_small__1cL16",medium:"Button_medium__1sup1",big:"Button_big__1lnjB",default:"Button_default__2iAg6",primary:"Button_primary__1CrSj",secondary:"Button_secondary__2uksu"}},32:function(e,t,a){e.exports={containerForm:"CheckEmail_containerForm__1UAVz",formWrapper:"CheckEmail_formWrapper__16g94",formTitle:"CheckEmail_formTitle__2PO7i",imgMail:"CheckEmail_imgMail__mkvqv",formSubTitle:"CheckEmail_formSubTitle__2ESPm",textCheckEmail:"CheckEmail_textCheckEmail__3ErsG"}},37:function(e,t,a){e.exports={label:"SuperCheckbox_label__1SRJc",checkbox:"SuperCheckbox_checkbox__3lCk1"}},38:function(e,t,a){e.exports={body:"SuperRadio_body__24mnf",label:"SuperRadio_label__fP36O",radio:"SuperRadio_radio__3Bl2z",radDesign:"SuperRadio_radDesign__1ZCgs",RadText:"SuperRadio_RadText__Gf7qk"}},43:function(e,t,a){e.exports={containerForm:"AuthRegistr_containerForm__1AFIX",formWrapper:"AuthRegistr_formWrapper__1LxcW",btnInner:"AuthRegistr_btnInner__ODTD8"}},44:function(e,t,a){e.exports={input:"SuperInputText_input__2B_JM",superInput:"SuperInputText_superInput__LSDRp",errorInput:"SuperInputText_errorInput__1YSg1",error:"SuperInputText_error__TR8XN"}},56:function(e,t,a){e.exports={default:"SuperButton_default__1jW8B",red:"SuperButton_red__xgypa"}},71:function(e,t,a){e.exports={column:"TestSuperEditableSpan_column__2CGzG",button:"TestSuperEditableSpan_button__3S5Mp"}},72:function(e,t,a){e.exports={select:"SuperSelect_select__1CMrg",option:"SuperSelect_option__2sQgI"}},73:function(e,t,a){},9:function(e,t,a){e.exports={error:"Error404_error__3-rr3",dracula:"Error404_dracula__39W02",p:"Error404_p__37dkH",con:"Error404_con__2aCy9",ani9:"Error404_ani9__3YrCC",hair:"Error404_hair__3CSAd",hairR:"Error404_hairR__1lesJ",head:"Error404_head__2bMmv",eye:"Error404_eye__3BR5_",eyeR:"Error404_eyeR__RIJjK",mouth:"Error404_mouth__2_S1B",blod:"Error404_blod__3T-o7",blod2:"Error404_blod2__1lCUL",pageMs:"Error404_pageMs__1myBV",pageMsg:"Error404_pageMsg__4bdJy",goBack:"Error404_goBack__1UfvG"}}},[[250,1,2]]]);
//# sourceMappingURL=main.7750970b.chunk.js.map