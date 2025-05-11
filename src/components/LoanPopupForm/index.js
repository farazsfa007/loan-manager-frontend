import React, { useState } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const LoanFormPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        loanAmount: '',
        loanTenure: '',
        employmentStatus: 'pending',
        reason: '',
        homeAddress: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://loan-manager-backend-8kpx.onrender.com/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Application submitted successfully!');
                onClose();
            } else {
                toast.error(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('Submit error:', error);
            toast.error('Something went wrong');
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-form">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>Apply for a Loan</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="loanAmount"
                        placeholder="Loan Amount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="loanTenure"
                        placeholder="Loan Tenure (months)"
                        value={formData.loanTenure}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        required
                    >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                    <input
                        type="text"
                        name="reason"
                        placeholder="Reason for Loan"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="homeAddress"
                        placeholder="Home Address"
                        value={formData.homeAddress}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit Application</button>
                </form>
            </div>
        </div>
    );
};

export default LoanFormPopup;
