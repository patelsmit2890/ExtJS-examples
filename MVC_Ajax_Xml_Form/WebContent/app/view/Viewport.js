/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('app.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'app.view.contact.ContactForm'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'contactform',
                    reader : Ext.create('Ext.data.reader.Xml', {
                        model: 'app.model.Contact',
                        record : 'contact',
                        successProperty: '@success'
                    }),
                    errorReader: Ext.create('Ext.data.reader.Xml', {
                        model: 'app.model.FieldError',
                        record : 'field',
                        successProperty: '@success'
                    })
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
