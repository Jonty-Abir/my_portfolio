import style from "./spinner.module.css";

const SpinnerCompo = () => {
  return (
    <div className=" mx-auto my-auto">
      <div className={`${style.lds_roller}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SpinnerCompo;
