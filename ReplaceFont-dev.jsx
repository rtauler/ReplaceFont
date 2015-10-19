if(app.documents.length != 0){
    var doc = app.activeDocument;
 
    for(i = 0; i < doc.artLayers.length; ++i){
        var layer = doc.artLayers[i];
 
        if((layer.kind == LayerKind.TEXT) || (textItem.SolidColor)) {
            layer.textItem.font = "ComicSansMS";
            
        }
    }
}