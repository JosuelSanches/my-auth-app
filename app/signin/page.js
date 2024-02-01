import SignInButton from "../components/SignInButton" 

const SignInPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <p className=''>
        Clique para Efetuar o Login
      </p>
      <SignInButton/>
    </div>
  )
}

export default SignInPage
