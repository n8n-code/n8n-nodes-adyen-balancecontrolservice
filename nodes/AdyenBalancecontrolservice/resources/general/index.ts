import type { INodeProperties } from 'n8n-workflow';

export const generalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					]
				}
			},
			"options": [
				{
					"name": "Post Balance Transfer",
					"value": "Post Balance Transfer",
					"action": "Start a balance transfer",
					"description": "Starts a balance transfer request between merchant accounts. The following conditions must be met before you can successfully transfer balances:\n\n* The source and destination merchant accounts must be under the same company account and legal entity.\n\n* The source merchant account must have sufficient funds.\n\n* The source and destination merchant accounts must have at least one common processing currency.\n\nWhen sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/balanceTransfer"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /balanceTransfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "json",
			"default": "{}",
			"description": "The amount of the transfer in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Merchant",
			"name": "fromMerchant",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the source merchant account from which funds are deducted.",
			"routing": {
				"send": {
					"property": "fromMerchant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "A reference for the balance transfer. If you don't provide this in the request, Adyen generates a unique reference.\nMaximum length: 80 characters.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "To Merchant",
			"name": "toMerchant",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the destination merchant account from which funds are transferred.",
			"routing": {
				"send": {
					"property": "toMerchant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "tax",
			"description": "The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.",
			"options": [
				{
					"name": "Tax",
					"value": "tax"
				},
				{
					"name": "Fee",
					"value": "fee"
				},
				{
					"name": "Terminal Sale",
					"value": "terminalSale"
				},
				{
					"name": "Credit",
					"value": "credit"
				},
				{
					"name": "Debit",
					"value": "debit"
				},
				{
					"name": "Adjustment",
					"value": "adjustment"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"General"
					],
					"operation": [
						"Post Balance Transfer"
					]
				}
			}
		},
];
