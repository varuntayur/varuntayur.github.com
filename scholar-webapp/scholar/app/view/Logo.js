Ext.define('scholar.view.Logo', {
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