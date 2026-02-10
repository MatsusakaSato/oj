import { Role } from "@/constants/enum";

export interface Router {
  key: string;
  label: string;
  href: string;
  showInMenu?: boolean;
  requiresRole: Role[];
  children?: Router[];
}

const routes: Router[] = [
  {
    key: "home",
    label: "首页",
    href: "/",
    showInMenu: true,
    requiresRole: [],
  },
  {
    key: "problemList",
    label: "题目列表",
    href: "/problem-list",
    showInMenu: true,
    requiresRole: [],
  },
  {
    key: "userList",
    label: "用户列表",
    href: "/users",
    showInMenu: true,
    requiresRole: [Role.ADMIN],
  },
  {
    key: "profile",
    label: "个人中心",
    href: "/profile",
    showInMenu: true,
    requiresRole: [Role.USER, Role.ADMIN],
  },
  {
    key: "login",
    label: "登陆",
    href: "/login",
    showInMenu: false,
    requiresRole: [],
  },
  {
    key: "createProblem",
    label: "创建题目",
    href: "/create-problem",
    showInMenu: true,
    requiresRole: [Role.ADMIN],
  },
];
export default routes;
