Ext.define('scholar.view.MainMenu', {
	extend : 'Ext.ux.GroupTabPanel',
	xtype : 'scholarMainMenu',
	
	 requires:[
//		'scholar.view.menu.Library', 'scholar.view.menu.Other',
		
		'Ext.chart.*', 
		
		'scholar.view.detail.other.Dashboard',
		
		'scholar.view.detail.library.Dashboard',
		'scholar.view.detail.library.LibrarySearch' ,
		
		'scholar.view.detail.administration.Dashboard','scholar.view.detail.administration.AdmissionManager',
		'scholar.view.detail.administration.BatchManager',
        'scholar.view.detail.administration.CourseManager','scholar.view.detail.administration.FeeCollectionManager',
        'scholar.view.detail.administration.InventoryManager','scholar.view.detail.administration.PayrollManager',
		
		'scholar.view.detail.staff.Dashboard','scholar.view.detail.staff.Search',
		'scholar.view.detail.staff.TimeTableManager',
		
		'scholar.view.detail.student.Dashboard','scholar.view.detail.student.Search',
		'scholar.view.detail.student.AttendanceManager'],

	items : [ {
		mainItem : 0,
		items : [ {
			xtype : 'panel',
			title : 'Student',
			tabTip : 'Wear the Student hat',
			border : false,
			items : [ {
				xtype : 'studentDashboard'
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
				xtype : 'staffDashboard'
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
				xtype : 'libraryDashboard'
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
				xtype : 'administrationDashboard'
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
			title : 'Manager',
			tabTip : 'Manage other activities',
			border : false,
			items : [ {
				xtype : 'otherDashboard'
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