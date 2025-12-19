import { Gift, Heart, Briefcase, Sparkles } from "lucide-react";
import gift1 from "@/assets/gifting/Artboard 5 (1).jpg";
import gift2 from "@/assets/gifting/Gemini_Generated_Image_2ym99p2ym99p2ym9.png";
import gift3 from "@/assets/gifting/Gemini_Generated_Image_3kzt2n3kzt2n3kzt (1).png";
import gift4 from "@/assets/gifting/Gemini_Generated_Image_3mj9393mj9393mj9 (1).png";
import gift5 from "@/assets/gifting/WhatsApp Image 2025-11-20 at 12.17.54.jpeg";

const giftCategories = [
  {
    id: 1,
    name: "Wedding",
    description: "Sweet beginnings for the newlyweds. Elegant gift boxes perfect for wedding favors and celebrations.",
    icon: Heart,
    color: "from-rose-400 to-pink-500",
    bgPattern: "🌸",
  },
  {
    id: 2,
    name: "Celebration",
    description: "Mark every milestone with sweetness. Perfect for birthdays, anniversaries, and special moments.",
    icon: Sparkles,
    color: "from-amber-400 to-orange-500",
    bgPattern: "🎉",
  },
  {
    id: 3,
    name: "Corporate",
    description: "Impress clients and appreciate employees with premium honey gift sets for business occasions.",
    icon: Briefcase,
    color: "from-slate-500 to-slate-700",
    bgPattern: "💼",
  },
  {
    id: 4,
    name: "Wellness",
    description: "The gift of health and natural goodness. Curated wellness boxes for those who care.",
    icon: Gift,
    color: "from-emerald-400 to-teal-500",
    bgPattern: "🌿",
  },
];

const GiftingSection = () => {
  return (
    <section id="gifting" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: image collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={gift1} alt="gift 1" className="w-full h-72 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={gift2} alt="gift 2" className="w-full h-72 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={gift3} alt="gift 3" className="w-full h-72 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={gift4} alt="gift 4" className="w-full h-72 object-cover" />
            </div>
          </div>

          {/* Right: info + small customize button */}
          <div>
            <span className="inline-block px-4 py-2 bg-honey/20 rounded-full text-honey-dark font-medium text-sm mb-4">
              Perfect Presents
            </span>
            <h2 className="section-title">Gifting Collection</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed mt-4">
              Spread sweetness and joy with our beautifully curated honey gift sets for every occasion. Choose from elegant wedding boxes, celebration hampers, corporate sets, and wellness collections.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {giftCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{category.name}</h4>
                      <p className="text-muted-foreground text-xs leading-tight">{category.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <a href="/gifting" className="inline-flex items-center gap-2 text-sm bg-honey/10 text-honey px-4 py-2 rounded-full border border-honey/20">
                Customize Your Gifting
              </a>
            </div>

            <div className="mt-6 text-muted-foreground text-sm flex items-center gap-3">
              <img src={gift5} alt="gift preview" className="w-12 h-12 rounded-md object-cover shadow-sm" />
              <div>
                <div className="font-medium text-foreground">Personalized Boxes</div>
                <div className="text-xs">Bulk orders & corporate requests handled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingSection;
