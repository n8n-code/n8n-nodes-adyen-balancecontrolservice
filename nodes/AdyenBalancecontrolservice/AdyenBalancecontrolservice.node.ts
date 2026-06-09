import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generalDescription } from './resources/general';

export class AdyenBalancecontrolservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'adyen-balancecontrolservice',
		name: 'N8nDevAdyenBalancecontrolservice',
		icon: { light: 'file:./adyen-balancecontrolservice.svg', dark: 'file:./adyen-balancecontrolservice.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Balance Control API lets you transfer funds between merchant accounts that belong to the same legal entity and are under the same company account',
		defaults: { name: 'adyen-balancecontrolservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenBalancecontrolserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "General",
					"value": "General",
					"description": ""
				}
			],
			"default": ""
		},
		...generalDescription
		],
	};
}
