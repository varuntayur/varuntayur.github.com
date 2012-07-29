Ext.define('scholar.view.detail.finance.settings.general.GeneralSettings', {
	extend : 'Ext.form.Panel',
	alias : 'widget.financeGeneralSettingsTab',
	title:'General',
	frame : true,
	bodyPadding : 5,
	layout: 'anchor',
    defaults: {
        anchor: '30%'
    },
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
    defaultType: 'textfield',
	items: [
	        {
	    		xtype : 'datefield',
	    		fieldLabel : 'Financial Year Start Date'
	    	},
	    	{
	    		xtype : 'datefield',
	    		fieldLabel : 'Financial Year End Date'
	    	} 
	       ]
});
