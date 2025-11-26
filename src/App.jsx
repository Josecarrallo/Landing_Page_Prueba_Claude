import { useState, useEffect } from 'react';
import sandBackground from './sand-background.jpg';
import stanburyRetreatsSand from './stanbury-retreats-sand.jpg';
import carolineBvst from './caroline-bvst.jpg';

function App() {
  const [currentPage, setCurrentPage] = useState('registration');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    retreatLocation: '',
    country: '',
    city: '',
    purpose: '',
    investmentLevel: '',
    phone: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      setCurrentPage('exclusive');
    }, 3000);
  };

  // PAGE 1: Registration Form
  if (currentPage === 'registration') {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundImage: `url(${sandBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          paddingTop: '40px'
        }}>
          {/* Title */}
          <h1 style={{
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#000',
            marginBottom: '40px',
            textShadow: '0 0 10px rgba(255,255,255,0.8)',
            lineHeight: '1.3'
          }}>
            <span style={{ color: '#FFD700' }}>✨</span> ENTER YOUR DETAILS TO ACCESS THE RETREAT <span style={{ color: '#FFD700' }}>✨</span>
          </h1>

          {showConfirmation ? (
            <div style={{
              backgroundColor: 'rgba(0, 150, 150, 0.9)',
              padding: '40px',
              borderRadius: '10px',
              textAlign: 'center',
              color: '#fff'
            }}>
              <h2 style={{
                fontSize: '28px',
                fontStyle: 'italic',
                marginBottom: '20px',
                lineHeight: '1.4'
              }}>
                A welcome email from Caroline Stanbury is on its way to your inbox.
              </h2>
              <p style={{ fontSize: '16px' }}>
                Please check your <strong>spam/junk</strong> folder in case it lands there by mistake. <span style={{ color: '#ff69b4' }}>💕</span>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />

              {/* Retreat Location */}
              <select
                name="retreatLocation"
                value={formData.retreatLocation}
                onChange={handleInputChange}
                required
                style={selectStyle}
              >
                <option value="">🌍 What retreat location are you most interested in?</option>
                <option value="usa">🇺🇸 USA</option>
                <option value="bali">🌴 Bali</option>
                <option value="africa">🌍 Africa</option>
              </select>

              {/* Country */}
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                style={selectStyle}
              >
                <option value="">Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="es">Spain</option>
                <option value="mx">Mexico</option>
                <option value="other">Other</option>
              </select>

              {/* City */}
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />

              {/* Purpose */}
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                required
                style={selectStyle}
              >
                <option value="">✨ What is your main purpose or intention for joining this retreat?</option>
                <option value="transformation">1. Personal Transformation & Healing</option>
                <option value="clarity">2. Gaining Clarity and Direction for My Next Chapter</option>
                <option value="connecting">3. Connecting With Like-Minded, Empowered Women</option>
                <option value="resetting">4. Resetting My Energy and Recharging in a New Environment</option>
              </select>

              {/* Investment Level */}
              <select
                name="investmentLevel"
                value={formData.investmentLevel}
                onChange={handleInputChange}
                required
                style={selectStyle}
              >
                <option value="">💎 What investment level are you willing to commit to for this experience?</option>
                <option value="5000">$5,000</option>
                <option value="7000">$7,000</option>
                <option value="10000">$10,000+ (VIP Tier)</option>
              </select>

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone number ( Optional )"
                value={formData.phone}
                onChange={handleInputChange}
                style={inputStyle}
              />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '18px',
                  backgroundColor: '#D4A574',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // PAGE 2: Exclusive Content
  return (
    <div style={{
      width: '100%',
      margin: '0',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#D4A574',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 'bold',
          letterSpacing: '2px',
          color: '#000'
        }}>
          CAROLINE STANBURY - EXCLUSIVE CIRCLE
        </h1>
      </header>

      {/* Stanbury Retreats Sand Image with Video Overlay */}
      <section style={{
        width: '100%',
        height: 'calc(100vh - 60px)',
        backgroundImage: `url(${stanburyRetreatsSand})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '20px'
      }}>
        {/* Video overlaid on bottom half */}
        <div style={{
          width: '90%',
          maxWidth: '700px',
          position: 'relative'
        }}>
          <div style={{
            width: '100%',
            paddingTop: '56.25%',
            position: 'relative',
            backgroundColor: '#000',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
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

      {/* WIN A FREE RETREAT Section */}
      <section style={{
        backgroundColor: '#E8F4FC',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          border: '3px dashed #5BA3C0',
          padding: '40px 30px',
          borderRadius: '5px'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            color: '#3B9EC2',
            margin: '0 0 10px 0',
            lineHeight: '1.2'
          }}>
            WIN A FREE RETREAT TICKET
          </h2>

          <h3 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#E07C24',
            margin: '0 0 30px 0'
          }}>
            ONLY $250 TO ENTER!
          </h3>

          <p style={{
            fontSize: '18px',
            color: '#333',
            lineHeight: '1.6',
            margin: '0 0 15px 0',
            fontWeight: 'bold'
          }}>
            Our retreats have sold out every time, and we currently have more than 800 people on the waitlist.
          </p>

          <p style={{
            fontSize: '18px',
            color: '#333',
            lineHeight: '1.6',
            margin: '0 0 15px 0',
            fontWeight: 'bold'
          }}>
            For this reason, we are not opening it publicly.
          </p>

          <p style={{
            fontSize: '18px',
            color: '#333',
            lineHeight: '1.6',
            margin: '0 0 20px 0',
            fontWeight: 'bold'
          }}>
            The only chance to join THE NEXT RETREAT is inside this exclusive call with Caroline Stanbury during 1 hour, and spots are very limited.
          </p>

          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.6',
            margin: '0 0 25px 0'
          }}>
            Caroline will select 6 people for a live Hot Seat 1:1, and she will GIFT ONE FREE retreat ticket to a lucky participant. She'll also share the full purpose behind the retreats and why they've been so transformational.
          </p>

          <p style={{
            fontSize: '22px',
            color: '#333',
            fontWeight: 'bold',
            margin: '0 0 30px 0'
          }}>
            Can't wait to see you there!
          </p>

          <button
            style={{
              backgroundColor: '#fff',
              color: '#333',
              fontSize: '18px',
              fontWeight: 'bold',
              padding: '18px 40px',
              border: '2px solid #333',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            REGISTER HERE !! LIMITED SPACES
          </button>
        </div>
      </section>

      {/* Caroline Image */}
      <section style={{
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0'
      }}>
        <img
          src={carolineBvst}
          alt="Caroline Stanbury Retreat"
          style={{
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            display: 'block'
          }}
        />
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#D4A574',
        padding: '30px 20px',
        textAlign: 'center'
      }}>
        <p style={{
          margin: '0 0 5px 0',
          fontSize: '14px',
          color: '#000'
        }}>
          © 2025 Stanbury Retreats
        </p>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#333'
        }}>
          Powered by Kajabi
        </p>
      </footer>
    </div>
  );
}

// Styles
const inputStyle = {
  width: '100%',
  padding: '15px',
  marginBottom: '15px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '16px',
  boxSizing: 'border-box'
};

const selectStyle = {
  width: '100%',
  padding: '15px',
  marginBottom: '15px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '16px',
  boxSizing: 'border-box',
  cursor: 'pointer'
};

export default App;
