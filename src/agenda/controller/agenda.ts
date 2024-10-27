import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import agendas from '@src/agenda/mocks/medicos.json';

// Ignorando o lint de variáveis não utilizadas na próxima linha, como não foi pedido uma busca específica na db mock
//dos agendamentos não foi preciso criar nenhuma query string com a url da requisição.
//Os types seguem a documentação da aws.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify(agendas),
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
