Ext.define('scholar.store.staff.event.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.event.SearchModel',
    data : [
	        [ 'Independance Day', 'Program schedule: 9.am',  '9/1 12:00am' ],
			[ 'Krishna Janmashthami Celebrations', 'Krishna costume event at Auditorium starts 3pm', '9/1 12:00am' ]				 
	       ],
	autoLoad: true
});