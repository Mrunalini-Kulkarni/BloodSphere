export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    email: string;
    name: string;
    points: number;
    isAdmin: boolean;
    donationHistory: {
      date: string;
      points: number;
      type: string;
    }[];
  } | null;
}