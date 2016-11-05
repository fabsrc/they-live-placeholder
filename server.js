const _ = require('lodash')
const express = require('express')
const dots = require('dot').process({ path: '.' })
const { renderPage: render } = require('./utils')
const app = module.export = express()

const slogans = [
  'Obey',
  'Obey and Conform',
  'Marry and Reproduce',
  'Watch T.V.',
  'Stay Asleep',
  'No Thought',
  'Submit',
  'Conform',
  'This is your God',
  'No Independent Thought',
  'Buy',
  'Do Not Think',
  'Do Not Question Authority',
  'Work 8 Hours',
  'Play 8 Hours',
  'Sleep 8 Hours',
  'Stay Asleep'
]

app.get('/', (req, res) => {
  res.send(`Usage: ${req.headers.host}/{width}x{height}.{format}?text={text}`)
})

app.get(/\/(\d+)(?:x(\d+))?(.(\w+))?/i, (req, res) => {
  let params = {
    width: req.params[0],
    height: req.params[1] || req.params[0],
    format: req.params[3] && req.params[3].toLowerCase() || 'png',
    slogan: req.query.text || _.sample(slogans)
  }

  let content = dots.template(params)

  switch (params.format) {
    case 'html':
      return res.send(content)
    case 'jpg':
      params.format = 'jpeg' // Fallthrough
    case 'jpeg':
    case 'png':
      return render(content, params.format, params.width, params.height)
        .then(imageBuffer => {
          res.writeHead(200, {'Content-Type': `image/${params.format}`})
          return res.end(imageBuffer, 'binary')
        })
        .catch(err => console.error(err))
    default:
      res.status(413).send('No valid file extension.')
  }
})

app.use((req, res) => {
  res.status(400).send('Invalid Request.')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port', this.address().port)
})
