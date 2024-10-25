import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

@Injectable()
export class DynamodbService {

    async putItem(data: any) {
        const params = {
          TableName: process.env.TABLE_NAME,
          Item: data,
        };
        return dynamoDb.put(params).promise();
      }
    
      async scan() {
        const params = {
          TableName: process.env.TABLE_NAME,
        };
        return dynamoDb.scan(params).promise();
      }

      async getItem(id: string) {
        // const params = {
        //   TableName: process.env.TABLE_NAME,
        //   Key: 
        // };
        //return dynamoDb.get(params).promise();
      }
}
