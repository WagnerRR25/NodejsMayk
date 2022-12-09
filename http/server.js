const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

  const file = req.url === '/' ? 'index.html' : req.url
  const filePath = path.join(__dirname, 'public', file)
  const extname = path.extname(filePath)

  const allowedFileTypes =['.html', '.css', '.js']
  const allowed = allowedFileTypes.find(item => item == extname)

  if (!allowed) return
/*   console.log(file)

  res.end('Right')
  if(req.url === '/'){ */
    fs.readFile(
      filePath,
      (err, content) => {
        if(err) throw err

        res.end(content)
      }
    )
  // console.log(req)
  // res.write('Hello, world!')
  // res.end()
  // return res.end('<h1>HomePage<h1>')

  // if(req.url === '/contato')
  // return res.end('<h1>Contato</h1>')
}).listen(5000, () => console.log('Server is running'))