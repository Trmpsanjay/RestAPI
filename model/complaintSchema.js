const jwt = require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');

const complaintSchema = new mongooose.Schema({
    cmptid: {
        type: Number,
        default: 0,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      admissionno: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      branch: {
        type: String,
        required: true,
      },
      semester: {
        type: String,
        required: true,
      },
      complaint: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
})

// we are generating token 
complaintSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

// collection creation 
const Complaint = mongooose.model('COMPLAINT', complaintSchema);

module.exports = Complaint;