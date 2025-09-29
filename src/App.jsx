import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./components/ProfileCard";
import Button from "./components/Button";

function App() {
  return (
    <>
      <>
        <ProfileCard
          image={"https://picsum.photos/200/300"}
          title={"John Doe"}
          description={"Short description about card"}
        />
      </>
      <>
        <ProfileCard
          image={"https://picsum.photos/200/300"}
          title={"Card 2"}
          description={"Another bullshit description,"}
        />
      </>
      <>
        <ProfileCard
          image={"https://picsum.photos/200/300"}
          title={"Card 3"}
          description={"Well another description"}
        />
      </>
    </>
  );
}

export default App;
