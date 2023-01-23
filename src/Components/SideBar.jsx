import React from 'react'
import { categories } from '../Utils/constants';
import { Stack } from '@mui/material';

const selectedCategory='New';

const SideBar = () => {
  return (
    <Stack direction='row'
    sx={{overflowY:'auto',
    height:{sx:'auto',md:'95%'},
    flexDirection:{md:'column' , sx:'row'}}}>
        {categories.map((category)=>(
            <button
            className='category-btn'
            style={{
                color:'white',
                background:category.name===selectedCategory && "#FC1503"
            }}>
                <span style={{
                    color:category.name===selectedCategory ? 'white':'red',
                    marginRight:'15px'
                }}>{category.icon}</span>
                <span style={{
                    opacity:category.name===selectedCategory ? '1' : '0.8'
                }}>{category.name}</span>
            </button> 
        ))}
    </Stack>
  )
}

export default SideBar