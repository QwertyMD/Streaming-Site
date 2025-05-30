import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { motion, scale } from "framer-motion";
import { SearchIcon } from "lucide-react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navItems = ["Home", "Movies", "TV Shows", "Collections"];

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/search/movie",
  //       {
  //         params: {
  //           api_key: "f51f867a67bf6b61d0106400668ce722",
  //         },
  //       },
  //     );
  //     setMovies(response.data);
  //   };
  //   fetchMovies();
  // }, []);

  console.log(movies);

  return (
    <div className="px-10 py-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        className="flex justify-between items-center"
      >
        <NavLink to={"/"} className="flex items-center gap-3">
          <div className="w-12 h-8 bg-cover bg-[url('OpenFlix.svg')]"></div>
          <p className="text-primeblue text-2xl font-bold">
            Open<span className="text-primered font-bold">Flix</span>
          </p>
        </NavLink>

        <ul className="flex gap-20">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-primeblue hover:text-primered cursor-pointer"
            >
              <NavLink to={`/${item.toLowerCase()}`} className="text-lg">
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="cursor-pointer">
          <SearchIcon className="text-primered" size={32}/>
        </button>
      </motion.div>
      <div className=""></div>
    </div>
  );
};

export default Home;

// {page: 1, results: Array(20), total_pages: 10, total_results: 197}
// page
//   :
//   1
// results
//   :
//   Array(20)
// 0
// :
// adult
//   :
//   false
// backdrop_path
//   :
//   "/frDS8A5vIP927KYAxTVVKRIbqZw.jpg"
// genre_ids
//   :
//   (3) [14, 28, 80]
// id
//   :
//   268
// original_language
//   :
//   "en"
// original_title
//   :
//   "Batman"
// overview
//   :
//   "Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld."
// popularity
//   :
//   8.0539
// poster_path
//   :
//   "/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg"
// release_date
//   :
//   "1989-06-21"
// title
//   :
//   "Batman"
// video
//   :
//   false
// vote_average
//   :
//   7.234
// vote_count
//   :
//   8066
//     [[Prototype]]
// :
// Object
// 1
// :
// {adult: false, backdrop_path: '/bHxJA9rllKF2jhb11ARAwZJYSp6.jpg', genre_ids: Array(6), id: 125249, original_language: 'en', …}
// 2
// :
// {adult: false, backdrop_path: '/nOWOU0bdX76iF9XA1YPlInLbI4Y.jpg', genre_ids: Array(3), id: 2661, original_language: 'en', …}
// 3
// :
// {adult: false, backdrop_path: '/e807jDKiFcntZS32ze88X6I96OD.jpg', genre_ids: Array(2), id: 1297763, original_language: 'ja', …}
// 4
// :
// {adult: false, backdrop_path: null, genre_ids: Array(1), id: 1430994, original_language: 'fr', …}
// 5
// :
// {adult: false, backdrop_path: '/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg', genre_ids: Array(3), id: 414906, original_language: 'en', …}
// 6
// :
// {adult: false, backdrop_path: '/1MfLMZd8DTkbGj3oqUIKeVwoi69.jpg', genre_ids: Array(3), id: 987400, original_language: 'es', …}
// 7
// :
// {adult: false, backdrop_path: null, genre_ids: Array(1), id: 148918, original_language: 'ro', …}
// 8
// :
// {adult: false, backdrop_path: '/sreACNpiCB8SxGVINQR5mY3Y4tp.jpg', genre_ids: Array(4), id: 602307, original_language: 'en', …}
// 9
// :
// {adult: false, backdrop_path: null, genre_ids: Array(2), id: 131185, original_language: 'tl', …}
// 10
// :
// {adult: false, backdrop_path: '/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg', genre_ids: Array(3), id: 209112, original_language: 'en', …}
// 11
// :
// {adult: false, backdrop_path: '/silcq0dj3Scf1LtpBjjVKXMQXS2.jpg', genre_ids: Array(3), id: 485942, original_language: 'ja', …}
// 12
// :
// {adult: false, backdrop_path: '/ew5FcYiRhTYNJAkxoVPMNlCOdVn.jpg', genre_ids: Array(3), id: 272, original_language: 'en', …}
// 13
// :
// {adult: false, backdrop_path: '/u82RurwuuaHlnv0SWEpSSK8T7a8.jpg', genre_ids: Array(1), id: 456348, original_language: 'en', …}
// 14
// :
// {adult: false, backdrop_path: '/r2NyPy5XzZEZXatxsWDqRtI7yWk.jpg', genre_ids: Array(2), id: 1460147, original_language: 'en', …}
// 15
// :
// {adult: false, backdrop_path: '/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg', genre_ids: Array(2), id: 364, original_language: 'en', …}
// 16
// :
// {adult: false, backdrop_path: '/rpOqHZMNIaI4qP4r7nw1B7oA0mx.jpg', genre_ids: Array(3), id: 415, original_language: 'en', …}
// 17
// :
// {adult: false, backdrop_path: '/mo1eLCJTp5JGGz2tKlW98KXpRo0.jpg', genre_ids: Array(4), id: 324849, original_language: 'en', …}
// 18
// :
// {adult: false, backdrop_path: null, genre_ids: Array(0), id: 1338401, original_language: 'pt', …}
// 19
// :
// {adult: false, backdrop_path: '/z6cCtZmBd37p6XzTsDdO2TGwVhA.jpg', genre_ids: Array(4), id: 1332473, original_language: 'en', …}
// length
//   :
//   20
//     [[Prototype]]
// :
// Array(0)
// total_pages
//   :
//   10
// total_results
//   :
//   197
//     [[Prototype]]
// :
// Object
