import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (values) => console.log(values);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            Email: <br />
            <input
                {...register('email', {
                    required: 'Harus diisi',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email tidak valid',
                    },
                })}
            />
            <br />
            {errors.email && errors.email.message} <br />
            Username: <br />
            <input {...register('username', { validate: (value) => value !== 'admin' || 'Percobaan yang bagus!' })} />
            <br />
            {errors.username && errors.username.message} <br />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default App;
