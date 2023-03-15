

export function Header(){
  return (
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '100' }}>
      {/* <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} /> */}
      <img src={'logo.png'} style={{ position: 'absolute', top: 40, left: 40 , width: 120 }}/>
      <a href="sms:+1-719-231-9208" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '20px' }}>
        Text a technician
        <br />
        480-100-2000
      </a>
      {/* <div style={{ position: 'absolute', top: 40, left: 40 }}>—bark scorpions—</div> */}
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>29/01/2023</div>
    
    </div>
  );
} 


