// JScript source code

////1.var and function
alert(a in window);
alert(func());

var a;
function func() {
    return 1;
}






////2.
var dest = "one";
{
    var dest = "two";
}
alert(des);






////3. 
var dest = "one";
var Class = function() {
    this.dest = "two";
};

var obj = Class();
alert(dest);







////4. function and object and prototype.
Function.prototype.getTypeInfo = function() {
    return typeof (this);
}

alert(Number.getTypeInfo());

alert(Object.getTypeInfo());









////5.array performance.
var pack_array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var pack_array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete pack_array2[8];

var mix_array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, undefined];

var hold_array1 = [1, 2, 3, 4, 5, 6, 7, 8, , 10];

var sum = 0;
for (var i = 0; i < pack_array1.length; i++) {
    sum += pack_array1[i];
}

for (var i = 0; i < pack_array2.length; i++) {
    sum += pack_array2[i];
}

for (var i = 0; i < mix_array1.length; i++) {
    sum += mix_array1[i];
}

for (var i = 0; i < hold_array1.length; i++) {
    sum += hold_array1[i];
}



////6. module usage and performance.
var JClass1 = function() {
};
JClass1.prototype.foo = function() {
    return "foo";
};
JClass1.prototype.bar = function() {
    return "bar";
};


var JClass2 = function() {
    var foo = function() {
        return "foo";
    };
    var bar = function() {
        return "bar";
    };
    return { foo: foo, bar: bar };
};


function fooFunction() {
    return "foo";
}
function barFunction() {
    return "bar";
}
var JClass3 = function() {
    return { foo: fooFunction, bar: barFunction };
};