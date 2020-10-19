import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { MyProfilePageStyle, MyProfileContainerStyle, MyProfileInfoLeft, MyProfileInfoRight, 
//     MyProfilePic2, MyProfileName, MyProfileLocation, MyProfileAboutSection, MyProfileStats,
//     MyProfileAboutTop, MyProfileAboutBottom, About, ThingsILike, ContactDetails, StatBox, StatNumber } from './style';
// import { ClearBtn } from '../../style/Buttons'
// import me2 from '../../assets/avatars/me2.png'
// import { myPostAction } from '../../store/actions/myPostAction'
import MyProfileComponent from './MyProfileComponent';

const MyProfilePage = () => {

    // const posts = useSelector((state) => state.postReducer.posts)

    // const dispatch = useDispatch();

    // useEffect(()=> {
    //     const fetchPosts = async () =>{
    //     const data = await dispatch(myPostAction())
    //     console.log('data', data)   
    //     }
    //     fetchPosts() 
    // }, [])

    return(
        <div>
            <MyProfileComponent />
            {/* <div>{posts.map((post) => post={post} )}</div> */}
        </div>
    )
}

export default MyProfilePage