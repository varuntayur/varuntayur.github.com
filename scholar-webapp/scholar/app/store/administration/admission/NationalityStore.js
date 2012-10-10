Ext.define('scholar.store.administration.admission.NationalityStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.admission.NationalityModel',
	data : [ {
		"abbr" : "AL",
		"nationality" : "Indian"
	}, {
		"abbr" : "AK",
		"nationality" : "Other"
	} ],
	autoLoad : true
});