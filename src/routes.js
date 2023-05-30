

// @mui icons
import Icon from "@mui/material/Icon";
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
import Logout from "layouts/authentication/Logout";


const auth = localStorage.getItem("loginAuth");
const role = auth ? JSON.parse(auth).role : "noRole";
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
    icon: <Icon fontSize="small">Login</Icon>,
    route: "/Login",
    component: <Login />,
  },
  {
    type: "collapse",
    name: "パスワード忘れ",
    key: "Certification",
    icon: <Icon fontSize="small">Certification</Icon>,
    route: "/ForgetPassword/Certification",
    component: <Certification />,
  },
  {
    type: "collapse",
    name: "パスワード再設定",
    key: "ChangePassword",
    icon: <Icon fontSize="small">ChangePassword</Icon>,
    route: "ForgetPassword/ChangePassword",
    component: <ChangePassword />,
  },
  {
    key: "NoPage",
    route: "*",
    component: <NoPage />,
  }
]

const userRole=[
  {
    type: "collapse",
    name: "情報",
    key: "Home",
    icon: <Icon fontSize="small">Home</Icon>,
    route: "/Home",
    component: <HomeUser />,
  },
  {
    type: "collapse",
    name: "情報編集",
    key: "update",
    icon: <Icon fontSize="small">update</Icon>,
    route: "/update",
    component: <Update />,
  },
  {
    type: "collapse",
    name: "パスワード変更",
    key: "ChangePassword",
    icon: <Icon fontSize="small">ChangePassword</Icon>,
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
  {
    key: "logout",
    route: "/logout",
    component: <Logout />,
  },
]
const adminRole =[
  {
    type: "collapse",
    name: "ユーザー一覧表",
    key: "listuser",
    icon: <Icon fontSize="small">listuser</Icon>,
    route: "/listuser",
    component: <ListUser />,
  },
  {
    type: "collapse",
    name: "残り30日",
    key: "day30",
    icon: <Icon fontSize="small">day30</Icon>,
    route: "/day30",
    component: <Day30 />,
  },
  {
    type: "collapse",
    name: "残り15日",
    key: "day15",
    icon: <Icon fontSize="small">day15</Icon>,
    route: "/day15",
    component: <Day15 />,
  },
  {
    type: "collapse",
    name: "残り7日",
    key: "day7",
    icon: <Icon fontSize="small">day7</Icon>,
    route: "/day7",
    component: <Day7 />,
  },
  {
    type: "collapse",
    name: "ユーザー追加",
    key: "register",
    icon: <Icon fontSize="small">register</Icon>,
    route: "/register",
    component: <RegisterUser />,
  },
  {
    type: "collapse",
    name: "ユーザー編集",
    key: "update",
    icon: <Icon fontSize="small">update</Icon>,
    route: "/update",
    component: <HomeUpdateUser />,
  },
  {
    type: "collapse",
    name: "ユーザー情報",
    key: "userinfo",
    icon: <Icon fontSize="small">userinfo</Icon>,
    route: "/userinfo",
    component: <HomeInfoUser />,
  },
  {
    type: "collapse",
    name: "パスワード変更",
    key: "ChangePassword",
    icon: <Icon fontSize="small">ChangePassword</Icon>,
    route: "/ChangePassword",
    component: <ChangePass />,
  },
  {
    key: "updateid",
    route: "/update/:id",
    component: <UpdateUser />,
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
  {
    key: "logout",
    route: "/logout",
    component: <Logout />,
  },
]
const leadAdminRole = [
  {
    type: "collapse",
    name: "管理者一覧表",
    key: "HomeLeader",
    icon: <Icon fontSize="small">HomeLeader</Icon>,
    route: "/HomeLeader",
    component: <HomeLeaderAdmin />,
  },
  {
    type: "collapse",
    name: "管理者追加",
    key: "registerAdmin",
    icon: <Icon fontSize="small">register</Icon>,
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
