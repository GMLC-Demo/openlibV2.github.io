ModelInfo = 
[{"Org":"INL","Name":"IEEE 13 node distribution test feeder [ieee13node]","Platform":"RSCAD","Category":"Distribution Grid","Type":"Model","ID":"10000001","Summary":"models/00_INL/testTemplate_1.html", "Download":"https://ewh.ieee.org/soc/pes/dsacom/testfeeders/"},
 {"Org":"LLNL","Name":"Scalable simulation test case 1","Platform":"GridDyn","Category":"Transmission Grid","Type":"Model","ID":"10000002","Summary":"models/01_LLNL/testTemplate_2.html", "Download":"https://github.com/LLNL/GridDyn"},
 {"Org":"NREL","Name":"Distributed Energy Resource Hosting Capacity Analysis Tool (DERHCAT)","Platform":"OpenDSS", "Category":"Distribution Grid","Type":"Model","ID":"10000003","Summary":"models/02_NREL/testTemplate_3.html", "Download":"https://www.nrel.gov/analysis/models_tools.html"},
 {"Org":"NREL","Name":"Power Quality Score Calculation for Distribution Systems with DER Integration (PQScal)","Platform":"Python", "Category":"Distribution Grid","Type":"Model","ID":"10000004","Summary":"models/02_NREL/testTemplate_4.html", "Download":"https://www.nrel.gov/analysis/models_tools.html"},
 {"Org":"NREL","Name":"An Extended IEEE 118-bus Test System with High Renewable Penetration","Platform":"PLEXOS", "Category":"Transmission Grid","Type":"Model","ID":"10000005","Summary":"models/02_NREL/testTemplate_5.html", "Download":"https://www.nrel.gov/esif/"},
 {"Org":"SNL","Name":"Battery Energy Storage System Model","Platform":"PSSE", "Category":"Transmission Grid","Type":"Model","ID":"10000006","Summary":"models/03_SNL/testTemplate_6.html", "Download":"http://www.sandia.gov/"},
 {"Org":"SNL","Name":"Central PV System Model","Platform":"PSSE", "Category":"Transmission Grid","Type":"Model","ID":"10000007","Summary":"models/03_SNL/testTemplate_7.html", "Download":"http://www.sandia.gov/"},
 {"Org":"SNL","Name":"Central PV System Model","Platform":"PSSE", "Category":"Distribution Grid","Type":"Model","ID":"10000008","Summary":"models/03_SNL/testTemplate_8.html", "Download":"http://www.sandia.gov/"},
 {"Org":"SNL","Name":"Central PV System Model","Platform":"PSSE", "Category":"Transmission Grid","Type":"Model","ID":"10000009","Summary":"models/03_SNL/testTemplate_9.html", "Download":"http://www.sandia.gov/"},
 {"Org":"SNL","Name":"Wind Turbine Generator Type 1 – Fixed-speed, induction generator","Platform":"PSSE", "Category":"Transmission Grid","Type":"Model","ID":"10000010","Summary":"models/03_SNL/testTemplate_10.html", "Download":"http://www.sandia.gov/"},
 {"Org":"SNL","Name":"Wind Turbine Generator Type 2 – Variable slip, induction generator with variable rotor resistance","Platform":"PSSE", "Category":"Transmission Grid","Type":"Model","ID":"10000011","Summary":"models/03_SNL/testTemplate_11.html", "Download":"http://www.sandia.gov/"},
 {"Org":"SNL","Name":"Wind Turbine Generator Type 3 – Variable speed, doubly-fed asynchronous generator with rotor-side converter","Platform":"PSSE", "Category":"Transmission Grid","Type":"Model","ID":"10000012","Summary":"models/03_SNL/testTemplate_12.html", "Download":"http://www.sandia.gov/"},
 {"Org":"SNL","Name":"Wind Turbine Generator Type 4 – Variable speed, generators with full converter interface","Platform":"PSSE", "Category":"Transmission Grid","Type":"Model","ID":"10000013","Summary":"models/03_SNL/testTemplate_13.html", "Download":"http://www.sandia.gov/"},
 {"Org":"PNNL","Name":"GridLAB-D","Platform":"GridLABD", "Category":"Distribution Grid","Type":"Model","ID":"10000014","Summary":"models/04_PNNL/testTemplate_14.html", "Download":"http://www.gridlabd.org/"},
 {"Org":"PNNL","Name":"MANGO – Modal Analysis for Grid Operation","Platform":"Matlab", "Category":"Transmission Grid","Type":"Model","ID":"10000015","Summary":"models/04_PNNL/testTemplate_15.html", "Download":"http://www.pnl.gov/publications/abstracts.asp?report=306137"},
 /*
 {"Type":"Model","ID":"10000002","Org":"ORNL","Name":"Hospital HVAC model","Category":"HVAC","Platform":"Labview","Summary":"model/testTemplate_2.html"},
 {"Category":"Residential Appliances","Platform":"Python","Name":"Residential home probabilistic load model","Org":"NREL","ID":"10000003","Type":"Model","Summary":"model/testTemplate_3.html"},
 {"Category":"Commercial Non-HVAC","Platform":"Python","Name":"Large machine shop model","Org":"LBNL","ID":"10000004","Type":"Model","Summary":"model/testTemplate_4.html"},
 {"Type":"Model","ID":"10000005","Org":"NREL","Name":"Parking structure PV panel model","Category":"PV Panel","Platform":"Matlab"},
 {"Platform":"Labview","Category":"Inverter","Name":"Inverter model with transient load capability","Org":"NREL","ID":"10000006","Type":"Model"},
 {"Type":"Model","ID":"10000007","Category":"Battery","Platform":"Labview","Org":"SNL","Name":"Lead acid battery storage system"},
 {"Type":"Model","ID":"10000008","Org":"SNL","Name":"Battery powered load leveling inverter","Category":"Inverter","Platform":"Matlab"},
 {"Type":"Model","ID":"10000009","Org":"ANL","Name":"Electric vehicle charging depot model","Platform":"Matlab","Category":"Electric Vehicle"},
 {"Org":"INL","Name":"Supercapacitor regenertive braking model","Category":"Supercapacitor","Platform":"Labview","Type":"Model","ID":"10000010"},
 {"ID":"10000011","Type":"Model","Name":"Large underground flywheel storage model","Org":"INL","Category":"Flywheel","Platform":"Matlab"},
 {"Category":"Fuel Cell","Platform":"Python","Name":"Photoelectrochemical fuel cell model","Org":"INL","ID":"10000012","Type":"Model"},
 {"Platform":"Python","Category":"Electrolyzer","Org":"INL","Name":"Large scale PEM Electrolyzer model","Type":"Model","ID":"10000013"},
 {"Name":"Bedrock heat exchanger model","Org":"PNNL","Category":"Thermal Storage","Platform":"Matlab","ID":"10000014","Type":"Model"},
 {"Org":"PNNL","Name":"400kV Transmission grid with disturbance analysis","Platform":"Matlab","Category":"Transmission Grid","Type":"Model","ID":"10000015"}
 */
];

$(document).ready( function() {
	$(".filter-selectors").change( function() {
		filltable();
	}); 
});
 
function filltable() {
	myhtm = "<table><tbody><tr><th width=\"80px\">ID</th><th width=\"40px\">Org</th><th width=\"60px\">Type</th><th width=\"200px\">Category</th><th width=\"100px\">Platform</th><th width=\"500px\">Name</th><th width=\"100px\">Summary</th><th width=\"100px\">Link</th></tr>";
	numberin = 0;
	ModelInfo.forEach( function(element) {
		itsin = 1;
		if ( ! $("#selector1").val() ) {
			itsin1 = 1;
		}
		else {
			itsin1 = 0;
			$("#selector1").val().forEach( function(value) {
				if (element.Org === value) {
					itsin1 = 1;
				}
			});
		}
		itsin *= itsin1;
		if ( ! $("#selector2").val() ) {
			itsin2 = 1;
		}
		else {
			itsin2 = 0;
			$("#selector2").val().forEach( function(value) {
				if (element.Type === value) {
					itsin2 = 1;
				}
			});
		}
		itsin *= itsin2;
		
		if ( ! $("#selector3").val() ) {
			itsin3 = 1;
		}
		else {
			itsin3 = 0;
			$("#selector3").val().forEach( function(value) {
				if (element.Category === value) {
					itsin3 = 1;
				}
			});
		}
		itsin *= itsin3;
		
		if ( ! $("#selector4").val() ) {
			itsin4 = 1;
		}
		else {
			itsin4 = 0;
			$("#selector4").val().forEach( function(value) {
				if (element.Platform === value) {
					itsin4 = 1;
				}
			});
		}
		itsin *= itsin4;

		if (itsin) {
			numberin += 1;
			myhtm += "<tr><td>" + element.ID + "</td><td>" + element.Org + "</td><td>" + element.Type + "</td><td>" + element.Category + "</td><td>" + element.Platform + "</td><td>" + element.Name + "</td><td><a target=\"_blank\" href=\'"+element.Summary+"'\">Summary</a></td><td><a target=\"_blank\" href=\'"+element.Download+"'\">Download</a></td></tr>";
		}	
	});
	myhtm += "</tbody></table>";
	$("#num-found").html(numberin);
	$("#selector-results").html(myhtm);
}
