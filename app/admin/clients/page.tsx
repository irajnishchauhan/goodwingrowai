import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ClientDashboard } from "./components/ClientDashboard";

export default async function AdminClientsPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "authenticated") {
    redirect("/admin/login");
  }

  return <ClientDashboard />;
}
