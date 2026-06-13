import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generalDescription } from './resources/general';

export class AdyenBalancecontrolservice implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Adyen Balancecontrolservice',
                name: 'N8nDevAdyenBalancecontrolservice',
                icon: { light: 'file:./adyen-balancecontrolservice.svg', dark: 'file:./adyen-balancecontrolservice.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Transfer funds between same-entity merchant accounts via Balance Control API.',
                defaults: { name: 'Adyen Balancecontrolservice' },
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
