import React from 'react';

function Overlay() {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 10,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        pointerEvents: 'none', // Ignore pointer events
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: '1rem',
          color: 'white',
          fontSize: '3rem',
          pointerEvents: 'auto',
          textAlign:'center',
          // border: '1px solid white',
          margin: '10px',
          maxWidth: '40vw'
        }}
      >
      
        <h2 style={{ margin: 0, fontSize:'25px' }}>━━ GREENWAY PEST SOLUTION ━━</h2>
         {/* <h1 style={{ fontSize:'20px',margin: 0, color:'#011' }}> 2023 Premium Add-Ons</h1> */}
         

      </div>
      <div
      
       style={{
          position: 'absolute',
          bottom: 30,
          right: 0,
          padding: '1rem',
          color: 'black',
          fontSize: '3rem',
          pointerEvents: 'auto',
         
          // border: '1px solid white',
          margin: '40px',
          maxWidth: '40vw',
          lineHeight:'30px',
          border: '1px solid white',
          background:'#35764B',
          maxHeight:'30vh',
          overflowY: 'scroll',
          
        }}>
 <p style={{ margin: 0,fontSize:'14px' }}>
          We are excited to announce three new services to keep your home pest-free this season.Our new services include mosquito control, weed control, and termite control. With these services, you can enjoy a pest-free and comfortable living environment throughout the season.

To learn more about each service, simply click on the type of pest you're looking to control. 
Our mosquito control service targets mosquitoes and other flying insects that can carry harmful diseases. Our weed control service will effectively eliminate unwanted weeds, while our termite control service will protect your home from the damaging effects of termites.


At our pest control company, we're committed to providing the best protection for your home and family. Our team of experts will work with you to create a customized plan tailored to your specific needs. With our new services, you can trust that your home will be protected from pests all season long.
           </p>
       {/* <h1 style={{ marginLeft: '2rem' }}>PEST</h1>
        <h1 style={{ margin: 0 }}>SOLUTIONS</h1> */}
      </div>
       <div
        style={{
          position: 'absolute',
          bottom: 55,
          left: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem',
          backgroundColor: 'black',
          borderRadius: '0.5rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'auto', // Enable pointer events for CTA
          marginBottom: '10px',
          maxWidth:'40vw',
          maxHeight:'40vh'
        }}
      >
        <h2 style={{ margin: 0, fontWeight: 'bold', textAlign: 'center',fontSize:'14px',margin: '0.1rem 0', }}>Ready to get rid of pests?</h2>
         <div style={{ width: '100%', height: '1px', backgroundColor: '#35764B', margin: '0.1rem 0',  }} />
        <p style={{ fontSize:'13px', textAlign: 'center' }}>We're here to help. <br/> Contact us to get a quote.</p>
        <button style={{ marginTop:"10px", padding: '.1rem 1rem', backgroundColor: '#35764B', color: 'white', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>HERE</button>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: 'white',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: "2rem",
          bottom: 0,
          width: '1px',
          backgroundColor: 'white',
        }}
      />
    </div>
  );
}

export default Overlay;