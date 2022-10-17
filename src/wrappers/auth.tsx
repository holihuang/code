import { Navigate, Outlet } from 'umi';
export default () => {
    const isLogin: boolean = document.cookie.includes('login');
    if (isLogin) {
        return (
            <Outlet />
        )
    } else {
        return (
            <Navigate to="/login" />
        )
    }
}