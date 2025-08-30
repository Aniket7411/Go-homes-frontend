import { useState, useEffect } from 'react';
import './index.css';

const PrivacyPolicy = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="terms-container">
            {/* Main Content */}
            <main className="terms-content">
                <div className="terms-card">
                    <div className="card-header">
                        <h1 className="card-title">Privacy Policy – Go2Home</h1>
                        <p className="card-subtitle">Effective Date: 17-06-2025</p>
                    </div>

                    <div className="card-body">
                        <section className="section">
                            <h2 className="section-title">1. Information We Collect</h2>
                            <p className="section-text">
                                Welcome to Go2Home. These Terms and Conditions ("Terms") govern your use of our mobile application,
                                website, and services provided by Go2Home. By accessing or using our platform, you agree to be bound by these Terms.
                            </p>
                            <p className="section-text">Personal Information</p>
                            <ul className="section-list">
                                <li>Name, email address, phone number</li>
                                <li>Address, ID proof (if provided)</li>
                                <li>Property details you submit</li>
                            </ul>
                            <p className="section-text">Usage Information</p>
                            <ul className="section-list">
                                <li>Device type, IP address, location</li>
                                <li>Pages visited, search history</li>
                                <li>Time spent on the app or website</li>
                            </ul>
                            <p className="section-text">Third-Party Data</p>
                            <ul className="section-list">
                                <li>Data from payment gateways, social logins (if used), or linked partners like property agents, banks, etc.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">2. How We Use Your Information</h2>
                            <p className="section-text">We use your information to:</p>
                            <ul className="section-list">
                                <li>Create and manage your account</li>
                                <li>Display and promote property listings</li>
                                <li>Match users with buyers, sellers, or agents</li>
                                <li>Improve our platform and services</li>
                                <li>Send service-related emails or alerts</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">3. Sharing of Information</h2>
                            <p className="section-text">We do not sell your personal data. We may share it with:</p>
                            <ul className="section-list">
                                <li>Verified service partners (e.g., loan agents, real estate agents)</li>
                                <li>IT vendors for hosting or analytics</li>
                                <li>Government or law enforcement if required by law</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">4. Data Security</h2>
                            <p className="section-text">We use industry-standard measures to protect your data, including:</p>
                            <ul className="section-list">
                                <li>Encrypted connections (SSL)</li>
                                <li>Secured servers</li>
                                <li>Access control</li>
                            </ul>
                            <p className="section-text">However, no method is 100% secure, and we cannot guarantee absolute security.</p>
                        </section>

                        <section className="section">
                            <h2 className="section-title">5. Cookies and Tracking</h2>
                            <p className="section-text">Our platform may use cookies and similar technologies to:</p>
                            <ul className="section-list">
                                <li>Remember your preferences</li>
                                <li>Track usage for analytics</li>
                                <li>Provide targeted offers</li>
                            </ul>
                            <p className="section-text">You can disable cookies in your browser settings.</p>
                        </section>

                        <section className="section">
                            <h2 className="section-title">6. Your Rights</h2>
                            <p className="section-text">You have the right to:</p>
                            <ul className="section-list">
                                <li>Access or correct your personal information</li>
                                <li>Request deletion of your account/data</li>
                                <li>Withdraw consent for marketing</li>
                                <li>Report misuse or complaints</li>
                            </ul>
                            <p className="section-text">To exercise your rights, contact us at [insert email address].</p>
                        </section>

                        <section className="section">
                            <h2 className="section-title">7. Data Retention</h2>
                            <p className="section-text">We retain your data:</p>
                            <ul className="section-list">
                                <li>As long as your account is active</li>
                                <li>As required for legal or business reasons</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">8. Children's Privacy</h2>
                            <p className="section-text">Our services are not intended for users under the age of 18. We do not knowingly collect data from children.</p>
                        </section>

                        <section className="section">
                            <h2 className="section-title">9. Changes to This Policy</h2>
                            <p className="section-text">We may update this policy periodically. The latest version will always be available on our app and website.</p>
                        </section>

                        <section className="section">
                            <h2 className="section-title">10. Changes to Terms</h2>
                            <ul className="section-list">
                                <li>We may update these Terms at any time. Continued use of the platform after changes means you accept the updated Terms.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">Contact Us</h2>
                            <div className="contact-grid">
                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>Info@go2home.in</span>
                                </div>
                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>958958293</span>
                                </div>
                                <div className="contact-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>16/17 Sanjay Nagar agar road Ujjain</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            {/* <footer className="terms-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <h3>Go2Home</h3>
              <p className="footer-text">
                Your trusted partner in real estate transactions. Buy, sell, or rent properties with ease.
              </p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Home</a>
                <a href="#" className="footer-link">Properties</a>
                <a href="#" className="footer-link">Agents</a>
                <a href="#" className="footer-link">About Us</a>
              </div>
            </div>
            <div>
              <h3>Services</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Buy Property</a>
                <a href="#" className="footer-link">Sell Property</a>
                <a href="#" className="footer-link">Rent Property</a>
                <a href="#" className="footer-link">Property Valuation</a>
              </div>
            </div>
            <div>
              <h3>Legal</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Terms & Conditions</a>
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Cookie Policy</a>
                <a href="#" className="footer-link">Disclaimer</a>
              </div>
            </div>
          </div>
          <div className="footer-divider">
            <p>&copy; {new Date().getFullYear()} Go2Home. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
        </div>
    );
};

export default PrivacyPolicy;