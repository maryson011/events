/apps
 - npm i -g @nestjs/cli
 - nest new project-name
=====================
 - npm i npm-run-all
=====================
/packages/core
 - npm init -y
 - npm i -D tsup
 - npm i uuid
 - npm i -D @types/uuid

====================
npm i

====================
/apps/backend
 - npm install prisma --save-dev
 - npx prisma init --datasource-provider sqlite

 ~/eventos/apps/backend$ nest g module eventos
 ~/eventos/apps/backend/src/eventos$ nest g co eventos --flat --no-spec
 ~/eventos/apps/backend$ nest g mo db
 ~/eventos/apps/backend/src/db$ nest g pr prisma --flat --no-spec
 ~/eventos/apps/backend/src/eventos$ nest g pr evento.prisma --flat --no-spec