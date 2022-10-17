import { history } from 'umi';
import { Button, Input } from "antd";
import style from './index.less';

export default function () {
    function handleLogin() {
        console.log('haha...')
        document.cookie = 'login'
        history.push('/');
    }
    return (
        <div className={style.wrapper}>
            <div>login</div>
            <Input className={style.ipt} />
            <Button onClick={handleLogin}>登录</Button>
        </div>
    )
}