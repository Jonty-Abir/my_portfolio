// import { unique } from "next/dist/build/utils";
// import Image from "next/image";
// import { MdFavoriteBorder } from "react-icons/md";

// const Page = () => {
//   return (
//     <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
//       <div>
//         <div className="text-sm text-slate-500 italic mb-4">67.975 Items</div>
//         {/* Cards 1 */}
//         <div>
//           <div className="grid grid-cols-12 gap-6 w-full">
//             {/* Card 10  */}
//             {data &&
//               data.map((value: any) => (
//                 <div
//                   key={unique()}
//                   className="col-span-full md:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden"
//                 >
//                   <div className="flex flex-col h-full">
//                     {/* Image */}
//                     <div className="relative">
//                       <Image
//                         className="w-full"
//                         src={`${value?.image}`}
//                         width={301}
//                         height={226}
//                         alt="Application 30"
//                       />
//                       {/* Like button */}
//                       <button className="absolute top-0 right-0 mt-4 mr-4">
//                         <div className="bg-opacity-60 rounded-full bg-gray-50 p-2">
//                           <span className="sr-only">Like</span>
//                           <FcLike size={24} />
//                         </div>
//                       </button>
//                     </div>
//                     {/* Card Content  */}
//                     <div className="grow flex flex-col p-5">
//                       {/* Card body */}
//                       <div className="grow">
//                         <header className="mb-2">
//                           <a href="#0">
//                             <h3 className="text-lg text-slate-800 font-semibold mb-1">
//                               {value?.title}
//                             </h3>
//                           </a>
//                           <div className="text-sm text-gray-600">
//                             {value?.description}
//                           </div>
//                         </header>
//                       </div>
//                       {/* Rating and price  */}
//                       <div className="flex flex-wrap justify-between items-center">
//                         {/* Rating */}
//                         <div className="flex items-center space-x-2 mr-2">
//                           {/* Stars */}
//                           <div className="flex space-x-1">
//                             <button>
//                               <span className="sr-only">1 star</span>
//                               <svg
//                                 className="w-4 h-4 fill-current text-amber-500"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                               </svg>
//                             </button>
//                             <button>
//                               <span className="sr-only">2 stars</span>
//                               <svg
//                                 className="w-4 h-4 fill-current text-amber-500"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                               </svg>
//                             </button>
//                             <button>
//                               <span className="sr-only">3 stars</span>
//                               <svg
//                                 className="w-4 h-4 fill-current text-amber-500"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                               </svg>
//                             </button>
//                             <button>
//                               <span className="sr-only">4 stars</span>
//                               <svg
//                                 className="w-4 h-4 fill-current text-amber-500"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                               </svg>
//                             </button>
//                             <button>
//                               <span className="sr-only">5 stars</span>
//                               <svg
//                                 className="w-4 h-4 fill-current text-slate-300"
//                                 viewBox="0 0 16 16"
//                               >
//                                 <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                               </svg>
//                             </button>
//                           </div>
//                           {/* Rate */}
//                           <div className="inline-flex text-sm font-medium text-amber-600">
//                             {value?.rating?.rate}
//                           </div>
//                         </div>
//                         {/* Price */}
//                         <div>
//                           <div className="inline-flex text-sm font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2 py-0.5">
//                             ${value?.price}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             {/* CTA start*/}
//             <div className="col-span-full md:order-1 xl:order-none">
//               <div className="h-full p-6 bg-slate-800 rounded-sm text-center xl:text-left xl:flex xl:justify-between xl:items-center">
//                 <div className="mb-4 xl:mb-0 xl:mr-4">
//                   <div className="text-xl text-slate-50 font-semibold mb-1">
//                     Excepteur sint occaecat{" "}
//                     <span className="text-indigo-500">cupidatat</span> 🎁
//                   </div>
//                   <div className="m-auto text-sm text-slate-400">
//                     Excepteur sint occaecat cupidatat non proidentsunt in culpa
//                     qui officia deserunt mollit!
//                   </div>
//                 </div>
//                 <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white shrink-0">
//                   Reedem Now!
//                 </button>
//               </div>
//             </div>
//             {/* CTA End*/}
//             {/* Card 10  */}
//             <div className="col-span-full md:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
//               <div className="flex flex-col h-full">
//                 {/* Image */}
//                 <div className="relative">
//                   <Image
//                     className="w-full"
//                     src={`/assets/product.jpg`}
//                     width={301}
//                     height={226}
//                     alt="Application 30"
//                   />
//                   {/* Like button */}
//                   <button className="absolute top-0 right-0 mt-4 mr-4">
//                     <div className="bg-opacity-60 rounded-full bg-gray-50 p-2">
//                       <span className="sr-only">Like</span>
//                       <MdFavoriteBorder color="white" size={24} />
//                     </div>
//                   </button>
//                 </div>
//                 {/* Card Content  */}
//                 <div className="grow flex flex-col p-5">
//                   {/* Card body */}
//                   <div className="grow">
//                     <header className="mb-2">
//                       <a href="#0">
//                         <h3 className="text-lg text-slate-800 font-semibold mb-1">
//                           Form Builder CP
//                         </h3>
//                       </a>
//                       <div className="text-sm text-gray-600">
//                         Lorem ipsum dolor sit amet adipiscing elit, sed do
//                         eiusmod.
//                       </div>
//                     </header>
//                   </div>
//                   {/* Rating and price  */}
//                   <div className="flex flex-wrap justify-between items-center">
//                     {/* Rating */}
//                     <div className="flex items-center space-x-2 mr-2">
//                       {/* Stars */}
//                       <div className="flex space-x-1">
//                         <button>
//                           <span className="sr-only">1 star</span>
//                           <svg
//                             className="w-4 h-4 fill-current text-amber-500"
//                             viewBox="0 0 16 16"
//                           >
//                             <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                           </svg>
//                         </button>
//                         <button>
//                           <span className="sr-only">2 stars</span>
//                           <svg
//                             className="w-4 h-4 fill-current text-amber-500"
//                             viewBox="0 0 16 16"
//                           >
//                             <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                           </svg>
//                         </button>
//                         <button>
//                           <span className="sr-only">3 stars</span>
//                           <svg
//                             className="w-4 h-4 fill-current text-amber-500"
//                             viewBox="0 0 16 16"
//                           >
//                             <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                           </svg>
//                         </button>
//                         <button>
//                           <span className="sr-only">4 stars</span>
//                           <svg
//                             className="w-4 h-4 fill-current text-amber-500"
//                             viewBox="0 0 16 16"
//                           >
//                             <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                           </svg>
//                         </button>
//                         <button>
//                           <span className="sr-only">5 stars</span>
//                           <svg
//                             className="w-4 h-4 fill-current text-slate-300"
//                             viewBox="0 0 16 16"
//                           >
//                             <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
//                           </svg>
//                         </button>
//                       </div>
//                       {/* Rate */}
//                       <div className="inline-flex text-sm font-medium text-amber-600">
//                         4.7
//                       </div>
//                     </div>
//                     {/* Price */}
//                     <div>
//                       <div className="inline-flex text-sm font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2 py-0.5">
//                         $69.00
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Pagination */}
//         <div className="mt-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//             <nav
//               className="mb-4 sm:mb-0 sm:order-1"
//               role="navigation"
//               aria-label="Navigation"
//             >
//               <ul className="flex justify-center">
//                 <li className="ml-3 first:ml-0">
//                   <a
//                     className="btn bg-white border-slate-200 text-slate-300 cursor-not-allowed"
//                     href="#0"
//                   >
//                     &lt{";"}- Previous
//                   </a>
//                 </li>
//                 <li className="ml-3 first:ml-0">
//                   <a
//                     className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500"
//                     href="#0"
//                   >
//                     Next -&gt;
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//             <div className="text-sm text-slate-500 text-center sm:text-left">
//               Showing <span className="font-medium text-slate-600">1</span> to{" "}
//               <span className="font-medium text-slate-600">10</span> of{" "}
//               <span className="font-medium text-slate-600">467</span> results
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
