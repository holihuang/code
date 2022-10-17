import { Outlet, connect } from 'umi';
import React from 'react';
import Head from './Head'
import Nav from './Nav'
import styles from './index.less'

type State = {
    menu: object,
}

type Props = {
    menu: {
        isCollpased: boolean;
    }
    dispatch: () => void;
}

function HomePage(props: Props) {
    const { menu: { isCollpased }, dispatch } = props;
  return (
      <div className={styles.wrapper}>
          <Head />
          <div className={styles.bottom}>
              <Nav isCollpased={isCollpased} dispatch={dispatch} />
                <div className={styles.content}>
                    <Outlet />
                </div>
          </div>
    </div>
  );
}

export default connect((state: State) => {
    const { menu } = state
    return { menu }
})(HomePage)
