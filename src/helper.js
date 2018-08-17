module.exports = {
    convert: function(input) {
        var output = '';
        try {
            output = JSON.parse(input);
        } catch (e) {
            output = input;
        }
        var isObj = typeof output;

        if (isObj == 'object') {
            var obj = output;
            var newObj = new Object();

            console.log(obj);

            for (var propUpper in obj) { //Upper array
                var count = 0;
                var upperObject = obj[propUpper];
				console.log(upperObject);
				if(obj.hasOwnProperty(propUpper)) {
					while (upperObject[count] != undefined) { //inner array
						var innerObject = upperObject[count];
						//for(var prop in obj[propUpper]) { //inner array
						var parentID = innerObject.parent_id;
						var id = innerObject.id;
						var title = innerObject.title;

						//console.log(title);
						//console.log(parentID);
						//console.log(innerObject);

						if (parentID != undefined) { //got Children
							//var matchingObject = newObj.find(function (obj) { return obj.id === parentID; });
							//console.log(matchingObject);
							if (newObj[parentID] != undefined) {
								//console.log(newObj[parentID].children);
								//console.log(parentID);
								newObj[parentID].children[id] = innerObject;
							} else {
								for (var i in newObj) {
									var currentObject = newObj[i];
									//console.log(parentID);
									//console.log(currentObject);
									for (var x in currentObject.children) {
										var currentChild = currentObject.children[x];
										if (currentChild.id == parentID) {
											//console.log(parentID);
											//console.log(x);
											//console.log(newObj);
											newObj[i].children[x].children[id] = innerObject;
										}
									}

								}
							}
						} else { //main parent
							newObj[id] = innerObject;
						}

						count++;
					}
				}
            }
            /*	output.forEach(function(entry) {
            		console.log(entry);
            	});
            	output = 'Is obj';
            */
            //console.log(newObj);
            output = JSON.stringify(newObj);
        }
        //output = isObj;


        return output;
    },
};