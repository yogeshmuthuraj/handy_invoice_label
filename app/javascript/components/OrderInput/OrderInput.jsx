import React from "react"
import PropTypes from "prop-types"
class OrderInput extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

OrderInput.propTypes = {
  greeting: PropTypes.string
};
export default OrderInput
