#!/bin/bash
# Запуск: chmod +x setup.sh && ./setup.sh

echo "=== Avgust Brow Bar — Setup ==="

# Проверка зависимостей
command -v node >/dev/null 2>&1 || { echo "Node.js required"; exit 1; }
command -v git >/dev/null 2>&1 || { echo "Git required"; exit 1; }

# Установка зависимостей
npm install

# Создание .env.local из шаблона
if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo ">>> Заполни .env.local своими ключами"
fi

# Проверка линтера
npm run lint

# Билд
npm run build

echo "=== Ready! Запусти: npx vercel --prod ==="
