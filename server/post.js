const router = require("./Routes")
const fs = require('fs')

router.post('/', (req, res)=>{
    let json = JSON.parse(fs.readFileSync(__dirname+"/names.json"))
    fs.writeFileSync("names.json", JSON.stringify({ name: req.body.name, price: req.body.price }));
    res.send("ok");
});

module.exports = router;