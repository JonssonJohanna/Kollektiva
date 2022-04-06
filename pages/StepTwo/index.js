import Link from "next/link";
// import styles from "/styles/StepOne.module.css";

const StepTwo = () => {
  return (
    <div>
      <h1>Step 2</h1>
      <Link href="StepThree">
        <button>Next step</button>
      </Link>
    </div>
  );
};

export default StepTwo;
