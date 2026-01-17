# Comandos Docker para o Site

## 1. Construir a Imagem Docker
```bash
docker build -t meu-portfolio:latest .
```

## 2. Executar o Container
```bash
docker run -d -p 8080:80 --name portfolio-container meu-portfolio:latest
```

## 3. Verificar se o Container está Rodando
```bash
docker ps
```

## 4. Acessar o Site
Abra o navegador e acesse: `http://localhost:8080`

## 5. Ver os Logs do Container (se necessário)
```bash
docker logs portfolio-container
```

## 6. Parar o Container
```bash
docker stop portfolio-container
```

## 7. Remover o Container
```bash
docker rm portfolio-container
```

## 8. Remover a Imagem (se quiser reconstruir)
```bash
docker rmi meu-portfolio:latest
```

## Comandos Úteis para Debug

### Entrar no container para verificar os arquivos
```bash
docker exec -it portfolio-container sh
```

### Dentro do container, verificar os arquivos do nginx
```bash
ls -la /usr/share/nginx/html/
```

### Ver a configuração do nginx
```bash
cat /etc/nginx/conf.d/default.conf
```

## Reconstruir e Executar (Comando Completo)
```bash
# Para o container se estiver rodando
docker stop portfolio-container 2>/dev/null || true

# Remove o container se existir
docker rm portfolio-container 2>/dev/null || true

# Reconstrói a imagem
docker build -t meu-portfolio:latest .

# Executa o novo container
docker run -d -p 8080:80 --name portfolio-container meu-portfolio:latest

# Mostra os logs
docker logs portfolio-container
```

## Notas Importantes

- A porta **80** é a porta interna do container (nginx)
- A porta **8080** é a porta externa que você acessa no navegador
- Se a porta 8080 já estiver em uso, você pode mudar para outra porta, por exemplo: `-p 3000:80`
