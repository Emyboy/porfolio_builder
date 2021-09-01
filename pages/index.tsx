import { Button } from "@components";
import React from "react";
import { JumbotronWidget } from "src/widgets";
import JumbotronDataset from "src/widgets/jumbotron/Jumbotron.dataset";

// import {  } from "@components";

const Home: React.FC = () => {
    return (
        <div>
            <Button onClick={() => {}}>{"Click Me"}</Button>
            <JumbotronWidget index={1}  {...JumbotronDataset} />
        </div>
    );
};

export default Home;
