import * as cdk from 'aws-cdk-lib';
import { EndpointType, RestApi, Cors, MethodLoggingLevel } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class BackendApiStack extends cdk.Stack {
	public readonly restApi: RestApi;

	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const restApi = new RestApi((scope = this), (id = `backend-rest-api`), {
			description: 'Base API Gateway for AWS Tech Leak Game',
			endpointConfiguration: {
				types: [EndpointType.REGIONAL],
			},
			deploy: true,
			defaultCorsPreflightOptions: {
				allowOrigins: Cors.ALL_ORIGINS,
				allowHeaders: [...Cors.DEFAULT_HEADERS],
			},
			restApiName: 'TechLeakApi',
			cloudWatchRole: true,
			cloudWatchRoleRemovalPolicy: cdk.RemovalPolicy.DESTROY,
			deployOptions: {
				metricsEnabled: true,
				loggingLevel: MethodLoggingLevel.INFO,
				dataTraceEnabled: true,
				stageName: 'v1',
				tracingEnabled: true,
			},
		});

		this.restApi = restApi;

		new cdk.CfnOutput((scope = this), (id = 'rest-api-published-url'), {
			value: this.restApi.url,
		});
	}
}

export default BackendApiStack;
