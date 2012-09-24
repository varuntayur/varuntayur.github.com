Ext.define('scholar.view.detail.staff.timetable.Manager', {
	extend : 'Ext.tab.Panel',
	requires : [ 'scholar.view.detail.staff.timetable.Search'],
	alias : 'widget.timetableManager',
	title:'Timetable',
	items : [
	         {
				title : 'Timetable Search',
				layout:'fit',
				iconCls:'x-icon-register',
				xtype : 'timeTableSearch'
	         },
	         {
					title : 'Timetable Factory',
					iconCls:'x-icon-settings',
					layout:'fit'
		     },
	         {
				title : 'Timetable Settings',
				iconCls:'x-icon-settings',
				layout:'fit'
	         }
	        ]
});

