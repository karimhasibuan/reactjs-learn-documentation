import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const App = () => {
    const [image, setImage] = useState();
    const [cropData, setCropData] = useState('#');
    const [cropper, setCropper] = useState();

    const onChange = (e) => {
        e.preventDefault();
        let files = e.target.files;
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== 'undefined') {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <div>
            <div style={{ width: '50%', float: 'left' }}>
                <input type='file' onChange={onChange} /> <br /> <br />
                <Cropper
                    style={{ height: 300, width: 400 }}
                    initialAspectRatio={1}
                    preview='.img-preview'
                    src={image}
                    viewMode={1}
                    guides={true}
                    minCropBoxHeight={10}
                    minCropBoxWidth={10}
                    background={false}
                    responsive={true}
                    autoCropArea={1}
                    checkOrientation={false}
                    onInitialized={(instance) => {
                        setCropper(instance);
                    }}
                />
            </div>

            <div style={{ width: '50%', float: 'right' }}>
                <h1>Preview</h1>
                <div className='img-preview' style={{ width: '100%', height: '300px', overflow: 'hidden' }}></div>
            </div>

            <div style={{ width: '50%', float: 'right', height: '300px' }}>
                <h1>Hasil Crop</h1>
                <button onClick={getCropData}>Crop Image</button> <br />
                <img style={{ width: '100%' }} src={cropData} alt='cropped' />
            </div>
        </div>
    );
};

export default App;
