import LoginImg from "../../../assets/images/login.svg";
function Register() {
  return (
    <section className="grid grid-cols-2 h-screen">
      <div className="col-span-1 bg-primary flex flex-col justify-between">
        <div className="mt-[88px] max-w-[403px] mx-auto">
          <h1>The biggest international and local film streaming</h1>
          <p>
            Semper in cursus magna et eu varius nunc adipiscing. Elementum
            justo, laoreet id sem semper parturient
          </p>
        </div>
        <img src={LoginImg} alt="" />
      </div>
      <div className="col-span-1 bg-background"></div>
    </section>
  );
}

export default Register;
