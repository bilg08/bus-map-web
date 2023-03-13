import React from 'react';
import Button from './Button';
import { H1 } from './Heading';
import Input from './Input';
import { ModalContext } from './DriversSideBar';
import { XMarkIcon } from '@heroicons/react/24/solid';
import colors from '../../utils/colors';
import { object, string } from 'yup';
import { Formik } from 'formik';
import { addDriver } from '../../utils/firebase.utils';
import { User } from '../../utils/typings';
function AddDriverModal() {
  const validationSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    phoneNumber: string().required(),
    email: string().required().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  }
  async function onSubmit(values: User) {
    const driver = await addDriver(values);
  }
  return (
    <ModalContext.Consumer>
      {theme => {
        return (
          <div className='bg-white w-[400px] rounded-lg p-4  h-auto'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                await onSubmit(values);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className='relative flex flex-col gap-4' onSubmit={handleSubmit}>
                  <H1>Жолооч бүртгэх</H1>
                  <Input
                    placeholder='Нэр'
                    onChange={handleChange('firstName')}
                    value={values.firstName}
                  />
                  <Input
                    placeholder='Овог'
                    onChange={handleChange('lastName')}
                    value={values.lastName}
                  />
                   <Input
                    placeholder='И-Майл'
                    onChange={handleChange('email')}
                    value={values.email}
                  />
                  <Input
                    placeholder='Утасны дугаар'
                    onChange={handleChange('phoneNumber')}
                    value={values.phoneNumber}
                  />
                  <Input
                    placeholder='Нууц үг'
                    onChange={handleChange('password')}
                    value={values.password}
                  />
                  <Button className='bg-primary text-white py-4'>Хадгалах</Button>
                  <Button onClick={theme.closeModal} className='absolute top-0 right-0'>
                    <XMarkIcon color={colors.primary} width={20} height={20}/>
                  </Button>
                </form>
              )}
            </Formik>

          </div>
        )
      }}
    </ModalContext.Consumer>
  )
}

export default AddDriverModal