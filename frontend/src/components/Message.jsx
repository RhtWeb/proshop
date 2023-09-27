import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

{/* <Message variant='danger'>{error?.data?.message || error.error}</Message> */}

export default Message;