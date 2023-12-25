const { convertToDate } = require('./conversion');

function extract(text){

    try{

        const idNumberMatch = text.match(/(\d{1,4}\s\d{4}\s\d{5}\s\d{2}\s\d{1})/);
        const identificationNumber = idNumberMatch ? idNumberMatch[0] : null;

        const nameMatch = text.match(/Name (.+?)\n/);
        const name = nameMatch ? nameMatch[1] : null;

        const lastNameMatch = text.match(/Last name (.+?)\n/);
        const lastName = lastNameMatch ? lastNameMatch[1] : null;

        const dateMatches = text.match(/(\d{1,2} [A-Za-z]+\.* \d{4})/g);

        if (dateMatches === null || dateMatches.length !== 3) {
            return {
                status: 'FAILURE',
                identificationNumber,
                name,
                lastName,
                dateOfBirth: '',
                dateOfIssue: '',
                dateOfExpiry: ''
            };
        }

        const dateOfBirth = dateMatches ? convertToDate(dateMatches[0]) : null;
        const dateOfIssue = dateMatches ? convertToDate(dateMatches[1]) : null;
        const dateOfExpiry = dateMatches ? convertToDate(dateMatches[2]) : null;

        const record = {
                identificationNumber,
                name,
                lastName,
                dateOfBirth,
                dateOfIssue,
                dateOfExpiry
        }
        if (
            identificationNumber !== null &&
            name !== null &&
            lastName !== null &&
            dateOfBirth != null &&
            dateOfIssue !== null &&
            dateOfExpiry !== null) {
            record.status = 'SUCCESS';
            return record;
        }

        record.status = 'FAILURE';
        return record;

    }catch(e) {

        console.log('error in google api call', e);

        const record = {
            identificationNumber : '',
            name : '',
            lastName : '',
            dateOfBirth : '',
            dateOfIssue : '',
            dateOfExpiry : ''
        }
        record.status = 'FAILURE';

        return record;
    }

}

module.exports = {
    extract
};