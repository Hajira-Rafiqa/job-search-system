import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const SelectInput = (props) => {

  const defaults = props.form.getValues(props.name);

  useEffect(()=>{
    setOptions(props.options.map((option) => createOption(option)));  
  }, [])


  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState();

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
     
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  };

  // console.log(options);

  return (
    <div>

    <p className="text-sm"> {props.label} <a class="text-red-600">*</a></p>

    <CreatableSelect 
      maxMenuHeight={200}
      placeholder={ props.placeholder }
      defaultValue={{ value: defaults, label: defaults }}
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => {setValue(newValue)
        props.form.setValue(props.name, newValue.label);
        //added
        //props.form.setFieldValue(props.name, newValue.value);
      }}
      onCreateOption={handleCreate}
      options={options}
      value={value}
      styles={{
        control: (provided) => ({
          ...provided,
          boxShadow: "none",
          backgroundColor: '#2d2d2d' ,
          borderColor: '#3d3d3d',
          '&:hover': { borderColor: '#ffbd20' },
          width:"100%",
          textEmphasisColor: '#f6f6f6',
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: "none",
        }),
        option: (styles) => {
            return {
              ...styles,
              color: 'black',
              '&:hover': { borderColor: '#ffbd20' },
              fontSize: 15
              
              //backgroundColor: '#2d2d2d'
            };
        },
        singleValue: (provided) => ({
            ...provided,
            color: "#b0b0b0",
            // specify a fallback color here for those values not accounted for in the styleMap
          }),
      }}
    />

    </div>
    
  );
}

export default SelectInput;