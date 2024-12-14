'use client'
import styles from '../../css/auth/login.module.css'
import Link from 'next/link'
export default function FormRegister() {
  return (
    <form
        className={`${styles.radialGradient} border
         border-slate-600/50 rounded-lg w-2/5 pb-4`} style={{ backdropFilter: 'blur(8px)' }}
    >
        <h3 className='text-center text-3xl py-4 text-white font-bold px-4 border-b border-slate-600/50'
        >Sign up on Elixir</h3>
        <div className='space-y-2 p-4 '>
            <label htmlFor="email" className='block'>Email</label>
            <input id='email' type="text" className='bg-transparent border w-full h-12 p-4 border-slate-600/50'
             placeholder='example@gmail.com' />
        </div>
        <div className='space-y-2 p-4 '>
            <label htmlFor="password" className='block'>Password </label>
            <input id='password' type="password" className='bg-transparent border w-full h-12 p-4 border-slate-600/50'
             placeholder='your password' />
        </div>
        <div className='space-y-2 p-4 '>
            <label htmlFor="password" className='block'>Confirm password</label>
            <input id='password' type="password" className='bg-transparent border w-full h-12 p-4 border-slate-600/50'
             placeholder='your password' />
        </div>
        <div className='flex items-center justify-center p-4'>
          <button className=' text-black bg-white w-full py-2 hover:bg-slate-300'>Sign Up</button>
        </div>
        <div className='flex items-center justify-end px-4'>
          <Link href="/auth" className='text-white underline hover:text-slate-300'
          >Already have an account?</Link>
        </div>
    </form>
  )
}
