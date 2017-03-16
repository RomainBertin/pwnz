var fs = require('fs');
var http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	let pathfile = './index.html'; 
	
	if (req.url !== '/') { 
		pathfile = './'+req.url;
	}
	
	fs.readFile(pathfile, (err, data) => { 
		res.end(data) 
	} );
	
}).listen(3000, 'localhost');
