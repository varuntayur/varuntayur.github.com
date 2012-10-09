Ext.define('scholar.store.administration.admission.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.admission.SearchModel',
	data : [
			[ '001/001', 'Amar',  'Male', 'Standard 1', '2012','4/5 12:00am', '1/4 12:00am' ],
			[ '001/002', 'Ishaan','Male', 'Standard 2', '2012','10/5 12:00am', '1/4 12:00am' ],
			[ '001/005', 'Pran',  'Male','Standard 3', '2012','8/5 12:00am', '1/4 12:00am' ],
			[ '001/010', 'Vishnu','Male', 'Standard 1', '2012','9/5 12:00am', '1/4 12:00am' ],
			[ '010/234', 'Sri Hari','Male', 'Standard 5', '2012','13/5 12:00am', '1/4 12:00am' ],
			[ '111/286', 'Shiva',   'Male','Standard 8', '2012','1/5 12:00am', '1/4 12:00am' ],
			[ '101/234', 'Jyestha', 'Male', 'Standard 9', '2012','1/5 12:00am', '1/4 12:00am' ],
			[ '201/002', 'Laksha',  'Female', 'Standard 10', '2012','4/5 12:00am', '1/4 12:00am' ],
			[ '501/004', 'Sangeetha','Female', 'Standard 4', '2012','17/5 12:00am', '1/4 12:00am' ],
			[ '116/006', 'Shwetha',  'Female','Standard 1', '2012','18/5 12:00am', '1/4 12:00am' ],
			[ '145/007', 'Sushma',   'Female','Standard 7', '2012','19/5 12:00am', '1/4 12:00am' ],
			[ '723/007', 'Santhosh', 'Male', 'Standard 5', '2012','1/9 12:00am', '1/8 12:00am' ]
		   ],
	autoLoad: true
});