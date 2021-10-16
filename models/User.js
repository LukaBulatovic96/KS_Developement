const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema

const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  vqTest:{
    result:{
      type: Number
    },
    date:{
      type: Date,
      default:  Date.now
    },
    finished:{
      type: Boolean,
      default: false
    }
  },
  testLicnosti:{
    N1:{
      type: Number,
    },
    N2:{
      type: Number,
    },
    N3:{
      type: Number,
    },
    N4:{
      type: Number,
    },
    N5:{
      type: Number,
    },
    N6:{
      type: Number,
    },
    E1:{
      type: Number,
    },
    E2:{
      type: Number,
    },
    E3:{
      type: Number,
    },
    E4:{
      type: Number,
    },
    E5:{
      type: Number,
    },
    E6:{
      type: Number,
    },
    O1:{
      type: Number,
    },
    O2:{
      type: Number,
    },
    O3:{
      type: Number,
    },
    O4:{
      type: Number,
    },
    O5:{
      type: Number,
    },
    O6:{
      type: Number,
    },
    U1:{
      type: Number,
    },
    U2:{
      type: Number,
    },
    U3:{
      type: Number,
    },
    U4:{
      type: Number,
    },
    U5:{
      type: Number,
    },
    U6:{
      type: Number,
    },
    S1:{
      type: Number,
    },
    S2:{
      type: Number,
    },
    S3:{
      type: Number,
    },
    S4:{
      type: Number,
    },
    S5:{
      type: Number,
    },
    S6:{
      type: Number,
    },
    pol:{
      type: String,
    },
    date:{
      type: Date,
    },
    finished:{
      type: Boolean,
      default: false
    }
  },
  date:{
    type: Date,
    default: Date.now
  },
  stavoviZaposlenihFinished:{
    type: Boolean,
    default:false
  },
  type:{
    type: String,
    required:true
  }
});

module.exports = User = mongoose.model('users',UserSchema);
