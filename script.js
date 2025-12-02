//your JS code here. If required.
function nameOfFunc() {
	alert(`"${arguments.callee.name}"`)
}

nameOfFunc()