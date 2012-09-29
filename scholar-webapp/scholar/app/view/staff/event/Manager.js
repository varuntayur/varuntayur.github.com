Ext.define('scholar.view.staff.event.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'Ext.window.Window','scholar.view.staff.event.Report' ],
	alias : 'widget.eventManager',
	title:'Event/Memo',
	items : [
	         {
	        	 title : 'Event Register',
	        	 layout:'fit',
	        	 xtype : 'memos',
	        		 iconCls:'x-icon-events'
	         },
	         {
	        	 title : 'Memos',
	        	 layout:'fit',
	        	 xtype : 'memos',
	        	 iconCls:'x-icon-memo'
	         } ]
});
