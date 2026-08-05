import { useEffect } from "react";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { tyishaThailandData } from "@/data/countries/tyishaThailand";

const TyishaThailandDesktopHero = () => (
  <section className="hidden w-full px-5 py-5 md:block">
    <div className="mx-auto w-full max-w-[1420px] md:w-[94%] md:px-6 lg:w-[92%] lg:px-12 xl:w-[90%]">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
            Tyisha Thailand
          </p>
          <h1 className="font-playfair text-3xl font-semibold leading-none text-[#0fc2bf] lg:text-4xl">
            {tyishaThailandData.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {tyishaThailandData.tags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary lg:text-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-lg font-semibold text-slate-800 lg:text-xl">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#0fc2bf] lg:h-5 lg:w-5" />
              <span className="font-playfair">Bangkok • Phuket</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#0fc2bf] lg:h-5 lg:w-5" />
              <span className="font-playfair">{tyishaThailandData.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-[#0fc2bf] lg:h-5 lg:w-5" />
              <span className="font-playfair">{tyishaThailandData.startDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#0fc2bf] lg:h-5 lg:w-5" />
              <span className="font-playfair">Thailand</span>
            </div>
          </div>
        </div>

        <div className="min-w-[220px] pt-1 text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Two start dates
          </p>
          <p className="mt-1 text-xl font-bold text-slate-900">April 15th or 22nd</p>
          <span className="mt-3 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
            Booking details coming soon
          </span>
        </div>
      </div>
    </div>

    <div className="mx-auto w-full overflow-hidden rounded-[24px] md:w-[94%] lg:w-[92%] xl:w-[90%]">
      <div className="grid h-[460px] grid-cols-12 grid-rows-2 gap-1 bg-white lg:h-[500px] xl:h-[530px]">
        <img
          src={tyishaThailandData.heroImage}
          alt="Thailand temple and tropical coast at sunset"
          className="col-span-7 row-span-2 h-full w-full object-cover"
        />
        <img
          src={tyishaThailandData.overviewGallery[0]}
          alt="Travellers exploring a Bangkok evening market"
          className="col-span-5 h-full w-full object-cover"
        />
        <img
          src={tyishaThailandData.overviewGallery[1]}
          alt="Long-tail boat on the Phuket coast"
          className="col-span-5 h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);

const TyishaThailandItinerary = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <ItineraryTemplate
      data={tyishaThailandData}
      hideDesktopHero
      desktopHero={<TyishaThailandDesktopHero />}
    />
  );
};

export default TyishaThailandItinerary;
