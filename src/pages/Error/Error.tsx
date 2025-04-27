import React from 'react';
import { useRouteError, isRouteErrorResponse, NavLink } from 'react-router-dom';
import styles from './Error.module.css';
import Button from '../../components/Home/Button/Button';

export default function Error() {
    const error = useRouteError();

    let title = "Something went wrong!";
    let message = "An unexpected error occurred. Please try again later.";

    if (!error) {
      title = "404 Not Found";
      message = "The page you are looking for does not exist.";
    }
    else if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = "404 Not Found";
            message = "The page you are looking for does not exist.";
        } else if (error.status === 401) {
            title = "401 Unauthorized";
            message = "You are not authorized to view this page.";
        } else if (error.status === 500) {
            title = "500 Server Error";
            message = "Something went wrong on our server.";
        } else {
            title = `${error.status} Error`;
            message = error.statusText;
        }
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = (error as Error).message;
    }

    return (
        <div className={styles.error}>
            <h1 className={styles.errorTitle}>{title}</h1>
            <p className={styles.errorMessage}>{message}</p>
            <NavLink to="/">
                <Button name="Back to home page" />
            </NavLink>
        </div>
    );
}
