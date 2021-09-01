import { Button } from "@components";
import React from "react";

// import {  } from "@components";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
           <Button onClick={() => {}}>
               {"Click Me"}
           </Button>
        </div>
    );
};

export default Home;
