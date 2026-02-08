import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
  const session = await getServerSession();
  if (!session) {
    return null;
  }
  return session.user;
};

export const requireAuth = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return user;
};
