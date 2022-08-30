import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function TextEditorWysiwyg() {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="teste"
      onEditorStateChange={(newState) => {
        setEditorState(newState);
      }}
    />
  );
}
