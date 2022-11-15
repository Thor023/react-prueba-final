import React from 'react'
import '../App.css';

function Footer() {
  return (
    <div>
        <footer className='text-white py-4 main-footer'>
            <div className="position-bottom ant-col txt-white txt-center pb-10 ant-col-xs-24 ant-col-md-24 ant-col-lg-24">
              Powered by ProgramaThor
              <img src="./images/dlatam.png" alt="Fotter" className='mx-2' />
            </div>
        </footer>
    </div>
  )
}

export default Footer