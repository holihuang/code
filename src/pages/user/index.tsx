import { Button } from 'antd';
import { connect } from 'umi';
type State = {
    add: object;
}
type Props = {
    add: {
        count: number;
    };
    dispatch(): void;
}
function User(props: Props) {
    const { dispatch, add } = props;
    function handleAdd() {
        dispatch({
            type: 'add/add',
        })
    }
    return (
        <div>
            <div>这是用户中心</div>
            <div>{add.count}</div>
            <Button onClick={handleAdd}>+</Button>
        </div>
    )
}
export default connect((state: State) => {
    const { add } = state
    return {add}
})(User);