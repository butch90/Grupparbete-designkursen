var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });

app.use(bodyParser.urlencoded({
	extended: true
}));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');




var cards =
	 [{model: 'GTX-980ti', tagline: 'TOP OF THE LINE'}
	, {model: 'GTX-980', tagline: 'HARDCORE GAMING',}];

function getCard(model) {
	for (var i = 0; i < cards.length; i ++) {
 
	    if(cards[i].model === model) {
	    	return cards[i];
	    	/*console.log(i);*/
	    }
	}
    
    return null;
};
function getCardIndex(model) {
	for (var i = 0; i < cards.length; i++) {
		if(cards[i].model === parseInt(model)) {
			return i;
		}


	}
};



/*;*/
app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res){
	res.sendFile('index.html', { root: __dirname + '/public'});
});
		
app.get('/cards', function (req, res) {
	res.render('cards');
	// res.json({ cards: cards });

});
app.get('/cards/:id', function (req, res) {

	var cards = getCard(req.params.id);
	if(cards === null) {
		res.status(404);
		res.json({ status: "NOT FOUND"});
	}

	/*console.log(thread);*/
	else {
	/*res.render('thread', thread);*/
	 res.render(({cards: cards }));
	};
});









var server = app.listen(3000, function () {
	console.log('Server started. Listening to connections on port 3000\n');
});

module.exports = app;

