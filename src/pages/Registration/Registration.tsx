import { Button, Input } from "antd";
import "./Registration.css";

const style = {
  width: "494px",
  height: "40px",
  marginLeft: "35px",
  marginTop: "12px",
  border: "1px solid rgba(0, 0, 0, 0.5)",
};

export const RegistrationPage = () => {
  return (
    <div className="main-Auth">
      <p className="large-txt">
        The largest community <br /> of photo enthusiasts
      </p>
      <div className="fieldCont">
        <div className="fields">
          <p>Sign up for a free account</p>
          <div className="textField">
            <Input
              placeholder="First name"
              style={{
                marginLeft: "35px",
                width: "237px",
                height: "40px",
                border: "1px solid rgba(0, 0, 0, 0.5)",
              }}
            />
            <Input
              placeholder="Last name"
              style={{
                marginLeft: "15px",
                width: "237px",
                height: "40px",
                border: "1px solid rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
          <Input placeholder="Email address or call number" style={style} />
          <Input placeholder="Create password" style={style} />
          <Input placeholder="Password Again" style={style} />
          <br />
          <Button href="/userpage"  style={{width: "130px",height:"40px",backgroundColor:"#18A0FB",color: "white",marginLeft: "34px",marginTop: "20px",display: "flex",justifyContent: "center", alignItems: "center",textDecoration: "none",}}>Next</Button>

        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
