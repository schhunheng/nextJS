import React, { useContext } from "react";
import Link from "next/link";
import styles from "./../styles/register.module.css";
import { useForm } from "react-hook-form";
import {FormContext} from './../contexts/FormContext';
import {useRouter} from 'next/router'
const Register = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const {form, setForm}=useContext(FormContext);
  const onSubmit = (data) => {
    setForm(data)
    router.push(`/login`)
    // console.log(form)
  };
 
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter First Name"
          className={styles.input}
          name="firstname"
          ref={register({required:true})}
        />
        <br />
        <input
          placeholder="Enter Last Name"
          className={styles.input}
          name="lastname"
          ref={register({required:true})}
        />
        <br />
        <input
          placeholder="Enter Email"
          className={styles.input}
          type="email"
          name="email"
          ref={register({required:true})}
        />
        <br />
        <input
          placeholder="Create Password"
          className={styles.input}
          type="password"
          name="password"
          ref={register({required:true,minLength: 8, maxLength:15})}
        />
        <br />
       
        <input className={styles.btn} type="submit" value="Register" />
        
       
      </form>
      <hr className={styles.line}/>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Register;
