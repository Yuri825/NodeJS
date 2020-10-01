'use strict';

let fs = require('fs');
let http = require('http');

http.createServer(function(request, response) {
	if(request.url != 'favicon.ico') {
		

		if(request.url.endsWith('.css')) {
			let cssFile = request.url.slice(1);
			fs.readFile(cssFile, (err, data) => {
				if(err) throw err;

				response.setHeader('Content-Type', 'text/css');
				response.statusCode = 200;
				response.write(data);
				response.end();
				
			});
		


		} else if(request.url.endsWith('.js')) {
			let jsFile = request.url.slice(1);
			fs.readFile(jsFile, (err, data) => {
				if(err) throw err;

				response.setHeader('Content-Type', 'text/javascript');
				response.statusCode = 200;
				response.write(data);
				response.end();
				
			});

		} else if (request.url.endsWith('.jpg')) {
			let jpgFile = request.url.slice(1);
			fs.readFile(jpgFile, (err, data) => {
				if(err) throw err;

				response.setHeader('Content-Type', 'image/jpg');
				response.statusCode = 200;
				response.write(data);
				response.end();
			});
		} else if (request.url.endsWith('.jpeg')) {
			let jpegFile = request.url.slice(1);
			fs.readFile(jpegFile, (err, data) => {
				if(err) throw err;

				response.setHeader('Content-Type', 'image/jpeg');
				response.statusCode = 200;
				response.write(data);
				response.end();
			});
		} else if (request.url.endsWith('.png')) {
			let pngFile = request.url.slice(1);
			fs.readFile(pngFile, (err, data) => {
				if(err) throw err;

				response.setHeader('Content-Type', 'image/png');
				response.statusCode = 200;
				response.write(data);
				response.end();
			});
		} else if (request.url.endsWith('.mp3')) {
			let mpFile = request.url.slice(1);
			fs.readFile(mpFile, (err, data) => {
				if(err) throw err;

				response.setHeader('Content-Type', 'audio/mp3');
				response.statusCode = 200;
				response.write(data);
				response.end();
			});
		}
		else {
			getPage(request.url, response);
		}
	}
}).listen(8888);



function getPage(name, response, statusCode) {
	if(name == '/' || name == '/main.html') {
		name = 'main';
	} else if (name == '/works.html') {
		name = 'works';
	} else if (name == '/comics.html') {
		name = 'comics';
	} else if (name == '/sculpturs.html') {
		name = 'sculpturs';
	} else if (name == '/paints.html') {
		name = 'paints';
	} else if (name == '/servise.html') {
		name = 'servise';
	} else if (name == '/price.html') {
		name = 'price';
	} else if (name == '/about.html') {
		name = 'about';
	} 

	fs.readFile('pages/' + name + '.html', 'utf-8', (err, data) => {
		if(!err) {
			 	
			fs.readFile('elems/header.html', 'utf-8', (err, elem) => {
				if (err) throw err;

				data = data.replace(/\{\{header\}\}/g, elem);


				fs.readFile('elems/footer.html', 'utf-8', (err, footer) => {
				if (err) throw err;

				data = data.replace(/\{\{footer\}\}/g, footer);
				

				response.statusCode = 200;
				response.setHeader('Content-Type', 'text/html; charset=utf-8');
				response.write(data);
				response.end();
			});

			});

	} else {
			getPage('404', response, 404);
		}
	});
}