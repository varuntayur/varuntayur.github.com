Ext.define('scholar.view.menu.Staff', {
	extend : 'Ext.form.FieldSet',
	xtype : 'staffMenu',
	
	requires : [ 'scholar.view.detail.StaffSearch' ],

	title : 'Staff',
	collapsible : true,
	defaults : {
		labelWidth : 89,
		anchor : '100%',
		layout : {
			type : 'hbox',
			defaultMargins : {
				top : 0,
				right : 5,
				bottom : 0,
				left : 0
			}
		},
		margins : '10 10 10 10'
	},
	layout : {
		type : 'hbox',
		padding : '5',
		pack : 'center',
		align : 'stretchmax'
	},
	items : [
	         {
		xtype : 'button',
		scale : 'medium',
		text : 'Lookup/Search',
		listeners:{
			click: function()
			{
				new Ext.Window({
			        title: 'Lookup/Search Staff(s)',
			        closable: true,
			        plain: true,
			        layout: 'fit',
			        autoRender: true,
			        items: [ new scholar.view.detail.StaffSearch() ]
			    }).show();
			}
		}
	},{
		xtype : 'button',
		text : 'Attendance'
	},  {
		xtype : 'button',
		scale : 'large',
		text : 'Timetable'
	}, {
		xtype : 'button',
		scale : 'large',
		text : 'Reporting'
	} ]
});