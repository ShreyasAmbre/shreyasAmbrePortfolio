"use strict";(self.webpackChunkshreyas_ambre_portfolio=self.webpackChunkshreyas_ambre_portfolio||[]).push([[802],{1802:(mn,se,c)=>{c.r(se),c.d(se,{ContactModule:()=>gn});var D=c(8583),ae=c(4363),o=c(3018),ht=c(3363),gt=c(1841),le=c(4402),ft=c(7574),ue=c(9796),ce=c(8002),pt=c(1555);function E(n,t){return new ft.y(e=>{const r=n.length;if(0===r)return void e.complete();const i=new Array(r);let s=0,a=0;for(let h=0;h<r;h++){const b=(0,le.D)(n[h]);let ie=!1;e.add(b.subscribe({next:v=>{ie||(ie=!0,a++),i[h]=v},error:v=>e.error(v),complete:()=>{s++,(s===r||!ie)&&(a===r&&e.next(t?t.reduce((v,fn,pn)=>(v[fn]=i[pn],v),{}):i),e.complete())}}))}})}let de=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends de{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const d=new o.OlP("NgValueAccessor"),yt={provide:d,useExisting:(0,o.Gpc)(()=>F),multi:!0},Ct=new o.OlP("CompositionEventMode");let F=(()=>{class n extends de{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,D.q)()?(0,D.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Ct,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([yt]),o.qOj]}),n})();const l=new o.OlP("NgValidators"),f=new o.OlP("NgAsyncValidators");function Ae(n){return null!=n}function Me(n){const t=(0,o.QGY)(n)?(0,le.D)(n):n;return(0,o.CqO)(t),t}function be(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function De(n,t){return t.map(e=>e(n))}function Ee(n){return n.map(t=>function(n){return!n.validate}(t)?t:e=>t.validate(e))}function q(n){return null!=n?function(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return be(De(e,t))}}(Ee(n)):null}function P(n){return null!=n?function(n){if(!n)return null;const t=n.filter(Ae);return 0==t.length?null:function(e){return function(...n){if(1===n.length){const t=n[0];if((0,ue.k)(t))return E(t,null);if((0,pt.K)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return E(e.map(r=>t[r]),e)}}if("function"==typeof n[n.length-1]){const t=n.pop();return E(n=1===n.length&&(0,ue.k)(n[0])?n[0]:n,null).pipe((0,ce.U)(e=>t(...e)))}return E(n,null)}(De(e,t).map(Me)).pipe((0,ce.U)(be))}}(Ee(n)):null}function Oe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function I(n){return n?Array.isArray(n)?n:[n]:[]}function w(n,t){return Array.isArray(n)?n.includes(t):n===t}function Te(n,t){const e=I(t);return I(n).forEach(i=>{w(e,i)||e.push(i)}),e}function Ge(n,t){return I(t).filter(e=>!w(n,e))}let xe=(()=>{class n{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=q(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=P(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n}),n})(),u=(()=>{class n extends xe{get formDirective(){return null}get path(){return null}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();class m extends xe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ze{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}let ke=(()=>{class n extends Ze{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),Be=(()=>{class n extends Ze{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function C(n,t){H(n,t),t.valueAccessor.writeValue(n.value),function(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&qe(n,t)})}(n,t),function(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&qe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function T(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function H(n,t){const e=function(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Oe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Oe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();T(t._rawValidators,i),T(t._rawAsyncValidators,i)}function qe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function x(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const V="VALID",Z="INVALID",y="PENDING",A="DISABLED";function Y(n){return(J(n)?n.validators:n)||null}function Re(n){return Array.isArray(n)?q(n):n||null}function $(n,t){return(J(t)?t.asyncValidators:n)||null}function Ue(n){return Array.isArray(n)?P(n):n||null}function J(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class W{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Re(this._rawValidators),this._composedAsyncValidatorFn=Ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===Z}get pending(){return this.status==y}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Re(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Ue(t)}addValidators(t){this.setValidators(Te(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ge(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ge(t,this._rawAsyncValidators))}hasValidator(t){return w(this._rawValidators,t)}hasAsyncValidator(t){return w(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=y,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=V,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===y)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator=!0;const e=Me(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=r instanceof z?r.controls.hasOwnProperty(i)?r.controls[i]:null:r instanceof xt&&r.at(i)||null}),r}(this,t)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?Z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(Z)?Z:V}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){J(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class k extends W{constructor(t=null,e,r){super(Y(e),$(r,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){x(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){x(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class z extends W{constructor(t,e,r){super(Y(e),$(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e instanceof k?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class xt extends W{constructor(t,e,r){super(Y(e),$(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((r,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof k?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Zt={provide:u,useExisting:(0,o.Gpc)(()=>B)},M=(()=>Promise.resolve(null))();let B=(()=>{class n extends u{constructor(e,r){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new o.vpe,this.form=new z({},q(e),P(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){M.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),C(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){M.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),x(this._directives,e)})}addFormGroup(e){M.then(()=>{const r=this._findContainer(e.path),i=new z({});(function(n,t){H(n,t)})(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){M.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){M.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(l,10),o.Y36(f,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Zt]),o.qOj]}),n})();const Bt={provide:m,useExisting:(0,o.Gpc)(()=>Q)},Le=(()=>Promise.resolve(null))();let Q=(()=>{class n extends m{constructor(e,r,i,s){super(),this.control=new k,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===F?e=s:function(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),function(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function(n,t){return[...t.path,n]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){C(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Le.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=""===r||r&&"false"!==r;Le.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,9),o.Y36(l,10),o.Y36(f,10),o.Y36(d,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Bt]),o.qOj,o.TTD]}),n})(),Ye=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),Je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[Je]]}),n})(),ln=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[dt]}),n})();function un(n,t){1&n&&(o.TgZ(0,"div",47),o._uU(1,"Email Send"),o.qZA())}function cn(n,t){1&n&&(o.TgZ(0,"div",48),o._uU(1,"Email Failed"),o.qZA())}const dn=[{path:"",component:(()=>{class n{constructor(e,r){this.service=e,this.httpc=r,this.senderName="",this.senderEmail="",this.senderSubject="",this.senderMsg=""}ngOnInit(){}goToSocialHandle(e){this.service.openSocialHandle(e)}sendMail(e){this.emailSendSuccess=void 0,console.log("CONTACT FORM DETAILS",e),this.httpc.post(`http://api.elasticemail.com/v2/email/send?apikey=B449045B07BB7F598D7FEAFEF7EE414E8C519921A92D2E81109BF07AAE6B616D6E22B8227C53B20E0644FC52D56B5B54\n    &subject=${e.senderSubject}\n    &from=shreyasambre00@gmail.com\n    &fromName=SHREYAS AMBRE\n\n    &sender=${e.senderEmail}\n    &senderName=${e.senderName}\n\n    &msgFrom=shreyasambre00@gmail.com\n    &msgFromName=SHREYAS AMBRE\n    \n    &replyTo=${e.senderEmail}\n    &replyToName=${e.senderName}\n    &to=${e.senderName}\n    &msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml=&bodyText=&charset=&charsetBodyHtml=&charsetBodyText=`,{apikey:"B449045B07BB7F598D7FEAFEF7EE414E8C519921A92D2E81109BF07AAE6B616D6E22B8227C53B20E0644FC52D56B5B54",subject:"Test SUbject",from:"abc@gmail.com",to:"shreyasambre00@gmail.com",body:"Email Test Body",isTransactional:!0,transactionID:"shreyasAmbreEmailSendAPI"}).subscribe(i=>{console.log("SMTP RES ===>",i),this.emailSendSuccess=!0===i.success})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(ht.f),o.Y36(gt.eN))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contact"]],decls:111,vars:6,consts:[[1,"container-fluid"],[1,"container"],[1,"row","pt-5",2,"height","100vh"],[1,"col-6",2,"margin-top","7%"],[1,"row","p-0","m-0"],[1,"col-12"],[1,"subTitleDivider"],[1,"contactSubTitle","subTitleFont"],[1,"contactTitle","titleFont"],[1,"contactDescription","descriptionFont"],[1,"row","p-0","m-0",2,"height","10%","text-align","center"],[1,"col-1",3,"click"],["width","25","height","25","src","assets/images/google.png","alt","googleicon"],["width","25","height","25","src","assets/images/linkedin.png","alt","linkedinicon"],["width","25","height","25","src","assets/images/github.png","alt","twitterv"],["width","25","height","25","src","assets/images/whatsapp.png","alt","whatsappicon"],["type","button",1,"btnClass","my-2","mx-2"],[1,"col-6"],["src","assets/images/ContactMeIllustration.svg","alt","",2,"width","100%"],[1,"container-fluid",2,"background-color","#f1faff"],[1,"row","justify-content-md-center","py-5",2,"height","250px"],[1,"contactSubTitle","subTitleFont",2,"text-align","center"],[1,"col-9","text-center"],[1,"row","justify-content-md-center"],[1,"col-5"],[1,"contactDescription","descriptionFont","p-0","m-0"],[1,"container-fluid","mt-5",2,"background-color","#ffffff","height","600px","margin-top","10% !important"],[1,"row",2,"height","650px"],[1,"row","p-0","mx-2","mb-3","socialHandleContainer",3,"click"],[1,"row","align-items-center",2,"height","65px"],[1,"col-2"],["src","assets/images/google.png","alt","googleicon",1,"contactSocialMediaImg"],[1,"col-9","px-1"],[1,"contactSocialMediaText","descriptionFont"],["src","assets/images/linkedin.png","alt","googleicon",1,"contactSocialMediaImg"],["src","assets/images/github.png","alt","githubicon",1,"contactSocialMediaImg"],[1,"col-6",2,"margin-top","3%"],[3,"ngSubmit"],["contactForm","ngForm"],[1,"form-group"],["type","text","name","senderName","placeholder","Name",1,"form-control","form-control-lg","my-4","bg-light",3,"ngModel","ngModelChange"],["type","text","name","senderEmail","placeholder","Email",1,"form-control","form-control-lg","my-4","bg-light",3,"ngModel","ngModelChange"],["type","text","name","senderSubject","placeholder","Subject",1,"form-control","form-control-lg","my-4","bg-light",3,"ngModel","ngModelChange"],["type","text","rows","4","cols","50","name","senderMsg","placeholder","Message",1,"form-control","form-control-lg","my-4","bg-light",3,"ngModel","ngModelChange"],["type","button","type","submit",1,"btnClass","d-inline"],["class","mx-2 alert alert-success d-inline p-2","role","alert",4,"ngIf"],["class","mx-2 alert alert-danger d-inline p-2","role","alert",4,"ngIf"],["role","alert",1,"mx-2","alert","alert-success","d-inline","p-2"],["role","alert",1,"mx-2","alert","alert-danger","d-inline","p-2"]],template:function(e,r){if(1&e){const i=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"div",5),o._UZ(6,"div",6),o._uU(7,"\xa0 "),o.TgZ(8,"p",7),o.TgZ(9,"b"),o._uU(10,"Contact"),o.qZA(),o.qZA(),o.TgZ(11,"h2",8),o._uU(12,"Get In Touch "),o._UZ(13,"br"),o._uU(14,"With Me."),o.qZA(),o.TgZ(15,"p",9),o._uU(16," If you have any questions and want to get in touch with me, below are social networking sources where I will be. available their for quick response on your question. "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",10),o.TgZ(18,"div",11),o.NdJ("click",function(){return r.goToSocialHandle("gmail")}),o._UZ(19,"img",12),o.qZA(),o.TgZ(20,"div",11),o.NdJ("click",function(){return r.goToSocialHandle("linkedin")}),o._UZ(21,"img",13),o.qZA(),o.TgZ(22,"div",11),o.NdJ("click",function(){return r.goToSocialHandle("github")}),o._UZ(23,"img",14),o.qZA(),o.TgZ(24,"div",11),o.NdJ("click",function(){return r.goToSocialHandle("whatsapp")}),o._UZ(25,"img",15),o.qZA(),o.qZA(),o.TgZ(26,"div",4),o.TgZ(27,"button",16),o.TgZ(28,"b"),o._uU(29,"Email Me"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(30,"div",17),o._UZ(31,"img",18),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(32,"div",19),o.TgZ(33,"div",1),o.TgZ(34,"div",20),o.TgZ(35,"p",21),o.TgZ(36,"b"),o._uU(37,"Contact Details"),o.qZA(),o.qZA(),o.TgZ(38,"div",22),o.TgZ(39,"div",23),o.TgZ(40,"div",24),o.TgZ(41,"p",7),o._uU(42,"Address"),o.qZA(),o.TgZ(43,"p",9),o._uU(44,"B-003 Kishore Kunj 3, Near Old Viva College & Ganpati Mandir, Virar west, District: Palghar, Taluka: Vasai, Pincode: 401303 "),o.qZA(),o.qZA(),o.TgZ(45,"div",24),o.TgZ(46,"p",7),o._uU(47,"Get In Touch"),o.qZA(),o.TgZ(48,"p",25),o._uU(49,"(+91) 8087024368 "),o.qZA(),o.TgZ(50,"p",25),o._uU(51,"mo - fr: 09:00 to 20:00 (IST)"),o.qZA(),o.TgZ(52,"p",25),o._uU(53,"shreyasambre00@gmail.com "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(54,"div",26),o.TgZ(55,"div",1),o.TgZ(56,"div",27),o.TgZ(57,"div",17),o.TgZ(58,"div",4),o.TgZ(59,"div",5),o._UZ(60,"div",6),o._uU(61,"\xa0 "),o.TgZ(62,"p",7),o.TgZ(63,"b"),o._uU(64,"Say Hello"),o.qZA(),o.qZA(),o.TgZ(65,"h2",8),o._uU(66,"Take a Coffee"),o._UZ(67,"br"),o._uU(68,"& Drop Your Mail."),o.qZA(),o.TgZ(69,"p",9),o._uU(70," This contact form helps in case I'm not able to reach you on the above social handles, those filled details will reach automatically in my e-mail. "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(71,"div",28),o.NdJ("click",function(){return r.goToSocialHandle("gmail")}),o.TgZ(72,"div",5),o.TgZ(73,"div",29),o.TgZ(74,"div",30),o._UZ(75,"img",31),o.qZA(),o.TgZ(76,"div",32),o.TgZ(77,"span",33),o._uU(78,"gmail.com/shreyasambre00"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(79,"div",28),o.NdJ("click",function(){return r.goToSocialHandle("linkedin")}),o.TgZ(80,"div",5),o.TgZ(81,"div",29),o.TgZ(82,"div",30),o._UZ(83,"img",34),o.qZA(),o.TgZ(84,"div",32),o.TgZ(85,"span",33),o._uU(86,"linkedin.com/shreyasambre"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(87,"div",28),o.NdJ("click",function(){return r.goToSocialHandle("github")}),o.TgZ(88,"div",5),o.TgZ(89,"div",29),o.TgZ(90,"div",30),o._UZ(91,"img",35),o.qZA(),o.TgZ(92,"div",32),o.TgZ(93,"span",33),o._uU(94,"twitter.com/shreyasambre"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(95,"div",36),o.TgZ(96,"form",37,38),o.NdJ("ngSubmit",function(){o.CHM(i);const a=o.MAs(97);return r.sendMail(a.form.value)}),o.TgZ(98,"div",39),o.TgZ(99,"input",40),o.NdJ("ngModelChange",function(a){return r.senderName=a}),o.qZA(),o.qZA(),o.TgZ(100,"div",39),o.TgZ(101,"input",41),o.NdJ("ngModelChange",function(a){return r.senderEmail=a}),o.qZA(),o.qZA(),o.TgZ(102,"div",39),o.TgZ(103,"input",42),o.NdJ("ngModelChange",function(a){return r.senderSubject=a}),o.qZA(),o.qZA(),o.TgZ(104,"div",39),o.TgZ(105,"textarea",43),o.NdJ("ngModelChange",function(a){return r.senderMsg=a}),o.qZA(),o.qZA(),o.TgZ(106,"button",44),o.TgZ(107,"b"),o._uU(108,"Submit"),o.qZA(),o.qZA(),o.YNc(109,un,2,0,"div",45),o.YNc(110,cn,2,0,"div",46),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}2&e&&(o.xp6(99),o.Q6J("ngModel",r.senderName),o.xp6(2),o.Q6J("ngModel",r.senderEmail),o.xp6(2),o.Q6J("ngModel",r.senderSubject),o.xp6(2),o.Q6J("ngModel",r.senderMsg),o.xp6(4),o.Q6J("ngIf",!0===r.emailSendSuccess),o.xp6(1),o.Q6J("ngIf",!1===r.emailSendSuccess))},directives:[Ye,Be,B,F,ke,Q,D.O5],styles:[".contactContainerColor[_ngcontent-%COMP%]{background-color:#f0fcff}.subTitleDivider[_ngcontent-%COMP%]{height:2px;width:42px;background-color:var(--secondary-color);border:1px solid var(--secondary-color);display:inline-block;vertical-align:middle;border-radius:5px}.contactTitle[_ngcontent-%COMP%]{color:var( --secondary-color );font-size:52px;font-weight:600;line-height:1.3em}.contactSubTitle[_ngcontent-%COMP%]{color:var( --secondary-color );font-size:18px;font-weight:500;line-height:.2em;margin-bottom:20px;display:inline-block}.contactDescription[_ngcontent-%COMP%]{font-size:16px}.socialHandleContainer[_ngcontent-%COMP%]{background-color:#f2f7fb;border-radius:10px;width:88%}.contactSocialMediaImg[_ngcontent-%COMP%]{width:39px;height:39px;padding:2%}.contactSocialMediaText[_ngcontent-%COMP%]{color:var(--secondary-color);font-size:18px;font-weight:500;line-height:.2em}.contactInputFiled[_ngcontent-%COMP%]{height:50px;width:80%;margin:3% 0}"]}),n})()}];let hn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[ae.Bz.forChild(dn)],ae.Bz]}),n})(),gn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[D.ez,hn,ln]]}),n})()}}]);