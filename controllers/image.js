const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'a35689b745734599b1f4129ff19fa8b3'
});

const handleApiCall = (req, res) => {
	app.models
	  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	  .then(data => {
	  	res.json(data);
	  })
	  .catch(err => {
	  	db('users').where('id', '=', id)
	  	.decrement('entries', 1)
	  	.returning('entries')
	  	.then(entries => {
	  		res.json(entries[0]);
	  	})
	  	res.status(400).json('Unable to work with API');
	  })
}

const handleImage = (req, res, db) => {
	const{ id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(404).json('Unable to get entries'))
}

module.exports = {
	handleImage,
	handleApiCall
}