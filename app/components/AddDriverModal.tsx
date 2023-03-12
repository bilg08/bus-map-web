import React from 'react';
import Button from './Button';
import { H1 } from './Heading';
import Input from './Input';
import { ModalContext } from './Drivers';
import { XMarkIcon } from '@heroicons/react/24/solid';
import colors from '../../utils/colors';
import { object, string } from 'yup';
import { Formik } from 'formik';
function AddDriverModal() {
  const validationSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    phoneNumber: string().required(),
    email: string().required(),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  }
  return (
    <ModalContext.Consumer>
      {theme => {
        return (
          <div className='bg-white rounded-lg p-4 w-4/6 h-3/6'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => { console.log(values)}}
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
                <form onSubmit={handleSubmit} className='flex relative flex-col p-4 gap-4'>
                  <H1>Жолооч бүртгэх</H1>
                  <Input
                  value={values.firstName}
                    onChange={handleChange('firstName')}
                    placeholder='Овог'
                  />
                  <Input
                  value={values.lastName}
                    onChange={handleChange('lastName')}
                    placeholder='Нэр'
                  />
                  <Input
                  value={values.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    placeholder='Утасны дугаар'
                  />
                  <Input
                  value={values.email}
                    onChange={handleChange('email')}
                    placeholder='И-Мэйл'
                  />
                  <Button
                    onClick={() => handleSubmit()}
                    className='bg-primary py-4 justify-center items-center text-white'
                  >
                    Хадгалах
                  </Button>
                  <Button 
                    onClick={() => handleSubmit()}
                    className='absolute top-0 right-0 p-2 text-primary'
                  >
                    <XMarkIcon
                      width={20}
                      height={20}
                      color={colors.primary}
                    />
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