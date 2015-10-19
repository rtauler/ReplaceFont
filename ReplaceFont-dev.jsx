var inFont = prompt("In Font?");

var inSize = prompt("Wich inSize");
if (inSize === ""){
    layer.texItem.size == inSize 
}
else if (inSize){}

    var outFont = prompt("Out Font?");
if (outFont === ""){
    outFont == inFont
}
else if (outFont){}

    var outSize = prompt("Wich Size?");
if (outSize === ""){
    outSize == inSize
}
else if (outSize){}

    var outColor = new SolidColor;
outColor.rgb.hexValue = prompt("Wich outColor?")


var doc = app.activeDocument;
if(app.documents.length != 0){

    for(i = 0; i < doc.artLayers.length; ++i){
        var layer = doc.artLayers[i];

        if((layer.kind == LayerKind.TEXT) && (layer.textItem.font == inFont) && (layer.textItem.size == inSize))  
        {

            layer.textItem.font = outFont;
            layer.textItem.size = outSize+"pt";
            layer.textItem.color = outColor;

        }
    }
}


// && (layer.textItem.size == inSize)