const express = require('express');
const server = express();

server.all('/', (req, res)=>{
  res.sendFile(`./website/index.html`, { root: __dirname} )
})
function keepAlive(){
  server.listen(3000, () => {
		console.log("support page is ready!")
	});
}
module.exports = keepAlive;