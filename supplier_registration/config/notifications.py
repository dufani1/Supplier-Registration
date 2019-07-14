# -*- coding: utf-8 -*-
# Copyright (c) 2018, Ahmed Taher Dofa and contributors
# For license information, please see license.txt


from __future__ import unicode_literals

def get_notification_config():
		return {
			"for_doctype": {
			"Supplier Registration Application": {
				"status":("in",("Open", "Awaiting Original Documents", "Under Review"))
				},
                        "Supplier Information Change Request": {
			        "status":"Open"
				},
                          "Represented Brand or Company": {
			        "status":"Expired"
				}
			},
	}

