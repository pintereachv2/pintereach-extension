/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import "./content.css";
import AddArticleForm from './components/AddArticleForm'
// import 'bootstrap/dist/css/bootstrap.css';
let url = ''
class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log(chrome.runtime)
    // alert(('in state' + this.state.tabUrl))
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
                  <AddArticleForm />
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

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      toggle();
    }
    if (request.url) {
      alert(request.url)
      url = request.url
      // this.setState({ tabUrl: request.url })
    }
  }
);

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}
// export default Main;