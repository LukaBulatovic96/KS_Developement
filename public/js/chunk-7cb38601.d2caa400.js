(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cb38601"],{"107f":function(e,t,s){"use strict";s("1fa3")},"1fa3":function(e,t,s){},a55b:function(e,t,s){"use strict";s.r(t);var a=s("7a23");Object(a["w"])("data-v-0ffd8964");var o={class:"row"},r={class:"card mx-auto"},n=Object(a["g"])("div",{class:"card-header"},[Object(a["g"])("h4",null,"Login")],-1),c={class:"card-body"},u={class:"form-group"},d=Object(a["g"])("label",{for:"username"},"Username",-1),l={class:"form-group"},i=Object(a["g"])("label",{for:"password"},"Password",-1),b=Object(a["g"])("div",{class:"form-group"},[Object(a["g"])("input",{type:"submit",class:"btn btn-primary",value:"Login"})],-1);function p(e,t,s,p,f,O){return Object(a["t"])(),Object(a["f"])("div",o,[Object(a["g"])("div",r,[n,Object(a["g"])("div",c,[Object(a["g"])("form",{onSubmit:t[2]||(t[2]=Object(a["M"])((function(){return O.loginUser&&O.loginUser.apply(O,arguments)}),["prevent"]))},[Object(a["g"])("div",u,[d,Object(a["L"])(Object(a["g"])("input",{class:"form-control",type:"text",placeholder:"Username",name:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return f.username=e}),id:"username"},null,512),[[a["I"],f.username]])]),Object(a["g"])("div",l,[i,Object(a["L"])(Object(a["g"])("input",{class:"form-control",type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return f.password=e}),id:"password"},null,512),[[a["I"],f.password]])]),b],32)])])])}Object(a["u"])();var f=s("5530"),O=s("5502"),m={data:function(){return{username:"",password:""}},methods:Object(f["a"])(Object(f["a"])({},Object(O["b"])(["login"])),{},{loginUser:function(){var e=this,t={username:this.username,password:this.password};this.login(t).then((function(t){t.data.success&&(console.log("LOOOOOOOG"),console.log(t.data.user.type),"admin"==t.data.user.type?e.$router.push("/results"):e.$router.push("/profile"))})).catch((function(e){console.log(e)}))}}),beforeCreate:function(){document.body.className="other"}};s("107f");m.render=p,m.__scopeId="data-v-0ffd8964";t["default"]=m}}]);
//# sourceMappingURL=chunk-7cb38601.d2caa400.js.map