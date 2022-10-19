const LoginForm=(props)=>{
    return (
        <form className="form">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
       {!props.isRegistered&&<input type="password" placeholder="confirm password"/>}
        <button>{props.isRegistered ? "Login": "Registered"}</button>
      </form>
    )
}

export default LoginForm;