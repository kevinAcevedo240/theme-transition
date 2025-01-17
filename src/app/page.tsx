import { ToggleTheme } from "@/components/toggle-theme";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Transiciones dark and light theme</CardTitle>
            <CardDescription>
            Despliega tu nuevo proyecto con un solo clic.
            </CardDescription>
        </CardHeader>
        <CardContent>
          <h3>Mensaje de prueba</h3>
        </CardContent>
      </Card>
      <div className="absolute right-2 top-2">
        <ToggleTheme />
      </div>
    </main>
  );
}
