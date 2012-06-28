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
			xtype : 'attendanceManager',
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
			tabTip : 'Staff search',
			xtype : 'staffSearch',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'TimeTable',
			tabTip : 'Manage Timetable',
			xtype : 'timeTable',
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
			title : 'Book Search',
			tabTip : 'Student search',
			xtype : 'librarySearch',
			margin : '10',
			height : null
		}, {
			title : 'Inventory',
			tabTip : 'Attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'OPAC',
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
			title : 'Administrator',
			tabTip : 'Be the administrator',
			border : false,
			items : [ {
				xtype : 'administrationMenu'
			} ]
		}, {
			title : 'Course',
			tabTip : 'Course Management',
			xtype : 'courseManager',
			margin : '10',
			height : null
		}, {
			title : 'Batch',
			tabTip : 'Batch Management',
			xtype : 'batchManager',
			margin : '10',
			height : null
		},
		{
			title : 'Payroll',
			tabTip : 'Payroll',
			xtype : 'payrollManager',
			margin : '10',
			height : null
		},
		{
			title : 'Fee Collection',
			tabTip : 'Fee Collection',
			xtype : 'feeCollectionManager',
			margin : '10',
			height : null
		},
		{
			title : 'Inventory',
			tabTip : 'Inventory',
			xtype : 'inventoryManager',
			margin : '10',
			height : null
		},
		{
			title : 'Admissions',
			tabTip : 'Admissions',
			xtype : 'admissionManager',
			margin : '10',
			height : null
		}
		]
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
			title : 'Inventory',
			tabTip : 'Inventory search',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Transport',
			tabTip : 'Manage Transport',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'Memo',
			tabTip : 'Issue Memos',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		},
		 {
			title : 'Events',
			tabTip : 'Publish Events',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		},
		{
			title : 'User/Role',
			tabTip : 'Manager User Roles',
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