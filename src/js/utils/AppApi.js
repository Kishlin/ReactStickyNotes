var AppActions    = require('../actions/AppActions');
var AppConstants = require('../constants/AppConstants');


module.exports = {
	addNote: function(note) {
		$.ajax({
			url: "https://api.mlab.com/api/1/databases/" + AppConstants.DATABASE + "/collections/notes?apiKey=" + AppConstants.API_KEY,
			data: JSON.stringify(note),
			type: 'POST',
			contentType: 'application/json'
		});
	},
	getNotes: function(note) {
		$.ajax({
			url: "https://api.mlab.com/api/1/databases/" + AppConstants.DATABASE + "/collections/notes?apiKey=" + AppConstants.API_KEY,
			dataType: 'json',
			cache: false,
			success: function(data) {
				AppActions.receiveNotes(data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
	},
	removeNote: function(noteId) {
		$.ajax({
			url: "https://api.mlab.com/api/1/databases/" + AppConstants.DATABASE + "/collections/notes/" + noteId + "?apiKey=" + AppConstants.API_KEY,
			type: 'DELETE',
			async: true,
			timeout: 300000,
			succes: function(data) {
				console.log('Note deleted.');
			}.bind(this),
			error: function(xhr, status, err) {
				console.log(err);
			}.bind(this)
		});
	}
}