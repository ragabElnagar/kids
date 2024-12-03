'use client';
import { liveStreamingFeatureData as data } from "@/data/feature";
import LiveStreamingFeatureCard from "@/components/Card/LiveStreamingFeatureCard";
import { useParams } from "next/navigation";

export default function LiveStreamingFeature() {
  const { lang } = useParams();
  return (
    <div
      className="live-stream py-80 mt-80"
      style={{
        // backgroundImage: "url('assets/images/background/feathur-bg.webp')",
        background: 'var(--bg-gradient)',
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-35">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <h3 className="section-title text-center mb-0">{data.title[lang]}</h3>
          </div>
        </div>
        {/* <!-- Feathurs --> */}
        {data.features && data.features.length > 0 && (
          <div className="row row-gap-4">
            {data.features.map((feature, index) => (
              <div key={index} className="col-sm-6 col-xl-3">
                <LiveStreamingFeatureCard feature={feature} lang={lang} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
