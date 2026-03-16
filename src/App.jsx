import "./App.css";

//structure  practise//
    
import Courses from "./assets/compoenents/Courses";
import Footer from "./assets/compoenents/Footer";
import Header from "./assets/compoenents/Header";
import HeroBanner from "./assets/compoenents/HeroBanner";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Courses />
      <Footer />
    </>
  );
}



 
// function App() {
  

//   return <div><p>hello world!</p>
//     <button> hiii</button>
//     <Final/>

//   </div>;
   
// }


// function Discription() {
//   return <p> New sound of it , stay calm , sucess make noise</p>;
//  }

//  function Final() {
//    return (<>
//      <h1>project</h1>
//      <Discription />
//      <Discription />
//      <Discription />
//      <Discription />
//      <Discription />
//      <Title/>
//    </>);
//  }
// practical example using bractes for js logic

// function App() {
//   const isLogged = true;
//   if (isLogged) {
//     return (
//       <>
//          <h1>Welcome user</h1> 
//       </>
//     );
//   } else {
//     return(
//       <h1>please login</h1>
//   );
//   }

  

//  }

export default App;
