var inFont = prompt("write inFont","Write inFont");
var outFont = prompt("write outFont","Write outFont");
 
app.preferences.typeUnits = TypeUnits.PIXELS;
var doc = app.activeDocument;
 
function changeFonts(target){
	var layers = target.layers;
	for(var i=0;i<layers.length;i++){
		if(layers[i].typename == "LayerSet"){
			changeFonts(layers[i]);
		} else {
			if((layers[i].kind == LayerKind.TEXT) && (layers[i].textItem.font == inFont)) {
				layers[i].textItem.font = outFont;
			};
		};
	};
};

changeFonts(doc);
