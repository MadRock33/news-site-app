#!/bin/sh

# Ждем, пока база данных будет доступна на порту 5432
until nc -z db 5432; do
  echo "Waiting for database connection..."
  sleep 1
done

# Когда база данных доступна, выполняем миграции
echo "Database is up, running prisma migrations"

# Пытаемся применить миграции
if ! npx prisma migrate deploy; then
  echo "Migration deploy failed, checking if we need to resolve failed migrations..."
  
  # Пытаемся пометить неудачную миграцию как примененную (если схема уже соответствует БД)
  if npx prisma migrate resolve --applied 20251125080843_init 2>/dev/null; then
    echo "Marked failed migration as applied, retrying deploy..."
    npx prisma migrate deploy || npx prisma db push
  else
    echo "Could not resolve migration, using db push to sync schema..."
    npx prisma db push
  fi
fi

# Применяем seed (начальные данные)
echo "Running database seed..."
if npx tsx prisma/seed.ts; then
  echo "Seed completed successfully"
else
  echo "Seed failed or data already exists (this is OK if database is not empty)"
fi

# Запускаем приложение
echo "Starting Next.js application..."
npm run start