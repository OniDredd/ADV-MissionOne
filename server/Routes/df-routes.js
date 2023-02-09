const Chatbot = require('../Chatbot/Chatbot')

module.exports = app => {

        app.get('/text_query', async(req,res) => {
            console.log(req)
            const { text, userId } = req.body
            const resultQuery = await Chatbot.textQuery(text, userId)
            console.log(resultQuery)
            res.send('Text Query')
        })

        // app.post('/event_query', (req,res) => {
        //     console.log(req)
        //     res.send('Event Query')
        // })
}