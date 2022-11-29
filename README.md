## Unique email validation when signing up

When signing up for the first time, sign up is successful. When signing up for the second time with **the same e-mail**, sign up is unsuccessful (i.e., `409` error).

*Note 1: `email` column has set unique constraint (see `database.sql` file)*

*Note 2: Angular updated `v13` --> `v15`*

---

## Setup

1. Clone the repo: `git clone https://github.com/cervus-camelopardalis/angular-auth-signup-unique-email-validation.git`
2. Create PostgreSQL database (see `database.sql` file)
3. Insert your database user and password (edit `db.js` file)
4. Install Express modules: `C:\Users\xxxxx\xxxxx\xxxxx\express-server>npm i`
5. Install Angular modules: `C:\Users\xxxxx\xxxxx\xxxxx\angular-client>npm i`
6. Start Express server: `C:\Users\xxxxx\xxxxx\xxxxx\express-server>nodemon server`
7. Run Angular app: `C:\Users\xxxxx\xxxxx\xxxxx\angular-client>ng serve -o`

---

## Screenshots

Thunder Client:

![Thunder Client](https://github.com/cervus-camelopardalis/angular-auth-signup-unique-email-validation/blob/main/01-screenshot-thunder-client.gif)

Angular:

![Angular](https://github.com/cervus-camelopardalis/angular-auth-signup-unique-email-validation/blob/main/02-screenshot-angular.gif)