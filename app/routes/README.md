## Router
* All app/api routing are directed from here.
* Non authenticated request are delivered from app.router.js
* Module request are delivered from module.router.js
* Generic API requests, which directly CRUDs on data model are via api.router.js
* index.js defines all route paths