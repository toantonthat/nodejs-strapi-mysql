## Quickstart (recommended)

1. `git clone https://github.com/strapi/strapi-docker && cd strapi-docker`

2. cd nodejs-strapi-mysql\config\environments\development

```
Open database.json and config mysql connection : 

"settings": {
  "client": "mysql",
  "host": "127.0.0.1",
  "port": 3306,
  "database": "blog",
  "username": "root",
  "password": ""
}
```

Then run : 
```
npm install 

strapi start
