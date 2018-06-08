# ExpressJS Starter

A decent starting point for an ExpressJS application. This application assumes the following:

* View Engine: EJS
* Database: MySQL
* Database ORM: Sequelize
* Styling Framework: Bootstrap 3

## Prerequisites

These steps assume that you are running on an Ubuntu-based OS:

```bash
# NodeJS
$ sudo apt-get install nodejs npm
$ sudo ln -s /usr/bin/nodejs /usr/bin/node

# MySQL
$ sudo apt-get install mysql-server
$ mysql -u root -p
# enter the root password
$ create database database_development;
$ exit
```

## Getting Started

```bash
$ git clone https://github.com/jekhokie/expressjs-starter.git
$ cd expressjs-starter/
$ npm install

# sequelize command-line
$ sudo npm install -g sequelize-cli

# dataabase setup
$ cp config/config.json.sample config/config.json
$ vim config/config.json
# replace the database components with your database configurations
$ sequelize db:migrate
# run the next command only if you want to seed the database with test data
$ sequelize db:seed:all

# start the app
$ DEBUG=expressjs-starter:* npm start -a 0.0.0.0
```

You should now be able to visit the base application at the following URL,
assuming that your IP address is '10.11.13.14':

http://10.11.13.14:3000

## Creating Models

This project uses Sequelize - to create models and run migrations, perform
the following:

```bash
# To create a model and create the database table:
$ sequelize model:create --name User --attributes first_name:string,last_name:string,email:string
$ vim models/user.js
# edit to your liking
$ sequelize db:migrate

# To create a seed file and seed the database:
$ sequelize seed:create --name create-users
$ vim seeders/20171028-create-users.js
# edit to your liking
$ sequelize db:seed:all
```
