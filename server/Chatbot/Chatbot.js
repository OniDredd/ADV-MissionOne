const dialogflow = require('dialogflow');
const config = require('../Config/devkey.js');

const projectId = config.googleProjectId;
const sessionId = config.dialogFlowSessionId;

const credentials = {
    client_email: config.googleClientEmail,
    privateKey: config.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});

const textQuery = async(userText, userID) => {
    const sessionPath = sessionClient.sessionPath(projectID, sessionID+userID)
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text:userText,
                languageCode: config.dialogFlowSessionLanguageCode
            }
        }
    }

    try {
        const response = await sessionClient.detectIntent(request)
        return response
    }
    catch(err)
    {
        console.log(err)
        return err
    }
}

module.exports = {
    textQuery
}