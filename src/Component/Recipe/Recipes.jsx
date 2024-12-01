import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [coockitems, setCoockItems] = useState([]);
    const [preparingItems, setPreparingItems] = useState([]);

    useEffect(() => {
        fetch("recipe.json")
            .then((res) => res.json())
            .then((data) => setRecipes(data));
    }, []);

    const addCoockItem = (recipe) => {
        if (!coockitems.some((item) => item.recipe_name === recipe.recipe_name)) {
            setCoockItems([...coockitems, recipe]);
            toast.success(`${recipe.recipe_name} added to the table!`, {
                position: "top-right",
                autoClose: 2000,
            });
        } else {
            toast.error(`${recipe.recipe_name} is already in the table!`, {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    const moveToPreparing = (index) => {
        const itemToMove = coockitems[index];
        setPreparingItems([...preparingItems, itemToMove]);
        setCoockItems(coockitems.filter((_, idx) => idx !== index));
    };

    const calculateTotal = (items) => {
        let totalTime = 0;
        let totalCalories = 0;
        items.forEach((item) => {
            totalTime += parseInt(item.preparing_time, 10) || 0;
            totalCalories += parseInt(item.calories, 10) || 0;
        });
        return { totalTime, totalCalories };
    };

    const wantToCookTotals = calculateTotal(coockitems);
    const currentlyCookingTotals = calculateTotal(preparingItems);

    return (
        <div className="w-5/6 mx-auto">

<div className="w-full text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Our Recipes</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Discover and enjoy delicious recipes from our collection!
                </p>
            </div>



           <div className="w-full mb-12 flex flex-col lg:flex-row gap-8 justify-center">
               <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {recipes.map((recipe, indx) => (
                    <Recipe
                        key={indx}
                        recipe={recipe}
                        addCoockItem={addCoockItem}
                    ></Recipe>
                ))}
            </div>

            <div className="w-2/5 p-4 border-2 border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-center font-semibold text-2xl my-3">Want to Cook : ({coockitems.length})</h2>
                <hr className="my-2" />
                <table className="w-full border-2 border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-300">
                            <th className="text-center p-2">#</th>
                            <th className="text-center p-2">Name</th>
                            <th className="text-center p-2">Time</th>
                            <th className="text-center p-2">Calories</th>
                            <th className="text-center p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coockitems.map((coockitem, indx) => (
                            <tr key={indx} className="border-b border-gray-300">
                                <td className="text-center p-2">{indx + 1}</td>
                                <td className="text-center p-2">{coockitem.recipe_name}</td>
                                <td className="text-center p-2">{coockitem.preparing_time}</td>
                                <td className="text-center p-2">{coockitem.calories}</td>
                                <td className="text-center p-2">
                                    <button
                                        className="bg-[#0BE58A] p-2 rounded-3xl text-black"
                                        onClick={() => moveToPreparing(indx)}
                                    >
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 text-right">
                    <p>Total Preparing Time: {wantToCookTotals.totalTime} minutes</p>
                    <p>Total Calories: {wantToCookTotals.totalCalories} kcal</p>
                </div>

                <h2 className="mt-8 text-center font-semibold text-2xl">Currently Cooking : ({preparingItems.length})</h2>
                <hr className="my-2" />
                <table className="w-full border-2 border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-300">
                            <th className="text-center p-2">#</th>
                            <th className="text-center p-2">Name</th>
                            <th className="text-center p-2">Time</th>
                            <th className="text-center p-2">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparingItems.map((item, indx) => (
                            <tr key={indx} className="border-b border-gray-300">
                                <td className="text-center p-2">{indx + 1}</td>
                                <td className="text-center p-2">{item.recipe_name}</td>
                                <td className="text-center p-2">{item.preparing_time}</td>
                                <td className="text-center p-2">{item.calories}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 text-right">
                    <p>Total Preparing Time: {currentlyCookingTotals.totalTime} minutes</p>
                    <p>Total Calories: {currentlyCookingTotals.totalCalories} kcal</p>
                </div>
            </div>

            <ToastContainer />
        </div>
        </div>
    );
};
export default Recipes;
