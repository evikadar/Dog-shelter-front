import * as React from "react";

class DogImage extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <img className={this.props.imageClassName} src={this.props.imagePath}
                     alt="dog"/>
            </div>
        )
    }

}

export default DogImage;