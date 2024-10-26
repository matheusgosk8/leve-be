import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = _event.body;
    const parsedBody = JSON.parse(requestBody || '');

    const response = {
      statusCode: 200,
      body: `Olá mundo das funções lambda, menssagem de post: ! ${parsedBody?.name}`,
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
