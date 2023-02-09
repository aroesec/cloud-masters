import { Stack, StackProps, aws_s3 as s3 } from "aws-cdk-lib"
import { S3 } from "aws-cdk-lib/aws-ses-actions"
import { Construct } from "constructs"
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DefaultAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    
    //for PoC create this bucket yourself, assets do not populate unless they're being referenced in a service that utilizes them.
    
    const assetsStackBucket = new s3.Bucket(this, "AppAssetBucket", {})
  }
}
