#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AppStagingSynthesizer, DeploymentIdentities } from '@aws-cdk/app-staging-synthesizer-alpha';
import { BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { BackendApiStack } from '../lib/app/stateless/backend-api';
import { DatabaseStack } from '../lib/app/stateful/database-stack';
import { AuthStack } from '../lib/app/stateful/auth-stack';

const app = new cdk.App({
	defaultStackSynthesizer: AppStagingSynthesizer.defaultResources({
		appId: 'tech-leak-app',
		stagingBucketEncryption: BucketEncryption.S3_MANAGED,
		imageAssetVersionCount: 3,
		deploymentIdentities: DeploymentIdentities.cliCredentials(),
		bootstrapQualifier: 'myorg',
		deployTimeFileAssetLifetime: cdk.Duration.days(5),
		stagingStackNamePrefix: 'pepitoenpeligro',
		// staging_bucket_name: 'my-bucket-example-staging-name',
	}),
});

const environment = {
	account: process.env.CDK_DEFAULT_ACCOUNT,
	region: process.env.CDK_DEFAULT_REGION,
};

const backend = new BackendApiStack(app, 'BackendApi', {
	env: environment,
});

const auth = new AuthStack(app, 'AuthStack', {
	env: environment,
});

const database = new DatabaseStack(app, 'DatabaseStack', {
	env: environment,
});
