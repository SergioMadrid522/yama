import { ubicacionData } from "@/data";

export default function Location() {
  const { title, iframeLink, catchphrase, mapsLink } = ubicacionData;
  return (
    <main>
      <h1 className="flex items-center justify-center p-6 w-full text-2xl ">
        {title}
      </h1>

      <section className="flex items-center justify-center">
        <iframe
          src={iframeLink}
          className="max-w-full w-87.5 max-h-87.5 h-87.5 border-0 rounded-xl shadow-2xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section>
        <h2 className="flex items-center justify-center p-6 w-full text-xl">
          "{catchphrase}"
        </h2>

        <div className="flex items-center justify-center pt-0 pb-5">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-500/20 rounded-xl text-lg"
          >
            Cómo llegar
          </a>
        </div>
      </section>
    </main>
  );
}
