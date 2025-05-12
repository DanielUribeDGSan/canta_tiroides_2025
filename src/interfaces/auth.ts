export interface User {
  fullName: string;
  company: string;
  post: string;
  email: string;
  phone: string;
}

export interface UserLogin {
  nombre: string;
  institucion: string;
  cargo: string;
  telefono: string;
  email: string;
  email_verified_at: string;
}

export interface Lenguage {
  idioma: number;
}

export interface ImageUser {
  image: string;
}

export interface ImageProfile {
  profileImage: string;
}

export interface AuthState {
  user: User | object;
}
