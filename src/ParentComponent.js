import React, {useCallback, useState} from 'react';
import Count from './components/count';
import Button from './components/button';
import Title from './components/title';


const ParentComponent = () => {
    const [age,setAge] = useState(20);
    const [salary,setSalary]= useState(15000);

    const increment = useCallback(() => {
        setAge(age + 1)
      }, [age])

      const increments = useCallback(() => {
        setSalary(salary + 1)
      }, [salary])
    return(
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={increment}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={increments}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent;