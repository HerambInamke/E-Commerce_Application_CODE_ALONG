const multer = require('multer');

const storage=multer.diskStorage({
    
    destination : '../uploads',

    filename: function(req,file,cb){
        console.log(req.body);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null,filename+"-"+uniqueSuffix+".png");
    },
    })

    exports.upload=multer({storage: storage});