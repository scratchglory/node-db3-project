const express = require("express");
const db = require("../data/config");
const router = express.Router();

function find() {
  return db("schemes");
}

function findById(id) {
  // first() returns the first entry in the db matching the query
  return db("schemes").where({ id }).first();
}

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "=", "steps.scheme_id")
    .where("schemes.id", "=", id)
    .select("scheme_name", "step_number", "instructions")
    .orderBy("steps.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme).returning("*");
  // .then((id) => {
  // //   console.log(findById(id.params));
  //   //   return findById(id);
  // });
}

function update(changes, id) {
  return db("schemes").where("schemes.id", "=", id).update(changes);
}

function remove(id) {
  return db("schemes").where("id", id).del();
}
module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};
