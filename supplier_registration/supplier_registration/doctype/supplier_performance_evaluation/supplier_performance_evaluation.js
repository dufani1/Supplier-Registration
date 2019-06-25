// Copyright (c) 2019, ATD and contributors
// For license information, please see license.txt

frappe.ui.form.on('Supplier Performance Evaluation', {
	refresh: function(frm) {

	}
});

// update field and save in other documents

frappe.ui.form.on("Supplier Performance Evaluation", {
    on_submit : function(frm) {
        frappe.call({
            "method": "frappe.client.set_value",
            "args": {
                "doctype": "Supplier",
                "name": frm.doc.supplier,
                "fieldname": "select_11",
                "value": frm.doc.select_11
                   }
        });
    }
});

// update disabled check field to 1 and save in other documents

frappe.ui.form.on("Supplier Performance Evaluation", {
    on_submit : function(frm) {
        if(frm.doc.select_11== "No"){
        frappe.call({
            "method": "frappe.client.set_value",
            "args": {
                "doctype": "Supplier",
                "name": frm.doc.supplier,
                "fieldname": "disabled",
                "value": 1
                   }
        });
      }
    }
});
 
// update disabled check field to 0 and save in other documents

frappe.ui.form.on("Supplier Performance Evaluation", {
    on_submit : function(frm) {
        if(frm.doc.select_11== "Yes"){
        frappe.call({
            "method": "frappe.client.set_value",
            "args": {
                "doctype": "Supplier",
                "name": frm.doc.supplier,
                "fieldname": "disabled",
                "value": 0
                   }
        });
      }
    }
});

// before submit validate

frappe.ui.form.on("Supplier Performance Evaluation", "before_submit", function(frm) {
    if (frm.doc.select_11=="") {
        frappe.msgprint(__("(Would you recommend dealing with this Supplier again?) is mandatory"));
        frappe.validated = false;
    }
});

// Fetching Child Tables Template without button
frappe.ui.form.on("Supplier Performance Evaluation", "insert_template", function(frm) {
frappe.model.with_doc("Supplier Performance Evaluation Template", frm.doc.supplier_performance_evaluation_template, function() {
var tabletransfer= frappe.model.get_doc("Supplier Performance Evaluation Template", frm.doc.supplier_performance_evaluation_template)
$.each(tabletransfer.performance_evaluation_template_table, function(index, row){
d = frm.add_child("table_6");
d.supplier_evaluation_criteria = row.supplier_evaluation_criteria;
d.max_evaluation = row.max_evaluation;
cur_frm.refresh_field("table_6");
})
});
});

// summation of column in child table in parent (this scripts in parent doctype)

frappe.ui.form.on("Supplier Evaluation Criteria table", {
   grade_of_evaluation:function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.table_6.forEach(function(d) { total += d.grade_of_evaluation; });
   frm.set_value("grade_of_evaluation", total);
   refresh_field("grade_of_evaluation");
 },
   table_6_remove:function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.table_6.forEach(function(d) { total += d.grade_of_evaluation; });
   frm.set_value("grade_of_evaluation", total);
   refresh_field("grade_of_evaluation");
   	}
   });

// Summation of column in child table in parent (this scripts in parent doctype)

frappe.ui.form.on("Supplier Evaluation Criteria table", {
   grade_of_evaluation:function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.table_6.forEach(function(d) { total += d.max_evaluation; });
   frm.set_value("max_grade", total);
   refresh_field("max_grade");
 },
   table_6_remove:function(frm, cdt, cdn){
   var d = locals[cdt][cdn];
   var total = 0;
   frm.doc.table_6.forEach(function(d) { total += d.max_evaluation; });
   frm.set_value("max_grade", total);
   refresh_field("max_grade");
   	}
   });
