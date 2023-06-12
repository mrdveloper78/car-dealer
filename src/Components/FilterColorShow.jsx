
import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti';


const FilterColorShow = ({name, code,setColorData}) => {

    const [filterStateColor, setFilterStateColor] = useState(false);

    return (
        <div>
            <div
                type='button'
                name='color'
                onClick={() => { setColorData(name); setFilterStateColor(!filterStateColor)}}
                className='
                        filter__color-btn w-[4rem] sm:w-[2rem] flex items-center justify-center
                        z-100 '
                style={{ backgroundColor: `${code}` }}
            >
                {
                    filterStateColor && name
                        ?
                        <TiTick />
                        :
                        <span className='z-10'>{name}</span>
                }
            </div>
        </div>
    )
}

export default FilterColorShow

