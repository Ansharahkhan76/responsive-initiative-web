import Link from "next/link";
import Image from "next/image";


function HeroPage() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between pt-12 pl-5 md:pl-20 md:text-lg">
                <div className="md:w-1/2">
                    <p className="text-4xl md:text-6xl md:pt-28 font-bold text-cyan-800">Governor Sindh</p>
                    <p className="text-3xl md:text-5xl font-normal text-cyan-800">Kamran Khan Tessori</p>
                    <p className="pt-4 text-cyan-400 text-2xl md:text-4xl font-extrabold">Certified Cloud</p>
                    <p className="text-cyan-400 text-2xl md:text-4xl font-extrabold">Applied Generative AI</p>
                    <p className="text-cyan-400 text-2xl md:text-4xl font-extrabold">Engineer (GenEng)</p>
                    <p className="text-2xl md:text-3xl pt-4 pb-8 font-bold text-cyan-800">Earn up to $5,000 / month</p>
                    <div className="flex flex-col sm:flex-row sm:pr-3 text-cyan-800">
                    <button className="px-8 py-4 hover:bg-cyan-950 sm:px-10 sm:py-5 bg-cyan-800 text-white font-bold text-lg sm:text-xl rounded-md sm:rounded-md">
                    Apply Now
                    </button>
                     <div className="text-center sm:text-left mt-4 sm:mt-0 px-4 sm:px-11">
                          <p className="font-bold text-xl sm:text-2xl">562,143+</p>
                             <p>Accepted Applications</p>
                      </div>
                    </div>
                </div>
                    <div>
                        <Image
                        className="md:pt-20 sm:pt-2"
                        src="/Cover.png"
                        alt="Governer Sindh"
                        width={700}
                        height={400}
                        ></Image>
                    </div>
                </div>
                <br />
        <div className="md:px-20 px-4">
            <p className="text-4xl text-cyan-800 py-12 font-bold text-center">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</p>
            <p className="text-xl pt-3 pb-6">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing Microsoft infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, 
                by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. 
                This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently
                and will not need to hire employees or other team members.</p>

                <div className="md:flex md:justify-between">
                    <Image 
                    className=" rounded-lg pb-5 shadow-lg"
                    alt=""
                    src="/Business.jpg"
                    height={200}
                    width={400}
                    ></Image>

                    <Image 
                    className=" rounded-lg pb-5 shadow-lg"
                    alt=""
                    src="/solopreneur.jpg"
                    height={200}
                    width={400}
                    ></Image>

                    <Image 
                    className=" rounded-lg pb-5 shadow-lg"
                    alt=""
                    src="/education.jpg"
                    height={200}
                    width={400}
                    ></Image>
                </div>

                    {/* Advanced Course Cards-6 */}
                <div id="courses">
                <p className="text-cyan-800 text-4xl py-6 font-extrabold">Advanced Courses</p>
                <div className="md:flex align-center px-10  justify-center md:justify-between pb-9">
                <div className="mb-6 bg-slate-300 h-60 w-72 pb-5 rounded-lg">
                    <Image
                    className="rounded-lg"
                    src="/ai.jpg"
                    alt="Artificial Intelligence"
                    height={300}
                    width={400}> 
                    </Image>
                    <p className="text-center font-bold text-cyan-800 pt-3 text-lg">Artificial Intelligence</p>
                </div>

                <div className="bg-slate-300 mb-6 h-60 pb-5  rounded-lg w-72">
                    <Image
                    className="rounded-lg"
                    src="/Web3.jpg"
                    alt="Web3 and Metaverse"
                    height={200}
                    width={300}> 
                    </Image>
                    <p className="text-center font-bold text-cyan-800 pt-3 text-lg">Web 3 and Metaverse</p>
                </div>

                <div className="bg-slate-300 mb-6 rounded-lg pb-5  h-60 w-72">
                    <Image
                    className="rounded-lg"
                    src="/cloudComputing.jpg"
                    alt="cloudComputing"
                    height={200}
                    width={300}> 
                    </Image>
                    <p className="text-center font-bold text-cyan-800 pt-3 text-lg">Cloud-Native Computing</p>
                </div>
                <div className="bg-slate-300 mb-6 rounded-lg pb-5  h-60 w-72">
                    <Image
                    className="rounded-lg"
                    src="/iot.jpg"
                    alt="IoT"
                    height={200}
                    width={300}> 
                    </Image>
                    <p className="text-center font-bold text-cyan-800 pt-3 text-lg">Ambient Computing and IoT</p>
                </div>
                </div>
                </div>
                </div>
                <footer className="bg-cyan-800 text-white font-bold w-auto h-16 align-center text-center">
                    <p className="fa fa-copyright pt-4">HomeWork Done By Ansharah Khan <br /> Tuesday-7</p>
                </footer>
        
        </>
    );
}

export default HeroPage;
