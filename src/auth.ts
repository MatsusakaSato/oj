// 1. Import必须放在文件最顶部（ES模块规范）
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// 2. 日志语句移到import之后
console.log(">>>> AUTH_FILE_LOADING: 正在加载 auth.ts 配置...");

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      // 定义表单接收的字段
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log("Authorize hook received:", credentials);

        // 简单的测试认证逻辑
        if (credentials?.email === "test" && credentials?.password === "test") {
          return { id: "1", name: "Test User", email: "test@example.com" };
        }

        // 认证失败返回null
        return null;
      },
    }),
  ],
  // 必须设置环境变量AUTH_SECRET
  secret: process.env.AUTH_SECRET,
  // Credentials模式下必须使用JWT策略
  session: { strategy: "jwt" },
  // 可选：添加调试日志
  debug: process.env.NODE_ENV === "development",
});
