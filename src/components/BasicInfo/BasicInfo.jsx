import styles from './BasicInfo.module.css'
import React from 'react'

class BasicInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return(
            <div className={styles.basicInfo}>
                Name: {this.props.name},
                Number: {this.props.number},
                Date of Birth: {this.props.dob}
            </div>
           
        )
    }
}

export default BasicInfo