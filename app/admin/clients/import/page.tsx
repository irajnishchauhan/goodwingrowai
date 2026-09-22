import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CSVImporter } from "./components/CSVImporter";

export default async function AdminImportPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "authenticated") {
    redirect("/admin/login");
  }

  return <CSVImporter />;
}
