var React = require('react');

var Note = require('./Note');

var NoteList = React.createClass({
	render: function(){
		var notes = this.props.notes.map(
			function(note, index) {
				return (
					<Note note={note} key={index} />
				)
			}
		);

		return(
			<div className="row small-up-2 medium-up-3 large-up-4">
				{notes}
			</div>
		);
	}
});

module.exports = NoteList;