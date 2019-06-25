// Copyright (c) 2018, ATD and contributors
// For license information, please see license.txt

frappe.ui.form.on('Represented Brand or Company', {
	refresh: function(frm) {

	}
});

// general fetch
cur_frm.add_fetch("supplier", "supplier_registration_application", "supplier_registration_application");
cur_frm.add_fetch("supplier", "user_email", "contact_person_email");
cur_frm.add_fetch("supplier", "name1", "contact_person_name");

// fetch link when refresh

frappe.ui.form.on("Represented Brand or Company", "refresh", function(frm) {
  frappe.model.with_doc("Supplier", frm.doc.supplier, function() { 
     var po = frappe.model.get_doc("Supplier", frm.doc.supplier);
     frm.set_value("contact_person_email", po.user_email);
     frm.set_value("contact_person_name", po.name1);
     frm.set_value("supplier_disabled", po.disabled);
    });

});

// Date Validation

frappe.ui.form.on("Represented Brand or Company", "refresh", function(frm) {
    if (frm.doc.supplier_disabled==0 && frm.doc.expiration_date_of_valid_representing_agreement < frappe.datetime.get_today()) {
        frappe.msgprint(__("Representing Agreement is expired"));
    }
});

// attachment validate

frappe.ui.form.on("Represented Brand or Company", "validate", function(frm) {
    if (frm.doc.copy_of_valid_r_a== null) {
        frappe.msgprint(__("Please attach copy of representative agreement or letter"));
    }
});

