import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => {
        toast.success('Congrasts Al Amin Miah. You can show the toast !', { position: toast.POSITION.TOP_CENTER });
        // toast.warning('Danger');
    }

    return (
        <div>
            <button onClick={notify}>Toast</button>
            <ToastContainer />
        </div>
    );
};

export default Toast;