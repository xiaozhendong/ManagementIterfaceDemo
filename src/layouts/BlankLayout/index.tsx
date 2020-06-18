import * as React from 'react';


class BlankLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(): void {

  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <div style={{backgroundColor:"#f0f0f0"}}>

      {this.props.children}
    </div>;
  }
}


export default BlankLayout;
