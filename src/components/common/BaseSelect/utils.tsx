export const inputStyle = {
    control: (base: any) => ({
        ...base,
        height: 50,
      }),
    input: (provided: any, state: any) => ({
    ...provided,
    margin: '0px',
    }),
    indicatorSeparator: (state: any) => ({
        display: 'none',
      }),
    indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        height: '45px',
    }),
    dropdownIndicator: (provided: any, state: any)=>({
        ...provided,
        color: 'black'
    }),
    valueContainer: (provided: any, stat1: any)=>({
        ...provided,
        textAlign: 'start'
    })  
};

export const defaultStyle = {
    control: (base: any) => ({
        ...base,
        height: 30,
      }),
    input: (provided: any, state: any) => ({
    ...provided,
    margin: '0px',
    }),
    indicatorSeparator: (state: any) => ({
        display: 'none',
      }),
    indicatorsContainer: (provided: any, state: any) => ({
        ...provided,
        height: '35px',
    }),
    dropdownIndicator: (provided: any, state: any)=>({
        ...provided,
        color: 'black'
    }),
    valueContainer: (provided: any, stat1: any)=>({
        ...provided,
        textAlign: 'start'
    })  
};