import React from "react";
import User from "./User";

let UserData = [
    {
        id: "1",
        name: "Beknur ",
        surName: "Abdurashitov"
    },

    {
        id: "2",
        name: "Kuba ",
        surName: "Azimov"
    }
];

const UserElem = [
    <User id={[0].id} name={UserData[0].name} surname={UserData[0].surName}/>,
    <User id={[1].id} name={UserData[1].name} surname={UserData[1].surName} />
    
]

const SomeFunc = () => {
    return (
        <>
        {UserElem}
        </>
    )
}

export default SomeFunc;