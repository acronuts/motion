import React, { useState } from 'react';
import { OnYourMindStyle, ProfilePic, PostOnMyMind } from './style';
import { PostBtn } from '../../../style/Buttons'
import postBtn from '../../../assets/images/send_button.png';
import { useDispatch, useSelector } from 'react-redux';
import { postContentAction } from '../../../store/actions/postContentAction'
import avatarIcon from '../../../assets/svgs/avatar.svg'


const OnYourMind = () => {
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const user = useSelector((state) => state.authReducer.user)
    
    const submitHandler = async () => {
        const response = await dispatch(postContentAction(content))
        if (response) {
            setContent('') 
        }
    }

    return (
        <OnYourMindStyle>
            {user ? <>
            {user.avatar ? <ProfilePic src={user.avatar} alt='me' /> : <ProfilePic src={avatarIcon} alt='me' /> }
            <PostOnMyMind type='text' value={content} onChange={(event)=> setContent(event.target.value)} 
             placeholder= {`What's on your mind, ${user.first_name}?`}/>
            <PostBtn onClick={submitHandler} ><img src={postBtn} alt='post' /></PostBtn> </>
            : 'loading..'}
        </OnYourMindStyle>

    )
}

export default OnYourMind