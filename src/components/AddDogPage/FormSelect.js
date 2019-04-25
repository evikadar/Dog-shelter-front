import React from "react";


class FormSelect extends React.Component {

    render() {
        let options = this.props.options.map((option) => {
            return <option key={option.label} value={option.value}>{option.label}</option>;
        });
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.labelName} {this.props.required ? (<span style={{color: 'red'}}>* required</span>) : null}</label>
                <select value={this.props.value} required={this.props.required} className={this.props.className}
                        id={this.props.id} name={this.props.name} onChange={this.props.onChange}>
                    <option disabled={this.props.defaultDisabled} value="">{this.props.placeholderText}</option>
                    {options}
                </select>
            </div>
        )
    }
}

export default FormSelect;