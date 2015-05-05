// Part 2


var _ = (function() {
	return {
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