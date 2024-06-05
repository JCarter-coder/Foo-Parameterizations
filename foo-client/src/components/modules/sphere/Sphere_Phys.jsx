import sphere from './sphere';
import React, { useCallback, useState } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

const Sphere_Phys = ({}) => {
    const [ radius, setRadius ] = useState('');
    const [ volume, setVolume ] = useState(null);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setRadius(value);
        if (value) {
            const calculatedVolume = sphere(value);
            setVolume(calculatedVolume);
        } else {
            setVolume(null);
        }
    }
    //
    return (
        /* contents of card */
        <>
            <h3>Volume of a Sphere</h3>
            <div className='card'>
                <BlockMath math="V = \frac{4}{3}\pi r^3" />
            </div>
            <div className="card">
                <label>
                    Radius:
                    <input 
                        type="number"
                        value={radius}
                        onChange={handleInputChange}
                        placeholder="Enter radius"
                    />
                </label>
                {volume !== null && (
                    <label>
                        <p>Calculated Volume: {volume.toFixed(2)}</p>
                    </label>
                )}
            </div>


        </>
    )
}
export default Sphere_Phys;