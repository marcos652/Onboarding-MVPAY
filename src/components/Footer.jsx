import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <svg width="32" height="20" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 55 Q15 55 22 38 Q30 18 38 38 Q42 48 50 48 Q58 48 62 38 Q72 10 82 38 Q90 58 98 38 Q108 12 118 38 Q124 52 135 52"
              stroke="url(#footer-grad)" strokeWidth="7" strokeLinecap="round" fill="none"/>
            <defs>
              <linearGradient id="footer-grad" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8BC34A" />
                <stop offset="40%" stopColor="#3DB8A0" />
                <stop offset="100%" stopColor="#22B8CF" />
              </linearGradient>
            </defs>
          </svg>
          <span>MovingPay</span>
        </div>
        <p className="footer__text">
          © 2026 MovingPay — Onboarding. Todos os direitos reservados.
        </p>
        <p className="footer__tagline">Solução para seu dia a dia, é aqui!</p>
      </div>
    </footer>
  );
}
