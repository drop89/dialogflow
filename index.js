const express = require('express')
const bodyParser = require('body-parser')
const {WebhookClient} = require('dialogflow-fulfillment');
const { response } = require('express');

const app = express()
app.use(bodyParser.json())
const port = process.env.PORT || 3000


app.post('/dialogflow-fulfillment', (request, response) => {
    console.log("test")
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})

const dialogflowFulfillment = (require, response) => {

    const agent = new WebhookClient({request, response})

    function sayHello(agent){
        agent.add("ola aqui e uma teste do drop89")
    }

    let intenMap = new Map();
    intenMap.set("Default Welcome Intent", sayHello)
    agent.handleRequest(intentMap)

}