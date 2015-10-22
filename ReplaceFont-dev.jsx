////// function collect all layers //////  
function collectLayers (theParent, allLayers) {  
          if (!allLayers) {var allLayers = new Array}   
          else {};  
          for (var m = theParent.layers.length - 1; m >= 0;m--) {  
                    var theLayer = theParent.layers[m];  
// apply the function to layersets;  
                    if (theLayer.typename == "ArtLayer") {  
                              allLayers.push(theLayer)  
                              }  
                    else {  
                              allLayers = (collectLayers(theLayer, allLayers))  
// this line includes the layer groups;  
                              allLayers.push(theLayer);  
                              }  
                    };  
          return allLayers  
          };
/**
 * It changes the fonts form source to destination
 *
 * @param {Array}  layerList   Array de capes
 * @param {Object} fontData    { inFont:'Arial', outFont: 'Helvetica', props: { size: 20, color: '#COFFEE' } }
 * @param {Number} indecx
 */
function changeFont( layerList, fontData, index ) {

     if (typeof fontData.inFont === 'undefined') {
          fontData.inFont = prompt("input Font");
          fontData.inSize = prompt("input insize");
          fontData.outFont = prompt("output Font");
          props.color.rgb.hexValue = prompt("output color");
          props.size = prompt("output size")+"px";
          

          if (!fontData.inFont || !fontData.outFont) {
               alert("Please insert fonts");
               return;
          }
     }

     if (index < 0) {
          // recursivity
          //alert('finish');
     } else {
          // Change the sytle for the current index
          var theLayer = layerList[index];
          var prop;
          if((theLayer.kind == LayerKind.TEXT) && (theLayer.textItem.font == fontData.inFont) && (theLayer.textItem.size == fontData.inSize)) {
               for (prop in fontData.props){
                    
                    theLayer.textItem[prop] = fontData.props[prop];
               }
               theLayer.textItem.font = fontData.outFont;
          }

          changeFont(layerList, fontData, index -1); 

     }
}


// get the layers
var theLayers = collectLayers(app.activeDocument, []);
// initial props
var props = {
     color: new SolidColor,
     size : ""
};
// porps modifiers

// chage the font
changeFont(theLayers, { props: props }, theLayers.length - 1);


// inFont: 'ArialMT', outFont: 'ComicSansMS', props: { size: '20px' }
// © David Luna & Roman Tauler 2015
