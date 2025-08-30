import { useState, useEffect } from 'react';
import './index.css';

const TermsAndConditions = () => {
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
                        <h1 className="card-title">Terms and Conditions</h1>
                        <p className="card-subtitle">Effective Date: 17-06-2025</p>
                    </div>

                    <div className="card-body">
                        <section className="section">
                            <h2 className="section-title">1. Services Provided</h2>
                            <p className="section-text">
                                Welcome to Go2Home. These Terms and Conditions ("Terms") govern your use of our mobile application,
                                website, and services provided by Go2Home. By accessing or using our platform, you agree to be bound by these Terms.
                            </p>
                            <p className="section-text">Go2Home is a real estate platform that enables users to:</p>
                            <ul className="section-list">
                                <li>Buy, sell, or rent residential and commercial properties</li>
                                <li>List their properties for sale or rent</li>
                                <li>Connect with property owners, buyers, tenants, and agents</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">2. Eligibility</h2>
                            <p className="section-text">
                                You must be at least 18 years old to use this platform. By registering, you confirm that you are
                                legally competent to enter into a contract.
                            </p>
                        </section>

                        <section className="section">
                            <h2 className="section-title">3. User Responsibilities</h2>
                            <ul className="section-list">
                                <li>You agree to provide accurate and complete information.</li>
                                <li>You are solely responsible for your listings and interactions on the platform.</li>
                                <li>You must not post illegal, false, or misleading content.</li>
                                <li>You must not misuse the platform for spam, scams, or any fraudulent activity.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">4. Property Listings</h2>
                            <ul className="section-list">
                                <li>All property details must be accurate, up-to-date, and lawful.</li>
                                <li>We reserve the right to remove any listing that violates these terms.</li>
                                <li>Go2Home is not responsible for verifying the ownership or legality of the properties listed.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">5. Payments & Fees</h2>
                            <ul className="section-list">
                                <li>Some services may require payment (e.g., premium listings, promotions).</li>
                                <li>All fees are non-refundable unless stated otherwise.</li>
                                <li>Go2Home does not guarantee sales or leads in exchange for payment.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">6. Third-Party Services</h2>
                            <ul className="section-list">
                                <li>We may use third-party services (e.g., payment gateways, loan providers).</li>
                                <li>Go2Home is not responsible for the services provided by these third parties.</li>
                                <li>Some services may require payment (e.g., premium listings, promotions).</li>
                                <li>All fees are non-refundable unless stated otherwise.</li>
                                <li>Go2Home does not guarantee sales or leads in exchange for payment.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">7. Intellectual Property</h2>
                            <ul className="section-list">
                                <li>All content, branding, logos, and software are the intellectual property of Go2Home.</li>
                                <li>You may not copy, distribute, or use our content without permission.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">8. Termination</h2>
                            <ul className="section-list">
                                <li>We reserve the right to suspend or terminate your account for violations of these Terms.</li>
                                <li>You may terminate your account at any time by contacting support.</li>
                            </ul>
                        </section>

                        <section className="section">
                            <h2 className="section-title">9. Disclaimer & Limitation of Liability</h2>
                            <ul className="section-list">
                                <li>We provide the platform "as is" without warranties of any kind.</li>
                                <li>Go2Home is not responsible for any disputes, losses, or damages between users.</li>
                                <li>We do not guarantee the accuracy of listings or user-generated content.</li>
                            </ul>
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

export default TermsAndConditions;