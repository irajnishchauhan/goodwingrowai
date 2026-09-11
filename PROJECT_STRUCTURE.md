# Goodwin Business OS

## Project Structure

```
Goodwin Business OS/
├─ backend/                 # NestJS API
│   ├─ src/                # Source files
│   │   ├─ app.module.ts
│   │   ├─ main.ts
│   │   └─ health/
│   │       └─ health.controller.ts
│   ├─ prisma/             # Prisma schema & migrations
│   │   └─ schema.prisma
│   ├─ package.json
│   └─ tsconfig.json
├─ frontend/                # Next.js app
│   ├─ pages/
│   ├─ components/
│   ├─ public/
│   ├─ styles/
│   ├─ package.json
│   └─ tsconfig.json
├─ docker-compose.yml
├─ .env.example
├─ README.md
└─ .gitignore
```
