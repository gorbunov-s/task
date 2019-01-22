const navigation = {
  main: [
    {
      id: 'home',
      text: 'Home',
      path: '/',
      exact: true,
    },
    {
      id: 'items',
      text: 'Items',
      path: '/items',
      redirect: '/items/info',
    },
  ],
  side: [
    {
      id: 'info',
      text: 'Info',
      path: '/items/info',
    },
    {
      id: 'item1',
      text: 'Item1',
      path: '/items/item1',
    },
    {
      id: 'item2',
      text: 'Item2',
      path: '/items/item2',
    },
  ],
};

export default navigation;
