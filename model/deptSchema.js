const mongooose = require('mongoose');

const deptSchema = new mongooose.Schema({
    deptName: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    password: {
         type: String,
        required:true
    },
    cpassword: {
        type: String,
        required:true
    },
});

const Department = mongooose.model('DEPARTMENT', deptSchema);

module.exports = Department;