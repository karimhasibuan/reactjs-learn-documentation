import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class App extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src='https://pbs.twimg.com/profile_images/476344386893004802/7h6CKPHG.jpeg' />
                    <p className='legend'>Judul Gambar 1</p>
                </div>

                <div>
                    <img src='https://i.pinimg.com/736x/01/c7/4f/01c74fabf4651c422786dc32c6b9aa90--minions-despicable-me-minions-png.jpg' />
                    <p className='legend'>Judul Gambar 2</p>
                </div>

                <div>
                    <img src='https://i.pinimg.com/736x/4a/8e/e5/4a8ee52494f16358d06588ded569136f.jpg' />
                    <p className='legend'>Judul Gambar 3</p>
                </div>
            </Carousel>
        );
    }
}

export default App;
