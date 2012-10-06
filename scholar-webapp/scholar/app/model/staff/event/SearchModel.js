Ext.define('scholar.model.staff.event.SearchModel', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'eventName',
		type : 'string'
	}, {
		name : 'eventDescription',
		type : 'string'
	}, {
		name : 'eventDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});