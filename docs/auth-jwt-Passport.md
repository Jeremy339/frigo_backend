# Instalación

npm i --save @nestjs/jwt passport-jwt bycrypt
npm i --save-dev @types/passport-jwt
npm i --save class-validator class-transformer

# Arrancar Proyecto

npm run start:dev

# Modules y Resource

nest g mo modules/auth
nest g res modules/auth

# Controllers y Services

nest g co modules/auth
nest g s modules/auth