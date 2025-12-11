# Используем Node.js образ на основе Alpine
FROM node:24-alpine AS builder

# Устанавливаем необходимые пакеты для Prisma, PostgreSQL и netcat
RUN apk add --no-cache openssl libc6-compat netcat-openbsd

WORKDIR /app

# Копируем файлы зависимостей
COPY package.json package-lock.json* ./

# Устанавливаем все зависимости (включая devDependencies для Prisma миграций)
RUN npm ci && npm cache clean --force

# Копируем Prisma схему
COPY prisma ./prisma

# Генерируем Prisma клиент
RUN npx prisma generate

# Копируем остальные файлы
COPY . .

# Собираем приложение (без подключения к БД благодаря force-dynamic)
# Устанавливаем переменную окружения для пропуска статической генерации
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Продакшн образ - используем тот же образ для упрощения
FROM builder AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Копируем скрипт для ожидания БД
COPY wait-for-db.sh ./
RUN chmod +x wait-for-db.sh

# Экспортируем порт
EXPOSE 3000

# Команда по умолчанию
CMD ["./wait-for-db.sh"]
