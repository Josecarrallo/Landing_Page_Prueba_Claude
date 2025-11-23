import { useEffect } from 'react';
import muelleImage from './muelle.jpg';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ 
      width: '100%',
      margin: '0',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      {/* HEADER */}
      <header style={{
        backgroundColor: '#7B3F00',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: 'bold',
          letterSpacing: '4px',
          color: '#fff'
        }}>
          STANBURY RETREATS
        </h1>
      </header>

      {/* VIDEO WISTIA */}
      <section style={{ 
        width: '100%',
        padding: '5px',
        boxSizing: 'border-box',
        backgroundColor: '#000'
      }}>
        <div style={{ 
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <div style={{ 
            width: '100%',
            paddingTop: '56.25%',
            position: 'relative',
            backgroundColor: '#000',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <iframe
              src="https://fast.wistia.net/embed/iframe/nn611u2tzp?autoPlay=true&muted=false&controlsVisibleOnLoad=true&playButton=true&fullscreenButton=true&volumeControl=true&endVideoBehavior=reset"
              allowFullScreen
              allow="autoplay; fullscreen"
              frameBorder="0"
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%' 
              }}
              title="Video Stanbury Retreat"
            />
          </div>
        </div>
      </section>

      {/* WIN A FREE RETREAT SECTION */}
      <section style={{
        backgroundColor: '#4a3c1f',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          border: '3px dashed #8B7355',
          padding: '20px 15px',
          borderRadius: '10px',
          paddingTop: '30px'
        }}>
          <h3 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#4FC3F7',
            margin: '0 0 15px 0',
            lineHeight: '1.2'
          }}>
            WIN A FREE<br />
            RETREAT TICKET<br />
            ONLY $250 TO ENTER!
          </h3>
          
          <p style={{
            fontSize: '18px',
            color: '#fff',
            lineHeight: '1.4',
            margin: '0 0 15px 0',
            fontWeight: 'bold'
          }}>
            Our retreats have sold out every time, and we currently have more than 800 people on the waitlist.
          </p>

          <p style={{
            fontSize: '18px',
            color: '#fff',
            lineHeight: '1.4',
            margin: '0 0 15px 0',
            fontWeight: 'bold'
          }}>
            For this reason, we are not opening it publicly.
          </p>

          <p style={{
            fontSize: '18px',
            color: '#fff',
            lineHeight: '1.4',
            margin: '0 0 15px 0',
            fontWeight: 'bold'
          }}>
            The only chance to join is inside this exclusive call, and spots are very limited.
          </p>

          <p style={{
            fontSize: '16px',
            color: '#ddd',
            lineHeight: '1.5',
            margin: '0 0 20px 0'
          }}>
            Caroline will select 6 people for a live Hot Seat 1:1, and she will GIFT ONE FREE retreat ticket to a lucky participant. She'll also share the full purpose behind the retreats and why they've been so transformational.
          </p>

          <p style={{
            fontSize: '20px',
            color: '#fff',
            fontWeight: 'bold',
            margin: '0 0 25px 0'
          }}>
            Can't wait to see you there!
          </p>

          <button
            style={{
              backgroundColor: '#2C3E50',
              color: '#fff',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '18px 50px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100%',
              maxWidth: '450px'
            }}
          >
            REGISTER HERE !!<br />
            LIMITED SPACES
          </button>
        </div>
      </section>

      {/* IMAGEN DE PERSONA EN MUELLE */}
      <section style={{
        backgroundImage: `url(${muelleImage})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor: '#000',
        minHeight: '100vh'
      }}></section>

      {/* JOIN THE NEWSLETTER SECTION */}
      <section style={{
        backgroundColor: '#000',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#2a2a2a',
          padding: '40px 30px',
          borderRadius: '10px'
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 'normal',
            margin: '0 0 10px 0',
            letterSpacing: '2px'
          }}>
            JOIN THE NEWSLETTER
          </h3>
          
          <p style={{
            fontSize: '16px',
            color: '#aaa',
            marginBottom: '30px'
          }}>
            Subscribe to get our latest content by email.
          </p>

          <input
            type="text"
            placeholder="Full Name"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: 'transparent',
              border: '1px solid #555',
              borderRadius: '5px',
              color: '#fff',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          
          <input
            type="text"
            placeholder="Surname"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: 'transparent',
              border: '1px solid #555',
              borderRadius: '5px',
              color: '#fff',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          
          <input
            type="email"
            placeholder="Email"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: 'transparent',
              border: '1px solid #555',
              borderRadius: '5px',
              color: '#fff',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          
          <input
            type="text"
            placeholder="Country"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: '#3a3a3a',
              border: '1px solid #555',
              borderRadius: '5px',
              color: '#fff',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          
          <input
            type="text"
            placeholder="City"
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '25px',
              backgroundColor: 'transparent',
              border: '1px solid #555',
              borderRadius: '5px',
              color: '#fff',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#0066cc',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#7B3F00',
        padding: '30px 20px',
        textAlign: 'center'
      }}>
        <p style={{
          margin: '0 0 5px 0',
          fontSize: '14px',
          color: '#4FC3F7'
        }}>
          © 2025 Venture
        </p>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#fff'
        }}>
          Powered by Kajabi
        </p>
      </footer>
    </div>
  );
}

export default App;
