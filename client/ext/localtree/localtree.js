/**
 * Code Editor for the Ajax.org Cloud IDE
 */
require.def("ext/localtree/localtree",
    ["core/ide", "core/ext", "text!ext/localtree/localtree.xml"],
    function(ide, ext, markup) {

return ext.register("ext/localtree/localtree", {
    name    : "Local Tree",
    dev     : "Ajax.org",
    alone   : true,
    type    : ext.GENERAL,
    markup  : markup,

    init : function(){
        ide.vbMain.selectSingleNode("a:hbox[1]/a:vbox[1]").appendChild(trFiles);

        trFiles.addEventListener("afterselect", function() {
            var node = this.selected;
            if (node.tagName != 'file')
                return;

            ext.openEditor(this.value, node);
        });
    },

    enable : function(){
        trFiles.show();
    },

    disable : function(){
        trFiles.hide();
    },

    destroy : function(){
        mdlFiles.destroy(true, true);
        trFiles.destroy(true, true);
    }
});

    }
);