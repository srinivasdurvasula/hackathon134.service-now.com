var NewMatch = Class.create();
gs.print("Let's fight");

gs.print("Let's fight..Manoj");


NewMatch.prototype = {
    initialize: function() {
    },
	testMethod : function(){
		var gr = new GlideRecord('sys_user');
		gr.addActiveQuery();
		gr.query();
		while(gr.next()){
			var userId = gr.getValue('user_id');
			var name = gr.getValue('name');
			gs.print("UserDetails"+userId+":"+name);
		}
	},


	testMethod2 : function() {
		gs.print("UserDetails");
		gs.print("UserDetails");
	},
	


    type: 'NewMatch'
};