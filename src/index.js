import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch ,Link } from 'react-router-dom'
import {Provider,connect } from 'react-redux'
import HelloMeassage from './component/HelloMeassage'
import Timer from './component/Timer'
import TodoApp from './component/TodoApp'
import MarkdownEditor from './component/MarkdownEditor'
import Lists from './component/Lists'
import Calculator from './component/BoilingVerdict'
import Tables from './component/Tables'
import Cards from './component/Cards'
import Gird from './component/Gird'
import Buttons from './component/Buttons.jsx'
import Menus from './component/Menu'
import {App,store} from '../src/App'
import {Greeting,LoginControl} from './component/Greeting'
import WrappedNormalLoginForm from './component/Forms';
import Register from './component/Register';
import Charts from './component/Chart';
import SiderDemo from './component/Layout';




// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//         {/* <Form/> */}
//         {/* <Calculator/> */}
//         {/* <Tables/> */}
//         {/* <Gird/> */}
//         {/* <Cards/> */}
//         {/* <Menus/> */}
//         {/* <Buttons/> */}
//         {/* <LoginControl/> */}
//         {/* <Lists numbers={[1,3,5,7]}/> */}
//         {/* <Greeting isLoggedIn={true}/> */}
//         {/* <HelloMeassage name = '刘金辉是傻逼' sex='男'/> */}
//         {/* <Timer/> */}
//         {/* <TodoApp/> */}
//         {/* <MarkdownEditor/> */}
//     </Provider>,document.getElementById('root'))




// const ParamsExample = () => (
//     <Router>
//       <div  style= {{backgroundColor:'red',width:500}} >
//         <h2>账号</h2>
//         <ul>
//           <li><Link to="/react-router">React Router</Link></li>
//           <li><Link to="/leoashin">LeoAshin</Link></li>
//           <li><Link to="/justjavac">justjavac</Link></li>
//           <li><Link to="/reacttraining">React Training</Link></li>
//         </ul>
//         <Route path="/:id" component={Child}/>
//       </div>
//     </Router>
//   )
  
//   const Child = ({ match }) => (
//     <div>
//       <h3>ID: {match.params.id}</h3>
//     </div>
//   )
//   export default ParamsExample

//   ReactDOM.render((<ParamsExample/>),document.getElementById('root'))


ReactDOM.render((
        <Router>
            <div>
                <Route exact path="/" component={ WrappedNormalLoginForm} />
                <Route exact path="/2" component={Charts}/>
                <Route exact path="/3" component={Register}/>
                <Route path="/4" component={SiderDemo}/>
                <Route path="/about" component={Buttons}/>    
            </div>
        </Router>
),document.getElementById('root'))



