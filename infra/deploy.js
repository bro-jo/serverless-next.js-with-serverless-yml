import AWS from "aws-sdk";

(async () => {
    console.log("(write here some script to adjust infrastructure)");

    AWS.config.update({region: "ap-northeast-2"});
    const s3 = new AWS.S3({apiVersion: "2006-03-01"});
    const result = await s3.listBuckets().promise();
    console.log("bucket Owner", result.Owner);
})()
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e);
        return process.exit(1);
    });
