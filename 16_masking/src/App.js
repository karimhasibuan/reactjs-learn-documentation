import React from 'react';
import CurrencyFormat from 'react-currency-format';

const App = () => (
    <div>
        Uang: <CurrencyFormat thousandSeparator={true} prefix={'Rp. '} /> <br />
        Kartu Kredit: <CurrencyFormat format='#### #### #### ####' mask='_' /> <br />
        No Telepon: <CurrencyFormat format='(###) ###-####' mask='_' /> <br />
    </div>
);

export default App;
