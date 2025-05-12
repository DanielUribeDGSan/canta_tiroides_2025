import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(20).label('Message'),
});
