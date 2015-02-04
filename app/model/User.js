// Set up a model to use in our Store
Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'firstName', type: 'string'},
        {name: 'lastName',  type: 'string'},
        {name: 'age',       type: 'int'},
        {name: 'eyeColor',  type: 'string'}
    ]
});