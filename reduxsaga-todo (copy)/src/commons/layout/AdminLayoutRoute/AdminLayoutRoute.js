import React, { Component } from 'react';
import DashBoard from '../../../components/dashboard/DashBoard'
import {
  Route
} from "react-router-dom";

class AdminLayoutRoute extends Component {
  render() {
    const {component: YourComponent, ...remainProps} = this.props
    return (
      <Route //path={route.path}
             //component={route.component}
             //exact={route.exact}
             {...remainProps}
             render={routeProps=>{
               return (
                 <DashBoard {...remainProps}>
                   <YourComponent {...routeProps}/>
                 </DashBoard>
               )
             }}></Route>
    );
  }
}

export default AdminLayoutRoute;
