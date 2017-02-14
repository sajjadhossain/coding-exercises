var GCDOfTwo = function(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;

  x = Math.abs(x);
  y = Math.abs(y);

  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }

  return x;
};

var GCDOfMoreThanTwo = function(input) {
  if(toString.call(input) !== "[object Array]")
        return  false;

  var length;
  var a;
  var b;

	length = input.length;

	if (!length) {
		return null;
	}

	a = input[0];

	for(var increment = 1; increment < length; increment++) {
		b = input[increment];
		a = GCDOfTwo(a, b);
	}

	return a;
}

module.exports = {
  ofTwo: GCDOfTwo,
  ofMoreThanTwo: GCDOfMoreThanTwo
}
