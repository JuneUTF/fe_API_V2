import NoPage from "layouts/NoPage";
import Certification from "layouts/authentication/ForgetPassword/Certification";
import ChangePassword from "layouts/authentication/ForgetPassword/ChangePassword";
import Login from "layouts/authentication/Login";
import ChangePass from "layouts/authentication/ChangePassword";
import HomeUser from "layouts/UserRole/Home";
import Update from "layouts/UserRole/Update";
import HomeAdmin from "layouts/AdminRole/Home";
import ListUser from "layouts/AdminRole/ListUser";
import RegisterUser from "layouts/AdminRole/RegisterUser";
import UpdateUser from "layouts/AdminRole/UpdateUser";
import InfoUser from "layouts/AdminRole/InfoUser";
import HomeUpdateUser from "layouts/AdminRole/UpdateUser/Home"
import HomeInfoUser from "layouts/AdminRole/InfoUser/Home"
import Day30 from "layouts/AdminRole/Day30"
import Day15 from "layouts/AdminRole/Day15"
import Day7 from "layouts/AdminRole/Day7"
import HomeLeaderAdmin from "layouts/LeaderAdminRole/Home";
import RegisterAdmin from "layouts/LeaderAdminRole/RegisterAdmin";

const auth = localStorage.getItem("loginAuth");
const role = auth ? JSON.parse(auth).role_name : "noRole";
import LoginIcon from '@mui/icons-material/Login';
import KeyIcon from '@mui/icons-material/Key';
import SyncLockIcon from '@mui/icons-material/SyncLock';
const noRole =[
  {
    key: "home",
    route: "/",
    component: <Login />,
  },
  {
    type: "collapse",
    name: "ログイン",
    key: "Login",
    icon: <LoginIcon/>,
    route: "/Login",
    component: <Login />,
  },
  {
    type: "collapse",
    name: "パスワード忘れ",
    key: "Certification",
    icon: <KeyIcon/>,
    route: "/ForgetPassword/Certification",
    component: <Certification />,
  },
  {
    type: "collapse",
    name: "パスワード再設定",
    key: "ChangePassword",
    icon: <SyncLockIcon/>,
    route: "ForgetPassword/ChangePassword",
    component: <ChangePassword />,
  },
  {
    key: "NoPage",
    route: "*",
    component: <NoPage />,
  }
]
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
const userRole=[
  {
    type: "collapse",
    name: "情報",
    key: "Home",
    icon: <AccountCircleIcon/>,
    route: "/Home",
    component: <HomeUser />,
  },
  {
    type: "collapse",
    name: "情報編集",
    key: "update",
    icon: <EditIcon/>,
    route: "/update",
    component: <Update />,
  },
  {
    type: "collapse",
    name: "パスワード変更",
    key: "ChangePassword",
    icon: <SyncLockIcon/>,
    route: "/ChangePassword",
    component: <ChangePass />,
  },
  {
    key: "HomeUser",
    route: "/",
    component: <HomeUser />,
  },
  {
    key: "NoPage",
    route: "*",
    component: <NoPage />,
  },
]

import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const adminRole =[
  {
    type: "collapse",
    name: "ユーザー一覧表",
    key: "listuser",
    icon: <FormatListNumberedIcon/>,
    route: "/listuser",
    component: <ListUser />,
  },
  {
    type: "collapse",
    name: "残り30日",
    key: "day30",
    icon: <ArrowRightIcon/>,
    route: "/day30",
    component: <Day30 />,
  },
  {
    type: "collapse",
    name: "残り15日",
    key: "day15",
    icon: <ArrowRightIcon/>,
    route: "/day15",
    component: <Day15 />,
  },
  {
    type: "collapse",
    name: "残り7日",
    key: "day7",
    icon: <ArrowRightIcon/>,
    route: "/day7",
    component: <Day7 />,
  },
  {
    type: "collapse",
    name: "ユーザー追加",
    key: "register",
    icon: <PersonAddIcon/>,
    route: "/register",
    component: <RegisterUser />,
  },
  {
    type: "collapse",
    name: "パスワード変更",
    key: "ChangePassword",
    icon: <SyncLockIcon/>,
    route: "/ChangePassword",
    component: <ChangePass />,
  },
  {
    key: "updateid",
    route: "/update/:id",
    component: <UpdateUser />,
  },
  {
    key: "HomeInfoUser",
    route: "/userinfo",
    component: <HomeInfoUser />,
  },
  {
    key: "HomeUpdateUser",
    route: "/update",
    component: <HomeUpdateUser />,
  },
  {
    key: "info",
    route: "/userinfo/:id",
    component: <InfoUser />,
  },
  {
    key: "Home",
    route: "/",
    component: <HomeAdmin />,
  },
  {
    key: "NoPage",
    route: "*",
    component: <NoPage />,
  },
]
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const leadAdminRole = [
  {
    type: "collapse",
    name: "管理者一覧表",
    key: "HomeLeader",
    icon: <GroupIcon/>,
    route: "/HomeLeader",
    component: <HomeLeaderAdmin />,
  },
  {
    type: "collapse",
    name: "管理者追加",
    key: "registerAdmin",
    icon: <GroupAddIcon/>,
    route: "/registerAdmin",
    component: <RegisterAdmin />,
  },
  ,
  ...adminRole
]
let routes;
if(role.toLowerCase() === "user"){
  routes =userRole;
}else if(role.toLowerCase() === "admin"){
  routes =adminRole;
}else if(role.toLowerCase() === "leader"){
  routes =leadAdminRole;
}else{
  routes =noRole;
}
export default routes;
