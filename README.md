# levis-be

Criado por "MATHEUSGOSK8"
mtsgosk8@gmail.com.

Este é um projeto de teste pata o cargo ''

== Observações ==
Este projeto utiliza o "Serverless framework V4".
Configurações do prettier e esLint de acordo com práticas pessoais.

== Estrutura geral do código ==
Seguindo a recomendação de pastas disponibilizada no teste.

src/**tests**
Arquivos de teste do jest, removida da produção no serverless.yml

src/agenda/types
src/agendamento/types
Arquivos de type

src/agenda/controller
src/agendamento/controller
Arquivos de handler da função lambda.

== .env, .env.example e produção ==
Url da função em modo local está presenta no arquivo .env e .env.example, para produção, alterar
apenas o valor das variáveis em .env.example, sendo necessário renomear este arquivo para .env
na CI para produção.

== Iniciando o projeto ==
Rodar os scripts de inicialização presente em "package.json"

-> Modo dev

> npm run dev

// Inicializa uma versão que utiliza o plugin "serverless-offline" no port 3000.

-> Modo prod

> npm run prod

Inicializa a função ligada a minha conta da AWS onde a lambda function está registrada, ainda segue o
stage de "dev" do serverless framework

== Testes ==
Rodar os scripts de inicialização presentes em "package.json"

> npm run test

// Roda todos os arquivos de teste do "jest" na aplicação.

> npm run jest -watch

// Roda e acompanha todos os arquivos de testes do "jest" na aplicação

// Para a agenda, é rodado uma função de fetch para a url da lambda function na rota de get, retornando null
// caso o teste falhe.

// Para o agendamento é rodado uma função específica utilizada na rota que busca o médico e os horáriois
// disponíveis para o agendamento.
