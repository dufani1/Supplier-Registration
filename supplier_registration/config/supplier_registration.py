from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
	      {
			"label": _("Registration Application"),
			"items": [
				{
					"type": "doctype",
					"name": "Supplier Registration Application",
					"description": _("Supplier Registration Application"),
				},
				
			]
		},
                {
			"label": _("Supplier Assessment To Be Registered Supplier"),
			"items": [
				{
					"type": "doctype",
					"name": "Supplier Selection and Assessment",
					"description": _("Supplier Selection and Assessment"),
				},
			]
		},
                {
			"label": _("Approved Suppliers"),
			"items": [
				{
					"type": "doctype",
					"name": "Supplier",
					"description": _("Supplier"),
				},
                                {
					"type": "doctype",
					"name": "Represented Brand or Company",
					"description": _("Represented Brand or Company"),
				},

			]
		},
                {
			"label": _("Supplier's Information Change Requests"),
			"items": [
				{
					"type": "doctype",
					"name": "Supplier Information Change Request",
					"description": _("Supplier Information Change Request"),
				},

			]
		},
                {
			"label": _("Periodical Supplier Performance Evaluation"),
			"items": [
				{
					"type": "doctype",
					"name": "Supplier Performance Evaluation",
					"description": _("Supplier Performance Evaluation"),
				},
				{
					"type": "doctype",
					"name": "Supplier Performance Evaluation Template",
					"description": _("Supplier Performance Evaluation Template"),
				},
			]
		},
                {
			"label": _("Related Reports"),
			"items": [
				
				{
					"type": "report",
					"name": "Approved Suppliers Report",
					"doctype": "Supplier"
				},
                                {
					"type": "report",
					"name": "Represented Brands or Companies Report",
					"doctype": "Represented Brand or Company"
				},
                                {
					"type": "report",
					"name": "Supplier Selection and Assessments Report",
					"doctype": "Supplier Selection and Assessment"
				},
                                {
					"type": "report",
					"name": "Supplier Registration Applications Report",
					"doctype": "Supplier Registration Application"
				},
                                
			]
		},
                  {
			"label": _("Setup"),
			"items": [
				{
					"type": "doctype",
					"name": "Supplier Offered Service",
					"description": _("Supplier Offered Service"),
				},
				{
					"type": "doctype",
					"name": "Supplier Offered Service Group",
					"description": _("Supplier Offered Service Group"),
				},
			]
		}
              
	]
