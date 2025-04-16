import React from "react"
import { useForm } from "react-hook-form";
import styles from "./CheckOut.module.css";
function checkOut() {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();

    const onSubmit = () => {
           // BlogService.putBlog(data,id)
    };
    return (
        <section id={styles.checkOut}>
            <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>


                <label htmlFor="First Name">First Name<span className={styles.red}>*</span></label>
                <input
                    type="text"
                    id="FirstName"
                    className={`${styles["FirstName"]} ${errors.FirstName ? styles.error : ""}`}
                    //placeholder="First Name"
                    {...register("FirstName", {
                        required: "First Name is required",
                        pattern: {
                            value: /^[^\d][a-zA-Z\u0600-\u06FF\s]+$/,
                            message: "First Name must not start with a number and can only contain English or Arabic letters",
                        },
                        maxLength: {
                            value: 10,
                            message: "First Name cannot exceed 10 characters",
                        },
                    })}
                    onKeyUp={() => trigger("FirstName")}
                />
                <div id={styles["FirstName"]} className={styles.errorMessage}>
                    {errors.FirstName && <span>{errors.FirstName.message as string}</span>}
                </div>


                <label htmlFor="StreetAddress">Street Address<span className={styles.red}>*</span></label>
                <input
                    type="text"
                    id="StreetAddress"
                    className={`${styles["StreetAddress"]} ${errors.StreetAddress ? styles.error : ""}`}
                    //placeholder="Street Address"
                    {...register("StreetAddress", {
                        required: "Street Address is required",
                        pattern: {
                            value: /^[a-zA-Z0-9\s,.-]+$/,
                            message: "Street Address can only contain letters, numbers, spaces, commas, periods, and hyphens",
                        },
                        maxLength: {
                            value: 50,
                            message: "Street Address cannot exceed 50 characters",
                        },
                    })}
                    onKeyUp={() => trigger("StreetAddress")}
                />
                <div id={styles["StreetAddress"]} className={styles.errorMessage}>
                    {errors.StreetAddress && <span>{errors.StreetAddress.message as string}</span>}
                </div>

                <label htmlFor="City">City<span className={styles.red}>*</span></label>
                <input
                    type="text"
                    id="City"
                    className={`${styles["City"]} ${errors.City ? styles.error : ""}`}
                    //placeholder="City"
                    {...register("City", {
                        required: "City is required",
                        pattern: {
                            value: /^[a-zA-Z\u0600-\u06FF\s]+$/,
                            message: "City can only contain English or Arabic letters and spaces",
                        },
                        maxLength: {
                            value: 50,
                            message: "City cannot exceed 50 characters",
                        },
                    })}
                    onKeyUp={() => trigger("City")}
                />
                <div id={styles["City"]} className={styles.errorMessage}>
                    {errors.City && <span>{errors.City.message as string}</span>}
                </div>

                <label htmlFor="PhoneNumber">Phone Number<span className={styles.red}>*</span></label>
                <input
                    type="text"
                    id="PhoneNumber"
                    className={`${styles["PhoneNumber"]} ${errors.PhoneNumber ? styles.error : ""}`}
                    //placeholder="Phone Number"
                    {...register("PhoneNumber", {
                        required: "Phone Number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone Number must be exactly 10 digits",
                        },
                    })}
                    onKeyUp={() => trigger("PhoneNumber")}
                />
                <div id={styles["PhoneNumber"]} className={styles.errorMessage}>
                    {errors.PhoneNumber && <span>{errors.PhoneNumber.message as string}</span>}
                </div>

                <label htmlFor="EmailAddress">Email Address<span className={styles.red}>*</span></label>
                <input
                    type="text"
                    id="EmailAddress"
                    className={`${styles["EmailAddress"]} ${errors.EmailAddress ? styles.error : ""}`}
                    //placeholder="Email Address"
                    {...register("EmailAddress", {
                        required: "Email Address is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address format",
                        },
                    })}
                    onKeyUp={() => trigger("EmailAddress")}
                />
                <div id={styles["EmailAddress"]} className={styles.errorMessage}>
                    {errors.EmailAddress && <span>{errors.EmailAddress.message as string}</span>}
                </div>
                <input type="submit" value= "submit"/>
            </form>



            <div className="Order">
                Hamza

            </div>
        </section>
    );
}
export default checkOut;