# Используйте официальный образ Nginx
FROM nginx:latest

# Удалите существующий файл конфигурации Nginx
RUN rm -v /etc/nginx/nginx.conf

# Копируем файл конфигурации Nginx из вашего проекта
COPY nginx.conf /etc/nginx/

# Копируем содержимое собранного React-проекта в директорию Nginx
COPY dist/ /usr/share/nginx/html

# Указываем порт, который Nginx будет слушать
EXPOSE 8080

# Команда, которая будет выполнена при запуске контейнера
#CMD ["nginx", "-g", "daemon off;"]

# Команда, которая будет выполнена при запуске контейнера
#CMD ["nginx", "-g", "daemon off;"]
