import React from 'react'

const Landing = () => {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className='space-y-3 text 5xl font-semibold tracking-wide lg:text-6xl'>
                <span className='block'>Powered by</span>
                <span className='bg-gradient-to-r from-red-600 via-red-100 to-red-600 bg-clip-text text-transparent'>Purina</span>
                <span className='block'>Your pet our passion</span>
            </h1>
        </div>
    </section>
  )
}

export default Landing