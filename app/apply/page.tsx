import Link from "next/link";
import Navbar from "../Navbar/page";
import Image from "next/image";


function Apply(){
    return(
        <>
        <Navbar />
        <br />
        <p className="pt-24  text-2xl text-center font-bold text-cyan-800">Before continuing to the application please subscribe on these social media platforms.</p>
        <br /><br />
        <div className="flex justify-center">
           <a href="https://www.linkedin.com/in/ansharah-khan-25a8162b7"> <Image
            src="/linkedin.png"
            alt="LinkedIn"
            height={100}
            width={100}
            className="mr-8"
            ></Image></a>
            <a href="https://github.com/Ansharahkhan76"> <Image
            src="/github.png"
            alt="Github"
            height={100}
            width={100}
            className=""
            ></Image></a>
        </div>
        </>
    )
}

export default Apply;