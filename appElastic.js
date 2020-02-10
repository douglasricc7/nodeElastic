const express = require('express');
const es_client = require( './es_connection.js');
const app = express();
const port = process.env.PORT || 3000;


//router
app.get('/employees', async function(req, res){

  const elasticResponse  = await es_client.search({
    index: 'person',
    //type: '_doc',
    body: {
      query: {
        match: { user: 'daniel' }
      }
    } 
  })
  
res.json(elasticResponse);
});

      

  









app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
