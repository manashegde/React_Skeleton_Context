import React from "react"
import Button from "components/Button"
import intl from "react-intl-universal";

export default class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    //this is in progress -
    render() {
        const {
            className,
            ...rest
        } = this.props;
        
        return (
            <div {...rest} className={className}/>
        )
    }
}