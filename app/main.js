import React from 'react';
import ReactDOM from 'react-dom';
import Publisher from './components/publisher/publisher.js';
import HelloMessage from './components/demo/demo.js';
import Childre from './components/demo/childre.js';
import Props from './components/demo/props.js';
import Like from './components/demo/like.js';
import Instrom from './components/demo/instrom.js';
ReactDOM.render(
    <div>
        <Publisher />
        <HelloMessage name="lm"/>
        <Childre>
            <span>123</span>
            <span>123</span>
        </Childre>
        <Props />
        <Like  />
        <Instrom />
    </div>,
    document.getElementById('content')
); 
