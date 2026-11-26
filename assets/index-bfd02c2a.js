import{s as a}from"./index-36fdd6cd.js";const e=async e=>{let s=await a.post("/admin/config/sync_user",e);return 0===s.data.code?s.data:Promise.reject(new Error(s.data.message))};export{e as S};
