import { useState } from "react";
import PostListV2 from "./PostListV2";
import Search from "./Search";
import PageCounter from './PageCounter';
import { useEffect } from "react";
import get from '../services/get';
import Nav from "./Nav";
import SortBar from "./SortBar";

let Feed = () => {

    let [currPost, setCurrPost] = useState();
    let [search, setSearch] = useState("");
    let [sort, setSort] = useState("new");
    let [page, setPage] = useState(0);
    let [pageCount, setPageCount] = useState(0);

    let updatePosts = async () => {
        let token = localStorage.getItem('Auth');
        let res = await get.postByFollow(search, sort, page, token);
        if (res.success) {
            setCurrPost(res.success.posts);
            setPageCount(res.success.count);
        }
    }

    useEffect(() => {
        updatePosts();
    }, [search, sort, page])

    // return <div className="feed">
    //     Feed
    //     <Search search={[search, setSearch]} setSort={setSort}></Search>
    //     <PostListV2 currPost={currPost}></PostListV2>
    //     <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
    // </div>

    return <div className='home'>

        <Nav search={[search, setSearch]} ></Nav>

        {/* <PostList></PostList> */}
        <div className="home-post">
            <SortBar sort={setSort}></SortBar>
            <PostListV2 currPost={currPost}></PostListV2>
            <PageCounter total={pageCount} page={[page, setPage]} ></PageCounter>
        </div>

        <div className="nav">

        </div>

    </div>
}

export default Feed;
