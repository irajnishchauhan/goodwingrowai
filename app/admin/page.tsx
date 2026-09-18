import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminDashboard } from "./components/AdminDashboard";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "authenticated") {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
