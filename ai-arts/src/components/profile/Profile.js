import React from 'react';

import styles from './Profile.module.css';

const Profile = () => {
    return (
        <section className={styles.profile_section}>
            <div className={styles.change_section}>
                <h2>Change Email</h2>
                <form action="/">
                    <div className={styles.input_field}>
                        <label htmlFor="new-email">New Email</label>
                        <input type="email" name="new-email" placeholder='admin@admin.com' required />
                    </div>
                    <div className={styles.input_field}>
                        <label htmlFor="repeat-email">New Email Repeat</label>
                        <input type="email" name="repeat-email" placeholder='admin@admin.com' required />
                    </div>
                    <div className={styles.input_field}>
                        <label htmlFor="new-email">New Email</label>
                        <input type="pasword" name="new-email" placeholder='.......' required />
                    </div>

                    <button type='submit'>Change Email</button>
                </form>
            </div>

            <div className={styles.change_section}>
                <h2>Change Password</h2>
                <form action="/">
                    <div className={styles.input_field}>
                        <label htmlFor="current-password">Current Password</label>
                        <input type="email" name="current-password" required />
                    </div>
                    <div className={styles.input_field}>
                        <label htmlFor="new-password">New Password</label>
                        <input type="email" name="new-password" required />
                    </div>
                    <div className={styles.input_field}>
                        <label htmlFor="repeat-password">Repeat New Password</label>
                        <input type="pasword" name="repeat-password" required />
                    </div>

                    <button type='submit'>Change Password</button>
                </form>
            </div>

            <div className={styles.change_section}>
                <h2>Change Username</h2>
                <form action="/">
                    <div className={styles.input_field}>
                        <label htmlFor="change-username">Change Username</label>
                        <input type="email" name="change-username" required />
                    </div>

                    <button type='submit'>Change Username</button>
                </form>
            </div>
        </section>
    )
}

export default Profile
