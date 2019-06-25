from frappe import _

def get_data():
	return {
		'fieldname': 'supplier_registration_application',
		
		'transactions': [
	        {
				'label': _('Supplier Assessment'),
				'items': ['Supplier Selection and Assessment'],
                        
		},		
                {
				'label': _('Registered Suppliers'),
				'items': ['Supplier'],
                        
		},

		]
	      }
