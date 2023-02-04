import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Quantity from '../../../product-list/quantity/Quantity'
import { products } from "../../../product-list/services.json"
import Carousel from '../../../carousel/Carousel'
import axios from 'axios';

export default function AccountView() {
    const [quantities, setQuantities] = useState([])
    const [user, setUser] = useState(null);
    const [userVideos, setUserVideos] = useState([])
    const orderState = useSelector(state => state.order.value)
    useEffect(() => {
        const service = products.find(p => p.name === orderState.orders[0].service)
        const serviceType = service.services.find(s => s.name === orderState.orders[0].serviceType)
        setQuantities(serviceType.quantities)
        getUser();
        console.log(" quantities :: ", serviceType)
    }, [])
    const getOptions = (url) => {
        const options = {
            method: 'GET',
            url: url,
            params: { unique_id: "atifi_omar" },
            headers: {
                'X-RapidAPI-Key': 'b6e1e40d90mshf03f602b74d3ea5p1aade2jsna3d996848546',
                'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
            }
        };
        return options;
    }
    const getUser = () => {
        axios.request(getOptions('https://tiktok-video-no-watermark2.p.rapidapi.com/user/info'))
            .then(async function (response) {
                if (response.data.msg === "success") {
                    const { user, stats } = await response.data.data
                    setUser({
                        user: user,
                        followers: stats.followerCount,
                        following: stats.followingCount,
                        likes: stats.heartCount
                    });
                }
                return response.data.data
            })
            .then(res => {
                axios.request(getOptions('https://tiktok-video-no-watermark2.p.rapidapi.com/user/posts'))
                    .then(async function (response) {
                        if (response.data.msg === "success") {
                            const { videos } = await response.data.data
                            setUserVideos(videos);
                        }
                    })
            })
            .catch(function (error) {
                console.error(error);
            });
    }
    return (
        <div className='w-full space-y-4 '>
            <div className="w-full px-4 flex justify-center text-black">
                <Quantity quantities={quantities} />
            </div>
            {user &&
                <>
                    <div className="w-full px-4 flex justify-center text-black">
                        <img className="w-1/4 h-1/4 p-1 bg-[#E7E7E7] rounded-full" src={"https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f3183b5dd116b64a5c8c6f99b79c4b71~c5_720x720.webp?x-expires=1675551600&x-signature=etDcpLnrjOnIXrKAGjvKdXj%2BI0A%3D"} alt="" />
                        <div className="title mt-5 ml-3 font-bold flex flex-col">
                            <div className="name break-words">{user.nickname}</div>
                            <div className="add font-semibold text-sm italic dark">{user.uniqueId}</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                        <span className="text-center px-2"><span className="font-bold text-gray-700">{user.followers}</span><span className="text-gray-600"> followers</span></span>
                        <span className="text-center px-2"><span className="font-bold text-gray-700">{user.following}</span><span className="text-gray-600"> following</span></span>
                        <span className="text-center px-2"><span className="font-bold text-gray-700">{user.likes}</span><span className="text-gray-600"> likes</span></span>
                    </div>
                </>
            }
            {
                user && userVideos && orderState.orders[0].serviceType !== "Followers" &&
                <Carousel videos={userVideos}></Carousel>
            }
        </div>
    )
}
