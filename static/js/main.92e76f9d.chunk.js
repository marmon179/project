(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{107:function(e,t,a){e.exports={logo:"Logo_logo__2--_R"}},108:function(e,t,a){e.exports={title:"Title_title__2qDMs"}},11:function(e,t,a){e.exports={error:"Error404_error__3-rr3",dracula:"Error404_dracula__39W02",p:"Error404_p__37dkH",con:"Error404_con__2aCy9",ani9:"Error404_ani9__3YrCC",hair:"Error404_hair__3CSAd",hairR:"Error404_hairR__1lesJ",head:"Error404_head__2bMmv",eye:"Error404_eye__3BR5_",eyeR:"Error404_eyeR__RIJjK",mouth:"Error404_mouth__2_S1B",blod:"Error404_blod__3T-o7",blod2:"Error404_blod2__1lCUL",pageMs:"Error404_pageMs__1myBV",pageMsg:"Error404_pageMsg__4bdJy",goBack:"Error404_goBack__1UfvG"}},112:function(e,t,a){e.exports={wrapperLoading:"Loading_wrapperLoading__2nV3u"}},113:function(e,t,a){e.exports={test:"test_test__oUI8K",wrapper:"test_wrapper__2s3oZ"}},114:function(e,t,a){e.exports={column:"TestSuperInput_column__3XyrP"}},115:function(e,t,a){e.exports={column:"TestSuperButton_column__2tQ-x"}},116:function(e,t,a){e.exports={column:"TestSuperCheckbox_column__3-eY1"}},117:function(e,t,a){e.exports={span:"SuperEditableSpan_span__1f8Nv"}},118:function(e,t,a){e.exports={column:"TestSuperSelect_column__2kAnk"}},119:function(e,t,a){e.exports={column:"TestSuperRadio_column__glKUJ"}},12:function(e,t,a){e.exports={link:"Header_link__MF_ty",active:"Header_active__2wia3",header:"Header_header__2RhEF"}},120:function(e,t,a){},121:function(e,t,a){e.exports={column:"TestSuperRange_column__3-fkA"}},127:function(e,t,a){},151:function(e,t,a){},20:function(e,t,a){e.exports={containerForm:"EnterEmail_containerForm__2psxF",formWrapper:"EnterEmail_formWrapper__2lRKZ",formTitle:"EnterEmail_formTitle__EnQON",formSubTitle:"EnterEmail_formSubTitle__3iRE7",formEmail:"EnterEmail_formEmail__ivYTI",formInput:"EnterEmail_formInput__3Qhaz",textEmail:"EnterEmail_textEmail__34sKG",buttonInner:"EnterEmail_buttonInner__1u9ZC",blockSingUp:"EnterEmail_blockSingUp__tYIhA",formText:"EnterEmail_formText__1hxQM",linkSingUp:"EnterEmail_linkSingUp__2snna"}},24:function(e,t,a){e.exports={group:"Input_group__2sviZ",input:"Input_input__3cueq",bar:"Input_bar__3XouU",highlight:"Input_highlight__qkzD1",inputHighlighter:"Input_inputHighlighter__2xHTa",passwordControl:"Input_passwordControl__1KhUm",showPassword:"Input_showPassword__3kd7y",hidePassword:"Input_hidePassword__3Ji5J",label:"Input_label__2xK8P"}},25:function(e,t,a){e.exports={containerForm:"NewPassword_containerForm__YpxW_",formWrapper:"NewPassword_formWrapper__kgKb4",formTitle:"NewPassword_formTitle__2bLzW",formSubTitle:"NewPassword_formSubTitle__1VeDk",formLogin:"NewPassword_formLogin__3GZPk",buttonInner:"NewPassword_buttonInner__3V-0K",textNewPassword:"NewPassword_textNewPassword__3gZSW"}},250:function(e,t,a){"use strict";a.r(t);var n,r,s=a(1),c=a.n(s),i=a(51),o=a.n(i),l=(a(127),a(73),a(7)),u=a(4),j=a(2),d=a(104),b=a.n(d).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),m=function(){return b.post("auth/me")},p=function(){return b.delete("auth/me")},O=function(e){return b.post("auth/login",e)},h=function(e){return b.post("auth/register",e)},_=function(e){return b.post("auth/forgot",e)},x=function(e){return b.post("auth/set-new-password",e)},g={meObject:{}},f={isLoggedIn:!1,isInitialized:!1,error:""},v=function(e){return{type:"login/SET-IS-LOGGED-IN",isLoggedIn:e}},N=function(e){return{type:"APP/INITIALIZE-APP",isInitialized:e}},C=function(e){return{type:"APP/SET_AUTH_ERROR",error:e}},E=a(6),w=a(31),S=a.n(w),P=a(0),I=["size","variant","title","className"],y=function(e){var t=e.size,a=void 0===t?0:t,n=e.variant,r=void 0===n?0:n,s=e.title,c=e.className,i=Object(E.a)(e,I),o=0===a?S.a.small:1===a?S.a.medium:S.a.big,l=0===r?S.a.default:1===r?S.a.primary:S.a.secondary,u="".concat(S.a.btn," ").concat(o," ").concat(l,"  ").concat(c," ");return Object(P.jsx)("button",Object(j.a)(Object(j.a)({className:u},i),{},{children:s||i.children}))};!function(e){e[e.small=0]="small",e[e.medium=1]="medium",e[e.big=2]="big"}(n||(n={})),function(e){e[e.default=0]="default",e[e.primary=1]="primary",e[e.secondary=2]="secondary"}(r||(r={}));var T=function(){var e=Object(u.c)((function(e){return e.auth.isLoggedIn})),t=Object(u.b)();return e?Object(P.jsxs)("div",{children:[Object(P.jsx)("h1",{children:"Profile"}),e&&Object(P.jsx)(y,{onClick:function(){t((function(e){p().then((function(t){e(v(!1))}))}))},size:n.medium,variant:r.primary,title:"Log out"})]}):Object(P.jsx)(l.a,{to:Rt.LOGIN})},R=a(11),k=a.n(R);var L=function(){var e="".concat(k.a.eye," ").concat(k.a.eyeR),t="".concat(k.a.blod," ").concat(k.a.blod2);return Object(P.jsx)("div",{className:k.a.container,children:Object(P.jsxs)("div",{className:k.a.error,children:[Object(P.jsx)("p",{className:k.a.p,children:"4"}),Object(P.jsx)("span",{className:k.a.dracula,children:Object(P.jsxs)("div",{className:k.a.con,children:[Object(P.jsx)("div",{className:k.a.hair}),Object(P.jsx)("div",{className:k.a.hairR}),Object(P.jsx)("div",{className:k.a.head}),Object(P.jsx)("div",{className:k.a.eye}),Object(P.jsx)("div",{className:e}),Object(P.jsx)("div",{className:k.a.mouth}),Object(P.jsx)("div",{className:k.a.blod}),Object(P.jsx)("div",{className:t})]})}),Object(P.jsx)("p",{className:k.a.p,children:"4"}),Object(P.jsx)("div",{className:k.a.pageMs,children:Object(P.jsx)("p",{className:k.a.pageMsg,children:" Oops, the page you're looking for Disappeared "})})]})})},A=a(43),F=a.n(A),M=(a(151),a(18)),D=a(5),G=a(24),W=a.n(G),V=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","title"],B=function(e){var t=e.type,a=e.onChange,n=(e.onChangeText,e.onKeyPress,e.onEnter,e.error),r=(e.className,e.spanClassName,e.title),s=Object(E.a)(e,V),i=c.a.useState(!1),o=Object(D.a)(i,2),l=o[0],u=o[1];return Object(P.jsxs)("div",{className:W.a.group,children:[Object(P.jsx)("input",Object(j.a)({required:!0,type:l?"text":t,onChange:function(e){a&&a(e)},className:W.a.input},s)),Object(P.jsx)("a",{className:"".concat(W.a.passwordControl," ").concat(l?W.a.showPassword:W.a.hidePassword),style:"password"===t?{display:"inline"}:{display:"none"},onClick:function(){return u((function(e){return!e}))},children:Object(P.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(P.jsx)("line",{x1:"40",y1:"30",x2:"240",y2:"100"}),Object(P.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.23997 17 6.99997 14.76 6.99997 12C6.99997 9.24 9.23997 6.99999 12 6.99999C14.76 6.99999 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 8.99997 10.34 8.99997 12C8.99997 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z",fill:"#2D2E46"})]})}),Object(P.jsx)("span",{className:W.a.highlight}),Object(P.jsx)("span",{className:W.a.bar}),Object(P.jsx)("label",{className:W.a.label,children:r}),Object(P.jsx)("div",{style:{color:"red",position:"absolute",top:"50px"},children:n})]})},q=a(107),U=a.n(q),Y=function(){return Object(P.jsx)("h1",{className:U.a.logo,children:"it-incubator"})},Z=a(108),z=a.n(Z),H=function(e){return Object(P.jsx)("h2",{className:z.a.title,children:e.title})},K=a(9),J=K.b().shape({email:K.d().email("Email is invalid").required("Email is required"),password:K.d().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:K.d().oneOf([K.c("password"),null],"Passwords must match").required("Confirm Password is required"),acceptTerms:K.a().oneOf([!0],"Accept Ts & Cs is required")}),X=a(37),Q=a.n(X),$=["type","onChange","onChangeChecked","className","spanClassName","children","error","title"],ee=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=e.error,c=e.title,i=Object(E.a)(e,$),o="".concat(Q.a.checkbox," ").concat(n||"");return Object(P.jsxs)("label",{style:{position:"relative"},children:[Object(P.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},i)),r&&Object(P.jsx)("span",{className:Q.a.spanClassName,children:r}),r?c:r,Object(P.jsx)("div",{style:{color:"red",position:"absolute",top:"30px"},children:s})]})},te=c.a.memo((function(e){var t=e.initialValues,a=e.onSubmit,s=Object(M.d)({initialValues:t,onSubmit:a,validationSchema:J});return Object(P.jsx)("div",{className:F.a.form,children:Object(P.jsx)("div",{className:F.a.containerForm,children:Object(P.jsxs)("div",{className:F.a.formWrapper,children:[Object(P.jsx)(Y,{}),Object(P.jsx)(H,{title:"Sign In"}),Object(P.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(P.jsx)(B,Object(j.a)({type:"text",title:"Email",error:s.touched.email&&s.errors.email?s.errors.email:null},s.getFieldProps("email"))),Object(P.jsx)(B,Object(j.a)({type:"password",title:"Password",error:s.touched.password&&s.errors.password?s.errors.password:null},s.getFieldProps("password"))),Object(P.jsx)(B,Object(j.a)({type:"password",title:"Confirm password",error:s.touched.confirmPassword&&s.errors.confirmPassword?s.errors.confirmPassword:null},s.getFieldProps("confirmPassword"))),Object(P.jsx)(ee,Object(j.a)(Object(j.a)({error:s.touched.acceptTerms&&s.errors.acceptTerms?s.errors.acceptTerms:null},s.getFieldProps("acceptTerms")),{},{children:"Accept Terms & Conditions"})),Object(P.jsxs)("div",{className:F.a.btnInner,children:[Object(P.jsx)(y,{size:n.small,variant:r.default,title:"Cancel"}),Object(P.jsx)(y,{size:n.medium,variant:r.primary,title:"Register"})]})]})]})})})})),ae=function(){var e=Object(u.b)(),t=c.a.useCallback((function(t){var a;e((a=t,function(e){h(a).then((function(){e({type:"login/registration",isRegistration:!0})}))}))}),[e]);return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(te,{initialValues:{email:"",password:"",confirmPassword:"",acceptTerms:""},onSubmit:t})})},ne=a(25),re=a.n(ne),se=a.p+"static/media/loading.f3889154.svg",ce=a(112),ie=a.n(ce),oe=function(){return Object(P.jsx)("div",{className:ie.a.wrapperLoading,children:Object(P.jsx)("img",{src:se})})},le=a(26),ue=a.n(le),je=["title"],de=function(e){var t=e.title,a=Object(E.a)(e,je),n=c.a.useState(!1),r=Object(D.a)(n,2),s=r[0],i=r[1],o=Object(M.c)(Object(j.a)(Object(j.a)({},a),{},{type:"password"})),l=Object(D.a)(o,2),u=l[0],d=l[1];return Object(P.jsxs)("div",{className:ue.a.group,children:[Object(P.jsx)("input",Object(j.a)(Object(j.a)({required:!0,type:s?"text":"password"},u),{},{className:ue.a.input},a)),Object(P.jsx)("a",{className:"".concat(ue.a.passwordControl," ").concat(s?ue.a.showPassword:ue.a.hidePassword),style:"password"===a.name?{display:"inline"}:{display:"none"},onClick:function(){return i((function(e){return!e}))},children:Object(P.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(P.jsx)("line",{x1:"40",y1:"30",x2:"240",y2:"100"}),Object(P.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.23997 17 6.99997 14.76 6.99997 12C6.99997 9.24 9.23997 6.99999 12 6.99999C14.76 6.99999 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 8.99997 10.34 8.99997 12C8.99997 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z",fill:"#2D2E46"})]})}),Object(P.jsx)("span",{className:ue.a.highlight}),Object(P.jsx)("span",{className:ue.a.bar}),Object(P.jsx)("label",{className:ue.a.label,children:t}),Object(P.jsx)("div",{style:{color:"red",position:"absolute",top:"50px"},children:d.touched&&d.error?Object(P.jsx)("div",{className:"error",children:d.error}):null})]})},be=c.a.memo((function(e){var t=e.initialValues,a=e.onSubmit,s=e.disable,c=e.loading,i=e.validationSchema;return e.toLoginPage?Object(P.jsx)(l.a,{to:Rt.LOGIN}):Object(P.jsx)(M.b,{initialValues:t,onSubmit:a,validationSchema:i,children:Object(P.jsxs)("div",{className:re.a.form,children:[c&&Object(P.jsx)(oe,{}),Object(P.jsx)("div",{className:re.a.containerForm,children:Object(P.jsxs)("div",{className:re.a.formWrapper,children:[Object(P.jsx)("h2",{className:re.a.formTitle,children:"It-incubator "}),Object(P.jsx)("span",{className:re.a.formSubTitle,children:"Create new password"}),Object(P.jsxs)(M.a,{className:re.a.formLogin,children:[Object(P.jsx)(de,{title:"Password",name:"password"}),Object(P.jsx)("p",{className:re.a.textNewPassword,children:"Create new password and we will send you further instructions to email"}),Object(P.jsx)("div",{className:re.a.buttonInner,children:Object(P.jsx)(y,{size:n.big,variant:r.primary,title:"Create new password",disabled:s})})]})]})})]})})})),me={toCheckEmailPage:!1,setMailName:"",toLoginPage:!1,buttonDisable:!1,loading:!1},pe=function(e){return{type:"RECOVERY/BUTTON-DISABLE",disable:e}},Oe=function(e){return{type:"RECOVERY/LOADING-SHOW",loading:e}},he=function(){var e=Object(u.c)((function(e){return e.recovery.buttonDisable})),t=Object(u.c)((function(e){return e.recovery.loading})),a=Object(u.c)((function(e){return e.recovery.toLoginPage})),n=Object(l.g)().token,r=Object(u.b)(),s={password:"",resetPasswordToken:n},i=c.a.useCallback((function(e){var t;r((t=e,function(e){e(pe(!0)),e(Oe(!0)),x(t).then((function(t){e({type:"RECOVERY/LOGIN-PAGE",toLoginPage:!0}),console.log(t.data.info)})).catch((function(e){console.log(e.response.data.error)})).finally((function(){e(pe(!1)),e(Oe(!1))}))}))}),[r]),o=K.b().shape({password:K.d().min(8,"Password must be at least 8 characters").required("Password is required")});return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(be,{initialValues:s,onSubmit:i,disable:e,loading:t,validationSchema:o,toLoginPage:a})})},_e=a(32),xe=a.n(_e),ge=a.p+"static/media/mail.bc3a4042.svg",fe=c.a.memo((function(){var e=Object(u.c)((function(e){return e.recovery.setMailName}));return Object(P.jsx)("div",{className:xe.a.form,children:Object(P.jsx)("div",{className:xe.a.containerForm,children:Object(P.jsxs)("div",{className:xe.a.formWrapper,children:[Object(P.jsx)("h2",{className:xe.a.formTitle,children:"It-incubator"}),Object(P.jsx)("img",{className:xe.a.imgMail,src:ge,alt:"mail"}),Object(P.jsx)("span",{className:xe.a.formSubTitle,children:"Check Email"}),Object(P.jsxs)("p",{className:xe.a.textCheckEmail,children:["We\u2019ve sent an Email with instructions to ",e]})]})})})})),ve=a(20),Ne=a.n(ve),Ce=a(10),Ee=c.a.memo((function(e){var t=e.initialValues,a=e.onSubmit,s=e.isMail,c=e.disable,i=e.loading,o=e.validationSchema;return s?Object(P.jsx)(l.a,{to:Rt.FORGOT_EMAIL}):Object(P.jsx)(M.b,{initialValues:t,onSubmit:a,validationSchema:o,children:Object(P.jsxs)("div",{className:Ne.a.form,children:[i&&Object(P.jsx)(oe,{}),Object(P.jsx)("div",{className:Ne.a.containerForm,children:Object(P.jsxs)("div",{className:Ne.a.formWrapper,children:[Object(P.jsx)("h2",{className:Ne.a.formTitle,children:"It-incubator "}),Object(P.jsx)("span",{className:Ne.a.formSubTitle,children:"Forgot your password?"}),Object(P.jsxs)(M.a,{className:Ne.a.formEmail,children:[Object(P.jsx)(de,{type:"email",title:"Email",name:"email"}),Object(P.jsx)("p",{className:Ne.a.textEmail,children:"Enter your email address and we will send you further instructions "}),Object(P.jsx)("div",{className:Ne.a.buttonInner,children:Object(P.jsx)(y,{size:n.big,variant:r.primary,title:"Send Instructions",disabled:c})})]}),Object(P.jsxs)("div",{className:Ne.a.blockSingUp,children:[Object(P.jsx)("span",{className:Ne.a.formText,children:"Did you remember your password?"}),Object(P.jsx)(Ce.b,{to:Rt.LOGIN,className:Ne.a.linkSingUp,children:"Try logging in"})]})]})})]})})})),we=function(){var e=Object(u.c)((function(e){return e.recovery.toCheckEmailPage})),t=Object(u.c)((function(e){return e.recovery.buttonDisable})),a=Object(u.c)((function(e){return e.recovery.loading})),n=Object(u.b)(),r=K.b().shape({email:K.d().email("Email is invalid").required("Email is required")}),s=c.a.useCallback((function(e){var t;n((t=e,function(e){e(pe(!0)),e(Oe(!0)),_(t).then((function(a){e({type:"RECOVERY/CHECK-MAIL-PAGE",toCheckEmailPage:!0}),e({type:"RECOVERY/SET-MAIL-NAME",setMailName:t.email}),console.log(a.data.info)})).catch((function(e){console.log(e.response.data.error)})).finally((function(){e(pe(!1)),e(Oe(!1))}))}))}),[n]);return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(Ee,{initialValues:{email:"",from:"",message:""},onSubmit:s,isMail:e,disable:t,loading:a,validationSchema:r})})},Se=a(27),Pe=a.n(Se),Ie=function(e){var t=e.initialValues,a=e.onSubmit,n=(e.validate,Object(M.d)({initialValues:t,onSubmit:a}));return e.isLoggedIn?Object(P.jsx)(l.a,{to:Rt.PROFILE}):Object(P.jsx)("div",{className:Pe.a.form,children:Object(P.jsx)("div",{className:Pe.a.containerForm,children:Object(P.jsxs)("div",{className:Pe.a.formWrapper,children:[Object(P.jsx)(Y,{}),Object(P.jsx)(H,{title:"Sign In"}),Object(P.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(P.jsx)(B,Object(j.a)({type:"text",title:"Email",error:n.touched.email&&n.errors.email?n.errors.email:null},n.getFieldProps("email"))),Object(P.jsx)(B,Object(j.a)({type:"password",title:"Password",error:n.touched.password&&n.errors.password?n.errors.password:null},n.getFieldProps("password"))),Object(P.jsx)(Ce.b,{to:Rt.RECOVERY_PASSWORD,className:Pe.a.linkForgotPassword,children:"Forgot password"}),Object(P.jsx)("div",{className:Pe.a.buttonInner,children:Object(P.jsx)(y,{title:"Login"})})]}),Object(P.jsxs)("div",{className:Pe.a.blockSingUp,children:[Object(P.jsx)("span",{className:Pe.a.formText,children:"Don\u2019t have an account?"}),Object(P.jsx)(Ce.b,{to:Rt.REGISTRATION,className:Pe.a.linkSingUp,children:"Sign Up "})]})]})})})},ye=(K.b().shape({email:K.d().email("Email is invalid").required("Email is required"),password:K.d().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:K.d().oneOf([K.c("password"),null],"Passwords must match").required("Confirm Password is required"),acceptTerms:K.a().oneOf([!0],"Accept Ts & Cs is required")}),function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth.isLoggedIn}));return Object(P.jsx)(Ie,{initialValues:{email:"",password:""},validate:function(e){return function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<8&&(t.password="Password must be more than 8 characters long"):t.password="Required",e.confirmPassword?e.confirmPassword.length<8&&(t.confirmPassword="Password must be more than 8 characters long"):t.confirmPassword="Required",t}(e)},onSubmit:function(t){var a;e((a=t,function(e){O(a).then((function(t){e(v(!0))}))}))},isLoggedIn:t})}),Te=a(113),Re=a.n(Te),ke=a(44),Le=a.n(ke),Ae=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],Fe=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=Object(E.a)(e,Ae),l="".concat(Le.a.error," ").concat(i||""),u="".concat(Le.a.input," ").concat(s?Le.a.errorInput:Le.a.superInput," ").concat(c);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("input",Object(j.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:u},o)),s&&Object(P.jsx)("span",{className:l,children:s})]})},Me=a(114),De=a.n(Me),Ge=function(){var e=Object(s.useState)(""),t=Object(D.a)(e,2),a=t[0],n=t[1],r=a?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442";return Object(P.jsxs)("div",{className:De.a.column,children:[Object(P.jsx)(Fe,{value:a,onChangeText:n,onEnter:function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},error:r}),Object(P.jsx)(Fe,{})]})},We=a(115),Ve=a.n(We),Be=a(56),qe=a.n(Be),Ue=["red","className"],Ye=function(e){var t=e.red,a=e.className,n=Object(E.a)(e,Ue),r="".concat(qe.a.button," ").concat(t?qe.a.red:qe.a.default,"  ").concat(a," ");return Object(P.jsx)("button",Object(j.a)({className:r},n))},Ze=function(){var e=Object(s.useState)(""),t=Object(D.a)(e,2),a=t[0],n=(t[1],a?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442");return Object(P.jsxs)("div",{className:Ve.a.column,children:[Object(P.jsx)(Ye,{children:"default"}),Object(P.jsx)(Ye,{red:!0,onClick:function(){n?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},children:"delete"}),Object(P.jsx)(Ye,{disabled:!0,children:"disabled"})]})},ze=a(116),He=a.n(ze),Ke=["type","onChange","onChangeChecked","className","spanClassName","children"],Je=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=Object(E.a)(e,Ke),c="".concat(Q.a.checkbox," ").concat(n||"");return Object(P.jsxs)("label",{children:[Object(P.jsx)("input",Object(j.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c},s)),r&&Object(P.jsx)("span",{className:Q.a.spanClassName,children:r})]})},Xe=function(){return Object(P.jsx)("div",{className:He.a.column,children:Object(P.jsx)(Je,{})})},Qe=a(71),$e=a.n(Qe);function et(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function tt(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}et("test",{x:"A",y:1});tt("test",{x:"",y:0});var at=a(117),nt=a.n(at),rt=["autoFocus","onBlur","onEnter","spanProps"],st=["children","onDoubleClick","className"],ct=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,n=e.spanProps,r=Object(E.a)(e,rt),c=Object(s.useState)(!1),i=Object(D.a)(c,2),o=i[0],l=i[1],u=n||{},d=u.children,b=u.onDoubleClick,m=u.className,p=Object(E.a)(u,st),O="".concat(nt.a.span," ").concat(m||"");return Object(P.jsx)(P.Fragment,{children:o?Object(P.jsx)(Fe,Object(j.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),a&&a()}},r)):Object(P.jsxs)("span",Object(j.a)(Object(j.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:O},p),{},{children:["\u270e ",d||r.value]}))})},it=function(){var e=Object(s.useState)(""),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(P.jsxs)("div",{className:$e.a.column,children:[Object(P.jsx)("div",{children:Object(P.jsx)(ct,{value:a,onChangeText:n,spanProps:{children:a?void 0:"enter text..."}})}),Object(P.jsxs)("div",{className:$e.a.button,children:[Object(P.jsx)(Ye,{onClick:function(){et("editable-span-value",a)},children:"save"}),Object(P.jsx)(Ye,{onClick:function(){n(tt("editable-span-value",""))},red:!0,children:"restore"})]})]})},ot=a(72),lt=a.n(ot),ut=["options","className","onChange","onChangeOption"],jt=function(e){var t=e.options,a=e.className,n=e.onChange,r=e.onChangeOption,s=Object(E.a)(e,ut),c=t?t.map((function(e,t){return Object(P.jsx)("option",{className:lt.a.option,value:e,children:e},e+"-"+t)})):[],i=lt.a.select+(a?""+a:"");return Object(P.jsx)("select",Object(j.a)(Object(j.a)({className:i,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},s),{},{children:c}))},dt=a(118),bt=a.n(dt),mt=["hello","bye","success"],pt=function(){var e=Object(s.useState)(mt[1]),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(P.jsx)("div",{className:bt.a.column,children:Object(P.jsx)(jt,{options:mt,value:a,onChangeOption:n})})},Ot=a(38),ht=a.n(Ot),_t=["type","name","className","options","value","onChange","onChangeOption"],xt=function(e){e.type;var t=e.name,a=(e.className,e.options),n=e.value,r=e.onChange,s=e.onChangeOption,c=Object(E.a)(e,_t),i=function(e){r&&r(e),s&&s(e.currentTarget.value)},o=a?a.map((function(e,a){return Object(P.jsx)("div",{className:ht.a.body,children:Object(P.jsxs)("label",{className:ht.a.label,children:[Object(P.jsx)("input",Object(j.a)({className:ht.a.radio,type:"radio",name:t,checked:e===n,value:e,onChange:i},c)),Object(P.jsx)("div",{className:ht.a.radDesign}),Object(P.jsx)("div",{className:ht.a.RadText,children:e})]},t+"-"+a)})})):[];return Object(P.jsx)(P.Fragment,{children:o})},gt=a(119),ft=a.n(gt),vt=["hello","bye","success"],Nt=function(){var e=Object(s.useState)(vt[1]),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(P.jsx)("div",{className:ft.a.column,children:Object(P.jsx)(xt,{name:"radio",options:vt,value:a,onChangeOption:n})})},Ct=a(120),Et=a.n(Ct),wt=["type","onChange","onChangeRange","className"],St=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,r=Object(E.a)(e,wt),s="".concat(Et.a.range," ").concat(n||"");return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)("input",Object(j.a)({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:s},r))})},Pt=a(121),It=a.n(Pt),yt=function(){var e=Object(s.useState)(10),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(P.jsxs)("div",{className:It.a.column,children:[Object(P.jsx)("span",{children:a}),Object(P.jsx)(St,{value:a,onChangeRange:n})]})},Tt=function(){return Object(P.jsxs)("div",{className:Re.a.test,children:[Object(P.jsx)("span",{children:"SuperInputText"}),Object(P.jsx)("div",{children:Object(P.jsx)(Ge,{})}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("span",{children:"SuperButton"}),Object(P.jsx)("div",{children:Object(P.jsx)(Ze,{})}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("span",{children:"SuperRadio"}),Object(P.jsx)("div",{children:Object(P.jsx)(Nt,{})}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("span",{children:"SuperEditableSpan"}),Object(P.jsx)("div",{children:Object(P.jsx)(it,{})}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("span",{children:"SuperSelect"}),Object(P.jsx)("div",{children:Object(P.jsx)(pt,{})}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("span",{children:"SuperCheckbox"}),Object(P.jsx)("div",{children:Object(P.jsx)(Xe,{})}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{}),Object(P.jsx)("span",{children:"SuperRange"}),Object(P.jsx)("div",{children:Object(P.jsx)(yt,{})}),Object(P.jsx)("hr",{}),Object(P.jsx)("hr",{})]})},Rt={LOGIN:"/login",REGISTRATION:"/registration",PROFILE:"/profile",RECOVERY_PASSWORD:"/recovery-password",NEW_PASSWORD:"/set-new-password/:token",TEST:"/test",HEADER:"/header",FORGOT_EMAIL:"/check-email"},kt=function(){return Object(P.jsx)("div",{children:Object(P.jsxs)(l.d,{children:[Object(P.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(P.jsx)(l.a,{to:Rt.LOGIN})}}),Object(P.jsx)(l.b,{path:Rt.LOGIN,render:function(){return Object(P.jsx)(ye,{})}}),Object(P.jsx)(l.b,{path:Rt.REGISTRATION,render:function(){return Object(P.jsx)(ae,{})}}),Object(P.jsx)(l.b,{path:Rt.PROFILE,render:function(){return Object(P.jsx)(T,{})}}),Object(P.jsx)(l.b,{path:Rt.RECOVERY_PASSWORD,render:function(){return Object(P.jsx)(we,{})}}),Object(P.jsx)(l.b,{path:Rt.NEW_PASSWORD,render:function(){return Object(P.jsx)(he,{})}}),Object(P.jsx)(l.b,{path:Rt.FORGOT_EMAIL,render:function(){return Object(P.jsx)(fe,{})}}),Object(P.jsx)(l.b,{path:Rt.TEST,render:function(){return Object(P.jsx)(Tt,{})}}),Object(P.jsx)(l.b,{render:function(){return Object(P.jsx)(L,{})}})]})})},Lt=a(12),At=a.n(Lt);function Ft(){return Object(P.jsxs)("div",{className:At.a.header,children:[Object(P.jsx)(Ce.b,{to:Rt.LOGIN,className:At.a.link,activeClassName:At.a.active,children:"Login"}),Object(P.jsx)(Ce.b,{to:Rt.REGISTRATION,className:At.a.link,activeClassName:At.a.active,children:"Registration"}),Object(P.jsx)(Ce.b,{to:Rt.RECOVERY_PASSWORD,className:At.a.link,activeClassName:At.a.active,children:"Forgot"}),Object(P.jsx)(Ce.b,{to:Rt.FORGOT_EMAIL,className:At.a.link,activeClassName:At.a.active,children:"Check"}),Object(P.jsx)(Ce.b,{to:Rt.NEW_PASSWORD,className:At.a.link,activeClassName:At.a.active,children:"NewPassword"}),Object(P.jsx)(Ce.b,{to:Rt.PROFILE,className:At.a.link,activeClassName:At.a.active,children:"Profile"}),Object(P.jsx)(Ce.b,{to:Rt.TEST,className:At.a.link,activeClassName:At.a.active,children:"Test"})]})}var Mt=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth.isInitialized}));return Object(s.useEffect)((function(){e((function(e){m().then((function(t){e(N(!0)),e({type:"APP/USER-DATA",userData:t.data}),t.data.error?C(t.data.error):C(null)})).catch((function(t){e(N(!0)),t.response?C(t.response.data.error):C(null)}))}))}),[e]),t?Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(Ft,{}),Object(P.jsx)(kt,{})]}):Object(P.jsx)("div",{children:"...Loading"})},Dt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,251)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))},Gt=a(57),Wt=a(122),Vt=Object(Gt.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.isLoggedIn});case"APP/INITIALIZE-APP":return Object(j.a)(Object(j.a)({},e),{},{isInitialized:t.isInitialized});case"APP/SET_AUTH_ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/USER-DATA":return Object(j.a)(Object(j.a)({},e),{},{meObject:t.userData});default:return e}},recovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVERY/CHECK-MAIL-PAGE":return Object(j.a)(Object(j.a)({},e),{},{toCheckEmailPage:t.toCheckEmailPage});case"RECOVERY/SET-MAIL-NAME":return Object(j.a)(Object(j.a)({},e),{},{setMailName:t.setMailName});case"RECOVERY/LOGIN-PAGE":return Object(j.a)(Object(j.a)({},e),{},{toLoginPage:t.toLoginPage});case"RECOVERY/BUTTON-DISABLE":return Object(j.a)(Object(j.a)({},e),{},{buttonDisable:t.disable});case"RECOVERY/LOADING-SHOW":return Object(j.a)(Object(j.a)({},e),{},{loading:t.loading});default:return e}}}),Bt=Object(Gt.c)(Vt,Object(Gt.a)(Wt.a)),qt=Bt;window.store=Bt,o.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(Ce.a,{children:Object(P.jsx)(u.a,{store:qt,children:Object(P.jsx)(Mt,{})})})}),document.getElementById("root")),Dt()},26:function(e,t,a){e.exports={group:"Input_group__2sms0",input:"Input_input__15Muy",bar:"Input_bar__2JMci",highlight:"Input_highlight__2T5aX",inputHighlighter:"Input_inputHighlighter__15Jte",passwordControl:"Input_passwordControl__EfWCk",showPassword:"Input_showPassword__31eN-",hidePassword:"Input_hidePassword__3pgZ_",label:"Input_label__MaPCx"}},27:function(e,t,a){e.exports={containerForm:"AuthLogin_containerForm__22l5H",formWrapper:"AuthLogin_formWrapper__3iTus",linkForgotPassword:"AuthLogin_linkForgotPassword__1Z9eL",buttonInner:"AuthLogin_buttonInner__1IStY",blockSingUp:"AuthLogin_blockSingUp__3Gqo2",formText:"AuthLogin_formText___R6ry",linkSingUp:"AuthLogin_linkSingUp__oC48c"}},31:function(e,t,a){e.exports={btn:"Button_btn__V5JXr",small:"Button_small__1cL16",medium:"Button_medium__1sup1",big:"Button_big__1lnjB",default:"Button_default__2iAg6",primary:"Button_primary__1CrSj",secondary:"Button_secondary__2uksu"}},32:function(e,t,a){e.exports={containerForm:"CheckEmail_containerForm__1UAVz",formWrapper:"CheckEmail_formWrapper__16g94",formTitle:"CheckEmail_formTitle__2PO7i",imgMail:"CheckEmail_imgMail__mkvqv",formSubTitle:"CheckEmail_formSubTitle__2ESPm",textCheckEmail:"CheckEmail_textCheckEmail__3ErsG"}},37:function(e,t,a){e.exports={label:"SuperCheckbox_label__1SRJc",checkbox:"SuperCheckbox_checkbox__3lCk1"}},38:function(e,t,a){e.exports={body:"SuperRadio_body__24mnf",label:"SuperRadio_label__fP36O",radio:"SuperRadio_radio__3Bl2z",radDesign:"SuperRadio_radDesign__1ZCgs",RadText:"SuperRadio_RadText__Gf7qk"}},43:function(e,t,a){e.exports={containerForm:"AuthRegistr_containerForm__1AFIX",formWrapper:"AuthRegistr_formWrapper__1LxcW",btnInner:"AuthRegistr_btnInner__ODTD8"}},44:function(e,t,a){e.exports={input:"SuperInputText_input__2B_JM",superInput:"SuperInputText_superInput__LSDRp",errorInput:"SuperInputText_errorInput__1YSg1",error:"SuperInputText_error__TR8XN"}},56:function(e,t,a){e.exports={default:"SuperButton_default__1jW8B",red:"SuperButton_red__xgypa"}},71:function(e,t,a){e.exports={column:"TestSuperEditableSpan_column__2CGzG",button:"TestSuperEditableSpan_button__3S5Mp"}},72:function(e,t,a){e.exports={select:"SuperSelect_select__1CMrg",option:"SuperSelect_option__2sQgI"}},73:function(e,t,a){}},[[250,1,2]]]);
//# sourceMappingURL=main.92e76f9d.chunk.js.map