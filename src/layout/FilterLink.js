import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'

class Link extends Component{
  render(){
      console.log('_________',this.props)
      const {active, children, onClick } = this.props

      if (active) {
          return <span>{children}</span>
      }

      return (
          <a href="" onClick={e => {
              e.preventDefault()
              onClick()
            }}
          >
            {children}
          </a>
        )
  }
}

function mapStateToProps(state, ownProps){
  console.log('state',state)
  console.log('own',ownProps)
  return{
    active: ownProps.filter === state.visibilityFilter
  }
}


function mapDispatchToProps(dispatch, ownProps){
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
