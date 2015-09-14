Ext.onReady(function(){
	Ext.define("ChartModel",{
		extend: "Ext.data.Model",
		fields:[
		        {
		        	name: "year",
		        	type: "string"
		        },
		        {
		        	name:"turnover",
		        	type: "int"
		        }
		        ]
	});

	var dataStore=Ext.create("Ext.data.Store",{
		model:"ChartModel",
		proxy:{
			type: "ajax",
			url:"turnoverdetails.json",
			reader:{
				type:"json",
				root:"turnoverdetails"
			}
		},
		autoLoad:true
	}
	);

	Ext.create("Ext.panel.Panel",{
		width: 400,
		height: 400,
		title: "Company Turnover comparison",
		layout: "fit",
		draggable:true,
		items:[{
			xtype :"chart",
			animate: true,
			store:dataStore,
			axes:[{
				type: "Numeric",
				position: "left",
				fields: ["turnover"],
				title: "Turnover in Crores"
			},
			{
				type: "Category",
				position: "bottom",
				fields: ["year"],
				title: "Financial Year"
			}
			],//end of axes
			series:[
			        {
			        	type: "bar",
			        	axis: "left",
			        	xField: "year",
			        	yField: "turnover"
			        }
			        ]//end of series

		}
		],//end of items
		style:  "margin: 50px",
		renderTo: Ext.getBody()
	});
});