import React from 'react'
import '../custom-button/custom-button.css';

const CustomBtn=({children,isGooglebtn,...otherprops})=> {
    return (
       <button {...otherprops} className={ `${isGooglebtn ? 'googlebtn':''} custom-btn`}>
           {children}
       </button>
    )
}
 
export default CustomBtn;