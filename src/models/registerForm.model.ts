export interface RegisteredUser {
  name: string; // Imię
  surname: string; // Nazwisko
  email: string; // E-mail
  phone: string | null; // Numer telefonu
  password: string; // Hasło
  pet: 'dog' | 'cat' | 'other'; // Zwierzę
  address: {
    city: string; // Miasto
    street: string; // Ulica
    building: string; // Numer domu
    flatNo: string | null; // Numer mieszkania
  };
  consents: {
    newsletter: boolean; // Zgoda na otrzymywanie wiadomości e-mail.
    sms: boolean; // Zgoda na otrzymywanie wiadomości SMS.
  }
}
