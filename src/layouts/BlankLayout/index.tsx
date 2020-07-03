import * as React from 'react';

function BlankLayout({children}: { children: React.ReactNode }) {
  return <div style={{backgroundColor: "#f0f0f0"}}>

    {children}
  </div>;
}

/*class BlankLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(): void {

  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

  }
}*/


export default BlankLayout;
