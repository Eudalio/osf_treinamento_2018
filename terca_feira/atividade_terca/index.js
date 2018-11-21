var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var { oddOrEven, numberRandom, listNumbersRandom } = require('./funcao');

app.set("views", __dirname + '/views')
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

// Inicio Atividade em sala de aula

const find = ( req, res, next ) => res.send( 'Opa, fui enviado de uma função externa!' )

app.get('/', function (req, res) {
  res.send('Primeira tela!');
});

app.get('/funcao', find)

app.get('/parametro/:id', function (req, res) {
	const { id } = req.params
	res.send("O quadrado do parâmetro enviado na requisição é: " + (id * id));
});

app.get('/html', function(req, res) {
	res.render('home', {
		item: "1"
	})
})

// Fim de atividade sala de aula

// Inicio desafio de casa.

app.get('/rota1/:num', (req, res) => {
	const { num } = req.params
	res.send(`O número ${num} enviado na requisição é: ${oddOrEven(num)}.`)
})

app.get('/rota2', (req, res) => {
	res.render('random', { num: numberRandom() })
})

app.get('/rota3/:num', (req, res) => {
	const { num } = req.params
	num < 5 ? res.render('parametro', { num }) : res.send(`O número não renderizado, apenas enviado é: ${num}`)
})

app.get('/rota4', (req, res) => {
	let list = listNumbersRandom()
	res.render('listaNumbers', { list })
})

// Fim do desafio de casa

app.listen(3050, function () {
  console.log('Example app listening on port 3050!');
});