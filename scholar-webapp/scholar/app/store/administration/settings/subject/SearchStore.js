Ext.define('scholar.store.administration.settings.subject.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.subject.SearchModel',	
	autoLoad : true,
	data : [
			[ 'Mathematics', '1/5 12:00am','1/4 12:00am', '9/1 12:00am' ],
			[ 'Science', '1/5 12:00am','1/4 12:00am', '8/1 12:00am' ],
			[ 'Social', '1/9 12:00am','1/8 12:00am', '8/1 12:00am' ] 
		]
});