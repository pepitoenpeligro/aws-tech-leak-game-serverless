import * as cdk from 'aws-cdk-lib';
import {
	AccountRecovery,
	CognitoDomainOptions,
	OAuthScope,
	UserPool,
	UserPoolClient,
	UserPoolIdentityProvider,
	VerificationEmailStyle,
} from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export class AuthStack extends cdk.Stack {
	readonly serverlessCognitoUserPool: UserPool;
	readonly serverlessCognitoUserPoolWebClient: UserPoolClient;

	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		this.serverlessCognitoUserPool = new UserPool((scope = this), (id = 'ServerlessCognitoUserPool'), {
			userPoolName: 'TechLeakUserPool',
			selfSignUpEnabled: true,
			signInAliases: { email: true, username: true },
			autoVerify: { email: true },
			standardAttributes: {
				email: {
					required: true,
					mutable: true,
				},
			},
			passwordPolicy: {
				minLength: 8,
				requireDigits: true,
				requireLowercase: true,
				requireSymbols: true,
				requireUppercase: true,
				tempPasswordValidity: cdk.Duration.days(2),
			},
			userVerification: {
				emailSubject: 'Verify your email for TechLeak',
				emailStyle: VerificationEmailStyle.LINK,
				emailBody: 'You have been invited to join our awesome app! {##Verify Your Email##}',
			},
			accountRecovery: AccountRecovery.EMAIL_ONLY,
			// lambdaTriggers: {
			// }
		});

		this.serverlessCognitoUserPool.addClient((id = 'ServerlessCognitoUserPoolClient'), {
			userPoolClientName: 'TechLeakUserPoolClient',
			idTokenValidity: cdk.Duration.hours(24),
			accessTokenValidity: cdk.Duration.hours(1),
			refreshTokenValidity: cdk.Duration.days(7),
			preventUserExistenceErrors: true,
			generateSecret: true,
			authFlows: {
				userPassword: true,
				userSrp: true,
				adminUserPassword: false,
				custom: false,
			},
			oAuth: {
				flows: {
					authorizationCodeGrant: true,
					implicitCodeGrant: false,
				},
				scopes: [OAuthScope.EMAIL, OAuthScope.OPENID, OAuthScope.PROFILE],
				callbackUrls: ['http://localhost:3000'],
				logoutUrls: ['http://localhost:3000'],
			},
		});
	}
}
