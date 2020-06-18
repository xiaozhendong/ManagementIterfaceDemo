import * as React from 'react';
import {string} from 'prop-types'
import { Loading } from '@alifd/next';
import styles from './index.module.scss'

const MyLoading = (props) => {
  return (
    <div >
      <div className={styles.loadingBackground}></div>

      <Loading tip={props.tips} className={styles.loadingConatiner} />

    </div>
  );
};
MyLoading.prototype={
  tips:string
}
export default MyLoading;
