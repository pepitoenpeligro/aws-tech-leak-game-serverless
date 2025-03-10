import * as cdk from 'aws-cdk-lib';
import {
	AttributeType,
	BillingMode,
	Table,
	TableEncryption,
	StreamViewType,
	TableClass,
} from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class DatabaseStack extends cdk.Stack {
	readonly usersTable: Table;

	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		this.usersTable = new Table((scope = this), (id = 'UsersTable'), {
			partitionKey: { name: 'userId', type: AttributeType.STRING },
			billingMode: BillingMode.PAY_PER_REQUEST,
			tableName: 'TechLeakUsers',
			removalPolicy: cdk.RemovalPolicy.DESTROY,
			encryption: TableEncryption.AWS_MANAGED,
			pointInTimeRecovery: false,
			stream: StreamViewType.NEW_IMAGE,
			maxReadRequestUnits: 5,
			maxWriteRequestUnits: 5,
			tableClass: TableClass.STANDARD,
			contributorInsightsEnabled: true,
		});
	}
}
