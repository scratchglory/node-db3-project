// instead of hardcoding in a config object, use this file
const knex = require("knex");
const knexfile = require("../knexfile");

// must select the development obj from our knexfile
module.exports = knex(knexfile.development);
// must export in order to use in codebase
