"use client";
import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSnackbar } from "notistack";
import { getSession } from "next-auth/react";

import regBg from "@/assets/images/register.jpg";
import logRegLogo from "@/assets/images/logo-b.png";
const Header = dynamic(() => import("@/component/Header"));
const Footer = dynamic(() => import("@/component/Footer"));
import { pagesApi } from "@/service/Pages.service";
import { menuApi } from "@/service/Menu.service";
import { helperApi } from "@/service/Helper.service";
import { authApi } from "@/service/Auth.service";

import styles from "@/pages/loader.module.css";
import { signIn } from "next-auth/react";


function dateFormat(date, format) {
    //parse the input date
   
    
    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();    
  
    //replace the month
    format = format.replace("MM", month.toString().padStart(2,"0"));        
  
    //replace the year
    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2,2));
    }
  
    //replace the day
    format = format.replace("dd", day.toString().padStart(2,"0"));
  
    return format;
  }

export async function getStaticProps(context) {
  const footerData = await pagesApi.footer();
  const headerMenu = await menuApi.menu();
  const countrydata = await helperApi.country();

  return {
    props: {
      footerData: footerData.data.data,
      headerMenuData: headerMenu.data.data,
      countries: countrydata.data.data,
    },
    revalidate: 60,
  };
}

export default function regPage({ footerData, headerMenuData, countries }) {
  const { enqueueSnackbar } = useSnackbar();
  const [formDataState, setFormDataState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    dob: "",
    checked: false,
  });
  const [errors, setErrors] = useState({});


  const [LOGIN_CHECKING, SET_LOGIN_CHECKING] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/dashboard');
      } else {
        SET_LOGIN_CHECKING(false);
      }
    });
  }, [router]);

  function validateForm(){
    let newErrors = {};

    if (formDataState.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
    }
    if (formDataState.lastName.trim() === '') {
        newErrors.lastName = 'Last name is required';
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!regex.test(formDataState.email)) {
        newErrors.email = 'Enter valid email address';
      }

    if (formDataState.phone.trim() === '') {
        newErrors.phone = 'Phone number is required';
    }
    if (formDataState.password.length < 6) {
      newErrors.password = 'Password should be at least 6 characters long';
    }
    if ( formDataState.password!==formDataState.confirmPassword) {
        newErrors.confirmPassword = 'Confirm password and password should be same';
    }
    if (formDataState.country.trim() === '') {
        newErrors.country = 'Country is required';
    }
    if (formDataState.dob === '') {
        newErrors.dob = 'Date of birth is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  }
  async function signupProcess() {
    if(validateForm()){
        //console.log(formDataState);
        const dob = dateFormat(formDataState.dob,'MM/dd/yyyy');

        const datas = {
            name      : `${formDataState.firstName.trim()} ${formDataState.lastName.trim()}`,
            email     : formDataState.email.trim(),
            password  : formDataState.password,
            dob       : dob,
            gender    : 'Male',
            country   : formDataState.country,
            phone     : formDataState.phone,
          }
          const signup = await authApi.register(datas);

          if (signup.status === 400 && signup.data.success === false) {
            enqueueSnackbar(signup.data.message, {variant:'error'} );
            useState({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                phone: "",
                country: "",
                dob: "",
                checked: false,
              });

          }else if (signup.status === 200) {
            if (signup.data.success === true) {
                const result =   await signIn('credentials', { 
                    redirect: false,
                    email:formDataState.email.trim(),
                    password:formDataState.password
                  });
                 
                  if(!result.error){
                    enqueueSnackbar('Successfully logged in');
                    router.replace('/dashboard');
                  }else{
                    enqueueSnackbar(result.error, {variant:'error'} );
                  }

            }else {
                if (signup.data.error.name) {
                  enqueueSnackbar(signup.data.error.name[0], {variant:'error'} );
                }
                if (signup.data.error.email) {
                  enqueueSnackbar(signup.data.error.email[0], {variant:'error'} );
                }
                // setError(signup.data.message);
                // reset();
                //setLoading(false);
              }

          }
       
    }
  }
  if(LOGIN_CHECKING){
    return '';
  }
  return (
    <>
      <Suspense fallback={<div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
        <section
          className="loginreg-page d-flex align-items-center"
          style={{
            background: `url(${regBg.src}) center bottom / cover fixed`,
          }}
        >
          <div className="menu-top-gap loginreg-page-footer-gap w-100">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-7 col-mg-7 col-sm-12 col-12">
                  <div className="loginreg-page-wrap">
                    <span className="log-reg-logo">
                      <img className="img-block" src={logRegLogo.src} alt="" />
                    </span>
                    <h2>Register into your account</h2>
                    <div className="log-reg-text">
                      Enter your personal details and start journey with us
                    </div>
                    <div className="row g-3">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">First Name</label>
                          <input
                            onInput={(e) =>{
                               
                                setFormDataState((prev) => ({
                                  ...prev,
                                  firstName: e.target.value,
                                }))
                                validateForm();  

                            }
                               
                            }
                            type="text"
                            className="form-control log-reg-input-style"
                            placeholder="First Name"
                          />
                          {errors.firstName && <p style={{color:'red'}}>{errors.firstName}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">Last Name</label>
                          <input
                            onInput={(e) =>
                              setFormDataState((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                              }))
                            }
                            type="text"
                            className="form-control log-reg-input-style"
                            placeholder="Last Name"
                          />
                          {errors.lastName && <p style={{color:'red'}}>{errors.lastName}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">Email</label>
                          <input
                            onInput={(e) =>
                              setFormDataState((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            type="text"
                            className="form-control log-reg-input-style"
                            placeholder="Email"
                          />
                           {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">Phone</label>
                          <input
                            onInput={(e) =>
                              setFormDataState((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            type="text"
                            className="form-control log-reg-input-style"
                            placeholder="Phone"
                          />
                          {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">Password</label>
                          <input
                            type="password"
                            onInput={(e) =>
                              setFormDataState((prev) => ({
                                ...prev,
                                password: e.target.value,
                              }))
                            }
                            className="form-control log-reg-input-style"
                            placeholder="Password"
                          />
                        </div>
                        {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">Confirm Password</label>
                          <input
                            type="password"
                            onInput={(e) =>
                              setFormDataState((prev) => ({
                                ...prev,
                                confirmPassword: e.target.value,
                              }))
                            }
                            className="form-control log-reg-input-style"
                            placeholder="Confirm Password"
                          />
                          {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword}</p>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">Country</label>
                          <select  onChange={(e) =>
                              setFormDataState((prev) => ({
                                ...prev,
                                country: e.target.value,
                              }))
                            } className="form-control log-reg-input-style">
                            <option value="" />
                            {countries.map((country, index) => (
                              <option key={country.id} value={country.id}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.country && <p style={{color:'red'}}>{errors.country}</p>}
                      </div>
                      
                      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="log-reg-input mb-0">
                          <label className="logreg-lbl">Date of birth</label>
                          <DatePicker
                            dateFormat="MM/dd/yyyy"
                            selected={formDataState.dob}
                            onChange={(date) =>
                              setFormDataState((prev) => ({
                                ...prev,
                                dob: (date),
                              }))
                            }
                            className="form-control log-reg-input-style"
                          />
                        </div>
                        {errors.dob && <p style={{color:'red'}}>{errors.dob}</p>}
                      </div>
                     
                    </div>
                    <div className="reg-chk">
                      <div className="checkbox">
                        <input
                          checked={formDataState.checked}
                          onChange={(e) =>
                            setFormDataState((prev) => ({
                              ...prev,
                              checked: !prev.checked,
                            }))
                          }
                          type="checkbox"
                          id="terms-condi"
                        />
                        <label htmlFor="terms-condi">
                          Creating an account means you're okay with our{" "}
                          <Link href="#">Terms of Service</Link> and{" "}
                          <Link href="#">Privacy Statement</Link>
                        </label>
                      </div>
                    </div>
                    <div className="submit-wrap mt-4">
                      <button className="orange-btn" onClick={signupProcess}>
                        Sign up <FiArrowRight />
                      </button>
                    </div>
                    <div className="alrdy-member-wrap">
                      <Link href="/login">Already a member? Sign In</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer data={footerData}></Footer>
      </Suspense>
    </>
  );
}
