let express = require('express'),
    multer = require('multer');
router = express.Router();
const fs = require("fs")
var mysql = require('mysql');
// Multer File upload settings
const DIR = './apkuploads';
if (!fs.existsSync(DIR)) {
    fs.mkdirSync(DIR);
}

const crypto = require("crypto");
const apkmodel = require('../models/apkModel');
const db = require('../services/database');

var database = mysql.createConnection({
    host: 'localhost',
    user: 'smsdba_smsdba2',
    password: 'nnv9I^b7KantGk',
    database: 'smsdba_ntsmsdb',
    debug: false,

});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

// Multer Mime Type Validation
var upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 1024 * 1024 * 5
    // },
    // fileFilter: (req, file, cb) => {
    //   if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == 'applcation/pdf') {
    //     cb(null, true);
    //   } else {
    //     cb(null, false);
    //     return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //   }
    // }
});


router.post('/uploadapk', upload.single('avatar'), (req, res, next) => {
    const { title } = req.body;
    const apk_id = crypto.randomBytes(3).toString("hex");
    const url = req.protocol + '://' + req.get('host');
    const image_filename = url + '/' + req.file.filename

    const query = "INSERT INTO  app_nutan_apks SET ?"

    var newTemplate = {
        apk_id: apk_id,
        title: title,
        apk_filename: image_filename,
        apk_url:''
    };

    database.query(query, newTemplate, function (error, result, fields) {
        if (error) throw error;
            res.status(201).json({ status: 'success', message: 'apk uploaded sucessfully!' });

    });
})




const apkcontroller = require('../controllers/apkcontroller');

router.get('/getallapkslist', apkcontroller.getallapkslist);

router.post('/deleteapk', apkcontroller.deleteapk);


module.exports = router;
