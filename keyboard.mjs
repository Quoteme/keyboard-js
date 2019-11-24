// @Author	: Luca Leon Happel
// @Date	: 24.11.2019

// Get simple information about wether a key is pressed or not

var keys = {};
window.onkeyup		= e => keys[e.key] = true;
window.onkeydown	= e => keys[e.key] = false;

const pressed = key => keys[key] == true
	? true
	: false

export {
	pressed
}
