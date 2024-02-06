// import {Menu, Cart} from "./components/*";
import Menu from "./components/menu";
import Cart from "./components/cart";


export default function Home() {
  return (
   <div className="h-screen flex items-center flex-col">
      <h1 className="text-8xl mt-16 mb-2"> The Heat </h1>
      <h2 className="text-5xl"> by <span className="text-accent">KCAL</span></h2>
      <div className="w-full flex mt-12 flex-1">
        <Menu/>
        <Cart/>
      </div>

   </div>
  );
}``
