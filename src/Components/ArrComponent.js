import React from 'react';
import Users from './../TypeFunctionCompnents/User';

let arruser = [
    { name: 'jenya', age: '23' }, { name: 'sasha', age: '54' }, { name: 'julia', age: '24' }, { name: 'andrey', age: '21' }, { name: 'maxim', age: '52' }
]

const ArrCont = () => {
    return (
        arruser.map((info) =>

            <div>
                <Users name={info.name} surname={info.age} />
            </div>

        )
    );
};
export default ArrCont;