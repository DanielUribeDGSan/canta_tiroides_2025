interface Props {
  error: string;
}

const ErrorMsg = ({ error }: Props) => {
  return (
    <>
      <p style={{ color: '#ff5a5a', marginTop: '10px', fontSize: '1rem' }}>
        {error}
      </p>
    </>
  );
};

export default ErrorMsg;
