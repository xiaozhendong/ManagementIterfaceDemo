import React from "react";
import {store as pageStore} from 'ice/IceStoreTest'

class ClassComponent extends React.Component {

  render() {
    // @ts-ignore
    const {user} = this.props;
    const [state] = user;

    return (<div>
      {state.map((item) => <div>{item.name}</div>)}
    </div>);
  }

}

export default pageStore.withModel('user')(ClassComponent)
