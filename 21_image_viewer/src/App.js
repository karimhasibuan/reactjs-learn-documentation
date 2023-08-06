import React from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

const App = () => {
    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                <img src='https://pbs.twimg.com/profile_images/476344386893004802/7h6CKPHG.jpeg' width='100' height='70' alt='images' />
                <img
                    src='https://i.pinimg.com/736x/01/c7/4f/01c74fabf4651c422786dc32c6b9aa90--minions-despicable-me-minions-png.jpg'
                    width='100'
                    height='70'
                    alt='images'
                />
                <img src='https://i.pinimg.com/736x/4a/8e/e5/4a8ee52494f16358d06588ded569136f.jpg' width='100' height='70' alt='images' />
            </SRLWrapper>
        </SimpleReactLightbox>
    );
};

export default App;
