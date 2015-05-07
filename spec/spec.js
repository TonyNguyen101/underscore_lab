var _ = require('../underscore.js')

describe('Average', function(){
	it('should return average of an array', function(){
		expect(_.average([4,5,6])).toEqual(5)
	});
});		

describe('Contains', function(){
	it('should return true if number is in array', function(){
		expect(_.contains([4,5,6], 5)).toEqual(true)
	});
});	

describe('First', function(){
	it('should return the first of an array', function(){
		expect(_.first([4,5,6])).toEqual(4)
	});
});	

describe('Min', function(){
	it('should return minium of an array', function(){
		expect(_.min([4,5,6,0])).toEqual(0)
	});
});	

describe('Shuffle', function(){
	it('should return average of an array', function(){
		expect(_.shuffle([5])).toEqual([5])
	});
});	

describe('indexOf', function(){
	it('should return index of a number an array', function(){
		expect(_.indexOf([4,5,6], 6)).toEqual(2)
	});
});	