import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
           <p className='f4'>
               {'This Magic Brain will detect faces in your image. Give it a try!'}
           </p>  
           <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f5 w-70 center' type="text" />
                    <button className='f5 link w-30 grow ph3 pv2 dib white bg-light-purple'>Detect</button>
               </div>
           </div>
        </div>
    );
}

export default ImageLinkForm;