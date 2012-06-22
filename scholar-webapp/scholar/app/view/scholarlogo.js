Ext.define('scholar.view.ScholarLogo', {
    extend: 'Ext.Toolbar',
    xtype : 'scholarLogo',
    
    ui   : 'sencha',
    height: 53,
    
    items: [
        {
            xtype: 'component',
            cls  : 'x-logo',
            html : 'Scholar'
        }
    ]
});