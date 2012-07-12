Ext.define('scholar.view.MainMenu', {
	extend : 'Ext.ux.GroupTabPanel',
	xtype : 'mainMenu',
	activeGroup: 0,
	
	 requires:[
		'Ext.chart.*', 
		
		'scholar.view.detail.other.Dashboard',
		
		'scholar.view.detail.library.Dashboard',
		'scholar.view.detail.library.LibrarySearch' ,
		
		'scholar.view.detail.administration.Dashboard','scholar.view.detail.administration.admission.AdmissionManager',
		'scholar.view.detail.administration.batch.BatchManager',
        'scholar.view.detail.administration.course.CourseManager','scholar.view.detail.administration.InventoryManager',
//        'scholar.view.detail.administration.SubjectManager',
        
        'scholar.view.detail.finance.PayrollManager','scholar.view.detail.finance.FeeCollectionManager',
		
		'scholar.view.detail.staff.Dashboard','scholar.view.detail.staff.Search',
		'scholar.view.detail.staff.TimeTableManager',
		
		'scholar.view.detail.parent.Dashboard',
		
		'scholar.view.detail.student.Dashboard','scholar.view.detail.student.Search','scholar.view.detail.student.SearchDetail',
		'scholar.view.detail.student.AttendanceManager'],

	items : [ {
		mainItem : 0,
		items : [ {
			iconCls: 'x-icon-student',
			title : 'Student',
			tabTip : 'Wear the Student hat',
			border : false,
			xtype : 'studentDashboard'
		}, {
			title : 'Search',
			tabTip : 'Student search',
			iconCls: 'x-icon-search',
			xtype : 'studentSearchDetail',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			iconCls: 'x-icon-attendance',
			xtype : 'attendanceManager',
			margin : '10',
			height : null
		}, {
			title : 'Grades',
			tabTip : 'Student search',
			iconCls: 'x-icon-grades',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		} ]
	}, {
		mainItem : 0,
		items : [ {
			title : 'Staff',
			iconCls: 'x-icon-staff',
			tabTip : 'Wear the Staff hat',
			border : false,
				xtype : 'staffDashboard'
		}, {
			title : 'Search',
			tabTip : 'Staff search',
			iconCls: 'x-icon-search',
			xtype : 'staffSearch',
			margin : '10',
			height : null
		}, {
			title : 'Attendance',
			tabTip : 'Attendance',
			iconCls: 'x-icon-attendance',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}, {
			title : 'TimeTable',
			tabTip : 'Manage Timetable',
			iconCls:'x-icon-timetable',
			xtype : 'timeTable',
			margin : '10',
			height : null
		},
		{
			title : 'Leave Absence',
			tabTip : 'Manage/Apply Leaves',
			iconCls:'x-icon-leave',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		},
		{
			title : 'Memo',
			tabTip : 'Issue Memos',
			iconCls:'x-icon-memo',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		},
		 {
			title : 'Events',
			tabTip : 'Publish Events',
			iconCls:'x-icon-events',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}
		]
	},	
	{
		mainItem : 0,
		items : [ {
			title : 'Configuration',
			tabTip : 'Be the administrator',
			iconCls: 'x-icon-administrator',
			border : false,
				xtype : 'administrationDashboard'
		},
		{
			title : 'Admissions',
			tabTip : 'Admissions',
			iconCls: 'x-icon-admission',
			xtype : 'admissionManager',
			margin : '10',
			height : null
		},	
		{
			title : 'Course',
			tabTip : 'Course Management',
			iconCls: 'x-icon-course',
			xtype : 'courseManager',
			margin : '10',
			height : null
		},		
		{
			title : 'Batch',
			tabTip : 'Batch Management',
			iconCls: 'x-icon-batch',
			xtype : 'batchManager',
			margin : '10',
			height : null
		},
//		{
//			title : 'Subject',
//			tabTip : 'Subject Management',
//			iconCls: 'x-icon-batch',
//			xtype : 'subjectManager',
//			margin : '10',
//			height : null
//		},
		{
			title : 'Examination',
			tabTip : 'Examination Management',
			iconCls: 'x-icon-exam',
			xtype : 'courseManager',
			margin : '10',
			height : null
		},
		{
			title : 'Inventory',
			tabTip : 'Inventory',
			iconCls: 'x-icon-inventory',
			xtype : 'inventoryManager',
			margin : '10',
			height : null
		},
		{
			title : 'User/Role',
			tabTip : 'Manager User Roles',
			iconCls:'x-icon-userrole',
			xtype : 'studentSearch',
			margin : '10',
			height : null
		}
		]
	},	
	{
		mainItem : 0,
		items : [
		           {
						title : 'Finance',
						tabTip : 'Manage Finances',
						border : false,
						xtype : 'otherDashboard'
					},
					{
						title : 'Payroll',
						tabTip : 'Payroll',
						iconCls: 'x-icon-payroll',
						xtype : 'payrollManager',
						margin : '10',
						height : null
					},
					{
						title : 'Fee Collection',
						tabTip : 'Fee Collection',
						iconCls: 'x-icon-fees',
						xtype : 'feeCollectionManager',
						margin : '10',
						height : null
					}
	             ]
	},
	{
		mainItem : 0,
		items : [ {
			title : 'Library',
			iconCls: 'x-icon-library',			
			tabTip : 'Wear the Librarian hat',
			border : false,
				xtype : 'libraryDashboard'
		}, {
			title : 'Book Search',
			tabTip : 'Student search',
			xtype : 'librarySearch',
			iconCls: 'x-icon-search',
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
					title : 'Transport',
					tabTip : 'Manage Transport',
					iconCls: 'x-icon-transport',
					border : false,
					xtype : 'studentSearch'
				  },
				  {
						title : 'Vehicle',
						tabTip : 'Manage Vehicle fleet',
						iconCls: 'x-icon-vehicle',
						border : false,
						xtype : 'studentSearch'
				  },
				  {
						title : 'Route',
						tabTip : 'Manage Vehicle routes',
						iconCls: 'x-icon-route',
						border : false,
						xtype : 'studentSearch'
				  },
				  {
						title : 'Fee',
						tabTip : 'Manage transport fee',
						iconCls: 'x-icon-fees',
						border : false,
						xtype : 'studentSearch'
				  }
		        ]
	},
	{
		mainItem : 0,
		items : [ {
					title : 'Parent',
					tabTip : 'Parental View',
					iconCls: 'x-icon-userrole',
					border : false,
					xtype : 'parentDashboard'
				  }				  
		        ]
	}
	]
});