if(app.documents.length != 0){
    var doc = app.activeDocument;
 	
    var inFont = prompt("In Font?");
	var outFont = prompt("Out Font?");

    for(i = 0; i < doc.artLayers.length; ++i){
        var layer = doc.artLayers[i];
 
        if(layer.textItem.font == inFont)  
        {

            layer.textItem.font = outFont;
            
        }
    }
}