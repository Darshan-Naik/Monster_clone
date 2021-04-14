import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const LoginFlex = styled.div`
  display: grid;
  width: 80%;
  height: 600px;
  grid-template: "cr lf";
  margin: auto;
  margin-top: 20px;
`;

const Car = styled.div`
  grid-area: cr;
  width: 50%;
  height: 500px;
`;
const LogFm = styled.div`
  grid-area: lf;
  max-height: 600px;
  width: 100%;
  box-shadow: 2px 2px 10px 2px black;
  text-align: left;
  padding: 20px;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
`;
const H2 = styled.h2`
  margin: 0px;
  font-size: 28px;
  font-weight: 600px;
  color: blue;
`;
const H4 = styled.h4`
  margin: 5px;
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  color: black;
  background-color: #b8b5b5;
  border: none;
  margin: 15px 0px;
  padding: 10px;
`;
const Span = styled.span`
  font-size: 14px;
`;

const Button = styled.button`
  width: 250px;
  color: whitesmoke;
  height: 40px;
  background-color: blueviolet;
  border-radius: 10px;
  font-size: 20px;
  margin: auto;
  margin: 20px 40px;
  :hover& {
    background-color: #03032e;
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const Socials = styled.span`
  font-size: 16px;
  width: 90px;
  align-items: left;
  margin-right: 100px;
`;
const Signbutton = styled.button`
  width: 250px;
  color: #f2f3f8;
  height: 40px;
  background-color: #3c0768;
  border-radius: 10px;
  font-size: 20px;
  margin: auto;
  margin: 20px 40px;
  :hover& {
    background-color: #15156b;
  }
`;
export const Login = () => {
  return (
    <LoginFlex>
      <Car>
        <Carousel>
          <div>
            <Img src="https://www.monsterindia.com/rio/public/images/carousel_1.svg" />
            <H2>Job Alerts</H2>
            <span>Get real time alerts now for hot new Jobs</span>
          </div>
          <div>
            <Img src="https://www.monsterindia.com/rio/public/images/carousel_2.svg" />
            <H2>Find Better</H2>
            <span>Find job that match your skills across top employers in the country</span>
          </div>
          <div>
            <Img src="https://www.monsterindia.com/rio/public/images/carousel_3.svg" />
            <H2>Apply Quickly</H2>
            <span>Save Time and Effort with monster Quick Apply</span>
          </div>
        </Carousel>
      </Car>
      <LogFm>
        <H4>Hello!</H4>
        <H4>Welcome Back</H4>
        <Span>You are just a step away from your dream job</Span>
        <br />
        <Input placeholder="Email/Mobile No." type="text" />
        <br />
        <Input type="password" placeholder="Password" />
        <br />
        <span style={{ textAlign: "right" }}><Link>Forgot password</Link></span>
        <br />
        <Button>Login</Button>
        <br />
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          <Span>Or</Span>
          <br />
          <Span>Login via OTP</Span>
          <br />
          <hr />
          <div>
            <Socials>Login via socials</Socials>
            <Link>
              <Icon src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png" />
            </Link>
            <Link>
              <Icon src="https://www.nicepng.com/png/detail/448-4482584_fb-icon-facebook-icon.png" />
            </Link>
          </div>
                  <hr />
                  <Signbutton>New to Monster? Sign Up</Signbutton>
        </div>
      </LogFm>
    </LoginFlex>
  );
};
