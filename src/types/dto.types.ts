import z from "zod";
export const $UserDTO = z.object({
  email: z.email(),
  username: z.string().optional().default("匿名用户"),
  password: z.string(),
});
export type UserDTO = z.infer<typeof $UserDTO>;
