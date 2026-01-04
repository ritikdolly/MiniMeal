import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Registration } from "./Registration";

export const Login = ({ isOpen, onClose, openRegister }) => {
  const [step, setStep] = useState("input"); // input | otp
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const sendOtp = () => {
    // API call will go here
    setStep("otp");
  };

  const verifyOtp = () => {
    // OTP verification API here
    onClose();
    navigate("/dashboard");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />

          <div className="relative bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg animate-scaleUp">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Login to Mini Meal Hub
            </h2>

            {step === "input" && (
              <>
                <input
                  type="text"
                  placeholder="Email or Mobile"
                  className="w-full border p-2 rounded-md focus:ring-2 focus:ring-orange-500"
                />

                <button
                  onClick={sendOtp}
                  className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md"
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
                  Verify & Login
                </button>
              </>
            )}

            <p className="text-center mt-4 text-sm">
              Don’t have an account?{" "}
              <span
                className="text-orange-500 cursor-pointer"
                onClick={() => {
                  onClose();
                  openRegister();
                }}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
