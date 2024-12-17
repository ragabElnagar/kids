import Image from "next/image";

export default function LiveStreamingFeatureCard({ feature, lang }) {
  return (
    <div className="feathur-card text-center">
      <img src={feature.image} alt="icon" />
      <h4 className="mt-30 mb-0 fw-normal text-uppercase feature-title">
        {feature.title[lang]}
      </h4>
      <p>{feature.description[lang]}</p>
    </div>
  );
}
