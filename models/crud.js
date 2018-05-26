const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CrudSchema = new Schema({
  first_name : {
      type: 'string',
      required:true
  },
  last_name : {
    type: 'string',
    required:true
  }
});

/* create collection & add schema */
const crudRoutes = mongoose.model('crud',CrudSchema);
module.exports = crudRoutes;
