// @Author	: Luca Leon Happel
// @Date	: 24.11.2019

// Get simple information about whether a key is pressed or not

var keys = {};
window.onkeyup		= e => keys[e.key] = false;
window.onkeydown	= e => keys[e.key] = true;

const pressed = key => keys[key] == true
	? true
	: false

export {
	pressed
}
