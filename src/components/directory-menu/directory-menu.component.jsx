import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory-menu.styles.scss'

class Directory extends React.Component{
    
    constructor(){
        super();

        this.state = {
            sections: [{
                title : 'MotherBoard',
                id : 1
            },
            {
                title : 'RAM',
                id : 2
            }, 
            {
                title : 'Power',
                id : 3
            },
            {
                title : 'CPU',
                id : 4,
                size : 'large'
            },
            {
                title : 'GPU',
                id : 5,
                size : 'large'
            }]
        }
    }
    
    render() {
        return (
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({title,id,size}) => (
                        <MenuItem key = {id} title = {title} size = {size}/>
                    ))
                }
            </div>
        );
    }


}

export default Directory