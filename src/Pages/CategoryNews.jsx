import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(data)
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const breakingNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(breakingNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div className="mx-5">
      <h2 className="font-bold">Total <span className="text-secondary">{categoryNews.length}</span> news found</h2>
      <div className="grid grid-cols-1 gap-5 my-5">
        {
            categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
