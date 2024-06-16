import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/userForm.css';

const UserForm = ({ createUser, update, updateUser, setUpdate, isShow, setIsShow }) => {

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        reset(update);
    }, [update]);

    const submit = (data) => {
        if (update) {
            updateUser('/users', update.id, data);
            setUpdate();
        } else {
            createUser('/users', data)

        }

        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setIsShow(false);
    }

    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setIsShow(false);
        setUpdate();
    }

    return (
        <div className={`userform ${isShow && 'active'}`}>
            <form className='userform_from' onSubmit={handleSubmit(submit)}>
                <div className='userform_header'>
                    <h2>
                        {
                            update ?
                                'Update User'
                                :
                                'New User'
                        }
                    </h2>
                    <button onClick={handleClose}
                        className='userform_close' type='button'>✖️</button>
                </div>
                <div className='userform_item'>
                    <lebel htmlFor='firs_name'>first name</lebel>
                    <input {...register('first_name')} id='first_name' type='text' />
                </div>
                <div className='userform_item'>
                    <lebel htmlFor='last_name'>last name</lebel>
                    <input {...register('last_name')} id='last_name' type='text' />
                </div>
                <div className='userform_item'>
                    <lebel htmlFor='email'>Email</lebel>
                    <input {...register('email')} id='email' type='email' />
                </div>
                <div className='userform_item'>
                    <lebel htmlFor='password'>Password</lebel>
                    <input {...register('password')} id='password' type='password' />
                </div>
                <div className='userform_item'>
                    <lebel htmlFor='birthday'>Birthday</lebel>
                    <input {...register('birthday')} id='birthday' type='date' />
                </div>
                <button className=' userform_btn'>
                        {
                            update ?
                                'Update User'
                                :
                                'Add new User'
                        }
                </button>
            </form>
        </div>
    )
}

export default UserForm;
