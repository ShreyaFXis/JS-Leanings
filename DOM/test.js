// closures

function x()
{
    var a = 2;
    function y()
    {
        console.log(a);
    }
    return y;
}
var z = x();
//console.log(z);



z();