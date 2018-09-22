import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'

const Listofusers = () => {
    return (
        <div>
            <p>List of users:</p>
            {props.users.map(user => {
                return <Users user={user} />
            })}            
        </div>
    )}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}    

export default connect(
    mapStateToProps,
)(Listofusers)