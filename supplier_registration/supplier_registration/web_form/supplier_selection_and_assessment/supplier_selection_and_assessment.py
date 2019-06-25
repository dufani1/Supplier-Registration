from __future__ import unicode_literals

import frappe

def get_context(context):
        context.read_only = 1

def get_list_context(context):
	context.row_template = "supplier_registration/templates/includes/supplier_selection_and_assessment.html"
	context.get_list = get_supplier_selection_and_assessment_list

def get_supplier_selection_and_assessment_list(doctype, txt, filters, limit_start, limit_page_length = 20, order_by='modified desc'):
	user_email = get_user()
	supplier_selection_and_assessment = frappe.db.sql("""select * from `tabSupplier Selection and Assessment`
		where user_email = %s order by assessment_date""", user_email, as_dict = True)
	return supplier_selection_and_assessment

def get_user():
	return frappe.get_value("User",{"email": frappe.session.user}, "name")

def has_website_permission(doc, ptype, user, verbose=False):
	if doc.user_email == get_user():
		return True
	else:
		return False
