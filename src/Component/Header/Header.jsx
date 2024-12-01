import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <div className="flex text-2xl justify-between w-5/6 mx-auto my-12 items-center ">
            <div className="font-bold">Recipe Calories</div>
            <div className="flex gap-3 text-xl">
               <a href="">Home</a>
               <a href="">Recipe</a>
               <a href="">About</a>
               <a href="">Search</a>
            </div>
            <div className="flex justify-between gap-4">
                <div className="bg-orange-100 items-center gap-2 flex justify-start rounded-3xl p-2 text-xl">
                    <FaSearch></FaSearch>
                    <h6>Search</h6>
                </div>
                <div className="bg-[#0BE58A] p-4 rounded-full flex items-center justify-center "><FaUserCircle></FaUserCircle></div>
            </div>
        </div>
    );
};

export default Header;