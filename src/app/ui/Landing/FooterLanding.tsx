import Link from "next/link";

export default function FooterLanding() {
  return (
    <footer className="flex items-center justify-center text-white flex-col p-[32px] gap-5 w-1/1 bg-[#111113]">
      <p className="text-[12px] w-[600px] max-lg:w-[300px] text-center opacity-50">
        Disclaimer: Each individual’s results may vary from person to person
        based on health condition, body type, starting point, his or her unique
        background, dedication, desire, motivation, actions, and numerous other
        factors. This service offers health and fitness information and is
        designed for educational and entertainment purposes only. You should not
        rely on this information as a substitute for, nor does it replace,
        professional medical advice, diagnosis, or treatment. It is intended to
        be provided for informational, educational, and self-empowerment
        purposes only. If you have any concerns or questions about your health,
        you should always consult with a physician or other health-care
        professional.
      </p>
      <p className="text-center opacity-50">
        Appercut sp. z o.o. Warsaw, Twarda 18, 00-105
      </p>
      <div className="flex flex-col gap-4 text-center items-center">
        <Link
          href="https://quiz.kegel-plan.me/privacy-policy.html"
          className="underline opacity-75">
          Privacy Policy
        </Link>
        <Link
          href="https://quiz.kegel-plan.me/terms.html"
          className="underline opacity-75">
          Terms & Conditions
        </Link>
        <Link
          href="https://quiz.kegel-plan.me/refund.html"
          className="underline opacity-75">
          Refund Policy
        </Link>
      </div>
    </footer>
  );
}
