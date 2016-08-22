var convertedStr;
function caseConvert(str, conversionType) {
	var splitArray = str.toLowerCase().split(" ");
	var changeArray = [];
	if(conversionType === null){
		document.write("You must enter 'camelcase' or 'snakecase'");
	}else if(conversionType === 'camelcase') {
		for (var i = 1; i < splitArray.length; i++) {
		changeArray[i] = splitArray[i].replace(splitArray[i].charAt(0), splitArray[i].charAt(0).toUpperCase());
	}
		convertedStr = splitArray[0]+changeArray.join("");
	}else if(conversionType === 'snakecase') {
		convertedStr = splitArray.join('-');
	}

return convertedStr;
}
console.log(caseConvert("Algorithms can kiss my ass", 'snakecase'));



function convertPhone(phoneStr){
    //Write some awesome code here!
}