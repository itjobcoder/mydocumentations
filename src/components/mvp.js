import PropTypes from 'prop-types';
import {withRouter} from '@docusaurus/router';

class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const {match, location, history} = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
