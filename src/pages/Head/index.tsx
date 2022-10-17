import { connect } from 'umi';
import { MenuOutlined } from '@ant-design/icons'
import styles from './index.less'; 

type State = {
    menu: object;
};
type Props = {
    dispatch: () => void;
};
function Head(props: Props) {
    const { dispatch } = props;
    function handleToggle() {
        dispatch({
            type: 'menu/toggleCollpased',
        })
    }
    return (
        <div className={styles.head}>
            <div>head</div>
            <MenuOutlined className={styles.icon} onClick={handleToggle} />
        </div>
    )
}
export default connect((state: State) => {
    const { menu } = state;
    return {menu};
})(Head)