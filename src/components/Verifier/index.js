import { GiHamburgerMenu } from "react-icons/gi";
import './index.css';

function Index() {
    return (
        <div className="var-layout-container">
            <nav className='var-nav-container'>
                <div className='var-nav-heading'>
                    <h2 className="nav-heading-var">CREDIT APP</h2>
                    <GiHamburgerMenu size={40} />
                </div>
                <div className='var-end-container'>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_2_opmuct.png" alt="home" className='var-image-end' />
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_3_gtlwlt.png" alt="notif" className='var-image-end' />
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/account_circle_diwd28.png" alt="user" className='var-image-end' />
                    <h3 className="var-text">Varifier</h3>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_4_wmnust.png" alt="arrow" className='var-image-end' />
                </div>
            </nav>

            <div className="var-main-dashboard">
                <aside className="var-sidebar">
                    <ul>
                        <li>Dashboard</li>
                        <li>Users</li>
                        <li>Loans</li>
                        <li>Reports</li>
                        <li>Settings</li>
                    </ul>
                </aside>
                <main className="var-page-content">
                    <h1 className="heading-var">Welcome <span className="heading-span">Varifier</span></h1>
                    <div class="stats-cards-container">
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/group-foreground-selected.png" alt="Active Users" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">200</div>
                            <div class="stats-label">ACTIVE USERS</div>
                            </div>
                        </div>
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/user-location.png" alt="Borrowers" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">100</div>
                            <div class="stats-label">BORROWERS</div>
                            </div>
                        </div>
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/cash-in-hand.png" alt="Cash Disbursed" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">550,000</div>
                            <div class="stats-label">CASH DISBURSED</div>
                            </div>
                        </div>
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/naira.png" alt="Cash Received" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">1,000,000</div>
                            <div class="stats-label">CASH RECEIVED</div>
                            </div>
                        </div>
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/piggy-bank.png" alt="Savings" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">450,000</div>
                            <div class="stats-label">SAVINGS</div>
                            </div>
                        </div>
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/checked-user-male.png" alt="Repaid Loans" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">30</div>
                            <div class="stats-label">REPAID LOANS</div>
                            </div>
                        </div>
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/bank.png" alt="Other Accounts" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">10</div>
                            <div class="stats-label">OTHER ACCOUNTS</div>
                            </div>
                        </div>
                        <div class="stats-card">
                            <div class="stats-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/money.png" alt="Loans" />
                            </div>
                            <div class="stats-info">
                            <div class="stats-value">50</div>
                            <div class="stats-label">LOANS</div>
                            </div>
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
                </main>
            </div>
        </div>
    );
}

export default Index;
