import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HelloComponent from './components/HelloComponent.jsx'

//function style
// function HelloComponent() {
//     return <h1>This is my component</h1>
// }

//class style
// class HelloComponent extends React.Component {
//   render() {
//     return <h1>This is a Class component</h1>
//   }
// }


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
