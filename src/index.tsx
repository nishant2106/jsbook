import "bulmaswatch/superhero/bulmaswatch.min.css";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./state";
import TextEditor from "./components/text-editor";
import CodeEditor from "./components/code-editor";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CodeEditor initialValue={"const a = 1"} onChange={() => {}} />
        <TextEditor />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
