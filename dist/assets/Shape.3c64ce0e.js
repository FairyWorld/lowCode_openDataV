var vt=Object.defineProperty;var K=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,_t=Object.prototype.propertyIsEnumerable;var U=(t,n,e)=>n in t?vt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,R=(t,n)=>{for(var e in n||(n={}))gt.call(n,e)&&U(t,e,n[e]);if(K)for(var e of K(n))_t.call(n,e)&&U(t,e,n[e]);return t};import{q as N,I as Z,J as V,K as wt,L as Dt,M,N as tt,O as Q,P as et,Q as bt,h as St,R as m,d as zt,i as O,r as P,S as Lt,a as Et,T as Pt,w as X,U as A,V as $,W as Y,X as kt,z as H,F as It,f as Rt}from"./index.b31e1272.js";import{e as Mt}from"./useEventBus.96114f8d.js";const C=N(),At=Z({id:"compose",state:()=>({style:{top:0,left:0,width:0,height:0},components:[]}),getters:{canCompose(){return this.components.length>1}},actions:{isActived(t){return this.components.findIndex(n=>n.id===t.id)!==-1},setAreaData(t,n){this.style=t||{},this.components=n||[]},appendComponent(t){this.components.findIndex(n=>n.id===t.id)===-1&&(this.components.push(t),this.components.length>1&&(this.style=R(R({},this.style),V(this.components))))},compose(){this.style.width===0&&(this.style=R(R({},this.style),V(this.components)));const t=wt.Group,n=new t;for(const s in this.style)n.change(s,this.style[s]);n.addComponent(this.components,!0),Dt(n),this.batchDeleteComponent(this.components),C.appendComponent(n);const e=C.componentData.length-1;C.setCurComponent(C.componentData[e],e.toString()),this.components=[]},batchDeleteComponent(t){t.forEach(n=>{for(let e=0,s=C.componentData.length;e<s;e++)if(n.id===C.componentData[e].id){C.componentData.splice(e,1);break}})},flushRight(){const{right:t,items:n}=M(this.components);n.forEach(e=>{const s=t-e.right;e.component.change("left",e.component.positionStyle.left+s)}),C.saveComponentData()},flushLeft(){const{left:t,items:n}=M(this.components);n.forEach(e=>{const s=e.left-t;e.component.change("left",e.component.positionStyle.left-s)}),C.saveComponentData()},flushTop(){const{top:t,items:n}=M(this.components);n.forEach(e=>{const s=e.top-t;e.component.change("top",e.component.positionStyle.top-s)}),C.saveComponentData()},flushBottom(){const{bottom:t,items:n}=M(this.components);n.forEach(e=>{const s=t-e.bottom;e.component.change("top",e.component.positionStyle.top+s)}),C.saveComponentData()},flushRow(){const{top:t,bottom:n,items:e}=M(this.components);e.forEach(s=>{const c=(n+t)/2-s.center.y;s.component.change("top",s.component.positionStyle.top+c)}),C.saveComponentData()},flushColumn(){const{left:t,right:n,items:e}=M(this.components);e.forEach(s=>{const c=(t+n)/2-s.center.x;s.component.change("left",s.component.positionStyle.left+c)}),C.saveComponentData()}}}),Tt=()=>At(tt),Xt=Z({id:"copy",state:()=>({copyData:void 0,isCut:!1}),actions:{copy(t){this.copyData=Q(t),this.copyData.parent=void 0,this.copyData.groupStyle=void 0,et(JSON.stringify(this.copyData.toJson()))},paste(t,n,e){if(!this.copyData){bt.info("\u8BF7\u9009\u62E9\u7EC4\u4EF6");return}const s=N();t?(this.copyData.change("top",e),this.copyData.change("left",n)):(this.copyData.change("top",this.copyData.style.top+10),this.copyData.change("left",this.copyData.style.left+10));const c=Q(this.copyData);c.id=St(),s.appendComponent(c)}}});function Yt(){return Xt(tt)}const Bt={lt:Wt,t:jt,rt:Jt,r:Ft,rb:qt,b:Nt,lb:Ht,l:Ot};function L(t){const{top:n,left:e,height:s,width:c}=t;return{y:n+s/2,x:e+c/2}}function nt(t,n,e){return t*(e-n.x)+n.y}function ot(t,n,e){return n.x-(n.y-e)/t}function Wt(t,n){const{top:e,left:s,rotate:c,width:u,height:d}=t,h=L(t),l={x:s+u,y:e+d},i=m(l,h,c),a={x:(i.x+n.x)/2,y:(i.y+n.y)/2},f=m(n,a,-c),y=m(i,a,-c),x=y.y-f.y,g=y.x-f.x;return{top:f.y,left:f.x,width:g,height:x}}function Ot(t,n){const{left:e,rotate:s,width:c,height:u,top:d}=t,h=L(t),l={x:e+c,y:d+u/2},i=m(l,h,s);if(s%180!=90){const g=(h.y-i.y)/(h.x-i.x),E=nt(g,h,n.x);n.y=E}else n.x=h.x;const a={x:(i.x+n.x)/2,y:(i.y+n.y)/2},f=m(n,a,-s),x=m(i,a,-s).x-f.x;return{top:a.y-u/2,left:f.x,width:x,height:u}}function Ht(t,n){const{top:e,left:s,rotate:c,width:u}=t,d=L(t),h={x:s+u,y:e},l=m(h,d,c),i={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=m(n,i,-c),f=m(l,i,-c),y=a.y-f.y,x=f.x-a.x;return{top:a.y-y,left:a.x,width:x,height:y}}function Nt(t,n){const{top:e,left:s,rotate:c,width:u}=t,d=L(t),h={x:s+u/2,y:e},l=m(h,d,c);if(c%180!=90){const x=(d.y-l.y)/(d.x-l.x),g=ot(x,d,n.y);n.x=g}else n.y=d.y;const i={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=m(n,i,-c),f=m(l,i,-c),y=a.y-f.y;return{top:a.y-y,left:i.x-u/2,width:u,height:y}}function jt(t,n){const{top:e,left:s,rotate:c,width:u,height:d}=t,h=L(t),l={x:s+u/2,y:e+d},i=m(l,h,c);if(c%180!=90){const g=(h.y-i.y)/(h.x-i.x),E=ot(g,h,n.y);n.x=E}else n.y=h.y;const a={x:(i.x+n.x)/2,y:(i.y+n.y)/2},f=m(n,a,-c),x=m(i,a,-c).y-f.y;return{top:f.y,left:a.x-u/2,width:u,height:x}}function Jt(t,n){const{top:e,left:s,rotate:c,height:u}=t,d=L(t),h={x:s,y:e+u},l=m(h,d,c),i={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=m(n,i,-c),f=m(l,i,-c),y=f.y-a.y,x=a.x-f.x;return{top:a.y,left:f.x,width:x,height:y}}function qt(t,n){const{top:e,left:s,rotate:c}=t,u=L(t),h=m({x:s,y:e},u,c),l={x:(h.x+n.x)/2,y:(h.y+n.y)/2},i=m(n,l,-c),a=m(h,l,-c),f=i.y-a.y,y=i.x-a.x;return{top:a.y,left:a.x,width:y,height:f}}function Ft(t,n){const{top:e,left:s,rotate:c,height:u}=t,d=L(t),h={x:s,y:e+u/2},l=m(h,d,c);if(c%180!=90){const x=(d.y-l.y)/(d.x-l.x),g=nt(x,d,n.x);n.y=g}else n.x=d.x;const i={x:(l.x+n.x)/2,y:(l.y+n.y)/2},a=m(n,i,-c),f=m(l,i,-c),y=a.x-f.x;return{top:f.y-u/2,left:f.x,width:y,height:u}}function Gt(t,n,e){const{top:s,left:c,width:u,height:d}=Bt[t](n,e);return{top:Math.round(s),left:Math.round(c),width:Math.round(u),height:Math.round(d)}}const Kt="_shape_s93dy_1",Ut="_error-info_s93dy_7",Vt="_active_s93dy_12",Qt="_shape-point_s93dy_16",$t="_rotation_s93dy_21",Zt="_icon-jiesuo_s93dy_33",te="_lt_s93dy_39",ee="_rotate-0_s93dy_39",ne="_rb_s93dy_40",oe="_l_s93dy_39",se="_rotate-45_s93dy_41",re="_r_s93dy_21",ce="_lb_s93dy_43",ie="_rotate-90_s93dy_43",ae="_rt_s93dy_44",le="_t_s93dy_45",fe="_rotate-135_s93dy_45",ue="_b_s93dy_46",k={shape:Kt,"error-info":"_error-info_s93dy_7",errorInfo:Ut,active:Vt,"shape-point":"_shape-point_s93dy_16",shapePoint:Qt,rotation:$t,"icon-jiesuo":"_icon-jiesuo_s93dy_33",iconJiesuo:Zt,lt:te,"rotate-0":"_rotate-0_s93dy_39",rotate0:ee,rb:ne,l:oe,"rotate-45":"_rotate-45_s93dy_41",rotate45:se,r:re,lb:ce,"rotate-90":"_rotate-90_s93dy_43",rotate90:ie,rt:ae,t:le,"rotate-135":"_rotate-135_s93dy_45",rotate135:fe,b:ue},pe=zt({props:{active:{type:Boolean,default:!1},isInner:{type:Boolean,default:!1},info:Object,defaultStyle:Object,index:Number},setup(t,{slots:n}){const e=N(),s=Tt(),c=Yt(),u=()=>{c.copy(e.curComponent)},d=()=>{e.removeComponent(t.index,t.info.parent)},h=()=>{e.upComponent(t.index,t.info.parent)},l=()=>{e.downComponent(t.index,t.info.parent)},i=()=>{e.topComponent(t.index,t.info.parent)},a=()=>{const o=e.curComponent.id;et(o)},f=()=>{e.bottomComponent(t.index,t.info.parent)},y=()=>{e.decompose()},x=(o,r)=>{var p;if(e.curComponent&&e.curComponent.id===t.info.id)r.stopPropagation();else if(!e.curComponent&&!t.info.parent)e.setCurComponent(t.info,t.index.toString()),r.stopPropagation();else return;return[{text:"\u62C6\u5206",subText:"",disable:((p=e.curComponent)==null?void 0:p.component)!=="Group",handler:y},{divider:!0},{text:"\u590D\u5236",subText:"Ctrl + C",handler:u},{text:"\u590D\u5236ID",subText:"",handler:a},{text:"\u5220\u9664",subText:"Ctr + Delete",handler:d},{divider:!0},{text:"\u7F6E\u4E8E\u9876\u5C42",handler:i,children:[{text:"\u7F6E\u4E8E\u9876\u5C42",handler:i},{text:"\u4E0A\u79FB\u4E00\u5C42",handler:h}]},{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:f,children:[{text:"\u7F6E\u4E8E\u5E95\u5C42",handler:f},{text:"\u4E0B\u79FB\u4E00\u5C42",handler:l}]}]},g=O(()=>e.isShowEm),E=P(null),j=P({}),st=P("0px"),rt=P("#fff0"),ct=P("none"),J=P(!1),B=P("");Lt((o,r,p)=>{if(console.log(o),p==="render function"){if(e.isEditMode){if(r){const{name:_}=r.component||{};B.value=`\u7EC4\u4EF6[${_}]\u6E32\u67D3\u5F02\u5E38`}else B.value="\u7EC4\u4EF6\u6E32\u67D3\u5F02\u5E38";st.value="5px",rt.value="red",ct.value="dashed",J.value=!0}return!1}else return!0});const W=O(()=>t.active&&!t.info.locked||s.isActived(t.info)),it=()=>{s.appendComponent(t.info)},at=o=>{if(o.preventDefault(),t.info.parent||o.stopPropagation(),!e.curComponent||t.info.id!==e.curComponent.id||t.info.locked)return;o.stopPropagation(),j.value=q();let{top:r,left:p}=t.defaultStyle;const _=o.clientY,S=o.clientX,b=r,w=p,v=D=>{const I=D.clientX;r=(D.clientY-_)/e.scale+b,p=(I-S)/e.scale+w,e.syncComponentLoction({top:r,left:p},t.info.parent,!1)},z=()=>{Mt.emit("unmove"),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",z),t.info&&t.info.parent&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",v),document.addEventListener("mouseup",z)},lt=o=>{var r,p;if(o.ctrlKey){it();return}o.preventDefault(),t.isInner?((r=t.info.parent)==null?void 0:r.id)===((p=e.benchmarkComponent)==null?void 0:p.id)&&(o.stopPropagation(),e.setCurComponent(t.info,t.index.toString())):(o.stopPropagation(),e.setCurComponent(t.info,t.index.toString()))},ft=o=>{var r;!t.isInner||(o.preventDefault(),t.info&&(!t.info.parent||((r=t.info.parent)==null?void 0:r.active))&&(o.stopPropagation(),e.setCurComponent(t.info,t.index.toString())))},ut=(o,r)=>{if(r.button!==0||!(e.curComponent&&t.info.id===e.curComponent.id))return;r.stopPropagation(),r.preventDefault();const p={top:t.defaultStyle.top,left:t.defaultStyle.left,height:t.defaultStyle.height,width:t.defaultStyle.width,rotate:t.defaultStyle.rotate},_=document.querySelector("#editor").getBoundingClientRect(),S=w=>{const v={x:(w.clientX-_.left)/e.scale,y:(w.clientY-_.top)/e.scale},{top:z,left:D,width:I,height:T}=Gt(o,p,v);e.syncComponentLoction({top:z,left:D,width:I,height:T},t.info.parent,!1)},b=()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",b),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",S),document.addEventListener("mouseup",b)},dt=o=>{if(o.button!==0||!E.value||(o.preventDefault(),o.stopPropagation(),!(e.curComponent&&t.info.id===e.curComponent.id))||t.info.locked)return;let{rotate:r}=R({},t.defaultStyle);const p=o.clientY,_=o.clientX,S=r,b=E.value.getBoundingClientRect(),w=b.left+b.width/2,v=b.top+b.height/2,z=Math.atan2(p-v,_-w)/(Math.PI/180),D=T=>{const yt=T.clientX,xt=T.clientY,Ct=Math.atan2(xt-v,yt-w)/(Math.PI/180);r=S+Ct-z,e.syncComponentLoction({rotate:r},t.info.parent,!1)},I=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",I),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData()};document.addEventListener("mousemove",D),document.addEventListener("mouseup",I)},q=()=>{if(!e.curComponent)return{};const o=$(e.curComponent.style.rotate),r={};let p=-1;const _=[{start:338,end:23,cursor:"nw"},{start:23,end:68,cursor:"n"},{start:68,end:113,cursor:"ne"},{start:113,end:158,cursor:"e"},{start:158,end:203,cursor:"se"},{start:203,end:248,cursor:"s"},{start:248,end:293,cursor:"sw"},{start:293,end:338,cursor:"w"}],S={lt:0,t:45,rt:90,r:135,rb:180,b:225,lb:270,l:315};return["lt","t","rt","r","rb","b","lb","l"].forEach(w=>{const v=$(S[w]+o),z=_.length;for(;;){p=(p+1)%z;const D=_[p];if(v<23||v>=338){r[w]="nw-resize";return}if(D.start<=v&&v<D.end){r[w]=D.cursor+"-resize";return}}}),r},ht=O(()=>{const o="rotate-",r=t.defaultStyle.rotate;return r>-22.5&&r<=22.5?o+0:r>22.5&&r<=67.5?o+45:r>67.5&&r<=112.5?o+90:r>112.5&&r<=157.5?o+135:r>157.5||r<=-157.5?o+0:r>-157.5&&r<=-112.5?o+45:r>-112.5&&r<=-67.5?o+90:r>-67.5&&r<=-22.5?o+135:o+0}),F=o=>{if(document.addEventListener("keyup",G),!!(e.curComponent&&t.info.id===e.curComponent.id)&&(o.stopPropagation(),t.info&&o.ctrlKey))switch(o.key){case"ArrowLeft":o.preventDefault(),e.syncComponentLoction({left:t.info.positionStyle.left-1},t.info.parent,!1);break;case"ArrowUp":o.preventDefault(),e.syncComponentLoction({top:t.info.positionStyle.top-1},t.info.parent,!1);break;case"ArrowRight":o.preventDefault(),e.syncComponentLoction({left:t.info.positionStyle.left+1},t.info.parent,!1);break;case"ArrowDown":o.preventDefault(),e.syncComponentLoction({top:t.info.positionStyle.top+1},t.info.parent,!1);break;case"Delete":o.preventDefault(),d();break;default:return}},G=o=>{!(e.curComponent&&t.info.id===e.curComponent.id)||(o.stopPropagation(),t.info&&e.resizeAutoComponent(t.info.parent),e.saveComponentData(),document.removeEventListener("keyup",G))};Et(()=>{j.value=q()}),Pt(()=>e.curComponent,o=>{o&&t.info.id===o.id?document.addEventListener("keydown",F):document.removeEventListener("keydown",F)});const mt=[{top:"0%",left:"0%",direction:"lt"},{top:"0%",left:"50%",direction:"t"},{top:"0%",left:"100%",direction:"rt"},{top:"50%",left:"100%",direction:"r"},{top:"100%",left:"100%",direction:"rb"},{top:"100%",left:"50%",direction:"b"},{top:"100%",left:"0%",direction:"lb"},{top:"50%",left:"0%",direction:"l"}],pt=()=>A(It,null,[X(A("span",{class:k.errorInfo},[B.value]),[[Y,J.value]]),X(A(kt,{class:k.rotation,name:"one-third-rotation",onMousedown:dt},null),[[Y,W.value]]),X(A("em",null,[H("("),t.defaultStyle.left,H(","),t.defaultStyle.top,H(")")]),[[Y,g.value]]),mt.map(o=>X(A("div",{class:[k.shapePoint,k[o.direction],k[ht.value]],style:{top:o.top,left:o.left},onMousedown:r=>ut(o.direction,r)},null),[[Y,W.value]])),n.default&&n.default()]);return()=>X(A("div",{ref:E,class:[k.shape,W.value||t.active?k.active:""],onDblclick:o=>ft(o),onClick:o=>lt(o),onMousedown:o=>at(o)},[pt()]),[[Rt("contextmenu"),(o,r)=>x(o,r)]])}});export{pe as S,Tt as a,Yt as u};