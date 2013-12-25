//Don't motify Function.prototype and Object.prototype untill it is necessary.
/*
Function.prototype.$extend = function(parent) {
    var me = this;
    var retT = function() {
        this.$base = parent;
        me.apply(this, arguments);
        this.$base = null;
    };

    var fn = function() { };
    fn.prototype = parent.prototype;
    retT.prototype = new fn();
    retT.constructor = this;

    return retT;
};

_getPrototypeType = function(obj){
    var p = function(){};
    p.prototype = obj;
    return p;
};

Function.prototype.$extends = function() {
    var args = Array.prototype.slice.apply(arguments);
    var parent = args[args.length - 1] || function() { };
    var me = this;
    parent = parent instanceof Function ? parent : _getPrototypeType(parent);
    var ret = function() {
        parent.apply(this, arguments);
        me.apply(this, arguments);
    };
    
    var fn = funciton(){};
    fn.prototype = parent.prototype;
    ret.prototype = new fn();

    var p = parent;
    if (args.length > 1) {
        ret = Function.prototype.$extends.call(ret, p.$extends.apply(p, args.slice(0, -1)));
    }

    return ret;
};
*/

if (!MS) {
    var MS = {};
}

MS.$extend = function(child, parent) {
    var me = child;
    var ret = function() {
        parent.apply(this, arguments);
        me.apply(this, arguments);
    };

    var fn = function() { };
    fn.prototype = parent.prototype;
    ret.prototype = new fn();
    ret.constructor = child;

    child = ret;
    return ret;
};

MS.$extendManual = function(child, parent) {
    var me = child;
    var ret = function() {
        this.$base = parent;
        me.apply(this, arguments);
        this.$base = null;
    };

    var fn = function() { };
    fn.prototype = parent.prototype;
    ret.prototype = new fn();
    ret.constructor = child;

    child = ret;
    return ret;
};

/*
var child = function(a,b,c,d){
	this.$base && this.$base(b,d);
};
var parent = function(){
	this.param = {};
};

*/

MS.$extends = function() {
    var args = Array.prototype.slice.apply(arguments);
    if (args.length < 2) {
        return null;
    }
    var parent = args[args.length - 1];
    var me = args[0];
    var ret = function() {
        parent.apply(this, arguments);
        me.apply(this, arguments);
    };

    var fn = function() { };
    fn.prototype = parent.prototype;
    ret.prototype = new fn();

    if (args.length > 2) {
        args = args.slice(1, -1);
        args.reverse();
        args.push(parent);
        args.reverse();
        ret = MS.$extends(ret, MS.$extends.apply(null, args));
    }

    return ret;
};
