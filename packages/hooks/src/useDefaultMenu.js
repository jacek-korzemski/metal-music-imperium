const useDefaultMenu = () => {
  return [
    { name: 'Strona główna', href: '/' },
    { name: 'Recenzje', href: '/recenzje' },
    { name: 'Relacje', href: '/relacje' },
    { name: 'Zapowiedzi', href: '/zapowiedzi' },
    { name: 'Wideo', href: '/wideo' },
    { name: 'Sprzęt', href: '/sprzet' },
    { name: 'Inne', href: '/inne' },
  ];
};

export default useDefaultMenu;
