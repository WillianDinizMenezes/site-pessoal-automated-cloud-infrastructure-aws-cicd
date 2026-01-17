# Usa uma imagem Nginx estável e leve baseada em Alpine Linux
FROM nginx:stable-alpine

# Remove a configuração padrão do nginx (opcional, mas recomendado)
RUN rm -rf /usr/share/nginx/html/*

# Copia todos os arquivos do site para o diretório padrão do nginx
COPY index.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY icon/ /usr/share/nginx/html/icon/

# Expõe a porta 80 para acesso HTTP
EXPOSE 80

# Inicia o nginx em modo foreground
CMD ["nginx", "-g", "daemon off;"]
