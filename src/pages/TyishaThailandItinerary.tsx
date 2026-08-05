import { useEffect } from "react";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import { tyishaThailandData } from "@/data/countries/tyishaThailand";

const TyishaThailandDesktopHero = () => {
  const bookingUrl = tyishaThailandData.slug
    ? `/booking/${tyishaThailandData.slug}`
    : "#";

  return (
    <section className="hidden w-full px-5 py-5 md:block">
      <div className="mx-auto w-full max-w-[1420px] md:w-[94%] md:px-6 lg:w-[92%] lg:px-12 xl:w-[90%]">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h1 className="font-playfair text-3xl font-semibold leading-none text-[#0fc2bf] lg:text-4xl">
              {tyishaThailandData.title}
            </h1>

            {tyishaThailandData.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {tyishaThailandData.tags.map(({ icon: Icon, emoji, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary lg:text-sm"
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 text-primary" />
                    ) : (
                      emoji && <span className="text-base">{emoji}</span>
                    )}
                    {label}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-2 flex flex-wrap items-center gap-4 text-lg font-semibold text-slate-800 lg:text-xl">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#0fc2bf] lg:h-5 lg:w-5" />
                <span className="font-playfair">
                  {tyishaThailandData.route.join(" → ")}
                </span>
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
            <p className="text-lg text-slate-700">
              From{" "}
              {tyishaThailandData.priceOriginal && (
                <span className="mr-2 text-lg font-semibold text-slate-500 line-through">
                  {tyishaThailandData.priceOriginal}
                </span>
              )}
              <span className="text-3xl font-extrabold text-slate-900 lg:text-4xl">
                {tyishaThailandData.price}
              </span>
            </p>
            {tyishaThailandData.priceNote && (
              <p className="text-xs font-semibold text-slate-600">
                {tyishaThailandData.priceNote}
              </p>
            )}
            <a href={bookingUrl} className="inline-flex">
              <button
                type="button"
                className="mt-2 rounded-full bg-[#0fc2bf] px-5 py-2 text-base font-bold text-white transition hover:brightness-95"
              >
                {tyishaThailandData.ctaLabel}
              </button>
            </a>
            <p className="mt-1 text-xs font-semibold text-slate-600">
              Deposit is non-refundable.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full overflow-hidden rounded-[24px] md:w-[94%] lg:w-[92%] xl:w-[90%]">
        <div className="grid h-[460px] grid-cols-12 grid-rows-2 gap-1 bg-white lg:h-[500px] xl:h-[530px]">
          <img
            src={tyishaThailandData.desktopHeroPosterImage}
            alt="Thailand temple and tropical coast at sunset"
            className="col-span-3 row-span-2 h-full w-full object-cover"
          />
          <img
            src={tyishaThailandData.desktopTopMiddleImage}
            alt="Long-tail boat on the Phuket coast"
            className="order-2 col-span-5 h-full w-full object-cover"
            style={{ objectPosition: tyishaThailandData.desktopTopMiddleObjectPosition }}
          />
          <img
            src={tyishaThailandData.desktopTopRightImage}
            alt="Travellers exploring a Bangkok evening market"
            className="order-2 col-span-4 h-full w-full object-cover"
            style={{ objectPosition: tyishaThailandData.desktopTopRightObjectPosition }}
          />
          <img
            src={tyishaThailandData.desktopBottomLeftImage}
            alt="Tropical beach in southern Thailand"
            className="order-1 col-span-3 h-full w-full object-cover"
          />
          <img
            src={tyishaThailandData.desktopBottomMiddleImage}
            alt="Bangkok welcome night"
            className="order-1 col-span-3 h-full w-full object-cover"
            style={{ objectPosition: tyishaThailandData.desktopBottomMiddleObjectPosition }}
          />
          <img
            src={tyishaThailandData.desktopBottomRightImage}
            alt="Bangkok and Phuket escape"
            className="order-1 col-span-3 h-full w-full object-cover"
            style={{ objectPosition: tyishaThailandData.desktopBottomRightObjectPosition }}
          />
        </div>
      </div>
    </section>
  );
};

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
