export const inputStyle = {
    control: (base: any) => ({
        ...base,
        height: 50,
      }),
    input: (provided: any) => ({
    ...provided,
    margin: '0px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
      }),
    indicatorsContainer: (provided: any) => ({
        ...provided,
        height: '45px',
    }),
    dropdownIndicator: (provided: any)=>({
        ...provided,
        color: 'black'
    }),
    valueContainer: (provided: any)=>({
        ...provided,
        textAlign: 'start'
    })  
};

export const defaultStyle = {
    control: (base: any) => ({
        ...base,
        height: 30,
      }),
    input: (provided: any) => ({
    ...provided,
    margin: '0px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
      }),
    indicatorsContainer: (provided: any) => ({
        ...provided,
        height: '35px',
    }),
    dropdownIndicator: (provided: any)=>({
        ...provided,
        color: 'black'
    }),
    valueContainer: (provided: any)=>({
        ...provided,
        textAlign: 'start'
    })  
};