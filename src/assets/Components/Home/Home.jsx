import BGhome from '../../../../../img/home-bg.png'
import {Link} from 'react-router-dom'
import './Home.css'
import NavBar from '../NavBar/NavBar'


function Home() {

    return (
        <div>
            <div className='home-og'>
                <NavBar></NavBar>
                <div className="home">
                    <div className='home-txt'>
                        <h3>SO, U WANT 2 TRAVEL 2</h3>
                        <h1>SPACE</h1>
                        <p>Let's face it; if u want 2 go 2 space, u might as well genuinely go 2 outer space and meet other cultures.</p>
                    </div>
                    <div className='home-btn'>
                        <Link to='/'>EXPLORE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home