// Set up a store by our Model defined at MyApp.model.*
Ext.define('MyApp.store.User', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.User',
    alias: 'store.user',
    data : [
        {firstName: 'Ed',    lastName: 'Spencer'},
        {firstName: 'Tommy', lastName: 'Maintz'},
        {firstName: 'Aaron', lastName: 'Conran'},
        {firstName: 'Jamie', lastName: 'Avins'}
    ],
    proxy: {
        // don't user remote ajax to sync store, default is remote ajax
        type: 'memory',
        reader: {
            type: 'json',
            // rootProperty: 'items'  // set it if structure like data.items = [...]
        }
    }
});
