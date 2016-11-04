const express = require('express')
const dots = require('dot').process({ path: '.' })
const app = module.export = express()
const { renderPage: render } = require('./utils')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(/\/(\d+)(?:x(\d+))?(.(png|gif|jpg|svg))?/i, (req, res) => {
  let params = {
    width: req.params[0],
    height: req.params[1] || req.params[0],
    format: req.params[3] && req.params[3].toLowerCase() || 'png'
  }
  let content = dots.template(params)
  switch (params.format) {
    case 'svg':
      res.writeHead(200, {'Content-Type': 'image/svg+xml'})
      return res.end(content)
    case 'jpg':
      params.format = 'jpeg' // Fallthrough
    case 'png':
    case 'jpeg':
      return render(content, params.format, params.width, params.height)
        .then(imageBuffer => {
          res.writeHead(200, {'Content-Type': `image/${params.format}`})
          return res.end(imageBuffer, 'binary')
        })
        .catch(err => console.error(err))
    default:
      return res.end('nope')
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port', this.address().port)
})
