import Header from './header1';
import { default as HeaderAnother } from './Header';
import SubHeader from './Header/subheader';
import Body from './Header/body';
import World from './Header/world';
import Fire from './Header/fire';
import Sample from './Header/sample';
const HomePage = () => {
    return <div>
        {/* <Header/> */}
        <HeaderAnother/>
       <SubHeader/> 
       <Body/>
       <World/>
       <Fire/>
       <Sample/>
       
    </div>
}

export default HomePage;