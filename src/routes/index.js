import HeaderOnly from "~/layouts/HeaderOnly";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Live from "../pages/Live";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/@:nickname", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/live", component: Live },
]; // router không cần đăng nhập cũng vào được

const privateRoutes = []; // router cần đăng nhập

export { publicRoutes, privateRoutes };
