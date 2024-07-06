import { useRecoilState } from 'recoil';
import countState from '../store/atoms/countState';

export default function Buttons(){

    const [count, setCount] = useRecoilState(countState);

    function incrementFunc(){
        setCount(count + 1);
    }

    function decrementFunc(){
        setCount(count - 1);
    }

    return (
        <>
            <button onClick={incrementFunc}>Increment</button>
            <button onClick={decrementFunc}>Decrement</button>
        </>
    );
}