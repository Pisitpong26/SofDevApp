/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
        
        <div style={{ textAlign: 'center' }}><h1 style={{
            color: '#285C79',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            fontFamily: 'Courgette',
            fontSize: '150px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal'
        }}>TravelerTale</h1>
        <img
                src="../Footer/footer-removebg-preview 2.png"
                alt="Footer"
                className="w-full" /></div>
    );
  }
}

export default Footer;