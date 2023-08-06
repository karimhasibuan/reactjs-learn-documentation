import React from 'react';
import './App.css'; // use external css file for styling
import styles from './App.module.css'; // use module css for styling element

class App extends React.Component {
    render() {
        return (
            <div>
                <h2 className='judul'>CSS Stylesheet</h2>
                <div className='kotak'></div>
                <div className={styles.lingkaran}></div> // implement styling from module css
            </div>
        );
    }
}

export default App;
