import _ from 'lodash';
import Icon from './img.png';
import './style.css';

function component(){
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello,','webpack'], '');
	element.classList.add('hello');
	
	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());