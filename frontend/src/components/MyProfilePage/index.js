import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import MyProfileComponent from './MyProfileComponent';
import MyProfileMyPosts from './MyProfileComponent/MyProfileMyPosts'
import MyProfileFriends from './MyProfileComponent/MyProfileFriends'
import MyProfileFollowers from './MyProfileComponent/MyProfileFollowers'
import MyProfileFollowing from './MyProfileComponent/MyProfileFollowing'

const MyProfilePage = () => {



    return(
        <Router>
            <MyProfileComponent />
                <Switch>
                    <Route exact path='/profile/myposts' component= { MyProfileMyPosts } />
                    <Route exact path='/profile/myfriends' component= { MyProfileFriends } />
                    <Route exact path='/profile/followers' component= { MyProfileFollowers } />
                    <Route exact path='/profile/following' component= { MyProfileFollowing } />
                </Switch>
        </Router>
    )
}

export default MyProfilePage


// const posts = useSelector((state) => state.postReducer.posts)

// const dispatch = useDispatch();

// useEffect(()=> {
//     const fetchPosts = async () =>{
//     const data = await dispatch(myPostAction())
//     console.log('data', data)   
//     }
//     fetchPosts() 
// }, [])

// import { useSelector, useDispatch } from 'react-redux';
// import { MyProfilePageStyle, MyProfileContainerStyle, MyProfileInfoLeft, MyProfileInfoRight, 
//     MyProfilePic2, MyProfileName, MyProfileLocation, MyProfileAboutSection, MyProfileStats,
//     MyProfileAboutTop, MyProfileAboutBottom, About, ThingsILike, ContactDetails, StatBox, StatNumber } from './style';
// import { ClearBtn } from '../../style/Buttons'
// import me2 from '../../assets/avatars/me2.png'
// import { myPostAction } from '../../store/actions/myPostAction'

{/* <div>{posts.map((post) => post={post} )}</div> */}