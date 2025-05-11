import { GiHamburgerMenu } from "react-icons/gi";
import './index.css';
import {
    MdDashboard,
    MdPeople,
    MdAccountBalance,
    MdAttachMoney,
    MdReport,
    MdPayment,
    MdSettings,
    MdLock,
    MdListAlt,
    MdMoney,
    MdCalendarToday,
    MdExitToApp,
    MdFingerprint,
    MdPersonAdd,
    MdBusinessCenter,
} from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";

const menuItems = [
    { icon: <MdDashboard />, label: "Dashboard" },
    { icon: <MdPeople />, label: "Users" },
    { icon: <MdAttachMoney />, label: "Loans" },
    { icon: <MdReport />, label: "Reports" },
    { icon: <MdPeople />, label: "Borrowers" },
    { icon: <MdPayment />, label: "Repayments" },
    { icon: <MdListAlt />, label: "Loan Parameters" },
    { icon: <MdAccountBalance />, label: "Accountings" },
    { icon: <MdReport />, label: "Reports" },
    { icon: <FaUserCog />, label: "Access Configuration" },
    { icon: <MdSettings />, label: "Settings" },
    { icon: <MdMoney />, label: "Others" },
    { icon: <MdBusinessCenter />, label: "Payroll" },
    { icon: <MdPayment />, label: "Expenses" },
    { icon: <MdFingerprint />, label: "E-signatures" },
    { icon: <MdPersonAdd />, label: "Investers Accounts" },
    { icon: <MdLock />, label: "Collateral" },
    { icon: <MdCalendarToday />, label: "Calenders" },
    { icon: <RiUserSettingsFill />, label: "Setting" },
    { icon: <MdExitToApp />, label: "Sign Out" },
];


function Index() {
    return (
        <div className="admin-layout-container">
            <nav className='admin-nav-container'>
                <div className='admin-nav-heading'>
                    <h2 className="nav-heading-admin">CREDIT APP</h2>
                    <GiHamburgerMenu size={40} />
                </div>
                <div className='admin-end-container'>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_2_opmuct.png" alt="home" className='admin-image-end' />
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_3_gtlwlt.png" alt="notif" className='admin-image-end' />
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/account_circle_diwd28.png" alt="user" className='admin-image-end' />
                    <h3 className="nav-text">Admin</h3>
                    <img src="https://res.cloudinary.com/dhtl10m17/image/upload/v1746718499/Vector_4_wmnust.png" alt="arrow" className='admin-image-end' />
                </div>
            </nav>

            <div className="admin-main-dashboard">
                <aside class="admin-sidebar">
                <ul>
                    {menuItems.map((item, idx) => (
                    <li key={idx}>
                        <span className="sidebar-icon">{item.icon}</span>
                        <span className="sidebar-label">{item.label}</span>
                    </li>
                    ))}
                </ul>
                </aside>
                <main className="admin-page-content">
                    <h1 className="heading-admin">Dashboard</h1>
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
