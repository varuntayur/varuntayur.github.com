Ext.define('scholar.view.detail.staff.timetable.Manager', {
	extend : 'Ext.calendar.CalendarPanel',
	requires : [ 'Ext.calendar.CalendarPanel'],
	    xtype: 'timeTable',
	    eventStore: Ext.create('Ext.calendar.data.MemoryEventStore', {
            data: Ext.calendar.data.Events.getData()
        }),
	    calendarStore: Ext.create('Ext.calendar.data.MemoryCalendarStore', {
            data: Ext.calendar.data.Calendars.getData()
        }),
	    border: false,
	    id:'app-calendar',
	    region: 'center',
	    activeItem: 3, // month view
	    
	    monthViewCfg: {
	        showHeader: true,
	        showWeekLinks: true,
	        showWeekNumbers: true
	    },
	    
	    listeners: {
	        'eventclick': {
	            fn: function(vw, rec, el){
	                this.showEditWindow(rec, el);
	                this.clearMsg();
	            },
	            scope: this
	        },
	        'eventover': function(vw, rec, el){
	            //console.log('Entered evt rec='+rec.data.Title+', view='+ vw.id +', el='+el.id);
	        },
	        'eventout': function(vw, rec, el){
	            //console.log('Leaving evt rec='+rec.data.Title+', view='+ vw.id +', el='+el.id);
	        },
	        'eventadd': {
	            fn: function(cp, rec){
	                this.showMsg('Event '+ rec.data.Title +' was added');
	            },
	            scope: this
	        },
	        'eventupdate': {
	            fn: function(cp, rec){
	                this.showMsg('Event '+ rec.data.Title +' was updated');
	            },
	            scope: this
	        },
	        'eventcancel': {
	            fn: function(cp, rec){
	                // edit canceled
	            },
	            scope: this
	        },
	        'viewchange': {
	            fn: function(p, vw, dateInfo){
	                if(this.editWin){
	                    this.editWin.hide();
	                }
	                if(dateInfo){
	                    // will be null when switching to the event edit form so ignore
	                    //Ext.getCmp('app-nav-picker').setValue(dateInfo.activeDate);
	                    //this.updateTitle(dateInfo.viewStart, dateInfo.viewEnd);
	                }
	            },
	            scope: this
	        },
	        'dayclick': {
	            fn: function(vw, dt, ad, el){
	                this.showEditWindow({
	                    StartDate: dt,
	                    IsAllDay: ad
	                }, el);
	                this.clearMsg();
	            },
	            scope: this
	        },
	        'rangeselect': {
	            fn: function(win, dates, onComplete){
	                this.showEditWindow(dates);
	                this.editWin.on('hide', onComplete, this, {single:true});
	                this.clearMsg();
	            },
	            scope: this
	        },
	        'eventmove': {
	            fn: function(vw, rec){
	                var mappings = Ext.calendar.data.EventMappings,
	                    time = rec.data[mappings.IsAllDay.name] ? '' : ' \\a\\t g:i a';
	                
	                rec.commit();
	                
	                this.showMsg('Event '+ rec.data[mappings.Title.name] +' was moved to '+
	                    Ext.Date.format(rec.data[mappings.StartDate.name], ('F jS'+time)));
	            },
	            scope: this
	        },
	        'eventresize': {
	            fn: function(vw, rec){
	                rec.commit();
	                this.showMsg('Event '+ rec.data.Title +' was updated');
	            },
	            scope: this
	        },
	        'eventdelete': {
	            fn: function(win, rec){
	                this.eventStore.remove(rec);
	                this.showMsg('Event '+ rec.data.Title +' was deleted');
	            },
	            scope: this
	        },
	        'initdrag': {
	            fn: function(vw){
	                if(this.editWin && this.editWin.isVisible()){
	                    this.editWin.hide();
	                }
	            },
	            scope: this
	        }
	    }
});

