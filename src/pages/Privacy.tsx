import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-down">
            Privacy Policy for Honeyman
          </h1>
          <p className="text-muted-foreground animate-slide-up stagger-1">
            Last Updated: February 21, 2026
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="space-y-4">
            <p className="text-muted-foreground">
              At Honeyman (accessible from{" "}
              <a
                href="https://honeyman.in"
                className="text-amber-800 underline underline-offset-2 hover:text-amber-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://honeyman.in
              </a>
              ), one of our main priorities is the privacy of our visitors. This Privacy Policy document
              contains types of information that is collected and recorded by Honeyman and how we use it.
            </p>
            <p className="text-muted-foreground">
              If you have additional questions or require more information about our Privacy Policy, do not
              hesitate to contact us at{" "}
              <a
                href="mailto:info@honeyman.in"
                className="text-amber-800 underline underline-offset-2 hover:text-amber-950"
              >
                info@honeyman.in
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect several different types of information for various purposes to provide and improve
              our service to you.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Identification Information</h3>
            <p className="text-muted-foreground mb-3">
              While using our site, particularly when inquiring about franchise opportunities or making a
              purchase, we may ask you to provide us with certain personally identifiable information such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Shipping and Billing Address</li>
              <li>Business/Professional Details (for Franchise applications)</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Log Files</h3>
            <p className="text-muted-foreground">
              Honeyman follows a standard procedure of using log files. These files log visitors when they
              visit websites. The information collected includes internet protocol (IP) addresses, browser
              type, Internet Service Provider (ISP), date and time stamp, and referring/exit pages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our product offerings.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new products, services, features, and functionality.</li>
              <li>Process transactions and manage your orders.</li>
              <li>
                Communicate with you, either directly or through one of our partners, for customer service,
                updates, and marketing/promotional purposes.
              </li>
              <li>Evaluate and process Franchise Inquiries for the Honeyman brand.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Cookies and Web Beacons</h2>
            <p className="text-muted-foreground">
              Like any other website, Honeyman uses &quot;cookies&quot;. These cookies are used to store
              information including visitors&apos; preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the users&apos; experience by customizing
              our web page content based on visitors&apos; browser type and/or other information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Privacy Policies</h2>
            <p className="text-muted-foreground">
              Honeyman&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are
              advising you to consult the respective Privacy Policies of these third-party ad servers (such as
              Google or social media platforms) for more detailed information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Protection Rights</h2>
            <p className="text-muted-foreground mb-4">
              We want to make sure you are fully aware of all of your data protection rights. Every user is
              entitled to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground font-semibold">The right to access:</strong> You have the
                right to request copies of your personal data.
              </li>
              <li>
                <strong className="text-foreground font-semibold">The right to rectification:</strong> You have
                the right to request that we correct any information you believe is inaccurate.
              </li>
              <li>
                <strong className="text-foreground font-semibold">The right to erasure:</strong> You have the
                right to request that we erase your personal data, under certain conditions.
              </li>
              <li>
                <strong className="text-foreground font-semibold">The right to object to processing:</strong> You
                have the right to object to our processing of your personal data, especially for direct
                marketing.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Children&apos;s Information</h2>
            <p className="text-muted-foreground">
              Another part of our priority is adding protection for children while using the internet. We
              encourage parents and guardians to observe, participate in, and/or monitor and guide their online
              activity. Honeyman does not knowingly collect any Personal Identifiable Information from children
              under the age of 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Consent</h2>
            <p className="text-muted-foreground">
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none pl-0 space-y-2 text-muted-foreground">
              <li>
                By email:{" "}
                <a
                  href="mailto:hello@honeyman.in"
                  className="text-amber-800 underline underline-offset-2 hover:text-amber-950"
                >
                  hello@honeyman.in
                </a>
              </li>
              
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
