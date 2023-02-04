import React from 'react'

export default function Post(props) {
    const { video } = props;
    const handleInput = (e) => {
        console.log(" input :: ", e.target.value)
    }
    return (
        <label className="inline-block p-2 w-1/2 lg:w-1/4 md:w-1/3 relative cursor-pointer">
            <input type="checkbox" className='sr-only peer' onChange={handleInput} value={"img"} />
            <span className='absolute top-2 right-2 z-10 transition-all opacity-0 peer-checked:opacity-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-500 stroke-white" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
            </span>
            <div className='overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent peer-checked:ring-blue-500 grayscale peer-checked:grayscale-0 active:scale-95 transition-all'>
                <div>
                    <img className='h-60 w-full object-cover' src={video.origin_cover} alt="" />
                    <div className="absolute bottom-1 left-1 flex flex-col gap-1 text-white text-xs items-center">
                        <svg className='h-4 w-4' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <title>eye-open</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M45.3,22.1h0C43.2,19.5,35.4,11,24,11S4.8,19.5,2.7,22.1a3,3,0,0,0,0,3.8C4.8,28.5,12.6,37,24,37s19.2-8.5,21.3-11.1A3,3,0,0,0,45.3,22.1ZM24,33c-8.8,0-15.3-6.2-17.7-9,2.4-2.8,8.9-9,17.7-9s15.3,6.2,17.7,9C39.3,26.8,32.8,33,24,33Z"></path> <circle cx="24" cy="24" r="6"></circle> </g> </g> </g></svg>
                        <span>{video.play_count}</span>
                        <svg className='h-4 w-4' viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <title>share-arrow-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> </g> <g id="Q3_icons" data-name="Q3 icons"> <path d="M28.3,6a1.2,1.2,0,0,0-1.1,1.3V17.9C12,19.4,2.2,29.8,2,40.3c0,.6.2,1,.6,1s.7-.3,1.1-1.1c2.4-5.4,7.8-8.5,23.5-9.2v9.7A1.2,1.2,0,0,0,28.3,42a.9.9,0,0,0,.8-.4L45.6,25.1a1.5,1.5,0,0,0,0-2L29.1,6.4a.9.9,0,0,0-.8-.4Z"></path> </g> </g> </g></svg>
                        <span>{video.share_count}</span>
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M11.434 1a4.604 4.604 0 00-3.226 1.322L8 2.527l-.208-.205A4.589 4.589 0 004.566 1 4.589 4.589 0 001.34 2.322 4.5 4.5 0 000 5.522a4.5 4.5 0 001.34 3.2l6.133 6.061a.75.75 0 001.054 0l6.132-6.06a4.52 4.52 0 00.992-1.467 4.482 4.482 0 00-.992-4.934A4.604 4.604 0 0011.433 1z"></path></g></svg>
                        <span>{video.digg_count}</span>
                    </div>
                </div>
            </div>
        </label>
    )
}
