Ext.define('scholar.view.detail.administration.examination.settings.SettingsTab', {
	extend : 'Ext.form.Panel',
	alias : 'widget.examSettingsTab',
	title : 'Settings',
	requires : [ ],
	frame : true,
	bodyPadding : 5,
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	layout : {
		 type : 'border',
		 padding : 5
	 },
	 defaults : {
		 split : true
	 },

	items : [{
        xtype: 'checkboxgroup',
        fieldLabel: 'Auto Layout',
        cls: 'x-check-group-alt',
        items: [
            {boxLabel: 'Grades Only', name: 'cb-auto-1'},
            {boxLabel: 'Marks Only', name: 'cb-auto-2', checked: true},
            {boxLabel: 'Grades and Marks', name: 'cb-auto-3'}            
        ]
    }]
});
