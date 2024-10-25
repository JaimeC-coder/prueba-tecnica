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
        await dynamoDb.put(params).promise();
        return data;
      }
      async scan() {
        const params = {
          TableName: process.env.TABLE_NAME,
        };
    
        const result = await dynamoDb.scan(params).promise();
        return result.Items;
      }

      
      async getItem(id: string) {
        const params = {
          TableName: process.env.TABLE_NAME,
          Key: { id },
        };
    
        const result = await dynamoDb.get(params).promise();
        if (!result.Item) {
          throw new Error(`Item with ID ${id} not found.`);
        }
        return result.Item;
      }

}
