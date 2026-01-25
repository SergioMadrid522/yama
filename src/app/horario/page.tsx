import RenderSchedule from "@/components/renderSchedule/RenderSchedule";
import { horario } from "@/data";

export default function Schedule() {
  return (
    <main>
      <section className="py-6">
        <RenderSchedule />
      </section>
    </main>
  );
}
