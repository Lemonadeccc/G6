(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["1855a8a6"],{"1855a8a6":function(n,e,t){"use strict";let r;t.d(e,"__esModule",{value:!0}),t.e(e,{dagre:function(){return W;},default:function(){return $;},force:function(){return x;},initSync:function(){return M;},initThreadPool:function(){return S;},start:function(){return T;},wbg_rayon_PoolBuilder:function(){return E;},wbg_rayon_start_worker:function(){return j;}});var _=t("b989b7da");let i=t("dfee965e"),o=Array(128).fill(void 0);o.push(void 0,null,!0,!1);let u=o.length;function b(n){let e=o[n];return n<132||(o[n]=u,u=n),e;}function f(n){u===o.length&&o.push(o.length+1);let e=u;return u=o[e],o[e]=n,e;}function a(n){return null==n;}let c=null,l=null;function g(){return(null===l||l.buffer!==r.memory.buffer)&&(l=new Int32Array(r.memory.buffer)),l;}let w="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available");}};"undefined"!=typeof TextDecoder&&w.decode();let s=null;function d(){return(null===s||s.buffer!==r.memory.buffer)&&(s=new Uint8Array(r.memory.buffer)),s;}function y(n,e){return n>>>=0,w.decode(d().slice(n,n+e));}let m=null,h=0,p="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available");}},v=function(n,e){let t=p.encode(n);return e.set(t),{read:n.length,written:t.length};};function A(n,e,t){if(void 0===t){let t=p.encode(n),r=e(t.length,1)>>>0;return d().subarray(r,r+t.length).set(t),h=t.length,r;}let r=n.length,_=e(r,1)>>>0,i=d(),o=0;for(;o<r;o++){let e=n.charCodeAt(o);if(e>127)break;i[_+o]=e;}if(o!==r){0!==o&&(n=n.slice(o)),_=t(_,r,r=o+3*n.length,1)>>>0;let e=v(n,d().subarray(_+o,_+r));o+=e.written,_=t(_,r,o,1)>>>0;}return h=o,_;}function T(){r.start();}function x(n){return b(r.force(f(n)));}function W(n){return b(r.dagre(f(n)));}function k(n,e){try{return n.apply(this,e);}catch(n){r.__wbindgen_exn_store(f(n));}}function S(n){return b(r.initThreadPool(n));}function j(n){r.wbg_rayon_start_worker(n);}let R="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>r.__wbg_wbg_rayon_poolbuilder_free(n>>>0));class E{static __wrap(n){n>>>=0;let e=Object.create(E.prototype);return e.__wbg_ptr=n,R.register(e,e.__wbg_ptr,e),e;}__destroy_into_raw(){let n=this.__wbg_ptr;return this.__wbg_ptr=0,R.unregister(this),n;}free(){let n=this.__destroy_into_raw();r.__wbg_wbg_rayon_poolbuilder_free(n);}numThreads(){return r.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0;}receiver(){return r.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0;}build(){r.wbg_rayon_poolbuilder_build(this.__wbg_ptr);}}async function I(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e);}catch(e){if("application/wasm"!=n.headers.get("Content-Type"))console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e);else throw e;}let t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e);}{let t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t;}}function U(){let n={};return n.wbg={},n.wbg.__wbindgen_object_drop_ref=function(n){b(n);},n.wbg.__wbindgen_is_object=function(n){let e=o[n];return"object"==typeof e&&null!==e;},n.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(n,e){return f(o[n][o[e]]);},n.wbg.__wbindgen_is_undefined=function(n){return void 0===o[n];},n.wbg.__wbindgen_in=function(n,e){return o[n]in o[e];},n.wbg.__wbg_new_16b304a2cfa7ff4a=function(){return f([]);},n.wbg.__wbindgen_number_new=function(n){return f(n);},n.wbg.__wbg_push_a5b05aedc7234f9f=function(n,e){return o[n].push(o[e]);},n.wbg.__wbg_new_72fb9a18b5ae2624=function(){return f({});},n.wbg.__wbg_set_d4638f722068f043=function(n,e,t){o[n][e>>>0]=b(t);},n.wbg.__wbg_set_841ac57cff3d672b=function(n,e,t){o[n][b(e)]=b(t);},n.wbg.__wbg_isArray_2ab64d95e09ea0ae=function(n){return Array.isArray(o[n]);},n.wbg.__wbg_length_cd7af8117672b8b8=function(n){return o[n].length;},n.wbg.__wbindgen_is_bigint=function(n){return"bigint"==typeof o[n];},n.wbg.__wbindgen_bigint_get_as_i64=function(n,e){let t=o[e],_="bigint"==typeof t?t:void 0;((null===c||c.buffer!==r.memory.buffer)&&(c=new BigInt64Array(r.memory.buffer)),c)[n/8+1]=a(_)?BigInt(0):_,g()[n/4+0]=!a(_);},n.wbg.__wbindgen_bigint_from_u64=function(n){return f(BigInt.asUintN(64,n));},n.wbg.__wbindgen_jsval_eq=function(n,e){return o[n]===o[e];},n.wbg.__wbindgen_error_new=function(n,e){return f(Error(y(n,e)));},n.wbg.__wbindgen_number_get=function(n,e){let t=o[e],_="number"==typeof t?t:void 0;((null===m||m.buffer!==r.memory.buffer)&&(m=new Float64Array(r.memory.buffer)),m)[n/8+1]=a(_)?0:_,g()[n/4+0]=!a(_);},n.wbg.__wbindgen_boolean_get=function(n){let e=o[n];return"boolean"==typeof e?e?1:0:2;},n.wbg.__wbg_get_bd8e338fbd5f5cc8=function(n,e){return f(o[n][e>>>0]);},n.wbg.__wbindgen_jsval_loose_eq=function(n,e){return o[n]==o[e];},n.wbg.__wbindgen_string_get=function(n,e){let t=o[e],_="string"==typeof t?t:void 0;var i=a(_)?0:A(_,r.__wbindgen_malloc,r.__wbindgen_realloc),u=h;g()[n/4+1]=u,g()[n/4+0]=i;},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return f(Error());},n.wbg.__wbg_stack_658279fe44541cf6=function(n,e){let t=A(o[e].stack,r.__wbindgen_malloc,r.__wbindgen_realloc),_=h;g()[n/4+1]=_,g()[n/4+0]=t;},n.wbg.__wbg_error_f851667af71bcfc6=function(n,e){let t,_;try{t=n,_=e,console.error(y(n,e));}finally{r.__wbindgen_free(t,_,1);}},n.wbg.__wbg_next_196c84450b364254=function(){return k(function(n){return f(o[n].next());},arguments);},n.wbg.__wbg_done_298b57d23c0fc80c=function(n){return o[n].done;},n.wbg.__wbg_value_d93c65011f51a456=function(n){return f(o[n].value);},n.wbg.__wbg_iterator_2cee6dadfd956dfa=function(){return f(Symbol.iterator);},n.wbg.__wbg_get_e3c254076557e348=function(){return k(function(n,e){return f(Reflect.get(o[n],o[e]));},arguments);},n.wbg.__wbindgen_is_function=function(n){return"function"==typeof o[n];},n.wbg.__wbg_next_40fc327bfc8770e6=function(n){return f(o[n].next);},n.wbg.__wbg_call_27c0f87801dedf93=function(){return k(function(n,e){return f(o[n].call(o[e]));},arguments);},n.wbg.__wbg_length_c20a40f15020d68a=function(n){return o[n].length;},n.wbg.__wbindgen_memory=function(){return f(r.memory);},n.wbg.__wbg_buffer_12d079cc21e14bdb=function(n){return f(o[n].buffer);},n.wbg.__wbg_new_63b92bc8671ed464=function(n){return f(new Uint8Array(o[n]));},n.wbg.__wbg_set_a47bac70306a19a7=function(n,e,t){o[n].set(o[e],t>>>0);},n.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return k(function(){return f(self.self);},arguments);},n.wbg.__wbg_window_c6fb939a7f436783=function(){return k(function(){return f(window.window);},arguments);},n.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return k(function(){return f(globalThis.globalThis);},arguments);},n.wbg.__wbg_global_207b558942527489=function(){return k(function(){return f(i.global);},arguments);},n.wbg.__wbg_newnoargs_e258087cd0daa0ea=function(n,e){return f(Function(y(n,e)));},n.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6=function(n){let e;try{e=o[n]instanceof Uint8Array;}catch(n){e=!1;}return e;},n.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2=function(n){let e;try{e=o[n]instanceof ArrayBuffer;}catch(n){e=!1;}return e;},n.wbg.__wbg_isSafeInteger_f7b04ef02296c4d2=function(n){return Number.isSafeInteger(o[n]);},n.wbg.__wbindgen_string_new=function(n,e){return f(y(n,e));},n.wbg.__wbindgen_object_clone_ref=function(n){return f(o[n]);},n.wbg.__wbindgen_debug_string=function(n,e){let t=A(function n(e){let t;let r=typeof e;if("number"==r||"boolean"==r||null==e)return`${e}`;if("string"==r)return`"${e}"`;if("symbol"==r){let n=e.description;return null==n?"Symbol":`Symbol(${n})`;}if("function"==r){let n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function";}if(Array.isArray(e)){let t=e.length,r="[";t>0&&(r+=n(e[0]));for(let _=1;_<t;_++)r+=", "+n(e[_]);return r+"]";}let _=/\[object ([^\]]+)\]/.exec(toString.call(e));if(!(_.length>1))return toString.call(e);if("Object"==(t=_[1]))try{return"Object("+JSON.stringify(e)+")";}catch(n){return"Object";}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:t;}(o[e]),r.__wbindgen_malloc,r.__wbindgen_realloc),_=h;g()[n/4+1]=_,g()[n/4+0]=t;},n.wbg.__wbindgen_throw=function(n,e){throw Error(y(n,e));},n.wbg.__wbindgen_module=function(){return f(O.__wbindgen_wasm_module);},n.wbg.__wbg_startWorkers_2ee336a9694dda13=function(n,e,t){return f((0,_.startWorkers)(b(n),b(e),E.__wrap(t)));},n.wbg.__wbg_instanceof_Window_f401953a2cf86220=function(n){let e;try{e=o[n]instanceof Window;}catch(n){e=!1;}return e;},n;}function B(n,e){n.wbg.memory=e||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0});}function F(n,e){return r=n.exports,O.__wbindgen_wasm_module=e,c=null,m=null,l=null,s=null,r.__wbindgen_start(),r;}function M(n,e){if(void 0!==r)return r;let t=U();return B(t,e),n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n)),F(new WebAssembly.Instance(n,t),n);}async function O(n,e){if(void 0!==r)return r;void 0===n&&(n=new URL(t.publicPath+"antv_layout_wasm_bg.fd2ce19b.wasm",document.baseURI||self.location.href));let _=U();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),B(_,e);let{instance:i,module:o}=await I(await n,_);return F(i,o);}var $=O;}}]);
//# sourceMappingURL=1855a8a6-async.d330fe4d.js.map