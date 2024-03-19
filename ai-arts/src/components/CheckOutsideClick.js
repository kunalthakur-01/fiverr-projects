import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const CheckOutsideClick = (props) => {

    const menuRef = useRef();

    useEffect(() => {
        const outsideClickHandler = (e) => {
          if(menuRef.current && !menuRef.current.contains(e.target)){
            props.onClickOutside && props.onClickOutside();
          }
        }
    
        document.addEventListener('mousedown', outsideClickHandler);

        return () => {
            document.removeEventListener('mousedown', outsideClickHandler)
        }
    
      }, [props]);

      
    if(!props.children){
        return null;
    }

  return (
    <div ref={menuRef}>
      {props.children}
    </div>
  )
}

export default CheckOutsideClick
