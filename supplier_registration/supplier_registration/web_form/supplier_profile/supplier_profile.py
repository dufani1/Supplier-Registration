from __future__ import unicode_literals

import frappe

def get_context(context):
	context.read_only = 1

def get_list_context(context):
	context.row_template = "supplier_registration/templates/includes/supplier_profile.html"
	context.get_list = get_supplier_profile_list

def get_supplier_profile_list(doctype, txt, filters, limit_start, limit_page_length = 20, order_by='modified desc'):
	contact_person_email = get_contact_person_email()
	supplier_profile = frappe.db.sql("""select * from `tabSupplier`
		where contact_person_email = %s""", contact_person_email, as_dict = True)
	return supplier_profile

def get_contact_person_email():
	return frappe.get_value("User",{"email": frappe.session.user}, "name")

def has_website_permission(doc, ptype, user, verbose=False):
	if doc.contact_person_email == get_contact_person_email():
		return True
	else:
		return False

