import { Link } from 'react-router-dom';
import Search from './Search';


const Nav = (props) => {

    let [search, setSearch] = props.search;


    return <div className="home-nav">
        <div className="home-nav-follow">
            <div className="home-nav-card">

                <Search search={[search, setSearch]} ></Search>

                <Link to='/' className='home-nav-button btn'>
                    Home
                </Link>

                <Link to='/feed' className='home-nav-button btn'>
                    Feed
                </Link>

                <Link to='/newpost' className='home-nav-button btn'>
                    Add new post +
                </Link>

            </div>
        </div>
    </div>
}

export default Nav;