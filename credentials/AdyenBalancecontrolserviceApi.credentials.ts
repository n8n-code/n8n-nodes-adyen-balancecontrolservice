import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenBalancecontrolserviceApi implements ICredentialType {
        name = 'N8nDevAdyenBalancecontrolserviceApi';

        displayName = 'Adyen Balancecontrolservice API';

        icon: Icon = { light: 'file:../nodes/AdyenBalancecontrolservice/adyen-balancecontrolservice.svg', dark: 'file:../nodes/AdyenBalancecontrolservice/adyen-balancecontrolservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://pal-test.adyen.com/pal/servlet/BalanceControl/v1',
                        required: true,
                        placeholder: 'https://pal-test.adyen.com/pal/servlet/BalanceControl/v1',
                        description: 'The base URL of your Adyen Balancecontrolservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
