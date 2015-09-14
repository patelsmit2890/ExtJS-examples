Ext.define('app.model.Contact',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'first', mapping: 'name > first'},
        {name: 'last', mapping: 'name > last'},
        'company', 
        'email', 
        'state',
        {name: 'dob', type: 'date', dateFormat: 'm/d/Y'}
    ]
});
