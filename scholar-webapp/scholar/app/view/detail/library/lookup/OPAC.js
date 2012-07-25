Ext.define('scholar.view.detail.library.lookup.OPAC', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.detail.library.lookup.Search'],
	alias: 'widget.opacLookup',
	layout:'fit',
    title:'OPAC',
    items: [{
       			xtype: 'librarySearch',
       			listeners:{
		        				selectionchange : function(model, records) {
		    						if (records[0]) {
		    							this.up('form').getForm().loadRecord(records[0]);
		    						}
		    					}
      			}
    		}]	
});

