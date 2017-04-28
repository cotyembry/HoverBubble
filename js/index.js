import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import App from './components/App.jsx';


//make something that hovers with a button to click to perform a task
(function() {
	var HoverBubbleContainer = document.createElement('div');
	HoverBubbleContainer.id  = 'HoverBubbleContainerId';
	HoverBubbleContainer.style = 'width: 100%; height: 100%; position: absolute; top: 0px;';
	document.body.appendChild(HoverBubbleContainer);
	ReactDOM.render(<App />, document.getElementById('HoverBubbleContainerId'));
})();


// to actually deploy it, push this to github then link it as a bookmarklet with:
//
// javascript: (function () { 
//     var jsCode = document.createElement('script'); 
//     jsCode.setAttribute('src', 'https://rawgit.com/cotyembry/HoverBubble/master/dist/bundle.js');           
//   document.body.appendChild(jsCode); 
//  }());
