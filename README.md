# FastAPI WebSocket Chat

Этот проект представляет собой веб-чат с использованием WebSocket на FastAPI. Сообщения отправляются с фронтенда, получают порядковый номер на сервере и отображаются на странице. При перезагрузке нумерация сбрасывается.

## Установка и запуск

### Клонирование репозитория

```sh
git clone https://github.com/skies21/fastapi-websockets-chat.git
cd fastapi-websockets-chat
```

### Создание и активация виртуального окружения

**Windows (PowerShell):**

```sh
python -m venv .venv
.venv\Scripts\Activate
```

**Linux/macOS:**

```sh
python3 -m venv .venv
source .venv/bin/activate
```

### Установка зависимостей

```sh
pip install -r requirements.txt
```

### 4️⃣ Запуск сервера

```sh
uvicorn main:app --reload
```

### 5️⃣ Открытие в браузере

Перейдите в браузере по адресу:\
[http://127.0.0.1:8000](http://127.0.0.1:8000)

