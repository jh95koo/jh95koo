import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor as ToastEditor } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

const Editor = (props) => {
  return (
    <>
      {props.viewer ?
        <Viewer initialValue={props.initialValue}/> :
        <ToastEditor height='100%'/>}
    </>
  );
}

Editor.defaultProps = {
  viewer: false,
  initialValue: ''
}

export default Editor;