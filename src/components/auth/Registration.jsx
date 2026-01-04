import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";

export const Registration = ({ isOpen, onClose, openLogin }) => {
  const [step, setStep] = useState("form"); // form | otp
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const sendOtp = () => {
    setStep("otp");
  };

  const verifyOtp = () => {
    onClose();
    navigate("/dashboard");
  };

  return (
    <>
      {/* REGISTRATION MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />

          <div className="relative bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg animate-scaleUp">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={onClose}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              Create Account
            </h2>

            {step === "form" && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border p-2 rounded-md mb-3 focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border p-2 rounded-md mb-3 focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="text"
                  placeholder="Email or Mobile"
                  className="w-full border p-2 rounded-md mb-4 focus:ring-2 focus:ring-orange-500"
                />

                <button
                  onClick={sendOtp}
                  className="w-full bg-orange-500 text-white py-2 rounded-md"
                >
                  Send OTP
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full border p-2 rounded-md focus:ring-2 focus:ring-orange-500"
                />

                <button
                  onClick={verifyOtp}
                  className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md"
                >
                  Verify & Continue
                </button>
              </>
            )}

            {/* SWITCH TO LOGIN POPUP */}
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <span
                className="text-orange-500 cursor-pointer"
                onClick={() => {
                  onClose();
                  openLogin();
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      )}

    </>
  );
};
