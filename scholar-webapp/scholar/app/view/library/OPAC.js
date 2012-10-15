Ext.define('scholar.view.library.OPAC', {
	extend : 'Ext.form.Panel',
	requires : [ 'scholar.view.library.lookup.Search'],
	alias: 'widget.opacLookup',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [{
					xtype : 'button',
					iconCls:'x-icon-new',
					text : 'Issue',
					action:'return',
   				  },
				  {
					xtype : 'button',
					iconCls:'x-icon-new',
					text : 'Return',
					action:'return',
				   },
				   {
					xtype : 'button',
					iconCls:'x-icon-delete',
					text : 'Reserve',
					action:'reserve',
				   },
				   {
						xtype : 'button',
						iconCls:'x-icon-delete',
						text : 'Request',
						action:'request',
				   },
				   {
						xtype : 'button',
						iconCls:'x-icon-delete',
						text : 'View Information',
						action:'viewBookInfo',
				   }]
	} ],
    title:'OPAC',
    layout:'fit',
    items: [{
       			xtype: 'librarySearch'
    		}]	
});

