import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as python from '@aws-cdk/aws-lambda-python-alpha';
import * as apigw from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../profile-chat-server/.env') });

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a secret for the OpenAI API Key
    const apiKeySecret = new secretsmanager.Secret(this, 'OpenAIKeySecret', {
      secretName: 'OpenAI_API_Key',
      description: 'API Key for OpenAI',
      // Initialize with the value from .env if available, otherwise it will be a placeholder
      secretStringValue: process.env.OPENAI_API_KEY ? cdk.SecretValue.unsafePlainText(process.env.OPENAI_API_KEY) : undefined,
    });

    // Define the Python Lambda function
    const chatFunction = new python.PythonFunction(this, 'ChatFunction', {
      entry: path.join(__dirname, '../../profile-chat-server'), // Path to the directory containing requirements.txt
      runtime: lambda.Runtime.PYTHON_3_9,
      index: 'lambda_handler.py', // File containing the handler
      handler: 'handler', // Function name
      timeout: cdk.Duration.seconds(30),
      memorySize: 512,
      environment: {
        OPENAI_SECRET_NAME: apiKeySecret.secretName,
      },
    });

    // Grant the Lambda function permission to read the secret
    apiKeySecret.grantRead(chatFunction);

    // Define the HTTP API
    const api = new apigw.HttpApi(this, 'ChatApi', {
      corsPreflight: {
        allowOrigins: ['*'], // For development, allow all. Restrict in production.
        allowMethods: [apigw.CorsHttpMethod.POST],
        allowHeaders: ['*'],
      },
    });

    // Add the Lambda integration
    api.addRoutes({
      path: '/chat',
      methods: [apigw.HttpMethod.POST],
      integration: new integrations.HttpLambdaIntegration('ChatIntegration', chatFunction),
    });

    // Output the API URL
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url ?? 'Something went wrong with the API URL',
    });
  }
}
