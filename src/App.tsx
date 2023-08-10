import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonSplitPane,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import Menu from "./components/Menu";
import "./components/ExploreContainer.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import DeepLinkHandler from "./DeepLinkHandler";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Menu2 from "./components/Menu2";
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        {/* <Menu/> */}
        <Menu2 />
        <IonRouterOutlet id="main">
          <Route exact={true} path="/home">
            <Home />
          </Route>
          <Route exact={true} path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact={true} path="/login">
            <Login />
          </Route>
          <Route path="/deeplink" component={DeepLinkHandler} />

          <Route exact={true} path="/profile">
            <Profile />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
