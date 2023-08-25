var grp = new GlideRecord('sys_user_group');

grp.addEncodedQuery('nameINUS Construction (Jobsight),US SOM,NA ServiceSight Infosys L2,NA JobSight Infosys L2,NA VE Website Infosys L2,NA Field Complete Infosys L2,NA SRT Infosys L2,NA Oz Infosys L2,NA iDashboards Infosys L2,NA Forms Infosys L2,NA ADP Interfaces Infosys L2,NA TechConnect Infosys L2,NA Soundnet Infosys L2,NA RITS Infosys L2,NA QTEST Infosys L2,NA MFG App Supp Infosys L2,NA GateKeeper Infosys L2,NA Fidelity Benefits Infosys L2,NA Docware Infosys L2,NA Bensolver Infosys L2,NA Appian Infosys L2,NA Accurate Infosys L2,US Vertical Express,US Docware,US Strategic Applications,US MFG App Supp Order Mgt,US MFG App Supp Middleton,US FLD Appian,US FLD L2 Sales Applications'); 

grp.query();

while(grp.next()){
var gr = new GlideRecord('sys_group_has_role');

gr.Initialize();

gr.group = grp.sys_id;

gr.role = '1f26da36c0a8016b000c7f06a1ce7e14';   //Role sys_id

gr.insert();

}