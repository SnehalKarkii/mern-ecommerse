import React from "react";
import HomeCarousel from "../../components/carousel/HomeCarousel/HomeCarousel";
import HomeSectionCarousel from "../../components/carousel/HomeSectionCarousel/HomeSectionCarousel";
import product from "../../Data/men_kurta";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel Data={product} sectionTitleName={"Men's Kurta"}/>
        <HomeSectionCarousel Data={product} sectionTitleName={"Women Kurta"}/>
        <HomeSectionCarousel Data={product} sectionTitleName={"Men's Kurta"}/>
        <HomeSectionCarousel Data={product} sectionTitleName={"Men's Kurta"}/>
      </div>
    </div>
  );
};

export default HomePage;
