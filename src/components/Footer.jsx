import React from 'react'
import { SectionWrapper } from './hoc'
import { Link } from 'react-router-dom'
import { github, gmail, logo, telegram } from '../assets'

const Footer = () => {
  return (
    <section>
      <div className="flex justify-between items-center flex-col gap-8 md:flex-row">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            netcats
          </p>
        </Link>
        <div className="flex gap-8 items-center flex-col md:flex-row">
          <Link
            to="https://t.me/testosteronn"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <img
              src={telegram}
              alt="telegram"
              className="w-6 h-6 object-contain"
            />
            <p className="text-white text-[16px] cursor-pointer">telegram</p>
          </Link>
          <Link
            to="https://github.com/RaiseOnce"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <img src={github} alt="github" className="w-6 h-6 object-contain" />
            <p className="text-white text-[16px]  cursor-pointer">github</p>
          </Link>
          <Link
            to="mailto:elias.yunusoff@gmail.com"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <img src={gmail} alt="gmail" className="w-6 h-6 object-contain" />
            <p className="text-white text-[16px] cursor-pointer">mail</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Footer, '')
