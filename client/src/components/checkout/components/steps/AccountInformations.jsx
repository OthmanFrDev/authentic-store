import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fillUsername } from '../../../../redux/preOrder';

export default function AccountInformations() {

  const dispatch = useDispatch();
  const [usernameFounded, setUsernameFounded] = useState(false);
  const [showSpan, setShowSpan] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const fillUsernameHandler = (e) => {
    dispatch(fillUsername({ username: e.target.value }))
  }
  const isUsernameFounded = (e) => {
    const options = {
      method: 'GET',
      url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/user/info',
      params: { unique_id: e.target.value },
      headers: {
        'X-RapidAPI-Key': 'b6e1e40d90mshf03f602b74d3ea5p1aade2jsna3d996848546',
        'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
      }
    };
    // axios.request(options).then(async function (response) {
    //   if (response.data.msg === "success") {
    //     const { user } = await response.data.data
    //     setUsernameFounded(true);
    //     setAvatar(user.avatarMedium)
    //   }
    //   else {
    //     setUsernameFounded(false);
    //   }
    //   setShowSpan(true)
    // }).catch(function (error) {
    //   setUsernameFounded(false);
    //   console.error(error);
    // });
  }
  return (
    <div className="relative flex flex-col space-y-2 w-full">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
          {showSpan &&
            <span className="p-1 focus:outline-none focus:shadow-outline">
              {
                usernameFounded ? "✔️" : "❌"
              }
            </span>
          }
        </span>
        <input type="search" name="username" className="w-full px-3 py-2 border border-slate-400 text-sm rounded-md focus:outline-none" placeholder="Tiktok username" onChange={fillUsernameHandler} onBlur={isUsernameFounded} />
        {avatar && <img src={avatar} alt="" className='w-1/2 h-1/2' />}
      </div>
    </div>
  )
}
