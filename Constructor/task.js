var Task = function(name) {
	this.name = name
	this.completed = false
	
	this.complete = function() {
	console.log('completing Task: ' + this.name);
	this.completed = true;
	}
	
	this.save = function() {
	console.log('saving Task: ' + this.name)
	}
}

var task1 = new Task('create a demo for contructors')
var task2 = new Task('create a demo for modules')
var task3 = new Task('create a demo for singletons')
var task4 = new Task('create a demo for prototypes')

task1.save()
task2.complete()
task3.complete()
task4.save()
