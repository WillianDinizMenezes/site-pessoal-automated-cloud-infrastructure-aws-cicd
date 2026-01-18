<div align="center">

# ☁️ Automated Cloud Infrastructure
### Site Estático com CI/CD Completo na AWS

[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![CloudFormation](https://img.shields.io/badge/IaC-CloudFormation-FF4F00?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/cloudformation/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-CodePipeline-4053D6?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/codepipeline/)
[![Status](https://img.shields.io/badge/Status-Production-success?style=for-the-badge)](https://willdiniz.com.br)

**Infraestrutura 100% automatizada, segura e escalável utilizando AWS e DevOps**

[🌐 Ver Site](https://willdiniz.com.br) • [📖 Documentação](#-arquitetura-da-solução) • [🚀 Deploy](#-a-jornada-de-implementação)

</div>

---

## 📋 Sobre o Projeto

Este repositório documenta a implementação de uma **arquitetura de hospedagem profissional na AWS**, utilizando os conceitos de **Infrastructure as Code (IaC)** e **CI/CD**. 

O projeto representa a transição de um ambiente manual para uma estrutura **100% automatizada e segura**, demonstrando competências essenciais em Cloud Engineering e DevOps.

### 🎯 Objetivos Alcançados

✅ **Automação Completa** - Deploy zero-touch via Git  
✅ **Segurança Enterprise** - SSL/TLS + Origin Access Control (OAC)  
✅ **Alta Disponibilidade** - CDN global com CloudFront  
✅ **Infraestrutura como Código** - 100% replicável via CloudFormation  
✅ **Performance Otimizada** - Cache inteligente e invalidação automática  

---

## 🏗️ Arquitetura da Solução

### 🔄 Fluxo de Dados e Componentes

```
┌─────────┐      ┌──────────────┐      ┌──────────────┐      ┌─────────────┐
│  User   │─────▶│  Route 53    │─────▶│  CloudFront  │─────▶│  S3 Bucket  │
│ Browser │      │     DNS      │      │  CDN + SSL   │      │   (Private) │
└─────────┘      └──────────────┘      └──────────────┘      └─────────────┘
                                              │
                                              │ ACM Certificate
                                              ▼
                                       ┌──────────────┐
                                       │     ACM      │
                                       │   SSL/TLS    │
                                       └──────────────┘

┌─────────────┐      ┌──────────────┐      ┌──────────────┐
│   GitHub    │─────▶│ CodePipeline │─────▶│  CodeBuild   │
│  git push   │      │  Orquestração│      │ Sync + Cache │
└─────────────┘      └──────────────┘      └──────────────┘
                                                   │
                                                   ▼
                                            ┌──────────────┐
                                            │CloudFormation│
                                            │     IaC      │
                                            └──────────────┘
```

### 🔐 Componentes Principais

| Componente | Função | Benefício |
|------------|--------|-----------|
| **Route 53** | Resolução DNS com registros Alias | Roteamento confiável e de baixa latência |
| **CloudFront** | CDN global com cache inteligente | Performance e disponibilidade mundial |
| **ACM** | Certificados SSL/TLS gerenciados | HTTPS automático e sem custo adicional |
| **S3** | Armazenamento de arquivos estáticos | Durabilidade de 99.999999999% |
| **OAC** | Origin Access Control | Bucket 100% privado e seguro |
| **CodePipeline** | Orquestração de CI/CD | Automação end-to-end |
| **CodeBuild** | Build e deploy automatizado | Deploy em segundos após commit |
| **CloudFormation** | Infrastructure as Code | Replicabilidade e versionamento |

---

## 🚀 A Jornada de Implementação

Este projeto foi desenvolvido em **três fases críticas**, refletindo o aprendizado prático para a certificação **AWS Certified Cloud Practitioner (CLF-C02)**:

### 📍 Fase 1: Fundação e DNS
**Objetivo:** Estabelecer a base da infraestrutura

- ✅ Criação da Hosted Zone no Route 53
- ✅ Migração da autoridade DNS
- ✅ Configuração do bucket S3 com bloqueio público
- ✅ Políticas de segurança rigorosas desde o dia 1

**Aprendizado:** Compreensão profunda de DNS, domínios e fundamentos de segurança na nuvem.

---

### 🔒 Fase 2: Performance e Segurança
**Objetivo:** Implementar CDN global e criptografia

- ✅ Provisionamento do CloudFront como CDN
- ✅ Emissão de certificado SSL/TLS via ACM
- ✅ Configuração do Origin Access Control (OAC)
- ✅ Garantia de HTTPS end-to-end

**Desafio Técnico:** Configurar o OAC para garantir que o "cadeado" de segurança estivesse presente tanto na conexão do usuário quanto na comunicação entre serviços AWS.

---

### ⚙️ Fase 3: O Ciclo de Vida DevOps
**Objetivo:** Automatizar completamente o deploy

- ✅ Integração GitHub ↔ AWS via CodeStar Connections
- ✅ Criação do `buildspec.yml` customizado
- ✅ Pipeline de CI/CD totalmente funcional
- ✅ Invalidação automática de cache do CloudFront

**Resultado:** Deploy sem intervenção humana, reduzindo erro operacional e acelerando a entrega de conteúdo.

---

## 📁 Estrutura do Repositório

```
.
├── 📂 infra/                      # Templates AWS CloudFormation (IaC)
│   ├── 01-base-dns.yaml           # Configuração de DNS e Bucket S3
│   ├── 02-infra-ssl-cdn.yaml      # SSL, CloudFront e Segurança OAC
│   └── 03-pipeline.yaml           # Automação CodePipeline e CodeBuild
│
├── 📂 web/                        # Código fonte do site (HTML/CSS/JS)
├── 📂 assets/                     # Imagens e Diagramas da arquitetura
├── 📄 buildspec.yml               # Instruções de build para CodeBuild
└── 📄 README.md                   # Documentação do projeto
```

---

## 🎯 Resultados Alcançados

<div align="center">

| Métrica | Resultado |
|---------|-----------|
| **Deploy Time** | ⚡ < 2 minutos após commit |
| **Disponibilidade** | 🟢 99.99% SLA |
| **Segurança** | 🔒 SSL/TLS + OAC |
| **Automação** | 🤖 100% Zero-Touch |
| **Custo** | 💰 Otimizado com Free Tier |

</div>

### 💡 Principais Conquistas

🚀 **Deploy Zero-Touch**  
Atualização do site em tempo real via Git, sem intervenção manual

🔐 **Segurança Avançada**  
Implementação de OAC e SSL/TLS para proteção end-to-end

♻️ **Infraestrutura Reutilizável**  
Todo o ambiente pode ser recriado em minutos via CloudFormation

📊 **Performance Global**  
CDN com pontos de presença em todo o mundo

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![CloudFormation](https://img.shields.io/badge/CloudFormation-FF4F00?style=for-the-badge&logo=amazon-aws&logoColor=white)
![S3](https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![CloudFront](https://img.shields.io/badge/CloudFront-8C4FFF?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Route53](https://img.shields.io/badge/Route_53-8C4FFF?style=for-the-badge&logo=amazon-aws&logoColor=white)
![CodePipeline](https://img.shields.io/badge/CodePipeline-4053D6?style=for-the-badge&logo=amazon-aws&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## 👨‍💻 Autor

<div align="center">

**Willian Diniz Menezes**

Estudante da **Escola da Nuvem** - Programa **AWS re/Start + IA**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![Website](https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=firefox-browser&logoColor=white)](https://willdiniz.com.br)

</div>

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

**Desenvolvido com ☁️ e ❤️ para a comunidade Cloud**

</div>