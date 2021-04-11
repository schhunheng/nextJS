import React, { useContext } from "react";
import Link from "next/link";
import styles from "./../styles/register.module.css";
import {useForm} from 'react-hook-form';
import {FormContext} from './../contexts/FormContext'
import {useRouter} from 'next/router'
const Login = () => {
  const {form, setForm}=useContext(FormContext)
  const router =useRouter()
 const {register,handleSubmit}=useForm()
 const onSubmit=(data)=>{
  if(form.email===data.email&&form.password===data.password){
    router.push(`home`);
  }
 }
  return (
    <div className={styles.container}>
     <h1>Welcome Mr/Mrs{form.firstname}</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.input} name="email" type="email" ref={register()}/>
        <br/>
        <input className={styles.input} name="password" type="password" ref={register()}/>
        <br/>
        <input className={styles.btn} type="submit" value="login"/>
     </form>
     <hr className={styles.line}/>
     <Link href="register">Register</Link>
    </div>
  );
};

export default Login;
