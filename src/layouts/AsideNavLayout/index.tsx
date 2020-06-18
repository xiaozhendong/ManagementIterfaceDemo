import * as React from 'react';
import Layout from '@icedesign/layout';
import Aside from './components/Aside/index';
import { Icon} from "@alifd/next";


class AsideNavLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      collapse:true
    }
  }

  componentDidMount(): void {

  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    let width=this.state.collapse ? 60 : 200
    return <Layout fixable={true}>
      <Layout.Aside type="primary" >
        <Aside collapse={this.state.collapse} width={width}/>
        <div  onClick={() => {

          this.setState({
            collapse: !this.state.collapse
          })
        }}  style={{position:'fixed', width:width,bottom:12, textAlign:'center'}}>
          <Icon
            type={this.state.collapse ? 'arrow-right' : 'arrow-left' }

          />
        </div>
      </Layout.Aside>
      <Layout.Section>
        <Layout.Main scrollable style={{backgroundColor:"#f5f5f5"}}>

          {this.props.children}

        </Layout.Main>
      </Layout.Section>
    </Layout>
  }
}


export default AsideNavLayout;
