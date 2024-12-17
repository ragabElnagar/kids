'use client';
import Image from "next/image";
import data from "@/data/about";
import { useParams } from "next/navigation";

export default function AboutOne() {
  const { lang } = useParams();

  return (
    <div className="about-us container py-80">
      <div className="row justify-content-center">
        <div className="col-lg-7 text-center">
          <h3 className="section-title large mb-1 lh-1" style={{color: 'var(--heading-color-dark)'}}>{data.title[lang]}</h3>
          <p className="mb-5" style={{color: 'var(--paragraph-color-dark)'}}>{data.descriptionOne[lang]}</p>
          <h3 className="section-title small mb-1 lh-1" style={{color: 'var(--heading-color-dark)'}}>{data.subTitle[lang]}</h3>
          <p style={{color: 'var(--paragraph-color-dark)'}}>{data.descriptionTwo[lang]}</p>
        </div>
        {/* <div className="thumb mt-5">
          <img src={data.image} alt="thumb" />
        </div> */}
      </div>
    </div>
  );
}
