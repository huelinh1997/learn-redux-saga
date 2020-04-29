import React, {Component} from 'react';
import TaskBoard from '../taskboard/TaskBoard'
import GlobalLoading from '../../components/globalLoading/GlobalLoading'
import CommonModal from '../../components/modal/modal'
import { Switch } from "react-router-dom";
import {ADMIN_ROUTER} from '../../constants/route';
import AdminLayoutRoute from '../../commons/layout/AdminLayoutRoute/AdminLayoutRoute';

class App extends Component {
  renderAdminRoute() {
    let xhtml = null;
    xhtml = ADMIN_ROUTER.map(route=>{
      return (
        <AdminLayoutRoute key={route.path}
                          path={route.path}
                          exact={route.exact}
                          component={route.component}
                          name={route.name}/>    // co dashboard, con login ko co
      )
    })
    return xhtml;
  }
    render() {
        return (
            <div>
              <Switch>
                {this.renderAdminRoute()}
              </Switch>
               {/*<TaskBoard/> */}
              <CommonModal/>
              <GlobalLoading/>
            </div>
        );
    }
}

export default App;
