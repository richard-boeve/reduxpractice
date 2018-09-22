import request from 'superagent'

export function fetchUsers(users) {
    return {
        type: 'GET_USERS',
        users
    }
}



export function getUsers () {
    return (dispatch) => {
        request
        .get('/api/user')
        .end((err, res) => {
            if (err) {
              console.error(err.message)
              return
            }
            dispatch(fetchUsers(res.body))
          })
      }
    }