☁️ Automated Cloud Infrastructure: Site Estático com CI/CD na AWS
Este repositório documenta a implementação de uma arquitetura de hospedagem profissional na AWS, utilizando o conceito de Infrastructure as Code (IaC) e CI/CD. O foco deste projeto foi a transição de um ambiente manual para uma estrutura 100% automatizada e segura.

🖼️ Arquitetura da Solução
Legenda Técnica e Fluxo de Dados
User & Route 53: O tráfego começa com o usuário acessando willdiniz.com.br, resolvido pelo Amazon Route 53 através de registros tipo Alias.

CloudFront & ACM: O Amazon CloudFront atua como CDN global, provendo HTTPS através de certificados SSL/TLS gerenciados pelo AWS Certificate Manager (ACM).

S3 com Site Seguro: Os arquivos estáticos residem em um bucket Amazon S3 totalmente privado, acessível exclusivamente via CloudFront através de Origin Access Control (OAC).

Trilha de Automação (CI/CD): Ao realizar um git push no GitHub, o AWS CodePipeline orquestra o fluxo, acionando o AWS CodeBuild para sincronizar os arquivos e invalidar o cache da CDN automaticamente.

CloudFormation: Toda a infraestrutura foi provisionada como código (IaC), garantindo replicabilidade e governança.

🏗️ A Jornada de Implementação
Este projeto foi dividido em três fases críticas, refletindo o aprendizado prático para a certificação AWS Certified Cloud Practitioner (CLF-C02):

Fase 1: Fundação e DNS
Estabelecemos a base com a criação da Hosted Zone e a migração da autoridade DNS. Configuramos o S3 com políticas rigorosas de bloqueio de acesso público para garantir a segurança desde o primeiro dia.

Fase 2: Performance e Segurança
Provisionamos a rede de entrega global (CloudFront) e o certificado de segurança (ACM). O desafio técnico aqui foi a configuração do OAC, garantindo que o "cadeado" de segurança estivesse presente tanto na conexão do usuário quanto na comunicação entre os serviços AWS.

Fase 3: O Ciclo de Vida DevOps
Integramos o repositório GitHub à AWS via CodeStar Connections. Criamos um arquivo buildspec.yml customizado para que o deploy ocorra sem intervenção humana, reduzindo o erro operacional e acelerando a entrega de conteúdo.

📁 Estrutura do Repositório
Plaintext
.
├── infra/                  # Templates AWS CloudFormation (IaC)
│   ├── 01-base-dns.yaml    # Configuração de DNS e Bucket S3
│   ├── 02-infra-ssl-cdn.yaml # SSL, CloudFront e Segurança OAC
│   └── 03-pipeline.yaml    # Automação CodePipeline e CodeBuild
├── web/                    # Código fonte do site (HTML/CSS/JS)
├── assets/                 # Imagens e Diagramas da arquitetura
├── buildspec.yml           # Manual de instruções para o robô de deploy
└── README.md               # Documentação do projeto
🚀 Resultados Alcançados
Deploy Zero-Touch: Atualização do site em tempo real via Git.

Segurança Avançada: Uso de OAC e SSL/TLS.

Infraestrutura Reutilizável: Todo o ambiente pode ser recriado em minutos via CloudFormation.

Projeto desenvolvido por Willian Diniz Menezes Estudante da Escola da Nuvem - Programa AWS re/Start + IA