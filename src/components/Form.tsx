import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { API, DASHBOARD_URL } from "../api";
import { ImVolumeIncrease } from "react-icons/im";
import { LiaClock } from "react-icons/lia";
import { BiBuilding } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
const Form = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isNewUser, setIsNewUser] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        phoneNumber: "",
        email: "",
        fname: "",
        lname: "",
        phoneVerified: false,
        city: "",
        pincode: "",
    });

    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSendOtp = async () => {
        if (!phone) {
            setError("Please provide a phone number.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API}/phone/request-otp/nc`, {
                phone,
                countryCode: "+91",
            });
            if (response.status === 200) {
                setIsOtpSent(true);
                setError("");
                toast.success("OTP sent successfully!");
            }
        } catch (error) {
            toast.error("Failed to send OTP. Try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp) {
            setError("Please enter the OTP.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API}/phone/verify-otp`, {
                phone,
                otp,
            });
            if (response.status === 200) {
                await checkCustomerStatus();
                setError("");
                toast.success("OTP verified!");
            } else {
                setError("Invalid OTP.");
            }
        } catch (error) {
            toast.error("Failed to verify OTP.");
        } finally {
            setLoading(false);
        }
    };

    const checkCustomerStatus = async () => {
        try {
            const response = await axios.get(`${API}/custTable/check`, {
                params: { phone, countryCode: "+91" },
            });
            if (response.status === 200) {
                setIsNewUser(true);
                toast("New user detected. Please register.");
            }
        } catch (error) {
            await loginExistingCustomer();
            toast("User Already Exists");
        }
    };

    const loginExistingCustomer = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API}/custTable/by/phone`, {
                params: { phone, countryCode: "+91" },
            });

            const data = response.data.data;

            window.location.href = `${DASHBOARD_URL}/redirect?To=${'finance-your-project'}&Id=${data.Id}&Token=${data.Token}&Session=${data.Session}&Name=${data.Name}&Email=${data.Email}&Currency=${data.Currency}&Phone=${data.Phone}&PCode=${data.PCode}&RecId=${data.RecId}`;
            toast.success("Logged in successfully!");
        } catch (error) {
            toast.error("Failed to log in.");
        } finally {
            setLoading(false);
        }
    };

    const registerNewCustomer = async () => {
        if (!termsAccepted) {
            setError("You must accept the Terms and Conditions.");
            return;
        }
        setLoading(true);
        const apiData = {
            Name: `${user.fname} ${user.lname}`,
            Phone: phone,
            PCode: "+91",
            City: user.city,
            ZipCode: user.pincode,
            Email: user.email,
        };
        try {
            const response = await axios.post(`${API}/custTable/signup`, apiData);

            const data = response.data.data;

            if (response.status === 200) {
                const userToSend = {
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email,
                    phoneVerified: user.phoneVerified,
                    phoneNumber: user.phoneNumber,
                    pCode: "+91",
                    city: user.city,
                    pincode: user.pincode,
                };

                await fetch("https://www.designelementary.com/api/user/india/sign-up", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userToSend),
                }).then(() => {
                    window.location.href = `${DASHBOARD_URL}/redirect?To=${'finance-your-project'}&Id=${data.Id}&Token=${data.Token}&Session=${data.Session}&Name=${data.Name}&Email=${data.Email}&Currency=${data.Currency}&Phone=${data.Phone}&PCode=${data.PCode}&RecId=${data.RecId}`;
                    toast.success("Registered successfully!");
                }).catch((error) => error.response.json());
            }
        } catch (error) {
            toast.error("Registration failed.");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setUser((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <Toaster />
            <div className="relative min-h-screen flex items-center justify-center backdrop-blur-lg bg-green-50/70">
                <div className=" w-full md:w-auto p-10 rounded-3xl  border bg-[#FFFFFF] shadow-xl">
                    <h1 className="text-2xl font-semibold text-green-600 text-left mb-6">
                        Exciting Home Loan Offers from 90+ Banks in India
                    </h1>
                    <ul className=" text-gray-600 text-lg font-light mb-6">
                        <span className="flex gap-2 items-center">
                        <TiTick />
                            Best Interest Rates

                        </span>
                        <span className="flex gap-2 items-center">
                        <TiTick />
                            Fast Approval Process

                        </span>
                        <span className="flex gap-2 items-center">
                            <TiTick />
                            Tailored for Construction
                        </span>
                    </ul>
                    {!isOtpSent ? (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mobile Number
                            </label>
                            <div className="flex input input-bordered w-full  text-lg rounded-lg mb-4">
                                <div className="text-base flex items-center p-2 text-gray-500">
                                    🇮🇳
                                </div>
                                <p className="text-base flex items-center  mr-3 text-gray-500">

                                    +91</p>
                                <input
                                    type="text"
                                    placeholder=" XXXXXXXXX"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="border-0 focus:border-0 focus:outline-none focus:ring-0"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mb-4">
                                By clicking on proceed, you agree to the{" "}
                                <a href="/terms" className="text-green-600 underline">
                                    Terms of Use
                                </a>{" "}
                                and{" "}
                                <a href="/privacy" className="text-green-600 underline">
                                    Privacy Policy
                                </a>.
                            </p>
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                            <button
                                onClick={handleSendOtp}
                                disabled={loading}
                                className={`btn bg-green-2 btn-success w-full ${loading ? "btn-disabled" : ""
                                    }`}
                            >
                                {loading ? (
                                    <span className="loading  loading-spinner"></span>
                                ) : (
                                    "Send OTP"
                                )}
                            </button>
                        </div>
                    ) : isNewUser ? (
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={user.fname}
                                onChange={(e) => handleInputChange("fname", e.target.value)}
                                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={user.lname}
                                onChange={(e) => handleInputChange("lname", e.target.value)}
                                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={user.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="City"
                                value={user.city}
                                onChange={(e) => handleInputChange("city", e.target.value)}
                                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="text"
                                placeholder="Pincode"
                                value={user.pincode}
                                onChange={(e) => handleInputChange("pincode", e.target.value)}
                                className="input input-bordered w-full mb-6 p-4 rounded-lg border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={() => setTermsAccepted(!termsAccepted)}
                                    className="checkbox checkbox-success"
                                />
                                <label className="ml-2 text-gray-700">
                                    I accept the{" "}
                                    <a href="/terms" className="text-green-600">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                            <button
                                onClick={registerNewCustomer}
                                disabled={loading}
                                className={`btn btn-success w-full ${loading ? "btn-disabled" : ""
                                    }`}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    "Register"
                                )}
                            </button>
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                placeholder="OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="input input-bordered w-full mb-4 p-4 rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                            <button
                                onClick={handleVerifyOtp}
                                disabled={loading}
                                className={`btn btn-success w-full ${loading ? "btn-disabled" : ""
                                    }`}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    "Verify OTP"
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>

    );
};

export default Form;
