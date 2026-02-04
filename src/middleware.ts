import { NextRequest, NextResponse } from "next/server";
import userStore from "./store/user.store";
import routes from "./router/router";
import { Router } from "@/router/router";

/* TODO 中间件无法起作用（用来拦截非法url）
 * 没有export代表这是一个普通的函数，没有起到中间件的作用，
 * 如果后续要开启中间件，要先修改逻辑确保拿到user信息，现在的user都是null，
 * 因为middleware运行在v8引擎上，无法访问zustand的localstorage,
 * 应该修改为采用jwt的方式，并且同步写入cookie
 */
export default function middleware(request: NextRequest) {
  //   // 获取当前请求的完整路径
  //   const requestPath = request.nextUrl.pathname;
  //   const user: Maybe<UserVO> = userStore.getState().user;
  //   console.log("user info: " + user);
  //   const matchedRoute: Maybe<Router> = routes.find((route) => {
  //     return route.href === requestPath;
  //   });
  //   if (!matchedRoute) {
  //     return NextResponse.redirect(new URL("/", request.nextUrl));
  //   }
  //   const roles = matchedRoute.requiresRole;
  //   //不需要任何权限直接放行
  //   if (roles.length === 0) {
  //     return NextResponse.next();
  //   }
  //   //需要权限但是用户没登陆，不能放行，并且重定向到登录页
  //   if (!user) {
  //     return NextResponse.redirect(new URL("/login", request.nextUrl));
  //   }
  //   //需要权限并且用户也登陆了，检查用户是否有对应的权限，没有则跳转到主页
  //   if (!roles.includes(user.role)) {
  //     return NextResponse.redirect(new URL("/", request.nextUrl));
  //   }
  //   return NextResponse.next();
  // }
  // export const config = {
  //   matcher: [
  //     /*
  //      * 匹配所有路径，除了：
  //      * 1. /api (API 路由)
  //      * 2. /_next/static (静态文件)
  //      * 3. /_next/image (图像优化文件)
  //      * 4. /favicon.ico (浏览器图标)
  //      */
  //     "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|css|js)$).*)",
  //   ],
}
