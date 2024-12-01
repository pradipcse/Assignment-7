import { FaClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";

const Recipe = ({recipe,addCoockItem}) => {
    const {recipe_name, recipe_image,short_description,ingredients,preparing_time,calories}=recipe;
    return (
        <div className="text-start p-5 border-2 border-gray-300 rounded-2xl shadow-lg">
            <img src={recipe_image} alt="" className="my-3 p-2 rounded-2xl" />
            <h3 className="my-3 text-2xl font-bold">{recipe_name}</h3>
            <p className="my-3">{short_description}</p>
            <hr className="my-4"/>
            <h4 className="my-3 font-bold text-xl">Ingredients :{ingredients.length}</h4>
            <ul className="my-3">
                {
                    ingredients.map((ingredient,ind) => <li key={ind} className="my-2">{ingredient}</li>)
                }
            </ul>
            <hr className="my-4" />
            <div className="flex justify-between my-4">
             <span className="flex gap-2 justify-start items-center"><FaClock></FaClock>{preparing_time}</span>
             <span  className="flex gap-2 justify-start items-center"><FaFire></FaFire>{calories}</span>
            </div>
            <button className="bg-[#0BE58A] p-4 rounded-3xl text-black" onClick={()=>addCoockItem(recipe)}>Want to Coock</button>

        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    addCoockItem: PropTypes.func.isRequired,
};
export default Recipe;
