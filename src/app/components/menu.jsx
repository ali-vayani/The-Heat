import MenuItems from "./subcomponents/menuItems";
export default function Menu() {
    return (
        <div className="w-2/3 bg-secondary flex items-center rounded-xl ml-12 mr-6 flex-col">
            <h2 className=" mt-4 text-7xl mb-4"> Menu </h2>
            <MenuItems price={'$4'} limit={5} item={"Shrimp Roll"}/>
        </div>
    )
}