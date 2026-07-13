import React from "react";

const DashboardPage = async () => {
  // get stuff from backend
  const url = process.env.API_URL;
  const data = await fetch(url)
    .then((data) => data.json())
    .catch((err) =>
      console.log("error while making request to backend: ", err.message),
    );

  return (
    <div className="p-4">
      <h2>Dashboard </h2>

      <div className="border rounded p-2">
        <p>Message from backend </p>
        <span className="text-green-500">{data?.message || "-"}</span>
      </div>
    </div>
  );
};

export default DashboardPage;
