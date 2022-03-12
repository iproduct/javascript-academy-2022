import { useFormikContext } from "formik";

export const DisplayFormikState = () => {
    const myprops = useFormikContext();
    return (
      <div style={{ margin: '1rem 0' }}>
        <h3 style={{ fontFamily: 'monospace' }} />
        <pre
          style={{
            color: 'black',
            background: '#f6f8fa',
            fontSize: '.65rem',
            padding: '.5rem',
          }}
        >
          <strong>props</strong> = {JSON.stringify(myprops, null, 2)}
        </pre>
      </div>);
  }