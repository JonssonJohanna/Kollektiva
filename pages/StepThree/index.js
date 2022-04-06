import Link from "next/link";
// import styles from "/styles/StepOne.module.css";

const StepThree = () => {
  return (
    <div>
      <h1>Step 3</h1>
      <Link href="StepFour">
        <button>Next step</button>
      </Link>
    </div>
  );
};

export default StepThree;
