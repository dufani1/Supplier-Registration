// Copyright (c) 2018, ATD and contributors
// For license information, please see license.txt

frappe.ui.form.on('Represented Brand or Company', {
	refresh: function(frm) {

	}
});


// Date Validation

frappe.ui.form.on("Represented Brand or Company", "refresh", function(frm) {
    if (frm.doc.expiration_date_of_valid_representing_agreement < frappe.datetime.get_today()) {
       frm.set_value("status","Expired"); 
       frappe.msgprint(__("Representing Agreement is expired"));
    }
    else {
        frm.set_value("status","Valid");
       }
});

// attachment validate

frappe.ui.form.on("Represented Brand or Company", "validate", function(frm) {
    if (frm.doc.copy_of_valid_r_a== null) {
        frappe.msgprint(__("Please attach copy of representative agreement or letter"));
    }
});

