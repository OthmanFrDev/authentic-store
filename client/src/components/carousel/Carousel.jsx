import Post from '../post/Post';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function Carousel(props) {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <div className="relative flex items-center">
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {props.videos.map((video, index) => <Post key={index} video={video} />)}
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
    )
}
