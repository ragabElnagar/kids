'use client';
import NotFound from "@/app/not-found";
import CategoryCard from "@/components/Card/CategoryCard";
import CategoryOne from "@/components/Category/CategoryOne";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MovieList from "@/components/Movie/MovieList";
import { allCategories, HeaderOneHome } from "@/data/pageTitles";
import { Categories } from "@/data/videos";
import { useParams } from 'next/navigation';

export default function Movies() {
  const { lang } = useParams();
  const breadcrumb = {
    title: allCategories.title[lang],
    links: [
      { name: HeaderOneHome.home[lang], href: "/" },
      { name: allCategories.title[lang], href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        {/* <!-- Start Pagination Area --> */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}>
        {Object.values(Categories) && Object.values(Categories).length > 0 && (
          Object.values(Categories).map((category, index) => (
              <div style={{maxWidth: "350px", padding: '8px'}}>
                <CategoryCard category={category} />
              </div>
          ))
      )}
        </div>
        {/* <!-- End Pagination Area --> */}
      </main>

      <FooterOne />
    </>
  );
}
