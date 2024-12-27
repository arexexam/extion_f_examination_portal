import { Logo } from '../components/Logo';
import { LoginForm } from '../components/LoginForm';

export function Login() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="text-center mb-8">
        <Logo />
        <h1 className="mt-4 text-2xl font-bold text-white">
          Extion Examination Portal: Login
        </h1>
      </div>
      <LoginForm />
    </div>
  );
}