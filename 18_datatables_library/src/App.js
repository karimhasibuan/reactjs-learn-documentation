import React from 'react';
import MUIDataTable from 'mui-datatables';

class App extends React.Component {
    render() {
        const columns = ['Nama', 'Jenis Kelamin', 'Alamat', 'Email'];

        const data = [
            ['Daffa Shidqi', 'L', 'Tegal', 'daffa.shidqi@gmail.com'],
            ['Faqih Mumtaz', 'L', 'Tegal', 'faqih.mumtaz@gmail.com'],
            ['Annisa Nabil', 'P', 'Tegal', 'annisa.nabil@gmail.com'],
            ['Afaf Firdaus', 'L', 'Banjarnegara', 'afaf.firdaus@gmail.com'],
        ];

        const options = {
            filterType: 'checkbox',
        };

        return <MUIDataTable title={'Daftar Pekerja'} data={data} columns={columns} options={options} />;
    }
}

export default App;
