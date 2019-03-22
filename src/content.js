/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import "./content.css";
import AddArticleForm from './components/AddArticleForm'
import Login from './components/Login'


// import 'bootstrap/dist/css/bootstrap.css';
let url = ''
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabUrl: 'a url',
      url: 'another url',
      isLoggedIn: false
    }
  }

  componentDidMount() {
    // console.log(chrome.runtime)
    // alert(('in state' + this.state.tabUrl))
    var that = this
    chrome.runtime.onMessage.addListener(
      function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
          toggle();
        }
        if (request.url) {
          alert(request.url)
          url = request.url
          that.setState({ tabUrl: request.url })
        }
      }
    );
  }

  toggleLogin = () => {
    this.setState(s => ({isLoggedIn: !s.isLoggedIn}))
  }
  render() {
    return (
      <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}>
        <FrameContextConsumer>
          {
            // Callback is invoked with iframe's window and document instances
            ({ document, window }) => {
              // Render Children
              return (
                <div className={'my-extension'}>
                  <h1>Hello world - My first Extension is this working?</h1>
                  <h2>window.location.href{window.location.href }</h2>
                  <h2>{url?url:'url'}</h2>
                  <h2>{this.state.tabUrl}</h2>
                  {this.state.isLoggedIn? (
                    <AddArticleForm url={url}/>

                  ) : (
                    <Login onLogin={this.toggleLogin}/>

                  )}
                </div>
              )
            }
          }
        </FrameContextConsumer>
      </Frame>
    )
  }
}

const app = document.createElement('div');
app.id = "my-extension-root";

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = "none";



function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}
// export default Main;