import Gallery from "./Gallery/Gallery";
import Profile from "./Profile/Profile";
const Home = () => {
    return (
        <>
            <div className="bg-[#1E1E1E] lg:h-[50rem] lg:p-10 p-5 ">
                <div className="bg-gradient-to-b from-transparent to-[#303236] lg:h-[100vh] rounded-2xl lg:p-10 p-5 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] flex flex-row" style={{ backgroundImage: "linear-gradient(to bottom,#272C31 ,transparent ), url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2730%27 height=%2730%27 viewBox=%270 0 30 30%27%3E%3Cg fill=%27none%27 stroke=%27%23555%27 stroke-width=%272%27 stroke-opacity=%270.1%27%3E%3Cpath d=%27M0 0L0 30M0 0L30 0M30 30L30 0M30 30L0 30%27/%3E%3C/g%3E%3C/svg%3E')" }}>
                    <div className="h-full lg:w-[57%]"></div>
                    <div className="h-full lg:w-[43%] ">
                        <Profile></Profile>
                        <div className='text-center flex justify-center'>
                         <div className="bg-[#3A3C3F] lg:w-[30rem] w-[5rem] lg:h-[0.25rem] mt-[1.3rem] shadow-black shadow-[1px_1px_6px_0_rgba(0,0,0,0.5)] rounded-full "/>   
                        </div>
                        <Gallery className=' '></Gallery>
                        <div className='text-center flex justify-center'>
                         <div className="bg-[#3A3C3F] lg:w-[30rem] w-[10rem] lg:h-[0.25rem] mt-[1.3rem] shadow-black shadow-[1px_1px_6px_0_rgba(0,0,0,0.5)] rounded-full "/>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;