// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: '',
  
  // Use if APM Server requires a secret token
  secretToken: 'tiy1GA4iUYgOB1UbUh',
  
  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://a77ba09d3ccd4ff98ed3adf816fa5c20.apm.us-central1.gcp.cloud.es.io:443',
  
  // Set the service environment
  environment: 'production'
  })
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
