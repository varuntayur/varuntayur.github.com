Ext.define('scholar.view.Viewport', {
	extend : 'Ext.container.Viewport',

	requires : [ 'scholar.view.scholarlogo', 'scholar.view.scholarmenu' ],

	layout : {
		type : 'border',
		padding : 5
	},
	defaults : {
		split : true
	},
	items : [ {
		region : 'north',
		xtype : 'scholarLogo',
		split : false,
		height : 40,
		padding : 5
	}, {
		region : 'center',
		xtype : 'scholarMenu'
	},
	{
        region: 'east',
        collapsible: true,
        floatable: true,
        split: true,
        width: 200,
        minWidth: 120,
        minHeight: 140,
        maxWidth: 160,
        title: 'News Feed',
        layout: {
            type: 'vbox',
            padding: 5,
            align: 'stretch'
        },
        items: [ {
            xtype: 'component',
            html: 'News Feed 1'
        },
        {
            xtype: 'component',
            html: 'News Feed 2'
        }]
    }]

});