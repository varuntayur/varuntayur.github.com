Ext.define('scholar.view.detail.finance.settings.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 
	             'scholar.view.detail.finance.settings.general.GeneralSettings'
	           ],
	alias : 'widget.financeSettingsManager',
	title : 'Settings',
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},

	items : [
	         {
	        	 xtype : 'financeGeneralSettingsTab',
	        	 iconCls:'x-icon-settings'
	         }
		 ]
	
});
