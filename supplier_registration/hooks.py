# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version
from frappe import _

app_name = "supplier_registration"
app_title = "Supplier Registration"
app_publisher = "ATD"
app_description = "Supplier Registration Management"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "engdofa@gmail.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/supplier_registration/css/supplier_registration.css"
# app_include_js = "/assets/supplier_registration/js/supplier_registration.js"

# include js, css files in header of web template
# web_include_css = "/assets/supplier_registration/css/supplier_registration.css"
# web_include_js = "/assets/supplier_registration/js/supplier_registration.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "supplier_registration.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "supplier_registration.install.before_install"
# after_install = "supplier_registration.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "supplier_registration.notifications.get_notification_config"
notification_config = "supplier_registration.config.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"supplier_registration.tasks.all"
# 	],
# 	"daily": [
# 		"supplier_registration.tasks.daily"
# 	],
# 	"hourly": [
# 		"supplier_registration.tasks.hourly"
# 	],
# 	"weekly": [
# 		"supplier_registration.tasks.weekly"
# 	]
# 	"monthly": [
# 		"supplier_registration.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "supplier_registration.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "supplier_registration.event.get_events"
# }

# fixtures
fixtures = [{
	"doctype": "Custom Script",
	"filters": {
		"name": ["in", "Supplier-Client"]
	}}]

# web form scripts
standard_portal_menu_items = [

	{"title": _("Supplier Registration Application"), "route": "/supplier-registration-application", "reference_doctype": "Supplier Registration Application", "role": "Supplier Applicant"},

        {"title": _("Supplier Selection and Assessment"), "route": "/supplier-selection-and-assessment", "reference_doctype": "Supplier Selection and Assessment", "role": "Supplier Applicant"},

        {"title": _("Supplier Information Change Request"), "route": "/supplier-information-change-request", "reference_doctype": "Supplier Information Change Request", "role": "Supplier"},

        {"title": _("Supplier Profile"), "route": "/supplier-profile", "reference_doctype": "Supplier", "role": "Supplier"},
        
        {"title": _("Represented Brand or Company"), "route": "/represented-brand-or-company", "reference_doctype": "Represented Brand or Company", "role": "Supplier"},

]


has_website_permission = {

	"Supplier Selection and Assessment": "supplier_registration.supplier_registration.web_form.supplier_selection_and_assessment.supplier_selection_and_assessment.has_website_permission",
        "Supplier": "supplier_registration.supplier_registration.web_form.supplier_profile.supplier_profile.has_website_permission",
        "Represented Brand or Company": "supplier_registration.supplier_registration.web_form.represented_brand_or_company.represented_brand_or_company.has_website_permission",
        	   	
}


