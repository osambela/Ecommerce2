import React from 'react';

export default function MessageBox(props){
    return(
        <i className={`alert alert-${props.variant || 'info'}`}
           style={{
            fontSize: '13px',
            backgroundColor: 'red',
            padding: '5px 10px',
            borderRadius: '5px',
            color: 'white',
            fontWeight: '900'      
           }}    
        > 
            {props.children}
        </i>
    )
}