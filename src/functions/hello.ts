import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: 'Olá mundo das funções lambda!',
    };
    return response;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Erro interno!',
    };
  }
};
