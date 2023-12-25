const {Router}= require("express");
const router = Router();
const {AddRecord,handleAddRecord,Record,EditRecord,handleDeleteRecord,show,handleEditRecord}=require("../controllers/index");
const {upload} =require("../utils/uploadfile");
router.get('/show',show);
router.get('/add',AddRecord);
router.get('/:recordId',Record);
router.get('/edit/:recordId', EditRecord);
router.get('/delete/:recordId', handleDeleteRecord);

router.post('/add', upload.single('inputImage'), handleAddRecord);
router.post('/edit/:recordId', handleEditRecord);

module.exports = router;