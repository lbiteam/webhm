import Bee from "./Bee";
import { useLanguage } from "@/contexts/LanguageContext";

const ReviewsSection = () => {
  const { t } = useLanguage();

  const reviews = [
  {
    name: "Shubham Mishra",
    rating: 5,
    text: "I trust Honeyman for its rich, unfiltered goodness. Perfect in tea or straight from the jar – it's 100% pure with no nasties. Great taste and quality! Highly recommend. ⭐⭐⭐⭐⭐",
    verificationLink: "https://www.amazon.in/Honeyman-Unprocessed-Sweetener-Desserts-Ayurveda/dp/B0BXXB3Y9Z/"
  },

  {
    name: "Gopal",
    rating: 5,
    text: " really liked Honeyman Honey. The taste is pure and natural, just like raw honey. It has a smooth texture and amazing aroma. I use it daily with warm water and it feels very healthy. Highly recommend this brand!",
    verificationLink: "https://www.amazon.in/Honeyman-Unprocessed-Sweetener-Desserts-Ayurveda/dp/B0BXXB3Y9Z/"
  },
  {
    name: "Jay Pandey",
    rating: 5,
    text: " Honeyman's raw honey is a great option if you’re looking for an all-natural, flavorful honey with a smooth texture. It’s versatile for both cooking and skincare, and the overall quality is excellent.I highly recommend it!",
    verificationLink: "https://www.amazon.in/Honeyman-Unprocessed-Sweetener-Desserts-Ayurveda/dp/B0BXXB3Y9Z/"


  }
];

  return (
    <section id="reviews" className="py-24 bg-secondary relative overflow-hidden">
      {/* Honeycomb wave at top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute inset-0 honeycomb-pattern opacity-50" />
      </div>
      
      <Bee className="absolute top-32 left-[8%]" size={28} />
      <Bee className="absolute bottom-20 right-[10%]" size={32} />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="section-title">{t("reviewsSection.title")}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-2xl shadow-soft hover:shadow-honey transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>

              {/* Verification Link */}
              {review.verificationLink && (
                <a
                  href={review.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                    <path d="M11 3v2h6.59L9.29 12.3l1.42 1.42L19 6.41V13h2V3h-10z"/>
                  </svg>
                  Verified Review
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
