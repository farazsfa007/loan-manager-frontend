import React, { useState }  from 'react'
import LoanFormPopup from '../LoanPopupForm';
import { GrCurrency } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import './index.css'

function Index() {
    const [showForm, setShowForm] = useState(false);
    return (
        <div>
        <nav className='nav-container'>
            <div>
                <h2>CREDIT APP</h2>
            </div>
            <div className='middle-container'>
                <div className='middle-container-nav'>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746769665/Vector_5_s2oboz.png" alt="home" className='image' />
                    <h3>Home</h3>
                </div>
                <div className='middle-container-nav'>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/tabler_currency-naira_ickego.png" alt="home" className='image'/>
                    <h3>Payment</h3>
                </div>
                <div className='middle-container-nav'>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_uqnolt.png" alt="home" className='image' />
                    <h3>Budget</h3>
                </div>
                <div className='middle-container-nav'>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_1_aaiwpd.png" alt="home" className='image' />
                    <h3>Card</h3>
                </div>
            </div>
            <div className='end-container'>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_2_opmuct.png" alt="home" className='image-end' />
                
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_3_gtlwlt.png" alt="home" className='image-end' />
                    
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/account_circle_diwd28.png" alt="user" className='image-end' />
                    
                    <h3>User</h3>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_4_wmnust.png" alt="home" className='image-end' />
            </div>
        </nav>
        
    <div className="dashboard-container">
    
        <div className="top-section">
            <div className="deficit-box">
            <GrCurrency size={60} className="icon-white" />
            <div className="deficit-value">
                <span className="deficit-label">DEFICIT</span>
                <span className="deficit-amount">₦ 0.0</span>
            </div>
            </div>

            <div className="top-section">
                    
                    <button className="get-loan-btn" onClick={() => setShowForm(true)}>
                        Get A Loan
                    </button>
                </div>
        </div>

        <div className="tabs-section">
            <button className="tab active">Borrow Cash</button>
            <button className="tab">Transact</button>
            <button className="tab">Deposit Cash</button>
        </div>

        <div className='search-container'>
            <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
                type="text"
                className="search-input"
                placeholder="Search for loans"
            />
            </div>
        </div>

        <div className="loans-section">
            <h3 className="loans-title">Applied Loans</h3>
            <div className="table-header">
            <span>Loan Officer</span>
            <span>Amount</span>
            <span>Date Applied</span>
            <span>Status</span>
            </div>
            <div className="loan-row">
            <div className="loan-officer">
                <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="John Okoh"
                className="officer-img"
                />
                <div>
                <div className="officer-name">John Okoh</div>
                <div className="officer-updated">Updated 1 day ago</div>
                </div>
            </div>
            <div className="loan-amount">
                50,000.00
                <div className="loan-note">Not Debit Yet</div>
            </div>
            <div className="loan-date">June 09, 2021<br /><span className="loan-time">6:30 PM</span></div>
            <div className="loan-status pending">PENDING</div>
            </div>
            <div className="loan-row">
            <div className="loan-officer">
                <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="John Okoh"
                className="officer-img"
                />
                <div>
                <div className="officer-name">John Okoh</div>
                <div className="officer-updated">Updated 1 day ago</div>
                </div>
            </div>
            <div className="loan-amount">
                100,000.00
                <div className="loan-note">Not Debit Yet</div>
            </div>
            <div className="loan-date">June 07, 2021<br /><span className="loan-time">6:30 PM</span></div>
            <div className="loan-status verified">VERIFIED</div>
            </div>
            <div className="loan-row">
            <div className="loan-officer">
                <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="John Okoh"
                className="officer-img"
                />
                <div>
                <div className="officer-name">John Okoh</div>
                <div className="officer-updated">Updated 1 day ago</div>
                </div>
            </div>
            <div className="loan-amount">
                100,000.00
                <div className="loan-note">Not Debit Yet</div>
            </div>
            <div className="loan-date">June 07, 2021<br /><span className="loan-time">6:30 PM</span></div>
            <div className="loan-status rejected">REJECTED</div>
            </div>
            <div className="loan-row">
            <div className="loan-officer">
                <img
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt="John Okoh"
                className="officer-img"
                />
                <div>
                <div className="officer-name">John Okoh</div>
                <div className="officer-updated">Updated 1 day ago</div>
                </div>
            </div>
            <div className="loan-amount">
                100,000.00
                <div className="loan-note">Loan Fully Repaid</div>
            </div>
            <div className="loan-date">May 27, 2021<br /><span className="loan-time">6:30 PM</span></div>
            <div className="loan-status approved">APPROVED</div>
            </div>
        </div>
        {showForm && <LoanFormPopup onClose={() => setShowForm(false)} />}
    </div>
        </div>
        
    )
}

export default Index