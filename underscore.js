// Underscore Homework Part 1
var _ = (function() {
	return {
		average : function (array) {
			var count = 0;
			for (i = 0; i < array.length; i++) {
				count += array[i];
			}
			return count / array.length;
		},
		contains : function (array, number) {
			for (i = 0; i < array.length; i++) {
				if (array[i] === number) {
					return true; 
				}
			}
			return false;
		},
		first : function (array) {
			return array[0];
		},
		last : function (array) {
			return array[array.length-1];
		},
		max : function (array) {
			var count = array[0];
			for (i = 0; i < array.length; i++) {
				if (array[i] > count) {
					count = array[i];
				}	
			}
			return count;
		}, 
		min : function (array) {
			var count = array[0];
			for (i = 0; i < array.length; i++) {
				if (array[i] < count) {
					count = array[i];
				}	
			}
			return count;
		}, 
		// Shuffle: I wanted to add another arguement that would define how many times we would shuffle the entire array. If we just wanted one arguement, array, we can set the number of interations in the first loop to a set number.
		shuffle : function (array, interations) {
			for (var i = 0; i < interations; i++) {
				for (var j = 0; i < array.length; i++) {
					var randoNumber = Math.floor(Math.random() * (array.length -1));
					var temp = array[i];
					array[i] = array[randoNumber];
					array[randoNumber] = temp;
				}
			}
		return array;	
		},
		sample : function (array, samplesize) {
			if (samplesize) {
				var count = Math.floor(Math.random() * (array.length - 1))
				return array[count]		
			}
			else {
				var samplearray = [];
				for (i = 0; i < samplesize; i++) {
					var count = Math.floor(Math.random() * (array.length - 1))
					samplearray.push(array[count]);
				}
				return samplearray;	 
			}	
		},
		
		// Creates an infinate loop. Not sure how to fix it
		/*
		difference : function(array1, array2) {
			var newArray = [];
			for (var i = 0; i < array1.length; i++) {
				for (var j = 0; j < array2.length; i++) {
					if (array1[i] !== array2[j]) {
						newArray.push(array1[i]);
					}
				}
			}
		return newArray;	
		},
		*/


		indexOf : function (array, index) {
			for (i = 0; i < array.length; i++) {
				if (array[i] === index) {
				return i;
				}
			}
			return -1;
		},
// Underscore Homework Part 2
		each : function(array, alert) {
			for (var i = 0; i < array.length; i++) {
			alert(array[i]);
			}
		},
 		compact : function(array) {
			var newArray = [];
			for (var i = 0; i < array.length; i++) {
				if (array[i] !== undefined) {
					newArray.push(array[i]);
				}
			}
			return newArray;
		},
		map : function(array, action) {
			var newArray = [];
			for (var i = 0; i < array.length; i++) {
				newArray.push(action(array[i]));
			}
			return newArray; 
		},
		filter : function(array, action) {
			var newArray = [];
			for (var i = 0; i < array.length; i++) {
				if (action(array[i]) === true) {
					newArray.push(array[i]);
				}
			}
			return newArray;
		}
	};
})();