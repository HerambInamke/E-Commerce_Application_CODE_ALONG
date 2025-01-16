const multer = require("multer");
const fs = require("fs");
const path = require("path");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

app.post('/api/v2/user/create-user', upload.single('file'), (req, res) => {
  // handle form submission and file processing here
});


app.post('/api/v2/user/create-user', upload.single('file'), (req, res) => {
  // handle form submission and file processing here
});


// Ensure the "uploads" directory exists
const uploadDirectory = "uploads";
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configure storage options
const storage = multer.diskStorage({
    // Set destination for uploaded files
    destination: function (req, file, cb) {
        cb(null, uploadDirectory);
    },
    // Set file naming convention
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const fileExtension = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, fileExtension);

        cb(null, `${baseName}-${uniqueSuffix}${fileExtension}`);
    },
});

// Validate file types (e.g., allow only images)
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPEG, PNG, and GIF are allowed."), false);
    }
};

// Export the configured multer instance
exports.upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
    },
});
