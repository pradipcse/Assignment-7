const Banner = () => {
    return (
        <div className="
        w-5/6 
        mx-auto 
        mb-12
        h-[600px]
        bg-[url('../../../public/baner.jpg')]
        bg-[ gradient-to-r from-[#150B2BE6] to-[#150B2B00] ]
        bg-cover
        bg-no-repeat
        rounded-2xl
        text-white
        flex 
        flex-col
        justify-center
        items-center
        text-center
        gap-7
        ">
        
        <h1 className="text-4xl font-bold w-3/5">Discover an exceptional cooking class tailored for you!</h1>
         <p className="w-3/5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
         <div className="w-3/5 font-medium text-xl flex gap-8 justify-center">
            <button className="bg-[#0BE58A] p-4 rounded-3xl text-black">Explore Now</button>
            <button className="border-2 border-solid border-blue-300 rounded-3xl p-4">Our Feedback</button>
         </div>
        </div>
    );
};

export default Banner;