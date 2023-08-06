import React from 'react';
import ReactAutoComplete from 'react-autocomplete';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <ReactAutoComplete
                items={[
                    { id: 1, label: 'Amerika' },
                    { id: 2, label: 'Brunei' },
                    { id: 3, label: 'China' },
                    { id: 4, label: 'Denmark' },
                    { id: 5, label: 'Ethiophia' },
                    { id: 6, label: 'Filiphina' },
                    { id: 7, label: 'Georgia' },
                    { id: 8, label: 'Hongkong' },
                    { id: 9, label: 'Indonesia' },
                    { id: 10, label: 'Jepang' },
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={(item) => item.label}
                renderItem={(item, highlighted) => (
                    <div key={item.id} style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}>
                        {item.label}
                    </div>
                )}
                value={this.state.value}
                onChange={(e) => this.setState({ value: e.target.value })}
                onSelect={(value) => this.setState({ value })}
            />
        );
    }
}

export default App;
