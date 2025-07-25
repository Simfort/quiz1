import AreasImprovements from "@/app/ui/Landing/AreasImprovements";
import ExpectImprovements from "@/app/ui/Landing/ExpectImprovements";
import GetPersonalPlan from "@/app/ui/Landing/GetPersonalPlan";
import PersonalPlan from "@/app/ui/Landing/PersonalPlan";
import ratingTrusted from "../../../../public/EN_img_rating_trusted.webp";
import Image from "next/image";
import SuccesStories from "@/app/ui/Landing/SuccessStories";
import sound from "../../../../public/sound.svg";
import guard from "../../../../public/guard.svg";
import cards from "../../../../public/visa_mc_pp_ae.webp";
import MoneyBack from "@/app/ui/Landing/MoneyBack";

export default function Landing() {
  return (
    <div className="mt-[100px] gap-10 flex flex-col items-center">
      <PersonalPlan />
      <AreasImprovements />
      <ExpectImprovements />
      <GetPersonalPlan title="Get your Personal Kegel Plan" />
      <Image
        src={ratingTrusted}
        alt="rating trusted"
        className="w-[536px] max-lg:w-[300px] mt-[20px]"
      />
      <SuccesStories />
      <video
        width="311"
        playsInline
        preload="auto"
        autoPlay
        loop
        className=" w-[536px] max-lg:w-[300px] ">
        <source
          src="https://quiz.kegel-plan.me/video/video_reviews_landing.mp4"
          type="video/mp4"
        />
        Your browser doesn`t support HTML5 video tag.{" "}
      </video>
      <p className="text-[14px]  text-[#5773d6] font-bold text-center flex gap-2 items-center">
        <Image src={sound} alt="sount" />
        Make sure your sound is turned on
      </p>
      <GetPersonalPlan title="See the result in 4 weeks" />
      <MoneyBack />
      <p className="text-[14px] font-bold text-center  flex gap-2 items-center">
        <Image src={guard} alt="guard" />
        Guaranteed Safe Checkout
      </p>
      <Image className="w-[536px] max-lg:w-[300px]" src={cards} alt="cards" />
    </div>
  );
}
