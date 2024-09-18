import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={PostDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
