function t(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var e=require("react"),r=(t(e),t(require("react-fast-compare")));module.exports=function(t){void 0===t&&(t={});var o=e.createContext();return{useGlobalState:function(){return e.useContext(o)},GlobalStateConsumer:o.Consumer,StateContext:o,GlobalStateProvider:function(e){function n(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];e.apply(this,r),this.state=t}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.shouldComponentUpdate=function(t,e){return!r(this.state,e)},n.prototype.render=function(){var t=this;return h(o.Provider,{value:[this.state,function(){for(var e,r=[],o=arguments.length;o--;)r[o]=arguments[o];return(e=t).setState.apply(e,r)}]},this.props.children)},n}(e.Component)}};
