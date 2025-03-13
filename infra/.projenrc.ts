import { awscdk } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
	author: 'github username',
	authorAddress: 'github email',
	cdkVersion: '2.182.0',
	defaultReleaseBranch: 'main',
	jsiiVersion: '~5.0.0',
	name: 'tech-leak-infra',
	projenrcTs: true,
	repositoryUrl: 'https://github.com/pepitoenpeligro/aws-tech-leak-game-serverless',

	// deps: [],                /* Runtime dependencies of this module. */
	// description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
	// devDeps: [],             /* Build dependencies for this module. */
	// packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
