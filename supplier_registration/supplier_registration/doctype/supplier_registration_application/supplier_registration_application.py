# -*- coding: utf-8 -*-
# Copyright (c) 2018, ATD and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import json
from frappe import _

from frappe.model.document import Document
from frappe.utils import now
from frappe.utils.user import is_website_user
sender_field = "user_email"
class SupplierRegistrationApplication(Document):
	def validate(self):
		if (self.get("__islocal") and self.via_customer_portal):
			self.flags.create_communication = True
		if not self.user_email:
			self.user_email = frappe.session.user

def get_list_context(context=None):
	return {
		"title": _("Supplier Registration Application"),
		"get_list": get_supplier_registration_application_list,
		"row_template": "templates/includes/supplier_registration_application.html",
		"show_sidebar": True,
		"show_search": True,
		'no_breadcrumbs': True
	}

def get_supplier_registration_application_list(doctype, txt, filters, limit_start, limit_page_length=20, order_by=None):
	from frappe.www.list import get_list
	user = frappe.session.user
	ignore_permissions = False
	if is_website_user():
		if not filters: filters = []
		filters.append(("Supplier Registration Application", "user_email", "=", user))
		ignore_permissions = True

	return get_list(doctype, txt, filters, limit_start, limit_page_length, ignore_permissions=ignore_permissions)


