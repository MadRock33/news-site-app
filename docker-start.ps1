# PowerShell скрипт для запуска всех сервисов через docker-compose
# Используйте этот скрипт вместо запуска отдельных контейнеров

Write-Host "Starting all services with docker-compose..." -ForegroundColor Green
docker-compose up -d

Write-Host "Waiting for database to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

Write-Host "Checking service status..." -ForegroundColor Cyan
docker-compose ps

Write-Host ""
Write-Host "Services should be running:" -ForegroundColor Green
Write-Host "  - Database: localhost:5432" -ForegroundColor White
Write-Host "  - Web App: http://localhost:3000" -ForegroundColor White

