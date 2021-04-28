
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    optionsSuccessStatus: 200
}))
const PORT = process.env.PORT || 5000

const api_key = process.env.KEY_MAILGUN
const domain = process.env.DOMAIN_MAILGUN
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/sendData', async (req, res) => {
    let response = {}
    const body = req.body
    console.log(req)
    console.log(body)
    try {
        let data = {
            from: 'wsernalaverde@gmail.com',
            to: 'wsernalaverde@gmail.com',
            subject: 'Email enviado desde Landing Page Tuya Prueba William Serna',
            text: `Te han enviado un correo desde la Landing Page Tuya Prueba William Serna, los datos de la persona son:
        
        Tipo de documento: ${body.type}
        Cédula: ${body.ndocument}
        Celular: ${body.phone}
        Este correo fue enviado desde https://wsernalaverde.github.io/.
        `
        }

        let res = await mailgun.messages().send(data)
        console.log('oe')
        console.log(res)
        response = {
            data: { res },
            statusCode: 201
        }
    } catch (e) {
        response = e.output ? e.output.payload : { error: e, statusCode: 500 }
    }

    res.status(response.statusCode).json(response)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})