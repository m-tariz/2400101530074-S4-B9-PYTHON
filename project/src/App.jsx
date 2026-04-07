function Demo() {
    function Fun()
    {
        alert("FUNCTION CALL");
    }
        const Fruit=(name)=>
        {
            alert(name);
        }
    
    return(
        <>
        <h1>Example of arrow function</h1>
        <button onClick={Fun}>click to call function</button> 
         <button onClick={()=>Fruit("manu")}>arrow function</button> 
          <button onClick={()=>Fruit("click on apple")}>apple</button> 
           <button onClick={()=>Fruit("click on banana")}>banana</button> 
        

        </>
    )
}

export default Demo