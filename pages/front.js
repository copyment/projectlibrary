// pages/front.js
import React from 'react';

const FrontPage = () => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Library</title>
        <link rel="stylesheet" href="./public/prontcss" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
      </head>
      <body>
        <div className="container">
        <nav>
                <img src="./LOGO/Vector.png" className="logo"/>
                <ul>
                    <li><a href="#container"> HOME </a></li>
                    <li><a href="#header"> ABOUT </a></li>
                    <li><a href="#header1"> CONTACT </a></li>
                    <li><a href="/login"> LOG IN </a></li>
                </ul>
            </nav>
            <div className="text-box">
                <p>Welcome to</p>
                <h2>THE</h2>
                <h1>LIBRARY</h1>
                <h3>Discover and borrow from our extensive collection of books and more.</h3>
            </div>
        </div>

        <div className="header" id="header">
        <h1>ABOUT</h1>
                <h3>Welcome to our Library Management System! With our user-friendly website,</h3>
                <h3>you can effortlessly browse through a wide collection of books available</h3>
                <h3>in our library. Not only that, but you can also conveniently borrow books,</h3>
                <h3>making the entire process of discovering and accessing your favorite reads</h3>
                <h3>a seamless and enjoyable experience. Happy reading!</h3>
        </div>

        <div className="header1" id="header1">
            <form className="form" action="/submitmessage" method="post">
                    <h3>MESSAGE FORM</h3>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                    <input type="text" id="email" name="email" placeholder="Your Email" required/>
                    <input type="number" id="phone" name="phone" placeholder="Your Phone No." required/>
                    <textarea id="message" name="message" rows="4" placeholder="How can we help you?"></textarea>
                    <button type="submit"> Send </button>
                </form>
                <h1> CONTACT US </h1>
                <p> If you have any Question or Concern you can reach us out 
                can reach us out using the TELEPHONE
                Number or Email Address provided, You can Also Fill the Message Form. Thank You!!.</p>
                <div className="icons">
                    <i className="fa-solid fa-phone" style="color: #ffffff;"> TELEPHONE NO: +123 1453 </i>
                    <i className="fa-solid fa-envelope" style="color: #ffffff;"> EMAIL: thelibraryprod@gmail.com </i>
                </div>
        </div>
      </body>
    </html>
  );
};

export default FrontPage;
