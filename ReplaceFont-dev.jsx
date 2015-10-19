if(app.documents.length != 0){
    var doc = app.activeDocument;
    
    var inFont = prompt("In Font?");
    var outFont = prompt("Out Font?");
    var outSize = prompt("Wich Size?");
    var outColor = new SolidColor;
    outColor.rgb.hexValue = prompt("Wich outColor?")

    for(i = 0; i < doc.artLayers.length; ++i){
        var layer = doc.artLayers[i];
 
        if((layer.kind == LayerKind.TEXT) && (layer.textItem.font == inFont))  
        {

            layer.textItem.font = outFont;
            layer.textItem.size = outSize+"pt";
            layer.textItem.color = outColor;
            
        }
    }
}


// && (layer.textItem.size == inSize)