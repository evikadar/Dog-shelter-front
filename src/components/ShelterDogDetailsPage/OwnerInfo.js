import * as React from "react";

class OwnerInfo extends React.Component {
    render() {
        let ownerInfo = this.props.ownerInfo;
        return (
            <div className={this.props.className}>
                <h3>Owner/Candidate information</h3>
                {ownerInfo ? (
                    <div>
                        <div>
                            <h4>Name</h4>
                            <div>{ownerInfo.name}</div>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <div>{ownerInfo.phoneNumber}</div>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <div>{ownerInfo.name}</div>
                        </div>
                    </div>
                ) : <div>No information</div>}
            </div>
        )
    }
}

export default OwnerInfo;