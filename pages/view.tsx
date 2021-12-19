import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import NewsFeed from "../components/NewsFeed";
import ShareStory from "../components/ShareStory";
import Article from "../components/Article";
import Navbar from "../components/Navbar";


function ViewAllOrSingle(props: any) {
    if (props.postId == null) {
        return (
            <div className="m-auto w-7/12 pt-2 flex flex-col gap-2">
                <ShareStory/>
                <NewsFeed/> 
            </div>
        );
    } 
    return (
        <div className="m-auto w-7/12 pt-2 flex flex-col gap-2">
            <Article id={props.postId}/>
        </div>
    );
}

function view() {
    const router = useRouter()
    const [ postId, setPostId ] = useState(null);

    useEffect(() => {
        if(!router.isReady) return;
        console.log('DATA')
        console.log(router.query)
        setPostId(router.query.id);
        return () => {
            setPostId(null); // This worked for me
        };
    }, [router.isReady])

    return (
        <div>
            <Navbar/>
            <ViewAllOrSingle postId={postId}/>
        </div>
    )
}

export default view;