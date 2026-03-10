export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export const blogCategories = [
  "All",
  "Health & Wellness",
  "Recipes",
  "Bee Keeping",
  "Honey Facts",
  "Franchise",
  "Gifting",
];

export const blogs: Blog[] = [
  {
    id: "benefits-of-raw-honey",
    title: "10 Amazing Health Benefits of Raw Honey You Didn't Know",
    excerpt: "Discover the incredible health benefits of consuming raw, unprocessed honey daily — from immunity boosting to wound healing.",
    content: `<p>Honey has been used for centuries as both a food and medicine. Raw honey, in particular, is packed with nutrients, antioxidants, and healing properties that processed honey simply can't match.</p>
    <h2>1. Rich in Antioxidants</h2>
    <p>Raw honey contains a range of plant chemicals that act as antioxidants. Some types of honey have as many antioxidants as fruits and vegetables. Antioxidants help protect your body from cell damage due to free radicals.</p>
    <h2>2. Natural Antibacterial and Antifungal</h2>
    <p>Research has shown that raw honey can kill unwanted bacteria and fungus. It naturally contains hydrogen peroxide, an antiseptic. Its effectiveness as an antibacterial or antifungal varies depending on the honey.</p>
    <h2>3. Heals Wounds</h2>
    <p>Manuka honey is used in medical settings to treat wounds because it's been found to be an effective germ killer and also aids in tissue regeneration.</p>
    <h2>4. Soothes Sore Throat</h2>
    <p>Have a cold? Try a spoonful of honey. Honey is an old sore throat remedy. Add it to hot tea with lemon when a cold virus hits you.</p>
    <h2>5. Boosts Immunity</h2>
    <p>Regular consumption of honey has been linked to improved immune function. The antioxidants and antibacterial properties help fight infections.</p>
    <h2>6. Aids Digestion</h2>
    <p>Honey is sometimes used to treat digestive issues such as diarrhea. It's also proven effective as a treatment for Helicobacter pylori bacteria, a common cause of stomach ulcers.</p>
    <h2>7. Improves Sleep Quality</h2>
    <p>A tablespoon of honey before bed can help improve sleep. It causes a rise in insulin which triggers the release of tryptophan, which converts to serotonin and then melatonin.</p>
    <h2>8. Natural Energy Source</h2>
    <p>Honey is an excellent source of natural energy. The natural sugars in honey are easily absorbed and provide a quick energy boost without the crash associated with refined sugars.</p>
    <h2>9. Supports Heart Health</h2>
    <p>Honey may help lower blood pressure, improve blood fat levels, regulate your heartbeat, and prevent the death of healthy cells.</p>
    <h2>10. Better Than Refined Sugar</h2>
    <p>While honey is still a sweetener, it's far better than refined sugar. It has a lower glycemic index and contains actual nutrients, unlike empty-calorie refined sugar.</p>`,
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800",
    date: "2025-03-01",
    readTime: "5 min read",
  },
  {
    id: "honey-lemon-recipes",
    title: "5 Delicious Honey-Based Recipes for Every Season",
    excerpt: "From honey lemon tea to honey-glazed chicken, explore easy and healthy recipes using pure Honeyman honey.",
    content: `<p>Honey isn't just a sweetener — it's a versatile ingredient that can transform your cooking and beverages. Here are five delicious recipes you can make with Honeyman's pure honey.</p>
    <h2>1. Honey Lemon Ginger Tea</h2>
    <p>Perfect for cold mornings or when you're feeling under the weather. Boil water with fresh ginger slices, add a squeeze of lemon and two tablespoons of Honeyman honey. This soothing drink is packed with antioxidants.</p>
    <h2>2. Honey Glazed Chicken</h2>
    <p>Mix Honeyman honey with soy sauce, garlic, and a dash of sesame oil. Marinate chicken for at least 2 hours, then bake at 200°C for 25 minutes. The result is a perfectly caramelized, flavorful dish.</p>
    <h2>3. Honey Banana Smoothie</h2>
    <p>Blend a ripe banana, a cup of yogurt, a tablespoon of honey, and some ice for a quick, nutritious breakfast smoothie.</p>
    <h2>4. Honey Oat Energy Bars</h2>
    <p>Combine oats, nuts, dried fruits, and bind them with warm honey. Press into a pan, refrigerate for 2 hours, and cut into bars. A healthy snack that travels well.</p>
    <h2>5. Honey Salad Dressing</h2>
    <p>Whisk together honey, olive oil, apple cider vinegar, and Dijon mustard for a simple yet delicious salad dressing that pairs well with any green salad.</p>`,
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
    date: "2025-02-20",
    readTime: "4 min read",
  },
  {
    id: "bee-keeping-india",
    title: "The Art of Beekeeping: How Honeyman Sources Pure Honey",
    excerpt: "A behind-the-scenes look at Honeyman's beekeeping practices and how we ensure 100% pure, natural honey.",
    content: `<p>At Honeyman, beekeeping isn't just a business — it's a passion rooted in 45+ years of tradition. Our founder, the late Sardar Jagjit Singh Kapoor, started our first apiaries in Punjab in 1971.</p>
    <h2>Our Beekeeping Philosophy</h2>
    <p>We believe in sustainable beekeeping that respects both the bees and the environment. Our apiaries are located in pristine, pesticide-free zones across India — from the foothills of the Himalayas to the forests of South India.</p>
    <h2>The Journey from Hive to Home</h2>
    <p>Every jar of Honeyman honey goes through a careful journey. Our beekeepers harvest honey at the peak of the season, ensuring maximum flavor and nutrition. The honey is then cold-extracted to preserve its natural enzymes and nutrients.</p>
    <h2>Quality Testing</h2>
    <p>Every batch undergoes rigorous testing in our advanced R&D labs. We test for purity, moisture content, and nutritional value — meeting and exceeding international standards.</p>`,
    category: "Bee Keeping",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
    date: "2025-02-15",
    readTime: "6 min read",
  },
  {
    id: "honey-vs-sugar",
    title: "Honey vs Sugar: Why You Should Make the Switch Today",
    excerpt: "Understand the key differences between honey and refined sugar, and why honey is the healthier, smarter choice.",
    content: `<p>In a world increasingly aware of the dangers of refined sugar, honey stands out as a natural, healthier alternative. But what exactly makes honey better?</p>
    <h2>Nutritional Comparison</h2>
    <p>While both honey and sugar contain glucose and fructose, honey also contains vitamins, minerals, amino acids, and antioxidants. Refined sugar is essentially empty calories with zero nutritional value.</p>
    <h2>Glycemic Index</h2>
    <p>Honey has a lower glycemic index than sugar, meaning it doesn't spike your blood sugar as quickly. This makes it a better option for sustained energy.</p>
    <h2>The Honeyman Mission</h2>
    <p>At Honeyman, our mission is to create the world's largest ecosystem of refined sugar-free products, sweetened only with pure natural honey. From honey-sweetened chocolates to honey-based beverages, we're proving that you don't need refined sugar to enjoy life's sweet moments.</p>`,
    category: "Honey Facts",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800",
    date: "2025-02-10",
    readTime: "4 min read",
  },
  {
    id: "honeyman-franchise-guide",
    title: "How to Start a Honeyman Franchise: Complete Guide",
    excerpt: "Everything you need to know about becoming a Honeyman franchise partner and joining India's fastest-growing honey brand.",
    content: `<p>With 160+ stores across India and counting, Honeyman is one of the fastest-growing franchise brands in the country. Here's everything you need to know about joining the Honeyman family.</p>
    <h2>Why Honeyman Franchise?</h2>
    <p>Honeyman offers a proven business model with strong brand recognition, comprehensive training, and ongoing support. Our franchise partners benefit from a growing market for natural, health-conscious products.</p>
    <h2>Investment & Returns</h2>
    <p>Our franchise model is designed to be accessible while offering attractive returns. With multiple formats available — from kiosks to full-size stores — there's an option for every budget.</p>
    <h2>Getting Started</h2>
    <p>Visit honeymanfranchise.com to learn more about our franchise opportunity and submit your application. Our team will guide you through every step of the process.</p>`,
    category: "Franchise",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    date: "2025-01-28",
    readTime: "5 min read",
  },
  {
    id: "honey-gifting-ideas",
    title: "Top 7 Honey Gift Ideas for Every Occasion",
    excerpt: "From weddings to Diwali, discover how Honeyman's premium honey gift sets make the perfect present.",
    content: `<p>Looking for a gift that's thoughtful, healthy, and unique? Honeyman's premium honey gift collections are perfect for any occasion.</p>
    <h2>1. Wedding Favors</h2>
    <p>Our mini honey jars make beautiful wedding favors that guests will actually love and use.</p>
    <h2>2. Diwali Gift Hampers</h2>
    <p>Replace sugary sweets with our curated Diwali honey hampers — a healthier way to celebrate.</p>
    <h2>3. Corporate Gifts</h2>
    <p>Impress your clients and employees with premium honey gift sets, customizable with your company branding.</p>
    <h2>4. Birthday Surprises</h2>
    <p>Our specialty honey collection — including exotic flavors like Kashmir Acacia and Himalayan Wild — makes a unique birthday gift.</p>
    <h2>5. Housewarming Gifts</h2>
    <p>Nothing says "sweet home" like a jar of pure honey.</p>
    <h2>6. Thank You Gifts</h2>
    <p>Show your appreciation with a gift that's sweet in every sense of the word.</p>
    <h2>7. Festival Hampers</h2>
    <p>From Rakhi to Christmas, we have curated hampers for every Indian festival. Visit honeymangifting.com to explore our full collection.</p>`,
    category: "Gifting",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=800",
    date: "2025-01-20",
    readTime: "4 min read",
  },
  {
    id: "types-of-honey",
    title: "A Guide to Different Types of Honey and Their Uses",
    excerpt: "Not all honey is the same! Learn about different varieties like Acacia, Multiflora, and Wild Forest honey.",
    content: `<p>India is home to a remarkable diversity of honey varieties, each with its own unique flavor, color, and health benefits.</p>
    <h2>Himalayan Wild Honey</h2>
    <p>Sourced from the pristine Himalayan foothills, this honey is dark, rich, and packed with minerals. Best enjoyed raw or in warm water.</p>
    <h2>Kashmir Acacia Honey</h2>
    <p>Light, delicate, and slow to crystallize, Acacia honey is perfect for tea, desserts, and everyday use.</p>
    <h2>Multiflora Honey</h2>
    <p>Sourced from bees that pollinate multiple flower types, this versatile honey is great for cooking and baking.</p>
    <h2>Eucalyptus Honey</h2>
    <p>Known for its medicinal properties, eucalyptus honey is excellent for sore throats and respiratory issues.</p>
    <h2>Litchi Honey</h2>
    <p>Sweet and fragrant, litchi honey is a favorite for its delicate floral flavor. Perfect for drizzling over pancakes or yogurt.</p>`,
    category: "Honey Facts",
    image: "https://images.unsplash.com/photo-1550411294-875e67b4bc71?w=800",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    id: "honey-skin-care",
    title: "Honey for Skin Care: Natural Beauty Secrets",
    excerpt: "Learn how honey can transform your skincare routine with DIY face masks, moisturizers, and more.",
    content: `<p>Honey has been a beauty secret since the times of Cleopatra. Its natural antibacterial and moisturizing properties make it an excellent ingredient for skincare.</p>
    <h2>Honey Face Mask</h2>
    <p>Apply raw honey directly to clean skin, leave for 15-20 minutes, and rinse with warm water. Your skin will feel soft, hydrated, and glowing.</p>
    <h2>Honey & Turmeric Brightening Mask</h2>
    <p>Mix a tablespoon of honey with a pinch of turmeric for a natural brightening treatment.</p>
    <h2>Honey Lip Balm</h2>
    <p>Mix honey with coconut oil and beeswax for a natural, moisturizing lip balm.</p>
    <h2>Honey Hair Mask</h2>
    <p>Combine honey with olive oil and apply to hair for deep conditioning. Leave for 30 minutes before washing.</p>`,
    category: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800",
    date: "2025-01-10",
    readTime: "4 min read",
  },
  {
    id: "save-the-bees",
    title: "Why Saving Bees is Critical for Our Future",
    excerpt: "Bees are responsible for pollinating 75% of our crops. Learn why bee conservation matters and what you can do.",
    content: `<p>Bees are the unsung heroes of our food system. Without them, many of the fruits, vegetables, and nuts we rely on would disappear.</p>
    <h2>The Crisis</h2>
    <p>Bee populations worldwide are declining due to pesticide use, habitat loss, and climate change. This is a crisis that affects us all.</p>
    <h2>What Honeyman Is Doing</h2>
    <p>At Honeyman, bee conservation is at the heart of our mission. We maintain sustainable apiaries, support local beekeepers, and educate communities about the importance of bees.</p>
    <h2>What You Can Do</h2>
    <p>Plant bee-friendly flowers, avoid pesticides in your garden, and choose honey from sustainable sources like Honeyman.</p>`,
    category: "Bee Keeping",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800",
    date: "2025-01-05",
    readTime: "5 min read",
  },
];

export const getBlogById = (id: string): Blog | undefined => {
  return blogs.find((b) => b.id === id);
};

export const getBlogsByCategory = (category: string): Blog[] => {
  if (category === "All") return blogs;
  return blogs.filter((b) => b.category === category);
};
