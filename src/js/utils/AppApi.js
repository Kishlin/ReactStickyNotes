var AppActions    = require('../actions/AppActions');
var AppConstants = require('../constants/AppConstants');


module.exports = {
	addNote: function(note) {
		$.ajax({
			url: "https://api.mlab.com/api/1/databases/stickynotes/collections/notes?apiKey=" + AppConstants.API_KEY,
			data: JSON.stringify(note),
			type: 'POST',
			contentType: 'application/json',
			error: function(xhr, status, err) {
				console.log(xhr);
				console.log(status);
				console.log(err);
			}.bind(this)
		});
	},
	getNotes: function(note) {
		$.ajax({
			url: "https://api.mlab.com/api/1/databases/stickynotes/collections/notes?apiKey=" + AppConstants.API_KEY,
			dataType: 'json',
			cache: false,
			success: function(data) {
				AppActions.receiveNotes(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
	}
}