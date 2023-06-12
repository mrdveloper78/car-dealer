import React from 'react';


const LinkToGithub = () => {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div 
            className='
            w-[220px] h-[220px] bg-[#2F4F4F]
            flex items-center justify-center rounded-lg'
            >
                <button
                    className='
                    p-3 w-[140px] bg-golden border border-solid border-black
                    rounded-lg flex items-center justify-center'
                >
                    <a href="https://github.com/mrdveloper78/car-dealer">
                        Go To Github
                    </a>
                </button>
            </div>
        </div>
    )
}

export default LinkToGithub;

