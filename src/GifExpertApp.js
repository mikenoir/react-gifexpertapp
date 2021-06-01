import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     //setCategories( categories.push('Naruto') ); // NO SE HACE ASI!!!
    //     //setCategories( [...categories, 'Naruto'] ); //ASI SI BRO
    //     setCategories( cats => [ ...cats, 'Naruto' ] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;