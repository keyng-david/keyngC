import{H as A,B as W,d as D,r as c,c as p,a as e,e as k,t as _,w,v as b,F as T,f as P,k as B,i as q,N as n,o as f,p as K,h as R,_ as H}from"./index-CCdiR9uF.js";import{U as I}from"./userService-D30zbh9R.js";class M extends A{constructor(){super(W+"/currency")}async getList(){const o=await this.get("/list");if(o.isOk())return o.value.result;throw o.error}}const r=m=>(K("data-v-c411aaac"),m=m(),R(),m),Y=r(()=>e("div",{class:"mx-auto page_information flex-center flex-column text-center"},[e("h1",{class:"text-color fs-large fw-bold"},"Swap & Transfer"),e("p",{class:"description-color fs-small fw-bold mt-3"}," In this section you can convert your coins to other currencies ")],-1)),j={class:"section_transfer mt-5"},O={class:"box-shadow bg-card p-3 rounded-1"},z={class:"d-flex flex-column"},G=r(()=>e("span",{class:"fs-small text-color fw-bold"},"Transfer",-1)),J={class:"fs-secondary-small description-color fw-normal mt-1"},Q={class:"d-flex flex-column mt-1"},X={class:"d-flex flex-column mt-2 profile_transfer_input bg-card box-shadow rounded-1 p-2"},Z=r(()=>e("label",{for:"count_coin",class:"fs-secondary-small description-color fw-bold"},"Count Coin",-1)),ee={class:"d-flex flex-column mt-2 profile_transfer_input bg-card box-shadow rounded-1 p-2"},se=r(()=>e("label",{for:"user_id",class:"fs-secondary-small description-color fw-bold"},"user id",-1)),te={class:"section_swap mt-3"},oe={class:"bg-card p-3 rounded-1 box-shadow"},le={class:"d-flex flex-column"},ne=r(()=>e("span",{class:"fs-small text-color fw-bold"},"Swap Coin",-1)),re={class:"fs-secondary-small description-color fw-normal mt-1"},ae={class:"d-flex flex-column mt-3"},ie={class:"d-flex flex-column profile_transfer_input bg-card box-shadow rounded-1 p-2"},ce=r(()=>e("span",{class:"fs-secondary-small description-color fw-bold"},"Select Currency",-1)),de={class:"mt-1"},ue={key:0},pe={class:"currency_list"},fe=["onClick"],me=["src"],ve={class:"ml-1 fs-small fw-bold text-color"},_e=["src"],he={class:"ml-1 fs-small fw-bold text-color"},we={class:"d-flex flex-column mt-2 profile_transfer_input bg-card box-shadow rounded-1 p-2"},be=r(()=>e("label",{for:"wallet_address",class:"fs-secondary-small description-color fw-bold"},"wallet address",-1)),xe={class:"d-flex flex-column mt-2 profile_transfer_input bg-card box-shadow rounded-1 p-2"},ye=r(()=>e("label",{for:"swap_coin",class:"fs-secondary-small description-color fw-bold"},"Count Coin",-1)),ge={key:0,class:"description-color fs-small fw-bold mt-3"},Ce=r(()=>e("div",{class:"line mt-4"},null,-1)),Se=r(()=>e("div",{class:"description mt-2"},[e("p",{class:"description-color fs-secondary-small fw-normal"}," The operation of converting coins to other currencies is irreversible. Please fill in the values ​​carefully. Before doing this, read our terms and conditions because we have no responsibility for not reading them. ")],-1)),Ee=D({__name:"Swap",setup(m){const{createNotification:o}=q("notification"),a=c(),i=c(null),x=c(!1),d=c(),y=c(""),u=c(),v=c(),C=c(new Array),U=new I,F=new M,L=()=>{new I().profile().then(s=>a.value=s),F.getList().then(s=>{C.value=s,s.length>0&&(i.value=s[0])})},$=()=>{if(!a.value||!d.value){o({title:"Input Error",description:"Please fill all the fields correctly",type:n.Exception});return}if(a.value.balanceCoin<d.value){o({title:"Balance Error",description:"Balance is not enough",type:n.Exception});return}if(d.value<1e7){o({title:"Count Error",description:"The minimum amount is 10,000,000 coins",type:n.Exception});return}if(!y.value.toLowerCase().startsWith("t")){o({title:"Wallet Error",description:"Wallet Address is not valid (Trc20)",type:n.Exception});return}o({title:"Comming Soon",description:"This section will be completed soon",type:n.Information})},g=l=>{const s=["0","1","2","3","4","5","6","7","8","9","."],h=l.key;s.includes(h)||l.preventDefault(),S()},S=()=>!i.value||!d.value?"0":d.value/2e5*i.value.price,N=()=>{if(a.value){if(!u.value||u.value==0||!v.value||v.value==0){o({title:"Input Error",description:"Please fill all the fields correctly",type:n.Exception});return}if(a.value.balanceCoin<u.value){o({title:"Balance Error",description:"Balance is not enough",type:n.Exception});return}if(u.value<1e4){o({title:"Count Error",description:"The minimum amount is 1000 coins",type:n.Exception});return}o({title:"please wait",description:"The request is in progress ...",type:n.Waiting}),U.transfer(u.value,v.value).then(l=>{a.value=l,o({title:"Transfer Successlly",description:"Coins have been successfully sent to the user",type:n.Success})}).catch(l=>{if(l.responseStatus==400){o({title:"Balance Error",description:"Balance is not enough",type:n.Exception});return}else if(l.responseStatus==404){o({title:"User Id Invalid",description:"Can not found user with this id",type:n.Exception});return}o({title:"Transfer Error",description:"Can not Transfer now",type:n.Exception})})}};return L(),(l,s)=>{var h,E;return f(),p(T,null,[Y,e("section",j,[e("div",O,[e("div",z,[G,e("span",J,[k("Your Balance Is "),e("b",null,_(l.$filters.numberFormat(((h=a.value)==null?void 0:h.balanceCoin)??0)),1)])]),e("div",Q,[e("div",X,[Z,w(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>u.value=t),onKeypress:s[1]||(s[1]=t=>g(t)),id:"count_coin",placeholder:"10,000 Minimal",type:"number",class:"fs-small text-color fw-bold mt-1"},null,544),[[b,u.value,void 0,{number:!0}]])]),e("div",ee,[se,w(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>v.value=t),onKeypress:s[3]||(s[3]=t=>g(t)),id:"user_id",placeholder:"19817281",type:"number",class:"fs-small text-color fw-bold mt-1"},null,544),[[b,v.value,void 0,{number:!0}]])]),e("button",{onClick:N,class:"bg-theme text-color mt-3 fs-medium p-2 fw-bold rounded-1"}," Transfer ")])])]),e("div",te,[e("div",oe,[e("div",le,[ne,e("span",re,[k("Your Balance Is "),e("b",null,_(l.$filters.numberFormat(((E=a.value)==null?void 0:E.balanceCoin)??0)),1)])]),e("div",ae,[e("div",ie,[ce,e("ul",de,[x.value?(f(),p("li",ue,[e("ul",pe,[(f(!0),p(T,null,P(C.value,(t,V)=>(f(),p("li",{key:V,class:"d-flex align-items-center py-2",onClick:ke=>{i.value=t,x.value=!1}},[e("img",{width:"25px",src:l.$filters.serverLinkFormat(t.image),alt:""},null,8,me),e("span",ve,_(t.name),1)],8,fe))),128))])])):i.value?(f(),p("li",{key:1,onClick:s[4]||(s[4]=t=>x.value=!0),class:"d-flex align-items-center py-2"},[e("img",{width:"25px",src:l.$filters.serverLinkFormat(i.value.image),alt:""},null,8,_e),e("span",he,_(i.value.name),1)])):B("",!0)])]),e("div",we,[be,w(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>y.value=t),id:"wallet_address",placeholder:"Trx Wallet Address",type:"text",class:"fs-small text-color fw-bold mt-1"},null,512),[[b,y.value]])]),e("div",xe,[ye,w(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>d.value=t),onKeypress:s[7]||(s[7]=t=>g(t)),id:"swap_coin",placeholder:"Count Coin For Swap",type:"number",class:"fs-small text-color fw-bold mt-1"},null,544),[[b,d.value,void 0,{number:!0}]])]),i.value?(f(),p("span",ge," To Doller = $"+_(l.$filters.numberFormat(S())),1)):B("",!0),e("button",{onClick:$,class:"bg-theme text-color mt-3 fs-medium p-2 fw-bold rounded-1"}," swap "),Ce,Se])])])],64)}}}),Ie=H(Ee,[["__scopeId","data-v-c411aaac"]]);export{Ie as default};