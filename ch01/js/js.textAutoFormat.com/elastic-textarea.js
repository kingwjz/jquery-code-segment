function elasticTextArea (elementId){

    /*
     * This are two helper functions, they are delcared here for convinience
     * so we can get and set all styles at once and because they are not available in ext-core
     * only in ExtJs
     */
     
    //available in extjs (not ext-core) as element.getStyles
    function getStyles(el, arguments){
        var ret = {};
        total = arguments.length ;
        for (var n=0; n<total; n++ )
           ret[ arguments[n] ] = el.getStyle(arguments[n]); 
        return ret;
    }
    
    //available in extjs (not ext-core) as Ext.Domhelper.applyStyles
    function applyStyles  (el, styles){
        if(styles){
            var i = 0,
                len,
                style; 
                
            el = Ext.fly(el);                   
            if(Ext.isFunction(styles)) {
                styles = styles.call();
            }
            if (typeof styles == "string") {
                styles = styles.split(/:|;/g);
                for (len = styles.length; i < len;) {
                    el.setStyle(styles[i++], styles[i++]);  
                }
            } else if (Ext.isObject(styles)) {
                el.setStyle(styles);
            }           
        }   
    }
    
    //minimum and maximum text area size
    var minHeight = 10 ;
    var maxHeight = 300 ;

    //increment value when resizing the text area
    var growBy = 20 ;
    
    var el = Ext.get(elementId);
  //get text area width
    var width = el.getWidth();

    //current text area styles
    var styles = getStyles(el, ['padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'line-height', 'font-size', 'font-family', 'font-weight', 'font-style']);

    //store text area width into styles object to later apply them to the div 
    styles.width = width +'px' ;
        //hide the text area scrool to avoid flickering
        el.setStyle('overflow', 'hidden');
      //create the hidden div only if does not exists
        if(! this.div){

            //create the hidden div outside the viewport area
            this.div = Ext.DomHelper.append(Ext.getBody() || document.body, {
                'id':elementId + '-preview-div'
                ,'tag' : 'div'
                ,'style' : 'position: absolute; top: -100000px; left: -100000px;'
            }, true);

            //apply the text area styles to the hidden div
            applyStyles(this.div, styles);


            //recalculate the div height on each key stroke
            el.on('keyup', function() {
                elasticTextArea(elementId);
            }, this);
        }

      //clean up text area contents, so that no special chars are processed
      //replace \n with <br>&nbsp; so that the enter key can trigger a height increase
      //but first remove all previous entries, so that the height measurement can be as accurate as possible
          this.div.update( 
                  el.dom.value.replace(/<br \/>&nbsp;/, '<br />')
                              .replace(/<|>/g, ' ')
                              .replace(/&/g,"&amp;")
                              .replace(/\n/g, '<br />&nbsp;') 
                  );

          //finally get the div height
          var textHeight = this.div.getHeight();
      //enforce text area maximum and minimum size
          if ( (textHeight > maxHeight ) && (maxHeight > 0) ){
              textHeight = maxHeight ;
              el.setStyle('overflow', 'auto');
          }
          if ( (textHeight < minHeight ) && (minHeight > 0) ) {
              textHeight = minHeight ;
          }

          //resize the text area
          el.setHeight(textHeight + growBy , true);
      }
