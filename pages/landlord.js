import Link from "next/link";

const landlord = () => {
  return (
    <div>
      <h2>Vill du hyra ut din bostad?</h2>

      <Link href="StepOne">
        <button>Step One</button>
      </Link>
    </div>
  );
};

export default landlord;
