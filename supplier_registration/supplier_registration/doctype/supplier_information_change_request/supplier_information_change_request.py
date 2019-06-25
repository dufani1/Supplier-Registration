# -*- coding: utf-8 -*-
# Copyright (c) 2018, Ahmed Taher and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import json
from frappe import _

from frappe.model.document import Document
from frappe.utils import now
from frappe.utils.user import is_website_user

class SupplierInformationChangeRequest(Document):
	def validate(self):
		if (self.get("__islocal") and self.via_customer_portal):
			self.flags.create_communication = True
		if not self.user_email:
			self.user_email = frappe.session.user
		
		self.set_lead_contact(self.user_email)
	def set_lead_contact(self, email_id):
		import email.utils
		email_id = email.utils.parseaddr(email_id)[1]
		if email_id:
			
			if not self.contact and not self.supplier:
				self.contact = frappe.db.get_value("Contact", {"email_id": email_id})

				if self.contact:
					contact = frappe.get_doc('Contact', self.contact)
					self.supplier = contact.get_link_for('Supplier')
					


def get_list_context(context=None):
	return {
		"title": _("Supplier Information Change Request"),
		"get_list": get_supplier_information_change_request_list,
		"row_template": "templates/includes/supplier_information_change_request.html",
		"show_sidebar": True,
		"show_search": True,
		'no_breadcrumbs': True
	}

def get_supplier_information_change_request_list(doctype, txt, filters, limit_start, limit_page_length=20, order_by=None):
	from frappe.www.list import get_list
	user = frappe.session.user
	ignore_permissions = False
	if is_website_user():
		if not filters: filters = []
		filters.append(("Supplier Information Change Request", "user_email", "=", user))
		ignore_permissions = True

	return get_list(doctype, txt, filters, limit_start, limit_page_length, ignore_permissions=ignore_permissions)
