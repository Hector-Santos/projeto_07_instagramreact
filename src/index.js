import ReactDOM from 'react-dom';
import Content from './Content';
import Topbar from './Topbar';
function ScreenRender(){
return(
    <div> 
    < Topbar />
    < Content />
    </div>
   
)
}

ReactDOM.render(<ScreenRender />, document.querySelector(".root"))