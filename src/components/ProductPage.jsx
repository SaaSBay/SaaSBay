import React from "react";

const Section = ({ title, children, className = "" }) => (
  <section className={`mb-16 ${className}`}>
    <div className="border-b border-gray-200 pb-4 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
    </div>
    {children}
  </section>
);

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-200",
    success: "bg-green-50 text-green-700 border-green-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
    gray: "bg-gray-50 text-gray-700 border-gray-200"
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

const ProductPage = ({ product }) => {
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const {
    logo,
    name,
    tagline,
    bannerImage,
    description,
    rating,
    reviews,
    badges,
    awards,
    categories,
    features,
    pricing,
    integrations,
    screenshots,
    faqs,
    support,
    vendor,
    compliance,
    testimonials,
    reviewBreakdown,
    website
  } = product;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      {bannerImage && (
        <div className="relative h-80 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
          <img
            src={bannerImage}
            alt={`${name} banner`}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Product Header */}
        <div className="relative -mt-20 mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Logo Section */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    src={logo}
                    alt={name}
                    className="w-32 h-32 lg:w-40 lg:h-40 object-contain rounded-xl shadow-lg bg-white border border-gray-200 p-4"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
                    {name}
                  </h1>
                  {tagline && (
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                      {tagline}
                    </p>
                  )}
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400 text-lg">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{rating}</span>
                    <span className="text-gray-500">({reviews} reviews)</span>
                  </div>
                </div>

                {/* Badges & Awards */}
                <div className="flex flex-wrap gap-3">
                  {badges?.map((badge, i) => (
                    <Badge key={i} variant="default">{badge}</Badge>
                  ))}
                  {awards?.map((award, i) => (
                    <Badge key={i} variant="purple">
                      🏆 {award.title} ({award.year})
                    </Badge>
                  ))}
                </div>

                {/* Categories & Compliance */}
                <div className="flex flex-wrap gap-3">
                  {categories?.map((cat, i) => (
                    <Badge key={i} variant="gray">{cat}</Badge>
                  ))}
                  {compliance?.gstCompliant && (
                    <Badge variant="success">GST Compliant</Badge>
                  )}
                  {compliance?.einvoicing && (
                    <Badge variant="success">E-Invoicing Support</Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {website && (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
                    >
                      Visit Website
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {pricing && pricing.length > 0 && (
                    <a
                      href="#pricing"
                      className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition-colors"
                    >
                      View Pricing
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 mb-8">
          {/* Description */}
          <Section title="Product Overview">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {description}
              </p>
            </div>
          </Section>

          {/* Features */}
          {features && features.length > 0 && (
            <Section title="Key Features">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Pricing */}
          {pricing && pricing.length > 0 && (
            <Section title="Pricing Plans" className="scroll-mt-20" id="pricing">
              <div className="grid md:grid-cols-3 gap-8">
                {pricing.map((plan, i) => (
                  <div
                    key={i}
                    className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-1">
                        {plan.price}
                      </div>
                      {plan.gstIncluded && (
                        <p className="text-sm text-gray-500">(GST included)</p>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Review Breakdown */}
          {reviewBreakdown && (
            <Section title="Customer Ratings">
              <div className="grid grid-cols-5 gap-6">
                {Object.entries(reviewBreakdown).reverse().map(([star, count]) => (
                  <div key={star} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{star}★</div>
                    <div className="text-sm text-gray-600">{count} ratings</div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Integrations */}
          {integrations && integrations.length > 0 && (
            <Section title="Integrations">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((int, i) => (
                  <div key={i} className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <span className="text-blue-700 font-medium text-sm">{int}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Screenshots */}
          {screenshots && screenshots.length > 0 && (
            <Section title="Product Screenshots">
              <div className="grid md:grid-cols-2 gap-8">
                {screenshots.map((shot, i) => (
                  <div key={i} className="relative group">
                    <img
                      src={shot}
                      alt={`${name} screenshot ${i + 1}`}
                      className="w-full rounded-xl shadow-lg border border-gray-200 group-hover:shadow-xl transition-shadow"
                    />
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Testimonials */}
          {testimonials && testimonials.length > 0 && (
            <Section title="What Our Customers Say">
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map(({ text, client }, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 italic text-lg mb-4">"{text}"</p>
                    <p className="font-semibold text-gray-900">— {client}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <Section title="Frequently Asked Questions">
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Support & Vendor Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Support Information */}
            {support && (
              <Section title="Customer Support">
                <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                  <div className="space-y-4">
                    {support.email && (
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-blue-900"><strong>Email:</strong> {support.email}</span>
                      </div>
                    )}
                    {support.phone && (
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-blue-900"><strong>Phone:</strong> {support.phone}</span>
                      </div>
                    )}
                    {support.availableHours && (
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-blue-900"><strong>Hours:</strong> {support.availableHours}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Section>
            )}

            {/* Vendor Info */}
            {vendor && (
              <Section title="About the Company">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{vendor.companyName}</h3>
                    {vendor.founded && (
                      <p className="text-gray-700"><strong>Founded:</strong> {vendor.founded}</p>
                    )}
                    {vendor.headquarters && (
                      <p className="text-gray-700"><strong>Headquarters:</strong> {vendor.headquarters}</p>
                    )}
                    {vendor.teamSize && (
                      <p className="text-gray-700"><strong>Team Size:</strong> {vendor.teamSize}</p>
                    )}
                    <a
                      href={vendor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Visit Company Website
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Section>
            )}
          </div>

          {/* Compliance */}
          {compliance && (
            <Section title="Security & Compliance">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${compliance.gstCompliant ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-gray-700"><strong>GST Compliant:</strong> {compliance.gstCompliant ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${compliance.einvoicing ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="text-gray-700"><strong>E-Invoicing:</strong> {compliance.einvoicing ? 'Supported' : 'Not Available'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700"><strong>Data Storage:</strong> {compliance.dataLocalization}</span>
                  </div>
                </div>
                {compliance.privacyPolicyUrl && (
                  <div>
                    <a
                      href={compliance.privacyPolicyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
                    >
                      View Privacy Policy
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;