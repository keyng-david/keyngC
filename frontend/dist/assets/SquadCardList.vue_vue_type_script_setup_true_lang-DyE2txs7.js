import{_ as h}from"./coin-C5JkormZ.js";import{d as f,o as e,c as t,a,j as r,t as i,e as u,y as q,p as k,h as g,_ as y,k as v,F as m,f as p,g as w}from"./index-CCdiR9uF.js";import{S as c}from"./SkeletonLoader-SVX6hzMk.js";const x=o=>(k("data-v-bae110fe"),o=o(),g(),o),S={class:"flex-center"},$={class:"squad_profile d-flex mr-3"},C=["src"],b={class:"d-flex flex-column"},F={key:0,class:"text-color fs-small fw-bold"},L={class:"description-color fs-small fw-normal mt-2"},B={key:0,class:"d-flex align-items-center"},I={class:"d-flex align-items-center mr-3"},N=x(()=>a("img",{class:"mr-1",width:"15px",src:h,alt:""},null,-1)),V={class:"d-flex align-items-center"},j=["src"],D=f({__name:"SquadCard",props:{squad:{}},setup(o){const d=()=>{n.squad&&q.push({name:"squad_detail",params:{id:n.squad.id}})},n=o;return(s,l)=>(e(),t("div",{onClick:d,class:"squad_card py-3 w-full d-flex align-items-center justify-content-between"},[a("div",S,[a("div",$,[s.squad?(e(),t("img",{key:0,class:"rounded-circle w-full h-full",src:s.$filters.serverLinkFormat(s.squad.image),alt:""},null,8,C)):(e(),r(c,{key:1,width:"55px",height:"55px"}))]),a("div",b,[s.squad?(e(),t("span",F,i(s.$filters.truncate(s.squad.name,30)),1)):(e(),r(c,{key:1,width:"200px",height:"20px"})),a("span",L,[s.squad?(e(),t("div",B,[a("div",I,[N,u(" "+i(s.$filters.numberFormat(s.squad.balanceCoin)),1)]),a("div",V,[a("img",{class:"mr-1",width:"15px",src:s.$filters.serverLinkFormat(s.squad.league.image),alt:""},null,8,j),u(" "+i(s.squad.league.name),1)])])):(e(),r(c,{key:1,width:"100px",height:"20px"}))])])])]))}}),_=y(D,[["__scopeId","data-v-bae110fe"]]),E={class:"flex-center flex-column"},T={key:0,class:"flex-center py-3"},z=a("span",{class:"text-color fs-small fw-bold"},"Can not found squads",-1),A=[z],K=f({__name:"SquadCardList",props:{squads:{}},setup(o){return(d,n)=>(e(),t("div",E,[d.squads&&d.squads.length==0?(e(),t("div",T,A)):v("",!0),d.squads?(e(!0),t(m,{key:1},p(d.squads,(s,l)=>(e(),r(_,{key:l,squad:s},null,8,["squad"]))),128)):(e(),t(m,{key:2},p([null,null,null],(s,l)=>w(_,{key:l,squad:s},null,8,["squad"])),64))]))}});export{K as _};