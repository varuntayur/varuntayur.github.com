Ext.define('scholar.view.MainMenu', {
	extend : 'Ext.ux.GroupTabPanel',
	xtype : 'mainMenu',
	activeGroup: 0,
	
	 requires:[
		'Ext.chart.*', 
		 'Ext.form.*',
		 'Ext.data.*', 
		 'Ext.grid.Panel',
		 'Ext.layout.container.Column', 
		 'Ext.window.Window',
		 'Ext.ux.LiveSearchGridPanel',
		
		'scholar.view.detail.other.Dashboard',
		
		'scholar.view.detail.transport.Dashboard',
		'scholar.view.detail.transport.route.Lookup',
		'scholar.view.detail.transport.vehicle.Lookup',
		
		'scholar.view.detail.library.Dashboard',
		'scholar.view.detail.library.lookup.Lookup' ,
		'scholar.view.detail.library.lookup.OPAC' ,
		
		'scholar.view.detail.administration.Dashboard',
		'scholar.view.detail.administration.admission.Manager',		
		'scholar.view.detail.administration.settings.Manager',			     
        'scholar.view.detail.administration.inventory.Manager',        
        'scholar.view.detail.administration.user.Manager',
        'scholar.view.detail.administration.examination.Manager',
        
        'scholar.view.detail.finance.payroll.Manager',
        'scholar.view.detail.finance.settings.Manager',
        'scholar.view.detail.finance.Dashboard',
        'scholar.view.detail.finance.fees.Manager',
		
		'scholar.view.detail.staff.Dashboard',
		'scholar.view.detail.staff.lookup.Lookup',
		'scholar.view.detail.staff.event.Manager',
		'scholar.view.detail.staff.leave.Manager',
		'scholar.view.detail.staff.timetable.Manager',
		'scholar.view.detail.staff.attendance.Manager',
		
		'scholar.view.detail.parent.Dashboard',
		
		'scholar.view.detail.student.Dashboard',
		'scholar.view.detail.student.Search',
		'scholar.view.detail.student.lookup.Lookup',
		'scholar.view.detail.student.performance.Report',
		'scholar.view.detail.student.attendance.Manager'],

	items : [
			{
				mainItem : 0,
				items : [
					{
						title : 'Administrator',
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
						title : 'Settings',
						tabTip : 'Settings Management',
						iconCls: 'x-icon-settings',
						xtype : 'settingsManager',
						margin : '10',
						height : null
					},
					{
						title : 'Examination',
						tabTip : 'Examination Management',
						iconCls: 'x-icon-exam',
						xtype : 'examManager',
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
						xtype : 'userRoleManager',
						margin : '10',
						height : null
					}
				]
			},
	        {
				mainItem : 0,
				items : [
					{
						iconCls: 'x-icon-student',
						title : 'Student',
						tabTip : 'Wear the Student hat',
						border : false,
						xtype : 'studentDashboard'
					}, {
						title : 'Lookup',
						tabTip : 'Lookup student detail',
						iconCls: 'x-icon-search',
						xtype : 'studentLookup',
						margin : '10',
						height : null
					}, {
						title : 'Attendance',
						tabTip : 'Attendance',
						iconCls: 'x-icon-attendance',
						xtype : 'attendanceManager',
						margin : '10',
						height : null
					}

				]
	         },
	         {
				mainItem : 0,
				items : [
					{
						title : 'Staff',
						iconCls: 'x-icon-staff',
						tabTip : 'Wear the Staff hat',
						border : false,
							xtype : 'staffDashboard'
					}, {
						title : 'Lookup',
						tabTip : 'Lookup staff information',
						iconCls: 'x-icon-search',
						xtype : 'staffLookup',
						margin : '10',
						height : null
					}, {
						title : 'Attendance',
						tabTip : 'Attendance',
						iconCls: 'x-icon-attendance',
						xtype : 'staffAttendanceManager',
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
						xtype : 'leaveManager',
						margin : '10',
						height : null
					},
					{
						title : 'Events/Memo',
						tabTip : 'Issue Memos and publish Event Calendars',
						iconCls:'x-icon-events',
						xtype : 'eventManager',
						margin : '10',
						height : null
					}
				]
	         },	
	         {
					mainItem : 0,
					items : [ 
					          {
								title : 'Parent',
								tabTip : 'Parental View',
								iconCls: 'x-icon-userrole',
								border : false,
								xtype : 'parentDashboard'
							  }				  
					 ]
		     },
		     {
					mainItem : 0,
					items : [ 
						{
							title : 'Library',
							iconCls: 'x-icon-library',			
							tabTip : 'Wear the Librarian hat',
							border : false,
								xtype : 'libraryDashboard'
						},
						{
							title : 'Lookup',
							tabTip : 'Book search',
							xtype : 'libraryLookup',
							iconCls: 'x-icon-search',
							margin : '10',
							height : null
						},
						{
							title : 'OPAC',
							tabTip : 'OPAC search',
							xtype : 'opacLookup',
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
								xtype : 'financeDashboard'
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
								xtype : 'feesManager',
								margin : '10',
								height : null
							},
							{
								title : 'Settings',
								tabTip : 'Settings related to finances',
								iconCls: 'x-icon-settings',
								xtype : 'financeSettingsManager',
								margin : '10',
								height : null
							}
			     ]
	         },
	         
	         {
				mainItem : 0,
				items : [
				         {
							title : 'Transport',
							tabTip : 'Manage Transport',
							iconCls: 'x-icon-transport',
							border : false,
							xtype : 'transportDashboard'
						  },
						  {
								title : 'Vehicle',
								tabTip : 'Manage Vehicle fleet',
								iconCls: 'x-icon-vehicle',
								border : false,
								xtype : 'vehicleLookup'
						  },
						  {
								title : 'Route',
								tabTip : 'Manage Vehicle routes',
								iconCls: 'x-icon-route',
								border : false,
								xtype : 'routeLookup'
						  }			  
				 ]
	         }
	         
	]
});