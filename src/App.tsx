// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import Sidebar from './components/Sidebar'
// import './index.css'
// import MainContent from './components/MainContent'
// import ProductPage from './components/ProductPage'
// import TopSeller from './components/TopSeller'
// import PopularBlogs from './components/PopularBlogs'



// function App() {


//   return (
      
//       <Router>
//       <div className="flex h-screen">
//       <Sidebar/>

//       <div className=
//       "rounded w-full flex justify-center flex-wrap">
//         <Routes>
//           <Route path="/" element={<MainContent/>}/>
//           <Route path="/product/:id" element={<ProductPage/>}/>
//         </Routes>
//         <div>
//           <TopSeller/>
//           <PopularBlogs/>
//         </div>
//       </div>
//       </div>
//       </Router>
   
    
//   )
// }

// export default App

// import { Routes, Route } from "react-router-dom";

// // import Product from "./pages/Product";
// import ProductPage from "./components/ProductPage";
// import { Home } from "lucide-react";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product/:id" element={<ProductPage />} />
//     </Routes>
//   );
// };

// export default App;



// App.tsx
// import { Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Product from "./Product";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product/:id" element={<Product />} />
//       {/* অন্য routes */}
//     </Routes>
//   );
// }





import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './index.css'
import MainContent from './components/MainContent'
import ProductPage from './components/ProductPage'
import TopSeller from './components/TopSeller'
import PopularBlogs from './components/PopularBlogs'



function App() {


  return (
      
      <Router>
      <div className="flex h-screen">
      <Sidebar/>

      <div className=
      "rounded w-full flex justify-center flex-wrap">
        <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>
        <div>
          <TopSeller/>
          <PopularBlogs/>
        </div>
      </div>
      </div>
      </Router>
   
    
  )
}

export default App