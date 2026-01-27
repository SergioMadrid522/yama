import RenderSchedule from "@/components/renderSchedule/RenderSchedule";
import { GLOBAL } from "@/data";

export default function Schedule() {
  const { facebookLink } = GLOBAL;
  return (
    <main>
      <section className="py-6">
        <RenderSchedule />
        <div className="w-full px-5 py-6 text-lg text-center text">
          <p className="text-gray-500 italic">
            Horarios sujetos a cambios en días festivos. Mantente al tanto de
            avisos urgentes en nuestro{" "}
            <a
              href={facebookLink}
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
