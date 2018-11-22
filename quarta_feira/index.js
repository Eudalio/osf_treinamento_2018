var express = require('express');
var request = require('request')
var axios = require('axios')
var bodyParser = require('body-parser')
var app = express();

const api = 'https://reqres.in';

app.set("views", __dirname + '/views')
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/rota1', (req, res) => {
	request(`${api}/api/users/2`, (error, response, body) => {
		if(response.statusCode == 200) res.render('rota1', { body })
		else res.send(error)
	})
})

app.get('/rota2', (req, res) => {
	request(`${api}/api/users/23`, (error, response, body) => {
		if(response.statusCode == 200) res.render('rota2', { body })
		else res.send(response.statusCode)
	})
})

app.get('/rota3', (req, res) => {
	request(`${api}/api/unknown`, (error, response, body) => {
		if(response.statusCode == 200) res.render('rota3', { body })
		else res.send(response.statusCode)
	})
})

app.get('/rota4', (req, res) => {
	request(`${api}/api/users?delay=1`, (error, response, body) => {
		if(response.statusCode == 200) res.render('rota4', { body })
		else res.send(response.statusCode)
	})
})

app.get('/teste', (req, res) => {
	res.render('rota5', { route: '/rota5' })
})

app.post('/rota5', (req, res) => {
	var content = {
		"name": "Eudalio",
		"job": "Estudante"
	}
	request.post({
		uri: `${api}/api/users`,
		headers:{'content-type': 'application/x-www-form-urlencoded'},
		body:require('querystring').stringify(content)},
		function(err,res,body){
				console.log(body);
				console.log(res.statusCode);
		});
})

app.get('/teste2', (req, res) => {
	res.render('rota6', { route: '/form' })
})

app.post('/form', (req, res) => {
	const { name, job } = req.body
	var content = {
		"name": name,
		"job": job
	}
	request.post({
		uri: `${api}/api/users`,
		headers:{'content-type': 'application/x-www-form-urlencoded'},
		body:require('querystring').stringify(content)},
		function(err,response,body){
				console.log(body);
				console.log(response.statusCode);
		});
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});