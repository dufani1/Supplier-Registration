from __future__ import unicode_literals

import frappe

def get_context(context):
	context.read_only = 1

def get_list_context(context):
	context.row_template = "supplier_registration/templates/includes/represented_brand_or_company.html"
	context.get_list = get_represented_brand_or_company_list

def get_represented_brand_or_company_list(doctype, txt, filters, limit_start, limit_page_length = 20, order_by='modified desc'):
	supplier = get_supplier()
	represented_brand_or_company = frappe.db.sql("""select * from `tabRepresented Brand or Company`
		where supplier = %s""", supplier, as_dict = True)
	return represented_brand_or_company

def get_supplier():
	return frappe.get_value("Supplier",{"user_email": frappe.session.user}, "name")

def has_website_permission(doc, ptype, user, verbose=False):
	if doc.supplier == get_supplier():
		return True
	else:
		return False
