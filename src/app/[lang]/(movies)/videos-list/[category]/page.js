'use client';
import NotFound from "@/app/not-found";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MovieList from "@/components/Movie/MovieList";
import { Categories } from "@/data/videos";
import { useParams } from 'next/navigation';

export default function Movies() {
  const { category, lang } = useParams();

  // find the category in the Categories object
  const siteCategory = Object.values(Categories).find((c) => c.id.toLowerCase() === category.toLowerCase());
console.log(siteCategory)
  if(!siteCategory && category.toLowerCase() !== 'all') {
    return <NotFound />;
  }

  const breadcrumb = {
    title: category.toLowerCase() === 'all' ? 'All Videos' : siteCategory.name[lang],
    links: [
      { name: "Home", href: "/" },
      { name: category === 'all' ? 'ALL VIDEOS' : siteCategory.name[lang], href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        {/* <!-- Start Pagination Area --> */}
        <MovieList category={category} />
        {/* <!-- End Pagination Area --> */}
      </main>

      <FooterOne />
    </>
  );
}
