# Claudia.js command line usage

Deploy a Node.JS project to AWS as a lambda microservice, optionally updating APIs/event hooks.

## Usage
```bash
claudia [command] {OPTIONS}
```

## Supported commands

* [`create`](create.md) Create the initial lambda function and related security role.
* [`update`](update.md) Deploy a new version of the Lambda function using project files, update any associated web APIs
* [`set-version`](set-version.md) Create or update a lambda alias/api stage to point to the latest deployed version
* [`add-s3-event-source`](add-s3-event-source.md) Add a notification event to Lambda when a file is added to a S3 bucket, and set up access permissions
* [`add-sns-event-source`](add-sns-event-source.md) Add a notification event to Lambda when a message is published on a SNS topic
* [`add-scheduled-event`](add-scheduled-event.md) Add a recurring notification event
* [`test-lambda`](test-lambda.md) Execute the lambda function and print out the response
* [`destroy`](destroy.md) Undeploy the lambda function and destroy the API and security roles

## Options:

 * --help           print this help screen
 * --version        print out the current version
 * --quiet          suppress output when executing commands

Run with a command name to see options of a specific command, for example:
```bash
claudia create --help
```
