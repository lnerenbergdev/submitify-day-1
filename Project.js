/*jshint esversion:6 */

/*
	Description of a Project object. Currently only on the backend, but
	we could actually share this with the frontend if we wanted... hmm...
*/
function Project(name, description, author) {
	// Default project id
	this.id = -1;
	this.name = name;
	this.description = description;
	this.votes = [];
	this.author = author;

	this.getVoteCount = () => {
		return this.votes.length;
	};

	this.getVoteList = () => {
		return this.votes;
	};

	this.addVote = (user_id) => {
		if (this.votes.includes(user_id)) {
			return false;
		}
		this.votes.push(user_id);
		return true;
	};
}

module.exports = Project;
