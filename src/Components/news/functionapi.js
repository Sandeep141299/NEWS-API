import React, { useEffect, useState } from "react";

const Functionapi = () => {
  const [item, setitem] = useState("");
  const [fetchData, setfetchdata] = useState("");

  useEffect(() => {
    const url = "https://gorest.co.in/public/v2/users";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.item);
        setitem(json.slip.item);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='App'>
        <h1> Fetch data from an api in react </h1>{" "}
        {fetchData.map((item) => (
          <ol key={item.id}>
            User-id: {item.id} <br /> Gender: {item.gender} <br /> Full_Name: {item.name} <br /> Email_id: {item.email} <br /> Status :{item.status}
          </ol>
        ))}
      </div>
    </>
  );
};

export default Functionapi;
