// Copyright (c) 2018, ATD and contributors
// For license information, please see license.txt

frappe.ui.form.on('Supplier Selection and Assessment', {
	refresh: function(frm) {

	}
});

// before submit validate

frappe.ui.form.on("Supplier Selection and Assessment", "before_submit", function(frm) {
    if (frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Under Review" ) {
        frappe.msgprint(__("Supplier Registration Status shall be Approved or Rejected before submit"));
        frappe.validated = false;
    }
});

// update and save in other documents when validate

frappe.ui.form.on("Supplier Selection and Assessment", {
    validate : function(frm) {
        if (frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Under Review"){
        frappe.call({
            "method": "frappe.client.set_value",
            "args": {
                "doctype": "Supplier Registration Application",
                "name": frm.doc.supplier_registration_application,
                "fieldname": "status",
                "value": frm.doc.s_r_status
                   }
        });
     }
    }
});

// update and save in other documents when submit

frappe.ui.form.on("Supplier Selection and Assessment", {
    on_submit : function(frm) {
        if (frm.doc.s_r_status=="Approved" || frm.doc.s_r_status=="Rejected"){
        frappe.call({
            "method": "frappe.client.set_value",
            "args": {
                "doctype": "Supplier Registration Application",
                "name": frm.doc.supplier_registration_application,
                "fieldname": "status",
                "value": frm.doc.s_r_status
                   }
        });
    }
   }
});
//fetch from regisraton application
cur_frm.add_fetch("supplier_registration_application", "full_name_organization", "organization_name");
cur_frm.add_fetch("supplier_registration_application", "contact_person_email", "contact_person_email");
cur_frm.add_fetch("supplier_registration_application", "organization_email_address", "organization_email");
cur_frm.add_fetch("supplier_registration_application", "user_email", "user_email");
cur_frm.add_fetch("supplier_registration_application", "preferred_correspondence_language", "preferred_correspondence_language");
cur_frm.add_fetch("supplier_registration_application", "business_registration_type", "business_registration_type");



// Make filed mandatory based on value of another field
cur_frm.cscript.custom_validate= function(doc){
cur_frm.set_df_property("reasons_for_rejection", "reqd",doc.s_r_status=="Rejected");

}

// check fild mandatory based on follwing cases
frappe.ui.form.on("Supplier Selection and Assessment", "validate", function(frm) {
    if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.memorandum_provided==0) {
        frappe.msgprint(__("Copy of company’s memorandum shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
      } 
    else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.articles_association_provided==0){
        frappe.msgprint(__("Copy of company’s articles of association shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.business_license_provided==0) {
        frappe.msgprint(__("Copy of valid business license shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.valid_commercial_registry==0) {
        frappe.msgprint(__("Copy of valid commercial registry shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.offered_serv==0) {
        frappe.msgprint(__("Offered services shall be included in company scope of services, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.contact_person_provided==0) {
        frappe.msgprint(__("Details of legal contact person shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.supplier_contact_info==0) {
        frappe.msgprint(__("Supplier address and contact info shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.registration_pledge_provided==0) {
        frappe.msgprint(__("Copy of signed registration pledge shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.paid_up_capital==0) {
        frappe.msgprint(__("Company's paid-up capital shall be as per legal documens, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.bank_details_pr==0) {
        frappe.msgprint(__("Bank details shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.tax_cer_registration==0) {
        frappe.msgprint(__("Copy of tax payment certificate for registration purpose shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.budget_pr==0) {
        frappe.msgprint(__("Budgets and financial statements certified by an auditor shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.organization_chart_provided==0) {
        frappe.msgprint(__("Organization chart shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
    else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && frm.doc.qms_manual==0) {
        frappe.msgprint(__("Quality management system manual shall be provided, when Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if ((frm.doc.s_r_status=="Awaiting Original Documents" || frm.doc.s_r_status=="Approved") && (frm.doc.certificat_achevment==0 && frm.doc.list_privous_work==1)) {
        frappe.msgprint(__("Copy of certificates of work achievement shall be provided, when Supplier has previous experience and Supplier Registration Status set (Awaiting Original Documents or Approved)."));
        frappe.validated = false;
    }
   else if (frm.doc.s_r_status=="Approved" && frm.doc.identical_original==0) {
        frappe.msgprint(__("Provided softcopies shall be identical to original documents, when Supplier Registration Status set (Approved)."));
        frappe.validated = false;
    }
});









