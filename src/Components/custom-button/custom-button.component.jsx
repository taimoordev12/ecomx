import React from 'react'
import '../custom-button/custom-button.css';

const CustomBtn=({children,isGooglebtn,...otherprops})=> {
    return (
       <button {...otherprops} className={ `${isGooglebtn ? 'googlebtn':''} custom-btn`}>
          <h6 className="">{children}</h6> 
       </button>
    )
}
 
export default CustomBtn;