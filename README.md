#

## On creating from scratch:

1. npm init -y
2. npm install -D watchify concurrently
3. npm install -D http-server
4. in package.json, add "dev": "concurrently \"watchify ../index.js -o bundle.js\" \"http-server\""
5. to start server, npm run dev

## On clone:

1. npm install
2. npm run dev
