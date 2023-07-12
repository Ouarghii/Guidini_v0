import React, { useState } from 'react';
import axios from 'axios';
import './Authentification.css';
import log from '../../assets/log1.png'
import logowhite from '../../assets/logowhite.png'
import logogreen from '../../assets/logogreen.png'
import logo from '../../assets/logo.png'

import reg from '../../assets/reg.png'
import { message, Form, Input, Button } from 'antd'
// import { useHistory } from 'react-router-dom';
// import  {useDispatch} from'react-redux'
// import { showLoading,hideLoading } from '../../redux/features/alertSlice';

function Authentification() {

//   const navigate = useHistory()
//   const dispatch =useDispatch()
  const [isSignUp, setIsSignUp] = useState(false);
  const [passShow, setPassShow] = useState(false)

  const handleSignInClick = () => {
    setIsSignUp(false);
  }

  const handleSignUpClick = () => {
    setIsSignUp(true);
  }

  const onFinish = async (values) => {
    try {
    //   dispatch(showLoading())
      const res = await axios.post('/docregister', values)
    //   dispatch(hideLoading())
      if (res.data.success) {
        message.success('Register Successfully')
        setIsSignUp(false);
      } else {
        message.error(res.data.message)
      }
    } catch (error) {
    //   dispatch(hideLoading())
      console.log(error)
      message.error('Something Went Wrong')
    }
  }
  const onFinishHandler=async(values)=>{
    //  try {
    //     // dispatch(showLoading())
    //     const res=await axios.post('/doclogin',values)
    //     // dispatch(hideLoading())
    //     if(res.data.success){
    //       localStorage.setItem('token',res.data.token)
    //       message.success('Login Successfully')
    //       navigate.push('/doctorapp/patients')
    //     }else{
    //       message.error(res.data.message)
    //     }
    //  } catch (error) {
    //     // dispatch(hideLoading())
    //     console.log(error)
    //     message.error('something went wrong')
    //  }
  }

  return (
    <div className={`container12 ${isSignUp ? 'sign-up-mode' : ''}`} >
      <div className="formss-container">
        <div className="signin-signup">
          <Form className="form sign-in-form" onFinish={onFinishHandler} >
            <h2 className="title">Login</h2>
            <Form.Item name="email"  label={<span style={{ fontSize: '16px' ,fontWeight:'bold' }}>Email</span>}  rules={[{ required: true, message: 'Please input your email!' }]}><br/><br/>
              <Input style={{marginLeft:'-50px'}}className='Doctorinput' prefix={<i className="fas fa-user" />} placeholder="your email" />
            </Form.Item>
            <Form.Item name="password" label={<span style={{ fontSize: '16px',fontWeight:'bold' }}>Password</span>} rules={[{ required: true, message: 'Please input your password!' }]}><br/><br/>
              <Input.Password style={{marginLeft:'-70px'}} className='Doctorinput' prefix={<i className="fas fa-lock" />} placeholder="Password" />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="btinn solid">
              Login
            </Button>
          </Form>
          <Form className="form sign-up-form" onFinish={onFinish}>
            <h2 className="title">Sign up</h2>
            <Form.Item name="companyname" label={<span style={{ fontSize: '16px' ,fontWeight:'bold' }}>Company Name</span>}  rules={[{ required: true, message: 'Please input your email!' }]}><br/><br/>
              <Input style={{marginLeft:'-120px'}} className='Doctorinput' prefix={<i className="fas fa-user" />} placeholder="Company Name" />
            </Form.Item>
            <Form.Item name="email" label={<span style={{ fontSize: '16px',fontWeight:'bold' }}>Email</span>} rules={[{ required: true, message: 'Please input your email!' }]}><br/><br/>
              <Input style={{marginLeft:'-40px'}} className='Doctorinput' prefix={<i className="fas fa-envelope" />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" label={<span style={{ fontSize: '16px',fontWeight:'bold' }}>Password</span>} rules={[{ required: true, message: 'Please input your password!' }]}><br/><br/>
              <Input.Password  style={{marginLeft:'-70px'}} className='Doctorinput' prefix={<i className="fas fa-lock" />} placeholder="Password" />
            </Form.Item>
            
        <Button type="primary" htmlType="submit" className="btinn">
          {isSignUp ? 'Sign up' : 'Login'}
        </Button>
        
      </Form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3 style={{fontFamily: 'Lato, sans-serif',fontSize:'45px',marginTop:'20px',marginBottom:'0px'}}>Welcome to</h3>
        <div >
            <img src={logo} className='Guidini' alt=''/>
            {/* <img src={logowhite} alt=''/> */}

        </div>

        <p className='guidiniLogindesc' style={{fontFamily: 'Lato, sans-serif',fontSize:'25px',fontWeight:100,marginTop:'-30px',marginBottom:'50px'}}>
        "A sustainable app for responsible consumption. " </p>
        <button className="btinn transparent" onClick={handleSignUpClick}>
          Sign up
        </button>
      </div>
      <a href='/logincard'><img src={log} className="imagereg"  alt="Register" /></a>
      
    </div>
    <div className="panel right-panel">
      <div className="content">
      <h3 style={{fontFamily: 'Lato, sans-serif',fontSize:'45px',marginTop:'-40px',marginBottom:'0px'}}>Welcome Back to</h3>
        <div >
            <img src={logo} className='Guidini' alt=''/>
            {/* <img src={logowhite} alt=''/> */}

        </div>
        <p style={{fontFamily: 'Lato, sans-serif',fontSize:'20px',fontWeight:100,marginTop:'-80px',marginBottom:'0px'}}>
          "Empowering responsible consumption for a sustainable future, while driving market growth."
        </p>
        <button className="btinn transparent" onClick={handleSignInClick}>
          Sign in
        </button>
      </div>
      <a href='/logincard'>
      <img src={reg} className="imagetbib" alt="Login" />
      </a>
      
    </div>
  </div>
</div>
);
}

export default Authentification;

