import { useRecoilState, useRecoilValue } from 'recoil';
import countState from '../store/atoms/countState';

export default function Counter(){

    const count = useRecoilValue(countState);
    return (
        <>
            <h1>Counter</h1>
            <p>Count: {count}</p>
        </>
    );
}