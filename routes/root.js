const express = require('express')
const router = express.Router()
const path = require('path');

const WebsiteRoot = path.resolve(__dirname + "/../views");
router.use(express.static(WebsiteRoot))

router.get('/inventory', (req, res)=>{
    console.log("DAsddads")
    res.sendFile(WebsiteRoot + '/index.html')});

// router.get('/*', (req, res)=>{
//     res.sendFile('index.html', {root: WebsiteRoot});
// })

module.exports = router;