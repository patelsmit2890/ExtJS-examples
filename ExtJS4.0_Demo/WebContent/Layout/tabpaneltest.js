Ext.onReady(function(){
	Ext.create("Ext.tab.Panel",{
		width:400,
		height:300,
		defaults:{
			tpl:"This is {panel} panel"
		},
		items:[
		       {
		    	   title:"First",
		    	   items:[
		    	          {
		    	        	  xtype:"panel",
		    	        	  //	data:{panel:"first"}
		    	        	  items:[
		    	        	         {xtype:"textfield",
		    	        	        	 fieldLabel:"Name"
		    	        	         },
		    	        	         {
		    	        	        	 html:"This is first panel"
		    	        	         }
		    	        	         ]

		    	          }]
		       },
		       {
		    	   title:"Second",
		    	   items:[
		    	          {
		    	        	  xtype:"component",
		    	        	  html:"This is second panel"
		    	          }]
		       },
		       {
		    	   title:"Third",
		    	   items:[
		    	          {
		    	        	  xtype:"component",
		    	        	  html:"This is third panel"
		    	          }]
		       }
		       ],
		       renderTo:Ext.getBody()
	});
});

