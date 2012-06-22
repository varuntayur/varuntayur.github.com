Ext.define('scholar.view.ScholarMainMenu', {
	extend : 'Ext.ux.GroupTabPanel',
	xtype : 'scholarMainMenu',

	items : [ {
		mainItem : 0,
		items : [ {
			xtype : 'panel',
			title : 'Student',
			tabTip : 'Wear the Student hat',
			border : false,
			items : [ {
				xtype : 'studentMenu'
			} ]
		}, {
			title : 'Search',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Grades',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		} ]
	}, {
		mainItem : 0,
		items : [ {
			xtype : 'panel',
			title : 'Staff',
			tabTip : 'Wear the Staff hat',
			border : false,
			items : [ {
				xtype : 'staffMenu'
			} ]
		}, {
			title : 'Search',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Grades',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}]
	},
	 {
		mainItem : 0,
		items : [ {
			xtype : 'panel',
			title : 'Library',
			tabTip : 'Wear the Librarian hat',
			border : false,
			items : [ {
				xtype : 'libraryMenu'
			} ]
		}, {
			title : 'Search',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Grades',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}]
	},
	{
		mainItem : 0,
		items : [ {
			xtype : 'panel',
			title : 'Library',
			tabTip : 'Be the administrator',
			border : false,
			items : [ {
				xtype : 'administrationMenu'
			} ]
		}, {
			title : 'Search',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Grades',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}]
	},
	{
		mainItem : 0,
		items : [ {
			xtype : 'panel',
			title : 'Other',
			tabTip : 'Manage other activities',
			border : false,
			items : [ {
				xtype : 'otherMenu'
			} ]
		}, {
			title : 'Search',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Grades',
			tabTip : 'Student search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}]
	}]

// items : [ {
// xtype : 'studentMenu'
// }, {
// xtype : 'staffMenu'
// }, {
// xtype : 'administrationMenu'
// }, {
// xtype : 'libraryMenu'
// }, {
// xtype : 'otherMenu'
// } ]
});