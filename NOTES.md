1. npm install
2. Check for knexfile.js
3. create config.js file in './data/config'
4. Knex migrations
   - Check "./data/migrations"
5. server.js has all the server routers
   - server.use('/api/schemes', SchemeRouter)
6. Build "./schemes/scheme-model.js" funtions
   - hint: use other functions to help build others

FOCUS:

- How to have the 'add' function return the object
- Do NOT have sqlite running while the serve is up.

ERRORS:

- .returning() is not supported by slqite3 and will not have any effect
  - this was during the add function
- Unhandled rejection Error: SQLITE_CONSTRAINT: UNIQUE constraint failed: schemes.scheme_name
