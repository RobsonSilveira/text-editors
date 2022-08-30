import TextEditor from "./components/TextEditor";
import TextEditorWysiwyg from "./components/TextEditorWysiwyg.jsx";
import "./styles/scss/global.scss";

function App() {
  return (
    <div className="container">
      <div className="container-editor">
        <h1>Text editor QUILL</h1>
        <div>
          <TextEditor />
        </div>
      </div>
      <div className="container-editor">
        <h1>Text editor Wysiwyg</h1>
        <div>
          <TextEditorWysiwyg />
        </div>
      </div>
    </div>
  );
}

export default App;
