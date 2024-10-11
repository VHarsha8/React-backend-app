function About(){
    return(
        <div className="flex flex-col gap-6 px-6 py-10 air:px-9 md:px-10">
            <div className="flex flex-col gap-2 ">
                <img src="about.svg" alt="yeah"  className="w-12 md:w-16" />
                <h1 className="text-2xl font-semibold font-poppins md:text-4xl "> About Epistemicon</h1>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-gray-700 md:text-lg">Epistemicon is an exciting inter-collegiate event that celebrates innovation, creativity, and talent. Organized by, Andhra Loyola Institute of Engineering and Technology  this event offers a platform for students from various colleges to come together, participate in a wide range of competitions, and showcase their skills across multiple domains. Whether you're passionate about technology, arts, literature, or science, Epistemicon has something for everyone.</h1>
                <h1 className="text-lg font-medium text-center text-gray-700 font-poppins md:text-xl">Join us on <div className="inline-flex items-center text-xl font-semibold text-green-600 font-poppins">September 28 2024</div>  and be a part of this celebration of talent and knowledge!</h1>

            </div>
            <img src="Epistemicon1.1.1.1.jpg" alt="hell" className="w-full md:w-[800px] mx-auto md:h-[400px] h-[400px] rounded-2xl"/>
            <h1 className="text-xs text-center text-gray-400 md:text-sm">Photograph clicked from Epistemicon-2023</h1>
            
        </div>
    );
}
export default About;