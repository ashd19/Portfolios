import React from 'react'

type CustomButtonProps = {
  className: string;
  text: string;
  id: string;
};

const CustomButton = ({className,text,id} :CustomButtonProps ) => {
  return (  

     <div>
       <a href={` ${className ?? ''} cta-wrapper`}>
         <div className='cta-button group'>
         <div className='bg-circle'/>
           <p className='text'>{text}</p>
           <div className='arrow-wrapper'>
           <img src="../assets/public/images/arrow.svg" alt="arrow" />
            
           </div>

        </div>
       </a>
     </div>
)
}


export default CustomButton