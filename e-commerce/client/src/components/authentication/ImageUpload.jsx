import React, { useEffect, useRef, useState } from 'react';

import './ImageUpload.css';

const ImageUpload = (props) => {
    const pickImageRef = useRef();
    const [ file, setFile ] = useState();
    const [ previewUrl, setPreviewUrl ] = useState();
    const [ isValid, setIsValid ] = useState(false);

    useEffect(() => {
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }, [file]);

    const pickImageBtn =() => {
        pickImageRef.current.click();
    }

    const pickedHandler = e => {
        let pickedFile;
        let fileIsValid = false;
        if(e.target.files && e.target.files.length !== 0) {
            pickedFile = e.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        }
        else {
            setIsValid(false);
            fileIsValid = false;
        }
        // console.log(pickedFile);

        props.onInput( { id: props.id, value: pickedFile, isValid: fileIsValid } );
    }
    // console.log(previewUrl);

    return (
        <div className='image-input'>
            <label htmlFor="image"> {props.name} </label>
            <input type="file" id={props.id} ref={pickImageRef} onChange={pickedHandler} name="image" style={{display: 'none'}} accept='.jpg, .jpeg, .png'/>
            <div className="image-upload">
                {isValid && <div className="preview-image">
                    {previewUrl && <img src={previewUrl} alt="preview" />}
                    {!previewUrl && <p>Failed! Pick an image</p>}
                </div>}
                <button type='button' className='pickImageBtn' onClick={pickImageBtn}>Pick Image</button>
            </div>
        </div>
    )
}

export default ImageUpload;
