# My dumb little server

This is dumb server built with the KISS state of mind.

## Development

To run this dumb-server locally you need to install [MongoDB](https://www.mongodb.com/) (3.4 and higher).
* Make sure MongoDB is started. For example, on Linux, you can run: ```sudo systemctl start mongod```

Then you can run:

```bash
git clone https://github.com/GuillaumeCz/dumb-server
cd dumb-server 
cp .env.example .env
npm install
npm start
npm run test
```

## Todos - Good to have ;)
- Authentication system on a part of the API (such as /admin/...)
- Add a tag (array) attribute for notes
  - Maybe define a Tag model ? 
  - In order to filter by tag on GET such as /api/note?tag=climbing

