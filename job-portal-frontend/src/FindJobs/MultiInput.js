import { Component } from "react";
import Select, { components } from "react-select";

class MultiInput extends Component {
  state = {
    values: [],
    optionSelected: null
  };


  handleChange = (values, selected) => {
    this.setState({ values });
    this.setState({ selected });
  };

  render() {
    const { values } = this.state;

    const colourOptions = this.props.options;
  
    const selectedVals = values.map((x) => x.value);
    const hiddenOptions =
      selectedVals.length > 3 ? selectedVals.slice(0, 3) : [];
    const options = colourOptions.filter(
      (x) => !hiddenOptions.includes(x.value)
    );

    return (
      <div>
        
        <Select
          //unstyled={true}
          closeMenuOnSelect={false}
          isMulti
          placeholder={ this.props.title }
          options={options}
          onChange={this.handleChange}
          value={values}
          components={{ MultiValue }} //, Option }}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              //borderColor: 'red',
              border: 0,
              boxShadow: 'none',
              backgroundColor: '#2d2d2d',
              textEmphasisColor: '#f6f6f6'
              
            }),
            option: (styles) => {
                return {
                  ...styles,
                  color: 'black'
                  //backgroundColor: '#2d2d2d'
                };
              },
              indicatorSeparator: (base) => ({
                ...base,
                display: "none",
              }),
          }}
          
        />
      </div>
    );
  }
}

export default MultiInput;

/*
const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
*/

const MoreSelectedBadge = ({ items }) => {
  const style = {
    marginLeft: "auto",
    background: "#d4eefa",
    borderRadius: "4px",
    fontFamily: "Open Sans",
    fontSize: "11px",
    padding: "3px",
    order: 99
  };

  const title = items.join(", ");
  const length = items.length;
  const label = `+ ${length} item${length !== 1 ? "s" : ""} selected`;

  return (
    <div style={style} title={title}>
      {label}
    </div>
  );
};

const MultiValue = ({ index, getValue, ...props }) => {
  const maxToShow = 1;
  const overflow = getValue()
    .slice(maxToShow)
    .map((x) => x.label);

  return index < maxToShow ? (
    <components.MultiValue {...props} />
  ) : index === maxToShow ? (
    <MoreSelectedBadge items={overflow} />
  ) : null;
};
