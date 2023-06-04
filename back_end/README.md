# NAS_ZERO_W Back End

## How to code

1. Install node, npm
2. Type: `cd ..` to go to the root directory from the directory which contains this README file
3. Type: `source .envrc`
4. Type: `cd ./back_end` to go back to the directory which contains this README file
3. Type: `npm install`
4. Type: `npm run db`
5. Type: `npm run redis`
6. Type: `npm run dev`
7. API is available at `https://127.0.0.1:8000`

## How to deploy in production mode

1. Install Docker, Docker-compose
2. Type: `source .envrc`
3. Type: `docker-compose up --build`
