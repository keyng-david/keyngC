import{H as o,B as a}from"./index-CCdiR9uF.js";class l extends o{constructor(){super(a+"/user")}getUserFromStorage(){const r=localStorage.getItem("user");if(r)try{const e=JSON.parse(r),t=Math.ceil((new Date().getTime()-new Date(e.lastClickDate).getTime())/1e3);return e.availableEnergy=Math.min(e.availableEnergy+t*e.rechargeEnergyLevel.value,e.limitEnergyLevel.value),e}catch(e){console.log(e)}}async transfer(r,e){const t=await this.post("/transfer",{userId:e,count:r});if(t.isOk()){const s=t.value.result;return localStorage.setItem("user",JSON.stringify(s)),s}throw t.error}async profile(){const r=this.getUserFromStorage();if(console.log(r),r)return r;const e=await this.get("");if(e.isOk()){const t=e.value.result;return localStorage.setItem("user",JSON.stringify(t)),t}throw e.error}async getMembers(r="",e=50,t=1){const s=await this.get(`/members?query=${r}&size=${e}&page=${t}`);if(s.isOk())return s.value;throw s.error}}export{l as U};
