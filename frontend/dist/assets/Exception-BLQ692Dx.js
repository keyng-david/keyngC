import{d as r,c as o,a as s,u as a,s as n,x as i,o as t}from"./index-CCdiR9uF.js";const m="/assets/except_access-51tdV4Ry.png",p="/assets/except_found-D8M6PxLD.png",f="/assets/except_server-B3AC4iO2.png",x={class:"section_exception text-center"},_={class:"bg-card box-shadow rounded-1 py-5 px-3"},u={key:0,class:"flex-center flex-column"},v=n('<div class="flex-center"><img width="150px" src="'+m+'" alt=""></div><div class="flex-center flex-column mt-5"><span class="text-color fs-secondary-medium fw-bold">401 - Access Error</span><span class="description-color fs-small fw-bold mt-3">Leave the desktop. Mobile gaming rocks!</span></div>',2),h=[v],b={key:1,class:"flex-center flex-column"},w=n('<div class="flex-center"><img width="150px" src="'+p+'" alt=""></div><div class="flex-center flex-column mt-5"><span class="text-color fs-secondary-medium fw-bold">404 - Not Found</span><span class="description-color fs-small fw-bold mt-3">Can not found page or object in server</span></div>',2),g=s("span",{class:"text-color fs-medium fw-bold"},"Back To Home",-1),k=[g],y={key:2,class:"flex-center flex-column"},B=n('<div class="flex-center"><img width="150px" src="'+f+'" alt=""></div><div class="flex-center flex-column mt-5"><span class="text-color fs-secondary-medium fw-bold">500 - Internal Server</span><span class="description-color fs-small fw-bold mt-3"> An unknown problem has occurred on the server side </span></div>',2),C=s("span",{class:"text-color fs-medium fw-bold"},"Back To Home",-1),$=[C],S=r({__name:"Exception",setup(A){const c=i().params.status.toString();return(l,e)=>(t(),o("div",x,[s("div",_,[a(c)=="401"?(t(),o("div",u,h)):a(c)=="404"?(t(),o("div",b,[w,s("div",{onClick:e[0]||(e[0]=d=>l.$router.push({name:"index"})),class:"bg-theme p-2 rounded-1 box-shadow w-full flex-center mt-5"},k)])):(t(),o("div",y,[B,s("div",{onClick:e[1]||(e[1]=d=>l.$router.push({name:"index"})),class:"bg-theme p-2 rounded-1 box-shadow w-full flex-center mt-5"},$)]))])]))}});export{S as default};