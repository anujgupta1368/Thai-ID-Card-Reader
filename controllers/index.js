const {model} = require('../models/index');
const {getData} =require('../utils/Api-ocr');
const {getDate} =require('../utils/index');
const {extract} =require('../utils/method');
const fs= require("fs");


async function AddRecord(req, res) {
    return res.render('add');
}

async function Record(req, res) {
    try {
        console.log("--hitt /:recordId");
        
        const record = await model.findById(req.params.recordId);
        console.log("--- id -",req.params);
        return res.render('record', {
            record: record
        });

    }catch (error) {

        console.log('error while finding record in Render Record', error);
        return res.render('404');

    }
}

async function EditRecord(req, res) {
    try {
        console.log("hitt");
        const record = await model.findById(req.params.recordId);

        return res.render('edit', {
            record: record
        });

    }catch (error) {

        console.log('error while finding record in Render Edit Record', error);
        return res.render('404');

    }
}

async function handleAddRecord(req, res) {

    try{
        console.log("hitt post add record");
        const text = await getData(`./public/${req.file.filename}`);
        console.log("text==>",text);
        const extracted = extract(text);

        extracted.inputImageUrl = `${req.file.filename}`;

        const record = await model.create(extracted);
        console.log("data saved--->",record);
        return res.redirect(`/${record._id}`);

    }catch (error) {
        console.log('error while add record', error);
        return res.render('404');

    }
}
async function handleDeleteRecord(req, res) {
    try{

        const record =await model.findByIdAndDelete(req.params.recordId);

        fs.unlink(`./public/${record.inputImageURL}`, () => {console.log("---")});

        return res.redirect(`/`);

    }catch (error) {

        console.log('error while delete record', error);
        return res.status(404).send(error );

    }
}
async function show(req, res) {
    try{

        //  Getting URL Params
        const queryParams = req.query;

        // Query Created using queryParams
        const query = {};
        if(queryParams.dob && queryParams.dob !== '') query.date_of_birth = queryParams.dob;
        if(queryParams.doi && queryParams.doi !== '') query.date_of_issue = queryParams.doi;
        if(queryParams.doe && queryParams.doe !== '') query.date_of_expiry = queryParams.doe;
        if(queryParams.success && queryParams.success === 'on' && queryParams.failure !== 'on') query.status = 'SUCCESS';
        if(queryParams.failure && queryParams.failure === 'on' && queryParams.success !== 'on') query.status = 'FAILURE';

        // Records Find using desire filter query
        const records = await model.find(query);

        // Render again on history
        return res.render('rec', {
            records: records,
            dob: queryParams.dob,
            doi: queryParams.doi,
            doe: queryParams.doe,
            createdAt: queryParams.createdAt,
        });

    }catch (error) {

        // Any wrong queryParams edited by User result in 404
        console.log('error while filtering data', error);
        return res.render('404');

    }
}

async function handleEditRecord(req, res) {
    try {
 
        // Get the updated info as POST
        const {identificationNumber, name, lastName, dateOfBirth, dateOfIssue, dateOfExpiry} = req.body;

        // Update in DataBase
        const record = await model.findByIdAndUpdate(req.params.recordId,{
                identificationNumber,
                name,
                lastName,
                dateOfBirth,
                dateOfIssue,
                dateOfExpiry,
            });

        // Redirect to Record page
        return res.redirect(`/${req.params.recordId}`);

    }catch (error) {

        // Any error redirect to 404
        console.log('error while edit record', error);
        return res.render('404');
    }
}



module.exports = {
    AddRecord,
    handleAddRecord,
    Record,
    EditRecord,
    handleDeleteRecord,
    show,
    handleEditRecord
};