#!/bin/sh
# Скрипт для запуска всех сервисов через docker-compose
# Используйте этот скрипт вместо запуска отдельных контейнеров

echo "Starting all services with docker-compose..."
docker-compose up -d

echo "Waiting for database to be ready..."
sleep 5

echo "Checking service status..."
docker-compose ps

echo ""
echo "Services should be running:"
echo "  - Database: http://localhost:5432"
echo "  - Web App: http://localhost:3000"

