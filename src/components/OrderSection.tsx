import Bee from "./Bee";

const OrderSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <Bee className="absolute top-20 right-[15%]" size={30} />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title mb-6">
            Order honey from the apiary right now
          </h2>
          
          <p className="text-muted-foreground mb-10">
            Fill out the form below, and we will get in touch with you and our specialists will consider your specific requirements.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-6 py-4 bg-card rounded-full border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-6 py-4 bg-card rounded-full border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <div>
              <input
                type="text"
                placeholder="What honey are you interested in?"
                className="w-full px-6 py-4 bg-card rounded-full border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <button type="submit" className="honey-btn">
              Leave a request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
