import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-lg text-center errorPage mt-32">
      <h1 className="text-blue-500 font-extrabold text-9xl tracking-tighter my-3">
        Oops!
      </h1>
      <h4 className="text-black font-bold text-2xl uppercase my-3">
        404 - page not found
      </h4>
      <p className="text-gray-600 font-light text-md tracking-tight my-3">
        The page you are looking for might have been removed<br></br> had its
        name changed or is temporarily unavalible.
      </p>
      <Button
        className="my-3"
        type="primary"
        size="large"
        onClick={() => navigate("/home")}
      >
        go to homepage
      </Button>
    </div>
  );
}
