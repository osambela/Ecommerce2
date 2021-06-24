import React from 'react';
import './LoadingBox2.css';

export default function LoadingBox(){
    return(
        <div className="loading" style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div class="item">
				<div class="loader12"></div>
			</div>
        </div>
        
    )
}