import * as React from "react";

class OwnerInfo extends React.Component {
    render() {
        let ownerInfo = this.props.ownerInfo;
        return (
            <div className={this.props.className}>
                <h4>Owner/Candidate information</h4>
                {ownerInfo ? (
                    <div>
                        <div className={"my-3"}>
                            <h5>Name</h5>
                            <div>{ownerInfo.name}</div>
                        </div>
                        <div className={"my-3"}>
                            <h5>Phone</h5>
                            <div>{ownerInfo.phoneNumber}</div>
                        </div>
                        <div className={"my-3"}>
                            <h5>Email</h5>
                            <div>{ownerInfo.email}</div>
                        </div>
                    </div>
                ) : <div>No information</div>}
            </div>
        )
    }
}

export default OwnerInfo;