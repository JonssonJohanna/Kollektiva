import Link from "next/link";

const landlord = () => {
  return (
    <div>
      <h1>Vill du hyra ut din bostad?</h1>

      <Link href="StepOne">
        <button>Step One</button>
      </Link>
    </div>
  );
};

export default landlord;
