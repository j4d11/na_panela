import { useState } from 'react';

export default function useChefProfile() {
  // Dados fixos do chef (pode futuramente vir de uma API ou Firestore)
  const [chef] = useState({
    name: 'Maria Braga',
    bio: 'Apaixonada por culinária',
    recipes: [
      {
        id: 1,
        title: 'Bolo Red Velvet',
        description: 'Fofinho e gostoso!',
        rating: 4.7,
      },
      {
        id: 2,
        title: 'Brownie Simples',
        description: 'Um clássico!',
        rating: 4.9,
      },
    ],
  });

  return { chef };
}
