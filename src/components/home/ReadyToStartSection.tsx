import { Link } from "react-router-dom";

const READY_TO_START_CALL_TEL = "tel:+919650305025";
const READY_TO_START_CALL_E164 = "+919650305025";

/** Short delay so gtag can dispatch before `tel:` handoff (often drops the hit otherwise). */
const CALL_TRACKING_DELAY_MS = 150;

const ReadyToStartSection = () => (
  <section className="py-10 bg-[#f9b11f]">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide mb-3 text-white mb-6 drop-shadow-md">
        Ready to Start Your Journey?
      </h2>
      <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto font-medium">
        Slots for this quarter are filling up fast. Secure your preferred location today.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/contact-us"
          className="bg-white text-orange-600 px-10 py-5 rounded-full font-extrabold text-lg hover:bg-gray-50 transition shadow-xl hover:-translate-y-1 transform w-full sm:w-auto text-center"
        >
          Apply Now
        </Link>
        <a
          href={READY_TO_START_CALL_TEL}
          className="bg-transparent text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-white/20 transition border-2 border-white w-full sm:w-auto text-center"
          onClick={(e) => {
            e.preventDefault();
            window.gtag?.("event", "call_us_click", {
              event_category: "engagement",
              event_label: "ready_to_start_call_us",
              phone_number: READY_TO_START_CALL_E164,
              page_location: window.location.href,
              placement: "ready_to_start_section",
            });
            window.setTimeout(() => {
              window.location.href = READY_TO_START_CALL_TEL;
            }, CALL_TRACKING_DELAY_MS);
          }}
        >
          <i className="fas fa-phone mr-2" /> Call Us
        </a>
      </div>
    </div>
  </section>
);

export default ReadyToStartSection;
