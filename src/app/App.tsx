import React, { Component } from 'react';
import { InitWebsocket } from './initWebsocket/WebsocketSettings';
import { WebsocketEventsContextProvider } from '../context/websocketsEvents/WebsocketEventsContextProvider';
import { Route, Switch } from 'react-router';
import { WebsocketMain } from './websocketMain/WebsocketMain';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <WebsocketEventsContextProvider>

          <Switch>
            <Route exact path="/" component={InitWebsocket}/>
            <Route exact path="/main" component={WebsocketMain}/>
            <Route component={InitWebsocket}/>
          </Switch>

        </WebsocketEventsContextProvider>
      </BrowserRouter>
    );
  }
}

export default App;
