!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=function(){let e=[];return{projectConstructor:(e,t=[])=>({title:e,tasks:t}),projects:e,setCurrentProject:e=>{n.currentProject=e},deleteProject:e=>{let t=n.projects.indexOf(e);n.projects.splice(t,1)},checkIfNameExists:t=>e.some(e=>e.title==t)}}();var i=n;var s={taskConstructor:(e,t,r,n,i=!1,s=!0)=>({title:e,description:t,dueDate:r,priority:n,isFinished:i,hidden:s}),deleteTask:e=>{let t=i.currentProject.tasks.indexOf(e);i.currentProject.tasks.splice(t,1)},finishTask:e=>{e.isFinished=!0},unfinishTask:e=>{e.isFinished=!1}};const c={buildProject:(e,t=[])=>{let r=i.projectConstructor(e,t);i.setCurrentProject(r),i.projects.push(r)},buildTask:(e,t,r,n,c=!1)=>{let o=s.taskConstructor(e,t,r,n,c);i.currentProject.tasks.push(o)},init:()=>{c.buildProject("Test empty"),c.buildTask("Sleep","Get a good night of sleep","25.01.2001","Low",!0),c.buildProject("New Project"),c.buildTask("Clean the dishes","clean dishes after the party","15.01.2020","High"),c.buildTask("Work out","Do a few excercises from my program","15.01.2020","Medium"),c.buildTask("Sleep","Get a good night of sleep","25.01.2020","Low"),l.renderAll()},switchProject:e=>{let t=i.projects.filter(t=>t.title==e.innerText)[0];i.setCurrentProject(t)},toggleTaskStatus:e=>{switch(e.isFinished){case!0:s.unfinishTask(e);break;case!1:s.finishTask(e)}},updateLocalStorage:()=>{localStorage.setItem("localProjects",JSON.stringify(i.projects)),localStorage.setItem("currentProject",JSON.stringify(i.currentProject))}};var o=c;var l=function(){const e=document.querySelector("#projectDiv"),t=document.querySelector("#taskDiv"),r=document.querySelector(".modal"),n=document.querySelector(".addButton"),c=document.querySelector(".formInput"),l=document.querySelector("#projectAdd"),a=(document.querySelector("#taskAdd"),()=>{r.style.height="0px",c.style.height="0px",c.style.padding="0",n.style.opacity="0"}),d=t=>{t.forEach(t=>{let r=document.createElement("div"),n=document.createElement("p"),s=document.createElement("i");r.classList.add("nameDiv"),s.classList.add("fas","fa-trash","projectDel"),n.classList.add("projectName"),n.innerText=t.title,r.appendChild(n),r.appendChild(s),e.appendChild(r),n.addEventListener("click",(function(){o.switchProject(n),k(),a()})),s.addEventListener("click",(function(){i.deleteProject(t),i.setCurrentProject(i.projects[i.projects.length-1]),k()}))})},u=(e,t)=>{e.forEach(e=>e.style.display=t)},p=e=>{let t=document.createElement("i"),r=document.createElement("i"),n=document.createElement("i");n.classList.add("fas","fa-caret-right","expandIcon"),t.classList.add("fas","fa-times","closeIcon"),r.classList.add("fas","fa-check"),e.appendChild(t),e.appendChild(r),e.appendChild(n);let c=(e=>{let t=e.querySelector("h3").innerText;return i.currentProject.tasks.filter(e=>e.title==t)[0]})(e);t.addEventListener("click",()=>{s.deleteTask(c),k()}),r.addEventListener("click",()=>{o.toggleTaskStatus(c),k()}),n.addEventListener("click",()=>{let t=e.querySelectorAll(".hideable"),r=e.querySelectorAll(".smallInfo");((e,t,r)=>{0==e.hidden?(u(t,"none"),e.hidden=!0):(u(t,"block"),u(r,"inline-block"),e.hidden=!1)})(c,t,r)})},f=(e,t,r)=>{let n;switch(e){case"title":n=document.createElement("h3"),n.innerText=t[e];break;case"description":n=document.createElement("p"),n.classList.add("description","hideable"),n.innerText=t[e];break;case"dueDate":n=document.createElement("p"),n.classList.add("dueDate","smallInfo","hideable"),n.innerText=`Due: ${t[e]}`;break;case"priority":n=document.createElement("p"),n.classList.add("priority","smallInfo","hideable"),n.innerText=`Priority: ${t[e]}`;break;case"isFinished":n=document.createElement("p"),n.classList.add("isDone","smallInfo","hideable"),1==t[e]?n.innerText="Done":n.innerText="In Progress"}return n},h=r=>{r.tasks.forEach(r=>{let n=document.createElement("div");n.classList.add("task");for(const e in r){if("hidden"==e||"isFinished"==e)continue;let t=f(e,r);n.appendChild(t)}((e,t)=>{let r=t.querySelectorAll(".hideable"),n=t.querySelectorAll(".smallInfo");e.hidden?u(r,"none"):(u(r,"block"),u(n,"inline-block")),e.isFinished?t.classList.add("finished"):t.classList.remove("finished")})(r,n),p(n),(e=>{if(!e.querySelector(".taskAdd")){let t=document.createElement("button");t.textContent="New Task",t.classList.add("taskAdd"),e.appendChild(t)}})(e),t.appendChild(n)})},m=(e,t)=>{document.querySelectorAll(t).forEach(t=>e.removeChild(t))},k=()=>{m(e,".nameDiv"),m(t,".task"),h(i.currentProject),d(i.projects),o.updateLocalStorage()};return l.addEventListener("click",()=>{r.style.height="100px",c.style.height="10px",c.style.padding="15px 10px",n.style.opacity="100"}),n.addEventListener("click",()=>{i.checkIfNameExists(c.value)||""==c.value||(o.buildProject(c.value),k(),a())}),{renderProjects:d,renderTasks:h,renderAll:k}}();o.init()}]);