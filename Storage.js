/* jshint esversion:6 */

/*
	This is our extensible storage object. We've written it so that we can
	replace any parts of it in the future with calls to file system or mongo
	without too much effort.
*/
function Storage() {
	var projects = [];
	var users = [];

	this.addProject = (project, cb)  => {
		// cb = callback
		project.id = projects.length;
		projects.push(project);
		if (cb) {
			cb(project.id);
		}
	};

	this.voteOnProject = (projectID, username, cb) => {
		projects[projectID].addVote(username);
		if(cb){
			cb();
		}
	};

	this.getAllProjects = (cb) => {
		// cb = callback
		cb(projects);
	};
}

module.exports = Storage;
