var NewScript17 = Class.create();
gs.print("Hi I am Manoj!");
NewScript17.prototype = {
    initialize: function() {
    },
	
	testMethod : function(){
		var gr = new GlideRecord('sys_user');
		gr.addActiveQuery();
		gr.query();
		while(gr.next()){
			var name = gr.getValue('name');
		}
	},
	testMethod1 : function(){
		var inc = new GlideRecord('incident');
       inc.addActiveQuery();
       inc.query();
		while(inc.next()){
		var number = inc.getValue('number');
		}
	},

    type: 'NewScript17'
};
