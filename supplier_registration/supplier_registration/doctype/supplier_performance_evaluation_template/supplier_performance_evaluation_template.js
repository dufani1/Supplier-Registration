// Copyright (c) 2019, ATD and contributors
// For license information, please see license.txt

frappe.ui.form.on('Supplier Performance Evaluation Template', {
	refresh: function(frm) {

	}
});

// summation of column in child table in parent

frappe.ui.form.on("Supplier Evaluation Criteria template table", {
   max_evaluation: function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.performance_evaluation_template_table.forEach(function(d) { total += d.max_evaluation; });
   frm.set_value("total_grade", total);
   refresh_field("total_grade");
 },
   performance_evaluation_template_table_remove:function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.performance_evaluation_template_table.forEach(function(d) { total += d.max_evaluation; });
   frm.set_value("total_grade", total);
   refresh_field("total_grade");
   	}
   });
