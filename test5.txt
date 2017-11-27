var Demo1 = Class.create();
Demo1.prototype = {
    initialize: function() {
    },
	testMethod : function(){
	
    var rec = new GlideRecord('sc_req_item');
	rec.addQuery('sys_id', current.request_item);
	rec.query();
	while(rec.next()){
			 if(rec.hasAttachments()){
			 var k = rec.getValue('link');
			}  
		}
     
  
	},
    type: 'Demo1'
};