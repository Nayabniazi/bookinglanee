import React from "react";
import { useRouter } from "next/router"; // Next.js Router

function FullPageForm() {
  const router = useRouter(); // Initialize Next.js router

  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          flex: 1,
          backgroundImage: "url('/img/baneer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Form Section */}
      <div
        style={{
            borderRadius:'40px',
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          backgroundColor: "white",
        }}
      >
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          style={{
            color:'white',
            position: "absolute",
            top: "20px",
            left: "20px",
            padding: "0.5rem 1rem",
            backgroundColor: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← Back
        </button>

        {/* Logo */}
        <div style={{ marginBottom: "2rem" }}>
          <img
            src="/img/loginlogo.png"
            alt="Logo"
            style={{ width: "150px" }}
          />
        </div>

        {/* Form */}
        <form style={{ width: "100%", maxWidth: "400px" }}>
          {/* Email Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Remember Me Checkbox */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <input
              type="checkbox"
              id="remember"
              style={{ marginRight: "0.5rem" }}
            />
            <label htmlFor="remember" style={{ fontSize: "0.9rem" }}>
              Remember me
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.9rem" }}>
          <p>
            Don't have an account?{" "}
            <a
              href="/signup"
              style={{
                color: "#007BFF",
                textDecoration: "none",
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FullPageForm;
