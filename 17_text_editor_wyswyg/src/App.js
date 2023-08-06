import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange: Function = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <Editor
                editorState={editorState}
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
                onEditorStateChange={this.onEditorStateChange}
            />
        );
    }
}

export default App;
