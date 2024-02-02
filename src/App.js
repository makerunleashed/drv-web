// App.js
import React from 'react';
//import emailjs from '@emailjs/browser';

import Header from './comp/header.jsx';
import Footer from './comp/footer.jsx';
//import ContactUs from './comp/contact-form.jsx';


import './styles.css';



function App() {
  return (
    <div className="App">
      <Header />
      <p className='main-header-block'>Let Drive Accountancy take care of all your accountancy needs, leaving you time to do what you do best, running your business. <br /><br />We provide a full range of services, tailored specifically to suit you</p>
      <div className="main-content">
        <div className="left-column">
          <h3>Specialising in humans</h3>
          <p className='body-text'>Drive Accountancy specialises in small to medium owner managed businesses. <br /><br />From past experience with businesses of all shapes and sizes, it is always the smaller folks who end up with over complicated, un-tailored, and expensive financial support.  <br /><br />Our passion is helping out the real people rather than huge faceless corporates, providing a solution that is right for you.</p>
        </div>
        <div className="center-column">
          <h3>Untangling the Jargon</h3>
          <p className='body-text'>The aim is simple - to untangle finance for the small to medium sized business, and to bring understanding of what is relevant to you, in simple jargon free advice.  <br /><br />These are your figures and your business, and no one knows them better than you.  My job is to help you understand them, and make them work for you to make your business more efficient wherever possible, and to free you up to do what you enjoy and do best, running the business.</p>
        </div>
        <div className="right-column">
          <h3>Solving the headaches</h3>
          <p className='body-text'>By offering:</p>
          <ul className='body-text'>
            <li>Personal Tax Returns</li>
            <li>Statutory Accounts Preparations</li>
            <li>Corporation Tax</li>
            <li>Company Secretarial</li>
            <li>Bookkeeping</li>
            <li>VAT</li>
            <li>Management Accounts</li>
            <li>Budgets and Cashflows</li>
            <li>Business Start-up</li>
            <li>Software</li>
          </ul>
        </div>
      </div>
      <p className='header-block'><h2>About Drive Accountancy</h2></p>
      <div className='body-full-block'>
      <p className='body-text'>Drive Accountancy is a relatively new firm owned and operated by Louisa E J Webb BSc (Hons) FCA.  Yes we are relatively new but we are born from over 15 years experience in practice.</p>
      <p className='body-text'>The aim is simple - to untangle finance for the small to medium sized business.</p>
      <p className='body-text'>“I have spent a great deal of time with businesses of all shapes and sizes, but it is always the smaller folks who end up with over complicated and expensive financial support.  I love helping out real people rather than faceless corporates so the decision to set up Drive Accounting was an easy one.</p>
      <p className='body-text'>From the start of my career I have worked in practice, and during this time I have worked for a range of firms including a top 20 Audit firm, a medium sized family run practice and a one director practice.</p>
      <p className='body-text'>Throughout my entire career my passion has always been the smaller firms who sometimes struggle with the financial aspects of running their business. My drive is to bring understanding of what is relevant to you, in simple jargon free advice.</p>
      <p className='body-text'>I firmly believe that these are your figures and your business, and no one knows them better than you.  My job is to help you understand them, and make them work for you to make your business more efficient wherever possible, and to free you up to do what you enjoy and do best.”</p>
      </div>

      
      <p className='header-block'><h2>Services</h2></p>
      <div className="grid-container">
        <div className="grid-item">
          <h4>Personal Tax Returns</h4>
          <ul className='body-text-small'>
            <li>Self-Assessment</li>
            <li>Capital Gains Tax</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Statutory Accounts Preparations</h4>
          <ul className='body-text-small'>
            <li>Sole Traders</li>
            <li>Partnerships</li>
            <li>LLP</li>
            <li>Company</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Corporation Tax</h4>
          <ul className='body-text-small'>
            <li>CT600 Returns</li>
            <li>Computations</li>
            <li>Capital Gains Tax</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Company Secretarial</h4>
          <ul className='body-text-small'>
            <li>Annual Returns</li>
            <li>Appointment and termination of Directors or Secretarys & Registration of Change of Shareholdings</li>
            <li>Share allotments and transfers and Dividend vouchers</li>
            <li>Minutes and Resolutions</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Bookkeeping</h4>
          <ul className='body-text-small'>
            <li>Transaction recording</li>
            <li>Debtors and Creditors reports</li>
            <li>Bank reconciliations</li>
          </ul>
        </div>
        <div className="grid-item"><h4>VAT</h4>
          <ul className='body-text-small'>
            <li>Preparation</li>
            <li>Submission to HMRC</li>
            <li>Registration and registration advice</li>
            <li>Advice re Flat Rate Schemes & Cash or Accrual Basis</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Management Accounts</h4>
          <ul className='body-text-small'>
            <li>Reports tailored to your requirements</li>
            <li>Up to date position throughout the year</li>
            <li>Monthly, Quarterly, 6 monthly</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Budgets and Cashflows</h4>
          <ul className='body-text-small'>
            <li>Forecasts for the future</li>
            <li>1, 3 or 5 years</li>
            <li>Reviews to see where costs can be reduced</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Business Start-up</h4>
          <ul className='body-text-small'>
            <li>Advice</li>
            <li>Business vehicle options</li>
            <li>Incorporations</li>
            <li>Pitfalls</li>
          </ul>
        </div>
        <div className="grid-item"><h4>Software</h4>
          <ul className='body-text-small'>
            <li>Record keeping templates</li>
            <li>Accounting Software options</li>
          </ul>
        </div>
      </div>
      <p id='Contact' className='header-block'><h2>Contact</h2></p>

      <div className="main-content">
        <div className="left-column">
          form
        </div>
        <div className="center-column">
          &nbsp;
        </div>
        <div className="right-column">
        

      


        </div>
      </div>

      <Footer />

    </div>
    
  );
}

export default App;